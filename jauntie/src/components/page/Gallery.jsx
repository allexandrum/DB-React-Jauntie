import img0 from '../layouts/img/1-1pexels-asad-photo-maldives-3155666.jpg'
import img1 from '../layouts/img/1-1pexels-errin-casano-2356045.jpg'
import img2 from '../layouts/img/1-1pexels-francesco-ungaro-2325446.jpg'
import img3 from '../layouts/img/1-1pexels-grafixartphoto-samir-belhamra-4254553.jpg'
import img4 from '../layouts/img/2-1pexels-rachel-claire-4825701.jpg'
import img5 from '../layouts/img/1-1pexels-jeremy-bishop-8241135.jpg'
import img6 from '../layouts/img/1-1pexels-quark-studio-2507007.jpg'
import img7 from '../layouts/img/1-1pexels-roman-odintsov-4553618.jpg'
import img8 from '../layouts/img/2-1pexels-mateusz-sałaciak-4275885.jpg'
import img9 from '../layouts/img/1-1pexels-sam-kolder-2387873(1).jpg'
import img10 from '../layouts/img/1-1pexels-taryn-elliott-3889660.jpg'
import img11 from '../layouts/img/1-1pexels-tomáš-malík-1660995.jpg'
import img12 from '../layouts/img/2-1pexels-asad-photo-maldives-1591373.jpg'
import img13 from '../layouts/img/2-2pexels-riccardo-bertolo-4245826.jpg'
import img14 from '../layouts/img/2-2pexels-pierre-blaché-2901209.jpg'

import '../layouts/css/galerie.css'
export default function Gallery(){
    return <>
           <section id="gheader">
        <header>
            <p>Galeria pozelor din călătoriile oferite de <span>Jauntie</span></p>
            <hr/>
        </header>
    </section>
    <section id="gmain">
        <article class="row-1">
            <img class="img-1" src={img0} alt="" />
            <img class="img-1" src={img1} alt="" />
            <img class="img-1" src={img2} alt="" />
            <img class="img-1" src={img3} alt="" />
        </article>
        <article class="row-2">
            <img class="img-2" src={img4} alt="" />
            <img class="img-1" src={img5} alt="" />
            <img class="img-1" src={img6} alt="" />
        </article>
        <article class="row-3">
            <img class="img-1" src={img7} alt="" />
            <img class="img-2" src={img8} alt="" />
            <img class="img-1" src={img9} alt="" />
        </article>
        <article class="row-4">
            <img class="img-1" src={img10} alt="" />
            <img class="img-1" src={img11} alt="" />
            <img class="img-2" src={img12} alt="" />
        </article>
        <article class="row-5">
            <img class="img-2" src={img13} alt="" />
            <img class="img-2" src={img14}  alt="" />
        </article>
    </section>
    </>
}