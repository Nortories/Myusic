import { writable, derived } from "svelte/store";

// Function to store data in local storage
const storeDataInLocalStorage = (key, value) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// Function to retrieve data from local storage
const retrieveDataFromLocalStorage = (key) => {
  if (typeof localStorage !== "undefined") {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  return null;
};

// Retrieve user and logged_in values from local storage if available
const storedUser = retrieveDataFromLocalStorage("user");
const storedLoggedIn = retrieveDataFromLocalStorage("logged_in");

// Create writable stores with initial values from local storage
export const isAuthenticated = writable(false);
export const user = writable(storedUser || "");
export const popupOpen = writable(false);
export const error = writable();
export const posts = writable([]);
export const groups = writable([]);
export const logged_in = writable(storedLoggedIn || false);

// Subscribe to user and logged_in stores to update local storage
user.subscribe((value) => {
  storeDataInLocalStorage("user", value);
});

logged_in.subscribe((value) => {
  storeDataInLocalStorage("logged_in", value);
});

export function checkLogin(){
  
  if (typeof localStorage !== "undefined")
    {
      key = "user";
      value = "";
      localStorage.setItem(key, JSON.stringify(value));
      key = "logged_in";
      value = false;
      localStorage.setItem(key, JSON.stringify(value));

      if (user && logged_in) {
        user.set(user);
        logged_in.set(logged_in);
      }
      const logged_in = localStorage.getItem("logged_in");
      const user = localStorage.getItem("user");

}}

export default {};