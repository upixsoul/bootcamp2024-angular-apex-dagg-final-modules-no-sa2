import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A3Component } from './a3/a3.component';
import { ZModule } from '../Z/z.module';



@NgModule({
  declarations: [
    A1Component,
    A2Component,
    A3Component
  ],
  imports: [
    CommonModule,
    ZModule
  ]
})
export class AModule { }
