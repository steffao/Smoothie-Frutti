
<template>
    
    <div class="wrapper">
        <button class="btn btn--minus" @click="changeCounter('-100')" type="button" name="button">
        -
        </button>
        <input class="quantity" type="text" name="name" :value="selectedFruit.quantity + 'g'" disabled>
        <button class="btn btn--plus" @click="changeCounter('100')" type="button" name="button">
        +
        </button>
    </div>
    
</template>

<style scoped lang="scss">
$primary-color : #F29F05;
$secondary-color : #F2CB05;
$tertiary-color : #D962AF;
$quadrary-color : #730217;

.wrapper {
	height: 20px;
	display: flex;
}
.quantity {
    -webkit-appearance: none;
    border: none;
    text-align: center;
    width: 30px;
    color: $quadrary-color;
    font-weight: 300;
	
}

.btn {
	border: 1px solid $primary-color;
    border-radius: 25px;
    width: 30px;
    background-color: $primary-color;
/*   border-radius: 6px; */
    cursor: pointer;
}
button:focus,
input:focus {
  outline:0;
}
</style>

<script>
import { mapState } from 'vuex'

export default {
    components: {
    },
    props : ["selectedFruit"],
    data : function() {
        return {
        };
    },
    computed: {
        ...mapState({ allFruits: 'fruits' },{ cart: 'cart' }),
        
    },
    methods: {
        changeCounter: function(num){
            this.selectedFruit.quantity += +num
            console.log(this.selectedFruit.quantity)
            !isNaN(this.selectedFruit.quantity) && this.selectedFruit.quantity > 0 ? this.selectedFruit.quantity : this.selectedFruit.quantity = 0;
            
            console.log(this.selectedFruit)

        }
	},

}
</script>