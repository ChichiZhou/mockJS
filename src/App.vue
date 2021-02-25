<template>
  <div id="app">
    <h1>MOCKJS TEST</h1>
    <button @click="getList">Click to get list</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    getList: function () {
      this.axios.get('/api/goodslist')
        .then(response => console.log(response.data))
    }
  }
}
</script>
