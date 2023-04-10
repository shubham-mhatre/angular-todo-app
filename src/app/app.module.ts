import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoComponent } from './todo/todo.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { DialogsModule } from "@progress/kendo-angular-dialog";
import { LabelModule } from "@progress/kendo-angular-label";
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { UtilsModule } from "@progress/kendo-angular-utils";
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    DialogsModule,
    LabelModule,
    ButtonModule,
    UtilsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
