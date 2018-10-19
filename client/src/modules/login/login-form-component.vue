<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p class="login-message">
      {{ message }}
    </p>

    
      <div class="columns">
        <div class="column is-half is-offset-one-quarter ">
          <form action="/" class="form">
            <input class="input" type="text" name="email">
            <input class="input" type="text" name="email">
            <button class="button is-success">Iniciar sesion</button>
            <button class="button is-primary">Iniciar sesion con Google</button>
          </form>
        </div>
      </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LoginFormComponent extends Vue {
  @Prop() public message: string = "Esta es una beta, por favor contacte al administrador";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
