<template>
  <div class="table">
    <table>
      <thead>
      <tr>
        <th>Placement</th>
        <th>Name</th>
        <th>Energy</th>
        <th v-if=overall>Date</th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="list.length <= 0">Loading...</tr>
      <tr v-if="list !== undefined || list.length > 0" v-for="(item, index) in list">
        <td>{{ index+1}}</td>
        <td>{{ item.deviceID }}</td>
        <td>{{ item.energy }}</td>
        <td v-if=overall>{{ getDateFromSession(item.sessionID) }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  const axios = require('axios').default
  export default {
    name: "ResultTable",
    props: {
      // Funktions-Apps => DataAnalytics bzw DataAnalyticsSession => Verwalten => Funktionsschlüssel als code
      url: String,
      overall: Boolean
    },
    data: function () {
      return {
        list: []
      };
    },
    created() {
      this.getData();

      /*setInterval(() => {
      this.getData()
      }, 10000);*/

    },
    methods: {
      async getData() {
        try {
          let response = await axios.get(this.url)
          console.log(response.data)
          this.list = response.data
        } catch (e) {
          console.log("Error getting data: " + e)
        }
      },
      getDateFromSession(sessionID) {
        return sessionID.slice(7, 9) + "/" + sessionID.slice(5, 7) + "/" + sessionID.slice(1, 5)
      }
    }
  }
</script>

<style scoped>
  .table {
    overflow: auto;
    max-height: 500px;
  }
</style>
