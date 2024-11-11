<template>
  <section id="sectionContacte"></section>
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
      <img class="logoFooter" href="#" @click.prevent="scrollToSection('sectionInici')" src="@/media/common/LogoCut.png"
        alt="Logo">
      <div class="textlegal"><a class="textlegalLink" href="/cookies" target="_blank">{{ $t('footerInfolegal1') }}</a>
      </div>
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
      <div class="textlegalmovil"><a class="textlegalLink" href="/cookies" target="_blank"> {{ $t('footerInfolegal1')
          }}</a></div>

    </div>

  </div>
</template>

<script>
export default {
  setup() {

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };




    return {
      scrollToSection,
    };
  },
};

</script>

<style lang="scss">
@import "../../assets/styles/mainFooter.scss";
</style>