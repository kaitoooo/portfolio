require('intersection-observer');
import { gsap } from 'gsap';

export class Scroll {
    threshold: number | number[];
    addClass: string;
    targets: NodeListOf<HTMLElement>;

    constructor() {
        this.threshold = [0.5];
        this.addClass = 'is-active';
        this.targets = document.querySelectorAll('[data-scroll]');
        this.init();
    }
    init(): void {
        if (this.targets.length > 0) {
            this.scroll();
        }
    }
    scroll() {
        gsap.config({
            force3D: true,
        });
        const options = {
            threshold: this.threshold,
        };
        const callback = (entries: any, observer: any) => {
            entries.forEach((entry: any) => {
                if (entry.intersectionRatio >= this.threshold) {
                    this.checkType(entry.target, observer);
                }
            });
        };
        const observer = new IntersectionObserver(callback, options);
        this.targets.forEach((elm) => {
            observer.observe(elm);
        });
    }
    checkType(target: any, observer: any) {
        const type = target.getAttribute('data-scroll-type');

        if (type) {
            switch (type) {
                case 'introBorder':
                    this.introBorder();
                    if (observer) observer.unobserve(target);
                    break;
                default:
                    break;
            }
            switch (type) {
                case 'articlesBorder':
                    this.articlesBorder();
                    if (observer) observer.unobserve(target);
                    break;
                default:
                    break;
            }
            switch (type) {
                case 'contactBorder':
                    this.contactBorder();
                    if (observer) observer.unobserve(target);
                    break;
                default:
                    break;
            }
            switch (type) {
                case 'fadeIn':
                    target.classList.add(this.addClass);
                    if (observer) observer.unobserve(target);
                    break;
                default:
                    break;
            }
        } else {
            target.classList.add(this.addClass);
            if (observer) observer.unobserve(target);
        }
    }
    introBorder() {
        const borderTop = document.querySelector('[data-intro="borderTop"]');
        const borderBottom = document.querySelector('[data-intro="borderBottom"]');
        const borderLeft = document.querySelector('[data-intro="borderLeft"]');
        const borderRight = document.querySelector('[data-intro="borderRight"]');
        const wrap = document.querySelector('[data-intro="wrap"]');
        const button = document.querySelector('[data-intro="button"]');
        const pagination = document.querySelector('[data-intro="pagination"]');

        const tl = gsap.timeline({
            defaults: {
                ease: 'power2.ease',
            },
        });
        tl.to(
            borderTop,
            {
                className: '+=intro__border intro__border--top is-active',
            },
            'simultaneous'
        );
        tl.to(
            borderBottom,
            {
                className: '+=intro__border intro__border--bottom is-active',
            },
            'simultaneous'
        );
        tl.to(
            borderLeft,
            {
                className: '+=intro__border intro__border--left is-active',
            },
            'simultaneous'
        );
        tl.to(
            borderRight,
            {
                className: '+=intro__border intro__border--right is-active',
            },
            'simultaneous'
        );
        tl.to(
            wrap,
            {
                className: '+=intro__slider--wrap is-active',
                delay: 0.8,
            },
            'simultaneous2'
        );
        tl.to(
            pagination,
            {
                className: '+=swiper-pagination is-active',
                delay: 0.8,
            },
            'simultaneous2'
        );
        tl.to(
            button,
            {
                className: '+=intro__button is-active',
                delay: 0.8,
            },
            'simultaneous2'
        );
    }
    articlesBorder() {
        const borderTop = document.querySelector('[data-articles="borderTop"]');
        const borderBottom = document.querySelector('[data-articles="borderBottom"]');
        const borderLeft = document.querySelector('[data-articles="borderLeft"]');
        const borderRight = document.querySelector('[data-articles="borderRight"]');
        const wrap = document.querySelector('[data-articles="wrap"]');

        const tl = gsap.timeline({
            defaults: {
                ease: 'power2.ease',
            },
        });
        tl.to(
            borderTop,
            {
                className: '+=articles__border articles__border--top is-active',
            },
            'simultaneous'
        );
        tl.to(
            borderBottom,
            {
                className: '+=articles__border articles__border--bottom is-active',
            },
            'simultaneous'
        );
        tl.to(
            borderLeft,
            {
                className: '+=articles__border articles__border--left is-active',
            },
            'simultaneous'
        );
        tl.to(
            borderRight,
            {
                className: '+=articles__border articles__border--right is-active',
            },
            'simultaneous'
        );
        tl.to(
            wrap,
            {
                className: '+=articles__text--wrap is-active',
                delay: 0.8,
            },
            'simultaneous2'
        );
    }
    contactBorder() {
        const borderTop = document.querySelector('[data-contact="borderTop"]');
        const borderBottom = document.querySelector('[data-contact="borderBottom"]');
        const borderLeft = document.querySelector('[data-contact="borderLeft"]');
        const borderRight = document.querySelector('[data-contact="borderRight"]');
        const wrap = document.querySelector('[data-contact="wrap"]');

        const tl = gsap.timeline({
            defaults: {
                ease: 'power2.ease',
            },
        });
        tl.to(
            borderTop,
            {
                className: '+=contact__border contact__border--top is-active',
            },
            'simultaneous'
        );
        tl.to(
            borderBottom,
            {
                className: '+=contact__border contact__border--bottom is-active',
            },
            'simultaneous'
        );
        tl.to(
            borderLeft,
            {
                className: '+=contact__border contact__border--left is-active',
            },
            'simultaneous'
        );
        tl.to(
            borderRight,
            {
                className: '+=contact__border contact__border--right is-active',
            },
            'simultaneous'
        );
        tl.to(
            wrap,
            {
                className: '+=contact__text--wrap is-active',
                delay: 0.8,
            },
            'simultaneous2'
        );
    }
}
