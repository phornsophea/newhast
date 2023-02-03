<template>
  <div
    id="intructor"
    class="intructor"
    style="background:rgb(203 209 204 / 46%"
  >
    <div class="intructor-top">
      <div class="top-img">
        <b-container>
          <b-row>
            <b-col cols="12">
              <h3>Instructor</h3>
              <b class="title">インストラクター</b>
           </b-col>
          </b-row>
        </b-container>
      </div>
    </div>

    <div
      class="intructor-warp pt-5 pb-2 bg-white"
    >
      <b-container
        fruid
        class="bv-example-row pt-4"
      >
        <div class="each_title pb-5 mb-4">
          <div
            class="title"
          >Instructor</div>
          <p class="divide-title" />
          <small class="sub-title">インストラクター紹介</small>
        </div>
      </b-container>
    </div>

    <div class="intructor-warp ">
      <!-- CHIE section -->
      <div>
        <b-container class="bv-example-row pt-4 pb-4">
          <b-row class="pt-2 pt-pb-2rem">
            <!-- column image size mobile -->
            <b-col
              sm="6"
              md="6"
              class="d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-sm-none d-md-block pb-2"
            >
               <lazy-image
                  :src='imgchie'
                  :placeholder='loadingimage'
                  width="100%"
              />
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="px-4"
            >
              <div class="pb-4"><h3 style="font-weight: 400 !important;">CHIE</h3></div>
              <div>
                <small>
                  以前ネイルの仕事をしていた時に、肩凝りがひどくてそれを改善したいと思いヨガを始めました。ゆったりした呼吸でヨガをして、自分と向き合う時間を作る事で、頑張りすぎず、不調がひどくなる前に自分自身を労わる事で、肩凝りの緩和にも繋がりました。<br>
                  皆様も日々忙しく過ごす中で、ヨガを通してご自身を大切にして頂いて、リラックスできるような空間を作っていけたらと思います<br><br>

                  全米ヨガアライアンス200ｈ修了<br>
                  フィジカルトレーニングインストラクター修了
                </small>
              </div>
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="d-none d-sm-block"
            >
                <lazy-image
                  :src='imgchie'
                  :placeholder='loadingimage'
                  width="100%"
              />
            </b-col>
          </b-row>
        </b-container>
      </div>
      <!--AYUMU section-->
      <div class="bg-white">
        <b-container
          class="bv-example-row pt-4 pb-4 "
        >
          <b-row class="pt-2 pt-pb-2rem">
            <b-col
              sm="6"
              md="6"
              class="pd-img-two"
            >
               <lazy-image
                  :src='imgayumu'
                  :placeholder='loadingimage'
                  width="100%"
              />
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="px-4"
            >
              <div class="pb-4"><h3 style="font-weight: 400 !important;"> AYUMU</h3></div>
              <div>
                <small>
                  ヨガ、身体を鍛えながら自分自身と向き合う事が出来る。その魅力に魅了されヨガ教室に通い続けると、しなやかな身体になり、心がスッキリするだけでなく、どんどん自分に自信がついてくる。<br>ヨガの魅力を伝えていきたい、そんな思いでヨガインストラクターの資格を取得。
                  これから、素敵なヨガの魅力を皆さんに沢山伝えて良ければと思っています。<br><br>

                  全米ヨガアライアンス200ｈ修了<br>
                  ヨガニドラ―TT修了

                </small>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <!-- KEIKO section -->
      <div>
        <b-container class="bv-example-row pt-4 pb-4">
          <b-row class="pt-2 pt-pb-2rem">
            <!-- column image size mobile -->
            <b-col
              sm="6"
              md="6"
              class="d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-sm-none d-md-block pb-2"
            >
              <lazy-image
                  :src='imgkeiko'
                  :placeholder='loadingimage'
                  width="100%"
              />
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="px-4"
            >
              <div class="pb-4"><h3 style="font-weight: 400 !important;">KEIKO</h3></div>
              <div>
                <small>
                  幼少期クラシックバレエを習っており、音楽に合わせて身体を動かす事が好きでした。<br>
                  大人になり、通勤で不調を感じた事がきっかけでヨガに出会い、ヨガの知識を学びインストラクターになりました。<br>
                  ヨガの知識を活かし、改めて身体を動かす事で、心や身体の不調をなくしたいと思い、フローピラティスとポップピラティスのインストラクターになりました。<br>
                  音楽のエネルギーを感じながら流れるように動き、ご自身の身体を労わり、心も健やかに過ごしましょう。<br><br>

                  全米ヨガアライアンス200h修了<br>
                  マタニティヨガインストラクター<br>
                  フローピラティス/ポップピラティスインストラクター<br>
                  ボディメイクインストラクター<br>

                </small>
              </div>
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="d-none d-sm-block"
            >
               <lazy-image
                  :src='imgkeiko'
                  :placeholder='loadingimage'
                  width="100%"
              />
            </b-col>
          </b-row>
        </b-container>
      </div>
      <!-- KUMI section -->
      <div class="bg-white">
        <b-container
          class="bv-example-row pt-4 pb-4 bg-white"
        >
          <b-row class="pt-2 pt-pb-2rem">
            <b-col
              sm="6"
              md="6"
              class="pd-img-two"
            >
              <lazy-image
                  :src='imgkumi'
                  :placeholder='loadingimage'
                  width="100%"
              />
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="px-4"
            >
              <div class="pb-4"><h3 style="font-weight: 400 !important;">KUMI</h3></div>
              <div>
                <small>
                  体質の為にヨガを始めましたが、ニュートラルな身体作りの重要性を感じ、身体の構造や動かし方も学んでいます。<br>
                  自分の軸を感じ取れるようなレッスンにしていきたいと思っています。<br><br>

                  ナチュラルスタイルヨガTTC修了<br>
                  日本コアコンディショニング協会<br>
                  ベーシックインストラクター<br>
                  アロマテラピー検定1級
                </small>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <!-- AKI section -->
      <div>
        <b-container class="bv-example-row pt-4 pb-4">
          <b-row class="pt-2 pt-pb-2rem">
            <!-- column image size mobile -->
            <b-col
              sm="6"
              md="6"
              class="d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-sm-none d-md-block pb-2"
            >
              <lazy-image
                  :src='imgaki'
                  :placeholder='loadingimage'
                  width="100%"
              />
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="px-4"
            >
              <div class="pb-4"><h3 style="font-weight: 400 !important;">AKI</h3></div>
              <div>
                <small>
                  幼少期から神話や宇宙の話が好きで、学生時代には精神世界に興味が湧き瞑想生活に取り入れ始める。<br>
                  5年間の美容師時代に心身のバランスを崩したことをきっかけにヨガに出会う。<br>
                  特にアライメントを丁寧に意識してアーサナをとること。<br>
                  柔軟性に関係なく自分の心地良いところを探し始めること。<br>
                  どんどん呼吸が深まり心が落ち着き、ただただ安心感や幸せに包まれる。<br>
                  そんなクラスが好きでインドやバリでもヨガの学びを深めている。<br><br>

                  全米ヨガアライアンスRYT200<br>
                  マタニティヨガRPYT85
                </small>
              </div>
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="d-none d-sm-block"
            >
              <lazy-image
                  :src='imgaki'
                  :placeholder='loadingimage'
                  width="100%"
              />
            </b-col>
          </b-row>
        </b-container>
      </div>
      <!-- YOKO -->
      <div class="bg-white">
        <b-container
          class="bv-example-row pt-4 pb-4 bg-white"
        >
          <b-row class="pt-2 pt-pb-2rem">
            <b-col
              sm="6"
              md="6"
              class="pb-3"
            >
              <lazy-image
                  :src='imgyoko'
                  :placeholder='loadingimage'
                  width="100%"
              />
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="px-4"
            >
              <div class="pb-4"><h3 style="font-weight: 400 !important;">YOKO</h3></div>
              <div>
                <small>
                  10年程前、縁あってヨガと出会いました。<br>
                  ヨガを始めてから身体だけでなく、物の見方や考え方が柔軟に変化していくのを感じ、心と身体の繋がりを実感しています。ヨガを通してポジティブで元気になれるようサポートさせていただきます！<br><br>

                  ナチュラルスタイルヨーガ認定インストラクター<br>
                  全米ヨガアライアンス200h 修了<br>
                  マタニティヨーガ認定インストラクター<br>
                  リストラティブヨガ TTC 修了<br>
                </small>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>

    </div>

  </div>
</template>
<script>
import require from 'jquery'
  export default {
    data: () => ({
      imgyoko: require('@/assets/sp-img/インストラクターYOKO.jpg'),
      imgaki: require('@/assets/sp-img/aki.jpg'),
      imgkumi: require('@/assets/sp-img/kumi.jpg'),
      imgkeiko: require('@/assets/sp-img/keiko.jpg'),
      imgayumu: require('@/assets/sp-img/DSC00631.jpg'),
      imgchie: require('@/assets/sp-img/DSC00312.jpg'),

      loadingimage:require('@/assets/loading-image.gif'),
    }),
  }
</script>