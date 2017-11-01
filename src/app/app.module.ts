import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ClarityModule } from "clarity-angular";
import { ProjectListComponent } from './project-list/project-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    WelcomeComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    AngularFireModule.initializeApp(masterFirebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ClarityModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
