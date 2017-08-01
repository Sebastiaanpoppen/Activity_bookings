<template>
  <div id="Dashboard">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-10 col-md-9 pb-3">
          <div class="table-responsive">
            <table class="table table-sm table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Plaatsen</th>
                  <th>Begin</th>
                  <th>Eind</th>
                  <th>kosten</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="activity in activities">
                  <td>{{ activity.name }}</td>
                  <td>{{ activity.available_seats }}</td>
                  <td>{{ activity.start_date_time }}</td>
                  <td>{{ activity.end_date_time }}</td>
                  <td>{{ activity.price }} euro</td>
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
import axios from 'axios';
import Api from './../../services/Api'
import Activity from './../../classes/Activity';
import User from './../../classes/User';
import { formatDateTime } from './../../helpers/dateTimeHelpers';

export default {
  data() {
    return {
      activities: null,
      user: null,
      classRef: Activity,
    };
  },
  created() {
    this.getCollection();
    this.getUser();
  },
  methods: {
    getCollection() {
      Api.getCollection(this.classRef)
        .then((response) => {
          this.activities = response.data;
          this.activities.map(activity => {
            activity.start_date_time = formatDateTime(activity.start_date_time);
            activity.end_date_time = formatDateTime(activity.end_date_time);
          });
        });
    },
    getUser() {
      Api.getCollection(User).then((response) => {
        this.user = response.data;
      });
    },
  },
  components: {
    Api,
    Activity,
  }
};
</script>
