<template>
  <div>
<!--     <link rel="stylesheet" type="text/css" href="/static/css/index-style.css">
    <link rel="stylesheet" type="text/css" href="/static/css/bootstrap-col-15.css">
    <link rel="stylesheet" type="text/css" href="/static/css/index-style-max-767px.css" media="screen and (max-width: 767px)"> -->
    <site-nav-bar />
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
              <li>Charlottenburg</li>
              <li>Friedrichshain</li>
              <li>Hellersdorf</li>
              <li>Hohenschönhausen</li>
              <li>Köpenick</li>
              <li>Kreuzberg</li>
              <li>Lichtenberg</li>
              <li>Marzahn</li>
              <li>Mitte</li>
              <li>Neukölln</li>
              <li>Pankow</li>
              <li>Prenzlauer Berg</li>
              <li>Reinickendorf</li>
              <li>Schöneberg</li>
              <li>Spandau</li>
              <li>Steglitz</li>
              <li>Tempelhof</li>
              <li>Tiergarten</li>
              <li>Treptow</li>
              <li>Wedding</li>
              <li>Weißensee</li>
              <li>Wilmersdorf</li>
              <li>Zehlendorf</li>
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
              <li>Charlottenburg</li>
              <li>Friedrichshain</li>
              <li>Hellersdorf</li>
              <li>Hohenschönhausen</li>
              <li>Köpenick</li>
              <li>Kreuzberg</li>
              <li>Lichtenberg</li>
              <li>Marzahn</li>
              <li>Mitte</li>
              <li>Neukölln</li>
              <li>Pankow</li>
              <li>Prenzlauer Berg</li>
              <li>Reinickendorf</li>
              <li>Schöneberg</li>
              <li>Spandau</li>
              <li>Steglitz</li>
              <li>Tempelhof</li>
              <li>Tiergarten</li>
              <li>Treptow</li>
              <li>Wedding</li>
              <li>Weißensee</li>
              <li>Wilmersdorf</li>
              <li>Zehlendorf</li>
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
          <h3>We Created “Hebammen In English” Because…</h3>
          <p class="hidden-xs">In 2002, I completed my training as a midwife. I spent the three years of intensive apprenticeship in Baden-Wurttemberg in the beautiful Tübingen and blown the Swabian air around my nose. But my Berlin roots were stronger and I returned. In 2002, I completed my training as a midwife. I spent the three years of intensive apprenticeship in Baden-Wurttemberg in the beautiful Tübingen and blown the Swabian air around my nose. But my Berlin roots were stronger and I returned.</p>
          <p class="visible-xs">In 2002, I completed my training as a midwife. I spent the three years of intensive apprenticeship in Baden-Wurttemberg in the beautiful Tübingen and blown the Swabian air around my nose. But my Berlin roots were stronger and I returned. In 2002, I completed my training as a midwife. I spent the three years of intensiv</p>
        </div>
        <div class="col-lg-1 col-md-1 col-sm-1 hidden-xs"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="hidden-lg hidden-md hidden-sm col-xs-1"></div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-10">
          <h3>How Our Site Helps Patients:</h3>
        </div>
        <div class="hidden-lg hidden-md hidden-sm col-xs-1"></div>
      </div>
      <div class="row info">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <p class="icon"><i class="fa fa-bolt fa-4x"></i></p>
          <h4>Find a Hebamme Fast</h4>
          <p>Search by language, speciality and location to find a Hebamme that's the right fit.</p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <p class="icon"><i class="fa fa-envira fa-4x"></i></p>
          <h4>Find a Hebamme Easily</h4>
          <p>Our simple website offers an easy way for especially non-tech savvy folks to find the perfect Hebamme.</p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <p class="icon"><i class="fa fa-heart fa-4x"></i></p>
          <h4>Make Sure She Is Perfect For You</h4>
          <p>Browse detailed profiles for Hebammen to get a sense of what they are like. Chemistry is key.</p>
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
        <h3>Are you an excellent midwife?</h3>
        <ul>
          <li>— List your practice now and reach millions of patients list your practice now and reach millions of patients</li>
          <li>— Build and strengthen your online presence build and strengthen your online presence</li>
          <li>— Deliver a premium experience patients love deliver a premium experience patients love</li>
          <li>— Get 5-star reviews and build your reputation get 5-star reviews and build your reputation </li>
        </ul>
        <div class="col-lg-4 col-md-4 col-sm-3 hidden-xs"></div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <a href="submit-profile-1.html"><button class="btn btn-default cta-button btn-block body-button">Create Your Profile for Free</button></a>
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
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '/static/css/index-style.css';
@import '/static/css/bootstrap-col-15.css';
@import '/static/css/index-style-max-767px.css';
</style>
