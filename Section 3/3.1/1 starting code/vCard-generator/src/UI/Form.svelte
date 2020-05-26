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
  label {
    display: flex;
    align-items: baseline;
    margin: 0.5rem;
    font-weight: bold;
  }
  input {
    width: 100%;
    margin: 0 0.5rem;
    border-radius: 5px;
  }
  article {
    display: flex;
    justify-content: space-evenly;
  }
  button {
    margin: 0.5rem 0;
    cursor: pointer;
    border-radius: 5px;
  }
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
  <article>
    <button {disabled} on:click|preventDefault={resetClicked}>Reset</button>
  </article>
</form>
