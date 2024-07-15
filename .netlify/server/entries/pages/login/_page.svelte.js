import { c as create_ssr_component, d as subscribe } from "../../../chunks/ssr.js";
import { d as derived, w as writable } from "../../../chunks/index.js";
import "@auth0/auth0-spa-js";
const user = writable({});
const tasks = writable([]);
derived([tasks, user], ([$tasks, $user]) => {
  let logged_in_user_tasks = [];
  if ($user && $user.email) {
    logged_in_user_tasks = $tasks.filter((task) => task.user === $user.email);
  }
  return logged_in_user_tasks;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_user();
  return `<head data-svelte-h="svelte-1gw5n3s"><meta charset="UTF-8"> <title>SPA SDK Sample</title></head> <body data-svelte-h="svelte-rd8qe8"><h2>SPA Authentication Sample</h2> <p>Welcome to our page!</p> <button id="btn-login" disabled="true" onclick="login()">Log in</button> <button id="btn-logout" disabled="true" onclick="logout()">Log out</button> </body>`;
});
export {
  Page as default
};
