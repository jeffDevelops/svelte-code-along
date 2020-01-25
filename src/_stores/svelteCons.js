import { writable } from 'svelte/store';

// Initial value, pending API call result
let cons = null

export const svelteCons = writable(cons)