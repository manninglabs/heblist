<template>
  <div>
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
  </div>
</template>

<script>
  export default {
    name: 'ListPagination'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
