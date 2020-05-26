<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  const dispatch = createEventDispatcher();

  export let id;
  export let title = "";
  export let newCard = false;
  let introtime = 400;
  let outrotime = newCard ? 0 : 400;
</script>

<style>
  article {
    min-width: 200px;
    margin: 0.5rem;
    background-color: rgb(229, 218, 236);
    border-radius: 0.2rem;
    position: relative;
  }

  h3 {
    padding: 0.5rem 0;
    text-align: center;
    color: #50a;
  }

  button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0 0.4rem;
    color: rgb(167, 0, 0);
    background-color: #f4f4f4;
    border: none;
    visibility: hidden;
  }

  button:not(:disabled):active {
    background-color: rgb(167, 0, 0);
    color: #f4f4f4;
  }

  h3:hover button {
    visibility: visible;
  }

  .newCard {
    background-color: rgb(0, 121, 36);
  }
  .newCardTitle {
    color: white;
  }
</style>

<article
  {id}
  class:newCard
  in:fade={{ duration: introtime }}
  out:fade={{ duration: outrotime }}>
  <h3 class:newCardTitle={newCard}>
    {title}
    <button
      on:click={() => {
        dispatch('deleteCard', id);
      }}>
      x
    </button>
  </h3>

  <slot>Empty Card</slot>
</article>
