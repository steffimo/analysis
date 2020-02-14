<template>
  <div>
    <div id="realtimeData">
      <ul>
        <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
      </ul>
    </div>
    <div class="realtime">
      <p>Player {{players[0]}}</p>
      <GChart
        type="LineChart"
        :data="chartData"
        :options="chartOptions"
      />
    </div>
  </div>
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
        players: [],
        i: 0,
        // Array will be automatically processed with visualization.arrayToDataTable function
        chartData: [
          ['Date', 'X-Axis', 'Y-Axis', 'Z-Axis'],
          [0,0,0,0]
        ],
        fullData: [
          ['Date', 'X-Axis', 'Y-Axis', 'Z-Axis']
        ],
        chartOptions: {
          hAxis: {
            title: 'Time'
          },
          vAxis: {
            title: 'Acceleration'
          },
          width: 900,
          explorer: {
            actions: ['dragToZoom', 'rightClickToReset'],
            axis: 'horizontal',
            keepInBounds: true,
            maxZoomIn: 10.0
          }
        }
      };
    },
    created() {
      /*const refreshInterval = setInterval(() => {
        //this.chartData.push([i += 0.5, Math.random() * 1000, Math.random() * 1000, Math.random() * 1000])


        /*this.fullData.push([i += 0.5, Math.random() * 1000, Math.random() * 1000, Math.random() * 1000])
        if (this.chartData[this.chartData.length - 1][0] - this.chartData[1][0] > 20) {
          this.chartData.splice(1, 1)
        }

      }, 500)

      setTimeout(() => {
        clearInterval(this.refreshInterval)
        this.chartData = this.fullData
      }, 10000)*/

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
          this.messages.push(message);
          let json = JSON.parse(message)
          /* typeof json.deviceCoordinateX === 'number'
              ? console.log(json.deviceCoordinateX) //  für Zahlen
              : console.log(json.deviceCoordinateX+"nee")*/
          if (this.players.indexOf(json.deviceID) != -1) {
            this.players.push(json.deviceID);
          }

          this.chartData.push([this.i += 1.0, json.deviceCoordinateX, json.deviceCoordinateY, json.deviceCoordinateZ])
          //this.fullData.push([this.i += 1.0, json.deviceCoordinateX, json.deviceCoordinateY, json.deviceCoordinateZ])

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
