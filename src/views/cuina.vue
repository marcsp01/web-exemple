<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';


const itemsToShow = ref(3);


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


  <section id="sectionCuina"></section>
  <div id="cuinaContainer">
    <div class="sectionContainer">

      <h1 class="sectionTitleCuina">{{ $t('cuina') }}</h1>
      <div class="textContainerCuina">
        {{ $t('descripcioCuinaParraf1') }}

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
import img1 from '@/assets/imgs/cuina/cuina1.png';
import img2 from '@/assets/imgs/cuina/cuina2.png';
//import img3 from '@/assets/imgs/cuina/cuina3.png';
import img4 from '@/assets/imgs/cuina/cuina4.png';
import img5 from '@/assets/imgs/cuina/cuina5.png';
import img6 from '@/assets/imgs/cuina/cuina6.png';
import img7 from '@/assets/imgs/cuina/cuina7.png';





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
        //img3,
        img4,
        img5,
        img6,
        img7
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/styles/views/cuina.scss";
</style>