
<template>
  <header>
    <div @click="toggle" class="menu" v-bind:class="{'menuopen': open, 'show': scrollY > 400}">
      <span></span>
    </div>

    <div class="menu-inner" v-bind:class="{'menuopen':open}">
      <div>
        <nuxt-link
        v-scroll-to="'#status'"
        to
        @click.native="clickLick"
        >
         STATUS</nuxt-link>
         <nuxt-link
        v-scroll-to="'#works'"
        to
        @click.native="clickLick"
        >
         WORKS</nuxt-link>
         <nuxt-link
        v-scroll-to="'#note'"
        to
        @click.native="clickLick"
        >
         NOTE</nuxt-link>
         <nuxt-link
        v-scroll-to="'#contact'"
        to
        @click.native="clickLick"
        >
         CONTACT</nuxt-link>
         <nuxt-link
        v-scroll-to="'#kv'"
        to
        @click.native="clickLick"
        >
         TOP</nuxt-link>
      </div>
    </div>
  </header>
</template>
<style>
.menu {
  position: fixed;
  display: flex;
  justify-content: start;
  bottom: 20px;
  right: 30px;
  transition: all .5s;
  cursor: pointer;
  background: #07029c;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 6;
  opacity: 0;
}
.menu.show {
  opacity: 1;
}
.menu span {
 position: absolute;
 left: 0;
 right: 0;
 top: 19px;
 margin: 0 auto;
 width: 25px;
 height: 2px;
 background-color: #fff;
 border-radius: 4px;
 transition: all .5s;
}
.menu span::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 8px;
  margin: 0 auto;
  width: 25px;
  height: 2px;
  background-color: #fff;
  border-radius: 4px;
  transition: all .5s;
}
.menu span::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -8px;
  margin: 0 auto;
  width: 25px;
  height: 2px;
  background-color: #fff;
  border-radius: 4px;
  transition: all .5s;
}
.menu.menuopen span {
 transform: translateY(0px) rotate(-45deg);
}
.menu.menuopen span::before{
 opacity: 0;
}
.menu.menuopen span::after {
 transform: translateY(8.5px) rotate(90deg);
}
.menu-inner {
  position: fixed;
 transition: all .3s;
 opacity: 0;
}
.menu-inner div{
  width: 90%;
  max-width: 330px;
  height: 100%;
  background: #07029c;
  border-radius: 15px;
  border: 5px solid #8d8c8c;
  box-shadow:0px 0px 5px 4px #000 inset;
  margin: 0 0 0 auto;
  padding: 20px;
 transition: all .5s;
}
.menu-inner div a{
  display: block;
  width: 100%;
  font-size: 40px;
  margin: 30px 0;
}
.menu-inner.menuopen {
  opacity: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 5;
  transition: all .3s;
}
@media screen and (max-width: 768px) {
  .menu {
    bottom: 30px;
    right: 20px;
  }
  .menu-inner div{
    width: 100%;
    max-width: 100%;
    border-radius: 10px;
    padding: 10px 40px;
  }
  .menu-inner div a{
    font-size: 40px;
  }
}
</style>
<script>
export default {
  data: function(){
    return{
      open:false,
      scrollY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggle:function(){
      this.open = !this.open
    },
    clickLick: function(){
      this.open = !this.open
    },
    handleScroll() {
      this.scrollY = window.scrollY
    }
  }
}
</script>
