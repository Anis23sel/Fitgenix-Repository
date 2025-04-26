
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
 * Model Adherent
 * 
 */
export type Adherent = $Result.DefaultSelection<Prisma.$AdherentPayload>
/**
 * Model Adherent_sport
 * 
 */
export type Adherent_sport = $Result.DefaultSelection<Prisma.$Adherent_sportPayload>
/**
 * Model Sport
 * 
 */
export type Sport = $Result.DefaultSelection<Prisma.$SportPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Adherents
 * const adherents = await prisma.adherent.findMany()
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
   * // Fetch zero or more Adherents
   * const adherents = await prisma.adherent.findMany()
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
   * `prisma.adherent`: Exposes CRUD operations for the **Adherent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adherents
    * const adherents = await prisma.adherent.findMany()
    * ```
    */
  get adherent(): Prisma.AdherentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adherent_sport`: Exposes CRUD operations for the **Adherent_sport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adherent_sports
    * const adherent_sports = await prisma.adherent_sport.findMany()
    * ```
    */
  get adherent_sport(): Prisma.Adherent_sportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sport`: Exposes CRUD operations for the **Sport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sports
    * const sports = await prisma.sport.findMany()
    * ```
    */
  get sport(): Prisma.SportDelegate<ExtArgs, ClientOptions>;
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
    Adherent: 'Adherent',
    Adherent_sport: 'Adherent_sport',
    Sport: 'Sport'
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
      modelProps: "adherent" | "adherent_sport" | "sport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Adherent: {
        payload: Prisma.$AdherentPayload<ExtArgs>
        fields: Prisma.AdherentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdherentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdherentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherentPayload>
          }
          findFirst: {
            args: Prisma.AdherentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdherentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherentPayload>
          }
          findMany: {
            args: Prisma.AdherentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherentPayload>[]
          }
          create: {
            args: Prisma.AdherentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherentPayload>
          }
          createMany: {
            args: Prisma.AdherentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdherentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherentPayload>[]
          }
          delete: {
            args: Prisma.AdherentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherentPayload>
          }
          update: {
            args: Prisma.AdherentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherentPayload>
          }
          deleteMany: {
            args: Prisma.AdherentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdherentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdherentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherentPayload>[]
          }
          upsert: {
            args: Prisma.AdherentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherentPayload>
          }
          aggregate: {
            args: Prisma.AdherentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdherent>
          }
          groupBy: {
            args: Prisma.AdherentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdherentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdherentCountArgs<ExtArgs>
            result: $Utils.Optional<AdherentCountAggregateOutputType> | number
          }
        }
      }
      Adherent_sport: {
        payload: Prisma.$Adherent_sportPayload<ExtArgs>
        fields: Prisma.Adherent_sportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Adherent_sportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Adherent_sportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Adherent_sportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Adherent_sportPayload>
          }
          findFirst: {
            args: Prisma.Adherent_sportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Adherent_sportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Adherent_sportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Adherent_sportPayload>
          }
          findMany: {
            args: Prisma.Adherent_sportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Adherent_sportPayload>[]
          }
          create: {
            args: Prisma.Adherent_sportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Adherent_sportPayload>
          }
          createMany: {
            args: Prisma.Adherent_sportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Adherent_sportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Adherent_sportPayload>[]
          }
          delete: {
            args: Prisma.Adherent_sportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Adherent_sportPayload>
          }
          update: {
            args: Prisma.Adherent_sportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Adherent_sportPayload>
          }
          deleteMany: {
            args: Prisma.Adherent_sportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Adherent_sportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Adherent_sportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Adherent_sportPayload>[]
          }
          upsert: {
            args: Prisma.Adherent_sportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Adherent_sportPayload>
          }
          aggregate: {
            args: Prisma.Adherent_sportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdherent_sport>
          }
          groupBy: {
            args: Prisma.Adherent_sportGroupByArgs<ExtArgs>
            result: $Utils.Optional<Adherent_sportGroupByOutputType>[]
          }
          count: {
            args: Prisma.Adherent_sportCountArgs<ExtArgs>
            result: $Utils.Optional<Adherent_sportCountAggregateOutputType> | number
          }
        }
      }
      Sport: {
        payload: Prisma.$SportPayload<ExtArgs>
        fields: Prisma.SportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          findFirst: {
            args: Prisma.SportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          findMany: {
            args: Prisma.SportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>[]
          }
          create: {
            args: Prisma.SportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          createMany: {
            args: Prisma.SportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>[]
          }
          delete: {
            args: Prisma.SportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          update: {
            args: Prisma.SportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          deleteMany: {
            args: Prisma.SportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>[]
          }
          upsert: {
            args: Prisma.SportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          aggregate: {
            args: Prisma.SportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSport>
          }
          groupBy: {
            args: Prisma.SportGroupByArgs<ExtArgs>
            result: $Utils.Optional<SportGroupByOutputType>[]
          }
          count: {
            args: Prisma.SportCountArgs<ExtArgs>
            result: $Utils.Optional<SportCountAggregateOutputType> | number
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
    adherent?: AdherentOmit
    adherent_sport?: Adherent_sportOmit
    sport?: SportOmit
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
   * Count Type AdherentCountOutputType
   */

  export type AdherentCountOutputType = {
    Adherent_sport: number
  }

  export type AdherentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adherent_sport?: boolean | AdherentCountOutputTypeCountAdherent_sportArgs
  }

  // Custom InputTypes
  /**
   * AdherentCountOutputType without action
   */
  export type AdherentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdherentCountOutputType
     */
    select?: AdherentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdherentCountOutputType without action
   */
  export type AdherentCountOutputTypeCountAdherent_sportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Adherent_sportWhereInput
  }


  /**
   * Count Type SportCountOutputType
   */

  export type SportCountOutputType = {
    Adherent_sport: number
  }

  export type SportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adherent_sport?: boolean | SportCountOutputTypeCountAdherent_sportArgs
  }

  // Custom InputTypes
  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportCountOutputType
     */
    select?: SportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeCountAdherent_sportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Adherent_sportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Adherent
   */

  export type AggregateAdherent = {
    _count: AdherentCountAggregateOutputType | null
    _avg: AdherentAvgAggregateOutputType | null
    _sum: AdherentSumAggregateOutputType | null
    _min: AdherentMinAggregateOutputType | null
    _max: AdherentMaxAggregateOutputType | null
  }

  export type AdherentAvgAggregateOutputType = {
    id_adherent: number | null
    age: number | null
    nombre_sceance_restantes: number | null
    nombre_heures_restantes: number | null
  }

  export type AdherentSumAggregateOutputType = {
    id_adherent: number | null
    age: number | null
    nombre_sceance_restantes: number | null
    nombre_heures_restantes: number | null
  }

  export type AdherentMinAggregateOutputType = {
    id_adherent: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
    age: number | null
    gender: string | null
    goal: string | null
    nombre_sceance_restantes: number | null
    nombre_heures_restantes: number | null
    role: string | null
  }

  export type AdherentMaxAggregateOutputType = {
    id_adherent: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
    age: number | null
    gender: string | null
    goal: string | null
    nombre_sceance_restantes: number | null
    nombre_heures_restantes: number | null
    role: string | null
  }

  export type AdherentCountAggregateOutputType = {
    id_adherent: number
    nom: number
    prenom: number
    email: number
    password: number
    age: number
    gender: number
    goal: number
    nombre_sceance_restantes: number
    nombre_heures_restantes: number
    role: number
    _all: number
  }


  export type AdherentAvgAggregateInputType = {
    id_adherent?: true
    age?: true
    nombre_sceance_restantes?: true
    nombre_heures_restantes?: true
  }

  export type AdherentSumAggregateInputType = {
    id_adherent?: true
    age?: true
    nombre_sceance_restantes?: true
    nombre_heures_restantes?: true
  }

  export type AdherentMinAggregateInputType = {
    id_adherent?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    age?: true
    gender?: true
    goal?: true
    nombre_sceance_restantes?: true
    nombre_heures_restantes?: true
    role?: true
  }

  export type AdherentMaxAggregateInputType = {
    id_adherent?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    age?: true
    gender?: true
    goal?: true
    nombre_sceance_restantes?: true
    nombre_heures_restantes?: true
    role?: true
  }

  export type AdherentCountAggregateInputType = {
    id_adherent?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    age?: true
    gender?: true
    goal?: true
    nombre_sceance_restantes?: true
    nombre_heures_restantes?: true
    role?: true
    _all?: true
  }

  export type AdherentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adherent to aggregate.
     */
    where?: AdherentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adherents to fetch.
     */
    orderBy?: AdherentOrderByWithRelationInput | AdherentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdherentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adherents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adherents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adherents
    **/
    _count?: true | AdherentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdherentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdherentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdherentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdherentMaxAggregateInputType
  }

  export type GetAdherentAggregateType<T extends AdherentAggregateArgs> = {
        [P in keyof T & keyof AggregateAdherent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdherent[P]>
      : GetScalarType<T[P], AggregateAdherent[P]>
  }




  export type AdherentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdherentWhereInput
    orderBy?: AdherentOrderByWithAggregationInput | AdherentOrderByWithAggregationInput[]
    by: AdherentScalarFieldEnum[] | AdherentScalarFieldEnum
    having?: AdherentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdherentCountAggregateInputType | true
    _avg?: AdherentAvgAggregateInputType
    _sum?: AdherentSumAggregateInputType
    _min?: AdherentMinAggregateInputType
    _max?: AdherentMaxAggregateInputType
  }

  export type AdherentGroupByOutputType = {
    id_adherent: number
    nom: string
    prenom: string
    email: string
    password: string
    age: number
    gender: string
    goal: string | null
    nombre_sceance_restantes: number
    nombre_heures_restantes: number
    role: string | null
    _count: AdherentCountAggregateOutputType | null
    _avg: AdherentAvgAggregateOutputType | null
    _sum: AdherentSumAggregateOutputType | null
    _min: AdherentMinAggregateOutputType | null
    _max: AdherentMaxAggregateOutputType | null
  }

  type GetAdherentGroupByPayload<T extends AdherentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdherentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdherentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdherentGroupByOutputType[P]>
            : GetScalarType<T[P], AdherentGroupByOutputType[P]>
        }
      >
    >


  export type AdherentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_adherent?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    age?: boolean
    gender?: boolean
    goal?: boolean
    nombre_sceance_restantes?: boolean
    nombre_heures_restantes?: boolean
    role?: boolean
    Adherent_sport?: boolean | Adherent$Adherent_sportArgs<ExtArgs>
    _count?: boolean | AdherentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adherent"]>

  export type AdherentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_adherent?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    age?: boolean
    gender?: boolean
    goal?: boolean
    nombre_sceance_restantes?: boolean
    nombre_heures_restantes?: boolean
    role?: boolean
  }, ExtArgs["result"]["adherent"]>

  export type AdherentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_adherent?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    age?: boolean
    gender?: boolean
    goal?: boolean
    nombre_sceance_restantes?: boolean
    nombre_heures_restantes?: boolean
    role?: boolean
  }, ExtArgs["result"]["adherent"]>

  export type AdherentSelectScalar = {
    id_adherent?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    age?: boolean
    gender?: boolean
    goal?: boolean
    nombre_sceance_restantes?: boolean
    nombre_heures_restantes?: boolean
    role?: boolean
  }

  export type AdherentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_adherent" | "nom" | "prenom" | "email" | "password" | "age" | "gender" | "goal" | "nombre_sceance_restantes" | "nombre_heures_restantes" | "role", ExtArgs["result"]["adherent"]>
  export type AdherentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adherent_sport?: boolean | Adherent$Adherent_sportArgs<ExtArgs>
    _count?: boolean | AdherentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdherentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdherentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdherentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adherent"
    objects: {
      Adherent_sport: Prisma.$Adherent_sportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_adherent: number
      nom: string
      prenom: string
      email: string
      password: string
      age: number
      gender: string
      goal: string | null
      nombre_sceance_restantes: number
      nombre_heures_restantes: number
      role: string | null
    }, ExtArgs["result"]["adherent"]>
    composites: {}
  }

  type AdherentGetPayload<S extends boolean | null | undefined | AdherentDefaultArgs> = $Result.GetResult<Prisma.$AdherentPayload, S>

  type AdherentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdherentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdherentCountAggregateInputType | true
    }

  export interface AdherentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adherent'], meta: { name: 'Adherent' } }
    /**
     * Find zero or one Adherent that matches the filter.
     * @param {AdherentFindUniqueArgs} args - Arguments to find a Adherent
     * @example
     * // Get one Adherent
     * const adherent = await prisma.adherent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdherentFindUniqueArgs>(args: SelectSubset<T, AdherentFindUniqueArgs<ExtArgs>>): Prisma__AdherentClient<$Result.GetResult<Prisma.$AdherentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adherent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdherentFindUniqueOrThrowArgs} args - Arguments to find a Adherent
     * @example
     * // Get one Adherent
     * const adherent = await prisma.adherent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdherentFindUniqueOrThrowArgs>(args: SelectSubset<T, AdherentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdherentClient<$Result.GetResult<Prisma.$AdherentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adherent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdherentFindFirstArgs} args - Arguments to find a Adherent
     * @example
     * // Get one Adherent
     * const adherent = await prisma.adherent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdherentFindFirstArgs>(args?: SelectSubset<T, AdherentFindFirstArgs<ExtArgs>>): Prisma__AdherentClient<$Result.GetResult<Prisma.$AdherentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adherent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdherentFindFirstOrThrowArgs} args - Arguments to find a Adherent
     * @example
     * // Get one Adherent
     * const adherent = await prisma.adherent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdherentFindFirstOrThrowArgs>(args?: SelectSubset<T, AdherentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdherentClient<$Result.GetResult<Prisma.$AdherentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adherents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdherentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adherents
     * const adherents = await prisma.adherent.findMany()
     * 
     * // Get first 10 Adherents
     * const adherents = await prisma.adherent.findMany({ take: 10 })
     * 
     * // Only select the `id_adherent`
     * const adherentWithId_adherentOnly = await prisma.adherent.findMany({ select: { id_adherent: true } })
     * 
     */
    findMany<T extends AdherentFindManyArgs>(args?: SelectSubset<T, AdherentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdherentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adherent.
     * @param {AdherentCreateArgs} args - Arguments to create a Adherent.
     * @example
     * // Create one Adherent
     * const Adherent = await prisma.adherent.create({
     *   data: {
     *     // ... data to create a Adherent
     *   }
     * })
     * 
     */
    create<T extends AdherentCreateArgs>(args: SelectSubset<T, AdherentCreateArgs<ExtArgs>>): Prisma__AdherentClient<$Result.GetResult<Prisma.$AdherentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adherents.
     * @param {AdherentCreateManyArgs} args - Arguments to create many Adherents.
     * @example
     * // Create many Adherents
     * const adherent = await prisma.adherent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdherentCreateManyArgs>(args?: SelectSubset<T, AdherentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adherents and returns the data saved in the database.
     * @param {AdherentCreateManyAndReturnArgs} args - Arguments to create many Adherents.
     * @example
     * // Create many Adherents
     * const adherent = await prisma.adherent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adherents and only return the `id_adherent`
     * const adherentWithId_adherentOnly = await prisma.adherent.createManyAndReturn({
     *   select: { id_adherent: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdherentCreateManyAndReturnArgs>(args?: SelectSubset<T, AdherentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdherentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adherent.
     * @param {AdherentDeleteArgs} args - Arguments to delete one Adherent.
     * @example
     * // Delete one Adherent
     * const Adherent = await prisma.adherent.delete({
     *   where: {
     *     // ... filter to delete one Adherent
     *   }
     * })
     * 
     */
    delete<T extends AdherentDeleteArgs>(args: SelectSubset<T, AdherentDeleteArgs<ExtArgs>>): Prisma__AdherentClient<$Result.GetResult<Prisma.$AdherentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adherent.
     * @param {AdherentUpdateArgs} args - Arguments to update one Adherent.
     * @example
     * // Update one Adherent
     * const adherent = await prisma.adherent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdherentUpdateArgs>(args: SelectSubset<T, AdherentUpdateArgs<ExtArgs>>): Prisma__AdherentClient<$Result.GetResult<Prisma.$AdherentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adherents.
     * @param {AdherentDeleteManyArgs} args - Arguments to filter Adherents to delete.
     * @example
     * // Delete a few Adherents
     * const { count } = await prisma.adherent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdherentDeleteManyArgs>(args?: SelectSubset<T, AdherentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adherents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdherentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adherents
     * const adherent = await prisma.adherent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdherentUpdateManyArgs>(args: SelectSubset<T, AdherentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adherents and returns the data updated in the database.
     * @param {AdherentUpdateManyAndReturnArgs} args - Arguments to update many Adherents.
     * @example
     * // Update many Adherents
     * const adherent = await prisma.adherent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adherents and only return the `id_adherent`
     * const adherentWithId_adherentOnly = await prisma.adherent.updateManyAndReturn({
     *   select: { id_adherent: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdherentUpdateManyAndReturnArgs>(args: SelectSubset<T, AdherentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdherentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adherent.
     * @param {AdherentUpsertArgs} args - Arguments to update or create a Adherent.
     * @example
     * // Update or create a Adherent
     * const adherent = await prisma.adherent.upsert({
     *   create: {
     *     // ... data to create a Adherent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adherent we want to update
     *   }
     * })
     */
    upsert<T extends AdherentUpsertArgs>(args: SelectSubset<T, AdherentUpsertArgs<ExtArgs>>): Prisma__AdherentClient<$Result.GetResult<Prisma.$AdherentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adherents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdherentCountArgs} args - Arguments to filter Adherents to count.
     * @example
     * // Count the number of Adherents
     * const count = await prisma.adherent.count({
     *   where: {
     *     // ... the filter for the Adherents we want to count
     *   }
     * })
    **/
    count<T extends AdherentCountArgs>(
      args?: Subset<T, AdherentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdherentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adherent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdherentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdherentAggregateArgs>(args: Subset<T, AdherentAggregateArgs>): Prisma.PrismaPromise<GetAdherentAggregateType<T>>

    /**
     * Group by Adherent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdherentGroupByArgs} args - Group by arguments.
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
      T extends AdherentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdherentGroupByArgs['orderBy'] }
        : { orderBy?: AdherentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdherentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdherentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Adherent model
   */
  readonly fields: AdherentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adherent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdherentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Adherent_sport<T extends Adherent$Adherent_sportArgs<ExtArgs> = {}>(args?: Subset<T, Adherent$Adherent_sportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Adherent_sportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Adherent model
   */
  interface AdherentFieldRefs {
    readonly id_adherent: FieldRef<"Adherent", 'Int'>
    readonly nom: FieldRef<"Adherent", 'String'>
    readonly prenom: FieldRef<"Adherent", 'String'>
    readonly email: FieldRef<"Adherent", 'String'>
    readonly password: FieldRef<"Adherent", 'String'>
    readonly age: FieldRef<"Adherent", 'Int'>
    readonly gender: FieldRef<"Adherent", 'String'>
    readonly goal: FieldRef<"Adherent", 'String'>
    readonly nombre_sceance_restantes: FieldRef<"Adherent", 'Int'>
    readonly nombre_heures_restantes: FieldRef<"Adherent", 'Int'>
    readonly role: FieldRef<"Adherent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Adherent findUnique
   */
  export type AdherentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent
     */
    select?: AdherentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent
     */
    omit?: AdherentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherentInclude<ExtArgs> | null
    /**
     * Filter, which Adherent to fetch.
     */
    where: AdherentWhereUniqueInput
  }

  /**
   * Adherent findUniqueOrThrow
   */
  export type AdherentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent
     */
    select?: AdherentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent
     */
    omit?: AdherentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherentInclude<ExtArgs> | null
    /**
     * Filter, which Adherent to fetch.
     */
    where: AdherentWhereUniqueInput
  }

  /**
   * Adherent findFirst
   */
  export type AdherentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent
     */
    select?: AdherentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent
     */
    omit?: AdherentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherentInclude<ExtArgs> | null
    /**
     * Filter, which Adherent to fetch.
     */
    where?: AdherentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adherents to fetch.
     */
    orderBy?: AdherentOrderByWithRelationInput | AdherentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adherents.
     */
    cursor?: AdherentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adherents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adherents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adherents.
     */
    distinct?: AdherentScalarFieldEnum | AdherentScalarFieldEnum[]
  }

  /**
   * Adherent findFirstOrThrow
   */
  export type AdherentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent
     */
    select?: AdherentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent
     */
    omit?: AdherentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherentInclude<ExtArgs> | null
    /**
     * Filter, which Adherent to fetch.
     */
    where?: AdherentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adherents to fetch.
     */
    orderBy?: AdherentOrderByWithRelationInput | AdherentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adherents.
     */
    cursor?: AdherentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adherents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adherents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adherents.
     */
    distinct?: AdherentScalarFieldEnum | AdherentScalarFieldEnum[]
  }

  /**
   * Adherent findMany
   */
  export type AdherentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent
     */
    select?: AdherentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent
     */
    omit?: AdherentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherentInclude<ExtArgs> | null
    /**
     * Filter, which Adherents to fetch.
     */
    where?: AdherentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adherents to fetch.
     */
    orderBy?: AdherentOrderByWithRelationInput | AdherentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adherents.
     */
    cursor?: AdherentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adherents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adherents.
     */
    skip?: number
    distinct?: AdherentScalarFieldEnum | AdherentScalarFieldEnum[]
  }

  /**
   * Adherent create
   */
  export type AdherentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent
     */
    select?: AdherentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent
     */
    omit?: AdherentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherentInclude<ExtArgs> | null
    /**
     * The data needed to create a Adherent.
     */
    data: XOR<AdherentCreateInput, AdherentUncheckedCreateInput>
  }

  /**
   * Adherent createMany
   */
  export type AdherentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adherents.
     */
    data: AdherentCreateManyInput | AdherentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adherent createManyAndReturn
   */
  export type AdherentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent
     */
    select?: AdherentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent
     */
    omit?: AdherentOmit<ExtArgs> | null
    /**
     * The data used to create many Adherents.
     */
    data: AdherentCreateManyInput | AdherentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adherent update
   */
  export type AdherentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent
     */
    select?: AdherentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent
     */
    omit?: AdherentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherentInclude<ExtArgs> | null
    /**
     * The data needed to update a Adherent.
     */
    data: XOR<AdherentUpdateInput, AdherentUncheckedUpdateInput>
    /**
     * Choose, which Adherent to update.
     */
    where: AdherentWhereUniqueInput
  }

  /**
   * Adherent updateMany
   */
  export type AdherentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adherents.
     */
    data: XOR<AdherentUpdateManyMutationInput, AdherentUncheckedUpdateManyInput>
    /**
     * Filter which Adherents to update
     */
    where?: AdherentWhereInput
    /**
     * Limit how many Adherents to update.
     */
    limit?: number
  }

  /**
   * Adherent updateManyAndReturn
   */
  export type AdherentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent
     */
    select?: AdherentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent
     */
    omit?: AdherentOmit<ExtArgs> | null
    /**
     * The data used to update Adherents.
     */
    data: XOR<AdherentUpdateManyMutationInput, AdherentUncheckedUpdateManyInput>
    /**
     * Filter which Adherents to update
     */
    where?: AdherentWhereInput
    /**
     * Limit how many Adherents to update.
     */
    limit?: number
  }

  /**
   * Adherent upsert
   */
  export type AdherentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent
     */
    select?: AdherentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent
     */
    omit?: AdherentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherentInclude<ExtArgs> | null
    /**
     * The filter to search for the Adherent to update in case it exists.
     */
    where: AdherentWhereUniqueInput
    /**
     * In case the Adherent found by the `where` argument doesn't exist, create a new Adherent with this data.
     */
    create: XOR<AdherentCreateInput, AdherentUncheckedCreateInput>
    /**
     * In case the Adherent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdherentUpdateInput, AdherentUncheckedUpdateInput>
  }

  /**
   * Adherent delete
   */
  export type AdherentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent
     */
    select?: AdherentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent
     */
    omit?: AdherentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherentInclude<ExtArgs> | null
    /**
     * Filter which Adherent to delete.
     */
    where: AdherentWhereUniqueInput
  }

  /**
   * Adherent deleteMany
   */
  export type AdherentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adherents to delete
     */
    where?: AdherentWhereInput
    /**
     * Limit how many Adherents to delete.
     */
    limit?: number
  }

  /**
   * Adherent.Adherent_sport
   */
  export type Adherent$Adherent_sportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent_sport
     */
    select?: Adherent_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent_sport
     */
    omit?: Adherent_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Adherent_sportInclude<ExtArgs> | null
    where?: Adherent_sportWhereInput
    orderBy?: Adherent_sportOrderByWithRelationInput | Adherent_sportOrderByWithRelationInput[]
    cursor?: Adherent_sportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Adherent_sportScalarFieldEnum | Adherent_sportScalarFieldEnum[]
  }

  /**
   * Adherent without action
   */
  export type AdherentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent
     */
    select?: AdherentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent
     */
    omit?: AdherentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherentInclude<ExtArgs> | null
  }


  /**
   * Model Adherent_sport
   */

  export type AggregateAdherent_sport = {
    _count: Adherent_sportCountAggregateOutputType | null
    _avg: Adherent_sportAvgAggregateOutputType | null
    _sum: Adherent_sportSumAggregateOutputType | null
    _min: Adherent_sportMinAggregateOutputType | null
    _max: Adherent_sportMaxAggregateOutputType | null
  }

  export type Adherent_sportAvgAggregateOutputType = {
    id_sport: number | null
    id: number | null
    id_adherent: number | null
  }

  export type Adherent_sportSumAggregateOutputType = {
    id_sport: bigint | null
    id: number | null
    id_adherent: number | null
  }

  export type Adherent_sportMinAggregateOutputType = {
    id_sport: bigint | null
    id: number | null
    id_adherent: number | null
  }

  export type Adherent_sportMaxAggregateOutputType = {
    id_sport: bigint | null
    id: number | null
    id_adherent: number | null
  }

  export type Adherent_sportCountAggregateOutputType = {
    id_sport: number
    id: number
    id_adherent: number
    _all: number
  }


  export type Adherent_sportAvgAggregateInputType = {
    id_sport?: true
    id?: true
    id_adherent?: true
  }

  export type Adherent_sportSumAggregateInputType = {
    id_sport?: true
    id?: true
    id_adherent?: true
  }

  export type Adherent_sportMinAggregateInputType = {
    id_sport?: true
    id?: true
    id_adherent?: true
  }

  export type Adherent_sportMaxAggregateInputType = {
    id_sport?: true
    id?: true
    id_adherent?: true
  }

  export type Adherent_sportCountAggregateInputType = {
    id_sport?: true
    id?: true
    id_adherent?: true
    _all?: true
  }

  export type Adherent_sportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adherent_sport to aggregate.
     */
    where?: Adherent_sportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adherent_sports to fetch.
     */
    orderBy?: Adherent_sportOrderByWithRelationInput | Adherent_sportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Adherent_sportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adherent_sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adherent_sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adherent_sports
    **/
    _count?: true | Adherent_sportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Adherent_sportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Adherent_sportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Adherent_sportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Adherent_sportMaxAggregateInputType
  }

  export type GetAdherent_sportAggregateType<T extends Adherent_sportAggregateArgs> = {
        [P in keyof T & keyof AggregateAdherent_sport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdherent_sport[P]>
      : GetScalarType<T[P], AggregateAdherent_sport[P]>
  }




  export type Adherent_sportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Adherent_sportWhereInput
    orderBy?: Adherent_sportOrderByWithAggregationInput | Adherent_sportOrderByWithAggregationInput[]
    by: Adherent_sportScalarFieldEnum[] | Adherent_sportScalarFieldEnum
    having?: Adherent_sportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Adherent_sportCountAggregateInputType | true
    _avg?: Adherent_sportAvgAggregateInputType
    _sum?: Adherent_sportSumAggregateInputType
    _min?: Adherent_sportMinAggregateInputType
    _max?: Adherent_sportMaxAggregateInputType
  }

  export type Adherent_sportGroupByOutputType = {
    id_sport: bigint
    id: number
    id_adherent: number
    _count: Adherent_sportCountAggregateOutputType | null
    _avg: Adherent_sportAvgAggregateOutputType | null
    _sum: Adherent_sportSumAggregateOutputType | null
    _min: Adherent_sportMinAggregateOutputType | null
    _max: Adherent_sportMaxAggregateOutputType | null
  }

  type GetAdherent_sportGroupByPayload<T extends Adherent_sportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Adherent_sportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Adherent_sportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Adherent_sportGroupByOutputType[P]>
            : GetScalarType<T[P], Adherent_sportGroupByOutputType[P]>
        }
      >
    >


  export type Adherent_sportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sport?: boolean
    id?: boolean
    id_adherent?: boolean
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
    Sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adherent_sport"]>

  export type Adherent_sportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sport?: boolean
    id?: boolean
    id_adherent?: boolean
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
    Sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adherent_sport"]>

  export type Adherent_sportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sport?: boolean
    id?: boolean
    id_adherent?: boolean
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
    Sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adherent_sport"]>

  export type Adherent_sportSelectScalar = {
    id_sport?: boolean
    id?: boolean
    id_adherent?: boolean
  }

  export type Adherent_sportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_sport" | "id" | "id_adherent", ExtArgs["result"]["adherent_sport"]>
  export type Adherent_sportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
    Sport?: boolean | SportDefaultArgs<ExtArgs>
  }
  export type Adherent_sportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
    Sport?: boolean | SportDefaultArgs<ExtArgs>
  }
  export type Adherent_sportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
    Sport?: boolean | SportDefaultArgs<ExtArgs>
  }

  export type $Adherent_sportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adherent_sport"
    objects: {
      Adherent: Prisma.$AdherentPayload<ExtArgs>
      Sport: Prisma.$SportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_sport: bigint
      id: number
      id_adherent: number
    }, ExtArgs["result"]["adherent_sport"]>
    composites: {}
  }

  type Adherent_sportGetPayload<S extends boolean | null | undefined | Adherent_sportDefaultArgs> = $Result.GetResult<Prisma.$Adherent_sportPayload, S>

  type Adherent_sportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Adherent_sportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Adherent_sportCountAggregateInputType | true
    }

  export interface Adherent_sportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adherent_sport'], meta: { name: 'Adherent_sport' } }
    /**
     * Find zero or one Adherent_sport that matches the filter.
     * @param {Adherent_sportFindUniqueArgs} args - Arguments to find a Adherent_sport
     * @example
     * // Get one Adherent_sport
     * const adherent_sport = await prisma.adherent_sport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Adherent_sportFindUniqueArgs>(args: SelectSubset<T, Adherent_sportFindUniqueArgs<ExtArgs>>): Prisma__Adherent_sportClient<$Result.GetResult<Prisma.$Adherent_sportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adherent_sport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Adherent_sportFindUniqueOrThrowArgs} args - Arguments to find a Adherent_sport
     * @example
     * // Get one Adherent_sport
     * const adherent_sport = await prisma.adherent_sport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Adherent_sportFindUniqueOrThrowArgs>(args: SelectSubset<T, Adherent_sportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Adherent_sportClient<$Result.GetResult<Prisma.$Adherent_sportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adherent_sport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Adherent_sportFindFirstArgs} args - Arguments to find a Adherent_sport
     * @example
     * // Get one Adherent_sport
     * const adherent_sport = await prisma.adherent_sport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Adherent_sportFindFirstArgs>(args?: SelectSubset<T, Adherent_sportFindFirstArgs<ExtArgs>>): Prisma__Adherent_sportClient<$Result.GetResult<Prisma.$Adherent_sportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adherent_sport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Adherent_sportFindFirstOrThrowArgs} args - Arguments to find a Adherent_sport
     * @example
     * // Get one Adherent_sport
     * const adherent_sport = await prisma.adherent_sport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Adherent_sportFindFirstOrThrowArgs>(args?: SelectSubset<T, Adherent_sportFindFirstOrThrowArgs<ExtArgs>>): Prisma__Adherent_sportClient<$Result.GetResult<Prisma.$Adherent_sportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adherent_sports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Adherent_sportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adherent_sports
     * const adherent_sports = await prisma.adherent_sport.findMany()
     * 
     * // Get first 10 Adherent_sports
     * const adherent_sports = await prisma.adherent_sport.findMany({ take: 10 })
     * 
     * // Only select the `id_sport`
     * const adherent_sportWithId_sportOnly = await prisma.adherent_sport.findMany({ select: { id_sport: true } })
     * 
     */
    findMany<T extends Adherent_sportFindManyArgs>(args?: SelectSubset<T, Adherent_sportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Adherent_sportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adherent_sport.
     * @param {Adherent_sportCreateArgs} args - Arguments to create a Adherent_sport.
     * @example
     * // Create one Adherent_sport
     * const Adherent_sport = await prisma.adherent_sport.create({
     *   data: {
     *     // ... data to create a Adherent_sport
     *   }
     * })
     * 
     */
    create<T extends Adherent_sportCreateArgs>(args: SelectSubset<T, Adherent_sportCreateArgs<ExtArgs>>): Prisma__Adherent_sportClient<$Result.GetResult<Prisma.$Adherent_sportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adherent_sports.
     * @param {Adherent_sportCreateManyArgs} args - Arguments to create many Adherent_sports.
     * @example
     * // Create many Adherent_sports
     * const adherent_sport = await prisma.adherent_sport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Adherent_sportCreateManyArgs>(args?: SelectSubset<T, Adherent_sportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adherent_sports and returns the data saved in the database.
     * @param {Adherent_sportCreateManyAndReturnArgs} args - Arguments to create many Adherent_sports.
     * @example
     * // Create many Adherent_sports
     * const adherent_sport = await prisma.adherent_sport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adherent_sports and only return the `id_sport`
     * const adherent_sportWithId_sportOnly = await prisma.adherent_sport.createManyAndReturn({
     *   select: { id_sport: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Adherent_sportCreateManyAndReturnArgs>(args?: SelectSubset<T, Adherent_sportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Adherent_sportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adherent_sport.
     * @param {Adherent_sportDeleteArgs} args - Arguments to delete one Adherent_sport.
     * @example
     * // Delete one Adherent_sport
     * const Adherent_sport = await prisma.adherent_sport.delete({
     *   where: {
     *     // ... filter to delete one Adherent_sport
     *   }
     * })
     * 
     */
    delete<T extends Adherent_sportDeleteArgs>(args: SelectSubset<T, Adherent_sportDeleteArgs<ExtArgs>>): Prisma__Adherent_sportClient<$Result.GetResult<Prisma.$Adherent_sportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adherent_sport.
     * @param {Adherent_sportUpdateArgs} args - Arguments to update one Adherent_sport.
     * @example
     * // Update one Adherent_sport
     * const adherent_sport = await prisma.adherent_sport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Adherent_sportUpdateArgs>(args: SelectSubset<T, Adherent_sportUpdateArgs<ExtArgs>>): Prisma__Adherent_sportClient<$Result.GetResult<Prisma.$Adherent_sportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adherent_sports.
     * @param {Adherent_sportDeleteManyArgs} args - Arguments to filter Adherent_sports to delete.
     * @example
     * // Delete a few Adherent_sports
     * const { count } = await prisma.adherent_sport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Adherent_sportDeleteManyArgs>(args?: SelectSubset<T, Adherent_sportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adherent_sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Adherent_sportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adherent_sports
     * const adherent_sport = await prisma.adherent_sport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Adherent_sportUpdateManyArgs>(args: SelectSubset<T, Adherent_sportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adherent_sports and returns the data updated in the database.
     * @param {Adherent_sportUpdateManyAndReturnArgs} args - Arguments to update many Adherent_sports.
     * @example
     * // Update many Adherent_sports
     * const adherent_sport = await prisma.adherent_sport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adherent_sports and only return the `id_sport`
     * const adherent_sportWithId_sportOnly = await prisma.adherent_sport.updateManyAndReturn({
     *   select: { id_sport: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Adherent_sportUpdateManyAndReturnArgs>(args: SelectSubset<T, Adherent_sportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Adherent_sportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adherent_sport.
     * @param {Adherent_sportUpsertArgs} args - Arguments to update or create a Adherent_sport.
     * @example
     * // Update or create a Adherent_sport
     * const adherent_sport = await prisma.adherent_sport.upsert({
     *   create: {
     *     // ... data to create a Adherent_sport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adherent_sport we want to update
     *   }
     * })
     */
    upsert<T extends Adherent_sportUpsertArgs>(args: SelectSubset<T, Adherent_sportUpsertArgs<ExtArgs>>): Prisma__Adherent_sportClient<$Result.GetResult<Prisma.$Adherent_sportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adherent_sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Adherent_sportCountArgs} args - Arguments to filter Adherent_sports to count.
     * @example
     * // Count the number of Adherent_sports
     * const count = await prisma.adherent_sport.count({
     *   where: {
     *     // ... the filter for the Adherent_sports we want to count
     *   }
     * })
    **/
    count<T extends Adherent_sportCountArgs>(
      args?: Subset<T, Adherent_sportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Adherent_sportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adherent_sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Adherent_sportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Adherent_sportAggregateArgs>(args: Subset<T, Adherent_sportAggregateArgs>): Prisma.PrismaPromise<GetAdherent_sportAggregateType<T>>

    /**
     * Group by Adherent_sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Adherent_sportGroupByArgs} args - Group by arguments.
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
      T extends Adherent_sportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Adherent_sportGroupByArgs['orderBy'] }
        : { orderBy?: Adherent_sportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Adherent_sportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdherent_sportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Adherent_sport model
   */
  readonly fields: Adherent_sportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adherent_sport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Adherent_sportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Adherent<T extends AdherentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdherentDefaultArgs<ExtArgs>>): Prisma__AdherentClient<$Result.GetResult<Prisma.$AdherentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Sport<T extends SportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportDefaultArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Adherent_sport model
   */
  interface Adherent_sportFieldRefs {
    readonly id_sport: FieldRef<"Adherent_sport", 'BigInt'>
    readonly id: FieldRef<"Adherent_sport", 'Int'>
    readonly id_adherent: FieldRef<"Adherent_sport", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Adherent_sport findUnique
   */
  export type Adherent_sportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent_sport
     */
    select?: Adherent_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent_sport
     */
    omit?: Adherent_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Adherent_sportInclude<ExtArgs> | null
    /**
     * Filter, which Adherent_sport to fetch.
     */
    where: Adherent_sportWhereUniqueInput
  }

  /**
   * Adherent_sport findUniqueOrThrow
   */
  export type Adherent_sportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent_sport
     */
    select?: Adherent_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent_sport
     */
    omit?: Adherent_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Adherent_sportInclude<ExtArgs> | null
    /**
     * Filter, which Adherent_sport to fetch.
     */
    where: Adherent_sportWhereUniqueInput
  }

  /**
   * Adherent_sport findFirst
   */
  export type Adherent_sportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent_sport
     */
    select?: Adherent_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent_sport
     */
    omit?: Adherent_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Adherent_sportInclude<ExtArgs> | null
    /**
     * Filter, which Adherent_sport to fetch.
     */
    where?: Adherent_sportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adherent_sports to fetch.
     */
    orderBy?: Adherent_sportOrderByWithRelationInput | Adherent_sportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adherent_sports.
     */
    cursor?: Adherent_sportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adherent_sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adherent_sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adherent_sports.
     */
    distinct?: Adherent_sportScalarFieldEnum | Adherent_sportScalarFieldEnum[]
  }

  /**
   * Adherent_sport findFirstOrThrow
   */
  export type Adherent_sportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent_sport
     */
    select?: Adherent_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent_sport
     */
    omit?: Adherent_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Adherent_sportInclude<ExtArgs> | null
    /**
     * Filter, which Adherent_sport to fetch.
     */
    where?: Adherent_sportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adherent_sports to fetch.
     */
    orderBy?: Adherent_sportOrderByWithRelationInput | Adherent_sportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adherent_sports.
     */
    cursor?: Adherent_sportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adherent_sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adherent_sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adherent_sports.
     */
    distinct?: Adherent_sportScalarFieldEnum | Adherent_sportScalarFieldEnum[]
  }

  /**
   * Adherent_sport findMany
   */
  export type Adherent_sportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent_sport
     */
    select?: Adherent_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent_sport
     */
    omit?: Adherent_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Adherent_sportInclude<ExtArgs> | null
    /**
     * Filter, which Adherent_sports to fetch.
     */
    where?: Adherent_sportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adherent_sports to fetch.
     */
    orderBy?: Adherent_sportOrderByWithRelationInput | Adherent_sportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adherent_sports.
     */
    cursor?: Adherent_sportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adherent_sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adherent_sports.
     */
    skip?: number
    distinct?: Adherent_sportScalarFieldEnum | Adherent_sportScalarFieldEnum[]
  }

  /**
   * Adherent_sport create
   */
  export type Adherent_sportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent_sport
     */
    select?: Adherent_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent_sport
     */
    omit?: Adherent_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Adherent_sportInclude<ExtArgs> | null
    /**
     * The data needed to create a Adherent_sport.
     */
    data: XOR<Adherent_sportCreateInput, Adherent_sportUncheckedCreateInput>
  }

  /**
   * Adherent_sport createMany
   */
  export type Adherent_sportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adherent_sports.
     */
    data: Adherent_sportCreateManyInput | Adherent_sportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adherent_sport createManyAndReturn
   */
  export type Adherent_sportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent_sport
     */
    select?: Adherent_sportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent_sport
     */
    omit?: Adherent_sportOmit<ExtArgs> | null
    /**
     * The data used to create many Adherent_sports.
     */
    data: Adherent_sportCreateManyInput | Adherent_sportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Adherent_sportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adherent_sport update
   */
  export type Adherent_sportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent_sport
     */
    select?: Adherent_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent_sport
     */
    omit?: Adherent_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Adherent_sportInclude<ExtArgs> | null
    /**
     * The data needed to update a Adherent_sport.
     */
    data: XOR<Adherent_sportUpdateInput, Adherent_sportUncheckedUpdateInput>
    /**
     * Choose, which Adherent_sport to update.
     */
    where: Adherent_sportWhereUniqueInput
  }

  /**
   * Adherent_sport updateMany
   */
  export type Adherent_sportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adherent_sports.
     */
    data: XOR<Adherent_sportUpdateManyMutationInput, Adherent_sportUncheckedUpdateManyInput>
    /**
     * Filter which Adherent_sports to update
     */
    where?: Adherent_sportWhereInput
    /**
     * Limit how many Adherent_sports to update.
     */
    limit?: number
  }

  /**
   * Adherent_sport updateManyAndReturn
   */
  export type Adherent_sportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent_sport
     */
    select?: Adherent_sportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent_sport
     */
    omit?: Adherent_sportOmit<ExtArgs> | null
    /**
     * The data used to update Adherent_sports.
     */
    data: XOR<Adherent_sportUpdateManyMutationInput, Adherent_sportUncheckedUpdateManyInput>
    /**
     * Filter which Adherent_sports to update
     */
    where?: Adherent_sportWhereInput
    /**
     * Limit how many Adherent_sports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Adherent_sportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adherent_sport upsert
   */
  export type Adherent_sportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent_sport
     */
    select?: Adherent_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent_sport
     */
    omit?: Adherent_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Adherent_sportInclude<ExtArgs> | null
    /**
     * The filter to search for the Adherent_sport to update in case it exists.
     */
    where: Adherent_sportWhereUniqueInput
    /**
     * In case the Adherent_sport found by the `where` argument doesn't exist, create a new Adherent_sport with this data.
     */
    create: XOR<Adherent_sportCreateInput, Adherent_sportUncheckedCreateInput>
    /**
     * In case the Adherent_sport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Adherent_sportUpdateInput, Adherent_sportUncheckedUpdateInput>
  }

  /**
   * Adherent_sport delete
   */
  export type Adherent_sportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent_sport
     */
    select?: Adherent_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent_sport
     */
    omit?: Adherent_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Adherent_sportInclude<ExtArgs> | null
    /**
     * Filter which Adherent_sport to delete.
     */
    where: Adherent_sportWhereUniqueInput
  }

  /**
   * Adherent_sport deleteMany
   */
  export type Adherent_sportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adherent_sports to delete
     */
    where?: Adherent_sportWhereInput
    /**
     * Limit how many Adherent_sports to delete.
     */
    limit?: number
  }

  /**
   * Adherent_sport without action
   */
  export type Adherent_sportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent_sport
     */
    select?: Adherent_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent_sport
     */
    omit?: Adherent_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Adherent_sportInclude<ExtArgs> | null
  }


  /**
   * Model Sport
   */

  export type AggregateSport = {
    _count: SportCountAggregateOutputType | null
    _avg: SportAvgAggregateOutputType | null
    _sum: SportSumAggregateOutputType | null
    _min: SportMinAggregateOutputType | null
    _max: SportMaxAggregateOutputType | null
  }

  export type SportAvgAggregateOutputType = {
    id_sport: number | null
  }

  export type SportSumAggregateOutputType = {
    id_sport: bigint | null
  }

  export type SportMinAggregateOutputType = {
    id_sport: bigint | null
    Name: string | null
    Date: Date | null
    Starting_time: Date | null
    Ending_time: Date | null
  }

  export type SportMaxAggregateOutputType = {
    id_sport: bigint | null
    Name: string | null
    Date: Date | null
    Starting_time: Date | null
    Ending_time: Date | null
  }

  export type SportCountAggregateOutputType = {
    id_sport: number
    Name: number
    Date: number
    Starting_time: number
    Ending_time: number
    _all: number
  }


  export type SportAvgAggregateInputType = {
    id_sport?: true
  }

  export type SportSumAggregateInputType = {
    id_sport?: true
  }

  export type SportMinAggregateInputType = {
    id_sport?: true
    Name?: true
    Date?: true
    Starting_time?: true
    Ending_time?: true
  }

  export type SportMaxAggregateInputType = {
    id_sport?: true
    Name?: true
    Date?: true
    Starting_time?: true
    Ending_time?: true
  }

  export type SportCountAggregateInputType = {
    id_sport?: true
    Name?: true
    Date?: true
    Starting_time?: true
    Ending_time?: true
    _all?: true
  }

  export type SportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sport to aggregate.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sports
    **/
    _count?: true | SportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SportMaxAggregateInputType
  }

  export type GetSportAggregateType<T extends SportAggregateArgs> = {
        [P in keyof T & keyof AggregateSport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSport[P]>
      : GetScalarType<T[P], AggregateSport[P]>
  }




  export type SportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportWhereInput
    orderBy?: SportOrderByWithAggregationInput | SportOrderByWithAggregationInput[]
    by: SportScalarFieldEnum[] | SportScalarFieldEnum
    having?: SportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SportCountAggregateInputType | true
    _avg?: SportAvgAggregateInputType
    _sum?: SportSumAggregateInputType
    _min?: SportMinAggregateInputType
    _max?: SportMaxAggregateInputType
  }

  export type SportGroupByOutputType = {
    id_sport: bigint
    Name: string
    Date: Date | null
    Starting_time: Date | null
    Ending_time: Date | null
    _count: SportCountAggregateOutputType | null
    _avg: SportAvgAggregateOutputType | null
    _sum: SportSumAggregateOutputType | null
    _min: SportMinAggregateOutputType | null
    _max: SportMaxAggregateOutputType | null
  }

  type GetSportGroupByPayload<T extends SportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SportGroupByOutputType[P]>
            : GetScalarType<T[P], SportGroupByOutputType[P]>
        }
      >
    >


  export type SportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sport?: boolean
    Name?: boolean
    Date?: boolean
    Starting_time?: boolean
    Ending_time?: boolean
    Adherent_sport?: boolean | Sport$Adherent_sportArgs<ExtArgs>
    _count?: boolean | SportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sport"]>

  export type SportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sport?: boolean
    Name?: boolean
    Date?: boolean
    Starting_time?: boolean
    Ending_time?: boolean
  }, ExtArgs["result"]["sport"]>

  export type SportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sport?: boolean
    Name?: boolean
    Date?: boolean
    Starting_time?: boolean
    Ending_time?: boolean
  }, ExtArgs["result"]["sport"]>

  export type SportSelectScalar = {
    id_sport?: boolean
    Name?: boolean
    Date?: boolean
    Starting_time?: boolean
    Ending_time?: boolean
  }

  export type SportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_sport" | "Name" | "Date" | "Starting_time" | "Ending_time", ExtArgs["result"]["sport"]>
  export type SportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adherent_sport?: boolean | Sport$Adherent_sportArgs<ExtArgs>
    _count?: boolean | SportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sport"
    objects: {
      Adherent_sport: Prisma.$Adherent_sportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_sport: bigint
      Name: string
      Date: Date | null
      Starting_time: Date | null
      Ending_time: Date | null
    }, ExtArgs["result"]["sport"]>
    composites: {}
  }

  type SportGetPayload<S extends boolean | null | undefined | SportDefaultArgs> = $Result.GetResult<Prisma.$SportPayload, S>

  type SportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SportCountAggregateInputType | true
    }

  export interface SportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sport'], meta: { name: 'Sport' } }
    /**
     * Find zero or one Sport that matches the filter.
     * @param {SportFindUniqueArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SportFindUniqueArgs>(args: SelectSubset<T, SportFindUniqueArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SportFindUniqueOrThrowArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SportFindUniqueOrThrowArgs>(args: SelectSubset<T, SportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindFirstArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SportFindFirstArgs>(args?: SelectSubset<T, SportFindFirstArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindFirstOrThrowArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SportFindFirstOrThrowArgs>(args?: SelectSubset<T, SportFindFirstOrThrowArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sports
     * const sports = await prisma.sport.findMany()
     * 
     * // Get first 10 Sports
     * const sports = await prisma.sport.findMany({ take: 10 })
     * 
     * // Only select the `id_sport`
     * const sportWithId_sportOnly = await prisma.sport.findMany({ select: { id_sport: true } })
     * 
     */
    findMany<T extends SportFindManyArgs>(args?: SelectSubset<T, SportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sport.
     * @param {SportCreateArgs} args - Arguments to create a Sport.
     * @example
     * // Create one Sport
     * const Sport = await prisma.sport.create({
     *   data: {
     *     // ... data to create a Sport
     *   }
     * })
     * 
     */
    create<T extends SportCreateArgs>(args: SelectSubset<T, SportCreateArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sports.
     * @param {SportCreateManyArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sport = await prisma.sport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SportCreateManyArgs>(args?: SelectSubset<T, SportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sports and returns the data saved in the database.
     * @param {SportCreateManyAndReturnArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sport = await prisma.sport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sports and only return the `id_sport`
     * const sportWithId_sportOnly = await prisma.sport.createManyAndReturn({
     *   select: { id_sport: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SportCreateManyAndReturnArgs>(args?: SelectSubset<T, SportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sport.
     * @param {SportDeleteArgs} args - Arguments to delete one Sport.
     * @example
     * // Delete one Sport
     * const Sport = await prisma.sport.delete({
     *   where: {
     *     // ... filter to delete one Sport
     *   }
     * })
     * 
     */
    delete<T extends SportDeleteArgs>(args: SelectSubset<T, SportDeleteArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sport.
     * @param {SportUpdateArgs} args - Arguments to update one Sport.
     * @example
     * // Update one Sport
     * const sport = await prisma.sport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SportUpdateArgs>(args: SelectSubset<T, SportUpdateArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sports.
     * @param {SportDeleteManyArgs} args - Arguments to filter Sports to delete.
     * @example
     * // Delete a few Sports
     * const { count } = await prisma.sport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SportDeleteManyArgs>(args?: SelectSubset<T, SportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sports
     * const sport = await prisma.sport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SportUpdateManyArgs>(args: SelectSubset<T, SportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports and returns the data updated in the database.
     * @param {SportUpdateManyAndReturnArgs} args - Arguments to update many Sports.
     * @example
     * // Update many Sports
     * const sport = await prisma.sport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sports and only return the `id_sport`
     * const sportWithId_sportOnly = await prisma.sport.updateManyAndReturn({
     *   select: { id_sport: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SportUpdateManyAndReturnArgs>(args: SelectSubset<T, SportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sport.
     * @param {SportUpsertArgs} args - Arguments to update or create a Sport.
     * @example
     * // Update or create a Sport
     * const sport = await prisma.sport.upsert({
     *   create: {
     *     // ... data to create a Sport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sport we want to update
     *   }
     * })
     */
    upsert<T extends SportUpsertArgs>(args: SelectSubset<T, SportUpsertArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportCountArgs} args - Arguments to filter Sports to count.
     * @example
     * // Count the number of Sports
     * const count = await prisma.sport.count({
     *   where: {
     *     // ... the filter for the Sports we want to count
     *   }
     * })
    **/
    count<T extends SportCountArgs>(
      args?: Subset<T, SportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SportAggregateArgs>(args: Subset<T, SportAggregateArgs>): Prisma.PrismaPromise<GetSportAggregateType<T>>

    /**
     * Group by Sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportGroupByArgs} args - Group by arguments.
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
      T extends SportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SportGroupByArgs['orderBy'] }
        : { orderBy?: SportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sport model
   */
  readonly fields: SportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Adherent_sport<T extends Sport$Adherent_sportArgs<ExtArgs> = {}>(args?: Subset<T, Sport$Adherent_sportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Adherent_sportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sport model
   */
  interface SportFieldRefs {
    readonly id_sport: FieldRef<"Sport", 'BigInt'>
    readonly Name: FieldRef<"Sport", 'String'>
    readonly Date: FieldRef<"Sport", 'DateTime'>
    readonly Starting_time: FieldRef<"Sport", 'DateTime'>
    readonly Ending_time: FieldRef<"Sport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sport findUnique
   */
  export type SportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport findUniqueOrThrow
   */
  export type SportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport findFirst
   */
  export type SportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sports.
     */
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport findFirstOrThrow
   */
  export type SportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sports.
     */
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport findMany
   */
  export type SportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sports to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport create
   */
  export type SportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The data needed to create a Sport.
     */
    data: XOR<SportCreateInput, SportUncheckedCreateInput>
  }

  /**
   * Sport createMany
   */
  export type SportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sports.
     */
    data: SportCreateManyInput | SportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sport createManyAndReturn
   */
  export type SportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * The data used to create many Sports.
     */
    data: SportCreateManyInput | SportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sport update
   */
  export type SportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The data needed to update a Sport.
     */
    data: XOR<SportUpdateInput, SportUncheckedUpdateInput>
    /**
     * Choose, which Sport to update.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport updateMany
   */
  export type SportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sports.
     */
    data: XOR<SportUpdateManyMutationInput, SportUncheckedUpdateManyInput>
    /**
     * Filter which Sports to update
     */
    where?: SportWhereInput
    /**
     * Limit how many Sports to update.
     */
    limit?: number
  }

  /**
   * Sport updateManyAndReturn
   */
  export type SportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * The data used to update Sports.
     */
    data: XOR<SportUpdateManyMutationInput, SportUncheckedUpdateManyInput>
    /**
     * Filter which Sports to update
     */
    where?: SportWhereInput
    /**
     * Limit how many Sports to update.
     */
    limit?: number
  }

  /**
   * Sport upsert
   */
  export type SportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The filter to search for the Sport to update in case it exists.
     */
    where: SportWhereUniqueInput
    /**
     * In case the Sport found by the `where` argument doesn't exist, create a new Sport with this data.
     */
    create: XOR<SportCreateInput, SportUncheckedCreateInput>
    /**
     * In case the Sport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SportUpdateInput, SportUncheckedUpdateInput>
  }

  /**
   * Sport delete
   */
  export type SportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter which Sport to delete.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport deleteMany
   */
  export type SportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sports to delete
     */
    where?: SportWhereInput
    /**
     * Limit how many Sports to delete.
     */
    limit?: number
  }

  /**
   * Sport.Adherent_sport
   */
  export type Sport$Adherent_sportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adherent_sport
     */
    select?: Adherent_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adherent_sport
     */
    omit?: Adherent_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Adherent_sportInclude<ExtArgs> | null
    where?: Adherent_sportWhereInput
    orderBy?: Adherent_sportOrderByWithRelationInput | Adherent_sportOrderByWithRelationInput[]
    cursor?: Adherent_sportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Adherent_sportScalarFieldEnum | Adherent_sportScalarFieldEnum[]
  }

  /**
   * Sport without action
   */
  export type SportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
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


  export const AdherentScalarFieldEnum: {
    id_adherent: 'id_adherent',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    password: 'password',
    age: 'age',
    gender: 'gender',
    goal: 'goal',
    nombre_sceance_restantes: 'nombre_sceance_restantes',
    nombre_heures_restantes: 'nombre_heures_restantes',
    role: 'role'
  };

  export type AdherentScalarFieldEnum = (typeof AdherentScalarFieldEnum)[keyof typeof AdherentScalarFieldEnum]


  export const Adherent_sportScalarFieldEnum: {
    id_sport: 'id_sport',
    id: 'id',
    id_adherent: 'id_adherent'
  };

  export type Adherent_sportScalarFieldEnum = (typeof Adherent_sportScalarFieldEnum)[keyof typeof Adherent_sportScalarFieldEnum]


  export const SportScalarFieldEnum: {
    id_sport: 'id_sport',
    Name: 'Name',
    Date: 'Date',
    Starting_time: 'Starting_time',
    Ending_time: 'Ending_time'
  };

  export type SportScalarFieldEnum = (typeof SportScalarFieldEnum)[keyof typeof SportScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type AdherentWhereInput = {
    AND?: AdherentWhereInput | AdherentWhereInput[]
    OR?: AdherentWhereInput[]
    NOT?: AdherentWhereInput | AdherentWhereInput[]
    id_adherent?: IntFilter<"Adherent"> | number
    nom?: StringFilter<"Adherent"> | string
    prenom?: StringFilter<"Adherent"> | string
    email?: StringFilter<"Adherent"> | string
    password?: StringFilter<"Adherent"> | string
    age?: IntFilter<"Adherent"> | number
    gender?: StringFilter<"Adherent"> | string
    goal?: StringNullableFilter<"Adherent"> | string | null
    nombre_sceance_restantes?: IntFilter<"Adherent"> | number
    nombre_heures_restantes?: IntFilter<"Adherent"> | number
    role?: StringNullableFilter<"Adherent"> | string | null
    Adherent_sport?: Adherent_sportListRelationFilter
  }

  export type AdherentOrderByWithRelationInput = {
    id_adherent?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    goal?: SortOrderInput | SortOrder
    nombre_sceance_restantes?: SortOrder
    nombre_heures_restantes?: SortOrder
    role?: SortOrderInput | SortOrder
    Adherent_sport?: Adherent_sportOrderByRelationAggregateInput
  }

  export type AdherentWhereUniqueInput = Prisma.AtLeast<{
    id_adherent?: number
    email?: string
    AND?: AdherentWhereInput | AdherentWhereInput[]
    OR?: AdherentWhereInput[]
    NOT?: AdherentWhereInput | AdherentWhereInput[]
    nom?: StringFilter<"Adherent"> | string
    prenom?: StringFilter<"Adherent"> | string
    password?: StringFilter<"Adherent"> | string
    age?: IntFilter<"Adherent"> | number
    gender?: StringFilter<"Adherent"> | string
    goal?: StringNullableFilter<"Adherent"> | string | null
    nombre_sceance_restantes?: IntFilter<"Adherent"> | number
    nombre_heures_restantes?: IntFilter<"Adherent"> | number
    role?: StringNullableFilter<"Adherent"> | string | null
    Adherent_sport?: Adherent_sportListRelationFilter
  }, "id_adherent" | "email">

  export type AdherentOrderByWithAggregationInput = {
    id_adherent?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    goal?: SortOrderInput | SortOrder
    nombre_sceance_restantes?: SortOrder
    nombre_heures_restantes?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: AdherentCountOrderByAggregateInput
    _avg?: AdherentAvgOrderByAggregateInput
    _max?: AdherentMaxOrderByAggregateInput
    _min?: AdherentMinOrderByAggregateInput
    _sum?: AdherentSumOrderByAggregateInput
  }

  export type AdherentScalarWhereWithAggregatesInput = {
    AND?: AdherentScalarWhereWithAggregatesInput | AdherentScalarWhereWithAggregatesInput[]
    OR?: AdherentScalarWhereWithAggregatesInput[]
    NOT?: AdherentScalarWhereWithAggregatesInput | AdherentScalarWhereWithAggregatesInput[]
    id_adherent?: IntWithAggregatesFilter<"Adherent"> | number
    nom?: StringWithAggregatesFilter<"Adherent"> | string
    prenom?: StringWithAggregatesFilter<"Adherent"> | string
    email?: StringWithAggregatesFilter<"Adherent"> | string
    password?: StringWithAggregatesFilter<"Adherent"> | string
    age?: IntWithAggregatesFilter<"Adherent"> | number
    gender?: StringWithAggregatesFilter<"Adherent"> | string
    goal?: StringNullableWithAggregatesFilter<"Adherent"> | string | null
    nombre_sceance_restantes?: IntWithAggregatesFilter<"Adherent"> | number
    nombre_heures_restantes?: IntWithAggregatesFilter<"Adherent"> | number
    role?: StringNullableWithAggregatesFilter<"Adherent"> | string | null
  }

  export type Adherent_sportWhereInput = {
    AND?: Adherent_sportWhereInput | Adherent_sportWhereInput[]
    OR?: Adherent_sportWhereInput[]
    NOT?: Adherent_sportWhereInput | Adherent_sportWhereInput[]
    id_sport?: BigIntFilter<"Adherent_sport"> | bigint | number
    id?: IntFilter<"Adherent_sport"> | number
    id_adherent?: IntFilter<"Adherent_sport"> | number
    Adherent?: XOR<AdherentScalarRelationFilter, AdherentWhereInput>
    Sport?: XOR<SportScalarRelationFilter, SportWhereInput>
  }

  export type Adherent_sportOrderByWithRelationInput = {
    id_sport?: SortOrder
    id?: SortOrder
    id_adherent?: SortOrder
    Adherent?: AdherentOrderByWithRelationInput
    Sport?: SportOrderByWithRelationInput
  }

  export type Adherent_sportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Adherent_sportWhereInput | Adherent_sportWhereInput[]
    OR?: Adherent_sportWhereInput[]
    NOT?: Adherent_sportWhereInput | Adherent_sportWhereInput[]
    id_sport?: BigIntFilter<"Adherent_sport"> | bigint | number
    id_adherent?: IntFilter<"Adherent_sport"> | number
    Adherent?: XOR<AdherentScalarRelationFilter, AdherentWhereInput>
    Sport?: XOR<SportScalarRelationFilter, SportWhereInput>
  }, "id">

  export type Adherent_sportOrderByWithAggregationInput = {
    id_sport?: SortOrder
    id?: SortOrder
    id_adherent?: SortOrder
    _count?: Adherent_sportCountOrderByAggregateInput
    _avg?: Adherent_sportAvgOrderByAggregateInput
    _max?: Adherent_sportMaxOrderByAggregateInput
    _min?: Adherent_sportMinOrderByAggregateInput
    _sum?: Adherent_sportSumOrderByAggregateInput
  }

  export type Adherent_sportScalarWhereWithAggregatesInput = {
    AND?: Adherent_sportScalarWhereWithAggregatesInput | Adherent_sportScalarWhereWithAggregatesInput[]
    OR?: Adherent_sportScalarWhereWithAggregatesInput[]
    NOT?: Adherent_sportScalarWhereWithAggregatesInput | Adherent_sportScalarWhereWithAggregatesInput[]
    id_sport?: BigIntWithAggregatesFilter<"Adherent_sport"> | bigint | number
    id?: IntWithAggregatesFilter<"Adherent_sport"> | number
    id_adherent?: IntWithAggregatesFilter<"Adherent_sport"> | number
  }

  export type SportWhereInput = {
    AND?: SportWhereInput | SportWhereInput[]
    OR?: SportWhereInput[]
    NOT?: SportWhereInput | SportWhereInput[]
    id_sport?: BigIntFilter<"Sport"> | bigint | number
    Name?: StringFilter<"Sport"> | string
    Date?: DateTimeNullableFilter<"Sport"> | Date | string | null
    Starting_time?: DateTimeNullableFilter<"Sport"> | Date | string | null
    Ending_time?: DateTimeNullableFilter<"Sport"> | Date | string | null
    Adherent_sport?: Adherent_sportListRelationFilter
  }

  export type SportOrderByWithRelationInput = {
    id_sport?: SortOrder
    Name?: SortOrder
    Date?: SortOrderInput | SortOrder
    Starting_time?: SortOrderInput | SortOrder
    Ending_time?: SortOrderInput | SortOrder
    Adherent_sport?: Adherent_sportOrderByRelationAggregateInput
  }

  export type SportWhereUniqueInput = Prisma.AtLeast<{
    id_sport?: bigint | number
    AND?: SportWhereInput | SportWhereInput[]
    OR?: SportWhereInput[]
    NOT?: SportWhereInput | SportWhereInput[]
    Name?: StringFilter<"Sport"> | string
    Date?: DateTimeNullableFilter<"Sport"> | Date | string | null
    Starting_time?: DateTimeNullableFilter<"Sport"> | Date | string | null
    Ending_time?: DateTimeNullableFilter<"Sport"> | Date | string | null
    Adherent_sport?: Adherent_sportListRelationFilter
  }, "id_sport">

  export type SportOrderByWithAggregationInput = {
    id_sport?: SortOrder
    Name?: SortOrder
    Date?: SortOrderInput | SortOrder
    Starting_time?: SortOrderInput | SortOrder
    Ending_time?: SortOrderInput | SortOrder
    _count?: SportCountOrderByAggregateInput
    _avg?: SportAvgOrderByAggregateInput
    _max?: SportMaxOrderByAggregateInput
    _min?: SportMinOrderByAggregateInput
    _sum?: SportSumOrderByAggregateInput
  }

  export type SportScalarWhereWithAggregatesInput = {
    AND?: SportScalarWhereWithAggregatesInput | SportScalarWhereWithAggregatesInput[]
    OR?: SportScalarWhereWithAggregatesInput[]
    NOT?: SportScalarWhereWithAggregatesInput | SportScalarWhereWithAggregatesInput[]
    id_sport?: BigIntWithAggregatesFilter<"Sport"> | bigint | number
    Name?: StringWithAggregatesFilter<"Sport"> | string
    Date?: DateTimeNullableWithAggregatesFilter<"Sport"> | Date | string | null
    Starting_time?: DateTimeNullableWithAggregatesFilter<"Sport"> | Date | string | null
    Ending_time?: DateTimeNullableWithAggregatesFilter<"Sport"> | Date | string | null
  }

  export type AdherentCreateInput = {
    nom: string
    prenom: string
    email: string
    password: string
    age: number
    gender: string
    goal?: string | null
    nombre_sceance_restantes?: number
    nombre_heures_restantes?: number
    role?: string | null
    Adherent_sport?: Adherent_sportCreateNestedManyWithoutAdherentInput
  }

  export type AdherentUncheckedCreateInput = {
    id_adherent?: number
    nom: string
    prenom: string
    email: string
    password: string
    age: number
    gender: string
    goal?: string | null
    nombre_sceance_restantes?: number
    nombre_heures_restantes?: number
    role?: string | null
    Adherent_sport?: Adherent_sportUncheckedCreateNestedManyWithoutAdherentInput
  }

  export type AdherentUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_sceance_restantes?: IntFieldUpdateOperationsInput | number
    nombre_heures_restantes?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    Adherent_sport?: Adherent_sportUpdateManyWithoutAdherentNestedInput
  }

  export type AdherentUncheckedUpdateInput = {
    id_adherent?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_sceance_restantes?: IntFieldUpdateOperationsInput | number
    nombre_heures_restantes?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    Adherent_sport?: Adherent_sportUncheckedUpdateManyWithoutAdherentNestedInput
  }

  export type AdherentCreateManyInput = {
    id_adherent?: number
    nom: string
    prenom: string
    email: string
    password: string
    age: number
    gender: string
    goal?: string | null
    nombre_sceance_restantes?: number
    nombre_heures_restantes?: number
    role?: string | null
  }

  export type AdherentUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_sceance_restantes?: IntFieldUpdateOperationsInput | number
    nombre_heures_restantes?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdherentUncheckedUpdateManyInput = {
    id_adherent?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_sceance_restantes?: IntFieldUpdateOperationsInput | number
    nombre_heures_restantes?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Adherent_sportCreateInput = {
    Adherent: AdherentCreateNestedOneWithoutAdherent_sportInput
    Sport: SportCreateNestedOneWithoutAdherent_sportInput
  }

  export type Adherent_sportUncheckedCreateInput = {
    id_sport: bigint | number
    id?: number
    id_adherent: number
  }

  export type Adherent_sportUpdateInput = {
    Adherent?: AdherentUpdateOneRequiredWithoutAdherent_sportNestedInput
    Sport?: SportUpdateOneRequiredWithoutAdherent_sportNestedInput
  }

  export type Adherent_sportUncheckedUpdateInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    id?: IntFieldUpdateOperationsInput | number
    id_adherent?: IntFieldUpdateOperationsInput | number
  }

  export type Adherent_sportCreateManyInput = {
    id_sport: bigint | number
    id?: number
    id_adherent: number
  }

  export type Adherent_sportUpdateManyMutationInput = {

  }

  export type Adherent_sportUncheckedUpdateManyInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    id?: IntFieldUpdateOperationsInput | number
    id_adherent?: IntFieldUpdateOperationsInput | number
  }

  export type SportCreateInput = {
    id_sport?: bigint | number
    Name: string
    Date?: Date | string | null
    Starting_time?: Date | string | null
    Ending_time?: Date | string | null
    Adherent_sport?: Adherent_sportCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateInput = {
    id_sport?: bigint | number
    Name: string
    Date?: Date | string | null
    Starting_time?: Date | string | null
    Ending_time?: Date | string | null
    Adherent_sport?: Adherent_sportUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportUpdateInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Starting_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ending_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Adherent_sport?: Adherent_sportUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Starting_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ending_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Adherent_sport?: Adherent_sportUncheckedUpdateManyWithoutSportNestedInput
  }

  export type SportCreateManyInput = {
    id_sport?: bigint | number
    Name: string
    Date?: Date | string | null
    Starting_time?: Date | string | null
    Ending_time?: Date | string | null
  }

  export type SportUpdateManyMutationInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Starting_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ending_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SportUncheckedUpdateManyInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Starting_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ending_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type Adherent_sportListRelationFilter = {
    every?: Adherent_sportWhereInput
    some?: Adherent_sportWhereInput
    none?: Adherent_sportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Adherent_sportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdherentCountOrderByAggregateInput = {
    id_adherent?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    goal?: SortOrder
    nombre_sceance_restantes?: SortOrder
    nombre_heures_restantes?: SortOrder
    role?: SortOrder
  }

  export type AdherentAvgOrderByAggregateInput = {
    id_adherent?: SortOrder
    age?: SortOrder
    nombre_sceance_restantes?: SortOrder
    nombre_heures_restantes?: SortOrder
  }

  export type AdherentMaxOrderByAggregateInput = {
    id_adherent?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    goal?: SortOrder
    nombre_sceance_restantes?: SortOrder
    nombre_heures_restantes?: SortOrder
    role?: SortOrder
  }

  export type AdherentMinOrderByAggregateInput = {
    id_adherent?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    goal?: SortOrder
    nombre_sceance_restantes?: SortOrder
    nombre_heures_restantes?: SortOrder
    role?: SortOrder
  }

  export type AdherentSumOrderByAggregateInput = {
    id_adherent?: SortOrder
    age?: SortOrder
    nombre_sceance_restantes?: SortOrder
    nombre_heures_restantes?: SortOrder
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type AdherentScalarRelationFilter = {
    is?: AdherentWhereInput
    isNot?: AdherentWhereInput
  }

  export type SportScalarRelationFilter = {
    is?: SportWhereInput
    isNot?: SportWhereInput
  }

  export type Adherent_sportCountOrderByAggregateInput = {
    id_sport?: SortOrder
    id?: SortOrder
    id_adherent?: SortOrder
  }

  export type Adherent_sportAvgOrderByAggregateInput = {
    id_sport?: SortOrder
    id?: SortOrder
    id_adherent?: SortOrder
  }

  export type Adherent_sportMaxOrderByAggregateInput = {
    id_sport?: SortOrder
    id?: SortOrder
    id_adherent?: SortOrder
  }

  export type Adherent_sportMinOrderByAggregateInput = {
    id_sport?: SortOrder
    id?: SortOrder
    id_adherent?: SortOrder
  }

  export type Adherent_sportSumOrderByAggregateInput = {
    id_sport?: SortOrder
    id?: SortOrder
    id_adherent?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SportCountOrderByAggregateInput = {
    id_sport?: SortOrder
    Name?: SortOrder
    Date?: SortOrder
    Starting_time?: SortOrder
    Ending_time?: SortOrder
  }

  export type SportAvgOrderByAggregateInput = {
    id_sport?: SortOrder
  }

  export type SportMaxOrderByAggregateInput = {
    id_sport?: SortOrder
    Name?: SortOrder
    Date?: SortOrder
    Starting_time?: SortOrder
    Ending_time?: SortOrder
  }

  export type SportMinOrderByAggregateInput = {
    id_sport?: SortOrder
    Name?: SortOrder
    Date?: SortOrder
    Starting_time?: SortOrder
    Ending_time?: SortOrder
  }

  export type SportSumOrderByAggregateInput = {
    id_sport?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Adherent_sportCreateNestedManyWithoutAdherentInput = {
    create?: XOR<Adherent_sportCreateWithoutAdherentInput, Adherent_sportUncheckedCreateWithoutAdherentInput> | Adherent_sportCreateWithoutAdherentInput[] | Adherent_sportUncheckedCreateWithoutAdherentInput[]
    connectOrCreate?: Adherent_sportCreateOrConnectWithoutAdherentInput | Adherent_sportCreateOrConnectWithoutAdherentInput[]
    createMany?: Adherent_sportCreateManyAdherentInputEnvelope
    connect?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
  }

  export type Adherent_sportUncheckedCreateNestedManyWithoutAdherentInput = {
    create?: XOR<Adherent_sportCreateWithoutAdherentInput, Adherent_sportUncheckedCreateWithoutAdherentInput> | Adherent_sportCreateWithoutAdherentInput[] | Adherent_sportUncheckedCreateWithoutAdherentInput[]
    connectOrCreate?: Adherent_sportCreateOrConnectWithoutAdherentInput | Adherent_sportCreateOrConnectWithoutAdherentInput[]
    createMany?: Adherent_sportCreateManyAdherentInputEnvelope
    connect?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Adherent_sportUpdateManyWithoutAdherentNestedInput = {
    create?: XOR<Adherent_sportCreateWithoutAdherentInput, Adherent_sportUncheckedCreateWithoutAdherentInput> | Adherent_sportCreateWithoutAdherentInput[] | Adherent_sportUncheckedCreateWithoutAdherentInput[]
    connectOrCreate?: Adherent_sportCreateOrConnectWithoutAdherentInput | Adherent_sportCreateOrConnectWithoutAdherentInput[]
    upsert?: Adherent_sportUpsertWithWhereUniqueWithoutAdherentInput | Adherent_sportUpsertWithWhereUniqueWithoutAdherentInput[]
    createMany?: Adherent_sportCreateManyAdherentInputEnvelope
    set?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
    disconnect?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
    delete?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
    connect?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
    update?: Adherent_sportUpdateWithWhereUniqueWithoutAdherentInput | Adherent_sportUpdateWithWhereUniqueWithoutAdherentInput[]
    updateMany?: Adherent_sportUpdateManyWithWhereWithoutAdherentInput | Adherent_sportUpdateManyWithWhereWithoutAdherentInput[]
    deleteMany?: Adherent_sportScalarWhereInput | Adherent_sportScalarWhereInput[]
  }

  export type Adherent_sportUncheckedUpdateManyWithoutAdherentNestedInput = {
    create?: XOR<Adherent_sportCreateWithoutAdherentInput, Adherent_sportUncheckedCreateWithoutAdherentInput> | Adherent_sportCreateWithoutAdherentInput[] | Adherent_sportUncheckedCreateWithoutAdherentInput[]
    connectOrCreate?: Adherent_sportCreateOrConnectWithoutAdherentInput | Adherent_sportCreateOrConnectWithoutAdherentInput[]
    upsert?: Adherent_sportUpsertWithWhereUniqueWithoutAdherentInput | Adherent_sportUpsertWithWhereUniqueWithoutAdherentInput[]
    createMany?: Adherent_sportCreateManyAdherentInputEnvelope
    set?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
    disconnect?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
    delete?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
    connect?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
    update?: Adherent_sportUpdateWithWhereUniqueWithoutAdherentInput | Adherent_sportUpdateWithWhereUniqueWithoutAdherentInput[]
    updateMany?: Adherent_sportUpdateManyWithWhereWithoutAdherentInput | Adherent_sportUpdateManyWithWhereWithoutAdherentInput[]
    deleteMany?: Adherent_sportScalarWhereInput | Adherent_sportScalarWhereInput[]
  }

  export type AdherentCreateNestedOneWithoutAdherent_sportInput = {
    create?: XOR<AdherentCreateWithoutAdherent_sportInput, AdherentUncheckedCreateWithoutAdherent_sportInput>
    connectOrCreate?: AdherentCreateOrConnectWithoutAdherent_sportInput
    connect?: AdherentWhereUniqueInput
  }

  export type SportCreateNestedOneWithoutAdherent_sportInput = {
    create?: XOR<SportCreateWithoutAdherent_sportInput, SportUncheckedCreateWithoutAdherent_sportInput>
    connectOrCreate?: SportCreateOrConnectWithoutAdherent_sportInput
    connect?: SportWhereUniqueInput
  }

  export type AdherentUpdateOneRequiredWithoutAdherent_sportNestedInput = {
    create?: XOR<AdherentCreateWithoutAdherent_sportInput, AdherentUncheckedCreateWithoutAdherent_sportInput>
    connectOrCreate?: AdherentCreateOrConnectWithoutAdherent_sportInput
    upsert?: AdherentUpsertWithoutAdherent_sportInput
    connect?: AdherentWhereUniqueInput
    update?: XOR<XOR<AdherentUpdateToOneWithWhereWithoutAdherent_sportInput, AdherentUpdateWithoutAdherent_sportInput>, AdherentUncheckedUpdateWithoutAdherent_sportInput>
  }

  export type SportUpdateOneRequiredWithoutAdherent_sportNestedInput = {
    create?: XOR<SportCreateWithoutAdherent_sportInput, SportUncheckedCreateWithoutAdherent_sportInput>
    connectOrCreate?: SportCreateOrConnectWithoutAdherent_sportInput
    upsert?: SportUpsertWithoutAdherent_sportInput
    connect?: SportWhereUniqueInput
    update?: XOR<XOR<SportUpdateToOneWithWhereWithoutAdherent_sportInput, SportUpdateWithoutAdherent_sportInput>, SportUncheckedUpdateWithoutAdherent_sportInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type Adherent_sportCreateNestedManyWithoutSportInput = {
    create?: XOR<Adherent_sportCreateWithoutSportInput, Adherent_sportUncheckedCreateWithoutSportInput> | Adherent_sportCreateWithoutSportInput[] | Adherent_sportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: Adherent_sportCreateOrConnectWithoutSportInput | Adherent_sportCreateOrConnectWithoutSportInput[]
    createMany?: Adherent_sportCreateManySportInputEnvelope
    connect?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
  }

  export type Adherent_sportUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<Adherent_sportCreateWithoutSportInput, Adherent_sportUncheckedCreateWithoutSportInput> | Adherent_sportCreateWithoutSportInput[] | Adherent_sportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: Adherent_sportCreateOrConnectWithoutSportInput | Adherent_sportCreateOrConnectWithoutSportInput[]
    createMany?: Adherent_sportCreateManySportInputEnvelope
    connect?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Adherent_sportUpdateManyWithoutSportNestedInput = {
    create?: XOR<Adherent_sportCreateWithoutSportInput, Adherent_sportUncheckedCreateWithoutSportInput> | Adherent_sportCreateWithoutSportInput[] | Adherent_sportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: Adherent_sportCreateOrConnectWithoutSportInput | Adherent_sportCreateOrConnectWithoutSportInput[]
    upsert?: Adherent_sportUpsertWithWhereUniqueWithoutSportInput | Adherent_sportUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: Adherent_sportCreateManySportInputEnvelope
    set?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
    disconnect?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
    delete?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
    connect?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
    update?: Adherent_sportUpdateWithWhereUniqueWithoutSportInput | Adherent_sportUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: Adherent_sportUpdateManyWithWhereWithoutSportInput | Adherent_sportUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: Adherent_sportScalarWhereInput | Adherent_sportScalarWhereInput[]
  }

  export type Adherent_sportUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<Adherent_sportCreateWithoutSportInput, Adherent_sportUncheckedCreateWithoutSportInput> | Adherent_sportCreateWithoutSportInput[] | Adherent_sportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: Adherent_sportCreateOrConnectWithoutSportInput | Adherent_sportCreateOrConnectWithoutSportInput[]
    upsert?: Adherent_sportUpsertWithWhereUniqueWithoutSportInput | Adherent_sportUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: Adherent_sportCreateManySportInputEnvelope
    set?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
    disconnect?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
    delete?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
    connect?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
    update?: Adherent_sportUpdateWithWhereUniqueWithoutSportInput | Adherent_sportUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: Adherent_sportUpdateManyWithWhereWithoutSportInput | Adherent_sportUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: Adherent_sportScalarWhereInput | Adherent_sportScalarWhereInput[]
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

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Adherent_sportCreateWithoutAdherentInput = {
    Sport: SportCreateNestedOneWithoutAdherent_sportInput
  }

  export type Adherent_sportUncheckedCreateWithoutAdherentInput = {
    id_sport: bigint | number
    id?: number
  }

  export type Adherent_sportCreateOrConnectWithoutAdherentInput = {
    where: Adherent_sportWhereUniqueInput
    create: XOR<Adherent_sportCreateWithoutAdherentInput, Adherent_sportUncheckedCreateWithoutAdherentInput>
  }

  export type Adherent_sportCreateManyAdherentInputEnvelope = {
    data: Adherent_sportCreateManyAdherentInput | Adherent_sportCreateManyAdherentInput[]
    skipDuplicates?: boolean
  }

  export type Adherent_sportUpsertWithWhereUniqueWithoutAdherentInput = {
    where: Adherent_sportWhereUniqueInput
    update: XOR<Adherent_sportUpdateWithoutAdherentInput, Adherent_sportUncheckedUpdateWithoutAdherentInput>
    create: XOR<Adherent_sportCreateWithoutAdherentInput, Adherent_sportUncheckedCreateWithoutAdherentInput>
  }

  export type Adherent_sportUpdateWithWhereUniqueWithoutAdherentInput = {
    where: Adherent_sportWhereUniqueInput
    data: XOR<Adherent_sportUpdateWithoutAdherentInput, Adherent_sportUncheckedUpdateWithoutAdherentInput>
  }

  export type Adherent_sportUpdateManyWithWhereWithoutAdherentInput = {
    where: Adherent_sportScalarWhereInput
    data: XOR<Adherent_sportUpdateManyMutationInput, Adherent_sportUncheckedUpdateManyWithoutAdherentInput>
  }

  export type Adherent_sportScalarWhereInput = {
    AND?: Adherent_sportScalarWhereInput | Adherent_sportScalarWhereInput[]
    OR?: Adherent_sportScalarWhereInput[]
    NOT?: Adherent_sportScalarWhereInput | Adherent_sportScalarWhereInput[]
    id_sport?: BigIntFilter<"Adherent_sport"> | bigint | number
    id?: IntFilter<"Adherent_sport"> | number
    id_adherent?: IntFilter<"Adherent_sport"> | number
  }

  export type AdherentCreateWithoutAdherent_sportInput = {
    nom: string
    prenom: string
    email: string
    password: string
    age: number
    gender: string
    goal?: string | null
    nombre_sceance_restantes?: number
    nombre_heures_restantes?: number
    role?: string | null
  }

  export type AdherentUncheckedCreateWithoutAdherent_sportInput = {
    id_adherent?: number
    nom: string
    prenom: string
    email: string
    password: string
    age: number
    gender: string
    goal?: string | null
    nombre_sceance_restantes?: number
    nombre_heures_restantes?: number
    role?: string | null
  }

  export type AdherentCreateOrConnectWithoutAdherent_sportInput = {
    where: AdherentWhereUniqueInput
    create: XOR<AdherentCreateWithoutAdherent_sportInput, AdherentUncheckedCreateWithoutAdherent_sportInput>
  }

  export type SportCreateWithoutAdherent_sportInput = {
    id_sport?: bigint | number
    Name: string
    Date?: Date | string | null
    Starting_time?: Date | string | null
    Ending_time?: Date | string | null
  }

  export type SportUncheckedCreateWithoutAdherent_sportInput = {
    id_sport?: bigint | number
    Name: string
    Date?: Date | string | null
    Starting_time?: Date | string | null
    Ending_time?: Date | string | null
  }

  export type SportCreateOrConnectWithoutAdherent_sportInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutAdherent_sportInput, SportUncheckedCreateWithoutAdherent_sportInput>
  }

  export type AdherentUpsertWithoutAdherent_sportInput = {
    update: XOR<AdherentUpdateWithoutAdherent_sportInput, AdherentUncheckedUpdateWithoutAdherent_sportInput>
    create: XOR<AdherentCreateWithoutAdherent_sportInput, AdherentUncheckedCreateWithoutAdherent_sportInput>
    where?: AdherentWhereInput
  }

  export type AdherentUpdateToOneWithWhereWithoutAdherent_sportInput = {
    where?: AdherentWhereInput
    data: XOR<AdherentUpdateWithoutAdherent_sportInput, AdherentUncheckedUpdateWithoutAdherent_sportInput>
  }

  export type AdherentUpdateWithoutAdherent_sportInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_sceance_restantes?: IntFieldUpdateOperationsInput | number
    nombre_heures_restantes?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdherentUncheckedUpdateWithoutAdherent_sportInput = {
    id_adherent?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_sceance_restantes?: IntFieldUpdateOperationsInput | number
    nombre_heures_restantes?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportUpsertWithoutAdherent_sportInput = {
    update: XOR<SportUpdateWithoutAdherent_sportInput, SportUncheckedUpdateWithoutAdherent_sportInput>
    create: XOR<SportCreateWithoutAdherent_sportInput, SportUncheckedCreateWithoutAdherent_sportInput>
    where?: SportWhereInput
  }

  export type SportUpdateToOneWithWhereWithoutAdherent_sportInput = {
    where?: SportWhereInput
    data: XOR<SportUpdateWithoutAdherent_sportInput, SportUncheckedUpdateWithoutAdherent_sportInput>
  }

  export type SportUpdateWithoutAdherent_sportInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Starting_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ending_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SportUncheckedUpdateWithoutAdherent_sportInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Starting_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ending_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Adherent_sportCreateWithoutSportInput = {
    Adherent: AdherentCreateNestedOneWithoutAdherent_sportInput
  }

  export type Adherent_sportUncheckedCreateWithoutSportInput = {
    id?: number
    id_adherent: number
  }

  export type Adherent_sportCreateOrConnectWithoutSportInput = {
    where: Adherent_sportWhereUniqueInput
    create: XOR<Adherent_sportCreateWithoutSportInput, Adherent_sportUncheckedCreateWithoutSportInput>
  }

  export type Adherent_sportCreateManySportInputEnvelope = {
    data: Adherent_sportCreateManySportInput | Adherent_sportCreateManySportInput[]
    skipDuplicates?: boolean
  }

  export type Adherent_sportUpsertWithWhereUniqueWithoutSportInput = {
    where: Adherent_sportWhereUniqueInput
    update: XOR<Adherent_sportUpdateWithoutSportInput, Adherent_sportUncheckedUpdateWithoutSportInput>
    create: XOR<Adherent_sportCreateWithoutSportInput, Adherent_sportUncheckedCreateWithoutSportInput>
  }

  export type Adherent_sportUpdateWithWhereUniqueWithoutSportInput = {
    where: Adherent_sportWhereUniqueInput
    data: XOR<Adherent_sportUpdateWithoutSportInput, Adherent_sportUncheckedUpdateWithoutSportInput>
  }

  export type Adherent_sportUpdateManyWithWhereWithoutSportInput = {
    where: Adherent_sportScalarWhereInput
    data: XOR<Adherent_sportUpdateManyMutationInput, Adherent_sportUncheckedUpdateManyWithoutSportInput>
  }

  export type Adherent_sportCreateManyAdherentInput = {
    id_sport: bigint | number
    id?: number
  }

  export type Adherent_sportUpdateWithoutAdherentInput = {
    Sport?: SportUpdateOneRequiredWithoutAdherent_sportNestedInput
  }

  export type Adherent_sportUncheckedUpdateWithoutAdherentInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    id?: IntFieldUpdateOperationsInput | number
  }

  export type Adherent_sportUncheckedUpdateManyWithoutAdherentInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    id?: IntFieldUpdateOperationsInput | number
  }

  export type Adherent_sportCreateManySportInput = {
    id?: number
    id_adherent: number
  }

  export type Adherent_sportUpdateWithoutSportInput = {
    Adherent?: AdherentUpdateOneRequiredWithoutAdherent_sportNestedInput
  }

  export type Adherent_sportUncheckedUpdateWithoutSportInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_adherent?: IntFieldUpdateOperationsInput | number
  }

  export type Adherent_sportUncheckedUpdateManyWithoutSportInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_adherent?: IntFieldUpdateOperationsInput | number
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