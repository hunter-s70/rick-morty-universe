import { createApp, provide, h } from "vue";

import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "@/services/apollo/apollo-client";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faHeartPulse,
  faUserSecret,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import router from "./router";
import store from "./store";

/* add icons to the library */
library.add(faUserSecret, faSkullCrossbones, faHeartPulse);

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(store).use(router).mount("#app");
