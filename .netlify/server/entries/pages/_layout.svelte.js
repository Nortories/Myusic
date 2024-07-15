import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape } from "../../chunks/ssr.js";
const css$3 = {
  code: "ul.svelte-1nl72bh li.svelte-1nl72bh{margin-top:5px;font-weight:500;padding:.75em;list-style:none;text-decoration:none;border:none}ul.svelte-1nl72bh.svelte-1nl72bh{padding:0}a.svelte-1nl72bh.svelte-1nl72bh{text-decoration:none;font-size:16px;color:#558;transition:0.5s}a.svelte-1nl72bh.svelte-1nl72bh:hover{background-color:#dbd2d2;color:rgb(59, 57, 57);border-radius:40px;padding:1em}",
  map: '{"version":3,"file":"navigationLinks.svelte","sources":["navigationLinks.svelte"],"sourcesContent":["<ul>\\r\\n    <li><a href=\\"/Profile\\">My Profile</a></li>\\r\\n    <li><a href=\\"/ProfileEdit\\">Edit Profile</a></li>\\r\\n    <li><a href=\\"/Schedule\\">Schedule</a></li>\\r\\n    <li><a href=\\"/contacts\\">Contacts</a></li>\\r\\n    <li><a href=\\"/Inbox\\">Inbox</a></li>\\r\\n    <li><a href=\\"/Settings\\">Settings</a></li>\\r\\n    <li><a href=\\"/Logot\\">Logout</a></li>\\r\\n  </ul>\\r\\n\\r\\n  <style>\\r\\n  ul li {\\r\\n    margin-top: 5px;\\r\\n    font-weight: 500;\\r\\n    padding: .75em;\\r\\n    list-style: none;\\r\\n    text-decoration: none;\\r\\n    border: none;\\r\\n  }\\r\\n  ul{\\r\\n    padding: 0;\\r\\n  }\\r\\n  a {\\r\\n    text-decoration: none;\\r\\n    font-size: 16px;\\r\\n    color: #558;\\r\\n    transition: 0.5s;\\r\\n  }\\r\\n  a:hover {\\r\\n    background-color: #dbd2d2;\\r\\n    color: rgb(59, 57, 57);\\r\\n    border-radius: 40px;\\r\\n    padding: 1em;\\r\\n  }\\r\\n    </style>"],"names":[],"mappings":"AAWE,iBAAE,CAAC,iBAAG,CACJ,UAAU,CAAE,GAAG,CACf,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,IAAI,CACrB,MAAM,CAAE,IACV,CACA,gCAAE,CACA,OAAO,CAAE,CACX,CACA,+BAAE,CACA,eAAe,CAAE,IAAI,CACrB,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IACd,CACA,+BAAC,MAAO,CACN,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACtB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,GACX"}'
};
const NavigationLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<ul class="svelte-1nl72bh" data-svelte-h="svelte-10rvnk4"><li class="svelte-1nl72bh"><a href="/Profile" class="svelte-1nl72bh">My Profile</a></li> <li class="svelte-1nl72bh"><a href="/ProfileEdit" class="svelte-1nl72bh">Edit Profile</a></li> <li class="svelte-1nl72bh"><a href="/Schedule" class="svelte-1nl72bh">Schedule</a></li> <li class="svelte-1nl72bh"><a href="/contacts" class="svelte-1nl72bh">Contacts</a></li> <li class="svelte-1nl72bh"><a href="/Inbox" class="svelte-1nl72bh">Inbox</a></li> <li class="svelte-1nl72bh"><a href="/Settings" class="svelte-1nl72bh">Settings</a></li> <li class="svelte-1nl72bh"><a href="/Logot" class="svelte-1nl72bh">Logout</a></li> </ul>`;
});
const css$2 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");.svelte-1lpcg19{margin:0;padding:0;font-family:"Poppins", sans-serif;text-decoration-line:none}.container.svelte-1lpcg19{display:flex;justify-content:center;align-items:center;margin-top:20px;margin-right:20px}img.svelte-1lpcg19{width:100px;height:100px;border-radius:50%;cursor:pointer;box-shadow:0px 0px 0px 0px}.menu.svelte-1lpcg19{position:absolute;margin:10px;padding-left:10px;border-radius:6px;padding:20px;width:200px;box-shadow:-1px 0px 11px -5px #a3a3a3;background:whitesmoke;transition:0.3s ease;opacity:0;top:120px;left:calc(100% - 275px)}.active.svelte-1lpcg19{transform:scale(1.025);visibility:hidden;opacity:1}h3.svelte-1lpcg19{width:100%;text-align:center;font-size:18px;font-weight:500;line-height:1.3em;color:#555}span.svelte-1lpcg19{font-size:14px;color:#cecece}button.svelte-1lpcg19{color:#558;background:none;border:none;border-radius:40px;padding:0;transition:0.5s}button.svelte-1lpcg19:hover{background-color:#000000;border-radius:90px;padding:.25em}',
  map: '{"version":3,"file":"profile.svelte","sources":["profile.svelte"],"sourcesContent":["<!-- \\r\\nDrop down menu with user profile data\\r\\nThis is a placeholder user profile data needs to be injected from google OAuth \\r\\nDrop down menu works on click event\\r\\nlinks are not functional\\r\\n-->\\r\\n\\r\\n<script>\\r\\n  import NavigationLinks from \\"./navigationLinks.svelte\\";\\r\\n\\r\\n  let menuVisible = false;\\r\\n\\r\\n  function menuToggle() {\\r\\n    console.log(\\"clicked\\");\\r\\n    menuVisible = !menuVisible;\\r\\n    const menu = document.querySelector(\\".menu\\");\\r\\n    if (menuVisible) {\\r\\n      menu.style.visibility = \\"visible\\";\\r\\n      \\r\\n    } else {\\r\\n      menu.style.visibility = \\"hidden\\";\\r\\n    }\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"container\\">\\r\\n  <button class=\\"profile\\" on:click={menuToggle} aria-label=\\"Toggle Menu\\">\\r\\n    <img\\r\\n      src=\\"https://i.pinimg.com/736x/d1/4a/1a/d14a1aab16c42f083b303d5117b37d45.jpg\\"\\r\\n      alt=\\"\\"\\r\\n    />\\r\\n  </button>\\r\\n\\r\\n  <div class=\\"menu\\" style=\\"visibility: hidden;\\" class:active={menuVisible}>\\r\\n    <h3>\\r\\n      User Name\\r\\n      <br />\\r\\n      <span>Student/Teacher</span>\\r\\n    </h3>\\r\\n    <NavigationLinks/>\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  @import url(\\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap\\");\\r\\n\\r\\n  * {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-family: \\"Poppins\\", sans-serif;\\r\\n    text-decoration-line: none;\\r\\n  }\\r\\n  .container {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    margin-top: 20px;\\r\\n    margin-right: 20px;\\r\\n  }\\r\\n  img {\\r\\n    width: 100px;\\r\\n    height: 100px;\\r\\n    border-radius: 50%;\\r\\n    cursor: pointer;\\r\\n    box-shadow: 0px 0px 0px 0px;\\r\\n  }\\r\\n\\r\\n  .menu {\\r\\n    position: absolute;\\r\\n    margin: 10px;\\r\\n    padding-left: 10px;\\r\\n    border-radius: 6px;\\r\\n    padding: 20px;\\r\\n    width: 200px;\\r\\n    box-shadow: -1px 0px 11px -5px #a3a3a3;\\r\\n    background: whitesmoke;\\r\\n    transition: 0.3s ease;\\r\\n    opacity: 0;\\r\\n    top: 120px;\\r\\n    left: calc(100% - 275px);\\r\\n  }\\r\\n\\r\\n  .active {\\r\\n    transform: scale(1.025);\\r\\n    visibility: hidden;\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  h3 {\\r\\n    width: 100%;\\r\\n    text-align: center;\\r\\n    font-size: 18px;\\r\\n    font-weight: 500;\\r\\n    line-height: 1.3em;\\r\\n    color: #555;\\r\\n  }\\r\\n\\r\\n  span {\\r\\n    font-size: 14px;\\r\\n    color: #cecece;\\r\\n  }\\r\\n\\r\\n  button {\\r\\n    color: #558;\\r\\n    background: none;\\r\\n    border: none;\\r\\n    border-radius: 40px;\\r\\n    padding: 0;\\r\\n    transition: 0.5s;\\r\\n  }\\r\\n\\r\\n  button:hover {\\r\\n    background-color: #000000;\\r\\n    border-radius: 90px;\\r\\n    padding: .25em;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4CE,QAAQ,yFAAyF,CAEjG,eAAE,CACA,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,WAAW,CAAE,SAAS,CAAC,CAAC,UAAU,CAClC,oBAAoB,CAAE,IACxB,CACA,yBAAW,CACT,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IAAI,CAChB,YAAY,CAAE,IAChB,CACA,kBAAI,CACF,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAC1B,CAEA,oBAAM,CACJ,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,IAAI,CAClB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,IAAI,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,OAAO,CACtC,UAAU,CAAE,UAAU,CACtB,UAAU,CAAE,IAAI,CAAC,IAAI,CACrB,OAAO,CAAE,CAAC,CACV,GAAG,CAAE,KAAK,CACV,IAAI,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,KAAK,CACzB,CAEA,sBAAQ,CACN,SAAS,CAAE,MAAM,KAAK,CAAC,CACvB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,CACX,CAEA,iBAAG,CACD,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,KAAK,CAClB,KAAK,CAAE,IACT,CAEA,mBAAK,CACH,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,OACT,CAEA,qBAAO,CACL,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IACd,CAEA,qBAAM,MAAO,CACX,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,KACX"}'
};
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `  <div class="container svelte-1lpcg19"><button class="profile svelte-1lpcg19" aria-label="Toggle Menu" data-svelte-h="svelte-1icfwi4"><img src="https://i.pinimg.com/736x/d1/4a/1a/d14a1aab16c42f083b303d5117b37d45.jpg" alt="" class="svelte-1lpcg19"></button> <div class="${["menu svelte-1lpcg19", ""].join(" ").trim()}" style="visibility: hidden;"><h3 class="svelte-1lpcg19" data-svelte-h="svelte-14aada">User Name
      <br class="svelte-1lpcg19"> <span class="svelte-1lpcg19">Student/Teacher</span></h3> ${validate_component(NavigationLinks, "NavigationLinks").$$render($$result, {}, {}, {})}</div> </div>`;
});
const logo = "/_app/immutable/assets/logo.Djl3ms-5.png";
const css$1 = {
  code: ".header.svelte-1uomcqm.svelte-1uomcqm{background-color:#f0e1f5;width:100%;height:80px;display:flex;align-items:center;padding:10px;margin:0;border-top:5px solid rgb(149, 91, 155)}.nav.svelte-1uomcqm.svelte-1uomcqm{display:flex;justify-content:left;align-items:center}.nav-list.svelte-1uomcqm.svelte-1uomcqm{list-style:none;display:flex;justify-content:center;align-items:center;padding:0}.nav-list.svelte-1uomcqm li.svelte-1uomcqm{margin:0 10px}.profile-icon.svelte-1uomcqm.svelte-1uomcqm{margin-left:auto}ul.svelte-1uomcqm li.svelte-1uomcqm{margin-top:5px;font-weight:500;padding:.75em;list-style:none;text-decoration:none;border:none}ul.svelte-1uomcqm.svelte-1uomcqm{padding:0}a.svelte-1uomcqm.svelte-1uomcqm{text-decoration:none;font-size:16px;color:#558;transition:0.5s}a.svelte-1uomcqm.svelte-1uomcqm:hover{background-color:#dbd2d2;color:rgb(59, 57, 57);border-radius:15px;padding:1em}",
  map: '{"version":3,"file":"header.svelte","sources":["header.svelte"],"sourcesContent":["<script>\\r\\n  import Profile from \\"$lib/components/profileDropDown/profile.svelte\\";\\r\\n  import logo from \\"$lib/assets/img/logo.png\\";\\r\\n<\/script>\\r\\n\\r\\n<header class=\\"header\\">\\r\\n  <img src={logo} alt=\\"Logo\\" class=\\"logo\\" style=\\"width:120px;\\" />\\r\\n\\r\\n  <!-- Using profile component for navigation -->\\r\\n\\r\\n  <nav class=\\"nav\\">\\r\\n    <ul class=\\"nav-list\\">\\r\\n      <li><a href=\\"/\\">Home</a></li>\\r\\n      <li><a href=\\"/Profile\\">Profile</a></li>\\r\\n      <li><a href=\\"/Schedule\\">Schedule</a></li>\\r\\n      <li><a href=\\"/contacts\\">Contacts</a></li>\\r\\n    </ul>\\r\\n  </nav>\\r\\n\\r\\n  <div class=\\"profile-icon\\">\\r\\n    <!-- Add your profile icon here -->\\r\\n    <Profile />\\r\\n  </div>\\r\\n</header>\\r\\n\\r\\n<style>\\r\\n  /* Add your styles here */\\r\\n.header {\\r\\n    background-color: #f0e1f5;\\r\\n    width: 100%;\\r\\n    height: 80px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    padding: 10px;\\r\\n    margin: 0;\\r\\n    border-top: 5px solid rgb(149, 91, 155);\\r\\n}\\r\\n  .nav {\\r\\n    display: flex;\\r\\n    justify-content: left;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  .nav-list {\\r\\n    list-style: none;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    padding: 0;\\r\\n  }\\r\\n\\r\\n  .nav-list li {\\r\\n    margin: 0 10px;\\r\\n  }\\r\\n\\r\\n.profile-icon {\\r\\n    margin-left: auto;\\r\\n}\\r\\nul li {\\r\\n    margin-top: 5px;\\r\\n    font-weight: 500;\\r\\n    padding: .75em;\\r\\n    list-style: none;\\r\\n    text-decoration: none;\\r\\n    border: none;\\r\\n  }\\r\\n  ul{\\r\\n    padding: 0;\\r\\n  }\\r\\n  a {\\r\\n    text-decoration: none;\\r\\n    font-size: 16px;\\r\\n    color: #558;\\r\\n    transition: 0.5s;\\r\\n  }\\r\\n  a:hover {\\r\\n    background-color: #dbd2d2;\\r\\n    color: rgb(59, 57, 57);\\r\\n    border-radius: 15px;\\r\\n    padding: 1em;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA2BA,qCAAQ,CACJ,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAC1C,CACE,kCAAK,CACH,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,MACf,CAEA,uCAAU,CACR,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CACX,CAEA,wBAAS,CAAC,iBAAG,CACX,MAAM,CAAE,CAAC,CAAC,IACZ,CAEF,2CAAc,CACV,WAAW,CAAE,IACjB,CACA,iBAAE,CAAC,iBAAG,CACF,UAAU,CAAE,GAAG,CACf,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,IAAI,CACrB,MAAM,CAAE,IACV,CACA,gCAAE,CACA,OAAO,CAAE,CACX,CACA,+BAAE,CACA,eAAe,CAAE,IAAI,CACrB,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IACd,CACA,+BAAC,MAAO,CACN,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACtB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,GACX"}'
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="header svelte-1uomcqm"><img${add_attribute("src", logo, 0)} alt="Logo" class="logo" style="width:120px;">  <nav class="nav svelte-1uomcqm" data-svelte-h="svelte-1jjfg9f"><ul class="nav-list svelte-1uomcqm"><li class="svelte-1uomcqm"><a href="/" class="svelte-1uomcqm">Home</a></li> <li class="svelte-1uomcqm"><a href="/Profile" class="svelte-1uomcqm">Profile</a></li> <li class="svelte-1uomcqm"><a href="/Schedule" class="svelte-1uomcqm">Schedule</a></li> <li class="svelte-1uomcqm"><a href="/contacts" class="svelte-1uomcqm">Contacts</a></li></ul></nav> <div class="profile-icon svelte-1uomcqm"> ${validate_component(Profile, "Profile").$$render($$result, {}, {}, {})}</div> </header>`;
});
const css = {
  code: "footer.svelte-telpjn{margin-top:1em;width:100vw;background-color:#f5f5f5;padding:10px;text-align:center;bottom:0}p.svelte-telpjn{font-size:14px;color:#888;margin:0}",
  map: `{"version":3,"file":"footer.svelte","sources":["footer.svelte"],"sourcesContent":["<script>\\r\\n    export let year = new Date().getFullYear();\\r\\n    export let companyName = 'Myusic LLC';\\r\\n<\/script>\\r\\n\\r\\n<footer>\\r\\n    <div class=\\"testimonials\\">\\r\\n        <!-- Testimonials content goes here -->\\r\\n    </div>\\r\\n    <p>&copy; {year} {companyName}. All rights reserved.</p>\\r\\n</footer>\\r\\n\\r\\n<style>\\r\\n    footer {\\r\\n        margin-top: 1em;\\r\\n        width: 100vw;\\r\\n        background-color: #f5f5f5;\\r\\n        padding: 10px;\\r\\n        text-align: center;\\r\\n        bottom: 0;\\r\\n    }\\r\\n\\r\\n    p {\\r\\n        font-size: 14px;\\r\\n        color: #888;\\r\\n        margin: 0;\\r\\n    }\\r\\n\\r\\n</style>"],"names":[],"mappings":"AAaI,oBAAO,CACH,UAAU,CAAE,GAAG,CACf,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,CACZ,CAEA,eAAE,CACE,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,CACZ"}`
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { year = (/* @__PURE__ */ new Date()).getFullYear() } = $$props;
  let { companyName = "Myusic LLC" } = $$props;
  if ($$props.year === void 0 && $$bindings.year && year !== void 0) $$bindings.year(year);
  if ($$props.companyName === void 0 && $$bindings.companyName && companyName !== void 0) $$bindings.companyName(companyName);
  $$result.css.add(css);
  return `<footer class="svelte-telpjn"><div class="testimonials" data-svelte-h="svelte-13u1ymv"></div> <p class="svelte-telpjn">© ${escape(year)} ${escape(companyName)}. All rights reserved.</p> </footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};