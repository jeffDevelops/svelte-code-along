<script>
  import { LoaderIcon } from 'svelte-feather-icons'
  import Icon from './common/Icon.svelte'
</script>

<style>
  section {
    display: flex;
    height: 100%;
    width: 100%;
    background-color: var(--plain-color);
    align-items: center;
    justify-content: center;
  }

  @keyframes spinLoader {
    from { transform: rotate(0turn); }
    to { transform: rotate(1turn); }
  }

  div {
    height: 25px;
    width: 25px;
    animation: spinLoader .9s ease infinite;
    transform-origin: center center;
  }
</style>

<section>
  <div>
    <Icon
      icon={LoaderIcon}
      color="var(--primary-color)"
      height="25px"
      width="25px"
    />
  </div>
</section>