<template>
    <div class="container">
        <TheIndexKv />
        <TheIndexIntro />
        <TheIndexWorks />
        <TheIndexArticles />
        <TheIndexContact />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheIndexKv from '~/components/TheIndexKv.vue';
import TheIndexIntro from '~/components/TheIndexIntro.vue';
import TheIndexWorks from '~/components/TheIndexWorks.vue';
import TheIndexArticles from '~/components/TheIndexArticles.vue';
import TheIndexContact from '~/components/TheIndexContact.vue';

export default Vue.extend({
    components: { TheIndexKv, TheIndexIntro, TheIndexWorks, TheIndexArticles, TheIndexContact },
    mounted() {
        setTimeout(() => {
            const hash = this.$route.hash;
            if (hash && hash.match(/^#.+$/)) {
                this.$scrollTo(hash);
            }
        }, 500);
    },
});
</script>
