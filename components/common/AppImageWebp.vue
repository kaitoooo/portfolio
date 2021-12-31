<template>
    <picture>
        <source media="(max-width: 768px)" :srcset="`${getSpImgWebp}`" type="image/webp" />
        <source media="(max-width: 768px)" :srcset="`${getSpImg}`" type="image/png" />
        <source :srcset="`${getPcImgWebp}`" type="image/webp" />
        <img decoding="async" :src="`${getPcImg}`" :alt="alt" :role="role" :width="width" :height="height" />
    </picture>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        pcImg: {
            type: String,
            required: true,
        },
        spImg: {
            type: String,
            required: false,
        },
        pcImgWebp: {
            type: String,
            required: true,
        },
        spImgWebp: {
            type: String,
            required: false,
        },
        alt: {
            type: String,
            required: false,
        },
        role: {
            type: String,
            required: false,
        },
        width: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
    },
    computed: {
        getPcImg(): any {
            return require(`~/assets/img/pc/lo-res/${this.pcImg}`);
        },
        getSpImg(): any {
            return require(`~/assets/img/sp/${this.spImg}`);
        },
        getPcImgWebp(): any {
            return require(`~/assets/img/pc/webp/${this.pcImgWebp}`);
        },
        getSpImgWebp(): any {
            return require(`~/assets/img/sp/webp/${this.spImgWebp}`);
        },
    },
});
</script>
