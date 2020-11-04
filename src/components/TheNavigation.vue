<template>
  <div id="nav">
    <p class="logo">TravelScope</p>
    <ul class="nav-links">
      <li class="links">
        <router-link :to="{name: 'Home'}"> Home</router-link>
      </li>
      <li class="links" v-for="destination in destinations" :key="destination.name">
        <router-link :to="{name: 'DestinationDetails', params: {slug: destination.slug}}">
          {{destination.name}}
        </router-link>
      </li>
      <li class="links">
        <router-link :to="{name: 'Dashboard'}">
          Dashboard
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store.js'

export default {
  data () {
    return {
      destinations: store.destinations
    }
  }
}
</script>

<style scoped>
  #nav {
    display: flex;
    padding: 10px 30px;
    align-items: center;
    position: sticky;
    top: 0;
    border-bottom: 1px solid rgba(13, 14, 13,.5);
    background: #fff;
  }
  .nav-links{
    display: flex;
  }
  .links{
    padding-right: 20px;
    list-style: none;
  }
  .logo {
    font-size: 20px;
    font-weight: bold;
    color: #e5e758;
  }
  .links:hover {
    text-decoration: none;
  }
  #nav a {
    font-weight: bold;
    color: #0d0e0d;
    padding: 0 10px;
    text-decoration: none;
    font-weight: bold;
  }


  /* #nav a.router-link-exact-active { */
  #nav a.test-active-class{
    color: #4258b9;
  }
</style>
