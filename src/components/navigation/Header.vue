<template>
    <header>
        <div class="logo"><a href="">Smoothie Frutti</a></div>
    </header>
</template>

<style lang="scss" scoped>
    @font-face {
        font-family: 'Pacifico';
        src: url("../../assets/fonts/pacifico/Pacifico.ttf");
        font-style: normal;
        font-weight: 400;
    }

    header {
        height: 275px;
        width: 100%;
        background: url(../../assets/img/banner/fruits_banner_1280.jpg) no-repeat;
        background-size: 100%;
        display: flex;
        overflow: hidden;
        .logo {
            font-family: 'Pacifico', Arial, Helvetica, sans-serif;
            font-size: 4em;
            background: white;
            width: fit-content;
            height: fit-content;
            padding: 10px;
            justify-content: center;
            align-items: center;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            align-self: center;
        }
        
    }
    @media only screen and (max-width: 767px) {
        header {
            .logo {
                font-size: 3em;
            }
        }           
            
    }
    @media only screen and (max-width: 424px) {
        header {
            height: 150px;
            .logo {
            font-size: 2em;
            }               
        }                    
    }
</style>

<script>

</script>