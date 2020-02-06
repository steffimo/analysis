<template>
  <div id="realtimeData">
    <ul v-for="(item, index) in messages" v-bind:key="index + 'itemMessage'">
      <li><b>Name: </b>{{item.user}}</li>
      <li><b>Message: </b>{{item.message}}</li>
    </ul>
  </div>
</template>

<script>
    //const apiBaseUrl = "https://dataorganisation-iotshowcase.azurewebsites.net";
    const apiBaseUrl = "http://localhost:7071"
    const signalR = require('@aspnet/signalr');

    const axios = require('axios').default;
    export default {
        name: "RealtimeResults",
        data: function () {
            return {
                newMessage: '',
                messages: [],
                connection: '',
                ready: false,
                user: "NoName"
            };
        },
        created() {
            let info = this.getConnectionInfo();
            this.getConnectionInfo2(info)
        },
        methods: {
            getConnectionInfo2(info) {
                // make compatible with old and new SignalRConnectionInfo
                //info.accessToken = info.accessToken || info.accessKey;
                //info.url = info.url || info.endpoint;
                info.url = "https://iotdata.service.signalr.net/client/?hub=iotData"
                info.accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1ODA5MzcyOTgsImV4cCI6MTU4MDkzOTA5OCwiaWF0IjoxNTgwOTM3Mjk4LCJhdWQiOiJodHRwczovL2lvdGRhdGEuc2VydmljZS5zaWduYWxyLm5ldC9jbGllbnQvP2h1Yj1pb3REYXRhIn0.dfqCBMYz7FPpgEIk8IrPmVz5dILoEXqiZJdvxS-s1wE"

                this.ready = true;
                const options = {
                    accessTokenFactory: () => info.accessToken
                };

                let options2 = {
                    skipNegotiation: true,
                    transport: signalR.HttpTransportType.WebSockets
                }

                const connection = new signalR.HubConnectionBuilder()
                    .withUrl(info.url, options)
                    .configureLogging(signalR.LogLevel.Information)
                    .build();

                connection.on('newMessage', (message) => {
                    console.log("New Message: " + message)
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
                    withCredentials: false,
                    //origin: "http://localhost:8080",
                    headers: {}
                };
                return config;
            },
            async getConnectionInfo() {
                return axios.post(`${apiBaseUrl}/api/negotiate`, null, this.getAxiosConfig())
                    .then(resp => resp.data);
            },

            async sendMessage(sender, messageText) {
                return axios.post(`${apiBaseUrl}/api/DataIngestion`, {
                    sender: sender,
                    text: messageText
                }, this.getAxiosConfig()).then(resp => resp.data);
            }
        }

        /*created() {
            let logError
            this.connection = new signalR.HubConnectionBuilder()
                .withUrl(apiBaseUrl+"/api")
                .build()
            this.connection.start().then((response) => {
                console.log('connection established', response);
            })
                .catch(logError);
            console.log(logError);
        }*/
        /*mounted() {
            this.connection.start();
            this.connection.on("newMessage", (message) => {
                console.log("New Message: " + message)
            })
        }*/
    }
</script>

<style scoped>

</style>
