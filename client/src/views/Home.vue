<template>
  <div class="home">
  	<h1>Hi this is {{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
})
export default class Home extends Vue {
	public title:string

	constructor() {
		super();
		this.title = "Foro Emprender"
	}
}
</script>
