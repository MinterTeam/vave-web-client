// @generated by protoc-gen-es v2.1.0 with parameter "json_types=true"
// @generated from file vave.proto (package vave, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file vave.proto.
 */
export declare const file_vave: GenFile;

/**
 * @generated from message vave.BoostTopRequest
 */
export declare type BoostTopRequest = Message<"vave.BoostTopRequest"> & {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData: string;
};

/**
 * @generated from message vave.BoostTopRequest
 */
export declare type BoostTopRequestJson = {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData?: string;
};

/**
 * Describes the message vave.BoostTopRequest.
 * Use `create(BoostTopRequestSchema)` to create a new message.
 */
export declare const BoostTopRequestSchema: GenMessage<BoostTopRequest, BoostTopRequestJson>;

/**
 * @generated from message vave.BoostTopResponse
 */
export declare type BoostTopResponse = Message<"vave.BoostTopResponse"> & {
  /**
   * @generated from field: string payment_link = 1;
   */
  paymentLink: string;
};

/**
 * @generated from message vave.BoostTopResponse
 */
export declare type BoostTopResponseJson = {
  /**
   * @generated from field: string payment_link = 1;
   */
  paymentLink?: string;
};

/**
 * Describes the message vave.BoostTopResponse.
 * Use `create(BoostTopResponseSchema)` to create a new message.
 */
export declare const BoostTopResponseSchema: GenMessage<BoostTopResponse, BoostTopResponseJson>;

/**
 * @generated from message vave.TopRequest
 */
export declare type TopRequest = Message<"vave.TopRequest"> & {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData: string;
};

/**
 * @generated from message vave.TopRequest
 */
export declare type TopRequestJson = {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData?: string;
};

/**
 * Describes the message vave.TopRequest.
 * Use `create(TopRequestSchema)` to create a new message.
 */
export declare const TopRequestSchema: GenMessage<TopRequest, TopRequestJson>;

/**
 * @generated from message vave.TopResponse
 */
export declare type TopResponse = Message<"vave.TopResponse"> & {
  /**
   * @generated from field: repeated vave.UserResponse list = 1;
   */
  list: UserResponse[];

  /**
   * @generated from field: repeated vave.UserResponse boosted = 2;
   */
  boosted: UserResponse[];
};

/**
 * @generated from message vave.TopResponse
 */
export declare type TopResponseJson = {
  /**
   * @generated from field: repeated vave.UserResponse list = 1;
   */
  list?: UserResponseJson[];

  /**
   * @generated from field: repeated vave.UserResponse boosted = 2;
   */
  boosted?: UserResponseJson[];
};

/**
 * Describes the message vave.TopResponse.
 * Use `create(TopResponseSchema)` to create a new message.
 */
export declare const TopResponseSchema: GenMessage<TopResponse, TopResponseJson>;

/**
 * @generated from message vave.FollowRequest
 */
export declare type FollowRequest = Message<"vave.FollowRequest"> & {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData: string;

  /**
   * @generated from field: repeated string user_id = 2;
   */
  userId: string[];
};

/**
 * @generated from message vave.FollowRequest
 */
export declare type FollowRequestJson = {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData?: string;

  /**
   * @generated from field: repeated string user_id = 2;
   */
  userId?: string[];
};

/**
 * Describes the message vave.FollowRequest.
 * Use `create(FollowRequestSchema)` to create a new message.
 */
export declare const FollowRequestSchema: GenMessage<FollowRequest, FollowRequestJson>;

/**
 * @generated from message vave.FollowResponse
 */
export declare type FollowResponse = Message<"vave.FollowResponse"> & {
};

/**
 * @generated from message vave.FollowResponse
 */
export declare type FollowResponseJson = {
};

/**
 * Describes the message vave.FollowResponse.
 * Use `create(FollowResponseSchema)` to create a new message.
 */
export declare const FollowResponseSchema: GenMessage<FollowResponse, FollowResponseJson>;

/**
 * @generated from message vave.FollowTopRequest
 */
export declare type FollowTopRequest = Message<"vave.FollowTopRequest"> & {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData: string;
};

/**
 * @generated from message vave.FollowTopRequest
 */
export declare type FollowTopRequestJson = {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData?: string;
};

/**
 * Describes the message vave.FollowTopRequest.
 * Use `create(FollowTopRequestSchema)` to create a new message.
 */
export declare const FollowTopRequestSchema: GenMessage<FollowTopRequest, FollowTopRequestJson>;

/**
 * @generated from message vave.FollowTopResponse
 */
export declare type FollowTopResponse = Message<"vave.FollowTopResponse"> & {
};

/**
 * @generated from message vave.FollowTopResponse
 */
export declare type FollowTopResponseJson = {
};

/**
 * Describes the message vave.FollowTopResponse.
 * Use `create(FollowTopResponseSchema)` to create a new message.
 */
export declare const FollowTopResponseSchema: GenMessage<FollowTopResponse, FollowTopResponseJson>;

/**
 * @generated from message vave.CheckUsernameRequest
 */
export declare type CheckUsernameRequest = Message<"vave.CheckUsernameRequest"> & {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData: string;

  /**
   * @generated from field: string username = 2;
   */
  username: string;
};

/**
 * @generated from message vave.CheckUsernameRequest
 */
export declare type CheckUsernameRequestJson = {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData?: string;

  /**
   * @generated from field: string username = 2;
   */
  username?: string;
};

/**
 * Describes the message vave.CheckUsernameRequest.
 * Use `create(CheckUsernameRequestSchema)` to create a new message.
 */
export declare const CheckUsernameRequestSchema: GenMessage<CheckUsernameRequest, CheckUsernameRequestJson>;

/**
 * @generated from message vave.CheckUsernameResponse
 */
export declare type CheckUsernameResponse = Message<"vave.CheckUsernameResponse"> & {
  /**
   * @generated from field: bool available = 1;
   */
  available: boolean;

  /**
   * @generated from field: optional uint32 price = 2;
   */
  price?: number;
};

/**
 * @generated from message vave.CheckUsernameResponse
 */
export declare type CheckUsernameResponseJson = {
  /**
   * @generated from field: bool available = 1;
   */
  available?: boolean;

  /**
   * @generated from field: optional uint32 price = 2;
   */
  price?: number;
};

/**
 * Describes the message vave.CheckUsernameResponse.
 * Use `create(CheckUsernameResponseSchema)` to create a new message.
 */
export declare const CheckUsernameResponseSchema: GenMessage<CheckUsernameResponse, CheckUsernameResponseJson>;

/**
 * @generated from message vave.SetUsernameRequest
 */
export declare type SetUsernameRequest = Message<"vave.SetUsernameRequest"> & {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData: string;

  /**
   * @generated from field: string username = 2;
   */
  username: string;
};

/**
 * @generated from message vave.SetUsernameRequest
 */
export declare type SetUsernameRequestJson = {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData?: string;

  /**
   * @generated from field: string username = 2;
   */
  username?: string;
};

/**
 * Describes the message vave.SetUsernameRequest.
 * Use `create(SetUsernameRequestSchema)` to create a new message.
 */
export declare const SetUsernameRequestSchema: GenMessage<SetUsernameRequest, SetUsernameRequestJson>;

/**
 * @generated from message vave.SetUsernameResponse
 */
export declare type SetUsernameResponse = Message<"vave.SetUsernameResponse"> & {
  /**
   * @generated from field: optional string payment_link = 1;
   */
  paymentLink?: string;
};

/**
 * @generated from message vave.SetUsernameResponse
 */
export declare type SetUsernameResponseJson = {
  /**
   * @generated from field: optional string payment_link = 1;
   */
  paymentLink?: string;
};

/**
 * Describes the message vave.SetUsernameResponse.
 * Use `create(SetUsernameResponseSchema)` to create a new message.
 */
export declare const SetUsernameResponseSchema: GenMessage<SetUsernameResponse, SetUsernameResponseJson>;

/**
 * @generated from message vave.RegisterRequest
 */
export declare type RegisterRequest = Message<"vave.RegisterRequest"> & {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string about = 3;
   */
  about: string;

  /**
   * @generated from field: string ref_id = 4;
   */
  refId: string;
};

/**
 * @generated from message vave.RegisterRequest
 */
export declare type RegisterRequestJson = {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData?: string;

  /**
   * @generated from field: string name = 2;
   */
  name?: string;

  /**
   * @generated from field: string about = 3;
   */
  about?: string;

  /**
   * @generated from field: string ref_id = 4;
   */
  refId?: string;
};

/**
 * Describes the message vave.RegisterRequest.
 * Use `create(RegisterRequestSchema)` to create a new message.
 */
export declare const RegisterRequestSchema: GenMessage<RegisterRequest, RegisterRequestJson>;

/**
 * @generated from message vave.RegisterResponse
 */
export declare type RegisterResponse = Message<"vave.RegisterResponse"> & {
};

/**
 * @generated from message vave.RegisterResponse
 */
export declare type RegisterResponseJson = {
};

/**
 * Describes the message vave.RegisterResponse.
 * Use `create(RegisterResponseSchema)` to create a new message.
 */
export declare const RegisterResponseSchema: GenMessage<RegisterResponse, RegisterResponseJson>;

/**
 * @generated from message vave.UpdateUserRequest
 */
export declare type UpdateUserRequest = Message<"vave.UpdateUserRequest"> & {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string about = 3;
   */
  about: string;
};

/**
 * @generated from message vave.UpdateUserRequest
 */
export declare type UpdateUserRequestJson = {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData?: string;

  /**
   * @generated from field: string name = 2;
   */
  name?: string;

  /**
   * @generated from field: string about = 3;
   */
  about?: string;
};

/**
 * Describes the message vave.UpdateUserRequest.
 * Use `create(UpdateUserRequestSchema)` to create a new message.
 */
export declare const UpdateUserRequestSchema: GenMessage<UpdateUserRequest, UpdateUserRequestJson>;

/**
 * @generated from message vave.UpdateUserResponse
 */
export declare type UpdateUserResponse = Message<"vave.UpdateUserResponse"> & {
};

/**
 * @generated from message vave.UpdateUserResponse
 */
export declare type UpdateUserResponseJson = {
};

/**
 * Describes the message vave.UpdateUserResponse.
 * Use `create(UpdateUserResponseSchema)` to create a new message.
 */
export declare const UpdateUserResponseSchema: GenMessage<UpdateUserResponse, UpdateUserResponseJson>;

/**
 * @generated from message vave.MeRequest
 */
export declare type MeRequest = Message<"vave.MeRequest"> & {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData: string;
};

/**
 * @generated from message vave.MeRequest
 */
export declare type MeRequestJson = {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData?: string;
};

/**
 * Describes the message vave.MeRequest.
 * Use `create(MeRequestSchema)` to create a new message.
 */
export declare const MeRequestSchema: GenMessage<MeRequest, MeRequestJson>;

/**
 * @generated from message vave.MeResponse
 */
export declare type MeResponse = Message<"vave.MeResponse"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string about = 3;
   */
  about: string;

  /**
   * @generated from field: optional string username = 4;
   */
  username?: string;

  /**
   * @generated from field: int32 queue_position = 5;
   */
  queuePosition: number;

  /**
   * @generated from field: int32 followers = 6;
   */
  followers: number;

  /**
   * @generated from field: vave.UserResponse invited_by = 7;
   */
  invitedBy?: UserResponse;
};

/**
 * @generated from message vave.MeResponse
 */
export declare type MeResponseJson = {
  /**
   * @generated from field: string id = 1;
   */
  id?: string;

  /**
   * @generated from field: string name = 2;
   */
  name?: string;

  /**
   * @generated from field: string about = 3;
   */
  about?: string;

  /**
   * @generated from field: optional string username = 4;
   */
  username?: string;

  /**
   * @generated from field: int32 queue_position = 5;
   */
  queuePosition?: number;

  /**
   * @generated from field: int32 followers = 6;
   */
  followers?: number;

  /**
   * @generated from field: vave.UserResponse invited_by = 7;
   */
  invitedBy?: UserResponseJson;
};

/**
 * Describes the message vave.MeResponse.
 * Use `create(MeResponseSchema)` to create a new message.
 */
export declare const MeResponseSchema: GenMessage<MeResponse, MeResponseJson>;

/**
 * @generated from message vave.UserRequest
 */
export declare type UserRequest = Message<"vave.UserRequest"> & {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData: string;

  /**
   * @generated from oneof vave.UserRequest.field
   */
  field: {
    /**
     * @generated from field: string username = 2;
     */
    value: string;
    case: "username";
  } | {
    /**
     * @generated from field: string id = 3;
     */
    value: string;
    case: "id";
  } | { case: undefined; value?: undefined };
};

/**
 * @generated from message vave.UserRequest
 */
export declare type UserRequestJson = {
  /**
   * @generated from field: string req_data = 1;
   */
  reqData?: string;

  /**
   * @generated from field: string username = 2;
   */
  username?: string;

  /**
   * @generated from field: string id = 3;
   */
  id?: string;
};

/**
 * Describes the message vave.UserRequest.
 * Use `create(UserRequestSchema)` to create a new message.
 */
export declare const UserRequestSchema: GenMessage<UserRequest, UserRequestJson>;

/**
 * @generated from message vave.UserResponse
 */
export declare type UserResponse = Message<"vave.UserResponse"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string about = 3;
   */
  about: string;

  /**
   * @generated from field: optional string username = 4;
   */
  username?: string;

  /**
   * @generated from field: int32 followers = 5;
   */
  followers: number;

  /**
   * @generated from field: optional bool followed_by_me = 6;
   */
  followedByMe?: boolean;
};

/**
 * @generated from message vave.UserResponse
 */
export declare type UserResponseJson = {
  /**
   * @generated from field: string id = 1;
   */
  id?: string;

  /**
   * @generated from field: string name = 2;
   */
  name?: string;

  /**
   * @generated from field: string about = 3;
   */
  about?: string;

  /**
   * @generated from field: optional string username = 4;
   */
  username?: string;

  /**
   * @generated from field: int32 followers = 5;
   */
  followers?: number;

  /**
   * @generated from field: optional bool followed_by_me = 6;
   */
  followedByMe?: boolean;
};

/**
 * Describes the message vave.UserResponse.
 * Use `create(UserResponseSchema)` to create a new message.
 */
export declare const UserResponseSchema: GenMessage<UserResponse, UserResponseJson>;

/**
 * @generated from service vave.API
 */
export declare const API: GenService<{
  /**
   * @generated from rpc vave.API.Me
   */
  me: {
    methodKind: "unary";
    input: typeof MeRequestSchema;
    output: typeof MeResponseSchema;
  },
  /**
   * @generated from rpc vave.API.User
   */
  user: {
    methodKind: "unary";
    input: typeof UserRequestSchema;
    output: typeof UserResponseSchema;
  },
  /**
   * @generated from rpc vave.API.Register
   */
  register: {
    methodKind: "unary";
    input: typeof RegisterRequestSchema;
    output: typeof RegisterResponseSchema;
  },
  /**
   * @generated from rpc vave.API.UpdateUser
   */
  updateUser: {
    methodKind: "unary";
    input: typeof UpdateUserRequestSchema;
    output: typeof UpdateUserResponseSchema;
  },
  /**
   * @generated from rpc vave.API.CheckUsername
   */
  checkUsername: {
    methodKind: "unary";
    input: typeof CheckUsernameRequestSchema;
    output: typeof CheckUsernameResponseSchema;
  },
  /**
   * @generated from rpc vave.API.SetUsername
   */
  setUsername: {
    methodKind: "unary";
    input: typeof SetUsernameRequestSchema;
    output: typeof SetUsernameResponseSchema;
  },
  /**
   * @generated from rpc vave.API.BoostTop
   */
  boostTop: {
    methodKind: "unary";
    input: typeof BoostTopRequestSchema;
    output: typeof BoostTopResponseSchema;
  },
  /**
   * @generated from rpc vave.API.Follow
   */
  follow: {
    methodKind: "unary";
    input: typeof FollowRequestSchema;
    output: typeof FollowResponseSchema;
  },
  /**
   * @generated from rpc vave.API.Top
   */
  top: {
    methodKind: "unary";
    input: typeof TopRequestSchema;
    output: typeof TopResponseSchema;
  },
}>;

