<script>
  const todos = $state([]);
  let title = $state("");
  let desc = $state("");
</script>

<h1>Test</h1>
<p>Here is a super neat sveltekit app, pretty neat man.</p>
<p>{title}</p>
<p>{desc}</p>
<form
  onsubmit={e => {
    e.preventDefault();
    todos.push({ title, desc });
    title = "";
    desc = "";
  }}
>
  <input type="text" bind:value={title} />
  <input type="text" bind:value={desc} />
  <button>add todo</button>
</form>
<ul>
  {#each todos as x}
    <li>
      <h3>{x.title}</h3>
      <p>{x.desc}</p>
    </li>
  {/each}
</ul>
