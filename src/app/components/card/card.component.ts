import { Component, Input } from '@angular/core';

type CardType = {
  cardImage: string;
  cardLabel: string;
  cardPricingTitle: string;
  cardPricingConsole: string;
  cardPricingPrice: string;
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})

export class CardComponent {
  @Input() cardProps:CardType = {
    cardImage: '',
    cardLabel: '',
    cardPricingTitle: '',
    cardPricingConsole: '',
    cardPricingPrice: ''
  };
}
