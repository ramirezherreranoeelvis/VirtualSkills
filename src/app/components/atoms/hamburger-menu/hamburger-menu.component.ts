import { Component, ElementRef, output, viewChild } from '@angular/core';

@Component({
      selector: 'hamburger-menu',
      imports: [],
      template: `
            <div #menu class="menu" (click)="handleClick()">
                  <div class="line"></div>
                  <div class="line"></div>
                  <div class="line"></div>
            </div>
      `,
      styleUrl: './hamburger-menu.component.scss',
})
export class HamburgerMenuComponent {
      clickMenu = output<void>();
      menu = viewChild.required<ElementRef<HTMLDivElement>>('menu');

      protected handleClick(): void {
            this.clickMenu.emit();
            const menuElement = this.menu().nativeElement;
            if (menuElement.classList.contains('active')) {
                  menuElement.classList.remove('active');
            } else {
                  menuElement.classList.add('active');
            }
      }
}
