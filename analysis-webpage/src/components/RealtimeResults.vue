<template>
  <div id="realtimeData">
    <ul>
      <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
    </ul>
  </div>
  <!--<div class="realtime">
  <p>Player </p>
  <GChart
    type="LineChart"
    :data="chartData"
    :options="chartOptions"
  />
  </div>-->
</template>

<script>
  import {GChart} from 'vue-google-charts';

  const signalR = require('@aspnet/signalr');
  const axios = require('axios').default;

  export default {
    name: "RealtimeResults",
    components: {
      GChart
    },
    data: function () {
      return {
        ready: false,
        messages: [],
        // Array will be automatically processed with visualization.arrayToDataTable function
        chartData: [
          ['Date', 'X-Axis', 'Y-Axis', 'Z-Axis'],
          ['2014', 1000, 400, 200],
          ['2015', 1170, 460, 250],
          ['2016', 660, 1120, 300],
          ['2017', 1030, 540, 350]
        ],
        chartOptions: {
            hAxis: {
              title: 'Time'
            },
            vAxis: {
              title: 'Acceleration'
            }
        }
      };
    },
    created() {
      this.getConnectionInfo().then(info => this.getConnectionInfo2(info))
    },
    methods: {
      getConnectionInfo2(info) {
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
          this.messages.push(message)

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
      async getConnectionInfo() {
        return axios.post('/api/negotiate', null, this.getAxiosConfig())
          .then(resp => resp.data);
      }
    }
  }
</script>

<style scoped>

</style>
