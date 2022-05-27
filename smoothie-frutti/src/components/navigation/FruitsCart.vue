<template>
    <div class="blinder">
        <div  class="fruitsCart">
            <article class="selectedFruit" v-for="(selectedFruit,index) in selectedFruits" :key="index">
                <div class="selectedFruit__avatar">
                    <img v-if="selectedFruit.imageUrl" class="selectedFruit__avatar__img" :src="selectedFruit.imageUrl" alt="Picture of a fruit">
                    <img v-else class="selectedFruit__avatar__img" src="../../assets/img/fruits/standard_fruit.jpeg" alt="Picture of a mix of fruits">
                </div>
                <div class="selectedFruit__info">
                    <h3 class="selectedFruit__info__name">{{selectedFruit.name}}</h3>
                    <div class="selectedFruit__info__quantity">
                        <div class="selectedFruit__info__quantity--calories"><b>{{selectedFruit.nutritions.calories /100 * selectedFruit.quantity}}</b> cal</div>
                        <NumberInput class="calories__counter" :selectedFruit="selectedFruit"/>
                        <!-- <input type="number" class="calories__counter" name="calories" step="100" placeholder="100" v-model="amountOfCalories"> -->
                    </div>        
                </div>
                <i class="fa fa-times" aria-hidden="true" @click="removeFruit(selectedFruit)"></i>               
            </article>
        </div>
        
    </div>    
</template>
  
<style scoped lang="scss">
$primary-color : #F29F05;
$secondary-color : #F2CB05;
$tertiary-color : #D962AF;
$quadrary-color : #730217;

@keyframes addFruit {
    0% {opacity: 0;}
    100% {opacity: 1;}    
}
@keyframes removeFruit {
    0% {opacity: 1;}
    100% {opacity: 0;}    
}
.blinder {
    width: 60%; 
    margin: 20px 20px 20px 20px;
  .fruitsCart {    
    min-height: 400px;
    max-height: 500px;
    overflow-y : auto;
    display: flex;
    flex-wrap: wrap;
    .selectedFruit {
        display: flex;
        flex-direction: column;
        box-shadow: 0px 7px 30px -15px rgba(0,0,0,0.75);
        border-radius: 10px;
        align-items: center;
        justify-content: space-between;
        width: 140px;
        max-height: 200px;
        position: relative;
        padding: 10px;
        margin: 10px;
        background-color: lighten($secondary-color,45%);
        animation: addFruit 1s ease-in-out;
        &__avatar{
            border-radius: 10px;            
            height: 70%;
            width: 100%;
            overflow: hidden;            
            &__img {
                height: 100%;
                width: 100%;
                background-color: white;              
            }
        }
        &__info {
            height: 30%;
            display: flex;
            flex-direction: column;
            &__name {
                font-weight: bold;
            }
            &__quantity {
                display: flex;
                justify-content: space-between;
                .calories__counter {
                    width: 50%;
                }
                &--calories {
                font-style: italic;
                }
                @media only screen and (max-width: 375px) {
                    &--calories {
                        font-size: .8em;
                    }                
                }
            }
        }
        .fa {
            color: $quadrary-color;
            opacity: 0.6;
            font-size: 2em;
            position : absolute;
            margin-left: 80%;
            cursor: pointer;
            &:hover {
                color: $quadrary-color;
                opacity: 1;
                font-size: 2.2em;
            }
        }
    }
    @media only screen and (max-width: 768px) {
        justify-content: center;
    }
  }
  @media only screen and (max-width: 768px) {
        width: 100%;
        margin: 0px 0px 0px 0px;
    }
}
</style>
  
<script>
import { mapState } from 'vuex' 
import NumberInput from '@/components/navigation/NumberInput.vue'
    
export default {
    components : {
        NumberInput
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
    mounted () {
    },
    methods : {
        updateCalories: function (selectedFruit) {
            this.$store.dispatch('removeFruitToCart', selectedFruit)
        },
        removeFruit : function(selectedFruit) {
            console.log(selectedFruit)
            this.$store.dispatch('removeFruitToCart', selectedFruit)            
        },
    }
    
}  
    
</script>
  