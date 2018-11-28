//nav.js


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    }
}

//For Vue.js implementation on navigation bar
let navigationInfo = [
	{	title: "Contact Us",
		urlSrc: "#"
	},
	{	title: "FAQ",
		urlSrc: "#"
	},
	{	title: "Glossary",
		urlSrc: "#"
	},
	{	title: "Visualize Data",
		urlSrc: "#"
  },
  {
    title: "Interactive Map",
    urlSrc: "#"
  }
]

document.addEventListener("DOMContentLoaded", function(){
	let topnav = new Vue({
		el: '#topnav',
		data: {
      		pages: navigationInfo
      	}
	})
})


/*
<b-navbar toggleable="md" type="dark" variant="info">

<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

<b-navbar-brand href="#">NavBar</b-navbar-brand>

<b-collapse is-nav id="nav_collapse">

  <b-navbar-nav>
    <b-nav-item href="#">Link</b-nav-item>
    <b-nav-item href="#" disabled>Disabled</b-nav-item>
  </b-navbar-nav>

  <!-- Right aligned nav items -->
  <b-navbar-nav class="ml-auto">

    <b-nav-form>
      <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
      <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>

    <b-nav-item-dropdown text="Lang" right>
      <b-dropdown-item href="#">EN</b-dropdown-item>
      <b-dropdown-item href="#">ES</b-dropdown-item>
      <b-dropdown-item href="#">RU</b-dropdown-item>
      <b-dropdown-item href="#">FA</b-dropdown-item>
    </b-nav-item-dropdown>

    <b-nav-item-dropdown right>
      <!-- Using button-content slot -->
      <template slot="button-content">
        <em>User</em>
      </template>
      <b-dropdown-item href="#">Profile</b-dropdown-item>
      <b-dropdown-item href="#">Signout</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-navbar-nav>

</b-collapse>
</b-navbar>
*/