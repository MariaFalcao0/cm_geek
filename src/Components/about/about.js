import icon from './assets/image.jpg';
import icon1 from './assets/image1.jpg';
import Curriculo from './assets/Curriculo.pdf'
import curriculo1 from './assets/curriculo1.pdf'
import Dislike from './Dislike.js';
import './about.css';
import Like from './like';

export default function About() {
    return (
        <section class="page-light" id="about">
            <h2 class="title-page">Sobre nós</h2>
            <div class="about-section">
                <div class="left-img">
                    <img src={icon} class="img-about" alt="icon"></img>
                </div>
                <div class="right-text">
                    <div class="texto-about">
                        <p>
                           Me chamo Maria Falcão, sou de Pereiro-CE e estou atualmente estudando infomática na escola Prof. Maria Célia Pinheiro Falcão, e começei minha carreira em TI na mesma, sou apaixonada por automação de sistemas e atuo também como freelancer. Para saber mais sobre minhas habilidades e sobre minha carreira clique e faça o download do meu curriculo.
                        </p>
                        <a href={curriculo1} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Currículo</a>
                        <Like />  <Dislike/>
                    </div>
                </div>
            </div>
            
            <div class="about-section">
                <div class="left-img">
                    <img src={icon1} class="img-about" alt="icon"></img>
                </div>
                <div class="right-text">
                    <div class="texto-about">
                        <p>
                           Me chamo José Davison, sou de Pereiro-CE e estou atualmente estudando infomática na escola Prof. Maria Célia Pinheiro Falcão, e começei minha carreira em TI na mesma, sou apaixonado por automação de sistemas e atuo também como freelancer. Para saber mais sobre minhas habilidades e sobre minha carreira clique e faça o download do meu curriculo.
                        </p>
                        <a href={Curriculo} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Currículo</a>
                        <Like />  <Dislike/>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}