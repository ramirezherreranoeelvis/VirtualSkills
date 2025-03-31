import { Component, input } from '@angular/core';
@Component({
      selector: 'motion-img',
      imports: [],
      template: `
            <div
                  [class]="classAnimation()"
                  class="z-5 w-[10rem] h-30 opacity-90 top-40"
            >
                  <img
                        [src]="image()"
                        class="w-30 h-30 object-cover object-center"
                  />
            </div>
      `,
      styleUrl: './motion-img.component.scss',
})
export class MotionImgComponent {
      classAnimation = input<string>('animation-1');
      image = input<string>('');
}
