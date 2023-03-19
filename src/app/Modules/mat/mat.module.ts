import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {LayoutModule} from '@angular/cdk/layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';

const material=[
  MatSlideToggleModule,
  MatButtonModule,
  MatIconModule,MatToolbarModule,
  MatSidenavModule,
  MatInputModule,
  MatChipsModule,
  ScrollingModule,
  LayoutModule,
  MatMenuModule,
  MatTabsModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
   
  ],
  exports:[
   material
  ]
})
export class MatModule { }
