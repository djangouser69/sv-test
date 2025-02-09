<script>
  import { onMount } from "svelte";

  onMount(async () => {
    const { newPlot } = await import("plotly.js-dist");

    let data;
    let layout;
    data = { x: [1, 2, 3, 4], y: [5, 6, 7, 8] };
    layout = { title: "graph title", hovermode: "x unified" };
    newPlot("1", [data], layout);

    newPlot("2", [{ ...data, type: "bar" }], layout);
  });
</script>

<h1>Plot test</h1>
<div class="main">
  <div id="1"></div>
  <div id="2"></div>
  <div id="3"></div>
</div>
