<template>
  <div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
      <router-link :to="{ name: 'show', params: { id: hebamme.id }}">
        <p class="img"><img v-bind:src="'/static/images/' + hebamme.avatarFilename"></p>
      </router-link>
    </div>
    <div class="col-lg-9 col-md-9 col-sm-9 col-xs-6">
      <router-link :to="{ name: 'show', params: { hebamme: hebamme }}">
        <h3>{{ hebamme.name }}</h3>
      </router-link>
      <p class="hidden-xs"><strong>Services: </strong>
        <span v-for="s in hebamme.services">{{ s }} </span>
      </p>
      <p class="hidden-xs"><strong>Area: </strong>{{ hebamme.areas }}</p>
      <p class="hidden-xs"><strong>Speaks: </strong>{{ hebamme.speaks }}</p>
      <p class="visible-xs"><em>{{ hebamme.areas }}</em></p>
      <p class="visible-xs">Geburtsvorbereitung<br>
        Beleggeburten<br>
        Vor -und Nachsorge</p>
      <a class="visible-xs" href="#">{{ hebamme.email }}</a>
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
