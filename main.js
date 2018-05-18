(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n \n</div>\n<router-outlet></router-outlet>\t\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Observable } from 'rxjs/Observable';
var AppComponent = /** @class */ (function () {
    function AppComponent(http, router) {
        this.http = http;
        this.router = router;
        this.title = 'the world of Angular 5';
        this.restItemsUrl = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.getRestItems();
        //alert(this.restItems);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _patient_patient_component__WEBPACK_IMPORTED_MODULE_5__["PatientComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["ROUTING"]
            ],
            providers: [{ provide: Window, useValue: window }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes, ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTING", function() { return ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");



var AppRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'patient', component: _patient_patient_component__WEBPACK_IMPORTED_MODULE_1__["PatientComponent"] }
];
var ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(AppRoutes);


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n \n  <label>User Name:</label> \n  <input id=\"txtusername\" type=\"text\" name=\"LoginName\" [(ngModel)]='UserName' /><br/><br/>\n  <label>Password:</label> \n  <input id=\"txtpassword\" type=\"text\" name=\"Password\" [(ngModel)]='Password'/><br/><br/>\n  <button  (click)=\"onNavigate()\">Login</button>\n  \n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router) {
        this.http = http;
        this.router = router;
        this.title = 'the world of Angular 5';
        this.restItemsUrl = '';
    }
    LoginComponent.prototype.onNavigate = function () {
        //this.router.navigateByUrl("https://www.google.com");
        this.restItemsUrl = 'http://172.25.89.84/LMHIAService/api/v2/claimSet' + '?UserName=' + this.UserName + '&Password=' + this.Password + '';
        this.getRestItems();
        //this.mywindow = window.open("https://www.google.com", "_blank");
    };
    LoginComponent.prototype.ngOnInit = function () {
        //this.getRestItems();
        //alert(this.restItems);
    };
    // Read all REST Items
    LoginComponent.prototype.getRestItems = function () {
        var _this = this;
        this.restItemsServiceGetRestItems()
            .subscribe(function (restItems) {
            _this.restItems = restItems;
            console.log(_this.restItems);
            console.log(_this.restItems["ControlActEvent"]["Subject"]["Value"][0]["SecurityToken"]);
            _this.SecurityToken = _this.restItems["ControlActEvent"]["Subject"]["Value"][0]["SecurityToken"];
            _this.router.navigate(['/', 'patient'], { queryParams: { SecurityToken: _this.SecurityToken } });
            //console.log(this.restItems);
        });
    };
    // Rest Items Service: Read all REST Items
    LoginComponent.prototype.restItemsServiceGetRestItems = function () {
        return this.http
            .get(this.restItemsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }));
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/patient/patient.component.css":
/*!***********************************************!*\
  !*** ./src/app/patient/patient.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/patient/patient.component.html":
/*!************************************************!*\
  !*** ./src/app/patient/patient.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n Patient View\n</p>\n<div style=\"text-align:left\">\n\n   <label>Search Criteria:</label>\n   <input id=\"txtSearch\" type=\"text\" name=\"SearchIdentifier\" [(ngModel)]='SearchValue' /><br/><br/>\n   <button (click)=\"GetPatient()\">Show Patient List</button>\n   <table class=\"table\">\n    <tr *ngIf=\"PatientDetail?.length > 0\">\n        <th>Patient ID</th>\n        <th>Patient Name</th>\n        <th>Date of Birth</th>\n        <th>Gender</th>\n    </tr>\n    <tr *ngFor=\"let det of PatientDetail; let i = index\">\n        <td>{{det.PatientID}}</td>\n        <td>{{det.PatientName}}</td>\n        <td>{{det.PatientDOB}}</td>\n        <td>{{det.PatientGender}}</td>\n        <td><button (click)=\"ShowAllergy(i)\">Show Allergy</button></td> \n        <td></td>\n        <td ><button (click)=\"ShowProblem(i)\">Show Problem</button></td> \n        \n    </tr>\n    \n</table>\n<table class=\"table\">\n    <tr *ngIf=\"AllergyDetail?.length > 0\">\n        <th>Allergy Details</th>\n    </tr>\n  <tr *ngIf=\"AllergyDetail?.length > 0\">\n      <th>Allergen</th>\n      <th>AllergyType</th>\n      <th>Status</th>\n      <th>Recordedon</th>\n      <th>Confidencelevel</th>\n      <th>Severity</th>\n  </tr>\n  <tr *ngFor=\"let alldet of AllergyDetail; let i = index\">\n      <td>{{alldet.Allergen}}</td>\n      <td>{{alldet.AllergyType}}</td>\n      <td>{{alldet.Status}}</td>\n      <td>{{alldet.Recordedon}}</td>\n      <td>{{alldet.Confidencelevel}}</td>\n      <td>{{alldet.Severity}}</td>\n           \n  </tr>\n  \n  \n</table>\n\n<table class=\"table\">\n  <tr *ngIf=\"ProblemDetail?.length > 0\">\n      <th>Problem Details</th>\n  </tr>\n    <tr *ngIf=\"ProblemDetail?.length > 0\">\n        <th>ProblemName</th>\n        <th>ProblemCode</th>\n        <th>ProblemType</th>\n        <th>Status</th>\n        <th>Certainty</th>\n        \n    </tr>\n  <tr *ngFor=\"let Prbdet of ProblemDetail; let i = index\">\n    <td>{{Prbdet.ProblemName}}</td>\n    <td>{{Prbdet.ProblemCode}}</td>\n    <td>{{Prbdet.ProblemType}}</td>\n    <td>{{Prbdet.Status}}</td>\n    <td>{{Prbdet.Certainty}}</td>\n   \n</tr>\n</table>\n </div>"

/***/ }),

/***/ "./src/app/patient/patient.component.ts":
/*!**********************************************!*\
  !*** ./src/app/patient/patient.component.ts ***!
  \**********************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Router  } from '@angular/router';



//import { HttpClient } from './http-client';
var PatientComponent = /** @class */ (function () {
    function PatientComponent(actrouter, http) {
        this.actrouter = actrouter;
        this.http = http;
    }
    PatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actrouter
            .queryParams
            .subscribe(function (params) {
            _this.securitytoken = params['SecurityToken'];
            console.log("Patient ----- " + _this.securitytoken);
        });
    };
    PatientComponent.prototype.GetPatient = function () {
        //this.router.navigateByUrl("https://www.google.com");
        this.restItemsUrl = 'http://172.25.89.84/LMHIAService/api/v2/patient/' + this.SearchValue;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append('Authorization-Token', this.securitytoken);
        headers.append('Accept', 'application/json+fhir');
        headers.append('Authorization-Type', 'Native');
        this.Headervalue = headers;
        this.getRestItems();
        //this.mywindow = window.open("https://www.google.com", "_blank");
    };
    PatientComponent.prototype.ShowAllergy = function (index) {
        this.restItemsUrl = 'http://172.25.89.84/LMHIAService/api/v2/patient/' + this.PatientDetail[index]["PatientID"]
            + "/AllergyIntolerance";
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append('Authorization-Token', this.securitytoken);
        headers.append('Accept', 'application/json+fhir');
        headers.append('Authorization-Type', 'Native');
        this.Headervalue = headers;
        this.getAllergyItems();
    };
    PatientComponent.prototype.ShowProblem = function (index) {
        this.restItemsUrl = 'http://172.25.89.84/LMHIAService/api/v2/patient/' + this.PatientDetail[index]["PatientID"]
            + "/Condition";
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append('Authorization-Token', this.securitytoken);
        headers.append('Accept', 'application/json+fhir');
        headers.append('Authorization-Type', 'Native');
        this.Headervalue = headers;
        this.getProblemItems();
    };
    // Read all REST Items
    PatientComponent.prototype.getProblemItems = function () {
        var _this = this;
        this.restItemsServiceGetRestItems()
            .subscribe(function (restItems) {
            _this.restItems = restItems;
            console.log(_this.restItems);
            if (_this.restItems["resourceType"] == 'Bundle' && _this.restItems["total"] > 0) {
                var Startindex_1;
                Startindex_1 = 0;
                restItems["entry"].forEach(function (element) {
                    //console.log(element["resource"]["verificationStatus"]);
                    var severity;
                    if (element["resource"]["severity"] != null) {
                        severity = element["resource"]["severity"]["coding"][0]["display"];
                    }
                    if (Startindex_1 == 0) {
                        _this.ProblemDetail = [{
                                ProblemName: element["resource"]["code"]["coding"][0]["display"],
                                ProblemCode: element["resource"]["code"]["coding"][0]["code"],
                                ProblemType: element["resource"]["category"][0]["coding"][0]["display"],
                                Status: element["resource"]["extension"][0]["valueCodeableConcept"]["coding"][0]["display"],
                                Certainty: severity
                            }];
                    }
                    else {
                        _this.ProblemDetail.push({ ProblemName: element["resource"]["code"]["coding"][0]["display"],
                            ProblemCode: element["resource"]["code"]["coding"][0]["code"],
                            ProblemType: element["resource"]["category"][0]["coding"][0]["display"],
                            Status: element["resource"]["extension"][0]["valueCodeableConcept"]["coding"][0]["display"],
                            Certainty: severity });
                    }
                    Startindex_1 = Startindex_1 + 1;
                });
            }
        }
        /*,
        error => {
          this.errors = error;
          console.log("Error log -- " + this.errors[0]);
          //return Observable.of(error);
        },*/
        );
    };
    // Read all REST Items
    PatientComponent.prototype.getAllergyItems = function () {
        var _this = this;
        this.restItemsServiceGetRestItems()
            .subscribe(function (restItems) {
            _this.restItems = restItems;
            console.log(_this.restItems);
            if (_this.restItems["resourceType"] == 'Bundle' && _this.restItems["total"] > 0) {
                var Startindex_2;
                Startindex_2 = 0;
                restItems["entry"].forEach(function (element) {
                    console.log(element["resource"]["verificationStatus"]);
                    var severity;
                    if (element["resource"]["reaction"] != null) {
                        severity = element["resource"]["reaction"][0]["severity"] + "( " + element["resource"]["reaction"][0]["manifestation"][0]["coding"][0]["display"] + ")";
                    }
                    if (Startindex_2 == 0) {
                        _this.AllergyDetail = [{
                                Allergen: element["resource"]["code"]["coding"][0]["display"],
                                AllergyType: element["resource"]["extension"][2]["valueCodeableConcept"]["coding"][0]["display"],
                                Status: element["resource"]["clinicalStatus"],
                                Recordedon: element["resource"]["assertedDate"],
                                Confidencelevel: element["resource"]["verificationStatus"],
                                Severity: severity
                            }];
                    }
                    else {
                        _this.AllergyDetail.push({ Allergen: element["resource"]["code"]["coding"][0]["display"],
                            AllergyType: element["resource"]["extension"][2]["valueCodeableConcept"]["coding"][0]["display"],
                            Status: element["resource"]["clinicalStatus"],
                            Recordedon: element["resource"]["assertedDate"],
                            Confidencelevel: element["resource"]["verificationStatus"],
                            Severity: severity });
                    }
                    Startindex_2 = Startindex_2 + 1;
                });
            }
        }
        /*,
        error => {
          this.errors = error;
          console.log("Error log -- " + this.errors[0]);
          //return Observable.of(error);
        },*/
        );
    };
    // Read all REST Items
    PatientComponent.prototype.getRestItems = function () {
        var _this = this;
        this.restItemsServiceGetRestItems()
            .subscribe(function (restItems) {
            _this.restItems = restItems;
            console.log("Patient details --- " + _this.restItems["resourceType"]);
            console.log("Patient details --- " + _this.restItems["id"]);
            console.log("Patient details --- " + _this.restItems["name"][0]["family"]);
            console.log("Patient details --- " + _this.restItems["birthDate"]);
            console.log("Patient details --- " + _this.restItems["gender"]);
            if (_this.restItems["resourceType"] == 'Patient') {
                _this.PatientDetail = [{
                        PatientID: _this.restItems["id"],
                        PatientName: _this.restItems["name"][0]["family"],
                        PatientDOB: _this.restItems["birthDate"],
                        PatientGender: _this.restItems["gender"]
                    }];
            }
            //console.log(this.restItems["ControlActEvent"]["Subject"]["Value"][0]["SecurityToken"]);
            //this.SecurityToken = this.restItems["ControlActEvent"]["Subject"]["Value"][0]["SecurityToken"];
            //this.router.navigate(['/','patient'],{queryParams: {SecurityToken: this.SecurityToken}}); 
            //console.log(this.restItems);
        }
        /*,
        error => {
          this.errors = error;
          console.log("Error log -- " + this.errors[0]);
          //return Observable.of(error);
        },*/
        );
    };
    // Rest Items Service: Read all REST Items
    PatientComponent.prototype.restItemsServiceGetRestItems = function () {
        return this.http
            .get(this.restItemsUrl, {
            headers: { 'Authorization-Token': this.securitytoken, 'Accept': 'application/json+fhir' }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
        //return this.http
        //.get<any[]>((this.restItemsUrl, this.Headervalue))
        //.pipe(map(Response => Response));
    };
    PatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__(/*! ./patient.component.html */ "./src/app/patient/patient.component.html"),
            styles: [__webpack_require__(/*! ./patient.component.css */ "./src/app/patient/patient.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\xtn8\AngularDemo\myFirstApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map