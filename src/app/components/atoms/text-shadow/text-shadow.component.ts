import { Component, Input } from '@angular/core';

@Component({
  selector: 'text-shadow',
  standalone: true,
  imports: [],
  templateUrl: './text-shadow.component.html',
  styleUrl: './text-shadow.component.scss'
})
export class TextShadowComponent {
  @Input() text!: string;
  @Input() classStyles!: string;
}
