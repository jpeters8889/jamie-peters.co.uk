import Vue from 'vue';
import Application from "./Application";
import './Plugins';

Vue.config.productionTip = false;

import './components';

(function() {
    this.app = function(config) {
        return new Application(config);
    }
}).call(window);
