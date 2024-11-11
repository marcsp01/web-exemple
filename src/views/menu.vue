<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';

const itemsToShow = ref(4.5);
const updateItemsToShow = () => {
  itemsToShow.value = window.innerWidth < 800 ? 2.5 : 4.5;
};


const activeButtonIndex = ref(0);
const direction = ref('next');

const setActiveButton = (index) => {
  direction.value = index > activeButtonIndex.value ? 'next' : 'prev';
  activeButtonIndex.value = index;
  let maxpixels = window.matchMedia("(max-width: 991px)")
  let medpixels = window.matchMedia("(max-width: 650px)")
  let minpixels = window.matchMedia("(max-width: 500px)")



  if (activeButtonIndex.value === 0) {
    if (minpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "1190px";

    } else if (medpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "1100px";

    } else if (maxpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "1050px";

    } else {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "1500px";

    }
  } else if (activeButtonIndex.value === 1) {
    if (minpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "1480px";

    } else if (medpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "1300px";

    } else if (maxpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "1330px";

    } else {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "2250px";

    }
  } else if (activeButtonIndex.value === 2) {
    if (minpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "1750px";

    } else if (medpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "1600px";

    } else if (maxpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "1620px";

    } else {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "2500px";

    }

  } else if (activeButtonIndex.value === 3) {
    if (minpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "710px";

    } else if (medpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "560px";

    } else if (maxpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "600px";

    } else {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "1150px";

    }

  } else if (activeButtonIndex.value === 4) {
    if (minpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "710px";

    } else if (medpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "560px";

    } else if (maxpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "600px";

    } else {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "1100px";

    }

  } else {
    if (minpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "750px";

    } else if (medpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "600px";

    } else if (maxpixels.matches) {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "650px";

    } else {
      document.getElementById("footerSeparatorMenu").style.marginBottom = "1250px";

    }

  }
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
  <section id="sectionMenu"> </section>


  <div id="menuContainer">
    <div class="sectionContainer">

      <h1 class="sectionTitleCuina">{{ $t('menu') }}</h1>
      <div class="textContainerMenu">
        {{ $t('descripcioMenu1') }}
      </div>
    </div>

    <div class="buttonsContainer">

      <div class="buttonLlista buttonCarta" :class="{ active: activeButtonIndex === 0 }" @click="setActiveButton(0)">
        {{ $t('botomenu0') }}

      </div>

      <div class="buttonLlista buttonMenu" :class="{ active: activeButtonIndex === 1 }" @click="setActiveButton(1)">
        {{ $t('botomenu1') }}
      </div>

      <div class="buttonLlista buttonMenu2" :class="{ active: activeButtonIndex === 2 }" @click="setActiveButton(2)">
        {{ $t('botomenu2') }}
      </div>
    </div>
    <div class="buttonsContainer">

      <div class="buttonLlista buttonCarta" :class="{ active: activeButtonIndex === 3 }" @click="setActiveButton(3)">
        {{ $t('botomenu3') }}

      </div>

      <div class="buttonLlista buttonMenu2" :class="{ active: activeButtonIndex === 4 }" @click="setActiveButton(4)">
        {{ $t('botomenu4') }}
      </div>

      <div class="buttonLlista buttonMenu" :class="{ active: activeButtonIndex === 5 }" @click="setActiveButton(5)">
        {{ $t('botomenu5') }}
      </div>
    </div>
    <div class="listMenuContainer">

      <transition :name="direction === 'next' ? 'slide-next' : 'slide-prev'" mode="out-in">
        <template v-if="activeButtonIndex === 0">
          <div>
            <div key="listCarta" class="listMenus listCarta">
              <div class="menuBorder">
                <div class="menuSectionTitle">{{ $t('cartaTitol1') }}</div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat1') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">23€</div>
                </div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat2') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">20,90€</div>
                </div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat3') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">21,00€</div>
                </div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat4') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">15,50€</div>
                </div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat5') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">15,50€</div>
                </div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat6') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">18,90€</div>
                </div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat7') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">14,50€</div>
                </div>
                <div class="menuSectionTitle">{{ $t('cartaTitol2') }}</div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat8') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">per pers. s/m</div>
                </div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat9') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">per pers. 28,00€</div>
                </div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat10') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">per pers. 19,90€</div>
                </div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat11') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">per pers. 21,00€</div>
                </div>

                <div class="menuSectionTitle">{{ $t('cartaTitol3') }}</div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat12') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">s/m</div>
                </div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat13') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">s/m</div>
                </div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat14') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">35,00€</div>
                </div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat15') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">39,90€</div>
                </div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat16') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">s/m</div>
                </div>

                <div class="menuSectionTitle">{{ $t('cartaTitol4') }}</div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat17') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">27,00€</div>
                </div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat18') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">s/p</div>
                </div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat19') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">26,90€</div>
                </div>
                <div class="dish">
                  <div class="dishName">{{ $t('cartaPlat20') }}</div>
                  <div class="dotts"></div>
                  <div class="dishPrice">22,90€</div>
                </div>



              </div>
            </div>
            <a href="/menus/CartaLaFabricaDelGel.pdf" download="Carta la fàbrica del gel">
              <div class="download">{{ $t('descarregarCarta') }}</div>
            </a>
          </div>

        </template>
        <template v-else-if="activeButtonIndex === 1">
          <div>
            <div key="listMenu" class="listMenus listMenu">
              <div class="menuBorderV2">
                <div class="menuMainTitle">{{ $t('menu1Header') }}</div>
                <div class="dish3">
                  <div class="dishNameV2">{{ $t('menu1HeaderText') }}</div>
                </div>


                <div class="menuSectionTitle2">{{ $t('menuTitol1') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuPlat1') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuPlat2') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuPlat3') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuPlat4') }}</div>
                </div>
                <div class="menuSectionTitle">{{ $t('menuTitol2') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuPlat5') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuPlat6') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuPlat7') }}</div>
                </div>
                <div class="menuSectionTitle">{{ $t('menuTitol3') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuPlat8') }}</div>
                </div>
                <div class="dish2">
                  <div class="priceV2">35€</div>
                </div>

                <div class="menuMainTitle">{{ $t('menu2Header') }}</div>
                <div class="dish3">
                  <div class="dishNameV2">{{ $t('menu2HeaderText') }}</div>
                </div>


                <div class="menuSectionTitle2">{{ $t('menu2Titol1') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menu2Plat1') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menu2Plat2') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menu2Plat3') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menu2Plat4') }}</div>
                </div>
                <div class="menuSectionTitle">{{ $t('menu2Titol2') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menu2Plat5') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menu2Plat6') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menu2Plat7') }}</div>
                </div>
                <div class="menuSectionTitle">{{ $t('menu2Titol3') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menu2Plat8') }}</div>
                </div>
                <div class="dish2">
                  <div class="priceV2">45€</div>
                </div>

              </div>
            </div>
            <a href="/menus/MenusLaFabricaDelGel.pdf" download="Menú la fàbrica del gel">
              <div class="download">{{ $t('descarregarMenu') }}</div>
            </a>
          </div>
        </template>
        <template v-else-if="activeButtonIndex === 2">
          <div>
            <div key="listMenu2" class="listMenus2 listMenu2">
              <div class="menuBorderV2">

                <div class="menuMainTitle menuMainTitle2">{{ $t('menuDegTitol1') }}</div>

                <div class="dish4">
                  <div class="dishNameV2">{{ $t('menuDeg1Plat1') }}</div>
                </div>

                <div class="menuSectionTitle3">{{ $t('menuDegSubTitol1') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuDeg1Plat2') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuDeg1Plat3') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuDeg1Plat4') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuDeg1Plat5') }}</div>
                </div>
                <div class="menuSectionTitle">{{ $t('menuDegSubTitol2') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuDeg1Plat6') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuDeg1Plat7') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuDeg1Plat8') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuDeg1Plat9') }}</div>
                </div>

                <div class="menuSectionTitle">{{ $t('menuTitol3') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menu2Plat8') }}</div>
                </div>
                <div class="dish2">
                  <div class="priceV2">60€</div>
                </div>
                <div class="dish3">
                  <div class="dishNameV2">{{ $t('menuDegFinal1') }}</div>
                </div>
                <div class="dish3">
                  <div class="dishNameV2">{{ $t('menuDegFinal2') }}</div>
                </div>

                <div class="menuMainTitle menuMainTitle2">{{ $t('menuDegTitol2') }}</div>
                <div class="dish4">
                  <div class="dishNameV2">{{ $t('menuDeg1Plat1') }}</div>
                </div>



                <div class="menuSectionTitle3">{{ $t('menuDegSubTitol1') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuDeg2Plat1') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuDeg2Plat2') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuDeg2Plat3') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuDeg2Plat4') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuDeg2Plat5') }}</div>
                </div>

                <div class="menuSectionTitle">{{ $t('menuDegSubTitol2') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuDeg2Plat6') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuDeg2Plat7') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuDeg2Plat8') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuDeg2Plat9') }}</div>
                </div>
                <div class="menuSectionTitle">{{ $t('menu2Titol3') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menu2Plat8') }}</div>
                </div>
                <div class="dish2">
                  <div class="priceV2">120€</div>
                </div>
                <div class="dish3">
                  <div class="dishNameV2">{{ $t('menuDegFinal1') }}</div>
                </div>
                <div class="dish3">
                  <div class="dishNameV2">{{ $t('menuDegFinal2') }}</div>
                </div>



              </div>
            </div>
            <a href="/menus/MenusDegustacioLaFabricaDelGel.pdf" download="Menu_degustacio_la_fabrica_del_gel.pdf">
              <div class="download">{{ $t('descarregarMenu') }}</div>
            </a>
          </div>
        </template>
        <template v-else-if="activeButtonIndex === 3">
          <div>
            <div key="listMenu2" class=" listMenus3 listMenu2">
              <div class="menuBorderV2">

                <div class="menuMainTitle menuMainTitle2">{{ $t('menuEmpresesTitol1') }}</div>


                <div class="menuSectionTitle3">{{ $t('menuEmpresesSubTitol1') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuEmpresesPlat1') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuEmpresesPlat2') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuEmpresesPlat3') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuEmpresesPlat4') }}</div>
                </div>
                <div class="menuSectionTitle">{{ $t('menuEmpresesSubTitol2') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuEmpresesPlat5') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuEmpresesPlat6') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuEmpresesPlat7') }}</div>
                </div>
                <div class="menuSectionTitle">{{ $t('menuTitol3') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuEmpresesPlat8') }}</div>
                </div>
                <div class="dish2">
                  <div class="priceV2">50€</div>
                </div>
                <div class="dish3">
                  <div class="dishNameV2">{{ $t('menuEmpresesIVA') }}</div>
                </div>

              </div>
            </div>
            <a href="/menus/MenuEmpresesLaFabricaDelGel.pdf" download="Menú empreses la fàbrica del gel">
              <div class="download">{{ $t('descarregarMenu') }}</div>
            </a>
          </div>
        </template>
        <template v-else-if="activeButtonIndex === 4">
          <div>
            <div key="listMenu2" class="listMenus4 listMenu2">
              <div class="menuBorderV2">

                <div class="menuMainTitle menuMainTitle2">{{ $t('menuStEsteveTitol1') }}</div>


                <div class="menuSectionTitle3">{{ $t('menuStEsteveSubTitol1') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuStEstevePlat1') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuStEstevePlat2') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuStEstevePlat3') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuStEstevePlat4') }}</div>
                </div>
                <div class="menuSectionTitle">{{ $t('menuStEsteveSubTitol2') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuStEstevePlat5') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuStEstevePlat6') }}</div>
                </div>

                <div class="menuSectionTitle">{{ $t('menuStEsteveSubTitol3') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuStEstevePlat7') }}</div>
                </div>
                <div class="dish2">
                  <div class="priceV2">60€</div>
                </div>
                <div class="dish3">
                  <div class="dishNameV2">{{ $t('menuEmpresesIVA') }}</div>
                </div>


              </div>
            </div>
            <a href="/menus/MenuSantEsteveLaFabricaDelGel.pdf" download="Menú  Sant esteve la fàbrica del gel">
              <div class="download">{{ $t('descarregarMenu') }}</div>
            </a>
          </div>
        </template>
        <template v-else-if="activeButtonIndex === 5">
          <div>
            <div key="listMenu2" class="listMenus5 listMenu2">
              <div class="menuBorderV2">

                <div class="menuMainTitle menuMainTitle2">{{ $t('menuFiAnyTitol1') }}</div>


                <div class="menuSectionTitle3">{{ $t('menuFiAnySubTitol1') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuFiAnyPlat1') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuFiAnyPlat2') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuFiAnyPlat3') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuFiAnyPlat4') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuFiAnyPlat5') }}</div>
                </div>

                <div class="menuSectionTitle">{{ $t('menuFiAnySubTitol2') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuFiAnyPlat5') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuFiAnyPlat6') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuFiAnyPlat7') }}</div>
                </div>


                <div class="menuSectionTitle">{{ $t('menu2Titol3') }}</div>
                <div class="dish2">
                  <div class="dishNameV2">{{ $t('menuFiAnyPlat9') }}</div>
                </div>
                <div class="dish2">
                  <div class="dishNameV2"></div>
                </div>

                <div class="dish2">
                  <div class="dishNameV3">{{ $t('menuStEstevePlat7') }}</div>
                </div>

                <div class="dish2">
                  <div class="priceV2">115€</div>
                </div>
                <div class="dish3">
                  <div class="dishNameV2">{{ $t('menuEmpresesIVA') }}</div>
                </div>


              </div>
            </div>
            <a href="/menus/MenuFiDanyLaFabricaDelGel.pdf" download="Menú fi d'any la fàbrica del gel">
              <div class="download">{{ $t('descarregarMenu') }}</div>
            </a>
          </div>
        </template>
      </transition>
    </div>
  </div>
  <div id="footerSeparatorMenu"></div>
</template>

<style lang="scss">
@import "../assets/styles/views/menu.scss";
</style>
