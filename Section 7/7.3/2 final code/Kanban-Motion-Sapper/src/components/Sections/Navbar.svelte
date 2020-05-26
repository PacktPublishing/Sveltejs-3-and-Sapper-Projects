<script>
  import { fade } from "svelte/transition";
  export let segment;
</script>

<style>
  nav {
    width: 100%;
    /* font-size: 2rem; */
    padding: 0.5rem 0;
    background-color: #205;
    color: #fff;
    text-align: center;
    box-shadow: 0 1px 5px hsla(303, 91%, 83%, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    height: 2rem;
    z-index: 5;
  }

  div {
    height: 3rem;
  }

  span {
    font-size: 1rem;
    margin-left: 0.2rem;
  }
  #right {
    margin-left: 0rem;
  }
  a,
  a:hover {
    color: inherit;
    text-decoration: none;
  }
</style>

<nav>
  <h1>
    <a href="./">
      {#if segment}
        KM
        <span>{segment}</span>
      {:else}
        K<span>ANBAN</span>
        M<span id="right">OTION</span>
      {/if}
    </a>
  </h1>
</nav>
<div />
