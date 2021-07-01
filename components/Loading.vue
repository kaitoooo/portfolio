<template>
    <div class="loading" id="loading">
      <div class="loading-inner">
        <h1><img srcset="~/assets/img/hi-res/title@2x.png 2x" src="~/assets/img/lo-res/title.png" alt="kaito takase portfolio"></h1>
        <div class="loading-inner__border"></div>
        <div class="loading-inner__bg"></div>
      </div>
    </div>
</template>
<script>
export default {
  mounted() {
    window.addEventListener("DOMContentLoaded", () => {
      if (sessionStorage.getItem("visited")) {
          document.getElementById("loading").remove();
      } else {
          sessionStorage.setItem("visited", 1)
      }
    });
  },
}
</script>
<style>
</style>

