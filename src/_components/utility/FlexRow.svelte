<script>
  export let justifyContent = 'center'
  export let alignItems = 'center'
  export let height = 'auto'
  export let width = '100%'
  export let margin = '0'
  export let padding = '0'
</script>

<div style={`
  margin: ${margin};
  padding: ${padding};
  height: ${height};
  width: ${width};
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`}>
  <slot />
</div>