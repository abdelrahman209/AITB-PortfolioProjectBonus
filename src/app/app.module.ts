import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { TheBackgroundComponent } from './the-background/the-background.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AngularComponent } from './angular/angular.component';
import { AwsComponent } from './aws/aws.component';
import { MyWorkComponentComponent } from './my-work-component/my-work-component.component';
import { SkillsComponentComponent } from './skills-component/skills-component.component';

@NgModule({
  declarations: [
    AppComponent,
    
    NavBarComponentComponent,
         TheBackgroundComponent,
         AboutMeComponent,
         AngularComponent,
         AwsComponent,
         MyWorkComponentComponent,
         SkillsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
