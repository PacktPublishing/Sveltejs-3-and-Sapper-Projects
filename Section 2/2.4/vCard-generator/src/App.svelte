<script>
  import Navbar from "./Sections/Navbar.svelte";

  let disabled = true;
  let name = "";
  let firstInput;

  function resetClicked() {
    disabled = true;
    name = "";
    firstInput.focus();
  }

  function keyPressed(event) {
    event.key === "Shift" ? "" : (disabled = false);
  }
</script>

<Navbar title="vCard Generator" />

<form>
  <label>
    Name
    <input
      type="text"
      placeholder="Please enter your name"
      on:keydown={keyPressed}
      bind:value={name}
      bind:this={firstInput} />
  </label>
  <button {disabled} on:click|preventDefault={resetClicked}>Reset</button>
</form>

<section>{name}</section>
