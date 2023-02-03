<template>
  <footer class="footer">
    <img class="footer-bg-mobile"
      src="../assets/home/footer-mobile.jpg"
      width="100%"
      height="100%"
      alt=""
    >
    <b-container class="foooter-wrap-desktop">
     <b-row>
        <b-col cols="12" class="footer-mobile">
          <ul class="menu">
            <b-row style="width: 2000px">
              <b-col cols="4" md="2" lg="1">
                <li>
                 <router-link
                    to="/"
                    class="footer-link"
                  >
                    <p class="eng">top</p>
                    <p class="jp">トップ</p>
                  </router-link>
                </li>
              </b-col>
               <b-col cols="4" md="3" lg="2">
                <li>
                  <router-link
                    to="/group-lesson"
                    class="footer-link"
                  >
                    <p class="eng">group lesson</p>
                    <p class="jp">グループレッスン</p>
                  </router-link>
                </li>
              </b-col>
              <b-col  cols="4" md="3" lg="2">
                <li class="padding-l">
                  <router-link
                    to="/lesson-personal"
                    class="footer-link"
                  >
                    <p class="eng">personal lesson</p>
                    <p class="jp">パーソナルレッスン</p>
                  </router-link>
                </li>
              </b-col>
              <b-col  cols="4" md="4" lg="2">
                <li class="padding-l">
                  <router-link
                    to="/lesson-diet"
                    class="footer-link"
                  >
                    <p class="eng">diet program</p>
                    <p class="jp">ダイエットプログラム</p>
                  </router-link>
                </li>
              </b-col>
              <b-col cols="4" md="2" lg="1">
                <li class="padding-l">
                  <router-link
                    to="/instructor"
                    class="footer-link"
                  >
                    <p class="eng">instructor</p>
                    <p class="jp">インストラクター</p>
                  </router-link>
                </li>
              </b-col>
              <b-col  cols="4" md="3" lg="1">
                <li >
                  <router-link
                    to="/price"
                    class="footer-link"
                  >
                    <p class="eng">price</p>
                    <p class="jp">グループレッスン</p>
                  </router-link>
                </li>
              </b-col>
              <b-col  cols="4" md="3" lg="1">
                <li>
                  <router-link
                    to="/voice"
                    class="footer-link"
                  >
                    <p class="eng">voice</p>
                    <p class="jp">お客様の声</p>
                  </router-link>
                </li>
              </b-col>
              <b-col  cols="4" md="3" lg="1">
                <li>
                  <router-link
                    to="/Contact"
                    class="footer-link"
                  >
                    <p class="eng">contact</p>
                    <p class="jp">お問い合わせ</p>
                  </router-link>
                </li>
              </b-col>
            </b-row>
          </ul>
        </b-col>
        <p class="title">Body Make Yoga Studio KARUNA</p>
        <p class="text text-desktop">〒810-0022 福岡県福岡市中央区薬院４丁目１−４ 四つ角ビル 2F</p>

        <a href="https://coubic.com/karuna-yogastudio" target="_blank" style='text-decoration: none;'>
          <p class="inquiry">体験予約＆お問い合わせ</p>
        </a>
        <p class="phone">092-406-6988</P>
        <div class="social">
         <a href="https://www.instagram.com/accounts/login/?next=/karunayoga_fukuoka/" target="_blank" style="color:#fff">
            <font-awesome-icon icon="fa-brands fa-instagram" />
         </a>
         <a href="https://line.me/R/ti/p/%40915qiccb" target="_blank" style="color:#fff">
            <font-awesome-icon icon="fa-brands fa-line" />
         </a>
        </div>
        <a
          href="#"
          class="privacy"
        >privacy policy</a>
        <p class="copyright">©︎2022.Body Make Yoga Studio KARUNA</p>
     </b-row>
    </b-container>

    <div id="backtotop">
      <button class="goTop" v-if="isVisible" @click="backToTop">
          <b-icon icon="chevron-double-up" aria-hidden="true"></b-icon>
      </button>
    </div>
  </footer>
</template>
<script>
  import $ from 'jquery'
  export default {
   data: function() {
      return {
        isVisible: false
      };
    },
    methods: {
      initToTopButton: function() {
        $(document).bind('scroll', function() {
          var backToTopButton = $('.goTop');
          if ($(document).scrollTop() > 250) {
            backToTopButton.addClass('isVisible');
            this.isVisible = true;
          } else {
            backToTopButton.removeClass('isVisible');
            this.isVisible = false;
          }
        }.bind(this));
      },
      backToTop: function() {
        $('html,body').stop().animate({
          scrollTop: 0
        }, 'slow', 'swing');
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        this.initToTopButton();
      });
    }
  }
</script>
