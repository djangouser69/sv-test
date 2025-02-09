<script>
  const arr = new Array();
  for (let i = 1; i < 4; i++) {
    arr.push(i);
  }
  $inspect(arr);
</script>

<h2>Fetching data</h2>
<!-- {#await fetch("https://jsonplaceholder.typicode.com/posts/1").then( x => x.json() )}
  <p>loading...</p>
{:then data}
  {$inspect(data)}
  {data}
  {data.title + data.id}
  <hr />
  {typeof data}
{/await} -->

<ul>
  {#each arr as i}
    {#await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`).then( x => x.json() )}
      <p>loading {i}...</p>
    {:then data}
      <li>
        <h4>{data.id}</h4>
        <p>{data.title}</p>
      </li>
    {/await}
  {/each}
</ul>
