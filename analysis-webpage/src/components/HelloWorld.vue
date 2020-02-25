<template>
  <div class='hello'>
    <div id="StartButton">
      <button @click="startCountdown" :disabled='clicked'>Start IT</button>
    </div>
    <div class="countdown-wrapper">
      <div id="countdown" style="display: none;">
        <p>{{counter}}</p>
      </div>
      <div id="timeover" style="display: none;">
        <p>Time is over!</p>
      </div>
    </div>
    <h1>{{ msg }}</h1>
    <div class='outputWrapperWrapper'>
      <div class='outputWrapper'>
        <div class='realtime'>
          <details open="open">
            <summary>Realtime data</summary>
            <RealtimeResults></RealtimeResults>
          </details>
        </div>
        <div class='outputSession'>
          <details>
            <summary>Results for your current session</summary>
            <ResultTable :overall=false
                         :url=url_session
                         ref="session"></ResultTable>
          </details>
        </div>
        <div class='outputHighscore'>
          <details>
            <summary>Overall highscore</summary>
            <ResultTable :overall=true
                         :url=url_overall
                         ref="overall"></ResultTable>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ResultTable from "./ResultTable";
  import RealtimeResults from "./RealtimeResults";
  import {EventBus} from '../eventbus.js';

  export default {
    name: 'HelloWorld',
    components: {RealtimeResults, ResultTable},
    props: {
      msg: String,
      currentSessionID: String
    },
    data: function () {
      return {
        clicked: false,
        counter: 10,
        url_overall: API_URL + '/api/DataAnalytics',
        url_session: undefined
      }
    },
    methods: {
      startCountdown() {
        this.clicked = true;
        let startTime = Date.now();
        this.url_session = API_URL + '/api/DataAnalyticsSession?session=' + this.currentSessionID + '&begin=' + startTime;
        EventBus.$emit('startgame', startTime);
        document.getElementById('countdown').style.display = "block";
        this.countdownTimer();
      },
      async countdownTimer() {
        if (this.counter !== 0) {
          setTimeout(() => {
            this.counter--;
            this.countdownTimer();
          }, 1000);
        } else {
          //TODO unschöner Stil für vuejs
          document.getElementById('countdown').style.display = "none";
          document.getElementById('timeover').style.display = "block";
          console.log(this.url_session)
          await this.$refs.session.getData();
          await this.$refs.overall.getData();
        }
      }
    }
  }
</script>

<style scoped>
  summary{
    font-size: large;
  }

  .outputWrapperWrapper {
    margin: 1em auto;
    display: table;
  }

  .outputWrapper {
    display: table-cell;
    text-align: left;
  }

  .countdown-wrapper {
    font-size: xx-large;
  }

</style>

