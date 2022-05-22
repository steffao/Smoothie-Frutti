<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>

  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Neucha:wght@400;700&display=swap');
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/montserrat/v24/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXx-p7K4KLg.woff) format('woff');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
body
{
  font-family: 'Neucha','Montserrat', Arial, Helvetica, sans-serif;
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
