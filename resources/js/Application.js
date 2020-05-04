import Vue from 'vue';
import Toasted from 'vue-toasted';
import request from "./Utilities/RequestHandler";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default class Application {

    constructor(config) {
        this.vue = new Vue();
        this.config = config;
    }

    build() {
        this.afterBoot();

        Vue.component('font-awesome-icon', FontAwesomeIcon);
        Vue.use(Toasted);

        this.app = new Vue({
            el: '#app',
            mounted: () => {
                //
            }
        });
    }

    request() {
        return request;
    }

    $on(event, callback) {
        this.vue.$on(event, callback);
    }

    $emit(event,...args) {
        this.vue.$emit(event,...args)
    }

    success(message) {
        Vue.toasted.show(message, {type: 'success'});
    }

    error(message) {
        Vue.toasted.show(message, {type: 'error'});
    }
}
