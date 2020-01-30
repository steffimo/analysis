<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img alt="QR Code Game" width="30%" src="require('../assets/qrcodeGame.png')">
    <p>
      Here are informations about your current session <b>{{currentSessionID}}</b> and the overall placements.
    </p>
    <div class='outputInfos'>
      <div class='outputSessions'>
        <div class='test'>
          <p>{{htmlResponse}}</p>
        </div>
        <ul>
          <details open="open">
            <summary>Real-time data</summary>
            <RealtimeResults></RealtimeResults>
          </details>
          <details>
          <summary> Results for the current session</summary>
          <ResultTable></ResultTable>
          </details>
        </ul>
      </div>
      <div class='outputHighscore'>
        <details>
          <summary>Overall highscore</summary>
          <ResultTable></ResultTable>
        </details>
      </div>
      <div class="search-user">
        <details>
          <summary>Search for user</summary>
        <input
          type="text"
          id="query-user"
          placeholder="Suche nach Username"
          :value="search_user"
        />
        </details>
      </div>
      <div class="search-session">
        <details>
          <summary>Search for session</summary>
          <input
            type="text"
            id="query-session"
            placeholder="Suche nach Session"
            :value="search_Session"
          />
        </details>
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
            search_user: String,
            search_session: String
        },
        data: function () {
            return {
                currentSessionID: '',
                count: 1
            }
        },
        methods: {
        },
        created() {
            this.count = Math.floor(Math.random() * (101));
            var today = new Date(Date.now());
            this.currentSessionID = "S" + today.getFullYear() + today.getMonth() + 1 + today.getDate() + today.getMilliseconds() + "_" + this.count;
            //29.1.2020, 20:07:08
            //new Date(Date.now()).toLocaleString();
        }
    }
</script>

<style scoped>

  table, th, td {
    border: 1px solid black;
  }
</style>
