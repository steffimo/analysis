<template>
  <GChart
    type="LineChart"
    :data="chartData"
    :options="chartOptions"
  />
</template>

<script>
  import {GChart} from 'vue-google-charts';

  export default {
    name: "RealtimePlayer",
    components: {
      GChart
    },
    data: function () {
      return {
        firstTimestamp: Number,
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
    methods: {
      setFirstTimestamp(timestamp) {
        this.firstTimestamp = timestamp;
      },
      getFirstTimestamp() {
        return this.firstTimestamp;
      },
      newChartData(msg) {
        this.chartData.push(msg);
      }
    }
  }
</script>

<style scoped>

</style>
