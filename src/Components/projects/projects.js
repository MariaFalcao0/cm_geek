import './projects.css';
import Slider from "react-slick";

export default function Projects() {
    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    return (
        <section class="page-light" id="projects">
            <h3 class="title-page">Projetos</h3>
            <div class="container-projects">
                <Slider {...settings}>
                    <div class="item-projects img-1">
                        <div class="img-overlay"></div>
                        <a href="https://eretec.eeepmariacelia.com.br/" target="_blank" rel="noopener noreferrer">
                            <h3>ERETEC</h3>
                            <p>Evento realizado na escola com colaboração dos nossos serviços.</p>
                        </a>
                    </div>
                    <div class="item-projects img-2">
                        <a href="https://pt.wikipedia.org/wiki/Biblioteca/" target="_blank" rel="noopener noreferrer">
                            <h3>Biblioteca</h3>
                            <p>Projeto para automação da biblioteca da escola.</p>
                        </a>
                    </div>
                    <div class="item-projects img-4">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <h3>Github</h3>
                            <p>Para acessar todos meus projetos acesse meu github.</p>
                        </a>
                    </div>
                </Slider>
            </div>
        </section>
    );
}