let closedSet = []
let openSet = []

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

const obstacles = [
    // if you leave all the obstacles here, there will be no path, comment one of them out to see the path
    {x: 4, y: 0},
    {x: 4, y: 1},
    {x: 4, y: 2},
    {x: 4, y: 3},
    {x: 4, y: 4},
    {x: 4, y: 5},
    {x: 4, y: 6},
    // {x: 4, y: 7},
    {x: 4, y: 8},
    {x: 4, y: 9}

    // {x: 2, y: 1},
    // {x: 2, y: 2},
    // {x: 2, y: 3},
    // {x: 2, y: 4}

    // { x: 2, y: 1 },
    // { x: 2, y: 2 },
    // { x: 2, y: 3 }
]

let columns = 10
let rows = 10

let startNode = {
    x: 0,
    y: 0
}

let endNode = {
    x: rows - 1,
    y: columns - 1
}

aStar()

function aStar() {
    openSet.push(startNode)
    while (openSet.length !== 0) {
        let index = smallestIndex(openSet)
        let smallestNode = openSet[index]
        openSet.splice(index, 1)
        closedSet.push(smallestNode)

        if (smallestNode.x === endNode.x && smallestNode.y === endNode.y) {
            console.log()
            console.log("Found the end node!")
            console.log()
            console.log("Start node:", startNode)
            console.log("Barrier nodes:", obstacles)
            console.log("End node:", endNode)
            retraceSteps(smallestNode)
            return
        }
        checkSurroundingNodesOf(smallestNode)
    }
    console.log("No path found")
}

function smallestIndex(openSet) {
    let smallestFCost = openSet[0].fCost
    let smallestHCost = openSet[0].hCost
    let index = 0
    openSet.forEach((node, i) => {
        if (node.fCost < smallestFCost) {
            smallestFCost = node.fCost
            index = i
        }
        else if(node.fCost === smallestFCost && node.hCost < smallestHCost) {
            smallestHCost = node.hCost
            index = i
        }
    })
    return index
}


function checkSurroundingNodesOf(currentNode) {
    moves.forEach((move) => {
        let neighborNode = findNeighborNode(currentNode, move)
        if (isInGrid(neighborNode) && !isInClosedSet(neighborNode) && !isObstacle(neighborNode)) {
            calculateCosts(neighborNode, currentNode)
            if (!isInOpenSet(neighborNode)) {
                openSet.push(neighborNode)
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
    let xDistance = Math.abs(node.x - (columns - 1))
    let yDistance = Math.abs(node.y - (rows - 1))
    if (xDistance > yDistance) hCost = 14 * yDistance + 10 * (xDistance - yDistance)
    else hCost = 14 * xDistance + 10 * (yDistance - xDistance)
    return hCost
}

function retraceSteps(node) {
    let path = []
    let currentNode = node
    while (currentNode.parents) {
        path.push(currentNode)
        currentNode = returnNodeAtCoordinates(currentNode.parents.parentX, currentNode.parents.parentY, closedSet)
    }
    path.push(startNode)
    path.reverse()
    console.log("Path: ")
    path.forEach((node, index) => {
        console.log(`Step ${index+1} -> (${node.x}, ${node.y})`)
    })
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

