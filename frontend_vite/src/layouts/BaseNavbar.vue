<template>
  <nav class="navbar navbar-expand-lg navbar-light py-3">
    <div class="container-fluid">
      
      <router-link :to="{ name: 'welcome_view' }" class="navbar-brand text-uppercase fw-bold">
        <img src="http://via.placeholder.com/100x100" width="30" height="30" class="d-inline-block align-top" alt="Company">
        Restaurant
      </router-link>
      
        <v-form class="d-flex" @submit.prevent>
          <v-text-field type="search" v-model="search" variant="outlined" aria-label="Search" placeholder="Search" style="width: 200px;" hide-details></v-text-field>
          <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
        </v-form>

        <div id="navbar-nav" class="collapse navbar-collapse">        
          <a href class="nav-link" @click.prevent="showPayment">
            Payment
          </a>

          <a href class="nav-link" @click.prevent="store.showFavoritesModal=true">
            Favoris
          </a>
          
          <a href class="nav-link" @click.prevent="store.showWebsiteMenu=true">
            Menu
          </a>
        </div>
    </div>
  </nav>
</template>

<script>
import { useRestaurant } from "@/stores/restaurant"
import { ref } from "vue";

export default {
  name: 'BaseNavbar',
  setup() {
    var store = useRestaurant()
    var search = ref(null)
    return {
      search,
      store
    }
  },
  methods: {
    showPayment () {
      // this.store.getGenericSite()
      this.$router.push({ name: 'payment' })
    }
  }
}
</script>

<style scoped>
.navbar {
  z-index: 1000;
}
</style>
