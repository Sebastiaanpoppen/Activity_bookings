<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded" style='background-color: white;'>
  	<ul class="navbar-nav w-100 ml-3">
  		<li class="nav-item">
        <router-link :to="{name: 'Dashboard'}" class="nav-link">Activiteiten Dashboard</router-link>
  		</li>
  		<li class="nav-item">
        <router-link :to="{name: 'Bookings'}" class="nav-link">Boekingen</router-link>
  		</li>
      <li class="nav-item">
        <router-link :to="{name: 'Invoices'}" class="nav-link">Facturen</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'navbar',
  };
</script>
