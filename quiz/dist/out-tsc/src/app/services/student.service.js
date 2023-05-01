import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
let StudentService = class StudentService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.avail = false;
        this.msg = "";
        this.baseUri = "http://localhost:3000/student/";
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    getAllQuiz() {
        return this.http.get(this.baseUri + "getallquiz", { headers: this.headers });
    }
    setQuizId(id) {
        this.quizid = id;
    }
    getQuizId() {
        return this.quizid;
    }
    getAllQuestion(id) {
        return this.http.get(this.baseUri + "getallquestion/" + id, { headers: this.headers });
    }
    block() {
        return this.http.put(this.baseUri + "blockme", {}, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
};
StudentService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StudentService);
export { StudentService };
//# sourceMappingURL=student.service.js.map