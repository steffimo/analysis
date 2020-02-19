<template>
  <div>
    <div id="realtimeData">
      <ul>
        <li v-for="(player, index) in players" :key="index">
          <div class="realtimePlayer">
            <p>Player {{player}}</p>
            <RealtimePlayer :deviceID=player></RealtimePlayer>
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
    mounted() {
      this.getSignalRConnectionInfo().then(info => this.getConnectionInfo(info))
    },
    methods: {
      getConnectionInfo(info) {
        console.log("connInfo "+ this.players)
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
          console.log("connInfoON "+ this.players)
          let json = JSON.parse(message)
          let deviceID = json.deviceID
          if (this.players.indexOf(deviceID) == -1) {
            //this is first time for a player
            this.players.push(deviceID);
          }
            this.$emit('receivemessage', json);
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
