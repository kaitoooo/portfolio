<template>
    <section class="articles" id="articles">
        <h2 class="articles__block" data-scroll data-scroll-type="fadeIn">
            <span class="articles__block--inner">
                <i class="articles__block--text articles__block--no01">A</i>
                <i class="articles__block--text articles__block--no02">r</i>
                <i class="articles__block--text articles__block--no03">t</i>
                <i class="articles__block--text articles__block--no04">i</i>
                <i class="articles__block--text articles__block--no05">c</i>
                <i class="articles__block--text articles__block--no06">l</i>
                <i class="articles__block--text articles__block--no07">e</i>
                <i class="articles__block--text articles__block--no08">s</i>
                <i class="articles__block--text articles__block--no09">.</i>
            </span>
        </h2>
        <div class="articles__text" data-scroll data-scroll-type="articlesBorder">
            <div class="articles__border articles__border--top" data-articles="borderTop"></div>
            <div class="articles__border articles__border--bottom" data-articles="borderBottom"></div>
            <div class="articles__border articles__border--left" data-articles="borderLeft"></div>
            <div class="articles__border articles__border--right" data-articles="borderRight"></div>
            <p class="articles__text--wrap" data-articles="wrap">
                Note<br />
                <a href="https://note.com/kaito_takase/" target="_blank" rel="noopener noreferrer" class="articles__link articles__link--note">https://note.com/kaito_takase/</a><span class="articles__icon"></span><br />
                <br />
                Zenn<br />
                <a href="https://zenn.dev/kaito_takase" target="_blank" rel="noopener noreferrer" class="articles__link articles__link--zenn">https://zenn.dev/kaito_takase</a><span class="articles__icon"></span>
            </p>
        </div>
    </section>
</template>
<style lang="scss" scoped>
// @import '~/assets/styles/components/index/_articles';
</style>

<script lang="ts">
import Vue from 'vue';
import { Scroll } from '~/assets/scripts/scroll';

export default Vue.extend({
    mounted() {
        new Scroll();
    },
});
</script>
