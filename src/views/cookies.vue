<template>
  <div class="header">
    <div class="content">
      <a class="firstHeader" href="/">
        <img class="logoHeader" src="@/media/common/LogoCut.png" alt="Logo" /></a>



      <ul class="languageSelector">
        <li>
          <img id="flagImgMain" src="@/media/common/flags/CA.png" alt="CA" />
          <div class="languageHider"></div>
          <ul>
            <li class="languageContainer" @click="changeLanguage('CA')">
              <img class="flagImg" src="@/media/common/flags/CA.png" alt="CA" /> <a></a>
            </li>
            <li class="languageContainer" @click="changeLanguage('ES')">
              <img class="flagImg" src="@/media/common/flags/ES.png" alt="ES" /> <a></a>
            </li>
            <li class="languageContainer" @click="changeLanguage('EN')">
              <img class="flagImg" src="@/media/common/flags/EN.png" alt="EN" /> <a></a>
            </li>
            <li class="languageContainer" @click="changeLanguage('FR')">
              <img class="flagImg" src="@/media/common/flags/FR.png" alt="FR" /> <a></a>
            </li>
          </ul>
        </li>
      </ul>


      <div id="botoMenuMobile" :class="{ active: menuVisible }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>


    <a href="https://www.instagram.com/lafabricadelgel/" target="_blank">
      <img class="insta" src="@/media/common/insta.png" alt="Instagram" />
    </a>
  </div>
  <div id="desplegableMobile" :class="{ visible: menuVisible }">
    <div class="menu-content">


      <div class="language-buttons">
        <img class="flagImg" src="@/media/common/flags/CA.png" alt="CA" @click="changeLanguage('CA')" />
        <img class="flagImg" src="@/media/common/flags/ES.png" alt="ES" @click="changeLanguage('ES')" />
        <img class="flagImg" src="@/media/common/flags/EN.png" alt="EN" @click="changeLanguage('EN')" />
        <img class="flagImg" src="@/media/common/flags/FR.png" alt="FR" @click="changeLanguage('FR')" />
      </div>

      <a href="https://www.instagram.com/lafabricadelgel/" target="_blank">
        <img class="insta-mobile" src="@/media/common/insta.png" alt="Instagram" />
      </a>
    </div>
  </div>
  <br>
  <div id="cookiestContainer">
    <div class="sectionContainer" style="margin-top: 150px;">

      <div class="textContainer">
        <b>COOKIES</b><br><br>
        Les cookies són breus informacions que s'envien i s'emmagatzemen a l'ordinador de
        l'usuari a través del seu navegador quan aquest es connecta a un web. Les galetes es
        poden utilitzar per demanar i emmagatzemar dades de l'usuari mentre està connectat per
        facilitar-li el servei. Hi ha dos tipus de cookies, les de sessió (que no se solen conservar) i
        les persistents que són per temps indefinit i serveixen per conservar dades de l'usuari per a
        serveis futurs. Les galetes poden ser pròpies o de tercers.<br><br>
        Existeixen diversos tipus de cookies:<br><br>
        Cookies tècniques que faciliten la navegació de l'usuari i la utilització de les diferents
        opcions o serveis que ofereix la web com identificar la sessió, permetre l'accés a
        determinades àrees, facilitar comandes, compres, emplenament de formularis, inscripcions,
        seguretat, facilitar funcionalitats (vídeos, xarxes socials, etc.).<br><br>
        Cookies de personalització que permeten a l'usuari accedir als serveis segons les seves
        preferències (idioma, navegador, configuració, etc.).<br><br>
        Cookies d'anàlisi que permeten l'anàlisi anònima del comportament dels usuaris de la web i
        que permeten mesurar l'activitat de l'usuari i elaborar perfils de navegació amb el fi objectiu
        de millorar els llocs web.<br><br>
        Cookies publicitàries que permeten la gestió dels espais publicitaris de la web.<br><br>
        Cookies de publicitat personalitzada que permeten la gestió dels espais publicitaris de la
        web sobre la base del comportament i els hàbits de navegació de l'usuari, d'on s'obté el seu
        perfil i aquest fet permet personalitzar la publicitat que es mostra en el navegador de
        l'usuari.<br><br>
        Mafesa únicament utilitza cookies tècniques, de personalització i anàlisi, pròpies i de
        tercers, que en cap cas tracten dades de caràcter personal ni capten hàbits de navegació
        per a finalitats publicitàries.<br><br>
        Per això, en accedir a la nostra web, en compliment de l'article 22 de la Llei de Serveis de la
        Societat de la Informació, en tractar cookies d'anàlisi, li hem sol·licitat el seu consentiment
        per al seu ús, que en tot cas s'instal·laran passat un termini de temps prudencial perquè
        l'usuari tingui temps de decidir prestar el seu consentiment o no.<br><br>
        De tota manera, l'informem que pot activar o desactivar aquestes cookies seguint les
        instruccions del seu navegador d'Internet.<br><br><br><br>

        <b>NOTES LEGALS</b><br><br>
        <u>Informació general</u><br><br>
        En compliment de la llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i
        Comerç Electrònic.<br><br>
        <u>Titular de la pàgina web</u><br><br>
        Restaurant La Fàbrica del Gel està domiciliada a:<br>
        Plaça Sant Pere, 6, 17230, Palamós (Girona)<br>
        inscrita en el registre mercantil de Barcelona,<br>
        B70858139<br><br>
        Adreça de correu electrònic de contacte: lafabricadelgel@hotmail.com és l'adreça web de
        https://www.lafabricadelgel.cat/es/ mitjançant la qual ofereix als usuaris d'internet informació
        sobre l'empresa i els serveis que ofereix.
        Telèfon de contacte: (+34) 972 600 408<br><br>
        Propietat intel·lectual © Copyright 2024 La Fàbrica del Gel, tots els drets d'explotació estan
        reservats. Els drets de propietat intel·lectual sobre el contingut íntegre d'aquesta pàgina web
        són propietat del restaurant La Fàbrica del Gel. Queda prohibida la reproducció,
        retransmissió, còpia, cessió o difusió total o parcial del seu contingut sense autorització
        expressa i per escrit. Així com tampoc s'autoritza:<br><br>
        · Presentació d'una pàgina del lloc web en una finestra que no pertany a La Fàbrica del Gel
        per mitjà de framing.<br><br>
        · La inserció d'una imatge difosa al lloc web en una pàgina que no és del restaurant La
        Fàbrica del Gel mitjançant in line linking.<br><br>
        · L'extracció d'elements del lloc web causant perjudici a La Fàbrica del Gel conforme les
        disposicions vigents.<br><br>
        <u>Responsabilitat dels continguts i els enllaços</u><br><br>
        El restaurant La Fàbrica del Gel no assumeix la responsabilitat de les infraccions que els
        usuaris puguin incórrer o dels danys i perjudicis causats per la utilització d'aquesta web i es
        reserva el dret d'actualització i modificació de la informació sense previ avís. El restaurant
        La Fàbrica del Gel no assumeix la responsabilitat del contingut, veracitat i errors en els
        enllaços als quals es pot accedir a través de la pàgina web. La única finalitat dels enllaços
        és la de proporcionar als usuaris l'accés a una informació que pot ser del seu interès.<br><br>
        <u>Dades de caràcter personal: política de privacitat</u><br><br>
        Les dades que l'usuari faciliti voluntàriament a través d'aquesta pàgina web, seran objecte
        de tractament automatitzat i s'incorporaran a un fitxer propietat del restaurant La Fàbrica
        del Gel a utilitzar les seves dades personals per funcions comercials, permetent enviar
        informacions publicitàries relacionades amb els seus productes i serveis. Les seves dades
        podran ser cedides a altres empreses amb finalitats promocionals i publicitàries. Segons
        estableix la Llei Orgànica 15/1999, de 13 de desembre, de protecció de dades de caràcter
        personal, qualsevol usuari pot exercir el dret d'accés, rectificació, cancel·lació i oposició de
        les seves dades personals facilitades, dirigint-se per escrit a: Restaurant La Fàbrica del Gel,
        Plaça Sant Pere, 6, 17230, Palamós (Girona)<br><br>
        El sistema de navegació i el software necessaris pel funcionament d'aquest lloc web recull,
        en el curs normal per al seu exercici, algunes dades personals la transmissió de les quals és
        implícita en l'ús dels protocols de comunicació d'Internet. Es tracta d'informació que no és
        obtinguda per ésser associada a interessats identificats, però que per la seva naturalesa
        podrien, mitjançant la seva elaboració o associació amb dades de tercers, permetre'n la
        identificació. Aquestes dades s'utilitzen amb l'exclusiva finalitat d'obtenir informació
        estadística anònima sobre l'ús del lloc web, així com també per controlar-ne el correcte
        funcionament tècnic i es cancel·len immediatament després de la seva elaboració.<br><br>
        <u>Llei i jurisdicció aplicable</u><br><br>
        Les anteriors condicions es regiran per la normativa espanyola.<br><br><br><br>
        <b>POLÍTICA DE PRIVACITAT I PROTECCIÓ DE DADES</b><br><br>
        De conformitat amb el Reglament (UE) 2016/679 del Parlament Europeu i del Consell de 27
        d'abril de 2016 relatiu a la Protecció de les Persones Físiques respecte al tractament de
        dades personals i a la lliure circulació de dades (en endavant RGPD) l'informem que les
        dades personals facilitades seran incorporades al nostre fitxer titularitat del restaurant La
        Fàbrica del Gel, Plaça Sant Pere, 6, 17230, Palamós (Girona)<br><br>
        En aquest sentit l'informem que la finalitat de la recollida i tractament de les dades és la
        gestió administrativa pròpies de la relació comercial existent i que es recullen exclusivament
        aquelles dades necessàries pel correcte desenvolupament de la relació contractual.<br><br>
        L'usuari garanteix l'autenticitat de les dades comunicades i serà l'únic responsable de les
        manifestacions falses o inexactes. Les dades de caràcter personal que ens faciliti seran
        sempre tractats de conformitat amb Reglament (UE) 2016/679 del Parlament Europeu i del
        Consell de 27 d'abril de 2016 relatiu a la Protecció de les Persones Físiques respecte al
        tractament de dades personals i a la lliure circulació de dades.<br><br>
        A conseqüència de l'accés dels usuaris a la present pàgina s'han generat uns fitxers de
        dades de caràcter personal que són titularitat del restaurant La Fàbrica del Gel.<br><br>
        Li comuniquem que el restaurant La Fàbrica del Gel. amb domicili a Plaça Sant Pere, 6,
        17230, Palamós (Girona) és el destinatari final d'aquestes dades i és qui decideix sobre la
        finalitat, el contingut i l'ús del tractament de les dades de caràcter personal que ens facilitin
        els usuaris. Les dades proporcionades seran utilitzades per poder accedir a la
        documentació disponible a aquesta web i també per a finalitats de màrqueting, vendes i
        suport.<br><br>
        El restaurant La Fàbrica del Gel podrà compartir aquesta informació amb empreses del grup
        en altres països per a les mateixes finalitats indicades anteriorment.(opcional)<br><br>
        En compliment de la normativa vigent, el restaurant La Fàbrica del Gel garanteix que ha
        adoptat totes les mesures tècniques i organitzatives necessàries per mantenir el nivell de
        seguretat requerit, en atenció a la naturalesa de les dades personals tractades.<br><br>
        L'informem que les seves dades seran cancel·lades en el moment en que ens revoqui el seu
        consentiment, procedint a la seva destrucció, excepte norma legal que requereixi la seva
        conservació, procedint en aquest cas al bloqueig de les dades fins que transcorri el termini
        de conservació.<br><br>
        En cas de disconformitat en relació a la tramitació de les seves dades pot presentar una
        reclamació davant l'Agència Espanyola de Protecció de Dades, organisme que ostenta
        l'autoritat de control en la matèria, ubicada al C/ Jorge Juan, 6 (28001 Madrid).<br><br>
        Per últim, també l'informem que en qualsevol moment pot exercir els drets d'accés,
        rectificació, supressió, limitació, portabilitat i oposició respecte a les seves dades de caràcter
        personal previstos a la llei, enviant un escrit acompanyat d'una fotocopia del document
        d'identitat al correu electrònic del restaurant La Fàbrica del Gel,<br>
        lafabricadelgel@hotmail.com<br><br>
        Aquest lloc web pot contenir enllaços a pàgines externes, el restaurant La Fàbrica del Gel
        no assumeix cap responsabilitat sobre els continguts ni sobre qualsevol altre aspecte
        relacionat amb aquestes pàgines o llocs web.<br><br>
        El restaurant La Fàbrica del Gel es reserva el dret de modificar la present política, informant
        prèviament als usuaris dels canvis que en ella s'introdueixin.

      </div>
    </div>
    <div class="footer">
      <div class="leftFooter" style="display: flex;">
        <div class="leftFooterContainer">
          <div class="titleFooter">{{ $t('footerTitolDireccio') }}</div>
          {{ $t('footerDireccio1') }} 6<br>
          <a class="numbers">17230</a> {{ $t('footerDireccio2') }}<br>
          {{ $t('footerDireccio3') }}
        </div>

        <div class="map-container">

          <iframe class="mapaRes"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.227856013295!2d3.1258261765602477!3d41.84492216748994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bbaafa7d558031%3A0x32563eeb476cd1fa!2sPla%C3%A7a%20de%20Sant%20Pere%2C%206%2C%2017230%20Palam%C3%B3s%2C%20Girona!5e0!3m2!1ses!2ses!4v1728559969472!5m2!1ses!2ses"
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div class="centerFooter">
        <a href="/"><img class="logoFooter" href="#" src="@/media/common/LogoCut.png" alt="Logo"></a>
      </div>
      <div class="rightFooter">
        <div class="titleFooter">{{ $t('footerTitolHorari') }}</div>
        {{ $t('footerHorari1') }}<br>
        {{ $t('footerHorari2') }} <a class="numbers">13.00</a>h – <a class="numbers">15.30</a>h<br>
        {{ $t('footerHorari3') }} <a class="numbers">19.30</a>h – <a class="numbers">23.00</a>h<br><br>
        <div class="titleFooter">{{ $t('footerTitolReserves') }}</div>
        T. <a class="numbers">972 600 408</a> <br>
        <a href="mailto:lafabricadelgel@hotmail.com"
          style="text-decoration: none;color: black;">lafabricadelgel@hotmail.com</a><br>
      </div>
    </div>
  </div>





</template>

<script>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { locale } = useI18n();
    const menuVisible = ref(false);

    const changeLanguage = (language) => {
      locale.value = language;
      document.cookie = 'lan=' + language;
      changeSelectedLan();
    };

    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };

    onMounted(() => {
      changeSelectedLan();
    });

    return {

      changeLanguage,
      toggleMenu,
      menuVisible
    };
  },
};


function changeSelectedLan() {
  let language = document.cookie.split('=')[1];
  console.log(language);
  if (language == "CA") {
    document.getElementById('flagImgMain').src = require('@/media/common/flags/CA.png');
  }
  else if (language == "ES") {
    document.getElementById('flagImgMain').src = require('@/media/common/flags/ES.png');
  }
  else if (language == "EN") {
    document.getElementById('flagImgMain').src = require('@/media/common/flags/EN.png');
  } else {
    document.getElementById('flagImgMain').src = require('@/media/common/flags/FR.png');
  }
}
</script>


<style lang="scss">
@import "../assets/styles/views/cookies.scss";
</style>