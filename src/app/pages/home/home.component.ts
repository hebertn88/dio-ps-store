import { Component } from '@angular/core';

type MenuBarLinkType = {
  url: string;
  description: string;
};

type CardType = {
    cardImage : string,
    cardLabel : string,
    cardPricingTitle : string,
    cardPricingConsole : string,
    cardPricingPrice : string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  menuBarLink: MenuBarLinkType[] = [
    { url: 'https://www.dio.me/users/hebertn88', description: 'Dio' },
    { url: 'https://github.com/hebertn88', description: 'Github' },
    { url: 'https://www.linkedin.com/in/hebertn88', description: 'Linkedin' },
    { url: 'https://www.twitter.com/hebertn88', description: 'X (Twitter)' },
  ];

  cardList: CardType[] = [
    {
      cardImage: 'assets/bt-1.jpg',
      cardLabel: 'Digital',
      cardPricingConsole: 'DIGITAL PS4',
      cardPricingPrice: 'R$ 189,99',
      cardPricingTitle: 'Play it Now!',
    },
    {
      cardImage: 'assets/ac-cover.jpg',
      cardLabel: 'Exclusive',
      cardPricingConsole: 'Disc PS5',
      cardPricingPrice: 'R$ 259,99',
      cardPricingTitle: 'Enjoy it!',
    },
    {
      cardImage: 'assets/bt-bad-company-2.jpg',
      cardLabel: 'Exclusive',
      cardPricingConsole: 'DIGITAL PS4 | PS5',
      cardPricingPrice: 'R$ 329,99',
      cardPricingTitle: 'Special Edition!',
    },
  ];
}
