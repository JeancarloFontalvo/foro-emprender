<template>
  <div class="login">
  	<login-form-component />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginFormComponent from './login-form-component.vue'

@Component({
  components: {
  	LoginFormComponent
  }
})
export default class LoginPage extends Vue {
	public title:string;

	constructor() {
		super();
		this.title = "Foro Emprender"
	}
}
</script>
