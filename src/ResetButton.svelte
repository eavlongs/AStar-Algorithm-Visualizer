<svelte:options accessors />
<script>
    import { gridDetails } from "./store";
    export let running;
    let openSet, closedSet, obstacles, startNode, endNode, path
    gridDetails.subscribe(obj => {
        openSet = obj.openSet
        closedSet = obj.closedSet
        obstacles = obj.obstacles
        startNode = obj.startNode
        endNode = obj.endNode
        path = obj.path
    })

    export function resetStore() {
        gridDetails.update(gridDetails => {
            return {
                ...gridDetails,
                closedSet: [],
                openSet: [],
                obstacles: [],
                startNode: {},
                endNode: {},
                path: [],
            }
        })
    }
</script>

<button disabled={running} class="btn" on:click={() => {
    running = true
    resetStore()
    running = false
}}>
Reset
</button>

<style>
    .btn {
        display: inline-block;
        font-size: 1.5rem;
        height: 50px;
        width: 140px;
        margin: 0 20px;
        margin-bottom: 20px;
        background-color: rgb(182, 14, 14);
        color: white;
        border-radius: 30px;
    }
</style>