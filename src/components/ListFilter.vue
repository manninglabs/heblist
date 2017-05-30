<template>
  <div>
    <nav class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-5 col-xs-12 hidden-xs">
          <div class="btn-group btn-block">
            <button class="btn btn-default dropdown-toggle btn-block button-dropdown" data-toggle="dropdown"><span class="pull-left">Area of Berlin</span><i class="fa fa-sort-down fa-lg pull-right"></i></button>
            <ul class="dropdown-menu">
              <li><a href="#">Charlottenburg</a></li>
              <li><a href="#">Friedrichshain</a></li>
              <li><a href="#">Hellersdorf</a></li>
              <li><a href="#">Hohenschönhausen</a></li>
              <li><a href="#">Köpenick</a></li>
              <li><a href="#">Kreuzberg</a></li>
              <li><a href="#">Lichtenberg</a></li>
              <li><a href="#">Marzahn</a></li>
              <li><a href="#">Mitte</a></li>
              <li><a href="#">Neukölln</a></li>
              <li><a href="#">Pankow</a></li>
              <li><a href="#">Prenzlauer Berg</a></li>
              <li><a href="#">Reinickendorf</a></li>
              <li><a href="#">Schöneberg</a></li>
              <li><a href="#">Spandau</a></li>
              <li><a href="#">Steglitz</a></li>
              <li><a href="#">Tempelhof</a></li>
              <li><a href="#">Tiergarten</a></li>
              <li><a href="#">Treptow</a></li>
              <li><a href="#">Wedding</a></li>
              <li><a href="#">Weißensee</a></li>
              <li><a href="#">Wilmersdorf</a></li>
              <li><a href="#">Zehlendorf</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-3 hidden-xs">
           <input type="text" name="Zipcode" placeholder="Zipcode" class="hidden btn-group btn-block">
        </div>
        <div class="col-lg-6 col-md-6 col-sm-4 col-xs-12">
          <p>Displaying 132 midwives in Berlin, 10967 </p>
        </div>
      </div>
    </nav>
    <div class="container-fluid hidden">
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
    <div class="container-fluid hidden-xs" id="group-link">
      <div class="row">
        <div class="col-lg-12">
          <ul>
            <li><router-link to="/">HebammeList</router-link></li><span>></span>
            <li><router-link to="/list">Find a midwife</router-link></li><span>></span>
            <li><router-link to="/list">Berlin</router-link></li><span></span>
            <!-- <li><a href="list.html">Berlin</a></li><span>></span> -->
            <!-- <li><a href="list.html">Berlin Midwives</a></li><span>></span>
            <li><a class="active" href="#">Jane Brown</a></li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ListFilter'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
