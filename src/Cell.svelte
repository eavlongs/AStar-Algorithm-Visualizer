<script>
    import { gridDetails } from "./store"
    export let x, y
    let obstacles, startNode, endNode, path
    let ifInPath = false

    gridDetails.subscribe(obj => {
        obstacles = obj.obstacles
        startNode = obj.startNode
        endNode = obj.endNode
        path = obj.path
        ifInPath = isInPath({x:x, y:y})
        // console.log(ifInPath)
    })

    let ifObstacle = isObstacle({x:x, y:y})
    let ifStartNode = isStartNode({x:x, y:y})
    let ifEndNode = isEndNode({x:x, y:y})

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
</script>

<button class="point" on:click={()=>handleClick(x, y)} class:black-bg={ifObstacle} class:purple-bg={ifEndNode} class:orange-bg={ifStartNode} class:green-bg={ifInPath}></button>

<style>
.point {
    height: 30px;
    width: 30px;
}

.black-bg {
    background-color: black;
}

.orange-bg {
    background-color: orange;
}

.purple-bg {
    background-color: purple;
}

.green-bg {
    background-color: rgb(45, 180, 45);
}
</style>