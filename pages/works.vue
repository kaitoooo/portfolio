<template>
    <div class="container">
        <TheNav />
        <TheWorksMv />
        <TheWorksAbout />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheNav from '~/components/common/TheNav.vue';
import TheWorksMv from '~/components/works/TheWorksMv.vue';
import TheWorksAbout from '~/components/works/TheWorksAbout.vue';

export default Vue.extend({
    components: { TheNav, TheWorksMv, TheWorksAbout },
    mounted() {
        document.title = 'Works - Kaito Takase Portfolio -';
    },
});
</script>
