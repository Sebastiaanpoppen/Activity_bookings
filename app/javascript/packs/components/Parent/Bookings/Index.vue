<template>
  <div id="Bookings">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-10 col-md-9 pb-3">
          <div class="table-responsive">
            <table class="table table-sm table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Begin</th>
                  <th>Eind</th>
                  <th>kosten</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="booking in bookings">
                 <td>{{ booking.name }}</td>
                  <td>{{ booking.start_date_time }}</td>
                  <td>{{ booking.end_date_time }}</td>
                  <td>{{ booking.price }} euro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from './../../../services/Api'
import Bookings from './../../../classes/Booking';
import { formatDateTime } from './../../../helpers/dateTimeHelpers';

  export default {
    data() {
      return {
        bookings: null,
      }
    },
    created() {
      this.getBookings();
    },
    methods: {
      getBookings() {
        Api.getCollection(Bookings).then((response) => {
          this.bookings = response.data;
          this.bookings.map(booking => {
            booking.start_date_time = formatDateTime(booking.start_date_time);
            booking.end_date_time = formatDateTime(booking.end_date_time);
          });
        });
      },
    },
    components: {
    },
  };
</script>
