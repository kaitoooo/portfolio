<template>
    <section class="works-all">
        <h2 class="works-all__block" data-scroll data-scroll-type="fadeIn">
            <span class="works-all__block--inner">
                <i class="works-all__block--text works-all__block--no01">W</i>
                <i class="works-all__block--text works-all__block--no02">o</i>
                <i class="works-all__block--text works-all__block--no03">r</i>
                <i class="works-all__block--text works-all__block--no04">k</i>
                <i class="works-all__block--text works-all__block--no05">s</i>
                <i class="works-all__block--text works-all__block--no06">.</i>
            </span>
        </h2>
        <ul class="works-all__list">
            <li class="works-all__list--item" v-for="(thumbnail, index) in thumbnailList()" :key="index">
                <a :href="thumbnail.link" class="works-all__list--link" data-scroll data-scroll-type="fadeIn">
                    <div class="works-all__border works-all__border--top"></div>
                    <div class="works-all__border works-all__border--bottom"></div>
                    <div class="works-all__border works-all__border--left"></div>
                    <div class="works-all__border works-all__border--right"></div>
                    <AppImage :pc-img="`${thumbnail.pc}`" :pc-img-retina="`${thumbnail.retina}`" :alt="`${thumbnail.alt}`" :role="``" :width="thumbnail.width" :height="thumbnail.height" />
                    <figcaption class="works-all__caption">
                        <h3 class="works-all__caption--title" v-html="thumbnail.title"></h3>
                        <p class="works-all__caption--text" v-html="thumbnail.day"></p>
                    </figcaption>
                </a>
            </li>
        </ul>
        <nuxt-link to="/" class="works-all__archive works-all__archive--button" data-scroll data-scroll-type="fadeIn">
            <div class="works-all__archive--border works-all__archive--border-top"></div>
            <div class="works-all__archive--border works-all__archive--border-bottom"></div>
            <div class="works-all__archive--border works-all__archive--border-left"></div>
            <div class="works-all__archive--border works-all__archive--border-right"></div>
            <div class="works-all__archive--outer">
                <p>Top</p>
                <p>Top</p>
            </div>
        </nuxt-link>
    </section>
</template>
<style lang="scss" scoped>
@import '~/assets/styles/components/archive/_works-all';
</style>

<script lang="ts">
import Vue from 'vue';
import { WorksAll } from '~/types/worksAll';
import { Scroll } from '~/assets/scripts/scroll';

export default Vue.extend({
    data() {
        return {
            thumbnailList: (): Array<WorksAll> => [
                {
                    link: 'https://kaito-takase.dev/distortion-hover-effect/',
                    pc: 'hoverEffect.png',
                    retina: 'hoverEffect@2x.png',
                    alt: 'Demo DistortionHoverEffect',
                    width: 1341,
                    height: 733,
                    title: 'Demo DistortionHoverEffect',
                    day: '2021 / 07 / 15',
                },
                {
                    link: 'https://kaito-takase.dev/3d-animation/',
                    pc: '3d-animation.png',
                    retina: '3d-animation@2x.png',
                    alt: '3D Demo Blender Animation',
                    width: 1341,
                    height: 733,
                    title: '3D Demo Blender Animation',
                    day: '2021 / 07 / 13',
                },
                {
                    link: 'https://kaito-takase.dev/3d-watch/',
                    pc: 'watch.png',
                    retina: 'watch@2x.png',
                    alt: '3D Demo Watch',
                    width: 1341,
                    height: 733,
                    title: '3D Demo Watch',
                    day: '2021 / 06 / 24',
                },
                {
                    link: 'https://kaito-takase.dev/3d-juice/',
                    pc: 'juice.png',
                    retina: 'juice@2x.png',
                    alt: '3D Demo Juice',
                    width: 1341,
                    height: 733,
                    title: '3D Demo Juice',
                    day: '2021 / 06 / 24',
                },
                {
                    link: 'https://kaito-takase.dev/3d-dice/',
                    pc: 'dice.png',
                    retina: 'dice@2x.png',
                    alt: '3D Demo Dice',
                    width: 1341,
                    height: 733,
                    title: '3D Demo Dice',
                    day: '2021 / 05 / 11',
                },
                {
                    link: 'https://kaito-takase.dev/header-mouse-hover/',
                    pc: '20210412.png',
                    retina: '20210412@2x.png',
                    alt: 'Header & Mouse Hover',
                    width: 1341,
                    height: 733,
                    title: 'Header & Mouse Hover',
                    day: '2021 / 04 / 12',
                },
                {
                    link: 'https://kaito-takase.dev/barbajs/page1.html/',
                    pc: '20210208.png',
                    retina: '20210208@2x.png',
                    alt: 'Barba.js(v2)',
                    width: 1341,
                    height: 733,
                    title: 'Barba.js(v2)',
                    day: '2021 / 02 / 08',
                },
                {
                    link: 'https://kaito-takase.dev/one-scroll/',
                    pc: '20210202.png',
                    retina: '20210202@2x.png',
                    alt: 'One Scroll',
                    width: 1341,
                    height: 733,
                    title: 'One Scroll',
                    day: '2021 / 02 / 02',
                },
                {
                    link: 'https://kaito-takase.dev/page-transition/',
                    pc: 'page_transition.png',
                    retina: 'page_transition@2x.png',
                    alt: 'Page Transition',
                    width: 1341,
                    height: 733,
                    title: 'Page Transition',
                    day: '2021 / 01 / 27',
                },
                {
                    link: 'https://kaito-takase.dev/scroll-interlocking/',
                    pc: '20210121.png',
                    retina: '20210121@2x.png',
                    alt: 'Scroll Interlocking',
                    width: 1341,
                    height: 733,
                    title: 'Scroll Interlocking',
                    day: '2021 / 01 / 21',
                },
                {
                    link: 'https://kaito-takase.dev/scroll-count-circle/',
                    pc: '20210114.png',
                    retina: '20210114@2x.png',
                    alt: 'Scroll Count Circle',
                    width: 1341,
                    height: 733,
                    title: 'Scroll Count Circle',
                    day: '2021 / 01 / 13',
                },
                {
                    link: 'https://kaito-takase.dev/scroll-count-bar/',
                    pc: '20210113.png',
                    retina: '20210113@2x.png',
                    alt: 'Scroll Count Bar',
                    width: 1341,
                    height: 733,
                    title: 'Scroll Count Bar',
                    day: '2021 / 01 / 13',
                },
                {
                    link: 'https://kaito-takase.dev/scroll-image-parallax/',
                    pc: 'scroll-image-parallax.png',
                    retina: 'scroll-image-parallax@2x.png',
                    alt: 'Scroll Image Parallax',
                    width: 1341,
                    height: 733,
                    title: 'Scroll Image Parallax',
                    day: '2021 / 01 / 10',
                },
                {
                    link: 'https://kaito-takase.dev/header-mix-blend-mode/',
                    pc: '20210108.png',
                    retina: '20210108@2x.png',
                    alt: 'Header & Mix Blend Mode',
                    width: 1341,
                    height: 733,
                    title: 'Header & Mix Blend Mode',
                    day: '2021 / 01 / 08',
                },
                {
                    link: 'https://kaito-takase.dev/20210107/',
                    pc: '20210107.png',
                    retina: '20210107@2x.png',
                    alt: 'Header',
                    width: 1341,
                    height: 733,
                    title: 'Header',
                    day: '2021 / 01 / 07',
                },
                {
                    link: 'https://kaito-takase.dev/blender-animation/',
                    pc: 'blender-animation.png',
                    retina: 'blender-animation@2x.png',
                    alt: 'blender-animation',
                    width: 1341,
                    height: 733,
                    title: 'blender-animation',
                    day: '2020 / 12 / 22',
                },
            ],
        };
    },
    mounted() {
        new Scroll();
    },
});
</script>
