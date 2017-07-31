<template>
  <nav class="navbar navbar-toggleable-md navbar-light" style='background-color: white;'>
  	<ul class="navbar-nav w-100 ml-3">
  		<li class="nav-item">
  			<a class="nav-link" href="#">Activiteiten dashboard <span class="sr-only">(current)</span></a>
  		</li>
  		<li class="nav-item">
        <router-link :to="{name: 'BookingsIndex'}" class="nav-link">Boekingen</router-link>
  		</li>
      <li class="nav-item">
        <router-link :to="{name: 'Invoices'}" class="nav-link">Facturen</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'Users'}" class="nav-link">Ouders</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'Childs'}" class="nav-link">Kinderen</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'navbar',
  };
</script>
