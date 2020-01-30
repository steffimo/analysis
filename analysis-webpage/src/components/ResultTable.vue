<template>
  <div class="table-responsive">
    <table class="table-hover">
      <thead>
      <tr>
        <th>Placement</th>
        <th>Name</th>
        <th>Energy</th>
        <th>Date</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in list">
        <td>{{ index+1}}></td>
        <td>{{ item.deviceID }}></td>
        <td>{{ item.energy }}></td>
        <td>{{ getDateFromSession(item.sessionID) }}></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

    const axios = require('axios').default
    export default {
        name: "ResultTable",
        data: function () {
            return {
                // Funktions-Apps => DataAnalytics => Verwalten => Funktionsschlüssel als code
                url: 'https://dataorganisation-iotshowcase.azurewebsites.net/api/DataAnalytics?code=M4nNU0aLna6rQDpGc055r12G92i7e06OB0YD1CUCMW4lfmyqmZU75A==',
                htmlResponse: 'No informations',
                list: [String]
            };
        },
        /*mounted() {
            console.log("before getData2")
            this.getData();
            console.log("after getData2")
        },*/
        created() {
            console.log("before getData")
            this.getData()
            console.log("after getData")
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
