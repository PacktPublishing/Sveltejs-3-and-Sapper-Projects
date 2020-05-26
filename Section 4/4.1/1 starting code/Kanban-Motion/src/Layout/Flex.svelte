<script>
  export let justify = "left";
  export let align = "baseline";
  export let direction = "row";
  export let noWrap = false;
</script>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: left;
  }

  .space-between {
    justify-content: space-between;
  }
  .start {
    align-items: flex-start;
  }
  .center {
    align-items: center;
  }
  .end {
    align-items: flex-end;
  }
  .column {
    flex-direction: column;
  }
  .noWrap {
    flex-wrap: nowrap;
  }
</style>

<div
  class:column={direction === 'column'}
  class:space-between={justify === 'space-between'}
  class:start={align === 'start'}
  class:center={align === 'center'}
  class:end={align === 'end'}
  class:noWrap>
  <slot />
</div>
