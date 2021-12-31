<template>
    <div class="container">
        <TheNav />
        <TheProfileMv />
        <TheProfileAbout />
        <TheProfileContact />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheNav from '~/components/common/TheNav.vue';
import TheProfileMv from '~/components/profile/TheProfileMv.vue';
import TheProfileAbout from '~/components/profile/TheProfileAbout.vue';
import TheProfileContact from '~/components/profile/TheProfileContact.vue';

export default Vue.extend({
    components: { TheNav, TheProfileMv, TheProfileAbout, TheProfileContact },
    mounted() {
        document.title = 'Profile - Kaito Takase Portfolio -';
    },
});
</script>
