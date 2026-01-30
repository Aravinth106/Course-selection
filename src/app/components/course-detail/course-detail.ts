import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Courses, CourseService } from '../../services/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail implements OnInit {
  course: Courses | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    // Get the ID from the URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Find the course in our mock data
    this.course = this.courseService.getCourses().find(c => c.id === id);
  }
}
