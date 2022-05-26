<template>
    <div class="blinder">
        <div  class="fruitsCart">
            <article class="selectedFruit" v-for="(selectedFruit,index) in selectedFruits" :key="index">
                <div class="selectedFruit__avatar">
                    <img class="selectedFruit__avatar__img" src="../../assets/img/fruits/standard_fruit.jpeg" alt="Picture of a mix of fruits">
                </div>
                <div class="selectedFruit__info">
                    <h3 class="selectedFruit__info__name">{{selectedFruit.name}}</h3>
                    <div class="selectedFruit__info__quantity">
                        <div class="selectedFruit__info__quantity--calories"><b>{{selectedFruit.nutritions.calories}}</b> cal</div>
                        <input type="number" class="calories__counter" name="calories" step="100" placeholder="100" v-model="amountOfCalories"> 

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
            color: $tertiary-color;
            opacity: 0.6;
            font-size: 2em;
            position : absolute;
            margin-left: 80%;
            cursor: pointer;
            &:hover {
                color: $tertiary-color;
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
  /* Style the navigation links */
  #myMenu li a {
    padding: 12px;
    text-decoration: none;
    color: black;
    display: block
  }
  
  #myMenu li a:hover {
    background-color: #eee;
  }
</style>
  
<script>
import { mapState } from 'vuex' 
    
export default {
    components : {
    },
    
    data : function () {
        return {
            amountOfCalories : 100,         
        }
    },
    computed: {
        ...mapState({ allFruits: 'fruits' },{ cart: 'cart' }),
        selectedFruits: function () {
            return this.$store.getters.FRUITS_CART_GETTER
        }
    },
    mounted () {
        this.getAllFruits()
    },
    methods : {
        findFruits : function () {            
            this.filteredFruits = this.allFruits.filter(fruit => fruit.name.toUpperCase().indexOf(this.searchedFruit.toUpperCase()) > -1)
        },              
        removeFruit : function(selectedFruit) {
            console.log(selectedFruit)
            this.$store.dispatch('removeFruitToCart', selectedFruit)            
        },        
        getAllFruits: function () {
            const corsProxy = "https://evening-lake-85504.herokuapp.com/"
            const apiUrl = "https://www.fruityvice.com/api/fruit"
            fetch(`${corsProxy}${apiUrl}/all`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(res => res.json())
            .then(fruitsData => {
                this.$store.dispatch('getFruitsData', fruitsData);
            })
            .catch(responseError => {console.log(responseError)});
        }
    }
    
}  
    
</script>
  