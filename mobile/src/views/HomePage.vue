<template>
  <ion-page>
    <app-header page-title="Home" />
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header> -->

    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header> -->
    
      <ion-card>
        <ion-card-content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quam facilis 
          quaerat ratione omnis libero vel sint, nulla ex temporibus consequuntur iusto! 
          Fugiat ad ut voluptas dicta itaque ipsum nostrum!
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue'
import { IonCard, IonPage, IonContent, IonCardContent } from '@ionic/vue'
// import SidemenuLayout from '@/layouts/SidemenuLayout.vue'
import AppHeader from '@/layouts/AppHeader.vue'

export default  defineComponent({
  name: 'HomePage',
  components: { AppHeader, IonCard, IonContent, IonPage, IonCardContent }
});
</script>
