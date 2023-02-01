import { writable } from "svelte/store"

export const gridDetails = writable({
    closedSet: [],
    openSet: [],
    obstacles: [
        // if you leave all the obstacles here, there will be no path, comment one of them out to see the path
        // {x: 4, y: 0},
        // {x: 4, y: 1},
        // {x: 4, y: 2},
        // {x: 4, y: 3},
        // {x: 4, y: 4},
        // {x: 4, y: 5},
        // {x: 4, y: 6},
        // // {x: 4, y: 7},
        // {x: 4, y: 8},
        // {x: 4, y: 9}

        // {x: 2, y: 1},
        // {x: 2, y: 2},
        // {x: 2, y: 3},
        // {x: 2, y: 4}

        // { x: 2, y: 1 },
        // { x: 2, y: 2 },
        // { x: 2, y: 3 }
    ],
    columns: 20,
    rows: 20,

    startNode: {},
    endNode: {},
    path: [],
})