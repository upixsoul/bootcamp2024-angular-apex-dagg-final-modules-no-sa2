import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import { B3Component } from './b3/b3.component';
import { ZModule } from '../Z/z.module';



@NgModule({
  declarations: [
    B1Component,
    B2Component,
    B3Component
  ],
  imports: [
    CommonModule,
    ZModule
  ]
})
export class BModule { }
