<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';

const showImage = ref(false);
const itemsToShow = ref(2.5);


const updateItemsToShow = () => {
  itemsToShow.value = window.innerWidth < 991 ? 1.5 : 2.5;
};

onMounted(() => {
  setTimeout(() => {
    showImage.value = true;
  }, 100);

  updateItemsToShow();
  window.addEventListener('resize', updateItemsToShow);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateItemsToShow);
});
</script>
<template>
  <section id="sectionInici"></section>

  <transition name="fade">
    <img v-if="showImage" class="homeImg" src="@/assets/homeImg3.png" alt="home" />
  </transition>
  <section id="sectionRestaurant"></section>
  <div id="restaurantContainer">
    <div class="sectionContainer" style="margin-top: 150px;">
      <h1 class="sectionTitle" id="sectionRestaurant">{{ $t('home') }}</h1>
      <div class="textContainer">
        {{ $t('descripcioRestaurantParraf1') }}<br><br>
        {{ $t('descripcioRestaurantParraf2') }}
        <br><br>
        {{ $t('descripcioRestaurantParraf3') }}

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

</template>
<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import img1 from '@/assets/imgs/restaurant/img1.png';
import img2 from '@/assets/imgs/restaurant/img2.png';
import img3 from '@/assets/imgs/restaurant/img3.png';
import img4 from '@/assets/imgs/restaurant/img4.png';
import img5 from '@/assets/imgs/restaurant/img5.png';
import img6 from '@/assets/imgs/restaurant/img6.png';
import img7 from '@/assets/imgs/restaurant/img7.png';
import img8 from '@/assets/imgs/restaurant/img8.png';
import img91 from '@/assets/imgs/restaurant/img91.png';



export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      images: [
        //img1,
        //img2,
        img3,
        img6,
        img4,
        img7,
        img5,
        img8,
        img91,

      ],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/styles/views/home.scss";
</style>