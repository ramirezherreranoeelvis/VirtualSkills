import { Component, input, OnInit, signal } from '@angular/core';
import { SlideData } from './slide';
import { CommonModule } from '@angular/common';
import { SlideCardComponent } from '../../molecules/slide-card/slide-card.component';

@Component({
      selector: 'slider',
      imports: [CommonModule, SlideCardComponent],
      templateUrl: './slider.component.html',
      styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
      dataSlides = input.required<SlideData[]>();

      protected buttonsSlide: btnSlide[] = [];

      protected listSlides: DoublyLinkedListSlide = {} as DoublyLinkedListSlide;

      ngOnInit(): void {
            this.initSlides();
            this.initButtons();
      }

      private initSlides() {
            this.dataSlides().forEach((slide, index) => {
                  if (index === 0) {
                        this.listSlides = new DoublyLinkedListSlide({
                              title: slide.title,
                              description: slide.description,
                              image: slide.image,
                              clase: slide.clase,
                              background: slide.background,
                        });
                        return;
                  }
                  this.listSlides.push({
                        title: slide.title,
                        description: slide.description,
                        image: slide.image,
                        clase: slide.clase,
                        background: slide.background,
                  });
            });
      }

      private initButtons() {
            this.buttonsSlide = this.listSlides
                  .toArrayDataSlide()
                  .map((d, index) => {
                        return { clase: d.clase, id: index };
                  });
            this.buttonsSlide[0].clase = 'active';
      }

      private startAutoCall() {
            if (typeof window !== 'undefined') {
                  window.setInterval(() => this.evtClickBtnMoveSlide(1), 2000);
            }
      }

      protected evtClickBtnMoveSlide = (direction: number) => {
            if (direction >= 0) {
                  this.listSlides.nextView();
            } else {
                  this.listSlides.prevView();
            }
      };

      protected evtClickBtnSlideSpecific = (targetIndex: number) => {
            const currentIndex = this.listSlides.viewSlide.index;
            const totalSlides = this.listSlides.length;

            // Calcula la distancia en ambas direcciones
            const forwardDistance =
                  (targetIndex - currentIndex + totalSlides) % totalSlides;
            const backwardDistance =
                  (currentIndex - targetIndex + totalSlides) % totalSlides;

            // Decide si es más eficiente ir hacia adelante o hacia atrás
            if (forwardDistance <= backwardDistance) {
                  // Avanza (nextView) las veces necesarias
                  for (let i = 0; i < forwardDistance; i++) {
                        this.evtClickBtnMoveSlide(1); // +1 = nextView
                  }
            } else {
                  // Retrocede (prevView) las veces necesarias
                  for (let i = 0; i < backwardDistance; i++) {
                        this.evtClickBtnMoveSlide(-1); // -1 = prevView
                  }
            }

            this.buttonsSlide.forEach((btn) => {
                  if (btn.id === targetIndex) {
                        btn.clase = 'active';
                        return;
                  }
                  btn.clase = '';
            });
      };
}

interface DoublyNodeSlide {
      index: number;
      slide: SlideData;
      next: DoublyNodeSlide;
      prev: DoublyNodeSlide;
}

class DoublyLinkedListSlide {
      base: DoublyNodeSlide;
      index: number = 0;
      lastSlide: DoublyNodeSlide;
      viewSlide: DoublyNodeSlide;
      length: number = 0;

      constructor(slide: SlideData) {
            const newNode: DoublyNodeSlide = {
                  index: this.index,
                  slide: slide,
            } as DoublyNodeSlide;
            newNode.prev = newNode;
            newNode.next = newNode;
            this.base = newNode;
            this.base.slide.clase = 'active';
            this.lastSlide = newNode;
            this.viewSlide = this.base;
            this.length = 1;
      }
      /* view */
      nextView() {
            const viewSlide = this.viewSlide;
            const viewNext = this.viewSlide.next;
            const viewPrev = this.viewSlide.prev;

            viewSlide.slide.clase = 'prev transition';
            viewNext.slide.clase = 'active transition';
            viewPrev.slide.clase = 'none';
            /* el befeore que es antes del actual peude no ser el siguiente de 
            active si haay mas por eso se escoje el next */
            viewNext.next.slide.clase = 'next ';
            this.viewSlide = this.viewSlide.next;
      }

      prevView() {
            const viewSlide = this.viewSlide;
            const viewNext = this.viewSlide.next;
            const viewPrev = this.viewSlide.prev;

            viewSlide.slide.clase = 'next transition';
            viewPrev.slide.clase = 'active transition';
            viewNext.slide.clase = 'none';
            viewPrev.prev.slide.clase = 'prev ';
            this.viewSlide = this.viewSlide.prev;
      }

      /* data */
      push(newSlide: SlideData) {
            this.index = this.index + 1;
            const newNode: DoublyNodeSlide = {
                  index: this.index,
                  slide: newSlide,
            } as DoublyNodeSlide;

            newNode.prev = this.lastSlide;
            newNode.next = this.base;
            this.base.prev = newNode;
            this.lastSlide.next = newNode;
            this.lastSlide = newNode;

            this.viewSlide.next.slide.clase = 'next transition';
            this.viewSlide.prev.slide.clase = 'prev transition';
            this.length++;
      }

      /* utils */
      forEach(callbackfn: (slide: DoublyNodeSlide) => void) {
            let current: DoublyNodeSlide | null = this.base;
            while (current) {
                  callbackfn(current);
                  current = current.next ?? null;
                  if (current === this.base) break;
            }
      }

      print() {
            console.log('[\n');

            this.forEach((slide) => {
                  console.log(slide.slide);
            });
            console.log(']');
      }

      toArrayDataSlide(): SlideData[] {
            const list: DoublyNodeSlide[] = [];
            this.forEach((slide) => {
                  list.push(slide);
            });
            return list.map((slide) => {
                  return slide.slide;
            });
      }
}

interface btnSlide {
      clase?: string;
      id: number;
}
