import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SeestudentsComponent = class SeestudentsComponent {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.msg = [];
        this.loading = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = false;
        this.getdata();
    }
    getdata() {
        this.teacherService.seestudent()
            .subscribe(data => {
            if (data['user']) {
                this.users = data['user'];
                this.loading = false;
                if (!this.users.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    block(user) {
        var userid = user._id;
        this.teacherService.blockuser(userid).subscribe(data => {
            // console.log(data);
            // this.adminService.avail = true;
            // this.adminService.msg = "Successfully Blocked User!!!";
            // this.router.navigate(['/admin']);
            this.getdata();
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
    unblock(user) {
        var userid = user._id;
        this.teacherService.unblockuser(userid).subscribe(data => {
            this.getdata();
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
};
SeestudentsComponent = __decorate([
    Component({
        selector: 'app-seestudents',
        templateUrl: './seestudents.component.html',
        styleUrls: ['./seestudents.component.css']
    })
], SeestudentsComponent);
export { SeestudentsComponent };
//# sourceMappingURL=seestudents.component.js.map