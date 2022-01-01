<template>
    <section class="mv">
        <transition name="fade-up" appear>
            <h1 class="mv__text">Page Not Found</h1>
        </transition>
        <transition name="scale-up" appear>
            <nuxt-link to="/" class="mv__link">Back to Top Page</nuxt-link>
        </transition>
    </section>
</template>
<style lang="scss" scoped>
@import '~/assets/styles/project/error/_mv';
</style>
