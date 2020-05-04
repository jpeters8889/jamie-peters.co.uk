import icons from "./icons";
import axios from "axios";
import lodash from "lodash";
import moment from "moment";

window.axios = axios;
window._ = lodash;
window.moment = moment;

icons();