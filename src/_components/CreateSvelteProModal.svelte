<script>
  import Modal from './common/Modal.svelte'
  import FlexRow from './utility/FlexRow.svelte'
  import { XCircleIcon } from 'svelte-feather-icons'
  import createSvelteFact from '../net/createSvelteFact'

  export let emitCloseAction
  
  let title = ''
  let description = ''
  let type = 'PRO'

  const submitForm = async () => {
    await createSvelteFact({ title, description, type: 'PRO' })
    emitCloseAction()
  }
</script>

<style>
  form {
    padding: 15px;
  }
  fieldset {
    border: none;
  }
  label {
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: var(--letter-spacing);
  }
  input[type="text"], textarea {
    margin-top: 5px;
    width: 100%;
    outline: none;
    margin-bottom: 0;
  }
  input[type="text"]:focus,
  input[type="text"]:active,
  textarea:focus,
  textarea:active {
    border-color: var(--primary-color);
  }
</style>

<Modal
  title="Create a Svelte Pro"
  actionIcons={[
    {
      icon: XCircleIcon,
      action: e => emitCloseAction(),
      color: 'var(--primary-color)',
    },
  ]}
  footerActions={[
    {
      action: () => emitCloseAction(),
      buttonText: 'Cancel',
      backgroundColor: 'var(--warning-color)',
    },
    {
      action: () => submitForm(),
      buttonText: 'Submit Pro',
      backgroundColor: 'var(--secondary-color)',
    }
  ]}
  >
    <form>
      <fieldset>
        <label for="title">Title</label>
        <input
          bind:value={title}
          id="title"
          name="title"
          type="text"
          placeholder="My Svelte Fact"
        />
      </fieldset>
      <fieldset>
        <label for="description">Description</label>
        <textarea
          bind:value={description}
          id="description"
          name="description"
          type="text"
          placeholder="My Svelte Fact"
        />
      </fieldset>
      
    </form>
  </Modal>