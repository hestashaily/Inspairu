
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model ai_tool_mstr
 * 
 */
export type ai_tool_mstr = $Result.DefaultSelection<Prisma.$ai_tool_mstrPayload>
/**
 * Model blocked_comments
 * 
 */
export type blocked_comments = $Result.DefaultSelection<Prisma.$blocked_commentsPayload>
/**
 * Model comment_reaction
 * 
 */
export type comment_reaction = $Result.DefaultSelection<Prisma.$comment_reactionPayload>
/**
 * Model comment_reply
 * 
 */
export type comment_reply = $Result.DefaultSelection<Prisma.$comment_replyPayload>
/**
 * Model comment_reply_reaction
 * 
 */
export type comment_reply_reaction = $Result.DefaultSelection<Prisma.$comment_reply_reactionPayload>
/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model email_otp_verification
 * 
 */
export type email_otp_verification = $Result.DefaultSelection<Prisma.$email_otp_verificationPayload>
/**
 * Model feed_ai_tool
 * 
 */
export type feed_ai_tool = $Result.DefaultSelection<Prisma.$feed_ai_toolPayload>
/**
 * Model feeds
 * 
 */
export type feeds = $Result.DefaultSelection<Prisma.$feedsPayload>
/**
 * Model reactions
 * 
 */
export type reactions = $Result.DefaultSelection<Prisma.$reactionsPayload>
/**
 * Model report_feeds
 * 
 */
export type report_feeds = $Result.DefaultSelection<Prisma.$report_feedsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model views
 * 
 */
export type views = $Result.DefaultSelection<Prisma.$viewsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const feeds_feed_type: {
  text: 'text',
  media: 'media'
};

export type feeds_feed_type = (typeof feeds_feed_type)[keyof typeof feeds_feed_type]

}

export type feeds_feed_type = $Enums.feeds_feed_type

export const feeds_feed_type: typeof $Enums.feeds_feed_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ai_tool_mstr`: Exposes CRUD operations for the **ai_tool_mstr** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_tool_mstrs
    * const ai_tool_mstrs = await prisma.ai_tool_mstr.findMany()
    * ```
    */
  get ai_tool_mstr(): Prisma.ai_tool_mstrDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blocked_comments`: Exposes CRUD operations for the **blocked_comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocked_comments
    * const blocked_comments = await prisma.blocked_comments.findMany()
    * ```
    */
  get blocked_comments(): Prisma.blocked_commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment_reaction`: Exposes CRUD operations for the **comment_reaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comment_reactions
    * const comment_reactions = await prisma.comment_reaction.findMany()
    * ```
    */
  get comment_reaction(): Prisma.comment_reactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment_reply`: Exposes CRUD operations for the **comment_reply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comment_replies
    * const comment_replies = await prisma.comment_reply.findMany()
    * ```
    */
  get comment_reply(): Prisma.comment_replyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment_reply_reaction`: Exposes CRUD operations for the **comment_reply_reaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comment_reply_reactions
    * const comment_reply_reactions = await prisma.comment_reply_reaction.findMany()
    * ```
    */
  get comment_reply_reaction(): Prisma.comment_reply_reactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.email_otp_verification`: Exposes CRUD operations for the **email_otp_verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Email_otp_verifications
    * const email_otp_verifications = await prisma.email_otp_verification.findMany()
    * ```
    */
  get email_otp_verification(): Prisma.email_otp_verificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feed_ai_tool`: Exposes CRUD operations for the **feed_ai_tool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feed_ai_tools
    * const feed_ai_tools = await prisma.feed_ai_tool.findMany()
    * ```
    */
  get feed_ai_tool(): Prisma.feed_ai_toolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feeds`: Exposes CRUD operations for the **feeds** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feeds
    * const feeds = await prisma.feeds.findMany()
    * ```
    */
  get feeds(): Prisma.feedsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reactions`: Exposes CRUD operations for the **reactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reactions
    * const reactions = await prisma.reactions.findMany()
    * ```
    */
  get reactions(): Prisma.reactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report_feeds`: Exposes CRUD operations for the **report_feeds** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Report_feeds
    * const report_feeds = await prisma.report_feeds.findMany()
    * ```
    */
  get report_feeds(): Prisma.report_feedsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.views`: Exposes CRUD operations for the **views** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Views
    * const views = await prisma.views.findMany()
    * ```
    */
  get views(): Prisma.viewsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    ai_tool_mstr: 'ai_tool_mstr',
    blocked_comments: 'blocked_comments',
    comment_reaction: 'comment_reaction',
    comment_reply: 'comment_reply',
    comment_reply_reaction: 'comment_reply_reaction',
    comments: 'comments',
    email_otp_verification: 'email_otp_verification',
    feed_ai_tool: 'feed_ai_tool',
    feeds: 'feeds',
    reactions: 'reactions',
    report_feeds: 'report_feeds',
    users: 'users',
    views: 'views'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "ai_tool_mstr" | "blocked_comments" | "comment_reaction" | "comment_reply" | "comment_reply_reaction" | "comments" | "email_otp_verification" | "feed_ai_tool" | "feeds" | "reactions" | "report_feeds" | "users" | "views"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      ai_tool_mstr: {
        payload: Prisma.$ai_tool_mstrPayload<ExtArgs>
        fields: Prisma.ai_tool_mstrFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ai_tool_mstrFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_tool_mstrPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ai_tool_mstrFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_tool_mstrPayload>
          }
          findFirst: {
            args: Prisma.ai_tool_mstrFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_tool_mstrPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ai_tool_mstrFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_tool_mstrPayload>
          }
          findMany: {
            args: Prisma.ai_tool_mstrFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_tool_mstrPayload>[]
          }
          create: {
            args: Prisma.ai_tool_mstrCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_tool_mstrPayload>
          }
          createMany: {
            args: Prisma.ai_tool_mstrCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ai_tool_mstrDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_tool_mstrPayload>
          }
          update: {
            args: Prisma.ai_tool_mstrUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_tool_mstrPayload>
          }
          deleteMany: {
            args: Prisma.ai_tool_mstrDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ai_tool_mstrUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ai_tool_mstrUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_tool_mstrPayload>
          }
          aggregate: {
            args: Prisma.Ai_tool_mstrAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAi_tool_mstr>
          }
          groupBy: {
            args: Prisma.ai_tool_mstrGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ai_tool_mstrGroupByOutputType>[]
          }
          count: {
            args: Prisma.ai_tool_mstrCountArgs<ExtArgs>
            result: $Utils.Optional<Ai_tool_mstrCountAggregateOutputType> | number
          }
        }
      }
      blocked_comments: {
        payload: Prisma.$blocked_commentsPayload<ExtArgs>
        fields: Prisma.blocked_commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blocked_commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocked_commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blocked_commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocked_commentsPayload>
          }
          findFirst: {
            args: Prisma.blocked_commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocked_commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blocked_commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocked_commentsPayload>
          }
          findMany: {
            args: Prisma.blocked_commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocked_commentsPayload>[]
          }
          create: {
            args: Prisma.blocked_commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocked_commentsPayload>
          }
          createMany: {
            args: Prisma.blocked_commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.blocked_commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocked_commentsPayload>
          }
          update: {
            args: Prisma.blocked_commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocked_commentsPayload>
          }
          deleteMany: {
            args: Prisma.blocked_commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blocked_commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.blocked_commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocked_commentsPayload>
          }
          aggregate: {
            args: Prisma.Blocked_commentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlocked_comments>
          }
          groupBy: {
            args: Prisma.blocked_commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Blocked_commentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.blocked_commentsCountArgs<ExtArgs>
            result: $Utils.Optional<Blocked_commentsCountAggregateOutputType> | number
          }
        }
      }
      comment_reaction: {
        payload: Prisma.$comment_reactionPayload<ExtArgs>
        fields: Prisma.comment_reactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.comment_reactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.comment_reactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reactionPayload>
          }
          findFirst: {
            args: Prisma.comment_reactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.comment_reactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reactionPayload>
          }
          findMany: {
            args: Prisma.comment_reactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reactionPayload>[]
          }
          create: {
            args: Prisma.comment_reactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reactionPayload>
          }
          createMany: {
            args: Prisma.comment_reactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.comment_reactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reactionPayload>
          }
          update: {
            args: Prisma.comment_reactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reactionPayload>
          }
          deleteMany: {
            args: Prisma.comment_reactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.comment_reactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.comment_reactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reactionPayload>
          }
          aggregate: {
            args: Prisma.Comment_reactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment_reaction>
          }
          groupBy: {
            args: Prisma.comment_reactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Comment_reactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.comment_reactionCountArgs<ExtArgs>
            result: $Utils.Optional<Comment_reactionCountAggregateOutputType> | number
          }
        }
      }
      comment_reply: {
        payload: Prisma.$comment_replyPayload<ExtArgs>
        fields: Prisma.comment_replyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.comment_replyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_replyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.comment_replyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_replyPayload>
          }
          findFirst: {
            args: Prisma.comment_replyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_replyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.comment_replyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_replyPayload>
          }
          findMany: {
            args: Prisma.comment_replyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_replyPayload>[]
          }
          create: {
            args: Prisma.comment_replyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_replyPayload>
          }
          createMany: {
            args: Prisma.comment_replyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.comment_replyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_replyPayload>
          }
          update: {
            args: Prisma.comment_replyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_replyPayload>
          }
          deleteMany: {
            args: Prisma.comment_replyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.comment_replyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.comment_replyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_replyPayload>
          }
          aggregate: {
            args: Prisma.Comment_replyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment_reply>
          }
          groupBy: {
            args: Prisma.comment_replyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Comment_replyGroupByOutputType>[]
          }
          count: {
            args: Prisma.comment_replyCountArgs<ExtArgs>
            result: $Utils.Optional<Comment_replyCountAggregateOutputType> | number
          }
        }
      }
      comment_reply_reaction: {
        payload: Prisma.$comment_reply_reactionPayload<ExtArgs>
        fields: Prisma.comment_reply_reactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.comment_reply_reactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reply_reactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.comment_reply_reactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reply_reactionPayload>
          }
          findFirst: {
            args: Prisma.comment_reply_reactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reply_reactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.comment_reply_reactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reply_reactionPayload>
          }
          findMany: {
            args: Prisma.comment_reply_reactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reply_reactionPayload>[]
          }
          create: {
            args: Prisma.comment_reply_reactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reply_reactionPayload>
          }
          createMany: {
            args: Prisma.comment_reply_reactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.comment_reply_reactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reply_reactionPayload>
          }
          update: {
            args: Prisma.comment_reply_reactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reply_reactionPayload>
          }
          deleteMany: {
            args: Prisma.comment_reply_reactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.comment_reply_reactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.comment_reply_reactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_reply_reactionPayload>
          }
          aggregate: {
            args: Prisma.Comment_reply_reactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment_reply_reaction>
          }
          groupBy: {
            args: Prisma.comment_reply_reactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Comment_reply_reactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.comment_reply_reactionCountArgs<ExtArgs>
            result: $Utils.Optional<Comment_reply_reactionCountAggregateOutputType> | number
          }
        }
      }
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      email_otp_verification: {
        payload: Prisma.$email_otp_verificationPayload<ExtArgs>
        fields: Prisma.email_otp_verificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.email_otp_verificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otp_verificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.email_otp_verificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otp_verificationPayload>
          }
          findFirst: {
            args: Prisma.email_otp_verificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otp_verificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.email_otp_verificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otp_verificationPayload>
          }
          findMany: {
            args: Prisma.email_otp_verificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otp_verificationPayload>[]
          }
          create: {
            args: Prisma.email_otp_verificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otp_verificationPayload>
          }
          createMany: {
            args: Prisma.email_otp_verificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.email_otp_verificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otp_verificationPayload>
          }
          update: {
            args: Prisma.email_otp_verificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otp_verificationPayload>
          }
          deleteMany: {
            args: Prisma.email_otp_verificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.email_otp_verificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.email_otp_verificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otp_verificationPayload>
          }
          aggregate: {
            args: Prisma.Email_otp_verificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail_otp_verification>
          }
          groupBy: {
            args: Prisma.email_otp_verificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Email_otp_verificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.email_otp_verificationCountArgs<ExtArgs>
            result: $Utils.Optional<Email_otp_verificationCountAggregateOutputType> | number
          }
        }
      }
      feed_ai_tool: {
        payload: Prisma.$feed_ai_toolPayload<ExtArgs>
        fields: Prisma.feed_ai_toolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.feed_ai_toolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feed_ai_toolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.feed_ai_toolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feed_ai_toolPayload>
          }
          findFirst: {
            args: Prisma.feed_ai_toolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feed_ai_toolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.feed_ai_toolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feed_ai_toolPayload>
          }
          findMany: {
            args: Prisma.feed_ai_toolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feed_ai_toolPayload>[]
          }
          create: {
            args: Prisma.feed_ai_toolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feed_ai_toolPayload>
          }
          createMany: {
            args: Prisma.feed_ai_toolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.feed_ai_toolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feed_ai_toolPayload>
          }
          update: {
            args: Prisma.feed_ai_toolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feed_ai_toolPayload>
          }
          deleteMany: {
            args: Prisma.feed_ai_toolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.feed_ai_toolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.feed_ai_toolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feed_ai_toolPayload>
          }
          aggregate: {
            args: Prisma.Feed_ai_toolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeed_ai_tool>
          }
          groupBy: {
            args: Prisma.feed_ai_toolGroupByArgs<ExtArgs>
            result: $Utils.Optional<Feed_ai_toolGroupByOutputType>[]
          }
          count: {
            args: Prisma.feed_ai_toolCountArgs<ExtArgs>
            result: $Utils.Optional<Feed_ai_toolCountAggregateOutputType> | number
          }
        }
      }
      feeds: {
        payload: Prisma.$feedsPayload<ExtArgs>
        fields: Prisma.feedsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.feedsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.feedsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedsPayload>
          }
          findFirst: {
            args: Prisma.feedsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.feedsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedsPayload>
          }
          findMany: {
            args: Prisma.feedsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedsPayload>[]
          }
          create: {
            args: Prisma.feedsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedsPayload>
          }
          createMany: {
            args: Prisma.feedsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.feedsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedsPayload>
          }
          update: {
            args: Prisma.feedsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedsPayload>
          }
          deleteMany: {
            args: Prisma.feedsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.feedsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.feedsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedsPayload>
          }
          aggregate: {
            args: Prisma.FeedsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeeds>
          }
          groupBy: {
            args: Prisma.feedsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedsGroupByOutputType>[]
          }
          count: {
            args: Prisma.feedsCountArgs<ExtArgs>
            result: $Utils.Optional<FeedsCountAggregateOutputType> | number
          }
        }
      }
      reactions: {
        payload: Prisma.$reactionsPayload<ExtArgs>
        fields: Prisma.reactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reactionsPayload>
          }
          findFirst: {
            args: Prisma.reactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reactionsPayload>
          }
          findMany: {
            args: Prisma.reactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reactionsPayload>[]
          }
          create: {
            args: Prisma.reactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reactionsPayload>
          }
          createMany: {
            args: Prisma.reactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reactionsPayload>
          }
          update: {
            args: Prisma.reactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reactionsPayload>
          }
          deleteMany: {
            args: Prisma.reactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reactionsPayload>
          }
          aggregate: {
            args: Prisma.ReactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReactions>
          }
          groupBy: {
            args: Prisma.reactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reactionsCountArgs<ExtArgs>
            result: $Utils.Optional<ReactionsCountAggregateOutputType> | number
          }
        }
      }
      report_feeds: {
        payload: Prisma.$report_feedsPayload<ExtArgs>
        fields: Prisma.report_feedsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.report_feedsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_feedsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.report_feedsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_feedsPayload>
          }
          findFirst: {
            args: Prisma.report_feedsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_feedsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.report_feedsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_feedsPayload>
          }
          findMany: {
            args: Prisma.report_feedsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_feedsPayload>[]
          }
          create: {
            args: Prisma.report_feedsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_feedsPayload>
          }
          createMany: {
            args: Prisma.report_feedsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.report_feedsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_feedsPayload>
          }
          update: {
            args: Prisma.report_feedsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_feedsPayload>
          }
          deleteMany: {
            args: Prisma.report_feedsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.report_feedsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.report_feedsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_feedsPayload>
          }
          aggregate: {
            args: Prisma.Report_feedsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport_feeds>
          }
          groupBy: {
            args: Prisma.report_feedsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Report_feedsGroupByOutputType>[]
          }
          count: {
            args: Prisma.report_feedsCountArgs<ExtArgs>
            result: $Utils.Optional<Report_feedsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      views: {
        payload: Prisma.$viewsPayload<ExtArgs>
        fields: Prisma.viewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.viewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.viewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          findFirst: {
            args: Prisma.viewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.viewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          findMany: {
            args: Prisma.viewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>[]
          }
          create: {
            args: Prisma.viewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          createMany: {
            args: Prisma.viewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.viewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          update: {
            args: Prisma.viewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          deleteMany: {
            args: Prisma.viewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.viewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.viewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          aggregate: {
            args: Prisma.ViewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViews>
          }
          groupBy: {
            args: Prisma.viewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.viewsCountArgs<ExtArgs>
            result: $Utils.Optional<ViewsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    ai_tool_mstr?: ai_tool_mstrOmit
    blocked_comments?: blocked_commentsOmit
    comment_reaction?: comment_reactionOmit
    comment_reply?: comment_replyOmit
    comment_reply_reaction?: comment_reply_reactionOmit
    comments?: commentsOmit
    email_otp_verification?: email_otp_verificationOmit
    feed_ai_tool?: feed_ai_toolOmit
    feeds?: feedsOmit
    reactions?: reactionsOmit
    report_feeds?: report_feedsOmit
    users?: usersOmit
    views?: viewsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Ai_tool_mstrCountOutputType
   */

  export type Ai_tool_mstrCountOutputType = {
    feed_ai_tool: number
  }

  export type Ai_tool_mstrCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feed_ai_tool?: boolean | Ai_tool_mstrCountOutputTypeCountFeed_ai_toolArgs
  }

  // Custom InputTypes
  /**
   * Ai_tool_mstrCountOutputType without action
   */
  export type Ai_tool_mstrCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ai_tool_mstrCountOutputType
     */
    select?: Ai_tool_mstrCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Ai_tool_mstrCountOutputType without action
   */
  export type Ai_tool_mstrCountOutputTypeCountFeed_ai_toolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feed_ai_toolWhereInput
  }


  /**
   * Count Type FeedsCountOutputType
   */

  export type FeedsCountOutputType = {
    feed_ai_tool: number
  }

  export type FeedsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feed_ai_tool?: boolean | FeedsCountOutputTypeCountFeed_ai_toolArgs
  }

  // Custom InputTypes
  /**
   * FeedsCountOutputType without action
   */
  export type FeedsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedsCountOutputType
     */
    select?: FeedsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeedsCountOutputType without action
   */
  export type FeedsCountOutputTypeCountFeed_ai_toolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feed_ai_toolWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Account: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | UsersCountOutputTypeCountAccountArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    userId: number | null
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    userId?: true
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    userId?: true
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: number
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'Int'>
    readonly userId: FieldRef<"Account", 'Int'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model ai_tool_mstr
   */

  export type AggregateAi_tool_mstr = {
    _count: Ai_tool_mstrCountAggregateOutputType | null
    _avg: Ai_tool_mstrAvgAggregateOutputType | null
    _sum: Ai_tool_mstrSumAggregateOutputType | null
    _min: Ai_tool_mstrMinAggregateOutputType | null
    _max: Ai_tool_mstrMaxAggregateOutputType | null
  }

  export type Ai_tool_mstrAvgAggregateOutputType = {
    id: number | null
  }

  export type Ai_tool_mstrSumAggregateOutputType = {
    id: number | null
  }

  export type Ai_tool_mstrMinAggregateOutputType = {
    id: number | null
    name: string | null
    is_active: boolean | null
    created_datetime: Date | null
    updated_datetime: Date | null
  }

  export type Ai_tool_mstrMaxAggregateOutputType = {
    id: number | null
    name: string | null
    is_active: boolean | null
    created_datetime: Date | null
    updated_datetime: Date | null
  }

  export type Ai_tool_mstrCountAggregateOutputType = {
    id: number
    name: number
    is_active: number
    created_datetime: number
    updated_datetime: number
    _all: number
  }


  export type Ai_tool_mstrAvgAggregateInputType = {
    id?: true
  }

  export type Ai_tool_mstrSumAggregateInputType = {
    id?: true
  }

  export type Ai_tool_mstrMinAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_datetime?: true
    updated_datetime?: true
  }

  export type Ai_tool_mstrMaxAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_datetime?: true
    updated_datetime?: true
  }

  export type Ai_tool_mstrCountAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_datetime?: true
    updated_datetime?: true
    _all?: true
  }

  export type Ai_tool_mstrAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_tool_mstr to aggregate.
     */
    where?: ai_tool_mstrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_tool_mstrs to fetch.
     */
    orderBy?: ai_tool_mstrOrderByWithRelationInput | ai_tool_mstrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ai_tool_mstrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_tool_mstrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_tool_mstrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_tool_mstrs
    **/
    _count?: true | Ai_tool_mstrCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_tool_mstrAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_tool_mstrSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_tool_mstrMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_tool_mstrMaxAggregateInputType
  }

  export type GetAi_tool_mstrAggregateType<T extends Ai_tool_mstrAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_tool_mstr]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_tool_mstr[P]>
      : GetScalarType<T[P], AggregateAi_tool_mstr[P]>
  }




  export type ai_tool_mstrGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ai_tool_mstrWhereInput
    orderBy?: ai_tool_mstrOrderByWithAggregationInput | ai_tool_mstrOrderByWithAggregationInput[]
    by: Ai_tool_mstrScalarFieldEnum[] | Ai_tool_mstrScalarFieldEnum
    having?: ai_tool_mstrScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_tool_mstrCountAggregateInputType | true
    _avg?: Ai_tool_mstrAvgAggregateInputType
    _sum?: Ai_tool_mstrSumAggregateInputType
    _min?: Ai_tool_mstrMinAggregateInputType
    _max?: Ai_tool_mstrMaxAggregateInputType
  }

  export type Ai_tool_mstrGroupByOutputType = {
    id: number
    name: string
    is_active: boolean | null
    created_datetime: Date | null
    updated_datetime: Date | null
    _count: Ai_tool_mstrCountAggregateOutputType | null
    _avg: Ai_tool_mstrAvgAggregateOutputType | null
    _sum: Ai_tool_mstrSumAggregateOutputType | null
    _min: Ai_tool_mstrMinAggregateOutputType | null
    _max: Ai_tool_mstrMaxAggregateOutputType | null
  }

  type GetAi_tool_mstrGroupByPayload<T extends ai_tool_mstrGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ai_tool_mstrGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_tool_mstrGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_tool_mstrGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_tool_mstrGroupByOutputType[P]>
        }
      >
    >


  export type ai_tool_mstrSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
    feed_ai_tool?: boolean | ai_tool_mstr$feed_ai_toolArgs<ExtArgs>
    _count?: boolean | Ai_tool_mstrCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ai_tool_mstr"]>



  export type ai_tool_mstrSelectScalar = {
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
  }

  export type ai_tool_mstrOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_active" | "created_datetime" | "updated_datetime", ExtArgs["result"]["ai_tool_mstr"]>
  export type ai_tool_mstrInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feed_ai_tool?: boolean | ai_tool_mstr$feed_ai_toolArgs<ExtArgs>
    _count?: boolean | Ai_tool_mstrCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ai_tool_mstrPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ai_tool_mstr"
    objects: {
      feed_ai_tool: Prisma.$feed_ai_toolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      is_active: boolean | null
      created_datetime: Date | null
      updated_datetime: Date | null
    }, ExtArgs["result"]["ai_tool_mstr"]>
    composites: {}
  }

  type ai_tool_mstrGetPayload<S extends boolean | null | undefined | ai_tool_mstrDefaultArgs> = $Result.GetResult<Prisma.$ai_tool_mstrPayload, S>

  type ai_tool_mstrCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ai_tool_mstrFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ai_tool_mstrCountAggregateInputType | true
    }

  export interface ai_tool_mstrDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ai_tool_mstr'], meta: { name: 'ai_tool_mstr' } }
    /**
     * Find zero or one Ai_tool_mstr that matches the filter.
     * @param {ai_tool_mstrFindUniqueArgs} args - Arguments to find a Ai_tool_mstr
     * @example
     * // Get one Ai_tool_mstr
     * const ai_tool_mstr = await prisma.ai_tool_mstr.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ai_tool_mstrFindUniqueArgs>(args: SelectSubset<T, ai_tool_mstrFindUniqueArgs<ExtArgs>>): Prisma__ai_tool_mstrClient<$Result.GetResult<Prisma.$ai_tool_mstrPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ai_tool_mstr that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ai_tool_mstrFindUniqueOrThrowArgs} args - Arguments to find a Ai_tool_mstr
     * @example
     * // Get one Ai_tool_mstr
     * const ai_tool_mstr = await prisma.ai_tool_mstr.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ai_tool_mstrFindUniqueOrThrowArgs>(args: SelectSubset<T, ai_tool_mstrFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ai_tool_mstrClient<$Result.GetResult<Prisma.$ai_tool_mstrPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ai_tool_mstr that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_tool_mstrFindFirstArgs} args - Arguments to find a Ai_tool_mstr
     * @example
     * // Get one Ai_tool_mstr
     * const ai_tool_mstr = await prisma.ai_tool_mstr.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ai_tool_mstrFindFirstArgs>(args?: SelectSubset<T, ai_tool_mstrFindFirstArgs<ExtArgs>>): Prisma__ai_tool_mstrClient<$Result.GetResult<Prisma.$ai_tool_mstrPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ai_tool_mstr that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_tool_mstrFindFirstOrThrowArgs} args - Arguments to find a Ai_tool_mstr
     * @example
     * // Get one Ai_tool_mstr
     * const ai_tool_mstr = await prisma.ai_tool_mstr.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ai_tool_mstrFindFirstOrThrowArgs>(args?: SelectSubset<T, ai_tool_mstrFindFirstOrThrowArgs<ExtArgs>>): Prisma__ai_tool_mstrClient<$Result.GetResult<Prisma.$ai_tool_mstrPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ai_tool_mstrs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_tool_mstrFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_tool_mstrs
     * const ai_tool_mstrs = await prisma.ai_tool_mstr.findMany()
     * 
     * // Get first 10 Ai_tool_mstrs
     * const ai_tool_mstrs = await prisma.ai_tool_mstr.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_tool_mstrWithIdOnly = await prisma.ai_tool_mstr.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ai_tool_mstrFindManyArgs>(args?: SelectSubset<T, ai_tool_mstrFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_tool_mstrPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ai_tool_mstr.
     * @param {ai_tool_mstrCreateArgs} args - Arguments to create a Ai_tool_mstr.
     * @example
     * // Create one Ai_tool_mstr
     * const Ai_tool_mstr = await prisma.ai_tool_mstr.create({
     *   data: {
     *     // ... data to create a Ai_tool_mstr
     *   }
     * })
     * 
     */
    create<T extends ai_tool_mstrCreateArgs>(args: SelectSubset<T, ai_tool_mstrCreateArgs<ExtArgs>>): Prisma__ai_tool_mstrClient<$Result.GetResult<Prisma.$ai_tool_mstrPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ai_tool_mstrs.
     * @param {ai_tool_mstrCreateManyArgs} args - Arguments to create many Ai_tool_mstrs.
     * @example
     * // Create many Ai_tool_mstrs
     * const ai_tool_mstr = await prisma.ai_tool_mstr.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ai_tool_mstrCreateManyArgs>(args?: SelectSubset<T, ai_tool_mstrCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ai_tool_mstr.
     * @param {ai_tool_mstrDeleteArgs} args - Arguments to delete one Ai_tool_mstr.
     * @example
     * // Delete one Ai_tool_mstr
     * const Ai_tool_mstr = await prisma.ai_tool_mstr.delete({
     *   where: {
     *     // ... filter to delete one Ai_tool_mstr
     *   }
     * })
     * 
     */
    delete<T extends ai_tool_mstrDeleteArgs>(args: SelectSubset<T, ai_tool_mstrDeleteArgs<ExtArgs>>): Prisma__ai_tool_mstrClient<$Result.GetResult<Prisma.$ai_tool_mstrPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ai_tool_mstr.
     * @param {ai_tool_mstrUpdateArgs} args - Arguments to update one Ai_tool_mstr.
     * @example
     * // Update one Ai_tool_mstr
     * const ai_tool_mstr = await prisma.ai_tool_mstr.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ai_tool_mstrUpdateArgs>(args: SelectSubset<T, ai_tool_mstrUpdateArgs<ExtArgs>>): Prisma__ai_tool_mstrClient<$Result.GetResult<Prisma.$ai_tool_mstrPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ai_tool_mstrs.
     * @param {ai_tool_mstrDeleteManyArgs} args - Arguments to filter Ai_tool_mstrs to delete.
     * @example
     * // Delete a few Ai_tool_mstrs
     * const { count } = await prisma.ai_tool_mstr.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ai_tool_mstrDeleteManyArgs>(args?: SelectSubset<T, ai_tool_mstrDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_tool_mstrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_tool_mstrUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_tool_mstrs
     * const ai_tool_mstr = await prisma.ai_tool_mstr.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ai_tool_mstrUpdateManyArgs>(args: SelectSubset<T, ai_tool_mstrUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ai_tool_mstr.
     * @param {ai_tool_mstrUpsertArgs} args - Arguments to update or create a Ai_tool_mstr.
     * @example
     * // Update or create a Ai_tool_mstr
     * const ai_tool_mstr = await prisma.ai_tool_mstr.upsert({
     *   create: {
     *     // ... data to create a Ai_tool_mstr
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_tool_mstr we want to update
     *   }
     * })
     */
    upsert<T extends ai_tool_mstrUpsertArgs>(args: SelectSubset<T, ai_tool_mstrUpsertArgs<ExtArgs>>): Prisma__ai_tool_mstrClient<$Result.GetResult<Prisma.$ai_tool_mstrPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ai_tool_mstrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_tool_mstrCountArgs} args - Arguments to filter Ai_tool_mstrs to count.
     * @example
     * // Count the number of Ai_tool_mstrs
     * const count = await prisma.ai_tool_mstr.count({
     *   where: {
     *     // ... the filter for the Ai_tool_mstrs we want to count
     *   }
     * })
    **/
    count<T extends ai_tool_mstrCountArgs>(
      args?: Subset<T, ai_tool_mstrCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_tool_mstrCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_tool_mstr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_tool_mstrAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ai_tool_mstrAggregateArgs>(args: Subset<T, Ai_tool_mstrAggregateArgs>): Prisma.PrismaPromise<GetAi_tool_mstrAggregateType<T>>

    /**
     * Group by Ai_tool_mstr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_tool_mstrGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ai_tool_mstrGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ai_tool_mstrGroupByArgs['orderBy'] }
        : { orderBy?: ai_tool_mstrGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ai_tool_mstrGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_tool_mstrGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ai_tool_mstr model
   */
  readonly fields: ai_tool_mstrFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_tool_mstr.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ai_tool_mstrClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feed_ai_tool<T extends ai_tool_mstr$feed_ai_toolArgs<ExtArgs> = {}>(args?: Subset<T, ai_tool_mstr$feed_ai_toolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feed_ai_toolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ai_tool_mstr model
   */
  interface ai_tool_mstrFieldRefs {
    readonly id: FieldRef<"ai_tool_mstr", 'Int'>
    readonly name: FieldRef<"ai_tool_mstr", 'String'>
    readonly is_active: FieldRef<"ai_tool_mstr", 'Boolean'>
    readonly created_datetime: FieldRef<"ai_tool_mstr", 'DateTime'>
    readonly updated_datetime: FieldRef<"ai_tool_mstr", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ai_tool_mstr findUnique
   */
  export type ai_tool_mstrFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_tool_mstr
     */
    select?: ai_tool_mstrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_tool_mstr
     */
    omit?: ai_tool_mstrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_tool_mstrInclude<ExtArgs> | null
    /**
     * Filter, which ai_tool_mstr to fetch.
     */
    where: ai_tool_mstrWhereUniqueInput
  }

  /**
   * ai_tool_mstr findUniqueOrThrow
   */
  export type ai_tool_mstrFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_tool_mstr
     */
    select?: ai_tool_mstrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_tool_mstr
     */
    omit?: ai_tool_mstrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_tool_mstrInclude<ExtArgs> | null
    /**
     * Filter, which ai_tool_mstr to fetch.
     */
    where: ai_tool_mstrWhereUniqueInput
  }

  /**
   * ai_tool_mstr findFirst
   */
  export type ai_tool_mstrFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_tool_mstr
     */
    select?: ai_tool_mstrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_tool_mstr
     */
    omit?: ai_tool_mstrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_tool_mstrInclude<ExtArgs> | null
    /**
     * Filter, which ai_tool_mstr to fetch.
     */
    where?: ai_tool_mstrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_tool_mstrs to fetch.
     */
    orderBy?: ai_tool_mstrOrderByWithRelationInput | ai_tool_mstrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_tool_mstrs.
     */
    cursor?: ai_tool_mstrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_tool_mstrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_tool_mstrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_tool_mstrs.
     */
    distinct?: Ai_tool_mstrScalarFieldEnum | Ai_tool_mstrScalarFieldEnum[]
  }

  /**
   * ai_tool_mstr findFirstOrThrow
   */
  export type ai_tool_mstrFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_tool_mstr
     */
    select?: ai_tool_mstrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_tool_mstr
     */
    omit?: ai_tool_mstrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_tool_mstrInclude<ExtArgs> | null
    /**
     * Filter, which ai_tool_mstr to fetch.
     */
    where?: ai_tool_mstrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_tool_mstrs to fetch.
     */
    orderBy?: ai_tool_mstrOrderByWithRelationInput | ai_tool_mstrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_tool_mstrs.
     */
    cursor?: ai_tool_mstrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_tool_mstrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_tool_mstrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_tool_mstrs.
     */
    distinct?: Ai_tool_mstrScalarFieldEnum | Ai_tool_mstrScalarFieldEnum[]
  }

  /**
   * ai_tool_mstr findMany
   */
  export type ai_tool_mstrFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_tool_mstr
     */
    select?: ai_tool_mstrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_tool_mstr
     */
    omit?: ai_tool_mstrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_tool_mstrInclude<ExtArgs> | null
    /**
     * Filter, which ai_tool_mstrs to fetch.
     */
    where?: ai_tool_mstrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_tool_mstrs to fetch.
     */
    orderBy?: ai_tool_mstrOrderByWithRelationInput | ai_tool_mstrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_tool_mstrs.
     */
    cursor?: ai_tool_mstrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_tool_mstrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_tool_mstrs.
     */
    skip?: number
    distinct?: Ai_tool_mstrScalarFieldEnum | Ai_tool_mstrScalarFieldEnum[]
  }

  /**
   * ai_tool_mstr create
   */
  export type ai_tool_mstrCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_tool_mstr
     */
    select?: ai_tool_mstrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_tool_mstr
     */
    omit?: ai_tool_mstrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_tool_mstrInclude<ExtArgs> | null
    /**
     * The data needed to create a ai_tool_mstr.
     */
    data: XOR<ai_tool_mstrCreateInput, ai_tool_mstrUncheckedCreateInput>
  }

  /**
   * ai_tool_mstr createMany
   */
  export type ai_tool_mstrCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ai_tool_mstrs.
     */
    data: ai_tool_mstrCreateManyInput | ai_tool_mstrCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ai_tool_mstr update
   */
  export type ai_tool_mstrUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_tool_mstr
     */
    select?: ai_tool_mstrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_tool_mstr
     */
    omit?: ai_tool_mstrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_tool_mstrInclude<ExtArgs> | null
    /**
     * The data needed to update a ai_tool_mstr.
     */
    data: XOR<ai_tool_mstrUpdateInput, ai_tool_mstrUncheckedUpdateInput>
    /**
     * Choose, which ai_tool_mstr to update.
     */
    where: ai_tool_mstrWhereUniqueInput
  }

  /**
   * ai_tool_mstr updateMany
   */
  export type ai_tool_mstrUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ai_tool_mstrs.
     */
    data: XOR<ai_tool_mstrUpdateManyMutationInput, ai_tool_mstrUncheckedUpdateManyInput>
    /**
     * Filter which ai_tool_mstrs to update
     */
    where?: ai_tool_mstrWhereInput
    /**
     * Limit how many ai_tool_mstrs to update.
     */
    limit?: number
  }

  /**
   * ai_tool_mstr upsert
   */
  export type ai_tool_mstrUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_tool_mstr
     */
    select?: ai_tool_mstrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_tool_mstr
     */
    omit?: ai_tool_mstrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_tool_mstrInclude<ExtArgs> | null
    /**
     * The filter to search for the ai_tool_mstr to update in case it exists.
     */
    where: ai_tool_mstrWhereUniqueInput
    /**
     * In case the ai_tool_mstr found by the `where` argument doesn't exist, create a new ai_tool_mstr with this data.
     */
    create: XOR<ai_tool_mstrCreateInput, ai_tool_mstrUncheckedCreateInput>
    /**
     * In case the ai_tool_mstr was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ai_tool_mstrUpdateInput, ai_tool_mstrUncheckedUpdateInput>
  }

  /**
   * ai_tool_mstr delete
   */
  export type ai_tool_mstrDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_tool_mstr
     */
    select?: ai_tool_mstrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_tool_mstr
     */
    omit?: ai_tool_mstrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_tool_mstrInclude<ExtArgs> | null
    /**
     * Filter which ai_tool_mstr to delete.
     */
    where: ai_tool_mstrWhereUniqueInput
  }

  /**
   * ai_tool_mstr deleteMany
   */
  export type ai_tool_mstrDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_tool_mstrs to delete
     */
    where?: ai_tool_mstrWhereInput
    /**
     * Limit how many ai_tool_mstrs to delete.
     */
    limit?: number
  }

  /**
   * ai_tool_mstr.feed_ai_tool
   */
  export type ai_tool_mstr$feed_ai_toolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed_ai_tool
     */
    select?: feed_ai_toolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feed_ai_tool
     */
    omit?: feed_ai_toolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feed_ai_toolInclude<ExtArgs> | null
    where?: feed_ai_toolWhereInput
    orderBy?: feed_ai_toolOrderByWithRelationInput | feed_ai_toolOrderByWithRelationInput[]
    cursor?: feed_ai_toolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Feed_ai_toolScalarFieldEnum | Feed_ai_toolScalarFieldEnum[]
  }

  /**
   * ai_tool_mstr without action
   */
  export type ai_tool_mstrDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_tool_mstr
     */
    select?: ai_tool_mstrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_tool_mstr
     */
    omit?: ai_tool_mstrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_tool_mstrInclude<ExtArgs> | null
  }


  /**
   * Model blocked_comments
   */

  export type AggregateBlocked_comments = {
    _count: Blocked_commentsCountAggregateOutputType | null
    _avg: Blocked_commentsAvgAggregateOutputType | null
    _sum: Blocked_commentsSumAggregateOutputType | null
    _min: Blocked_commentsMinAggregateOutputType | null
    _max: Blocked_commentsMaxAggregateOutputType | null
  }

  export type Blocked_commentsAvgAggregateOutputType = {
    comment_id: number | null
    user_id: number | null
  }

  export type Blocked_commentsSumAggregateOutputType = {
    comment_id: bigint | null
    user_id: bigint | null
  }

  export type Blocked_commentsMinAggregateOutputType = {
    comment_id: bigint | null
    user_id: bigint | null
  }

  export type Blocked_commentsMaxAggregateOutputType = {
    comment_id: bigint | null
    user_id: bigint | null
  }

  export type Blocked_commentsCountAggregateOutputType = {
    comment_id: number
    user_id: number
    _all: number
  }


  export type Blocked_commentsAvgAggregateInputType = {
    comment_id?: true
    user_id?: true
  }

  export type Blocked_commentsSumAggregateInputType = {
    comment_id?: true
    user_id?: true
  }

  export type Blocked_commentsMinAggregateInputType = {
    comment_id?: true
    user_id?: true
  }

  export type Blocked_commentsMaxAggregateInputType = {
    comment_id?: true
    user_id?: true
  }

  export type Blocked_commentsCountAggregateInputType = {
    comment_id?: true
    user_id?: true
    _all?: true
  }

  export type Blocked_commentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blocked_comments to aggregate.
     */
    where?: blocked_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blocked_comments to fetch.
     */
    orderBy?: blocked_commentsOrderByWithRelationInput | blocked_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blocked_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blocked_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blocked_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blocked_comments
    **/
    _count?: true | Blocked_commentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Blocked_commentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Blocked_commentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Blocked_commentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Blocked_commentsMaxAggregateInputType
  }

  export type GetBlocked_commentsAggregateType<T extends Blocked_commentsAggregateArgs> = {
        [P in keyof T & keyof AggregateBlocked_comments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlocked_comments[P]>
      : GetScalarType<T[P], AggregateBlocked_comments[P]>
  }




  export type blocked_commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blocked_commentsWhereInput
    orderBy?: blocked_commentsOrderByWithAggregationInput | blocked_commentsOrderByWithAggregationInput[]
    by: Blocked_commentsScalarFieldEnum[] | Blocked_commentsScalarFieldEnum
    having?: blocked_commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Blocked_commentsCountAggregateInputType | true
    _avg?: Blocked_commentsAvgAggregateInputType
    _sum?: Blocked_commentsSumAggregateInputType
    _min?: Blocked_commentsMinAggregateInputType
    _max?: Blocked_commentsMaxAggregateInputType
  }

  export type Blocked_commentsGroupByOutputType = {
    comment_id: bigint
    user_id: bigint
    _count: Blocked_commentsCountAggregateOutputType | null
    _avg: Blocked_commentsAvgAggregateOutputType | null
    _sum: Blocked_commentsSumAggregateOutputType | null
    _min: Blocked_commentsMinAggregateOutputType | null
    _max: Blocked_commentsMaxAggregateOutputType | null
  }

  type GetBlocked_commentsGroupByPayload<T extends blocked_commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Blocked_commentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Blocked_commentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Blocked_commentsGroupByOutputType[P]>
            : GetScalarType<T[P], Blocked_commentsGroupByOutputType[P]>
        }
      >
    >


  export type blocked_commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    user_id?: boolean
  }, ExtArgs["result"]["blocked_comments"]>



  export type blocked_commentsSelectScalar = {
    comment_id?: boolean
    user_id?: boolean
  }

  export type blocked_commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"comment_id" | "user_id", ExtArgs["result"]["blocked_comments"]>

  export type $blocked_commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blocked_comments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      comment_id: bigint
      user_id: bigint
    }, ExtArgs["result"]["blocked_comments"]>
    composites: {}
  }

  type blocked_commentsGetPayload<S extends boolean | null | undefined | blocked_commentsDefaultArgs> = $Result.GetResult<Prisma.$blocked_commentsPayload, S>

  type blocked_commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blocked_commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Blocked_commentsCountAggregateInputType | true
    }

  export interface blocked_commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blocked_comments'], meta: { name: 'blocked_comments' } }
    /**
     * Find zero or one Blocked_comments that matches the filter.
     * @param {blocked_commentsFindUniqueArgs} args - Arguments to find a Blocked_comments
     * @example
     * // Get one Blocked_comments
     * const blocked_comments = await prisma.blocked_comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blocked_commentsFindUniqueArgs>(args: SelectSubset<T, blocked_commentsFindUniqueArgs<ExtArgs>>): Prisma__blocked_commentsClient<$Result.GetResult<Prisma.$blocked_commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blocked_comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blocked_commentsFindUniqueOrThrowArgs} args - Arguments to find a Blocked_comments
     * @example
     * // Get one Blocked_comments
     * const blocked_comments = await prisma.blocked_comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blocked_commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, blocked_commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blocked_commentsClient<$Result.GetResult<Prisma.$blocked_commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blocked_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blocked_commentsFindFirstArgs} args - Arguments to find a Blocked_comments
     * @example
     * // Get one Blocked_comments
     * const blocked_comments = await prisma.blocked_comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blocked_commentsFindFirstArgs>(args?: SelectSubset<T, blocked_commentsFindFirstArgs<ExtArgs>>): Prisma__blocked_commentsClient<$Result.GetResult<Prisma.$blocked_commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blocked_comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blocked_commentsFindFirstOrThrowArgs} args - Arguments to find a Blocked_comments
     * @example
     * // Get one Blocked_comments
     * const blocked_comments = await prisma.blocked_comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blocked_commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, blocked_commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__blocked_commentsClient<$Result.GetResult<Prisma.$blocked_commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blocked_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blocked_commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocked_comments
     * const blocked_comments = await prisma.blocked_comments.findMany()
     * 
     * // Get first 10 Blocked_comments
     * const blocked_comments = await prisma.blocked_comments.findMany({ take: 10 })
     * 
     * // Only select the `comment_id`
     * const blocked_commentsWithComment_idOnly = await prisma.blocked_comments.findMany({ select: { comment_id: true } })
     * 
     */
    findMany<T extends blocked_commentsFindManyArgs>(args?: SelectSubset<T, blocked_commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blocked_commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blocked_comments.
     * @param {blocked_commentsCreateArgs} args - Arguments to create a Blocked_comments.
     * @example
     * // Create one Blocked_comments
     * const Blocked_comments = await prisma.blocked_comments.create({
     *   data: {
     *     // ... data to create a Blocked_comments
     *   }
     * })
     * 
     */
    create<T extends blocked_commentsCreateArgs>(args: SelectSubset<T, blocked_commentsCreateArgs<ExtArgs>>): Prisma__blocked_commentsClient<$Result.GetResult<Prisma.$blocked_commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blocked_comments.
     * @param {blocked_commentsCreateManyArgs} args - Arguments to create many Blocked_comments.
     * @example
     * // Create many Blocked_comments
     * const blocked_comments = await prisma.blocked_comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blocked_commentsCreateManyArgs>(args?: SelectSubset<T, blocked_commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blocked_comments.
     * @param {blocked_commentsDeleteArgs} args - Arguments to delete one Blocked_comments.
     * @example
     * // Delete one Blocked_comments
     * const Blocked_comments = await prisma.blocked_comments.delete({
     *   where: {
     *     // ... filter to delete one Blocked_comments
     *   }
     * })
     * 
     */
    delete<T extends blocked_commentsDeleteArgs>(args: SelectSubset<T, blocked_commentsDeleteArgs<ExtArgs>>): Prisma__blocked_commentsClient<$Result.GetResult<Prisma.$blocked_commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blocked_comments.
     * @param {blocked_commentsUpdateArgs} args - Arguments to update one Blocked_comments.
     * @example
     * // Update one Blocked_comments
     * const blocked_comments = await prisma.blocked_comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blocked_commentsUpdateArgs>(args: SelectSubset<T, blocked_commentsUpdateArgs<ExtArgs>>): Prisma__blocked_commentsClient<$Result.GetResult<Prisma.$blocked_commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blocked_comments.
     * @param {blocked_commentsDeleteManyArgs} args - Arguments to filter Blocked_comments to delete.
     * @example
     * // Delete a few Blocked_comments
     * const { count } = await prisma.blocked_comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blocked_commentsDeleteManyArgs>(args?: SelectSubset<T, blocked_commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocked_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blocked_commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocked_comments
     * const blocked_comments = await prisma.blocked_comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blocked_commentsUpdateManyArgs>(args: SelectSubset<T, blocked_commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blocked_comments.
     * @param {blocked_commentsUpsertArgs} args - Arguments to update or create a Blocked_comments.
     * @example
     * // Update or create a Blocked_comments
     * const blocked_comments = await prisma.blocked_comments.upsert({
     *   create: {
     *     // ... data to create a Blocked_comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blocked_comments we want to update
     *   }
     * })
     */
    upsert<T extends blocked_commentsUpsertArgs>(args: SelectSubset<T, blocked_commentsUpsertArgs<ExtArgs>>): Prisma__blocked_commentsClient<$Result.GetResult<Prisma.$blocked_commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blocked_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blocked_commentsCountArgs} args - Arguments to filter Blocked_comments to count.
     * @example
     * // Count the number of Blocked_comments
     * const count = await prisma.blocked_comments.count({
     *   where: {
     *     // ... the filter for the Blocked_comments we want to count
     *   }
     * })
    **/
    count<T extends blocked_commentsCountArgs>(
      args?: Subset<T, blocked_commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Blocked_commentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blocked_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blocked_commentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Blocked_commentsAggregateArgs>(args: Subset<T, Blocked_commentsAggregateArgs>): Prisma.PrismaPromise<GetBlocked_commentsAggregateType<T>>

    /**
     * Group by Blocked_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blocked_commentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends blocked_commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blocked_commentsGroupByArgs['orderBy'] }
        : { orderBy?: blocked_commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, blocked_commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlocked_commentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blocked_comments model
   */
  readonly fields: blocked_commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blocked_comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blocked_commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the blocked_comments model
   */
  interface blocked_commentsFieldRefs {
    readonly comment_id: FieldRef<"blocked_comments", 'BigInt'>
    readonly user_id: FieldRef<"blocked_comments", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * blocked_comments findUnique
   */
  export type blocked_commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocked_comments
     */
    select?: blocked_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocked_comments
     */
    omit?: blocked_commentsOmit<ExtArgs> | null
    /**
     * Filter, which blocked_comments to fetch.
     */
    where: blocked_commentsWhereUniqueInput
  }

  /**
   * blocked_comments findUniqueOrThrow
   */
  export type blocked_commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocked_comments
     */
    select?: blocked_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocked_comments
     */
    omit?: blocked_commentsOmit<ExtArgs> | null
    /**
     * Filter, which blocked_comments to fetch.
     */
    where: blocked_commentsWhereUniqueInput
  }

  /**
   * blocked_comments findFirst
   */
  export type blocked_commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocked_comments
     */
    select?: blocked_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocked_comments
     */
    omit?: blocked_commentsOmit<ExtArgs> | null
    /**
     * Filter, which blocked_comments to fetch.
     */
    where?: blocked_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blocked_comments to fetch.
     */
    orderBy?: blocked_commentsOrderByWithRelationInput | blocked_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blocked_comments.
     */
    cursor?: blocked_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blocked_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blocked_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blocked_comments.
     */
    distinct?: Blocked_commentsScalarFieldEnum | Blocked_commentsScalarFieldEnum[]
  }

  /**
   * blocked_comments findFirstOrThrow
   */
  export type blocked_commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocked_comments
     */
    select?: blocked_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocked_comments
     */
    omit?: blocked_commentsOmit<ExtArgs> | null
    /**
     * Filter, which blocked_comments to fetch.
     */
    where?: blocked_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blocked_comments to fetch.
     */
    orderBy?: blocked_commentsOrderByWithRelationInput | blocked_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blocked_comments.
     */
    cursor?: blocked_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blocked_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blocked_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blocked_comments.
     */
    distinct?: Blocked_commentsScalarFieldEnum | Blocked_commentsScalarFieldEnum[]
  }

  /**
   * blocked_comments findMany
   */
  export type blocked_commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocked_comments
     */
    select?: blocked_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocked_comments
     */
    omit?: blocked_commentsOmit<ExtArgs> | null
    /**
     * Filter, which blocked_comments to fetch.
     */
    where?: blocked_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blocked_comments to fetch.
     */
    orderBy?: blocked_commentsOrderByWithRelationInput | blocked_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blocked_comments.
     */
    cursor?: blocked_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blocked_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blocked_comments.
     */
    skip?: number
    distinct?: Blocked_commentsScalarFieldEnum | Blocked_commentsScalarFieldEnum[]
  }

  /**
   * blocked_comments create
   */
  export type blocked_commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocked_comments
     */
    select?: blocked_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocked_comments
     */
    omit?: blocked_commentsOmit<ExtArgs> | null
    /**
     * The data needed to create a blocked_comments.
     */
    data: XOR<blocked_commentsCreateInput, blocked_commentsUncheckedCreateInput>
  }

  /**
   * blocked_comments createMany
   */
  export type blocked_commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blocked_comments.
     */
    data: blocked_commentsCreateManyInput | blocked_commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blocked_comments update
   */
  export type blocked_commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocked_comments
     */
    select?: blocked_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocked_comments
     */
    omit?: blocked_commentsOmit<ExtArgs> | null
    /**
     * The data needed to update a blocked_comments.
     */
    data: XOR<blocked_commentsUpdateInput, blocked_commentsUncheckedUpdateInput>
    /**
     * Choose, which blocked_comments to update.
     */
    where: blocked_commentsWhereUniqueInput
  }

  /**
   * blocked_comments updateMany
   */
  export type blocked_commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blocked_comments.
     */
    data: XOR<blocked_commentsUpdateManyMutationInput, blocked_commentsUncheckedUpdateManyInput>
    /**
     * Filter which blocked_comments to update
     */
    where?: blocked_commentsWhereInput
    /**
     * Limit how many blocked_comments to update.
     */
    limit?: number
  }

  /**
   * blocked_comments upsert
   */
  export type blocked_commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocked_comments
     */
    select?: blocked_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocked_comments
     */
    omit?: blocked_commentsOmit<ExtArgs> | null
    /**
     * The filter to search for the blocked_comments to update in case it exists.
     */
    where: blocked_commentsWhereUniqueInput
    /**
     * In case the blocked_comments found by the `where` argument doesn't exist, create a new blocked_comments with this data.
     */
    create: XOR<blocked_commentsCreateInput, blocked_commentsUncheckedCreateInput>
    /**
     * In case the blocked_comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blocked_commentsUpdateInput, blocked_commentsUncheckedUpdateInput>
  }

  /**
   * blocked_comments delete
   */
  export type blocked_commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocked_comments
     */
    select?: blocked_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocked_comments
     */
    omit?: blocked_commentsOmit<ExtArgs> | null
    /**
     * Filter which blocked_comments to delete.
     */
    where: blocked_commentsWhereUniqueInput
  }

  /**
   * blocked_comments deleteMany
   */
  export type blocked_commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blocked_comments to delete
     */
    where?: blocked_commentsWhereInput
    /**
     * Limit how many blocked_comments to delete.
     */
    limit?: number
  }

  /**
   * blocked_comments without action
   */
  export type blocked_commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocked_comments
     */
    select?: blocked_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocked_comments
     */
    omit?: blocked_commentsOmit<ExtArgs> | null
  }


  /**
   * Model comment_reaction
   */

  export type AggregateComment_reaction = {
    _count: Comment_reactionCountAggregateOutputType | null
    _avg: Comment_reactionAvgAggregateOutputType | null
    _sum: Comment_reactionSumAggregateOutputType | null
    _min: Comment_reactionMinAggregateOutputType | null
    _max: Comment_reactionMaxAggregateOutputType | null
  }

  export type Comment_reactionAvgAggregateOutputType = {
    comment_id: number | null
    reacted_by: number | null
  }

  export type Comment_reactionSumAggregateOutputType = {
    comment_id: bigint | null
    reacted_by: bigint | null
  }

  export type Comment_reactionMinAggregateOutputType = {
    comment_id: bigint | null
    reacted_by: bigint | null
    created_datetime: Date | null
  }

  export type Comment_reactionMaxAggregateOutputType = {
    comment_id: bigint | null
    reacted_by: bigint | null
    created_datetime: Date | null
  }

  export type Comment_reactionCountAggregateOutputType = {
    comment_id: number
    reacted_by: number
    created_datetime: number
    _all: number
  }


  export type Comment_reactionAvgAggregateInputType = {
    comment_id?: true
    reacted_by?: true
  }

  export type Comment_reactionSumAggregateInputType = {
    comment_id?: true
    reacted_by?: true
  }

  export type Comment_reactionMinAggregateInputType = {
    comment_id?: true
    reacted_by?: true
    created_datetime?: true
  }

  export type Comment_reactionMaxAggregateInputType = {
    comment_id?: true
    reacted_by?: true
    created_datetime?: true
  }

  export type Comment_reactionCountAggregateInputType = {
    comment_id?: true
    reacted_by?: true
    created_datetime?: true
    _all?: true
  }

  export type Comment_reactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comment_reaction to aggregate.
     */
    where?: comment_reactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_reactions to fetch.
     */
    orderBy?: comment_reactionOrderByWithRelationInput | comment_reactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: comment_reactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comment_reactions
    **/
    _count?: true | Comment_reactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Comment_reactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Comment_reactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Comment_reactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Comment_reactionMaxAggregateInputType
  }

  export type GetComment_reactionAggregateType<T extends Comment_reactionAggregateArgs> = {
        [P in keyof T & keyof AggregateComment_reaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment_reaction[P]>
      : GetScalarType<T[P], AggregateComment_reaction[P]>
  }




  export type comment_reactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comment_reactionWhereInput
    orderBy?: comment_reactionOrderByWithAggregationInput | comment_reactionOrderByWithAggregationInput[]
    by: Comment_reactionScalarFieldEnum[] | Comment_reactionScalarFieldEnum
    having?: comment_reactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Comment_reactionCountAggregateInputType | true
    _avg?: Comment_reactionAvgAggregateInputType
    _sum?: Comment_reactionSumAggregateInputType
    _min?: Comment_reactionMinAggregateInputType
    _max?: Comment_reactionMaxAggregateInputType
  }

  export type Comment_reactionGroupByOutputType = {
    comment_id: bigint
    reacted_by: bigint
    created_datetime: Date | null
    _count: Comment_reactionCountAggregateOutputType | null
    _avg: Comment_reactionAvgAggregateOutputType | null
    _sum: Comment_reactionSumAggregateOutputType | null
    _min: Comment_reactionMinAggregateOutputType | null
    _max: Comment_reactionMaxAggregateOutputType | null
  }

  type GetComment_reactionGroupByPayload<T extends comment_reactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Comment_reactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Comment_reactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Comment_reactionGroupByOutputType[P]>
            : GetScalarType<T[P], Comment_reactionGroupByOutputType[P]>
        }
      >
    >


  export type comment_reactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    reacted_by?: boolean
    created_datetime?: boolean
  }, ExtArgs["result"]["comment_reaction"]>



  export type comment_reactionSelectScalar = {
    comment_id?: boolean
    reacted_by?: boolean
    created_datetime?: boolean
  }

  export type comment_reactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"comment_id" | "reacted_by" | "created_datetime", ExtArgs["result"]["comment_reaction"]>

  export type $comment_reactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comment_reaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      comment_id: bigint
      reacted_by: bigint
      created_datetime: Date | null
    }, ExtArgs["result"]["comment_reaction"]>
    composites: {}
  }

  type comment_reactionGetPayload<S extends boolean | null | undefined | comment_reactionDefaultArgs> = $Result.GetResult<Prisma.$comment_reactionPayload, S>

  type comment_reactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<comment_reactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Comment_reactionCountAggregateInputType | true
    }

  export interface comment_reactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comment_reaction'], meta: { name: 'comment_reaction' } }
    /**
     * Find zero or one Comment_reaction that matches the filter.
     * @param {comment_reactionFindUniqueArgs} args - Arguments to find a Comment_reaction
     * @example
     * // Get one Comment_reaction
     * const comment_reaction = await prisma.comment_reaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends comment_reactionFindUniqueArgs>(args: SelectSubset<T, comment_reactionFindUniqueArgs<ExtArgs>>): Prisma__comment_reactionClient<$Result.GetResult<Prisma.$comment_reactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment_reaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {comment_reactionFindUniqueOrThrowArgs} args - Arguments to find a Comment_reaction
     * @example
     * // Get one Comment_reaction
     * const comment_reaction = await prisma.comment_reaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends comment_reactionFindUniqueOrThrowArgs>(args: SelectSubset<T, comment_reactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__comment_reactionClient<$Result.GetResult<Prisma.$comment_reactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment_reaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_reactionFindFirstArgs} args - Arguments to find a Comment_reaction
     * @example
     * // Get one Comment_reaction
     * const comment_reaction = await prisma.comment_reaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends comment_reactionFindFirstArgs>(args?: SelectSubset<T, comment_reactionFindFirstArgs<ExtArgs>>): Prisma__comment_reactionClient<$Result.GetResult<Prisma.$comment_reactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment_reaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_reactionFindFirstOrThrowArgs} args - Arguments to find a Comment_reaction
     * @example
     * // Get one Comment_reaction
     * const comment_reaction = await prisma.comment_reaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends comment_reactionFindFirstOrThrowArgs>(args?: SelectSubset<T, comment_reactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__comment_reactionClient<$Result.GetResult<Prisma.$comment_reactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comment_reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_reactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comment_reactions
     * const comment_reactions = await prisma.comment_reaction.findMany()
     * 
     * // Get first 10 Comment_reactions
     * const comment_reactions = await prisma.comment_reaction.findMany({ take: 10 })
     * 
     * // Only select the `comment_id`
     * const comment_reactionWithComment_idOnly = await prisma.comment_reaction.findMany({ select: { comment_id: true } })
     * 
     */
    findMany<T extends comment_reactionFindManyArgs>(args?: SelectSubset<T, comment_reactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comment_reactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment_reaction.
     * @param {comment_reactionCreateArgs} args - Arguments to create a Comment_reaction.
     * @example
     * // Create one Comment_reaction
     * const Comment_reaction = await prisma.comment_reaction.create({
     *   data: {
     *     // ... data to create a Comment_reaction
     *   }
     * })
     * 
     */
    create<T extends comment_reactionCreateArgs>(args: SelectSubset<T, comment_reactionCreateArgs<ExtArgs>>): Prisma__comment_reactionClient<$Result.GetResult<Prisma.$comment_reactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comment_reactions.
     * @param {comment_reactionCreateManyArgs} args - Arguments to create many Comment_reactions.
     * @example
     * // Create many Comment_reactions
     * const comment_reaction = await prisma.comment_reaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends comment_reactionCreateManyArgs>(args?: SelectSubset<T, comment_reactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment_reaction.
     * @param {comment_reactionDeleteArgs} args - Arguments to delete one Comment_reaction.
     * @example
     * // Delete one Comment_reaction
     * const Comment_reaction = await prisma.comment_reaction.delete({
     *   where: {
     *     // ... filter to delete one Comment_reaction
     *   }
     * })
     * 
     */
    delete<T extends comment_reactionDeleteArgs>(args: SelectSubset<T, comment_reactionDeleteArgs<ExtArgs>>): Prisma__comment_reactionClient<$Result.GetResult<Prisma.$comment_reactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment_reaction.
     * @param {comment_reactionUpdateArgs} args - Arguments to update one Comment_reaction.
     * @example
     * // Update one Comment_reaction
     * const comment_reaction = await prisma.comment_reaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends comment_reactionUpdateArgs>(args: SelectSubset<T, comment_reactionUpdateArgs<ExtArgs>>): Prisma__comment_reactionClient<$Result.GetResult<Prisma.$comment_reactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comment_reactions.
     * @param {comment_reactionDeleteManyArgs} args - Arguments to filter Comment_reactions to delete.
     * @example
     * // Delete a few Comment_reactions
     * const { count } = await prisma.comment_reaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends comment_reactionDeleteManyArgs>(args?: SelectSubset<T, comment_reactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comment_reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_reactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comment_reactions
     * const comment_reaction = await prisma.comment_reaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends comment_reactionUpdateManyArgs>(args: SelectSubset<T, comment_reactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment_reaction.
     * @param {comment_reactionUpsertArgs} args - Arguments to update or create a Comment_reaction.
     * @example
     * // Update or create a Comment_reaction
     * const comment_reaction = await prisma.comment_reaction.upsert({
     *   create: {
     *     // ... data to create a Comment_reaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment_reaction we want to update
     *   }
     * })
     */
    upsert<T extends comment_reactionUpsertArgs>(args: SelectSubset<T, comment_reactionUpsertArgs<ExtArgs>>): Prisma__comment_reactionClient<$Result.GetResult<Prisma.$comment_reactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comment_reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_reactionCountArgs} args - Arguments to filter Comment_reactions to count.
     * @example
     * // Count the number of Comment_reactions
     * const count = await prisma.comment_reaction.count({
     *   where: {
     *     // ... the filter for the Comment_reactions we want to count
     *   }
     * })
    **/
    count<T extends comment_reactionCountArgs>(
      args?: Subset<T, comment_reactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Comment_reactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment_reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comment_reactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Comment_reactionAggregateArgs>(args: Subset<T, Comment_reactionAggregateArgs>): Prisma.PrismaPromise<GetComment_reactionAggregateType<T>>

    /**
     * Group by Comment_reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_reactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends comment_reactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: comment_reactionGroupByArgs['orderBy'] }
        : { orderBy?: comment_reactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, comment_reactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComment_reactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comment_reaction model
   */
  readonly fields: comment_reactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comment_reaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__comment_reactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comment_reaction model
   */
  interface comment_reactionFieldRefs {
    readonly comment_id: FieldRef<"comment_reaction", 'BigInt'>
    readonly reacted_by: FieldRef<"comment_reaction", 'BigInt'>
    readonly created_datetime: FieldRef<"comment_reaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comment_reaction findUnique
   */
  export type comment_reactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reaction
     */
    select?: comment_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reaction
     */
    omit?: comment_reactionOmit<ExtArgs> | null
    /**
     * Filter, which comment_reaction to fetch.
     */
    where: comment_reactionWhereUniqueInput
  }

  /**
   * comment_reaction findUniqueOrThrow
   */
  export type comment_reactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reaction
     */
    select?: comment_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reaction
     */
    omit?: comment_reactionOmit<ExtArgs> | null
    /**
     * Filter, which comment_reaction to fetch.
     */
    where: comment_reactionWhereUniqueInput
  }

  /**
   * comment_reaction findFirst
   */
  export type comment_reactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reaction
     */
    select?: comment_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reaction
     */
    omit?: comment_reactionOmit<ExtArgs> | null
    /**
     * Filter, which comment_reaction to fetch.
     */
    where?: comment_reactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_reactions to fetch.
     */
    orderBy?: comment_reactionOrderByWithRelationInput | comment_reactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comment_reactions.
     */
    cursor?: comment_reactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comment_reactions.
     */
    distinct?: Comment_reactionScalarFieldEnum | Comment_reactionScalarFieldEnum[]
  }

  /**
   * comment_reaction findFirstOrThrow
   */
  export type comment_reactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reaction
     */
    select?: comment_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reaction
     */
    omit?: comment_reactionOmit<ExtArgs> | null
    /**
     * Filter, which comment_reaction to fetch.
     */
    where?: comment_reactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_reactions to fetch.
     */
    orderBy?: comment_reactionOrderByWithRelationInput | comment_reactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comment_reactions.
     */
    cursor?: comment_reactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comment_reactions.
     */
    distinct?: Comment_reactionScalarFieldEnum | Comment_reactionScalarFieldEnum[]
  }

  /**
   * comment_reaction findMany
   */
  export type comment_reactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reaction
     */
    select?: comment_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reaction
     */
    omit?: comment_reactionOmit<ExtArgs> | null
    /**
     * Filter, which comment_reactions to fetch.
     */
    where?: comment_reactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_reactions to fetch.
     */
    orderBy?: comment_reactionOrderByWithRelationInput | comment_reactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comment_reactions.
     */
    cursor?: comment_reactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_reactions.
     */
    skip?: number
    distinct?: Comment_reactionScalarFieldEnum | Comment_reactionScalarFieldEnum[]
  }

  /**
   * comment_reaction create
   */
  export type comment_reactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reaction
     */
    select?: comment_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reaction
     */
    omit?: comment_reactionOmit<ExtArgs> | null
    /**
     * The data needed to create a comment_reaction.
     */
    data: XOR<comment_reactionCreateInput, comment_reactionUncheckedCreateInput>
  }

  /**
   * comment_reaction createMany
   */
  export type comment_reactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comment_reactions.
     */
    data: comment_reactionCreateManyInput | comment_reactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comment_reaction update
   */
  export type comment_reactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reaction
     */
    select?: comment_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reaction
     */
    omit?: comment_reactionOmit<ExtArgs> | null
    /**
     * The data needed to update a comment_reaction.
     */
    data: XOR<comment_reactionUpdateInput, comment_reactionUncheckedUpdateInput>
    /**
     * Choose, which comment_reaction to update.
     */
    where: comment_reactionWhereUniqueInput
  }

  /**
   * comment_reaction updateMany
   */
  export type comment_reactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comment_reactions.
     */
    data: XOR<comment_reactionUpdateManyMutationInput, comment_reactionUncheckedUpdateManyInput>
    /**
     * Filter which comment_reactions to update
     */
    where?: comment_reactionWhereInput
    /**
     * Limit how many comment_reactions to update.
     */
    limit?: number
  }

  /**
   * comment_reaction upsert
   */
  export type comment_reactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reaction
     */
    select?: comment_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reaction
     */
    omit?: comment_reactionOmit<ExtArgs> | null
    /**
     * The filter to search for the comment_reaction to update in case it exists.
     */
    where: comment_reactionWhereUniqueInput
    /**
     * In case the comment_reaction found by the `where` argument doesn't exist, create a new comment_reaction with this data.
     */
    create: XOR<comment_reactionCreateInput, comment_reactionUncheckedCreateInput>
    /**
     * In case the comment_reaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<comment_reactionUpdateInput, comment_reactionUncheckedUpdateInput>
  }

  /**
   * comment_reaction delete
   */
  export type comment_reactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reaction
     */
    select?: comment_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reaction
     */
    omit?: comment_reactionOmit<ExtArgs> | null
    /**
     * Filter which comment_reaction to delete.
     */
    where: comment_reactionWhereUniqueInput
  }

  /**
   * comment_reaction deleteMany
   */
  export type comment_reactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comment_reactions to delete
     */
    where?: comment_reactionWhereInput
    /**
     * Limit how many comment_reactions to delete.
     */
    limit?: number
  }

  /**
   * comment_reaction without action
   */
  export type comment_reactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reaction
     */
    select?: comment_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reaction
     */
    omit?: comment_reactionOmit<ExtArgs> | null
  }


  /**
   * Model comment_reply
   */

  export type AggregateComment_reply = {
    _count: Comment_replyCountAggregateOutputType | null
    _avg: Comment_replyAvgAggregateOutputType | null
    _sum: Comment_replySumAggregateOutputType | null
    _min: Comment_replyMinAggregateOutputType | null
    _max: Comment_replyMaxAggregateOutputType | null
  }

  export type Comment_replyAvgAggregateOutputType = {
    reply_id: number | null
    comment_id: number | null
    reply_by: number | null
    total_reaction: number | null
  }

  export type Comment_replySumAggregateOutputType = {
    reply_id: bigint | null
    comment_id: bigint | null
    reply_by: bigint | null
    total_reaction: number | null
  }

  export type Comment_replyMinAggregateOutputType = {
    reply_id: bigint | null
    comment_id: bigint | null
    reply_by: bigint | null
    reply: string | null
    created_datetime: Date | null
    updated_datetime: Date | null
    total_reaction: number | null
  }

  export type Comment_replyMaxAggregateOutputType = {
    reply_id: bigint | null
    comment_id: bigint | null
    reply_by: bigint | null
    reply: string | null
    created_datetime: Date | null
    updated_datetime: Date | null
    total_reaction: number | null
  }

  export type Comment_replyCountAggregateOutputType = {
    reply_id: number
    comment_id: number
    reply_by: number
    reply: number
    created_datetime: number
    updated_datetime: number
    total_reaction: number
    _all: number
  }


  export type Comment_replyAvgAggregateInputType = {
    reply_id?: true
    comment_id?: true
    reply_by?: true
    total_reaction?: true
  }

  export type Comment_replySumAggregateInputType = {
    reply_id?: true
    comment_id?: true
    reply_by?: true
    total_reaction?: true
  }

  export type Comment_replyMinAggregateInputType = {
    reply_id?: true
    comment_id?: true
    reply_by?: true
    reply?: true
    created_datetime?: true
    updated_datetime?: true
    total_reaction?: true
  }

  export type Comment_replyMaxAggregateInputType = {
    reply_id?: true
    comment_id?: true
    reply_by?: true
    reply?: true
    created_datetime?: true
    updated_datetime?: true
    total_reaction?: true
  }

  export type Comment_replyCountAggregateInputType = {
    reply_id?: true
    comment_id?: true
    reply_by?: true
    reply?: true
    created_datetime?: true
    updated_datetime?: true
    total_reaction?: true
    _all?: true
  }

  export type Comment_replyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comment_reply to aggregate.
     */
    where?: comment_replyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_replies to fetch.
     */
    orderBy?: comment_replyOrderByWithRelationInput | comment_replyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: comment_replyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comment_replies
    **/
    _count?: true | Comment_replyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Comment_replyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Comment_replySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Comment_replyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Comment_replyMaxAggregateInputType
  }

  export type GetComment_replyAggregateType<T extends Comment_replyAggregateArgs> = {
        [P in keyof T & keyof AggregateComment_reply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment_reply[P]>
      : GetScalarType<T[P], AggregateComment_reply[P]>
  }




  export type comment_replyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comment_replyWhereInput
    orderBy?: comment_replyOrderByWithAggregationInput | comment_replyOrderByWithAggregationInput[]
    by: Comment_replyScalarFieldEnum[] | Comment_replyScalarFieldEnum
    having?: comment_replyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Comment_replyCountAggregateInputType | true
    _avg?: Comment_replyAvgAggregateInputType
    _sum?: Comment_replySumAggregateInputType
    _min?: Comment_replyMinAggregateInputType
    _max?: Comment_replyMaxAggregateInputType
  }

  export type Comment_replyGroupByOutputType = {
    reply_id: bigint
    comment_id: bigint | null
    reply_by: bigint | null
    reply: string | null
    created_datetime: Date | null
    updated_datetime: Date | null
    total_reaction: number | null
    _count: Comment_replyCountAggregateOutputType | null
    _avg: Comment_replyAvgAggregateOutputType | null
    _sum: Comment_replySumAggregateOutputType | null
    _min: Comment_replyMinAggregateOutputType | null
    _max: Comment_replyMaxAggregateOutputType | null
  }

  type GetComment_replyGroupByPayload<T extends comment_replyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Comment_replyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Comment_replyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Comment_replyGroupByOutputType[P]>
            : GetScalarType<T[P], Comment_replyGroupByOutputType[P]>
        }
      >
    >


  export type comment_replySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reply_id?: boolean
    comment_id?: boolean
    reply_by?: boolean
    reply?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
    total_reaction?: boolean
  }, ExtArgs["result"]["comment_reply"]>



  export type comment_replySelectScalar = {
    reply_id?: boolean
    comment_id?: boolean
    reply_by?: boolean
    reply?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
    total_reaction?: boolean
  }

  export type comment_replyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reply_id" | "comment_id" | "reply_by" | "reply" | "created_datetime" | "updated_datetime" | "total_reaction", ExtArgs["result"]["comment_reply"]>

  export type $comment_replyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comment_reply"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      reply_id: bigint
      comment_id: bigint | null
      reply_by: bigint | null
      reply: string | null
      created_datetime: Date | null
      updated_datetime: Date | null
      total_reaction: number | null
    }, ExtArgs["result"]["comment_reply"]>
    composites: {}
  }

  type comment_replyGetPayload<S extends boolean | null | undefined | comment_replyDefaultArgs> = $Result.GetResult<Prisma.$comment_replyPayload, S>

  type comment_replyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<comment_replyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Comment_replyCountAggregateInputType | true
    }

  export interface comment_replyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comment_reply'], meta: { name: 'comment_reply' } }
    /**
     * Find zero or one Comment_reply that matches the filter.
     * @param {comment_replyFindUniqueArgs} args - Arguments to find a Comment_reply
     * @example
     * // Get one Comment_reply
     * const comment_reply = await prisma.comment_reply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends comment_replyFindUniqueArgs>(args: SelectSubset<T, comment_replyFindUniqueArgs<ExtArgs>>): Prisma__comment_replyClient<$Result.GetResult<Prisma.$comment_replyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment_reply that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {comment_replyFindUniqueOrThrowArgs} args - Arguments to find a Comment_reply
     * @example
     * // Get one Comment_reply
     * const comment_reply = await prisma.comment_reply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends comment_replyFindUniqueOrThrowArgs>(args: SelectSubset<T, comment_replyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__comment_replyClient<$Result.GetResult<Prisma.$comment_replyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment_reply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_replyFindFirstArgs} args - Arguments to find a Comment_reply
     * @example
     * // Get one Comment_reply
     * const comment_reply = await prisma.comment_reply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends comment_replyFindFirstArgs>(args?: SelectSubset<T, comment_replyFindFirstArgs<ExtArgs>>): Prisma__comment_replyClient<$Result.GetResult<Prisma.$comment_replyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment_reply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_replyFindFirstOrThrowArgs} args - Arguments to find a Comment_reply
     * @example
     * // Get one Comment_reply
     * const comment_reply = await prisma.comment_reply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends comment_replyFindFirstOrThrowArgs>(args?: SelectSubset<T, comment_replyFindFirstOrThrowArgs<ExtArgs>>): Prisma__comment_replyClient<$Result.GetResult<Prisma.$comment_replyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comment_replies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_replyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comment_replies
     * const comment_replies = await prisma.comment_reply.findMany()
     * 
     * // Get first 10 Comment_replies
     * const comment_replies = await prisma.comment_reply.findMany({ take: 10 })
     * 
     * // Only select the `reply_id`
     * const comment_replyWithReply_idOnly = await prisma.comment_reply.findMany({ select: { reply_id: true } })
     * 
     */
    findMany<T extends comment_replyFindManyArgs>(args?: SelectSubset<T, comment_replyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comment_replyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment_reply.
     * @param {comment_replyCreateArgs} args - Arguments to create a Comment_reply.
     * @example
     * // Create one Comment_reply
     * const Comment_reply = await prisma.comment_reply.create({
     *   data: {
     *     // ... data to create a Comment_reply
     *   }
     * })
     * 
     */
    create<T extends comment_replyCreateArgs>(args: SelectSubset<T, comment_replyCreateArgs<ExtArgs>>): Prisma__comment_replyClient<$Result.GetResult<Prisma.$comment_replyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comment_replies.
     * @param {comment_replyCreateManyArgs} args - Arguments to create many Comment_replies.
     * @example
     * // Create many Comment_replies
     * const comment_reply = await prisma.comment_reply.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends comment_replyCreateManyArgs>(args?: SelectSubset<T, comment_replyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment_reply.
     * @param {comment_replyDeleteArgs} args - Arguments to delete one Comment_reply.
     * @example
     * // Delete one Comment_reply
     * const Comment_reply = await prisma.comment_reply.delete({
     *   where: {
     *     // ... filter to delete one Comment_reply
     *   }
     * })
     * 
     */
    delete<T extends comment_replyDeleteArgs>(args: SelectSubset<T, comment_replyDeleteArgs<ExtArgs>>): Prisma__comment_replyClient<$Result.GetResult<Prisma.$comment_replyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment_reply.
     * @param {comment_replyUpdateArgs} args - Arguments to update one Comment_reply.
     * @example
     * // Update one Comment_reply
     * const comment_reply = await prisma.comment_reply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends comment_replyUpdateArgs>(args: SelectSubset<T, comment_replyUpdateArgs<ExtArgs>>): Prisma__comment_replyClient<$Result.GetResult<Prisma.$comment_replyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comment_replies.
     * @param {comment_replyDeleteManyArgs} args - Arguments to filter Comment_replies to delete.
     * @example
     * // Delete a few Comment_replies
     * const { count } = await prisma.comment_reply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends comment_replyDeleteManyArgs>(args?: SelectSubset<T, comment_replyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comment_replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_replyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comment_replies
     * const comment_reply = await prisma.comment_reply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends comment_replyUpdateManyArgs>(args: SelectSubset<T, comment_replyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment_reply.
     * @param {comment_replyUpsertArgs} args - Arguments to update or create a Comment_reply.
     * @example
     * // Update or create a Comment_reply
     * const comment_reply = await prisma.comment_reply.upsert({
     *   create: {
     *     // ... data to create a Comment_reply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment_reply we want to update
     *   }
     * })
     */
    upsert<T extends comment_replyUpsertArgs>(args: SelectSubset<T, comment_replyUpsertArgs<ExtArgs>>): Prisma__comment_replyClient<$Result.GetResult<Prisma.$comment_replyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comment_replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_replyCountArgs} args - Arguments to filter Comment_replies to count.
     * @example
     * // Count the number of Comment_replies
     * const count = await prisma.comment_reply.count({
     *   where: {
     *     // ... the filter for the Comment_replies we want to count
     *   }
     * })
    **/
    count<T extends comment_replyCountArgs>(
      args?: Subset<T, comment_replyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Comment_replyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment_reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comment_replyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Comment_replyAggregateArgs>(args: Subset<T, Comment_replyAggregateArgs>): Prisma.PrismaPromise<GetComment_replyAggregateType<T>>

    /**
     * Group by Comment_reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_replyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends comment_replyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: comment_replyGroupByArgs['orderBy'] }
        : { orderBy?: comment_replyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, comment_replyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComment_replyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comment_reply model
   */
  readonly fields: comment_replyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comment_reply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__comment_replyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comment_reply model
   */
  interface comment_replyFieldRefs {
    readonly reply_id: FieldRef<"comment_reply", 'BigInt'>
    readonly comment_id: FieldRef<"comment_reply", 'BigInt'>
    readonly reply_by: FieldRef<"comment_reply", 'BigInt'>
    readonly reply: FieldRef<"comment_reply", 'String'>
    readonly created_datetime: FieldRef<"comment_reply", 'DateTime'>
    readonly updated_datetime: FieldRef<"comment_reply", 'DateTime'>
    readonly total_reaction: FieldRef<"comment_reply", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * comment_reply findUnique
   */
  export type comment_replyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply
     */
    select?: comment_replySelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply
     */
    omit?: comment_replyOmit<ExtArgs> | null
    /**
     * Filter, which comment_reply to fetch.
     */
    where: comment_replyWhereUniqueInput
  }

  /**
   * comment_reply findUniqueOrThrow
   */
  export type comment_replyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply
     */
    select?: comment_replySelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply
     */
    omit?: comment_replyOmit<ExtArgs> | null
    /**
     * Filter, which comment_reply to fetch.
     */
    where: comment_replyWhereUniqueInput
  }

  /**
   * comment_reply findFirst
   */
  export type comment_replyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply
     */
    select?: comment_replySelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply
     */
    omit?: comment_replyOmit<ExtArgs> | null
    /**
     * Filter, which comment_reply to fetch.
     */
    where?: comment_replyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_replies to fetch.
     */
    orderBy?: comment_replyOrderByWithRelationInput | comment_replyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comment_replies.
     */
    cursor?: comment_replyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comment_replies.
     */
    distinct?: Comment_replyScalarFieldEnum | Comment_replyScalarFieldEnum[]
  }

  /**
   * comment_reply findFirstOrThrow
   */
  export type comment_replyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply
     */
    select?: comment_replySelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply
     */
    omit?: comment_replyOmit<ExtArgs> | null
    /**
     * Filter, which comment_reply to fetch.
     */
    where?: comment_replyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_replies to fetch.
     */
    orderBy?: comment_replyOrderByWithRelationInput | comment_replyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comment_replies.
     */
    cursor?: comment_replyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comment_replies.
     */
    distinct?: Comment_replyScalarFieldEnum | Comment_replyScalarFieldEnum[]
  }

  /**
   * comment_reply findMany
   */
  export type comment_replyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply
     */
    select?: comment_replySelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply
     */
    omit?: comment_replyOmit<ExtArgs> | null
    /**
     * Filter, which comment_replies to fetch.
     */
    where?: comment_replyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_replies to fetch.
     */
    orderBy?: comment_replyOrderByWithRelationInput | comment_replyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comment_replies.
     */
    cursor?: comment_replyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_replies.
     */
    skip?: number
    distinct?: Comment_replyScalarFieldEnum | Comment_replyScalarFieldEnum[]
  }

  /**
   * comment_reply create
   */
  export type comment_replyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply
     */
    select?: comment_replySelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply
     */
    omit?: comment_replyOmit<ExtArgs> | null
    /**
     * The data needed to create a comment_reply.
     */
    data?: XOR<comment_replyCreateInput, comment_replyUncheckedCreateInput>
  }

  /**
   * comment_reply createMany
   */
  export type comment_replyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comment_replies.
     */
    data: comment_replyCreateManyInput | comment_replyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comment_reply update
   */
  export type comment_replyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply
     */
    select?: comment_replySelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply
     */
    omit?: comment_replyOmit<ExtArgs> | null
    /**
     * The data needed to update a comment_reply.
     */
    data: XOR<comment_replyUpdateInput, comment_replyUncheckedUpdateInput>
    /**
     * Choose, which comment_reply to update.
     */
    where: comment_replyWhereUniqueInput
  }

  /**
   * comment_reply updateMany
   */
  export type comment_replyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comment_replies.
     */
    data: XOR<comment_replyUpdateManyMutationInput, comment_replyUncheckedUpdateManyInput>
    /**
     * Filter which comment_replies to update
     */
    where?: comment_replyWhereInput
    /**
     * Limit how many comment_replies to update.
     */
    limit?: number
  }

  /**
   * comment_reply upsert
   */
  export type comment_replyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply
     */
    select?: comment_replySelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply
     */
    omit?: comment_replyOmit<ExtArgs> | null
    /**
     * The filter to search for the comment_reply to update in case it exists.
     */
    where: comment_replyWhereUniqueInput
    /**
     * In case the comment_reply found by the `where` argument doesn't exist, create a new comment_reply with this data.
     */
    create: XOR<comment_replyCreateInput, comment_replyUncheckedCreateInput>
    /**
     * In case the comment_reply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<comment_replyUpdateInput, comment_replyUncheckedUpdateInput>
  }

  /**
   * comment_reply delete
   */
  export type comment_replyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply
     */
    select?: comment_replySelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply
     */
    omit?: comment_replyOmit<ExtArgs> | null
    /**
     * Filter which comment_reply to delete.
     */
    where: comment_replyWhereUniqueInput
  }

  /**
   * comment_reply deleteMany
   */
  export type comment_replyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comment_replies to delete
     */
    where?: comment_replyWhereInput
    /**
     * Limit how many comment_replies to delete.
     */
    limit?: number
  }

  /**
   * comment_reply without action
   */
  export type comment_replyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply
     */
    select?: comment_replySelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply
     */
    omit?: comment_replyOmit<ExtArgs> | null
  }


  /**
   * Model comment_reply_reaction
   */

  export type AggregateComment_reply_reaction = {
    _count: Comment_reply_reactionCountAggregateOutputType | null
    _avg: Comment_reply_reactionAvgAggregateOutputType | null
    _sum: Comment_reply_reactionSumAggregateOutputType | null
    _min: Comment_reply_reactionMinAggregateOutputType | null
    _max: Comment_reply_reactionMaxAggregateOutputType | null
  }

  export type Comment_reply_reactionAvgAggregateOutputType = {
    reply_id: number | null
    reacted_by: number | null
  }

  export type Comment_reply_reactionSumAggregateOutputType = {
    reply_id: bigint | null
    reacted_by: bigint | null
  }

  export type Comment_reply_reactionMinAggregateOutputType = {
    reply_id: bigint | null
    reacted_by: bigint | null
    created_datetime: Date | null
  }

  export type Comment_reply_reactionMaxAggregateOutputType = {
    reply_id: bigint | null
    reacted_by: bigint | null
    created_datetime: Date | null
  }

  export type Comment_reply_reactionCountAggregateOutputType = {
    reply_id: number
    reacted_by: number
    created_datetime: number
    _all: number
  }


  export type Comment_reply_reactionAvgAggregateInputType = {
    reply_id?: true
    reacted_by?: true
  }

  export type Comment_reply_reactionSumAggregateInputType = {
    reply_id?: true
    reacted_by?: true
  }

  export type Comment_reply_reactionMinAggregateInputType = {
    reply_id?: true
    reacted_by?: true
    created_datetime?: true
  }

  export type Comment_reply_reactionMaxAggregateInputType = {
    reply_id?: true
    reacted_by?: true
    created_datetime?: true
  }

  export type Comment_reply_reactionCountAggregateInputType = {
    reply_id?: true
    reacted_by?: true
    created_datetime?: true
    _all?: true
  }

  export type Comment_reply_reactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comment_reply_reaction to aggregate.
     */
    where?: comment_reply_reactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_reply_reactions to fetch.
     */
    orderBy?: comment_reply_reactionOrderByWithRelationInput | comment_reply_reactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: comment_reply_reactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_reply_reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_reply_reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comment_reply_reactions
    **/
    _count?: true | Comment_reply_reactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Comment_reply_reactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Comment_reply_reactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Comment_reply_reactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Comment_reply_reactionMaxAggregateInputType
  }

  export type GetComment_reply_reactionAggregateType<T extends Comment_reply_reactionAggregateArgs> = {
        [P in keyof T & keyof AggregateComment_reply_reaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment_reply_reaction[P]>
      : GetScalarType<T[P], AggregateComment_reply_reaction[P]>
  }




  export type comment_reply_reactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comment_reply_reactionWhereInput
    orderBy?: comment_reply_reactionOrderByWithAggregationInput | comment_reply_reactionOrderByWithAggregationInput[]
    by: Comment_reply_reactionScalarFieldEnum[] | Comment_reply_reactionScalarFieldEnum
    having?: comment_reply_reactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Comment_reply_reactionCountAggregateInputType | true
    _avg?: Comment_reply_reactionAvgAggregateInputType
    _sum?: Comment_reply_reactionSumAggregateInputType
    _min?: Comment_reply_reactionMinAggregateInputType
    _max?: Comment_reply_reactionMaxAggregateInputType
  }

  export type Comment_reply_reactionGroupByOutputType = {
    reply_id: bigint
    reacted_by: bigint
    created_datetime: Date | null
    _count: Comment_reply_reactionCountAggregateOutputType | null
    _avg: Comment_reply_reactionAvgAggregateOutputType | null
    _sum: Comment_reply_reactionSumAggregateOutputType | null
    _min: Comment_reply_reactionMinAggregateOutputType | null
    _max: Comment_reply_reactionMaxAggregateOutputType | null
  }

  type GetComment_reply_reactionGroupByPayload<T extends comment_reply_reactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Comment_reply_reactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Comment_reply_reactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Comment_reply_reactionGroupByOutputType[P]>
            : GetScalarType<T[P], Comment_reply_reactionGroupByOutputType[P]>
        }
      >
    >


  export type comment_reply_reactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reply_id?: boolean
    reacted_by?: boolean
    created_datetime?: boolean
  }, ExtArgs["result"]["comment_reply_reaction"]>



  export type comment_reply_reactionSelectScalar = {
    reply_id?: boolean
    reacted_by?: boolean
    created_datetime?: boolean
  }

  export type comment_reply_reactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reply_id" | "reacted_by" | "created_datetime", ExtArgs["result"]["comment_reply_reaction"]>

  export type $comment_reply_reactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comment_reply_reaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      reply_id: bigint
      reacted_by: bigint
      created_datetime: Date | null
    }, ExtArgs["result"]["comment_reply_reaction"]>
    composites: {}
  }

  type comment_reply_reactionGetPayload<S extends boolean | null | undefined | comment_reply_reactionDefaultArgs> = $Result.GetResult<Prisma.$comment_reply_reactionPayload, S>

  type comment_reply_reactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<comment_reply_reactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Comment_reply_reactionCountAggregateInputType | true
    }

  export interface comment_reply_reactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comment_reply_reaction'], meta: { name: 'comment_reply_reaction' } }
    /**
     * Find zero or one Comment_reply_reaction that matches the filter.
     * @param {comment_reply_reactionFindUniqueArgs} args - Arguments to find a Comment_reply_reaction
     * @example
     * // Get one Comment_reply_reaction
     * const comment_reply_reaction = await prisma.comment_reply_reaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends comment_reply_reactionFindUniqueArgs>(args: SelectSubset<T, comment_reply_reactionFindUniqueArgs<ExtArgs>>): Prisma__comment_reply_reactionClient<$Result.GetResult<Prisma.$comment_reply_reactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment_reply_reaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {comment_reply_reactionFindUniqueOrThrowArgs} args - Arguments to find a Comment_reply_reaction
     * @example
     * // Get one Comment_reply_reaction
     * const comment_reply_reaction = await prisma.comment_reply_reaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends comment_reply_reactionFindUniqueOrThrowArgs>(args: SelectSubset<T, comment_reply_reactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__comment_reply_reactionClient<$Result.GetResult<Prisma.$comment_reply_reactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment_reply_reaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_reply_reactionFindFirstArgs} args - Arguments to find a Comment_reply_reaction
     * @example
     * // Get one Comment_reply_reaction
     * const comment_reply_reaction = await prisma.comment_reply_reaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends comment_reply_reactionFindFirstArgs>(args?: SelectSubset<T, comment_reply_reactionFindFirstArgs<ExtArgs>>): Prisma__comment_reply_reactionClient<$Result.GetResult<Prisma.$comment_reply_reactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment_reply_reaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_reply_reactionFindFirstOrThrowArgs} args - Arguments to find a Comment_reply_reaction
     * @example
     * // Get one Comment_reply_reaction
     * const comment_reply_reaction = await prisma.comment_reply_reaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends comment_reply_reactionFindFirstOrThrowArgs>(args?: SelectSubset<T, comment_reply_reactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__comment_reply_reactionClient<$Result.GetResult<Prisma.$comment_reply_reactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comment_reply_reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_reply_reactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comment_reply_reactions
     * const comment_reply_reactions = await prisma.comment_reply_reaction.findMany()
     * 
     * // Get first 10 Comment_reply_reactions
     * const comment_reply_reactions = await prisma.comment_reply_reaction.findMany({ take: 10 })
     * 
     * // Only select the `reply_id`
     * const comment_reply_reactionWithReply_idOnly = await prisma.comment_reply_reaction.findMany({ select: { reply_id: true } })
     * 
     */
    findMany<T extends comment_reply_reactionFindManyArgs>(args?: SelectSubset<T, comment_reply_reactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comment_reply_reactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment_reply_reaction.
     * @param {comment_reply_reactionCreateArgs} args - Arguments to create a Comment_reply_reaction.
     * @example
     * // Create one Comment_reply_reaction
     * const Comment_reply_reaction = await prisma.comment_reply_reaction.create({
     *   data: {
     *     // ... data to create a Comment_reply_reaction
     *   }
     * })
     * 
     */
    create<T extends comment_reply_reactionCreateArgs>(args: SelectSubset<T, comment_reply_reactionCreateArgs<ExtArgs>>): Prisma__comment_reply_reactionClient<$Result.GetResult<Prisma.$comment_reply_reactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comment_reply_reactions.
     * @param {comment_reply_reactionCreateManyArgs} args - Arguments to create many Comment_reply_reactions.
     * @example
     * // Create many Comment_reply_reactions
     * const comment_reply_reaction = await prisma.comment_reply_reaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends comment_reply_reactionCreateManyArgs>(args?: SelectSubset<T, comment_reply_reactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment_reply_reaction.
     * @param {comment_reply_reactionDeleteArgs} args - Arguments to delete one Comment_reply_reaction.
     * @example
     * // Delete one Comment_reply_reaction
     * const Comment_reply_reaction = await prisma.comment_reply_reaction.delete({
     *   where: {
     *     // ... filter to delete one Comment_reply_reaction
     *   }
     * })
     * 
     */
    delete<T extends comment_reply_reactionDeleteArgs>(args: SelectSubset<T, comment_reply_reactionDeleteArgs<ExtArgs>>): Prisma__comment_reply_reactionClient<$Result.GetResult<Prisma.$comment_reply_reactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment_reply_reaction.
     * @param {comment_reply_reactionUpdateArgs} args - Arguments to update one Comment_reply_reaction.
     * @example
     * // Update one Comment_reply_reaction
     * const comment_reply_reaction = await prisma.comment_reply_reaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends comment_reply_reactionUpdateArgs>(args: SelectSubset<T, comment_reply_reactionUpdateArgs<ExtArgs>>): Prisma__comment_reply_reactionClient<$Result.GetResult<Prisma.$comment_reply_reactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comment_reply_reactions.
     * @param {comment_reply_reactionDeleteManyArgs} args - Arguments to filter Comment_reply_reactions to delete.
     * @example
     * // Delete a few Comment_reply_reactions
     * const { count } = await prisma.comment_reply_reaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends comment_reply_reactionDeleteManyArgs>(args?: SelectSubset<T, comment_reply_reactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comment_reply_reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_reply_reactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comment_reply_reactions
     * const comment_reply_reaction = await prisma.comment_reply_reaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends comment_reply_reactionUpdateManyArgs>(args: SelectSubset<T, comment_reply_reactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment_reply_reaction.
     * @param {comment_reply_reactionUpsertArgs} args - Arguments to update or create a Comment_reply_reaction.
     * @example
     * // Update or create a Comment_reply_reaction
     * const comment_reply_reaction = await prisma.comment_reply_reaction.upsert({
     *   create: {
     *     // ... data to create a Comment_reply_reaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment_reply_reaction we want to update
     *   }
     * })
     */
    upsert<T extends comment_reply_reactionUpsertArgs>(args: SelectSubset<T, comment_reply_reactionUpsertArgs<ExtArgs>>): Prisma__comment_reply_reactionClient<$Result.GetResult<Prisma.$comment_reply_reactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comment_reply_reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_reply_reactionCountArgs} args - Arguments to filter Comment_reply_reactions to count.
     * @example
     * // Count the number of Comment_reply_reactions
     * const count = await prisma.comment_reply_reaction.count({
     *   where: {
     *     // ... the filter for the Comment_reply_reactions we want to count
     *   }
     * })
    **/
    count<T extends comment_reply_reactionCountArgs>(
      args?: Subset<T, comment_reply_reactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Comment_reply_reactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment_reply_reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comment_reply_reactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Comment_reply_reactionAggregateArgs>(args: Subset<T, Comment_reply_reactionAggregateArgs>): Prisma.PrismaPromise<GetComment_reply_reactionAggregateType<T>>

    /**
     * Group by Comment_reply_reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_reply_reactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends comment_reply_reactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: comment_reply_reactionGroupByArgs['orderBy'] }
        : { orderBy?: comment_reply_reactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, comment_reply_reactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComment_reply_reactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comment_reply_reaction model
   */
  readonly fields: comment_reply_reactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comment_reply_reaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__comment_reply_reactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comment_reply_reaction model
   */
  interface comment_reply_reactionFieldRefs {
    readonly reply_id: FieldRef<"comment_reply_reaction", 'BigInt'>
    readonly reacted_by: FieldRef<"comment_reply_reaction", 'BigInt'>
    readonly created_datetime: FieldRef<"comment_reply_reaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comment_reply_reaction findUnique
   */
  export type comment_reply_reactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply_reaction
     */
    select?: comment_reply_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply_reaction
     */
    omit?: comment_reply_reactionOmit<ExtArgs> | null
    /**
     * Filter, which comment_reply_reaction to fetch.
     */
    where: comment_reply_reactionWhereUniqueInput
  }

  /**
   * comment_reply_reaction findUniqueOrThrow
   */
  export type comment_reply_reactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply_reaction
     */
    select?: comment_reply_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply_reaction
     */
    omit?: comment_reply_reactionOmit<ExtArgs> | null
    /**
     * Filter, which comment_reply_reaction to fetch.
     */
    where: comment_reply_reactionWhereUniqueInput
  }

  /**
   * comment_reply_reaction findFirst
   */
  export type comment_reply_reactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply_reaction
     */
    select?: comment_reply_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply_reaction
     */
    omit?: comment_reply_reactionOmit<ExtArgs> | null
    /**
     * Filter, which comment_reply_reaction to fetch.
     */
    where?: comment_reply_reactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_reply_reactions to fetch.
     */
    orderBy?: comment_reply_reactionOrderByWithRelationInput | comment_reply_reactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comment_reply_reactions.
     */
    cursor?: comment_reply_reactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_reply_reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_reply_reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comment_reply_reactions.
     */
    distinct?: Comment_reply_reactionScalarFieldEnum | Comment_reply_reactionScalarFieldEnum[]
  }

  /**
   * comment_reply_reaction findFirstOrThrow
   */
  export type comment_reply_reactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply_reaction
     */
    select?: comment_reply_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply_reaction
     */
    omit?: comment_reply_reactionOmit<ExtArgs> | null
    /**
     * Filter, which comment_reply_reaction to fetch.
     */
    where?: comment_reply_reactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_reply_reactions to fetch.
     */
    orderBy?: comment_reply_reactionOrderByWithRelationInput | comment_reply_reactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comment_reply_reactions.
     */
    cursor?: comment_reply_reactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_reply_reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_reply_reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comment_reply_reactions.
     */
    distinct?: Comment_reply_reactionScalarFieldEnum | Comment_reply_reactionScalarFieldEnum[]
  }

  /**
   * comment_reply_reaction findMany
   */
  export type comment_reply_reactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply_reaction
     */
    select?: comment_reply_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply_reaction
     */
    omit?: comment_reply_reactionOmit<ExtArgs> | null
    /**
     * Filter, which comment_reply_reactions to fetch.
     */
    where?: comment_reply_reactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_reply_reactions to fetch.
     */
    orderBy?: comment_reply_reactionOrderByWithRelationInput | comment_reply_reactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comment_reply_reactions.
     */
    cursor?: comment_reply_reactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_reply_reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_reply_reactions.
     */
    skip?: number
    distinct?: Comment_reply_reactionScalarFieldEnum | Comment_reply_reactionScalarFieldEnum[]
  }

  /**
   * comment_reply_reaction create
   */
  export type comment_reply_reactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply_reaction
     */
    select?: comment_reply_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply_reaction
     */
    omit?: comment_reply_reactionOmit<ExtArgs> | null
    /**
     * The data needed to create a comment_reply_reaction.
     */
    data: XOR<comment_reply_reactionCreateInput, comment_reply_reactionUncheckedCreateInput>
  }

  /**
   * comment_reply_reaction createMany
   */
  export type comment_reply_reactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comment_reply_reactions.
     */
    data: comment_reply_reactionCreateManyInput | comment_reply_reactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comment_reply_reaction update
   */
  export type comment_reply_reactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply_reaction
     */
    select?: comment_reply_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply_reaction
     */
    omit?: comment_reply_reactionOmit<ExtArgs> | null
    /**
     * The data needed to update a comment_reply_reaction.
     */
    data: XOR<comment_reply_reactionUpdateInput, comment_reply_reactionUncheckedUpdateInput>
    /**
     * Choose, which comment_reply_reaction to update.
     */
    where: comment_reply_reactionWhereUniqueInput
  }

  /**
   * comment_reply_reaction updateMany
   */
  export type comment_reply_reactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comment_reply_reactions.
     */
    data: XOR<comment_reply_reactionUpdateManyMutationInput, comment_reply_reactionUncheckedUpdateManyInput>
    /**
     * Filter which comment_reply_reactions to update
     */
    where?: comment_reply_reactionWhereInput
    /**
     * Limit how many comment_reply_reactions to update.
     */
    limit?: number
  }

  /**
   * comment_reply_reaction upsert
   */
  export type comment_reply_reactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply_reaction
     */
    select?: comment_reply_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply_reaction
     */
    omit?: comment_reply_reactionOmit<ExtArgs> | null
    /**
     * The filter to search for the comment_reply_reaction to update in case it exists.
     */
    where: comment_reply_reactionWhereUniqueInput
    /**
     * In case the comment_reply_reaction found by the `where` argument doesn't exist, create a new comment_reply_reaction with this data.
     */
    create: XOR<comment_reply_reactionCreateInput, comment_reply_reactionUncheckedCreateInput>
    /**
     * In case the comment_reply_reaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<comment_reply_reactionUpdateInput, comment_reply_reactionUncheckedUpdateInput>
  }

  /**
   * comment_reply_reaction delete
   */
  export type comment_reply_reactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply_reaction
     */
    select?: comment_reply_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply_reaction
     */
    omit?: comment_reply_reactionOmit<ExtArgs> | null
    /**
     * Filter which comment_reply_reaction to delete.
     */
    where: comment_reply_reactionWhereUniqueInput
  }

  /**
   * comment_reply_reaction deleteMany
   */
  export type comment_reply_reactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comment_reply_reactions to delete
     */
    where?: comment_reply_reactionWhereInput
    /**
     * Limit how many comment_reply_reactions to delete.
     */
    limit?: number
  }

  /**
   * comment_reply_reaction without action
   */
  export type comment_reply_reactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_reply_reaction
     */
    select?: comment_reply_reactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_reply_reaction
     */
    omit?: comment_reply_reactionOmit<ExtArgs> | null
  }


  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    comment_id: number | null
    feed_id: number | null
    comment_by: number | null
    total_reaction: number | null
    total_reply: number | null
  }

  export type CommentsSumAggregateOutputType = {
    comment_id: bigint | null
    feed_id: bigint | null
    comment_by: bigint | null
    total_reaction: number | null
    total_reply: number | null
  }

  export type CommentsMinAggregateOutputType = {
    comment_id: bigint | null
    feed_id: bigint | null
    comment_by: bigint | null
    comment: string | null
    total_reaction: number | null
    total_reply: number | null
    created_datetime: Date | null
    updated_datetime: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    comment_id: bigint | null
    feed_id: bigint | null
    comment_by: bigint | null
    comment: string | null
    total_reaction: number | null
    total_reply: number | null
    created_datetime: Date | null
    updated_datetime: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    comment_id: number
    feed_id: number
    comment_by: number
    comment: number
    total_reaction: number
    total_reply: number
    created_datetime: number
    updated_datetime: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    comment_id?: true
    feed_id?: true
    comment_by?: true
    total_reaction?: true
    total_reply?: true
  }

  export type CommentsSumAggregateInputType = {
    comment_id?: true
    feed_id?: true
    comment_by?: true
    total_reaction?: true
    total_reply?: true
  }

  export type CommentsMinAggregateInputType = {
    comment_id?: true
    feed_id?: true
    comment_by?: true
    comment?: true
    total_reaction?: true
    total_reply?: true
    created_datetime?: true
    updated_datetime?: true
  }

  export type CommentsMaxAggregateInputType = {
    comment_id?: true
    feed_id?: true
    comment_by?: true
    comment?: true
    total_reaction?: true
    total_reply?: true
    created_datetime?: true
    updated_datetime?: true
  }

  export type CommentsCountAggregateInputType = {
    comment_id?: true
    feed_id?: true
    comment_by?: true
    comment?: true
    total_reaction?: true
    total_reply?: true
    created_datetime?: true
    updated_datetime?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    comment_id: bigint
    feed_id: bigint | null
    comment_by: bigint | null
    comment: string | null
    total_reaction: number | null
    total_reply: number | null
    created_datetime: Date | null
    updated_datetime: Date | null
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    feed_id?: boolean
    comment_by?: boolean
    comment?: boolean
    total_reaction?: boolean
    total_reply?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
  }, ExtArgs["result"]["comments"]>



  export type commentsSelectScalar = {
    comment_id?: boolean
    feed_id?: boolean
    comment_by?: boolean
    comment?: boolean
    total_reaction?: boolean
    total_reply?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
  }

  export type commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"comment_id" | "feed_id" | "comment_by" | "comment" | "total_reaction" | "total_reply" | "created_datetime" | "updated_datetime", ExtArgs["result"]["comments"]>

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      comment_id: bigint
      feed_id: bigint | null
      comment_by: bigint | null
      comment: string | null
      total_reaction: number | null
      total_reply: number | null
      created_datetime: Date | null
      updated_datetime: Date | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.findMany({ select: { comment_id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comments model
   */
  interface commentsFieldRefs {
    readonly comment_id: FieldRef<"comments", 'BigInt'>
    readonly feed_id: FieldRef<"comments", 'BigInt'>
    readonly comment_by: FieldRef<"comments", 'BigInt'>
    readonly comment: FieldRef<"comments", 'String'>
    readonly total_reaction: FieldRef<"comments", 'Int'>
    readonly total_reply: FieldRef<"comments", 'Int'>
    readonly created_datetime: FieldRef<"comments", 'DateTime'>
    readonly updated_datetime: FieldRef<"comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data?: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
  }


  /**
   * Model email_otp_verification
   */

  export type AggregateEmail_otp_verification = {
    _count: Email_otp_verificationCountAggregateOutputType | null
    _min: Email_otp_verificationMinAggregateOutputType | null
    _max: Email_otp_verificationMaxAggregateOutputType | null
  }

  export type Email_otp_verificationMinAggregateOutputType = {
    email_id: string | null
    OTP: string | null
  }

  export type Email_otp_verificationMaxAggregateOutputType = {
    email_id: string | null
    OTP: string | null
  }

  export type Email_otp_verificationCountAggregateOutputType = {
    email_id: number
    OTP: number
    _all: number
  }


  export type Email_otp_verificationMinAggregateInputType = {
    email_id?: true
    OTP?: true
  }

  export type Email_otp_verificationMaxAggregateInputType = {
    email_id?: true
    OTP?: true
  }

  export type Email_otp_verificationCountAggregateInputType = {
    email_id?: true
    OTP?: true
    _all?: true
  }

  export type Email_otp_verificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_otp_verification to aggregate.
     */
    where?: email_otp_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_otp_verifications to fetch.
     */
    orderBy?: email_otp_verificationOrderByWithRelationInput | email_otp_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: email_otp_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_otp_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_otp_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned email_otp_verifications
    **/
    _count?: true | Email_otp_verificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Email_otp_verificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Email_otp_verificationMaxAggregateInputType
  }

  export type GetEmail_otp_verificationAggregateType<T extends Email_otp_verificationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail_otp_verification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail_otp_verification[P]>
      : GetScalarType<T[P], AggregateEmail_otp_verification[P]>
  }




  export type email_otp_verificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_otp_verificationWhereInput
    orderBy?: email_otp_verificationOrderByWithAggregationInput | email_otp_verificationOrderByWithAggregationInput[]
    by: Email_otp_verificationScalarFieldEnum[] | Email_otp_verificationScalarFieldEnum
    having?: email_otp_verificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Email_otp_verificationCountAggregateInputType | true
    _min?: Email_otp_verificationMinAggregateInputType
    _max?: Email_otp_verificationMaxAggregateInputType
  }

  export type Email_otp_verificationGroupByOutputType = {
    email_id: string
    OTP: string
    _count: Email_otp_verificationCountAggregateOutputType | null
    _min: Email_otp_verificationMinAggregateOutputType | null
    _max: Email_otp_verificationMaxAggregateOutputType | null
  }

  type GetEmail_otp_verificationGroupByPayload<T extends email_otp_verificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Email_otp_verificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Email_otp_verificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Email_otp_verificationGroupByOutputType[P]>
            : GetScalarType<T[P], Email_otp_verificationGroupByOutputType[P]>
        }
      >
    >


  export type email_otp_verificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email_id?: boolean
    OTP?: boolean
  }, ExtArgs["result"]["email_otp_verification"]>



  export type email_otp_verificationSelectScalar = {
    email_id?: boolean
    OTP?: boolean
  }

  export type email_otp_verificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email_id" | "OTP", ExtArgs["result"]["email_otp_verification"]>

  export type $email_otp_verificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "email_otp_verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      email_id: string
      OTP: string
    }, ExtArgs["result"]["email_otp_verification"]>
    composites: {}
  }

  type email_otp_verificationGetPayload<S extends boolean | null | undefined | email_otp_verificationDefaultArgs> = $Result.GetResult<Prisma.$email_otp_verificationPayload, S>

  type email_otp_verificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<email_otp_verificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Email_otp_verificationCountAggregateInputType | true
    }

  export interface email_otp_verificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['email_otp_verification'], meta: { name: 'email_otp_verification' } }
    /**
     * Find zero or one Email_otp_verification that matches the filter.
     * @param {email_otp_verificationFindUniqueArgs} args - Arguments to find a Email_otp_verification
     * @example
     * // Get one Email_otp_verification
     * const email_otp_verification = await prisma.email_otp_verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends email_otp_verificationFindUniqueArgs>(args: SelectSubset<T, email_otp_verificationFindUniqueArgs<ExtArgs>>): Prisma__email_otp_verificationClient<$Result.GetResult<Prisma.$email_otp_verificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email_otp_verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {email_otp_verificationFindUniqueOrThrowArgs} args - Arguments to find a Email_otp_verification
     * @example
     * // Get one Email_otp_verification
     * const email_otp_verification = await prisma.email_otp_verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends email_otp_verificationFindUniqueOrThrowArgs>(args: SelectSubset<T, email_otp_verificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__email_otp_verificationClient<$Result.GetResult<Prisma.$email_otp_verificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_otp_verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_otp_verificationFindFirstArgs} args - Arguments to find a Email_otp_verification
     * @example
     * // Get one Email_otp_verification
     * const email_otp_verification = await prisma.email_otp_verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends email_otp_verificationFindFirstArgs>(args?: SelectSubset<T, email_otp_verificationFindFirstArgs<ExtArgs>>): Prisma__email_otp_verificationClient<$Result.GetResult<Prisma.$email_otp_verificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_otp_verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_otp_verificationFindFirstOrThrowArgs} args - Arguments to find a Email_otp_verification
     * @example
     * // Get one Email_otp_verification
     * const email_otp_verification = await prisma.email_otp_verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends email_otp_verificationFindFirstOrThrowArgs>(args?: SelectSubset<T, email_otp_verificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__email_otp_verificationClient<$Result.GetResult<Prisma.$email_otp_verificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Email_otp_verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_otp_verificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Email_otp_verifications
     * const email_otp_verifications = await prisma.email_otp_verification.findMany()
     * 
     * // Get first 10 Email_otp_verifications
     * const email_otp_verifications = await prisma.email_otp_verification.findMany({ take: 10 })
     * 
     * // Only select the `email_id`
     * const email_otp_verificationWithEmail_idOnly = await prisma.email_otp_verification.findMany({ select: { email_id: true } })
     * 
     */
    findMany<T extends email_otp_verificationFindManyArgs>(args?: SelectSubset<T, email_otp_verificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_otp_verificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email_otp_verification.
     * @param {email_otp_verificationCreateArgs} args - Arguments to create a Email_otp_verification.
     * @example
     * // Create one Email_otp_verification
     * const Email_otp_verification = await prisma.email_otp_verification.create({
     *   data: {
     *     // ... data to create a Email_otp_verification
     *   }
     * })
     * 
     */
    create<T extends email_otp_verificationCreateArgs>(args: SelectSubset<T, email_otp_verificationCreateArgs<ExtArgs>>): Prisma__email_otp_verificationClient<$Result.GetResult<Prisma.$email_otp_verificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Email_otp_verifications.
     * @param {email_otp_verificationCreateManyArgs} args - Arguments to create many Email_otp_verifications.
     * @example
     * // Create many Email_otp_verifications
     * const email_otp_verification = await prisma.email_otp_verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends email_otp_verificationCreateManyArgs>(args?: SelectSubset<T, email_otp_verificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Email_otp_verification.
     * @param {email_otp_verificationDeleteArgs} args - Arguments to delete one Email_otp_verification.
     * @example
     * // Delete one Email_otp_verification
     * const Email_otp_verification = await prisma.email_otp_verification.delete({
     *   where: {
     *     // ... filter to delete one Email_otp_verification
     *   }
     * })
     * 
     */
    delete<T extends email_otp_verificationDeleteArgs>(args: SelectSubset<T, email_otp_verificationDeleteArgs<ExtArgs>>): Prisma__email_otp_verificationClient<$Result.GetResult<Prisma.$email_otp_verificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email_otp_verification.
     * @param {email_otp_verificationUpdateArgs} args - Arguments to update one Email_otp_verification.
     * @example
     * // Update one Email_otp_verification
     * const email_otp_verification = await prisma.email_otp_verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends email_otp_verificationUpdateArgs>(args: SelectSubset<T, email_otp_verificationUpdateArgs<ExtArgs>>): Prisma__email_otp_verificationClient<$Result.GetResult<Prisma.$email_otp_verificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Email_otp_verifications.
     * @param {email_otp_verificationDeleteManyArgs} args - Arguments to filter Email_otp_verifications to delete.
     * @example
     * // Delete a few Email_otp_verifications
     * const { count } = await prisma.email_otp_verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends email_otp_verificationDeleteManyArgs>(args?: SelectSubset<T, email_otp_verificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Email_otp_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_otp_verificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Email_otp_verifications
     * const email_otp_verification = await prisma.email_otp_verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends email_otp_verificationUpdateManyArgs>(args: SelectSubset<T, email_otp_verificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Email_otp_verification.
     * @param {email_otp_verificationUpsertArgs} args - Arguments to update or create a Email_otp_verification.
     * @example
     * // Update or create a Email_otp_verification
     * const email_otp_verification = await prisma.email_otp_verification.upsert({
     *   create: {
     *     // ... data to create a Email_otp_verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email_otp_verification we want to update
     *   }
     * })
     */
    upsert<T extends email_otp_verificationUpsertArgs>(args: SelectSubset<T, email_otp_verificationUpsertArgs<ExtArgs>>): Prisma__email_otp_verificationClient<$Result.GetResult<Prisma.$email_otp_verificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Email_otp_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_otp_verificationCountArgs} args - Arguments to filter Email_otp_verifications to count.
     * @example
     * // Count the number of Email_otp_verifications
     * const count = await prisma.email_otp_verification.count({
     *   where: {
     *     // ... the filter for the Email_otp_verifications we want to count
     *   }
     * })
    **/
    count<T extends email_otp_verificationCountArgs>(
      args?: Subset<T, email_otp_verificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Email_otp_verificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email_otp_verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Email_otp_verificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Email_otp_verificationAggregateArgs>(args: Subset<T, Email_otp_verificationAggregateArgs>): Prisma.PrismaPromise<GetEmail_otp_verificationAggregateType<T>>

    /**
     * Group by Email_otp_verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_otp_verificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends email_otp_verificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: email_otp_verificationGroupByArgs['orderBy'] }
        : { orderBy?: email_otp_verificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, email_otp_verificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmail_otp_verificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the email_otp_verification model
   */
  readonly fields: email_otp_verificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for email_otp_verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__email_otp_verificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the email_otp_verification model
   */
  interface email_otp_verificationFieldRefs {
    readonly email_id: FieldRef<"email_otp_verification", 'String'>
    readonly OTP: FieldRef<"email_otp_verification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * email_otp_verification findUnique
   */
  export type email_otp_verificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otp_verification
     */
    select?: email_otp_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otp_verification
     */
    omit?: email_otp_verificationOmit<ExtArgs> | null
    /**
     * Filter, which email_otp_verification to fetch.
     */
    where: email_otp_verificationWhereUniqueInput
  }

  /**
   * email_otp_verification findUniqueOrThrow
   */
  export type email_otp_verificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otp_verification
     */
    select?: email_otp_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otp_verification
     */
    omit?: email_otp_verificationOmit<ExtArgs> | null
    /**
     * Filter, which email_otp_verification to fetch.
     */
    where: email_otp_verificationWhereUniqueInput
  }

  /**
   * email_otp_verification findFirst
   */
  export type email_otp_verificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otp_verification
     */
    select?: email_otp_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otp_verification
     */
    omit?: email_otp_verificationOmit<ExtArgs> | null
    /**
     * Filter, which email_otp_verification to fetch.
     */
    where?: email_otp_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_otp_verifications to fetch.
     */
    orderBy?: email_otp_verificationOrderByWithRelationInput | email_otp_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_otp_verifications.
     */
    cursor?: email_otp_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_otp_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_otp_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_otp_verifications.
     */
    distinct?: Email_otp_verificationScalarFieldEnum | Email_otp_verificationScalarFieldEnum[]
  }

  /**
   * email_otp_verification findFirstOrThrow
   */
  export type email_otp_verificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otp_verification
     */
    select?: email_otp_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otp_verification
     */
    omit?: email_otp_verificationOmit<ExtArgs> | null
    /**
     * Filter, which email_otp_verification to fetch.
     */
    where?: email_otp_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_otp_verifications to fetch.
     */
    orderBy?: email_otp_verificationOrderByWithRelationInput | email_otp_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_otp_verifications.
     */
    cursor?: email_otp_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_otp_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_otp_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_otp_verifications.
     */
    distinct?: Email_otp_verificationScalarFieldEnum | Email_otp_verificationScalarFieldEnum[]
  }

  /**
   * email_otp_verification findMany
   */
  export type email_otp_verificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otp_verification
     */
    select?: email_otp_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otp_verification
     */
    omit?: email_otp_verificationOmit<ExtArgs> | null
    /**
     * Filter, which email_otp_verifications to fetch.
     */
    where?: email_otp_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_otp_verifications to fetch.
     */
    orderBy?: email_otp_verificationOrderByWithRelationInput | email_otp_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing email_otp_verifications.
     */
    cursor?: email_otp_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_otp_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_otp_verifications.
     */
    skip?: number
    distinct?: Email_otp_verificationScalarFieldEnum | Email_otp_verificationScalarFieldEnum[]
  }

  /**
   * email_otp_verification create
   */
  export type email_otp_verificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otp_verification
     */
    select?: email_otp_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otp_verification
     */
    omit?: email_otp_verificationOmit<ExtArgs> | null
    /**
     * The data needed to create a email_otp_verification.
     */
    data: XOR<email_otp_verificationCreateInput, email_otp_verificationUncheckedCreateInput>
  }

  /**
   * email_otp_verification createMany
   */
  export type email_otp_verificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many email_otp_verifications.
     */
    data: email_otp_verificationCreateManyInput | email_otp_verificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * email_otp_verification update
   */
  export type email_otp_verificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otp_verification
     */
    select?: email_otp_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otp_verification
     */
    omit?: email_otp_verificationOmit<ExtArgs> | null
    /**
     * The data needed to update a email_otp_verification.
     */
    data: XOR<email_otp_verificationUpdateInput, email_otp_verificationUncheckedUpdateInput>
    /**
     * Choose, which email_otp_verification to update.
     */
    where: email_otp_verificationWhereUniqueInput
  }

  /**
   * email_otp_verification updateMany
   */
  export type email_otp_verificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update email_otp_verifications.
     */
    data: XOR<email_otp_verificationUpdateManyMutationInput, email_otp_verificationUncheckedUpdateManyInput>
    /**
     * Filter which email_otp_verifications to update
     */
    where?: email_otp_verificationWhereInput
    /**
     * Limit how many email_otp_verifications to update.
     */
    limit?: number
  }

  /**
   * email_otp_verification upsert
   */
  export type email_otp_verificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otp_verification
     */
    select?: email_otp_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otp_verification
     */
    omit?: email_otp_verificationOmit<ExtArgs> | null
    /**
     * The filter to search for the email_otp_verification to update in case it exists.
     */
    where: email_otp_verificationWhereUniqueInput
    /**
     * In case the email_otp_verification found by the `where` argument doesn't exist, create a new email_otp_verification with this data.
     */
    create: XOR<email_otp_verificationCreateInput, email_otp_verificationUncheckedCreateInput>
    /**
     * In case the email_otp_verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<email_otp_verificationUpdateInput, email_otp_verificationUncheckedUpdateInput>
  }

  /**
   * email_otp_verification delete
   */
  export type email_otp_verificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otp_verification
     */
    select?: email_otp_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otp_verification
     */
    omit?: email_otp_verificationOmit<ExtArgs> | null
    /**
     * Filter which email_otp_verification to delete.
     */
    where: email_otp_verificationWhereUniqueInput
  }

  /**
   * email_otp_verification deleteMany
   */
  export type email_otp_verificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_otp_verifications to delete
     */
    where?: email_otp_verificationWhereInput
    /**
     * Limit how many email_otp_verifications to delete.
     */
    limit?: number
  }

  /**
   * email_otp_verification without action
   */
  export type email_otp_verificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otp_verification
     */
    select?: email_otp_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otp_verification
     */
    omit?: email_otp_verificationOmit<ExtArgs> | null
  }


  /**
   * Model feed_ai_tool
   */

  export type AggregateFeed_ai_tool = {
    _count: Feed_ai_toolCountAggregateOutputType | null
    _avg: Feed_ai_toolAvgAggregateOutputType | null
    _sum: Feed_ai_toolSumAggregateOutputType | null
    _min: Feed_ai_toolMinAggregateOutputType | null
    _max: Feed_ai_toolMaxAggregateOutputType | null
  }

  export type Feed_ai_toolAvgAggregateOutputType = {
    feed_id: number | null
    ai_tool_id: number | null
  }

  export type Feed_ai_toolSumAggregateOutputType = {
    feed_id: bigint | null
    ai_tool_id: number | null
  }

  export type Feed_ai_toolMinAggregateOutputType = {
    feed_id: bigint | null
    ai_tool_id: number | null
  }

  export type Feed_ai_toolMaxAggregateOutputType = {
    feed_id: bigint | null
    ai_tool_id: number | null
  }

  export type Feed_ai_toolCountAggregateOutputType = {
    feed_id: number
    ai_tool_id: number
    _all: number
  }


  export type Feed_ai_toolAvgAggregateInputType = {
    feed_id?: true
    ai_tool_id?: true
  }

  export type Feed_ai_toolSumAggregateInputType = {
    feed_id?: true
    ai_tool_id?: true
  }

  export type Feed_ai_toolMinAggregateInputType = {
    feed_id?: true
    ai_tool_id?: true
  }

  export type Feed_ai_toolMaxAggregateInputType = {
    feed_id?: true
    ai_tool_id?: true
  }

  export type Feed_ai_toolCountAggregateInputType = {
    feed_id?: true
    ai_tool_id?: true
    _all?: true
  }

  export type Feed_ai_toolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feed_ai_tool to aggregate.
     */
    where?: feed_ai_toolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feed_ai_tools to fetch.
     */
    orderBy?: feed_ai_toolOrderByWithRelationInput | feed_ai_toolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: feed_ai_toolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feed_ai_tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feed_ai_tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned feed_ai_tools
    **/
    _count?: true | Feed_ai_toolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Feed_ai_toolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Feed_ai_toolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Feed_ai_toolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Feed_ai_toolMaxAggregateInputType
  }

  export type GetFeed_ai_toolAggregateType<T extends Feed_ai_toolAggregateArgs> = {
        [P in keyof T & keyof AggregateFeed_ai_tool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeed_ai_tool[P]>
      : GetScalarType<T[P], AggregateFeed_ai_tool[P]>
  }




  export type feed_ai_toolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feed_ai_toolWhereInput
    orderBy?: feed_ai_toolOrderByWithAggregationInput | feed_ai_toolOrderByWithAggregationInput[]
    by: Feed_ai_toolScalarFieldEnum[] | Feed_ai_toolScalarFieldEnum
    having?: feed_ai_toolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Feed_ai_toolCountAggregateInputType | true
    _avg?: Feed_ai_toolAvgAggregateInputType
    _sum?: Feed_ai_toolSumAggregateInputType
    _min?: Feed_ai_toolMinAggregateInputType
    _max?: Feed_ai_toolMaxAggregateInputType
  }

  export type Feed_ai_toolGroupByOutputType = {
    feed_id: bigint
    ai_tool_id: number
    _count: Feed_ai_toolCountAggregateOutputType | null
    _avg: Feed_ai_toolAvgAggregateOutputType | null
    _sum: Feed_ai_toolSumAggregateOutputType | null
    _min: Feed_ai_toolMinAggregateOutputType | null
    _max: Feed_ai_toolMaxAggregateOutputType | null
  }

  type GetFeed_ai_toolGroupByPayload<T extends feed_ai_toolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Feed_ai_toolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Feed_ai_toolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Feed_ai_toolGroupByOutputType[P]>
            : GetScalarType<T[P], Feed_ai_toolGroupByOutputType[P]>
        }
      >
    >


  export type feed_ai_toolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feed_id?: boolean
    ai_tool_id?: boolean
    ai_tool_mstr?: boolean | ai_tool_mstrDefaultArgs<ExtArgs>
    feeds?: boolean | feedsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feed_ai_tool"]>



  export type feed_ai_toolSelectScalar = {
    feed_id?: boolean
    ai_tool_id?: boolean
  }

  export type feed_ai_toolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"feed_id" | "ai_tool_id", ExtArgs["result"]["feed_ai_tool"]>
  export type feed_ai_toolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ai_tool_mstr?: boolean | ai_tool_mstrDefaultArgs<ExtArgs>
    feeds?: boolean | feedsDefaultArgs<ExtArgs>
  }

  export type $feed_ai_toolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "feed_ai_tool"
    objects: {
      ai_tool_mstr: Prisma.$ai_tool_mstrPayload<ExtArgs>
      feeds: Prisma.$feedsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      feed_id: bigint
      ai_tool_id: number
    }, ExtArgs["result"]["feed_ai_tool"]>
    composites: {}
  }

  type feed_ai_toolGetPayload<S extends boolean | null | undefined | feed_ai_toolDefaultArgs> = $Result.GetResult<Prisma.$feed_ai_toolPayload, S>

  type feed_ai_toolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<feed_ai_toolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Feed_ai_toolCountAggregateInputType | true
    }

  export interface feed_ai_toolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['feed_ai_tool'], meta: { name: 'feed_ai_tool' } }
    /**
     * Find zero or one Feed_ai_tool that matches the filter.
     * @param {feed_ai_toolFindUniqueArgs} args - Arguments to find a Feed_ai_tool
     * @example
     * // Get one Feed_ai_tool
     * const feed_ai_tool = await prisma.feed_ai_tool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends feed_ai_toolFindUniqueArgs>(args: SelectSubset<T, feed_ai_toolFindUniqueArgs<ExtArgs>>): Prisma__feed_ai_toolClient<$Result.GetResult<Prisma.$feed_ai_toolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feed_ai_tool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {feed_ai_toolFindUniqueOrThrowArgs} args - Arguments to find a Feed_ai_tool
     * @example
     * // Get one Feed_ai_tool
     * const feed_ai_tool = await prisma.feed_ai_tool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends feed_ai_toolFindUniqueOrThrowArgs>(args: SelectSubset<T, feed_ai_toolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__feed_ai_toolClient<$Result.GetResult<Prisma.$feed_ai_toolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feed_ai_tool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feed_ai_toolFindFirstArgs} args - Arguments to find a Feed_ai_tool
     * @example
     * // Get one Feed_ai_tool
     * const feed_ai_tool = await prisma.feed_ai_tool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends feed_ai_toolFindFirstArgs>(args?: SelectSubset<T, feed_ai_toolFindFirstArgs<ExtArgs>>): Prisma__feed_ai_toolClient<$Result.GetResult<Prisma.$feed_ai_toolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feed_ai_tool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feed_ai_toolFindFirstOrThrowArgs} args - Arguments to find a Feed_ai_tool
     * @example
     * // Get one Feed_ai_tool
     * const feed_ai_tool = await prisma.feed_ai_tool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends feed_ai_toolFindFirstOrThrowArgs>(args?: SelectSubset<T, feed_ai_toolFindFirstOrThrowArgs<ExtArgs>>): Prisma__feed_ai_toolClient<$Result.GetResult<Prisma.$feed_ai_toolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feed_ai_tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feed_ai_toolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feed_ai_tools
     * const feed_ai_tools = await prisma.feed_ai_tool.findMany()
     * 
     * // Get first 10 Feed_ai_tools
     * const feed_ai_tools = await prisma.feed_ai_tool.findMany({ take: 10 })
     * 
     * // Only select the `feed_id`
     * const feed_ai_toolWithFeed_idOnly = await prisma.feed_ai_tool.findMany({ select: { feed_id: true } })
     * 
     */
    findMany<T extends feed_ai_toolFindManyArgs>(args?: SelectSubset<T, feed_ai_toolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feed_ai_toolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feed_ai_tool.
     * @param {feed_ai_toolCreateArgs} args - Arguments to create a Feed_ai_tool.
     * @example
     * // Create one Feed_ai_tool
     * const Feed_ai_tool = await prisma.feed_ai_tool.create({
     *   data: {
     *     // ... data to create a Feed_ai_tool
     *   }
     * })
     * 
     */
    create<T extends feed_ai_toolCreateArgs>(args: SelectSubset<T, feed_ai_toolCreateArgs<ExtArgs>>): Prisma__feed_ai_toolClient<$Result.GetResult<Prisma.$feed_ai_toolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feed_ai_tools.
     * @param {feed_ai_toolCreateManyArgs} args - Arguments to create many Feed_ai_tools.
     * @example
     * // Create many Feed_ai_tools
     * const feed_ai_tool = await prisma.feed_ai_tool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends feed_ai_toolCreateManyArgs>(args?: SelectSubset<T, feed_ai_toolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Feed_ai_tool.
     * @param {feed_ai_toolDeleteArgs} args - Arguments to delete one Feed_ai_tool.
     * @example
     * // Delete one Feed_ai_tool
     * const Feed_ai_tool = await prisma.feed_ai_tool.delete({
     *   where: {
     *     // ... filter to delete one Feed_ai_tool
     *   }
     * })
     * 
     */
    delete<T extends feed_ai_toolDeleteArgs>(args: SelectSubset<T, feed_ai_toolDeleteArgs<ExtArgs>>): Prisma__feed_ai_toolClient<$Result.GetResult<Prisma.$feed_ai_toolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feed_ai_tool.
     * @param {feed_ai_toolUpdateArgs} args - Arguments to update one Feed_ai_tool.
     * @example
     * // Update one Feed_ai_tool
     * const feed_ai_tool = await prisma.feed_ai_tool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends feed_ai_toolUpdateArgs>(args: SelectSubset<T, feed_ai_toolUpdateArgs<ExtArgs>>): Prisma__feed_ai_toolClient<$Result.GetResult<Prisma.$feed_ai_toolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feed_ai_tools.
     * @param {feed_ai_toolDeleteManyArgs} args - Arguments to filter Feed_ai_tools to delete.
     * @example
     * // Delete a few Feed_ai_tools
     * const { count } = await prisma.feed_ai_tool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends feed_ai_toolDeleteManyArgs>(args?: SelectSubset<T, feed_ai_toolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feed_ai_tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feed_ai_toolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feed_ai_tools
     * const feed_ai_tool = await prisma.feed_ai_tool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends feed_ai_toolUpdateManyArgs>(args: SelectSubset<T, feed_ai_toolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feed_ai_tool.
     * @param {feed_ai_toolUpsertArgs} args - Arguments to update or create a Feed_ai_tool.
     * @example
     * // Update or create a Feed_ai_tool
     * const feed_ai_tool = await prisma.feed_ai_tool.upsert({
     *   create: {
     *     // ... data to create a Feed_ai_tool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feed_ai_tool we want to update
     *   }
     * })
     */
    upsert<T extends feed_ai_toolUpsertArgs>(args: SelectSubset<T, feed_ai_toolUpsertArgs<ExtArgs>>): Prisma__feed_ai_toolClient<$Result.GetResult<Prisma.$feed_ai_toolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feed_ai_tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feed_ai_toolCountArgs} args - Arguments to filter Feed_ai_tools to count.
     * @example
     * // Count the number of Feed_ai_tools
     * const count = await prisma.feed_ai_tool.count({
     *   where: {
     *     // ... the filter for the Feed_ai_tools we want to count
     *   }
     * })
    **/
    count<T extends feed_ai_toolCountArgs>(
      args?: Subset<T, feed_ai_toolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Feed_ai_toolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feed_ai_tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Feed_ai_toolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Feed_ai_toolAggregateArgs>(args: Subset<T, Feed_ai_toolAggregateArgs>): Prisma.PrismaPromise<GetFeed_ai_toolAggregateType<T>>

    /**
     * Group by Feed_ai_tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feed_ai_toolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends feed_ai_toolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: feed_ai_toolGroupByArgs['orderBy'] }
        : { orderBy?: feed_ai_toolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, feed_ai_toolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeed_ai_toolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the feed_ai_tool model
   */
  readonly fields: feed_ai_toolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for feed_ai_tool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__feed_ai_toolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ai_tool_mstr<T extends ai_tool_mstrDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ai_tool_mstrDefaultArgs<ExtArgs>>): Prisma__ai_tool_mstrClient<$Result.GetResult<Prisma.$ai_tool_mstrPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    feeds<T extends feedsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, feedsDefaultArgs<ExtArgs>>): Prisma__feedsClient<$Result.GetResult<Prisma.$feedsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the feed_ai_tool model
   */
  interface feed_ai_toolFieldRefs {
    readonly feed_id: FieldRef<"feed_ai_tool", 'BigInt'>
    readonly ai_tool_id: FieldRef<"feed_ai_tool", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * feed_ai_tool findUnique
   */
  export type feed_ai_toolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed_ai_tool
     */
    select?: feed_ai_toolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feed_ai_tool
     */
    omit?: feed_ai_toolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feed_ai_toolInclude<ExtArgs> | null
    /**
     * Filter, which feed_ai_tool to fetch.
     */
    where: feed_ai_toolWhereUniqueInput
  }

  /**
   * feed_ai_tool findUniqueOrThrow
   */
  export type feed_ai_toolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed_ai_tool
     */
    select?: feed_ai_toolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feed_ai_tool
     */
    omit?: feed_ai_toolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feed_ai_toolInclude<ExtArgs> | null
    /**
     * Filter, which feed_ai_tool to fetch.
     */
    where: feed_ai_toolWhereUniqueInput
  }

  /**
   * feed_ai_tool findFirst
   */
  export type feed_ai_toolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed_ai_tool
     */
    select?: feed_ai_toolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feed_ai_tool
     */
    omit?: feed_ai_toolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feed_ai_toolInclude<ExtArgs> | null
    /**
     * Filter, which feed_ai_tool to fetch.
     */
    where?: feed_ai_toolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feed_ai_tools to fetch.
     */
    orderBy?: feed_ai_toolOrderByWithRelationInput | feed_ai_toolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feed_ai_tools.
     */
    cursor?: feed_ai_toolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feed_ai_tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feed_ai_tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feed_ai_tools.
     */
    distinct?: Feed_ai_toolScalarFieldEnum | Feed_ai_toolScalarFieldEnum[]
  }

  /**
   * feed_ai_tool findFirstOrThrow
   */
  export type feed_ai_toolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed_ai_tool
     */
    select?: feed_ai_toolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feed_ai_tool
     */
    omit?: feed_ai_toolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feed_ai_toolInclude<ExtArgs> | null
    /**
     * Filter, which feed_ai_tool to fetch.
     */
    where?: feed_ai_toolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feed_ai_tools to fetch.
     */
    orderBy?: feed_ai_toolOrderByWithRelationInput | feed_ai_toolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feed_ai_tools.
     */
    cursor?: feed_ai_toolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feed_ai_tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feed_ai_tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feed_ai_tools.
     */
    distinct?: Feed_ai_toolScalarFieldEnum | Feed_ai_toolScalarFieldEnum[]
  }

  /**
   * feed_ai_tool findMany
   */
  export type feed_ai_toolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed_ai_tool
     */
    select?: feed_ai_toolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feed_ai_tool
     */
    omit?: feed_ai_toolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feed_ai_toolInclude<ExtArgs> | null
    /**
     * Filter, which feed_ai_tools to fetch.
     */
    where?: feed_ai_toolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feed_ai_tools to fetch.
     */
    orderBy?: feed_ai_toolOrderByWithRelationInput | feed_ai_toolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing feed_ai_tools.
     */
    cursor?: feed_ai_toolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feed_ai_tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feed_ai_tools.
     */
    skip?: number
    distinct?: Feed_ai_toolScalarFieldEnum | Feed_ai_toolScalarFieldEnum[]
  }

  /**
   * feed_ai_tool create
   */
  export type feed_ai_toolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed_ai_tool
     */
    select?: feed_ai_toolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feed_ai_tool
     */
    omit?: feed_ai_toolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feed_ai_toolInclude<ExtArgs> | null
    /**
     * The data needed to create a feed_ai_tool.
     */
    data: XOR<feed_ai_toolCreateInput, feed_ai_toolUncheckedCreateInput>
  }

  /**
   * feed_ai_tool createMany
   */
  export type feed_ai_toolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many feed_ai_tools.
     */
    data: feed_ai_toolCreateManyInput | feed_ai_toolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feed_ai_tool update
   */
  export type feed_ai_toolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed_ai_tool
     */
    select?: feed_ai_toolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feed_ai_tool
     */
    omit?: feed_ai_toolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feed_ai_toolInclude<ExtArgs> | null
    /**
     * The data needed to update a feed_ai_tool.
     */
    data: XOR<feed_ai_toolUpdateInput, feed_ai_toolUncheckedUpdateInput>
    /**
     * Choose, which feed_ai_tool to update.
     */
    where: feed_ai_toolWhereUniqueInput
  }

  /**
   * feed_ai_tool updateMany
   */
  export type feed_ai_toolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update feed_ai_tools.
     */
    data: XOR<feed_ai_toolUpdateManyMutationInput, feed_ai_toolUncheckedUpdateManyInput>
    /**
     * Filter which feed_ai_tools to update
     */
    where?: feed_ai_toolWhereInput
    /**
     * Limit how many feed_ai_tools to update.
     */
    limit?: number
  }

  /**
   * feed_ai_tool upsert
   */
  export type feed_ai_toolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed_ai_tool
     */
    select?: feed_ai_toolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feed_ai_tool
     */
    omit?: feed_ai_toolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feed_ai_toolInclude<ExtArgs> | null
    /**
     * The filter to search for the feed_ai_tool to update in case it exists.
     */
    where: feed_ai_toolWhereUniqueInput
    /**
     * In case the feed_ai_tool found by the `where` argument doesn't exist, create a new feed_ai_tool with this data.
     */
    create: XOR<feed_ai_toolCreateInput, feed_ai_toolUncheckedCreateInput>
    /**
     * In case the feed_ai_tool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<feed_ai_toolUpdateInput, feed_ai_toolUncheckedUpdateInput>
  }

  /**
   * feed_ai_tool delete
   */
  export type feed_ai_toolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed_ai_tool
     */
    select?: feed_ai_toolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feed_ai_tool
     */
    omit?: feed_ai_toolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feed_ai_toolInclude<ExtArgs> | null
    /**
     * Filter which feed_ai_tool to delete.
     */
    where: feed_ai_toolWhereUniqueInput
  }

  /**
   * feed_ai_tool deleteMany
   */
  export type feed_ai_toolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feed_ai_tools to delete
     */
    where?: feed_ai_toolWhereInput
    /**
     * Limit how many feed_ai_tools to delete.
     */
    limit?: number
  }

  /**
   * feed_ai_tool without action
   */
  export type feed_ai_toolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed_ai_tool
     */
    select?: feed_ai_toolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feed_ai_tool
     */
    omit?: feed_ai_toolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feed_ai_toolInclude<ExtArgs> | null
  }


  /**
   * Model feeds
   */

  export type AggregateFeeds = {
    _count: FeedsCountAggregateOutputType | null
    _avg: FeedsAvgAggregateOutputType | null
    _sum: FeedsSumAggregateOutputType | null
    _min: FeedsMinAggregateOutputType | null
    _max: FeedsMaxAggregateOutputType | null
  }

  export type FeedsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_views_count: number | null
    total_likes_count: number | null
    total_comments_count: number | null
  }

  export type FeedsSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    total_views_count: bigint | null
    total_likes_count: bigint | null
    total_comments_count: bigint | null
  }

  export type FeedsMinAggregateOutputType = {
    id: bigint | null
    feed_uuid: string | null
    user_id: bigint | null
    caption: string | null
    description: string | null
    prompt: string | null
    feed_type: $Enums.feeds_feed_type | null
    generated_text: string | null
    is_deleted: boolean | null
    total_views_count: bigint | null
    total_likes_count: bigint | null
    total_comments_count: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FeedsMaxAggregateOutputType = {
    id: bigint | null
    feed_uuid: string | null
    user_id: bigint | null
    caption: string | null
    description: string | null
    prompt: string | null
    feed_type: $Enums.feeds_feed_type | null
    generated_text: string | null
    is_deleted: boolean | null
    total_views_count: bigint | null
    total_likes_count: bigint | null
    total_comments_count: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FeedsCountAggregateOutputType = {
    id: number
    feed_uuid: number
    user_id: number
    caption: number
    description: number
    prompt: number
    feed_type: number
    generated_text: number
    is_deleted: number
    total_views_count: number
    total_likes_count: number
    total_comments_count: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FeedsAvgAggregateInputType = {
    id?: true
    user_id?: true
    total_views_count?: true
    total_likes_count?: true
    total_comments_count?: true
  }

  export type FeedsSumAggregateInputType = {
    id?: true
    user_id?: true
    total_views_count?: true
    total_likes_count?: true
    total_comments_count?: true
  }

  export type FeedsMinAggregateInputType = {
    id?: true
    feed_uuid?: true
    user_id?: true
    caption?: true
    description?: true
    prompt?: true
    feed_type?: true
    generated_text?: true
    is_deleted?: true
    total_views_count?: true
    total_likes_count?: true
    total_comments_count?: true
    created_at?: true
    updated_at?: true
  }

  export type FeedsMaxAggregateInputType = {
    id?: true
    feed_uuid?: true
    user_id?: true
    caption?: true
    description?: true
    prompt?: true
    feed_type?: true
    generated_text?: true
    is_deleted?: true
    total_views_count?: true
    total_likes_count?: true
    total_comments_count?: true
    created_at?: true
    updated_at?: true
  }

  export type FeedsCountAggregateInputType = {
    id?: true
    feed_uuid?: true
    user_id?: true
    caption?: true
    description?: true
    prompt?: true
    feed_type?: true
    generated_text?: true
    is_deleted?: true
    total_views_count?: true
    total_likes_count?: true
    total_comments_count?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FeedsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feeds to aggregate.
     */
    where?: feedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feeds to fetch.
     */
    orderBy?: feedsOrderByWithRelationInput | feedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: feedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned feeds
    **/
    _count?: true | FeedsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedsMaxAggregateInputType
  }

  export type GetFeedsAggregateType<T extends FeedsAggregateArgs> = {
        [P in keyof T & keyof AggregateFeeds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeeds[P]>
      : GetScalarType<T[P], AggregateFeeds[P]>
  }




  export type feedsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedsWhereInput
    orderBy?: feedsOrderByWithAggregationInput | feedsOrderByWithAggregationInput[]
    by: FeedsScalarFieldEnum[] | FeedsScalarFieldEnum
    having?: feedsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedsCountAggregateInputType | true
    _avg?: FeedsAvgAggregateInputType
    _sum?: FeedsSumAggregateInputType
    _min?: FeedsMinAggregateInputType
    _max?: FeedsMaxAggregateInputType
  }

  export type FeedsGroupByOutputType = {
    id: bigint
    feed_uuid: string
    user_id: bigint
    caption: string | null
    description: string | null
    prompt: string | null
    feed_type: $Enums.feeds_feed_type | null
    generated_text: string | null
    is_deleted: boolean | null
    total_views_count: bigint | null
    total_likes_count: bigint | null
    total_comments_count: bigint | null
    created_at: Date | null
    updated_at: Date | null
    _count: FeedsCountAggregateOutputType | null
    _avg: FeedsAvgAggregateOutputType | null
    _sum: FeedsSumAggregateOutputType | null
    _min: FeedsMinAggregateOutputType | null
    _max: FeedsMaxAggregateOutputType | null
  }

  type GetFeedsGroupByPayload<T extends feedsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedsGroupByOutputType[P]>
            : GetScalarType<T[P], FeedsGroupByOutputType[P]>
        }
      >
    >


  export type feedsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feed_uuid?: boolean
    user_id?: boolean
    caption?: boolean
    description?: boolean
    prompt?: boolean
    feed_type?: boolean
    generated_text?: boolean
    is_deleted?: boolean
    total_views_count?: boolean
    total_likes_count?: boolean
    total_comments_count?: boolean
    created_at?: boolean
    updated_at?: boolean
    feed_ai_tool?: boolean | feeds$feed_ai_toolArgs<ExtArgs>
    _count?: boolean | FeedsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feeds"]>



  export type feedsSelectScalar = {
    id?: boolean
    feed_uuid?: boolean
    user_id?: boolean
    caption?: boolean
    description?: boolean
    prompt?: boolean
    feed_type?: boolean
    generated_text?: boolean
    is_deleted?: boolean
    total_views_count?: boolean
    total_likes_count?: boolean
    total_comments_count?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type feedsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "feed_uuid" | "user_id" | "caption" | "description" | "prompt" | "feed_type" | "generated_text" | "is_deleted" | "total_views_count" | "total_likes_count" | "total_comments_count" | "created_at" | "updated_at", ExtArgs["result"]["feeds"]>
  export type feedsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feed_ai_tool?: boolean | feeds$feed_ai_toolArgs<ExtArgs>
    _count?: boolean | FeedsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $feedsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "feeds"
    objects: {
      feed_ai_tool: Prisma.$feed_ai_toolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      feed_uuid: string
      user_id: bigint
      caption: string | null
      description: string | null
      prompt: string | null
      feed_type: $Enums.feeds_feed_type | null
      generated_text: string | null
      is_deleted: boolean | null
      total_views_count: bigint | null
      total_likes_count: bigint | null
      total_comments_count: bigint | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["feeds"]>
    composites: {}
  }

  type feedsGetPayload<S extends boolean | null | undefined | feedsDefaultArgs> = $Result.GetResult<Prisma.$feedsPayload, S>

  type feedsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<feedsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedsCountAggregateInputType | true
    }

  export interface feedsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['feeds'], meta: { name: 'feeds' } }
    /**
     * Find zero or one Feeds that matches the filter.
     * @param {feedsFindUniqueArgs} args - Arguments to find a Feeds
     * @example
     * // Get one Feeds
     * const feeds = await prisma.feeds.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends feedsFindUniqueArgs>(args: SelectSubset<T, feedsFindUniqueArgs<ExtArgs>>): Prisma__feedsClient<$Result.GetResult<Prisma.$feedsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feeds that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {feedsFindUniqueOrThrowArgs} args - Arguments to find a Feeds
     * @example
     * // Get one Feeds
     * const feeds = await prisma.feeds.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends feedsFindUniqueOrThrowArgs>(args: SelectSubset<T, feedsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__feedsClient<$Result.GetResult<Prisma.$feedsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedsFindFirstArgs} args - Arguments to find a Feeds
     * @example
     * // Get one Feeds
     * const feeds = await prisma.feeds.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends feedsFindFirstArgs>(args?: SelectSubset<T, feedsFindFirstArgs<ExtArgs>>): Prisma__feedsClient<$Result.GetResult<Prisma.$feedsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feeds that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedsFindFirstOrThrowArgs} args - Arguments to find a Feeds
     * @example
     * // Get one Feeds
     * const feeds = await prisma.feeds.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends feedsFindFirstOrThrowArgs>(args?: SelectSubset<T, feedsFindFirstOrThrowArgs<ExtArgs>>): Prisma__feedsClient<$Result.GetResult<Prisma.$feedsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feeds
     * const feeds = await prisma.feeds.findMany()
     * 
     * // Get first 10 Feeds
     * const feeds = await prisma.feeds.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedsWithIdOnly = await prisma.feeds.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends feedsFindManyArgs>(args?: SelectSubset<T, feedsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feeds.
     * @param {feedsCreateArgs} args - Arguments to create a Feeds.
     * @example
     * // Create one Feeds
     * const Feeds = await prisma.feeds.create({
     *   data: {
     *     // ... data to create a Feeds
     *   }
     * })
     * 
     */
    create<T extends feedsCreateArgs>(args: SelectSubset<T, feedsCreateArgs<ExtArgs>>): Prisma__feedsClient<$Result.GetResult<Prisma.$feedsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feeds.
     * @param {feedsCreateManyArgs} args - Arguments to create many Feeds.
     * @example
     * // Create many Feeds
     * const feeds = await prisma.feeds.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends feedsCreateManyArgs>(args?: SelectSubset<T, feedsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Feeds.
     * @param {feedsDeleteArgs} args - Arguments to delete one Feeds.
     * @example
     * // Delete one Feeds
     * const Feeds = await prisma.feeds.delete({
     *   where: {
     *     // ... filter to delete one Feeds
     *   }
     * })
     * 
     */
    delete<T extends feedsDeleteArgs>(args: SelectSubset<T, feedsDeleteArgs<ExtArgs>>): Prisma__feedsClient<$Result.GetResult<Prisma.$feedsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feeds.
     * @param {feedsUpdateArgs} args - Arguments to update one Feeds.
     * @example
     * // Update one Feeds
     * const feeds = await prisma.feeds.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends feedsUpdateArgs>(args: SelectSubset<T, feedsUpdateArgs<ExtArgs>>): Prisma__feedsClient<$Result.GetResult<Prisma.$feedsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feeds.
     * @param {feedsDeleteManyArgs} args - Arguments to filter Feeds to delete.
     * @example
     * // Delete a few Feeds
     * const { count } = await prisma.feeds.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends feedsDeleteManyArgs>(args?: SelectSubset<T, feedsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feeds
     * const feeds = await prisma.feeds.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends feedsUpdateManyArgs>(args: SelectSubset<T, feedsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feeds.
     * @param {feedsUpsertArgs} args - Arguments to update or create a Feeds.
     * @example
     * // Update or create a Feeds
     * const feeds = await prisma.feeds.upsert({
     *   create: {
     *     // ... data to create a Feeds
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feeds we want to update
     *   }
     * })
     */
    upsert<T extends feedsUpsertArgs>(args: SelectSubset<T, feedsUpsertArgs<ExtArgs>>): Prisma__feedsClient<$Result.GetResult<Prisma.$feedsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedsCountArgs} args - Arguments to filter Feeds to count.
     * @example
     * // Count the number of Feeds
     * const count = await prisma.feeds.count({
     *   where: {
     *     // ... the filter for the Feeds we want to count
     *   }
     * })
    **/
    count<T extends feedsCountArgs>(
      args?: Subset<T, feedsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedsAggregateArgs>(args: Subset<T, FeedsAggregateArgs>): Prisma.PrismaPromise<GetFeedsAggregateType<T>>

    /**
     * Group by Feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends feedsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: feedsGroupByArgs['orderBy'] }
        : { orderBy?: feedsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, feedsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the feeds model
   */
  readonly fields: feedsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for feeds.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__feedsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feed_ai_tool<T extends feeds$feed_ai_toolArgs<ExtArgs> = {}>(args?: Subset<T, feeds$feed_ai_toolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feed_ai_toolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the feeds model
   */
  interface feedsFieldRefs {
    readonly id: FieldRef<"feeds", 'BigInt'>
    readonly feed_uuid: FieldRef<"feeds", 'String'>
    readonly user_id: FieldRef<"feeds", 'BigInt'>
    readonly caption: FieldRef<"feeds", 'String'>
    readonly description: FieldRef<"feeds", 'String'>
    readonly prompt: FieldRef<"feeds", 'String'>
    readonly feed_type: FieldRef<"feeds", 'feeds_feed_type'>
    readonly generated_text: FieldRef<"feeds", 'String'>
    readonly is_deleted: FieldRef<"feeds", 'Boolean'>
    readonly total_views_count: FieldRef<"feeds", 'BigInt'>
    readonly total_likes_count: FieldRef<"feeds", 'BigInt'>
    readonly total_comments_count: FieldRef<"feeds", 'BigInt'>
    readonly created_at: FieldRef<"feeds", 'DateTime'>
    readonly updated_at: FieldRef<"feeds", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * feeds findUnique
   */
  export type feedsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feeds
     */
    select?: feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feeds
     */
    omit?: feedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedsInclude<ExtArgs> | null
    /**
     * Filter, which feeds to fetch.
     */
    where: feedsWhereUniqueInput
  }

  /**
   * feeds findUniqueOrThrow
   */
  export type feedsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feeds
     */
    select?: feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feeds
     */
    omit?: feedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedsInclude<ExtArgs> | null
    /**
     * Filter, which feeds to fetch.
     */
    where: feedsWhereUniqueInput
  }

  /**
   * feeds findFirst
   */
  export type feedsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feeds
     */
    select?: feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feeds
     */
    omit?: feedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedsInclude<ExtArgs> | null
    /**
     * Filter, which feeds to fetch.
     */
    where?: feedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feeds to fetch.
     */
    orderBy?: feedsOrderByWithRelationInput | feedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feeds.
     */
    cursor?: feedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feeds.
     */
    distinct?: FeedsScalarFieldEnum | FeedsScalarFieldEnum[]
  }

  /**
   * feeds findFirstOrThrow
   */
  export type feedsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feeds
     */
    select?: feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feeds
     */
    omit?: feedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedsInclude<ExtArgs> | null
    /**
     * Filter, which feeds to fetch.
     */
    where?: feedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feeds to fetch.
     */
    orderBy?: feedsOrderByWithRelationInput | feedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feeds.
     */
    cursor?: feedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feeds.
     */
    distinct?: FeedsScalarFieldEnum | FeedsScalarFieldEnum[]
  }

  /**
   * feeds findMany
   */
  export type feedsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feeds
     */
    select?: feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feeds
     */
    omit?: feedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedsInclude<ExtArgs> | null
    /**
     * Filter, which feeds to fetch.
     */
    where?: feedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feeds to fetch.
     */
    orderBy?: feedsOrderByWithRelationInput | feedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing feeds.
     */
    cursor?: feedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feeds.
     */
    skip?: number
    distinct?: FeedsScalarFieldEnum | FeedsScalarFieldEnum[]
  }

  /**
   * feeds create
   */
  export type feedsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feeds
     */
    select?: feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feeds
     */
    omit?: feedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedsInclude<ExtArgs> | null
    /**
     * The data needed to create a feeds.
     */
    data: XOR<feedsCreateInput, feedsUncheckedCreateInput>
  }

  /**
   * feeds createMany
   */
  export type feedsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many feeds.
     */
    data: feedsCreateManyInput | feedsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feeds update
   */
  export type feedsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feeds
     */
    select?: feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feeds
     */
    omit?: feedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedsInclude<ExtArgs> | null
    /**
     * The data needed to update a feeds.
     */
    data: XOR<feedsUpdateInput, feedsUncheckedUpdateInput>
    /**
     * Choose, which feeds to update.
     */
    where: feedsWhereUniqueInput
  }

  /**
   * feeds updateMany
   */
  export type feedsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update feeds.
     */
    data: XOR<feedsUpdateManyMutationInput, feedsUncheckedUpdateManyInput>
    /**
     * Filter which feeds to update
     */
    where?: feedsWhereInput
    /**
     * Limit how many feeds to update.
     */
    limit?: number
  }

  /**
   * feeds upsert
   */
  export type feedsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feeds
     */
    select?: feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feeds
     */
    omit?: feedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedsInclude<ExtArgs> | null
    /**
     * The filter to search for the feeds to update in case it exists.
     */
    where: feedsWhereUniqueInput
    /**
     * In case the feeds found by the `where` argument doesn't exist, create a new feeds with this data.
     */
    create: XOR<feedsCreateInput, feedsUncheckedCreateInput>
    /**
     * In case the feeds was found with the provided `where` argument, update it with this data.
     */
    update: XOR<feedsUpdateInput, feedsUncheckedUpdateInput>
  }

  /**
   * feeds delete
   */
  export type feedsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feeds
     */
    select?: feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feeds
     */
    omit?: feedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedsInclude<ExtArgs> | null
    /**
     * Filter which feeds to delete.
     */
    where: feedsWhereUniqueInput
  }

  /**
   * feeds deleteMany
   */
  export type feedsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feeds to delete
     */
    where?: feedsWhereInput
    /**
     * Limit how many feeds to delete.
     */
    limit?: number
  }

  /**
   * feeds.feed_ai_tool
   */
  export type feeds$feed_ai_toolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed_ai_tool
     */
    select?: feed_ai_toolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feed_ai_tool
     */
    omit?: feed_ai_toolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feed_ai_toolInclude<ExtArgs> | null
    where?: feed_ai_toolWhereInput
    orderBy?: feed_ai_toolOrderByWithRelationInput | feed_ai_toolOrderByWithRelationInput[]
    cursor?: feed_ai_toolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Feed_ai_toolScalarFieldEnum | Feed_ai_toolScalarFieldEnum[]
  }

  /**
   * feeds without action
   */
  export type feedsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feeds
     */
    select?: feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feeds
     */
    omit?: feedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedsInclude<ExtArgs> | null
  }


  /**
   * Model reactions
   */

  export type AggregateReactions = {
    _count: ReactionsCountAggregateOutputType | null
    _avg: ReactionsAvgAggregateOutputType | null
    _sum: ReactionsSumAggregateOutputType | null
    _min: ReactionsMinAggregateOutputType | null
    _max: ReactionsMaxAggregateOutputType | null
  }

  export type ReactionsAvgAggregateOutputType = {
    feed_id: number | null
    reacted_by: number | null
  }

  export type ReactionsSumAggregateOutputType = {
    feed_id: bigint | null
    reacted_by: bigint | null
  }

  export type ReactionsMinAggregateOutputType = {
    feed_id: bigint | null
    reacted_by: bigint | null
    created_datetime: Date | null
  }

  export type ReactionsMaxAggregateOutputType = {
    feed_id: bigint | null
    reacted_by: bigint | null
    created_datetime: Date | null
  }

  export type ReactionsCountAggregateOutputType = {
    feed_id: number
    reacted_by: number
    created_datetime: number
    _all: number
  }


  export type ReactionsAvgAggregateInputType = {
    feed_id?: true
    reacted_by?: true
  }

  export type ReactionsSumAggregateInputType = {
    feed_id?: true
    reacted_by?: true
  }

  export type ReactionsMinAggregateInputType = {
    feed_id?: true
    reacted_by?: true
    created_datetime?: true
  }

  export type ReactionsMaxAggregateInputType = {
    feed_id?: true
    reacted_by?: true
    created_datetime?: true
  }

  export type ReactionsCountAggregateInputType = {
    feed_id?: true
    reacted_by?: true
    created_datetime?: true
    _all?: true
  }

  export type ReactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reactions to aggregate.
     */
    where?: reactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reactions to fetch.
     */
    orderBy?: reactionsOrderByWithRelationInput | reactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reactions
    **/
    _count?: true | ReactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReactionsMaxAggregateInputType
  }

  export type GetReactionsAggregateType<T extends ReactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateReactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReactions[P]>
      : GetScalarType<T[P], AggregateReactions[P]>
  }




  export type reactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reactionsWhereInput
    orderBy?: reactionsOrderByWithAggregationInput | reactionsOrderByWithAggregationInput[]
    by: ReactionsScalarFieldEnum[] | ReactionsScalarFieldEnum
    having?: reactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReactionsCountAggregateInputType | true
    _avg?: ReactionsAvgAggregateInputType
    _sum?: ReactionsSumAggregateInputType
    _min?: ReactionsMinAggregateInputType
    _max?: ReactionsMaxAggregateInputType
  }

  export type ReactionsGroupByOutputType = {
    feed_id: bigint
    reacted_by: bigint
    created_datetime: Date | null
    _count: ReactionsCountAggregateOutputType | null
    _avg: ReactionsAvgAggregateOutputType | null
    _sum: ReactionsSumAggregateOutputType | null
    _min: ReactionsMinAggregateOutputType | null
    _max: ReactionsMaxAggregateOutputType | null
  }

  type GetReactionsGroupByPayload<T extends reactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReactionsGroupByOutputType[P]>
            : GetScalarType<T[P], ReactionsGroupByOutputType[P]>
        }
      >
    >


  export type reactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feed_id?: boolean
    reacted_by?: boolean
    created_datetime?: boolean
  }, ExtArgs["result"]["reactions"]>



  export type reactionsSelectScalar = {
    feed_id?: boolean
    reacted_by?: boolean
    created_datetime?: boolean
  }

  export type reactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"feed_id" | "reacted_by" | "created_datetime", ExtArgs["result"]["reactions"]>

  export type $reactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reactions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      feed_id: bigint
      reacted_by: bigint
      created_datetime: Date | null
    }, ExtArgs["result"]["reactions"]>
    composites: {}
  }

  type reactionsGetPayload<S extends boolean | null | undefined | reactionsDefaultArgs> = $Result.GetResult<Prisma.$reactionsPayload, S>

  type reactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReactionsCountAggregateInputType | true
    }

  export interface reactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reactions'], meta: { name: 'reactions' } }
    /**
     * Find zero or one Reactions that matches the filter.
     * @param {reactionsFindUniqueArgs} args - Arguments to find a Reactions
     * @example
     * // Get one Reactions
     * const reactions = await prisma.reactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reactionsFindUniqueArgs>(args: SelectSubset<T, reactionsFindUniqueArgs<ExtArgs>>): Prisma__reactionsClient<$Result.GetResult<Prisma.$reactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reactionsFindUniqueOrThrowArgs} args - Arguments to find a Reactions
     * @example
     * // Get one Reactions
     * const reactions = await prisma.reactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, reactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reactionsClient<$Result.GetResult<Prisma.$reactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reactionsFindFirstArgs} args - Arguments to find a Reactions
     * @example
     * // Get one Reactions
     * const reactions = await prisma.reactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reactionsFindFirstArgs>(args?: SelectSubset<T, reactionsFindFirstArgs<ExtArgs>>): Prisma__reactionsClient<$Result.GetResult<Prisma.$reactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reactionsFindFirstOrThrowArgs} args - Arguments to find a Reactions
     * @example
     * // Get one Reactions
     * const reactions = await prisma.reactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, reactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reactionsClient<$Result.GetResult<Prisma.$reactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reactions
     * const reactions = await prisma.reactions.findMany()
     * 
     * // Get first 10 Reactions
     * const reactions = await prisma.reactions.findMany({ take: 10 })
     * 
     * // Only select the `feed_id`
     * const reactionsWithFeed_idOnly = await prisma.reactions.findMany({ select: { feed_id: true } })
     * 
     */
    findMany<T extends reactionsFindManyArgs>(args?: SelectSubset<T, reactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reactions.
     * @param {reactionsCreateArgs} args - Arguments to create a Reactions.
     * @example
     * // Create one Reactions
     * const Reactions = await prisma.reactions.create({
     *   data: {
     *     // ... data to create a Reactions
     *   }
     * })
     * 
     */
    create<T extends reactionsCreateArgs>(args: SelectSubset<T, reactionsCreateArgs<ExtArgs>>): Prisma__reactionsClient<$Result.GetResult<Prisma.$reactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reactions.
     * @param {reactionsCreateManyArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reactions = await prisma.reactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reactionsCreateManyArgs>(args?: SelectSubset<T, reactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reactions.
     * @param {reactionsDeleteArgs} args - Arguments to delete one Reactions.
     * @example
     * // Delete one Reactions
     * const Reactions = await prisma.reactions.delete({
     *   where: {
     *     // ... filter to delete one Reactions
     *   }
     * })
     * 
     */
    delete<T extends reactionsDeleteArgs>(args: SelectSubset<T, reactionsDeleteArgs<ExtArgs>>): Prisma__reactionsClient<$Result.GetResult<Prisma.$reactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reactions.
     * @param {reactionsUpdateArgs} args - Arguments to update one Reactions.
     * @example
     * // Update one Reactions
     * const reactions = await prisma.reactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reactionsUpdateArgs>(args: SelectSubset<T, reactionsUpdateArgs<ExtArgs>>): Prisma__reactionsClient<$Result.GetResult<Prisma.$reactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reactions.
     * @param {reactionsDeleteManyArgs} args - Arguments to filter Reactions to delete.
     * @example
     * // Delete a few Reactions
     * const { count } = await prisma.reactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reactionsDeleteManyArgs>(args?: SelectSubset<T, reactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reactions
     * const reactions = await prisma.reactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reactionsUpdateManyArgs>(args: SelectSubset<T, reactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reactions.
     * @param {reactionsUpsertArgs} args - Arguments to update or create a Reactions.
     * @example
     * // Update or create a Reactions
     * const reactions = await prisma.reactions.upsert({
     *   create: {
     *     // ... data to create a Reactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reactions we want to update
     *   }
     * })
     */
    upsert<T extends reactionsUpsertArgs>(args: SelectSubset<T, reactionsUpsertArgs<ExtArgs>>): Prisma__reactionsClient<$Result.GetResult<Prisma.$reactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reactionsCountArgs} args - Arguments to filter Reactions to count.
     * @example
     * // Count the number of Reactions
     * const count = await prisma.reactions.count({
     *   where: {
     *     // ... the filter for the Reactions we want to count
     *   }
     * })
    **/
    count<T extends reactionsCountArgs>(
      args?: Subset<T, reactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReactionsAggregateArgs>(args: Subset<T, ReactionsAggregateArgs>): Prisma.PrismaPromise<GetReactionsAggregateType<T>>

    /**
     * Group by Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reactionsGroupByArgs['orderBy'] }
        : { orderBy?: reactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reactions model
   */
  readonly fields: reactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reactions model
   */
  interface reactionsFieldRefs {
    readonly feed_id: FieldRef<"reactions", 'BigInt'>
    readonly reacted_by: FieldRef<"reactions", 'BigInt'>
    readonly created_datetime: FieldRef<"reactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reactions findUnique
   */
  export type reactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reactions
     */
    select?: reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reactions
     */
    omit?: reactionsOmit<ExtArgs> | null
    /**
     * Filter, which reactions to fetch.
     */
    where: reactionsWhereUniqueInput
  }

  /**
   * reactions findUniqueOrThrow
   */
  export type reactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reactions
     */
    select?: reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reactions
     */
    omit?: reactionsOmit<ExtArgs> | null
    /**
     * Filter, which reactions to fetch.
     */
    where: reactionsWhereUniqueInput
  }

  /**
   * reactions findFirst
   */
  export type reactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reactions
     */
    select?: reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reactions
     */
    omit?: reactionsOmit<ExtArgs> | null
    /**
     * Filter, which reactions to fetch.
     */
    where?: reactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reactions to fetch.
     */
    orderBy?: reactionsOrderByWithRelationInput | reactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reactions.
     */
    cursor?: reactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reactions.
     */
    distinct?: ReactionsScalarFieldEnum | ReactionsScalarFieldEnum[]
  }

  /**
   * reactions findFirstOrThrow
   */
  export type reactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reactions
     */
    select?: reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reactions
     */
    omit?: reactionsOmit<ExtArgs> | null
    /**
     * Filter, which reactions to fetch.
     */
    where?: reactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reactions to fetch.
     */
    orderBy?: reactionsOrderByWithRelationInput | reactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reactions.
     */
    cursor?: reactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reactions.
     */
    distinct?: ReactionsScalarFieldEnum | ReactionsScalarFieldEnum[]
  }

  /**
   * reactions findMany
   */
  export type reactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reactions
     */
    select?: reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reactions
     */
    omit?: reactionsOmit<ExtArgs> | null
    /**
     * Filter, which reactions to fetch.
     */
    where?: reactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reactions to fetch.
     */
    orderBy?: reactionsOrderByWithRelationInput | reactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reactions.
     */
    cursor?: reactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reactions.
     */
    skip?: number
    distinct?: ReactionsScalarFieldEnum | ReactionsScalarFieldEnum[]
  }

  /**
   * reactions create
   */
  export type reactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reactions
     */
    select?: reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reactions
     */
    omit?: reactionsOmit<ExtArgs> | null
    /**
     * The data needed to create a reactions.
     */
    data: XOR<reactionsCreateInput, reactionsUncheckedCreateInput>
  }

  /**
   * reactions createMany
   */
  export type reactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reactions.
     */
    data: reactionsCreateManyInput | reactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reactions update
   */
  export type reactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reactions
     */
    select?: reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reactions
     */
    omit?: reactionsOmit<ExtArgs> | null
    /**
     * The data needed to update a reactions.
     */
    data: XOR<reactionsUpdateInput, reactionsUncheckedUpdateInput>
    /**
     * Choose, which reactions to update.
     */
    where: reactionsWhereUniqueInput
  }

  /**
   * reactions updateMany
   */
  export type reactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reactions.
     */
    data: XOR<reactionsUpdateManyMutationInput, reactionsUncheckedUpdateManyInput>
    /**
     * Filter which reactions to update
     */
    where?: reactionsWhereInput
    /**
     * Limit how many reactions to update.
     */
    limit?: number
  }

  /**
   * reactions upsert
   */
  export type reactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reactions
     */
    select?: reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reactions
     */
    omit?: reactionsOmit<ExtArgs> | null
    /**
     * The filter to search for the reactions to update in case it exists.
     */
    where: reactionsWhereUniqueInput
    /**
     * In case the reactions found by the `where` argument doesn't exist, create a new reactions with this data.
     */
    create: XOR<reactionsCreateInput, reactionsUncheckedCreateInput>
    /**
     * In case the reactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reactionsUpdateInput, reactionsUncheckedUpdateInput>
  }

  /**
   * reactions delete
   */
  export type reactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reactions
     */
    select?: reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reactions
     */
    omit?: reactionsOmit<ExtArgs> | null
    /**
     * Filter which reactions to delete.
     */
    where: reactionsWhereUniqueInput
  }

  /**
   * reactions deleteMany
   */
  export type reactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reactions to delete
     */
    where?: reactionsWhereInput
    /**
     * Limit how many reactions to delete.
     */
    limit?: number
  }

  /**
   * reactions without action
   */
  export type reactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reactions
     */
    select?: reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reactions
     */
    omit?: reactionsOmit<ExtArgs> | null
  }


  /**
   * Model report_feeds
   */

  export type AggregateReport_feeds = {
    _count: Report_feedsCountAggregateOutputType | null
    _avg: Report_feedsAvgAggregateOutputType | null
    _sum: Report_feedsSumAggregateOutputType | null
    _min: Report_feedsMinAggregateOutputType | null
    _max: Report_feedsMaxAggregateOutputType | null
  }

  export type Report_feedsAvgAggregateOutputType = {
    feed_id: number | null
    blocked_by: number | null
  }

  export type Report_feedsSumAggregateOutputType = {
    feed_id: bigint | null
    blocked_by: bigint | null
  }

  export type Report_feedsMinAggregateOutputType = {
    feed_id: bigint | null
    blocked_by: bigint | null
    message: string | null
    created_datetime: Date | null
    updated_datetime: Date | null
  }

  export type Report_feedsMaxAggregateOutputType = {
    feed_id: bigint | null
    blocked_by: bigint | null
    message: string | null
    created_datetime: Date | null
    updated_datetime: Date | null
  }

  export type Report_feedsCountAggregateOutputType = {
    feed_id: number
    blocked_by: number
    message: number
    created_datetime: number
    updated_datetime: number
    _all: number
  }


  export type Report_feedsAvgAggregateInputType = {
    feed_id?: true
    blocked_by?: true
  }

  export type Report_feedsSumAggregateInputType = {
    feed_id?: true
    blocked_by?: true
  }

  export type Report_feedsMinAggregateInputType = {
    feed_id?: true
    blocked_by?: true
    message?: true
    created_datetime?: true
    updated_datetime?: true
  }

  export type Report_feedsMaxAggregateInputType = {
    feed_id?: true
    blocked_by?: true
    message?: true
    created_datetime?: true
    updated_datetime?: true
  }

  export type Report_feedsCountAggregateInputType = {
    feed_id?: true
    blocked_by?: true
    message?: true
    created_datetime?: true
    updated_datetime?: true
    _all?: true
  }

  export type Report_feedsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which report_feeds to aggregate.
     */
    where?: report_feedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_feeds to fetch.
     */
    orderBy?: report_feedsOrderByWithRelationInput | report_feedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: report_feedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_feeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_feeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned report_feeds
    **/
    _count?: true | Report_feedsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Report_feedsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Report_feedsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Report_feedsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Report_feedsMaxAggregateInputType
  }

  export type GetReport_feedsAggregateType<T extends Report_feedsAggregateArgs> = {
        [P in keyof T & keyof AggregateReport_feeds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport_feeds[P]>
      : GetScalarType<T[P], AggregateReport_feeds[P]>
  }




  export type report_feedsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: report_feedsWhereInput
    orderBy?: report_feedsOrderByWithAggregationInput | report_feedsOrderByWithAggregationInput[]
    by: Report_feedsScalarFieldEnum[] | Report_feedsScalarFieldEnum
    having?: report_feedsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Report_feedsCountAggregateInputType | true
    _avg?: Report_feedsAvgAggregateInputType
    _sum?: Report_feedsSumAggregateInputType
    _min?: Report_feedsMinAggregateInputType
    _max?: Report_feedsMaxAggregateInputType
  }

  export type Report_feedsGroupByOutputType = {
    feed_id: bigint
    blocked_by: bigint
    message: string | null
    created_datetime: Date | null
    updated_datetime: Date | null
    _count: Report_feedsCountAggregateOutputType | null
    _avg: Report_feedsAvgAggregateOutputType | null
    _sum: Report_feedsSumAggregateOutputType | null
    _min: Report_feedsMinAggregateOutputType | null
    _max: Report_feedsMaxAggregateOutputType | null
  }

  type GetReport_feedsGroupByPayload<T extends report_feedsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Report_feedsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Report_feedsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Report_feedsGroupByOutputType[P]>
            : GetScalarType<T[P], Report_feedsGroupByOutputType[P]>
        }
      >
    >


  export type report_feedsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feed_id?: boolean
    blocked_by?: boolean
    message?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
  }, ExtArgs["result"]["report_feeds"]>



  export type report_feedsSelectScalar = {
    feed_id?: boolean
    blocked_by?: boolean
    message?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
  }

  export type report_feedsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"feed_id" | "blocked_by" | "message" | "created_datetime" | "updated_datetime", ExtArgs["result"]["report_feeds"]>

  export type $report_feedsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "report_feeds"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      feed_id: bigint
      blocked_by: bigint
      message: string | null
      created_datetime: Date | null
      updated_datetime: Date | null
    }, ExtArgs["result"]["report_feeds"]>
    composites: {}
  }

  type report_feedsGetPayload<S extends boolean | null | undefined | report_feedsDefaultArgs> = $Result.GetResult<Prisma.$report_feedsPayload, S>

  type report_feedsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<report_feedsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Report_feedsCountAggregateInputType | true
    }

  export interface report_feedsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['report_feeds'], meta: { name: 'report_feeds' } }
    /**
     * Find zero or one Report_feeds that matches the filter.
     * @param {report_feedsFindUniqueArgs} args - Arguments to find a Report_feeds
     * @example
     * // Get one Report_feeds
     * const report_feeds = await prisma.report_feeds.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends report_feedsFindUniqueArgs>(args: SelectSubset<T, report_feedsFindUniqueArgs<ExtArgs>>): Prisma__report_feedsClient<$Result.GetResult<Prisma.$report_feedsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report_feeds that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {report_feedsFindUniqueOrThrowArgs} args - Arguments to find a Report_feeds
     * @example
     * // Get one Report_feeds
     * const report_feeds = await prisma.report_feeds.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends report_feedsFindUniqueOrThrowArgs>(args: SelectSubset<T, report_feedsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__report_feedsClient<$Result.GetResult<Prisma.$report_feedsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report_feeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_feedsFindFirstArgs} args - Arguments to find a Report_feeds
     * @example
     * // Get one Report_feeds
     * const report_feeds = await prisma.report_feeds.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends report_feedsFindFirstArgs>(args?: SelectSubset<T, report_feedsFindFirstArgs<ExtArgs>>): Prisma__report_feedsClient<$Result.GetResult<Prisma.$report_feedsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report_feeds that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_feedsFindFirstOrThrowArgs} args - Arguments to find a Report_feeds
     * @example
     * // Get one Report_feeds
     * const report_feeds = await prisma.report_feeds.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends report_feedsFindFirstOrThrowArgs>(args?: SelectSubset<T, report_feedsFindFirstOrThrowArgs<ExtArgs>>): Prisma__report_feedsClient<$Result.GetResult<Prisma.$report_feedsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Report_feeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_feedsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Report_feeds
     * const report_feeds = await prisma.report_feeds.findMany()
     * 
     * // Get first 10 Report_feeds
     * const report_feeds = await prisma.report_feeds.findMany({ take: 10 })
     * 
     * // Only select the `feed_id`
     * const report_feedsWithFeed_idOnly = await prisma.report_feeds.findMany({ select: { feed_id: true } })
     * 
     */
    findMany<T extends report_feedsFindManyArgs>(args?: SelectSubset<T, report_feedsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$report_feedsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report_feeds.
     * @param {report_feedsCreateArgs} args - Arguments to create a Report_feeds.
     * @example
     * // Create one Report_feeds
     * const Report_feeds = await prisma.report_feeds.create({
     *   data: {
     *     // ... data to create a Report_feeds
     *   }
     * })
     * 
     */
    create<T extends report_feedsCreateArgs>(args: SelectSubset<T, report_feedsCreateArgs<ExtArgs>>): Prisma__report_feedsClient<$Result.GetResult<Prisma.$report_feedsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Report_feeds.
     * @param {report_feedsCreateManyArgs} args - Arguments to create many Report_feeds.
     * @example
     * // Create many Report_feeds
     * const report_feeds = await prisma.report_feeds.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends report_feedsCreateManyArgs>(args?: SelectSubset<T, report_feedsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Report_feeds.
     * @param {report_feedsDeleteArgs} args - Arguments to delete one Report_feeds.
     * @example
     * // Delete one Report_feeds
     * const Report_feeds = await prisma.report_feeds.delete({
     *   where: {
     *     // ... filter to delete one Report_feeds
     *   }
     * })
     * 
     */
    delete<T extends report_feedsDeleteArgs>(args: SelectSubset<T, report_feedsDeleteArgs<ExtArgs>>): Prisma__report_feedsClient<$Result.GetResult<Prisma.$report_feedsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report_feeds.
     * @param {report_feedsUpdateArgs} args - Arguments to update one Report_feeds.
     * @example
     * // Update one Report_feeds
     * const report_feeds = await prisma.report_feeds.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends report_feedsUpdateArgs>(args: SelectSubset<T, report_feedsUpdateArgs<ExtArgs>>): Prisma__report_feedsClient<$Result.GetResult<Prisma.$report_feedsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Report_feeds.
     * @param {report_feedsDeleteManyArgs} args - Arguments to filter Report_feeds to delete.
     * @example
     * // Delete a few Report_feeds
     * const { count } = await prisma.report_feeds.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends report_feedsDeleteManyArgs>(args?: SelectSubset<T, report_feedsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Report_feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_feedsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Report_feeds
     * const report_feeds = await prisma.report_feeds.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends report_feedsUpdateManyArgs>(args: SelectSubset<T, report_feedsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report_feeds.
     * @param {report_feedsUpsertArgs} args - Arguments to update or create a Report_feeds.
     * @example
     * // Update or create a Report_feeds
     * const report_feeds = await prisma.report_feeds.upsert({
     *   create: {
     *     // ... data to create a Report_feeds
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report_feeds we want to update
     *   }
     * })
     */
    upsert<T extends report_feedsUpsertArgs>(args: SelectSubset<T, report_feedsUpsertArgs<ExtArgs>>): Prisma__report_feedsClient<$Result.GetResult<Prisma.$report_feedsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Report_feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_feedsCountArgs} args - Arguments to filter Report_feeds to count.
     * @example
     * // Count the number of Report_feeds
     * const count = await prisma.report_feeds.count({
     *   where: {
     *     // ... the filter for the Report_feeds we want to count
     *   }
     * })
    **/
    count<T extends report_feedsCountArgs>(
      args?: Subset<T, report_feedsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Report_feedsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report_feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Report_feedsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Report_feedsAggregateArgs>(args: Subset<T, Report_feedsAggregateArgs>): Prisma.PrismaPromise<GetReport_feedsAggregateType<T>>

    /**
     * Group by Report_feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_feedsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends report_feedsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: report_feedsGroupByArgs['orderBy'] }
        : { orderBy?: report_feedsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, report_feedsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReport_feedsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the report_feeds model
   */
  readonly fields: report_feedsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for report_feeds.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__report_feedsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the report_feeds model
   */
  interface report_feedsFieldRefs {
    readonly feed_id: FieldRef<"report_feeds", 'BigInt'>
    readonly blocked_by: FieldRef<"report_feeds", 'BigInt'>
    readonly message: FieldRef<"report_feeds", 'String'>
    readonly created_datetime: FieldRef<"report_feeds", 'DateTime'>
    readonly updated_datetime: FieldRef<"report_feeds", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * report_feeds findUnique
   */
  export type report_feedsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_feeds
     */
    select?: report_feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_feeds
     */
    omit?: report_feedsOmit<ExtArgs> | null
    /**
     * Filter, which report_feeds to fetch.
     */
    where: report_feedsWhereUniqueInput
  }

  /**
   * report_feeds findUniqueOrThrow
   */
  export type report_feedsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_feeds
     */
    select?: report_feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_feeds
     */
    omit?: report_feedsOmit<ExtArgs> | null
    /**
     * Filter, which report_feeds to fetch.
     */
    where: report_feedsWhereUniqueInput
  }

  /**
   * report_feeds findFirst
   */
  export type report_feedsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_feeds
     */
    select?: report_feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_feeds
     */
    omit?: report_feedsOmit<ExtArgs> | null
    /**
     * Filter, which report_feeds to fetch.
     */
    where?: report_feedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_feeds to fetch.
     */
    orderBy?: report_feedsOrderByWithRelationInput | report_feedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for report_feeds.
     */
    cursor?: report_feedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_feeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_feeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of report_feeds.
     */
    distinct?: Report_feedsScalarFieldEnum | Report_feedsScalarFieldEnum[]
  }

  /**
   * report_feeds findFirstOrThrow
   */
  export type report_feedsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_feeds
     */
    select?: report_feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_feeds
     */
    omit?: report_feedsOmit<ExtArgs> | null
    /**
     * Filter, which report_feeds to fetch.
     */
    where?: report_feedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_feeds to fetch.
     */
    orderBy?: report_feedsOrderByWithRelationInput | report_feedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for report_feeds.
     */
    cursor?: report_feedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_feeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_feeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of report_feeds.
     */
    distinct?: Report_feedsScalarFieldEnum | Report_feedsScalarFieldEnum[]
  }

  /**
   * report_feeds findMany
   */
  export type report_feedsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_feeds
     */
    select?: report_feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_feeds
     */
    omit?: report_feedsOmit<ExtArgs> | null
    /**
     * Filter, which report_feeds to fetch.
     */
    where?: report_feedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_feeds to fetch.
     */
    orderBy?: report_feedsOrderByWithRelationInput | report_feedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing report_feeds.
     */
    cursor?: report_feedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_feeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_feeds.
     */
    skip?: number
    distinct?: Report_feedsScalarFieldEnum | Report_feedsScalarFieldEnum[]
  }

  /**
   * report_feeds create
   */
  export type report_feedsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_feeds
     */
    select?: report_feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_feeds
     */
    omit?: report_feedsOmit<ExtArgs> | null
    /**
     * The data needed to create a report_feeds.
     */
    data: XOR<report_feedsCreateInput, report_feedsUncheckedCreateInput>
  }

  /**
   * report_feeds createMany
   */
  export type report_feedsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many report_feeds.
     */
    data: report_feedsCreateManyInput | report_feedsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * report_feeds update
   */
  export type report_feedsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_feeds
     */
    select?: report_feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_feeds
     */
    omit?: report_feedsOmit<ExtArgs> | null
    /**
     * The data needed to update a report_feeds.
     */
    data: XOR<report_feedsUpdateInput, report_feedsUncheckedUpdateInput>
    /**
     * Choose, which report_feeds to update.
     */
    where: report_feedsWhereUniqueInput
  }

  /**
   * report_feeds updateMany
   */
  export type report_feedsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update report_feeds.
     */
    data: XOR<report_feedsUpdateManyMutationInput, report_feedsUncheckedUpdateManyInput>
    /**
     * Filter which report_feeds to update
     */
    where?: report_feedsWhereInput
    /**
     * Limit how many report_feeds to update.
     */
    limit?: number
  }

  /**
   * report_feeds upsert
   */
  export type report_feedsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_feeds
     */
    select?: report_feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_feeds
     */
    omit?: report_feedsOmit<ExtArgs> | null
    /**
     * The filter to search for the report_feeds to update in case it exists.
     */
    where: report_feedsWhereUniqueInput
    /**
     * In case the report_feeds found by the `where` argument doesn't exist, create a new report_feeds with this data.
     */
    create: XOR<report_feedsCreateInput, report_feedsUncheckedCreateInput>
    /**
     * In case the report_feeds was found with the provided `where` argument, update it with this data.
     */
    update: XOR<report_feedsUpdateInput, report_feedsUncheckedUpdateInput>
  }

  /**
   * report_feeds delete
   */
  export type report_feedsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_feeds
     */
    select?: report_feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_feeds
     */
    omit?: report_feedsOmit<ExtArgs> | null
    /**
     * Filter which report_feeds to delete.
     */
    where: report_feedsWhereUniqueInput
  }

  /**
   * report_feeds deleteMany
   */
  export type report_feedsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which report_feeds to delete
     */
    where?: report_feedsWhereInput
    /**
     * Limit how many report_feeds to delete.
     */
    limit?: number
  }

  /**
   * report_feeds without action
   */
  export type report_feedsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_feeds
     */
    select?: report_feedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_feeds
     */
    omit?: report_feedsOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    uuhid: string | null
    first_name: string | null
    last_name: string | null
    username: string | null
    email: string | null
    password: string | null
    auth_key: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    uuhid: string | null
    first_name: string | null
    last_name: string | null
    username: string | null
    email: string | null
    password: string | null
    auth_key: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    uuhid: number
    first_name: number
    last_name: number
    username: number
    email: number
    password: number
    auth_key: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    uuhid?: true
    first_name?: true
    last_name?: true
    username?: true
    email?: true
    password?: true
    auth_key?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    uuhid?: true
    first_name?: true
    last_name?: true
    username?: true
    email?: true
    password?: true
    auth_key?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    uuhid?: true
    first_name?: true
    last_name?: true
    username?: true
    email?: true
    password?: true
    auth_key?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    uuhid: string
    first_name: string
    last_name: string
    username: string
    email: string
    password: string
    auth_key: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuhid?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    auth_key?: boolean
    created_at?: boolean
    updated_at?: boolean
    Account?: boolean | users$AccountArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    uuhid?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    auth_key?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuhid" | "first_name" | "last_name" | "username" | "email" | "password" | "auth_key" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | users$AccountArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      Account: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuhid: string
      first_name: string
      last_name: string
      username: string
      email: string
      password: string
      auth_key: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Account<T extends users$AccountArgs<ExtArgs> = {}>(args?: Subset<T, users$AccountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly uuhid: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly auth_key: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.Account
   */
  export type users$AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model views
   */

  export type AggregateViews = {
    _count: ViewsCountAggregateOutputType | null
    _avg: ViewsAvgAggregateOutputType | null
    _sum: ViewsSumAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  export type ViewsAvgAggregateOutputType = {
    feed_id: number | null
    viewed_by: number | null
  }

  export type ViewsSumAggregateOutputType = {
    feed_id: bigint | null
    viewed_by: bigint | null
  }

  export type ViewsMinAggregateOutputType = {
    feed_id: bigint | null
    viewed_by: bigint | null
    created_datetime: Date | null
  }

  export type ViewsMaxAggregateOutputType = {
    feed_id: bigint | null
    viewed_by: bigint | null
    created_datetime: Date | null
  }

  export type ViewsCountAggregateOutputType = {
    feed_id: number
    viewed_by: number
    created_datetime: number
    _all: number
  }


  export type ViewsAvgAggregateInputType = {
    feed_id?: true
    viewed_by?: true
  }

  export type ViewsSumAggregateInputType = {
    feed_id?: true
    viewed_by?: true
  }

  export type ViewsMinAggregateInputType = {
    feed_id?: true
    viewed_by?: true
    created_datetime?: true
  }

  export type ViewsMaxAggregateInputType = {
    feed_id?: true
    viewed_by?: true
    created_datetime?: true
  }

  export type ViewsCountAggregateInputType = {
    feed_id?: true
    viewed_by?: true
    created_datetime?: true
    _all?: true
  }

  export type ViewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which views to aggregate.
     */
    where?: viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of views to fetch.
     */
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned views
    **/
    _count?: true | ViewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewsMaxAggregateInputType
  }

  export type GetViewsAggregateType<T extends ViewsAggregateArgs> = {
        [P in keyof T & keyof AggregateViews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViews[P]>
      : GetScalarType<T[P], AggregateViews[P]>
  }




  export type viewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: viewsWhereInput
    orderBy?: viewsOrderByWithAggregationInput | viewsOrderByWithAggregationInput[]
    by: ViewsScalarFieldEnum[] | ViewsScalarFieldEnum
    having?: viewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewsCountAggregateInputType | true
    _avg?: ViewsAvgAggregateInputType
    _sum?: ViewsSumAggregateInputType
    _min?: ViewsMinAggregateInputType
    _max?: ViewsMaxAggregateInputType
  }

  export type ViewsGroupByOutputType = {
    feed_id: bigint
    viewed_by: bigint
    created_datetime: Date | null
    _count: ViewsCountAggregateOutputType | null
    _avg: ViewsAvgAggregateOutputType | null
    _sum: ViewsSumAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  type GetViewsGroupByPayload<T extends viewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewsGroupByOutputType[P]>
            : GetScalarType<T[P], ViewsGroupByOutputType[P]>
        }
      >
    >


  export type viewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feed_id?: boolean
    viewed_by?: boolean
    created_datetime?: boolean
  }, ExtArgs["result"]["views"]>



  export type viewsSelectScalar = {
    feed_id?: boolean
    viewed_by?: boolean
    created_datetime?: boolean
  }

  export type viewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"feed_id" | "viewed_by" | "created_datetime", ExtArgs["result"]["views"]>

  export type $viewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "views"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      feed_id: bigint
      viewed_by: bigint
      created_datetime: Date | null
    }, ExtArgs["result"]["views"]>
    composites: {}
  }

  type viewsGetPayload<S extends boolean | null | undefined | viewsDefaultArgs> = $Result.GetResult<Prisma.$viewsPayload, S>

  type viewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<viewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewsCountAggregateInputType | true
    }

  export interface viewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['views'], meta: { name: 'views' } }
    /**
     * Find zero or one Views that matches the filter.
     * @param {viewsFindUniqueArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends viewsFindUniqueArgs>(args: SelectSubset<T, viewsFindUniqueArgs<ExtArgs>>): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Views that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {viewsFindUniqueOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends viewsFindUniqueOrThrowArgs>(args: SelectSubset<T, viewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsFindFirstArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends viewsFindFirstArgs>(args?: SelectSubset<T, viewsFindFirstArgs<ExtArgs>>): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Views that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsFindFirstOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends viewsFindFirstOrThrowArgs>(args?: SelectSubset<T, viewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Views
     * const views = await prisma.views.findMany()
     * 
     * // Get first 10 Views
     * const views = await prisma.views.findMany({ take: 10 })
     * 
     * // Only select the `feed_id`
     * const viewsWithFeed_idOnly = await prisma.views.findMany({ select: { feed_id: true } })
     * 
     */
    findMany<T extends viewsFindManyArgs>(args?: SelectSubset<T, viewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Views.
     * @param {viewsCreateArgs} args - Arguments to create a Views.
     * @example
     * // Create one Views
     * const Views = await prisma.views.create({
     *   data: {
     *     // ... data to create a Views
     *   }
     * })
     * 
     */
    create<T extends viewsCreateArgs>(args: SelectSubset<T, viewsCreateArgs<ExtArgs>>): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Views.
     * @param {viewsCreateManyArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const views = await prisma.views.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends viewsCreateManyArgs>(args?: SelectSubset<T, viewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Views.
     * @param {viewsDeleteArgs} args - Arguments to delete one Views.
     * @example
     * // Delete one Views
     * const Views = await prisma.views.delete({
     *   where: {
     *     // ... filter to delete one Views
     *   }
     * })
     * 
     */
    delete<T extends viewsDeleteArgs>(args: SelectSubset<T, viewsDeleteArgs<ExtArgs>>): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Views.
     * @param {viewsUpdateArgs} args - Arguments to update one Views.
     * @example
     * // Update one Views
     * const views = await prisma.views.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends viewsUpdateArgs>(args: SelectSubset<T, viewsUpdateArgs<ExtArgs>>): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Views.
     * @param {viewsDeleteManyArgs} args - Arguments to filter Views to delete.
     * @example
     * // Delete a few Views
     * const { count } = await prisma.views.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends viewsDeleteManyArgs>(args?: SelectSubset<T, viewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Views
     * const views = await prisma.views.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends viewsUpdateManyArgs>(args: SelectSubset<T, viewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Views.
     * @param {viewsUpsertArgs} args - Arguments to update or create a Views.
     * @example
     * // Update or create a Views
     * const views = await prisma.views.upsert({
     *   create: {
     *     // ... data to create a Views
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Views we want to update
     *   }
     * })
     */
    upsert<T extends viewsUpsertArgs>(args: SelectSubset<T, viewsUpsertArgs<ExtArgs>>): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsCountArgs} args - Arguments to filter Views to count.
     * @example
     * // Count the number of Views
     * const count = await prisma.views.count({
     *   where: {
     *     // ... the filter for the Views we want to count
     *   }
     * })
    **/
    count<T extends viewsCountArgs>(
      args?: Subset<T, viewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewsAggregateArgs>(args: Subset<T, ViewsAggregateArgs>): Prisma.PrismaPromise<GetViewsAggregateType<T>>

    /**
     * Group by Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends viewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: viewsGroupByArgs['orderBy'] }
        : { orderBy?: viewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, viewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the views model
   */
  readonly fields: viewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for views.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__viewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the views model
   */
  interface viewsFieldRefs {
    readonly feed_id: FieldRef<"views", 'BigInt'>
    readonly viewed_by: FieldRef<"views", 'BigInt'>
    readonly created_datetime: FieldRef<"views", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * views findUnique
   */
  export type viewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where: viewsWhereUniqueInput
  }

  /**
   * views findUniqueOrThrow
   */
  export type viewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where: viewsWhereUniqueInput
  }

  /**
   * views findFirst
   */
  export type viewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where?: viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of views to fetch.
     */
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for views.
     */
    cursor?: viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * views findFirstOrThrow
   */
  export type viewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where?: viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of views to fetch.
     */
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for views.
     */
    cursor?: viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * views findMany
   */
  export type viewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where?: viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of views to fetch.
     */
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing views.
     */
    cursor?: viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` views.
     */
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * views create
   */
  export type viewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * The data needed to create a views.
     */
    data: XOR<viewsCreateInput, viewsUncheckedCreateInput>
  }

  /**
   * views createMany
   */
  export type viewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many views.
     */
    data: viewsCreateManyInput | viewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * views update
   */
  export type viewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * The data needed to update a views.
     */
    data: XOR<viewsUpdateInput, viewsUncheckedUpdateInput>
    /**
     * Choose, which views to update.
     */
    where: viewsWhereUniqueInput
  }

  /**
   * views updateMany
   */
  export type viewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update views.
     */
    data: XOR<viewsUpdateManyMutationInput, viewsUncheckedUpdateManyInput>
    /**
     * Filter which views to update
     */
    where?: viewsWhereInput
    /**
     * Limit how many views to update.
     */
    limit?: number
  }

  /**
   * views upsert
   */
  export type viewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * The filter to search for the views to update in case it exists.
     */
    where: viewsWhereUniqueInput
    /**
     * In case the views found by the `where` argument doesn't exist, create a new views with this data.
     */
    create: XOR<viewsCreateInput, viewsUncheckedCreateInput>
    /**
     * In case the views was found with the provided `where` argument, update it with this data.
     */
    update: XOR<viewsUpdateInput, viewsUncheckedUpdateInput>
  }

  /**
   * views delete
   */
  export type viewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Filter which views to delete.
     */
    where: viewsWhereUniqueInput
  }

  /**
   * views deleteMany
   */
  export type viewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which views to delete
     */
    where?: viewsWhereInput
    /**
     * Limit how many views to delete.
     */
    limit?: number
  }

  /**
   * views without action
   */
  export type viewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const Ai_tool_mstrScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_active: 'is_active',
    created_datetime: 'created_datetime',
    updated_datetime: 'updated_datetime'
  };

  export type Ai_tool_mstrScalarFieldEnum = (typeof Ai_tool_mstrScalarFieldEnum)[keyof typeof Ai_tool_mstrScalarFieldEnum]


  export const Blocked_commentsScalarFieldEnum: {
    comment_id: 'comment_id',
    user_id: 'user_id'
  };

  export type Blocked_commentsScalarFieldEnum = (typeof Blocked_commentsScalarFieldEnum)[keyof typeof Blocked_commentsScalarFieldEnum]


  export const Comment_reactionScalarFieldEnum: {
    comment_id: 'comment_id',
    reacted_by: 'reacted_by',
    created_datetime: 'created_datetime'
  };

  export type Comment_reactionScalarFieldEnum = (typeof Comment_reactionScalarFieldEnum)[keyof typeof Comment_reactionScalarFieldEnum]


  export const Comment_replyScalarFieldEnum: {
    reply_id: 'reply_id',
    comment_id: 'comment_id',
    reply_by: 'reply_by',
    reply: 'reply',
    created_datetime: 'created_datetime',
    updated_datetime: 'updated_datetime',
    total_reaction: 'total_reaction'
  };

  export type Comment_replyScalarFieldEnum = (typeof Comment_replyScalarFieldEnum)[keyof typeof Comment_replyScalarFieldEnum]


  export const Comment_reply_reactionScalarFieldEnum: {
    reply_id: 'reply_id',
    reacted_by: 'reacted_by',
    created_datetime: 'created_datetime'
  };

  export type Comment_reply_reactionScalarFieldEnum = (typeof Comment_reply_reactionScalarFieldEnum)[keyof typeof Comment_reply_reactionScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    comment_id: 'comment_id',
    feed_id: 'feed_id',
    comment_by: 'comment_by',
    comment: 'comment',
    total_reaction: 'total_reaction',
    total_reply: 'total_reply',
    created_datetime: 'created_datetime',
    updated_datetime: 'updated_datetime'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const Email_otp_verificationScalarFieldEnum: {
    email_id: 'email_id',
    OTP: 'OTP'
  };

  export type Email_otp_verificationScalarFieldEnum = (typeof Email_otp_verificationScalarFieldEnum)[keyof typeof Email_otp_verificationScalarFieldEnum]


  export const Feed_ai_toolScalarFieldEnum: {
    feed_id: 'feed_id',
    ai_tool_id: 'ai_tool_id'
  };

  export type Feed_ai_toolScalarFieldEnum = (typeof Feed_ai_toolScalarFieldEnum)[keyof typeof Feed_ai_toolScalarFieldEnum]


  export const FeedsScalarFieldEnum: {
    id: 'id',
    feed_uuid: 'feed_uuid',
    user_id: 'user_id',
    caption: 'caption',
    description: 'description',
    prompt: 'prompt',
    feed_type: 'feed_type',
    generated_text: 'generated_text',
    is_deleted: 'is_deleted',
    total_views_count: 'total_views_count',
    total_likes_count: 'total_likes_count',
    total_comments_count: 'total_comments_count',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FeedsScalarFieldEnum = (typeof FeedsScalarFieldEnum)[keyof typeof FeedsScalarFieldEnum]


  export const ReactionsScalarFieldEnum: {
    feed_id: 'feed_id',
    reacted_by: 'reacted_by',
    created_datetime: 'created_datetime'
  };

  export type ReactionsScalarFieldEnum = (typeof ReactionsScalarFieldEnum)[keyof typeof ReactionsScalarFieldEnum]


  export const Report_feedsScalarFieldEnum: {
    feed_id: 'feed_id',
    blocked_by: 'blocked_by',
    message: 'message',
    created_datetime: 'created_datetime',
    updated_datetime: 'updated_datetime'
  };

  export type Report_feedsScalarFieldEnum = (typeof Report_feedsScalarFieldEnum)[keyof typeof Report_feedsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    uuhid: 'uuhid',
    first_name: 'first_name',
    last_name: 'last_name',
    username: 'username',
    email: 'email',
    password: 'password',
    auth_key: 'auth_key',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ViewsScalarFieldEnum: {
    feed_id: 'feed_id',
    viewed_by: 'viewed_by',
    created_datetime: 'created_datetime'
  };

  export type ViewsScalarFieldEnum = (typeof ViewsScalarFieldEnum)[keyof typeof ViewsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AccountOrderByRelevanceFieldEnum: {
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const ai_tool_mstrOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ai_tool_mstrOrderByRelevanceFieldEnum = (typeof ai_tool_mstrOrderByRelevanceFieldEnum)[keyof typeof ai_tool_mstrOrderByRelevanceFieldEnum]


  export const comment_replyOrderByRelevanceFieldEnum: {
    reply: 'reply'
  };

  export type comment_replyOrderByRelevanceFieldEnum = (typeof comment_replyOrderByRelevanceFieldEnum)[keyof typeof comment_replyOrderByRelevanceFieldEnum]


  export const commentsOrderByRelevanceFieldEnum: {
    comment: 'comment'
  };

  export type commentsOrderByRelevanceFieldEnum = (typeof commentsOrderByRelevanceFieldEnum)[keyof typeof commentsOrderByRelevanceFieldEnum]


  export const email_otp_verificationOrderByRelevanceFieldEnum: {
    email_id: 'email_id',
    OTP: 'OTP'
  };

  export type email_otp_verificationOrderByRelevanceFieldEnum = (typeof email_otp_verificationOrderByRelevanceFieldEnum)[keyof typeof email_otp_verificationOrderByRelevanceFieldEnum]


  export const feedsOrderByRelevanceFieldEnum: {
    feed_uuid: 'feed_uuid',
    caption: 'caption',
    description: 'description',
    prompt: 'prompt',
    generated_text: 'generated_text'
  };

  export type feedsOrderByRelevanceFieldEnum = (typeof feedsOrderByRelevanceFieldEnum)[keyof typeof feedsOrderByRelevanceFieldEnum]


  export const report_feedsOrderByRelevanceFieldEnum: {
    message: 'message'
  };

  export type report_feedsOrderByRelevanceFieldEnum = (typeof report_feedsOrderByRelevanceFieldEnum)[keyof typeof report_feedsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    uuhid: 'uuhid',
    first_name: 'first_name',
    last_name: 'last_name',
    username: 'username',
    email: 'email',
    password: 'password',
    auth_key: 'auth_key'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'feeds_feed_type'
   */
  export type Enumfeeds_feed_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'feeds_feed_type'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: IntFilter<"Account"> | number
    userId?: IntFilter<"Account"> | number
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: IntFilter<"Account"> | number
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Account"> | number
    userId?: IntWithAggregatesFilter<"Account"> | number
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type ai_tool_mstrWhereInput = {
    AND?: ai_tool_mstrWhereInput | ai_tool_mstrWhereInput[]
    OR?: ai_tool_mstrWhereInput[]
    NOT?: ai_tool_mstrWhereInput | ai_tool_mstrWhereInput[]
    id?: IntFilter<"ai_tool_mstr"> | number
    name?: StringFilter<"ai_tool_mstr"> | string
    is_active?: BoolNullableFilter<"ai_tool_mstr"> | boolean | null
    created_datetime?: DateTimeNullableFilter<"ai_tool_mstr"> | Date | string | null
    updated_datetime?: DateTimeNullableFilter<"ai_tool_mstr"> | Date | string | null
    feed_ai_tool?: Feed_ai_toolListRelationFilter
  }

  export type ai_tool_mstrOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrderInput | SortOrder
    created_datetime?: SortOrderInput | SortOrder
    updated_datetime?: SortOrderInput | SortOrder
    feed_ai_tool?: feed_ai_toolOrderByRelationAggregateInput
    _relevance?: ai_tool_mstrOrderByRelevanceInput
  }

  export type ai_tool_mstrWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ai_tool_mstrWhereInput | ai_tool_mstrWhereInput[]
    OR?: ai_tool_mstrWhereInput[]
    NOT?: ai_tool_mstrWhereInput | ai_tool_mstrWhereInput[]
    is_active?: BoolNullableFilter<"ai_tool_mstr"> | boolean | null
    created_datetime?: DateTimeNullableFilter<"ai_tool_mstr"> | Date | string | null
    updated_datetime?: DateTimeNullableFilter<"ai_tool_mstr"> | Date | string | null
    feed_ai_tool?: Feed_ai_toolListRelationFilter
  }, "id" | "name">

  export type ai_tool_mstrOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrderInput | SortOrder
    created_datetime?: SortOrderInput | SortOrder
    updated_datetime?: SortOrderInput | SortOrder
    _count?: ai_tool_mstrCountOrderByAggregateInput
    _avg?: ai_tool_mstrAvgOrderByAggregateInput
    _max?: ai_tool_mstrMaxOrderByAggregateInput
    _min?: ai_tool_mstrMinOrderByAggregateInput
    _sum?: ai_tool_mstrSumOrderByAggregateInput
  }

  export type ai_tool_mstrScalarWhereWithAggregatesInput = {
    AND?: ai_tool_mstrScalarWhereWithAggregatesInput | ai_tool_mstrScalarWhereWithAggregatesInput[]
    OR?: ai_tool_mstrScalarWhereWithAggregatesInput[]
    NOT?: ai_tool_mstrScalarWhereWithAggregatesInput | ai_tool_mstrScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ai_tool_mstr"> | number
    name?: StringWithAggregatesFilter<"ai_tool_mstr"> | string
    is_active?: BoolNullableWithAggregatesFilter<"ai_tool_mstr"> | boolean | null
    created_datetime?: DateTimeNullableWithAggregatesFilter<"ai_tool_mstr"> | Date | string | null
    updated_datetime?: DateTimeNullableWithAggregatesFilter<"ai_tool_mstr"> | Date | string | null
  }

  export type blocked_commentsWhereInput = {
    AND?: blocked_commentsWhereInput | blocked_commentsWhereInput[]
    OR?: blocked_commentsWhereInput[]
    NOT?: blocked_commentsWhereInput | blocked_commentsWhereInput[]
    comment_id?: BigIntFilter<"blocked_comments"> | bigint | number
    user_id?: BigIntFilter<"blocked_comments"> | bigint | number
  }

  export type blocked_commentsOrderByWithRelationInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
  }

  export type blocked_commentsWhereUniqueInput = Prisma.AtLeast<{
    comment_id_user_id?: blocked_commentsComment_idUser_idCompoundUniqueInput
    AND?: blocked_commentsWhereInput | blocked_commentsWhereInput[]
    OR?: blocked_commentsWhereInput[]
    NOT?: blocked_commentsWhereInput | blocked_commentsWhereInput[]
    comment_id?: BigIntFilter<"blocked_comments"> | bigint | number
    user_id?: BigIntFilter<"blocked_comments"> | bigint | number
  }, "comment_id_user_id">

  export type blocked_commentsOrderByWithAggregationInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
    _count?: blocked_commentsCountOrderByAggregateInput
    _avg?: blocked_commentsAvgOrderByAggregateInput
    _max?: blocked_commentsMaxOrderByAggregateInput
    _min?: blocked_commentsMinOrderByAggregateInput
    _sum?: blocked_commentsSumOrderByAggregateInput
  }

  export type blocked_commentsScalarWhereWithAggregatesInput = {
    AND?: blocked_commentsScalarWhereWithAggregatesInput | blocked_commentsScalarWhereWithAggregatesInput[]
    OR?: blocked_commentsScalarWhereWithAggregatesInput[]
    NOT?: blocked_commentsScalarWhereWithAggregatesInput | blocked_commentsScalarWhereWithAggregatesInput[]
    comment_id?: BigIntWithAggregatesFilter<"blocked_comments"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"blocked_comments"> | bigint | number
  }

  export type comment_reactionWhereInput = {
    AND?: comment_reactionWhereInput | comment_reactionWhereInput[]
    OR?: comment_reactionWhereInput[]
    NOT?: comment_reactionWhereInput | comment_reactionWhereInput[]
    comment_id?: BigIntFilter<"comment_reaction"> | bigint | number
    reacted_by?: BigIntFilter<"comment_reaction"> | bigint | number
    created_datetime?: DateTimeNullableFilter<"comment_reaction"> | Date | string | null
  }

  export type comment_reactionOrderByWithRelationInput = {
    comment_id?: SortOrder
    reacted_by?: SortOrder
    created_datetime?: SortOrderInput | SortOrder
  }

  export type comment_reactionWhereUniqueInput = Prisma.AtLeast<{
    comment_id_reacted_by?: comment_reactionComment_idReacted_byCompoundUniqueInput
    AND?: comment_reactionWhereInput | comment_reactionWhereInput[]
    OR?: comment_reactionWhereInput[]
    NOT?: comment_reactionWhereInput | comment_reactionWhereInput[]
    comment_id?: BigIntFilter<"comment_reaction"> | bigint | number
    reacted_by?: BigIntFilter<"comment_reaction"> | bigint | number
    created_datetime?: DateTimeNullableFilter<"comment_reaction"> | Date | string | null
  }, "comment_id_reacted_by">

  export type comment_reactionOrderByWithAggregationInput = {
    comment_id?: SortOrder
    reacted_by?: SortOrder
    created_datetime?: SortOrderInput | SortOrder
    _count?: comment_reactionCountOrderByAggregateInput
    _avg?: comment_reactionAvgOrderByAggregateInput
    _max?: comment_reactionMaxOrderByAggregateInput
    _min?: comment_reactionMinOrderByAggregateInput
    _sum?: comment_reactionSumOrderByAggregateInput
  }

  export type comment_reactionScalarWhereWithAggregatesInput = {
    AND?: comment_reactionScalarWhereWithAggregatesInput | comment_reactionScalarWhereWithAggregatesInput[]
    OR?: comment_reactionScalarWhereWithAggregatesInput[]
    NOT?: comment_reactionScalarWhereWithAggregatesInput | comment_reactionScalarWhereWithAggregatesInput[]
    comment_id?: BigIntWithAggregatesFilter<"comment_reaction"> | bigint | number
    reacted_by?: BigIntWithAggregatesFilter<"comment_reaction"> | bigint | number
    created_datetime?: DateTimeNullableWithAggregatesFilter<"comment_reaction"> | Date | string | null
  }

  export type comment_replyWhereInput = {
    AND?: comment_replyWhereInput | comment_replyWhereInput[]
    OR?: comment_replyWhereInput[]
    NOT?: comment_replyWhereInput | comment_replyWhereInput[]
    reply_id?: BigIntFilter<"comment_reply"> | bigint | number
    comment_id?: BigIntNullableFilter<"comment_reply"> | bigint | number | null
    reply_by?: BigIntNullableFilter<"comment_reply"> | bigint | number | null
    reply?: StringNullableFilter<"comment_reply"> | string | null
    created_datetime?: DateTimeNullableFilter<"comment_reply"> | Date | string | null
    updated_datetime?: DateTimeNullableFilter<"comment_reply"> | Date | string | null
    total_reaction?: IntNullableFilter<"comment_reply"> | number | null
  }

  export type comment_replyOrderByWithRelationInput = {
    reply_id?: SortOrder
    comment_id?: SortOrderInput | SortOrder
    reply_by?: SortOrderInput | SortOrder
    reply?: SortOrderInput | SortOrder
    created_datetime?: SortOrderInput | SortOrder
    updated_datetime?: SortOrderInput | SortOrder
    total_reaction?: SortOrderInput | SortOrder
    _relevance?: comment_replyOrderByRelevanceInput
  }

  export type comment_replyWhereUniqueInput = Prisma.AtLeast<{
    reply_id?: bigint | number
    AND?: comment_replyWhereInput | comment_replyWhereInput[]
    OR?: comment_replyWhereInput[]
    NOT?: comment_replyWhereInput | comment_replyWhereInput[]
    comment_id?: BigIntNullableFilter<"comment_reply"> | bigint | number | null
    reply_by?: BigIntNullableFilter<"comment_reply"> | bigint | number | null
    reply?: StringNullableFilter<"comment_reply"> | string | null
    created_datetime?: DateTimeNullableFilter<"comment_reply"> | Date | string | null
    updated_datetime?: DateTimeNullableFilter<"comment_reply"> | Date | string | null
    total_reaction?: IntNullableFilter<"comment_reply"> | number | null
  }, "reply_id">

  export type comment_replyOrderByWithAggregationInput = {
    reply_id?: SortOrder
    comment_id?: SortOrderInput | SortOrder
    reply_by?: SortOrderInput | SortOrder
    reply?: SortOrderInput | SortOrder
    created_datetime?: SortOrderInput | SortOrder
    updated_datetime?: SortOrderInput | SortOrder
    total_reaction?: SortOrderInput | SortOrder
    _count?: comment_replyCountOrderByAggregateInput
    _avg?: comment_replyAvgOrderByAggregateInput
    _max?: comment_replyMaxOrderByAggregateInput
    _min?: comment_replyMinOrderByAggregateInput
    _sum?: comment_replySumOrderByAggregateInput
  }

  export type comment_replyScalarWhereWithAggregatesInput = {
    AND?: comment_replyScalarWhereWithAggregatesInput | comment_replyScalarWhereWithAggregatesInput[]
    OR?: comment_replyScalarWhereWithAggregatesInput[]
    NOT?: comment_replyScalarWhereWithAggregatesInput | comment_replyScalarWhereWithAggregatesInput[]
    reply_id?: BigIntWithAggregatesFilter<"comment_reply"> | bigint | number
    comment_id?: BigIntNullableWithAggregatesFilter<"comment_reply"> | bigint | number | null
    reply_by?: BigIntNullableWithAggregatesFilter<"comment_reply"> | bigint | number | null
    reply?: StringNullableWithAggregatesFilter<"comment_reply"> | string | null
    created_datetime?: DateTimeNullableWithAggregatesFilter<"comment_reply"> | Date | string | null
    updated_datetime?: DateTimeNullableWithAggregatesFilter<"comment_reply"> | Date | string | null
    total_reaction?: IntNullableWithAggregatesFilter<"comment_reply"> | number | null
  }

  export type comment_reply_reactionWhereInput = {
    AND?: comment_reply_reactionWhereInput | comment_reply_reactionWhereInput[]
    OR?: comment_reply_reactionWhereInput[]
    NOT?: comment_reply_reactionWhereInput | comment_reply_reactionWhereInput[]
    reply_id?: BigIntFilter<"comment_reply_reaction"> | bigint | number
    reacted_by?: BigIntFilter<"comment_reply_reaction"> | bigint | number
    created_datetime?: DateTimeNullableFilter<"comment_reply_reaction"> | Date | string | null
  }

  export type comment_reply_reactionOrderByWithRelationInput = {
    reply_id?: SortOrder
    reacted_by?: SortOrder
    created_datetime?: SortOrderInput | SortOrder
  }

  export type comment_reply_reactionWhereUniqueInput = Prisma.AtLeast<{
    reply_id_reacted_by?: comment_reply_reactionReply_idReacted_byCompoundUniqueInput
    AND?: comment_reply_reactionWhereInput | comment_reply_reactionWhereInput[]
    OR?: comment_reply_reactionWhereInput[]
    NOT?: comment_reply_reactionWhereInput | comment_reply_reactionWhereInput[]
    reply_id?: BigIntFilter<"comment_reply_reaction"> | bigint | number
    reacted_by?: BigIntFilter<"comment_reply_reaction"> | bigint | number
    created_datetime?: DateTimeNullableFilter<"comment_reply_reaction"> | Date | string | null
  }, "reply_id_reacted_by">

  export type comment_reply_reactionOrderByWithAggregationInput = {
    reply_id?: SortOrder
    reacted_by?: SortOrder
    created_datetime?: SortOrderInput | SortOrder
    _count?: comment_reply_reactionCountOrderByAggregateInput
    _avg?: comment_reply_reactionAvgOrderByAggregateInput
    _max?: comment_reply_reactionMaxOrderByAggregateInput
    _min?: comment_reply_reactionMinOrderByAggregateInput
    _sum?: comment_reply_reactionSumOrderByAggregateInput
  }

  export type comment_reply_reactionScalarWhereWithAggregatesInput = {
    AND?: comment_reply_reactionScalarWhereWithAggregatesInput | comment_reply_reactionScalarWhereWithAggregatesInput[]
    OR?: comment_reply_reactionScalarWhereWithAggregatesInput[]
    NOT?: comment_reply_reactionScalarWhereWithAggregatesInput | comment_reply_reactionScalarWhereWithAggregatesInput[]
    reply_id?: BigIntWithAggregatesFilter<"comment_reply_reaction"> | bigint | number
    reacted_by?: BigIntWithAggregatesFilter<"comment_reply_reaction"> | bigint | number
    created_datetime?: DateTimeNullableWithAggregatesFilter<"comment_reply_reaction"> | Date | string | null
  }

  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    comment_id?: BigIntFilter<"comments"> | bigint | number
    feed_id?: BigIntNullableFilter<"comments"> | bigint | number | null
    comment_by?: BigIntNullableFilter<"comments"> | bigint | number | null
    comment?: StringNullableFilter<"comments"> | string | null
    total_reaction?: IntNullableFilter<"comments"> | number | null
    total_reply?: IntNullableFilter<"comments"> | number | null
    created_datetime?: DateTimeNullableFilter<"comments"> | Date | string | null
    updated_datetime?: DateTimeNullableFilter<"comments"> | Date | string | null
  }

  export type commentsOrderByWithRelationInput = {
    comment_id?: SortOrder
    feed_id?: SortOrderInput | SortOrder
    comment_by?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    total_reaction?: SortOrderInput | SortOrder
    total_reply?: SortOrderInput | SortOrder
    created_datetime?: SortOrderInput | SortOrder
    updated_datetime?: SortOrderInput | SortOrder
    _relevance?: commentsOrderByRelevanceInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    comment_id?: bigint | number
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    feed_id?: BigIntNullableFilter<"comments"> | bigint | number | null
    comment_by?: BigIntNullableFilter<"comments"> | bigint | number | null
    comment?: StringNullableFilter<"comments"> | string | null
    total_reaction?: IntNullableFilter<"comments"> | number | null
    total_reply?: IntNullableFilter<"comments"> | number | null
    created_datetime?: DateTimeNullableFilter<"comments"> | Date | string | null
    updated_datetime?: DateTimeNullableFilter<"comments"> | Date | string | null
  }, "comment_id">

  export type commentsOrderByWithAggregationInput = {
    comment_id?: SortOrder
    feed_id?: SortOrderInput | SortOrder
    comment_by?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    total_reaction?: SortOrderInput | SortOrder
    total_reply?: SortOrderInput | SortOrder
    created_datetime?: SortOrderInput | SortOrder
    updated_datetime?: SortOrderInput | SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    comment_id?: BigIntWithAggregatesFilter<"comments"> | bigint | number
    feed_id?: BigIntNullableWithAggregatesFilter<"comments"> | bigint | number | null
    comment_by?: BigIntNullableWithAggregatesFilter<"comments"> | bigint | number | null
    comment?: StringNullableWithAggregatesFilter<"comments"> | string | null
    total_reaction?: IntNullableWithAggregatesFilter<"comments"> | number | null
    total_reply?: IntNullableWithAggregatesFilter<"comments"> | number | null
    created_datetime?: DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null
    updated_datetime?: DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null
  }

  export type email_otp_verificationWhereInput = {
    AND?: email_otp_verificationWhereInput | email_otp_verificationWhereInput[]
    OR?: email_otp_verificationWhereInput[]
    NOT?: email_otp_verificationWhereInput | email_otp_verificationWhereInput[]
    email_id?: StringFilter<"email_otp_verification"> | string
    OTP?: StringFilter<"email_otp_verification"> | string
  }

  export type email_otp_verificationOrderByWithRelationInput = {
    email_id?: SortOrder
    OTP?: SortOrder
    _relevance?: email_otp_verificationOrderByRelevanceInput
  }

  export type email_otp_verificationWhereUniqueInput = Prisma.AtLeast<{
    email_id?: string
    AND?: email_otp_verificationWhereInput | email_otp_verificationWhereInput[]
    OR?: email_otp_verificationWhereInput[]
    NOT?: email_otp_verificationWhereInput | email_otp_verificationWhereInput[]
    OTP?: StringFilter<"email_otp_verification"> | string
  }, "email_id">

  export type email_otp_verificationOrderByWithAggregationInput = {
    email_id?: SortOrder
    OTP?: SortOrder
    _count?: email_otp_verificationCountOrderByAggregateInput
    _max?: email_otp_verificationMaxOrderByAggregateInput
    _min?: email_otp_verificationMinOrderByAggregateInput
  }

  export type email_otp_verificationScalarWhereWithAggregatesInput = {
    AND?: email_otp_verificationScalarWhereWithAggregatesInput | email_otp_verificationScalarWhereWithAggregatesInput[]
    OR?: email_otp_verificationScalarWhereWithAggregatesInput[]
    NOT?: email_otp_verificationScalarWhereWithAggregatesInput | email_otp_verificationScalarWhereWithAggregatesInput[]
    email_id?: StringWithAggregatesFilter<"email_otp_verification"> | string
    OTP?: StringWithAggregatesFilter<"email_otp_verification"> | string
  }

  export type feed_ai_toolWhereInput = {
    AND?: feed_ai_toolWhereInput | feed_ai_toolWhereInput[]
    OR?: feed_ai_toolWhereInput[]
    NOT?: feed_ai_toolWhereInput | feed_ai_toolWhereInput[]
    feed_id?: BigIntFilter<"feed_ai_tool"> | bigint | number
    ai_tool_id?: IntFilter<"feed_ai_tool"> | number
    ai_tool_mstr?: XOR<Ai_tool_mstrScalarRelationFilter, ai_tool_mstrWhereInput>
    feeds?: XOR<FeedsScalarRelationFilter, feedsWhereInput>
  }

  export type feed_ai_toolOrderByWithRelationInput = {
    feed_id?: SortOrder
    ai_tool_id?: SortOrder
    ai_tool_mstr?: ai_tool_mstrOrderByWithRelationInput
    feeds?: feedsOrderByWithRelationInput
  }

  export type feed_ai_toolWhereUniqueInput = Prisma.AtLeast<{
    feed_id_ai_tool_id?: feed_ai_toolFeed_idAi_tool_idCompoundUniqueInput
    AND?: feed_ai_toolWhereInput | feed_ai_toolWhereInput[]
    OR?: feed_ai_toolWhereInput[]
    NOT?: feed_ai_toolWhereInput | feed_ai_toolWhereInput[]
    feed_id?: BigIntFilter<"feed_ai_tool"> | bigint | number
    ai_tool_id?: IntFilter<"feed_ai_tool"> | number
    ai_tool_mstr?: XOR<Ai_tool_mstrScalarRelationFilter, ai_tool_mstrWhereInput>
    feeds?: XOR<FeedsScalarRelationFilter, feedsWhereInput>
  }, "feed_id_ai_tool_id">

  export type feed_ai_toolOrderByWithAggregationInput = {
    feed_id?: SortOrder
    ai_tool_id?: SortOrder
    _count?: feed_ai_toolCountOrderByAggregateInput
    _avg?: feed_ai_toolAvgOrderByAggregateInput
    _max?: feed_ai_toolMaxOrderByAggregateInput
    _min?: feed_ai_toolMinOrderByAggregateInput
    _sum?: feed_ai_toolSumOrderByAggregateInput
  }

  export type feed_ai_toolScalarWhereWithAggregatesInput = {
    AND?: feed_ai_toolScalarWhereWithAggregatesInput | feed_ai_toolScalarWhereWithAggregatesInput[]
    OR?: feed_ai_toolScalarWhereWithAggregatesInput[]
    NOT?: feed_ai_toolScalarWhereWithAggregatesInput | feed_ai_toolScalarWhereWithAggregatesInput[]
    feed_id?: BigIntWithAggregatesFilter<"feed_ai_tool"> | bigint | number
    ai_tool_id?: IntWithAggregatesFilter<"feed_ai_tool"> | number
  }

  export type feedsWhereInput = {
    AND?: feedsWhereInput | feedsWhereInput[]
    OR?: feedsWhereInput[]
    NOT?: feedsWhereInput | feedsWhereInput[]
    id?: BigIntFilter<"feeds"> | bigint | number
    feed_uuid?: StringFilter<"feeds"> | string
    user_id?: BigIntFilter<"feeds"> | bigint | number
    caption?: StringNullableFilter<"feeds"> | string | null
    description?: StringNullableFilter<"feeds"> | string | null
    prompt?: StringNullableFilter<"feeds"> | string | null
    feed_type?: Enumfeeds_feed_typeNullableFilter<"feeds"> | $Enums.feeds_feed_type | null
    generated_text?: StringNullableFilter<"feeds"> | string | null
    is_deleted?: BoolNullableFilter<"feeds"> | boolean | null
    total_views_count?: BigIntNullableFilter<"feeds"> | bigint | number | null
    total_likes_count?: BigIntNullableFilter<"feeds"> | bigint | number | null
    total_comments_count?: BigIntNullableFilter<"feeds"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"feeds"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"feeds"> | Date | string | null
    feed_ai_tool?: Feed_ai_toolListRelationFilter
  }

  export type feedsOrderByWithRelationInput = {
    id?: SortOrder
    feed_uuid?: SortOrder
    user_id?: SortOrder
    caption?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    prompt?: SortOrderInput | SortOrder
    feed_type?: SortOrderInput | SortOrder
    generated_text?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    total_views_count?: SortOrderInput | SortOrder
    total_likes_count?: SortOrderInput | SortOrder
    total_comments_count?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    feed_ai_tool?: feed_ai_toolOrderByRelationAggregateInput
    _relevance?: feedsOrderByRelevanceInput
  }

  export type feedsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    feed_uuid?: string
    AND?: feedsWhereInput | feedsWhereInput[]
    OR?: feedsWhereInput[]
    NOT?: feedsWhereInput | feedsWhereInput[]
    user_id?: BigIntFilter<"feeds"> | bigint | number
    caption?: StringNullableFilter<"feeds"> | string | null
    description?: StringNullableFilter<"feeds"> | string | null
    prompt?: StringNullableFilter<"feeds"> | string | null
    feed_type?: Enumfeeds_feed_typeNullableFilter<"feeds"> | $Enums.feeds_feed_type | null
    generated_text?: StringNullableFilter<"feeds"> | string | null
    is_deleted?: BoolNullableFilter<"feeds"> | boolean | null
    total_views_count?: BigIntNullableFilter<"feeds"> | bigint | number | null
    total_likes_count?: BigIntNullableFilter<"feeds"> | bigint | number | null
    total_comments_count?: BigIntNullableFilter<"feeds"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"feeds"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"feeds"> | Date | string | null
    feed_ai_tool?: Feed_ai_toolListRelationFilter
  }, "id" | "feed_uuid">

  export type feedsOrderByWithAggregationInput = {
    id?: SortOrder
    feed_uuid?: SortOrder
    user_id?: SortOrder
    caption?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    prompt?: SortOrderInput | SortOrder
    feed_type?: SortOrderInput | SortOrder
    generated_text?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    total_views_count?: SortOrderInput | SortOrder
    total_likes_count?: SortOrderInput | SortOrder
    total_comments_count?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: feedsCountOrderByAggregateInput
    _avg?: feedsAvgOrderByAggregateInput
    _max?: feedsMaxOrderByAggregateInput
    _min?: feedsMinOrderByAggregateInput
    _sum?: feedsSumOrderByAggregateInput
  }

  export type feedsScalarWhereWithAggregatesInput = {
    AND?: feedsScalarWhereWithAggregatesInput | feedsScalarWhereWithAggregatesInput[]
    OR?: feedsScalarWhereWithAggregatesInput[]
    NOT?: feedsScalarWhereWithAggregatesInput | feedsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"feeds"> | bigint | number
    feed_uuid?: StringWithAggregatesFilter<"feeds"> | string
    user_id?: BigIntWithAggregatesFilter<"feeds"> | bigint | number
    caption?: StringNullableWithAggregatesFilter<"feeds"> | string | null
    description?: StringNullableWithAggregatesFilter<"feeds"> | string | null
    prompt?: StringNullableWithAggregatesFilter<"feeds"> | string | null
    feed_type?: Enumfeeds_feed_typeNullableWithAggregatesFilter<"feeds"> | $Enums.feeds_feed_type | null
    generated_text?: StringNullableWithAggregatesFilter<"feeds"> | string | null
    is_deleted?: BoolNullableWithAggregatesFilter<"feeds"> | boolean | null
    total_views_count?: BigIntNullableWithAggregatesFilter<"feeds"> | bigint | number | null
    total_likes_count?: BigIntNullableWithAggregatesFilter<"feeds"> | bigint | number | null
    total_comments_count?: BigIntNullableWithAggregatesFilter<"feeds"> | bigint | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"feeds"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"feeds"> | Date | string | null
  }

  export type reactionsWhereInput = {
    AND?: reactionsWhereInput | reactionsWhereInput[]
    OR?: reactionsWhereInput[]
    NOT?: reactionsWhereInput | reactionsWhereInput[]
    feed_id?: BigIntFilter<"reactions"> | bigint | number
    reacted_by?: BigIntFilter<"reactions"> | bigint | number
    created_datetime?: DateTimeNullableFilter<"reactions"> | Date | string | null
  }

  export type reactionsOrderByWithRelationInput = {
    feed_id?: SortOrder
    reacted_by?: SortOrder
    created_datetime?: SortOrderInput | SortOrder
  }

  export type reactionsWhereUniqueInput = Prisma.AtLeast<{
    feed_id_reacted_by?: reactionsFeed_idReacted_byCompoundUniqueInput
    AND?: reactionsWhereInput | reactionsWhereInput[]
    OR?: reactionsWhereInput[]
    NOT?: reactionsWhereInput | reactionsWhereInput[]
    feed_id?: BigIntFilter<"reactions"> | bigint | number
    reacted_by?: BigIntFilter<"reactions"> | bigint | number
    created_datetime?: DateTimeNullableFilter<"reactions"> | Date | string | null
  }, "feed_id_reacted_by">

  export type reactionsOrderByWithAggregationInput = {
    feed_id?: SortOrder
    reacted_by?: SortOrder
    created_datetime?: SortOrderInput | SortOrder
    _count?: reactionsCountOrderByAggregateInput
    _avg?: reactionsAvgOrderByAggregateInput
    _max?: reactionsMaxOrderByAggregateInput
    _min?: reactionsMinOrderByAggregateInput
    _sum?: reactionsSumOrderByAggregateInput
  }

  export type reactionsScalarWhereWithAggregatesInput = {
    AND?: reactionsScalarWhereWithAggregatesInput | reactionsScalarWhereWithAggregatesInput[]
    OR?: reactionsScalarWhereWithAggregatesInput[]
    NOT?: reactionsScalarWhereWithAggregatesInput | reactionsScalarWhereWithAggregatesInput[]
    feed_id?: BigIntWithAggregatesFilter<"reactions"> | bigint | number
    reacted_by?: BigIntWithAggregatesFilter<"reactions"> | bigint | number
    created_datetime?: DateTimeNullableWithAggregatesFilter<"reactions"> | Date | string | null
  }

  export type report_feedsWhereInput = {
    AND?: report_feedsWhereInput | report_feedsWhereInput[]
    OR?: report_feedsWhereInput[]
    NOT?: report_feedsWhereInput | report_feedsWhereInput[]
    feed_id?: BigIntFilter<"report_feeds"> | bigint | number
    blocked_by?: BigIntFilter<"report_feeds"> | bigint | number
    message?: StringNullableFilter<"report_feeds"> | string | null
    created_datetime?: DateTimeNullableFilter<"report_feeds"> | Date | string | null
    updated_datetime?: DateTimeNullableFilter<"report_feeds"> | Date | string | null
  }

  export type report_feedsOrderByWithRelationInput = {
    feed_id?: SortOrder
    blocked_by?: SortOrder
    message?: SortOrderInput | SortOrder
    created_datetime?: SortOrderInput | SortOrder
    updated_datetime?: SortOrderInput | SortOrder
    _relevance?: report_feedsOrderByRelevanceInput
  }

  export type report_feedsWhereUniqueInput = Prisma.AtLeast<{
    feed_id_blocked_by?: report_feedsFeed_idBlocked_byCompoundUniqueInput
    AND?: report_feedsWhereInput | report_feedsWhereInput[]
    OR?: report_feedsWhereInput[]
    NOT?: report_feedsWhereInput | report_feedsWhereInput[]
    feed_id?: BigIntFilter<"report_feeds"> | bigint | number
    blocked_by?: BigIntFilter<"report_feeds"> | bigint | number
    message?: StringNullableFilter<"report_feeds"> | string | null
    created_datetime?: DateTimeNullableFilter<"report_feeds"> | Date | string | null
    updated_datetime?: DateTimeNullableFilter<"report_feeds"> | Date | string | null
  }, "feed_id_blocked_by">

  export type report_feedsOrderByWithAggregationInput = {
    feed_id?: SortOrder
    blocked_by?: SortOrder
    message?: SortOrderInput | SortOrder
    created_datetime?: SortOrderInput | SortOrder
    updated_datetime?: SortOrderInput | SortOrder
    _count?: report_feedsCountOrderByAggregateInput
    _avg?: report_feedsAvgOrderByAggregateInput
    _max?: report_feedsMaxOrderByAggregateInput
    _min?: report_feedsMinOrderByAggregateInput
    _sum?: report_feedsSumOrderByAggregateInput
  }

  export type report_feedsScalarWhereWithAggregatesInput = {
    AND?: report_feedsScalarWhereWithAggregatesInput | report_feedsScalarWhereWithAggregatesInput[]
    OR?: report_feedsScalarWhereWithAggregatesInput[]
    NOT?: report_feedsScalarWhereWithAggregatesInput | report_feedsScalarWhereWithAggregatesInput[]
    feed_id?: BigIntWithAggregatesFilter<"report_feeds"> | bigint | number
    blocked_by?: BigIntWithAggregatesFilter<"report_feeds"> | bigint | number
    message?: StringNullableWithAggregatesFilter<"report_feeds"> | string | null
    created_datetime?: DateTimeNullableWithAggregatesFilter<"report_feeds"> | Date | string | null
    updated_datetime?: DateTimeNullableWithAggregatesFilter<"report_feeds"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    uuhid?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    auth_key?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    Account?: AccountListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    uuhid?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    auth_key?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Account?: AccountOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuhid?: string
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    auth_key?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    Account?: AccountListRelationFilter
  }, "id" | "uuhid" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    uuhid?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    auth_key?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    uuhid?: StringWithAggregatesFilter<"users"> | string
    first_name?: StringWithAggregatesFilter<"users"> | string
    last_name?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    auth_key?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type viewsWhereInput = {
    AND?: viewsWhereInput | viewsWhereInput[]
    OR?: viewsWhereInput[]
    NOT?: viewsWhereInput | viewsWhereInput[]
    feed_id?: BigIntFilter<"views"> | bigint | number
    viewed_by?: BigIntFilter<"views"> | bigint | number
    created_datetime?: DateTimeNullableFilter<"views"> | Date | string | null
  }

  export type viewsOrderByWithRelationInput = {
    feed_id?: SortOrder
    viewed_by?: SortOrder
    created_datetime?: SortOrderInput | SortOrder
  }

  export type viewsWhereUniqueInput = Prisma.AtLeast<{
    viewed_by_feed_id?: viewsViewed_byFeed_idCompoundUniqueInput
    AND?: viewsWhereInput | viewsWhereInput[]
    OR?: viewsWhereInput[]
    NOT?: viewsWhereInput | viewsWhereInput[]
    feed_id?: BigIntFilter<"views"> | bigint | number
    viewed_by?: BigIntFilter<"views"> | bigint | number
    created_datetime?: DateTimeNullableFilter<"views"> | Date | string | null
  }, "viewed_by_feed_id">

  export type viewsOrderByWithAggregationInput = {
    feed_id?: SortOrder
    viewed_by?: SortOrder
    created_datetime?: SortOrderInput | SortOrder
    _count?: viewsCountOrderByAggregateInput
    _avg?: viewsAvgOrderByAggregateInput
    _max?: viewsMaxOrderByAggregateInput
    _min?: viewsMinOrderByAggregateInput
    _sum?: viewsSumOrderByAggregateInput
  }

  export type viewsScalarWhereWithAggregatesInput = {
    AND?: viewsScalarWhereWithAggregatesInput | viewsScalarWhereWithAggregatesInput[]
    OR?: viewsScalarWhereWithAggregatesInput[]
    NOT?: viewsScalarWhereWithAggregatesInput | viewsScalarWhereWithAggregatesInput[]
    feed_id?: BigIntWithAggregatesFilter<"views"> | bigint | number
    viewed_by?: BigIntWithAggregatesFilter<"views"> | bigint | number
    created_datetime?: DateTimeNullableWithAggregatesFilter<"views"> | Date | string | null
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    users: usersCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: number
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ai_tool_mstrCreateInput = {
    name: string
    is_active?: boolean | null
    created_datetime?: Date | string | null
    updated_datetime?: Date | string | null
    feed_ai_tool?: feed_ai_toolCreateNestedManyWithoutAi_tool_mstrInput
  }

  export type ai_tool_mstrUncheckedCreateInput = {
    id?: number
    name: string
    is_active?: boolean | null
    created_datetime?: Date | string | null
    updated_datetime?: Date | string | null
    feed_ai_tool?: feed_ai_toolUncheckedCreateNestedManyWithoutAi_tool_mstrInput
  }

  export type ai_tool_mstrUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feed_ai_tool?: feed_ai_toolUpdateManyWithoutAi_tool_mstrNestedInput
  }

  export type ai_tool_mstrUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feed_ai_tool?: feed_ai_toolUncheckedUpdateManyWithoutAi_tool_mstrNestedInput
  }

  export type ai_tool_mstrCreateManyInput = {
    id?: number
    name: string
    is_active?: boolean | null
    created_datetime?: Date | string | null
    updated_datetime?: Date | string | null
  }

  export type ai_tool_mstrUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_tool_mstrUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type blocked_commentsCreateInput = {
    comment_id: bigint | number
    user_id: bigint | number
  }

  export type blocked_commentsUncheckedCreateInput = {
    comment_id: bigint | number
    user_id: bigint | number
  }

  export type blocked_commentsUpdateInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type blocked_commentsUncheckedUpdateInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type blocked_commentsCreateManyInput = {
    comment_id: bigint | number
    user_id: bigint | number
  }

  export type blocked_commentsUpdateManyMutationInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type blocked_commentsUncheckedUpdateManyInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type comment_reactionCreateInput = {
    comment_id: bigint | number
    reacted_by: bigint | number
    created_datetime?: Date | string | null
  }

  export type comment_reactionUncheckedCreateInput = {
    comment_id: bigint | number
    reacted_by: bigint | number
    created_datetime?: Date | string | null
  }

  export type comment_reactionUpdateInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reacted_by?: BigIntFieldUpdateOperationsInput | bigint | number
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type comment_reactionUncheckedUpdateInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reacted_by?: BigIntFieldUpdateOperationsInput | bigint | number
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type comment_reactionCreateManyInput = {
    comment_id: bigint | number
    reacted_by: bigint | number
    created_datetime?: Date | string | null
  }

  export type comment_reactionUpdateManyMutationInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reacted_by?: BigIntFieldUpdateOperationsInput | bigint | number
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type comment_reactionUncheckedUpdateManyInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reacted_by?: BigIntFieldUpdateOperationsInput | bigint | number
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type comment_replyCreateInput = {
    reply_id?: bigint | number
    comment_id?: bigint | number | null
    reply_by?: bigint | number | null
    reply?: string | null
    created_datetime?: Date | string | null
    updated_datetime?: Date | string | null
    total_reaction?: number | null
  }

  export type comment_replyUncheckedCreateInput = {
    reply_id?: bigint | number
    comment_id?: bigint | number | null
    reply_by?: bigint | number | null
    reply?: string | null
    created_datetime?: Date | string | null
    updated_datetime?: Date | string | null
    total_reaction?: number | null
  }

  export type comment_replyUpdateInput = {
    reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    reply_by?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_reaction?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type comment_replyUncheckedUpdateInput = {
    reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    reply_by?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_reaction?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type comment_replyCreateManyInput = {
    reply_id?: bigint | number
    comment_id?: bigint | number | null
    reply_by?: bigint | number | null
    reply?: string | null
    created_datetime?: Date | string | null
    updated_datetime?: Date | string | null
    total_reaction?: number | null
  }

  export type comment_replyUpdateManyMutationInput = {
    reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    reply_by?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_reaction?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type comment_replyUncheckedUpdateManyInput = {
    reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    reply_by?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_reaction?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type comment_reply_reactionCreateInput = {
    reply_id: bigint | number
    reacted_by: bigint | number
    created_datetime?: Date | string | null
  }

  export type comment_reply_reactionUncheckedCreateInput = {
    reply_id: bigint | number
    reacted_by: bigint | number
    created_datetime?: Date | string | null
  }

  export type comment_reply_reactionUpdateInput = {
    reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reacted_by?: BigIntFieldUpdateOperationsInput | bigint | number
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type comment_reply_reactionUncheckedUpdateInput = {
    reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reacted_by?: BigIntFieldUpdateOperationsInput | bigint | number
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type comment_reply_reactionCreateManyInput = {
    reply_id: bigint | number
    reacted_by: bigint | number
    created_datetime?: Date | string | null
  }

  export type comment_reply_reactionUpdateManyMutationInput = {
    reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reacted_by?: BigIntFieldUpdateOperationsInput | bigint | number
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type comment_reply_reactionUncheckedUpdateManyInput = {
    reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reacted_by?: BigIntFieldUpdateOperationsInput | bigint | number
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateInput = {
    comment_id?: bigint | number
    feed_id?: bigint | number | null
    comment_by?: bigint | number | null
    comment?: string | null
    total_reaction?: number | null
    total_reply?: number | null
    created_datetime?: Date | string | null
    updated_datetime?: Date | string | null
  }

  export type commentsUncheckedCreateInput = {
    comment_id?: bigint | number
    feed_id?: bigint | number | null
    comment_by?: bigint | number | null
    comment?: string | null
    total_reaction?: number | null
    total_reply?: number | null
    created_datetime?: Date | string | null
    updated_datetime?: Date | string | null
  }

  export type commentsUpdateInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    feed_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    comment_by?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    total_reaction?: NullableIntFieldUpdateOperationsInput | number | null
    total_reply?: NullableIntFieldUpdateOperationsInput | number | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    feed_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    comment_by?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    total_reaction?: NullableIntFieldUpdateOperationsInput | number | null
    total_reply?: NullableIntFieldUpdateOperationsInput | number | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateManyInput = {
    comment_id?: bigint | number
    feed_id?: bigint | number | null
    comment_by?: bigint | number | null
    comment?: string | null
    total_reaction?: number | null
    total_reply?: number | null
    created_datetime?: Date | string | null
    updated_datetime?: Date | string | null
  }

  export type commentsUpdateManyMutationInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    feed_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    comment_by?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    total_reaction?: NullableIntFieldUpdateOperationsInput | number | null
    total_reply?: NullableIntFieldUpdateOperationsInput | number | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyInput = {
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    feed_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    comment_by?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    total_reaction?: NullableIntFieldUpdateOperationsInput | number | null
    total_reply?: NullableIntFieldUpdateOperationsInput | number | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type email_otp_verificationCreateInput = {
    email_id: string
    OTP: string
  }

  export type email_otp_verificationUncheckedCreateInput = {
    email_id: string
    OTP: string
  }

  export type email_otp_verificationUpdateInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    OTP?: StringFieldUpdateOperationsInput | string
  }

  export type email_otp_verificationUncheckedUpdateInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    OTP?: StringFieldUpdateOperationsInput | string
  }

  export type email_otp_verificationCreateManyInput = {
    email_id: string
    OTP: string
  }

  export type email_otp_verificationUpdateManyMutationInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    OTP?: StringFieldUpdateOperationsInput | string
  }

  export type email_otp_verificationUncheckedUpdateManyInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    OTP?: StringFieldUpdateOperationsInput | string
  }

  export type feed_ai_toolCreateInput = {
    ai_tool_mstr: ai_tool_mstrCreateNestedOneWithoutFeed_ai_toolInput
    feeds: feedsCreateNestedOneWithoutFeed_ai_toolInput
  }

  export type feed_ai_toolUncheckedCreateInput = {
    feed_id: bigint | number
    ai_tool_id: number
  }

  export type feed_ai_toolUpdateInput = {
    ai_tool_mstr?: ai_tool_mstrUpdateOneRequiredWithoutFeed_ai_toolNestedInput
    feeds?: feedsUpdateOneRequiredWithoutFeed_ai_toolNestedInput
  }

  export type feed_ai_toolUncheckedUpdateInput = {
    feed_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ai_tool_id?: IntFieldUpdateOperationsInput | number
  }

  export type feed_ai_toolCreateManyInput = {
    feed_id: bigint | number
    ai_tool_id: number
  }

  export type feed_ai_toolUpdateManyMutationInput = {

  }

  export type feed_ai_toolUncheckedUpdateManyInput = {
    feed_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ai_tool_id?: IntFieldUpdateOperationsInput | number
  }

  export type feedsCreateInput = {
    id?: bigint | number
    feed_uuid: string
    user_id: bigint | number
    caption?: string | null
    description?: string | null
    prompt?: string | null
    feed_type?: $Enums.feeds_feed_type | null
    generated_text?: string | null
    is_deleted?: boolean | null
    total_views_count?: bigint | number | null
    total_likes_count?: bigint | number | null
    total_comments_count?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    feed_ai_tool?: feed_ai_toolCreateNestedManyWithoutFeedsInput
  }

  export type feedsUncheckedCreateInput = {
    id?: bigint | number
    feed_uuid: string
    user_id: bigint | number
    caption?: string | null
    description?: string | null
    prompt?: string | null
    feed_type?: $Enums.feeds_feed_type | null
    generated_text?: string | null
    is_deleted?: boolean | null
    total_views_count?: bigint | number | null
    total_likes_count?: bigint | number | null
    total_comments_count?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    feed_ai_tool?: feed_ai_toolUncheckedCreateNestedManyWithoutFeedsInput
  }

  export type feedsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    feed_uuid?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    feed_type?: NullableEnumfeeds_feed_typeFieldUpdateOperationsInput | $Enums.feeds_feed_type | null
    generated_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_views_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_likes_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_comments_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feed_ai_tool?: feed_ai_toolUpdateManyWithoutFeedsNestedInput
  }

  export type feedsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    feed_uuid?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    feed_type?: NullableEnumfeeds_feed_typeFieldUpdateOperationsInput | $Enums.feeds_feed_type | null
    generated_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_views_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_likes_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_comments_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feed_ai_tool?: feed_ai_toolUncheckedUpdateManyWithoutFeedsNestedInput
  }

  export type feedsCreateManyInput = {
    id?: bigint | number
    feed_uuid: string
    user_id: bigint | number
    caption?: string | null
    description?: string | null
    prompt?: string | null
    feed_type?: $Enums.feeds_feed_type | null
    generated_text?: string | null
    is_deleted?: boolean | null
    total_views_count?: bigint | number | null
    total_likes_count?: bigint | number | null
    total_comments_count?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type feedsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    feed_uuid?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    feed_type?: NullableEnumfeeds_feed_typeFieldUpdateOperationsInput | $Enums.feeds_feed_type | null
    generated_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_views_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_likes_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_comments_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type feedsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    feed_uuid?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    feed_type?: NullableEnumfeeds_feed_typeFieldUpdateOperationsInput | $Enums.feeds_feed_type | null
    generated_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_views_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_likes_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_comments_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reactionsCreateInput = {
    feed_id: bigint | number
    reacted_by: bigint | number
    created_datetime?: Date | string | null
  }

  export type reactionsUncheckedCreateInput = {
    feed_id: bigint | number
    reacted_by: bigint | number
    created_datetime?: Date | string | null
  }

  export type reactionsUpdateInput = {
    feed_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reacted_by?: BigIntFieldUpdateOperationsInput | bigint | number
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reactionsUncheckedUpdateInput = {
    feed_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reacted_by?: BigIntFieldUpdateOperationsInput | bigint | number
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reactionsCreateManyInput = {
    feed_id: bigint | number
    reacted_by: bigint | number
    created_datetime?: Date | string | null
  }

  export type reactionsUpdateManyMutationInput = {
    feed_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reacted_by?: BigIntFieldUpdateOperationsInput | bigint | number
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reactionsUncheckedUpdateManyInput = {
    feed_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reacted_by?: BigIntFieldUpdateOperationsInput | bigint | number
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type report_feedsCreateInput = {
    feed_id: bigint | number
    blocked_by: bigint | number
    message?: string | null
    created_datetime?: Date | string | null
    updated_datetime?: Date | string | null
  }

  export type report_feedsUncheckedCreateInput = {
    feed_id: bigint | number
    blocked_by: bigint | number
    message?: string | null
    created_datetime?: Date | string | null
    updated_datetime?: Date | string | null
  }

  export type report_feedsUpdateInput = {
    feed_id?: BigIntFieldUpdateOperationsInput | bigint | number
    blocked_by?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type report_feedsUncheckedUpdateInput = {
    feed_id?: BigIntFieldUpdateOperationsInput | bigint | number
    blocked_by?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type report_feedsCreateManyInput = {
    feed_id: bigint | number
    blocked_by: bigint | number
    message?: string | null
    created_datetime?: Date | string | null
    updated_datetime?: Date | string | null
  }

  export type report_feedsUpdateManyMutationInput = {
    feed_id?: BigIntFieldUpdateOperationsInput | bigint | number
    blocked_by?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type report_feedsUncheckedUpdateManyInput = {
    feed_id?: BigIntFieldUpdateOperationsInput | bigint | number
    blocked_by?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    uuhid: string
    first_name: string
    last_name: string
    username: string
    email: string
    password: string
    auth_key?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Account?: AccountCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    uuhid: string
    first_name: string
    last_name: string
    username: string
    email: string
    password: string
    auth_key?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Account?: AccountUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    uuhid?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    auth_key?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account?: AccountUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuhid?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    auth_key?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account?: AccountUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    uuhid: string
    first_name: string
    last_name: string
    username: string
    email: string
    password: string
    auth_key?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    uuhid?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    auth_key?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuhid?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    auth_key?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type viewsCreateInput = {
    feed_id: bigint | number
    viewed_by: bigint | number
    created_datetime?: Date | string | null
  }

  export type viewsUncheckedCreateInput = {
    feed_id: bigint | number
    viewed_by: bigint | number
    created_datetime?: Date | string | null
  }

  export type viewsUpdateInput = {
    feed_id?: BigIntFieldUpdateOperationsInput | bigint | number
    viewed_by?: BigIntFieldUpdateOperationsInput | bigint | number
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type viewsUncheckedUpdateInput = {
    feed_id?: BigIntFieldUpdateOperationsInput | bigint | number
    viewed_by?: BigIntFieldUpdateOperationsInput | bigint | number
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type viewsCreateManyInput = {
    feed_id: bigint | number
    viewed_by: bigint | number
    created_datetime?: Date | string | null
  }

  export type viewsUpdateManyMutationInput = {
    feed_id?: BigIntFieldUpdateOperationsInput | bigint | number
    viewed_by?: BigIntFieldUpdateOperationsInput | bigint | number
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type viewsUncheckedUpdateManyInput = {
    feed_id?: BigIntFieldUpdateOperationsInput | bigint | number
    viewed_by?: BigIntFieldUpdateOperationsInput | bigint | number
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelevanceInput = {
    fields: AccountOrderByRelevanceFieldEnum | AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires_at?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Feed_ai_toolListRelationFilter = {
    every?: feed_ai_toolWhereInput
    some?: feed_ai_toolWhereInput
    none?: feed_ai_toolWhereInput
  }

  export type feed_ai_toolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ai_tool_mstrOrderByRelevanceInput = {
    fields: ai_tool_mstrOrderByRelevanceFieldEnum | ai_tool_mstrOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ai_tool_mstrCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
  }

  export type ai_tool_mstrAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ai_tool_mstrMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
  }

  export type ai_tool_mstrMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
  }

  export type ai_tool_mstrSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type blocked_commentsComment_idUser_idCompoundUniqueInput = {
    comment_id: bigint | number
    user_id: bigint | number
  }

  export type blocked_commentsCountOrderByAggregateInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
  }

  export type blocked_commentsAvgOrderByAggregateInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
  }

  export type blocked_commentsMaxOrderByAggregateInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
  }

  export type blocked_commentsMinOrderByAggregateInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
  }

  export type blocked_commentsSumOrderByAggregateInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type comment_reactionComment_idReacted_byCompoundUniqueInput = {
    comment_id: bigint | number
    reacted_by: bigint | number
  }

  export type comment_reactionCountOrderByAggregateInput = {
    comment_id?: SortOrder
    reacted_by?: SortOrder
    created_datetime?: SortOrder
  }

  export type comment_reactionAvgOrderByAggregateInput = {
    comment_id?: SortOrder
    reacted_by?: SortOrder
  }

  export type comment_reactionMaxOrderByAggregateInput = {
    comment_id?: SortOrder
    reacted_by?: SortOrder
    created_datetime?: SortOrder
  }

  export type comment_reactionMinOrderByAggregateInput = {
    comment_id?: SortOrder
    reacted_by?: SortOrder
    created_datetime?: SortOrder
  }

  export type comment_reactionSumOrderByAggregateInput = {
    comment_id?: SortOrder
    reacted_by?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type comment_replyOrderByRelevanceInput = {
    fields: comment_replyOrderByRelevanceFieldEnum | comment_replyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type comment_replyCountOrderByAggregateInput = {
    reply_id?: SortOrder
    comment_id?: SortOrder
    reply_by?: SortOrder
    reply?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
    total_reaction?: SortOrder
  }

  export type comment_replyAvgOrderByAggregateInput = {
    reply_id?: SortOrder
    comment_id?: SortOrder
    reply_by?: SortOrder
    total_reaction?: SortOrder
  }

  export type comment_replyMaxOrderByAggregateInput = {
    reply_id?: SortOrder
    comment_id?: SortOrder
    reply_by?: SortOrder
    reply?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
    total_reaction?: SortOrder
  }

  export type comment_replyMinOrderByAggregateInput = {
    reply_id?: SortOrder
    comment_id?: SortOrder
    reply_by?: SortOrder
    reply?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
    total_reaction?: SortOrder
  }

  export type comment_replySumOrderByAggregateInput = {
    reply_id?: SortOrder
    comment_id?: SortOrder
    reply_by?: SortOrder
    total_reaction?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type comment_reply_reactionReply_idReacted_byCompoundUniqueInput = {
    reply_id: bigint | number
    reacted_by: bigint | number
  }

  export type comment_reply_reactionCountOrderByAggregateInput = {
    reply_id?: SortOrder
    reacted_by?: SortOrder
    created_datetime?: SortOrder
  }

  export type comment_reply_reactionAvgOrderByAggregateInput = {
    reply_id?: SortOrder
    reacted_by?: SortOrder
  }

  export type comment_reply_reactionMaxOrderByAggregateInput = {
    reply_id?: SortOrder
    reacted_by?: SortOrder
    created_datetime?: SortOrder
  }

  export type comment_reply_reactionMinOrderByAggregateInput = {
    reply_id?: SortOrder
    reacted_by?: SortOrder
    created_datetime?: SortOrder
  }

  export type comment_reply_reactionSumOrderByAggregateInput = {
    reply_id?: SortOrder
    reacted_by?: SortOrder
  }

  export type commentsOrderByRelevanceInput = {
    fields: commentsOrderByRelevanceFieldEnum | commentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type commentsCountOrderByAggregateInput = {
    comment_id?: SortOrder
    feed_id?: SortOrder
    comment_by?: SortOrder
    comment?: SortOrder
    total_reaction?: SortOrder
    total_reply?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    comment_id?: SortOrder
    feed_id?: SortOrder
    comment_by?: SortOrder
    total_reaction?: SortOrder
    total_reply?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    comment_id?: SortOrder
    feed_id?: SortOrder
    comment_by?: SortOrder
    comment?: SortOrder
    total_reaction?: SortOrder
    total_reply?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    comment_id?: SortOrder
    feed_id?: SortOrder
    comment_by?: SortOrder
    comment?: SortOrder
    total_reaction?: SortOrder
    total_reply?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    comment_id?: SortOrder
    feed_id?: SortOrder
    comment_by?: SortOrder
    total_reaction?: SortOrder
    total_reply?: SortOrder
  }

  export type email_otp_verificationOrderByRelevanceInput = {
    fields: email_otp_verificationOrderByRelevanceFieldEnum | email_otp_verificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type email_otp_verificationCountOrderByAggregateInput = {
    email_id?: SortOrder
    OTP?: SortOrder
  }

  export type email_otp_verificationMaxOrderByAggregateInput = {
    email_id?: SortOrder
    OTP?: SortOrder
  }

  export type email_otp_verificationMinOrderByAggregateInput = {
    email_id?: SortOrder
    OTP?: SortOrder
  }

  export type Ai_tool_mstrScalarRelationFilter = {
    is?: ai_tool_mstrWhereInput
    isNot?: ai_tool_mstrWhereInput
  }

  export type FeedsScalarRelationFilter = {
    is?: feedsWhereInput
    isNot?: feedsWhereInput
  }

  export type feed_ai_toolFeed_idAi_tool_idCompoundUniqueInput = {
    feed_id: bigint | number
    ai_tool_id: number
  }

  export type feed_ai_toolCountOrderByAggregateInput = {
    feed_id?: SortOrder
    ai_tool_id?: SortOrder
  }

  export type feed_ai_toolAvgOrderByAggregateInput = {
    feed_id?: SortOrder
    ai_tool_id?: SortOrder
  }

  export type feed_ai_toolMaxOrderByAggregateInput = {
    feed_id?: SortOrder
    ai_tool_id?: SortOrder
  }

  export type feed_ai_toolMinOrderByAggregateInput = {
    feed_id?: SortOrder
    ai_tool_id?: SortOrder
  }

  export type feed_ai_toolSumOrderByAggregateInput = {
    feed_id?: SortOrder
    ai_tool_id?: SortOrder
  }

  export type Enumfeeds_feed_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.feeds_feed_type | Enumfeeds_feed_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.feeds_feed_type[] | null
    notIn?: $Enums.feeds_feed_type[] | null
    not?: NestedEnumfeeds_feed_typeNullableFilter<$PrismaModel> | $Enums.feeds_feed_type | null
  }

  export type feedsOrderByRelevanceInput = {
    fields: feedsOrderByRelevanceFieldEnum | feedsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type feedsCountOrderByAggregateInput = {
    id?: SortOrder
    feed_uuid?: SortOrder
    user_id?: SortOrder
    caption?: SortOrder
    description?: SortOrder
    prompt?: SortOrder
    feed_type?: SortOrder
    generated_text?: SortOrder
    is_deleted?: SortOrder
    total_views_count?: SortOrder
    total_likes_count?: SortOrder
    total_comments_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type feedsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_views_count?: SortOrder
    total_likes_count?: SortOrder
    total_comments_count?: SortOrder
  }

  export type feedsMaxOrderByAggregateInput = {
    id?: SortOrder
    feed_uuid?: SortOrder
    user_id?: SortOrder
    caption?: SortOrder
    description?: SortOrder
    prompt?: SortOrder
    feed_type?: SortOrder
    generated_text?: SortOrder
    is_deleted?: SortOrder
    total_views_count?: SortOrder
    total_likes_count?: SortOrder
    total_comments_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type feedsMinOrderByAggregateInput = {
    id?: SortOrder
    feed_uuid?: SortOrder
    user_id?: SortOrder
    caption?: SortOrder
    description?: SortOrder
    prompt?: SortOrder
    feed_type?: SortOrder
    generated_text?: SortOrder
    is_deleted?: SortOrder
    total_views_count?: SortOrder
    total_likes_count?: SortOrder
    total_comments_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type feedsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_views_count?: SortOrder
    total_likes_count?: SortOrder
    total_comments_count?: SortOrder
  }

  export type Enumfeeds_feed_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.feeds_feed_type | Enumfeeds_feed_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.feeds_feed_type[] | null
    notIn?: $Enums.feeds_feed_type[] | null
    not?: NestedEnumfeeds_feed_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.feeds_feed_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfeeds_feed_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumfeeds_feed_typeNullableFilter<$PrismaModel>
  }

  export type reactionsFeed_idReacted_byCompoundUniqueInput = {
    feed_id: bigint | number
    reacted_by: bigint | number
  }

  export type reactionsCountOrderByAggregateInput = {
    feed_id?: SortOrder
    reacted_by?: SortOrder
    created_datetime?: SortOrder
  }

  export type reactionsAvgOrderByAggregateInput = {
    feed_id?: SortOrder
    reacted_by?: SortOrder
  }

  export type reactionsMaxOrderByAggregateInput = {
    feed_id?: SortOrder
    reacted_by?: SortOrder
    created_datetime?: SortOrder
  }

  export type reactionsMinOrderByAggregateInput = {
    feed_id?: SortOrder
    reacted_by?: SortOrder
    created_datetime?: SortOrder
  }

  export type reactionsSumOrderByAggregateInput = {
    feed_id?: SortOrder
    reacted_by?: SortOrder
  }

  export type report_feedsOrderByRelevanceInput = {
    fields: report_feedsOrderByRelevanceFieldEnum | report_feedsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type report_feedsFeed_idBlocked_byCompoundUniqueInput = {
    feed_id: bigint | number
    blocked_by: bigint | number
  }

  export type report_feedsCountOrderByAggregateInput = {
    feed_id?: SortOrder
    blocked_by?: SortOrder
    message?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
  }

  export type report_feedsAvgOrderByAggregateInput = {
    feed_id?: SortOrder
    blocked_by?: SortOrder
  }

  export type report_feedsMaxOrderByAggregateInput = {
    feed_id?: SortOrder
    blocked_by?: SortOrder
    message?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
  }

  export type report_feedsMinOrderByAggregateInput = {
    feed_id?: SortOrder
    blocked_by?: SortOrder
    message?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
  }

  export type report_feedsSumOrderByAggregateInput = {
    feed_id?: SortOrder
    blocked_by?: SortOrder
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    uuhid?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    auth_key?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    uuhid?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    auth_key?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    uuhid?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    auth_key?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type viewsViewed_byFeed_idCompoundUniqueInput = {
    viewed_by: bigint | number
    feed_id: bigint | number
  }

  export type viewsCountOrderByAggregateInput = {
    feed_id?: SortOrder
    viewed_by?: SortOrder
    created_datetime?: SortOrder
  }

  export type viewsAvgOrderByAggregateInput = {
    feed_id?: SortOrder
    viewed_by?: SortOrder
  }

  export type viewsMaxOrderByAggregateInput = {
    feed_id?: SortOrder
    viewed_by?: SortOrder
    created_datetime?: SortOrder
  }

  export type viewsMinOrderByAggregateInput = {
    feed_id?: SortOrder
    viewed_by?: SortOrder
    created_datetime?: SortOrder
  }

  export type viewsSumOrderByAggregateInput = {
    feed_id?: SortOrder
    viewed_by?: SortOrder
  }

  export type usersCreateNestedOneWithoutAccountInput = {
    create?: XOR<usersCreateWithoutAccountInput, usersUncheckedCreateWithoutAccountInput>
    connectOrCreate?: usersCreateOrConnectWithoutAccountInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<usersCreateWithoutAccountInput, usersUncheckedCreateWithoutAccountInput>
    connectOrCreate?: usersCreateOrConnectWithoutAccountInput
    upsert?: usersUpsertWithoutAccountInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAccountInput, usersUpdateWithoutAccountInput>, usersUncheckedUpdateWithoutAccountInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type feed_ai_toolCreateNestedManyWithoutAi_tool_mstrInput = {
    create?: XOR<feed_ai_toolCreateWithoutAi_tool_mstrInput, feed_ai_toolUncheckedCreateWithoutAi_tool_mstrInput> | feed_ai_toolCreateWithoutAi_tool_mstrInput[] | feed_ai_toolUncheckedCreateWithoutAi_tool_mstrInput[]
    connectOrCreate?: feed_ai_toolCreateOrConnectWithoutAi_tool_mstrInput | feed_ai_toolCreateOrConnectWithoutAi_tool_mstrInput[]
    createMany?: feed_ai_toolCreateManyAi_tool_mstrInputEnvelope
    connect?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
  }

  export type feed_ai_toolUncheckedCreateNestedManyWithoutAi_tool_mstrInput = {
    create?: XOR<feed_ai_toolCreateWithoutAi_tool_mstrInput, feed_ai_toolUncheckedCreateWithoutAi_tool_mstrInput> | feed_ai_toolCreateWithoutAi_tool_mstrInput[] | feed_ai_toolUncheckedCreateWithoutAi_tool_mstrInput[]
    connectOrCreate?: feed_ai_toolCreateOrConnectWithoutAi_tool_mstrInput | feed_ai_toolCreateOrConnectWithoutAi_tool_mstrInput[]
    createMany?: feed_ai_toolCreateManyAi_tool_mstrInputEnvelope
    connect?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type feed_ai_toolUpdateManyWithoutAi_tool_mstrNestedInput = {
    create?: XOR<feed_ai_toolCreateWithoutAi_tool_mstrInput, feed_ai_toolUncheckedCreateWithoutAi_tool_mstrInput> | feed_ai_toolCreateWithoutAi_tool_mstrInput[] | feed_ai_toolUncheckedCreateWithoutAi_tool_mstrInput[]
    connectOrCreate?: feed_ai_toolCreateOrConnectWithoutAi_tool_mstrInput | feed_ai_toolCreateOrConnectWithoutAi_tool_mstrInput[]
    upsert?: feed_ai_toolUpsertWithWhereUniqueWithoutAi_tool_mstrInput | feed_ai_toolUpsertWithWhereUniqueWithoutAi_tool_mstrInput[]
    createMany?: feed_ai_toolCreateManyAi_tool_mstrInputEnvelope
    set?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
    disconnect?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
    delete?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
    connect?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
    update?: feed_ai_toolUpdateWithWhereUniqueWithoutAi_tool_mstrInput | feed_ai_toolUpdateWithWhereUniqueWithoutAi_tool_mstrInput[]
    updateMany?: feed_ai_toolUpdateManyWithWhereWithoutAi_tool_mstrInput | feed_ai_toolUpdateManyWithWhereWithoutAi_tool_mstrInput[]
    deleteMany?: feed_ai_toolScalarWhereInput | feed_ai_toolScalarWhereInput[]
  }

  export type feed_ai_toolUncheckedUpdateManyWithoutAi_tool_mstrNestedInput = {
    create?: XOR<feed_ai_toolCreateWithoutAi_tool_mstrInput, feed_ai_toolUncheckedCreateWithoutAi_tool_mstrInput> | feed_ai_toolCreateWithoutAi_tool_mstrInput[] | feed_ai_toolUncheckedCreateWithoutAi_tool_mstrInput[]
    connectOrCreate?: feed_ai_toolCreateOrConnectWithoutAi_tool_mstrInput | feed_ai_toolCreateOrConnectWithoutAi_tool_mstrInput[]
    upsert?: feed_ai_toolUpsertWithWhereUniqueWithoutAi_tool_mstrInput | feed_ai_toolUpsertWithWhereUniqueWithoutAi_tool_mstrInput[]
    createMany?: feed_ai_toolCreateManyAi_tool_mstrInputEnvelope
    set?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
    disconnect?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
    delete?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
    connect?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
    update?: feed_ai_toolUpdateWithWhereUniqueWithoutAi_tool_mstrInput | feed_ai_toolUpdateWithWhereUniqueWithoutAi_tool_mstrInput[]
    updateMany?: feed_ai_toolUpdateManyWithWhereWithoutAi_tool_mstrInput | feed_ai_toolUpdateManyWithWhereWithoutAi_tool_mstrInput[]
    deleteMany?: feed_ai_toolScalarWhereInput | feed_ai_toolScalarWhereInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ai_tool_mstrCreateNestedOneWithoutFeed_ai_toolInput = {
    create?: XOR<ai_tool_mstrCreateWithoutFeed_ai_toolInput, ai_tool_mstrUncheckedCreateWithoutFeed_ai_toolInput>
    connectOrCreate?: ai_tool_mstrCreateOrConnectWithoutFeed_ai_toolInput
    connect?: ai_tool_mstrWhereUniqueInput
  }

  export type feedsCreateNestedOneWithoutFeed_ai_toolInput = {
    create?: XOR<feedsCreateWithoutFeed_ai_toolInput, feedsUncheckedCreateWithoutFeed_ai_toolInput>
    connectOrCreate?: feedsCreateOrConnectWithoutFeed_ai_toolInput
    connect?: feedsWhereUniqueInput
  }

  export type ai_tool_mstrUpdateOneRequiredWithoutFeed_ai_toolNestedInput = {
    create?: XOR<ai_tool_mstrCreateWithoutFeed_ai_toolInput, ai_tool_mstrUncheckedCreateWithoutFeed_ai_toolInput>
    connectOrCreate?: ai_tool_mstrCreateOrConnectWithoutFeed_ai_toolInput
    upsert?: ai_tool_mstrUpsertWithoutFeed_ai_toolInput
    connect?: ai_tool_mstrWhereUniqueInput
    update?: XOR<XOR<ai_tool_mstrUpdateToOneWithWhereWithoutFeed_ai_toolInput, ai_tool_mstrUpdateWithoutFeed_ai_toolInput>, ai_tool_mstrUncheckedUpdateWithoutFeed_ai_toolInput>
  }

  export type feedsUpdateOneRequiredWithoutFeed_ai_toolNestedInput = {
    create?: XOR<feedsCreateWithoutFeed_ai_toolInput, feedsUncheckedCreateWithoutFeed_ai_toolInput>
    connectOrCreate?: feedsCreateOrConnectWithoutFeed_ai_toolInput
    upsert?: feedsUpsertWithoutFeed_ai_toolInput
    connect?: feedsWhereUniqueInput
    update?: XOR<XOR<feedsUpdateToOneWithWhereWithoutFeed_ai_toolInput, feedsUpdateWithoutFeed_ai_toolInput>, feedsUncheckedUpdateWithoutFeed_ai_toolInput>
  }

  export type feed_ai_toolCreateNestedManyWithoutFeedsInput = {
    create?: XOR<feed_ai_toolCreateWithoutFeedsInput, feed_ai_toolUncheckedCreateWithoutFeedsInput> | feed_ai_toolCreateWithoutFeedsInput[] | feed_ai_toolUncheckedCreateWithoutFeedsInput[]
    connectOrCreate?: feed_ai_toolCreateOrConnectWithoutFeedsInput | feed_ai_toolCreateOrConnectWithoutFeedsInput[]
    createMany?: feed_ai_toolCreateManyFeedsInputEnvelope
    connect?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
  }

  export type feed_ai_toolUncheckedCreateNestedManyWithoutFeedsInput = {
    create?: XOR<feed_ai_toolCreateWithoutFeedsInput, feed_ai_toolUncheckedCreateWithoutFeedsInput> | feed_ai_toolCreateWithoutFeedsInput[] | feed_ai_toolUncheckedCreateWithoutFeedsInput[]
    connectOrCreate?: feed_ai_toolCreateOrConnectWithoutFeedsInput | feed_ai_toolCreateOrConnectWithoutFeedsInput[]
    createMany?: feed_ai_toolCreateManyFeedsInputEnvelope
    connect?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
  }

  export type NullableEnumfeeds_feed_typeFieldUpdateOperationsInput = {
    set?: $Enums.feeds_feed_type | null
  }

  export type feed_ai_toolUpdateManyWithoutFeedsNestedInput = {
    create?: XOR<feed_ai_toolCreateWithoutFeedsInput, feed_ai_toolUncheckedCreateWithoutFeedsInput> | feed_ai_toolCreateWithoutFeedsInput[] | feed_ai_toolUncheckedCreateWithoutFeedsInput[]
    connectOrCreate?: feed_ai_toolCreateOrConnectWithoutFeedsInput | feed_ai_toolCreateOrConnectWithoutFeedsInput[]
    upsert?: feed_ai_toolUpsertWithWhereUniqueWithoutFeedsInput | feed_ai_toolUpsertWithWhereUniqueWithoutFeedsInput[]
    createMany?: feed_ai_toolCreateManyFeedsInputEnvelope
    set?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
    disconnect?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
    delete?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
    connect?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
    update?: feed_ai_toolUpdateWithWhereUniqueWithoutFeedsInput | feed_ai_toolUpdateWithWhereUniqueWithoutFeedsInput[]
    updateMany?: feed_ai_toolUpdateManyWithWhereWithoutFeedsInput | feed_ai_toolUpdateManyWithWhereWithoutFeedsInput[]
    deleteMany?: feed_ai_toolScalarWhereInput | feed_ai_toolScalarWhereInput[]
  }

  export type feed_ai_toolUncheckedUpdateManyWithoutFeedsNestedInput = {
    create?: XOR<feed_ai_toolCreateWithoutFeedsInput, feed_ai_toolUncheckedCreateWithoutFeedsInput> | feed_ai_toolCreateWithoutFeedsInput[] | feed_ai_toolUncheckedCreateWithoutFeedsInput[]
    connectOrCreate?: feed_ai_toolCreateOrConnectWithoutFeedsInput | feed_ai_toolCreateOrConnectWithoutFeedsInput[]
    upsert?: feed_ai_toolUpsertWithWhereUniqueWithoutFeedsInput | feed_ai_toolUpsertWithWhereUniqueWithoutFeedsInput[]
    createMany?: feed_ai_toolCreateManyFeedsInputEnvelope
    set?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
    disconnect?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
    delete?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
    connect?: feed_ai_toolWhereUniqueInput | feed_ai_toolWhereUniqueInput[]
    update?: feed_ai_toolUpdateWithWhereUniqueWithoutFeedsInput | feed_ai_toolUpdateWithWhereUniqueWithoutFeedsInput[]
    updateMany?: feed_ai_toolUpdateManyWithWhereWithoutFeedsInput | feed_ai_toolUpdateManyWithWhereWithoutFeedsInput[]
    deleteMany?: feed_ai_toolScalarWhereInput | feed_ai_toolScalarWhereInput[]
  }

  export type AccountCreateNestedManyWithoutUsersInput = {
    create?: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput> | AccountCreateWithoutUsersInput[] | AccountUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUsersInput | AccountCreateOrConnectWithoutUsersInput[]
    createMany?: AccountCreateManyUsersInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput> | AccountCreateWithoutUsersInput[] | AccountUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUsersInput | AccountCreateOrConnectWithoutUsersInput[]
    createMany?: AccountCreateManyUsersInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AccountUpdateManyWithoutUsersNestedInput = {
    create?: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput> | AccountCreateWithoutUsersInput[] | AccountUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUsersInput | AccountCreateOrConnectWithoutUsersInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUsersInput | AccountUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: AccountCreateManyUsersInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUsersInput | AccountUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUsersInput | AccountUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput> | AccountCreateWithoutUsersInput[] | AccountUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUsersInput | AccountCreateOrConnectWithoutUsersInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUsersInput | AccountUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: AccountCreateManyUsersInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUsersInput | AccountUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUsersInput | AccountUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumfeeds_feed_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.feeds_feed_type | Enumfeeds_feed_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.feeds_feed_type[] | null
    notIn?: $Enums.feeds_feed_type[] | null
    not?: NestedEnumfeeds_feed_typeNullableFilter<$PrismaModel> | $Enums.feeds_feed_type | null
  }

  export type NestedEnumfeeds_feed_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.feeds_feed_type | Enumfeeds_feed_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.feeds_feed_type[] | null
    notIn?: $Enums.feeds_feed_type[] | null
    not?: NestedEnumfeeds_feed_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.feeds_feed_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfeeds_feed_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumfeeds_feed_typeNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutAccountInput = {
    uuhid: string
    first_name: string
    last_name: string
    username: string
    email: string
    password: string
    auth_key?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUncheckedCreateWithoutAccountInput = {
    id?: number
    uuhid: string
    first_name: string
    last_name: string
    username: string
    email: string
    password: string
    auth_key?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersCreateOrConnectWithoutAccountInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAccountInput, usersUncheckedCreateWithoutAccountInput>
  }

  export type usersUpsertWithoutAccountInput = {
    update: XOR<usersUpdateWithoutAccountInput, usersUncheckedUpdateWithoutAccountInput>
    create: XOR<usersCreateWithoutAccountInput, usersUncheckedCreateWithoutAccountInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAccountInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAccountInput, usersUncheckedUpdateWithoutAccountInput>
  }

  export type usersUpdateWithoutAccountInput = {
    uuhid?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    auth_key?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuhid?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    auth_key?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type feed_ai_toolCreateWithoutAi_tool_mstrInput = {
    feeds: feedsCreateNestedOneWithoutFeed_ai_toolInput
  }

  export type feed_ai_toolUncheckedCreateWithoutAi_tool_mstrInput = {
    feed_id: bigint | number
  }

  export type feed_ai_toolCreateOrConnectWithoutAi_tool_mstrInput = {
    where: feed_ai_toolWhereUniqueInput
    create: XOR<feed_ai_toolCreateWithoutAi_tool_mstrInput, feed_ai_toolUncheckedCreateWithoutAi_tool_mstrInput>
  }

  export type feed_ai_toolCreateManyAi_tool_mstrInputEnvelope = {
    data: feed_ai_toolCreateManyAi_tool_mstrInput | feed_ai_toolCreateManyAi_tool_mstrInput[]
    skipDuplicates?: boolean
  }

  export type feed_ai_toolUpsertWithWhereUniqueWithoutAi_tool_mstrInput = {
    where: feed_ai_toolWhereUniqueInput
    update: XOR<feed_ai_toolUpdateWithoutAi_tool_mstrInput, feed_ai_toolUncheckedUpdateWithoutAi_tool_mstrInput>
    create: XOR<feed_ai_toolCreateWithoutAi_tool_mstrInput, feed_ai_toolUncheckedCreateWithoutAi_tool_mstrInput>
  }

  export type feed_ai_toolUpdateWithWhereUniqueWithoutAi_tool_mstrInput = {
    where: feed_ai_toolWhereUniqueInput
    data: XOR<feed_ai_toolUpdateWithoutAi_tool_mstrInput, feed_ai_toolUncheckedUpdateWithoutAi_tool_mstrInput>
  }

  export type feed_ai_toolUpdateManyWithWhereWithoutAi_tool_mstrInput = {
    where: feed_ai_toolScalarWhereInput
    data: XOR<feed_ai_toolUpdateManyMutationInput, feed_ai_toolUncheckedUpdateManyWithoutAi_tool_mstrInput>
  }

  export type feed_ai_toolScalarWhereInput = {
    AND?: feed_ai_toolScalarWhereInput | feed_ai_toolScalarWhereInput[]
    OR?: feed_ai_toolScalarWhereInput[]
    NOT?: feed_ai_toolScalarWhereInput | feed_ai_toolScalarWhereInput[]
    feed_id?: BigIntFilter<"feed_ai_tool"> | bigint | number
    ai_tool_id?: IntFilter<"feed_ai_tool"> | number
  }

  export type ai_tool_mstrCreateWithoutFeed_ai_toolInput = {
    name: string
    is_active?: boolean | null
    created_datetime?: Date | string | null
    updated_datetime?: Date | string | null
  }

  export type ai_tool_mstrUncheckedCreateWithoutFeed_ai_toolInput = {
    id?: number
    name: string
    is_active?: boolean | null
    created_datetime?: Date | string | null
    updated_datetime?: Date | string | null
  }

  export type ai_tool_mstrCreateOrConnectWithoutFeed_ai_toolInput = {
    where: ai_tool_mstrWhereUniqueInput
    create: XOR<ai_tool_mstrCreateWithoutFeed_ai_toolInput, ai_tool_mstrUncheckedCreateWithoutFeed_ai_toolInput>
  }

  export type feedsCreateWithoutFeed_ai_toolInput = {
    id?: bigint | number
    feed_uuid: string
    user_id: bigint | number
    caption?: string | null
    description?: string | null
    prompt?: string | null
    feed_type?: $Enums.feeds_feed_type | null
    generated_text?: string | null
    is_deleted?: boolean | null
    total_views_count?: bigint | number | null
    total_likes_count?: bigint | number | null
    total_comments_count?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type feedsUncheckedCreateWithoutFeed_ai_toolInput = {
    id?: bigint | number
    feed_uuid: string
    user_id: bigint | number
    caption?: string | null
    description?: string | null
    prompt?: string | null
    feed_type?: $Enums.feeds_feed_type | null
    generated_text?: string | null
    is_deleted?: boolean | null
    total_views_count?: bigint | number | null
    total_likes_count?: bigint | number | null
    total_comments_count?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type feedsCreateOrConnectWithoutFeed_ai_toolInput = {
    where: feedsWhereUniqueInput
    create: XOR<feedsCreateWithoutFeed_ai_toolInput, feedsUncheckedCreateWithoutFeed_ai_toolInput>
  }

  export type ai_tool_mstrUpsertWithoutFeed_ai_toolInput = {
    update: XOR<ai_tool_mstrUpdateWithoutFeed_ai_toolInput, ai_tool_mstrUncheckedUpdateWithoutFeed_ai_toolInput>
    create: XOR<ai_tool_mstrCreateWithoutFeed_ai_toolInput, ai_tool_mstrUncheckedCreateWithoutFeed_ai_toolInput>
    where?: ai_tool_mstrWhereInput
  }

  export type ai_tool_mstrUpdateToOneWithWhereWithoutFeed_ai_toolInput = {
    where?: ai_tool_mstrWhereInput
    data: XOR<ai_tool_mstrUpdateWithoutFeed_ai_toolInput, ai_tool_mstrUncheckedUpdateWithoutFeed_ai_toolInput>
  }

  export type ai_tool_mstrUpdateWithoutFeed_ai_toolInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_tool_mstrUncheckedUpdateWithoutFeed_ai_toolInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type feedsUpsertWithoutFeed_ai_toolInput = {
    update: XOR<feedsUpdateWithoutFeed_ai_toolInput, feedsUncheckedUpdateWithoutFeed_ai_toolInput>
    create: XOR<feedsCreateWithoutFeed_ai_toolInput, feedsUncheckedCreateWithoutFeed_ai_toolInput>
    where?: feedsWhereInput
  }

  export type feedsUpdateToOneWithWhereWithoutFeed_ai_toolInput = {
    where?: feedsWhereInput
    data: XOR<feedsUpdateWithoutFeed_ai_toolInput, feedsUncheckedUpdateWithoutFeed_ai_toolInput>
  }

  export type feedsUpdateWithoutFeed_ai_toolInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    feed_uuid?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    feed_type?: NullableEnumfeeds_feed_typeFieldUpdateOperationsInput | $Enums.feeds_feed_type | null
    generated_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_views_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_likes_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_comments_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type feedsUncheckedUpdateWithoutFeed_ai_toolInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    feed_uuid?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    feed_type?: NullableEnumfeeds_feed_typeFieldUpdateOperationsInput | $Enums.feeds_feed_type | null
    generated_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_views_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_likes_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_comments_count?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type feed_ai_toolCreateWithoutFeedsInput = {
    ai_tool_mstr: ai_tool_mstrCreateNestedOneWithoutFeed_ai_toolInput
  }

  export type feed_ai_toolUncheckedCreateWithoutFeedsInput = {
    ai_tool_id: number
  }

  export type feed_ai_toolCreateOrConnectWithoutFeedsInput = {
    where: feed_ai_toolWhereUniqueInput
    create: XOR<feed_ai_toolCreateWithoutFeedsInput, feed_ai_toolUncheckedCreateWithoutFeedsInput>
  }

  export type feed_ai_toolCreateManyFeedsInputEnvelope = {
    data: feed_ai_toolCreateManyFeedsInput | feed_ai_toolCreateManyFeedsInput[]
    skipDuplicates?: boolean
  }

  export type feed_ai_toolUpsertWithWhereUniqueWithoutFeedsInput = {
    where: feed_ai_toolWhereUniqueInput
    update: XOR<feed_ai_toolUpdateWithoutFeedsInput, feed_ai_toolUncheckedUpdateWithoutFeedsInput>
    create: XOR<feed_ai_toolCreateWithoutFeedsInput, feed_ai_toolUncheckedCreateWithoutFeedsInput>
  }

  export type feed_ai_toolUpdateWithWhereUniqueWithoutFeedsInput = {
    where: feed_ai_toolWhereUniqueInput
    data: XOR<feed_ai_toolUpdateWithoutFeedsInput, feed_ai_toolUncheckedUpdateWithoutFeedsInput>
  }

  export type feed_ai_toolUpdateManyWithWhereWithoutFeedsInput = {
    where: feed_ai_toolScalarWhereInput
    data: XOR<feed_ai_toolUpdateManyMutationInput, feed_ai_toolUncheckedUpdateManyWithoutFeedsInput>
  }

  export type AccountCreateWithoutUsersInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUsersInput = {
    id?: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUsersInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput>
  }

  export type AccountCreateManyUsersInputEnvelope = {
    data: AccountCreateManyUsersInput | AccountCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUsersInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUsersInput, AccountUncheckedUpdateWithoutUsersInput>
    create: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUsersInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUsersInput, AccountUncheckedUpdateWithoutUsersInput>
  }

  export type AccountUpdateManyWithWhereWithoutUsersInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUsersInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: IntFilter<"Account"> | number
    userId?: IntFilter<"Account"> | number
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type feed_ai_toolCreateManyAi_tool_mstrInput = {
    feed_id: bigint | number
  }

  export type feed_ai_toolUpdateWithoutAi_tool_mstrInput = {
    feeds?: feedsUpdateOneRequiredWithoutFeed_ai_toolNestedInput
  }

  export type feed_ai_toolUncheckedUpdateWithoutAi_tool_mstrInput = {
    feed_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type feed_ai_toolUncheckedUpdateManyWithoutAi_tool_mstrInput = {
    feed_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type feed_ai_toolCreateManyFeedsInput = {
    ai_tool_id: number
  }

  export type feed_ai_toolUpdateWithoutFeedsInput = {
    ai_tool_mstr?: ai_tool_mstrUpdateOneRequiredWithoutFeed_ai_toolNestedInput
  }

  export type feed_ai_toolUncheckedUpdateWithoutFeedsInput = {
    ai_tool_id?: IntFieldUpdateOperationsInput | number
  }

  export type feed_ai_toolUncheckedUpdateManyWithoutFeedsInput = {
    ai_tool_id?: IntFieldUpdateOperationsInput | number
  }

  export type AccountCreateManyUsersInput = {
    id?: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateWithoutUsersInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}