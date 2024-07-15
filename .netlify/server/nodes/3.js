

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contacts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CmiBRdRX.js","_app/immutable/chunks/scheduler.bAstmr0U.js","_app/immutable/chunks/index.BKHIPDY-.js"];
export const stylesheets = [];
export const fonts = [];
