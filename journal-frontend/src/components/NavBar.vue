<template>

  <div class="navbar" v-if="!$route.meta.hideNavbar">
    <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons hamburger medium">menu</i></a>
    <ul id="slide-out" class="sidenav">
      <div class="brand-logo"><img class="navbar-logo" src="@/assets/logo.png"/></div>
      <!-- <li>
        <div class="user-view">
          <div class="background"><img src="images/office.jpg"></div>
          <a href="#user"><img class="circle" src="images/yuna.jpg"></a>
          <a href="#name"><span class="white-text name">John Doe</span></a>
          <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
        </div>
      </li> -->
      
        <li><p class="appname">{{appname}}</p></li>
        <p class="emdash">——————</p>     
        <li><a class="waves-effect" href="/journal">Journal</a></li>
        <li><a class="waves-effect" href="/moments">Moments</a></li>
        <li><a class="waves-effect" href="/tags">Tags</a></li>
        <!-- <li><a class="waves-effect" href="/people">People</a></li> -->
    </ul>
  </div>
</template>

<script>
import shared from "../shared.js";
export default {
  name: 'NavBar',
  data() {
    return {
			appname: "",
      logo: ""
    }
  },
  created() {
    this.logo = shared.content.logo;
    this.appname = shared.content.appname;
  }
}
</script>

<style scoped>
/* .brand-logo {
  height: 20vmin;
  width: 20vmin;
  padding: 2rem;
} */
.navbar {
  /* display: block; */
  width: min-content;
  height: min-content;
}
.sidenav {
  background-color: #48cfae;
}
.hamburger {
  margin: 1.2rem;
  font-size: 3rem;
  color: #ffffff;
}
.sidenav li>a {
  color: #ffffff;
  font-size: 2rem;
  margin: 1rem;
}
</style>
