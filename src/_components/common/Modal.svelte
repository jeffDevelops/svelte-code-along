<script>
	import { fade, fly } from 'svelte/transition';
  import Widget from '../Widget.svelte';

  export let title
  export let actionIcons
  export let footerActions
</script>

<style>
  section {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--modal-underlay-color);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div {
    transform: translateY(-25px);
    z-index: 2;
    max-width: 650px;
    width: 95%;
  }
</style>

<section
  in:fade="{{ duration: 400 }}"
  out:fade="{{ duration: 300 }}">

  <div
    in:fly="{{ y: 150, duration: 400 }}"
    out:fly="{{ y: -150, duration: 300}}"
  >
    <Widget
      kind="FORM"
      title={title}
      actionIcons={actionIcons}
      footerActions={footerActions}
    >

      <slot />

    </Widget>
  </div>
</section>