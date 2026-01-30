import { Routes } from '@angular/router';
import { CourseList } from './components/course-list/course-list';
import { Login } from './components/login/login';
import { Navbar } from './components/navbar/navbar';
import { CourseDashboard } from './components/course-dashboard/course-dashboard';
import { CourseDetail } from './components/course-detail/course-detail';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: 'courses', component: CourseList },
  { path: 'login', component: Login },
  { path: 'navbar', component: Navbar },
  { path: 'dashboard', component: CourseDashboard },
  { path: 'course-detail/:id', component: CourseDetail },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } 
];