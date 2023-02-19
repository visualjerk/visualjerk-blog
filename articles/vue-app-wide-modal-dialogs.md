# App Wide (Modal) Dialogs with Vue

Vue gives developers a lot of power and flexibility to create reusable components and logic. This is part of the reason developers ♥️ Vue, but sometimes leads to hard decisions on which pattern to choose for a certain use case. In this article I'll shed some light on a use case that took us a bit of time to get right:

**Modal dialogs that are shared accross the whole application** (e.g. Confirmation Dialogs)

## Short On Time?

> Steal with pride, everything you need from the [Stackblitz Example](#)

## Minimum Requirements

Before diving into the details, lets take a look at what we want to achieve.

The modal dialog

1. can be triggered from multiple places
2. is able to receive context specific variables
3. is able to provide feedback to the place where it was triggered
4. is rendered only once even if used in multiple places

## Developer Experience

In addition to the minimum requirements we would also like to get a great DX with

1. providing a simple api
2. offering type safety for a dialog's accepted context and feedback

## Defining the API

Usually a good way to start building a new component is by thinking about how you want to use it. Let's look at a concrete example. Before a user deletes an entity, she is asked to confirm this action.

Without the confirmation our code might look like this:

```vue
<template>
  ...
  <AppButton variant="danger" @click="handleDelete">Delete</AppButton>
  ...
</template>

<script setup lang="ts">
...
async function handleDelete() {
  await api.delete(props.id)
  router.push('/overview')
}
...
</script>
```

After applying our dream dialog api we might end up with:

```ts
import { dialogs } from '@src/dialogs'
...
async function doDelete() {
  await api.delete(props.id)
  router.push('/overview')
}

function handleDelete() {
  dialogs.trigger('confirm', {
    title: `Do you really want to delete ${props.name}?`,
    onConfirm: () => doDelete(),
  })
}
</script>
```

## Further Reading

- [Modal & Nonmodal Dialogs: When (& When Not) to Use Them](https://www.nngroup.com/articles/modal-nonmodal-dialog/)
