import type { ConfigResponse as ReserveConfigResponse } from "../types/UnstakeReserve.types";
import type { ConfigResponse as ControllerConfigResponse } from "../types/UnstakeController.types";
import { CREATION_DATES } from "./constants";
import { fetchRegistry } from "@entropic-labs/registry-api";

const contracts = {
  controller: {
    codes: {
      "harpoon-4": [3512],
      "kaiyo-1": [326],
    },
    mapper: (address: string, config: unknown) => {
      const { ["owner"]: _, ...newConfig } = config as ControllerConfigResponse;
      return newConfig;
    },
  },
  reserve: {
    codes: {
      "harpoon-4": [3516],
      "kaiyo-1": [365],
    },
    mapper: (address: string, config: unknown) => {
      const { ["owner"]: _, ...newConfig } = config as ReserveConfigResponse;
      const creation =
        CREATION_DATES[address as keyof typeof CREATION_DATES] ?? 0;
      return {
        ...newConfig,
        creation,
      };
    },
  },
};

/**
 * Queries typed contract data from a registry API
 * @param registryApiUrl URL for the registry api
 * @returns Typed unstake contract data
 */
export async function fetchContracts(registryApiUrl: string) {
  return fetchRegistry(registryApiUrl, contracts);
}