<template>
  <div>
    <link rel="stylesheet" type="text/css" href="/static/css/list-style.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/bootstrap-col-15.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/list-style-max-767px.css" media="screen and (max-width: 767px)" />
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
    <nav class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 hidden-xs">
          <div class="btn-group btn-block">
            <button class="btn btn-default dropdown-toggle btn-block button-dropdown" data-toggle="dropdown"><span class="pull-left">Choose City</span><i class="fa fa-sort-down fa-lg pull-right"></i></button>
            <ul class="dropdown-menu">
              <li>City 1</li>
              <li>City 2</li>
              <li>City 3</li>
              <li>City 4</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 hidden-xs">
           <input type="text" name="Zipcode" placeholder="Zipcode" class="btn-group btn-block">
        </div>
        <div class="col-lg-6 col-md-6 col-sm-4 col-xs-12">
          <p>Displaying 132 midwives in Berlin, 10967 </p>
        </div>
      </div>
    </nav>
    <div class="container-fluid hidden-xs">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <div class="btn-group btn-block">
            <button class="btn btn-default dropdown-toggle btn-block button-dropdown" data-toggle="dropdown"><span class="pull-left">Services</span><i class="fa fa-sort-down fa-lg pull-right"></i></button>
            <ul class="dropdown-menu">
              <li>Services 1</li>
              <li>Services 2</li>
              <li>Services 3</li>
              <li>Services 4</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <div class="btn-group btn-block">
            <button class="btn btn-default dropdown-toggle btn-block button-dropdown" data-toggle="dropdown"><span class="pull-left">Your due month</span><i class="fa fa-sort-down fa-lg pull-right"></i></button>
            <ul class="dropdown-menu">
              <li>Month 1</li>
              <li>Month 2</li>
              <li>Month 3</li>
              <li>Month 4</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 hidden-xs"></div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <div class="pull-right">
            <div class="btn-group">
              <button class="btn btn-default dropdown-toggle btn-block button-dropdown" data-toggle="dropdown" id="button-dropdown-not-border"><span>Sort by: <strong>Default Order</strong></span><i class="fa fa-sort-down fa-lg pull-right"></i></button>
              <ul class="dropdown-menu">
                <li>Order 1</li>
                <li>Order 2</li>
                <li>Order 3</li>
                <li>Order 4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid" id="list">
      <div class="row element-list" v-for="p in profiles">
        <list-item v-bind:hebamme="p"></list-item>
      </div>
    </div>
    <div class="text-center">
      <ul class="pagination pagination-sm">
        <li>
          <a href="#">
            <i class="fa fa-chevron-left"></i>
            <i class="fa fa-chevron-left"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-chevron-left"></i>
          </a>
        </li>
        <li class="active"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li>
          <a href="#">
            <i class="fa fa-chevron-right"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-chevron-right"></i>
            <i class="fa fa-chevron-right"></i>
          </a>
        </li>
      </ul>
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
  name: 'List',
  data () {
    return {
      profiles: [
        {
          name: 'Jane Brown',
          avatarFilename: 'avatar-1.png',
          services: ['advice and assistance', 'home visits', 'family midwife', 'preventive screening', 'shift service in clinic', 'risk management', 'baby swimming', 'homebirth', 'babymassage', 'yoga', 'preventive screening', 'shift service in clinic'],
          areas: 'Berlin (Prenzlauberg, Pankow, Mitte)',
          speaks: 'English, German'
        },
        {
          name: 'Jane Brown',
          avatarFilename: 'avatar-2.png',
          services: ['advice and assistance', 'home visits', 'family midwife', 'preventive screening', 'shift service in clinic', 'risk management', 'baby swimming', 'homebirth', 'babymassage', 'yoga', 'preventive screening', 'shift service in clinic'],
          areas: 'Berlin (Prenzlauberg, Pankow, Mitte)',
          speaks: 'English, German'
        },
        {
          name: 'Jane Brown',
          avatarFilename: 'avatar-3.png',
          services: ['advice and assistance', 'home visits', 'family midwife', 'preventive screening', 'shift service in clinic', 'risk management', 'baby swimming', 'homebirth', 'babymassage', 'yoga', 'preventive screening', 'shift service in clinic'],
          areas: 'Berlin (Prenzlauberg, Pankow, Mitte)',
          speaks: 'English, German'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
