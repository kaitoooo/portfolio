<template>
    <section class="kv">
        <div class="kv__loading" data-kv="wrap">
            <div class="kv__loading--grid">
                <div class="kv__loading--grid-line" data-kv="line"></div>
                <div class="kv__loading--grid-line" data-kv="line"></div>
                <div class="kv__loading--grid-line" data-kv="line"></div>
                <div class="kv__loading--grid-line" data-kv="line"></div>
                <div class="kv__loading--grid-line" data-kv="line"></div>
            </div>
            <div class="kv__loading--block" data-kv="block">
                <span class="kv__loading--block-inner">
                    <i class="kv__loading--block-text kv__loading--block-text-k" data-kv="textK">K</i>
                    <i class="kv__loading--block-text">a</i>
                    <i class="kv__loading--block-text">i</i>
                    <i class="kv__loading--block-text">t</i>
                    <i class="kv__loading--block-text">o</i>
                    <i class="kv__loading--block-text"></i>
                    <i class="kv__loading--block-text kv__loading--block-text-t" data-kv="textT">T</i>
                    <i class="kv__loading--block-text">a</i>
                    <i class="kv__loading--block-text">k</i>
                    <i class="kv__loading--block-text">a</i>
                    <i class="kv__loading--block-text">s</i>
                    <i class="kv__loading--block-text">e</i>
                </span>
            </div>
        </div>
        <div class="kv__canvas" data-canvas></div>
        <h1 class="kv__title" data-kv="title">
            Kaito<br />
            Takase<br />
            Portfolio
        </h1>
    </section>
</template>
<style lang="scss" scoped>
@import '~/assets/styles/components/index/_kv';
</style>

<script lang="ts">
import Vue from 'vue';
import Webgl from '~/assets/scripts/webgl';
// import { Webgl } from '~/assets/scripts/webgl';

export default Vue.extend({
    mounted() {
        new Webgl();
    },
});
</script>
