<template>
  <div>
    <div class="container-fluid hidden-xs" id="find_midwife">
      <h2>Find a perfect midwife by:</h2>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <h3>City</h3>
          <hr>
          <ul>
            <li><a href="#">Berlin</a></li>
            <li><a href="#">Hamburg</a></li>
            <li><a href="#">Munich</a></li>
            <li><a href="#">Frankfurt</a></li>
            <li><a href="#">Köln</a></li>
            <li><a href="#">View all</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <h3>Services</h3>
          <hr>
          <ul>
            <li><a href="#">Yoga</a></li>
            <li><a href="#">Risk Management</a></li>
            <li><a href="#">Home Visits</a></li>
            <li><a href="#">Breastfeeding</a></li>
            <li><a href="#">Baby Massage</a></li>
            <li><a href="#">View all</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <h3>Language</h3>
          <hr>
          <ul>
            <li><a href="#">German</a></li>
            <li><a href="#">English</a></li>
            <li><a href="#">Chinese</a></li>
            <li><a href="#">Russian</a></li>
            <li><a href="#">French</a></li>
            <li><a href="#">View all</a></li>
          </ul>
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
    <div class="container-fluid hidden-xs" id="group-link">
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
    name: 'Footer'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
