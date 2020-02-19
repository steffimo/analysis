<template>
  <GChart
    type="LineChart"
    :data="chartData"
    :options="chartOptions"
  />
</template>

<script>
  import {GChart} from 'vue-google-charts';
  import { EventBus } from '../eventbus.js';

  export default {
    name: "RealtimePlayer",
    components: {
      GChart
    },
    props: {
      deviceID: String
    },
    data: function () {
      return {
        firstTimestamp: 0,
        // Array will be automatically processed with visualization.arrayToDataTable function
        chartData: [
          ['Date', 'X-Axis', 'Y-Axis', 'Z-Axis'],
          [0, 0, 0, 0]
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
      console.log("Created method")
      EventBus.$on('receivemessage', (json) => {
        console.log("event received")
        console.log(json)
        if (this.deviceID === json.deviceID) {
          console.log(this.deviceID)
          console.log(this.firstTimestamp)
          if(this.firstTimestamp === 0){
            console.log(json.sendingTimestamp)
            this.firstTimestamp = json.sendingTimestamp;
          }
          console.log("Push it")
          this.chartData.push([json.sendingTimestamp - this.firstTimestamp, json.deviceCoordinateX, json.deviceCoordinateY, json.deviceCoordinateZ])
        }
      });
    }
  }
</script>

<style scoped>

</style>
