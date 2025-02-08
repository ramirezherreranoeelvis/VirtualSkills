import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

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
        styleUrl: './hamburger-menu.component.scss'
})
export class HamburgerMenuComponent {
        @Output() clickMenu = new EventEmitter<void>();
        @ViewChild('menu') menu!: ElementRef;

        protected handleClick(): void {
                this.clickMenu.emit();
                const menuElement = this.menu.nativeElement;
                if (menuElement.classList.contains('active')) {
                        menuElement.classList.remove('active');
                } else {
                        menuElement.classList.add('active');
                }
        }

}
