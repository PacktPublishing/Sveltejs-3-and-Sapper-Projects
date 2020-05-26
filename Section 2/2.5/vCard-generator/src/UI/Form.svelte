<script>
  let disabled = true;
  let name = "";
  let firstInput;
  let active = true;

  function resetClicked() {
    disabled = true;
    name = "";
    firstInput.focus();
  }

  function keyPressed(event) {
    event.key === "Shift" ? "" : (disabled = false);
  }
</script>

<style>
  .active {
    border-color: hsl(211, 63%, 35%);
    box-shadow: 0 1px 3px hsla(211, 63%, 35%, 0.4);
  }
</style>

<form>
  <label>
    Name
    <input
      type="text"
      placeholder="Please enter your name"
      class:active
      on:focus={() => {
        active = true;
      }}
      on:blur={() => {
        active = false;
      }}
      on:keydown={keyPressed}
      bind:value={name}
      bind:this={firstInput} />
  </label>
  <button {disabled} on:click|preventDefault={resetClicked}>Reset</button>
</form>
