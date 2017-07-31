<template>
  <div>
    <div class="col-md-8">
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
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      activities: null
    }
  },
  created() {
    this.getActivities()
  },
  methods: {
    getActivities() {
      this.activitiesurl = ('http://localhost:3000/activities');
      axios.get(this.activitiesurl).then(response => this.activities = response.data)
    }
  }
}
</script>
