<template>
    <section class="top-logo">
        <nuxt-link to="/" class="top-logo__link" :class="{ 'is-show': flgLogo }">
            <p class="top-logo__outer"><span class="top-logo__inner">Kaito Takase</span></p>
        </nuxt-link>
    </section>
</template>
<style lang="scss" scoped>
@import '~/assets/styles/project/common/_top-logo';
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    computed: {
        flgLogo(): boolean {
            return this.$store.getters['flgLogo'];
        },
    },
});
</script>
