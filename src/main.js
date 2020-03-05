import "~/assets/style/index.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAt, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faFlickr,
  faDev
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faAt,
  faTwitter,
  faInstagram,
  faGithub,
  faExternalLinkAlt,
  faFlickr,
  faDev
);

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("FA", FontAwesomeIcon);
}
