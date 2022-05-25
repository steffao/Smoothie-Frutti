<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>

  <RouterView />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Neucha:wght@400;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

body
{
  font-family: 'Neucha', Arial, Helvetica, sans-serif;
  color: rgb(0, 0, 0);
  font-size: 1em;
  justify-content: center;
  background-color: #fff;
  margin: 0; 
}
a{
  text-decoration: none;
  color: rgb(0, 0, 0);
}
input{
  font-family: 'Neucha', Arial, Helvetica, sans-serif;
}
h1{
  font-size: 1.25em;
  font-weight: bold;
}
h2{
  font-size: 1.0em;
  font-weight: bold;
}
h3{
  font-size: 0.95em;
  font-weight: bold;
}
em{
  font-weight: bold; 
}
section{
  margin-top: 20px;
}
</style>
