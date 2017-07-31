<template>
  <header class="page-header">
    <h1></h1>
    <!-- <div class="page_header_actions" v-for="button in buttons"> -->
      <!-- <router-link v-if="button.link" :to="button.link" :class="`btn btn-${button.type}`">
        <i :class="`fa fa-${button.icon}`" v-if="button.icon"></i> {{ button.name }}
      </router-link> -->

      <!-- <button v-if="button.action" @click="button.action" :class="`btn btn-${button.type}`">
      <i :class="`fa fa-${button.icon}`" v-if="button.icon"</i> {{ button.name }}
      </button> -->
    </div>
  </header>
</template>

<script>
  export default {
    name: 'header',
    data() {
      return {
        pageTitle: '',
        buttons: [],
      };
    },
    created() {
      // this.$bus.$on('setHeader', (newPageHeader) => {
      //   this.pageTitle = newPageHeader.pageTitle;
      //   this.buttons = newPageHeader.buttons;
      // });
    },
  };
</script>
