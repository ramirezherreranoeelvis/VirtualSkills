import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
        selector: 'app-main',
        standalone: true,
        imports: [RouterLink, RouterOutlet],
        templateUrl: './home.component.html',
        styleUrl: './home.component.scss'
})
export class MainComponent {

}
