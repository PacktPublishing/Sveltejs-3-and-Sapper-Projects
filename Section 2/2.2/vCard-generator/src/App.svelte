<script>
  import Navbar from "./Sections/Navbar.svelte";

  let disabled = true;

  function resetClicked() {
    disabled = true;
  }

  function keyPressed() {
    disabled = false;
  }
</script>

<Navbar title="vCard Generator" />

<form>
  <label>
    Name
    <input
      type="text"
      placeholder="Please enter your name"
      on:keydown={keyPressed} />
  </label>
  <button type="reset" {disabled} on:click={resetClicked}>Reset</button>
</form>
