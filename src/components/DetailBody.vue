<template>
<div class="pa-12">
  <h2>Simple and fast URL shortener!</h2>
  <p>ShortURL allows to reduce long links from Instagram, Facebook, YouTube, Twitter, Linked In and top sites on the Internet, just paste the long URL and click the Shorten URL button. On the next screen, copy the shortened URL and share it on websites, chat and e-mail. After shortening the URL, check how many clicks it received.</p>
  <h2>Shorten, share and track</h2>
  <p>Your shortened URLs can be used in publications, documents, advertisements, blogs, forums, instant messages, and other locations. Track statistics for your business and projects by monitoring the number of hits from your URL with the click counter, you do not have to register.</p>
<v-row class="pt-4">
  <v-col>
    <v-card
  elevation="18"
  max-width="300"
  shaped>
  <div class="d-flex flex-column align-center pt-4">
  <v-img src="../assets/1.png" width="70" height="70">
    
  </v-img>
  <v-list-item-content class="d-flex flex-column align-center">
        <v-list-item-title class="text-h5 mb-1">
          URL Shortener
        </v-list-item-title>
        <v-card-text class="text-center  text-justify">Cuttly is a URL Shortener and Link Management Platform with a lot of features that will help you handle all your links in an intuitive way and reveal the potential of your links.</v-card-text>
      </v-list-item-content>


    </div>
</v-card>
  </v-col>
  <v-col>
    <v-card
  elevation="18"
  max-width="300"
  shaped>
  <div class="d-flex flex-column align-center pt-4">
  <v-img src="../assets/2.png" width="70" height="70">
    
  </v-img>
  <v-list-item-content class="d-flex flex-column align-center">
        <v-list-item-title class="text-h5 mb-1">
          Link analytics
        </v-list-item-title>
        <v-card-text class="text-center  text-justify">Cuttly is an advanced Link Analytics platform that tracks clicks on short links and measures the effectiveness of clicks. Extensive statistics of clicks on short links.</v-card-text>
      </v-list-item-content>


    </div>
</v-card>
  </v-col>
  <v-col>
    <v-card
  elevation="18"
  max-width="300"
  shaped>
  <div class="d-flex flex-column align-center pt-4">
  <v-img src="../assets/3.png" width="70" height="70">
    
  </v-img>
  <v-list-item-content class="d-flex flex-column align-center">
        <v-list-item-title class="text-h5 mb-1">
          Link in bio
        </v-list-item-title>
        <v-card-text class="text-center  text-justify">Cuttly is a tool for creating your own link in bio microsites that will allow you to reach your audience, measure click rates and expand the audience with dedicated QR codes.</v-card-text>
      </v-list-item-content>


    </div>
</v-card>
  </v-col>
  <v-col>
    <v-card
  elevation="18"
  max-width="300"
  shaped>
  <div class="d-flex flex-column align-center pt-4">
  <v-img src="../assets/4.png" width="70" height="70">
    
  </v-img>
  <v-list-item-content class="d-flex flex-column align-center">
        <v-list-item-title class="text-h5 mb-1">
          QR Codes
        </v-list-item-title>
        <v-card-text class="text-center  text-justify">Generate QR codes and customize them according to your style and manage their redirection so that QR codes reflect your brand and allow you to grow your business.</v-card-text>
      </v-list-item-content>


    </div>
</v-card>
  </v-col>
</v-row>
</div>
</template>

<script>
export default {
    name: 'DetailBody',
    data: () => ({
    //   selectedItem: 1,
      items: [
        { text: 'The ISP and organizations name'},
        { text: 'The IPs host name' },
        { text: 'The country its in' },
        { text: 'The region/state' },
        { text: 'The city' },
        { text: 'The latitude and longitude of the location (a best guess)' },
        { text: 'The area code for that region' },
        { text: 'Any known services running on that IP' },
      ],
      itemsNone: [
        { text: 'A persons name'},
        { text: 'The exact location or street address' },
        { text: 'A phone number' },
        { text: 'Their email address' },
      ],
    }),
}
</script>
