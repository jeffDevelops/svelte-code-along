<script>
  export let color = "var(--plain-color)"
  export let backgroundColor = "var(--primary-color)"
  export let action = () => console.log('Good job, you clicked the button')
  export let buttonText = '${Your button text here}'
  export let margin
</script>

<button
  on:click={action}
  style={`
    cursor: pointer;
    border: none;
    padding: 8px 12px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: var(--letter-spacing);
    background-color: ${backgroundColor};
    color: ${color};
    margin: ${margin};

    &:hover {
      box-shadow: var(--box-shadow-centered);
    }
  `}
>
  { buttonText }
</button>