<script>
  const { children } = $props();
</script>

<nav>
  <a href="/">index</a>
  <a href="/todos">todos</a>
  <a href="/plot">plot</a>
  <a href="/route">route</a>
  <a href="/fetch">fetch</a>
  <a href="/notes">notes</a>
  <a href="/syntax">syntax</a>
</nav>

{@render children()}

<style>
  nav {
    display: flex;
    flex-direction: row;
    padding: 2rem;
    gap: 1.5rem;
    justify-content: start;
    align-items: center;
    border-bottom: 4px solid black;
    a {
      font-size: 1.4rem;
      font-weight: 550;
      text-decoration: none;
      color: royalblue;
      transition: 0.7s;
      &:hover {
        transform: scale(1.1);
        color: orchid;
      }
      &:visited {
        color: orangered;
      }
      &::after {
        content: "-";
      }
    }
  }
</style>
