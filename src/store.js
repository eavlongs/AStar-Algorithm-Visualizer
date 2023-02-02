import { writable } from "svelte/store"

export const gridDetails = writable({
    closedSet: [],
    openSet: [],
    obstacles: [],
    columns: 20,
    rows: 20,
    startNode: {},
    endNode: {},
    path: [],
})