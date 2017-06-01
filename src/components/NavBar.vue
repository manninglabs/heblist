<template>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle"
        data-toggle="collapse" data-target="#responsive-menu">
          <span class="sr-only">Open navigation</span>
          <span><i class="fa fa-bars fa-2x"></i></span>
        </button>
        <router-link class="navbar-brand" to="/"><img src="/static/images/your-hebamme-logo.svg" alt="logo-hebamme"/></router-link>
      </div>
      <div class="collapse navbar-collapse" id="responsive-menu">
        <a href="mailto:hello@yourhebamme.com"><button class="btn btn-default cta-button pull-right">Are you a midwife? Email us to add your free profile</button></a>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
