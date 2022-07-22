import { ReportComponent } from './report/report.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {HourlyLogComponent} from "./hourly-log/hourly-log.component";
// import {DailyLogComponent} from "./daily-log/daily-log.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "report", component: ReportComponent
  },
  // {
  //   path: "log/hourly", component: HourlyLogComponent
  // },
  {
    path: "**", redirectTo: "/"
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
