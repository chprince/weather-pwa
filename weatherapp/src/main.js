import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import moment from 'moment-timezone'

import axios from 'axios'
import VueAxios from 'vue-axios'

// createApp(App).use(store).use(router).use(VueAxios, axios).mount("#app");


const app = createApp(App)
/**
* @params {date} date to be converted to timeago
* @returns returns timeAgo
*/

app.config.globalProperties.$filters = {
    timeAgo(date) {
        return moment(date).fromNow()
    },
    timeMinute(datetime, tz) {
        const date = moment.unix(datetime).utc();
        const localDate = date.tz(tz);
        return localDate.format("HH:mm");
    },
    localDate(datetime, tz) {
        const date = moment.unix(datetime).utc();
        const localDate = date.tz(tz);
        return localDate;
    }
}

app.use(router).use(store).use(VueAxios, axios)
app.mount('#app')
