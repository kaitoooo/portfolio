<template>
    <section class="works-mv">
        <figure class="works-mv__img">
            <AppImageWebp :pc-img="`robot2.png`" :sp-img="`robot2-sp.png`" :pc-img-webp="`robot2.webp`" :sp-img-webp="`robot2-sp.webp`" :alt="``" :role="`none`" :width="1920" :height="1080" />
        </figure>
        <transition name="fade-up" appear>
            <h1 class="works-mv__title">WORKS</h1>
        </transition>
        <p class="works-mv__scroll">Scroll</p>
    </section>
</template>
<style lang="scss" scoped>
@import '~/assets/styles/project/works/_mv';
</style>
