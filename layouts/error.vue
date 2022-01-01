<template>
    <div>
        <TheTopLogo />
        <TheErrorMv />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheTopLogo from '~/components/common/TheTopLogo.vue';
import TheErrorMv from '~/components/error/TheErrorMv.vue';

export default Vue.extend({
    components: { TheTopLogo, TheErrorMv },
});
</script>
