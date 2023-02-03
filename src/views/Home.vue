<template>
  <div class="home">
    <div class="slide">
        <!-- scroll down -->
        <a href="#instructor">
          <div class="scroll-down">
            <small class="text-scroll">scroll</small>
          </div>
        </a>
        <!-- end scroll down -->
     <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide>
             <template #img>
              <div class="d-block banner-slide1"></div>
              <img
                  class="d-block"
                  :src='slide1'
                  :placeholder='slide1'
                  width="100%"
                  height='800'
              />
            </template>
            <h3 class="title-slide-right"> なりたい自分になれる</h3>
            <p class="text-slide-right">
              BODY MAKE YOGA STUDIO KARUNA
            </p>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <div class="d-block banner-slide2"></div>
              <img
                  class="d-block"
                  :src='slide2'
                  width="100%"
                  height='500vh'
              />
            </template>
              <h3 class="title-slide-right"> なりたい自分になれる</h3>
              <p class="text-slide-right">
                BODY MAKE YOGA STUDIO KARUNA
              </p>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <div class="d-block banner-slide3"></div>
              <img
                  class="d-block"
                  :src='slide3'
                  width="100%"
                  height='800vh'
              />
            </template>
              <h3 class="title-slide-right tt-color"> なりたい自分になれる</h3>
              <p class="text-slide-right tt-color">
                BODY MAKE YOGA STUDIO KARUNA
              </p>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <div class="d-block banner-slide4"></div>
              <img
                  class="d-block"
                  :src='slid4'
                  width="100%"
                  height=""
              />
            </template>
              <h3 class="title-slide-left"> なりたい自分になれる</h3>
              <p class="text-slide-left">
                BODY MAKE YOGA STUDIO KARUNA
              </p>
          </b-carousel-slide>
        </b-carousel>
        <!-- social mobile size only top page >
        <b-container>
          <b-row>
              <b-col cols="12" style="z-index: 4;" class="d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-sm-none d-md-block">
                <div class="social-top" style="margin-left: -12px;width:100%;margin-top:-13%;padding: 7px 0px;position:absolute;background:rgb(255 255 255 / 90%);justify-content: center;text-align: center;contain: content;">
                    <p>
                      <a href="#" style="text-decoration:none;color: #585858;">
                        体験予約
                      </a>
                    </p>
                    <div class="network">
                      <a href="#" style="color:#3D3C3C;">
                        <font-awesome-icon icon="fa-brands fa-instagram" style="margin-right: 8px;margin-left:8px;font-size:36px !important" />
                      </a>
                      <font-awesome-icon icon="fa-brands fa-line" style="font-size:35px !important" />
                    </div>
                </div>
              </b-col>
          </b-row>
        </b-container -->
        <!-- end social mobile size only top page -->
    </div>
    <div class="msg">【感染予防対策につきまして】お客様に安心してご利用いただけますように、感染予防対策を実施しております。</div>
    <section class="about" id="instructor">
        <b-container>
          <div class="each_title">
            <div
              class="title"
            >About</div>
            <p class="divide-title" />
            <small class="sub-title">Body Make Yoga Studio KARUNAとは</small>
          </div>
          <div class="karuna">KARUNAとはサンスクリット語で「愛」という意味です。</div>
          <p class="karuna_des">愛をもってお客様に接し、「なりたい自分になれる」をコンセプトにパーソナルレッスン(マンツーマンレッスン）と少人数制レッスンを行い、
            輝く女性を増やしていくヨガスタジオです。
          </p>
          <b-row  class="bmy_section">
            <b-col sm="12" md="6" class="bmimg text-center">
              <lazy-image
                  :src='imgstack'
                  :placeholder='loadingimage'
              />
            </b-col>
            <b-col sm="12" md="6" class="bmy_text">
              <p class="bmy_title">なりたい自分になれるBMYメソッド</p>
              <p class="bmy">何をしても、痩せられなかった方も、ぜひ一度KARUNAのBMYメソッドをお試しください。<br>
  BMYメソッドとは、「BodyMakeYoga」の略称でKARUNAのヨガレッスンで女性らしい しなやかなボディラインを作り出します。
              </p>
              <p class="bmy">身体の歪みを整え、安全かつ機能的なヨガのアドバイスで ボディメイクを考えたレッスンをご提供致します。</p>
            </b-col>
          </b-row>
        </b-container>

        <b-container>
          <div class="reason">選ばれる理由</div>
          <b-row class="list_training">
            <b-col  class="cls" sm="12" md="4">
              <div class="text-center">
                <lazy-image
                  :src='img1'
                  :placeholder='loadingimage'
                  width="100%"
                />
              </div>
              <div class="training">
                健康的な身体のバランスを調整する
                パーソナルトレーニング
              </div>
              <p>カルナでは「しなやかな柔軟性・適切な筋力・スリムなボディーライン」を軸にパーソナルトレーニングを行っています。
                ただ痩せるだけでなく、あなたの目的やご要望に応じて、食事やトレーニングを組み立てていきます。
              </p>
            </b-col>
            <b-col  class="cls" sm="12" md="4">
              <div class="text-center">
                <lazy-image
                  :src='img2'
                  :placeholder='loadingimage'
                  width="100%"
                />
              </div>
              <div class="training">
                少人数制の丁寧なレッスン
              </div>
              <p>グループレッスンではお客様に満足いただけるよう 少人数制のレッスンを行っています。 講師の目が行き届く範囲を考慮し、安全にレッスンを 受けることができます。
              </p>
            </b-col>
            <b-col class="cls" sm="12" md="4">
              <div class="text-center">
                <lazy-image
                  :src='img3'
                  :placeholder='loadingimage'
                  width="100%"
                />
              </div>
              <div class="training">
                インナービューティー
              </div>
              <p>食のプロが監修の元、食事のアドバイスを提供しております。 外見はもちろん体の内側から整え 妥協せずにお客様の変わる！を 徹底的にサポートいたします。
              </p>
            </b-col>
          </b-row>
        </b-container>
    </section>
    <section class="campaign">
        <!-- div class="each_title">
          <div
            class="title"
          >Campaign</div>
          <p class="divide-title" />
          <small class="sub-title">お得なキャンペーンのご紹介</small>
        </div>
        <div class="text-center">
            <p class="campaign-text">入会キャンペーン実施中 <br/>バナー</p>
        </div -->
    </section>
    <section class="menu Service-warp-last">

        <b-container  class="menu_section">
          <div class="each_title">
            <div
              class="title"
            >Menu</div>
            <p class="divide-title" />
            <small class="sub-title">なりたい自分を実現するために</small>
          </div>
          <b-row>
           <b-col sm="12" md="6" style="padding-top: 40px;">
              <lazy-image
                  :src='grouplesson'
                  :placeholder='loadingimage'
                />
            </b-col>
           <b-col sm="12" md="6">
             <p class="lesson_title">少人数制の丁寧なレッスン</p>
             <p class="lesson_des">最大6名で行うヨガレッスンです。<br/><br/>

限られた時間の中で最大限の効果を得ていただきたいとの想いで、お客様の身体の癖や弱い筋肉を見極め、インストラクターが細やかなアドバイスやアプローチをさせて頂きます。
何よりお客様に安全に取り組んで頂く為、１人の講師の目が行き届く範囲を考慮し、レッスンは少人数会員制となっております。
            </p>
           </b-col>
         </b-row>
         <b-row>
          <b-col sm="12" md="6" class="d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-sm-none d-md-block" style="padding-top: 15px;">

               <lazy-image
                  :src='personallesson'
                  :placeholder='loadingimage'
                />
          </b-col>
          <b-col sm="12" md="6">
            <p class="lesson_title">結果にこだわるパーソナル（マンツーマン）レッスン</p>
            <p class="lesson_des">プライベートな空間でのレッスンで周りの目をきにせずレッスンに集中できる空間をご用意しております。<br/>
              カウンセリングを行い、明確な目標に向かって、インストラクターが二人三脚でサポート。<br/>
              ヨガの他に、食事のアドバイス、トレーニング、マッサージ、マスターストレッチを取り入れながら毎回その方の目的に合わせてプログラムをお組みします。<br/>
              パーソナルレッスンは受付時間が8：30～20：30まで、前日予約・変更可能となっておりますので、お仕事前やお仕事帰りなど、忙しい方でもライフスタイルに合わせてご利用頂けます。
           </p>
          </b-col>
          <b-col sm="12" md="6" class="d-none d-sm-block" style="padding-top: 60px;">

             <lazy-image
                  :src='personallesson'
                  :placeholder='loadingimage'
                />
          </b-col>
        </b-row>
        <b-row>
         <b-col sm="12" md="6" style="padding-top: 15px;">
             <lazy-image
                  :src='dietprogram'
                  :placeholder='loadingimage'
                />
          </b-col>
         <b-col sm="12" md="6">
           <p class="lesson_title">腸から整える食事指導</p>
           <p class="lesson_des">短期集中プログラムでは、期限を決めて集中して食生活を改善し、その方に合ったオーダーメイドトレーニングを行っていきます。<br/><br/>
             カルナでは「しなやかな柔軟性・適切な筋力・スリムなボディーライン・食事改善と腸内環境を整える」を軸にパーソナル指導を行っております。
          </p>
         </b-col>
       </b-row>
        </b-container >
       <b-container class="service-bg ">
        <b-row>
          <b-col
            sm="6"
            md="6"
            class="service-last-left"
          >
            <div>
              <div class="d-flex ">
                <img
                  src="../assets/sp-img/n-one.png"
                  width="7%"
                  height="7%"
                  alt=""
                  style="padding-top: 9px;"
                >
                <p class="text text-color">インターネットからお申込み下さい。<br>
                  日時を決めてご予約をしたら<br>
                  ・動きやすい服装・タオル・お水<br>
                  をご準備して スタジオまでお越しください。<br>
                </p>
              </div>
              <div class="d-flex ">
                <img
                  style="margin-top: -9px"
                  src="../assets/sp-img/n-two.png"
                  width="7%"
                  height="7%"
                  alt=""
                >
                <p class="text text-color">
                  ウェアに着替え、レッスンの準備をします。
                </p>
              </div>
              <div class="d-flex" style="padding-top: 28px;">
                <img
                  src="../assets/sp-img/n-three.png"
                  width="7%"
                  height="7%"
                  alt=""
                  style="padding-top: 15px;"
                >
                <p
                  class="text-color"
                  style="padding-left: 25px;"
                >
                  レッスンを開始します。<br>
                  しっかりと動ける範囲を把握いたしますので 無理のない、レッスンが受けられます。
                </p>
              </div>
            </div>
          </b-col>
          <b-col
            sm="6"
            md="6"
            class="text-center"
          >
            <div class="service-last-right text-center">
              <div>
                <h3 style="font-weight:400;color:#707770">trial  lesson</h3>
              </div>
              <div class="buttom-booking ">
                <p class="text-color">
                  インターネットからお申込み下さい。<br><br>
                  <b-link href="https://coubic.com/karuna-yogastudio" target="_blank">体験レッスン予約</b-link>
                </p>
              </div>
              <div class="d-flex justify-content-center">
                <b-link href="https://www.instagram.com/karunayoga_fukuoka/" target="_blank">
                  <img
                    src="../assets/sp-img/Icon awesome-instagram.png"
                    width="50%"
                    alt=""
                  >
                </b-link>
                <b-link href="https://line.me/R/ti/p/%40915qiccb" target="_blank">
                  <img
                    src="../assets/sp-img/Icon awesome-line.png"
                    width="50%"
                    alt=""
                  >
                </b-link>
              </div>

            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="studio">
      <b-container>
        <div class="each_title">
          <div
            class="title"
          >Studio</div>
          <p class="divide-title" />
          <small class="sub-title">駅からすぐの通いやすい立地</small>
        </div>
        <p class="desc">会社帰りやお買い物ついでに立ち寄れる、アットホームで心地よいヨガスタジオです。
皆様の生き生きとしたライフスタイルのサポートをさせて頂きます。</p>

        <b-row>
          <b-col sm="12" md="6">
               <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13295.843976120776!2d130.397443!3d33.580362!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x90c8069f78e27ae!2sKaruna!5e0!3m2!1sen!2skh!4v1660114406945!5m2!1sen!2skh" width="600" height="125%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </b-col>
          <b-col sm="12" md="6">
            <img class="img-stdio-karuna" src="@/assets/home/home_studio.jpg" width="100%" height="125%" />
            <div class="social-homes">
              <p>
                <a href="https://coubic.com/karuna-yogastudio" target="_blank" style="text-decoration:none;color: #585858;">
                  体験 レッスン 予約
                </a>
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="voice voice-warp">
      <b-container>
        <div class="each_title">
          <div
            class="title"
          >Voice</div>
          <p class="divide-title" />
          <small class="sub-title">お客様の声</small>
        </div>
        <b-row class="feeling">
           <b-col
            md="6"
            class="voice-content"
            style=""
          >
            <div class="text-center pb-2"><p class="text-color">身体も気持ちもスッキリ</p></div>
            <b-row>
              <b-col
                cols="4"
                sm="4"
                class="text-center mt-2"
              >
                <img
                  class=""
                  src="../assets/sp-img/voice_w.png"
                  width="100%"
                  alt=""
                  style="margin-top:-30px"
                >
                <small>50代</small>
              </b-col>
              <b-col
                cols="8"
                sm="8"
              >
                <div>
                  <small>
                   ヨガを始める前は冷え性や座骨神経痛に悩んでいましたが、
                  1年続けたら鎖骨神経痛は治り、冷え性から足の指がつるのもなくなりました。無理せず続けたら、
                  ヨガで身体も気持ちもスッキリして気分転換になり、更年期の症状も軽くて良かったと思います。
                  </small>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col
            md="6"
            class="voice-content"
          >
            <div class="text-center pb-2"><p class="text-color">心の拠り所になっています</p></div>
            <b-row>
              <b-col
                cols="4"
                sm="4"
                class="text-center mt-2"
              >
                <img
                  class=""
                  src="../assets/sp-img/voice_w.png"
                  width="100%"
                  alt=""
                  style="margin-top:-30px"
                >
                <small>40代</small>
              </b-col>
              <b-col
                cols="8"
                sm="8"
              >
                <div>
                  <small>
                    仕事や家庭でなにかあってもひととき集中して心身ともにリフレッシュでき、
                  心の拠り所となっている。週に１回でも意識して続けることで、立ち方、脚の形、
                  体重の乗せ方など、気持ちと体型の変化を実感している。
                  </small>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <a href="#/voice" style="text-decoration: none;">
          <div class="more">
              <a href="#/voice">more →</a>
          </div>
        </a>
      </b-container>
    </section>
    <section class="news">
       <b-container>
           <div class="each_title">
              <div
                class="title"
              >News</div>
              <p class="divide-title" />
              <small class="sub-title">カルナからのお知らせ</small>
            </div>
            <div class="blog_list">
              <b-row class="blog">
                <b-col class="date 440px">2022/12/19</b-col>
                <b-col cols="9" class="text">年末年始の休館日12/30~1/3</b-col>
              </b-row>
              <b-row class="blog">
                <b-col class="date">2022/03/01</b-col>
                <b-col cols="9" class="text">3月のキャンペーンを更新しました！</b-col>
              </b-row>
              <b-row class="blog">
                <b-col class="date">2022/02/20</b-col>
                <b-col cols="9" class="text">3月のスケジュールとテーマを更新しました！</b-col>
              </b-row>
              <b-row class="blog">
                <b-col class="date">2020/07/20</b-col>
                <b-col cols="9" class="text">感染予防対策についてのお願い</b-col>
              </b-row>
              <b-row class="blog">
                <b-col class="date">2020/07/14</b-col>
                <b-col cols="9" class="text">新規募集を再開しました</b-col>
              </b-row>
              <b-row class="blog">
                <b-col class="date 440px">2020/06/12</b-col>
                <b-col cols="9" class="text">カルナオンライン始まりました！</b-col>
              </b-row>

            </div>
       </b-container>
    </section>

    <!-- instagram -->
    <section class="about" id="insta">
       <b-container>
          <div class="reason" style="font-size:38px;margin-top: 0px;">Instagram</div>
          <b-row class="pic">
             <div id="instagram-feed1" class="instagram_feed">
                <template v-if="grams.length > 0">
                  <div v-for="(gram, index) in grams" class="instagram_new">
                    <a class="insta-link" :href="gram.permalink" target="_blank" >
                      <img class="insta-image" v-if="gram.thumbnail_url" :src="gram.thumbnail_url" :alt="gram.caption" />
                      <img class="insta-image" v-else="gram.media_url" :src="gram.media_url" :alt="gram.caption" />
                    </a>
                  </div>
                </template>
              </div>
          </b-row>
       </b-container>
    </section>
  </div>
</template>
<script>
   import require from 'jquery'
  export default {

    data() {
      return {
        slide: 0,
        sliding: null,
         slide1: require('@/assets/home/slide.jpg'),
        slide2: require('@/assets/home/slide2.jpg'),
        slide3: require('@/assets/home/slide3.jpg'),
        slid4: require('@/assets/home/slide4.jpg'),

        imgstack: require('@/assets/home/stack.png'),

        img1: require('@/assets/home/1.jpg'),
        img2: require('@/assets/home/2.jpg'),
        img3: require('@/assets/home/3.jpg'),

        grouplesson: require('@/assets/home/group_lesson.jpg'),
        personallesson: require('@/assets/home/personal_lesson.jpg'),
        dietprogram: require('@/assets/home/diet_program.jpg'),
        loadingimage:require('@/assets/loading-image.gif'),


         access_token: "IGQVJWVWRnbUMtWFMzNjFtSnlITDdJOVFvaDVWQ19vcklMaUVveWM0blhackJZATEQwWGc5YUZAWQnE2aUZADazNwME4yR1BROF95aEVPUFZAQNDFYazd2ZAlphVk9PdERvLVJESmYwUHUxclFlX09wbHh5YgZDZD",
         fields: 'id,media_type,media_url,thumbnail_url,timestamp,permalink,caption',
          url: "https://graph.instagram.com/me/media",
          caption: "",
          image: "",
          image_video:"",
          grams: [],
          limit: 12,
          error: false
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },
       getGrams() {
          this.axios.get(this.url +"?fields=" + this.fields + "&access_token=" + this.access_token +"&limit="+ this.limit)
            .then(({data}) => {
              this.grams = data.data
              this.caption = data.data[0].caption,
              this.image = data.data[0].media_url,
              this.image_video = data.data[0].thumbnail_url
            })
            .catch(function (error) {
              console.log(error)
              this.error = true
            });
        }
    },
    created() {
      this.getGrams();
      this.event.preventDefault();
    }
  }
</script>