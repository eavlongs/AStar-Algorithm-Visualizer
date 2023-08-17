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

    function clearGrid() {
        running = true
        gridDetails.update(gridDetails => {
            return {
                ...gridDetails,
                closedSet: [],
                openSet: [],
                path: [],
            }
        })
        running = false
    }
</script>

<button disabled={running} class="btn" on:click={clearGrid}>Clear</button>

<style>
    .btn {
        display: inline-block;
        font-size: 1.5rem;
        height: 50px;
        width: 140px;
        margin: 0 20px;
        margin-bottom: 20px;
        background-color: rgb(68, 68, 197);
        color: white;
        border-radius: 30px;
    }
</style>