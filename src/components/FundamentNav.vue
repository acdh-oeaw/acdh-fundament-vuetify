<template>
  <div>
    <transition :duration="200" name="slideLeft" mode="out-in">
      <v-navigation-drawer
        v-if="drawer"
        enable-resize-watcher
        :class="config.color"
        dark
        app
        >
        <v-container
           fill-height
        >
          <v-layout column justify-space-between>
            <v-list>
              <v-list-tile>
                <v-btn icon @click.stop="toggleDrawer()">
                  <v-icon>view_day</v-icon>
                </v-btn>
                <v-btn icon @click.stop="toggleNavDrawerClipped()">
                  <v-icon v-html="drawerclipped ? 'first_page' : 'last_page'"></v-icon>
                </v-btn>
                <v-btn v-if="!disableRightDrawer" icon @click.stop="toggleRightDrawer()">
                  <v-icon v-html="'menu'"></v-icon>
                </v-btn>
              </v-list-tile>
            </v-list>
            <v-list>
              <v-list-tile
                value="true"
                v-for="(item, i) in config.menu"
                :key="i"
                :to="item.startpage"
                >
                  <v-btn icon>
                    <v-icon v-html="item.icon"></v-icon>
                  </v-btn>
                  <v-list-tile-content >
                    <v-list-tile-title class="toolbarcaption">{{item.caption}}</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-list>
              <v-list-tile>
              </v-list-tile>
            </v-list>
          </v-layout>
        </v-container>
      </v-navigation-drawer>
    </transition>
    <transition :duration="200" name="slideRight" mode="out-in">
      <v-toolbar
        v-if="!drawer"
        app
        height="90"
        class="border-bottom"
        >
        <v-btn icon @click.stop="toggleDrawer()">
          <v-icon>view_quilt</v-icon>
        </v-btn>
        <v-container row >
          <v-layout row class="compensation">
            <v-flex xs3 >
              <v-layout column justify-center fill-height>
                <v-toolbar-title>
                  <v-avatar
                    size="35"
                    class="teal lighten-3"
                  >
                    <img :src="config.logo" alt="alt">
                  </v-avatar>
                  {{ config.title }}
                </v-toolbar-title>
              </v-layout>
            </v-flex>
            <v-flex >
              <v-tabs icons-and-text color="grey lighten-4">
                <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
                <v-tab
                  v-for="(item, i) in config.menu"
                  :key="i"
                  :to="item.startpage"
                  >
                  {{item.caption}}
                  <v-icon>{{item.icon}}</v-icon>
                </v-tab>
              </v-tabs>
            </v-flex>
            <v-spacer></v-spacer>
          </v-layout>
        </v-container>
        <v-btn v-if="!disableRightDrawer" icon @click.stop="toggleRightDrawer()">
          <v-icon>menu</v-icon>
        </v-btn>
      </v-toolbar>
    </transition>
    <v-navigation-drawer
      v-if="!disableRightDrawer"
      right
      v-model="rightDrawer"
      app
      >
      <router-view name="rightdrawertop"></router-view>
      <router-view name="rightdrawerbottom"></router-view>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        drawerclipped: false,
        rightDrawer: false,
      };
    },
    name: 'FundamentNav',
    props: {
      config: {
        type: Object,
        default: () => ({}),
      },
      disableRightDrawer: Boolean,
    },
    methods: {
      toggleDrawer() {
        this.drawer = !this.drawer;
      },
      toggleNavDrawerClipped() {
        this.drawerclipped = !this.drawerclipped;
      },
      toggleRightDrawer() {
        this.rightDrawer = !this.rightDrawer;
      },
      checkLocalStorage(str) {
        if (localStorage.getItem('FundamentNav') && JSON.parse(localStorage.getItem('FundamentNav'))[str]) {
          this[str] = JSON.parse(localStorage.getItem('FundamentNav'))[str];
        }
      },
      setLocalStore(key, val) {
        const locStore = JSON.parse(localStorage.getItem('FundamentNav'));
        locStore[key] = val;
        localStorage.setItem('FundamentNav', JSON.stringify(locStore));
      },
    },
    watch: {
      drawer(to) {
        this.setLocalStore('drawer', to);
      },
      drawerclipped(to) {
        this.setLocalStore('drawerclipped', to);
      },
      rightDrawer(to) {
        this.setLocalStore('rightDrawer', to);
      },
    },
    mounted() {
      if (!localStorage.FundamentNav) localStorage.setItem('FundamentNav', JSON.stringify({}));

      const vals = ['drawer', 'drawerclipped', 'rightDrawer'];
      for (let i = 0; i < vals.length; i-=-1) this.checkLocalStorage(vals[i]);
    },
  };
</script>
<style scoped>
.compensation {
  margin-left: -15px;
  margin-right: -15px;
}
.toolbarcaption {
  color:white;
}

</style>
