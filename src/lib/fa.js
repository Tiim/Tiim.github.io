import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "fontawesome-svelte";

import {
  faAt,
  faBorderAll,
  faExternalLinkAlt,
  faRss,
  faHashtag,
  faUser,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDev,
  faFlickr,
  faGithub,
  faInstagram,
  faMastodon,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faAt,
  faBorderAll,
  faCommentAlt,
  faDev,
  faExternalLinkAlt,
  faFlickr,
  faGithub,
  faHashtag,
  faInstagram,
  faMastodon,
  faRss,
  faTwitter,
  faUser
);

export const FA = FontAwesomeIcon;
