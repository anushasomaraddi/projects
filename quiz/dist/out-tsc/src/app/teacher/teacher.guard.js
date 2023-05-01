import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let TeacherGuard = class TeacherGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    doSomthing() {
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        localStorage.removeItem('admin');
        localStorage.removeItem('student');
        localStorage.removeItem('teacher');
        this.router.navigate(['/']);
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            if (localStorage.getItem('teacher') == "yes") {
                if (localStorage.getItem('admin') == "no") {
                    if (localStorage.getItem('student') == "no") {
                        return true;
                    }
                    else {
                        this.doSomthing();
                        return false;
                    }
                }
                else {
                    this.doSomthing();
                    return false;
                }
            }
            else {
                this.doSomthing();
                return false;
            }
        }
        else {
            this.doSomthing();
            return false;
        }
    }
};
TeacherGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TeacherGuard);
export { TeacherGuard };
//# sourceMappingURL=teacher.guard.js.map