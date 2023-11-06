import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';

import slider1 from '../layouts/img/slider1.jpg'
import slider2 from '../layouts/img/slider2.jpg'
import slider3 from '../layouts/img/slider3.jpg'
import slider4 from '../layouts/img/slider4.jpg'

import extern from '../layouts/img/extern.png'
import intern from '../layouts/img/intern.png'
import galerie from '../layouts/img/galerie.png'
import info from '../layouts/img/info.png'
import GuyPink from '../layouts/img/guy-pink.png'
import logo from '../layouts/img/logo.png'
import pets1 from '../layouts/img/pets1.png'
import LogoName from '../layouts/img/logo_name.png'
import pets2 from '../layouts/img/pets2.png'

import '../layouts/css/style.css'
import { Link } from "react-router-dom";

export default function IndexPage(){
    return (<>
    <section id="bg">
        <div id="bg0"></div>
        <div id="bg1"></div>
        <div id="bg2"></div>
    </section>
    <section id="main">
        <div id="sliders">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            
                navigation={true}
                modules={[Autoplay, Navigation]}

                className="mySwiper"
                >
                    <SwiperSlide><img src={slider1} alt="Slide 1" /></SwiperSlide>
                    <SwiperSlide><img src={slider2} alt="Slide 2" /></SwiperSlide>
                    <SwiperSlide><img src={slider3} alt="Slide 3" /></SwiperSlide>
                    <SwiperSlide><img src={slider4} alt="Slide 4" /></SwiperSlide>
                </Swiper>
            </div>
        <div id="main-div">
            <div>
                <h1>
                    Ești în căutarea unei experiențe de neuitat, unei <span>călătorii</span> care îți va umple viata de emoții noi?
                </h1>
                <p>
                   <i>Acesta este locul care îți trebuie!</i>
                </p>
            </div>
        </div>
        <div id="last-main-div">
            <Link to="/TourismE" className="a-container">
                <div className="div-container">
                    <img src={extern} alt="extern" />
                    <h5>Călătorii<br/>Internaționale</h5>
                    <p>Întreaga lume este deschisă pentru tine. Începe să o descoperi azi!</p>
                </div>
            </Link>
            <Link to="/TourismI" className="a-container">
                <div className="div-container">
                    <img src={intern} alt="intern" />
                    <h5>Călătorii <br/> Interne</h5>
                    <p>Nicăieri nu e mai bine ca acasă! De-aia stau unii acasă toată viaţa.</p>
                </div>
            </Link>
            <Link to="/Gallery" className="a-container">
                <div className="div-container">
                    <img src={galerie} alt="galerie" />
                    <h5>Memorii<br/>Înghețate</h5>
                    <p>Fotografiile vorbesc atunci când nu există cuvinte și oferă o perspectivă asupra trecutului!</p>
                </div>
            </Link>
            <Link to="/About" className="a-container">
                <div className="div-container">
                    <img src={info} alt="info" />
                    <h5>Despre<br/>Jauntie</h5>
                    <p>Încrederea este ca și cum tu însuți dai o sabie în mâinile altei persoane și nu știi dacă te va proteja cu această sabie sau ți-o va împinge în spate!</p>
                </div>
            </Link>
      </div>
    </section>
    <section id="pets">
        <div id="pets-1">
            <img className="img-pets-1" src={pets1} alt=""/>
            <p>
                Planificarea și pregătirea sunt esențiale pentru o vacanță reușită cu un câine sau o pisică. Decizia ta finală cu privire la includerea animalului tău de companie în planurile tale de călătorie poate varia în funcție de modul de călătorie și de destinația ta finală. 
            </p>
        </div>
        <div id="pets-2">
            <img className="pets-logo" src={LogoName} alt="Jauntie Logo"/>
            <h2>
                Călătorii cu animale de companie 
            </h2>
            <img className="img-pets-2" src={pets2} alt=""/>
        </div>
    </section>

    <section id="travelling">
        <div>
            <h2>
                Călătoriile în locuri noi sunt unele dintre cele mai pline de satisfacții!
            </h2>
            <p>
                Călătoriile pot fi fără griji sau pline de acțiune, pot fi prietenoase cu bugetul sau fastuoase, dar oricum, cred că călătoriile interne și internaționale sunt cele mai bune investiții pe care le poți face singur. A te scufunda într-un loc nou poate fi un șoc cultural la început, dar aceasta ne forțează pe noi să ieșim din zona de confort, deschizând ușile creșterii.
            </p>
        </div>
        <img src={GuyPink} alt=""/>
    </section>

    <section id="FAQ">
        <header>
            <img src={logo} alt=""/>
            <span>Întrebări Frecvente</span>
            <hr/>
        </header>
        <article>
            <div className="article-div-1">
                <div>
                    <h4>
                        Care zi a săptămânii este cea mai bună zi pentru a cumpăra bilete?
                    </h4>
                    <p>
                        Atât pentru călătoriile interne, cât și internaționale, duminica poate fi mai ieftină* pentru achiziția de bilete de avion. Pentru zborurile interne, lunile au prezentat cele mai mari prețuri medii ale biletelor, iar pentru zborurile internaționale, evitați rezervarea vineri. Rezervarea în ziua potrivită a săptămânii vă poate economisi până la 20% la zbor*, conform datelor istorice.
                    </p>
                </div>
                <div>
                    <h4>
                        Cu cât timp înainte ar trebui să cumpăr bilete?
                    </h4>
                    <p>
                        Pe baza datelor de zbor globale din 2020, cu 21 de zile înainte de plecare* este punctul ideal pentru rezervarea zborurilor. Dar aceasta nu este o regulă tare și rapidă; monitorizarea prețurilor este o idee bună atunci când încercați să găsiți cea mai bună ofertă. Comparați tarifele de la diferite companii aeriene și configurați o alertă de preț pentru ruta dvs. preferată.
                    </p>
                </div>
                <div>
                    <h4>
                        Care sunt cele mai ieftine zile pentru a călători?
                    </h4>
                    <p>
                        Analiza prețurilor biletelor aeriene interne și internaționale a arătat că zborul duminica poate fi mai ieftin*. Mulți călători își încep călătoriile vineri sau sâmbătă, așa că șansele tale de un preț mai mic sunt mai mari atunci când pleacă devreme în cursul săptămânii. Începerea călătoriei într-o duminică ar putea fi cu aproape 24% mai ieftin* decât călătoria  de vineri, așa că rezervați cu înțelepciune!
                    </p>
                </div>
                <div>
                    <h4>
                        Care este cea mai ieftină lună pentru a zbura?
                    </h4>
                    <p>
                        Cea mai ieftină lună pentru a zbura poate varia în funcție de locul în care mergeți, așa că găsirea celor mai bune tarife se reduce în mare parte la evitarea orelor de vârf de călătorie pentru destinația dvs. Un sfat excelent este să călătorești în timpul sezonului umăr - un nume pentru fereastra de timp dintre sezonul turistic ridicat și cel scăzut al unei destinații. Acestea sunt cele mai bune perioade pentru a obține tarife mai bune și pentru a vă bucura în continuare de vremea temperată. Perioadele de vârf care tind să fie mai scumpe, indiferent unde te îndrepți, sunt iunie și iulie, din cauza programului de vacanță de vară pentru familii, și decembrie, în preajma Crăciunului și Anului Nou.
                    </p>
                </div>
            </div>
            <div className="article-div-2">
                <div>
                    <h4>
                        Cum pot găsi cele mai ieftine zboruri pe Jauntie?
                    </h4>
                    <p>
                        Comparați prețurile biletelor de avion dintr-o privire dintr-un inventar mare de transportatori pe Jauntie. Puteți obține zboruri ieftine rămânând flexibil cu datele călătoriei, transportatorii și zboruri non-stop pentru a obține cel mai bun preț. Sfat: Deveniți membru (este gratuit!) pentru a câștiga recompense la fiecare rezervare. Vă facem călătoria fără stres și obținem oferte incredibile de bilete de avion, astfel încât să vă puteți relaxa și să vă începeți vacanța sau călătoria de afaceri.
                    </p>
                </div>
                <div>
                    <h4>
                        Cum pot economisi bani la zboruri?
                    </h4>
                    <p>
                        Combinarea și potrivirea companiilor aeriene și a tipurilor de tarife ar putea ajuta la economisirea de bani pe biletele de avion către destinația dvs. Comparați cu ușurință prețurile la transportatori, datele de sosire și plecare, clasa de cabină a avionului și multe altele atunci când rezervați cu Jauntie. Rezervarea biletului de avion într-o duminică și plecarea joi sau vineri ar putea economisi bani*, pe baza datelor istorice
                    </p>
                </div>
                <div>
                    <h4>
                        Cum pot obține un zbor ieftin de ultimă oră?
                    </h4>
                    <p>
                        Analiza datelor istorice privind modelele de prețuri ale zborurilor arată că puteți găsi în continuare oferte uimitoare la biletele de avion cu 3 săptămâni înainte de plecare*. Încercați să fiți flexibil cu datele călătoriei, aeroporturi, zboruri non-stop pentru a găsi cele mai ieftine zboruri pe Jauntie. Fie că plănuiești o călătorie rapidă de afaceri sau o vacanță spontană cu prietenii, vei avea de ales între zboruri de ultim moment, dus-întors sau zboruri din mai multe orașe pe Jauntie. Veți găsi tot ce aveți nevoie pentru călătoriile dvs. într-un singur loc și totul la prețul corect. 
                    </p>
                </div>
                <p id="sp">
                    <i>*Specialiștii în date de la Jauntie au analizat datele globale de zbor pentru a distila informații utile, pentru a ajuta oamenii să economisească bani în călătorii. Deși este imposibil să garantăm când veți găsi cele mai mici prețuri, după examinarea variabilelor, gripa nosatră a putut observa tendințele. Cea mai bună zi a săptămânii pentru a rezerva și a plănui călătoria se bazează pe prețurile medii ale biletelor dus-întors din ianuarie până la începutul lunii octombrie, atât pentru 2020, cât și pentru 2021, provenite din baza de date de vânzări globale a companiilor aeriene.</i></p>
            </div>
        </article>

    </section>
      </>);
}
