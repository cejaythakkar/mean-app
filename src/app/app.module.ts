import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutListComponent } from './about-list/about-list.component';
import { AboutComponent } from './about-list/about/about.component';
import { ModelComponent } from './shared/model/model.component';
import { AboutService } from './services/about.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutListComponent,
    AboutComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
