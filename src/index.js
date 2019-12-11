import FundamentFooter from './components/FundamentFooter.vue';
import FundamentJumbo from './components/FundamentJumbo.vue';
import FundamentCard from './components/FundamentCard.vue';
import FundamentSectionDiv from './components/FundamentSectionDiv.vue';
import FundamentNav from './components/FundamentNav.vue';


export default {
  install (Vue, options) {
    Vue.component('FundamentFooter', FundamentFooter);
    Vue.component('FundamentJumbo', FundamentJumbo);
    Vue.component('FundamentCard', FundamentCard);
    Vue.component('FundamentSectionDiv', FundamentSectionDiv);
    Vue.component('FundamentNav', FundamentNav);
  }
}
