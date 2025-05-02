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

      protected slides = signal<Slide[]>([]);

      protected slideSelect!: Slide;

      protected buttonsSlide: btnSlide[] = [];

      protected positionActually: number = 0;

      protected maxPosition: number = 0;

      protected listSlides?: DoublyLinkedListSlide;

      ngOnInit(): void {
            this.initSlides();
            this.initButtons();
      }

      private initSlides() {
            let id = 0;
            this.slides.set(
                  this.dataSlides().map((slide) => {
                        return {
                              id: id++,
                              slide: {
                                    title: slide.title,
                                    description: slide.description,
                                    image: slide.image,
                                    clase: slide.clase,
                                    background: slide.background,
                              },
                        };
                  })
            );
            this.slideSelect = this.slides()[0];
            this.slideSelect.slide.clase = 'active';
            // console.log('slides: ', this.slides());

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
                  this.listSlides?.add({
                        title: slide.title,
                        description: slide.description,
                        image: slide.image,
                        clase: slide.clase,
                        background: slide.background,
                  });
            });
            this.listSlides?.print();
      }

      private initButtons() {
            this.buttonsSlide = this.slides().map((slide) => {
                  return { clase: slide.slide.clase, id: slide.id };
            });
            this.buttonsSlide[0].clase = 'active';
      }

      private startAutoCall() {
            if (typeof window !== 'undefined') {
                  window.setInterval(() => this.evtClickBtnMoveSlide(1), 2000);
            }
      }

      private selectDataSlides() {}

      protected evtClickBtnMoveSlide = (direction: number) => {
            if (direction >= 0) {
                  this.nextPosition();
            } else {
                  this.beforePosition();
            }
      };

      private nextPosition() {
            const prevSelect = this.slideSelect;
            prevSelect.slide.clase = 'prev';
            const idSlide = this.slideSelect.id;
            console.log('idSlide actual: ' + idSlide);
            this.slideSelect =
                  this.slides().find((slide) => slide.id === idSlide + 1) ||
                  (() => {
                        this.slides().push({
                              id:
                                    this.slides()[this.slides().length - 1].id +
                                    1,
                              slide: {
                                    title: this.dataSlides()[0].title,
                                    description:
                                          this.dataSlides()[0].description,
                                    image: this.dataSlides()[0].image,
                                    clase: this.dataSlides()[0].clase,
                                    background: this.dataSlides()[0].background,
                              },
                        });
                        return this.slides()[this.slides().length - 1];
                  })();
            this.slideSelect.slide.clase = 'active';
            
      }

      private beforePosition() {}

      protected evtClickBtnSlideSpecific = () => {};
}
interface Slide {
      id: number;
      slide: SlideData;
}

interface btnSlide {
      clase?: string;
      id: number;
}

interface DoublyNodeSlide {
      id: number;
      slide: Slide;
      next?: DoublyNodeSlide;
      prev?: DoublyNodeSlide;
}

class DoublyLinkedListSlide {
      base!: DoublyNodeSlide;
      id: number = 0;
      constructor(slide: SlideData) {
            this.add(slide);
      }

      add(newSlide: SlideData) {
            const newNode: DoublyNodeSlide = {
                  id: this.id++,
                  slide: { id: this.id, slide: newSlide },
            };
            if (!this.base) {
                  newNode.prev = newNode;
                  newNode.next = newNode;
                  this.base = newNode;
            } else {
                  const lastSlide = this.base.prev;
                  newNode.prev = lastSlide;
                  newNode.next = this.base;
                  this.base.prev = newNode;
                  lastSlide!.next = newNode;
            }
      }

      remove(idSlideRemove: number) {
            if (!this.base) return;
      }

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
}
