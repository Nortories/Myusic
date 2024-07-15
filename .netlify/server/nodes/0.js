

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D47LM6TJ.js","_app/immutable/chunks/scheduler.bAstmr0U.js","_app/immutable/chunks/index.BKHIPDY-.js"];
export const stylesheets = ["_app/immutable/assets/0.BTqF5psf.css"];
export const fonts = [];
