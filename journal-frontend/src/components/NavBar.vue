<template>

  <div>
    <ul id="slide-out" class="sidenav">
      <!-- <li>
        <div class="user-view">
          <div class="background"><img src="images/office.jpg"></div>
          <a href="#user"><img class="circle" src="images/yuna.jpg"></a>
          <a href="#name"><span class="white-text name">John Doe</span></a>
          <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
        </div>
      </li> -->
      
        <li><a class="waves-effect" href="/journal">Journal</a></li>
        <li><a class="waves-effect" href="/highlights">Highlights</a></li>
        <li><a class="waves-effect" href="/tags">Tags</a></li>
        <li><a class="waves-effect" href="/people">People</a></li>
    </ul>
    <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons hamburger medium">menu</i></a>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  created() {}
}
</script>

<style scoped>
.sidenav {
  background-color: #48cfae;
}
.hamburger {
  padding: 1rem;
  color: #ffffff;
}
.sidenav li>a {
  color: #ffffff;
  font-size: 2rem;
  margin: 1rem;
}
</style>
