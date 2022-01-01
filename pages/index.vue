<template>
    <div class="container">
        <TheIndexMv />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheIndexMv from '~/components/TheIndexMv.vue';

export default Vue.extend({
    components: { TheIndexMv },
    mounted() {
        document.title = 'Kaito Takase Portfolio';
    },
});
</script>
