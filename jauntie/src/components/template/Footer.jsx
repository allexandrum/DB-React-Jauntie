import '../layouts/css/footer.css'
import logo from '../layouts/img/logo.png'
export default function Footer(){
    return(
        <footer>
        <div id="footer-top">
            <div>
                <h4>Abonează-te la noutățile noastre</h4>
                <p>Noutăți lunare despre noile oferte de la Jauntie, cele mai fierbinți oferte.</p>
            </div>
            <div id="email-subscribe">
                <input type="text" placeholder="Adresa ta email"/>
                <button type="submit" name="button">Abonează-te</button>
            </div>
        </div>
        <section className="section-footer"> 
            <div id="footer-bottom">
                <div>
                    <figure>
                        <img src={logo} alt=""/>
                        <figcaption>JAUNTIE</figcaption>
                    </figure>
                    <p>067-341-293<br/>
                    goner2202@gmail.com<br/>
                    Moldova, Chișcăreni</p>
                </div>
                <div>
                    <h4>Product</h4>
                    <a href="#">Bilete</a><br/>
                    <a href="#">Preturi</a><br/>
                    <a href="#">Servicii</a><br/>
                </div>
                <div>
                    <h4>Resurse</h4>
                    <a href="#">Blog</a><br/>
                    <a href="#">Contacte</a><br/>
                    <a href="#">Întrebări Frecvente</a>
                </div>
                <div>
                    <h4>Compania</h4>
                    <a href="#">Recenzii</a><br/>
                    <a href="#">Despre Noi</a><br/>
                    <a href="#">Echipa noastră</a>
                </div>
                <div>
                    <h4>Urmărește-ne</h4>
                    <a href="#">Twitter</a><br/>
                    <a href="#">Facebook</a><br/>
                    <a href="#">Instagram</a>
                </div>
            </div>
        </section>
    </footer>
    )
}