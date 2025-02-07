import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderMenuComponent } from '../../../components/organisms/header-menu/header-menu.component';

@Component({
        selector: 'app-main',
        imports: [
                RouterOutlet,
                HeaderMenuComponent
        ],
        templateUrl: './home.component.html',
        styleUrl: './home.component.scss'
})
export class MainComponent {
}
