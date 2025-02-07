import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { assets } from '../../../routes/routes-asstes';
@Component({
        selector: 'header-menu',
        imports: [
                RouterLink
        ],
        templateUrl: './header-menu.component.html',
        styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {
        assets = assets
}
