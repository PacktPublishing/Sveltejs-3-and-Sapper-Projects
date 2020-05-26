<script>
  import Navbar from "../components/Sections/Navbar.svelte";

  // export let segment;
</script>

<style>
  main {
    padding: 1rem;
  }
</style>

<!-- <Navbar {segment} /> -->
<Navbar />

<main>
  <slot />
</main>
