import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faUser,
  faHouse,
  faImage,
  faCalendar,
  faBell,
  faComment,
  faPen,
  faCircleInfo,
  faSpinner,
} from '@fortawesome/pro-regular-svg-icons';

import {
  faLinkedin,
  faApple,
  faFacebook,
  faXTwitter,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export function setupFontAwesome() {
  library.add(
    faUser,
    faHouse,
    faImage,
    faCalendar,
    faBell,
    faComment,
    faPen,
    faCircleInfo,
    faSpinner,
  );

  library.add(
    faLinkedin,
    faApple,
    faFacebook,
    faXTwitter,
    faInstagram,
    faWhatsapp,
  );
}
