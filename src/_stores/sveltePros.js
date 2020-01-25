import { writable } from 'svelte/store';

// Initial value, pending API call result
let pros = null

export const sveltePros = writable(pros)