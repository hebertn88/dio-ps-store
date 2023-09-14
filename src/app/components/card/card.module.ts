import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component';


@NgModule({
  declarations: [
    CardComponent,
    CardLabelComponent,
    CardPricingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
  ]
})
export class CardModule { }
