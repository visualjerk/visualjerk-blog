const DIALOG_OPEN_EVENT = 'DIALOG_OPEN_EVENT'
const eventBus = new EventTarget()

export type DialogEventPayload = {
  kind: string
  context: Record<string, unknown>
}

export const dialogProvider = {
  open(kind: string, context: Record<string, unknown>) {
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
