import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studentnav',
  templateUrl: './studentnav.component.html',
  styleUrls: ['./studentnav.component.css']
})
export class StudentnavComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService,private studentService: StudentService) { }

  ngOnInit(): void {
  }
  logoutuser() {
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }
 
}
