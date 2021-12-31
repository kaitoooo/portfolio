<template>
    <div>
        <TheTopLogo />
        <Nuxt />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheTopLogo from '~/components/common/TheTopLogo.vue';

export default Vue.extend({
    components: { TheTopLogo },
});
</script>
