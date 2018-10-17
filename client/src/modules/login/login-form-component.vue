<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p class="login-message">
      {{ message }}
    </p>

    <div>
      <div class="row">
        <div class="col-8">
          <form action="/" class="form">
            <input type="text" name="email">
            <input type="text" name="email">
            <button class="btn btn-success">Iniciar sesion</button>
            <button class="btn btn-primary">Iniciar sesion con Google</button>
          </form>
        </div>
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
