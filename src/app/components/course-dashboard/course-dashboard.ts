import { Component, OnInit } from '@angular/core';
import { Courses, CourseService } from '../../services/course';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-dashboard',
  imports: [CommonModule,RouterModule],
  templateUrl: './course-dashboard.html',
  styleUrl: './course-dashboard.css',
})
export class CourseDashboard implements OnInit {
  enrolledCourses: Courses[] = [];
  userName: string = "Alex"; // This will eventually come from your Auth service

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    // For now, we'll grab a few mock courses to represent "Enrolled" data
    this.enrolledCourses = this.courseService.getCourses().slice(0, 2);
  }
}