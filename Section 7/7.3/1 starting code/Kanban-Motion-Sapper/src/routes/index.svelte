<script context="module">
  export function preload() {
    return this.fetch("https://kanban-motion.firebaseio.com/.json?shallow=true")
      .then(r => r.json())
      .then(boardsDB => {
        return { boardsDB };
      });
  }
</script>

<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let boardsDB;

  let init = false;
  let newBoardId;

  onMount(() => {
    setTimeout(() => {
      newBoardId = boardsDB ? findIdForNewBoard() : 1;
      init = true;
    }, 500);
  });

  function findIdForNewBoard() {
    const boardIDs = Object.keys(boardsDB).map(e => parseInt(e.slice(6)));
    const newBoardId = maxValue(boardIDs) + 1;
    return newBoardId ? newBoardId : 0;
  }

  function maxValue(arr) {
    let max = arr[0];
    for (let val of arr) {
      if (val > max) {
        max = val;
      }
    }
    return max;
  }
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
  {#if boardsDB}
    {#each Object.keys(boardsDB) as board, i}
      <a href={`./${board}`} in:fade>
        <button>{board}</button>
      </a>
    {/each}
  {/if}
  <a href={`./board-${newBoardId}`} in:fade>
    <button>+</button>
  </a>
{/if}
