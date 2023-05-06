import './footer.css';

export default function Footer() {
    return (
        <footer class="page-footer" id="footer">
            <div class="social">   
                <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-linkedin" id="icon-linkedin"></i></a>
                <a href="https://github.com/" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-github" id="icon-github"></i></a>
                <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-twitter" id="icon-twitter"></i></a>
                <a href="https://api.whatsapp.com/send/?phone=5588997436098&type=phone_number" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-whatsapp" id="icon-whatsapp"></i></a>
            </div>
            <div class="copyright">
                <p>Maria Falcão 2022 ©</p>
            </div>
        </footer>
    );
}