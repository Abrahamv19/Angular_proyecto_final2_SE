import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { UserDetailComponent } from './dashboard/pages/users/components/user-detail/user-detail.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';
import { StudentsComponent } from './dashboard/pages/students/students.component';
import { EnrollmentsComponent } from './dashboard/pages/enrollments/enrollments.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        path: 'enrollments',
        component: EnrollmentsComponent,
      },
      {
        path: 'users/detail/:id',
        component: UserDetailComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
