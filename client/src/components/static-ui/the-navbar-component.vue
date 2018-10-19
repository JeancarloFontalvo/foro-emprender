<template>
	<!-- The Nav template-->
    <nav class="navbar is-primary is-fixed-top">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                	<b>Forum Emprender</b>
                    <!-- <img src="../images/bulma.png" alt="Logo"> -->
                </a>
                <span class="navbar-burger burger" data-target="navbarMenu">
                    <span></span>
	                <span></span>
	                <span></span>
                </span>
            </div>
            <div id="navbarMenu" class="navbar-menu">
                <div class="navbar-end">
            		<router-link v-for="link in links" class="navbar-item" v-bind:to="link.route">{{ link.text }}</router-link>
                </div>
            </div>
        </div>
    </nav>
    <!-- END NAV -->
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class TheNavbar extends Vue {
      @Prop() private links!: any
  }
</script>
<!-- Style section  -->
<style lang="scss">
	
</style>