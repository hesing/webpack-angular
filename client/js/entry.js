require('../vendor/angular');
require('../vendor/angular-ui-router');
require('../css/bootstrap.css');
require('../less/app.less');
var ngModule = angular.module('myApp', ['ui.router']);

require('./app-config')(ngModule);
require('./controllers/AppCtrl')(ngModule);
require('./services/UserService')(ngModule);
require('./directives/hello-world')(ngModule);
