<script>
  import Navbar from "./Sections/Navbar.svelte";

  let disabled = false;
</script>

<Navbar title="vCard Generator" />

<button {disabled}>Reset</button>
