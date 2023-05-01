import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
let TeacherService = class TeacherService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.avail = false;
        this.msg = "";
        this.baseUri = "http://localhost:3000/teacher/";
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    createQuiz(body) {
        return this.http.post(this.baseUri + "createquiz", body, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
    getuploadquiz() {
        return this.http.get(this.baseUri + "getuploadquiz", { headers: this.headers });
    }
    gethomequiz() {
        return this.http.get(this.baseUri + "gethomequiz", { headers: this.headers });
    }
    seestudent() {
        return this.http.get(this.baseUri + "seestudent", { headers: this.headers });
    }
    blockuser(id) {
        return this.http.delete(this.baseUri + "blockuser/" + id, { headers: this.headers });
    }
    unblockuser(id) {
        return this.http.delete(this.baseUri + "unblockuser/" + id, { headers: this.headers });
    }
    setQuizId(id) {
        this.quizid = id;
    }
    getQuizId() {
        return this.quizid;
    }
    deletequiz(id) {
        return this.http.delete(this.baseUri + "deletequiz/" + id, { headers: this.headers });
    }
    uploadquiz(body) {
        return this.http.post(this.baseUri + "uploadquiz", { id: body }, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
    addQuestion(body) {
        return this.http.post(this.baseUri + "addquestion", body, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
    getAllQuestion(id) {
        return this.http.get(this.baseUri + "getallquestion/" + id, { headers: this.headers });
    }
    deleteQuestion(id) {
        return this.http.delete(this.baseUri + "deletequestion/" + id, { headers: this.headers });
    }
    setDelete(data) {
        this.delete = data;
    }
    getDelete() {
        return this.delete;
    }
};
TeacherService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TeacherService);
export { TeacherService };
//# sourceMappingURL=teacher.service.js.map