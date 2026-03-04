import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { WorkExperience } from './work-experience/work-experience';
import { Education } from './education/education';
import { Language } from './language/language';
import { Skills } from './skills/skills';
import { Certificate } from './certificate/certificate';
import { Interests } from './interests/interests';

@NgModule({
  declarations: [
    App,
    Header,
    WorkExperience,
    Education,
    Language,
    Skills,
    Certificate,
    Interests
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
