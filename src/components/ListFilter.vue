<template>
  <div>
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
