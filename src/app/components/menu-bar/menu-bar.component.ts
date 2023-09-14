import { Component, Input } from '@angular/core';

type MenuBarLinkType = {
  url: string;
  description: string;
};

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent {
  @Input() menuBarLogo: string = '';
  @Input() menuBarLink: MenuBarLinkType[] = [];
}
