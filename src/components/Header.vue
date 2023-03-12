<template>
    <div class="bg_header">
        <div class="container">
            <div class="header_section">
                <div class="logo">
                    <img src="../assets/image/netflix-logo-930x930.webp" alt="">
                </div>
                <div>
                    <input class="search" type="text" v-model="store.search" placeholder="Filter by name">
                    <button class="header_button" @click="$emit('fetchData')">
                        Cerca
                    </button>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
    import store from '../store'
    export default {
        data() {
        return {
            store,
        }
        },
        methods: {
        search() {
            console.log(search)
        }
        }
    }
  </script>

  
<style lang="scss" scoped>

    .container{
        padding: 20px 0;
    }

    .bg_header{
        background-color: #000000;
    }

    .header_section{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo{
        width: 60px;
    }

    .search{
        width: 300px;
        height: 40px;
        background-color: rgb(77, 75, 75);
        color: white;
        margin-right: 20px;
        border-radius: 20px;
        font-size: 17px;
        padding-left: 20px;
        border: 1px solid rgb(167, 163, 163);
    }
    .search::placeholder{
        color: white;
        font-size: 17px;
    }
    .header_button{
        border-radius: 20px;
        width: 60px;
        height: 40px;
    }

</style>