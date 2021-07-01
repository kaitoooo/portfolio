<template>
    <picture>
        <source :media="`(max-width: ${breakPointSp}px)`" :srcset="`${getSpImg}`" />
        <img
            decoding="async"
            :src="`${getPcImg}`"
            :srcset="`${getPcImgRetina} 2x`"
            :alt="alt"
            :role="role"
            :width="width"
            :height="height"
        />
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
        pcImgRetina: {
            type: String,
            required: true,
        },
        spImg: {
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
        breakPointSp: () => 768,
        getPcImg(): any {
            return require(`~/assets/img/pc/${this.pcImg}`);
        },
        getPcImgRetina(): any {
            return require(`~/assets/img/pc/${this.pcImgRetina}`);
        },
        getSpImg(): any {
            return require(`~/assets/img/sp/${this.spImg}`);
        },
    },
});
</script>
