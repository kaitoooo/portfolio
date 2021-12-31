<template>
    <section class="mv">
        <div class="mv__battery" data-mv="battery">
            <div class="mv__bar" data-mv="bar"></div>
        </div>
        <div class="mv__canvas" data-canvas></div>
        <div class="mv__buttons" data-mv="buttons">
            <nuxt-link to="/profile" class="mv__text" @mouseover.native="actionProfile">Profile</nuxt-link>
            <nuxt-link to="/works" class="mv__text" @mouseover.native="actionWorks">Works</nuxt-link>
            <button class="mv__text" @mouseover="actionSkills" @click="showSkills" :class="{ 'is-flg': flg.skills }" data-text="skills">Skills</button>
            <button class="mv__text" @mouseover="actionArticles" @click="showArticles" :class="{ 'is-flg': flg.articles }" data-text="articles">Articles</button>
            <button class="mv__text" @mouseover="actionContact" @click="showContact" :class="{ 'is-flg': flg.contact }" data-text="contact">Contact</button>
        </div>
        <div class="mv__sns" data-mv="sns">
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
        <div class="mv__about mv__about--skills" data-mv="skills">
            <div class="mv__outer-title">
                <h2 class="mv__title" data-title="skills">Skills</h2>
            </div>
            <div class="mv__outer" data-title="skillsWeb">
                <h2 class="mv__sub-title">Web</h2>
                <p class="mv__detail">
                    HTML / CSS / JavaScript(Nuxt.js, Three.js) / Typescript / <br class="pc-only" />
                    PHP ( WordPress) / GCP
                </p>
            </div>
            <div class="mv__outer" data-title="skillsWeb">
                <h2 class="mv__sub-title">3D Modeling</h2>
                <p class="mv__detail">Blender / Rhinoceros / Unity</p>
            </div>
        </div>
        <!-- Articles -->
        <div class="mv__about mv__about--articles" data-mv="articles">
            <div class="mv__outer-title">
                <h2 class="mv__title" data-title="articles">Articles</h2>
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
                <a href="https://zenn.dev/kaito_takase/" target="_blank" rel="noopener noreferrer" class="mv__detail mv__detail--link">
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
        </div>
        <!-- Contact -->
        <div class="mv__about mv__about--contact" data-mv="contact">
            <div class="mv__outer-title">
                <h2 class="mv__title" data-title="contact">Contact</h2>
            </div>
            <div class="mv__outer" data-title="twitter">
                <h2 class="mv__detail mv__detail--jp">お問い合わせ・ご連絡はこちらからDMをお願いします。</h2>
                <a href="https://twitter.com/hitoeeeeeeee" target="_blank" rel="noopener noreferrer" class="mv__detail mv__detail--link">
                    https://twitter.com/hitoeeeeeeee/
                    <span class="mv__detail--icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="mv__detail--icon-fill">
                            <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 6 L 27 5 L 26 5 L 18 5 z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 L 5 9 z" />
                        </svg>
                    </span>
                </a>
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

import { throttle } from '~/assets/scripts/utils/throttle';
import { gsap } from 'gsap';

export default Vue.extend({
    data(): {
        winSize: {
            [s: string]: number;
        };
        elms: {
            [s: string]: HTMLElement;
        };
        elmsAll: {
            [s: string]: NodeListOf<HTMLElement>;
        };
        dpr: number;
        three: {
            scene: THREE.Scene;
            renderer: THREE.WebGLRenderer | null;
            clock: THREE.Clock;
            redraw: any;
            font: any;
            camera: THREE.PerspectiveCamera | null;
            cameraFov: number;
            cameraAspect: number;
            cameraFar: number;
        };
        texture: {
            bakedMaterialPink: THREE.MeshBasicMaterial | null;
            bakedMaterialGreen: THREE.MeshBasicMaterial | null;
            bakedMaterialBlue: THREE.MeshBasicMaterial | null;
            map: null;
        };
        overlay: {
            material: THREE.ShaderMaterial;
        };
        loader: {
            gltfLoader: any;
            objTextureLoader: any;
        };
        sp: boolean;
        ua: string;
        mq: MediaQueryList;
        srcObj: string;
        mousePos: {
            x: number;
            y: number;
            targetX: number;
            targetY: number;
            moveX: number;
            moveY: number;
        };
        flg: {
            loaded: boolean;
            skills: boolean;
            articles: boolean;
            contact: boolean;
        };
    } {
        return {
            winSize: {
                wd: null,
                wh: null,
            },
            elms: {
                canvas: null,
                loadingBar: null,
            },
            elmsAll: {
                articleLinks: null,
                skillsWeb: null,
            },
            // デバイスピクセル比(最大:2)
            dpr: null,
            three: {
                scene: null,
                renderer: null,
                clock: null,
                redraw: null,
                font: null,
                camera: null,
                cameraFov: 75,
                cameraAspect: null,
                cameraFar: 100,
            },
            texture: {
                bakedMaterialPink: null,
                bakedMaterialGreen: null,
                bakedMaterialBlue: null,
                map: null,
            },
            overlay: {
                material: null,
            },
            loader: {
                gltfLoader: null,
                objTextureLoader: null,
            },
            sp: null,
            ua: null,
            mq: null,
            srcObj: null,
            mousePos: {
                x: 0,
                y: 0,
                targetX: 0,
                targetY: 0,
                moveX: 0,
                moveY: 0,
            },
            flg: {
                loaded: false,
                skills: false,
                articles: false,
                contact: false,
            },
        };
    },
    // beforeDestroy() {
    //     this.init();
    // },
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
            this.initRenderer();
            this.setModels();
            this.handleEvents();

            if (this.ua.indexOf('msie') !== -1 || this.ua.indexOf('trident') !== -1) {
                return;
            } else {
                this.mq.addEventListener('change', this.getLayout.bind(this));
            }
        },
        getWindowInfo() {
            this.winSize = {
                wd: window.innerWidth,
                wh: window.innerHeight,
            };
            this.elms = {
                canvas: document.querySelector('[data-canvas]'),
                loadingBar: document.querySelector('[data-mv="bar"]'),
                loadingBattery: document.querySelector('[data-mv="battery"]'),
                buttons: document.querySelector('[data-mv="buttons"]'),
                sns: document.querySelector('[data-mv="sns"]'),

                aboutSkills: document.querySelector('[data-mv="skills"]'),
                titleSkills: document.querySelector('[data-title="skills"]'),
                textSkills: document.querySelector('[data-text="skills"]'),

                aboutArticles: document.querySelector('[data-mv="articles"]'),
                titleArticles: document.querySelector('[data-title="articles"]'),
                textArticles: document.querySelector('[data-text="articles"]'),

                aboutContact: document.querySelector('[data-mv="contact"]'),
                titleContact: document.querySelector('[data-title="contact"]'),
                titleTwitter: document.querySelector('[data-title="twitter"]'),
                textContact: document.querySelector('[data-text="contact"]'),
            };
            this.elmsAll = {
                articleLinks: document.querySelectorAll('[data-title="articleLinks"]'),
                skillsWeb: document.querySelectorAll('[data-title="skillsWeb"]'),
            };
            // デバイスピクセル比(最大:2)
            this.dpr = Math.min(window.devicePixelRatio, 2);
            this.three = {
                scene: null,
                renderer: null,
                clock: null,
                redraw: null,
                font: null,
                camera: null,
                cameraFov: 75,
                cameraAspect: window.innerWidth / window.innerHeight,
                cameraFar: 100,
            };
            this.texture = {
                bakedMaterialPink: null,
                bakedMaterialGreen: null,
                bakedMaterialBlue: null,
                map: null,
            };
            this.overlay = {
                material: null,
            };
            this.loader = {
                gltfLoader: null,
                objTextureLoader: null,
            };
            this.sp = 768;
            this.ua = window.navigator.userAgent.toLowerCase();
            this.mq = window.matchMedia('(max-width: 768px)');
            this.srcObj = '/obj/robot.glb';
            this.mousePos = {
                x: 0,
                y: 0,
                targetX: 0,
                targetY: 0,
                moveX: 0.004,
                moveY: 0.003,
            };
            this.flg = {
                loaded: false,
                skills: false,
                articles: false,
                contact: false,
            };
        },
        getLayout() {
            this.sp = this.mq.matches ? true : false;
        },
        initScene() {
            // シーンを作成
            this.three.scene = new this.$THREE.Scene();
        },
        initCamera() {
            // カメラを作成(視野角, スペクト比, near, far)
            this.three.camera = new this.$THREE.PerspectiveCamera(this.three.cameraFov, this.winSize.wd / this.winSize.wh, this.three.cameraAspect, this.three.cameraFar);
            this.three.camera.position.set(0, this.sp ? -2.2 : -1.5, 9);
        },
        initRenderer() {
            // レンダラーを作成
            this.three.renderer = new this.$THREE.WebGLRenderer({
                antialias: true,
                alpha: true, //背景色を設定しないとき、背景を透明にする
            });
            // this.three.renderer.setClearColor(0xffffff); //背景色
            this.three.renderer.setPixelRatio(this.dpr); // retina対応
            this.three.renderer.setSize(this.winSize.wd, this.winSize.wh); // 画面サイズをセット
            this.three.renderer.physicallyCorrectLights = true;
            this.three.renderer.shadowMap.enabled = true; // シャドウを有効にする
            this.three.renderer.shadowMap.type = this.$THREE.PCFSoftShadowMap; // PCFShadowMapの結果から更に隣り合う影との間を線形補間して描画する
            this.elms.canvas.appendChild(this.three.renderer.domElement); // HTMLにcanvasを追加
            this.three.renderer.outputEncoding = this.$THREE.GammaEncoding; // 出力エンコーディングを定義
        },
        setLoading() {
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
                        this.elms.loadingBar.classList.add('is-end');
                        this.elms.loadingBar.style.transform = '';
                        this.elms.loadingBattery.classList.add('is-end');

                        this.elms.buttons.classList.add('is-show');
                        this.elms.sns.classList.add('is-show');
                    }, 1000);
                },

                // Progress
                (itemUrl, itemsLoaded, itemsTotal) => {
                    // 進行状況を計算し、this.elms.loadingBarを更新する
                    const progressRatio = itemsLoaded / itemsTotal;
                    this.elms.loadingBar.style.transform = `scaleX(${progressRatio})`;
                }
            );
            this.loader.gltfLoader = new GLTFLoader(loadingManager);
            this.loader.objTextureLoader = new this.$THREE.TextureLoader(loadingManager);
        },
        setOverlay() {
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
        loadTextures() {
            const colorTexturePink = this.loader.objTextureLoader.load('/textures/pink.png');
            this.three.bakedMaterialPink = new this.$THREE.MeshBasicMaterial({ map: colorTexturePink });
            colorTexturePink.flipY = false;
        },
        setModels() {
            this.loadTextures();
            this.setOverlay();
            // glTF形式の3Dモデルを読み込む
            this.loader.gltfLoader.load(this.srcObj, (obj: any) => {
                // 3Dモデルをredrawに入れる
                this.three.redraw = obj.scene;

                obj.scene.traverse((child: any) => {
                    child.material = this.three.bakedMaterialPink;
                    child.scale.set(this.sp ? 1 : 1.2, this.sp ? 1 : 1.2, this.sp ? 1 : 1.2);
                });
                // 3Dのサイズ設定

                // シーンに3Dモデルを追加
                this.three.scene.add(obj.scene);
                this.flg.loaded = true;
                // レンダリングを開始する
                this.rendering();
            });
        },
        rendering() {
            this.three.redraw.rotation.y += 0.002;

            // レンダリングを実行
            this.three.renderer.render(this.three.scene, this.three.camera);
            requestAnimationFrame(this.rendering.bind(this));
            // this.animate(); // アニメーション開始
        },
        handleEvents() {
            // リサイズイベント登録
            window.addEventListener(
                'resize',
                throttle(() => {
                    this.handleResize();
                }, 100),
                false
            );
            // マウスイベント登録
            window.addEventListener('pointermove', this.handleMouse.bind(this), false);
        },
        handleResize() {
            // リサイズ処理
            this.winSize = {
                wd: window.innerWidth,
                wh: window.innerHeight,
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
        handleMouse(event) {
            this.mousePos.targetX = (this.halfWd - event.clientX) / this.halfWd;
            this.mousePos.targetY = (this.halfWh - event.clientY) / this.halfWh;
        },
        actionProfile(): void {
            gsap.to(this.three.redraw.rotation, {
                duration: 1,
                ease: 'power2.easeOut',
                y: Math.PI * 2,
            });
            this.three.bakedMaterialPink.color = new this.$THREE.Color('#008080');
        },
        actionWorks(): void {
            gsap.to(this.three.redraw.rotation, {
                duration: 1,
                ease: 'power2.easeOut',
                y: 0,
            });
            this.three.bakedMaterialPink.color = new this.$THREE.Color('#006400');
        },
        actionSkills(): void {
            gsap.to(this.three.redraw.rotation, {
                duration: 1,
                ease: 'power2.easeOut',
                y: Math.PI * 2,
            });
            this.three.bakedMaterialPink.color = new this.$THREE.Color('#ffff00');
        },
        actionArticles(): void {
            gsap.to(this.three.redraw.rotation, {
                duration: 1,
                ease: 'power2.easeOut',
                y: 0,
            });
            this.three.bakedMaterialPink.color = new this.$THREE.Color('#800000');
        },
        actionContact(): void {
            gsap.to(this.three.redraw.rotation, {
                duration: 1,
                ease: 'power2.easeOut',
                y: Math.PI * 2,
            });
            this.three.bakedMaterialPink.color = new this.$THREE.Color('#4b0082');
        },
        checkFlg() {
            if (this.elms.textSkills.classList.contains('is-flg')) {
                this.flg.skills = false;
                gsap.to(this.elms.titleSkills, {
                    duration: 0.3,
                    y: '70%',
                    opacity: 0,
                });
                gsap.to(this.elmsAll.skillsWeb, {
                    duration: 0.3,
                    y: '30%',
                    opacity: 0,
                });
                gsap.to(this.elms.aboutSkills, {
                    delay: 0.4,
                    duration: 0,
                    visibility: 'hidden',
                });
            } else if (this.elms.textArticles.classList.contains('is-flg')) {
                this.flg.articles = false;
                gsap.to(this.elms.titleArticles, {
                    duration: 0.3,
                    y: '70%',
                    opacity: 0,
                });
                gsap.to(this.elmsAll.articleLinks, {
                    duration: 0.3,
                    y: '30%',
                    opacity: 0,
                });
                gsap.to(this.elms.aboutArticles, {
                    delay: 0.4,
                    duration: 0,
                    visibility: 'hidden',
                });
            } else if (this.elms.textContact.classList.contains('is-flg')) {
                this.flg.contact = false;
                gsap.to(this.elms.titleContact, {
                    duration: 1,
                    opacity: 0,
                    y: '70%',
                });
                gsap.to(this.elms.titleTwitter, {
                    duration: 1,
                    opacity: 0,
                    y: '30%',
                });
                gsap.to(this.elms.aboutContact, {
                    delay: 0.4,
                    duration: 0,
                    visibility: 'hidden',
                });
            }
        },
        showSkills(): void {
            this.checkFlg();
            this.flg.skills = true;
            gsap.to(this.three.camera.position, {
                duration: 1,
                ease: 'power2.easeOut',
                z: 5,
                y: 0.7,
            });
            gsap.to(this.elms.aboutSkills, {
                duration: 1.2,
                ease: 'power4.inOut',
                visibility: 'visible',
            });
            gsap.to(this.elms.titleSkills, {
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
            this.checkFlg();
            this.flg.articles = true;
            gsap.to(this.three.camera.position, {
                duration: 1,
                ease: 'power2.easeOut',
                z: 6,
                y: -2.3,
            });
            gsap.to(this.elms.aboutArticles, {
                duration: 1.2,
                ease: 'power4.inOut',
                visibility: 'visible',
            });
            gsap.to(this.elms.titleArticles, {
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
            this.checkFlg();
            this.flg.contact = true;
            gsap.to(this.three.camera.position, {
                duration: 1,
                ease: 'power2.easeOut',
                z: 7,
                y: -4,
            });
            gsap.to(this.elms.aboutContact, {
                duration: 1.2,
                ease: 'power4.inOut',
                visibility: 'visible',
            });
            gsap.to(this.elms.titleContact, {
                delay: 0.3,
                duration: 1,
                ease: 'power2.ease',
                y: 0,
                opacity: 1,
            });
            gsap.to(this.elms.titleTwitter, {
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
