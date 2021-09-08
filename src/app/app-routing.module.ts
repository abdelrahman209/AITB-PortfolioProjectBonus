import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AngularComponent } from './angular/angular.component';
import { AwsComponent } from './aws/aws.component';
import { MyWorkComponentComponent } from './my-work-component/my-work-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { SkillsComponentComponent } from './skills-component/skills-component.component';
import { TheBackgroundComponent } from './the-background/the-background.component';

const routes: Routes = [
  {path: 'about',component :AboutMeComponent},
  {path: 'home', component : TheBackgroundComponent},
  {path: 'myWork', component : MyWorkComponentComponent},
  {path: 'skill', component : SkillsComponentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
