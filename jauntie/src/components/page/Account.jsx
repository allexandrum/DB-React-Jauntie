import '../layouts/css/sign_up.css'
export default function Account(){
    return <>
    <section id="accmain">
        <header>
            <p>Înregistrează-te pentru a călători mai ieftin cu <span>Jauntie</span></p>
            <hr/>
        </header>
        <article class="art-info">
                Creează-ți cont și vei călători mai <strong>ieftin.</strong> Hai și tu în comunitate!
                Dacă nu ai deja un cont pe <strong>Jauntie</strong>, aici îți poți crea unul.
                Completează formularul cu datele tale, iar apoi mergi pe oferta dorită pentru a o rezerva.
        </article>
        <article class="art-input">
            <div class="div-input1">
                <input type="text" placeholder="Nume"/>
                <input type="text" placeholder="Prenume"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Parola"/>
                <input type="text" placeholder="Telefon"/>
                <input type="text" placeholder="Localitate"/>
            </div>
            <div class="div-input2">
                <span>Beneficiile deținerii unui cont:</span>
                <p>Vei beneficia de acces rapid la documentele de călătorie</p>
                <p>Primești un istoric al comenzilor</p>
                <p>Obții un program de discount iar următoarele rezervări vor fi mult mai rapide.</p>
                <p>Obții reduceri la comenzile ce le vei face</p>
                    <button>Înregistrare</button>
                    <button>Logare</button>
            </div>
        </article>
    </section>
    </>
}