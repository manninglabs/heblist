<template>
  <div>
    <link rel="stylesheet" type="text/css" href="/static/css/hebamme-info-style.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/hebamme-info-style-max-767px.css" media="screen and (max-width: 767px)" />
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle"
          data-toggle="collapse" data-target="#responsive-menu">
            <span class="sr-only">Open navigation</span>
            <span><i class="fa fa-bars fa-2x"></i></span>
          </button>
          <a class="navbar-brand" href="#">HebammeList</a>
        </div>
        <div class="collapse navbar-collapse" id="responsive-menu">
          <button class="btn btn-default cta-button pull-right">List your practice on HebammeList</button>
        </div>
      </div>
    </nav>
    <div class="container-fluid" id="hebamme-info">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12" id="hebamme-contacts">
          <p><img src="/static/images/avatar-1.png" alt="avatar"></p>
          <div class="hidden-xs">
            <a href="#">See all 7 photos</a>
            <p>Prezlauer Alle 90<br>10439 Berlin</p>
            <a href="#">janebrown@gmail.com</a>
            <a href="#">www.janebrownhebamme.com</a>
            <p>Tel: 030-96064920 </p>
            <p>Tel: 0170-5138374</p>
          </div>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12" id="info">
          <h3>Jane Brown</h3>
          <p class="visible-xs" id="city">Prenzlauberg, Pankow, Mitte</p><hr/>
          <h4>Professional Statement</h4>
          <p class="hidden-xs"><em>“In 2002, I completed my training as a midwife. I spent the three years of intensive apprenticeship in Baden-Wurttemberg in the beautiful Tübingen and blown the Swabian air around my nose. But my Berlin roots were stronger and I returned.
          After 2 years working in a hospital I followed a loud cry of my inner voice in the freelance and in 2004 she has been managing many families in her pregnancy and after birth in her home environment. I also offered the support during the birth as a midwife for a couple of years, and the women were also very happy to accompany them during these hours”.</em></p>
           <p class="visible-xs"><em>“In 2002, I completed my training as a midwife. I spent the three years of intensive apprenticeship in Baden-Wurttemberg in the beautiful Tübingen and blown the Swabian air around my nose..."</em></p>
           <a href="#" class="visible-xs">Read More</a><hr/>
          <h4>Education</h4>
          <p>Medical School - Albert Einstein College of Medicine<br>
          Long Island Jewish Medical Center (Residency)</p><hr/>
          <h4>Services</h4>
          <p>advice and assistance, home visits, family midwife, preventive screening, shift service in clinic, risk management, baby swimming, homebirth, babymassage, yoga</p><hr/>
          <h4>Courses</h4>
          <p>Name of the course number one<br>
          Name of the course number two</p><hr/>
          <h4>Areas</h4>
          <p>Berlin (Prenzlauerberg, Pankow, Mitte)</p><hr/>
          <h4>Languages</h4>
          <p>German, English, French</p><hr/>
          <div class="visible-xs">
            <h4>Contact Info</h4>
            <p>Prezlauer Alle 90<br>10439 Berlin</p>
            <a href="#">janebrown@gmail.com</a>
            <p class="phone">Tel: 030-96064920</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid hidden-xs" id="need_help">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <span>Need Help Booking or Registering?</span>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <a href="#">service@hebammelist.com</a>
        </div>
      </div>
    </div>
    <div class="container-fluid text-center hidden-xs" id="group-link">
      <div class="row">
        <div class="col-lg-12">
          <ul>
            <li><a href="#">HebammeList</a></li><span>></span>
            <li><a href="#">Find a midwife</a></li><span>></span>
            <li><a href="#">Berlin</a></li><span>></span>
            <li><a href="#">Berlin Midwives</a></li><span>></span>
            <li><a class="active" href="#">Jane Brown</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container-fluid" id="footer">
      <p class="hidden-xs">Are you an excellent midwife? <a href="#">Join HebammeList today!</a></p>
      <ul class="list-unstyled">
        <li class="hidden-xs"><a href="#">Home</a></li>
        <li class="hidden-xs"><a href="#">About</a></li>
        <li class="hidden-xs"><a href="#">Contact</a></li>
        <li class="hidden-xs"><a href="#">Pricing</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
      <p class="copyright">Copyright © 2017 HebammeList, Inc.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Show',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
