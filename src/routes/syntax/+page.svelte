<script>
  const arr = $state([
    {
      title: "django",
      desc: "monolithic, batteries included framework",
      points: [
        "batteries-included",
        "built-in DB",
        "auth system built in",
        "slow as shit",
        "poor scalability",
      ],
    },
    {
      title: "sveltekit",
      desc: "high-performance, modern js frontend with a wide-variety of client-side rendering features.",
      points: [
        "very fast",
        "easy CDN integration",
        "cutting-edge features",
        "phenomenal scalability",
      ],
    },
  ]);
</script>

<h1>Web Dev?</h1>
<p>
  Ultimately, the decision lies in our hands. Django apps are incredibly fast to
  get up and running, hard to get any faster than django. The overall db setup,
  user auth, and ability to set up and scale out a fully fledged db-integrated,
  user authed, secure (probably one of the biggest benefits), web framework is
  huge. Super freaking useful and highly extensible. On the other hand,
  sveltekit is also kind of the shit right now. Super scalable, highly
  performant, very convenient and fun to write in, and allows for completely
  client-side rendered applications. Almost the polar opposite to Django,
  definitely more work on the frontend to get things up and running: especially
  with user auth and db integration. Going to be a lot more low-level sql and
  api management with the sveltekit route, but the end product is going to be
  infinitely more scalable, cheap to run, and easy to extend. Overall, the
  sveltekit/fastapi way will almost undoubtably produce better web apps in the
  long run. Django is super freaking cool, but the lack of performance and
  client-side abilities really kills it. Just too expensive and inconvenient to
  have to run servers for every ounce of computing power. Much better and
  cheaper to harness the clients machine to compute things, and use an api on
  the backend for any business logic and/or validation.
</p>

<ul>
  {#each arr as x}
    <li>
      <h3>{x.title}</h3>
      <p>{x.desc}</p>
      <ul>
        {#each x.points as y}
          <li>{y}</li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>

<style>
  p {
    line-height: 1.5;
  }
</style>
