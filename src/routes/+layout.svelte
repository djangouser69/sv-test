<script>
  const { children } = $props();
</script>

<nav>
  <a href="/">index</a>
  <a href="/todos">todos</a>
  <a href="/plot">plot</a>
  <a href="/route">route</a>
  <a href="/fetch">fetch</a>
</nav>

{@render children()}
