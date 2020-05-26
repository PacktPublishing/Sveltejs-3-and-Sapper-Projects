<script>
  import Flex from "../Layout/Flex.svelte";

  export let QRCode = false;
  export let values = {
    name: "",
    organisation: "",
    jobTitle: "",
    phone: "",
    address: "",
    email: "",
    photoURL: "",
    logoURL: "",
    backgroundURL: ""
  };
</script>

<style>
  section {
    width: 600px;
    height: 370px;
    padding: 2rem 2rem;
    margin: 2rem auto 0 auto;
    border-radius: 10px;
    position: relative;
    color: white;
    box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.12), 0 1px 2px hsla(0, 0%, 0%, 0.24);
    background: var(--bg);
    background-size: cover;
  }

  h1 {
    color: rgb(61, 154, 253);
    text-transform: uppercase;
  }
  h2 {
    color: rgb(61, 154, 253);
  }
  .logo {
    margin: 0.5rem 0.5rem 0.5rem 0;
    position: relative;
    top: 5px;
  }
  #photo {
    /* margin-top: 0.8rem; */
    border-radius: 50%;
    border: 2px solid rgb(61, 154, 253);
  }
  #qrcode {
    margin-top: 5rem;
  }
</style>

<section
  style={`--bg: linear-gradient(to bottom right, rgba(16, 24, 26, ${values.backgroundURL === '' ? 1 : 0.8}),rgba(33, 87, 145, ${values.backgroundURL === '' ? 1 : 0.8})),url(${values.backgroundURL})`}>
  <Flex justify={'space-between'} align={'start'}>
    <Flex direction={'column'}>
      <picture>
        <img id="photo" src={values.photoURL} alt="avatar" />
      </picture>
      <h1>{values.name}</h1>
      <h3>{values.jobTitle}</h3>
      <Flex>
        <picture class="logo">
          <img
            src="https://icongr.am/entypo/old-phone.svg?size=20&color=ffffff"
            alt="phone" />
        </picture>
        <span>{values.phone}</span>
      </Flex>
      <Flex>
        <picture class="logo">
          <img
            src="https://icongr.am/entypo/address.svg?size=20&color=ffffff"
            alt="address" />
        </picture>
        <span>{values.address}</span>
      </Flex>
      <Flex>
        <picture class="logo">
          <img
            src="https://icongr.am/entypo/email.svg?size=20&color=ffffff"
            alt="email" />
        </picture>
        <span>{values.email}</span>
      </Flex>
    </Flex>
    <Flex direction={'column'} align={'end'}>
      <Flex align="center">
        <picture class="logo">
          <img src={values.logoURL} alt="logo" />
        </picture>
        <h2>{values.organisation}</h2>
      </Flex>
      <picture id="qrcode">{QRCode}</picture>
    </Flex>
  </Flex>
</section>
