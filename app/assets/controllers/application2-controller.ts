// Sample Application 1 Controller
declare var angular: any;

class Application2Controller {
  constructor() {
    console.log("application 2 controller");
  }
}

angular.module("App").controller("Application2Controller", Application2Controller);
