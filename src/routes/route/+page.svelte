<script>
  let reasons = $state([
    "faster and more scalable throuth a CDN",
    "client side computing, much more scalable and faster/efficient",
    "leverage JS speed and extensibility",
    "unique and efficient syntax, best in class front end design patterns",
    "fastest js framework in town, compiles down to pure vanilla js",
    "AJAX",
    "SPA like instant page switches, very high quality for users",
    "much better for hitting API endpoints",
    "much more flexibility with backend, we can use whatever lang or framework we so choose",
    "FAR superior CSS customisation",
    "tailwind CSS",
    "component libraries",
    "scoped styles",
    "cheap and sooo scalable through cloudflare, we could have dozens of sites up and running for just a couple of bucks per month",
  ]);

  let i = $state();
</script>

<h2>Welcome to my route endpoint!</h2>
<p>This is just so freaking convenient man.</p>
<h1>Pros of sveltekit</h1>
<ul>
  {#each reasons as x}
    <li><strong>{x}</strong></li>
  {/each}
</ul>

<form
  onsubmit={e => {
    e.preventDefault();
    reasons.push(i);
    i = "";
  }}
>
  <h3>Anything else?</h3>
  <input type="text" bind:value={i} />
  <button type="submit">add another item</button>
</form>
