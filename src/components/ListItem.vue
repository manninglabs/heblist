<template>
  <div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-5">
      <router-link :to="{ name: 'show', params: { id: hebamme.id, hebamme: hebamme }}">
        <p class="img"><img v-bind:src="'/static/images/' + hebamme.avatarFilename"></p>
      </router-link>
    </div>
    <div class="col-lg-9 col-md-9 col-sm-9 col-xs-7">
      <router-link :to="{ name: 'show', params: { id: hebamme.id, hebamme: hebamme }}">
        <h3>{{ hebamme.name }}</h3>
      </router-link>
      <p><em>{{ hebamme.areas }}</em></p>
      <p class="hidden-xs"><strong>Services: </strong>
        <span v-for="s in hebamme.services">{{ s }} </span>
      </p></p>
      <p class="visible-xs">
        <ul class="visible-xs">
          <li>Geburtsvorbereitung</li>
          <li>Beleggeburten</li>
          <li>Vor -und Nachsorge</li>
        </ul>
      </p>
      <a :href="'mailto:' + hebamme.email">{{ hebamme.email }}</a>
      <p>Tel: {{ hebamme.tel }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ListItem',
    props: ['hebamme']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
