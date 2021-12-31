<template>
    <section class="profile-mv">
        <figure class="profile-mv__img">
            <AppImageWebp :pc-img="`robot.png`" :sp-img="`robot-sp.png`" :pc-img-webp="`robot.webp`" :sp-img-webp="`robot-sp.webp`" :alt="``" :role="`none`" :width="1920" :height="1080" />
        </figure>
        <transition name="fade-up" appear>
            <h1 class="profile-mv__title">PROFILE</h1>
        </transition>
        <p class="profile-mv__scroll">Scroll</p>
    </section>
</template>
<style lang="scss" scoped>
@import '~/assets/styles/project/profile/_mv';
</style>
