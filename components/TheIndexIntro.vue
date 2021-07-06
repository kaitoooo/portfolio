<template>
    <section class="intro" id="intro">
        <h2 class="intro__block" data-scroll data-scroll-type="fadeIn">
            <span class="intro__block--inner">
                <i class="intro__block--text intro__block--no01">A</i>
                <i class="intro__block--text intro__block--no02">b</i>
                <i class="intro__block--text intro__block--no03">o</i>
                <i class="intro__block--text intro__block--no04">u</i>
                <i class="intro__block--text intro__block--no05">t</i>
            </span>
            <span class="intro__block--inner">
                <i class="intro__block--text intro__block--no06"></i>
                <i class="intro__block--text intro__block--no07">m</i>
                <i class="intro__block--text intro__block--no08">e</i>
                <i class="intro__block--text intro__block--no09">.</i>
            </span>
        </h2>

        <div class="intro__slider">
            <div class="intro__slider--inner" data-scroll data-scroll-type="introBorder">
                <div class="intro__border intro__border--top" data-intro="borderTop"></div>
                <div class="intro__border intro__border--bottom" data-intro="borderBottom"></div>
                <div class="intro__border intro__border--left" data-intro="borderLeft"></div>
                <div class="intro__border intro__border--right" data-intro="borderRight"></div>
                <div class="intro__slider--wrap" data-intro="wrap">
                    <client-only>
                        <swiper :options="swiperOption">
                            <swiper-slide>
                                <div class="intro__box">
                                    <h2 class="intro__box--title">Kaito Takase</h2>
                                    <p class="intro__box--sub">Front-end Engineer</p>
                                    <p class="intro__box--text">
                                        1996年 10月4日 千葉出身<br />
                                        2019年 3月 法政大学 デザイン工学部 システムデザイン学科 卒業<br />
                                        2019年 4月 <a href="https://sgnl.jp/" target="_blank" rel="noopener noreferrer" class="intro__box--link">株式会社シグナル</a> 入社<span class="intro__box--icon"></span>
                                    </p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="intro__box">
                                    <h2 class="intro__box--title">Skills</h2>
                                    <p class="intro__box--text intro__box--text-en">
                                        HTML / CSS / JavaScript(Nuxt.js, Three.js) / <br />
                                        PHP ( WordPress) / GCP / <br />
                                        Rhinoceros / Blender / Unity
                                    </p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="intro__box">
                                    <h2 class="intro__box--title">Sns</h2>
                                    <p class="intro__box--text intro__box--text-en">
                                        Twitter<br />
                                        <a href="https://twitter.com/hitoeeeeeeee" target="_blank" rel="noopener noreferrer" class="intro__box--link intro__box--link-twitter">https://twitter.com/hitoeeeeeeee</a><span class="intro__box--icon"></span><br />
                                        <br />
                                        Instagram<br />
                                        <a href="https://www.instagram.com/hito___e/" target="_blank" rel="noopener noreferrer" class="intro__box--link intro__box--link-instagram">https://www.instagram.com/hito___e/</a><span class="intro__box--icon"></span>
                                    </p>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </client-only>
                </div>
                <div slot="pagination" class="swiper-pagination" data-intro="pagination"></div>
            </div>

            <div class="intro__button" data-intro="button">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@import '~/assets/styles/components/index/_intro';
</style>

<script lang="ts">
import Vue from 'vue';
import { Scroll } from '~/assets/scripts/scroll';

export default Vue.extend({
    data(): {
        swiperOption: any;
    } {
        return {
            swiperOption: {
                effect: 'fade',
                speed: 400,
                slidesPerView: 1,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                backSliderOption: {
                    slidesPerView: 1,
                    speed: 500,
                    init: false,
                    loop: true,
                    loopedSlides: 0,
                },
            },
        };
    },
    mounted() {
        new Scroll();
    },
});
</script>
