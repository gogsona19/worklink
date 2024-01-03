<template>
    <div>
        <h3>Bitcoin-ის ფასი</h3>
          <div v-for="(item, index) in info" :key="index.id">
            {{item.code}} <i class="bi bi-lightning-charge"></i>
            {{item.rate}} <i class="bi bi-lightning-charge"></i>
          
            {{item.rate_float}}
          </div>
    </div>
</template>
<style scoped>

</style>
<script>

import axios from 'axios'

export default {
  data(){
    return{
      info: null,
      loading: true,
      errored: false
    }
  },
    filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
              console.log(this.info)
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }

}
</script>