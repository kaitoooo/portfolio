<template>
  <div class="container">
    <loading />
    <section class="kv" id="kv">
      <h1><img srcset="~/assets/img/hi-res/title@2x.png 2x" src="~/assets/img/lo-res/title.png" alt="kaito takase portfolio" /></h1>
      <div class="kv-message" id="text-area">
        Welcome to my portfolio!<br />
        Press "▼" to move to the next sentence.
      </div>
      <button @click="run" id="button"></button>
    </section>
    <section class="status" id="status" v-scroll="handleScroll">
      <h2>STATUS</h2>
      <div class="status-inner">
        <div class="status-inner__block-l">
          <p>Takase Kaito</p>
          <p class="status-inner__block-r__level">LEVEL 2</p>
          <div><img srcset="~/assets/img/hi-res/kaitotakase@2x.png 2x" src="~/assets/img/lo-res/kaitotakase.png" alt="kaitotakase" /></div>
        </div>
        <table class="status-inner__block-r">
          <tbody>
            <tr>
              <td>JOB</td>
              <td>Front-end engineer / Back-end engineer</td>
            </tr>
            <tr>
              <td class="status-inner__block-r__title">INTRODUCTION</td>
              <td>1996/10/4 <br class="sp_only" />Born in Chiba<br /></td>
            </tr>
            <tr>
              <td>SKILL</td>
              <td>HTML / CSS / JavaScript(Nuxt.js, Three.js) / PHP ( WordPress) / Rhinoceros / blender / Unity</td>
            </tr>
            <tr>
              <td>TWITTER</td>
              <td><a href="https://twitter.com/hitoeeeeeeee" target="_blank" rel="noopener noreferrer">@hitoeeeeeeee</a></td>
            </tr>
            <tr>
              <td>INSTAGRAM</td>
              <td><a href="https://www.instagram.com/hito___e/" target="_blank" rel="noopener noreferrer">@hito___e</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section class="works" id="works" v-scroll="handleScroll">
      <h2>WORKS</h2>
      <div class="works-inner">
        <a v-for="workItem in workItems" :key="workItem.id" :href="workItem.path" class="works-inner__box">
          <div>
            <img :src="require(`~/assets/img/lo-res/${workItem.image.src}`)" :srcset="require(`~/assets/img/hi-res/${workItem.image.srcset}`) + ' 2x'" :alt="workItem.txt" />
          </div>
          <p>{{ workItem.txt }}</p>
        </a>
      </div>
      <button v-if="workItems.length - countWorks >= 0" type="button" @click="isMoreWorks">
        MORE
      </button>
    </section>
    <section class="note" id="note" v-scroll="handleScroll">
      <h2>NOTE</h2>
      <div class="note-inner">
        <a v-for="listItem in listItems" :key="listItem.id" :href="listItem.path" target="_blank" rel="noopener noreferrer" class="note-inner__box">
          <div>
            <img :src="require(`~/assets/img/lo-res/${listItem.image.src}`)" :srcset="require(`~/assets/img/hi-res/${listItem.image.srcset}`) + ' 2x'" :alt="listItem.txt" />
          </div>
          <p>{{ listItem.txt }}</p>
        </a>
      </div>
      <button v-if="listItems.length - countList >= 0" type="button" @click="isMoreList">
        MORE
      </button>
    </section>
    <section class="contact" id="contact" v-scroll="handleScroll">
      <h2>CONTACT</h2>
      <div class="contact-inner">
        <div class="contact-inner__block-l">
          <div><img srcset="~/assets/img/hi-res/twitter@2x.png 2x" src="~/assets/img/lo-res/twitter.png" alt="twitter" /></div>
        </div>
        <div class="contact-inner__block-r">
          <p>TWITTER<a href="https://twitter.com/hitoeeeeeeee" target="_blank" rel="noopener noreferrer">@hitoeeeeeeee</a>よりDMください</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import loading from '~/components/Loading.vue';
export default {
  components: {
    loading,
  },
  data() {
    return {
      work: [
        { image: { src: 'blender.png', srcset: 'blender@2x.png' }, txt: 'Blender Animation', path: 'https://kaito-takase.dev/blender-animation/' },
        { image: { src: 'dice.png', srcset: 'dice.png' }, txt: '3D Demo Dice', path: 'https://kaito-takase.dev/3d-dice/' },
      ],
      list: [
        { image: { src: 'portfolio.png', srcset: 'portfolio@2x.png' }, txt: 'ポートフォリオ作成しました', path: 'https://note.com/kaito_takase/n/n3c43bbec2560' },
        { image: { src: 'note9.png', srcset: 'note9@2x.png' }, txt: 'GCEでSendGridを使ってメールを送受信する方法', path: 'https://note.com/kaito_takase/n/n6b8204d3c9c7' },
        { image: { src: 'note8.png', srcset: 'note8@2x.png' }, txt: 'IEにのみjsを読み込みたい', path: 'https://note.com/kaito_takase/n/n209671ae78ae' },
        { image: { src: 'note7.png', srcset: 'note7@2x.png' }, txt: 'サムネイルをクリックしてメイン画像...', path: 'https://note.com/kaito_takase/n/n8b1e4baa9939' },
        { image: { src: 'swiper.png', srcset: 'swiper@2x.png' }, txt: '複数のスライダーを同じページに設置する方法', path: 'https://note.com/kaito_takase/n/n0c26570be394' },
        { image: { src: 'note3.png', srcset: 'note3@2x.png' }, txt: 'クリックで現れる謎の青い枠を消す方法', path: 'https://note.com/kaito_takase/n/n5ddc69fc9f34' },
        { image: { src: 'note5.png', srcset: 'note5@2x.png' }, txt: '各ブラウザごとに読み込むCSSを変えたい', path: 'https://note.com/kaito_takase/n/n1b64fc670257' },
        { image: { src: 'note6.png', srcset: 'note6@2x.png' }, txt: 'ウィンドウサイズによって処理を変えたい', path: 'https://note.com/kaito_takase/n/ndfe5784aa639' },
        { image: { src: 'note2.png', srcset: 'note2@2x.png' }, txt: '複数のyoutube動画をモーダルウィンド...', path: 'https://note.com/kaito_takase/n/nf9c3f1998520' },
        { image: { src: 'mysql.png', srcset: 'mysql@2x.png' }, txt: 'mysql8のデータベース接続エラーについて', path: 'https://note.com/kaito_takase/n/nc19f744dd157' },
      ],
      countWorks: 6,
      countList: 6,
      getval: this.getTargetMsg(),
      currentMsgArray: [],
    };
  },
  computed: {
    workItems() {
      const work = this.work;
      return work.slice(0, this.countWorks);
    },
    listItems() {
      const list = this.list;
      return list.slice(0, this.countList);
    },
  },
  methods: {
    handleScroll(env, el) {
      const top = el.getBoundingClientRect().top;
      const wh = window.innerHeight;
      if (top < wh / 2) {
        el.classList.add('is-show');
        return true;
      }
      return false;
    },
    run() {
      //一度テキスト表示エリアを空にする
      document.getElementById('text-area').innerHTML = '';
      //表示するメッセージを取得する
      const currentArray = this.getval();
      //メッセージを一文字ずつ分解して配列に入れる。
      this.currentMsgArray = Array.from(currentArray);
      //メッセージを一文字ずつ表示する
      this.printChar();
      if (this.currentMsgArray.length === 0) {
        document.getElementById('button').style.display = 'none';
        document.getElementById('text-area').innerHTML = 'Thank you for reading.';
      }
    },
    printChar() {
      //全部取り出したら何もしない。
      if (this.currentMsgArray.length === 0) return;
      //表示する文字を取得する
      let currentChar = this.currentMsgArray.slice(0, 1);
      //表示エリアに取得した文字を追加する
      document.getElementById('text-area').innerHTML += currentChar;
      //配列の先頭を削除する。(もう表示したので)
      this.currentMsgArray = this.currentMsgArray.slice(1);
      //50後にもう一度このメソッドを呼び出す。
      setTimeout(this.printChar, 50);
    },
    getTargetMsg() {
      //表示予定の文字列を配列で準備しておく。
      let frontMsg = [
        'ポートフォリオをご覧いただきありがとうございます。',
        '簡単な自己紹介をさせていただきます。',
        '２０１９年 法政大学デザイン工学部システムデザイン学科を卒業し、株式会社シグナルに入社しました　高瀬魁人（たかせかいと）といいます。',
        '現在はウェブプログラマーとして日々業務を行っており、大学生時代は３Dモデリングを主として学び、プログラミングを勉強していました。',
        'このポートフォリオでは、趣味で行っている３Dモデリングを生かして作成したサイトや、勉強で作成したもの、業務で作成したページを載せています。',
        'また、このポートフォリオはドットのゲームイメージし、Final Fantasyの世界観を表現しています。',
        'ぜひ最後までご覧ください。',
        'お読みいただきありがとうございます。',
        'Thank you for visiting my portfolio.',
        'Let me give you a brief introduction.',
        'My name is Kaito Takase. I joined Signal Co., Ltd after graduating from the Department of System Design, Faculty of Design Engineering, Hosei University.',
        'I mainly studied 3D modeling when I was a college student, and now I am working daily as a web programmer.',
        'This portfolio includes sites created using 3D modeling that is done as a hobby, those created during study, and pages created during work.',
        'In addition, this portfolio expresses the world view of Final Fantasy as a dot game image.',
        'Please see to the end.',
      ];
      //クロージャを使って値を設定する
      return function() {
        //準備した文字がなくなったら何もしない
        if (frontMsg.length === 0) return false;
        //一つ取得
        let current = frontMsg.slice(0, 1);
        //一つ削除
        frontMsg = frontMsg.slice(1);
        //配列を文字列で返す
        return current[0];
      };
    },
    isMoreWorks() {
      this.countWorks += 3;
    },
    isMoreList() {
      this.countList += 3;
    },
  },
};
</script>

<style></style>
