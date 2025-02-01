import { Routes } from '@angular/router';
import { SignInComponent } from '../pages/login/sign-in/sign-in.component';
import { MainComponent } from '../pages/user/home/home.component';
import { CoursesComponent } from '../pages/user/home/courses/courses.component';
import { HomeComponent } from '../pages/user/home/home/home.component';
import { ScholarshipsComponent } from '../pages/user/home/scholarships/scholarships.component';
import { PlansComponent } from '../pages/user/home/plans/plans.component';

export const routes: Routes = [
        {
                path: '',
                redirectTo: '',
                pathMatch: 'full'
        },
        {
                path: '',
                component: MainComponent,
                children: [
                        {
                                path: '',
                                redirectTo: '',
                                pathMatch: 'full'
                        },
                        {
                                path:'',
                                title:'Home',
                                component:HomeComponent

                        },
                        {
                                path: 'courses',
                                title: 'Cursos',
                                component: CoursesComponent,
                        },
                        {
                                path: 'scholarships',
                                title: 'Becas',
                                component: ScholarshipsComponent,
                        },
                        {
                                path: 'plans',
                                title: 'Planes',
                                component: PlansComponent,
                        }
                ]
        },
        {
                path: 'register',
                component: SignInComponent,
                title: 'Login'
        }

];
