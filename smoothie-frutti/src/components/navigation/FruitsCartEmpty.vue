<template>
    <div class="fruitsCart--empty">
        <div class="goToFruitFinder">
            <a @click="focusSearchBar">
                <i id="goToFruitFinder__btn" class="fa fa-plus-circle" aria-hidden="true"></i>
                <label for="goToFruitFinder__btn">{{emptyCartMessage}}</label>
            </a>            
        </div>        
    </div>   
</template>
  
<style scoped lang="scss">
$primary-color : #F29F05;
$secondary-color : #F2CB05;
$tertiary-color : #D962AF;
$quadrary-color : #730217;

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
    @media only screen and (max-width: 375px) {
        height: 50vh;
    }
}
</style>
  
<script>
    
export default {
    components : {
    },
    data : function () {
        return {
            emptyCartMessage : 'Your cart is empty, Pick a fruit',      
        }
    },
    methods : {
        focusSearchBar : function () {
            console.log('trigger')
            this.$emit('triggerFocusSearch');
        },
    }
    
}  
    
</script>
  