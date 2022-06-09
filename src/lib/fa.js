import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "fontawesome-svelte";

import {
  faAt,
  faBorderAll,
  faExternalLinkAlt,
  faRss,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDev,
  faFlickr,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faAt,
  faBorderAll,
  faDev,
  faExternalLinkAlt,
  faFlickr,
  faGithub,
  faInstagram,
  faRss,
  faTwitter,
  faUser
);

export const FA = FontAwesomeIcon;
