import './certificates.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import eretec from "./assets/eretec.png";
import excel from "./assets/excel.png";
import ingles from "./assets/ingles.png";
import flisol from "./assets/flisol.png";
import pucrs from "./assets/pucrs.png";

export default function Certificates() {
    var settings = {
        speed: 500,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2200,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
        ]
    };

    return (
        <section class="page-section" id="certificates">
            <h3 class="title-page">Certificados</h3>
            <div class="container-owl-certificates">
            <Slider {...settings}>
                <div class="item">
                    <div class="img-item">
                        <img src={excel} alt="Certificado Simplifica EXCEL"></img>
                    </div>
                    <h3><span>Certificado Simplifica EXCEL</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={eretec} alt="Certificado Eretec"></img>
                    </div>
                    <h3><span>Certificado Eretec</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={ingles} alt="Certificado de Inglês"></img>
                    </div>
                    <h3><span>Certificado de Inglês </span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={flisol} alt="Certificado de software livre"></img>
                    </div>
                    <h3><span>Certificado de software livre </span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={pucrs} alt="Certificado de liderança..."></img>
                    </div>
                    <h3><span>Certificado de liderança...</span></h3>
                </div>
            </Slider>
            </div>
        </section>
    );
}