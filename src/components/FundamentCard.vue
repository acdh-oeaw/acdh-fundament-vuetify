<template>
  <v-card class="border-top mb-3">
    <v-card-media :src="src" v-if="src" height="200px">
    </v-card-media>
    <v-card-title primary-title>
      <v-flex xs12>
        <h3 class="headline mb-0" v-text="caption"></h3>
        <slot></slot>
      </v-flex>
    </v-card-title>
    <v-card-actions v-if="link">
      <v-btn
        flat
        class="teak lighten-3"
        :to="link"
        >
      {{ button || 'Start' }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { VCard, VCardText, VCardMedia, VCardActions, VCardTitle, VFlex } from 'vuetify/lib';

  export default {
    components: {
      VCard,
      VCardText,
      VCardMedia,
      VCardActions,
      VCardTitle,
      VFlex,
    },
    props: [
      'src',
      'caption',
      'link',
      'button',
    ],
    name: 'FundamentCard',
  };
</script>
<style>
  @import '../css/fundament.css';
</style>
