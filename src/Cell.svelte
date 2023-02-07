<script>
    import { gridDetails } from "./store"
    export let x, y
    let obstacles, startNode, endNode, openSet, closedSet, path
    let ifInPath = false
    let ifInOpenSet = false
    let ifInClosedSet = false
    let ifObstacle = false
    let ifStartNode = false
    let ifEndNode = false

    gridDetails.subscribe(obj => {
        obstacles = obj.obstacles
        startNode = obj.startNode
        endNode = obj.endNode
        path = obj.path
        openSet = obj.openSet
        closedSet = obj.closedSet
        ifInPath = isInPath({x:x, y:y})
        ifInOpenSet = isInOpenSet({x:x, y:y})
        ifInClosedSet = isInClosedSet({x: x, y:y})
        ifObstacle = isObstacle({x:x, y:y})
        ifStartNode = isStartNode({x:x, y:y})
        ifEndNode = isEndNode({x:x, y:y})
    })


    function handleClick(x, y) {
        if (isEmpty(startNode)) {
            startNode.x = x
            startNode.y = y
            ifStartNode = true
            return
        }

        if (isStartNode({x:x, y:y})) {
            if (isEmpty(endNode)) {
                clearObj(startNode)
                ifStartNode = false
            }
            return
        }

        if (isEmpty(endNode)) {
            endNode.x = x
            endNode.y = y
            ifEndNode = true
            return
        }

        if (isEndNode({x:x, y:y})) {
            if (isEmpty(obstacles)) {
                clearObj(endNode)
                ifEndNode = false
            }
            return
        }

        if (isObstacle({x:x, y:y})) {
            let index = findIndexOfObstacle({x,y})
            obstacles.splice(index, 1)
        }
        else {
            obstacles.push({x:x, y:y})
        }
        ifObstacle = !ifObstacle
    }

    function clearObj(obj) {
        const keys = Object.keys(obj)
        keys.forEach((key) => {
            delete obj[key]
        })
    }

    function isEmpty(node) {
        return Object.keys(node).length === 0;
    }

    function isStartNode(node) {
        if (isEmpty(startNode)) return false
        return node.x === startNode.x && node.y === startNode.y
    }

    function isEndNode(node) {
        if (isEmpty(endNode)) return false
        return node.x === endNode.x && node.y === endNode.y
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

    function findIndexOfObstacle(node) {
        let index
        obstacles.forEach((obstacle, i) => {
            if (node.x === obstacle.x && node.y === obstacle.y) index = i;
            return
        })
        return index
    }

    function isInPath(node) {
        if (path.length === 0) return false
        let found = false
        path.forEach((tmpNode) => {
            if (node.x === tmpNode.x && node.y === tmpNode.y) {
                found = true
                return
            }
        })
        if (found) return true
        return false
    }

    function isInOpenSet(node) {
        if (openSet.length === 0) return false
        let found = false
        openSet.forEach((tmpNode) => {
            if (node.x === tmpNode.x && node.y === tmpNode.y) {
                found = true
                return
            }
        })
        if (found) return true
        return false
    }


    function isInClosedSet(node) {
        if (closedSet.length === 0) return false
        let found = false
        closedSet.forEach((tmpNode) => {
            if (node.x === tmpNode.x && node.y === tmpNode.y) {
                found = true
                return
            }
        })
        if (found) return true
        return false
    }
</script>

<button class="point" on:click={()=>handleClick(x, y)} class:black-bg={ifObstacle} class:end-bg={ifEndNode} class:start-bg={ifStartNode} class:blue-bg={ifInPath && !isEmpty(startNode) && (!ifStartNode && !ifEndNode)} class:green-bg={ifInOpenSet && !isEmpty(startNode) && !ifInPath && !ifStartNode && !ifEndNode} class:red-bg={ifInClosedSet && !ifInPath && !ifStartNode && !ifEndNode}></button>

<style>

.point {
    height: 30px;
    width: 30px;
    transition: 0.25s ease-in-out;
}

.black-bg {
    background-color: black;
}

.end-bg {
    background-color:darkblue;
}

.start-bg {
    background-color:dodgerblue;
}

.green-bg {
    background-color: rgb(45, 180, 45);
}

.blue-bg {
    background-color: aqua;
}

.red-bg {
    background-color: red;
}
</style>