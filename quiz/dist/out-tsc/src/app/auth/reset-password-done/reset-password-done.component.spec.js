import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ResetPasswordDoneComponent } from './reset-password-done.component';
describe('ResetPasswordDoneComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [ResetPasswordDoneComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ResetPasswordDoneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reset-password-done.component.spec.js.map