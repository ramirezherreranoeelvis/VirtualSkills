import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Slide } from '../../interface/slide';
import { CommonModule } from '@angular/common';

@Component({
        selector: 'app-slider',
        standalone: true,
        imports: [CommonModule],
        templateUrl: './slider.component.html',
        styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit, OnDestroy {
        private intervalId: any;

        @Input() dataSalides!: Slide[];

        dataSlideSelect!: dataSlide

        buttonsSlide: btnSlide[] = []

        ngOnInit(): void {
                this.initButtons();
                if (this.dataSalides.length < 6) {
                        let posItemAdd = 0;
                        let lenghtMaxDouble = this.dataSalides.length * 2;
                        for (let i = this.dataSalides.length; i < lenghtMaxDouble; i++) {
                                if (posItemAdd == this.dataSalides.length) {
                                        posItemAdd = 0;
                                }
                                this.dataSalides.push({
                                        title: this.dataSalides[posItemAdd].title,
                                        description: this.dataSalides[posItemAdd].description,
                                        image: this.dataSalides[posItemAdd].image,
                                        clase: this.dataSalides[posItemAdd].clase,
                                        background: this.dataSalides[posItemAdd].background
                                } as Slide)
                                this.dataSalides[posItemAdd++].clase = "none"
                        }
                }
                const init = this.beforePosition(0, this.dataSalides.length);
                const end = this.nextPosition(0, this.dataSalides.length);
                const init2 = this.beforePosition(init, this.dataSalides.length);
                const end2 = this.nextPosition(end, this.dataSalides.length);
                this.dataSlideSelect = {
                        indexInit2: init2,
                        indexInit: init,
                        indexView: 0,
                        indexEnd: end,
                        indexEnd2: end2
                }
                this.selectDataSlides();
        }

        ngOnDestroy(): void {
                clearInterval(this.intervalId);
        }

        initButtons() {
                this.buttonsSlide = this.dataSalides.map((d, index) => {
                        console.log(index)
                        return { clase: d.clase, index };
                })
                this.buttonsSlide[0].clase = "active"
        }

        startAutoCall(): void {
                // this.intervalId = setInterval(() => this.moveSlide(1), 2000);
        }

        selectDataSlides() {
                const init2 = this.dataSlideSelect.indexInit2;
                const init = this.dataSlideSelect.indexInit;
                const view = this.dataSlideSelect.indexView;
                const end = this.dataSlideSelect.indexEnd;
                const end2 = this.dataSlideSelect.indexEnd2;

                for (let index = 0; index < this.dataSalides.length - 1; index++) {
                        this.dataSalides[index].clase = "none";
                }

                this.dataSalides[init2].clase = "prev2";
                this.dataSalides[init].clase = "prev";
                this.dataSalides[view].clase = "active";
                this.dataSalides[end].clase = "next";
                this.dataSalides[end2].clase = "next2";
        }

        moveSlide(direction: number) {
                if (direction === 1) {
                        this.dataSlideSelect.indexInit2 = this.nextPosition(this.dataSlideSelect.indexInit2, this.dataSalides.length);
                        this.dataSlideSelect.indexInit = this.nextPosition(this.dataSlideSelect.indexInit, this.dataSalides.length);
                        this.dataSlideSelect.indexView = this.nextPosition(this.dataSlideSelect.indexView, this.dataSalides.length);
                        this.dataSlideSelect.indexEnd = this.nextPosition(this.dataSlideSelect.indexEnd, this.dataSalides.length);
                        this.dataSlideSelect.indexEnd2 = this.nextPosition(this.dataSlideSelect.indexEnd2, this.dataSalides.length);
                        let iview = 0;
                        for (let index = 0; index < this.buttonsSlide.length; index++) {
                                if (this.buttonsSlide[index].clase == "active") {
                                        iview = index;
                                }
                                this.buttonsSlide[index].clase = "none";
                        }
                        iview++;
                        if (iview == this.buttonsSlide.length) {
                                iview = 0;
                        }
                        this.buttonsSlide[iview].clase = "active";
                } else {
                        this.dataSlideSelect.indexInit2 = this.beforePosition(this.dataSlideSelect.indexInit2, this.dataSalides.length);
                        this.dataSlideSelect.indexInit = this.beforePosition(this.dataSlideSelect.indexInit, this.dataSalides.length);
                        this.dataSlideSelect.indexView = this.beforePosition(this.dataSlideSelect.indexView, this.dataSalides.length);
                        this.dataSlideSelect.indexEnd = this.beforePosition(this.dataSlideSelect.indexEnd, this.dataSalides.length);
                        this.dataSlideSelect.indexEnd2 = this.beforePosition(this.dataSlideSelect.indexEnd2, this.dataSalides.length);
                        let iview = 0;
                        for (let index = 0; index < this.buttonsSlide.length; index++) {
                                if (this.buttonsSlide[index].clase == "active") {
                                        iview = index;
                                }
                                this.buttonsSlide[index].clase = "none";
                        }
                        iview--;
                        if (iview == -1) {
                                iview = this.buttonsSlide.length - 1;
                        }
                        this.buttonsSlide[iview].clase = "active"
                }

                this.selectDataSlides()
        }

        nextPosition(positionActually: number, maxPosition: number) {
                if (positionActually + 1 == maxPosition) {
                        return 0;
                } else {
                        return positionActually + 1;
                }
        }

        beforePosition(positionActually: number, maxPosition: number) {
                if (positionActually - 1 == -1) {
                        return maxPosition - 1;
                } else {
                        return positionActually - 1;
                }
        }

        clickBtnSlideSpecific(indexBtn: number) {
                let indexView = this.dataSlideSelect.indexView
                if (indexView >= this.buttonsSlide.length) {
                        indexView = indexView - this.buttonsSlide.length
                }
                if (indexBtn == indexView) {
                        return
                }
                if (indexBtn == 0 && indexView == this.buttonsSlide.length - 1) {
                        this.moveSlide(1);
                        return;
                }

                if (indexBtn == this.buttonsSlide.length - 1 && indexView == 0) {
                        this.moveSlide(-1);
                        return;
                }
                let mover = indexBtn - indexView;

                const iterable = (mover > 0) ? mover : mover * -1;
                for (let index = 0; index < iterable; index++) {
                        this.moveSlide(mover)
                }

        }
}
interface dataSlide {
        indexInit2: number,
        indexInit: number,
        indexView: number,
        indexEnd: number
        indexEnd2: number
}

interface btnSlide {
        clase?: string;
        index: number;
}