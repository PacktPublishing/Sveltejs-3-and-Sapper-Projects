<script>
  import Navbar from "./Sections/Navbar.svelte";
  import VCard from "./Sections/VCard.svelte";
  import Form from "./UI/Form.svelte";

  let QRCode = "";
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
    on:createQRCode={e => {
      QRCode = e.detail;
    }} />
  <VCard {QRCode} />
</main>
