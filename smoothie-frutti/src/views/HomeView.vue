<template>
  <div>
    <HeaderBar />
  <section>    
    <FruitFinder ref="focusSearchBar" />
    <main v-if="selectedFruits.length > 0">
      <FruitsCart />
      <CalCulator />
    </main>
    <main v-else>
      <FruitsCartEmpty @triggerFocusSearch="focusFruitFinder"/>
    </main>
  </section>    
  
  <FooterBar />
  </div>
  
</template>

<style lang="scss" scoped>

section{
  padding-left: 10%;
  padding-right: 10%;
}
main {
  margin-top: 20px;
  display: flex;
  box-shadow: 0px 7px 30px -15px rgba(0,0,0,0.75);
}

</style>

<script>
  import { mapState } from 'vuex' 
  import HeaderBar from '@/components/navigation/Header.vue'
  import FooterBar from '@/components/navigation/Footer.vue'
  import FruitFinder from '@/components/navigation/FruitFinder.vue'
  import FruitsCart from '@/components/navigation/FruitsCart.vue'
  import FruitsCartEmpty from '@/components/navigation/FruitsCartEmpty.vue'
  import CalCulator from '@/components/navigation/CalCulator.vue'
  
export default {
  components : {
    HeaderBar,
    FooterBar,
    FruitFinder,
    FruitsCart,
    CalCulator,
    FruitsCartEmpty
  },
  data : function () {
    return {    
    }
  },
  computed: {
    ...mapState({ allFruits: 'fruits' },{ cart: 'cart' }),
    selectedFruits: function () {
        return this.$store.getters.FRUITS_CART_GETTER
    }
  },
  methods : {
    focusFruitFinder : function () {
      this.$refs.focusSearchBar.$refs.searchBarInput.focus()
    }
    
  }
    
}  
  
</script>
