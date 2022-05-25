<template>
    <div class="blinder">
        <div  class="fruitsCart">
            <article class="selectedFruit" v-for="(selectedFruit,index) in selectedFruits" :key="index">
                <div class="selectedFruit__avatar">
                    <img class="selectedFruit__avatar__img" src="../../assets/img/fruits/standard_fruit.jpeg" alt="Picture of a mix of fruits">
                </div>
                <h3 class="selectedFruit__name">{{selectedFruit.name}}</h3>
                <div class="selectedFruit__calories"><strong>{{selectedFruit.nutritions.calories}}</strong> cal</div>
                <input type="number" class="calories__counter" name="calories" step="100" placeholder="100" v-model="amountOfCalories">
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
.blinder {
    width: 50%; 
  .fruitsCart {    
    min-height: 400px;
    .selectedFruit {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        padding-bottom: .5em;
        padding-top: .5em;
        padding-right: .5em;
        padding-left: .5em;
        &__avatar{
            border-radius: 10px;            
            height: 100%;
            overflow: hidden;
            margin-right: 1.5em;
            &__img {
                height: 100%;                
            }
        }
        &__info {
            &__name {
                font-weight: bold;
            }
            &__calories {
                font-style: italic;
            }
            @media only screen and (max-width: 375px) {
                &__calories {
                    font-size: .8em;
                }                
            }

        }
    }
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
                console.log(fruitsData);
                this.$store.dispatch('getFruitsData', fruitsData);
            })
            .catch(responseError => {console.log(responseError)});
        }
    }
    
}  
    
</script>
  