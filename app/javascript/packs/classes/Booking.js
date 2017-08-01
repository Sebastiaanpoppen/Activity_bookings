import { formatDate } from './../helpers/dateTimeHelpers';
import { getGender } from './../helpers/generalHelpers';

class Activity {
  static get endpoint() {
    return 'bookings';
  }

  get starts_at() {
    return start_date_time ? formatDateTime(this.start_date_time) : '';
  }
}

export default Activity;
