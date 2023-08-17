<script>
    import { gridDetails } from "../store"
    import Slider from '@bulatdashiev/svelte-slider';
    import Cell from "../Cell.svelte"
	import StartButton from "../StartButton.svelte";
    import ResetButton from "../ResetButton.svelte";
	import ClearButton from "../ClearButton.svelte";

    let columns, rows, path
    gridDetails.subscribe(obj => {
        columns = obj.columns
        rows = obj.rows
        path = obj.path
    })

    let running = false

    let localRows = 20
    let localColumns = 20
</script>

<head>
    <title>Elong Ma's A* Algorithm Visualizer</title>
</head>
<main>
    <div class="flex-center">
        <div class="sliders">
            <p>rows: {localRows}</p>
            <input type="range" min="10" max="50" step="5" bind:value={localRows} disabled={running} on:change={() => {
                gridDetails.update(data => {
                    return {
                        ...data,
                        rows: localRows
                    }
                })
            }}>
        </div>
        {running ? "Visualizing..." : "A* Path Finding Visualizer"}
        <div class="sliders">
            <p>columns: {localColumns}</p>
            <input type="range" min="10" max="50" step="5" bind:value={localColumns} disabled={running} on:change={() => {
                gridDetails.update(data => {
                    return {
                        ...data,
                        columns: localColumns
                    }
                })
            }}>
        </div>
    </div>
    <div class="center">
        <StartButton bind:running={running} on:click/>
        <ResetButton bind:running={running} on:click/>
        <ClearButton bind:running={running} on:click/>
    </div>
    <div class="container" style={"grid-template-columns: repeat("+columns+", 30px);"}>
        {#each Array(rows) as _, i}
            {#each Array(columns) as __, j}
                <Cell x={j} y={i} running={running}/>
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

    .center {
        display: grid;
        grid-template-columns: repeat(3, auto);
        justify-content: center;
    }

    .sliders {
        width: 200px;
        font-size: 1.2rem;
    }

    .sliders p {
        margin: 0;
    }

    .sliders input[type="range"] {
        width: 100%;
    }

    .flex-center {
        display: flex;
        justify-content: space-between;
    }

    div {
        --track-bg: rgb(64, 64, 64);
        --progress-bg: #2ecb40;
    }
</style>