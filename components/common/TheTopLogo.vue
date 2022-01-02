<template>
    <section class="top-logo">
        <nuxt-link to="/" class="top-logo__link" :class="{ 'is-show': flgLogo }" @mouseover.native="linkOver" @mouseleave.native="linkLeave" data-logo="text">
            <span class="top-logo__letter" data-logo="letter">T</span>
            <span class="top-logo__letter" data-logo="letter">a</span>
            <span class="top-logo__letter" data-logo="letter">k</span>
            <span class="top-logo__letter" data-logo="letter">a</span>
            <span class="top-logo__letter" data-logo="letter">s</span>
            <span class="top-logo__letter" data-logo="letter">e</span>
            <span class="top-logo__letter" data-logo="letter">K</span>
            <span class="top-logo__letter" data-logo="letter">a</span>
            <span class="top-logo__letter" data-logo="letter">i</span>
            <span class="top-logo__letter" data-logo="letter">t</span>
            <span class="top-logo__letter" data-logo="letter">o</span>
        </nuxt-link>
    </section>
</template>
<style lang="scss" scoped>
@import '~/assets/styles/project/common/_top-logo';
</style>

<script lang="ts">
import Vue from 'vue';
import { gsap } from 'gsap';

export default Vue.extend({
    data(): {
        elms: {
            logo: HTMLElement;
        };
        elmsAll: {
            letter: NodeListOf<HTMLElement>;
        };
    } {
        return {
            elms: {
                logo: null,
            },
            elmsAll: {
                letter: null,
            },
        };
    },
    mounted() {
        this.init();
    },
    computed: {
        flgLogo(): boolean {
            return this.$store.getters['flgLogo'];
        },
    },
    methods: {
        init() {
            this.getWindowInfo();
        },
        getWindowInfo() {
            this.elms = {
                logo: document.querySelector('[data-logo="text"]'),
            };
            this.elmsAll = {
                letter: document.querySelectorAll('[data-logo="letter"]'),
            };
        },
        linkOver() {
            // hover
            gsap.to(this.elmsAll.letter, {
                stagger: 0.05,
                ease: 'power4.inOut',
                letterSpacing: '0',
            });
        },
        linkLeave() {
            // out
            gsap.to(this.elmsAll.letter, {
                stagger: 0.01,
                ease: 'power4.inOut',
                letterSpacing: '-2px',
            });
        },
    },
});
</script>
