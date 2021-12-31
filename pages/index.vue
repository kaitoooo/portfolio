<template>
    <div class="container">
        <TheIndexKv />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheIndexKv from '~/components/TheIndexKv.vue';

export default Vue.extend({
    components: { TheIndexKv },
    mounted() {
        document.title = 'Kaito Takase Portfolio';
    },
});
</script>
