import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar-link',
  templateUrl: './menu-bar-link.component.html',
  styleUrls: ['./menu-bar-link.component.css'],
})
export class MenuBarLinkComponent {
  @Input() menuBarUrl: string = '';
  @Input() menuBarDescription: string = '';
}
