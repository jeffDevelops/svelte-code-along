<script>
  import ListView from './ListView.svelte'
  import Icon from './common/Icon.svelte'
  import ActionButton from './common/ActionButton.svelte'

  export let title = '${YOUR TITLE HERE}'
  export let actionIcons = []
  export let kind = 'LIST_VIEW'
  export let content = '${YOUR CONTENT HERE}'
  export let listViewItems
  export let footerActions = []
</script>

<style>
  section {
    box-shadow: var(--box-shadow-centered);
    border-radius: var(--border-radius);
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: var(--plain-color);
  }
  header {
    padding: var(--uniform-padding);
    width: 100%;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    border-bottom: 1px solid var(--gray1-color);
    display: flex;
    justify-content: space-between;
  }
  footer {
    border-top: 1px solid var(--gray1-color);
    padding: var(--uniform-padding);
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
</style>

<section>
  <header>
    { title }
    <span>
      {#each actionIcons as icon, index}
        <Icon
          on:click={icon.action}
          icon={icon.icon}
          color={icon.color}
          margin={index === actionIcons.length - 1 ? '0' : '0 15px 0 0'}
        />
      {/each}
    </span>
  </header>
  {#if kind === 'LIST_VIEW'}
    <ListView
      removable={false}
      items={listViewItems}
    />
  {:else}
    <slot>{ content }</slot>
  {/if}
  {#if Array.isArray(footerActions) && footerActions.length > 0}
    <footer>
      {#each footerActions as button, index}
        <ActionButton
          buttonText={button.buttonText}
          action={button.action}
          color={button.color}
          backgroundColor={button.backgroundColor}
          margin={index === footerActions.length - 1 ? '0' : '0 15px 0 0'}
        />
      {/each}
    </footer>
  {/if}
</section>