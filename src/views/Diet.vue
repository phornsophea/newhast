
<template>
  <div
    id="lesson-diet"
    class="lesson-diet"
  >
    <div class="lesson-diet-top">
      <div class="top-img">
        <b-container>
          <b-row>
           <b-col cols="12">
              <h3>Diet Program</h3>
              <b class="title">ダイエットプログラム</b>
           </b-col>
          </b-row>
        </b-container>
      </div>
    </div>

    <div class="lesson-diet-warp pt-5 pb-2">
      <b-container class="bv-example-row pt-4">
        <div class="each_title pb-5 mb-4">
          <div
            class="title"
          >Diet Program</div>
          <p class="divide-title" />
          <small class="sub-title">3ヶ月短期集中プログラム</small>
        </div>
      </b-container>
    </div>


    <div class="lesson-diet-warp ">
      <div>
        <b-container
          class="bv-example-row pt-4 pb-4 bg-white"
        >
          <b-row class="pt-2">
            <b-col
              sm="6"
              md="6"
            >
               <lazy-image
                  :src='imgdiet'
                  :placeholder='loadingimage'
              />
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="text-right"
            >
              <div>
                <small>
                  ただ痩せるだけではなく、腸内環境を整え代謝を上げ、適切な筋力作りを提案致します。<br>
                  あなたの目的やご要望に応じて、食事指導やトレーニングのプログラムを組み立てます。
                </small>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div>
        <b-container class="bv-example-row pt-4 pb-4">
          <b-row class="pt-2">
            <!-- column image size mobile -->
            <b-col
              sm="6"
              md="6"
              class="d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-sm-none d-md-block pb-3"
            >
               <lazy-image
                  :src='imgwants'
                  :placeholder='loadingimage'
              />
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="text-left"
            >
              <div>
                <h4>
                  目的を達成するための<br>
                  あなただけのボディメイク
                </h4><br><br>
              </div>
              <div>
                <ul>
                  <li><p class="text-color">▷ 全 18回 60分パーソナルトレーニング</p><br></li>
                  <li><p class="text-color">▷ ヨガレッスン通い放題</p><br></li>
                  <li><p class="text-color">▷ 食事指導</p><br></li>
                  <li><p class="text-color">▷ 筋膜ローラープレゼント</p><br></li>
                </ul>
              </div>
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="d-none d-sm-block  pt-5"
            >
               <lazy-image
                  :src='imgwants'
                  :placeholder='loadingimage'
                  style="padding: 0% 25% 5% 5% !important;"
              />
            </b-col>
          </b-row>
        </b-container>
      </div>
      <!-- カルナが大切にする4つの軸 section -->
      <div class="pt-5">
        <div class="mt-5 mb-5 text-center">
          <h4>カルナが大切にする4つの軸</h4>
        </div>
        <div class="lesson-bg  pt-4 pb-4 mt-5">
          <b-container>
            <b-row class="pt-2 pd-top-2rem">
              <b-col
                md="6"
                class="lesson-wrap-content pd-left"
              >
                <div class="lesson-wrap-text">
                  <div class="text-center">
                    <h4 class="number">1</h4>
                    <p class="title-divide" />
                    <p class="text-color">しなやかな柔軟性</p><br>
                  </div>
                  <small>
                    柔軟性が高まるとケガや筋肉痛を予防するだけでなく、心と身体をリラックスさせ、
                    緊張を和らげるだけではなく、心身の老化予防にも効果的と言われています。
                  </small>
                </div>
              </b-col>
              <b-col
                md="6"
                class="lesson-wrap-content pd-right"
              >
                <div class="lesson-wrap-text">
                  <div class="text-center">
                    <h4 class="number">2</h4>
                    <p class="title-divide" />
                    <p class="text-color">適切な筋力</p><br>
                  </div>
                  <small>
                    健康維持には欠かせない筋肉。<br>
                    筋肉量が多いほど基礎代謝は上がり、余分な糖や脂質を燃焼してくれます。<br>
                    血糖値の上昇を抑えてくれるのでメタボリックシンドロームや肥満の予防にもつながります。<br>
                  </small>
                </div>
              </b-col>
              <b-col
                md="6"
                class="lesson-wrap-content pd-left"
              >
                <div class="lesson-wrap-text">
                  <div class="text-center">
                    <h4 class="number">3</h4>
                    <p class="title-divide" />
                    <p class="text-color">スリムなボディーライン</p><br>
                  </div>
                  <small>
                    スタイルが綺麗な人に誰もが憧れますよね。<br>
                    それは美しく見えるだけではなく、健康的で日頃から努力をしていて内側から自身が出てくるから背筋のスっと伸びてくる。<br>
                    背筋が伸びると前向きな思考も働くので心も豊にさせてくれます。

                  </small>
                </div>
              </b-col>
              <b-col
                md="6"
                class="lesson-wrap-content pd-right"
              >
                <div class="lesson-wrap-text">
                  <div class="text-center">
                    <h4 class="number">4</h4>
                    <p class="title-divide" />
                    <p class="text-color">食事と腸内環境の改善</p><br>
                  </div>
                  <small>
                    腸内環境を整える事で、便秘になりにくく、免疫力が上がり、太りにくい身体にさせてくれます。血行も良くなるので疲れにくい身体になり、全身に嬉しい健康的な身体に整えてくれます。

                  </small>
                </div>
              </b-col>

            </b-row>
          </b-container>
        </div>
      </div>


      <div>
        <div class="lesson-cases-warp pt-5 pb-2">
          <b-container class="bv-example-row pt-4">
            <div class="each_title pb-5 mb-4">
              <div
                class="title"
              >Cases</div>
              <p class="divide-title" />
              <small class="sub-title">ダイエットプログラムによる効果を実感</small>
            </div>

            <b-row class="lesson-wrap-text">
              <b-col md="7">
                <div class="titles">
                  <p>お客様のお悩み : 全身痩せたい・太腿の引き締め</p>
                  <p class="divide" />
                </div>
              </b-col>
            </b-row>
            <!-- === Before  ====-->
            <b-row class="lesson-wrap-img">
              <b-col md="2">
                <div class="titles">
                  <p class="titles-center">before</p>
                </div>
              </b-col>
              <b-col
                sm="6"
                md="3"
              >
                <div class="before-img">
                  <img
                    class=""
                    src="../assets/sp-img/before横.png"
                    width="100%"
                    alt=""
                  >
                </div>
              </b-col>
              <b-col
                sm="6"
                md="3"
              >
                <div class="before-img">
                  <img
                    class=""
                    src="../assets/sp-img/before前.png"
                    width="100%"
                    alt=""
                  >
                </div>
              </b-col>
              <b-col
                sm="6"
                md="3"
              >
                <div class="before-img">
                  <img
                    class=""
                    src="../assets/sp-img/3ヶ月短期Before（後ろ）.png"
                    width="100%"
                    alt=""
                  >
                </div>
              </b-col>
              <b-col
                md="1"
                class="d-none d-sm-block"
              >
                <div class="before-img" />
              </b-col>
            </b-row>
            <!-- === after  ====-->
            <b-row class="lesson-wrap-img">
              <b-col md="2">
                <div class="titles">
                  <p class="titles-center">after</p>
                </div>
              </b-col>
              <b-col
                sm="6"
                md="3"
              >
                <div class="before-img">
                  <img
                    class=""
                    src="../assets/sp-img/after横.png"
                    width="100%"
                    alt=""
                  >
                </div>
              </b-col>
              <b-col
                sm="6"
                md="3"
              >
                <div class="before-img">
                  <img
                    class=""
                    src="../assets/sp-img/after前.png"
                    width="100%"
                    alt=""
                  >
                </div>
              </b-col>
              <b-col
                sm="6"
                md="3"
              >
                <div class="before-img">
                  <img
                    class=""
                    src="../assets/sp-img/after後ろ.png"
                    width="100%"
                    alt=""
                  >
                </div>
              </b-col>
              <b-col
                md="1"
                class="d-none d-sm-block"
              />
            </b-row>

            <b-row class="pt-4 text-center">
              <b-col
                md="2"
                class="d-none d-sm-block"
              />
              <b-col md="9">
                <div>
                  <b-card-group>
                    <b-card>
                      <b-card-text class="text-color">
                        体重：62.5kg→55.3kg
                      </b-card-text>
                      <template #footer>
                        <small>マイナス７.２kg</small>
                        <p class="line-under-text" />
                      </template>
                    </b-card>

                    <b-card>
                      <b-card-text class="text-color">
                        体脂肪：33.5%→26.5％
                      </b-card-text>
                      <template #footer>
                        <small>マイナス７％</small>
                        <p class="line-under-text" />
                      </template>
                    </b-card>

                    <b-card>
                      <b-card-text class="text-color">
                        大腿：53cm→47.5cm
                      </b-card-text>
                      <template #footer>
                        <small>マイナス５.５cm</small>
                        <p class="line-under-text" />
                      </template>
                    </b-card>
                  </b-card-group>
                </div>
              </b-col>
              <b-col
                md="1"
                class="d-none d-sm-block"
              />
            </b-row>
          </b-container>
        </div>
      </div>
    </div>

    <!--=================お客様のお悩み : 太腿の引き締め・お尻===========-->
    <div>
      <div class="lesson-cases-warp pt-5 pb-5">
        <b-container class="bv-example-row pt-4 mt-5 pb-5">
          <b-row class="lesson-wrap-text">
            <b-col md="7">
              <div class="titles">
                <p>お客様のお悩み : 太腿の引き締め・お尻</p>
                <p class="divide" />
              </div>
            </b-col>
          </b-row>
          <!-- === Before  ====-->
          <b-row class="lesson-wrap-img">
            <b-col md="2">
              <div class="titles">
                <p class="titles-center">before</p>
              </div>
            </b-col>
            <b-col
              sm="6"
              md="3"
            >
              <div class="before-img">
                <img
                  class=""
                  src="../assets/sp-img/after2.png"
                  width="100%"
                  alt=""
                >
              </div>
            </b-col>
            <b-col
              sm="6"
              md="3"
            >
              <div class="before-img">
                <img
                  class=""
                  src="../assets/sp-img/after1.png"
                  width="100%"
                  alt=""
                >
              </div>
            </b-col>
            <b-col
              sm="6"
              md="3"
            >
              <div class="before-img">
                <img
                  class=""
                  src="../assets/sp-img/after3.png"
                  width="100%"
                  alt=""
                >
              </div>
            </b-col>
            <b-col
              md="1"
              class="d-none d-sm-block"
            >
              <div class="before-img" />
            </b-col>
          </b-row>
          <!-- === after  ====-->
          <b-row class="lesson-wrap-img">
            <b-col md="2">
              <div class="titles">
                <p class="titles-center">after</p>
              </div>
            </b-col>
            <b-col
              sm="6"
              md="3"
            >
              <div class="before-img">
                <img
                  class=""
                  src="../assets/sp-img/before2.png"
                  width="100%"
                  alt=""
                >
              </div>
            </b-col>
            <b-col
              sm="6"
              md="3"
            >
              <div class="before-img">
                <img
                  class=""
                  src="../assets/sp-img/before1.png"
                  width="100%"
                  alt=""
                >
              </div>
            </b-col>
            <b-col
              sm="6"
              md="3"
            >
              <div class="before-img">
                <img
                  class=""
                  src="../assets/sp-img/before3.png"
                  width="100%"
                  alt=""
                >
              </div>
            </b-col>
            <b-col
              md="1"
              class="d-none d-sm-block"
            />
          </b-row>

          <b-row class="pt-4 text-center">
            <b-col
              md="2"
              class="d-none d-sm-block"
            />
            <b-col md="9">
              <div>
                <b-card-group>
                  <b-card>
                    <b-card-text class="text-color">
                      体重：61.4kg→59.7kg
                    </b-card-text>
                    <template #footer>
                      <small>マイナス1.7kg</small>
                      <p class="line-under-text" />
                    </template>
                  </b-card>

                  <b-card>
                    <b-card-text class="text-color">
                      ヒップ：99.0cm→97.0cm
                    </b-card-text>
                    <template #footer>
                      <small>マイナス2cm</small>
                      <p class="line-under-text" />
                    </template>
                  </b-card>

                  <b-card>
                    <b-card-text class="text-color">
                      大腿：58.0cm→52.5cm
                    </b-card-text>
                    <template #footer>
                      <small>マイナス５.５cm</small>
                      <p class="line-under-text" />
                    </template>
                  </b-card>
                </b-card-group>
              </div>
            </b-col>
            <b-col
              md="1"
              class="d-none d-sm-block"
            />
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
      imgdiet: require('@/assets/sp-img/Diet-Program-left.png'),
      imgwants: require('@/assets/sp-img/Diet-Program-right.png'),
      loadingimage:require('@/assets/loading-image.gif'),
    }),
  }
</script>
