
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from 'fontawesome-svelte';

import { faAt, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faFlickr,
  faDev
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faAt,
  faTwitter,
  faInstagram,
  faGithub,
  faExternalLinkAlt,
  faFlickr,
  faDev
);

export const FA = FontAwesomeIcon;