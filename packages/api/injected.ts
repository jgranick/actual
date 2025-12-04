// TODO: comment on why it works this way

import type { Handlers } from 'loot-core/types/handlers';

type Send = <K extends keyof Handlers, T extends Handlers[K]>(
  name: K,
  args?: Parameters<T>[0],
) => Promise<Awaited<ReturnType<T>>>;

export let send: Send;

export function override(sendImplementation: Send) {
  send = sendImplementation;
}
