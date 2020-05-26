<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  const boards = ["board-1", "board-2"];
  let init = false;
  onMount(() => {
    setTimeout(() => {
      init = true;
    }, 500);
  });
</script>

<style>
  button {
    margin: 0.5rem;
    padding: 4rem 1rem;
    background-color: rgb(47, 10, 104);
    color: white;
    font-weight: bold;
  }
  button:not(:disabled):active {
    background-color: rgb(0, 121, 36);
    color: #f4f4f4;
  }
  a {
    text-decoration: none;
  }
</style>

<svelte:head>
  <title>Kanban Motion</title>
</svelte:head>

{#if init}
  {#each boards as board, i}
    <a href={`./${board}`} in:fade>
      <button>{board}</button>
    </a>
  {/each}
{/if}
