<template>
    <div>
        <TheHeader />
        <div class="grid">
            <div class="grid__line"></div>
            <div class="grid__line"></div>
            <div class="grid__line"></div>
            <div class="grid__line"></div>
            <div class="grid__line"></div>
        </div>
        <Nuxt />
        <TheFooter />
    </div>
</template>

<style lang="scss" scoped>
.grid {
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    z-index: 2;

    &__line {
        position: relative;
        flex-basis: 20%;
        border-right: 1px solid hsla(0, 0%, 100%, 0.1);
    }
}
</style>
