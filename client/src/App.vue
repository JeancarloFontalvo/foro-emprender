<template>
  <div id="app">
    <TheNavbar v-bind:links="links"></TheNavbar>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import  TheNavbar         from '@/components/static-ui/the-navbar-component.vue'

  @Component({
    components: {
      TheNavbar
    }    
  })
  export default class App extends Vue {

      private links: any[];

      constructor(){
        super();

        this.links = [
          {
            text : "Inicio",
            route: "/"
          },
          {
            text : "Nosotros",
            route: "/about"
          },
          {
            text : "Iniciar sesion",
            route: "/login"
          }
        ];
      }
  }

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
