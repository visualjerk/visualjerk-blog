import type { ComponentProps } from '../types'
import type { DIALOG_COMPONENTS } from './components'

type DialogKind = keyof typeof DIALOG_COMPONENTS
type DialogContext<TKind extends DialogKind> = ComponentProps<
  typeof DIALOG_COMPONENTS[TKind]
>

export type DialogEventPayload<TKind extends DialogKind = DialogKind> = {
  kind: DialogKind
  context: DialogContext<TKind>
}

const DIALOG_OPEN_EVENT = 'DIALOG_OPEN_EVENT'
const eventBus = new EventTarget()

export const dialogProvider = {
  open<TKind extends DialogKind>(kind: TKind, context: DialogContext<TKind>) {
    eventBus.dispatchEvent(
      new CustomEvent<DialogEventPayload>(DIALOG_OPEN_EVENT, {
        detail: {
          kind,
          context,
        },
      })
    )
  },
  subscribe(handler: (payload: DialogEventPayload) => void) {
    function handleEvent(event: CustomEvent<DialogEventPayload>) {
      handler(event.detail)
    }

    eventBus.addEventListener(DIALOG_OPEN_EVENT, handleEvent as EventListener)
    return () =>
      eventBus.removeEventListener(
        DIALOG_OPEN_EVENT,
        handleEvent as EventListener
      )
  },
}
