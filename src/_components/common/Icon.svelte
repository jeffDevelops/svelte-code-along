<script>
  export let color;
  export let icon;
  export let margin = '0'
  export let cursor = 'pointer'
  export let width = '18px'
  export let height = '18px'
</script>

<i
  on:click
  style={`
    display: inline-block;
    cursor: ${cursor};
    margin: ${margin};
    color: ${color};
    width: ${width};
    height: ${height};
  `}
>
  <svelte:component this={icon} />
</i>

