

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CNxc0SXZ.js","_app/immutable/chunks/scheduler.bAstmr0U.js","_app/immutable/chunks/index.BKHIPDY-.js"];
export const stylesheets = ["_app/immutable/assets/2.9NiKhuIp.css"];
export const fonts = [];
