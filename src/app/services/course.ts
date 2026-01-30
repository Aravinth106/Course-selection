import { Injectable } from '@angular/core';

export interface Courses {
  id: number;
  title: string;
  category: string; // DESIGN, SKILLS, TECHNOLOGY, etc.
  description: string;
  lessons: number;
  workshops: number;
  colorClass: string; 
  instructor: string;
}

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  getCourses(): Courses[] {
    return [
      { id: 1, title: 'Modern Art and Design', category: 'DESIGN', description: '', lessons: 10, workshops: 3, colorClass: 'bg-yellow', instructor: '' },
      { id: 2, title: 'Presentation', category: 'SKILLS', description: 'Presenting information clearly...', lessons: 0, workshops: 0, colorClass: 'bg-pink', instructor: '' },
      { id: 3, title: 'Artificial Intelligence', category: 'TECHNOLOGY', description: '', lessons: 22, workshops: 8, colorClass: 'bg-purple', instructor: '' },
      { id: 4, title: 'About Social Media Course', category: 'BUSINESS', description: 'This course gives you an overview...', lessons: 0, workshops: 0, colorClass: 'bg-blue', instructor: '' }
    ];
  }
}
