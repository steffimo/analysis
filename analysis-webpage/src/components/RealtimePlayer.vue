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
        if (this.deviceID === json[0].deviceID) {
          console.log(this.deviceID)
          if(this.firstTimestamp === 0){
            this.firstTimestamp = json[0].sendingTimestamp;
          }
          console.log("Push it")
          for (let element in json){
            this.chartData.push([json[element].sendingTimestamp - this.firstTimestamp, json[element].deviceCoordinateX, json[element].deviceCoordinateY, json[element].deviceCoordinateZ])
          }
        }
      });
    }
  }
</script>

<style scoped>

</style>
