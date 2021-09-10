<template>
    <section class="works" id="works">
        <h2 class="works__block" data-scroll data-scroll-type="fadeIn">
            <span class="works__block--inner">
                <i class="works__block--text works__block--no01">W</i>
                <i class="works__block--text works__block--no02">o</i>
                <i class="works__block--text works__block--no03">r</i>
                <i class="works__block--text works__block--no04">k</i>
                <i class="works__block--text works__block--no05">s</i>
                <i class="works__block--text works__block--no06">.</i>
            </span>
        </h2>
        <ul class="works__list">
            <li class="works__list--item" data-scroll data-scroll-type="fadeIn">
                <div class="works__border works__border--top"></div>
                <div class="works__border works__border--bottom"></div>
                <div class="works__border works__border--left"></div>
                <div class="works__border works__border--right"></div>
                <a href="https://kaito-takase.dev/3d-animation/" target="_blank" rel="noopener noreferrer" class="works__list--link">
                    <AppImage :pc-img="`3d-animation.png`" :pc-img-retina="`3d-animation@2x.png`" :alt="`3D Demo Blender Animation`" :role="``" :width="1341" :height="733" />
                    <figcaption class="works__caption">
                        <h3 class="works__caption--title">3D Demo Blender Animation</h3>
                        <p class="works__caption--text">2021 / 07 / 13</p>
                    </figcaption>
                </a>
            </li>
            <li class="works__list--item" data-scroll data-scroll-type="fadeIn">
                <div class="works__border works__border--top"></div>
                <div class="works__border works__border--bottom"></div>
                <div class="works__border works__border--left"></div>
                <div class="works__border works__border--right"></div>
                <a href="https://kaito-takase.dev/3d-dice/" target="_blank" rel="noopener noreferrer" class="works__list--link">
                    <AppImage :pc-img="`dice.png`" :pc-img-retina="`dice@2x.png`" :alt="`3D Demo Dice`" :role="``" :width="1341" :height="733" />
                    <figcaption class="works__caption">
                        <h3 class="works__caption--title">3D Demo Dice</h3>
                        <p class="works__caption--text">2021 / 05 / 11</p>
                    </figcaption>
                </a>
            </li>
            <li class="works__list--item" data-scroll data-scroll-type="fadeIn">
                <div class="works__border works__border--top"></div>
                <div class="works__border works__border--bottom"></div>
                <div class="works__border works__border--left"></div>
                <div class="works__border works__border--right"></div>
                <a href="https://kaito-takase.dev/3d-watch/" target="_blank" rel="noopener noreferrer" class="works__list--link">
                    <AppImage :pc-img="`watch.png`" :pc-img-retina="`watch@2x.png`" :alt="`3D Demo Watch`" :role="``" :width="1341" :height="733" />
                    <figcaption class="works__caption">
                        <h3 class="works__caption--title">3D Demo Watch</h3>
                        <p class="works__caption--text">2021 / 07 / 02</p>
                    </figcaption>
                </a>
            </li>
            <li class="works__list--item" data-scroll data-scroll-type="fadeIn">
                <div class="works__border works__border--top"></div>
                <div class="works__border works__border--bottom"></div>
                <div class="works__border works__border--left"></div>
                <div class="works__border works__border--right"></div>
                <a href="https://kaito-takase.dev/3d-juice/" target="_blank" rel="noopener noreferrer" class="works__list--link">
                    <AppImage :pc-img="`juice.png`" :pc-img-retina="`juice@2x.png`" :alt="`3D Demo Juice`" :role="``" :width="1341" :height="733" />
                    <figcaption class="works__caption">
                        <h3 class="works__caption--title">3D Demo Juice</h3>
                        <p class="works__caption--text">2021 / 06 / 24</p>
                    </figcaption>
                </a>
            </li>
            <li class="works__list--item" data-scroll data-scroll-type="fadeIn">
                <div class="works__border works__border--top"></div>
                <div class="works__border works__border--bottom"></div>
                <div class="works__border works__border--left"></div>
                <div class="works__border works__border--right"></div>
                <a href="https://kaito-takase.dev/page-transition/" target="_blank" rel="noopener noreferrer" class="works__list--link">
                    <AppImage :pc-img="`page_transition.png`" :pc-img-retina="`page_transition@2x.png`" :alt="`Page Transition`" :role="``" :width="1341" :height="733" />
                    <figcaption class="works__caption">
                        <h3 class="works__caption--title">Page Transition</h3>
                        <p class="works__caption--text">2021 / 01 / 27</p>
                    </figcaption>
                </a>
            </li>
        </ul>
        <nuxt-link to="/archive" class="works__archive works__archive--button" data-scroll data-scroll-type="fadeIn">
            <div class="works__archive--border works__archive--border-top"></div>
            <div class="works__archive--border works__archive--border-bottom"></div>
            <div class="works__archive--border works__archive--border-left"></div>
            <div class="works__archive--border works__archive--border-right"></div>
            <div class="works__archive--outer">
                <p>See all</p>
                <p>See all</p>
            </div>
        </nuxt-link>
    </section>
</template>
<style lang="scss" scoped>
@import '~/assets/styles/components/index/_works';
</style>

<script lang="ts">
import Vue from 'vue';
import { Scroll } from '~/assets/scripts/scroll';

export default Vue.extend({
    mounted() {
        new Scroll();
    },
});
</script>
