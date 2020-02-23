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
    <div class='realTimeInfos'>
      <details open="open">
        <summary>Real-time data</summary>
        <RealtimeResults></RealtimeResults>
      </details>
    </div>
    <p>
      Here are informations about your current session <b>{{currentSessionID}}</b> and the overall placements.
    </p>
    <div class='outputWrapperWrapper'>
      <div class='outputWrapper'>
        <div class='outputSession'>
          <details>
            <summary> Results for your current session</summary>
            <ResultTable :overall=false
                         :url=url_session
                         :reloading=reload></ResultTable>
            <!--<ResultTable :overall=false
                         :url="'api/DataAnalyticsSession?code=YHM7hC64axqap27ImnFaaVXbIhJ5vAOLRLBcvoM5aXRIUFG0OeaYzw==&session=' + currentSessionID"></ResultTable>-->
          </details>
        </div>
        <div class='outputHighscore'>
          <details>
            <summary>Overall highscore</summary>
            <ResultTable :overall=true
                         :url=url_overall
                         :reloading=reload></ResultTable>
            <!-- if reload changes, reloading will be changed and updated from ResultTable will be called -->
            <!--<ResultTable :overall=true
                         :url="'api/DataAnalytics?code=M4nNU0aLna6rQDpGc055r12G92i7e06OB0YD1CUCMW4lfmyqmZU75A=='"></ResultTable>-->
          </details>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ResultTable from "./ResultTable";
  import RealtimeResults from "./RealtimeResults";

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
        reload: false,
        startTime: 0,
        counter: 10,
        url_overall: API_URL + '/api/DataAnalytics',
        url_session: API_URL + '/api/DataAnalyticsSession?session=' + this.currentSessionID + '&begin=' + this.startTime
      }
    },
    methods: {
      startCountdown() {
        this.clicked = true;
        this.startTime = Date.now();
        document.getElementById('countdown').style.display = "block";
        this.countdownTimer();
      },
      countdownTimer() {
        if (this.counter !== 0) {
          setTimeout(() => {
            this.counter--;
            this.countdownTimer();
          }, 1000);
        } else {
          document.getElementById('countdown').style.display = "none";
          document.getElementById('timeover').style.display = "block";
          this.url_session = API_URL + '/api/DataAnalyticsSession?session=' + this.currentSessionID + '&begin=' + this.startTime;
          this.reload = true;
        }
      }
    }
  }
</script>

<style scoped>
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

