import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { ApiResponse } from '../classes/api-response';
import { EnvService } from '../services/env.service';

@Component({
  selector: 'app-survey-dashboard',
  templateUrl: './survey-dashboard.component.html',
  styleUrls: ['./survey-dashboard.component.css'],
})
export class SurveyDashboardComponent implements AfterViewInit {
  displayedColumns: string[] = [];
  surveyDatabase: SurveyHttpDatabase | null;
  data: Survey[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  sortColumn = 'createdAt';
  sortOrder = 1;
  currentPage = 0;
  columns =
    'organization department description startDate endDate createdAt status';
  size = 10;

  constructor(private _httpClient: HttpClient, private envService: EnvService) {
    this.displayedColumns = this.columns.split(' ');
  }

  ngAfterViewInit() {
    this.surveyDatabase = new SurveyHttpDatabase(
      this._httpClient,
      this.envService
    );

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.surveyDatabase!.getSurveys(
            this.sortColumn,
            this.sortOrder,
            this.paginator.pageIndex + 1,
            this.size,
            this.columns
          );
        }),
        map((data) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.count;

          return data.data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      )
      .subscribe((data) => (this.data = data));
  }
}

export interface Survey {
  organization: any;
  department: any;
  description: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  status: number;
}

export class SurveyHttpDatabase {
  constructor(
    private _httpClient: HttpClient,
    private envService: EnvService
  ) {}
  getSurveys(
    sort: string,
    order: number,
    page: number,
    size: number,
    cols: string
  ): Observable<ApiResponse> {
    const baseUrl = this.envService.apiServer;
    const requestUrl = `${baseUrl}/survey/all?sort=${sort}&order=${order}&page=${page}&size=${size}&cols=${cols}`;
    return this._httpClient.post<ApiResponse>(
      requestUrl,
      {},
      {
        headers: { secure: 'true' },
      }
    );
  }
}
