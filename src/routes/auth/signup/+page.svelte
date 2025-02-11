<script>
  import { redirect } from "@sveltejs/kit";

  let username = $state("");
  let password = $state("");
</script>

<h1>Signup</h1>
<form
  onsubmit={e => {
    e.preventDefault();
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);
    const newData = new FormData(e.currentTarget);
    const testData = new FormData(e.target);
    console.log(e.target, e.currentTarget);
    console.log(data, newData, testData);
    // server-side redirection
    // redirect(303, "/");

    // client-side redirect
    // window.location.href = "/";
    fetch("http://localhost:8000/form", { method: "post", body: newData })
      .then(x => x.json())
      .then(x => {
        console.log({ x });
      });
  }}
>
  <!-- name object is what FormData uses for key -->
  <input type="text" bind:value={username} name="username" />
  <input type="text" bind:value={password} name="password" />
  <button>Signup</button>
</form>
<p>{username} | {password}</p>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    width: 50%;
  }
</style>
