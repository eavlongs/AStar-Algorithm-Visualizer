<script>
    import { gridDetails } from "../store"
    import Cell from "../Cell.svelte"
	import StartButton from "../StartButton.svelte";
    import ResetButton from "../ResetButton.svelte";
	import ClearButton from "../ClearButton.svelte";

    let columns, rows, startNode
    gridDetails.subscribe(obj => {
        columns = obj.columns
        rows = obj.rows
        startNode = obj.startNode
    })

    let running = false

    let localRows = rows
    let localColumns = columns
    let resetButtonRef

</script>

<head>
    <title>Eav Long Sok's A* Algorithm Visualizer</title>
</head>
<main>
    <div class="flex-center">
        <div class="sliders">
            <p>rows: {localRows}</p>
            <input type="range" min="10" max="50" step="5" bind:value={localRows} disabled={running} on:change={() => {
                let confirmation = true
                if (Object.keys(startNode).length !== 0) confirm("Adjusting the rows and columns will result in loss of data in the grid. Are you sure you want to proceed?")
                if (confirmation) {
                    gridDetails.update(data => {
                        return {
                            ...data,
                            rows: localRows
                        }
                    })
                    resetButtonRef.resetStore()
                }
            }}>
        </div>
       <div class="title-section">
         <p>{running ? "Visualizing..." : "A* Path Finding Visualizer"}</p>
            <a href="https://github.com/eavlongs/AStar-Algorithm-Visualizer" target="_blank" rel="noopener noreferrer">
                <button class="github-button">
                    <img src="github-mark.png" alt="github logo" class="github-logo"/>
                    <span>Github</span>
                </button>
            </a>
        </div>

        <div class="sliders">
            <p>columns: {localColumns}</p>
            <input type="range" min="10" max="50" step="5" bind:value={localColumns} disabled={running} on:change={() => {
                let confirmation = true
                if (Object.keys(startNode).length !== 0) confirm("Adjusting the rows and columns will result in loss of data in the grid. Are you sure you want to proceed?")
                if (confirmation) {
                    gridDetails.update(data => {
                        return {
                            ...data,
                            columns: localColumns
                        }
                    })
                    resetButtonRef.resetStore()
                }
            }}>
        </div>
    </div>
    <div class="center">
        <StartButton bind:running={running} on:click/>
        <ResetButton bind:running={running} on:click bind:this={resetButtonRef}/>
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

    .flex-center > p {
        font-size: 1.5rem;
        margin: 0;
        font-weight: bold;
    }

    .github-logo {
        height: 2rem;
        width: 2rem;
    }

    .title-section {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .title-section > p {
        font-weight: 800;
        font-size: 1.5rem;
    }

    .github-button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        padding: 0.2rem 0.5rem;
        border-radius: 5px;
        cursor: pointer;
    }

    .github-button > img {
        height: 1.5rem;
        width: 1.5rem;
    }

    div {
        --track-bg: rgb(64, 64, 64);
        --progress-bg: #2ecb40;
    }
</style>
