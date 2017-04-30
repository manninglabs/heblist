<template>
  <div>
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
    <div class="container-fluid" id="homepage-banner">
      <div class="row">
        <div class="col-lg-12">
          <h1>FIND A PERFECT MIDWIFE IN GERMANY</h1>
          <router-link to="/show">Go to Bar</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col15-lg-4 col15-md-4 col15-sm-4 hidden-xs"></div>
        <div class="col15-lg-3 col15-md-3 col15-sm-3 column">
          <div class="btn-group btn-block">
            <button class="btn btn-default dropdown-toggle btn-block cta-button pull-right" data-toggle="dropdown"><span class="pull-left">Choose Area</span><i class="fa fa-sort-down fa-lg pull-right"></i></button>
            <ul class="dropdown-menu pull-right">
              <li>City 1</li>
              <li>City 2</li>
              <li>City 3</li>
              <li>City 4</li>
            </ul>
          </div>
        </div>
        <div class="col15-lg-3 col15-md-3 col15-sm-3 column">
          <input type="text" name="Zipcode" placeholder="Zipcode" class="btn-group btn-block">
        </div>
        <div class="col15-lg-2 col15-md-2 col15-sm-2 column">
          <button type="button" class="btn btn-default">
            Search
          </button>
        </div>
        <div class="col15-lg-3 col15-md-3 col15-sm-3 hidden-xs"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="hidden-lg hidden-md hidden-sm col-xs-1"></div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-10">
          <h3>How HebammeList will help you as a patient?</h3>
        </div>
        <div class="hidden-lg hidden-md hidden-sm col-xs-1"></div>
      </div>
      <div class="row info">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <p class="icon"><i class="fa fa-bolt fa-4x"></i></p>
          <h4>Find a Hebamme fast</h4>
          <p>In 2002, I completed my training as a midwife. I spent the three years of intensive apprenticeship in Baden-Wurttemberg in the beautiful</p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <p class="icon"><i class="fa fa-envira fa-4x"></i></p>
          <h4>Find a Hebamme easily</h4>
          <p>In 2002, I completed my training as a midwife. I spent the three years of intensive apprenticeship in Baden-Wurttemberg in the beautiful</p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <p class="icon"><i class="fa fa-heart fa-4x"></i></p>
          <h4>Make sure she is perfect for you</h4>
          <p>In 2002, I completed my training as a midwife. I spent the three years of intensive apprenticeship in Baden-Wurttemberg in the beautiful</p>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row info">
        <div class="col-lg-4 col-md-4 col-sm-3 hidden-xs"></div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <button class="btn btn-default cta-button btn-block body-button">Learn more about HebammeList</button>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-3 hidden-xs"></div>
      </div>
    </div>
    <div class="container-fluid" id="exelent_midwife">
      <div class="row">
        <h3>Are you an excellent midwife?</h3>
        <ul>
          <li>— List your practice now and reach millions of patients list your practice now and reach millions of patients</li>
          <li>— Build and strengthen your online presence build and strengthen your online presence</li>
          <li>— Deliver a premium experience patients love deliver a premium experience patients love</li>
          <li>— Get 5-star reviews and build your reputation get 5-star reviews and build your reputation </li>
        </ul>
        <div class="col-lg-4 col-md-4 col-sm-3 hidden-xs"></div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <button class="btn btn-default cta-button btn-block body-button">List your practice on HebammeList</button>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-3 hidden-xs"></div>
      </div>
    </div>
    <div class="redtitle">
      <h2 class="hidden-xs">Recently joined HebammeList</h2>
    </div>
    <div id="carousel" class="carousel slide hidden-xs" data-ride="carousel">
      <div class="carousel-inner">
        <div class="item active">
          <div class="row">
            <div class="col-md-4 col-lg-4 col-sm-4">
              <p><img src="/static/images/avatar-1.png"></p><br>
              <h3>Sara Hues</h3>
              <p class="review">“Fantastic bedside manner. Quick visit although my appointment was first on a Saturday. Scheduled for surgery right away”.</p>
              <p class="view-profile"><a href="#">View profile</a></p>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4">
              <p><img src="/static/images/avatar-2.png"></p><br>
              <h3>Jane Brown</h3>
              <p class="review">"I can’t believe anyone goes anywhere else. Kristin Mallon and Dr. Abdelhak are the perfect blend of midwifery skills and…”</p>
              <p class="view-profile"><a href="#">View profile</a></p>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4">
              <p><img src="/static/images/avatar-3.png"></p><br>
              <h3>Christine Dane</h3>
              <p class="review">"She's just the sweetest. She explains everything clear and in depth. She's just literally the greatest. Can't find the words…”</p>
              <p class="view-profile"><a href="#">View profile</a></p>
            </div>
          </div>
        </div>


        <div class="item">
          <div class="row">
            <div class="col-md-4 col-lg-4 col-sm-4">
              <p><img src="/static/images/avatar-2.png"></p><br>
              <h3>Jane Brown</h3>
              <p class="review">I can’t believe anyone goes anywhere else. Kristin Mallon and Dr. Abdelhak are the perfect blend of midwifery skills and…”</p>
              <p class="view-profile"><a href="#">View profile</a></p>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4">
              <p><img src="/static/images/avatar-1.png"></p><br>
              <h3>Sara Hues</h3>
              <p class="review">“Fantastic bedside manner. Quick visit although my appointment was first on a Saturday. Scheduled for surgery right away”.</p>
              <p class="view-profile"><a href="#">View profile</a></p>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4">
              <p><img src="/static/images/avatar-3.png"></p><br>
              <h3>Christine Dane</h3>
              <p class="review">She's just the sweetest. She explains everything clear and in depth. She's just literally the greatest. Can't find the words…”</p>
              <p class="view-profile"><a href="#">View profile</a></p>
            </div>
          </div>
        </div>

      <a href="#carousel" class="left carousel-control" data-slide="prev">
            <span><i class="fa fa-chevron-left fa-lg"></i></span>
      </a>
      <a href="#carousel" class="right carousel-control" data-slide="next">
            <span><i class="fa fa-chevron-right fa-lg"></i></span>
      </a>
    </div>
    </div>
    <div class="container-fluid hidden-xs">
      <div class="row info">
        <div class="col-lg-4 col-md-4 col-sm-3 hidden-xs"></div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <button class="btn btn-default cta-button btn-block body-button">List your practice on HebammeList</button>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-3 hidden-xs"></div>
      </div>
    </div>
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
    <div class="container-fluid" id="footer">
      <p>Are you an excellent midwife? <a href="#">Join HebammeList today!</a></p>
      <ul class="list-unstyled">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
      <p class="copyright">Copyright © 2017 HebammeList, Inc.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
