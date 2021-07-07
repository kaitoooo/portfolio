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

        window.addEventListener('scroll', function () {
            const scroll = window.pageYOffset;
            const wd = window.innerWidth;
            const sp = 768;
            if (wd <= sp) {
                if (scroll > 1500) {
                    document.body.style.backgroundColor = '#310133';
                } else if (scroll > 1000) {
                    document.body.style.backgroundColor = '#053301';
                } else if (scroll > 500) {
                    document.body.style.backgroundColor = '#0f0133';
                } else {
                    document.body.style.backgroundColor = '#2a2a2a';
                }
            } else {
                if (scroll > 3300) {
                    document.body.style.backgroundColor = '#310133';
                } else if (scroll > 2500) {
                    document.body.style.backgroundColor = '#053301';
                } else if (scroll > 1000) {
                    document.body.style.backgroundColor = '#0f0133';
                } else {
                    document.body.style.backgroundColor = '#2a2a2a';
                }
            }
        });
    },
});
</script>
