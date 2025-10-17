import { library } from '@fortawesome/fontawesome-svg-core';

// Import only the icons you need to reduce bundle size
import {
  faUser,
  faHouse,
  faImage,
  faCalendar,
  faBell,
  faComment,
  faPen,
  faCircleInfo,
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
