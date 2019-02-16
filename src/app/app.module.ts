import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule,Routes} from '@angular/router'
import { TestModule} from './test.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { employeeCountComponent } from './employee/employeeCount.component';
import {HomeComponent} from './home/home.component'
import { PageNotFoundComponent} from './pageNotFound.component'
import { EmployeeComponent} from './employee/employee.component'
import { EmployeeService } from './employee/employee.service'

const appRoutes:Routes=[
{path:'home',component:HomeComponent},
{path:'employees',component:EmployeeListComponent},
{path:'employees/:code',component:EmployeeComponent},
{path:'', redirectTo:'/home',pathMatch:'full'},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,EmployeeListComponent,employeeCountComponent,HomeComponent,
    PageNotFoundComponent,EmployeeComponent
  ],
  imports: [
    TestModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    HttpModule,RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
