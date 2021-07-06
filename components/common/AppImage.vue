<template>
    <img decoding="async" :src="`${getPcImg}`" :srcset="`${getPcImgRetina} 2x`" :alt="alt" :role="role" :width="width" :height="height" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        pcImg: {
            type: String,
            required: true,
        },
        pcImgRetina: {
            type: String,
            required: true,
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
        getPcImgRetina(): any {
            return require(`~/assets/img/pc/hi-res/${this.pcImgRetina}`);
        },
    },
});
</script>
