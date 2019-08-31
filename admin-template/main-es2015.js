(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [fixed]=\"true\">\n  <!-- buttons can be added here ... -->\n</app-header>\n<div class=\"app-body\">\n  <app-sidebar></app-sidebar>\n  <!-- Main content leaving the div content class -->\n  <main class=\"main\">\n    <router-outlet></router-outlet>\n  </main>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/header/header.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/header/header.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- same width as the sidebar -->\n<span class=\"navbar-brand\" style=\"width: 200px\">\n    <strong>Admin-</strong>Dashboard\n</span>\n<button class=\"navbar-toggler sidebar-toggler\" type=\"button\" (click)=\"toggleSideBar()\">\n    <span class=\"navbar-toggler-icon\"></span>\n</button>\n\n<ng-content></ng-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/sidebar/sidebar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/sidebar/sidebar.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n    <nav class=\"sidebar-nav\">\n      <ul class=\"nav\">\n        <li class=\"nav-title\">Nav Title</li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"home\" routerLinkActive=\"active\">\n            <!-- core ui icon -->\n            <i class=\"nav-icon cui-home\"></i> Home\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"table\" routerLinkActive=\"active\">\n            <!-- fontawesome icon -->\n            <i class=\"nav-icon fa fa-table\"></i> Table\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://github.com/sterlp/admin-template\">\n            <!-- fontawesome icon -->\n            <i class=\"nav-icon fa fa-github\"></i> Github\n            <span class=\"badge badge-primary\">NEW</span>\n          </a>\n        </li>\n        <li class=\"nav-item nav-dropdown\" appToggle>\n          <a class=\"nav-link nav-dropdown-toggle\">\n            <!-- material icon -->\n            <mat-icon class=\"nav-icon\">android</mat-icon> Nav dropdown\n          </a>\n          <ul class=\"nav-dropdown-items\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\">\n                  <i class=\"nav-icon cui-puzzle\"></i>Nav dropdown item\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\">\n                <i class=\"nav-icon cui-puzzle\"></i> Nav dropdown item\n              </a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </nav>\n    <button class=\"sidebar-minimizer brand-minimizer\" type=\"button\" (click)=\"doMinimize()\"></button>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page/home/home.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/home/home.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- action bar in breadcrumb -->\n<nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Home</li>\n        <!-- Breadcrumb Menu-->\n        <li class=\"breadcrumb-menu\">\n            <div class=\"btn-group\" role=\"group\">\n                <button mat-button>Click me!</button>\n                <a class=\"btn\" href=\"#\"><i class=\"fa fa-floppy-o\"></i> Save</a>\n                <a class=\"btn\" href=\"#\"><i class=\"cui-action-undo\"></i> Cancel</a>\n            </div>\n        </li>\n    </ol>\n</nav>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm\">\n            <mat-form-field>\n                <input matInput placeholder=\"First Name\">\n            </mat-form-field>\n        </div>\n\n        <div class=\"col-sm\">\n            <mat-form-field>\n                <input matInput placeholder=\"Last Name\">\n            </mat-form-field>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm\">\n            <mat-form-field>\n                <input matInput placeholder=\"City\" name=\"city\">\n            </mat-form-field>\n        </div>\n\n        <div class=\"col-sm\">\n            <mat-form-field>\n                <input type=\"email\" matInput placeholder=\"Email\">\n            </mat-form-field>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page/table/table.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/table/table.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <mat-paginator #paginator\n    [length]=\"dataSource?.data.length\"\n    [pageIndex]=\"0\"\n    [pageSize]=\"5\"\n    [pageSizeOptions]=\"[5, 10, 15, 100]\">\n  </mat-paginator>\n  <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/home/home.component */ "./src/app/page/home/home.component.ts");
/* harmony import */ var _page_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/table/table.component */ "./src/app/page/table/table.component.ts");





const routes = [
    { path: 'home', component: _page_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'table', component: _page_table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'admin-template';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/header/header.component */ "./src/app/dashboard/header/header.component.ts");
/* harmony import */ var _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/sidebar/sidebar.component */ "./src/app/dashboard/sidebar/sidebar.component.ts");
/* harmony import */ var _dashboard_toggle_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/toggle.directive */ "./src/app/dashboard/toggle.directive.ts");
/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/home/home.component */ "./src/app/page/home/home.component.ts");
/* harmony import */ var _page_table_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/table/table.component */ "./src/app/page/table/table.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
            _dashboard_toggle_directive__WEBPACK_IMPORTED_MODULE_7__["ToggleDirective"],
            _page_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _page_table_table_component__WEBPACK_IMPORTED_MODULE_9__["TableComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/header/header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/dashboard/header/header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



/**
 * https://coreui.io/v1/docs/layout/options/
 * Reduced version of:
 * https://github.com/coreui/coreui-angular/tree/master/projects/coreui/angular/src/lib/header
 */
let HeaderComponent = class HeaderComponent {
    constructor(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.fixedClass = 'header-fixed';
        renderer.addClass(hostElement.nativeElement, 'app-header');
        renderer.addClass(hostElement.nativeElement, 'navbar');
    }
    toggleSideBar() {
        const shown = this.document.body.classList.contains('sidebar-lg-show');
        const shownSmall = this.document.body.classList.contains('sidebar-show');
        const smalScreen = window && window.innerWidth <= 992;
        if (smalScreen) {
            if (shownSmall) {
                this.renderer.removeClass(this.document.body, 'sidebar-show');
            }
            else {
                this.renderer.addClass(this.document.body, 'sidebar-show');
            }
        }
        else {
            if (shown || shownSmall) {
                this.renderer.removeClass(this.document.body, 'sidebar-lg-show');
                this.renderer.removeClass(this.document.body, 'sidebar-show');
            }
            else {
                this.renderer.addClass(this.document.body, 'sidebar-lg-show');
            }
        }
    }
    ngOnInit() {
        if (this.fixed)
            this.renderer.addClass(this.document.body, this.fixedClass);
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "fixed", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/dashboard/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
], HeaderComponent);



/***/ }),

/***/ "./src/app/dashboard/sidebar/sidebar.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/sidebar/sidebar.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-icon.mat-icon {\n  font-size: 1.09375rem;\n  vertical-align: text-top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVybHAvZGV2L3dvcmtzZXQvYWRtaW4tdGVtcGxhdGUvc3JjL2FwcC9kYXNoYm9hcmQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaWNvbi5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjA5Mzc1cmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbn0iLCIubmF2LWljb24ubWF0LWljb24ge1xuICBmb250LXNpemU6IDEuMDkzNzVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/sidebar/sidebar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/sidebar/sidebar.component.ts ***!
  \********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



/**
 * https://coreui.io/v1/docs/layout/options/
 */
let SidebarComponent = class SidebarComponent {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
        this.sidebarMinimized = false;
    }
    // make the side bar full hight
    // app-sidebar-nav-divider 
    ngOnInit() {
        this.renderer.addClass(this.document.body, 'sidebar-fixed');
        this.renderer.addClass(this.document.body, 'sidebar-lg-show');
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, 'sidebar-fixed');
        this.renderer.removeClass(this.document.body, 'sidebar-lg-show');
    }
    doMinimize() {
        if (this.sidebarMinimized)
            this.renderer.removeClass(this.document.body, 'sidebar-minimized');
        else
            this.renderer.addClass(this.document.body, 'sidebar-minimized');
        this.sidebarMinimized = !this.sidebarMinimized;
    }
};
SidebarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/dashboard/sidebar/sidebar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
], SidebarComponent);



/***/ }),

/***/ "./src/app/dashboard/toggle.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/toggle.directive.ts ***!
  \***********************************************/
/*! exports provided: ToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleDirective", function() { return ToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * Simple directive which toggles a css class on click. Default is 'open'
 */
let ToggleDirective = class ToggleDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        if (this.appToggle == '')
            this.appToggle = 'open';
    }
    onClick() {
        if (this.el.nativeElement.classList.contains(this.appToggle)) {
            this.renderer.removeClass(this.el.nativeElement, this.appToggle);
        }
        else {
            this.renderer.addClass(this.el.nativeElement, this.appToggle);
        }
    }
};
ToggleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ToggleDirective.prototype, "appToggle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
], ToggleDirective.prototype, "onClick", null);
ToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appToggle]'
    })
], ToggleDirective);



/***/ }),

/***/ "./src/app/page/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/page/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/page/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/page/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/page/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/page/table/table-datasource.ts":
/*!************************************************!*\
  !*** ./src/app/page/table/table-datasource.ts ***!
  \************************************************/
/*! exports provided: TableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDataSource", function() { return TableDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



// TODO: replace this with real data from your application
const EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
];
/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class TableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"] {
    constructor() {
        super();
        this.data = EXAMPLE_DATA;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect() {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(...dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => {
            return this.getPagedData(this.getSortedData([...this.data]));
        }));
    }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getPagedData(data) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getSortedData(data) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    }
}
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/page/table/table.component.scss":
/*!*************************************************!*\
  !*** ./src/app/page/table/table.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVybHAvZGV2L3dvcmtzZXQvYWRtaW4tdGVtcGxhdGUvc3JjL2FwcC9wYWdlL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIuZnVsbC13aWR0aC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/table/table.component.ts":
/*!***********************************************!*\
  !*** ./src/app/page/table/table.component.ts ***!
  \***********************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _table_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-datasource */ "./src/app/page/table/table-datasource.ts");






let TableComponent = class TableComponent {
    constructor() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
    }
    ngOnInit() {
        this.dataSource = new _table_datasource__WEBPACK_IMPORTED_MODULE_5__["TableDataSource"]();
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
], TableComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
], TableComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], { static: false })
], TableComponent.prototype, "table", void 0);
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: __webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/index.js!./src/app/page/table/table.component.html"),
        styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/page/table/table.component.scss")]
    })
], TableComponent);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sterlp/dev/workset/admin-template/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map