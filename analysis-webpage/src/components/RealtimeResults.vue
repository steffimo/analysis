<template>
  <div id="realtimeData">
    <p>{{messages}}</p>
  </div>
</template>

<script>
    const signalR = require('@aspnet/signalr');
    const axios = require('axios').default;

    export default {
        name: "RealtimeResults",
        data: function () {
            return {
                newMessage: '',
                messages: [],
                connection: '',
                ready: false
            };
        },
        created() {
            this.getConnectionInfo().then(info => this.getConnectionInfo2(info))
        },
        methods: {
            getConnectionInfo2(info) {
                // make compatible with old and new SignalRConnectionInfo
                info.accessToken = info.accessToken || info.accessKey;
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
                    console.log(message)
                    this.messages.fill(message)
                    //TODO do something with the message
                });
                connection.onclose(() => console.log('disconnected'));

                console.log('connecting...');
                connection.start()
                    .then(() => console.log('connected!'))
                    .catch(console.error);

            }
            ,
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
