// Sample Application 1 Controller
declare var angular: any;

class SharedController {
  constructor() {
    console.log("shared controller");
  }
}

angular.module("App").controller("SharedController", SharedController);
