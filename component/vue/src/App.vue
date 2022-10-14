<script>
import { defineCustomElement } from 'vue'
import HalloWoldComponent from './components/HalloWoldComponent.ce.vue'

// convert into custom element constructor
const HalloWold = defineCustomElement(HalloWoldComponent)

// register
customElements.define('hallo-world', HalloWold)
</script>

<template>
  <main>
    <hallo-world name="Kobe" />
    <hallo-world name="Casper" />
    <hallo-world name="Ben" />
    <hallo-world name="Dukan" />
    <hallo-world name="Wout" />
    <hallo-world name="Roel" />
  </main>
</template>

<style scoped>
  body {
    font-family: sans-serif;
  }
</style>
