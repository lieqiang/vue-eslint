<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<h1>{{ msg.msg }}</h1>
		<button @click="changeParentMsg">changeParentMsg</button>
		<HelloWorld />
	</div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // },
  provide () {
    this.msg = Vue.observable({
      msg: 'Welcome to Your Vue.js App'
    })
    return {
      msg: this.msg
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    changeParentMsg () {
      this.msg.msg = 'new msg parent!'
    }
  }
}
</script>
