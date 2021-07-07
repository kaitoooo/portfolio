import Vue from 'vue';
import * as THREE from 'three';
// const THREE = require('three');
// import 'imports-loader?THREE=three!three/examples/js/loaders/GLTFLoader.js';
// import 'imports-loader?THREE=three!three/examples/js/controls/OrbitControls.js';
Vue.use({
    install(Vue, options) {
        Vue.prototype.$THREE = THREE;
    },
});
