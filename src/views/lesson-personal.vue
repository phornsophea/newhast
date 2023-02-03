<template>
  <div
    id="lesson-personal"
    class="lesson-personal"
  >
    <div class="lesson-personal-top">
      <div class="top-img">
        <b-container>
          <b-row>
            <b-col cols="12">
              <h3>Personal Lesson</h3>
              <b class="title">パーソナルレッスン</b>
           </b-col>
          </b-row>
        </b-container>
      </div>
    </div>

    <div
      class="lesson-personal-warp pt-5 pb-2 bg-white"
    >
      <b-container
        class="bv-example-row pt-4"
      >
        <div class="each_title pb-5 mb-4">
          <div
            class="title"
          >Personal Lesson</div>
          <p class="divide-title" />
          <small class="sub-title">マンツーマンレッスン</small>
        </div>
      </b-container>
    </div>

    <div class="lesson-personal-warp ">
      <!-- CHIE section -->
      <div>
        <b-container class="bv-example-row pt-2 pb-4">
          <b-row class="pt-2">
            <!-- column image size mobile -->
            <b-col
              sm="10"
              md="10"
              class="padding-x"
            >
              <div class="title pb-5">
                <h4 style="font-weight: 400!important;">あなたの目的に応じてプログラムをオーダーメイド</h4>
              </div>
              <div>
                <p class="text-color">
                  このコースは、完全予約制になっており、マンツーマンレッスンで周りの目を気にせずレッスンに集中できる環境をご用意しております。<br><br>
                  目標を明確に決めて頂き、ヨガだけではなく、食事のアドバイス、トレーニング、筋膜リリース、ストレッチを取り入れながら毎回お客様の目標に合わせたプログラムのご提案を行っていきます。
                </p>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <!-- KARUNA section -->
      <div>
        <b-container class="bv-example-row pt-4 pb-4 mb-5">
          <b-row class="pt-2 mb-2">
            <!-- column image size mobile -->
            <b-col
              sm="6"
              md="6"
              class="d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-sm-none d-md-block pb-3"
            >
              <lazy-image
                  :src='imgpersonalright'
                  :placeholder='loadingimage'
              />
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="padding-x"
            >
              <div class="pb-4">
                <h4 style="">KARUNAで女性らしいボディラインへ</h4>
              </div>
              <div>
                <small>
                  筋肉ムキムキになりそう「筋肉で体が太くなりそう」・・・<br>
                  そんな事はありません。<br><br>
                  「トレーニング」と聞いて、何が思い浮かぶでしょうか。<br><br>
                  正しいフォームや筋バランスを整えることにより、引き締まったボディラインを作り出す事が出来ます。<br><br>
                  KARUNAでは、トレーナーが体の状態や癖を確認をしながら、動きますので女性らしいボディラインへ導きます。<br>
                  「ピンと伸びた背筋」「まっすぐな引き締まった脚になりたい」どうぞアナタの「理想の体」への想像を膨らましてください。

                </small>
              </div>
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="d-none d-sm-block text-center"
            >
                <lazy-image
                  :src='imgpersonalright'
                  :placeholder='loadingimage'
                  style="padding: 0% 10% 5% 10% !important;"
              />
            </b-col>
          </b-row>
        </b-container>
      </div>
      <!-- KUMI section -->
      <div style="background:#EAEFED">
        <b-container
          class="bv-example-row pt-3"
        >
          <b-row class=" pt-5 pb-5">
            <b-col
              sm="5"
              md="5"
              class="pb-4 text-center"
            >
                <lazy-image
                  :src='imgpersonalleft'
                  :placeholder='loadingimage'
                  style="padding: 0% 10% 0% 10% !important;"
              />
            </b-col>
            <b-col
              sm="7"
              md="7"
              class=""
            >
              <div class="pb-4 pt-4 text-center transform-bg">
                <p class="transfrom-text">パーソナルレッスンはこんな方にオススメです</p>
              </div>
              <div>
                <small>
                  ・今まで何となくスポーツクラブに通っていたが、効果があまり感じられなかった方<br><br>

                  ・ヨガスタジオに通っていたが、ポーズがあっているか不安だった方<br><br>

                  ・短期間で結果を出したい方<br><br>

                  ・美脚・美尻になりたい方<br><br>

                  ・女性らしいしなやかな身体を手に入れたい方<br><br>

                  ・自分に自信をつけたい方
                </small>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>

    </div>
    <!-- Lesson Menu -->
    <div class="lesson-personal-menu pt-5 pb-5 bg-white">
      <b-container
        class="bv-example-row pt-4"
      >
        <div class="each_title pb-5 mb-4">
          <div
            class="title"
          >Lesson Menu</div>
          <p class="divide-title" />
          <small class="sub-title">あなただけのオーダーメイドメニュー</small>
        </div>
      </b-container>
      <div>
        <b-container class="bv-example-row pt-4 bg-white">
          <b-row class="pt-2 pb-5">
            <b-col
              sm="6"
              md="6"
              class="pb-3"
            >
                <lazy-image
                  :src='imgmenuleft'
                  :placeholder='loadingimage'
                  width="100%"
              />
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="padding-m"
            >
              <div class="pb-2"><h4 style="">マスターストレッチ</h4></div>
              <div>
                <small>
                  イタリアのバレエダンサーピノ・カルボーネがピラティスやヨガ、バレエ、太極拳などの様々なボディワークを融合させて開発した新感覚のボディワークです。<br><br>

                  船底のようにラウンドした専用シューズを使って、足首から全身をバランスよくストレッチをし、柔軟性とバランスを同時に得ることができます。マスターストレッチはより機能的で美しいラインを作るトレーニングとして、現在ＴＶや雑誌等のメディアでも大変注目されています。筋肉をただ縮めながらトレーニングするのではなく、伸ばしながらコアトレーニングをしていくマスターストレッチは、今までのトレーニングとは違う世界を感じることができるでしょう。
                </small>
              </div>
            </b-col>
          </b-row>
        </b-container>
  </div>
    <!-- マスターストレッチはこんな方にオススメです -->
  <div style="background:#EAEFED">
    <b-container
        class="bv-example-row pt-3 "
    >
      <b-row
            class="pt-5 pb-4 "
          >
            <!-- column image size mobile -->
            <b-col
              sm="6"
              md="6"
              class="mb-3 text-center d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-sm-none d-md-block"
            >
                <lazy-image
                  :src='imgmenuright'
                  :placeholder='loadingimage'
                  style="padding: 0% 10% 5% 10% !important;"
              />
            </b-col>
            <b-col
              sm="7"
              md="7"
              class="px-2 padding-m"
            >
              <div class="pb-4 pt-4 text-center transform-bg">
                <p class="transfrom-text">マスターストレッチはこんな方にオススメです</p>
              </div>
              <div class="px-5">
                <small>
                  ・柔軟性を高めたい<br><br>

                  ・美しいラインの脚を作りたい<br><br>

                  ・ヒップアップしたい<br><br>

                  ・Ｏ脚やＸ脚を解消したい<br><br>

                  ・脚のむくみを解消したい<br><br>

                  ・ランニングやダンス、ゴルフのパフォーマンスを向上させたい等
                </small>
              </div>
            </b-col>
            <b-col
              sm="5"
              md="5"
              class="d-none d-sm-block text-center mb-3"
            >
               <lazy-image
                  :src='imgmenuright'
                  :placeholder='loadingimage'
                  style="padding: 0% 10% 5% 10% !important;"
              />
            </b-col>
          </b-row>
        </b-container>
    </div>
    <!-- 心身のバランスを整える -->
    <div class=" bg-white pt-5">
      <b-container
        class="bv-example-row"
      >
          <b-row class="pt-2 pb-5 mb-4 mt-3">
            <!-- column image size mobile -->
            <b-col
              sm="6"
              md="6"
              class="d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-sm-none d-md-block pb-3"
            >
               <lazy-image
                  :src='imgmenuquiet'
                  :placeholder='loadingimage'
                  width="100%"
              />
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="padding-x"
            >
              <div class="pb-4 pt-4">
                <h4 style="">心身のバランスを整える</h4>
              </div>
              <div>
                <small>
                  忙しい日々を過ごしているといつの間にか自分自身へのケアが二の次になってしまう事はありませんか。<br>
                  KARUNAではリストラティブヨガの要素を取り入れながら、極上リラクゼーションをご用意しております。
                </small>
              </div>
              <div class="text-center pb-4">
                <img
                  class=""
                  src="../assets/sp-img/240_F_227951347_xuI2kMISvsa3sdvJTimNwCVvLoYHYbgL.png"
                  width="100%"
                  alt=""
                >
                <small>
                  お悩みではありませんか？
                </small>
              </div>
              <div>
                <small>
                  肩コリ・腰痛・冷え性・ストレス・寝つきが悪い…<br>
                  etcカウンセリングをしながら緩和に向けてサポート致します。
                </small>
              </div>
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="d-none d-sm-block text-center"
            >
               <lazy-image
                  :src='imgmenuquiet'
                  :placeholder='loadingimage'
                  width="100%"
              />
            </b-col>
          </b-row>

          <b-row class="pt-4 pb-5">
            <b-col
              sm="6"
              md="6"
              class="pb-3"
            >
               <lazy-image
                  :src='imgmenurfood'
                  :placeholder='loadingimage'
                  width="100%"
              />
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="padding-m"
            >
              <div class="pb-2">
                <h4 style="">食事のアドバイス</h4>
              </div>
              <div>
                <small>身体を変える為には、トレーニングと食事はセットと考えなければ、結果はついてきません。<br>
                  そこで、KARUNAでは、お客様の目的やライフスタイルに合わせた食生活の改善のアドバイスを行っております。<br>
                  食事のメニュー表や、簡単なレシピなどもご要望に応じてご提案致します。
                </small>
              </div>
            </b-col>
          </b-row>
        </b-container>
    </div>
  </div>
    <!-- Lesson clase -->
    <div class="lesson-personal-class pt-3 pb-5 bg-white">
      <b-container
        class="bv-example-row"
      >
        <div class="each_title pb-5 mb-4">
          <div
            class="title"
          >Cases</div>
          <p class="divide-title" />
          <small class="sub-title">パーソナルトレーニングによる効果を実感</small>
        </div>
      </b-container>

      <div clase="lesson-personal-class">
        <b-container class="bv-example-row pt-4 pb-5 bg-white">
          <b-row>
            <b-col
              sm="6"
              md="5"
              class="pb-3"
            >
              <div>
                <h4 style="">Case1</h4>
                <p class="divide-left" />
              </div>
            </b-col>
          </b-row>
          <b-row class="pt-2 pb-5">
            <b-col
              sm="6"
              md="6"
              class="pb-3"
            >
              <div style="padding-bottom:20px">
                <small>回数：月4回</small>
              </div>
              <div style="text-align:center;">
                <img
                  clase=""
                  src="../assets/sp-img/class-personal.png"
                  width="40%"
                  alt=""
                >
              </div>
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="padding-m"
            >
              <div class="pb-2">
                <h4 style="">Voice</h4>
                <p class="divide-right" />
              </div>
              <div>
                <small>
                  まず、パーソナルレッスンを受けることができて本当によかったです。<br>
                  普段デスクワークの生活で、運動などしたことのない私が、食事制限と運動を始めるということで、不安でいっぱいでしたが、ヨガもトレーニングもキツくなってきたタイミングでリラックス出来るポーズがあったり、時間があったりと無理なく行うことができました。 <br>
                  マッサージをしていただいたりもするので、レッスンに行くのがキツいというよりも楽しい時間を過ごすことができ、自分の目指していた体型にもなることができて、本当に良い時間を過ごすことができました。今後もこの体型を維持できるようにレッスンを続けていきたいと思います。
                </small>
              </div>
            </b-col>
          </b-row>

          <!-- b-row class="pt-1">
            <b-col
              cols="12"
              class="text-center"
            >
              <div>
                <b-card-group>
                  <b-card>
                    <b-card-text class="text-color">
                      体重：○○kg→○○kg
                    </b-card-text>
                    <template #footer>
                      <small>マイナス○○</small>
                      <p class="line-under-text" />
                    </template>
                  </b-card>

                  <b-card>
                    <b-card-text class="text-color">
                      ウエスト：○○%→○○％
                    </b-card-text>
                    <template #footer>
                      <small>マイナス○○</small>
                      <p class="line-under-text" />
                    </template>
                  </b-card>

                  <b-card>
                    <b-card-text class="text-color">
                      ヒップ：○○cm→○○cm
                    </b-card-text>
                    <template #footer>
                      <small>マイナス○○</small>
                      <p class="line-under-text" />
                    </template>
                  </b-card>
                  <b-card>
                    <b-card-text class="text-color">
                      大腿：○○cm→○○cm
                    </b-card-text>
                    <template #footer>
                      <small>マイナス○○</small>
                      <p class="line-under-text" />
                    </template>
                  </b-card>
                </b-card-group>
              </div>

            </b-col>
          </b-row -->
        </b-container>
      </div>
    </div>
  </div>
</template>
<script>
import require from 'jquery'
  export default {
    data: () => ({
      imgpersonalright: require('@/assets/sp-img/KARUNA.png'),
      imgpersonalleft: require('@/assets/sp-img/personal-img-right.png'),
      imgmenuleft: require('@/assets/sp-img/menu-img-left.png'),
      imgmenuright: require('@/assets/sp-img/personal-after-before.png'),
      imgmenuquiet: require('@/assets/sp-img/240_F_328222411_lCeEca3Xc9HxddKLCJzlqRGsOSz25swg.png'),
      imgmenurfood: require('@/assets/sp-img/1000_F_312510546_dUKD3nWN816TDNppARC9sFr7Q0Z5pyrI.png'),
      loadingimage:require('@/assets/loading-image.gif'),
    }),
  }
</script>
