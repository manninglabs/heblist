<template>
  <div>
    <link rel="stylesheet" type="text/css" href="/static/css/list-style.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/list-style-max-767px.css" media="screen and (max-width: 767px)" />
    <site-nav-bar />
    <list-filter />
    <div class="container-fluid" id="list">
      <div class="row element-list" v-for="p in profiles">
        <list-item v-bind:hebamme="p"></list-item>
      </div>
    </div>
    <list-pagination />
    <site-footer />
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      profiles: [
        {
          name: 'Jane Brown',
          avatarFilename: 'avatar-1.png',
          services: ['advice and assistance', 'home visits', 'family midwife', 'preventive screening', 'shift service in clinic', 'risk management', 'baby swimming', 'homebirth', 'babymassage', 'yoga', 'preventive screening', 'shift service in clinic'],
          areas: 'Berlin (Prenzlauberg, Pankow, Mitte)',
          speaks: 'English, German'
        },
        {
          name: 'Jane Brown',
          avatarFilename: 'avatar-2.png',
          services: ['advice and assistance', 'home visits', 'family midwife', 'preventive screening', 'shift service in clinic', 'risk management', 'baby swimming', 'homebirth', 'babymassage', 'yoga', 'preventive screening', 'shift service in clinic'],
          areas: 'Berlin (Prenzlauberg, Pankow, Mitte)',
          speaks: 'English, German'
        },
        {
          name: 'Jane Brown',
          avatarFilename: 'avatar-3.png',
          services: ['advice and assistance', 'home visits', 'family midwife', 'preventive screening', 'shift service in clinic', 'risk management', 'baby swimming', 'homebirth', 'babymassage', 'yoga', 'preventive screening', 'shift service in clinic'],
          areas: 'Berlin (Prenzlauberg, Pankow, Mitte)',
          speaks: 'English, German'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
