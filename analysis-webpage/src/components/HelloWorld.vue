<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Here are informations about your current session and the overall placements.
    </p>
    <div class = 'outputInfos'>
    <div class='outputSessions'>
      <div class="search-user">
        <input
          type="text"
          id="query-text"
          placeholder="Suche nach Username"
          :value="search_text"
        />
      </div>
      <div class ='test'>
        <p>{{htmlResponse}}</p>
      </div>
      <ul>
        <details open="open">
          <summary>Session 10</summary>
          <p>Hier werden die Results für Session 10 angezeigt.</p>
        </details>
        <details>
          <summary>Session  9</summary>
          <p>Hier werden die Results für Session 9 angezeigt.</p>
        </details>
        <p>...</p>
        <details>
          <summary>Session  1</summary>
          <p>Hier werden die Results für Session 1 angezeigt.</p>
        </details>
      </ul>
    </div>
    <div class='outputHighscore'>
      <table>
        <tr>
          <th>Placement</th>
          <th>Name</th>
          <th>Energy</th>
          <th>Date</th>
        </tr>
        <tr>
          <th>1</th>
          <th>Tim</th>
          <th>30,3</th>
          <th>21.01.2020 10:12</th>
        </tr>
      </table>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    search_text: String,
    htmlResponse: null
  },
  data: function () {
    return {
      url: 'https://dataorganisation-iotshowcase.azurewebsites.net/'
    }
  },
  methods: {
    requestAsync () {
      var xmlHttp = new XMLHttpRequest()
      xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) { this.callback(xmlHttp.responseText) }
      }
      xmlHttp.open('GET', this.url, true) // true for asynchronous
      xmlHttp.send(null)
    },
    callback (response) {
      this.htmlResponse = response
      console.log(response)
    }
  }
}
</script>

<style scoped>

  .outputSessions { float: left; width: 66%; }
  .outputHighscore { float: left; width: 33%;}

  table, th, td {
    border: 1px solid black;
  }
</style>
