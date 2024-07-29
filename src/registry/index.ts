import { SimplifyDeep, UnionToIntersection } from "type-fest";

import { default as controllers } from "./controller";
import { default as reserves } from "./reserve";

function wrapRegistry<T, U extends Registry<T>>(registry: U): Registry<T> {
  return new Proxy(registry, {
    get: (target, prop: string) => {
      return target[prop] ?? {};
    },
  }) as Registry<T>;
}

export const CONTROLLERS = wrapRegistry(
  controllers as any
) as typeof controllers;
export const RESERVES = wrapRegistry(reserves as any) as typeof reserves;

export type ExtractType<T> = T extends {
  [key: string]: {
    [contract: string]: infer U;
  };
}
  ? Dedupe<U>
  : never;

type LastOf<T> = UnionToIntersection<
  T extends any ? () => T : never
> extends () => infer R
  ? R
  : never;

type Dedupe<
  T,
  L = LastOf<T>,
  N = [T] extends [never] ? true : false
> = true extends N ? never : Dedupe<Exclude<T, L>> | L;

type ContractList<T> = Partial<Record<string, ExtractType<T>>>;
export type Registry<T> = SimplifyDeep<Record<string, ContractList<T>>>;

export { fetchReserves, fetchControllers } from "./contracts";
