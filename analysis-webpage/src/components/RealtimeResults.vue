<template>
  <div>
    <div id="realtimeData">
      <ul>
        <li v-for="(player, index) in players" :key="index">
          <div class="realtimePlayer">
            <p>Player {{player}}</p>
            <RealtimePlayer ref=player></RealtimePlayer>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import RealtimePlayer from "./RealtimePlayer";

  const signalR = require('@aspnet/signalr');
  const axios = require('axios').default;

  export default {
    name: "RealtimeResults",
    components: {
      RealtimePlayer
    },
    data: function () {
      return {
        ready: false,
        players: []
      };
    },
    created() {
      this.getSignalRConnectionInfo().then(info => this.getConnectionInfo(info))
    },
    methods: {
      getConnectionInfo(info) {
        console.log(info.url + "  token  " + info.accessToken)
        this.ready = true;
        const options = {
          accessTokenFactory: () => info.accessToken
        };

        const connection = new signalR.HubConnectionBuilder()
          .withUrl(info.url, options)
          .configureLogging(signalR.LogLevel.Information)
          .build();

        connection.on('newMessage', (message) => {
          console.log("Connection from SignalR with message: ")
          console.log(message)
          this.messages.push(message);
          let json = JSON.parse(message)

          if (this.players.indexOf(json.deviceID) == -1) {
            //this is first time for a player
            this.players.push(json.deviceID);
            let rp = this.$refs[json.deviceID];
            rp.setFirstTimestamp(json.sendingTimestamp);
            rp.newChartData([json.sendingTimestamp - rp.getFirstTimestamp(), json.deviceCoordinateX, json.deviceCoordinateY, json.deviceCoordinateZ])
          } else {
            //and on the next times for all players
            let rp = this.$refs[json.deviceID];
            rp.newChartData([json.sendingTimestamp - rp.getFirstTimestamp(), json.deviceCoordinateX, json.deviceCoordinateY, json.deviceCoordinateZ])
          }
        });


        connection.onclose(() => console.log('disconnected'));

        console.log('connecting...');
        connection.start()
          .then(() => console.log('connected!'))
          .catch(console.error);

      },
      getAxiosConfig() {
        const config = {
          headers: {}
        };
        return config;
      },
      async getSignalRConnectionInfo() {
        return axios.post(API_URL + '/api/negotiate', null, this.getAxiosConfig())
          .then(resp => resp.data);
      }
    }
  }
</script>

<style scoped>
  .ul {
    list-style: none
  }
</style>
