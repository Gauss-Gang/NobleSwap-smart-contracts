/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface TokenLockInterface extends utils.Interface {
  functions: {
    "beneficiary()": FunctionFragment;
    "contractAddress()": FunctionFragment;
    "lockedAmount()": FunctionFragment;
    "release()": FunctionFragment;
    "releaseTime()": FunctionFragment;
    "sender()": FunctionFragment;
    "token()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "beneficiary"
      | "contractAddress"
      | "lockedAmount"
      | "release"
      | "releaseTime"
      | "sender"
      | "token"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockedAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "release", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "releaseTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "sender", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releaseTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sender", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {};
}

export interface TokenLock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenLockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    beneficiary(overrides?: CallOverrides): Promise<[string]>;

    contractAddress(overrides?: CallOverrides): Promise<[string]>;

    lockedAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    release(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    releaseTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    sender(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  beneficiary(overrides?: CallOverrides): Promise<string>;

  contractAddress(overrides?: CallOverrides): Promise<string>;

  lockedAmount(overrides?: CallOverrides): Promise<BigNumber>;

  release(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  releaseTime(overrides?: CallOverrides): Promise<BigNumber>;

  sender(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    beneficiary(overrides?: CallOverrides): Promise<string>;

    contractAddress(overrides?: CallOverrides): Promise<string>;

    lockedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    release(overrides?: CallOverrides): Promise<void>;

    releaseTime(overrides?: CallOverrides): Promise<BigNumber>;

    sender(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    contractAddress(overrides?: CallOverrides): Promise<BigNumber>;

    lockedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    release(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    releaseTime(overrides?: CallOverrides): Promise<BigNumber>;

    sender(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    contractAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lockedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    release(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    releaseTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}