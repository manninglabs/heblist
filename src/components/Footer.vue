<template>
  <div>
    <div class="container-fluid hidden-xs" id="find_midwife">
      <h2>Find an English Speaking Hebamme by:</h2>
      <div class="row">
      <h3>Choose an Area of Berlin</h3><hr/>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 hidden-xs">
          <ul>
            <li><router-link to="/list">Charlottenburg</router-link></li>
            <li><router-link to="/list">Friedrichshain</router-link></li>
            <li><router-link to="/list">Hellersdorf</router-link></li>
            <li><router-link to="/list">Hohenschönhausen</router-link></li>
            <li><router-link to="/list">Köpenick</router-link></li>
            <li><router-link to="/list">Kreuzberg</router-link></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 hidden-xs">
          <ul>
            <li><router-link to="/list">Lichtenberg</router-link></li>
            <li><router-link to="/list">Marzahn</router-link></li>
            <li><router-link to="/list">Mitte</router-link></li>
            <li><router-link to="/list">Neukölln</router-link></li>
            <li><router-link to="/list">Pankow</router-link></li>
            <li><router-link to="/list">Prenzlauer Berg</router-link></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 hidden-xs">
          <ul>
            <li><router-link to="/list">Reinickendorf</router-link></li>
            <li><router-link to="/list">Schöneberg</router-link></li>
            <li><router-link to="/list">Spandau</router-link></li>
            <li><router-link to="/list">Steglitz</router-link></li>
            <li><router-link to="/list">Tempelhof</router-link></li>
            <li><router-link to="/list">Tiergarten</router-link></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 hidden-xs">
          <ul>
            <li><router-link to="/list">Treptow</router-link></li>
            <li><router-link to="/list">Wedding</router-link></li>
            <li><router-link to="/list">Weißensee</router-link></li>
            <li><router-link to="/list">Wilmersdorf</router-link></li>
            <li><router-link to="/list">Zehlendorf</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container-fluid hidden-xs" id="need_help">
      <div class="row">
        <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
          <span>Have Comments or Questions? Contact Us!</span>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <a href="mailto:hello@hebammelist.com">hello@hebammelist.com</a>
        </div>
      </div>
    </div>
    <div class="container-fluid" id="footer">
      <p>Are you an English speaking Hebamme? <a href="mailto:hello@hebammelist.com"><br/>Email us</a> to join “Your Hebamme” today!</p>
      <ul class="list-unstyled">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/">Find Hebamme</router-link></li>
      </ul>
      <p class="copyright">Copyright © 2017 HebammeList, Inc.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
