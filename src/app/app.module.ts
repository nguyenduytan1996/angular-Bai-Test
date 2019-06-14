import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,
                  RouterModule.forRoot([
                      { path: '', component: ParentComponent },
                  ])
                ],
  declarations: [ AppComponent, HelloComponent, ParentComponent, ChildComponent, TopBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
