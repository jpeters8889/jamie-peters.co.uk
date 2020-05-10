import {library, dom} from '@fortawesome/fontawesome-svg-core'
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faRedditAlien} from "@fortawesome/free-brands-svg-icons/faRedditAlien";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default () => {
    library.add(faEnvelope);
    library.add(faTwitter);
    library.add(faLinkedinIn);
    library.add(faRedditAlien);
    library.add(faGithub);

    library.add(faTimes);

    dom.watch();
}
