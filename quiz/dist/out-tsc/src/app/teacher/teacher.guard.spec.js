import { TestBed } from '@angular/core/testing';
import { TeacherGuard } from './teacher.guard';
describe('TeacherGuard', () => {
    let guard;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(TeacherGuard);
    });
    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
//# sourceMappingURL=teacher.guard.spec.js.map