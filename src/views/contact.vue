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
        <h3>Contact</h3>
        <b class="title">お問い合わせ</b>
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
          >Contact</div>
          <p class="divide-title" />
          <small class="sub-title">お問い合わせ</small>
        </div>
      </b-container>
    </div>

    <div class="intructor-warp ">
      <b-container>
        <b-row align-h="center">
          <b-col cols="12" md="8" class="mt-5">
            <div>
              <b-form ref="form" @submit.prevent="sendEmail" v-if="shows">
                <b-row>
                  <b-col md="3">
                    <label>
                       お名前 <strong style="color:red;">*</strong>
                    </label>
                  </b-col>
                  <b-col md="9" class="mb-3">
                      <b-form-input
                      id="input-lg"
                      name="name"
                      v-model="form.name"
                      placeholder="お名前"
                      required
                    ></b-form-input>
                  </b-col>
                  <b-col md="3">
                    <label>
                       お電話番号<strong style="color:red;">*</strong>
                    </label>
                  </b-col>
                  <b-col md="9" class="mb-3">
                      <b-form-input
                        id="telephone"
                        name="telephone"
                        v-model="form.telephone"
                        placeholder="092-406-6988"
                        required
                      ></b-form-input>
                  </b-col>
                  <b-col md="3">
                    <label>
                       メールアドレス<strong style="color:red;">*</strong>
                    </label>
                  </b-col>
                  <b-col md="9" class="mb-3">
                     <b-form-input
                        id="email_id"
                        name="email_id"
                        v-model="form.email"
                        type="email"
                        placeholder="karuna@gmail.com.jp"
                        required
                    ></b-form-input>
                  </b-col>
                  <b-col md="3">
                    <label>
                       件名<strong style="color:red;">*</strong>
                    </label>
                  </b-col>
                  <b-col md="9" class="mb-3">
                    <b-form-select
                        id="title"
                        name="title"
                        v-model="form.title"
                        :options="titles"
                        required
                        style="width:100%;padding:6px 0;border:1px solid #ddd;border-radius:6px;"
                    ></b-form-select>
                  </b-col>
                  <b-col md="3">
                    <label>
                       お問い合わせ内容
                    </label>
                  </b-col>
                  <b-col md="9" class="mb-3">
                      <b-form-textarea
                      name="message"
                      id="message"
                      v-model="form.message"
                      placeholder="お問い合わせ内容 "
                      rows="8"
                      class="mb-3"
                    ></b-form-textarea>
                    <vue-recaptcha sitekey="6Ld2JpMjAAAAAIY7hs0CchscpwgJ2yZCLWQ3QSNN"></vue-recaptcha>

                  </b-col>

                  <b-col md="3"></b-col>
                  <b-col cols="9" class="mb-5 mt-1">
                      <b-button type="submit" :disabled="isDisabled" style="background-color:#F30268;padding: 10px 80px;border:none;">
                        <b-spinner small v-if="isClick"></b-spinner>
                        送信
                      </b-button>
                      <b-alert
                         class="mb-2 mt-1"
                        :show="dismissCountDown"
                        variant="success"
                        @dismissed="dismissCountDown=0"
                        style="height:25px;"
                      >
                        <p style="color:black;margin-top:-15px">お問い合わせを送信しました</p>
                      </b-alert>
                  </b-col>
                </b-row>

              </b-form>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

  </div>
</template>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script>
import emailjs from '@emailjs/browser';
import { VueRecaptcha } from 'vue-recaptcha';

export default {
    components: { VueRecaptcha },
   data: () => ({
        form: {
          email: '',
          name: '',
          telephone:'',
          title: null,
          message:'',
        },
         titles: [{ text: '一つ選択してください', value: null }, '予約について', 'レッスン内容について', '料金システムについて', 'その他'],
        shows: true,
        isClick:false,
        isDisabled:false,
        dismissSecs: 10,
        dismissCountDown: 0,

    }),
  methods: {
    sendEmail() {
        this.isClick = true;
        this.isDisabled=true;
      // emailjs:API https://dashboard.emailjs.com/
      //phornsophea96@gmail.com:%Sophea%2015
      emailjs.sendForm('service_cym3hwo', 'template_t1h83eu', this.$refs.form, 'K44vsSvgI3mM-U3xg')
        .then((res) => {
          this.form.email='';
            this.form.name='';
            this.form.telephone='';
            this.form.title=null;
            this.form.message='';
            this.isClick = false;
            this.isDisabled=false;
            this.dismissCountDown = this.dismissSecs
            console.log('SUCCESS!', res.status);
        }, (error) => {
            console.log('FAILED...', error.status);
            alert('verification reCaPTCHA!!');
            this.isClick = false;
            this.isDisabled=false;
        });
    }
  }
}
</script>