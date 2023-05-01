import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
let AdminService = class AdminService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.avail = false;
        this.msg = "";
        this.baseUri = "http://localhost:3000/admin/";
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    seestudent() {
        return this.http.get(this.baseUri + "seestudent", { headers: this.headers });
    }
    seeteacher() {
        return this.http.get(this.baseUri + "seeteacher", { headers: this.headers });
    }
    blockuser(id) {
        return this.http.delete(this.baseUri + "blockuser/" + id, { headers: this.headers });
    }
    unblockuser(id) {
        return this.http.delete(this.baseUri + "unblockuser/" + id, { headers: this.headers });
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
    setDelete(data) {
        this.delete = data;
    }
    getDelete() {
        return this.delete;
    }
    getAllQuestion(id) {
        return this.http.get(this.baseUri + "getallquestion/" + id, { headers: this.headers });
    }
    deletequiz(id) {
        return this.http.delete(this.baseUri + "deletequiz/" + id, { headers: this.headers });
    }
    deleteQuestion(id) {
        return this.http.delete(this.baseUri + "deletequestion/" + id, { headers: this.headers });
    }
};
AdminService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AdminService);
export { AdminService };
//# sourceMappingURL=admin.service.js.map