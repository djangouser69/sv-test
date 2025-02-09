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

<style>
  nav {
    display: flex;
    flex-direction: row;
    padding: 1rem;
    gap: 1rem;
    justify-content: start;
    align-items: center;
    a {
      font-size: 1.2rem;
      font-weight: 550;
      text-decoration: none;
      transition: 0.7s;
      &:hover {
        transform: scale(1.1);
        color: orchid;
      }
    }
  }
</style>
