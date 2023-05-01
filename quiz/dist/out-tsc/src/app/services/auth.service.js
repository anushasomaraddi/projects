import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.avail = false;
        this.msg = "";
        this.baseUri = "http://localhost:3000";
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    registerStudent(body) {
        return this.http.post('http://127.0.0.1:3000/registerstudnet', body, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
    registerTeacher(body) {
        return this.http.post('http://127.0.0.1:3000/registerteacher', body, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
    login(body) {
        return this.http.post('http://127.0.0.1:3000/login', body, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
    reset(body) {
        return this.http.post('http://127.0.0.1:3000/reset', body, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
    resetpassworddone(body) {
        return this.http.post('http://127.0.0.1:3000/reset-password-done', body, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    logoutUser() {
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        localStorage.removeItem('admin');
        localStorage.removeItem('student');
        localStorage.removeItem('teacher');
        this.router.navigate(['/']);
    }
    check() {
        return this.http.get(this.baseUri + "/check", { headers: this.headers });
    }
    testdone(body) {
        return this.http.post('http://127.0.0.1:3000/testdone', body, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
    testblock() {
        return this.http.post('http://127.0.0.1:3000/testblock', {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map