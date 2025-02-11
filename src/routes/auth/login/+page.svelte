<script>
  let username = $state();
  let password = $state();
</script>

<h1>Login here</h1>

<form
  onsubmit={e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data);
    fetch("http://localhost:8000/token", { method: "post", body: data })
      .then(x => x.json())
      .then(x => {
        console.log(x);
        if (x.detail) {
          alert(x.detail);
        } else if (x.access_token && x.token_type) {
          localStorage.setItem("jwt", JSON.stringify(x));
        }
      });
  }}
>
  <label for="username">username</label>
  <input type="text" bind:value={username} name="username" />
  <label for="password">password</label>
  <input type="text" bind:value={password} name="password" />
  <button>login</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    width: 50%;
  }
</style>
