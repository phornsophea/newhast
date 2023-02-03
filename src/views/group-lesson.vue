<template>
  <div
    id="group-lesson"
    class="group-lesson"
  >
    <div class="group-lesson-top">
      <div class="top-img">
        <b-container>
          <b-row>
            <b-col cols="12">
              <h3 style="color:#000">Group Lesson</h3>
              <b class="title">グループレッスン</b>
           </b-col>
          </b-row>
        </b-container>
      </div>
    </div>

    <div
      class="group-lesson-warp pt-5 pb-2 bg-white"
    >
      <b-container
        class="bv-example-row pt-4"
      >
        <div class="each_title pb-5 mb-4">
          <div
            class="title"
          >Group Lesson</div>
          <p class="divide-title" />
          <small class="sub-title">少人数制グループレッスン</small>
        </div>
      </b-container>
    </div>

    <div class="group-lesson-warp ">
      <!-- CHIE section -->
      <b-container class="bv-example-row pt-2 pb-4">
        <b-row class="pt-2">
          <!-- column image size mobile -->
          <b-col
            sm="10"
            md="10"
            class="padding-x"
          >
            <div>
              <p class="text-color">
                最大6名で行うヨガレッスンです。<br>
                限られた時間の中で最大限の効果を得ていただきたいとの想いでお客様の身体の癖や弱い筋肉を見極め、インストラクターが細やかなアドバイスやアプローチをさせていただきます。<br>
                何より生徒様に安全に取り組んでいただくため、ひとりの講師の目が行き届く範囲を考慮し、レッスンは少人数会員制となっております。
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <!-- KARUNA section -->
      <div>
        <b-container class="bv-example-row pt-4 pb-4 mb-5">
          <b-row class="pt-2 mb-2">
            <!-- column image size mobile -->
            <b-col
              sm="6"
              md="6"
              class="text-center d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-sm-none d-md-block pb-3"
            >
              <lazy-image
                  :src='imggroupleft'
                  :placeholder='loadingimage'
                  style="padding: 0% 10% 5% 10% !important;"
              />
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="px-4 pt-5 mt-4 wrap-padding"
            >
              <div class="pb-4">
                <h4 style="">体が硬いとヨガは難しい？<br><br>
                  いえいえ、そんなことはありません。
                </h4>
              </div>
              <div>
                <small>
                  無理をせず、出来る範囲で体を動かしながら少しずつ体をほぐしていきます。<br><br>

                  むしろ体が硬い人ほど、ヨガを行うことで自分と向き合い、自身の体調を知る良いきっかけになります。<br><br>

                  ポーズとともにゆっくり呼吸をしてリラックスすれば、心も体もきっと軽くなりますよ。

                </small>
              </div>
            </b-col>
            <b-col
              sm="6"
              md="6"
              class="d-none d-sm-block text-center"
            >
              <lazy-image
                  :src='imggroupleft'
                  :placeholder='loadingimage'
                  style="padding: 0% 10% 5% 10% !important;"
              />
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="bv-example-row pt-4 pb-4">
        <b-container class="bv-example-row pt-4 pb-5 bg-white">
          <b-row class="pt-2 pb-5">
            <b-col
              sm="6"
              md="6"
              class="pb-3 text-center"
            >
               <lazy-image
                  :src='imggroupright'
                  :placeholder='loadingimage'
                  style="padding: 0% 10% 5% 10% !important;"
              />

            </b-col>
            <b-col
              sm="6"
              md="6"
              class="px-4 pt-5 mt-5"
            >
              <div class="pb-2">
                <h4 style="">アライメントにこだわるヨガ</h4>
              </div>
              <div>
                <small>
                  KARUNAのグループレッスンはヨガのアサナ(ポーズ)のアライメント(正しい形)を重視したヨガを実施しております。<br>
                  料理で例えるなら「アライメント」は「レシピ」の様なものです。<br>
                  材料が揃っていても、作り方を知らないと、思い通りの味にならなかったり、食材の良さを引き立てる事が出来ませんよね。<br>
                  ヨガも同じで、アサナのアライメントを知る事により、歪みや不調の改善へアサナの効果を最大限に引き出すことが来ます。<br>
                  さらに怪我をすることなく安全にヨガを行う事が出来ます。<br><br>

                  少人数制だからこそKARUNAはお一人ずつの身体に丁寧に向き合います
                </small>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <!-- Group Lesson schedule -->
    <div class="group-lesson-schedul">
      <!-- b-container
        class="bv-example-row"
      >
        <div class="text-center d-flex justify-content-center pb-2">
          <h2
            class="title"
          >
            GROUP LESSON SCHEDULE
          </h2>
          <p class="sub-title">土日祝祭日は、朝トレと夜のグル-プレッスンはお休みです。</p>
        </div>
      </b-container -->

      <b-container class="bv-example-row pb-5 bg-white">
        <b-row>
          <b-col
            cols="12"
          >
             <lazy-image
                  :src='imgscedule'
                  :placeholder='loadingimage'
                  width="100%"
              />
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- Lesson Menu -->
    <div class="group-lesson-menu pt-2 pb-5 bg-white">
      <b-container
        class="bv-example-row"
      >
        <b-row>
          <b-col cols="12">
            <div class="each_title pb-5 mb-4">
              <div
                class="title"
              >Lesson Menu</div>
              <p class="divide-title" />
              <small class="sub-title">レッスンメニュー一覧</small>
            </div>
          </b-col>
        </b-row>

        <!-- Lesson menu row 2 -->
        <b-row>
          <b-col
            md="6"
            class="group-lesson-content"
          >
            <b-row class="box-border">
              <b-col
                cols="5"
                sm="5"
                class="text-center"
              >
                <img
                  class=""
                  src="../assets/group-lesson/03骨盤調整ヨガ.jpg"
                  width="100%"
                  alt=""
                >
              </b-col>
              <b-col
                cols="7"
                sm="7"
              >
                <div>
                  <p>骨盤調整ヨガ</p>
                  <p class="divide" />
                  <p class="text-bottom">【月 / 19:00-20:00】</p>
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-stopwatch.png"
                    width="21px"
                  >&nbsp;
                  <small>60分</small>&nbsp;&nbsp;&nbsp;
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-fire-alt.png"
                    width="19px"
                  >&nbsp;
                  <small class="text">運動量1</small><br>
                  <p class="text-top">
                    やせられない原因である、ゆがんだ骨盤を根本的に改善していきます。骨盤・肩甲骨の周りをたっぷりと動かしながら、骨盤を支えるインナーマッスルをバランスよく鍛え、やせやすい体質へと導きます。
                  </p>
                </div>
              </b-col>

            </b-row>
          </b-col>
          <b-col
            md="6"
            class="group-lesson-content"
          >
            <b-row class="box-border">
              <b-col
                cols="5"
                sm="5"
                class="text-center"
              >
                <img
                  class=""
                  src="../assets/group-lesson/04ポップピラティス.jpg"
                  width="100%"
                  alt=""
                >
              </b-col>
              <b-col
                cols="7"
                sm="7"
              >
                <div>
                  <p>ポップピラティス</p>
                  <p class="divide" />
                  <p class="text-bottom">【火 / 10:00-11:00】</p>
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-stopwatch.png"
                    width="21px"
                  >&nbsp;
                  <small>60分</small>&nbsp;&nbsp;&nbsp;
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-fire-alt.png"
                    width="19px"
                  >&nbsp;
                  <small class="text">運動量3</small><br>
                  <p class="text-top">
                    ポップピラティスとは、アメリカ、LA発信の世界中で人気を高めているレッスンです。ピラティスの動作をアップテンポな洋楽に合わせて動きます。しなやかで強い身体を目指します。有酸素運動もあるので、汗をかきたい方におすすめです。
                  </p>
                </div>
              </b-col>

            </b-row>
          </b-col>
        </b-row>
        <!-- Lesson menu row 3 -->
        <b-row>
          <b-col
            md="6"
            class="group-lesson-content"
          >
            <b-row class="box-border">
              <b-col
                cols="5"
                sm="5"
                class="text-center"
              >
                <img
                  class=""
                  src="../assets/group-lesson/05フローヨガ.jpg"
                  width="100%"
                  alt=""
                >
              </b-col>
              <b-col
                cols="7"
                sm="7"
              >
                <div>
                  <p>フローヨガ</p>
                  <p class="divide" />
                  <p class="text-bottom">【火 / 13:00-14:00】</p>
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-stopwatch.png"
                    width="21px"
                  >&nbsp;
                  <small>60分</small>&nbsp;&nbsp;&nbsp;
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-fire-alt.png"
                    width="19px"
                  >&nbsp;
                  <small class="text">運動量3</small><br>
                  <p class="text-top">
                    呼吸に合わせて、身体を動かすヨガです。呼吸と連動させて、ひとつひとつのポーズを丁寧に行います。いつもより呼吸に意識を向けることで、集中力がアップして頭もスッキリします。
                  </p>
                </div>
              </b-col>

            </b-row>
          </b-col>
          <b-col
            md="6"
            class="group-lesson-content"
          >
            <b-row class="box-border">
              <b-col
                cols="5"
                sm="5"
                class="text-center"
              >
                <img
                  class=""
                  src="../assets/group-lesson/06ボディメイクヨガ.jpg"
                  width="100%"
                  alt=""
                >
              </b-col>
              <b-col
                cols="7"
                sm="7"
              >
                <div>
                  <p>ボディメイクヨガ</p>
                  <p class="divide" />
                  <p class="text-bottom">【火 / 19:00-20:00】</p>
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-stopwatch.png"
                    width="21px"
                  >&nbsp;
                  <small>60分</small>&nbsp;&nbsp;&nbsp;
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-fire-alt.png"
                    width="19px"
                  >&nbsp;
                  <small class="text">運動量2</small><br>
                  <p class="text-top">
                    呼吸と動きを連動させ、ゆっくり丁寧に動き、背骨から全身を整えていきます。身体を引き締め、快適な日常生活につなげていきましょう。
                  </p>
                </div>
              </b-col>

            </b-row>
          </b-col>
        </b-row>
        <!-- Lesson menu row 4 -->
        <b-row>
          <b-col
            md="6"
            class="group-lesson-content"
          >
            <b-row class="box-border">
              <b-col
                cols="5"
                sm="5"
                class="text-center"
              >
                <img
                  class=""
                  src="../assets/group-lesson/07リラックスヨガ.jpg"
                  width="100%"
                  alt=""
                >
              </b-col>
              <b-col
                cols="7"
                sm="7"
              >
                <div>
                  <p>リラックスヨガ</p>
                  <p class="divide" />
                  <p class="text-bottom">【火 / 20:30-21:30】</p>
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-stopwatch.png"
                    width="21px"
                  >&nbsp;
                  <small>60分</small>&nbsp;&nbsp;&nbsp;
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-fire-alt.png"
                    width="19px"
                  >&nbsp;
                  <small class="text">運動量1</small><br>
                  <p class="text-top">
                    副交感神経を高めながら心地良い呼吸と共にストレッチを中心に行います。<br>
                    心身共にリラックスしたい！という方にお勧めです。
                  </p>
                </div>
              </b-col>

            </b-row>
          </b-col>
          <b-col
            md="6"
            class="group-lesson-content"
          >
            <b-row class="box-border">
              <b-col
                cols="5"
                sm="5"
                class="text-center"
              >
                <img
                  class=""
                  src="../assets/group-lesson/08デトックスヨガ.jpg"
                  width="100%"
                  alt=""
                >
              </b-col>
              <b-col
                cols="7"
                sm="7"
              >
                <div>
                  <p>デトックスヨガ</p>
                  <p class="divide" />
                  <p class="text-bottom">【水・金 / 10:00-11:00】</p>
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-stopwatch.png"
                    width="21px"
                  >&nbsp;
                  <small>60分</small>&nbsp;&nbsp;&nbsp;
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-fire-alt.png"
                    width="19px"
                  >&nbsp;
                  <small class="text">運動量2</small><br>
                  <p class="text-top">
                    お腹や腰をねじったり股関節を伸ばしたりしながら全身の巡りを良くし、滞りを流していくヨガです。自分の内側に意識を向け、老廃物を身体の外に流すイメージで行うと、よりデトックス効果がアップします。
                  </p>
                </div>
              </b-col>

            </b-row>
          </b-col>
        </b-row>
        <!-- Lesson menu row 5 -->
        <b-row>
          <b-col
            md="6"
            class="group-lesson-content"
          >
            <b-row class="box-border">
              <b-col
                cols="5"
                sm="5"
                class="text-center"
              >
                <img
                  class=""
                  src="../assets/group-lesson/11ベーシックヨガ.jpg"
                  width="100%"
                  alt=""
                >
              </b-col>
              <b-col
                cols="7"
                sm="7"
              >
                <div>
                  <p>ベーシックヨガ</p>
                  <p class="divide" />
                  <p class="text-bottom">【木 / 13:00-14:00金 / 10:00-11:00】</p>
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-stopwatch.png"
                    width="21px"
                  >&nbsp;
                  <small>60分</small>&nbsp;&nbsp;&nbsp;
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-fire-alt.png"
                    width="19px"
                  >&nbsp;
                  <small class="text">運動量3</small><br>
                  <p class="text-top">
                    ひとつひとつのポーズを丁寧に行うベーシックヨガです。ヨガのポーズをより効果的に行うことができます。ご自身の身体と向き合う時間にもおすすめです。
                  </p>
                </div>
              </b-col>

            </b-row>
          </b-col>
          <b-col
            md="6"
            class="group-lesson-content"
          >
            <b-row class="box-border">
              <b-col
                cols="5"
                sm="5"
                class="text-center"
              >
                <img
                  class=""
                  src="../assets/group-lesson/12筋膜リリースクラス.jpg"
                  width="100%"
                  alt=""
                >
              </b-col>
              <b-col
                cols="7"
                sm="7"
              >
                <div>
                  <p>筋膜リリースクラス</p>
                  <p class="divide" />
                  <p class="text-bottom">【金 / 13:00-14:00】</p>
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-stopwatch.png"
                    width="21px"
                  >&nbsp;
                  <small>60分</small>&nbsp;&nbsp;&nbsp;
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-fire-alt.png"
                    width="19px"
                  >&nbsp;
                  <small class="text">運動量1</small><br>
                  <p class="text-top">
                    筋膜リリースをすることにより骨格が正しい位置で整い姿勢改善も期待できます。また、血行が良くなることでコリや痛みの改善、関節の可動域も広がります。ご自身のお体、メンテナンスしませんか。
                  </p>
                </div>
              </b-col>

            </b-row>
          </b-col>
        </b-row>
      <!-- Lesson menu row 5 -->
        <b-row>
          <b-col
            md="6"
            class="group-lesson-content"
          >
            <b-row class="box-border">
              <b-col
                cols="5"
                sm="5"
                class="text-center"
              >
                <img
                  class=""
                  src="../assets/group-lesson/17アロマヨガ.jpg"
                  width="100%"
                  alt=""
                >
              </b-col>
              <b-col
                cols="7"
                sm="7"
              >
                <div>
                  <p>アロマヨガ</p>
                  <p class="divide" />
                  <p class="text-bottom">【日 / 13:00-14:00】</p>
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-stopwatch.png"
                    width="21px"
                  >&nbsp;
                  <small>60分</small>&nbsp;&nbsp;&nbsp;
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-fire-alt.png"
                    width="19px"
                  >&nbsp;
                  <small class="text">運動量1</small><br>
                  <p class="text-top">
                    呼吸を深め、呼吸と身体と心をつなげてポーズを楽しむヨガ。身体と心が整いリラックスができたり元気にさせてくれます。初心者の方、運動が久しぶりの方にもおすすめです。
                  </p>
                </div>
              </b-col>

            </b-row>
          </b-col>
          <b-col
            md="6"
            class="group-lesson-content"
          >
            <b-row class="box-border">
              <b-col
                cols="5"
                sm="5"
                class="text-center"
              >
                <img
                  class=""
                  src="../assets/group-lesson/16肩甲骨ほぐしヨガ.jpg"
                  width="100%"
                  alt=""
                >
              </b-col>
              <b-col
                cols="7"
                sm="7"
              >
                <div>
                  <p>肩甲骨ほぐしヨガ</p>
                  <p class="divide" />
                  <p class="text-bottom">【土 / 13:00-14:00】</p>
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-stopwatch.png"
                    width="21px"
                  >&nbsp;
                  <small>60分</small>&nbsp;&nbsp;&nbsp;
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-fire-alt.png"
                    width="19px"
                  >&nbsp;
                  <small class="t ext">運動量1</small><br>
                  <p class="text-top">
                    肩甲骨周りの筋肉を集中してほぐし、肩関節の可動域を広げていきます。肩甲骨周りをほぐすことにより、血行促進を促し、肩こり解消、姿勢改善する事が出来ます。
                  </p>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <!-- Lesson menu row 5 -->
        <b-row>
          <b-col
            md="6"
            class="group-lesson-content"
          >
            <b-row class="box-border">
              <b-col
                cols="5"
                sm="5"
                class="text-center"
              >
                <img
                  class=""
                  src="../assets/group-lesson/avata.jpg"
                  width="100%"
                  alt=""
                >
              </b-col>
              <b-col
                cols="7"
                sm="7"
              >
                <div>
                  <p>はじめてのピラティス</p>
                  <p class="divide" />
                  <p class="text-bottom">【第1.3.5土/13:00～14:00】</p>
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-stopwatch.png"
                    width="21px"
                  >&nbsp;
                  <small>60分</small>&nbsp;&nbsp;&nbsp;
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-fire-alt.png"
                    width="19px"
                  >&nbsp;
                  <small class="text">運動量1</small><br>
                  <p class="text-top">
                    体幹・インナーマッスルを強化することで、ボディラインが引き締まり姿勢も美しく変わります。初めての方でも安心して行える基礎のメニューです。
                  </p>
                </div>
              </b-col>

            </b-row>
          </b-col>
          <b-col
            md="6"
            class="group-lesson-content"
          >
            <b-row class="box-border">
              <b-col
                cols="5"
                sm="5"
                class="text-center"
              >
                 <img
                  class=""
                  src="../assets/group-lesson/やさしいフローヨガ.jpg"
                  width="100%"
                  alt=""
                >
              </b-col>
              <b-col
                cols="7"
                sm="7"
              >
                <div>
                  <p>やさしいフローヨガ</p>
                  <p class="divide" />
                  <p class="text-bottom">【火/13:00～14:00】</p>
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-stopwatch.png"
                    width="21px"
                  >&nbsp;
                  <small>60分</small>&nbsp;&nbsp;&nbsp;
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-fire-alt.png"
                    width="19px"
                  >&nbsp;
                  <small class="t ext">運動量2</small><br>
                  <p class="text-top">
                    血流やリンパの流れを促し代謝を高めることで、身体の中の老廃物や余分な水分をスムーズに排出していきます。同時にヒップや太ももなど大きい筋肉を動かすことで、バランス力や筋力、集中力などを養い基礎代謝を高めて痩せやすい身体づくりを目指します。
                  </p>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
         <!-- Lesson menu row 5 -->
        <b-row>
          <b-col
            md="6"
            class="group-lesson-content"
          >
            <b-row class="box-border">
              <b-col
                cols="5"
                sm="5"
                class="text-center"
              >
                 <img
                  class=""
                  src="../assets/group-lesson/代謝アップヨガ.jpg"
                  width="100%"
                  alt=""
                >
              </b-col>
              <b-col
                cols="7"
                sm="7"
              >
                <div>
                  <p>代謝アップヨガ</p>
                  <p class="divide" />
                  <p class="text-bottom">【火/13:00～14:00】</p>
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-stopwatch.png"
                    width="21px"
                  >&nbsp;
                  <small>60分</small>&nbsp;&nbsp;&nbsp;
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-fire-alt.png"
                    width="19px"
                  >&nbsp;
                  <small class="text">運動量2</small><br>
                  <p class="text-top">
                    血流やリンパの流れを促し代謝を高めることで、身体の中の老廃物や余分な水分をスムーズに排出していきます。同時にヒップや太ももなど大きい筋肉を動かすことで、バランス力や筋力、集中力などを養い基礎代謝を高めて痩せやすい身体づくりを目指します。
                  </p>
                </div>
              </b-col>

            </b-row>
          </b-col>
          <b-col
            md="6"
            class="group-lesson-content"
          >
            <b-row class="box-border">
              <b-col
                cols="5"
                sm="5"
                class="text-center"
              >
                <img
                  class=""
                  src="../assets/group-lesson/avata.jpg"
                  width="100%"
                  alt=""
                >
              </b-col>
              <b-col
                cols="7"
                sm="7"
              >
                <div>
                  <p>美姿勢カキラ</p>
                  <p class="divide" />
                  <p class="text-bottom">【第2.4土/13:00～14:00】</p>
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-stopwatch.png"
                    width="21px"
                  >&nbsp;
                  <small>60分</small>&nbsp;&nbsp;&nbsp;
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-fire-alt.png"
                    width="19px"
                  >&nbsp;
                  <small class="t ext">運動量1</small><br>
                  <p class="text-top">
                    カキラメソッドで無理なく姿勢を調整。姿勢が美しくなることで見た目と年齢が驚くほど変わります。内臓の働きもよくなり身体の内側から綺麗を目指せす。　
                     <br/> ※カキラとは？<br/>
                      (カ)関節をほぐし (キ)機能改善 (ラ)楽になるの頭文字
                  </p>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

         <!-- Lesson menu row 5 -->
        <b-row>
          <b-col
            md="6"
            class="group-lesson-content"
          >
            <b-row class="box-border">
              <b-col
                cols="5"
                sm="5"
                class="text-center"
              >
                <img
                  class=""
                  src="../assets/group-lesson/アロマリンパヨガ.jpg"
                  width="100%"
                  alt=""
                >
              </b-col>
              <b-col
                cols="7"
                sm="7"
              >
                <div>
                  <p>アロマリンパヨガ</p>
                  <p class="divide" />
                  <p class="text-bottom">【水/10:00～11:00】</p>
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-stopwatch.png"
                    width="21px"
                  >&nbsp;
                  <small>60分</small>&nbsp;&nbsp;&nbsp;
                  <img
                    class=""
                    src="../assets/group-lesson/Icon awesome-fire-alt.png"
                    width="19px"
                  >&nbsp;
                  <small class="text">運動量2</small><br>
                  <p class="text-top">
                    アロマの香りを楽しみながら、呼吸とヨガの動きを連動させて全身のリンパの流れを促していきます。リンパの詰まることで起こる肩凝り・冷え・浮腫みなどの症状を解消していきます。血行促進や柔軟性アップにも効果的です。
                  </p>
                </div>
              </b-col>

            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import require from 'jquery'
  export default {
    data: () => ({
      imggroupleft: require('@/assets/group-lesson/DSC00491.jpg'),
      imggroupright: require('@/assets/group-lesson/1000_F_164886455_sXuNYylc0oTCPFHwtSC3qHmCGWQQDeiw.jpg'),
      imgscedule: require('@/assets/group-lesson/GroupLessonスケジュール.png'),
      loadingimage:require('@/assets/loading-image.gif'),
    }),
  }
</script>