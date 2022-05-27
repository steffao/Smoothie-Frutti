<template> 
    
    <aside>
        <input ref="searchBarInput" type="search" class="mySearch" @keyup="findFruits()" placeholder="Search..." title="Type in a fruit" v-model="searchedFruit">
        <div v-click-away="onClickAway" v-show="searchedFruit" class="fruitsFound">
            <div class="fruitUnavailable" v-if="filteredFruits.length < 1">Fruit unavailable ...</div>           
            <article class="fruitFound" v-for="(fruit,index) in filteredFruits" :key="index" @click="addNewFruit(fruit)">
                <div class="fruitFound__avatar">
                    <img v-if="fruit.imageUrl" class="fruitFound__avatar__img" :src="fruit.imageUrl" alt="">
                    <img v-else class="fruitFound__avatar__img" src="../../assets/img/fruits/standard_fruit.jpeg" alt="Picture of a mix of fruits">
                </div>
                <div class="fruitFound__info">
                    <h3 class="fruitFound__info__name">{{fruit.name}}</h3>
                    <div class="fruitFound__info__calories"><strong>{{fruit.nutritions.calories}}</strong> (cal per 100g)</div>
                </div>                
            </article>
        </div>
    </aside>
</template>
  
<style scoped lang="scss">
$primary-color : #F29F05;
$secondary-color : #F2CB05;
$tertiary-color : #D962AF;
$quadrary-color : #730217;

@keyframes downFruitsFound {
    0% {height: 0px;}
    100% {height: 200px;}    
}
  
  .mySearch {
    width: 100%;
    font-size: 18px;
    padding: 11px;
    border: 1px solid #ddd;
  }
  
  .fruitsFound {
    box-shadow: 0px 7px 30px -15px rgba(0,0,0,0.75);
    border-radius: 10px;
    overflow: hidden;
    overflow-y: scroll;
    height: 200px;
    animation: downFruitsFound .5s ease-in-out;
    .fruitUnavailable {
        display: flex;
        height: 80px;
        padding-bottom: .5em;
        padding-top: .5em;
        padding-right: .5em;
        padding-left: .5em;
    }
    .fruitFound {
        display: flex;
        height: 80px;
        padding-bottom: .5em;
        padding-top: .5em;
        padding-right: .5em;
        padding-left: .5em;
        &:hover {
            background-color: $primary-color;
            cursor: pointer;
        }
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
</style>
  
<script>
import { mapState } from 'vuex'
import fruitsData from '../../assets/db/smoothie-frutti-db.json'
    
export default {
    components : {
    },
    data : function () {
        return {
            filteredFruits : [],
            searchedFruit: '',
            searchBar : document.querySelector('input.mySearch'),
        }
    },
    computed: {
        ...mapState({ allFruits: 'fruits' }),
        ...mapState({ cart: 'cart' }),
    },
    mounted () {
        this.getAllFruits()
    },
    
    methods : {
        findFruits : function () {     
            this.filteredFruits = this.allFruits.filter(fruit => fruit.name.toUpperCase().indexOf(this.searchedFruit.toUpperCase()) > -1)
        },
        onClickAway(event) {
            this.searchedFruit = ''
        },       
        addNewFruit : function(newFruit) {
            this.$store.dispatch('addFruitToCart', newFruit)
            this.searchedFruit = ''
        },        
        getAllFruits: function () {            
                this.$store.dispatch('getFruitsData', fruitsData)
        },
    }
}  
    
</script>
  