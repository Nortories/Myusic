

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.gPkOthzP.js","_app/immutable/chunks/scheduler.bAstmr0U.js","_app/immutable/chunks/index.BKHIPDY-.js"];
export const stylesheets = ["_app/immutable/assets/1.CPZJ290C.css"];
export const fonts = [];
