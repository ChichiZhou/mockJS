<template>
  <div id="app">
    <h1>MOCKJS TEST</h1>
    <div>
      <button @click="getList">Click to get list</button>
    </div>
    <div>
      <button @click="addGood">Click to add one good</button>
    </div>
    <div>
      <button @click="getOneGood(2)">Click to get one good</button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    getList: function () {
      this.axios.get('/api/goodslist')
        .then(response => console.log(response.data))
    },
    addGood: function () {
      this.axios.post('/api/addonegood',
        {
          id: 10,
          name: 'aaa'
        })
        .then(response => console.log(response.data))
    },
    getOneGood: function (itemID) {
      this.axios.get(`/api/getOneGood/${itemID}`).then(response => console.log(response.data))
    }
  }
}
</script>
