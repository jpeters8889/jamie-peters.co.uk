import Vue from 'vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import vToolTip from "v-tooltip";
import PortalVue from "portal-vue";
import Turbolinks from "turbolinks";

export default class Application {

    constructor(config) {
        this.vue = new Vue();
        this.config = config;
    }

    build() {
        Turbolinks.start();

        Vue.component('font-awesome-icon', FontAwesomeIcon);
        Vue.use(vToolTip);
        Vue.use(PortalVue);

        this.app = new Vue({
            el: '#app',
            mounted: () => {
                //
            }
        });
    }
}
