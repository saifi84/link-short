<template>
    <div>
        <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="light-blue darken-4 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Managing links is even easier using the features available in the dashboard after logging in, as well as using the API. Cutt.ly makes link management easier than ever, and advanced analytics allow you to understand what is happening with your links - so you know what you can improve and get the highest click-through rate.


      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>SHORTURL</strong>
      </v-card-text>
    </v-card>
  </v-footer>

    </div>
</template>

<script>
    export default {
        name: 'FooterEnd',
        data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
    }
</script>

<style scoped>

</style>