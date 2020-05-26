<script>
  import Navbar from "./Sections/Navbar.svelte";
  import VCard from "./Sections/VCard.svelte";
  import Form from "./UI/Form.svelte";

  let QRCode = false;
  let values;
</script>

<style>
  main {
    padding: 1rem;
    max-width: 600px;
    margin: 0 auto;
  }
</style>

<Navbar title="vCard Generator" />

<main>
  <Form
    bind:values
    on:createQRCode={e => {
      QRCode = e.detail;
    }} />
  <VCard {values} {QRCode} />
</main>
