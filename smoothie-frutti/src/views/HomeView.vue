<template>
  <HeaderBar />
  
  
  <section>
    <main>

    </main>
    
    <FruitFinder />
  </section>    
  
  <FooterBar />
</template>

<style scoped>

section{
    padding-left: 10%;
    padding-right: 10%;
}
</style>

<script>
  import HeaderBar from '@/components/navigation/Header.vue'
  import FooterBar from '@/components/navigation/Footer.vue'
  import FruitFinder from '@/components/navigation/FruitFinder.vue'
  
export default {
  components : {
    HeaderBar,
    FooterBar,
    FruitFinder,
  },
  data : function () {
    return {    
    }
  },
  methods : {    
  }
    
}  
  
</script>
