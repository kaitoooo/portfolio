const THREE = require('three');
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { throttle } from '~/assets/scripts/utils/throttle';
import { gsap } from 'gsap';

export class Nav {
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
    constructor() {
        this.winSize = {
            wd: 100,
            wh: 100,
            halfWd: window.innerWidth * 0.5,
            halfWh: window.innerHeight * 0.5,
        };
        this.elms = {
            canvas: document.querySelector('[data-canvas]'),
            menu: document.querySelector('[data-nav="menu"]'),
        };
        this.items = document.querySelectorAll('[data-nav="items"]');
        // デバイスピクセル比(最大:2)
        this.dpr = Math.min(window.devicePixelRatio, 2);
        this.three = {
            scene: null,
            renderer: null,
            redraw: null,
            camera: null,
            cameraFov: 75,
            cameraAspect: window.innerWidth / window.innerHeight,
            cameraFar: 100,
        };
        this.loader = {
            gltfLoader: null,
        };
        this.sp = 768;
        this.ua = window.navigator.userAgent.toLowerCase();
        this.mq = window.matchMedia('(max-width: 768px)');
        this.srcObj = '/obj/hamburger.glb';
        this.mousePos = {
            x: 0.2,
            y: 0,
            targetX: 0,
            targetY: 0,
            moveX: 0.004,
            moveY: 0.007,
        };
        this.flg = {
            loaded: false,
        };
        this.init();
    }
    init(): void {
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
    }
    getLayout(): void {
        this.sp = this.mq.matches ? true : false;
    }
    initScene(): void {
        // シーンを作成
        this.three.scene = new THREE.Scene();
    }
    initCamera(): void {
        // カメラを作成(視野角, スペクト比, near, far)
        this.three.camera = new THREE.PerspectiveCamera(this.three.cameraFov, this.winSize.wd / this.winSize.wh, this.three.cameraAspect, this.three.cameraFar);
        this.three.camera.position.set(this.sp ? 0 : 0, this.sp ? 0 : -1.5, this.sp ? 9 : 9);
    }
    setLight(): void {
        // 環境光源(色, 光の強さ)
        const ambientLight = new THREE.AmbientLight(0x666666, 0.5);
        this.three.scene.add(ambientLight);

        // 平行光源(色, 光の強さ)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 5);

        // シャドウニキビを削除
        // directionalLight.shadow.normalBias = 0.05;

        // ライトの位置を設定
        directionalLight.position.set(1, 2, 1);

        // 影を有効化
        // directionalLight.castShadow = true;

        // 平行光源のヘルパー(対象, 大きさ)
        // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.8);
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
        // const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
        // this.three.scene.add(directionalLightCameraHelper);

        // シーンにライトを追加
        this.three.scene.add(directionalLight);
    }
    initRenderer(): void {
        // レンダラーを作成
        this.three.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true, //背景色を設定しないとき、背景を透明にする
        });
        this.three.renderer.setPixelRatio(this.dpr); // retina対応
        this.three.renderer.setSize(this.winSize.wd, this.winSize.wh); // 画面サイズをセット
        this.three.renderer.physicallyCorrectLights = true;
        this.three.renderer.shadowMap.enabled = true; // シャドウを有効にする
        this.three.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // PCFShadowMapの結果から更に隣り合う影との間を線形補間して描画する
        this.elms.canvas.appendChild(this.three.renderer.domElement); // HTMLにcanvasを追加
        this.three.renderer.outputEncoding = THREE.GammaEncoding; // 出力エンコーディングを定義
    }
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
    }
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
    }
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
        // クリックイベント登録
        this.elms.canvas.addEventListener('click', () => {
            this.processing();
        });
    }
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
    }
    handleMouse(event): void {
        // マウスの画面中央からの位置を割合で取得
        this.mousePos.targetX = (this.winSize.halfWd - event.clientX) / this.winSize.halfWd;
        this.mousePos.targetY = (this.winSize.halfWh - event.clientY) / this.winSize.halfWh;
    }
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
    }
    processing() {
        // ハンバーガーメニューの多重クリックを防ぐ
        this.elms.canvas.classList.add('is-process');
        this.toggle();
        setTimeout(() => {
            this.elms.canvas.classList.remove('is-process');
        }, 1500);
    }
}
