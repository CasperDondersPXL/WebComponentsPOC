<template>
  <div>
    <h1>Hello {{props.name}}</h1>
    <p>Welcome to our Component</p>
  </div>
</template>

<script setup>
  const props = defineProps(["name"]);
</script>

<style scoped>
div {
  text-align: center;
  font-weight: normal;
  padding: 1em;
  margin: 0 0 2em 0;
  background-color: #eee;
  border: 1px solid #666;
}

h1 {
  font-weight: bold;
  color: red; 
}
</style>