import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const css = {
  code: ".container.svelte-1o8b8cv{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:Arial, sans-serif;background-color:#f5f5f5}.title.svelte-1o8b8cv{font-size:48px;font-weight:bold;margin-bottom:20px}.message.svelte-1o8b8cv{font-size:24px;margin-bottom:40px}.emoji.svelte-1o8b8cv{font-size:100px;margin-bottom:20px}.button.svelte-1o8b8cv{padding:10px 20px;font-size:18px;font-weight:bold;text-transform:uppercase;background-color:#ff4081;color:#fff;border:none;border-radius:4px;cursor:pointer}.button.svelte-1o8b8cv:hover{background-color:#ff80ab}",
  map: `{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script>\\r\\n    export let errorCode = 404;\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"container\\">\\r\\n    <div class=\\"message\\">Error <span>{errorCode}</span> - content not found</div>\\r\\n    <div class=\\"title\\">Opps! Well this is embarrassing</div>\\r\\n    <div class=\\"emoji\\">😅</div>\\r\\n    <button class=\\"button\\" on:click={() => window.location.href = '/'}>Go back to homepage</button>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n    .container {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        height: 100vh;\\r\\n        font-family: Arial, sans-serif;\\r\\n        background-color: #f5f5f5;\\r\\n    }\\r\\n\\r\\n    .title {\\r\\n        font-size: 48px;\\r\\n        font-weight: bold;\\r\\n        margin-bottom: 20px;\\r\\n    }\\r\\n\\r\\n    .message {\\r\\n        font-size: 24px;\\r\\n        margin-bottom: 40px;\\r\\n    }\\r\\n\\r\\n    .emoji {\\r\\n        font-size: 100px;\\r\\n        margin-bottom: 20px;\\r\\n    }\\r\\n\\r\\n    .button {\\r\\n        padding: 10px 20px;\\r\\n        font-size: 18px;\\r\\n        font-weight: bold;\\r\\n        text-transform: uppercase;\\r\\n        background-color: #ff4081;\\r\\n        color: #fff;\\r\\n        border: none;\\r\\n        border-radius: 4px;\\r\\n        cursor: pointer;\\r\\n    }\\r\\n\\r\\n    .button:hover {\\r\\n        background-color: #ff80ab;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAYI,yBAAW,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,KAAK,CACb,WAAW,CAAE,KAAK,CAAC,CAAC,UAAU,CAC9B,gBAAgB,CAAE,OACtB,CAEA,qBAAO,CACH,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,aAAa,CAAE,IACnB,CAEA,uBAAS,CACL,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IACnB,CAEA,qBAAO,CACH,SAAS,CAAE,KAAK,CAChB,aAAa,CAAE,IACnB,CAEA,sBAAQ,CACJ,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,SAAS,CACzB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,OACZ,CAEA,sBAAO,MAAO,CACV,gBAAgB,CAAE,OACtB"}`
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { errorCode = 404 } = $$props;
  if ($$props.errorCode === void 0 && $$bindings.errorCode && errorCode !== void 0) $$bindings.errorCode(errorCode);
  $$result.css.add(css);
  return `<div class="container svelte-1o8b8cv"><div class="message svelte-1o8b8cv">Error <span>${escape(errorCode)}</span> - content not found</div> <div class="title svelte-1o8b8cv" data-svelte-h="svelte-1k95efg">Opps! Well this is embarrassing</div> <div class="emoji svelte-1o8b8cv" data-svelte-h="svelte-70r6il">😅</div> <button class="button svelte-1o8b8cv" data-svelte-h="svelte-s78kl7">Go back to homepage</button> </div>`;
});
export {
  Error as default
};