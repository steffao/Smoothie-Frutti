<template>
    <div v-show="selectedFruits" class="calculator">
        <div class="calculator__results">
            <span class="totalCalories">{{messageTotalCalories}}</span>        
            <span class="totalCalories totalCalories__cal">{{totalCalories}} calories</span>
        </div> 
    </div>    
</template>
  
<style scoped lang="scss">
$primary-color : #F29F05;
$secondary-color : #F2CB05;
$tertiary-color : #D962AF;
$quadrary-color : #730217;
.calculator {
    margin-top: 30px;
    width: 40%;
    height: 40vw;
    background-image: url('../../assets/img/fruits/funny smoothie.jpeg');    
    background-repeat: no-repeat;    
    background-size: 60%;
    background-position: 50% 90%;
    display: flex;
    justify-content: center;
    align-items: flex-start;   
    &__results {
        border-radius: 25px;
        padding: 3em;
        background-color:rgba($color: #fff, $alpha: 0.9);               
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media only screen and (max-width: 425px) {
            padding: 2em;

        }
        .totalCalories {
            color: $tertiary-color;
            font-size: 1em;
            font-weight: bold;
            &__cal {
                font-size: 2em;
            }
        }
    }
    @media only screen and (max-width: 768px) {
        width: 100%;
        background-size: 70%;
        align-items:center; 
    }
}
.fruitsCart--empty {
    width: 100%;
    height: 40vw;
    background-image: url('../../assets/img/fruits/background-fruits.png');
    background-repeat: no-repeat;    
    background-size: 90%;
    background-position: 85% 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    .goToFruitFinder {
        border-radius: 25px;
        background-color: $quadrary-color;
        width: fit-content;
        height: fit-content;
        display: flex;
        a {
            padding: 1em;
            color: white;
            font-size: 1em;
            font-weight: bold;
            .fa {
                margin-right: 1em;
            } 
        }
    }
}
</style>
  
<script>
import { mapState } from 'vuex' 
    
export default {
    components : {
    },
    data : function () {
        return {
            messageTotalCalories : 'Your smoothie contains'           
        }
    },
    computed: {
        ...mapState({ allFruits: 'fruits' },{ cart: 'cart' }),
        selectedFruits: function () {
            return this.$store.getters.FRUITS_CART_GETTER
        },
        totalCalories: function () {
            return this.$store.getters.TOTAL_CALORIES_GETTER
        }
    },
    
}  
    
</script>
  