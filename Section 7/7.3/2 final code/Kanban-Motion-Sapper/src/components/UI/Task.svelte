<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { slide } from "svelte/transition";

  const dispatch = createEventDispatcher();

  export let id;
  export let value = "New Task";
  export let firstCard = false;
  export let lastCard = false;

  let taskJustAdded = false;
  let thisInput;

  onMount(() => {
    thisInput.focus();
  });
</script>

<style>
  label {
    position: relative;
    padding: 1.45rem 0.5rem;
  }
  input {
    width: 100%;
    margin: 0;
    padding: 0.2rem;
    background: white;
    color: #333;
    border-radius: 0.2rem;
    transition: background-color 200ms linear;
  }
  .taskJustAdded {
    border: 1px solid rgb(0, 121, 36);
    background-color: rgb(0, 121, 36);
    color: white;
  }
  button {
    position: absolute;
    visibility: hidden;
    z-index: 3;
    margin: 0;
  }

  label:hover button {
    visibility: visible;
  }

  #btnClose {
    top: -0.05rem;
    right: 0.45rem;
    padding: 0 0.4rem;
    color: rgb(167, 0, 0);
    background-color: #f4f4f4;
  }
  #btnClose:not(:disabled):active {
    background-color: rgb(167, 0, 0);
    color: #f4f4f4;
  }

  .btnArrow {
    bottom: -0.05rem;
    padding: 0.2rem 2rem 0.4rem 2rem;
    color: #50a;
    background-color: #f4f4f4;
    font-size: 2rem;
    line-height: 0.8rem;
  }
  .btnArrow:not(:disabled):active {
    background-color: #50a;
    color: #f4f4f4;
  }
  #btnRight {
    right: 0.45rem;
  }
  #btnLeft {
    left: 0.45rem;
  }
</style>

<label
  transition:slide
  on:introend={() => {
    taskJustAdded = true;
    setTimeout(() => {
      taskJustAdded = false;
    }, 400);
  }}>
  <input
    {id}
    type="text"
    placeholder="Insert task..."
    bind:value
    bind:this={thisInput}
    on:blur={() => {
      dispatch('blurred', { value: value, id: id });
    }}
    class:taskJustAdded />
  <button
    id="btnClose"
    on:click={() => {
      dispatch('deleteTask', id);
    }}>
    x
  </button>
  {#if !firstCard}
    <button
      id="btnLeft"
      class="btnArrow"
      on:click={() => {
        dispatch('moveLeft', { value: value, id: id });
      }}>
      ←
    </button>
  {/if}
  {#if !lastCard}
    <button
      id="btnRight"
      class="btnArrow"
      on:click={() => {
        dispatch('moveRight', { value: value, id: id });
      }}>
      →
    </button>
  {/if}
</label>
