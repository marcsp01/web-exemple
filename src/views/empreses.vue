<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';


const name = ref('');
const email = ref('');
const termsAccepted = ref(false);
const nameError = ref(false);
const emailError = ref(false);
const termsError = ref(false);

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const submitForm = () => {
  nameError.value = false;
  emailError.value = false;
  termsError.value = false;

  if (!name.value) {
    nameError.value = true;
  }
  if (!email.value || !validateEmail(email.value)) {
    emailError.value = true;
  }
  if (!termsAccepted.value) {
    termsError.value = true;
  }

  if (!nameError.value && !emailError.value && !termsError.value) {
    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('email', email.value);


    fetch('/send_email.php', {
      method: 'POST',
      body: formData
    })
    name.value = '';
    email.value = '';
    termsAccepted.value = false;
    let div = document.getElementById("totOk");
    div.classList.remove("totokhide")
    div.classList.add("totokshow")
  }
};
const itemsToShow = ref(2.5);
const updateItemsToShow = () => {
  itemsToShow.value = window.innerWidth < 991 ? 1.5 : 2.5;
};

onMounted(() => {
  updateItemsToShow();
  window.addEventListener('resize', updateItemsToShow);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateItemsToShow);
});
</script>
<template>
  <section id="sectionEmpreses"></section>

  <div id="empresesContainer">
    <div class="sectionContainer">

      <h1 class="sectionTitleCuina">{{ $t('titolEmpresa') }}</h1>
      <div class="textContainerEmpreses">
        {{ $t('descripcioEmpreses1') }}

      </div>
      <div id="contactForm">
        <div>
          <input type="text" class="contactForm" id="name" :placeholder="$t('empresesFormNom')" v-model="name"
            :class="{ 'input-error': nameError }" />
        </div>
        <div>
          <input type="email" class="contactForm" :placeholder="$t('empresesFormMail')" v-model="email"
            :class="{ 'input-error': emailError }" />
        </div>
        <div style="display: flex;">
          <input type="checkbox" id="terms" v-model="termsAccepted" :class="{ 'input-error-checkbox': termsError }" />
          <label class="termsLab" for="terms">{{ $t('empresesFormInfo1') }} <a class="condicions" href="/cookies"
              target="_blank">{{ $t('empresesFormInfo2') }}</a></label>
        </div>
        <div>
          <div class="submitForm" @click="submitForm">{{ $t('empresesFormBoto') }}</div>
          <div id="totOk" class="totokhide">{{ $t('empresesAllright') }}</div>
        </div>
      </div>


    </div>
    <div class="carrouselContainer">
      <Carousel :items-to-show="itemsToShow" :wrap-around="true">
        <Slide v-for="(image, index) in images" :key="index">
          <img :src="image" class="carousel__item" :alt="'Image ' + (index + 1)" />
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>

  </div>
  <div class="footerSeparatorEmpreses"></div>

</template>
<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import img1 from '@/assets/imgs/empreses/img1.png';
import img2 from '@/assets/imgs/empreses/img2.png';
import img3 from '@/assets/imgs/empreses/img3.png';
import img4 from '@/assets/imgs/empreses/img4.png';
import img5 from '@/assets/imgs/empreses/img5.png';




export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      images: [
        img1,
        img2,
        img3,
        img4,
        img5
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/styles/views/empreses.scss";
</style>