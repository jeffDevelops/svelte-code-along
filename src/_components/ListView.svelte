<script>
  import Loader from './common/Loader.svelte'
  export let items
  export let removable = true
</script>

<style>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }
  li {
    position: relative;
    padding: var(--uniform-padding);
    border-bottom: 1px solid var(--gray1-color);
  }
  li:nth-of-type(odd) {
    background-color: var(--gray2-color);
  }
  li:last-of-type {
    border-bottom: 0;
  }
  p {
    line-height: var(--textbody-line-height);
    margin: 10px 0;
  }
  span {
    position: absolute;
    top: 10px;
    right: 15px;
    color: var(--error-color);
    font-size: 1.6em;
    cursor: pointer;
  }
</style>

{#if Array.isArray(items)}
  <ul>
    {#each items as item}
      <li>
        {#if removable}
          <span>×</span>
        {/if}
        <strong>{item.title}</strong>
        <p>{item.description}</p>
      </li>
    {/each}
  </ul>
{:else}
  <Loader />
{/if}

