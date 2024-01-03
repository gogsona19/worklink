<template>
    <div class="main_news_block">  
        <div class="news_bx">
            <div class="head"><i class="bi bi-app"></i>
                <span class="hd_title">განცხადება</span>
            </div>
            <h3 class="display-6">{{f}}</h3>
        </div>
        <div class="news_bx"><div class="head"><i class="bi bi-app"></i><span class="hd_title">რეზიუმე</span></div><h3 class="display-6">41.345</h3></div>
        <div class="news_bx"><div class="head"><i class="bi bi-app"></i><span class="hd_title">კომპანია</span></div><h3 class="display-6">382</h3></div>
        <div class="news_bx"><div class="head"><i class="bi bi-app"></i><span class="hd_title"></span></div></div>
      
    </div>
</template>
<script>

export default {
  
    data(){
        
        return{
            f : 173000
        }
    },
    mounted(){
        setInterval(this.randomnumber, 3000)
           
    },
    methods:{
        randomnumber(){
            this.f = Math.floor(Math.random() * (174001 - 173000 + 1)) + 173000
        },
        handleMouseMove(event) {
            // Access the div element using $refs
            const div = this.$refs.movableDiv;

            // Calculate the new position based on mouse coordinates
            const newX = event.clientX - div.offsetWidth / 2;
            const newY = event.clientY - div.offsetHeight / 2;

            // Update the div's position
            div.style.left = newX + 'px';
            div.style.top = newY + 'px';
        }
    }
}
</script>
<style scoped>
.main_news_block{
    display: grid;
    width: 100%;
    padding: 20px;
    grid-template-columns: 50% 50%;
    .news_bx{
        background: linear-gradient(332deg, #0b0818 0%, #2c1e66 342%);
        margin:10px;
        border-radius:20px;
        .head{
            width: 100%;
            text-align: left;
            float: left;
            padding:10px;
        }
    }
}
.hd_title{
    color: white;
    margin-left: 10px;
    padding-top:2px;
    display: inline-block;
    letter-spacing: 0.1em;
}
.head i.bi.bi-app {
    float: left;
    font-size: 24px;
}
.news_bx:hover {
    color: white;
    background: linear-gradient(45deg, #e4de7d, #8f0202) !important;
}

</style>