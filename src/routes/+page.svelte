<script>
    import { gridDetails } from "../store"
    import Cell from "../Cell.svelte"
	import StartButton from "../StartButton.svelte";

    let columns, rows, path
    gridDetails.subscribe(obj => {
        columns = obj.columns
        rows = obj.rows
        path = obj.path
    })
</script>

<main>
    <StartButton on:click={console.log("test path:", path)}/>
    <div class="container" style={"grid-template-columns: repeat("+columns+", 30px);"}>
        {#each Array(columns) as _, i}
            {#each Array(rows) as __, j}
                <Cell x={j} y={i} />
            {/each}
        {/each}
    </div>
</main>

<style>
    * {
        box-sizing: border-box;
    }

    main {
        margin: 0;
    }

    .container {
        display: grid;
        width: auto;
        justify-content: center;
    }
</style>