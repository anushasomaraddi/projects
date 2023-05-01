import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { LoginTeacherComponent } from './login-teacher.component';
describe('LoginTeacherComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [LoginTeacherComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(LoginTeacherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=login-teacher.component.spec.js.map