import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css'],
})
export class OrganizationsComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'description', 'region', 'location'];
  dataSource: MatTableDataSource<OrganizationSchema>;
  size = 10;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private organizationService: OrganizationService) {}

  ngAfterViewInit(): void {
    this.organizationService.getAll().subscribe(
      (result) => {
        this.dataSource = new MatTableDataSource<OrganizationSchema>(
          result.data
        );
        this.dataSource.paginator = this.paginator;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

export interface OrganizationSchema {
  _id: string;
  parentOrganization: any;
  name: string;
  description: string;
  revenue: number;
  employeeCount: number;
  adminEmail: [any];
  questionCounter: number;
  isDefault: boolean;
  isActive: boolean;
  region: any;
  location: any;
}
