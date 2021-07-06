import * as THREE from 'three/build/three.module';
import 'imports-loader?THREE=three!three/examples/js/loaders/GLTFLoader.js';
import { throttle } from './utils/throttle';
import { gsap } from 'gsap';

export class Webgl {
    wd: number;
    wh: number;
    halfWd: number;
    halfWh: number;
    sp: number;
    elms: {
        canvas: HTMLElement;
    };
    three: {
        scene: any;
        renderer: any;
        camera: any;
        redraw: any;
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
    constructor() {
        this.wd = window.innerWidth;
        this.wh = window.innerHeight;
        this.halfWd = window.innerWidth * 0.5;
        this.halfWh = window.innerHeight * 0.5;
        this.sp = 768;
        this.elms = {
            canvas: document.querySelector('[data-canvas]'),
        };
        this.three = {
            scene: null,
            renderer: null,
            camera: null,
            redraw: null,
            cameraFov: 50,
            cameraAspect: window.innerWidth / window.innerHeight,
            controls: null,
        };
        this.srcObj = '/obj/robot.gltf';
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
        this.init();
    }
    init() {
        this.initScene();
        this.initCamera();
        this.initRenderer();
        this.setLoading();
        this.setLight();
        this.handleEvents();
    }
    initScene() {
        this.three.scene = new THREE.Scene();
    }
    initCamera() {
        this.three.camera = new THREE.PerspectiveCamera(this.three.cameraFov, this.wd / this.wh, this.three.cameraAspect, 1000); //(視野角, スペクト比, near, far)
        this.three.camera.position.set(0, 0, 9);
    }
    initRenderer() {
        // レンダラーのサイズ調整
        this.three.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true, //背景色を設定しないとき、背景を透明にする
        });

        // this.three.renderer.setClearColor(0xffffff); //背景色
        this.three.renderer.setPixelRatio(window.devicePixelRatio);
        this.three.renderer.setSize(this.wd, this.wh);
        this.three.renderer.physicallyCorrectLights = true;
        this.three.renderer.shadowMap.enabled = true;
        this.three.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.elms.canvas.appendChild(this.three.renderer.domElement);
        this.three.renderer.outputEncoding = THREE.GammaEncoding;
    }
    setLight() {
        const ambientLight = new THREE.AmbientLight(0x666666);
        this.three.scene.add(ambientLight);

        const positionArr = [
            [0, 5, 0, 2],
            [-5, 3, 2, 2],
            [5, 3, 2, 2],
            [0, 3, 5, 1],
            [0, 3, -5, 2],
        ];

        for (let i = 0; i < positionArr.length; i++) {
            const directionalLight = new THREE.DirectionalLight(0xffffff, positionArr[i][3]);
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
    }
    setLoading() {
        // const loader = new GLTFLoader();
        const loader = new THREE.GLTFLoader();
        loader.load(this.srcObj, (obj) => {
            const data = obj.scene;

            for (let i = 0; i < data.children.length; i++) {
                let mesh = data.children[i];
                if (i >= 1000) {
                    if (i == 1014 || i == 1019) {
                        mesh.receiveShadow = true;
                    }
                    mesh.castShadow = true;
                    // material.transparent = true;
                }
            }
            this.three.redraw = data;
            this.three.scene.add(data);
            this.flg.loaded = true;
            this.rendering();
        });
    }
    rendering() {
        // this.three.redraw.scale.set(0.05, 0.05, 0.05);
        if (this.wd <= this.sp) {
            this.three.redraw.scale.set(0.5, 0.5, 0.5);
        }

        // マウスの位置を取得
        this.mousePos.x += (this.mousePos.targetX - this.mousePos.x) * this.mousePos.moveX;
        this.mousePos.y += (this.mousePos.targetY - this.mousePos.y) * this.mousePos.moveY;
        //マウスの位置によって3dの位置をずらす
        this.three.redraw.position.x = 0 - this.mousePos.x * 1.5;

        requestAnimationFrame(this.rendering.bind(this));
        this.three.renderer.render(this.three.scene, this.three.camera);
        this.animate(); // アニメーション開始
    }
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
        tl.to(
            this.three.redraw.position,
            {
                duration: 1.2,
                ease: 'power2.out',
                z: 0,
            },
            3.2
        );
        tl.to(
            this.three.redraw.rotation,
            {
                duration: 2.5,
                ease: 'power4.easeOut',
                x: 3.2,
                y: 3.7,
                z: 3.1,
            },
            3.3
        );
        tl.to(
            this.elms.canvas,
            {
                duration: 1,
                ease: 'power1.out',
                opacity: 1,
            },
            3.35
        );
        tl.play();
    }
    handleEvents() {
        window.addEventListener('pointermove', this.handleMouse.bind(this), false);
        // window.addEventListener('resize', throttle(this.handleResize.bind(this)), false);
        window.addEventListener(
            'resize',
            throttle(() => {
                this.handleResize.bind(this);
            }, 100)
        );
    }
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
    }
    handleMouse(event) {
        this.mousePos.targetX = (this.halfWd - event.clientX) / this.halfWd;
        this.mousePos.targetY = (this.halfWh - event.clientY) / this.halfWh;
    }
}
