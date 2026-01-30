import { Component, OnInit } from '@angular/core';
import { Courses, CourseService } from '../../services/course';
import { CommonModule } from '@angular/common'; // Required for *ngFor in Standalone components
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-list',
  standalone: true, // If you are using Angular 17+
  imports: [CommonModule,RouterModule], 
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  // 1. Declare the property that the HTML is looking for
  courses: Courses[] = [];

  // 2. Inject the service
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    // 3. Populate the array when the component loads
    this.courses = this.courseService.getCourses();
  }
}