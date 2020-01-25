<script>
  import ListView from './ListView.svelte'
  import Icon from './common/Icon.svelte'
  import ActionButton from './common/ActionButton.svelte'
  import Card from './common/Card.svelte'

  export let title = '${YOUR TITLE HERE}'
  export let actionIcons = []
  export let kind = 'LIST_VIEW'
  export let content = '${YOUR CONTENT HERE}'
  export let listViewItems
  export let footerActions = []
</script>

<style>
  header {
    height: 50px;
    padding: var(--uniform-padding);
    width: 100%;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    border-bottom: 1px solid var(--gray1-color);
    display: flex;
    justify-content: space-between;
  }
  section {
    height: calc(100% - 50px);
    overflow: scroll;
  }
  footer {
    border-top: 1px solid var(--gray1-color);
    padding: var(--uniform-padding);
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
</style>

<Card>
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
  <section>
  {#if kind === 'LIST_VIEW'}
    <ListView
      removable={false}
      items={listViewItems}
    />
  {:else}
    <slot>{ content }</slot>
  {/if}
  </section>
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
</Card>