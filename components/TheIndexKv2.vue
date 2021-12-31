<template>
    <section class="kv">
        <div class="kv__loading" data-kv="wrap">
            <div class="kv__loading--grid">
                <div class="kv__loading--grid-line" data-kv="line"></div>
                <div class="kv__loading--grid-line" data-kv="line"></div>
                <div class="kv__loading--grid-line" data-kv="line"></div>
                <div class="kv__loading--grid-line" data-kv="line"></div>
                <div class="kv__loading--grid-line" data-kv="line"></div>
            </div>
            <div class="kv__loading--block" data-kv="block">
                <span class="kv__loading--block-inner">
                    <i class="kv__loading--block-text kv__loading--block-text-k" data-kv="textK">K</i>
                    <i class="kv__loading--block-text">a</i>
                    <i class="kv__loading--block-text">i</i>
                    <i class="kv__loading--block-text">t</i>
                    <i class="kv__loading--block-text">o</i>
                    <i class="kv__loading--block-text"></i>
                    <i class="kv__loading--block-text kv__loading--block-text-t" data-kv="textT">T</i>
                    <i class="kv__loading--block-text">a</i>
                    <i class="kv__loading--block-text">k</i>
                    <i class="kv__loading--block-text">a</i>
                    <i class="kv__loading--block-text">s</i>
                    <i class="kv__loading--block-text">e</i>
                </span>
            </div>
        </div>
        <div class="kv__canvas" data-canvas></div>
        <h1 class="kv__title" data-kv="title">
            Kaito<br />
            Takase<br />
            Portfolio
        </h1>
    </section>
</template>
<style lang="scss" scoped>
// @import '~/assets/styles/components/index/_kv';
</style>

<script lang="ts">
import Vue from 'vue';
const imagesLoaded = require('imagesloaded');
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { throttle } from '~/assets/scripts/utils/throttle';
import { gsap } from 'gsap';

export default Vue.extend({
    data(): {
        wd: number;
        wh: number;
        halfWd: number;
        halfWh: number;
        sp: number;
        elms: {
            canvas: HTMLElement;
            loadingWrap: HTMLElement;
            loadingLine: any;
            loadingTextK: HTMLElement;
            loadingTextT: HTMLElement;
            loadingBlock: HTMLElement;
            kvTitle: HTMLElement;
        };
        three: {
            scene: any;
            renderer: any;
            camera: any;
            redraw: any;
            clock: any;
            cameraFov: number;
            cameraAspect: number;
            controls: any;
        };
        srcObj: any;

        flg: {
            loaded: boolean;
        };
        mousePos: {
            x: number;
            y: number;
            targetX: number;
            targetY: number;
            moveX: number;
            moveY: number;
        };
    } {
        return {
            wd: 0,
            wh: 0,
            halfWd: 0,
            halfWh: 0,
            sp: 0,
            elms: {
                canvas: null,
                loadingWrap: null,
                loadingLine: null,
                loadingTextK: null,
                loadingTextT: null,
                loadingBlock: null,
                kvTitle: null,
            },
            three: {
                scene: null,
                renderer: null,
                camera: null,
                redraw: null,
                clock: null,
                cameraFov: 0,
                cameraAspect: 0,
                controls: null,
            },
            srcObj: null,

            flg: {
                loaded: false,
            },
            mousePos: {
                x: 0,
                y: 0,
                targetX: 0,
                targetY: 0,
                moveX: 0,
                moveY: 0,
            },
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            // 画像の読み込み開始
            const preloadImages = () => {
                return new Promise((resolve) => {
                    imagesLoaded(
                        document.querySelectorAll('img'),
                        {
                            background: true,
                        },
                        resolve
                    );
                });
            };
            preloadImages().then(() => {
                // 画像を全て読み込んだら実行
                this.init();
            });
        },
        init() {
            this.wd = window.innerWidth;
            this.wh = window.innerHeight;
            this.halfWd = window.innerWidth * 0.5;
            this.halfWh = window.innerHeight * 0.5;
            this.sp = 768;
            this.elms = {
                canvas: document.querySelector('[data-canvas]'),
                loadingWrap: document.querySelector('[data-kv="wrap"]'),
                loadingLine: document.querySelectorAll('[data-kv="line"]'),
                loadingTextK: document.querySelector('[data-kv="textK"]'),
                loadingTextT: document.querySelector('[data-kv="textT"]'),
                loadingBlock: document.querySelector('[data-kv="block"]'),
                kvTitle: document.querySelector('[data-kv="title"]'),
            };
            this.three = {
                scene: null,
                renderer: null,
                camera: null,
                redraw: null,
                clock: 0,
                cameraFov: 50,
                cameraAspect: window.innerWidth / window.innerHeight,
                controls: null,
            };
            this.srcObj = process.env.NODE_ENV == 'development' ? '/obj/robot.gltf' : '/obj/robot.gltf';

            this.flg = {
                loaded: false,
            };
            this.mousePos = {
                x: 0,
                y: 0,
                targetX: 0,
                targetY: 0,
                moveX: 0.004,
                moveY: 0.003,
            };
            this.initScene();
            this.initClock();
            this.initCamera();
            this.initRenderer();
            this.setLoading();
            this.setLight();
            this.handleEvents();
        },
        initScene() {
            this.three.scene = new this.$THREE.Scene();
        },
        initCamera() {
            this.three.camera = new this.$THREE.PerspectiveCamera(this.three.cameraFov, this.wd / this.wh, this.three.cameraAspect, 1000); //(視野角, スペクト比, near, far)
            this.three.camera.position.set(0, 0, 9);
        },
        initRenderer() {
            // レンダラーのサイズ調整
            this.three.renderer = new this.$THREE.WebGLRenderer({
                antialias: true,
                alpha: true, //背景色を設定しないとき、背景を透明にする
            });
            this.three.renderer.setPixelRatio(window.devicePixelRatio);
            this.three.renderer.setSize(this.wd, this.wh);
            this.three.renderer.physicallyCorrectLights = true;
            this.three.renderer.shadowMap.enabled = true;
            this.three.renderer.shadowMap.type = this.$THREE.PCFSoftShadowMap;
            this.elms.canvas.appendChild(this.three.renderer.domElement);
            this.three.renderer.outputEncoding = this.$THREE.GammaEncoding;
        },
        setLight() {
            const ambientLight = new this.$THREE.AmbientLight(0x666666);
            this.three.scene.add(ambientLight);

            const positionArr = [
                [0, 5, 0, 7],
                [-5, 3, 2, 2],
                [5, 3, 2, 2],
                [0, 3, 5, 7],
                [0, 3, -5, 2],
            ];

            for (let i = 0; i < positionArr.length; i++) {
                const directionalLight = new this.$THREE.DirectionalLight(0xffffff, positionArr[i][3]);
                directionalLight.position.set(positionArr[i][0], positionArr[i][1], positionArr[i][2]);

                if (i == 0 || i == 2 || i == 3) {
                    directionalLight.castShadow = true;
                    directionalLight.shadow.camera.top = 50;
                    directionalLight.shadow.camera.bottom = -50;
                    directionalLight.shadow.camera.right = 50;
                    directionalLight.shadow.camera.left = -50;
                    directionalLight.shadow.mapSize.set(4096, 4096);
                }
                this.three.scene.add(directionalLight);
            }
        },
        setLoading() {
            const loader = new GLTFLoader();

            loader.load(this.srcObj, (obj) => {
                const data = obj.scene;

                for (let i = 0; i < data.children.length; i++) {
                    let mesh = data.children[i];
                    if (i >= 1000) {
                        if (i == 1014 || i == 1019) {
                            mesh.receiveShadow = true;
                        }
                        mesh.castShadow = true;
                    }
                }
                this.three.redraw = data;
                this.three.scene.add(data);
                this.flg.loaded = true;
                this.rendering();
            });
        },
        initClock() {
            // 時間計測用
            this.three.clock = new this.$THREE.Clock();
        },
        rendering() {
            if (this.wd <= this.sp) {
                //3dモデルのサイズを縮小
                this.three.redraw.scale.set(0.8, 0.8, 0.8);
                //マウスの位置によって3dの位置をずらす
                this.three.redraw.position.x = 0 - this.mousePos.x * 1.1;
            } else {
                //マウスの位置によって3dの位置をずらす
                this.three.redraw.position.x = 3 - this.mousePos.x * 1.1;
            }
            const time = this.three.clock.getElapsedTime();

            // マウスの位置を取得
            this.mousePos.x += (this.mousePos.targetX - this.mousePos.x) * this.mousePos.moveX;
            this.mousePos.y += (this.mousePos.targetY - this.mousePos.y) * this.mousePos.moveY;
            //時間経過で3dを回転、位置をずらす
            this.three.redraw.position.y += Math.sin(time) * 0.0025;
            this.three.redraw.rotation.y += Math.cos(time) * 0.0015;

            requestAnimationFrame(this.rendering.bind(this));
            this.three.renderer.render(this.three.scene, this.three.camera);
            this.animate(); // アニメーション開始
        },
        animate() {
            gsap.config({
                force3D: true,
            });
            const tl = gsap.timeline({
                paused: true,
                defaults: {
                    duration: 0.6,
                    ease: 'power2.inOut',
                },
            });
            tl.to(this.elms.loadingLine, {
                duration: 1.2,
                ease: 'power2.out',
                scale: 1,
            });
            tl.to(
                this.elms.loadingTextK,
                {
                    duration: 0.8,
                    ease: 'power2.out',
                    opacity: 1,
                },
                'text1'
            );
            tl.to(
                this.elms.loadingTextT,
                {
                    duration: 0.8,
                    ease: 'power2.out',
                    opacity: 1,
                },
                'text1'
            );
            tl.to(
                this.elms.loadingTextK,
                {
                    duration: 0.8,
                    ease: 'power2.out',
                    x: 0,
                },
                'text2'
            );
            tl.to(
                this.elms.loadingTextT,
                {
                    duration: 0.8,
                    ease: 'power2.out',
                    x: 0,
                },
                'text2'
            );
            tl.to(this.elms.loadingBlock, {
                className: '+=kv__loading--block is-active',
            });
            tl.to(
                this.elms.loadingTextT,
                {
                    duration: 0.4,
                    ease: 'power2.out',
                    opacity: 0,
                },
                4.3
            );
            tl.to(
                this.elms.loadingTextK,
                {
                    duration: 0.4,
                    ease: 'power2.out',
                    opacity: 0,
                },
                4.3
            );
            tl.to(
                this.elms.loadingBlock,
                {
                    duration: 0.4,
                    ease: 'power2.out',
                    opacity: 0,
                },
                4.3
            );
            tl.to(
                this.elms.loadingWrap,
                {
                    duration: 0.6,
                    ease: 'power2.out',
                    y: '-100%',
                },
                5
            );
            tl.to(
                this.elms.canvas,
                {
                    duration: 0.8,
                    ease: 'power1.out',
                    opacity: 1,
                },
                5.3
            );
            tl.to(
                this.elms.kvTitle,
                {
                    duration: 0.6,
                    ease: 'power1.out',
                    opacity: 1,
                    y: 0,
                },
                5.3
            );
            tl.to(
                this.elms.loadingWrap,
                {
                    duration: 0,
                    ease: 'power2.out',
                    display: 'none',
                },
                7
            );
            tl.play();
        },
        handleEvents() {
            window.addEventListener('pointermove', this.handleMouse.bind(this), false);
            window.addEventListener(
                'resize',
                throttle(() => {
                    this.handleResize.bind(this);
                }, 100)
            );
        },
        handleResize() {
            // リサイズ処理
            if (this.wd !== window.innerWidth) {
                this.wd = window.innerWidth;
                this.wh = window.innerHeight;
                this.three.cameraAspect = this.wd / this.wh;
                this.three.camera.aspect = this.wd / this.wh;
                this.three.camera.updateProjectionMatrix();
                this.three.renderer.setSize(this.wd, this.wh);
                this.three.renderer.setPixelRatio(window.devicePixelRatio);
            }
        },
        handleMouse(event) {
            this.mousePos.targetX = (this.halfWd - event.clientX) / this.halfWd;
            this.mousePos.targetY = (this.halfWh - event.clientY) / this.halfWh;
        },
    },
});
</script>
