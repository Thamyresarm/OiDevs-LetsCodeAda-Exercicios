import { getTime } from 'date-fns';

function getTimestamp() {
  return getTime(new Date());
}

export { getTimestamp };
