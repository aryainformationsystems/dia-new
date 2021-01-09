(function (window) {
  window.__env = window.__env || {};

  // API url
  window.__env.apiServer = 'http://localhost:9090';
  window.__env.surveySite = 'http://localhost:4400';

  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.__env.enableDebug = true;
}(this));
