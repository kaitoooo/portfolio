<template>
    <section class="mv">
        <div class="mv__battery" ref="battery">
            <div class="mv__bar" ref="bar"></div>
        </div>
        <div class="mv__canvas" ref="canvas"></div>
        <div class="mv__buttons" ref="buttons">
            <div class="mv__wrapper">
                <button class="mv__text" @mouseover="actionSkills" @click="showSkills" :class="{ 'is-flg': flg.skills }" ref="clickSkills" data-buttons>Skills</button>
            </div>
            <div class="mv__wrapper">
                <nuxt-link to="/works" class="mv__text" @mouseover.native="actionWorks" data-buttons>Works</nuxt-link>
            </div>
            <div class="mv__wrapper">
                <button class="mv__text" @mouseover="actionArticles" @click="showArticles" :class="{ 'is-flg': flg.articles }" ref="clickArticles" data-buttons>Articles</button>
            </div>
            <div class="mv__wrapper">
                <nuxt-link to="/profile" class="mv__text" @mouseover.native="actionProfile" data-buttons>Profile</nuxt-link>
            </div>
            <div class="mv__wrapper">
                <button class="mv__text" @mouseover="actionContact" @click="showContact" :class="{ 'is-flg': flg.contact }" ref="clickContact" data-buttons>Contact</button>
            </div>
        </div>
        <div class="mv__sns" ref="sns">
            <a href="https://twitter.com/hitoeeeeeeee/" target="_blank" rel="noopener noreferrer" class="mv__sns-link">
                <svg enable-background="new 0 0 128 128" id="Social_Icons" version="1.1" viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g>
                        <g>
                            <rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128" width="128" />
                            <path
                                class="mv__twitter-icon"
                                clip-rule="evenodd"
                                d="M128,23.294    c-4.703,2.142-9.767,3.59-15.079,4.237c5.424-3.328,9.587-8.606,11.548-14.892c-5.079,3.082-10.691,5.324-16.687,6.526    c-4.778-5.231-11.608-8.498-19.166-8.498c-14.493,0-26.251,12.057-26.251,26.927c0,2.111,0.225,4.16,0.676,6.133    C41.217,42.601,21.871,31.892,8.91,15.582c-2.261,3.991-3.554,8.621-3.554,13.552c0,9.338,4.636,17.581,11.683,22.412    c-4.297-0.131-8.355-1.356-11.901-3.359v0.331c0,13.051,9.053,23.937,21.074,26.403c-2.201,0.632-4.523,0.948-6.92,0.948    c-1.69,0-3.343-0.162-4.944-0.478c3.343,10.694,13.035,18.483,24.53,18.691c-8.986,7.227-20.315,11.533-32.614,11.533    c-2.119,0-4.215-0.123-6.266-0.37c11.623,7.627,25.432,12.088,40.255,12.088c48.309,0,74.717-41.026,74.717-76.612    c0-1.171-0.023-2.342-0.068-3.49C120.036,33.433,124.491,28.695,128,23.294"
                                fill-rule="evenodd"
                            />
                        </g>
                    </g>
                </svg>
            </a>
            <a href="https://www.instagram.com/hito___e/" target="_blank" rel="noopener noreferrer" class="mv__sns-link">
                <svg enable-background="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g>
                        <path
                            class="mv__instagram-icon"
                            d="M505,257c0,34.8-0.7,69.7,0.2,104.5c1.5,61.6-37.2,109.2-86.5,130.4c-19.8,8.5-40.6,13-62.1,13c-67.3,0.1-134.7,1-202-0.3   c-50.7-1-92.4-22.2-122.3-64c-15.7-22-23.2-47-23.2-74.1c0-71.7,0-143.3,0-215c0-58.5,28.5-99.4,79.1-126C110.2,14,134.1,9.1,159,9   c65.3,0,130.7-0.4,196,0.2c50.7,0.4,93,19.8,124.2,60.6c17.4,22.8,25.8,49,25.8,77.8C505,184,505,220.5,505,257z M46,257   c0,36.7,0,73.3,0,110c0,16.4,3.8,31.8,12.3,45.7c22.3,36.5,56,54.3,97.8,55c67.1,1,134.3,0.4,201.5,0.2c16.5,0,32.5-3.4,47.4-10.5   c40.6-19.4,63.3-50.3,63.1-96.7c-0.4-71-0.1-142-0.1-213c0-20.1-5.7-38.5-17.6-54.7c-23-31.1-54.8-46.4-92.8-46.8   c-67-0.8-134-0.3-201-0.2c-14.3,0-28.1,2.9-41.5,7.9c-36.8,13.7-71,48.4-69.4,99.5C46.9,188,46,222.5,46,257z"
                        />
                        <path
                            class="mv__instagram-icon"
                            d="M257.6,363c-64.5,0-116.5-51.4-116.6-115.4c-0.1-63,52.3-114.6,116.4-114.6c64.3-0.1,116.5,51.4,116.6,114.9   C374,311.3,321.9,362.9,257.6,363z M257.6,326c43.9,0,79.5-35.1,79.4-78.3c-0.1-42.8-35.7-77.8-79.4-77.8   c-43.9,0-79.7,34.9-79.7,78C178,291.1,213.7,326.1,257.6,326z"
                        />
                        <path d="M387.5,98c13.5,0,24.5,11.5,24.5,25.6c-0.1,14.1-11.2,25.5-24.7,25.4c-13.3-0.1-24.2-11.5-24.2-25.3   C363,109.6,374,98,387.5,98z" />
                    </g>
                </svg>
            </a>
            <a href="https://github.com/kaitoooo/" target="_blank" rel="noopener noreferrer" class="mv__sns-link mv__sns-link--github">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 64 64"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xml:space="preserve"
                    xmlns:serif="http://www.serif.com/"
                    style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
                >
                    <g>
                        <path
                            class="mv__github-icon"
                            d="M32.029,8.345c-13.27,0 -24.029,10.759 -24.029,24.033c0,10.617 6.885,19.624 16.435,22.803c1.202,0.22 1.64,-0.522 1.64,-1.16c0,-0.569 -0.02,-2.081 -0.032,-4.086c-6.685,1.452 -8.095,-3.222 -8.095,-3.222c-1.093,-2.775 -2.669,-3.514 -2.669,-3.514c-2.182,-1.492 0.165,-1.462 0.165,-1.462c2.412,0.171 3.681,2.477 3.681,2.477c2.144,3.672 5.625,2.611 6.994,1.997c0.219,-1.553 0.838,-2.612 1.526,-3.213c-5.336,-0.606 -10.947,-2.669 -10.947,-11.877c0,-2.623 0.937,-4.769 2.474,-6.449c-0.247,-0.608 -1.072,-3.051 0.235,-6.36c0,0 2.018,-0.646 6.609,2.464c1.917,-0.533 3.973,-0.8 6.016,-0.809c2.041,0.009 4.097,0.276 6.017,0.809c4.588,-3.11 6.602,-2.464 6.602,-2.464c1.311,3.309 0.486,5.752 0.239,6.36c1.54,1.68 2.471,3.826 2.471,6.449c0,9.232 -5.62,11.263 -10.974,11.858c0.864,0.742 1.632,2.208 1.632,4.451c0,3.212 -0.029,5.804 -0.029,6.591c0,0.644 0.432,1.392 1.652,1.157c9.542,-3.185 16.421,-12.186 16.421,-22.8c0,-13.274 -10.76,-24.033 -24.034,-24.033"
                        />
                    </g>
                </svg>
            </a>
        </div>
        <!-- Skills -->
        <div class="mv__about mv__about--skills" ref="aboutSkills">
            <div class="mv__outer-title">
                <h2 class="mv__title" ref="titleSkills">Skills</h2>
            </div>
            <div class="mv__outer" data-title="skillsWeb">
                <h2 class="mv__sub-title">Web</h2>
                <p class="mv__detail">
                    HTML / CSS / JavaScript(Nuxt.js, React.js / Three.js) / <br class="pc-only" />
                    Typescript / PHP ( WordPress) / GCP
                </p>
            </div>
            <div class="mv__outer" data-title="skillsWeb">
                <h2 class="mv__sub-title">3D Modeling</h2>
                <p class="mv__detail">Blender / Rhinoceros / Unity</p>
            </div>
            <div class="mv__outer" data-title="skillsWeb">
                <nuxt-link to="/works" class="mv__link">
                    Works
                    <TheHomeArrow />
                </nuxt-link>
                <button class="mv__link" @click="showArticles" :class="{ 'is-flg': flg.articles }" ref="clickArticles">
                    Articles
                    <TheHomeArrow />
                </button>
                <nuxt-link to="/profile" class="mv__link">
                    Profile
                    <TheHomeArrow />
                </nuxt-link>
                <button class="mv__link" @click="showContact" :class="{ 'is-flg': flg.contact }" ref="clickContact">
                    Contact
                    <TheHomeArrow />
                </button>
                <button class="mv__link" @click="resetAll" ref="clickReset">
                    Reset
                    <TheHomeArrow />
                </button>
            </div>
        </div>
        <!-- Articles -->
        <div class="mv__about mv__about--articles" ref="aboutArticles">
            <div class="mv__outer-title">
                <h2 class="mv__title" ref="titleArticles">Articles</h2>
            </div>
            <div class="mv__outer" data-title="articleLinks">
                <p class="mv__sub-title">note</p>
                <a href="https://note.com/kaito_takase/" target="_blank" rel="noopener noreferrer" class="mv__detail mv__detail--link">
                    https://note.com/kaito_takase/
                    <span class="mv__detail--icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="mv__detail--icon-fill">
                            <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 6 L 27 5 L 26 5 L 18 5 z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 L 5 9 z" />
                        </svg>
                    </span>
                </a>
            </div>
            <br />
            <div class="mv__outer" data-title="articleLinks">
                <p class="mv__sub-title">zenn</p>
                <a href="https://zenn.dev/kaito_takase/" target="_blank" rel="noopener noreferrer" class="mv__detail mv__detail--link">
                    https://zenn.dev/kaito_takase/
                    <span class="mv__detail--icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="mv__detail--icon-fill">
                            <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 6 L 27 5 L 26 5 L 18 5 z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 L 5 9 z" />
                        </svg>
                    </span>
                </a>
            </div>
            <br />
            <div class="mv__outer" data-title="articleLinks">
                <p class="mv__sub-title">Qiita</p>
                <a href="https://qiita.com/kaito_takase/items/4b381799d76d4101278c" target="_blank" rel="noopener noreferrer" class="mv__detail mv__detail--link">
                    https://qiita.com/kaito_takase/
                    <span class="mv__detail--icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="mv__detail--icon-fill">
                            <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 6 L 27 5 L 26 5 L 18 5 z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 L 5 9 z" />
                        </svg>
                    </span>
                </a>
            </div>
            <br />
            <div class="mv__outer" data-title="articleLinks">
                <p class="mv__sub-title">CodePen</p>
                <a href="https://codepen.io/kaito-takase/" target="_blank" rel="noopener noreferrer" class="mv__detail mv__detail--link">
                    https://codepen.io/kaito-takase/
                    <span class="mv__detail--icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="mv__detail--icon-fill">
                            <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 6 L 27 5 L 26 5 L 18 5 z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 L 5 9 z" />
                        </svg>
                    </span>
                </a>
            </div>
            <div class="mv__outer" data-title="articleLinks">
                <nuxt-link to="/works" class="mv__link">
                    Works
                    <TheHomeArrow />
                </nuxt-link>
                <button class="mv__link" @click="showSkills" :class="{ 'is-flg': flg.skills }" ref="clickSkills">
                    Skills
                    <TheHomeArrow />
                </button>

                <nuxt-link to="/profile" class="mv__link">
                    Profile
                    <TheHomeArrow />
                </nuxt-link>
                <button class="mv__link" @click="showContact" :class="{ 'is-flg': flg.contact }" ref="clickContact">
                    Contact
                    <TheHomeArrow />
                </button>
                <button class="mv__link" @click="resetAll" ref="clickReset">
                    Reset
                    <TheHomeArrow />
                </button>
            </div>
        </div>
        <!-- Contact -->
        <div class="mv__about mv__about--contact" ref="aboutContact">
            <div class="mv__outer-title">
                <h2 class="mv__title" ref="titleContact">Contact</h2>
            </div>
            <div class="mv__outer" ref="titleTwitter">
                <h2 class="mv__detail mv__detail--jp">お問い合わせ・ご連絡はこちらからDMをお願いします。</h2>
                <a href="https://twitter.com/hitoeeeeeeee" target="_blank" rel="noopener noreferrer" class="mv__detail mv__detail--link">
                    https://twitter.com/hitoeeeeeeee/
                    <span class="mv__detail--icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="mv__detail--icon-fill">
                            <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 6 L 27 5 L 26 5 L 18 5 z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 L 5 9 z" />
                        </svg>
                    </span>
                </a>
                <div class="mv__outer" ref="contactLinks">
                    <nuxt-link to="/works" class="mv__link">
                        Works
                        <TheHomeArrow />
                    </nuxt-link>
                    <button class="mv__link" @click="showSkills" :class="{ 'is-flg': flg.skills }" ref="clickSkills">
                        Skills
                        <TheHomeArrow />
                    </button>
                    <nuxt-link to="/profile" class="mv__link">
                        Profile
                        <TheHomeArrow />
                    </nuxt-link>
                    <button class="mv__link" @click="showArticles">
                        Articles
                        <TheHomeArrow />
                    </button>
                    <button class="mv__link" @click="resetAll" ref="clickReset">
                        Reset
                        <TheHomeArrow />
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@import '~/assets/styles/project/home/_mv';
</style>

<script lang="ts">
import Vue from 'vue';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { throttle } from '~/assets/scripts/utils/throttle';
import { gsap } from 'gsap';
import TheHomeArrow from '~/components/home/TheHomeArrow.vue';

export default Vue.extend({
    components: { TheHomeArrow },
    data(): {
        winSize: {
            [s: string]: number;
        };
        elmsAll: {
            [s: string]: NodeListOf<HTMLElement>;
        };
        dpr: number;
        three: {
            scene: THREE.Scene;
            renderer: THREE.WebGLRenderer | null;
            camera: THREE.PerspectiveCamera | null;
            cameraFov: number;
            cameraAspect: number;
            cameraFar: number;
            bananaMesh: THREE.Mesh | null;
            planeMesh: THREE.Mesh | null;
            robotMesh: THREE.Mesh | null;
            pcMesh: THREE.Mesh | null;
            basketballMesh: THREE.Mesh | null;
        };
        overlay: {
            material: THREE.ShaderMaterial;
        };
        loader: {
            gltfLoader: any;
        };
        sp: boolean;
        ua: string;
        mq: MediaQueryList;
        srcObj: string;
        srcTexture: string;
        flg: {
            loaded: boolean;
            skills: boolean;
            articles: boolean;
            contact: boolean;
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
            winSize: {
                wd: null,
                wh: null,
                halfWd: null,
                halfWh: null,
            },
            elmsAll: {
                articleLinks: null,
                skillsWeb: null,
                buttons: null,
            },
            // デバイスピクセル比(最大:2)
            dpr: null,
            three: {
                scene: null,
                renderer: null,
                camera: null,
                cameraFov: 75,
                cameraAspect: null,
                cameraFar: 100,
                bananaMesh: null,
                planeMesh: null,
                robotMesh: null,
                pcMesh: null,
                basketballMesh: null,
            },
            overlay: {
                material: null,
            },
            loader: {
                gltfLoader: null,
            },
            sp: null,
            ua: null,
            mq: null,
            srcObj: null,
            srcTexture: null,
            flg: {
                loaded: false,
                skills: false,
                articles: false,
                contact: false,
            },
            mousePos: {
                x: 0,
                y: 0,
                targetX: 0,
                targetY: 0,
                moveX: 0.05,
                moveY: 0.02,
            },
        };
    },
    beforeDestroy() {
        this.init();
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.getWindowInfo();
            this.getLayout();
            this.setLoading();
            this.initScene();
            this.initCamera();
            this.initClock();
            this.initRenderer();
            this.setLight();
            this.setModels();
            this.handleEvents();

            if (this.ua.indexOf('msie') !== -1 || this.ua.indexOf('trident') !== -1) {
                return;
            } else {
                this.mq.addEventListener('change', this.getLayout.bind(this));
            }
        },
        getWindowInfo(): void {
            this.winSize = {
                wd: window.innerWidth,
                wh: window.innerHeight,
                halfWd: window.innerWidth * 0.5,
                halfWh: window.innerHeight * 0.5,
            };
            this.elmsAll = {
                articleLinks: document.querySelectorAll('[data-title="articleLinks"]'),
                skillsWeb: document.querySelectorAll('[data-title="skillsWeb"]'),
                buttons: document.querySelectorAll('[data-buttons]'),
            };
            // デバイスピクセル比(最大:2)
            this.dpr = Math.min(window.devicePixelRatio, 2);
            this.three = {
                scene: null,
                renderer: null,
                camera: null,
                cameraFov: 75,
                cameraAspect: window.innerWidth / window.innerHeight,
                cameraFar: 100,
                bananaMesh: null,
                planeMesh: null,
                robotMesh: null,
                pcMesh: null,
                basketballMesh: null,
            };
            this.overlay = {
                material: null,
            };
            this.loader = {
                gltfLoader: null,
            };
            this.sp = 768;
            this.ua = window.navigator.userAgent.toLowerCase();
            this.mq = window.matchMedia('(max-width: 768px)');
            this.srcObj = '/obj/all-d.glb';
            this.flg = {
                loaded: false,
                skills: false,
                articles: false,
                contact: false,
            };
        },
        getLayout(): void {
            this.sp = this.mq.matches ? true : false;
        },
        initScene(): void {
            // シーンを作成
            this.three.scene = new this.$THREE.Scene();
        },
        initCamera(): void {
            // カメラを作成(視野角, スペクト比, near, far)
            this.three.camera = new this.$THREE.PerspectiveCamera(this.three.cameraFov, this.winSize.wd / this.winSize.wh, this.three.cameraAspect, this.three.cameraFar);
            this.three.camera.position.set(0, this.sp ? -2.2 : -1.5, 9);
        },
        initClock(): void {
            // 時間計測用
            this.three.clock = new this.$THREE.Clock();
        },
        initRenderer(): void {
            // レンダラーを作成
            this.three.renderer = new this.$THREE.WebGLRenderer({
                antialias: true,
                alpha: true, //背景色を設定しないとき、背景を透明にする
            });
            this.three.renderer.setPixelRatio(this.dpr); // retina対応
            this.three.renderer.setSize(this.winSize.wd, this.winSize.wh); // 画面サイズをセット
            this.three.renderer.physicallyCorrectLights = true;
            // this.three.renderer.shadowMap.enabled = true; // シャドウを有効にする
            // this.three.renderer.shadowMap.type = this.$THREE.PCFSoftShadowMap; // PCFShadowMapの結果から更に隣り合う影との間を線形補間して描画する
            this.$refs.canvas.appendChild(this.three.renderer.domElement); // HTMLにcanvasを追加
            this.three.renderer.outputEncoding = this.$THREE.GammaEncoding; // 出力エンコーディングを定義
        },
        setLoading(): void {
            const loadingManager = new this.$THREE.LoadingManager(
                // Loaded
                () => {
                    // 間隔を空ける
                    window.setTimeout(() => {
                        // overlayをアニメーションさせる
                        gsap.to(this.overlay.material.uniforms.uAlpha, {
                            duration: 3,
                            value: 0,
                            delay: 1,
                        });
                        // loadingBarElementの更新
                        this.$refs.bar.classList.add('is-end');
                        this.$refs.bar.style.transform = '';
                        this.$refs.battery.classList.add('is-end');
                        this.$refs.sns.classList.add('is-show');
                        this.animate();
                        this.$store.dispatch('flgLogo', {
                            flgLogo: true,
                        });
                    }, 1000);
                },

                // Progress
                (itemUrl, itemsLoaded, itemsTotal) => {
                    // 進行状況を計算し、this.$refs.barを更新する
                    const progressRatio = itemsLoaded / itemsTotal;
                    this.$refs.bar.style.transform = `scaleX(${progressRatio})`;
                }
            );
            this.loader.gltfLoader = new GLTFLoader(loadingManager);
        },
        animate(): void {
            gsap.to(this.elmsAll.buttons, {
                ease: 'power2.easeOut',
                stagger: 0.06,
                y: 0,
                rotate: 0,
                delay: 0.4,
            });
        },
        setOverlay(): void {
            const overlayGeometry = new this.$THREE.PlaneGeometry(2, 2, 1, 1);
            this.overlay.material = new this.$THREE.ShaderMaterial({
                transparent: true,
                uniforms: {
                    uAlpha: { value: 1 },
                },
                vertexShader: `
            void main()
            {
                gl_Position = vec4(position, 1.0);
            }
            `,
                fragmentShader: `
            uniform float uAlpha;
            void main()
            {
                gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
            }
            `,
            });
            const overlay = new this.$THREE.Mesh(overlayGeometry, this.overlay.material);
            this.three.scene.add(overlay);
        },
        setLight() {
            // 環境光源(色, 光の強さ)
            const ambientLight = new this.$THREE.AmbientLight(0x666666);
            this.three.scene.add(ambientLight);

            const positionArr = [
                [0, 5, 0, 2],
                [-5, 3, 2, 2],
                [5, 3, 2, 2],
                [0, 3, 5, 1],
                [0, 3, -5, 2],
            ];

            for (let i = 0; i < positionArr.length; i++) {
                // 平行光源(色, 光の強さ)
                const directionalLight = new this.$THREE.DirectionalLight(0xffffff, positionArr[i][3]);
                directionalLight.position.set(positionArr[i][0], positionArr[i][1], positionArr[i][2]);

                // カメラの振幅を設定
                directionalLight.shadow.camera.top = 1;
                directionalLight.shadow.camera.right = 1;
                directionalLight.shadow.camera.bottom = -1;
                directionalLight.shadow.camera.left = -1;

                this.three.scene.add(directionalLight);
            }
        },
        setModels(): void {
            this.setOverlay();
            // glTF形式の3Dモデルを読み込む
            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath('/draco/');

            this.loader.gltfLoader.setDRACOLoader(dracoLoader);
            this.loader.gltfLoader.load(this.srcObj, (obj) => {
                this.three.basketballMesh = obj.scene.children.find((child: THREE.Mesh) => child.name === 'basketball');
                this.three.pcMesh = obj.scene.children.find((child: THREE.Mesh) => child.name === 'pc');
                this.three.robotMesh = obj.scene.children.find((child: THREE.Mesh) => child.name === 'robot');
                this.three.planeMesh = obj.scene.children.find((child: THREE.Mesh) => child.name === 'plane');
                this.three.bananaMesh = obj.scene.children.find((child: THREE.Mesh) => child.name === 'banana');

                //3dメッシュのサイズ
                this.three.basketballMesh.scale.set(0, 0, 0);
                this.three.pcMesh.scale.set(0, 0, 0);
                this.three.robotMesh.scale.set(this.sp ? 0.4 : 0.4, this.sp ? 0.4 : 0.4, this.sp ? 0.4 : 0.4);
                this.three.planeMesh.scale.set(0, 0, 0);
                this.three.bananaMesh.scale.set(0, 0, 0);

                //3dメッシュの位置
                this.three.basketballMesh.position.set(this.sp ? 1 : 6, this.sp ? 1 : -1.2, this.sp ? 1 : 0);
                this.three.pcMesh.position.set(this.sp ? 1 : 5, this.sp ? 1 : -3, this.sp ? 1 : 0);
                this.three.robotMesh.position.set(this.sp ? 1 : 5, this.sp ? 1 : 2.5, this.sp ? 1 : 0);
                this.three.planeMesh.position.set(this.sp ? 1 : 5, this.sp ? 1 : -0.5, this.sp ? 1 : 0);
                this.three.bananaMesh.position.set(this.sp ? 1 : 6, this.sp ? 1 : -1, this.sp ? 1 : 0);

                //3dメッシュの角度
                this.three.pcMesh.rotation.set(this.sp ? 0 : 1, this.sp ? 0 : -0.4, this.sp ? 0 : 0.3);
                this.three.planeMesh.rotation.set(this.sp ? 0 : 0.7, this.sp ? 0 : -1.3, this.sp ? 0 : 0.3);
                this.three.robotMesh.rotation.set(this.sp ? 0 : 0, this.sp ? 0 : -0.4, this.sp ? 0 : 0);
                this.three.bananaMesh.rotation.set(0, this.sp ? 0 : -1.4, 0);
                this.three.basketballMesh.rotation.set(0, 0, this.sp ? 0 : 0.5);

                // シーンに3Dモデルを追加
                this.three.scene.add(obj.scene);
                // レンダリングを開始する
                this.rendering();
            });
        },
        rendering(): void {
            // 経過時間取得
            const time = this.three.clock.getElapsedTime();

            if (this.flg.contact != false) {
                // マウスの位置を取得
                this.mousePos.x += (this.mousePos.targetX - this.mousePos.x) * this.mousePos.moveX;
                this.mousePos.y += (this.mousePos.targetY - this.mousePos.y) * this.mousePos.moveY;

                // カメラの位置と回転を調整
                this.three.camera.position.x = this.mousePos.y * 0.04;
                this.three.camera.rotation.z = this.mousePos.x * 0.09;
                this.three.planeMesh.position.y += Math.sin(time) * -0.002;
            }

            // レンダリングを実行
            this.three.renderer.render(this.three.scene, this.three.camera);
            requestAnimationFrame(this.rendering.bind(this));
        },
        handleEvents(): void {
            // マウスイベント
            window.addEventListener('pointermove', this.handleMouse.bind(this), false);

            // リサイズイベント登録
            window.addEventListener(
                'resize',
                throttle(() => {
                    this.handleResize();
                }, 100),
                false
            );
        },
        handleMouse(event) {
            this.mousePos.targetX = (this.winSize.halfWd - event.clientX) / this.winSize.halfWd;
            this.mousePos.targetY = (this.winSize.halfWh - event.clientY) / this.winSize.halfWh;
        },
        handleResize(): void {
            // リサイズ処理
            this.winSize = {
                wd: window.innerWidth,
                wh: window.innerHeight,
                halfWd: window.innerWidth * 0.5,
                halfWh: window.innerHeight * 0.5,
            };
            this.dpr = Math.min(window.devicePixelRatio, 2);
            if (this.three.camera) {
                // カメラの位置更新
                this.three.camera.aspect = this.winSize.wd / this.winSize.wh;
                this.three.camera.updateProjectionMatrix();
            }
            if (this.three.renderer) {
                // レンダラーの大きさ更新
                this.three.renderer.setSize(this.winSize.wd, this.winSize.wh);
                this.three.renderer.setPixelRatio(this.dpr);
            }
        },
        checkFlg(): void {
            if (this.$refs.clickSkills.classList.contains('is-flg')) {
                this.flg.skills = false;
                gsap.to(this.$refs.titleSkills, {
                    duration: 0.3,
                    y: '70%',
                    opacity: 0,
                });
                gsap.to(this.elmsAll.skillsWeb, {
                    duration: 0.3,
                    y: '30%',
                    opacity: 0,
                });
                gsap.to(this.$refs.aboutSkills, {
                    delay: 0.4,
                    duration: 0,
                    visibility: 'hidden',
                });
            } else if (this.$refs.clickArticles.classList.contains('is-flg')) {
                this.flg.articles = false;
                gsap.to(this.$refs.titleArticles, {
                    duration: 0.3,
                    y: '70%',
                    opacity: 0,
                });
                gsap.to(this.elmsAll.articleLinks, {
                    duration: 0.3,
                    y: '30%',
                    opacity: 0,
                });
                gsap.to(this.$refs.aboutArticles, {
                    delay: 0.4,
                    duration: 0,
                    visibility: 'hidden',
                });
            } else if (this.$refs.clickContact.classList.contains('is-flg')) {
                this.flg.contact = false;
                gsap.to(this.$refs.titleContact, {
                    duration: 1,
                    opacity: 0,
                    y: '70%',
                });
                gsap.to(this.$refs.titleTwitter, {
                    duration: 1,
                    opacity: 0,
                    y: '30%',
                });
                gsap.to(this.$refs.aboutContact, {
                    delay: 0.4,
                    duration: 0,
                    visibility: 'hidden',
                });
            }
        },
        resetModels(): void {
            this.three.camera.position.set(0, this.sp ? -2.2 : -1.5, 9);
            this.three.camera.rotation.set(0, 0, 0);
            gsap.to(this.three.robotMesh.scale, {
                x: 0,
                y: 0,
                z: 0,
            });
            gsap.to(this.three.robotMesh.rotation, {
                y: -0.4,
            });
            gsap.to(this.three.robotMesh.position, {
                z: 0,
            });
            gsap.to(this.three.bananaMesh.scale, {
                x: 0,
                y: 0,
                z: 0,
            });
            gsap.to(this.three.bananaMesh.rotation, {
                y: -1.4,
            });
            gsap.to(this.three.pcMesh.scale, {
                x: 0,
                y: 0,
                z: 0,
            });
            gsap.to(this.three.pcMesh.position, {
                x: 5,
                y: -3,
                z: 0,
            });
            gsap.to(this.three.pcMesh.rotation, {
                x: 1,
                y: -0.4,
                z: 0.3,
            });
            gsap.to(this.three.basketballMesh.scale, {
                x: 0,
                y: 0,
                z: 0,
            });
            gsap.to(this.three.basketballMesh.position, {
                z: 0,
            });
            gsap.to(this.three.basketballMesh.rotation, {
                y: 0,
                z: 0.5,
            });
            gsap.to(this.three.planeMesh.scale, {
                x: 0,
                y: 0,
                z: 0,
            });
            gsap.to(this.three.planeMesh.rotation, {
                x: 0.7,
                y: -1.3,
                z: 0.3,
            });
            gsap.to(this.three.planeMesh.position, {
                x: 5,
                y: -0.5,
                z: 0,
            });
        },
        resetAll(): void {
            this.checkFlg();
            gsap.to(this.elmsAll.buttons, {
                ease: 'power2.easeOut',
                stagger: 0.06,
                y: 0,
                rotate: 0,
            });
        },
        actionProfile(): void {
            this.resetModels();
            gsap.to(this.three.basketballMesh.scale, {
                x: 3.5,
                y: 3.5,
                z: 3.5,
            });
            gsap.to(this.three.basketballMesh.rotation, {
                y: 3.5,
                z: 7.5,
                delay: 0.3,
            });
            gsap.to(this.three.basketballMesh.position, {
                z: 2,
                delay: 0.3,
            });
        },
        actionWorks(): void {
            this.resetModels();
            gsap.to(this.three.bananaMesh.scale, {
                x: 2,
                y: 2,
                z: 2,
            });
            gsap.to(this.three.bananaMesh.rotation, {
                y: 0.1,
                delay: 0.5,
            });
        },
        actionSkills(): void {
            this.resetModels();
            gsap.to(this.three.robotMesh.scale, {
                x: 0.4,
                y: 0.4,
                z: 0.4,
            });
        },
        actionArticles(): void {
            this.resetModels();
            gsap.to(this.three.pcMesh.scale, {
                x: 2,
                y: 2,
                z: 2,
            });
        },
        actionContact(): void {
            this.resetModels();
            gsap.to(this.three.planeMesh.scale, {
                x: 5,
                y: 5,
                z: 5,
            });
        },
        showSkills(): void {
            this.resetModels();
            this.checkFlg();
            this.flg.skills = true;
            gsap.to(this.three.robotMesh.scale, {
                x: 0.4,
                y: 0.4,
                z: 0.4,
            });
            gsap.to(this.three.robotMesh.position, {
                z: 1,
                delay: 0.3,
            });
            gsap.to(this.three.robotMesh.rotation, {
                y: Math.PI * 2,
            });
            gsap.to(this.elmsAll.buttons, {
                ease: 'power2.easeOut',
                stagger: 0.06,
                y: '-110%',
                rotate: 0,
            });
            gsap.to(this.$refs.aboutSkills, {
                duration: 1.2,
                ease: 'power4.inOut',
                visibility: 'visible',
            });
            gsap.to(this.$refs.titleSkills, {
                delay: 0.3,
                duration: 1,
                ease: 'power2.ease',
                y: 0,
                opacity: 1,
            });
            gsap.to(this.elmsAll.skillsWeb, {
                delay: 0.7,
                stagger: 0.2,
                ease: 'power2.ease',
                y: 0,
                opacity: 1,
            });
        },
        showArticles(): void {
            this.resetModels();
            this.checkFlg();
            this.flg.articles = true;
            gsap.to(this.three.pcMesh.scale, {
                x: 2,
                y: 2,
                z: 2,
            });
            gsap.to(this.three.pcMesh.position, {
                x: this.sp ? 0 : 0,
                y: this.sp ? -4 : -3,
                z: this.sp ? 4 : 8,
            });
            gsap.to(this.three.pcMesh.rotation, {
                x: 0,
                y: 0,
                z: 0,
            });
            gsap.to(this.elmsAll.buttons, {
                ease: 'power2.easeOut',
                stagger: 0.06,
                y: '-110%',
                rotate: 0,
            });
            gsap.to(this.$refs.aboutArticles, {
                duration: 1.2,
                ease: 'power4.inOut',
                visibility: 'visible',
            });
            gsap.to(this.$refs.titleArticles, {
                delay: 0.3,
                duration: 1,
                ease: 'power2.ease',
                y: 0,
                opacity: 1,
            });
            gsap.to(this.elmsAll.articleLinks, {
                delay: 0.8,
                stagger: 0.1,
                ease: 'power2.ease',
                y: 0,
                opacity: 1,
            });
        },
        showContact(): void {
            this.resetModels();
            this.checkFlg();
            this.flg.contact = true;
            gsap.to(this.three.planeMesh.scale, {
                x: this.sp ? 2.5 : 5,
                y: this.sp ? 2.5 : 5,
                z: this.sp ? 2.5 : 5,
            });
            gsap.to(this.three.planeMesh.rotation, {
                z: 5.8,
                delay: 0.3,
            });
            gsap.to(this.three.planeMesh.position, {
                x: this.sp ? 0 : 3,
                y: this.sp ? -4 : -3,
                z: 1,
                delay: 0.3,
            });
            gsap.to(this.elmsAll.buttons, {
                ease: 'power2.easeOut',
                stagger: 0.06,
                y: '-110%',
                rotate: 0,
            });
            gsap.to(this.$refs.aboutContact, {
                duration: 1.2,
                ease: 'power4.inOut',
                visibility: 'visible',
            });
            gsap.to(this.$refs.titleContact, {
                delay: 0.3,
                duration: 1,
                ease: 'power2.ease',
                y: 0,
                opacity: 1,
            });
            gsap.to(this.$refs.titleTwitter, {
                delay: 0.7,
                duration: 1,
                ease: 'power2.ease',
                y: 0,
                opacity: 1,
            });
            gsap.to(this.$refs.contactLinks, {
                delay: 0.7,
                duration: 1,
                ease: 'power2.ease',
                y: 0,
                opacity: 1,
            });
        },
    },
});
</script>
