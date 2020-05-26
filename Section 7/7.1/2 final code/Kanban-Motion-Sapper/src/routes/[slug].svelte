<script context="module">
  export async function preload({ params }) {
    return { board: params.slug };
  }
</script>

<script>
  import Kanban from "../components/Sections/Kanban.svelte";
  export let board;
</script>

<svelte:head>
  <title>Kanban Motion - {board}</title>
</svelte:head>

<Kanban databaseURL={`https://kanban-motion.firebaseio.com/${board}.json`} />
