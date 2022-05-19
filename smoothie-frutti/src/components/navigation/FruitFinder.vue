<template>    
    <aside>
        <input type="search" id="mySearch" @keyup="findFruit()" placeholder="Search.." title="Type in a category" v-model="searchedFruit">
        <ul v-show="searchedFruit" id="fruitsList">
            <li><article>
                <h3>Banana</h3>
                <div>3KC</div>
            </article></li>
            <li><article>
                <h3>Mango</h3>
                <div>6KC</div>
            </article></li>
            <li><article>
                <h3>Feijoa</h3>
                <div>38KC</div>
            </article></li>
            <li><article>
                <h3>Orange</h3>
                <div>7KC</div>
            </article></li>
            <li><article>
                <h3>Cherry</h3>
                <div>3KC</div>
            </article></li>            
        </ul>
    </aside>
</template>
  
<style scoped lang="scss"> 
  
  /* Style the search box */
  #mySearch {
    width: 100%;
    font-size: 18px;
    padding: 11px;
    border: 1px solid #ddd;
  }
  
  /* Style the navigation menu */
  #myMenu {
    list-style-type: none;
    padding: 0;
    margin: 0;
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
    
export default {
    components : {
    },
    data : function () {
        return {
        searchedFruit: ''            
        }
    },
    mounted () {
        this.getAllFruits()

    },
    methods : {
        findFruit: function() {
            console.log(this.searchedFruit)
            var a, i;
            const fruitsList = document.getElementById("fruitsList")
            const filter = this.searchedFruit.toUpperCase();
            let fruitFound = fruitsList.getElementsByTagName("li");
            for (i = 0; i < fruitFound.length; i++) {
                let a = fruitFound[i].getElementsByTagName("h3")[0];
                if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                fruitFound[i].style.display = "";
                } else {
                fruitFound[i].style.display = "none";
                }
            }
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
                .then(fruits => {
                    console.log(fruits);
                })
                .catch(responseError => {console.log(responseError)});
        }
    }
    
}  
    
</script>
  