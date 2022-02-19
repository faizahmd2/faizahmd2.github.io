const navbarTap = (sequence) => {
  switch (sequence) {
    case 1:
      getRoot().innerHTML = myHomePage();
      makeCurrentActive("home", "about", "dashboard");
      break;
    case 2:
      getRoot().innerHTML = mydashboardPage();
      makeCurrentActive("dashboard", "home", "about");
      break;
    case 3:
      getRoot().innerHTML = myAboutPage();
      makeCurrentActive("about", "home", "dashboard");
      break;
  }
};

const getRoot = () => document.getElementById("root");

const ipsum100 = () =>
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

const ipsum400 = () =>
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus vehicula nibh, a aliquam sem lacinia in. Vivamus viverra non metus nec posuere. Morbi id euismod ante. Sed ut nulla justo. Praesent venenatis lacus maximus, tempus ex eget, congue justo. Nunc eleifend, sem sed sagittis egestas, dui arcu convallis arcu, sed dictum odio magna in lectus. Sed at neque eu mauris pretium tempor. Vestibulum eu sapien fringilla, tristique orci sit amet, pulvinar urna. Maecenas vulputate est vitae risus congue, id suscipit massa lacinia. Maecenas nec ex in eros lobortis interdum. Donec risus sapien, dignissim sit amet aliquam ut, dictum sed ligula. Integer et placerat eros.Mauris justo nisl, vestibulum vel nisi ac, convallis cursus sapien. Sed mattis fringilla rhoncus. Nunc ipsum dui, convallis in lobortis vel, tempus ac arcu. Suspendisse scelerisque consequat dui ac imperdiet. Nam ultricies, lorem in vestibulum tincidunt, justo justo consectetur felis, suscipit mattis dui tellus condimentum leo. Sed rutrum viverra pulvinar. Pellentesque at risus convallis, volutpat augue quis, pharetra lorem. Morbi vitae elit ac libero elementum molestie. Phasellus sodales malesuada porta. Donec metus est, tincidunt et interdum in, rutrum id purus.Curabitur velit felis, volutpat et accumsan eget, cursus ut ante. Donec commodo tempor tellus et viverra. Nulla et maximus nulla. Ut rhoncus ultrices commodo. In porta orci vitae est varius, id sodales mi porta. Nulla facilisis sed felis vitae convallis. Nulla cursus lorem sit amet commodo ornare. Etiam lectus tellus, fringilla ut neque eget, sodales lobortis ligula.Etiam eget tincidunt elit. Vestibulum ut auctor nulla. Duis finibus et velit quis pretium. Nam tincidunt dui est, sit amet luctus nisl tempus et. Curabitur maximus eros et ante malesuada sodales. Mauris neque nunc, vestibulum at auctor non, dictum in lacus. Phasellus lorem ante, commodo vulputate ex feugiat, varius porta ante. Etiam vitae dignissim orci. Fusce tempor porta libero at pulvinar.Curabitur tincidunt, eros nec varius pretium, tellus tellus convallis mi, vel pretium sem ipsum a augue. Duis ac vulputate lacus. Phasellus ut vestibulum nulla. Donec quis dolor tellus. Cras lobortis sagittis efficitur. Morbi quis dolor nunc. Aenean et imperdiet lectus. Proin ornare lacinia turpis at pharetra. Curabitur mollis semper turpis at vehicula. Proin gravida sem eu auctor vulputate.Aenean ut sagittis magna. Aenean vel justo i";

const makeCurrentActive = (id, id1, id2) => {
  document.getElementById(id1 + "_item").style.color = "rgb(19, 14, 14)";
  document.getElementById(id2 + "_item").style.color = "rgb(19, 14, 14)";
  document.getElementById(id + "_item").style.color = "rgb(238, 238, 181)";
};

const myHomePage = () => {
  let str = '<div class="home_container">';
  str += "<h1>This is My Home Page</h1>";
  str += `<p>${ipsum400()}</p>`;
  str += "</div>";
  return str;
};

const mydashboardPage = () => {
  let str = '<div class="dashboard_container">';
  str += "<h1>This is My Dashboard Page</h1>";
  str += `<p>${ipsum100()}</p>`;
  str += "</div>";
  return str;
};

const myAboutPage = () => {
  let str = '<div class="about_container">';
  str += "<h1>This is My About Page</h1>";
  str += `<p>${ipsum400()}</p>`;
  str += "</div>";
  return str;
};

if ("serviceWorker" in navigator) {
  console.log("Supported", navigator);
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../sw_cached_site.js")
      .then((w) => console.log("Service Worker : Registered"))
      .catch((e) => console.log("Error Registering service Worker", e));
  });
}
