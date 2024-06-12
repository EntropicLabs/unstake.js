/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.2.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Adapter, Eris, Gravedigger, Addr, Decimal, InstantiateMsg, Quark, ExecuteMsg, CallbackData, Uint128, CallbackData1, Binary, CallbackMsg, Offer, QueryMsg, ConfigResponse, Timestamp, Uint64, DelegatesResponse, OfferResponse, RatesResponse, StatusResponse } from "./UnstakeController.types";
import { CamelCasedProperties } from "type-fest";
export abstract class UnstakeControllerExecuteMsgBuilder {
  static unstake = ({
    callback,
    maxFee
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    unstake: unknown;
  }>["unstake"]>): ExecuteMsg => {
    return {
      unstake: ({
        callback,
        max_fee: maxFee
      } as const)
    };
  };
  static callback = ({
    callback,
    data
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    callback: unknown;
  }>["callback"]>): ExecuteMsg => {
    return {
      callback: ({
        callback,
        data
      } as const)
    };
  };
  static complete = ({
    offer
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    complete: unknown;
  }>["complete"]>): ExecuteMsg => {
    return {
      complete: ({
        offer
      } as const)
    };
  };
  static updateConfig = ({
    delegateCodeId,
    owner,
    protocolFee,
    protocolFeeAddress
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    update_config: unknown;
  }>["update_config"]>): ExecuteMsg => {
    return {
      update_config: ({
        delegate_code_id: delegateCodeId,
        owner,
        protocol_fee: protocolFee,
        protocol_fee_address: protocolFeeAddress
      } as const)
    };
  };
  static updateBroker = ({
    duration,
    minRate
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    update_broker: unknown;
  }>["update_broker"]>): ExecuteMsg => {
    return {
      update_broker: ({
        duration,
        min_rate: minRate
      } as const)
    };
  };
}
export abstract class UnstakeControllerQueryMsgBuilder {
  static offer = ({
    amount
  }: CamelCasedProperties<Extract<QueryMsg, {
    offer: unknown;
  }>["offer"]>): QueryMsg => {
    return {
      offer: ({
        amount
      } as const)
    };
  };
  static delegates = (): QueryMsg => {
    return {
      delegates: ({} as const)
    };
  };
  static rates = (): QueryMsg => {
    return {
      rates: ({} as const)
    };
  };
  static status = (): QueryMsg => {
    return {
      status: ({} as const)
    };
  };
  static config = (): QueryMsg => {
    return {
      config: ({} as const)
    };
  };
}