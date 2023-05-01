import { TestBed } from '@angular/core/testing';
import { StudentGuard } from './student.guard';
describe('StudentGuard', () => {
    let guard;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(StudentGuard);
    });
    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
//# sourceMappingURL=student.guard.spec.js.map