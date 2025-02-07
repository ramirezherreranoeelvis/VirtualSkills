import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SliderComponent } from '../../../../components/organisms/slider/slider.component';
import { Slide } from '../../../../interface/slide';
import { SectionPlansComponent } from '../../../../components/organisms/section-plans/section-plans.component';
import { LineBorderComponent } from '../../../../components/atoms/line-border/line-border.component';
import { assets } from '../../../../routes/routes-asstes';
@Component({
        selector: 'app-home',
        imports: [
                CommonModule,
                SliderComponent,
                SectionPlansComponent,
                LineBorderComponent
        ],
        templateUrl: './home.component.html',
        styleUrl: './home.component.scss'
})
export class HomeComponent {

        slidesVariants = {
                default: [
                        {
                                image: assets.slider.Pc,
                                title: "Sistema Integral de Gestión Educativa",
                                description: "SkillConnect es una plataforma educativa orientada a mejorar los procesos de las instituciones, docentes, padres de familia y alumnos.",
                                clase: 'none',
                                background: "#1e0441"
                        },
                        {
                                image: assets.slider.AcademicWeb,
                                title: "Aprende desde cualquier lugar",
                                description: "Nuestra plataforma te permite acceder a contenidos educativos desde cualquier dispositivo, fomentando la educación a distancia.",
                                clase: 'none',
                                background: "#FF5733"
                        },

                        {
                                image: assets.slider.PlataformaWeb,
                                title: "Plataforma para Jóvenes",
                                description: "Accede a contenido interactivo y mejora tus habilidades de manera divertida y moderna.",
                                clase: 'none',
                                background: "#FF5733"
                        },
                ],
                kids: [
                        {
                                image: assets.slider.Laptop,
                                title: "Diversión y Aprendizaje",
                                description: "Plataforma interactiva diseñada para que los niños aprendan jugando.",
                                clase: 'none',
                                background: "#FF5733"
                        },
                        {
                                image: assets.slider.Bloques,
                                title: "Crecer Jugando",
                                description: "Un espacio donde los niños aprenden mientras se divierten, desarrollando su curiosidad y habilidades.",
                                clase: 'none',
                                background: "#FF5733"
                        },
                        {
                                image: assets.slider.Atomo,
                                title: "Exploradores del Saber",
                                description: "Herramienta interactiva que fomenta el aprendizaje creativo y el descubrimiento en los niños.",
                                clase: 'none',
                                background: "#FF5733"
                        },
                ],
                young: [
                        {
                                image: assets.slider.ConsolaJuegos,
                                title: "Sistema Integral de Gestión Educativa",
                                description: "SkillConnect es una plataforma educativa orientada a mejorar los procesos de las instituciones, docentes, padres de familia y alumnos.",
                                clase: 'none',
                                background: "#FF5733"
                        },
                        {
                                image: assets.slider.PalancaMando,
                                title: "Aprende desde cualquier lugar",
                                description: "Nuestra plataforma te permite acceder a contenidos educativos desde cualquier dispositivo, fomentando la educación a distancia.",
                                clase: 'none',
                                background: "#FF5733"
                        },
                        {
                                image: assets.slider.Espada,
                                title: "Plataforma para Jóvenes",
                                description: "Accede a contenido interactivo y mejora tus habilidades de manera divertida y moderna.",
                                clase: 'none',
                                background: "#FF5733"
                        },
                ],
                adult: [
                        {
                                image: assets.slider.Fuente,
                                title: "Sistema Integral de Gestión Educativa",
                                description: "SkillConnect es una plataforma educativa orientada a mejorar los procesos de las instituciones, docentes, padres de familia y alumnos.",
                                clase: 'none',
                                background: "#FF5733"
                        },
                        {
                                image: assets.slider.Gestion,
                                title: "Aprende desde cualquier lugar",
                                description: "Nuestra plataforma te permite acceder a contenidos educativos desde cualquier dispositivo, fomentando la educación a distancia.",
                                clase: 'none',
                                background: "#FF5733"
                        },

                        {
                                image: assets.slider.Usuario,
                                title: "Plataforma para Jóvenes",
                                description: "Accede a contenido interactivo y mejora tus habilidades de manera divertida y moderna.",
                                clase: 'none',
                                background: "#FF5733"
                        },
                ],
        };

}