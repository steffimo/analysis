<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Here are informations about your current session <b>{{currentSessionID}}</b> and the overall placements.
    </p>
    <div class='outputInfos'>
      <details open="open">
        <summary>Real-time data</summary>
        <RealtimeResults></RealtimeResults>
      </details>
      <details>
        <summary> Results for your current session</summary>
        <ResultTable :overall=false
                     url="https://dataorganisation-iotshowcase.azurewebsites.net/api/DataAnalyticsSession?code=YHM7hC64axqap27ImnFaaVXbIhJ5vAOLRLBcvoM5aXRIUFG0OeaYzw=="></ResultTable>
      </details>
    </div>
    <div class='outputHighscore'>
      <details>
        <summary>Overall highscore</summary>
        <ResultTable overall=true
                     url="https://dataorganisation-iotshowcase.azurewebsites.net/api/DataAnalytics?code=M4nNU0aLna6rQDpGc055r12G92i7e06OB0YD1CUCMW4lfmyqmZU75A=="></ResultTable>
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
          :value="search_session"
        />
      </details>
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
                search_user: null,
                search_session: null
            }
        },
        methods: {},
        created() {
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
