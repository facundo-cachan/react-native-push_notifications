import { atom } from 'recoil';

// import persistAtom from './persistAtom';

export type NotificationProps = {
  title: string;
  body: string;
  from: string;
}

const NOTIFICATIONS_KEY = 'notifications';

const notifications = atom<Array<NotificationProps>>({
  key: NOTIFICATIONS_KEY,
  default: [],
  // effects_UNSTABLE: [persistAtom(NOTIFICATIONS_KEY)]
});

export default notifications;