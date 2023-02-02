<script>
    import { gridDetails } from "./store";
    let openSet, closedSet, obstacles, columns, rows, startNode, endNode, path
    gridDetails.subscribe(obj => {
        openSet = obj.openSet
        closedSet = obj.closedSet
        obstacles = obj.obstacles
        columns = obj.columns
        rows = obj.rows
        startNode = obj.startNode
        endNode = obj.endNode
        path = obj.path
    })

    function resetStore() {
        gridDetails.update(gridDetails => {
            return {
                closedSet: [],
                openSet: [],
                obstacles: [],
                columns: 20,
                rows: 20,
                startNode: {},
                endNode: {},
                path: [],
            }
        })
    }
</script>

<button class="btn" on:click={() => {
    // call reset twice to avoid visual bugs
    resetStore()
    setTimeout(resetStore, 100)
}}>Reset</button>

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