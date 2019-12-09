<template>
  <v-flex xs12>
    <div class="text-xs-center pb-2 mb-1 sec">
      <v-icon>{{icon}}</v-icon>{{caption}}
    </div>
  </v-flex>
</template>

<script>
  import { VFlex, VIcon} from 'vuetify/lib';

  export default {
    components: {
      VFlex,
      VIcon,
    },
    props: [
      'icon',
      'caption',
    ],
    name: 'FundamentSectionDiv',
  };
</script>

<style>
  @import '../css/fundament.css';
</style>
<style scoped>
  .sec {
    border-bottom: 1px solid #dee2e6 !important;
    color: #6c757d;
  }
</style>
