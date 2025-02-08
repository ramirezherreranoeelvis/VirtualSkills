import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { assets } from '../../../routes/routes-asstes';
import { HamburgerMenuComponent } from "../../atoms/hamburger-menu/hamburger-menu.component";
@Component({
        selector: 'header-menu',
        imports: [
                RouterLink,
                HamburgerMenuComponent
        ],
        templateUrl: './header-menu.component.html',
        styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {
        @ViewChild('modal') modal!: ElementRef;
        assets = assets

        isMenuOpen: boolean = false;

        toggleMenu() {
                this.isMenuOpen = !this.isMenuOpen;
        }

        getMenuState() {
                return this.isMenuOpen ? 'open' : 'closed';
        }

        clickMenu(){
                const menuElement = this.modal.nativeElement;
                if (menuElement.classList.contains('modal-header-active')) {
                        menuElement.classList.remove('modal-header-active');
                } else {
                        menuElement.classList.add('modal-header-active');
                }
        }
}
