import './contact.css';

export default function Contact() {
    return (
        <section class="page-section" id="contact">
            <h3 class="title-page">Contato</h3>
            <div class="container-contact">
                <div class="ways-contact">
                    <h3><span>Entre em contato conosco!</span></h3>
                    <p>Caso queira entrar em contato nos mande uma mensagem, eu vou adorar.</p>
                    <ul class="list-icons">
                        <li>
                            <i class="fa fa-envelope" id="icon-contact"></i> 
                            <a href="falcaomaria72@gmail.com"><p>falcaomaria72@gmail.com</p></a>
                        </li>
                        <li>
                            <i class="fa fa-envelope" id="icon-contact"></i> 
                            <a href="mailto:airesdavison@gmail.com"><p>airesdavison@gmail.com</p></a>
                        </li>
                        <li>
                            <i class="fa fa-location-dot" id="icon-contact"></i>
                            <p class="mg-icon-2">Pereiro, Ceará - Brasil</p>
                        </li>
                    </ul>
                </div>
                <form action="https://formsubmit.co/fecfce57d3e403900dad1688f2d9c317" method="POST" class="form-contact">
                    <input type="hidden" name="_autoresponse" value="Recebi sua mensagem, muito obrigado por entrar em contato! Responderemos o mais rápido possível..." />            
                    <label>Nome:</label>
                    <input type="text" name="name" class="form-control" placeholder="Nome" required/>
                    <label>Email:</label>
                    <input type="email" name="email" class="form-control" placeholder="Email" required/>
                    <label>Mensagem:</label>
                    <textarea name="message" class="form-control" placeholder="Escreva a mensagem" required></textarea>
                    <div class="btn-form">
                        <input type="submit" class="btn btn-primary" value="Enviar" />
                    </div>
                </form>
            </div>
        </section>
    );
}