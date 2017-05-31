<template>
  <div>
<!--     <link rel="stylesheet" type="text/css" href="/static/css/index-style.css">
    <link rel="stylesheet" type="text/css" href="/static/css/bootstrap-col-15.css">
    <link rel="stylesheet" type="text/css" href="/static/css/index-style-max-767px.css" media="screen and (max-width: 767px)"> -->
    <site-nav-bar />
    <div id="demo">
      <p>This is a demo version of the site. All midwife profiles are not real and are created temporarily for the purpose of demonstration.</p>
    </div>
    <div class="container-fluid hidden-xs" id="homepage-banner">
      <div class="row">
        <div class="col-lg-12">
          <h1>FIND AN ENGLISH SPEAKING HEBAMME IN BERLIN</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 hidden-xs"></div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 column">
          <div class="btn-group btn-block">
            <button class="btn btn-default dropdown-toggle btn-block cta-button" data-toggle="dropdown"><span class="pull-left">Choose Area of Berlin</span><i class="fa fa-sort-down fa-lg pull-right"></i></button>
            <ul class="dropdown-menu pull-right">
              <router-link to="/list"><li>Charlottenburg</li></router-link>

              <router-link to="/list"><li>Friedrichshain</li></router-link>

              <router-link to="/list"><li>Hellersdorf</li></router-link>

              <router-link to="/list"><li>Hohenschönhausen</li></router-link>

              <router-link to="/list"><li>Köpenick</li></router-link>

              <router-link to="/list"><li>Kreuzberg</li></router-link>

              <router-link to="/list"><li>Lichtenberg</li></router-link>

              <router-link to="/list"><li>Marzahn</li></router-link>

              <router-link to="/list"><li>Mitte</li></router-link>

              <router-link to="/list"><li>Neukölln</li></router-link>

              <router-link to="/list"><li>Pankow</li></router-link>

              <router-link to="/list"><li>Prenzlauer Berg</li></router-link>

              <router-link to="/list"><li>Reinickendorf</li></router-link>

              <router-link to="/list"><li>Schöneberg</li></router-link>

              <router-link to="/list"><li>Spandau</li></router-link>

              <router-link to="/list"><li>Steglitz</li></router-link>

              <router-link to="/list"><li>Tempelhof</li></router-link>

              <router-link to="/list"><li>Tiergarten</li></router-link>

              <router-link to="/list"><li>Treptow</li></router-link>

              <router-link to="/list"><li>Wedding</li></router-link>

              <router-link to="/list"><li>Weißensee</li></router-link>

              <router-link to="/list"><li>Wilmersdorf</li></router-link>

              <router-link to="/list"><li>Zehlendorf</li></router-link>

            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2  col-xs-12 column">
          <router-link to="/list">
            <button type="button" class="btn btn-default">
            Search
            </button>
          </router-link>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 hidden-xs"></div>
      </div>
    </div>
    <div class="container-fluid visible-xs" id="homepage-banner">
      <div class="row" id="first_row">
        <div class="col-xs-12">
          <h1 class="hidden-xs">FIND AN ENGLISH SPEAKING HEBAMME IN BERLIN</h1>
          <h1 class="visible-xs">FIND A PERFECT MIDWIFE IN BERLIN</h1>
        </div>
      </div>
      <div class="row">
        <div class="hidden-xs"></div>
        <div class="col-xs-12 column">
          <div class="btn-group btn-block">
            <button class="btn btn-default dropdown-toggle btn-block cta-button" data-toggle="dropdown"><span class="pull-left">Choose Area of Berlin</span><i class="fa fa-sort-down fa-lg pull-right"></i></button>
            <ul class="dropdown-menu pull-right">
              <router-link to="/list"><li>Charlottenburg</li></router-link>

              <router-link to="/list"><li>Friedrichshain</li></router-link>

              <router-link to="/list"><li>Hellersdorf</li></router-link>

              <router-link to="/list"><li>Hohenschönhausen</li></router-link>

              <router-link to="/list"><li>Köpenick</li></router-link>

              <router-link to="/list"><li>Kreuzberg</li></router-link>

              <router-link to="/list"><li>Lichtenberg</li></router-link>

              <router-link to="/list"><li>Marzahn</li></router-link>

              <router-link to="/list"><li>Mitte</li></router-link>

              <router-link to="/list"><li>Neukölln</li></router-link>

              <router-link to="/list"><li>Pankow</li></router-link>

              <router-link to="/list"><li>Prenzlauer Berg</li></router-link>

              <router-link to="/list"><li>Reinickendorf</li></router-link>

              <router-link to="/list"><li>Schöneberg</li></router-link>

              <router-link to="/list"><li>Spandau</li></router-link>

              <router-link to="/list"><li>Steglitz</li></router-link>

              <router-link to="/list"><li>Tempelhof</li></router-link>

              <router-link to="/list"><li>Tiergarten</li></router-link>

              <router-link to="/list"><li>Treptow</li></router-link>

              <router-link to="/list"><li>Wedding</li></router-link>

              <router-link to="/list"><li>Weißensee</li></router-link>

              <router-link to="/list"><li>Wilmersdorf</li></router-link>

              <router-link to="/list"><li>Zehlendorf</li></router-link>
            </ul>
          </div>
        </div>
        <div class="hidden-xs"></div>
      </div>
      <div class="row">
        <div class="hidden-xs"></div>
        <div class="col-xs-12 column">
          <router-link to="/list">
            <button type="button" class="btn btn-default btn-block">
              Search
            </button>
          </router-link>
        </div>
        <div class="hidden-xs"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-1 col-md-1 col-sm-1 hidden-xs"></div>
        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
          <h3>We Created “Your Hebamme” Because:</h3>
          <p>There are thousands of English-speaking expecting families in Berlin. When it comes to prenatal care, there are so many things that families new to Germany have to figure out. Finding a Hebamme is arguably the hardest! Until now, families would have to go through lists and lists of midwives and phone numbers. Your Hebamme goes one step further. We offer a fast and easy way to find an English speaking Hebamme in Berlin. In addition, we make it easy for young families to assess the personality of a midwife - having an emotional connection with your Hebamme is extremely important.</p>
        </div>
        <div class="col-lg-1 col-md-1 col-sm-1 hidden-xs"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="hidden-lg hidden-md hidden-sm col-xs-1"></div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-10">
          <h3>How “Your Hebamme” Helps Expecting Families:</h3>
        </div>
        <div class="hidden-lg hidden-md hidden-sm col-xs-1"></div>
      </div>
      <div class="row info">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <p class="icon"><i class="fa fa-bolt fa-4x"></i></p>
          <h4>Find a Hebamme Fast</h4>
          <p>Use our simple one-step search engine and find all the Hebammen near you in seconds.</p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <p class="icon"><i class="fa fa-envira fa-4x"></i></p>
          <h4>Find a Hebamme Easily</h4>
          <p>We made it extremely easy to scan a list of Hebammen. Choose the right one and contact her right away.</p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <p class="icon"><i class="fa fa-heart fa-4x"></i></p>
          <h4>Make Sure She Is Perfect For You</h4>
          <p>A profile picture, personal bio, and other details help you make sure you connect with your Hebamme on an emotional level.</p>
        </div>
      </div>
    </div>
    <div class="container-fluid" id="button_hebamme_english">
      <div class="row info">
        <div class="col-lg-4 col-md-4 col-sm-3 hidden-xs"></div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <a href="#homepage-banner"><button class="btn btn-default cta-button btn-block body-button">Find an English Speaking Hebamme</button></a>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-3 hidden-xs"></div>
      </div>
    </div>
    <div class="container-fluid" id="exelent_midwife">
      <div class="row">
        <h3>Are You an English Speaking Hebamme?</h3>
        <ul>
          <li>— Create your professional profile and reach thousands of patients all over Berlin</li>
          <li>— Build and strengthen your online presence - there is no need in creating an individual website</li>
          <li>— Deliver a premium experience your patients love and build your professional reputation</li>
        </ul>
        <div class="col-lg-4 col-md-4 col-sm-3 hidden-xs"></div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <a href="mailto:hello@yourhebamme.com"><button class="btn btn-default cta-button btn-block body-button">Email us to create your free profile</button></a>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-3 hidden-xs"></div>
      </div>
    </div>
    <!-- слайдер<div class="redtitle">
      <h2 class="hidden-xs">Recently joined HebammeList</h2>
    </div>
    <div id="carousel" class="carousel slide hidden-xs" data-ride="carousel">
      <div class="carousel-inner">
        <div class="item active">
          <div class="row">
            <div class="col-md-4 col-lg-4 col-sm-4">
              <p><img src="assets/avatar-1.png"></p><br>
              <h3>Sara Hues</h3>
              <p class="review">“Fantastic bedside manner. Quick visit although my appointment was first on a Saturday. Scheduled for surgery right away”.</p>
              <p class="view-profile"><a href="hebamme-info.html">View profile</a></p>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4">
              <p><img src="assets/avatar-2.png"></p><br>
              <h3>Jane Brown</h3>
              <p class="review">"I can’t believe anyone goes anywhere else. Kristin Mallon and Dr. Abdelhak are the perfect blend of midwifery skills and…”</p>
              <p class="view-profile"><a href="hebamme-info.html">View profile</a></p>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4">
              <p><img src="assets/avatar-3.png"></p><br>
              <h3>Christine Dane</h3>
              <p class="review">"She's just the sweetest. She explains everything clear and in depth. She's just literally the greatest. Can't find the words…”</p>
              <p class="view-profile"><a href="hebamme-info.html">View profile</a></p>
            </div>
          </div>
        </div>


        <div class="item">
          <div class="row">
            <div class="col-md-4 col-lg-4 col-sm-4">
              <p><img src="assets/avatar-2.png"></p><br>
              <h3>Jane Brown</h3>
              <p class="review">I can’t believe anyone goes anywhere else. Kristin Mallon and Dr. Abdelhak are the perfect blend of midwifery skills and…”</p>
              <p class="view-profile"><a href="hebamme-info.html">View profile</a></p>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4">
              <p><img src="assets/avatar-1.png"></p><br>
              <h3>Sara Hues</h3>
              <p class="review">“Fantastic bedside manner. Quick visit although my appointment was first on a Saturday. Scheduled for surgery right away”.</p>
              <p class="view-profile"><a href="hebamme-info.html">View profile</a></p>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4">
              <p><img src="assets/avatar-3.png"></p><br>
              <h3>Christine Dane</h3>
              <p class="review">She's just the sweetest. She explains everything clear and in depth. She's just literally the greatest. Can't find the words…”</p>
              <p class="view-profile"><a href="hebamme-info.html">View profile</a></p>
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
          <a href="submit-profile-1.html"><button class="btn btn-default cta-button btn-block body-button">List your practice on HebammeList</button></a>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-3 hidden-xs"></div>
      </div>
    </div>-->

    <site-footer />
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted () {
    document.body.scrollTop = (document.documentElement.scrollTop = 0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '/static/css/index-style.css';
@import '/static/css/bootstrap-col-15.css';
@import '/static/css/index-style-max-767px.css';

#homepage-banner button[type="button"] {
  margin-top: 5px;
}
#homepage-banner ul li {
  color: #858585;
}
#button_hebamme_english button {
  background-color: #84dcc6;
}
.cta-button {
  background-color: #ffffff;
}
h3 {
  color: #ff686b;
  display: block;
  text-align: center;
}
@media screen and (max-width: 767px) {
  button.dropdown-toggle {
    font-size: 15px;
  }
  #homepage-banner .column {
    padding-right: 15px;
    padding-left: 15px;
  }
  div#button_hebamme_english {
    margin-right: 15px;
    margin-left: 15px;
  }
  div#button_hebamme_english button {
    font-size: 15px;
  }
  #exelent_midwife button {
    font-size: 15px;
  }
  #homepage-banner button[type="button"] {
  margin-top: 0px;
  }

}
</style>
