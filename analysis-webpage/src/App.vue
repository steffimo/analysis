<template>
  <div id="app">
    <img alt="Analytics logo" width="30%" src="./assets/analytics.png">
    <qrcode :value=url></qrcode>
    <HelloWorld msg="Welcome to Your Analytics" :currentSessionID=currentSession />
  </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    const sprintf = require('sprintf-js').sprintf;

    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        created() {
            this.count = Math.floor(Math.random() * (101));
            let today = new Date(Date.now());
            this.currentSession = sprintf('S%04d%02d%02d%03d_%02d', today.getFullYear(), today.getMonth()+1, today.getDate(), today.getMilliseconds(), this.count)
            this.url = "https://steffimo.github.io/iotgame?session="+this.currentSession
        },
        data: function () {
            return {
                currentSession: String,
                count: 1,
                url: String
            }
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
