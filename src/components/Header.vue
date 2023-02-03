<template>
  <header id="wrap-header">
    <b-container>
      <b-row>
        <b-col cols="6" style="z-index: 4;">
          <router-link
            to="/"
          >
            <img
              class=""
              src="../assets/karna.png"
              alt=""
            >
          </router-link>
        </b-col>
        <!-- desktop menu -->
        <b-col cols="6" class="d-none-desktop">
          <div class="social">
            <div class="network">
              <a href="https://www.instagram.com/karunayoga_fukuoka/" target="_blank" style="color:#3D3C3C;">
                 <font-awesome-icon icon="fa-brands fa-instagram" />
              </a>
              <a href="https://line.me/R/ti/p/%40915qiccb" target="_blank" style="color:#3D3C3C;">
                <font-awesome-icon icon="fa-brands fa-line" />
              </a>
            </div>
            <a class="notranslate" href="https://coubic.com/karuna-yogastudio" target="_blank" style="text-decoration:none;color: #585858;">
              <p>
                体験予約
              </p>
            </a>
          </div>

          <ul class="menu">
            <li>
              <router-link
                to="/"
                class="nav-link"
              >
                <p class="eng">top</p>
                <p class="jp">トップ</p>
              </router-link>
            </li>
            <li>
              <router-link to="/"
                class="nav-link has_sub"
              >
                <p class="eng">lesson</p>
                <p class="jp">レッスン</p>
                <ul class="sub_menu">
                  <li>
                    <router-link
                      to="/group-lesson"
                      class="nav-link"
                    >
                      <p class="eng">group lesson</p>
                      <p class="jp">グループレッスン</p>
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/lesson-personal"
                      class="nav-link"
                    >
                      <p class="eng">personal lesson</p>
                      <p class="jp">パーソナルレッスン</p>
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/lesson-diet"
                      class="nav-link"
                    >
                      <p class="eng">diet program</p>
                      <p class="jp">短期集中プログラム</p>
                    </router-link>
                  </li>
                </ul>
              </router-link>

            </li>
            <li>
              <router-link
                to="/instructor"
                class="nav-link"
              >
                <p class="eng">instructor</p>
                <p class="jp">インストラクター</p>
              </router-link>
            </li>
            <li>
              <router-link
                to="/price"
                class="nav-link"
              >
                <p class="eng">price</p>
                <p class="jp">料金</p>
              </router-link>
            </li>
            <li>
              <router-link
                to="/voice"
                class="nav-link"
              >
                <p class="eng">voice</p>
                <p class="jp">お客様の声</p>
              </router-link>
            </li>
             <li>
              <router-link
                to="/contact"
                class="nav-link"
              >
                <p class="eng">contact</p>
                <p class="jp">お問い合わせ</p>
              </router-link>
            </li>
          </ul>
        </b-col>
        <!-- mobile menu-->
         <!-- b-col cols="5" class="d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-sm-none d-md-block">
          <div class="social-all-menu" style="width:230px;">
            <div class="network">
              <a href="#" style="color:#3D3C3C;">
                 <font-awesome-icon icon="fa-brands fa-instagram" />
              </a>
              <font-awesome-icon icon="fa-brands fa-line" />
            </div>
            <p>
              <a href="#" style="text-decoration:none;color: #585858;">
                体験予約
              </a>
            </p>
          </div>
        </b-col -->
        <b-col style="z-index: 99;" class="d-none-mobile">
          <NavMobile />
        </b-col>
        <b-col cols="12" style="z-index: 4;" class="d-none-mobile">
           <div class="social" style="margin-left: -12px;width:100%;bottom:0;padding: 5px 0px;position:fixed;background:rgb(255 255 255 / 80%);justify-content: center;text-align: center;contain: content;">
              <p>
                <a href="https://coubic.com/karuna-yogastudio" target="_blank" style="text-decoration:none;color: #585858;">
                   体験予約
                </a>
              </p>
              <div class="network">
                <a href="https://www.instagram.com/karunayoga_fukuoka/" target="_blank" style="color:#3D3C3C;">
                  <font-awesome-icon icon="fa-brands fa-instagram" style="margin-right: 8px;margin-left:8px;font-size:36px !important" />
                </a>
                <a href="https://line.me/R/ti/p/%40915qiccb" target="_blank" style="color:#3D3C3C;">
                  <font-awesome-icon icon="fa-brands fa-line" style="font-size:35px !important" />
                </a>
              </div>
            </div>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>
<style>
   @media (max-width:993px) {
    .d-none-desktop{
      display: none !important;
    }
  }
  @media(min-width:992px) {
    .d-none-mobile{
      display: none !important;
    }
  }
</style>
<script type="module">
  import NavMobile from "./Nav-mobile.vue";
  import "/src/assets/main.scss";

  export default {
    components: {
      NavMobile,
    },
  }
</script>