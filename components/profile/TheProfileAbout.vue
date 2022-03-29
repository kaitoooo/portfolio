<template>
    <section class="profile-about">
        <ul class="profile-about__list">
            <li class="profile-about__item">
                <p class="profile-about__theme">Name</p>
                <p class="profile-about__name">高瀬 魁人</p>
            </li>
            <li class="profile-about__item">
                <p class="profile-about__theme">Occupation</p>
                <p class="profile-about__detail profile-about__detail--en">Front-end Engineer</p>
            </li>
            <li class="profile-about__item">
                <p class="profile-about__theme">Where</p>
                <p class="profile-about__detail profile-about__detail--jp">千葉</p>
            </li>
            <li class="profile-about__item">
                <p class="profile-about__theme">Date Of Birth</p>
                <p class="profile-about__detail profile-about__detail--en">1996.10.4</p>
            </li>
            <li class="profile-about__item">
                <p class="profile-about__theme">Career</p>
                <p class="profile-about__detail profile-about__detail--jp">
                    2019年 3月 法政大学 デザイン工学部 システムデザイン学科 卒業<br />
                    2019年 4月 <a href="https://sgnl.jp/" target="_blank" rel="noopener noreferrer" class="profile-about__link">株式会社シグナル</a> 入社
                </p>
            </li>
            <li class="profile-about__item">
                <p class="profile-about__theme">GitHub</p>
                <p class="profile-about__detail">
                    <a href="https://github.com/kaitoooo/" target="_blank" rel="noopener noreferrer" class="profile-about__link">
                        https://github.com/kaitoooo/
                        <span class="profile-about__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="profile-about__icon-fill">
                                <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 6 L 27 5 L 26 5 L 18 5 z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 L 5 9 z" />
                            </svg>
                        </span>
                    </a>
                </p>
            </li>
            <li class="profile-about__item">
                <p class="profile-about__theme">Skills</p>
                <p class="profile-about__detail profile-about__detail--en profile-about__detail--first">
                    <span class="profile-about__sub-theme">Web</span>
                    HTML / CSS / JavaScript(Nuxt.js, React.js, Three.js) <br />
                    Typescript / PHP ( WordPress) / GCP
                </p>
                <p class="profile-about__detail profile-about__detail--en">
                    <span class="profile-about__sub-theme">3D Modeling</span>
                    Blender / Rhinoceros / Unity
                </p>
            </li>
            <li class="profile-about__item">
                <p class="profile-about__theme">Articles</p>
                <p class="profile-about__detail">
                    <a href="https://note.com/kaito_takase/" target="_blank" rel="noopener noreferrer" class="profile-about__link">
                        https://note.com/kaito_takase/
                        <span class="profile-about__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="profile-about__icon-fill">
                                <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 6 L 27 5 L 26 5 L 18 5 z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 L 5 9 z" />
                            </svg>
                        </span>
                    </a>
                    <br />
                    <a href="https://zenn.dev/kaito_takase/" target="_blank" rel="noopener noreferrer" class="profile-about__link">
                        https://zenn.dev/kaito_takase/
                        <span class="profile-about__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="profile-about__icon-fill">
                                <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 6 L 27 5 L 26 5 L 18 5 z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 L 5 9 z" />
                            </svg>
                        </span>
                    </a>
                    <br />
                    <a href="https://qiita.com/kaito_takase/items/4b381799d76d4101278c" target="_blank" rel="noopener noreferrer" class="profile-about__link">
                        https://qiita.com/kaito_takase/
                        <span class="profile-about__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="profile-about__icon-fill">
                                <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 6 L 27 5 L 26 5 L 18 5 z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 L 5 9 z" />
                            </svg>
                        </span>
                    </a>
                    <br />
                    <a href="https://codepen.io/kaito-takase/" target="_blank" rel="noopener noreferrer" class="profile-about__link">
                        https://codepen.io/kaito-takase/
                        <span class="profile-about__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="profile-about__icon-fill">
                                <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 6 L 27 5 L 26 5 L 18 5 z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 L 5 9 z" />
                            </svg>
                        </span>
                    </a>
                </p>
            </li>
        </ul>
        <nuxt-link to="/" class="profile-about__back">Back to Top Page</nuxt-link>
    </section>
</template>
<style lang="scss" scoped>
@import '~/assets/styles/project/profile/_about';
</style>
