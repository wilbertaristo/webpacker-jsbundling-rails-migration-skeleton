// Sample Application 1 Controller
declare var angular: any;

class Application1Controller {
  constructor() {
    console.log("application 1 controller");
  }
}

angular.module("App").controller("Application1Controller", Application1Controller);
