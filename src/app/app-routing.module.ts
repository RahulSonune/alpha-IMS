import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { EditFeesComponent } from './edit-fees/edit-fees.component';
import { FeesComponent } from './fees/fees.component';
import { HolidayComponent } from './holiday/holiday.component';


// const routes: Routes = [{ path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
// { path: 'holiday', loadChildren: () => import('./holiday/holiday.module').then(m => m.HolidayModule) }];

const routes: Routes = [{ path: 'department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) }, 
                        { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) },
                        { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
                        {path:'holiday',component:HolidayComponent},
                        {path:'add-holiday',component:AddHolidayComponent},
                        {path:'fees',component:FeesComponent},
                        {path:'add-fees',component:AddFeesComponent},
                        {path:'edit-fees',component:EditFeesComponent},
                        { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
