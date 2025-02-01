import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SliderComponent } from '../../../../components/slider/slider.component';
import { Slide } from '../../../../interface/slide';
import { PlanPagoCardComponent } from '../../../../components/molecules/plan-pago-card/plan-pago-card.component';
import { PlanPago } from '../../../../interface/PlanPago';
import { TitleComponent } from '../../../../components/atoms/title/title.component';
import { TextShadowComponent } from '../../../../components/atoms/text-shadow/text-shadow.component';
import { LearningPathCardComponent } from '../../../../components/molecules/learning-path-card/learning-path-card.component';

@Component({
        selector: 'app-home',
        imports: [
                CommonModule,
                SliderComponent,
                PlanPagoCardComponent,
                TextShadowComponent
        ],
        templateUrl: './home.component.html',
        styleUrl: './home.component.scss'
})
export class HomeComponent {

        dataSalides: Slide[] = [
                {
                        title: 'Slide 1',
                        description: 'This is the first slide.',
                        image: '',
                        clase: 'none',
                        background: "#1e0441"
                },
                {
                        title: 'Slide 2',
                        description: 'This is the second slide.',
                        image: '',
                        clase: 'none',
                        background: "#FF5733"
                },
                {
                        title: 'Slide 3',
                        description: 'This is the third slide.',
                        image: '',
                        clase: 'none',
                        background: "#FF5733"
                }
        ];

        tiers: PlanPago[] = [
                {
                        name: "Basico",
                        id: "tier-Basico",
                        href: "#",
                        priceMonthly: "S/.200",
                        description:
                                "El plan personal perfecto si recién estás empezando a utilizar nuestro producto",
                        features: [
                                "Acceso a todos los cursos de la plataforma",
                                "Disponibilidad 24/7",
                                "Rutas personalizadas",
                                "Evaluaciones personalizadas",
                                "Rutas personalizadas",
                                "Evaluaciones personalizadas"
                        ],
                        featured: false,
                },
                {
                        name: "Golden",
                        id: "tier-Golden",
                        href: "#",
                        priceMonthly: "S/.350",
                        description:
                                "El plan único para dos personas, invita a un amigo y aprendan juntos.",
                        features: [
                                "Acceso a todos los cursos de la plataforma",
                                "Disponibilidad 24/7",
                                "Rutas personalizadas",
                                "Evaluaciones personalizadas"
                        ],
                        featured: true,
                },
                {
                        name: "Premium",
                        id: "tier-Premium",
                        href: "#",
                        priceMonthly: "S/.500",
                        description:
                                "El plan único para tres personas, invita a un amigo o familiar y aprendan juntos.",
                        features: [
                                "Acceso a todos los cursos de la plataforma",
                                "Disponibilidad 24/7",
                                "Rutas personalizadas",
                                "Evaluaciones personalizadas",
                                "Ahorras 100 soles por año"
                        ],
                        featured: false,
                },
        ];

}
// https://picsum.photos/200/300