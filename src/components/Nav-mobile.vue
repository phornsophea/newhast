<template>
        <div class="social-mobile">
            <b-button v-b-toggle.sidebar-right style="margin-top: 70px;padding:0 !important;height: 42px;border: 1px solid #D5DDE6;background:#D5DDE6;color:#707070; ">
              <b-icon icon="list" aria-hidden="true"></b-icon>
            </b-button>
              <b-sidebar id="sidebar-right" right shadow>
                <div class="">
                  <nav class="mb-3">
                      <b-nav vertical class="menus">
                        <b-nav-item>
                          <router-link
                            to=""
                            class="nav-link has_sub"
                          >
                            <p class="engs">lesson  &nbsp; <small>レッスン</small></p>
                            <ul>
                              <li>
                                <router-link
                                  to="/group-lesson"
                                  class="nav-link"
                                >
                                  <p class="eng">group lesson</p>
                                  <p class="jp" style="font-size:12px !important;">グループレッスン</p>
                                </router-link>
                              </li>
                              <li>
                                <router-link
                                  to="/lesson-personal"
                                  class="nav-link"
                                >
                                  <p class="eng">personal lesson</p>
                                  <p class="jp" style="font-size:12px !important;">パーソナルレッスン</p>
                                </router-link>
                              </li>
                              <li>
                                <router-link
                                  to="/lesson-diet"
                                  class="nav-link"
                                >
                                  <p class="eng">diet program</p>
                                  <p class="jp" style="font-size:12px !important;">短期集中プログラム</p>
                                </router-link>
                              </li>
                            </ul>
                          </router-link>
                        </b-nav-item>
                        <b-nav-item>
                          <router-link
                            to="/instructor"
                            class="nav-link"
                          >
                            <p class="engs">instructor &nbsp; <small>インストラクター</small></p>
                          </router-link>
                        </b-nav-item>
                        <b-nav-item>
                          <router-link
                            to="/price"
                            class="nav-link"
                          >
                            <p class="engs">price &nbsp; <small>料金</small></p>
                          </router-link>
                        </b-nav-item>
                        <b-nav-item>
                          <router-link
                            to="/voice"
                            class="nav-link"
                          >
                            <p class="engs">voice &nbsp; <small>お客様の声</small></p>
                          </router-link>
                        </b-nav-item>
                         <b-nav-item>
                          <router-link
                            to="/contact"
                            class="nav-link"
                          >
                            <p class="engs">contact &nbsp; <small>お問い合わせ</small></p>
                          </router-link>
                        </b-nav-item>
                      </b-nav>
                    </nav>
                </div>
            </b-sidebar>
        </div>
</template>


