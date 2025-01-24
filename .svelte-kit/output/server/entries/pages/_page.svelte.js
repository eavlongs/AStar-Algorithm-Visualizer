import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as each } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const gridDetails = writable({
  closedSet: [],
  openSet: [],
  obstacles: [],
  columns: 20,
  rows: 20,
  startNode: {},
  endNode: {},
  path: []
});
const Cell_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".point.svelte-1nvc1rl{height:30px;width:30px;transition:0.25s ease-in-out}.black-bg.svelte-1nvc1rl{background-color:black}.end-bg.svelte-1nvc1rl{background-color:darkblue}.start-bg.svelte-1nvc1rl{background-color:dodgerblue}.green-bg.svelte-1nvc1rl{background-color:rgb(45, 180, 45)}.blue-bg.svelte-1nvc1rl{background-color:aqua}.red-bg.svelte-1nvc1rl{background-color:red}",
  map: null
};
function isEmpty(node) {
  return Object.keys(node).length === 0;
}
const Cell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { x, y, running } = $$props;
  let obstacles, startNode, endNode, openSet, closedSet, path;
  let ifInPath = false;
  let ifInOpenSet = false;
  let ifInClosedSet = false;
  let ifObstacle = false;
  let ifStartNode = false;
  let ifEndNode = false;
  gridDetails.subscribe((obj) => {
    obstacles = obj.obstacles;
    startNode = obj.startNode;
    endNode = obj.endNode;
    path = obj.path;
    openSet = obj.openSet;
    closedSet = obj.closedSet;
    ifInPath = isInPath({ x, y });
    ifInOpenSet = isInOpenSet({ x, y });
    ifInClosedSet = isInClosedSet({ x, y });
    ifObstacle = isObstacle({ x, y });
    ifStartNode = isStartNode({ x, y });
    ifEndNode = isEndNode({ x, y });
  });
  function isStartNode(node) {
    if (isEmpty(startNode))
      return false;
    return node.x === startNode.x && node.y === startNode.y;
  }
  function isEndNode(node) {
    if (isEmpty(endNode))
      return false;
    return node.x === endNode.x && node.y === endNode.y;
  }
  function isObstacle(node) {
    let found = false;
    obstacles.forEach((obstacle) => {
      if (node.x === obstacle.x && node.y === obstacle.y) {
        found = true;
      }
    });
    if (found)
      return true;
    return false;
  }
  function isInPath(node) {
    if (path.length === 0)
      return false;
    let found = false;
    path.forEach((tmpNode) => {
      if (node.x === tmpNode.x && node.y === tmpNode.y) {
        found = true;
        return;
      }
    });
    if (found)
      return true;
    return false;
  }
  function isInOpenSet(node) {
    if (openSet.length === 0)
      return false;
    let found = false;
    openSet.forEach((tmpNode) => {
      if (node.x === tmpNode.x && node.y === tmpNode.y) {
        found = true;
        return;
      }
    });
    if (found)
      return true;
    return false;
  }
  function isInClosedSet(node) {
    if (closedSet.length === 0)
      return false;
    let found = false;
    closedSet.forEach((tmpNode) => {
      if (node.x === tmpNode.x && node.y === tmpNode.y) {
        found = true;
        return;
      }
    });
    if (found)
      return true;
    return false;
  }
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.running === void 0 && $$bindings.running && running !== void 0)
    $$bindings.running(running);
  $$result.css.add(css$4);
  return `<button ${running ? "disabled" : ""} class="${[
    "point svelte-1nvc1rl",
    (ifObstacle ? "black-bg" : "") + " " + (ifEndNode ? "end-bg" : "") + " " + (ifStartNode ? "start-bg" : "") + " " + (ifInPath && !isEmpty(startNode) && (!ifStartNode && !ifEndNode) ? "blue-bg" : "") + " " + (ifInOpenSet && !isEmpty(startNode) && !ifInPath && !ifStartNode && !ifEndNode ? "green-bg" : "") + " " + (ifInClosedSet && !ifInPath && !ifStartNode && !ifEndNode ? "red-bg" : "")
  ].join(" ").trim()}"></button>`;
});
const StartButton_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".btn.svelte-o7vhc4{display:inline-block;font-size:1.5rem;height:50px;width:140px;margin:0 20px;margin-bottom:20px;background-color:rgb(12, 164, 12);color:white;border-radius:30px}",
  map: null
};
const StartButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { running } = $$props;
  gridDetails.subscribe((obj) => {
    obj.openSet;
    obj.closedSet;
    obj.obstacles;
    obj.columns;
    obj.rows;
    obj.startNode;
    obj.endNode;
    obj.path;
  });
  if ($$props.running === void 0 && $$bindings.running && running !== void 0)
    $$bindings.running(running);
  $$result.css.add(css$3);
  return `<button ${running ? "disabled" : ""} class="${"btn svelte-o7vhc4"}">Start</button>`;
});
const ResetButton_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".btn.svelte-1rrpu1y{display:inline-block;font-size:1.5rem;height:50px;width:140px;margin:0 20px;margin-bottom:20px;background-color:rgb(182, 14, 14);color:white;border-radius:30px}",
  map: null
};
const ResetButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { running } = $$props;
  gridDetails.subscribe((obj) => {
    obj.openSet;
    obj.closedSet;
    obj.obstacles;
    obj.startNode;
    obj.endNode;
    obj.path;
  });
  function resetStore() {
    gridDetails.update((gridDetails2) => {
      return {
        ...gridDetails2,
        closedSet: [],
        openSet: [],
        obstacles: [],
        startNode: {},
        endNode: {},
        path: []
      };
    });
  }
  if ($$props.running === void 0 && $$bindings.running && running !== void 0)
    $$bindings.running(running);
  if ($$props.resetStore === void 0 && $$bindings.resetStore && resetStore !== void 0)
    $$bindings.resetStore(resetStore);
  $$result.css.add(css$2);
  return `


<button ${running ? "disabled" : ""} class="${"btn svelte-1rrpu1y"}">Reset
</button>`;
});
const ClearButton_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btn.svelte-w0rue0{display:inline-block;font-size:1.5rem;height:50px;width:140px;margin:0 20px;margin-bottom:20px;background-color:rgb(68, 68, 197);color:white;border-radius:30px}",
  map: null
};
const ClearButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { running } = $$props;
  gridDetails.subscribe((obj) => {
    obj.openSet;
    obj.closedSet;
    obj.obstacles;
    obj.startNode;
    obj.endNode;
    obj.path;
  });
  if ($$props.running === void 0 && $$bindings.running && running !== void 0)
    $$bindings.running(running);
  $$result.css.add(css$1);
  return `<button ${running ? "disabled" : ""} class="${"btn svelte-w0rue0"}">Clear</button>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.svelte-f6zwpn.svelte-f6zwpn{box-sizing:border-box}main.svelte-f6zwpn.svelte-f6zwpn{margin:0}.container.svelte-f6zwpn.svelte-f6zwpn{display:grid;width:auto;justify-content:center}.center.svelte-f6zwpn.svelte-f6zwpn{display:grid;grid-template-columns:repeat(3, auto);justify-content:center}.sliders.svelte-f6zwpn.svelte-f6zwpn{width:200px;font-size:1.2rem}.sliders.svelte-f6zwpn p.svelte-f6zwpn{margin:0}.sliders.svelte-f6zwpn input[type="range"].svelte-f6zwpn{width:100%}.flex-center.svelte-f6zwpn.svelte-f6zwpn{display:flex;justify-content:space-between}.flex-center.svelte-f6zwpn>p.svelte-f6zwpn{font-size:1.5rem;margin:0;font-weight:bold}div.svelte-f6zwpn.svelte-f6zwpn{--track-bg:rgb(64, 64, 64);--progress-bg:#2ecb40}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let columns, rows;
  gridDetails.subscribe((obj) => {
    columns = obj.columns;
    rows = obj.rows;
    obj.startNode;
  });
  let running = false;
  let localRows = rows;
  let localColumns = columns;
  let resetButtonRef;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<head class="${"svelte-f6zwpn"}"><title class="${"svelte-f6zwpn"}">Eav Long Sok&#39;s A* Algorithm Visualizer</title></head>
<main class="${"svelte-f6zwpn"}"><div class="${"flex-center svelte-f6zwpn"}"><div class="${"sliders svelte-f6zwpn"}"><p class="${"svelte-f6zwpn"}">rows: ${escape(localRows)}</p>
            <input type="${"range"}" min="${"10"}" max="${"50"}" step="${"5"}" ${running ? "disabled" : ""} class="${"svelte-f6zwpn"}"${add_attribute("value", localRows, 0)}></div>
        <p class="${"svelte-f6zwpn"}">${escape(running ? "Visualizing..." : "A* Path Finding Visualizer")}</p>
        <div class="${"sliders svelte-f6zwpn"}"><p class="${"svelte-f6zwpn"}">columns: ${escape(localColumns)}</p>
            <input type="${"range"}" min="${"10"}" max="${"50"}" step="${"5"}" ${running ? "disabled" : ""} class="${"svelte-f6zwpn"}"${add_attribute("value", localColumns, 0)}></div></div>
    <div class="${"center svelte-f6zwpn"}">${validate_component(StartButton, "StartButton").$$render(
      $$result,
      { running },
      {
        running: ($$value) => {
          running = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(ResetButton, "ResetButton").$$render(
      $$result,
      { running, this: resetButtonRef },
      {
        running: ($$value) => {
          running = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          resetButtonRef = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(ClearButton, "ClearButton").$$render(
      $$result,
      { running },
      {
        running: ($$value) => {
          running = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="${"container svelte-f6zwpn"}"${add_attribute("style", "grid-template-columns: repeat(" + columns + ", 30px);", 0)}>${each(Array(rows), (_, i) => {
      return `${each(Array(columns), (__, j) => {
        return `${validate_component(Cell, "Cell").$$render($$result, { x: j, y: i, running }, {}, {})}`;
      })}`;
    })}</div>
</main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
