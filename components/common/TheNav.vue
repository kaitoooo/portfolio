<template>
    <section class="nav">
        <transition name="scale-up" appear>
            <div class="nav__canvas" @click="processing" data-canvas></div>
        </transition>
        <div class="nav__menu" data-nav="menu">
            <ul class="nav__list">
                <li class="nav__item" data-nav="items">
                    <nuxt-link to="/" class="nav__link">Top</nuxt-link>
                </li>
                <li class="nav__item" data-nav="items" v-if="this.$route.name === 'works'">
                    <nuxt-link to="/profile" class="nav__link">Profile</nuxt-link>
                </li>
                <li class="nav__item" data-nav="items" v-if="this.$route.name === 'profile'">
                    <nuxt-link to="/works" class="nav__link">Works</nuxt-link>
                </li>
                <li class="nav__item" data-nav="items">
                    <a href="https://twitter.com/hitoeeeeeeee/" target="_blank" rel="noopener noreferrer" class="nav__sns-link">
                        <svg enable-background="new 0 0 128 128" id="Social_Icons" version="1.1" viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g>
                                <g>
                                    <rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128" width="128" />
                                    <path
                                        class="nav__twitter-icon"
                                        clip-rule="evenodd"
                                        d="M128,23.294    c-4.703,2.142-9.767,3.59-15.079,4.237c5.424-3.328,9.587-8.606,11.548-14.892c-5.079,3.082-10.691,5.324-16.687,6.526    c-4.778-5.231-11.608-8.498-19.166-8.498c-14.493,0-26.251,12.057-26.251,26.927c0,2.111,0.225,4.16,0.676,6.133    C41.217,42.601,21.871,31.892,8.91,15.582c-2.261,3.991-3.554,8.621-3.554,13.552c0,9.338,4.636,17.581,11.683,22.412    c-4.297-0.131-8.355-1.356-11.901-3.359v0.331c0,13.051,9.053,23.937,21.074,26.403c-2.201,0.632-4.523,0.948-6.92,0.948    c-1.69,0-3.343-0.162-4.944-0.478c3.343,10.694,13.035,18.483,24.53,18.691c-8.986,7.227-20.315,11.533-32.614,11.533    c-2.119,0-4.215-0.123-6.266-0.37c11.623,7.627,25.432,12.088,40.255,12.088c48.309,0,74.717-41.026,74.717-76.612    c0-1.171-0.023-2.342-0.068-3.49C120.036,33.433,124.491,28.695,128,23.294"
                                        fill-rule="evenodd"
                                    />
                                </g>
                            </g>
                        </svg>
                    </a>
                </li>
                <li class="nav__item" data-nav="items">
                    <a href="https://www.instagram.com/hito___e/" target="_blank" rel="noopener noreferrer" class="nav__sns-link">
                        <svg enable-background="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g>
                                <path
                                    class="nav__instagram-icon"
                                    d="M505,257c0,34.8-0.7,69.7,0.2,104.5c1.5,61.6-37.2,109.2-86.5,130.4c-19.8,8.5-40.6,13-62.1,13c-67.3,0.1-134.7,1-202-0.3   c-50.7-1-92.4-22.2-122.3-64c-15.7-22-23.2-47-23.2-74.1c0-71.7,0-143.3,0-215c0-58.5,28.5-99.4,79.1-126C110.2,14,134.1,9.1,159,9   c65.3,0,130.7-0.4,196,0.2c50.7,0.4,93,19.8,124.2,60.6c17.4,22.8,25.8,49,25.8,77.8C505,184,505,220.5,505,257z M46,257   c0,36.7,0,73.3,0,110c0,16.4,3.8,31.8,12.3,45.7c22.3,36.5,56,54.3,97.8,55c67.1,1,134.3,0.4,201.5,0.2c16.5,0,32.5-3.4,47.4-10.5   c40.6-19.4,63.3-50.3,63.1-96.7c-0.4-71-0.1-142-0.1-213c0-20.1-5.7-38.5-17.6-54.7c-23-31.1-54.8-46.4-92.8-46.8   c-67-0.8-134-0.3-201-0.2c-14.3,0-28.1,2.9-41.5,7.9c-36.8,13.7-71,48.4-69.4,99.5C46.9,188,46,222.5,46,257z"
                                />
                                <path
                                    class="nav__instagram-icon"
                                    d="M257.6,363c-64.5,0-116.5-51.4-116.6-115.4c-0.1-63,52.3-114.6,116.4-114.6c64.3-0.1,116.5,51.4,116.6,114.9   C374,311.3,321.9,362.9,257.6,363z M257.6,326c43.9,0,79.5-35.1,79.4-78.3c-0.1-42.8-35.7-77.8-79.4-77.8   c-43.9,0-79.7,34.9-79.7,78C178,291.1,213.7,326.1,257.6,326z"
                                />
                                <path d="M387.5,98c13.5,0,24.5,11.5,24.5,25.6c-0.1,14.1-11.2,25.5-24.7,25.4c-13.3-0.1-24.2-11.5-24.2-25.3   C363,109.6,374,98,387.5,98z" />
                            </g>
                        </svg>
                    </a>
                </li>
                <li class="nav__item" data-nav="items">
                    <a href="https://github.com/kaitoooo/" target="_blank" rel="noopener noreferrer" class="nav__sns-link nav__sns-link--github">
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
                                    class="nav__github-icon"
                                    d="M32.029,8.345c-13.27,0 -24.029,10.759 -24.029,24.033c0,10.617 6.885,19.624 16.435,22.803c1.202,0.22 1.64,-0.522 1.64,-1.16c0,-0.569 -0.02,-2.081 -0.032,-4.086c-6.685,1.452 -8.095,-3.222 -8.095,-3.222c-1.093,-2.775 -2.669,-3.514 -2.669,-3.514c-2.182,-1.492 0.165,-1.462 0.165,-1.462c2.412,0.171 3.681,2.477 3.681,2.477c2.144,3.672 5.625,2.611 6.994,1.997c0.219,-1.553 0.838,-2.612 1.526,-3.213c-5.336,-0.606 -10.947,-2.669 -10.947,-11.877c0,-2.623 0.937,-4.769 2.474,-6.449c-0.247,-0.608 -1.072,-3.051 0.235,-6.36c0,0 2.018,-0.646 6.609,2.464c1.917,-0.533 3.973,-0.8 6.016,-0.809c2.041,0.009 4.097,0.276 6.017,0.809c4.588,-3.11 6.602,-2.464 6.602,-2.464c1.311,3.309 0.486,5.752 0.239,6.36c1.54,1.68 2.471,3.826 2.471,6.449c0,9.232 -5.62,11.263 -10.974,11.858c0.864,0.742 1.632,2.208 1.632,4.451c0,3.212 -0.029,5.804 -0.029,6.591c0,0.644 0.432,1.392 1.652,1.157c9.542,-3.185 16.421,-12.186 16.421,-22.8c0,-13.274 -10.76,-24.033 -24.034,-24.033"
                                />
                            </g>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@import '~/assets/styles/project/common/_nav';
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
        items: NodeListOf<HTMLElement>;
        dpr: number;
        three: {
            scene: THREE.Scene;
            renderer: THREE.WebGLRenderer | null;
            redraw: any;
            camera: THREE.PerspectiveCamera | null;
            cameraFov: number;
            cameraAspect: number;
            cameraFar: number;
        };
        loader: {
            gltfLoader: any;
        };
        sp: any;
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
        };
    } {
        return {
            winSize: {
                wd: 100,
                wh: 100,
                halfWd: null,
                halfWh: null,
            },
            elms: {
                canvas: null,
                menu: null,
            },
            items: null,
            dpr: null,
            three: {
                scene: null,
                renderer: null,
                redraw: null,
                camera: null,
                cameraFov: 75,
                cameraAspect: null,
                cameraFar: 100,
            },
            loader: {
                gltfLoader: null,
            },
            sp: 768,
            ua: null,
            mq: null,
            srcObj: '/obj/hamburger.glb',
            mousePos: {
                x: 0.2,
                y: 0,
                targetX: 0,
                targetY: 0,
                moveX: 0.004,
                moveY: 0.007,
            },
            flg: {
                loaded: false,
            },
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init(): void {
            this.getWindowInfo();
            this.getLayout();
            this.initScene();
            this.initCamera();
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
                wd: 100,
                wh: 100,
                halfWd: window.innerWidth * 0.5,
                halfWh: window.innerHeight * 0.5,
            };
            this.three = {
                scene: null,
                renderer: null,
                redraw: null,
                camera: null,
                cameraFov: 75,
                cameraAspect: window.innerWidth / window.innerHeight,
                cameraFar: 100,
            };
            this.elms = {
                canvas: document.querySelector('[data-canvas]'),
                menu: document.querySelector('[data-nav="menu"]'),
            };
            this.items = document.querySelectorAll('[data-nav="items"]');
            this.dpr = Math.min(window.devicePixelRatio, 2);
            this.ua = window.navigator.userAgent.toLowerCase();
            this.mq = window.matchMedia('(max-width: 768px)');
            this.mousePos = {
                x: 0.2,
                y: 0,
                targetX: 0,
                targetY: 0,
                moveX: 0.004,
                moveY: 0.007,
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
            this.three.camera.position.set(this.sp ? 0 : 0, this.sp ? 0 : -1.5, this.sp ? 9 : 9);
        },
        setLight(): void {
            // 環境光源(色, 光の強さ)
            const ambientLight = new this.$THREE.AmbientLight(0x666666, 0.5);
            this.three.scene.add(ambientLight);

            // 平行光源(色, 光の強さ)
            const directionalLight = new this.$THREE.DirectionalLight(0xffffff, 5);

            // シャドウニキビを削除
            // directionalLight.shadow.normalBias = 0.05;

            // ライトの位置を設定
            directionalLight.position.set(1, 2, 1);

            // 影を有効化
            // directionalLight.castShadow = true;

            // 平行光源のヘルパー(対象, 大きさ)
            // const directionalLightHelper = new this.$THREE.DirectionalLightHelper(directionalLight, 0.8);
            // this.three.scene.add(directionalLightHelper);

            // 影の距離を設定
            // directionalLight.shadow.camera.near = 1;
            // directionalLight.shadow.camera.far = 6;

            // カメラの振幅を設定
            directionalLight.shadow.camera.top = 1;
            directionalLight.shadow.camera.right = 1;
            directionalLight.shadow.camera.bottom = -1;
            directionalLight.shadow.camera.left = -1;

            // カメラヘルパーの追加
            // const directionalLightCameraHelper = new this.$THREE.CameraHelper(directionalLight.shadow.camera);
            // this.three.scene.add(directionalLightCameraHelper);

            // シーンにライトを追加
            this.three.scene.add(directionalLight);
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
            this.three.renderer.shadowMap.enabled = true; // シャドウを有効にする
            this.three.renderer.shadowMap.type = this.$THREE.PCFSoftShadowMap; // PCFShadowMapの結果から更に隣り合う影との間を線形補間して描画する
            this.elms.canvas.appendChild(this.three.renderer.domElement); // HTMLにcanvasを追加
            this.three.renderer.outputEncoding = this.$THREE.GammaEncoding; // 出力エンコーディングを定義
        },
        setModels(): void {
            this.loader.gltfLoader = new GLTFLoader();
            // glTF形式の3Dモデルを読み込む
            this.loader.gltfLoader.load(this.srcObj, (obj: any) => {
                // 3Dモデルをredrawに入れる
                this.three.redraw = obj.scene;

                obj.scene.traverse((child: any) => {
                    child.scale.set(this.sp ? 0.8 : 0.8, this.sp ? 0.8 : 0.8, this.sp ? 0.8 : 0.8);
                    child.rotation.set(this.sp ? 0.1 : 0.4, 0, 0);
                });

                // シーンに3Dモデルを追加
                this.three.scene.add(obj.scene);
                this.flg.loaded = true;
                // レンダリングを開始する
                this.rendering();
            });
        },
        rendering(): void {
            // マウスの位置を取得
            this.mousePos.x += (this.mousePos.targetX - this.mousePos.x) * this.mousePos.moveX;
            this.mousePos.y += (this.mousePos.targetY - this.mousePos.y) * this.mousePos.moveY;

            // マウス位置で3dメッシュを動かす
            this.three.redraw.rotation.y = -this.mousePos.x;
            this.three.redraw.rotation.x = this.mousePos.y * 0.3;

            // レンダリングを実行
            this.three.renderer.render(this.three.scene, this.three.camera);
            requestAnimationFrame(this.rendering.bind(this));
        },
        handleEvents(): void {
            // リサイズイベント登録
            window.addEventListener(
                'resize',
                throttle(() => {
                    this.handleResize.bind(this);
                }, 100)
            );
            // マウスイベント登録
            window.addEventListener('pointermove', this.handleMouse.bind(this), false);
        },
        handleResize(): void {
            // リサイズ処理
            this.winSize = {
                wd: 100,
                wh: 100,
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
        handleMouse(event): void {
            // マウスの画面中央からの位置を割合で取得
            this.mousePos.targetX = (this.winSize.halfWd - event.clientX) / this.winSize.halfWd;
            this.mousePos.targetY = (this.winSize.halfWh - event.clientY) / this.winSize.halfWh;
        },
        toggle(): any {
            gsap.config({
                force3D: true,
            });
            const tl = gsap.timeline({
                paused: true,
                defaults: {
                    duration: 0.6,
                    ease: 'power2.easeOut',
                },
            });
            if (this.elms.canvas.classList.contains('is-flg')) {
                // close
                tl.to(this.items, {
                    duration: 0.3,
                    stagger: 0.02,
                    opacity: 0,
                    visibility: 'hidden',
                });
                tl.to(this.elms.menu, {
                    duration: 0.3,
                    width: '0',
                });
                tl.play();
                this.elms.canvas.classList.remove('is-flg');
            } else {
                // open
                this.elms.canvas.classList.add('is-flg');
                tl.to(this.elms.menu, {
                    width: 'auto',
                });
                tl.to(this.items, {
                    stagger: 0.05,
                    visibility: 'visible',
                    opacity: 1,
                });
                tl.play();
            }
        },
        processing() {
            // ハンバーガーメニューの多重クリックを防ぐ
            this.elms.canvas.classList.add('is-process');
            this.toggle();
            setTimeout(() => {
                this.elms.canvas.classList.remove('is-process');
            }, 1500);
        },
    },
});
</script>
