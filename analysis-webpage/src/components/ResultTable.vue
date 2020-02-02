<template>
  <div class="table-responsive">
    <table class="table-hover">
      <thead>
      <tr>
        <th>Placement</th>
        <th>Name</th>
        <th>Energy</th>
        <th v-if=overall>Date</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in list">
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
                list: [String]
            };
        },
        /*mounted() {
            console.log("before getData2")
            this.getData();
            console.log("after getData2")
        },*/
        created() {
            this.getData()
        },
        methods: {
            async getData() {
                try {
                    var response = await axios.get(this.url)
                    console.log(response.data)
                    this.list = response.data
                } catch (e) {
                    console.log("Error getting data: " + e)
                }
            },
            getDateFromSession(sessionID) {
                return sessionID
                //return sessionID.slice(7,8)+"/"+sessionID.slice(5,6)+"/"+sessionID.slice(1,4)
            }
        }
    }
</script>

<style scoped>

</style>
