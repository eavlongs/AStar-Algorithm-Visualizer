<script>
    import { gridDetails } from "./store"
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

    let readyToStart = false

    if (isEmpty(startNode) || isEmpty(endNode)) {
        readyToStart = false
    }
    else {
        readyToStart = true
    }

    function isEmpty(obj) {
        return Object.keys(obj).length === 0
    }


    gridDetails.subscribe(obj => {
        openSet = obj.openSet
        closedSet = obj.closedSet
        obstacles = obj.obstacles
        columns = obj.columns
        rows = obj.rows
        startNode = obj.startNode
        endNode = obj.endNode
    })

    const moves = [
        {x: -1, y: -1},
        {x: 0, y: -1},
        {x: 1, y: -1},
        {x: -1, y: 0},
        {x: 1, y: 0},
        {x: -1, y: 1},
        {x: 0, y: 1},
        {x: 1, y: 1}
    ]

    async function AStar() {
        if (path.length !== 0) {
            gridDetails.update(gridDetails => {
                return {
                    closedSet: [],
                    openSet: [],
                    path: [],
                    rows: 20,
                    columns: 20,
                    obstacles: obstacles,
                    startNode: startNode,
                    endNode: endNode
                }
            })
            await setTimeoutAsync(500)
        }
        if (Object.keys(startNode).length === 0) {
            alert("Please choose the starting node and the ending node")
            return
        }
        if (Object.keys(endNode).length === 0) {
            alert("Please choose the ending node")
            return
        }
        openSet.push(startNode)
        while (openSet.length !== 0) {
            if (isEmpty(startNode)) return
            let index = smallestIndex(openSet)
            let smallestNode = openSet[index]
            openSet.splice(index, 1)
            closedSet.push(smallestNode)
            gridDetails.update(openSet => {
                return openSet
            })
            gridDetails.update(closedSet => {
                return closedSet
            })
            await setTimeoutAsync(20)

            if (smallestNode.x === endNode.x && smallestNode.y === endNode.y) {
                retraceSteps(smallestNode)
                return
            }
            checkSurroundingNodesOf(smallestNode)
        }
        alert("No path found")
    }

    function smallestIndex(openSet) {
        if (openSet.length === 1) return 0
        let smallestFCost = openSet[0].fCost
        let smallestHCost = openSet[0].hCost
        let index = 0
        openSet.forEach((node, i) => {
            if (node.fCost < smallestFCost || (node.fCost === smallestFCost && node.hCost < smallestHCost)) {
                smallestFCost = node.fCost
                smallestHCost = node.hCost
                index = i
            }
        })
        console.log("smallest node:", openSet[index])
        console.log("openSet:", openSet)
        console.log("closedSet:", closedSet)
        return index
    }


    async function checkSurroundingNodesOf(currentNode) {
        moves.forEach(async(move) => {
            let neighborNode = findNeighborNode(currentNode, move)
            if (isInGrid(neighborNode) && !isInClosedSet(neighborNode) && !isObstacle(neighborNode)) {
                calculateCosts(neighborNode, currentNode)
                if (!isInOpenSet(neighborNode)) {
                    openSet.push(neighborNode)
                    gridDetails.update(openSet => {
                        return openSet
                    })
                    await setTimeoutAsync(20)
                }
            }
        })
    }

    function isInClosedSet(node) {
        let found = false
        closedSet.forEach((closedNode) => {
            if (node.x === closedNode.x && node.y === closedNode.y) {
                found = true
            }
        })
        if (found) return true
        return false
    }

    function isInOpenSet(node) {
        let found = false
        openSet.forEach((openNode) => {
            if (node.x === openNode.x && node.y === openNode.y) {
                found = true
                return true
            }
        })
        if (found) return true
        return false
    }

    function isInGrid(currentNode) {
        if (currentNode.x < 0 || currentNode.x >= columns) return false;
        if (currentNode.y < 0 || currentNode.y >= rows) return false;
        return true;
    }

    function isObstacle(node) {
        let found = false
        obstacles.forEach((obstacle) => {
            if (node.x === obstacle.x && node.y === obstacle.y) {
                found = true
            }
        })
        if (found) return true
        return false
    }


    function findNeighborNode(currentNode, move) {
        let newNodeX = currentNode.x + move.x
        let newNodeY = currentNode.y + move.y

        let newNode = {
            x: newNodeX,
            y: newNodeY
        }

        if (isInOpenSet(newNode)) {
            // return the existing node in the openSet
            return returnNodeAtCoordinates(newNodeX, newNodeY, openSet)
        }
        // return the new node, which doesn't have an fCost yet
        return newNode
    }

    function calculateCosts(node, mainNode) {
        let gCost = calculateGCost(node, mainNode)
        let hCost = calculateHCost(node)
        let fCost = gCost + hCost
        if (!isInOpenSet(node) || fCost < node.fCost) {
            node.fCost = fCost
            node.gCost = gCost
            node.hCost = hCost
            // add reference to parents node
            node.parents = {
                parentX: mainNode.x,
                parentY: mainNode.y
            }
        }
    }

    function calculateGCost(node, mainNode) {
        let distanceFromNodeToMainNode
        if (Math.abs((mainNode.x - node.x) - (mainNode.y - node.y)) === 1) distanceFromNodeToMainNode = 10
        else distanceFromNodeToMainNode = 14

        // mainNode doesn't have a gCost only if it's the startNode
        if (!mainNode.gCost) return distanceFromNodeToMainNode

        return mainNode.gCost + distanceFromNodeToMainNode
    }

    function calculateHCost(node) {
        let hCost
        let xDistance = Math.abs(node.x - endNode.x)
        let yDistance = Math.abs(node.y - endNode.y)
        if (xDistance > yDistance) hCost = 14 * yDistance + 10 * (xDistance - yDistance)
        else hCost = 14 * xDistance + 10 * (yDistance - xDistance)
        return hCost
    }

    async function retraceSteps(node) {
        let currentNode = node
        let tmp = []
        while (currentNode.parents) {
            tmp.push(currentNode)
            currentNode = returnNodeAtCoordinates(currentNode.parents.parentX, currentNode.parents.parentY, closedSet)
        }
        tmp.push(startNode)
        tmp.reverse()

        // to make the animation from startNode to endNode, rather than the opposite
        for (let i = 0; i < tmp.length; i++) {
            path.push(tmp[i])
            gridDetails.update(path => {
                return path
            })
            await setTimeoutAsync(20)
        }
        gridDetails.update(path => {
            return path
        })
    }

    async function setTimeoutAsync(ms) {
        console.log()
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function returnNodeAtCoordinates(x, y, set) {
        let result
        set.forEach(node => {
            if (node.x === x && node.y === y) {
                result = node
                return
            }
        })
        return result
    }
</script>

<button class="btn" on:click={AStar}>Start</button>

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