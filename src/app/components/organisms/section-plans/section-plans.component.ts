import { Component, Input } from '@angular/core';
import { PlanPagoCardComponent } from '../../molecules/plan-pago-card/plan-pago-card.component';
import { PlanPago } from '../../../interface/PlanPago';
import { TitleDescriptionComponent } from '../../molecules/title-description/title-description.component';

@Component({
        selector: 'section-plans',
        imports: [
                PlanPagoCardComponent,
                TitleDescriptionComponent
        ],
        templateUrl: './section-plans.component.html',
        styleUrl: './section-plans.component.scss'
})
export class SectionPlansComponent {
        @Input() title: string = "Planes"
        @Input() description: string = ""
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
