<template>
  <div>
    <link rel="stylesheet" type="text/css" href="/static/css/hebamme-info-style.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/hebamme-info-style-max-767px.css" media="screen and (max-width: 767px)" />
    <site-nav-bar />
    <div class="container-fluid" id="hebamme-info">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12" id="hebamme-contacts">
          <p><img :src="'/static/images/' + hebamme.avatarFilename" alt="avatar"></p>
          <div class="hidden-xs">
            <a href="#">See all 7 photos</a>
            <p>{{ hebamme.address }}</p>
            <a href="#">{{ hebamme.email }}</a>
            <a href="#">{{ hebamme.website }}</a>
            <p>Tel: {{ hebamme.tel }} </p>
          </div>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12" id="info">
          <h3>{{ hebamme.name }}</h3>
          <p class="visible-xs" id="city">{{ hebamme.areas }}</p><hr/>
          <h4>Professional Statement</h4>
          <p class="hidden-xs"><em>“{{ hebamme.professionalStatement }}”.</em></p>
           <p class="visible-xs"><em>“{{ hebamme.professionalStatement }}"</em></p>
           <a href="#" class="visible-xs">Read More</a><hr/>
          <h4>Education</h4>
          <p>Medical School - Albert Einstein College of Medicine<br>
          Long Island Jewish Medical Center (Residency)</p><hr/>
          <h4>Services</h4>
          <p><p v-for="s in hebamme.services">{{ s }}</p></p><hr/>
          <h4>Courses</h4>
          <p>{{ hebamme.courses }}</p><hr/>
          <h4>Areas</h4>
          <p>{{ hebamme.areas }}</p><hr/>
          <h4>Languages</h4>
          <p>{{ hebamme.languages }}</p><hr/>
          <div class="visible-xs">
            <h4>Contact Info</h4>
            <p>{{ hebamme.address }}</p>
            <a href="#">{{ hebamme.email }}</a>
            <p class="phone">Tel: {{ hebamme.tel }}</p>
          </div>
        </div>
      </div>
    </div>
    <site-footer />
  </div>
</template>

<script>
export default {
  name: 'Show',
  props: ['hebamme'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
