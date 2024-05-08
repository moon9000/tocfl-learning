
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
 * Model Animes
 * 
 */
export type Animes = $Result.DefaultSelection<Prisma.$AnimesPayload>
/**
 * Model Songs
 * 
 */
export type Songs = $Result.DefaultSelection<Prisma.$SongsPayload>
/**
 * Model postgres
 * 
 */
export type postgres = $Result.DefaultSelection<Prisma.$postgresPayload>
/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model tocf_learning
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type tocf_learning = $Result.DefaultSelection<Prisma.$tocf_learningPayload>
/**
 * Model tocfl_learning
 * 
 */
export type tocfl_learning = $Result.DefaultSelection<Prisma.$tocfl_learningPayload>
/**
 * Model user_roles
 * 
 */
export type user_roles = $Result.DefaultSelection<Prisma.$user_rolesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Animes
 * const animes = await prisma.animes.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Animes
   * const animes = await prisma.animes.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.animes`: Exposes CRUD operations for the **Animes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Animes
    * const animes = await prisma.animes.findMany()
    * ```
    */
  get animes(): Prisma.AnimesDelegate<ExtArgs>;

  /**
   * `prisma.songs`: Exposes CRUD operations for the **Songs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.songs.findMany()
    * ```
    */
  get songs(): Prisma.SongsDelegate<ExtArgs>;

  /**
   * `prisma.postgres`: Exposes CRUD operations for the **postgres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Postgres
    * const postgres = await prisma.postgres.findMany()
    * ```
    */
  get postgres(): Prisma.postgresDelegate<ExtArgs>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs>;

  /**
   * `prisma.tocf_learning`: Exposes CRUD operations for the **tocf_learning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tocf_learnings
    * const tocf_learnings = await prisma.tocf_learning.findMany()
    * ```
    */
  get tocf_learning(): Prisma.tocf_learningDelegate<ExtArgs>;

  /**
   * `prisma.tocfl_learning`: Exposes CRUD operations for the **tocfl_learning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tocfl_learnings
    * const tocfl_learnings = await prisma.tocfl_learning.findMany()
    * ```
    */
  get tocfl_learning(): Prisma.tocfl_learningDelegate<ExtArgs>;

  /**
   * `prisma.user_roles`: Exposes CRUD operations for the **user_roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_roles
    * const user_roles = await prisma.user_roles.findMany()
    * ```
    */
  get user_roles(): Prisma.user_rolesDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Animes: 'Animes',
    Songs: 'Songs',
    postgres: 'postgres',
    roles: 'roles',
    tocf_learning: 'tocf_learning',
    tocfl_learning: 'tocfl_learning',
    user_roles: 'user_roles',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'animes' | 'songs' | 'postgres' | 'roles' | 'tocf_learning' | 'tocfl_learning' | 'user_roles' | 'users'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Animes: {
        payload: Prisma.$AnimesPayload<ExtArgs>
        fields: Prisma.AnimesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          findFirst: {
            args: Prisma.AnimesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          findMany: {
            args: Prisma.AnimesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>[]
          }
          create: {
            args: Prisma.AnimesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          createMany: {
            args: Prisma.AnimesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AnimesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          update: {
            args: Prisma.AnimesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          deleteMany: {
            args: Prisma.AnimesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AnimesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AnimesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          aggregate: {
            args: Prisma.AnimesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAnimes>
          }
          groupBy: {
            args: Prisma.AnimesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AnimesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimesCountArgs<ExtArgs>,
            result: $Utils.Optional<AnimesCountAggregateOutputType> | number
          }
        }
      }
      Songs: {
        payload: Prisma.$SongsPayload<ExtArgs>
        fields: Prisma.SongsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongsPayload>
          }
          findFirst: {
            args: Prisma.SongsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongsPayload>
          }
          findMany: {
            args: Prisma.SongsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongsPayload>[]
          }
          create: {
            args: Prisma.SongsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongsPayload>
          }
          createMany: {
            args: Prisma.SongsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SongsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongsPayload>
          }
          update: {
            args: Prisma.SongsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongsPayload>
          }
          deleteMany: {
            args: Prisma.SongsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SongsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SongsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongsPayload>
          }
          aggregate: {
            args: Prisma.SongsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSongs>
          }
          groupBy: {
            args: Prisma.SongsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SongsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongsCountArgs<ExtArgs>,
            result: $Utils.Optional<SongsCountAggregateOutputType> | number
          }
        }
      }
      postgres: {
        payload: Prisma.$postgresPayload<ExtArgs>
        fields: Prisma.postgresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postgresFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postgresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postgresFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postgresPayload>
          }
          findFirst: {
            args: Prisma.postgresFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postgresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postgresFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postgresPayload>
          }
          findMany: {
            args: Prisma.postgresFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postgresPayload>[]
          }
          create: {
            args: Prisma.postgresCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postgresPayload>
          }
          createMany: {
            args: Prisma.postgresCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.postgresDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postgresPayload>
          }
          update: {
            args: Prisma.postgresUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postgresPayload>
          }
          deleteMany: {
            args: Prisma.postgresDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.postgresUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.postgresUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postgresPayload>
          }
          aggregate: {
            args: Prisma.PostgresAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePostgres>
          }
          groupBy: {
            args: Prisma.postgresGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostgresGroupByOutputType>[]
          }
          count: {
            args: Prisma.postgresCountArgs<ExtArgs>,
            result: $Utils.Optional<PostgresCountAggregateOutputType> | number
          }
        }
      }
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>,
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      tocf_learning: {
        payload: Prisma.$tocf_learningPayload<ExtArgs>
        fields: Prisma.tocf_learningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tocf_learningFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocf_learningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tocf_learningFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocf_learningPayload>
          }
          findFirst: {
            args: Prisma.tocf_learningFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocf_learningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tocf_learningFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocf_learningPayload>
          }
          findMany: {
            args: Prisma.tocf_learningFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocf_learningPayload>[]
          }
          create: {
            args: Prisma.tocf_learningCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocf_learningPayload>
          }
          createMany: {
            args: Prisma.tocf_learningCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tocf_learningDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocf_learningPayload>
          }
          update: {
            args: Prisma.tocf_learningUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocf_learningPayload>
          }
          deleteMany: {
            args: Prisma.tocf_learningDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tocf_learningUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tocf_learningUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocf_learningPayload>
          }
          aggregate: {
            args: Prisma.Tocf_learningAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTocf_learning>
          }
          groupBy: {
            args: Prisma.tocf_learningGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tocf_learningGroupByOutputType>[]
          }
          count: {
            args: Prisma.tocf_learningCountArgs<ExtArgs>,
            result: $Utils.Optional<Tocf_learningCountAggregateOutputType> | number
          }
        }
      }
      tocfl_learning: {
        payload: Prisma.$tocfl_learningPayload<ExtArgs>
        fields: Prisma.tocfl_learningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tocfl_learningFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocfl_learningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tocfl_learningFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocfl_learningPayload>
          }
          findFirst: {
            args: Prisma.tocfl_learningFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocfl_learningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tocfl_learningFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocfl_learningPayload>
          }
          findMany: {
            args: Prisma.tocfl_learningFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocfl_learningPayload>[]
          }
          create: {
            args: Prisma.tocfl_learningCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocfl_learningPayload>
          }
          createMany: {
            args: Prisma.tocfl_learningCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tocfl_learningDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocfl_learningPayload>
          }
          update: {
            args: Prisma.tocfl_learningUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocfl_learningPayload>
          }
          deleteMany: {
            args: Prisma.tocfl_learningDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tocfl_learningUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tocfl_learningUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tocfl_learningPayload>
          }
          aggregate: {
            args: Prisma.Tocfl_learningAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTocfl_learning>
          }
          groupBy: {
            args: Prisma.tocfl_learningGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tocfl_learningGroupByOutputType>[]
          }
          count: {
            args: Prisma.tocfl_learningCountArgs<ExtArgs>,
            result: $Utils.Optional<Tocfl_learningCountAggregateOutputType> | number
          }
        }
      }
      user_roles: {
        payload: Prisma.$user_rolesPayload<ExtArgs>
        fields: Prisma.user_rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_rolesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_rolesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          findFirst: {
            args: Prisma.user_rolesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_rolesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          findMany: {
            args: Prisma.user_rolesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>[]
          }
          create: {
            args: Prisma.user_rolesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          createMany: {
            args: Prisma.user_rolesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.user_rolesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          update: {
            args: Prisma.user_rolesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          deleteMany: {
            args: Prisma.user_rolesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.user_rolesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.user_rolesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          aggregate: {
            args: Prisma.User_rolesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser_roles>
          }
          groupBy: {
            args: Prisma.user_rolesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<User_rolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_rolesCountArgs<ExtArgs>,
            result: $Utils.Optional<User_rolesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    user_roles: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_roles?: boolean | RolesCountOutputTypeCountUser_rolesArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUser_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_rolesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    user_roles: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_roles?: boolean | UsersCountOutputTypeCountUser_rolesArgs
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
  export type UsersCountOutputTypeCountUser_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_rolesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Animes
   */

  export type AggregateAnimes = {
    _count: AnimesCountAggregateOutputType | null
    _avg: AnimesAvgAggregateOutputType | null
    _sum: AnimesSumAggregateOutputType | null
    _min: AnimesMinAggregateOutputType | null
    _max: AnimesMaxAggregateOutputType | null
  }

  export type AnimesAvgAggregateOutputType = {
    id: number | null
  }

  export type AnimesSumAggregateOutputType = {
    id: number | null
  }

  export type AnimesMinAggregateOutputType = {
    id: number | null
    englishTitle: string | null
    japaneseTitle: string | null
    startDate: string | null
    endDate: string | null
    year: string | null
    subtype: string | null
    status: string | null
    posterImage: string | null
    episodeCount: string | null
    episodeLength: string | null
    totalLength: string | null
  }

  export type AnimesMaxAggregateOutputType = {
    id: number | null
    englishTitle: string | null
    japaneseTitle: string | null
    startDate: string | null
    endDate: string | null
    year: string | null
    subtype: string | null
    status: string | null
    posterImage: string | null
    episodeCount: string | null
    episodeLength: string | null
    totalLength: string | null
  }

  export type AnimesCountAggregateOutputType = {
    id: number
    englishTitle: number
    japaneseTitle: number
    startDate: number
    endDate: number
    year: number
    subtype: number
    status: number
    posterImage: number
    episodeCount: number
    episodeLength: number
    totalLength: number
    _all: number
  }


  export type AnimesAvgAggregateInputType = {
    id?: true
  }

  export type AnimesSumAggregateInputType = {
    id?: true
  }

  export type AnimesMinAggregateInputType = {
    id?: true
    englishTitle?: true
    japaneseTitle?: true
    startDate?: true
    endDate?: true
    year?: true
    subtype?: true
    status?: true
    posterImage?: true
    episodeCount?: true
    episodeLength?: true
    totalLength?: true
  }

  export type AnimesMaxAggregateInputType = {
    id?: true
    englishTitle?: true
    japaneseTitle?: true
    startDate?: true
    endDate?: true
    year?: true
    subtype?: true
    status?: true
    posterImage?: true
    episodeCount?: true
    episodeLength?: true
    totalLength?: true
  }

  export type AnimesCountAggregateInputType = {
    id?: true
    englishTitle?: true
    japaneseTitle?: true
    startDate?: true
    endDate?: true
    year?: true
    subtype?: true
    status?: true
    posterImage?: true
    episodeCount?: true
    episodeLength?: true
    totalLength?: true
    _all?: true
  }

  export type AnimesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animes to aggregate.
     */
    where?: AnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animes to fetch.
     */
    orderBy?: AnimesOrderByWithRelationInput | AnimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Animes
    **/
    _count?: true | AnimesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimesMaxAggregateInputType
  }

  export type GetAnimesAggregateType<T extends AnimesAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimes[P]>
      : GetScalarType<T[P], AggregateAnimes[P]>
  }




  export type AnimesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimesWhereInput
    orderBy?: AnimesOrderByWithAggregationInput | AnimesOrderByWithAggregationInput[]
    by: AnimesScalarFieldEnum[] | AnimesScalarFieldEnum
    having?: AnimesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimesCountAggregateInputType | true
    _avg?: AnimesAvgAggregateInputType
    _sum?: AnimesSumAggregateInputType
    _min?: AnimesMinAggregateInputType
    _max?: AnimesMaxAggregateInputType
  }

  export type AnimesGroupByOutputType = {
    id: number
    englishTitle: string | null
    japaneseTitle: string | null
    startDate: string | null
    endDate: string | null
    year: string | null
    subtype: string | null
    status: string | null
    posterImage: string | null
    episodeCount: string | null
    episodeLength: string | null
    totalLength: string | null
    _count: AnimesCountAggregateOutputType | null
    _avg: AnimesAvgAggregateOutputType | null
    _sum: AnimesSumAggregateOutputType | null
    _min: AnimesMinAggregateOutputType | null
    _max: AnimesMaxAggregateOutputType | null
  }

  type GetAnimesGroupByPayload<T extends AnimesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimesGroupByOutputType[P]>
            : GetScalarType<T[P], AnimesGroupByOutputType[P]>
        }
      >
    >


  export type AnimesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    englishTitle?: boolean
    japaneseTitle?: boolean
    startDate?: boolean
    endDate?: boolean
    year?: boolean
    subtype?: boolean
    status?: boolean
    posterImage?: boolean
    episodeCount?: boolean
    episodeLength?: boolean
    totalLength?: boolean
  }, ExtArgs["result"]["animes"]>

  export type AnimesSelectScalar = {
    id?: boolean
    englishTitle?: boolean
    japaneseTitle?: boolean
    startDate?: boolean
    endDate?: boolean
    year?: boolean
    subtype?: boolean
    status?: boolean
    posterImage?: boolean
    episodeCount?: boolean
    episodeLength?: boolean
    totalLength?: boolean
  }



  export type $AnimesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Animes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      englishTitle: string | null
      japaneseTitle: string | null
      startDate: string | null
      endDate: string | null
      year: string | null
      subtype: string | null
      status: string | null
      posterImage: string | null
      episodeCount: string | null
      episodeLength: string | null
      totalLength: string | null
    }, ExtArgs["result"]["animes"]>
    composites: {}
  }


  type AnimesGetPayload<S extends boolean | null | undefined | AnimesDefaultArgs> = $Result.GetResult<Prisma.$AnimesPayload, S>

  type AnimesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnimesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnimesCountAggregateInputType | true
    }

  export interface AnimesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Animes'], meta: { name: 'Animes' } }
    /**
     * Find zero or one Animes that matches the filter.
     * @param {AnimesFindUniqueArgs} args - Arguments to find a Animes
     * @example
     * // Get one Animes
     * const animes = await prisma.animes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnimesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AnimesFindUniqueArgs<ExtArgs>>
    ): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Animes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AnimesFindUniqueOrThrowArgs} args - Arguments to find a Animes
     * @example
     * // Get one Animes
     * const animes = await prisma.animes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AnimesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Animes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesFindFirstArgs} args - Arguments to find a Animes
     * @example
     * // Get one Animes
     * const animes = await prisma.animes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnimesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimesFindFirstArgs<ExtArgs>>
    ): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Animes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesFindFirstOrThrowArgs} args - Arguments to find a Animes
     * @example
     * // Get one Animes
     * const animes = await prisma.animes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AnimesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Animes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Animes
     * const animes = await prisma.animes.findMany()
     * 
     * // Get first 10 Animes
     * const animes = await prisma.animes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animesWithIdOnly = await prisma.animes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnimesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Animes.
     * @param {AnimesCreateArgs} args - Arguments to create a Animes.
     * @example
     * // Create one Animes
     * const Animes = await prisma.animes.create({
     *   data: {
     *     // ... data to create a Animes
     *   }
     * })
     * 
    **/
    create<T extends AnimesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AnimesCreateArgs<ExtArgs>>
    ): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Animes.
     *     @param {AnimesCreateManyArgs} args - Arguments to create many Animes.
     *     @example
     *     // Create many Animes
     *     const animes = await prisma.animes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AnimesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Animes.
     * @param {AnimesDeleteArgs} args - Arguments to delete one Animes.
     * @example
     * // Delete one Animes
     * const Animes = await prisma.animes.delete({
     *   where: {
     *     // ... filter to delete one Animes
     *   }
     * })
     * 
    **/
    delete<T extends AnimesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AnimesDeleteArgs<ExtArgs>>
    ): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Animes.
     * @param {AnimesUpdateArgs} args - Arguments to update one Animes.
     * @example
     * // Update one Animes
     * const animes = await prisma.animes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnimesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AnimesUpdateArgs<ExtArgs>>
    ): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Animes.
     * @param {AnimesDeleteManyArgs} args - Arguments to filter Animes to delete.
     * @example
     * // Delete a few Animes
     * const { count } = await prisma.animes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnimesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Animes
     * const animes = await prisma.animes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnimesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AnimesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Animes.
     * @param {AnimesUpsertArgs} args - Arguments to update or create a Animes.
     * @example
     * // Update or create a Animes
     * const animes = await prisma.animes.upsert({
     *   create: {
     *     // ... data to create a Animes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Animes we want to update
     *   }
     * })
    **/
    upsert<T extends AnimesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AnimesUpsertArgs<ExtArgs>>
    ): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Animes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesCountArgs} args - Arguments to filter Animes to count.
     * @example
     * // Count the number of Animes
     * const count = await prisma.animes.count({
     *   where: {
     *     // ... the filter for the Animes we want to count
     *   }
     * })
    **/
    count<T extends AnimesCountArgs>(
      args?: Subset<T, AnimesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Animes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimesAggregateArgs>(args: Subset<T, AnimesAggregateArgs>): Prisma.PrismaPromise<GetAnimesAggregateType<T>>

    /**
     * Group by Animes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesGroupByArgs} args - Group by arguments.
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
      T extends AnimesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimesGroupByArgs['orderBy'] }
        : { orderBy?: AnimesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Animes model
   */
  readonly fields: AnimesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Animes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Animes model
   */ 
  interface AnimesFieldRefs {
    readonly id: FieldRef<"Animes", 'Int'>
    readonly englishTitle: FieldRef<"Animes", 'String'>
    readonly japaneseTitle: FieldRef<"Animes", 'String'>
    readonly startDate: FieldRef<"Animes", 'String'>
    readonly endDate: FieldRef<"Animes", 'String'>
    readonly year: FieldRef<"Animes", 'String'>
    readonly subtype: FieldRef<"Animes", 'String'>
    readonly status: FieldRef<"Animes", 'String'>
    readonly posterImage: FieldRef<"Animes", 'String'>
    readonly episodeCount: FieldRef<"Animes", 'String'>
    readonly episodeLength: FieldRef<"Animes", 'String'>
    readonly totalLength: FieldRef<"Animes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Animes findUnique
   */
  export type AnimesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where: AnimesWhereUniqueInput
  }

  /**
   * Animes findUniqueOrThrow
   */
  export type AnimesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where: AnimesWhereUniqueInput
  }

  /**
   * Animes findFirst
   */
  export type AnimesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where?: AnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animes to fetch.
     */
    orderBy?: AnimesOrderByWithRelationInput | AnimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animes.
     */
    cursor?: AnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animes.
     */
    distinct?: AnimesScalarFieldEnum | AnimesScalarFieldEnum[]
  }

  /**
   * Animes findFirstOrThrow
   */
  export type AnimesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where?: AnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animes to fetch.
     */
    orderBy?: AnimesOrderByWithRelationInput | AnimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animes.
     */
    cursor?: AnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animes.
     */
    distinct?: AnimesScalarFieldEnum | AnimesScalarFieldEnum[]
  }

  /**
   * Animes findMany
   */
  export type AnimesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where?: AnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animes to fetch.
     */
    orderBy?: AnimesOrderByWithRelationInput | AnimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Animes.
     */
    cursor?: AnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animes.
     */
    skip?: number
    distinct?: AnimesScalarFieldEnum | AnimesScalarFieldEnum[]
  }

  /**
   * Animes create
   */
  export type AnimesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * The data needed to create a Animes.
     */
    data?: XOR<AnimesCreateInput, AnimesUncheckedCreateInput>
  }

  /**
   * Animes createMany
   */
  export type AnimesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Animes.
     */
    data: AnimesCreateManyInput | AnimesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Animes update
   */
  export type AnimesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * The data needed to update a Animes.
     */
    data: XOR<AnimesUpdateInput, AnimesUncheckedUpdateInput>
    /**
     * Choose, which Animes to update.
     */
    where: AnimesWhereUniqueInput
  }

  /**
   * Animes updateMany
   */
  export type AnimesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Animes.
     */
    data: XOR<AnimesUpdateManyMutationInput, AnimesUncheckedUpdateManyInput>
    /**
     * Filter which Animes to update
     */
    where?: AnimesWhereInput
  }

  /**
   * Animes upsert
   */
  export type AnimesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * The filter to search for the Animes to update in case it exists.
     */
    where: AnimesWhereUniqueInput
    /**
     * In case the Animes found by the `where` argument doesn't exist, create a new Animes with this data.
     */
    create: XOR<AnimesCreateInput, AnimesUncheckedCreateInput>
    /**
     * In case the Animes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimesUpdateInput, AnimesUncheckedUpdateInput>
  }

  /**
   * Animes delete
   */
  export type AnimesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Filter which Animes to delete.
     */
    where: AnimesWhereUniqueInput
  }

  /**
   * Animes deleteMany
   */
  export type AnimesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animes to delete
     */
    where?: AnimesWhereInput
  }

  /**
   * Animes without action
   */
  export type AnimesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
  }


  /**
   * Model Songs
   */

  export type AggregateSongs = {
    _count: SongsCountAggregateOutputType | null
    _avg: SongsAvgAggregateOutputType | null
    _sum: SongsSumAggregateOutputType | null
    _min: SongsMinAggregateOutputType | null
    _max: SongsMaxAggregateOutputType | null
  }

  export type SongsAvgAggregateOutputType = {
    id: number | null
  }

  export type SongsSumAggregateOutputType = {
    id: number | null
  }

  export type SongsMinAggregateOutputType = {
    id: number | null
    chTitle: string | null
    enTitle: string | null
    artist: string | null
    year: string | null
    description: string | null
    chLyrics: string | null
    enLyrics: string | null
  }

  export type SongsMaxAggregateOutputType = {
    id: number | null
    chTitle: string | null
    enTitle: string | null
    artist: string | null
    year: string | null
    description: string | null
    chLyrics: string | null
    enLyrics: string | null
  }

  export type SongsCountAggregateOutputType = {
    id: number
    chTitle: number
    enTitle: number
    artist: number
    year: number
    description: number
    chLyrics: number
    enLyrics: number
    _all: number
  }


  export type SongsAvgAggregateInputType = {
    id?: true
  }

  export type SongsSumAggregateInputType = {
    id?: true
  }

  export type SongsMinAggregateInputType = {
    id?: true
    chTitle?: true
    enTitle?: true
    artist?: true
    year?: true
    description?: true
    chLyrics?: true
    enLyrics?: true
  }

  export type SongsMaxAggregateInputType = {
    id?: true
    chTitle?: true
    enTitle?: true
    artist?: true
    year?: true
    description?: true
    chLyrics?: true
    enLyrics?: true
  }

  export type SongsCountAggregateInputType = {
    id?: true
    chTitle?: true
    enTitle?: true
    artist?: true
    year?: true
    description?: true
    chLyrics?: true
    enLyrics?: true
    _all?: true
  }

  export type SongsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songs to aggregate.
     */
    where?: SongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongsOrderByWithRelationInput | SongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Songs
    **/
    _count?: true | SongsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongsMaxAggregateInputType
  }

  export type GetSongsAggregateType<T extends SongsAggregateArgs> = {
        [P in keyof T & keyof AggregateSongs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSongs[P]>
      : GetScalarType<T[P], AggregateSongs[P]>
  }




  export type SongsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongsWhereInput
    orderBy?: SongsOrderByWithAggregationInput | SongsOrderByWithAggregationInput[]
    by: SongsScalarFieldEnum[] | SongsScalarFieldEnum
    having?: SongsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongsCountAggregateInputType | true
    _avg?: SongsAvgAggregateInputType
    _sum?: SongsSumAggregateInputType
    _min?: SongsMinAggregateInputType
    _max?: SongsMaxAggregateInputType
  }

  export type SongsGroupByOutputType = {
    id: number
    chTitle: string | null
    enTitle: string | null
    artist: string | null
    year: string | null
    description: string | null
    chLyrics: string | null
    enLyrics: string | null
    _count: SongsCountAggregateOutputType | null
    _avg: SongsAvgAggregateOutputType | null
    _sum: SongsSumAggregateOutputType | null
    _min: SongsMinAggregateOutputType | null
    _max: SongsMaxAggregateOutputType | null
  }

  type GetSongsGroupByPayload<T extends SongsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongsGroupByOutputType[P]>
            : GetScalarType<T[P], SongsGroupByOutputType[P]>
        }
      >
    >


  export type SongsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chTitle?: boolean
    enTitle?: boolean
    artist?: boolean
    year?: boolean
    description?: boolean
    chLyrics?: boolean
    enLyrics?: boolean
  }, ExtArgs["result"]["songs"]>

  export type SongsSelectScalar = {
    id?: boolean
    chTitle?: boolean
    enTitle?: boolean
    artist?: boolean
    year?: boolean
    description?: boolean
    chLyrics?: boolean
    enLyrics?: boolean
  }



  export type $SongsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Songs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chTitle: string | null
      enTitle: string | null
      artist: string | null
      year: string | null
      description: string | null
      chLyrics: string | null
      enLyrics: string | null
    }, ExtArgs["result"]["songs"]>
    composites: {}
  }


  type SongsGetPayload<S extends boolean | null | undefined | SongsDefaultArgs> = $Result.GetResult<Prisma.$SongsPayload, S>

  type SongsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SongsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SongsCountAggregateInputType | true
    }

  export interface SongsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Songs'], meta: { name: 'Songs' } }
    /**
     * Find zero or one Songs that matches the filter.
     * @param {SongsFindUniqueArgs} args - Arguments to find a Songs
     * @example
     * // Get one Songs
     * const songs = await prisma.songs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SongsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SongsFindUniqueArgs<ExtArgs>>
    ): Prisma__SongsClient<$Result.GetResult<Prisma.$SongsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Songs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SongsFindUniqueOrThrowArgs} args - Arguments to find a Songs
     * @example
     * // Get one Songs
     * const songs = await prisma.songs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SongsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SongsClient<$Result.GetResult<Prisma.$SongsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongsFindFirstArgs} args - Arguments to find a Songs
     * @example
     * // Get one Songs
     * const songs = await prisma.songs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SongsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SongsFindFirstArgs<ExtArgs>>
    ): Prisma__SongsClient<$Result.GetResult<Prisma.$SongsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Songs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongsFindFirstOrThrowArgs} args - Arguments to find a Songs
     * @example
     * // Get one Songs
     * const songs = await prisma.songs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SongsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SongsClient<$Result.GetResult<Prisma.$SongsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.songs.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.songs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songsWithIdOnly = await prisma.songs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SongsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Songs.
     * @param {SongsCreateArgs} args - Arguments to create a Songs.
     * @example
     * // Create one Songs
     * const Songs = await prisma.songs.create({
     *   data: {
     *     // ... data to create a Songs
     *   }
     * })
     * 
    **/
    create<T extends SongsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SongsCreateArgs<ExtArgs>>
    ): Prisma__SongsClient<$Result.GetResult<Prisma.$SongsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Songs.
     *     @param {SongsCreateManyArgs} args - Arguments to create many Songs.
     *     @example
     *     // Create many Songs
     *     const songs = await prisma.songs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SongsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Songs.
     * @param {SongsDeleteArgs} args - Arguments to delete one Songs.
     * @example
     * // Delete one Songs
     * const Songs = await prisma.songs.delete({
     *   where: {
     *     // ... filter to delete one Songs
     *   }
     * })
     * 
    **/
    delete<T extends SongsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SongsDeleteArgs<ExtArgs>>
    ): Prisma__SongsClient<$Result.GetResult<Prisma.$SongsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Songs.
     * @param {SongsUpdateArgs} args - Arguments to update one Songs.
     * @example
     * // Update one Songs
     * const songs = await prisma.songs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SongsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SongsUpdateArgs<ExtArgs>>
    ): Prisma__SongsClient<$Result.GetResult<Prisma.$SongsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Songs.
     * @param {SongsDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.songs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SongsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const songs = await prisma.songs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SongsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SongsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Songs.
     * @param {SongsUpsertArgs} args - Arguments to update or create a Songs.
     * @example
     * // Update or create a Songs
     * const songs = await prisma.songs.upsert({
     *   create: {
     *     // ... data to create a Songs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Songs we want to update
     *   }
     * })
    **/
    upsert<T extends SongsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SongsUpsertArgs<ExtArgs>>
    ): Prisma__SongsClient<$Result.GetResult<Prisma.$SongsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongsCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.songs.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends SongsCountArgs>(
      args?: Subset<T, SongsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SongsAggregateArgs>(args: Subset<T, SongsAggregateArgs>): Prisma.PrismaPromise<GetSongsAggregateType<T>>

    /**
     * Group by Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongsGroupByArgs} args - Group by arguments.
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
      T extends SongsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongsGroupByArgs['orderBy'] }
        : { orderBy?: SongsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SongsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Songs model
   */
  readonly fields: SongsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Songs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Songs model
   */ 
  interface SongsFieldRefs {
    readonly id: FieldRef<"Songs", 'Int'>
    readonly chTitle: FieldRef<"Songs", 'String'>
    readonly enTitle: FieldRef<"Songs", 'String'>
    readonly artist: FieldRef<"Songs", 'String'>
    readonly year: FieldRef<"Songs", 'String'>
    readonly description: FieldRef<"Songs", 'String'>
    readonly chLyrics: FieldRef<"Songs", 'String'>
    readonly enLyrics: FieldRef<"Songs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Songs findUnique
   */
  export type SongsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songs
     */
    select?: SongsSelect<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where: SongsWhereUniqueInput
  }

  /**
   * Songs findUniqueOrThrow
   */
  export type SongsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songs
     */
    select?: SongsSelect<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where: SongsWhereUniqueInput
  }

  /**
   * Songs findFirst
   */
  export type SongsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songs
     */
    select?: SongsSelect<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where?: SongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongsOrderByWithRelationInput | SongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongsScalarFieldEnum | SongsScalarFieldEnum[]
  }

  /**
   * Songs findFirstOrThrow
   */
  export type SongsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songs
     */
    select?: SongsSelect<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where?: SongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongsOrderByWithRelationInput | SongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongsScalarFieldEnum | SongsScalarFieldEnum[]
  }

  /**
   * Songs findMany
   */
  export type SongsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songs
     */
    select?: SongsSelect<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where?: SongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongsOrderByWithRelationInput | SongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Songs.
     */
    cursor?: SongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    distinct?: SongsScalarFieldEnum | SongsScalarFieldEnum[]
  }

  /**
   * Songs create
   */
  export type SongsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songs
     */
    select?: SongsSelect<ExtArgs> | null
    /**
     * The data needed to create a Songs.
     */
    data?: XOR<SongsCreateInput, SongsUncheckedCreateInput>
  }

  /**
   * Songs createMany
   */
  export type SongsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Songs.
     */
    data: SongsCreateManyInput | SongsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Songs update
   */
  export type SongsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songs
     */
    select?: SongsSelect<ExtArgs> | null
    /**
     * The data needed to update a Songs.
     */
    data: XOR<SongsUpdateInput, SongsUncheckedUpdateInput>
    /**
     * Choose, which Songs to update.
     */
    where: SongsWhereUniqueInput
  }

  /**
   * Songs updateMany
   */
  export type SongsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Songs.
     */
    data: XOR<SongsUpdateManyMutationInput, SongsUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongsWhereInput
  }

  /**
   * Songs upsert
   */
  export type SongsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songs
     */
    select?: SongsSelect<ExtArgs> | null
    /**
     * The filter to search for the Songs to update in case it exists.
     */
    where: SongsWhereUniqueInput
    /**
     * In case the Songs found by the `where` argument doesn't exist, create a new Songs with this data.
     */
    create: XOR<SongsCreateInput, SongsUncheckedCreateInput>
    /**
     * In case the Songs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongsUpdateInput, SongsUncheckedUpdateInput>
  }

  /**
   * Songs delete
   */
  export type SongsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songs
     */
    select?: SongsSelect<ExtArgs> | null
    /**
     * Filter which Songs to delete.
     */
    where: SongsWhereUniqueInput
  }

  /**
   * Songs deleteMany
   */
  export type SongsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songs to delete
     */
    where?: SongsWhereInput
  }

  /**
   * Songs without action
   */
  export type SongsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songs
     */
    select?: SongsSelect<ExtArgs> | null
  }


  /**
   * Model postgres
   */

  export type AggregatePostgres = {
    _count: PostgresCountAggregateOutputType | null
    _avg: PostgresAvgAggregateOutputType | null
    _sum: PostgresSumAggregateOutputType | null
    _min: PostgresMinAggregateOutputType | null
    _max: PostgresMaxAggregateOutputType | null
  }

  export type PostgresAvgAggregateOutputType = {
    id: number | null
  }

  export type PostgresSumAggregateOutputType = {
    id: number | null
  }

  export type PostgresMinAggregateOutputType = {
    id: number | null
    chinese: string | null
    pinyin: string | null
    english: string | null
    type: string | null
    level: string | null
    sentence_ch: string | null
    sentence_eng: string | null
  }

  export type PostgresMaxAggregateOutputType = {
    id: number | null
    chinese: string | null
    pinyin: string | null
    english: string | null
    type: string | null
    level: string | null
    sentence_ch: string | null
    sentence_eng: string | null
  }

  export type PostgresCountAggregateOutputType = {
    id: number
    chinese: number
    pinyin: number
    english: number
    type: number
    level: number
    sentence_ch: number
    sentence_eng: number
    _all: number
  }


  export type PostgresAvgAggregateInputType = {
    id?: true
  }

  export type PostgresSumAggregateInputType = {
    id?: true
  }

  export type PostgresMinAggregateInputType = {
    id?: true
    chinese?: true
    pinyin?: true
    english?: true
    type?: true
    level?: true
    sentence_ch?: true
    sentence_eng?: true
  }

  export type PostgresMaxAggregateInputType = {
    id?: true
    chinese?: true
    pinyin?: true
    english?: true
    type?: true
    level?: true
    sentence_ch?: true
    sentence_eng?: true
  }

  export type PostgresCountAggregateInputType = {
    id?: true
    chinese?: true
    pinyin?: true
    english?: true
    type?: true
    level?: true
    sentence_ch?: true
    sentence_eng?: true
    _all?: true
  }

  export type PostgresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which postgres to aggregate.
     */
    where?: postgresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postgres to fetch.
     */
    orderBy?: postgresOrderByWithRelationInput | postgresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postgresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postgres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postgres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned postgres
    **/
    _count?: true | PostgresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostgresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostgresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostgresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostgresMaxAggregateInputType
  }

  export type GetPostgresAggregateType<T extends PostgresAggregateArgs> = {
        [P in keyof T & keyof AggregatePostgres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostgres[P]>
      : GetScalarType<T[P], AggregatePostgres[P]>
  }




  export type postgresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postgresWhereInput
    orderBy?: postgresOrderByWithAggregationInput | postgresOrderByWithAggregationInput[]
    by: PostgresScalarFieldEnum[] | PostgresScalarFieldEnum
    having?: postgresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostgresCountAggregateInputType | true
    _avg?: PostgresAvgAggregateInputType
    _sum?: PostgresSumAggregateInputType
    _min?: PostgresMinAggregateInputType
    _max?: PostgresMaxAggregateInputType
  }

  export type PostgresGroupByOutputType = {
    id: number
    chinese: string | null
    pinyin: string | null
    english: string | null
    type: string | null
    level: string | null
    sentence_ch: string | null
    sentence_eng: string | null
    _count: PostgresCountAggregateOutputType | null
    _avg: PostgresAvgAggregateOutputType | null
    _sum: PostgresSumAggregateOutputType | null
    _min: PostgresMinAggregateOutputType | null
    _max: PostgresMaxAggregateOutputType | null
  }

  type GetPostgresGroupByPayload<T extends postgresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostgresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostgresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostgresGroupByOutputType[P]>
            : GetScalarType<T[P], PostgresGroupByOutputType[P]>
        }
      >
    >


  export type postgresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chinese?: boolean
    pinyin?: boolean
    english?: boolean
    type?: boolean
    level?: boolean
    sentence_ch?: boolean
    sentence_eng?: boolean
  }, ExtArgs["result"]["postgres"]>

  export type postgresSelectScalar = {
    id?: boolean
    chinese?: boolean
    pinyin?: boolean
    english?: boolean
    type?: boolean
    level?: boolean
    sentence_ch?: boolean
    sentence_eng?: boolean
  }



  export type $postgresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "postgres"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chinese: string | null
      pinyin: string | null
      english: string | null
      type: string | null
      level: string | null
      sentence_ch: string | null
      sentence_eng: string | null
    }, ExtArgs["result"]["postgres"]>
    composites: {}
  }


  type postgresGetPayload<S extends boolean | null | undefined | postgresDefaultArgs> = $Result.GetResult<Prisma.$postgresPayload, S>

  type postgresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<postgresFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostgresCountAggregateInputType | true
    }

  export interface postgresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['postgres'], meta: { name: 'postgres' } }
    /**
     * Find zero or one Postgres that matches the filter.
     * @param {postgresFindUniqueArgs} args - Arguments to find a Postgres
     * @example
     * // Get one Postgres
     * const postgres = await prisma.postgres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends postgresFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, postgresFindUniqueArgs<ExtArgs>>
    ): Prisma__postgresClient<$Result.GetResult<Prisma.$postgresPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Postgres that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {postgresFindUniqueOrThrowArgs} args - Arguments to find a Postgres
     * @example
     * // Get one Postgres
     * const postgres = await prisma.postgres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends postgresFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, postgresFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__postgresClient<$Result.GetResult<Prisma.$postgresPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Postgres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postgresFindFirstArgs} args - Arguments to find a Postgres
     * @example
     * // Get one Postgres
     * const postgres = await prisma.postgres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends postgresFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, postgresFindFirstArgs<ExtArgs>>
    ): Prisma__postgresClient<$Result.GetResult<Prisma.$postgresPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Postgres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postgresFindFirstOrThrowArgs} args - Arguments to find a Postgres
     * @example
     * // Get one Postgres
     * const postgres = await prisma.postgres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends postgresFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, postgresFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__postgresClient<$Result.GetResult<Prisma.$postgresPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Postgres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postgresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Postgres
     * const postgres = await prisma.postgres.findMany()
     * 
     * // Get first 10 Postgres
     * const postgres = await prisma.postgres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postgresWithIdOnly = await prisma.postgres.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends postgresFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postgresFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postgresPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Postgres.
     * @param {postgresCreateArgs} args - Arguments to create a Postgres.
     * @example
     * // Create one Postgres
     * const Postgres = await prisma.postgres.create({
     *   data: {
     *     // ... data to create a Postgres
     *   }
     * })
     * 
    **/
    create<T extends postgresCreateArgs<ExtArgs>>(
      args: SelectSubset<T, postgresCreateArgs<ExtArgs>>
    ): Prisma__postgresClient<$Result.GetResult<Prisma.$postgresPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Postgres.
     *     @param {postgresCreateManyArgs} args - Arguments to create many Postgres.
     *     @example
     *     // Create many Postgres
     *     const postgres = await prisma.postgres.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends postgresCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postgresCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Postgres.
     * @param {postgresDeleteArgs} args - Arguments to delete one Postgres.
     * @example
     * // Delete one Postgres
     * const Postgres = await prisma.postgres.delete({
     *   where: {
     *     // ... filter to delete one Postgres
     *   }
     * })
     * 
    **/
    delete<T extends postgresDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, postgresDeleteArgs<ExtArgs>>
    ): Prisma__postgresClient<$Result.GetResult<Prisma.$postgresPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Postgres.
     * @param {postgresUpdateArgs} args - Arguments to update one Postgres.
     * @example
     * // Update one Postgres
     * const postgres = await prisma.postgres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends postgresUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, postgresUpdateArgs<ExtArgs>>
    ): Prisma__postgresClient<$Result.GetResult<Prisma.$postgresPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Postgres.
     * @param {postgresDeleteManyArgs} args - Arguments to filter Postgres to delete.
     * @example
     * // Delete a few Postgres
     * const { count } = await prisma.postgres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends postgresDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postgresDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Postgres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postgresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Postgres
     * const postgres = await prisma.postgres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends postgresUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, postgresUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Postgres.
     * @param {postgresUpsertArgs} args - Arguments to update or create a Postgres.
     * @example
     * // Update or create a Postgres
     * const postgres = await prisma.postgres.upsert({
     *   create: {
     *     // ... data to create a Postgres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Postgres we want to update
     *   }
     * })
    **/
    upsert<T extends postgresUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, postgresUpsertArgs<ExtArgs>>
    ): Prisma__postgresClient<$Result.GetResult<Prisma.$postgresPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Postgres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postgresCountArgs} args - Arguments to filter Postgres to count.
     * @example
     * // Count the number of Postgres
     * const count = await prisma.postgres.count({
     *   where: {
     *     // ... the filter for the Postgres we want to count
     *   }
     * })
    **/
    count<T extends postgresCountArgs>(
      args?: Subset<T, postgresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostgresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Postgres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostgresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostgresAggregateArgs>(args: Subset<T, PostgresAggregateArgs>): Prisma.PrismaPromise<GetPostgresAggregateType<T>>

    /**
     * Group by Postgres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postgresGroupByArgs} args - Group by arguments.
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
      T extends postgresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postgresGroupByArgs['orderBy'] }
        : { orderBy?: postgresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, postgresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostgresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the postgres model
   */
  readonly fields: postgresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for postgres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postgresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the postgres model
   */ 
  interface postgresFieldRefs {
    readonly id: FieldRef<"postgres", 'Int'>
    readonly chinese: FieldRef<"postgres", 'String'>
    readonly pinyin: FieldRef<"postgres", 'String'>
    readonly english: FieldRef<"postgres", 'String'>
    readonly type: FieldRef<"postgres", 'String'>
    readonly level: FieldRef<"postgres", 'String'>
    readonly sentence_ch: FieldRef<"postgres", 'String'>
    readonly sentence_eng: FieldRef<"postgres", 'String'>
  }
    

  // Custom InputTypes
  /**
   * postgres findUnique
   */
  export type postgresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postgres
     */
    select?: postgresSelect<ExtArgs> | null
    /**
     * Filter, which postgres to fetch.
     */
    where: postgresWhereUniqueInput
  }

  /**
   * postgres findUniqueOrThrow
   */
  export type postgresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postgres
     */
    select?: postgresSelect<ExtArgs> | null
    /**
     * Filter, which postgres to fetch.
     */
    where: postgresWhereUniqueInput
  }

  /**
   * postgres findFirst
   */
  export type postgresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postgres
     */
    select?: postgresSelect<ExtArgs> | null
    /**
     * Filter, which postgres to fetch.
     */
    where?: postgresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postgres to fetch.
     */
    orderBy?: postgresOrderByWithRelationInput | postgresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for postgres.
     */
    cursor?: postgresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postgres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postgres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of postgres.
     */
    distinct?: PostgresScalarFieldEnum | PostgresScalarFieldEnum[]
  }

  /**
   * postgres findFirstOrThrow
   */
  export type postgresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postgres
     */
    select?: postgresSelect<ExtArgs> | null
    /**
     * Filter, which postgres to fetch.
     */
    where?: postgresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postgres to fetch.
     */
    orderBy?: postgresOrderByWithRelationInput | postgresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for postgres.
     */
    cursor?: postgresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postgres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postgres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of postgres.
     */
    distinct?: PostgresScalarFieldEnum | PostgresScalarFieldEnum[]
  }

  /**
   * postgres findMany
   */
  export type postgresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postgres
     */
    select?: postgresSelect<ExtArgs> | null
    /**
     * Filter, which postgres to fetch.
     */
    where?: postgresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postgres to fetch.
     */
    orderBy?: postgresOrderByWithRelationInput | postgresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing postgres.
     */
    cursor?: postgresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postgres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postgres.
     */
    skip?: number
    distinct?: PostgresScalarFieldEnum | PostgresScalarFieldEnum[]
  }

  /**
   * postgres create
   */
  export type postgresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postgres
     */
    select?: postgresSelect<ExtArgs> | null
    /**
     * The data needed to create a postgres.
     */
    data?: XOR<postgresCreateInput, postgresUncheckedCreateInput>
  }

  /**
   * postgres createMany
   */
  export type postgresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many postgres.
     */
    data: postgresCreateManyInput | postgresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * postgres update
   */
  export type postgresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postgres
     */
    select?: postgresSelect<ExtArgs> | null
    /**
     * The data needed to update a postgres.
     */
    data: XOR<postgresUpdateInput, postgresUncheckedUpdateInput>
    /**
     * Choose, which postgres to update.
     */
    where: postgresWhereUniqueInput
  }

  /**
   * postgres updateMany
   */
  export type postgresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update postgres.
     */
    data: XOR<postgresUpdateManyMutationInput, postgresUncheckedUpdateManyInput>
    /**
     * Filter which postgres to update
     */
    where?: postgresWhereInput
  }

  /**
   * postgres upsert
   */
  export type postgresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postgres
     */
    select?: postgresSelect<ExtArgs> | null
    /**
     * The filter to search for the postgres to update in case it exists.
     */
    where: postgresWhereUniqueInput
    /**
     * In case the postgres found by the `where` argument doesn't exist, create a new postgres with this data.
     */
    create: XOR<postgresCreateInput, postgresUncheckedCreateInput>
    /**
     * In case the postgres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postgresUpdateInput, postgresUncheckedUpdateInput>
  }

  /**
   * postgres delete
   */
  export type postgresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postgres
     */
    select?: postgresSelect<ExtArgs> | null
    /**
     * Filter which postgres to delete.
     */
    where: postgresWhereUniqueInput
  }

  /**
   * postgres deleteMany
   */
  export type postgresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which postgres to delete
     */
    where?: postgresWhereInput
  }

  /**
   * postgres without action
   */
  export type postgresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postgres
     */
    select?: postgresSelect<ExtArgs> | null
  }


  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user_roles?: boolean | roles$user_rolesArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_roles?: boolean | roles$user_rolesArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      user_roles: Prisma.$user_rolesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }


  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends rolesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Roles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends rolesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends rolesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
    **/
    create<T extends rolesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, rolesCreateArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     *     @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const roles = await prisma.roles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends rolesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
    **/
    delete<T extends rolesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends rolesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends rolesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends rolesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
    **/
    upsert<T extends rolesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
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
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_roles<T extends roles$user_rolesArgs<ExtArgs> = {}>(args?: Subset<T, roles$user_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the roles model
   */ 
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'Int'>
    readonly name: FieldRef<"roles", 'String'>
    readonly createdAt: FieldRef<"roles", 'DateTime'>
    readonly updatedAt: FieldRef<"roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
  }

  /**
   * roles.user_roles
   */
  export type roles$user_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    where?: user_rolesWhereInput
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    cursor?: user_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }


  /**
   * Model tocf_learning
   */

  export type AggregateTocf_learning = {
    _count: Tocf_learningCountAggregateOutputType | null
    _avg: Tocf_learningAvgAggregateOutputType | null
    _sum: Tocf_learningSumAggregateOutputType | null
    _min: Tocf_learningMinAggregateOutputType | null
    _max: Tocf_learningMaxAggregateOutputType | null
  }

  export type Tocf_learningAvgAggregateOutputType = {
    id: number | null
  }

  export type Tocf_learningSumAggregateOutputType = {
    id: bigint | null
  }

  export type Tocf_learningMinAggregateOutputType = {
    id: bigint | null
    chinese: string | null
    pinyin: string | null
    english: string | null
    sentence_ch: string | null
    sentence_eng: string | null
    level: string | null
  }

  export type Tocf_learningMaxAggregateOutputType = {
    id: bigint | null
    chinese: string | null
    pinyin: string | null
    english: string | null
    sentence_ch: string | null
    sentence_eng: string | null
    level: string | null
  }

  export type Tocf_learningCountAggregateOutputType = {
    id: number
    chinese: number
    pinyin: number
    english: number
    sentence_ch: number
    sentence_eng: number
    level: number
    _all: number
  }


  export type Tocf_learningAvgAggregateInputType = {
    id?: true
  }

  export type Tocf_learningSumAggregateInputType = {
    id?: true
  }

  export type Tocf_learningMinAggregateInputType = {
    id?: true
    chinese?: true
    pinyin?: true
    english?: true
    sentence_ch?: true
    sentence_eng?: true
    level?: true
  }

  export type Tocf_learningMaxAggregateInputType = {
    id?: true
    chinese?: true
    pinyin?: true
    english?: true
    sentence_ch?: true
    sentence_eng?: true
    level?: true
  }

  export type Tocf_learningCountAggregateInputType = {
    id?: true
    chinese?: true
    pinyin?: true
    english?: true
    sentence_ch?: true
    sentence_eng?: true
    level?: true
    _all?: true
  }

  export type Tocf_learningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tocf_learning to aggregate.
     */
    where?: tocf_learningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tocf_learnings to fetch.
     */
    orderBy?: tocf_learningOrderByWithRelationInput | tocf_learningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tocf_learningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tocf_learnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tocf_learnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tocf_learnings
    **/
    _count?: true | Tocf_learningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tocf_learningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tocf_learningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tocf_learningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tocf_learningMaxAggregateInputType
  }

  export type GetTocf_learningAggregateType<T extends Tocf_learningAggregateArgs> = {
        [P in keyof T & keyof AggregateTocf_learning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTocf_learning[P]>
      : GetScalarType<T[P], AggregateTocf_learning[P]>
  }




  export type tocf_learningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tocf_learningWhereInput
    orderBy?: tocf_learningOrderByWithAggregationInput | tocf_learningOrderByWithAggregationInput[]
    by: Tocf_learningScalarFieldEnum[] | Tocf_learningScalarFieldEnum
    having?: tocf_learningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tocf_learningCountAggregateInputType | true
    _avg?: Tocf_learningAvgAggregateInputType
    _sum?: Tocf_learningSumAggregateInputType
    _min?: Tocf_learningMinAggregateInputType
    _max?: Tocf_learningMaxAggregateInputType
  }

  export type Tocf_learningGroupByOutputType = {
    id: bigint
    chinese: string | null
    pinyin: string | null
    english: string | null
    sentence_ch: string | null
    sentence_eng: string | null
    level: string | null
    _count: Tocf_learningCountAggregateOutputType | null
    _avg: Tocf_learningAvgAggregateOutputType | null
    _sum: Tocf_learningSumAggregateOutputType | null
    _min: Tocf_learningMinAggregateOutputType | null
    _max: Tocf_learningMaxAggregateOutputType | null
  }

  type GetTocf_learningGroupByPayload<T extends tocf_learningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tocf_learningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tocf_learningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tocf_learningGroupByOutputType[P]>
            : GetScalarType<T[P], Tocf_learningGroupByOutputType[P]>
        }
      >
    >


  export type tocf_learningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chinese?: boolean
    pinyin?: boolean
    english?: boolean
    sentence_ch?: boolean
    sentence_eng?: boolean
    level?: boolean
  }, ExtArgs["result"]["tocf_learning"]>

  export type tocf_learningSelectScalar = {
    id?: boolean
    chinese?: boolean
    pinyin?: boolean
    english?: boolean
    sentence_ch?: boolean
    sentence_eng?: boolean
    level?: boolean
  }



  export type $tocf_learningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tocf_learning"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      chinese: string | null
      pinyin: string | null
      english: string | null
      sentence_ch: string | null
      sentence_eng: string | null
      level: string | null
    }, ExtArgs["result"]["tocf_learning"]>
    composites: {}
  }


  type tocf_learningGetPayload<S extends boolean | null | undefined | tocf_learningDefaultArgs> = $Result.GetResult<Prisma.$tocf_learningPayload, S>

  type tocf_learningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tocf_learningFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tocf_learningCountAggregateInputType | true
    }

  export interface tocf_learningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tocf_learning'], meta: { name: 'tocf_learning' } }
    /**
     * Find zero or one Tocf_learning that matches the filter.
     * @param {tocf_learningFindUniqueArgs} args - Arguments to find a Tocf_learning
     * @example
     * // Get one Tocf_learning
     * const tocf_learning = await prisma.tocf_learning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tocf_learningFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tocf_learningFindUniqueArgs<ExtArgs>>
    ): Prisma__tocf_learningClient<$Result.GetResult<Prisma.$tocf_learningPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tocf_learning that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tocf_learningFindUniqueOrThrowArgs} args - Arguments to find a Tocf_learning
     * @example
     * // Get one Tocf_learning
     * const tocf_learning = await prisma.tocf_learning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tocf_learningFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tocf_learningFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tocf_learningClient<$Result.GetResult<Prisma.$tocf_learningPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tocf_learning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tocf_learningFindFirstArgs} args - Arguments to find a Tocf_learning
     * @example
     * // Get one Tocf_learning
     * const tocf_learning = await prisma.tocf_learning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tocf_learningFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tocf_learningFindFirstArgs<ExtArgs>>
    ): Prisma__tocf_learningClient<$Result.GetResult<Prisma.$tocf_learningPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tocf_learning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tocf_learningFindFirstOrThrowArgs} args - Arguments to find a Tocf_learning
     * @example
     * // Get one Tocf_learning
     * const tocf_learning = await prisma.tocf_learning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tocf_learningFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tocf_learningFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tocf_learningClient<$Result.GetResult<Prisma.$tocf_learningPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tocf_learnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tocf_learningFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tocf_learnings
     * const tocf_learnings = await prisma.tocf_learning.findMany()
     * 
     * // Get first 10 Tocf_learnings
     * const tocf_learnings = await prisma.tocf_learning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tocf_learningWithIdOnly = await prisma.tocf_learning.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends tocf_learningFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tocf_learningFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tocf_learningPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tocf_learning.
     * @param {tocf_learningCreateArgs} args - Arguments to create a Tocf_learning.
     * @example
     * // Create one Tocf_learning
     * const Tocf_learning = await prisma.tocf_learning.create({
     *   data: {
     *     // ... data to create a Tocf_learning
     *   }
     * })
     * 
    **/
    create<T extends tocf_learningCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tocf_learningCreateArgs<ExtArgs>>
    ): Prisma__tocf_learningClient<$Result.GetResult<Prisma.$tocf_learningPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tocf_learnings.
     *     @param {tocf_learningCreateManyArgs} args - Arguments to create many Tocf_learnings.
     *     @example
     *     // Create many Tocf_learnings
     *     const tocf_learning = await prisma.tocf_learning.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tocf_learningCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tocf_learningCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tocf_learning.
     * @param {tocf_learningDeleteArgs} args - Arguments to delete one Tocf_learning.
     * @example
     * // Delete one Tocf_learning
     * const Tocf_learning = await prisma.tocf_learning.delete({
     *   where: {
     *     // ... filter to delete one Tocf_learning
     *   }
     * })
     * 
    **/
    delete<T extends tocf_learningDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tocf_learningDeleteArgs<ExtArgs>>
    ): Prisma__tocf_learningClient<$Result.GetResult<Prisma.$tocf_learningPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tocf_learning.
     * @param {tocf_learningUpdateArgs} args - Arguments to update one Tocf_learning.
     * @example
     * // Update one Tocf_learning
     * const tocf_learning = await prisma.tocf_learning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tocf_learningUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tocf_learningUpdateArgs<ExtArgs>>
    ): Prisma__tocf_learningClient<$Result.GetResult<Prisma.$tocf_learningPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tocf_learnings.
     * @param {tocf_learningDeleteManyArgs} args - Arguments to filter Tocf_learnings to delete.
     * @example
     * // Delete a few Tocf_learnings
     * const { count } = await prisma.tocf_learning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tocf_learningDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tocf_learningDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tocf_learnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tocf_learningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tocf_learnings
     * const tocf_learning = await prisma.tocf_learning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tocf_learningUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tocf_learningUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tocf_learning.
     * @param {tocf_learningUpsertArgs} args - Arguments to update or create a Tocf_learning.
     * @example
     * // Update or create a Tocf_learning
     * const tocf_learning = await prisma.tocf_learning.upsert({
     *   create: {
     *     // ... data to create a Tocf_learning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tocf_learning we want to update
     *   }
     * })
    **/
    upsert<T extends tocf_learningUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tocf_learningUpsertArgs<ExtArgs>>
    ): Prisma__tocf_learningClient<$Result.GetResult<Prisma.$tocf_learningPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tocf_learnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tocf_learningCountArgs} args - Arguments to filter Tocf_learnings to count.
     * @example
     * // Count the number of Tocf_learnings
     * const count = await prisma.tocf_learning.count({
     *   where: {
     *     // ... the filter for the Tocf_learnings we want to count
     *   }
     * })
    **/
    count<T extends tocf_learningCountArgs>(
      args?: Subset<T, tocf_learningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tocf_learningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tocf_learning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tocf_learningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tocf_learningAggregateArgs>(args: Subset<T, Tocf_learningAggregateArgs>): Prisma.PrismaPromise<GetTocf_learningAggregateType<T>>

    /**
     * Group by Tocf_learning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tocf_learningGroupByArgs} args - Group by arguments.
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
      T extends tocf_learningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tocf_learningGroupByArgs['orderBy'] }
        : { orderBy?: tocf_learningGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tocf_learningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTocf_learningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tocf_learning model
   */
  readonly fields: tocf_learningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tocf_learning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tocf_learningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tocf_learning model
   */ 
  interface tocf_learningFieldRefs {
    readonly id: FieldRef<"tocf_learning", 'BigInt'>
    readonly chinese: FieldRef<"tocf_learning", 'String'>
    readonly pinyin: FieldRef<"tocf_learning", 'String'>
    readonly english: FieldRef<"tocf_learning", 'String'>
    readonly sentence_ch: FieldRef<"tocf_learning", 'String'>
    readonly sentence_eng: FieldRef<"tocf_learning", 'String'>
    readonly level: FieldRef<"tocf_learning", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tocf_learning findUnique
   */
  export type tocf_learningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocf_learning
     */
    select?: tocf_learningSelect<ExtArgs> | null
    /**
     * Filter, which tocf_learning to fetch.
     */
    where: tocf_learningWhereUniqueInput
  }

  /**
   * tocf_learning findUniqueOrThrow
   */
  export type tocf_learningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocf_learning
     */
    select?: tocf_learningSelect<ExtArgs> | null
    /**
     * Filter, which tocf_learning to fetch.
     */
    where: tocf_learningWhereUniqueInput
  }

  /**
   * tocf_learning findFirst
   */
  export type tocf_learningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocf_learning
     */
    select?: tocf_learningSelect<ExtArgs> | null
    /**
     * Filter, which tocf_learning to fetch.
     */
    where?: tocf_learningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tocf_learnings to fetch.
     */
    orderBy?: tocf_learningOrderByWithRelationInput | tocf_learningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tocf_learnings.
     */
    cursor?: tocf_learningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tocf_learnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tocf_learnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tocf_learnings.
     */
    distinct?: Tocf_learningScalarFieldEnum | Tocf_learningScalarFieldEnum[]
  }

  /**
   * tocf_learning findFirstOrThrow
   */
  export type tocf_learningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocf_learning
     */
    select?: tocf_learningSelect<ExtArgs> | null
    /**
     * Filter, which tocf_learning to fetch.
     */
    where?: tocf_learningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tocf_learnings to fetch.
     */
    orderBy?: tocf_learningOrderByWithRelationInput | tocf_learningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tocf_learnings.
     */
    cursor?: tocf_learningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tocf_learnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tocf_learnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tocf_learnings.
     */
    distinct?: Tocf_learningScalarFieldEnum | Tocf_learningScalarFieldEnum[]
  }

  /**
   * tocf_learning findMany
   */
  export type tocf_learningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocf_learning
     */
    select?: tocf_learningSelect<ExtArgs> | null
    /**
     * Filter, which tocf_learnings to fetch.
     */
    where?: tocf_learningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tocf_learnings to fetch.
     */
    orderBy?: tocf_learningOrderByWithRelationInput | tocf_learningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tocf_learnings.
     */
    cursor?: tocf_learningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tocf_learnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tocf_learnings.
     */
    skip?: number
    distinct?: Tocf_learningScalarFieldEnum | Tocf_learningScalarFieldEnum[]
  }

  /**
   * tocf_learning create
   */
  export type tocf_learningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocf_learning
     */
    select?: tocf_learningSelect<ExtArgs> | null
    /**
     * The data needed to create a tocf_learning.
     */
    data: XOR<tocf_learningCreateInput, tocf_learningUncheckedCreateInput>
  }

  /**
   * tocf_learning createMany
   */
  export type tocf_learningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tocf_learnings.
     */
    data: tocf_learningCreateManyInput | tocf_learningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tocf_learning update
   */
  export type tocf_learningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocf_learning
     */
    select?: tocf_learningSelect<ExtArgs> | null
    /**
     * The data needed to update a tocf_learning.
     */
    data: XOR<tocf_learningUpdateInput, tocf_learningUncheckedUpdateInput>
    /**
     * Choose, which tocf_learning to update.
     */
    where: tocf_learningWhereUniqueInput
  }

  /**
   * tocf_learning updateMany
   */
  export type tocf_learningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tocf_learnings.
     */
    data: XOR<tocf_learningUpdateManyMutationInput, tocf_learningUncheckedUpdateManyInput>
    /**
     * Filter which tocf_learnings to update
     */
    where?: tocf_learningWhereInput
  }

  /**
   * tocf_learning upsert
   */
  export type tocf_learningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocf_learning
     */
    select?: tocf_learningSelect<ExtArgs> | null
    /**
     * The filter to search for the tocf_learning to update in case it exists.
     */
    where: tocf_learningWhereUniqueInput
    /**
     * In case the tocf_learning found by the `where` argument doesn't exist, create a new tocf_learning with this data.
     */
    create: XOR<tocf_learningCreateInput, tocf_learningUncheckedCreateInput>
    /**
     * In case the tocf_learning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tocf_learningUpdateInput, tocf_learningUncheckedUpdateInput>
  }

  /**
   * tocf_learning delete
   */
  export type tocf_learningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocf_learning
     */
    select?: tocf_learningSelect<ExtArgs> | null
    /**
     * Filter which tocf_learning to delete.
     */
    where: tocf_learningWhereUniqueInput
  }

  /**
   * tocf_learning deleteMany
   */
  export type tocf_learningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tocf_learnings to delete
     */
    where?: tocf_learningWhereInput
  }

  /**
   * tocf_learning without action
   */
  export type tocf_learningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocf_learning
     */
    select?: tocf_learningSelect<ExtArgs> | null
  }


  /**
   * Model tocfl_learning
   */

  export type AggregateTocfl_learning = {
    _count: Tocfl_learningCountAggregateOutputType | null
    _avg: Tocfl_learningAvgAggregateOutputType | null
    _sum: Tocfl_learningSumAggregateOutputType | null
    _min: Tocfl_learningMinAggregateOutputType | null
    _max: Tocfl_learningMaxAggregateOutputType | null
  }

  export type Tocfl_learningAvgAggregateOutputType = {
    id: number | null
  }

  export type Tocfl_learningSumAggregateOutputType = {
    id: number | null
  }

  export type Tocfl_learningMinAggregateOutputType = {
    id: number | null
    chinese: string | null
    pinyin: string | null
    english: string | null
    type: string | null
    level: string | null
    sentence_ch: string | null
    sentence_eng: string | null
  }

  export type Tocfl_learningMaxAggregateOutputType = {
    id: number | null
    chinese: string | null
    pinyin: string | null
    english: string | null
    type: string | null
    level: string | null
    sentence_ch: string | null
    sentence_eng: string | null
  }

  export type Tocfl_learningCountAggregateOutputType = {
    id: number
    chinese: number
    pinyin: number
    english: number
    type: number
    level: number
    sentence_ch: number
    sentence_eng: number
    _all: number
  }


  export type Tocfl_learningAvgAggregateInputType = {
    id?: true
  }

  export type Tocfl_learningSumAggregateInputType = {
    id?: true
  }

  export type Tocfl_learningMinAggregateInputType = {
    id?: true
    chinese?: true
    pinyin?: true
    english?: true
    type?: true
    level?: true
    sentence_ch?: true
    sentence_eng?: true
  }

  export type Tocfl_learningMaxAggregateInputType = {
    id?: true
    chinese?: true
    pinyin?: true
    english?: true
    type?: true
    level?: true
    sentence_ch?: true
    sentence_eng?: true
  }

  export type Tocfl_learningCountAggregateInputType = {
    id?: true
    chinese?: true
    pinyin?: true
    english?: true
    type?: true
    level?: true
    sentence_ch?: true
    sentence_eng?: true
    _all?: true
  }

  export type Tocfl_learningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tocfl_learning to aggregate.
     */
    where?: tocfl_learningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tocfl_learnings to fetch.
     */
    orderBy?: tocfl_learningOrderByWithRelationInput | tocfl_learningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tocfl_learningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tocfl_learnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tocfl_learnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tocfl_learnings
    **/
    _count?: true | Tocfl_learningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tocfl_learningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tocfl_learningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tocfl_learningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tocfl_learningMaxAggregateInputType
  }

  export type GetTocfl_learningAggregateType<T extends Tocfl_learningAggregateArgs> = {
        [P in keyof T & keyof AggregateTocfl_learning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTocfl_learning[P]>
      : GetScalarType<T[P], AggregateTocfl_learning[P]>
  }




  export type tocfl_learningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tocfl_learningWhereInput
    orderBy?: tocfl_learningOrderByWithAggregationInput | tocfl_learningOrderByWithAggregationInput[]
    by: Tocfl_learningScalarFieldEnum[] | Tocfl_learningScalarFieldEnum
    having?: tocfl_learningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tocfl_learningCountAggregateInputType | true
    _avg?: Tocfl_learningAvgAggregateInputType
    _sum?: Tocfl_learningSumAggregateInputType
    _min?: Tocfl_learningMinAggregateInputType
    _max?: Tocfl_learningMaxAggregateInputType
  }

  export type Tocfl_learningGroupByOutputType = {
    id: number
    chinese: string | null
    pinyin: string | null
    english: string | null
    type: string | null
    level: string | null
    sentence_ch: string | null
    sentence_eng: string | null
    _count: Tocfl_learningCountAggregateOutputType | null
    _avg: Tocfl_learningAvgAggregateOutputType | null
    _sum: Tocfl_learningSumAggregateOutputType | null
    _min: Tocfl_learningMinAggregateOutputType | null
    _max: Tocfl_learningMaxAggregateOutputType | null
  }

  type GetTocfl_learningGroupByPayload<T extends tocfl_learningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tocfl_learningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tocfl_learningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tocfl_learningGroupByOutputType[P]>
            : GetScalarType<T[P], Tocfl_learningGroupByOutputType[P]>
        }
      >
    >


  export type tocfl_learningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chinese?: boolean
    pinyin?: boolean
    english?: boolean
    type?: boolean
    level?: boolean
    sentence_ch?: boolean
    sentence_eng?: boolean
  }, ExtArgs["result"]["tocfl_learning"]>

  export type tocfl_learningSelectScalar = {
    id?: boolean
    chinese?: boolean
    pinyin?: boolean
    english?: boolean
    type?: boolean
    level?: boolean
    sentence_ch?: boolean
    sentence_eng?: boolean
  }



  export type $tocfl_learningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tocfl_learning"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chinese: string | null
      pinyin: string | null
      english: string | null
      type: string | null
      level: string | null
      sentence_ch: string | null
      sentence_eng: string | null
    }, ExtArgs["result"]["tocfl_learning"]>
    composites: {}
  }


  type tocfl_learningGetPayload<S extends boolean | null | undefined | tocfl_learningDefaultArgs> = $Result.GetResult<Prisma.$tocfl_learningPayload, S>

  type tocfl_learningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tocfl_learningFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tocfl_learningCountAggregateInputType | true
    }

  export interface tocfl_learningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tocfl_learning'], meta: { name: 'tocfl_learning' } }
    /**
     * Find zero or one Tocfl_learning that matches the filter.
     * @param {tocfl_learningFindUniqueArgs} args - Arguments to find a Tocfl_learning
     * @example
     * // Get one Tocfl_learning
     * const tocfl_learning = await prisma.tocfl_learning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tocfl_learningFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tocfl_learningFindUniqueArgs<ExtArgs>>
    ): Prisma__tocfl_learningClient<$Result.GetResult<Prisma.$tocfl_learningPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tocfl_learning that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tocfl_learningFindUniqueOrThrowArgs} args - Arguments to find a Tocfl_learning
     * @example
     * // Get one Tocfl_learning
     * const tocfl_learning = await prisma.tocfl_learning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tocfl_learningFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tocfl_learningFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tocfl_learningClient<$Result.GetResult<Prisma.$tocfl_learningPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tocfl_learning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tocfl_learningFindFirstArgs} args - Arguments to find a Tocfl_learning
     * @example
     * // Get one Tocfl_learning
     * const tocfl_learning = await prisma.tocfl_learning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tocfl_learningFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tocfl_learningFindFirstArgs<ExtArgs>>
    ): Prisma__tocfl_learningClient<$Result.GetResult<Prisma.$tocfl_learningPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tocfl_learning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tocfl_learningFindFirstOrThrowArgs} args - Arguments to find a Tocfl_learning
     * @example
     * // Get one Tocfl_learning
     * const tocfl_learning = await prisma.tocfl_learning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tocfl_learningFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tocfl_learningFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tocfl_learningClient<$Result.GetResult<Prisma.$tocfl_learningPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tocfl_learnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tocfl_learningFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tocfl_learnings
     * const tocfl_learnings = await prisma.tocfl_learning.findMany()
     * 
     * // Get first 10 Tocfl_learnings
     * const tocfl_learnings = await prisma.tocfl_learning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tocfl_learningWithIdOnly = await prisma.tocfl_learning.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends tocfl_learningFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tocfl_learningFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tocfl_learningPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tocfl_learning.
     * @param {tocfl_learningCreateArgs} args - Arguments to create a Tocfl_learning.
     * @example
     * // Create one Tocfl_learning
     * const Tocfl_learning = await prisma.tocfl_learning.create({
     *   data: {
     *     // ... data to create a Tocfl_learning
     *   }
     * })
     * 
    **/
    create<T extends tocfl_learningCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tocfl_learningCreateArgs<ExtArgs>>
    ): Prisma__tocfl_learningClient<$Result.GetResult<Prisma.$tocfl_learningPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tocfl_learnings.
     *     @param {tocfl_learningCreateManyArgs} args - Arguments to create many Tocfl_learnings.
     *     @example
     *     // Create many Tocfl_learnings
     *     const tocfl_learning = await prisma.tocfl_learning.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tocfl_learningCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tocfl_learningCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tocfl_learning.
     * @param {tocfl_learningDeleteArgs} args - Arguments to delete one Tocfl_learning.
     * @example
     * // Delete one Tocfl_learning
     * const Tocfl_learning = await prisma.tocfl_learning.delete({
     *   where: {
     *     // ... filter to delete one Tocfl_learning
     *   }
     * })
     * 
    **/
    delete<T extends tocfl_learningDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tocfl_learningDeleteArgs<ExtArgs>>
    ): Prisma__tocfl_learningClient<$Result.GetResult<Prisma.$tocfl_learningPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tocfl_learning.
     * @param {tocfl_learningUpdateArgs} args - Arguments to update one Tocfl_learning.
     * @example
     * // Update one Tocfl_learning
     * const tocfl_learning = await prisma.tocfl_learning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tocfl_learningUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tocfl_learningUpdateArgs<ExtArgs>>
    ): Prisma__tocfl_learningClient<$Result.GetResult<Prisma.$tocfl_learningPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tocfl_learnings.
     * @param {tocfl_learningDeleteManyArgs} args - Arguments to filter Tocfl_learnings to delete.
     * @example
     * // Delete a few Tocfl_learnings
     * const { count } = await prisma.tocfl_learning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tocfl_learningDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tocfl_learningDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tocfl_learnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tocfl_learningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tocfl_learnings
     * const tocfl_learning = await prisma.tocfl_learning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tocfl_learningUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tocfl_learningUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tocfl_learning.
     * @param {tocfl_learningUpsertArgs} args - Arguments to update or create a Tocfl_learning.
     * @example
     * // Update or create a Tocfl_learning
     * const tocfl_learning = await prisma.tocfl_learning.upsert({
     *   create: {
     *     // ... data to create a Tocfl_learning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tocfl_learning we want to update
     *   }
     * })
    **/
    upsert<T extends tocfl_learningUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tocfl_learningUpsertArgs<ExtArgs>>
    ): Prisma__tocfl_learningClient<$Result.GetResult<Prisma.$tocfl_learningPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tocfl_learnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tocfl_learningCountArgs} args - Arguments to filter Tocfl_learnings to count.
     * @example
     * // Count the number of Tocfl_learnings
     * const count = await prisma.tocfl_learning.count({
     *   where: {
     *     // ... the filter for the Tocfl_learnings we want to count
     *   }
     * })
    **/
    count<T extends tocfl_learningCountArgs>(
      args?: Subset<T, tocfl_learningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tocfl_learningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tocfl_learning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tocfl_learningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tocfl_learningAggregateArgs>(args: Subset<T, Tocfl_learningAggregateArgs>): Prisma.PrismaPromise<GetTocfl_learningAggregateType<T>>

    /**
     * Group by Tocfl_learning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tocfl_learningGroupByArgs} args - Group by arguments.
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
      T extends tocfl_learningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tocfl_learningGroupByArgs['orderBy'] }
        : { orderBy?: tocfl_learningGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tocfl_learningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTocfl_learningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tocfl_learning model
   */
  readonly fields: tocfl_learningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tocfl_learning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tocfl_learningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tocfl_learning model
   */ 
  interface tocfl_learningFieldRefs {
    readonly id: FieldRef<"tocfl_learning", 'Int'>
    readonly chinese: FieldRef<"tocfl_learning", 'String'>
    readonly pinyin: FieldRef<"tocfl_learning", 'String'>
    readonly english: FieldRef<"tocfl_learning", 'String'>
    readonly type: FieldRef<"tocfl_learning", 'String'>
    readonly level: FieldRef<"tocfl_learning", 'String'>
    readonly sentence_ch: FieldRef<"tocfl_learning", 'String'>
    readonly sentence_eng: FieldRef<"tocfl_learning", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tocfl_learning findUnique
   */
  export type tocfl_learningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocfl_learning
     */
    select?: tocfl_learningSelect<ExtArgs> | null
    /**
     * Filter, which tocfl_learning to fetch.
     */
    where: tocfl_learningWhereUniqueInput
  }

  /**
   * tocfl_learning findUniqueOrThrow
   */
  export type tocfl_learningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocfl_learning
     */
    select?: tocfl_learningSelect<ExtArgs> | null
    /**
     * Filter, which tocfl_learning to fetch.
     */
    where: tocfl_learningWhereUniqueInput
  }

  /**
   * tocfl_learning findFirst
   */
  export type tocfl_learningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocfl_learning
     */
    select?: tocfl_learningSelect<ExtArgs> | null
    /**
     * Filter, which tocfl_learning to fetch.
     */
    where?: tocfl_learningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tocfl_learnings to fetch.
     */
    orderBy?: tocfl_learningOrderByWithRelationInput | tocfl_learningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tocfl_learnings.
     */
    cursor?: tocfl_learningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tocfl_learnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tocfl_learnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tocfl_learnings.
     */
    distinct?: Tocfl_learningScalarFieldEnum | Tocfl_learningScalarFieldEnum[]
  }

  /**
   * tocfl_learning findFirstOrThrow
   */
  export type tocfl_learningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocfl_learning
     */
    select?: tocfl_learningSelect<ExtArgs> | null
    /**
     * Filter, which tocfl_learning to fetch.
     */
    where?: tocfl_learningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tocfl_learnings to fetch.
     */
    orderBy?: tocfl_learningOrderByWithRelationInput | tocfl_learningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tocfl_learnings.
     */
    cursor?: tocfl_learningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tocfl_learnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tocfl_learnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tocfl_learnings.
     */
    distinct?: Tocfl_learningScalarFieldEnum | Tocfl_learningScalarFieldEnum[]
  }

  /**
   * tocfl_learning findMany
   */
  export type tocfl_learningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocfl_learning
     */
    select?: tocfl_learningSelect<ExtArgs> | null
    /**
     * Filter, which tocfl_learnings to fetch.
     */
    where?: tocfl_learningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tocfl_learnings to fetch.
     */
    orderBy?: tocfl_learningOrderByWithRelationInput | tocfl_learningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tocfl_learnings.
     */
    cursor?: tocfl_learningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tocfl_learnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tocfl_learnings.
     */
    skip?: number
    distinct?: Tocfl_learningScalarFieldEnum | Tocfl_learningScalarFieldEnum[]
  }

  /**
   * tocfl_learning create
   */
  export type tocfl_learningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocfl_learning
     */
    select?: tocfl_learningSelect<ExtArgs> | null
    /**
     * The data needed to create a tocfl_learning.
     */
    data?: XOR<tocfl_learningCreateInput, tocfl_learningUncheckedCreateInput>
  }

  /**
   * tocfl_learning createMany
   */
  export type tocfl_learningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tocfl_learnings.
     */
    data: tocfl_learningCreateManyInput | tocfl_learningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tocfl_learning update
   */
  export type tocfl_learningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocfl_learning
     */
    select?: tocfl_learningSelect<ExtArgs> | null
    /**
     * The data needed to update a tocfl_learning.
     */
    data: XOR<tocfl_learningUpdateInput, tocfl_learningUncheckedUpdateInput>
    /**
     * Choose, which tocfl_learning to update.
     */
    where: tocfl_learningWhereUniqueInput
  }

  /**
   * tocfl_learning updateMany
   */
  export type tocfl_learningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tocfl_learnings.
     */
    data: XOR<tocfl_learningUpdateManyMutationInput, tocfl_learningUncheckedUpdateManyInput>
    /**
     * Filter which tocfl_learnings to update
     */
    where?: tocfl_learningWhereInput
  }

  /**
   * tocfl_learning upsert
   */
  export type tocfl_learningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocfl_learning
     */
    select?: tocfl_learningSelect<ExtArgs> | null
    /**
     * The filter to search for the tocfl_learning to update in case it exists.
     */
    where: tocfl_learningWhereUniqueInput
    /**
     * In case the tocfl_learning found by the `where` argument doesn't exist, create a new tocfl_learning with this data.
     */
    create: XOR<tocfl_learningCreateInput, tocfl_learningUncheckedCreateInput>
    /**
     * In case the tocfl_learning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tocfl_learningUpdateInput, tocfl_learningUncheckedUpdateInput>
  }

  /**
   * tocfl_learning delete
   */
  export type tocfl_learningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocfl_learning
     */
    select?: tocfl_learningSelect<ExtArgs> | null
    /**
     * Filter which tocfl_learning to delete.
     */
    where: tocfl_learningWhereUniqueInput
  }

  /**
   * tocfl_learning deleteMany
   */
  export type tocfl_learningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tocfl_learnings to delete
     */
    where?: tocfl_learningWhereInput
  }

  /**
   * tocfl_learning without action
   */
  export type tocfl_learningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tocfl_learning
     */
    select?: tocfl_learningSelect<ExtArgs> | null
  }


  /**
   * Model user_roles
   */

  export type AggregateUser_roles = {
    _count: User_rolesCountAggregateOutputType | null
    _avg: User_rolesAvgAggregateOutputType | null
    _sum: User_rolesSumAggregateOutputType | null
    _min: User_rolesMinAggregateOutputType | null
    _max: User_rolesMaxAggregateOutputType | null
  }

  export type User_rolesAvgAggregateOutputType = {
    roleId: number | null
    userId: number | null
  }

  export type User_rolesSumAggregateOutputType = {
    roleId: number | null
    userId: number | null
  }

  export type User_rolesMinAggregateOutputType = {
    createdAt: Date | null
    updatedAt: Date | null
    roleId: number | null
    userId: number | null
  }

  export type User_rolesMaxAggregateOutputType = {
    createdAt: Date | null
    updatedAt: Date | null
    roleId: number | null
    userId: number | null
  }

  export type User_rolesCountAggregateOutputType = {
    createdAt: number
    updatedAt: number
    roleId: number
    userId: number
    _all: number
  }


  export type User_rolesAvgAggregateInputType = {
    roleId?: true
    userId?: true
  }

  export type User_rolesSumAggregateInputType = {
    roleId?: true
    userId?: true
  }

  export type User_rolesMinAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    roleId?: true
    userId?: true
  }

  export type User_rolesMaxAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    roleId?: true
    userId?: true
  }

  export type User_rolesCountAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    roleId?: true
    userId?: true
    _all?: true
  }

  export type User_rolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles to aggregate.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_roles
    **/
    _count?: true | User_rolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_rolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_rolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_rolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_rolesMaxAggregateInputType
  }

  export type GetUser_rolesAggregateType<T extends User_rolesAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_roles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_roles[P]>
      : GetScalarType<T[P], AggregateUser_roles[P]>
  }




  export type user_rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_rolesWhereInput
    orderBy?: user_rolesOrderByWithAggregationInput | user_rolesOrderByWithAggregationInput[]
    by: User_rolesScalarFieldEnum[] | User_rolesScalarFieldEnum
    having?: user_rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_rolesCountAggregateInputType | true
    _avg?: User_rolesAvgAggregateInputType
    _sum?: User_rolesSumAggregateInputType
    _min?: User_rolesMinAggregateInputType
    _max?: User_rolesMaxAggregateInputType
  }

  export type User_rolesGroupByOutputType = {
    createdAt: Date
    updatedAt: Date
    roleId: number
    userId: number
    _count: User_rolesCountAggregateOutputType | null
    _avg: User_rolesAvgAggregateOutputType | null
    _sum: User_rolesSumAggregateOutputType | null
    _min: User_rolesMinAggregateOutputType | null
    _max: User_rolesMaxAggregateOutputType | null
  }

  type GetUser_rolesGroupByPayload<T extends user_rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_rolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_rolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_rolesGroupByOutputType[P]>
            : GetScalarType<T[P], User_rolesGroupByOutputType[P]>
        }
      >
    >


  export type user_rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    createdAt?: boolean
    updatedAt?: boolean
    roleId?: boolean
    userId?: boolean
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_roles"]>

  export type user_rolesSelectScalar = {
    createdAt?: boolean
    updatedAt?: boolean
    roleId?: boolean
    userId?: boolean
  }


  export type user_rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }


  export type $user_rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_roles"
    objects: {
      roles: Prisma.$rolesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      createdAt: Date
      updatedAt: Date
      roleId: number
      userId: number
    }, ExtArgs["result"]["user_roles"]>
    composites: {}
  }


  type user_rolesGetPayload<S extends boolean | null | undefined | user_rolesDefaultArgs> = $Result.GetResult<Prisma.$user_rolesPayload, S>

  type user_rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_rolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_rolesCountAggregateInputType | true
    }

  export interface user_rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_roles'], meta: { name: 'user_roles' } }
    /**
     * Find zero or one User_roles that matches the filter.
     * @param {user_rolesFindUniqueArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_rolesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesFindUniqueArgs<ExtArgs>>
    ): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User_roles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {user_rolesFindUniqueOrThrowArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_rolesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindFirstArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_rolesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesFindFirstArgs<ExtArgs>>
    ): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User_roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindFirstOrThrowArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_rolesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_roles
     * const user_roles = await prisma.user_roles.findMany()
     * 
     * // Get first 10 User_roles
     * const user_roles = await prisma.user_roles.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const user_rolesWithCreatedAtOnly = await prisma.user_roles.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends user_rolesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User_roles.
     * @param {user_rolesCreateArgs} args - Arguments to create a User_roles.
     * @example
     * // Create one User_roles
     * const User_roles = await prisma.user_roles.create({
     *   data: {
     *     // ... data to create a User_roles
     *   }
     * })
     * 
    **/
    create<T extends user_rolesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesCreateArgs<ExtArgs>>
    ): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many User_roles.
     *     @param {user_rolesCreateManyArgs} args - Arguments to create many User_roles.
     *     @example
     *     // Create many User_roles
     *     const user_roles = await prisma.user_roles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_rolesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_roles.
     * @param {user_rolesDeleteArgs} args - Arguments to delete one User_roles.
     * @example
     * // Delete one User_roles
     * const User_roles = await prisma.user_roles.delete({
     *   where: {
     *     // ... filter to delete one User_roles
     *   }
     * })
     * 
    **/
    delete<T extends user_rolesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesDeleteArgs<ExtArgs>>
    ): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User_roles.
     * @param {user_rolesUpdateArgs} args - Arguments to update one User_roles.
     * @example
     * // Update one User_roles
     * const user_roles = await prisma.user_roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_rolesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesUpdateArgs<ExtArgs>>
    ): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more User_roles.
     * @param {user_rolesDeleteManyArgs} args - Arguments to filter User_roles to delete.
     * @example
     * // Delete a few User_roles
     * const { count } = await prisma.user_roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_rolesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_roles
     * const user_roles = await prisma.user_roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_rolesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_roles.
     * @param {user_rolesUpsertArgs} args - Arguments to update or create a User_roles.
     * @example
     * // Update or create a User_roles
     * const user_roles = await prisma.user_roles.upsert({
     *   create: {
     *     // ... data to create a User_roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_roles we want to update
     *   }
     * })
    **/
    upsert<T extends user_rolesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesUpsertArgs<ExtArgs>>
    ): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesCountArgs} args - Arguments to filter User_roles to count.
     * @example
     * // Count the number of User_roles
     * const count = await prisma.user_roles.count({
     *   where: {
     *     // ... the filter for the User_roles we want to count
     *   }
     * })
    **/
    count<T extends user_rolesCountArgs>(
      args?: Subset<T, user_rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_rolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_rolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_rolesAggregateArgs>(args: Subset<T, User_rolesAggregateArgs>): Prisma.PrismaPromise<GetUser_rolesAggregateType<T>>

    /**
     * Group by User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesGroupByArgs} args - Group by arguments.
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
      T extends user_rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_rolesGroupByArgs['orderBy'] }
        : { orderBy?: user_rolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_rolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_roles model
   */
  readonly fields: user_rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    roles<T extends rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolesDefaultArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user_roles model
   */ 
  interface user_rolesFieldRefs {
    readonly createdAt: FieldRef<"user_roles", 'DateTime'>
    readonly updatedAt: FieldRef<"user_roles", 'DateTime'>
    readonly roleId: FieldRef<"user_roles", 'Int'>
    readonly userId: FieldRef<"user_roles", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_roles findUnique
   */
  export type user_rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where: user_rolesWhereUniqueInput
  }

  /**
   * user_roles findUniqueOrThrow
   */
  export type user_rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where: user_rolesWhereUniqueInput
  }

  /**
   * user_roles findFirst
   */
  export type user_rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }

  /**
   * user_roles findFirstOrThrow
   */
  export type user_rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }

  /**
   * user_roles findMany
   */
  export type user_rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_roles.
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }

  /**
   * user_roles create
   */
  export type user_rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a user_roles.
     */
    data: XOR<user_rolesCreateInput, user_rolesUncheckedCreateInput>
  }

  /**
   * user_roles createMany
   */
  export type user_rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_roles.
     */
    data: user_rolesCreateManyInput | user_rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_roles update
   */
  export type user_rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a user_roles.
     */
    data: XOR<user_rolesUpdateInput, user_rolesUncheckedUpdateInput>
    /**
     * Choose, which user_roles to update.
     */
    where: user_rolesWhereUniqueInput
  }

  /**
   * user_roles updateMany
   */
  export type user_rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyInput>
    /**
     * Filter which user_roles to update
     */
    where?: user_rolesWhereInput
  }

  /**
   * user_roles upsert
   */
  export type user_rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the user_roles to update in case it exists.
     */
    where: user_rolesWhereUniqueInput
    /**
     * In case the user_roles found by the `where` argument doesn't exist, create a new user_roles with this data.
     */
    create: XOR<user_rolesCreateInput, user_rolesUncheckedCreateInput>
    /**
     * In case the user_roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_rolesUpdateInput, user_rolesUncheckedUpdateInput>
  }

  /**
   * user_roles delete
   */
  export type user_rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter which user_roles to delete.
     */
    where: user_rolesWhereUniqueInput
  }

  /**
   * user_roles deleteMany
   */
  export type user_rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles to delete
     */
    where?: user_rolesWhereInput
  }

  /**
   * user_roles without action
   */
  export type user_rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
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
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
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
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
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
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
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
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user_roles?: boolean | users$user_rolesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_roles?: boolean | users$user_rolesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      user_roles: Prisma.$user_rolesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string | null
      email: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_roles<T extends users$user_rolesArgs<ExtArgs> = {}>(args?: Subset<T, users$user_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
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
  }

  /**
   * users.user_roles
   */
  export type users$user_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    where?: user_rolesWhereInput
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    cursor?: user_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const AnimesScalarFieldEnum: {
    id: 'id',
    englishTitle: 'englishTitle',
    japaneseTitle: 'japaneseTitle',
    startDate: 'startDate',
    endDate: 'endDate',
    year: 'year',
    subtype: 'subtype',
    status: 'status',
    posterImage: 'posterImage',
    episodeCount: 'episodeCount',
    episodeLength: 'episodeLength',
    totalLength: 'totalLength'
  };

  export type AnimesScalarFieldEnum = (typeof AnimesScalarFieldEnum)[keyof typeof AnimesScalarFieldEnum]


  export const SongsScalarFieldEnum: {
    id: 'id',
    chTitle: 'chTitle',
    enTitle: 'enTitle',
    artist: 'artist',
    year: 'year',
    description: 'description',
    chLyrics: 'chLyrics',
    enLyrics: 'enLyrics'
  };

  export type SongsScalarFieldEnum = (typeof SongsScalarFieldEnum)[keyof typeof SongsScalarFieldEnum]


  export const PostgresScalarFieldEnum: {
    id: 'id',
    chinese: 'chinese',
    pinyin: 'pinyin',
    english: 'english',
    type: 'type',
    level: 'level',
    sentence_ch: 'sentence_ch',
    sentence_eng: 'sentence_eng'
  };

  export type PostgresScalarFieldEnum = (typeof PostgresScalarFieldEnum)[keyof typeof PostgresScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const Tocf_learningScalarFieldEnum: {
    id: 'id',
    chinese: 'chinese',
    pinyin: 'pinyin',
    english: 'english',
    sentence_ch: 'sentence_ch',
    sentence_eng: 'sentence_eng',
    level: 'level'
  };

  export type Tocf_learningScalarFieldEnum = (typeof Tocf_learningScalarFieldEnum)[keyof typeof Tocf_learningScalarFieldEnum]


  export const Tocfl_learningScalarFieldEnum: {
    id: 'id',
    chinese: 'chinese',
    pinyin: 'pinyin',
    english: 'english',
    type: 'type',
    level: 'level',
    sentence_ch: 'sentence_ch',
    sentence_eng: 'sentence_eng'
  };

  export type Tocfl_learningScalarFieldEnum = (typeof Tocfl_learningScalarFieldEnum)[keyof typeof Tocfl_learningScalarFieldEnum]


  export const User_rolesScalarFieldEnum: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    roleId: 'roleId',
    userId: 'userId'
  };

  export type User_rolesScalarFieldEnum = (typeof User_rolesScalarFieldEnum)[keyof typeof User_rolesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AnimesWhereInput = {
    AND?: AnimesWhereInput | AnimesWhereInput[]
    OR?: AnimesWhereInput[]
    NOT?: AnimesWhereInput | AnimesWhereInput[]
    id?: IntFilter<"Animes"> | number
    englishTitle?: StringNullableFilter<"Animes"> | string | null
    japaneseTitle?: StringNullableFilter<"Animes"> | string | null
    startDate?: StringNullableFilter<"Animes"> | string | null
    endDate?: StringNullableFilter<"Animes"> | string | null
    year?: StringNullableFilter<"Animes"> | string | null
    subtype?: StringNullableFilter<"Animes"> | string | null
    status?: StringNullableFilter<"Animes"> | string | null
    posterImage?: StringNullableFilter<"Animes"> | string | null
    episodeCount?: StringNullableFilter<"Animes"> | string | null
    episodeLength?: StringNullableFilter<"Animes"> | string | null
    totalLength?: StringNullableFilter<"Animes"> | string | null
  }

  export type AnimesOrderByWithRelationInput = {
    id?: SortOrder
    englishTitle?: SortOrderInput | SortOrder
    japaneseTitle?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    subtype?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    posterImage?: SortOrderInput | SortOrder
    episodeCount?: SortOrderInput | SortOrder
    episodeLength?: SortOrderInput | SortOrder
    totalLength?: SortOrderInput | SortOrder
  }

  export type AnimesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnimesWhereInput | AnimesWhereInput[]
    OR?: AnimesWhereInput[]
    NOT?: AnimesWhereInput | AnimesWhereInput[]
    englishTitle?: StringNullableFilter<"Animes"> | string | null
    japaneseTitle?: StringNullableFilter<"Animes"> | string | null
    startDate?: StringNullableFilter<"Animes"> | string | null
    endDate?: StringNullableFilter<"Animes"> | string | null
    year?: StringNullableFilter<"Animes"> | string | null
    subtype?: StringNullableFilter<"Animes"> | string | null
    status?: StringNullableFilter<"Animes"> | string | null
    posterImage?: StringNullableFilter<"Animes"> | string | null
    episodeCount?: StringNullableFilter<"Animes"> | string | null
    episodeLength?: StringNullableFilter<"Animes"> | string | null
    totalLength?: StringNullableFilter<"Animes"> | string | null
  }, "id">

  export type AnimesOrderByWithAggregationInput = {
    id?: SortOrder
    englishTitle?: SortOrderInput | SortOrder
    japaneseTitle?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    subtype?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    posterImage?: SortOrderInput | SortOrder
    episodeCount?: SortOrderInput | SortOrder
    episodeLength?: SortOrderInput | SortOrder
    totalLength?: SortOrderInput | SortOrder
    _count?: AnimesCountOrderByAggregateInput
    _avg?: AnimesAvgOrderByAggregateInput
    _max?: AnimesMaxOrderByAggregateInput
    _min?: AnimesMinOrderByAggregateInput
    _sum?: AnimesSumOrderByAggregateInput
  }

  export type AnimesScalarWhereWithAggregatesInput = {
    AND?: AnimesScalarWhereWithAggregatesInput | AnimesScalarWhereWithAggregatesInput[]
    OR?: AnimesScalarWhereWithAggregatesInput[]
    NOT?: AnimesScalarWhereWithAggregatesInput | AnimesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Animes"> | number
    englishTitle?: StringNullableWithAggregatesFilter<"Animes"> | string | null
    japaneseTitle?: StringNullableWithAggregatesFilter<"Animes"> | string | null
    startDate?: StringNullableWithAggregatesFilter<"Animes"> | string | null
    endDate?: StringNullableWithAggregatesFilter<"Animes"> | string | null
    year?: StringNullableWithAggregatesFilter<"Animes"> | string | null
    subtype?: StringNullableWithAggregatesFilter<"Animes"> | string | null
    status?: StringNullableWithAggregatesFilter<"Animes"> | string | null
    posterImage?: StringNullableWithAggregatesFilter<"Animes"> | string | null
    episodeCount?: StringNullableWithAggregatesFilter<"Animes"> | string | null
    episodeLength?: StringNullableWithAggregatesFilter<"Animes"> | string | null
    totalLength?: StringNullableWithAggregatesFilter<"Animes"> | string | null
  }

  export type SongsWhereInput = {
    AND?: SongsWhereInput | SongsWhereInput[]
    OR?: SongsWhereInput[]
    NOT?: SongsWhereInput | SongsWhereInput[]
    id?: IntFilter<"Songs"> | number
    chTitle?: StringNullableFilter<"Songs"> | string | null
    enTitle?: StringNullableFilter<"Songs"> | string | null
    artist?: StringNullableFilter<"Songs"> | string | null
    year?: StringNullableFilter<"Songs"> | string | null
    description?: StringNullableFilter<"Songs"> | string | null
    chLyrics?: StringNullableFilter<"Songs"> | string | null
    enLyrics?: StringNullableFilter<"Songs"> | string | null
  }

  export type SongsOrderByWithRelationInput = {
    id?: SortOrder
    chTitle?: SortOrderInput | SortOrder
    enTitle?: SortOrderInput | SortOrder
    artist?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    chLyrics?: SortOrderInput | SortOrder
    enLyrics?: SortOrderInput | SortOrder
  }

  export type SongsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SongsWhereInput | SongsWhereInput[]
    OR?: SongsWhereInput[]
    NOT?: SongsWhereInput | SongsWhereInput[]
    chTitle?: StringNullableFilter<"Songs"> | string | null
    enTitle?: StringNullableFilter<"Songs"> | string | null
    artist?: StringNullableFilter<"Songs"> | string | null
    year?: StringNullableFilter<"Songs"> | string | null
    description?: StringNullableFilter<"Songs"> | string | null
    chLyrics?: StringNullableFilter<"Songs"> | string | null
    enLyrics?: StringNullableFilter<"Songs"> | string | null
  }, "id">

  export type SongsOrderByWithAggregationInput = {
    id?: SortOrder
    chTitle?: SortOrderInput | SortOrder
    enTitle?: SortOrderInput | SortOrder
    artist?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    chLyrics?: SortOrderInput | SortOrder
    enLyrics?: SortOrderInput | SortOrder
    _count?: SongsCountOrderByAggregateInput
    _avg?: SongsAvgOrderByAggregateInput
    _max?: SongsMaxOrderByAggregateInput
    _min?: SongsMinOrderByAggregateInput
    _sum?: SongsSumOrderByAggregateInput
  }

  export type SongsScalarWhereWithAggregatesInput = {
    AND?: SongsScalarWhereWithAggregatesInput | SongsScalarWhereWithAggregatesInput[]
    OR?: SongsScalarWhereWithAggregatesInput[]
    NOT?: SongsScalarWhereWithAggregatesInput | SongsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Songs"> | number
    chTitle?: StringNullableWithAggregatesFilter<"Songs"> | string | null
    enTitle?: StringNullableWithAggregatesFilter<"Songs"> | string | null
    artist?: StringNullableWithAggregatesFilter<"Songs"> | string | null
    year?: StringNullableWithAggregatesFilter<"Songs"> | string | null
    description?: StringNullableWithAggregatesFilter<"Songs"> | string | null
    chLyrics?: StringNullableWithAggregatesFilter<"Songs"> | string | null
    enLyrics?: StringNullableWithAggregatesFilter<"Songs"> | string | null
  }

  export type postgresWhereInput = {
    AND?: postgresWhereInput | postgresWhereInput[]
    OR?: postgresWhereInput[]
    NOT?: postgresWhereInput | postgresWhereInput[]
    id?: IntFilter<"postgres"> | number
    chinese?: StringNullableFilter<"postgres"> | string | null
    pinyin?: StringNullableFilter<"postgres"> | string | null
    english?: StringNullableFilter<"postgres"> | string | null
    type?: StringNullableFilter<"postgres"> | string | null
    level?: StringNullableFilter<"postgres"> | string | null
    sentence_ch?: StringNullableFilter<"postgres"> | string | null
    sentence_eng?: StringNullableFilter<"postgres"> | string | null
  }

  export type postgresOrderByWithRelationInput = {
    id?: SortOrder
    chinese?: SortOrderInput | SortOrder
    pinyin?: SortOrderInput | SortOrder
    english?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    sentence_ch?: SortOrderInput | SortOrder
    sentence_eng?: SortOrderInput | SortOrder
  }

  export type postgresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: postgresWhereInput | postgresWhereInput[]
    OR?: postgresWhereInput[]
    NOT?: postgresWhereInput | postgresWhereInput[]
    chinese?: StringNullableFilter<"postgres"> | string | null
    pinyin?: StringNullableFilter<"postgres"> | string | null
    english?: StringNullableFilter<"postgres"> | string | null
    type?: StringNullableFilter<"postgres"> | string | null
    level?: StringNullableFilter<"postgres"> | string | null
    sentence_ch?: StringNullableFilter<"postgres"> | string | null
    sentence_eng?: StringNullableFilter<"postgres"> | string | null
  }, "id">

  export type postgresOrderByWithAggregationInput = {
    id?: SortOrder
    chinese?: SortOrderInput | SortOrder
    pinyin?: SortOrderInput | SortOrder
    english?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    sentence_ch?: SortOrderInput | SortOrder
    sentence_eng?: SortOrderInput | SortOrder
    _count?: postgresCountOrderByAggregateInput
    _avg?: postgresAvgOrderByAggregateInput
    _max?: postgresMaxOrderByAggregateInput
    _min?: postgresMinOrderByAggregateInput
    _sum?: postgresSumOrderByAggregateInput
  }

  export type postgresScalarWhereWithAggregatesInput = {
    AND?: postgresScalarWhereWithAggregatesInput | postgresScalarWhereWithAggregatesInput[]
    OR?: postgresScalarWhereWithAggregatesInput[]
    NOT?: postgresScalarWhereWithAggregatesInput | postgresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"postgres"> | number
    chinese?: StringNullableWithAggregatesFilter<"postgres"> | string | null
    pinyin?: StringNullableWithAggregatesFilter<"postgres"> | string | null
    english?: StringNullableWithAggregatesFilter<"postgres"> | string | null
    type?: StringNullableWithAggregatesFilter<"postgres"> | string | null
    level?: StringNullableWithAggregatesFilter<"postgres"> | string | null
    sentence_ch?: StringNullableWithAggregatesFilter<"postgres"> | string | null
    sentence_eng?: StringNullableWithAggregatesFilter<"postgres"> | string | null
  }

  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: IntFilter<"roles"> | number
    name?: StringNullableFilter<"roles"> | string | null
    createdAt?: DateTimeFilter<"roles"> | Date | string
    updatedAt?: DateTimeFilter<"roles"> | Date | string
    user_roles?: User_rolesListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_roles?: user_rolesOrderByRelationAggregateInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    name?: StringNullableFilter<"roles"> | string | null
    createdAt?: DateTimeFilter<"roles"> | Date | string
    updatedAt?: DateTimeFilter<"roles"> | Date | string
    user_roles?: User_rolesListRelationFilter
  }, "id">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: rolesCountOrderByAggregateInput
    _avg?: rolesAvgOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
    _sum?: rolesSumOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"roles"> | number
    name?: StringNullableWithAggregatesFilter<"roles"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"roles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"roles"> | Date | string
  }

  export type tocf_learningWhereInput = {
    AND?: tocf_learningWhereInput | tocf_learningWhereInput[]
    OR?: tocf_learningWhereInput[]
    NOT?: tocf_learningWhereInput | tocf_learningWhereInput[]
    id?: BigIntFilter<"tocf_learning"> | bigint | number
    chinese?: StringNullableFilter<"tocf_learning"> | string | null
    pinyin?: StringNullableFilter<"tocf_learning"> | string | null
    english?: StringNullableFilter<"tocf_learning"> | string | null
    sentence_ch?: StringNullableFilter<"tocf_learning"> | string | null
    sentence_eng?: StringNullableFilter<"tocf_learning"> | string | null
    level?: StringNullableFilter<"tocf_learning"> | string | null
  }

  export type tocf_learningOrderByWithRelationInput = {
    id?: SortOrder
    chinese?: SortOrderInput | SortOrder
    pinyin?: SortOrderInput | SortOrder
    english?: SortOrderInput | SortOrder
    sentence_ch?: SortOrderInput | SortOrder
    sentence_eng?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
  }

  export type tocf_learningWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: tocf_learningWhereInput | tocf_learningWhereInput[]
    OR?: tocf_learningWhereInput[]
    NOT?: tocf_learningWhereInput | tocf_learningWhereInput[]
    chinese?: StringNullableFilter<"tocf_learning"> | string | null
    pinyin?: StringNullableFilter<"tocf_learning"> | string | null
    english?: StringNullableFilter<"tocf_learning"> | string | null
    sentence_ch?: StringNullableFilter<"tocf_learning"> | string | null
    sentence_eng?: StringNullableFilter<"tocf_learning"> | string | null
    level?: StringNullableFilter<"tocf_learning"> | string | null
  }, "id">

  export type tocf_learningOrderByWithAggregationInput = {
    id?: SortOrder
    chinese?: SortOrderInput | SortOrder
    pinyin?: SortOrderInput | SortOrder
    english?: SortOrderInput | SortOrder
    sentence_ch?: SortOrderInput | SortOrder
    sentence_eng?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    _count?: tocf_learningCountOrderByAggregateInput
    _avg?: tocf_learningAvgOrderByAggregateInput
    _max?: tocf_learningMaxOrderByAggregateInput
    _min?: tocf_learningMinOrderByAggregateInput
    _sum?: tocf_learningSumOrderByAggregateInput
  }

  export type tocf_learningScalarWhereWithAggregatesInput = {
    AND?: tocf_learningScalarWhereWithAggregatesInput | tocf_learningScalarWhereWithAggregatesInput[]
    OR?: tocf_learningScalarWhereWithAggregatesInput[]
    NOT?: tocf_learningScalarWhereWithAggregatesInput | tocf_learningScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"tocf_learning"> | bigint | number
    chinese?: StringNullableWithAggregatesFilter<"tocf_learning"> | string | null
    pinyin?: StringNullableWithAggregatesFilter<"tocf_learning"> | string | null
    english?: StringNullableWithAggregatesFilter<"tocf_learning"> | string | null
    sentence_ch?: StringNullableWithAggregatesFilter<"tocf_learning"> | string | null
    sentence_eng?: StringNullableWithAggregatesFilter<"tocf_learning"> | string | null
    level?: StringNullableWithAggregatesFilter<"tocf_learning"> | string | null
  }

  export type tocfl_learningWhereInput = {
    AND?: tocfl_learningWhereInput | tocfl_learningWhereInput[]
    OR?: tocfl_learningWhereInput[]
    NOT?: tocfl_learningWhereInput | tocfl_learningWhereInput[]
    id?: IntFilter<"tocfl_learning"> | number
    chinese?: StringNullableFilter<"tocfl_learning"> | string | null
    pinyin?: StringNullableFilter<"tocfl_learning"> | string | null
    english?: StringNullableFilter<"tocfl_learning"> | string | null
    type?: StringNullableFilter<"tocfl_learning"> | string | null
    level?: StringNullableFilter<"tocfl_learning"> | string | null
    sentence_ch?: StringNullableFilter<"tocfl_learning"> | string | null
    sentence_eng?: StringNullableFilter<"tocfl_learning"> | string | null
  }

  export type tocfl_learningOrderByWithRelationInput = {
    id?: SortOrder
    chinese?: SortOrderInput | SortOrder
    pinyin?: SortOrderInput | SortOrder
    english?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    sentence_ch?: SortOrderInput | SortOrder
    sentence_eng?: SortOrderInput | SortOrder
  }

  export type tocfl_learningWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tocfl_learningWhereInput | tocfl_learningWhereInput[]
    OR?: tocfl_learningWhereInput[]
    NOT?: tocfl_learningWhereInput | tocfl_learningWhereInput[]
    chinese?: StringNullableFilter<"tocfl_learning"> | string | null
    pinyin?: StringNullableFilter<"tocfl_learning"> | string | null
    english?: StringNullableFilter<"tocfl_learning"> | string | null
    type?: StringNullableFilter<"tocfl_learning"> | string | null
    level?: StringNullableFilter<"tocfl_learning"> | string | null
    sentence_ch?: StringNullableFilter<"tocfl_learning"> | string | null
    sentence_eng?: StringNullableFilter<"tocfl_learning"> | string | null
  }, "id">

  export type tocfl_learningOrderByWithAggregationInput = {
    id?: SortOrder
    chinese?: SortOrderInput | SortOrder
    pinyin?: SortOrderInput | SortOrder
    english?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    sentence_ch?: SortOrderInput | SortOrder
    sentence_eng?: SortOrderInput | SortOrder
    _count?: tocfl_learningCountOrderByAggregateInput
    _avg?: tocfl_learningAvgOrderByAggregateInput
    _max?: tocfl_learningMaxOrderByAggregateInput
    _min?: tocfl_learningMinOrderByAggregateInput
    _sum?: tocfl_learningSumOrderByAggregateInput
  }

  export type tocfl_learningScalarWhereWithAggregatesInput = {
    AND?: tocfl_learningScalarWhereWithAggregatesInput | tocfl_learningScalarWhereWithAggregatesInput[]
    OR?: tocfl_learningScalarWhereWithAggregatesInput[]
    NOT?: tocfl_learningScalarWhereWithAggregatesInput | tocfl_learningScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tocfl_learning"> | number
    chinese?: StringNullableWithAggregatesFilter<"tocfl_learning"> | string | null
    pinyin?: StringNullableWithAggregatesFilter<"tocfl_learning"> | string | null
    english?: StringNullableWithAggregatesFilter<"tocfl_learning"> | string | null
    type?: StringNullableWithAggregatesFilter<"tocfl_learning"> | string | null
    level?: StringNullableWithAggregatesFilter<"tocfl_learning"> | string | null
    sentence_ch?: StringNullableWithAggregatesFilter<"tocfl_learning"> | string | null
    sentence_eng?: StringNullableWithAggregatesFilter<"tocfl_learning"> | string | null
  }

  export type user_rolesWhereInput = {
    AND?: user_rolesWhereInput | user_rolesWhereInput[]
    OR?: user_rolesWhereInput[]
    NOT?: user_rolesWhereInput | user_rolesWhereInput[]
    createdAt?: DateTimeFilter<"user_roles"> | Date | string
    updatedAt?: DateTimeFilter<"user_roles"> | Date | string
    roleId?: IntFilter<"user_roles"> | number
    userId?: IntFilter<"user_roles"> | number
    roles?: XOR<RolesRelationFilter, rolesWhereInput>
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type user_rolesOrderByWithRelationInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
    userId?: SortOrder
    roles?: rolesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_rolesWhereUniqueInput = Prisma.AtLeast<{
    roleId_userId?: user_rolesRoleIdUserIdCompoundUniqueInput
    AND?: user_rolesWhereInput | user_rolesWhereInput[]
    OR?: user_rolesWhereInput[]
    NOT?: user_rolesWhereInput | user_rolesWhereInput[]
    createdAt?: DateTimeFilter<"user_roles"> | Date | string
    updatedAt?: DateTimeFilter<"user_roles"> | Date | string
    roleId?: IntFilter<"user_roles"> | number
    userId?: IntFilter<"user_roles"> | number
    roles?: XOR<RolesRelationFilter, rolesWhereInput>
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }, "roleId_userId">

  export type user_rolesOrderByWithAggregationInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
    userId?: SortOrder
    _count?: user_rolesCountOrderByAggregateInput
    _avg?: user_rolesAvgOrderByAggregateInput
    _max?: user_rolesMaxOrderByAggregateInput
    _min?: user_rolesMinOrderByAggregateInput
    _sum?: user_rolesSumOrderByAggregateInput
  }

  export type user_rolesScalarWhereWithAggregatesInput = {
    AND?: user_rolesScalarWhereWithAggregatesInput | user_rolesScalarWhereWithAggregatesInput[]
    OR?: user_rolesScalarWhereWithAggregatesInput[]
    NOT?: user_rolesScalarWhereWithAggregatesInput | user_rolesScalarWhereWithAggregatesInput[]
    createdAt?: DateTimeWithAggregatesFilter<"user_roles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user_roles"> | Date | string
    roleId?: IntWithAggregatesFilter<"user_roles"> | number
    userId?: IntWithAggregatesFilter<"user_roles"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    user_roles?: User_rolesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_roles?: user_rolesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    user_roles?: User_rolesListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    username?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type AnimesCreateInput = {
    englishTitle?: string | null
    japaneseTitle?: string | null
    startDate?: string | null
    endDate?: string | null
    year?: string | null
    subtype?: string | null
    status?: string | null
    posterImage?: string | null
    episodeCount?: string | null
    episodeLength?: string | null
    totalLength?: string | null
  }

  export type AnimesUncheckedCreateInput = {
    id?: number
    englishTitle?: string | null
    japaneseTitle?: string | null
    startDate?: string | null
    endDate?: string | null
    year?: string | null
    subtype?: string | null
    status?: string | null
    posterImage?: string | null
    episodeCount?: string | null
    episodeLength?: string | null
    totalLength?: string | null
  }

  export type AnimesUpdateInput = {
    englishTitle?: NullableStringFieldUpdateOperationsInput | string | null
    japaneseTitle?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    subtype?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    posterImage?: NullableStringFieldUpdateOperationsInput | string | null
    episodeCount?: NullableStringFieldUpdateOperationsInput | string | null
    episodeLength?: NullableStringFieldUpdateOperationsInput | string | null
    totalLength?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnimesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    englishTitle?: NullableStringFieldUpdateOperationsInput | string | null
    japaneseTitle?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    subtype?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    posterImage?: NullableStringFieldUpdateOperationsInput | string | null
    episodeCount?: NullableStringFieldUpdateOperationsInput | string | null
    episodeLength?: NullableStringFieldUpdateOperationsInput | string | null
    totalLength?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnimesCreateManyInput = {
    id?: number
    englishTitle?: string | null
    japaneseTitle?: string | null
    startDate?: string | null
    endDate?: string | null
    year?: string | null
    subtype?: string | null
    status?: string | null
    posterImage?: string | null
    episodeCount?: string | null
    episodeLength?: string | null
    totalLength?: string | null
  }

  export type AnimesUpdateManyMutationInput = {
    englishTitle?: NullableStringFieldUpdateOperationsInput | string | null
    japaneseTitle?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    subtype?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    posterImage?: NullableStringFieldUpdateOperationsInput | string | null
    episodeCount?: NullableStringFieldUpdateOperationsInput | string | null
    episodeLength?: NullableStringFieldUpdateOperationsInput | string | null
    totalLength?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnimesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    englishTitle?: NullableStringFieldUpdateOperationsInput | string | null
    japaneseTitle?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    subtype?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    posterImage?: NullableStringFieldUpdateOperationsInput | string | null
    episodeCount?: NullableStringFieldUpdateOperationsInput | string | null
    episodeLength?: NullableStringFieldUpdateOperationsInput | string | null
    totalLength?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SongsCreateInput = {
    chTitle?: string | null
    enTitle?: string | null
    artist?: string | null
    year?: string | null
    description?: string | null
    chLyrics?: string | null
    enLyrics?: string | null
  }

  export type SongsUncheckedCreateInput = {
    id?: number
    chTitle?: string | null
    enTitle?: string | null
    artist?: string | null
    year?: string | null
    description?: string | null
    chLyrics?: string | null
    enLyrics?: string | null
  }

  export type SongsUpdateInput = {
    chTitle?: NullableStringFieldUpdateOperationsInput | string | null
    enTitle?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chLyrics?: NullableStringFieldUpdateOperationsInput | string | null
    enLyrics?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SongsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chTitle?: NullableStringFieldUpdateOperationsInput | string | null
    enTitle?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chLyrics?: NullableStringFieldUpdateOperationsInput | string | null
    enLyrics?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SongsCreateManyInput = {
    id?: number
    chTitle?: string | null
    enTitle?: string | null
    artist?: string | null
    year?: string | null
    description?: string | null
    chLyrics?: string | null
    enLyrics?: string | null
  }

  export type SongsUpdateManyMutationInput = {
    chTitle?: NullableStringFieldUpdateOperationsInput | string | null
    enTitle?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chLyrics?: NullableStringFieldUpdateOperationsInput | string | null
    enLyrics?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SongsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chTitle?: NullableStringFieldUpdateOperationsInput | string | null
    enTitle?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chLyrics?: NullableStringFieldUpdateOperationsInput | string | null
    enLyrics?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type postgresCreateInput = {
    chinese?: string | null
    pinyin?: string | null
    english?: string | null
    type?: string | null
    level?: string | null
    sentence_ch?: string | null
    sentence_eng?: string | null
  }

  export type postgresUncheckedCreateInput = {
    id?: number
    chinese?: string | null
    pinyin?: string | null
    english?: string | null
    type?: string | null
    level?: string | null
    sentence_ch?: string | null
    sentence_eng?: string | null
  }

  export type postgresUpdateInput = {
    chinese?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_ch?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_eng?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type postgresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chinese?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_ch?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_eng?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type postgresCreateManyInput = {
    id?: number
    chinese?: string | null
    pinyin?: string | null
    english?: string | null
    type?: string | null
    level?: string | null
    sentence_ch?: string | null
    sentence_eng?: string | null
  }

  export type postgresUpdateManyMutationInput = {
    chinese?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_ch?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_eng?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type postgresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chinese?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_ch?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_eng?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rolesCreateInput = {
    id: number
    name?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user_roles?: user_rolesCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateInput = {
    id: number
    name?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_roles?: user_rolesUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_roles?: user_rolesUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesCreateManyInput = {
    id: number
    name?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type rolesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tocf_learningCreateInput = {
    id: bigint | number
    chinese?: string | null
    pinyin?: string | null
    english?: string | null
    sentence_ch?: string | null
    sentence_eng?: string | null
    level?: string | null
  }

  export type tocf_learningUncheckedCreateInput = {
    id: bigint | number
    chinese?: string | null
    pinyin?: string | null
    english?: string | null
    sentence_ch?: string | null
    sentence_eng?: string | null
    level?: string | null
  }

  export type tocf_learningUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chinese?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_ch?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_eng?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tocf_learningUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chinese?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_ch?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_eng?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tocf_learningCreateManyInput = {
    id: bigint | number
    chinese?: string | null
    pinyin?: string | null
    english?: string | null
    sentence_ch?: string | null
    sentence_eng?: string | null
    level?: string | null
  }

  export type tocf_learningUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chinese?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_ch?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_eng?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tocf_learningUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chinese?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_ch?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_eng?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tocfl_learningCreateInput = {
    chinese?: string | null
    pinyin?: string | null
    english?: string | null
    type?: string | null
    level?: string | null
    sentence_ch?: string | null
    sentence_eng?: string | null
  }

  export type tocfl_learningUncheckedCreateInput = {
    id?: number
    chinese?: string | null
    pinyin?: string | null
    english?: string | null
    type?: string | null
    level?: string | null
    sentence_ch?: string | null
    sentence_eng?: string | null
  }

  export type tocfl_learningUpdateInput = {
    chinese?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_ch?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_eng?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tocfl_learningUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chinese?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_ch?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_eng?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tocfl_learningCreateManyInput = {
    id?: number
    chinese?: string | null
    pinyin?: string | null
    english?: string | null
    type?: string | null
    level?: string | null
    sentence_ch?: string | null
    sentence_eng?: string | null
  }

  export type tocfl_learningUpdateManyMutationInput = {
    chinese?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_ch?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_eng?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tocfl_learningUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chinese?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_ch?: NullableStringFieldUpdateOperationsInput | string | null
    sentence_eng?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_rolesCreateInput = {
    createdAt: Date | string
    updatedAt: Date | string
    roles: rolesCreateNestedOneWithoutUser_rolesInput
    users: usersCreateNestedOneWithoutUser_rolesInput
  }

  export type user_rolesUncheckedCreateInput = {
    createdAt: Date | string
    updatedAt: Date | string
    roleId: number
    userId: number
  }

  export type user_rolesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: rolesUpdateOneRequiredWithoutUser_rolesNestedInput
    users?: usersUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_rolesUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type user_rolesCreateManyInput = {
    createdAt: Date | string
    updatedAt: Date | string
    roleId: number
    userId: number
  }

  export type user_rolesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    username?: string | null
    email?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user_roles?: user_rolesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username?: string | null
    email?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_roles?: user_rolesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_roles?: user_rolesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username?: string | null
    email?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type usersUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnimesCountOrderByAggregateInput = {
    id?: SortOrder
    englishTitle?: SortOrder
    japaneseTitle?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    year?: SortOrder
    subtype?: SortOrder
    status?: SortOrder
    posterImage?: SortOrder
    episodeCount?: SortOrder
    episodeLength?: SortOrder
    totalLength?: SortOrder
  }

  export type AnimesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AnimesMaxOrderByAggregateInput = {
    id?: SortOrder
    englishTitle?: SortOrder
    japaneseTitle?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    year?: SortOrder
    subtype?: SortOrder
    status?: SortOrder
    posterImage?: SortOrder
    episodeCount?: SortOrder
    episodeLength?: SortOrder
    totalLength?: SortOrder
  }

  export type AnimesMinOrderByAggregateInput = {
    id?: SortOrder
    englishTitle?: SortOrder
    japaneseTitle?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    year?: SortOrder
    subtype?: SortOrder
    status?: SortOrder
    posterImage?: SortOrder
    episodeCount?: SortOrder
    episodeLength?: SortOrder
    totalLength?: SortOrder
  }

  export type AnimesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SongsCountOrderByAggregateInput = {
    id?: SortOrder
    chTitle?: SortOrder
    enTitle?: SortOrder
    artist?: SortOrder
    year?: SortOrder
    description?: SortOrder
    chLyrics?: SortOrder
    enLyrics?: SortOrder
  }

  export type SongsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SongsMaxOrderByAggregateInput = {
    id?: SortOrder
    chTitle?: SortOrder
    enTitle?: SortOrder
    artist?: SortOrder
    year?: SortOrder
    description?: SortOrder
    chLyrics?: SortOrder
    enLyrics?: SortOrder
  }

  export type SongsMinOrderByAggregateInput = {
    id?: SortOrder
    chTitle?: SortOrder
    enTitle?: SortOrder
    artist?: SortOrder
    year?: SortOrder
    description?: SortOrder
    chLyrics?: SortOrder
    enLyrics?: SortOrder
  }

  export type SongsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type postgresCountOrderByAggregateInput = {
    id?: SortOrder
    chinese?: SortOrder
    pinyin?: SortOrder
    english?: SortOrder
    type?: SortOrder
    level?: SortOrder
    sentence_ch?: SortOrder
    sentence_eng?: SortOrder
  }

  export type postgresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type postgresMaxOrderByAggregateInput = {
    id?: SortOrder
    chinese?: SortOrder
    pinyin?: SortOrder
    english?: SortOrder
    type?: SortOrder
    level?: SortOrder
    sentence_ch?: SortOrder
    sentence_eng?: SortOrder
  }

  export type postgresMinOrderByAggregateInput = {
    id?: SortOrder
    chinese?: SortOrder
    pinyin?: SortOrder
    english?: SortOrder
    type?: SortOrder
    level?: SortOrder
    sentence_ch?: SortOrder
    sentence_eng?: SortOrder
  }

  export type postgresSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type User_rolesListRelationFilter = {
    every?: user_rolesWhereInput
    some?: user_rolesWhereInput
    none?: user_rolesWhereInput
  }

  export type user_rolesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type rolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type rolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type tocf_learningCountOrderByAggregateInput = {
    id?: SortOrder
    chinese?: SortOrder
    pinyin?: SortOrder
    english?: SortOrder
    sentence_ch?: SortOrder
    sentence_eng?: SortOrder
    level?: SortOrder
  }

  export type tocf_learningAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tocf_learningMaxOrderByAggregateInput = {
    id?: SortOrder
    chinese?: SortOrder
    pinyin?: SortOrder
    english?: SortOrder
    sentence_ch?: SortOrder
    sentence_eng?: SortOrder
    level?: SortOrder
  }

  export type tocf_learningMinOrderByAggregateInput = {
    id?: SortOrder
    chinese?: SortOrder
    pinyin?: SortOrder
    english?: SortOrder
    sentence_ch?: SortOrder
    sentence_eng?: SortOrder
    level?: SortOrder
  }

  export type tocf_learningSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
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

  export type tocfl_learningCountOrderByAggregateInput = {
    id?: SortOrder
    chinese?: SortOrder
    pinyin?: SortOrder
    english?: SortOrder
    type?: SortOrder
    level?: SortOrder
    sentence_ch?: SortOrder
    sentence_eng?: SortOrder
  }

  export type tocfl_learningAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tocfl_learningMaxOrderByAggregateInput = {
    id?: SortOrder
    chinese?: SortOrder
    pinyin?: SortOrder
    english?: SortOrder
    type?: SortOrder
    level?: SortOrder
    sentence_ch?: SortOrder
    sentence_eng?: SortOrder
  }

  export type tocfl_learningMinOrderByAggregateInput = {
    id?: SortOrder
    chinese?: SortOrder
    pinyin?: SortOrder
    english?: SortOrder
    type?: SortOrder
    level?: SortOrder
    sentence_ch?: SortOrder
    sentence_eng?: SortOrder
  }

  export type tocfl_learningSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolesRelationFilter = {
    is?: rolesWhereInput
    isNot?: rolesWhereInput
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type user_rolesRoleIdUserIdCompoundUniqueInput = {
    roleId: number
    userId: number
  }

  export type user_rolesCountOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
    userId?: SortOrder
  }

  export type user_rolesAvgOrderByAggregateInput = {
    roleId?: SortOrder
    userId?: SortOrder
  }

  export type user_rolesMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
    userId?: SortOrder
  }

  export type user_rolesMinOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
    userId?: SortOrder
  }

  export type user_rolesSumOrderByAggregateInput = {
    roleId?: SortOrder
    userId?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type user_rolesCreateNestedManyWithoutRolesInput = {
    create?: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput> | user_rolesCreateWithoutRolesInput[] | user_rolesUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutRolesInput | user_rolesCreateOrConnectWithoutRolesInput[]
    createMany?: user_rolesCreateManyRolesInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type user_rolesUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput> | user_rolesCreateWithoutRolesInput[] | user_rolesUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutRolesInput | user_rolesCreateOrConnectWithoutRolesInput[]
    createMany?: user_rolesCreateManyRolesInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type user_rolesUpdateManyWithoutRolesNestedInput = {
    create?: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput> | user_rolesCreateWithoutRolesInput[] | user_rolesUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutRolesInput | user_rolesCreateOrConnectWithoutRolesInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutRolesInput | user_rolesUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: user_rolesCreateManyRolesInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutRolesInput | user_rolesUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutRolesInput | user_rolesUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type user_rolesUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput> | user_rolesCreateWithoutRolesInput[] | user_rolesUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutRolesInput | user_rolesCreateOrConnectWithoutRolesInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutRolesInput | user_rolesUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: user_rolesCreateManyRolesInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutRolesInput | user_rolesUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutRolesInput | user_rolesUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type rolesCreateNestedOneWithoutUser_rolesInput = {
    create?: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUser_rolesInput
    connect?: rolesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_rolesInput = {
    create?: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_rolesInput
    connect?: usersWhereUniqueInput
  }

  export type rolesUpdateOneRequiredWithoutUser_rolesNestedInput = {
    create?: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUser_rolesInput
    upsert?: rolesUpsertWithoutUser_rolesInput
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUser_rolesInput, rolesUpdateWithoutUser_rolesInput>, rolesUncheckedUpdateWithoutUser_rolesInput>
  }

  export type usersUpdateOneRequiredWithoutUser_rolesNestedInput = {
    create?: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_rolesInput
    upsert?: usersUpsertWithoutUser_rolesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_rolesInput, usersUpdateWithoutUser_rolesInput>, usersUncheckedUpdateWithoutUser_rolesInput>
  }

  export type user_rolesCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput> | user_rolesCreateWithoutUsersInput[] | user_rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsersInput | user_rolesCreateOrConnectWithoutUsersInput[]
    createMany?: user_rolesCreateManyUsersInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type user_rolesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput> | user_rolesCreateWithoutUsersInput[] | user_rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsersInput | user_rolesCreateOrConnectWithoutUsersInput[]
    createMany?: user_rolesCreateManyUsersInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type user_rolesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput> | user_rolesCreateWithoutUsersInput[] | user_rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsersInput | user_rolesCreateOrConnectWithoutUsersInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutUsersInput | user_rolesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_rolesCreateManyUsersInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutUsersInput | user_rolesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutUsersInput | user_rolesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type user_rolesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput> | user_rolesCreateWithoutUsersInput[] | user_rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsersInput | user_rolesCreateOrConnectWithoutUsersInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutUsersInput | user_rolesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_rolesCreateManyUsersInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutUsersInput | user_rolesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutUsersInput | user_rolesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
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

  export type user_rolesCreateWithoutRolesInput = {
    createdAt: Date | string
    updatedAt: Date | string
    users: usersCreateNestedOneWithoutUser_rolesInput
  }

  export type user_rolesUncheckedCreateWithoutRolesInput = {
    createdAt: Date | string
    updatedAt: Date | string
    userId: number
  }

  export type user_rolesCreateOrConnectWithoutRolesInput = {
    where: user_rolesWhereUniqueInput
    create: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput>
  }

  export type user_rolesCreateManyRolesInputEnvelope = {
    data: user_rolesCreateManyRolesInput | user_rolesCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type user_rolesUpsertWithWhereUniqueWithoutRolesInput = {
    where: user_rolesWhereUniqueInput
    update: XOR<user_rolesUpdateWithoutRolesInput, user_rolesUncheckedUpdateWithoutRolesInput>
    create: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput>
  }

  export type user_rolesUpdateWithWhereUniqueWithoutRolesInput = {
    where: user_rolesWhereUniqueInput
    data: XOR<user_rolesUpdateWithoutRolesInput, user_rolesUncheckedUpdateWithoutRolesInput>
  }

  export type user_rolesUpdateManyWithWhereWithoutRolesInput = {
    where: user_rolesScalarWhereInput
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyWithoutRolesInput>
  }

  export type user_rolesScalarWhereInput = {
    AND?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
    OR?: user_rolesScalarWhereInput[]
    NOT?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
    createdAt?: DateTimeFilter<"user_roles"> | Date | string
    updatedAt?: DateTimeFilter<"user_roles"> | Date | string
    roleId?: IntFilter<"user_roles"> | number
    userId?: IntFilter<"user_roles"> | number
  }

  export type rolesCreateWithoutUser_rolesInput = {
    id: number
    name?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type rolesUncheckedCreateWithoutUser_rolesInput = {
    id: number
    name?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type rolesCreateOrConnectWithoutUser_rolesInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
  }

  export type usersCreateWithoutUser_rolesInput = {
    username?: string | null
    email?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type usersUncheckedCreateWithoutUser_rolesInput = {
    id?: number
    username?: string | null
    email?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type usersCreateOrConnectWithoutUser_rolesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
  }

  export type rolesUpsertWithoutUser_rolesInput = {
    update: XOR<rolesUpdateWithoutUser_rolesInput, rolesUncheckedUpdateWithoutUser_rolesInput>
    create: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutUser_rolesInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUser_rolesInput, rolesUncheckedUpdateWithoutUser_rolesInput>
  }

  export type rolesUpdateWithoutUser_rolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rolesUncheckedUpdateWithoutUser_rolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUpsertWithoutUser_rolesInput = {
    update: XOR<usersUpdateWithoutUser_rolesInput, usersUncheckedUpdateWithoutUser_rolesInput>
    create: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_rolesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_rolesInput, usersUncheckedUpdateWithoutUser_rolesInput>
  }

  export type usersUpdateWithoutUser_rolesInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateWithoutUser_rolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesCreateWithoutUsersInput = {
    createdAt: Date | string
    updatedAt: Date | string
    roles: rolesCreateNestedOneWithoutUser_rolesInput
  }

  export type user_rolesUncheckedCreateWithoutUsersInput = {
    createdAt: Date | string
    updatedAt: Date | string
    roleId: number
  }

  export type user_rolesCreateOrConnectWithoutUsersInput = {
    where: user_rolesWhereUniqueInput
    create: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput>
  }

  export type user_rolesCreateManyUsersInputEnvelope = {
    data: user_rolesCreateManyUsersInput | user_rolesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_rolesUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_rolesWhereUniqueInput
    update: XOR<user_rolesUpdateWithoutUsersInput, user_rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput>
  }

  export type user_rolesUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_rolesWhereUniqueInput
    data: XOR<user_rolesUpdateWithoutUsersInput, user_rolesUncheckedUpdateWithoutUsersInput>
  }

  export type user_rolesUpdateManyWithWhereWithoutUsersInput = {
    where: user_rolesScalarWhereInput
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_rolesCreateManyRolesInput = {
    createdAt: Date | string
    updatedAt: Date | string
    userId: number
  }

  export type user_rolesUpdateWithoutRolesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_rolesUncheckedUpdateWithoutRolesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type user_rolesUncheckedUpdateManyWithoutRolesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type user_rolesCreateManyUsersInput = {
    createdAt: Date | string
    updatedAt: Date | string
    roleId: number
  }

  export type user_rolesUpdateWithoutUsersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: rolesUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_rolesUncheckedUpdateWithoutUsersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type user_rolesUncheckedUpdateManyWithoutUsersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RolesCountOutputTypeDefaultArgs instead
     */
    export type RolesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnimesDefaultArgs instead
     */
    export type AnimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnimesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SongsDefaultArgs instead
     */
    export type SongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SongsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use postgresDefaultArgs instead
     */
    export type postgresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = postgresDefaultArgs<ExtArgs>
    /**
     * @deprecated Use rolesDefaultArgs instead
     */
    export type rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = rolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tocf_learningDefaultArgs instead
     */
    export type tocf_learningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tocf_learningDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tocfl_learningDefaultArgs instead
     */
    export type tocfl_learningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tocfl_learningDefaultArgs<ExtArgs>
    /**
     * @deprecated Use user_rolesDefaultArgs instead
     */
    export type user_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = user_rolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>

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