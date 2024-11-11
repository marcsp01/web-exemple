<template>
  <div class="header">
    <div class="content">
      <a class="firstHeader"></a>
      <img class="logoHeader" href="#" @click.prevent="scrollToSection('sectionInici')" src="@/media/common/LogoCut.png"
        alt="Logo" />

      <a class="optionsHeader" href="#" @click.prevent="scrollToSection('sectionRestaurant')">{{ $t('headerRestaurant')
        }}</a>
      <a class="optionsHeader" href="#" @click.prevent="scrollToSection('sectionCuina')">{{ $t('headerCuina') }}</a>
      <a class="optionsHeader" href="#" @click.prevent="scrollToSection('sectionMenu')">{{ $t('headerMenu') }}</a>
      <a class="optionsHeader" href="#" @click.prevent="scrollToSection('sectionEmpreses')">{{
        $t('headerEmpreses') }}</a>
      <a class="optionsHeader" href="#" @click.prevent="scrollToSection('sectionContacte')">{{
        $t('headerContacte') }}</a>

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
      <a class="mobile-option" href="#" @click.prevent="scrollToSection('sectionRestaurant')">{{ $t('headerRestaurant')
        }}</a>
      <a class="mobile-option" href="#" @click.prevent="scrollToSection('sectionCuina')">{{ $t('headerCuina') }}</a>
      <a class="mobile-option" href="#" @click.prevent="scrollToSection('sectionMenu')">{{ $t('headerMenu') }}</a>
      <a class="mobile-option" href="#" @click.prevent="scrollToSection('sectionEmpreses')">{{ $t('headerEmpreses')
        }}</a>
      <a class="mobile-option" href="#" @click.prevent="scrollToSection('sectionContacte')">{{ $t('headerContacte')
        }}</a>

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
</template>
<script>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { locale } = useI18n();
    const menuVisible = ref(false);

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {

        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;


        const offsetPosition = sectionPosition - 120;


        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }

      menuVisible.value = false;
    };

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
      scrollToSection,
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
    document.getElementById('flagImgMain').src = "../../src/media/common/flags/CA.png";
  }
  else if (language == "ES") {
    document.getElementById('flagImgMain').src = "../../src/media/common/flags/ES.png";
  }
  else if (language == "EN") {
    document.getElementById('flagImgMain').src = "../../src/media/common/flags/EN.png";
  } else {
    document.getElementById('flagImgMain').src = "../../src/media/common/flags/FR.png";
  }
}
</script>
F

<style lang="scss">
@import "../../assets/styles/mainHeader.scss";
</style>
