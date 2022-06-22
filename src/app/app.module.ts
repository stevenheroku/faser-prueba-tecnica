import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material';


@NgModule({
	declarations: [
		AppComponent
	],
	//importo todas las librerias a utilizar.
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
	MatSortModule,
	ReactiveFormsModule,
	MatCheckboxModule
	],
	providers: [  ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
