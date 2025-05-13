
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
 * Model SportSession
 * 
 */
export type SportSession = $Result.DefaultSelection<Prisma.$SportSessionPayload>
/**
 * Model Diet
 * 
 */
export type Diet = $Result.DefaultSelection<Prisma.$DietPayload>
/**
 * Model food
 * 
 */
export type food = $Result.DefaultSelection<Prisma.$foodPayload>
/**
 * Model InBody
 * 
 */
export type InBody = $Result.DefaultSelection<Prisma.$InBodyPayload>
/**
 * Model Coach
 * 
 */
export type Coach = $Result.DefaultSelection<Prisma.$CoachPayload>
/**
 * Model Sport_coach
 * 
 */
export type Sport_coach = $Result.DefaultSelection<Prisma.$Sport_coachPayload>

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

  /**
   * `prisma.sportSession`: Exposes CRUD operations for the **SportSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SportSessions
    * const sportSessions = await prisma.sportSession.findMany()
    * ```
    */
  get sportSession(): Prisma.SportSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diet`: Exposes CRUD operations for the **Diet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diets
    * const diets = await prisma.diet.findMany()
    * ```
    */
  get diet(): Prisma.DietDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.food`: Exposes CRUD operations for the **food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.foodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inBody`: Exposes CRUD operations for the **InBody** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InBodies
    * const inBodies = await prisma.inBody.findMany()
    * ```
    */
  get inBody(): Prisma.InBodyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coach`: Exposes CRUD operations for the **Coach** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coaches
    * const coaches = await prisma.coach.findMany()
    * ```
    */
  get coach(): Prisma.CoachDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sport_coach`: Exposes CRUD operations for the **Sport_coach** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sport_coaches
    * const sport_coaches = await prisma.sport_coach.findMany()
    * ```
    */
  get sport_coach(): Prisma.Sport_coachDelegate<ExtArgs, ClientOptions>;
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
    Sport: 'Sport',
    SportSession: 'SportSession',
    Diet: 'Diet',
    food: 'food',
    InBody: 'InBody',
    Coach: 'Coach',
    Sport_coach: 'Sport_coach'
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
      modelProps: "adherent" | "adherent_sport" | "sport" | "sportSession" | "diet" | "food" | "inBody" | "coach" | "sport_coach"
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
      SportSession: {
        payload: Prisma.$SportSessionPayload<ExtArgs>
        fields: Prisma.SportSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SportSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SportSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportSessionPayload>
          }
          findFirst: {
            args: Prisma.SportSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SportSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportSessionPayload>
          }
          findMany: {
            args: Prisma.SportSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportSessionPayload>[]
          }
          create: {
            args: Prisma.SportSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportSessionPayload>
          }
          createMany: {
            args: Prisma.SportSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SportSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportSessionPayload>[]
          }
          delete: {
            args: Prisma.SportSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportSessionPayload>
          }
          update: {
            args: Prisma.SportSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportSessionPayload>
          }
          deleteMany: {
            args: Prisma.SportSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SportSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SportSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportSessionPayload>[]
          }
          upsert: {
            args: Prisma.SportSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportSessionPayload>
          }
          aggregate: {
            args: Prisma.SportSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSportSession>
          }
          groupBy: {
            args: Prisma.SportSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SportSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SportSessionCountArgs<ExtArgs>
            result: $Utils.Optional<SportSessionCountAggregateOutputType> | number
          }
        }
      }
      Diet: {
        payload: Prisma.$DietPayload<ExtArgs>
        fields: Prisma.DietFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DietFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DietFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>
          }
          findFirst: {
            args: Prisma.DietFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DietFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>
          }
          findMany: {
            args: Prisma.DietFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>[]
          }
          create: {
            args: Prisma.DietCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>
          }
          createMany: {
            args: Prisma.DietCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DietCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>[]
          }
          delete: {
            args: Prisma.DietDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>
          }
          update: {
            args: Prisma.DietUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>
          }
          deleteMany: {
            args: Prisma.DietDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DietUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DietUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>[]
          }
          upsert: {
            args: Prisma.DietUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>
          }
          aggregate: {
            args: Prisma.DietAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiet>
          }
          groupBy: {
            args: Prisma.DietGroupByArgs<ExtArgs>
            result: $Utils.Optional<DietGroupByOutputType>[]
          }
          count: {
            args: Prisma.DietCountArgs<ExtArgs>
            result: $Utils.Optional<DietCountAggregateOutputType> | number
          }
        }
      }
      food: {
        payload: Prisma.$foodPayload<ExtArgs>
        fields: Prisma.foodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.foodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.foodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          findFirst: {
            args: Prisma.foodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.foodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          findMany: {
            args: Prisma.foodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>[]
          }
          create: {
            args: Prisma.foodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          createMany: {
            args: Prisma.foodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.foodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>[]
          }
          delete: {
            args: Prisma.foodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          update: {
            args: Prisma.foodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          deleteMany: {
            args: Prisma.foodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.foodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.foodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>[]
          }
          upsert: {
            args: Prisma.foodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          aggregate: {
            args: Prisma.FoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood>
          }
          groupBy: {
            args: Prisma.foodGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.foodCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCountAggregateOutputType> | number
          }
        }
      }
      InBody: {
        payload: Prisma.$InBodyPayload<ExtArgs>
        fields: Prisma.InBodyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InBodyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InBodyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InBodyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InBodyPayload>
          }
          findFirst: {
            args: Prisma.InBodyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InBodyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InBodyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InBodyPayload>
          }
          findMany: {
            args: Prisma.InBodyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InBodyPayload>[]
          }
          create: {
            args: Prisma.InBodyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InBodyPayload>
          }
          createMany: {
            args: Prisma.InBodyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InBodyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InBodyPayload>[]
          }
          delete: {
            args: Prisma.InBodyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InBodyPayload>
          }
          update: {
            args: Prisma.InBodyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InBodyPayload>
          }
          deleteMany: {
            args: Prisma.InBodyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InBodyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InBodyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InBodyPayload>[]
          }
          upsert: {
            args: Prisma.InBodyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InBodyPayload>
          }
          aggregate: {
            args: Prisma.InBodyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInBody>
          }
          groupBy: {
            args: Prisma.InBodyGroupByArgs<ExtArgs>
            result: $Utils.Optional<InBodyGroupByOutputType>[]
          }
          count: {
            args: Prisma.InBodyCountArgs<ExtArgs>
            result: $Utils.Optional<InBodyCountAggregateOutputType> | number
          }
        }
      }
      Coach: {
        payload: Prisma.$CoachPayload<ExtArgs>
        fields: Prisma.CoachFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoachFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoachFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          findFirst: {
            args: Prisma.CoachFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoachFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          findMany: {
            args: Prisma.CoachFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>[]
          }
          create: {
            args: Prisma.CoachCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          createMany: {
            args: Prisma.CoachCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoachCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>[]
          }
          delete: {
            args: Prisma.CoachDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          update: {
            args: Prisma.CoachUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          deleteMany: {
            args: Prisma.CoachDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoachUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoachUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>[]
          }
          upsert: {
            args: Prisma.CoachUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          aggregate: {
            args: Prisma.CoachAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoach>
          }
          groupBy: {
            args: Prisma.CoachGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoachGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoachCountArgs<ExtArgs>
            result: $Utils.Optional<CoachCountAggregateOutputType> | number
          }
        }
      }
      Sport_coach: {
        payload: Prisma.$Sport_coachPayload<ExtArgs>
        fields: Prisma.Sport_coachFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Sport_coachFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sport_coachPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Sport_coachFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sport_coachPayload>
          }
          findFirst: {
            args: Prisma.Sport_coachFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sport_coachPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Sport_coachFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sport_coachPayload>
          }
          findMany: {
            args: Prisma.Sport_coachFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sport_coachPayload>[]
          }
          create: {
            args: Prisma.Sport_coachCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sport_coachPayload>
          }
          createMany: {
            args: Prisma.Sport_coachCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Sport_coachCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sport_coachPayload>[]
          }
          delete: {
            args: Prisma.Sport_coachDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sport_coachPayload>
          }
          update: {
            args: Prisma.Sport_coachUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sport_coachPayload>
          }
          deleteMany: {
            args: Prisma.Sport_coachDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Sport_coachUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Sport_coachUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sport_coachPayload>[]
          }
          upsert: {
            args: Prisma.Sport_coachUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sport_coachPayload>
          }
          aggregate: {
            args: Prisma.Sport_coachAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSport_coach>
          }
          groupBy: {
            args: Prisma.Sport_coachGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sport_coachGroupByOutputType>[]
          }
          count: {
            args: Prisma.Sport_coachCountArgs<ExtArgs>
            result: $Utils.Optional<Sport_coachCountAggregateOutputType> | number
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
    sportSession?: SportSessionOmit
    diet?: DietOmit
    food?: foodOmit
    inBody?: InBodyOmit
    coach?: CoachOmit
    sport_coach?: Sport_coachOmit
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
    Diet: number
    InBody: number
  }

  export type AdherentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adherent_sport?: boolean | AdherentCountOutputTypeCountAdherent_sportArgs
    Diet?: boolean | AdherentCountOutputTypeCountDietArgs
    InBody?: boolean | AdherentCountOutputTypeCountInBodyArgs
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
   * AdherentCountOutputType without action
   */
  export type AdherentCountOutputTypeCountDietArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DietWhereInput
  }

  /**
   * AdherentCountOutputType without action
   */
  export type AdherentCountOutputTypeCountInBodyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InBodyWhereInput
  }


  /**
   * Count Type SportCountOutputType
   */

  export type SportCountOutputType = {
    Adherent_sport: number
    Coach: number
    Sport_coach: number
    sessions: number
  }

  export type SportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adherent_sport?: boolean | SportCountOutputTypeCountAdherent_sportArgs
    Coach?: boolean | SportCountOutputTypeCountCoachArgs
    Sport_coach?: boolean | SportCountOutputTypeCountSport_coachArgs
    sessions?: boolean | SportCountOutputTypeCountSessionsArgs
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
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeCountCoachArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachWhereInput
  }

  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeCountSport_coachArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sport_coachWhereInput
  }

  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportSessionWhereInput
  }


  /**
   * Count Type FoodCountOutputType
   */

  export type FoodCountOutputType = {
    Diet: number
  }

  export type FoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Diet?: boolean | FoodCountOutputTypeCountDietArgs
  }

  // Custom InputTypes
  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCountOutputType
     */
    select?: FoodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountDietArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DietWhereInput
  }


  /**
   * Count Type CoachCountOutputType
   */

  export type CoachCountOutputType = {
    Sport_coach: number
  }

  export type CoachCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sport_coach?: boolean | CoachCountOutputTypeCountSport_coachArgs
  }

  // Custom InputTypes
  /**
   * CoachCountOutputType without action
   */
  export type CoachCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachCountOutputType
     */
    select?: CoachCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoachCountOutputType without action
   */
  export type CoachCountOutputTypeCountSport_coachArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sport_coachWhereInput
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
    next_adherent_inbody_rdv: Date | null
    payment_status: string | null
    inscription_status: string | null
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
    next_adherent_inbody_rdv: Date | null
    payment_status: string | null
    inscription_status: string | null
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
    next_adherent_inbody_rdv: number
    payment_status: number
    inscription_status: number
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
    next_adherent_inbody_rdv?: true
    payment_status?: true
    inscription_status?: true
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
    next_adherent_inbody_rdv?: true
    payment_status?: true
    inscription_status?: true
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
    next_adherent_inbody_rdv?: true
    payment_status?: true
    inscription_status?: true
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
    next_adherent_inbody_rdv: Date | null
    payment_status: string | null
    inscription_status: string | null
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
    next_adherent_inbody_rdv?: boolean
    payment_status?: boolean
    inscription_status?: boolean
    Adherent_sport?: boolean | Adherent$Adherent_sportArgs<ExtArgs>
    Diet?: boolean | Adherent$DietArgs<ExtArgs>
    InBody?: boolean | Adherent$InBodyArgs<ExtArgs>
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
    next_adherent_inbody_rdv?: boolean
    payment_status?: boolean
    inscription_status?: boolean
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
    next_adherent_inbody_rdv?: boolean
    payment_status?: boolean
    inscription_status?: boolean
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
    next_adherent_inbody_rdv?: boolean
    payment_status?: boolean
    inscription_status?: boolean
  }

  export type AdherentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_adherent" | "nom" | "prenom" | "email" | "password" | "age" | "gender" | "goal" | "nombre_sceance_restantes" | "nombre_heures_restantes" | "role" | "next_adherent_inbody_rdv" | "payment_status" | "inscription_status", ExtArgs["result"]["adherent"]>
  export type AdherentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adherent_sport?: boolean | Adherent$Adherent_sportArgs<ExtArgs>
    Diet?: boolean | Adherent$DietArgs<ExtArgs>
    InBody?: boolean | Adherent$InBodyArgs<ExtArgs>
    _count?: boolean | AdherentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdherentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdherentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdherentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adherent"
    objects: {
      Adherent_sport: Prisma.$Adherent_sportPayload<ExtArgs>[]
      Diet: Prisma.$DietPayload<ExtArgs>[]
      InBody: Prisma.$InBodyPayload<ExtArgs>[]
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
      next_adherent_inbody_rdv: Date | null
      payment_status: string | null
      inscription_status: string | null
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
    Diet<T extends Adherent$DietArgs<ExtArgs> = {}>(args?: Subset<T, Adherent$DietArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    InBody<T extends Adherent$InBodyArgs<ExtArgs> = {}>(args?: Subset<T, Adherent$InBodyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InBodyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly next_adherent_inbody_rdv: FieldRef<"Adherent", 'DateTime'>
    readonly payment_status: FieldRef<"Adherent", 'String'>
    readonly inscription_status: FieldRef<"Adherent", 'String'>
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
   * Adherent.Diet
   */
  export type Adherent$DietArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    where?: DietWhereInput
    orderBy?: DietOrderByWithRelationInput | DietOrderByWithRelationInput[]
    cursor?: DietWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DietScalarFieldEnum | DietScalarFieldEnum[]
  }

  /**
   * Adherent.InBody
   */
  export type Adherent$InBodyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InBody
     */
    select?: InBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InBody
     */
    omit?: InBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InBodyInclude<ExtArgs> | null
    where?: InBodyWhereInput
    orderBy?: InBodyOrderByWithRelationInput | InBodyOrderByWithRelationInput[]
    cursor?: InBodyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InBodyScalarFieldEnum | InBodyScalarFieldEnum[]
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
  }

  export type SportMaxAggregateOutputType = {
    id_sport: bigint | null
    Name: string | null
  }

  export type SportCountAggregateOutputType = {
    id_sport: number
    Name: number
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
  }

  export type SportMaxAggregateInputType = {
    id_sport?: true
    Name?: true
  }

  export type SportCountAggregateInputType = {
    id_sport?: true
    Name?: true
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
    Adherent_sport?: boolean | Sport$Adherent_sportArgs<ExtArgs>
    Coach?: boolean | Sport$CoachArgs<ExtArgs>
    Sport_coach?: boolean | Sport$Sport_coachArgs<ExtArgs>
    sessions?: boolean | Sport$sessionsArgs<ExtArgs>
    _count?: boolean | SportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sport"]>

  export type SportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sport?: boolean
    Name?: boolean
  }, ExtArgs["result"]["sport"]>

  export type SportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sport?: boolean
    Name?: boolean
  }, ExtArgs["result"]["sport"]>

  export type SportSelectScalar = {
    id_sport?: boolean
    Name?: boolean
  }

  export type SportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_sport" | "Name", ExtArgs["result"]["sport"]>
  export type SportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adherent_sport?: boolean | Sport$Adherent_sportArgs<ExtArgs>
    Coach?: boolean | Sport$CoachArgs<ExtArgs>
    Sport_coach?: boolean | Sport$Sport_coachArgs<ExtArgs>
    sessions?: boolean | Sport$sessionsArgs<ExtArgs>
    _count?: boolean | SportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sport"
    objects: {
      Adherent_sport: Prisma.$Adherent_sportPayload<ExtArgs>[]
      Coach: Prisma.$CoachPayload<ExtArgs>[]
      Sport_coach: Prisma.$Sport_coachPayload<ExtArgs>[]
      sessions: Prisma.$SportSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_sport: bigint
      Name: string
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
    Coach<T extends Sport$CoachArgs<ExtArgs> = {}>(args?: Subset<T, Sport$CoachArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Sport_coach<T extends Sport$Sport_coachArgs<ExtArgs> = {}>(args?: Subset<T, Sport$Sport_coachArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sport_coachPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Sport$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Sport$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Sport.Coach
   */
  export type Sport$CoachArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    where?: CoachWhereInput
    orderBy?: CoachOrderByWithRelationInput | CoachOrderByWithRelationInput[]
    cursor?: CoachWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoachScalarFieldEnum | CoachScalarFieldEnum[]
  }

  /**
   * Sport.Sport_coach
   */
  export type Sport$Sport_coachArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport_coach
     */
    select?: Sport_coachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport_coach
     */
    omit?: Sport_coachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sport_coachInclude<ExtArgs> | null
    where?: Sport_coachWhereInput
    orderBy?: Sport_coachOrderByWithRelationInput | Sport_coachOrderByWithRelationInput[]
    cursor?: Sport_coachWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sport_coachScalarFieldEnum | Sport_coachScalarFieldEnum[]
  }

  /**
   * Sport.sessions
   */
  export type Sport$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportSession
     */
    select?: SportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportSession
     */
    omit?: SportSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportSessionInclude<ExtArgs> | null
    where?: SportSessionWhereInput
    orderBy?: SportSessionOrderByWithRelationInput | SportSessionOrderByWithRelationInput[]
    cursor?: SportSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SportSessionScalarFieldEnum | SportSessionScalarFieldEnum[]
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
   * Model SportSession
   */

  export type AggregateSportSession = {
    _count: SportSessionCountAggregateOutputType | null
    _avg: SportSessionAvgAggregateOutputType | null
    _sum: SportSessionSumAggregateOutputType | null
    _min: SportSessionMinAggregateOutputType | null
    _max: SportSessionMaxAggregateOutputType | null
  }

  export type SportSessionAvgAggregateOutputType = {
    id: number | null
    sport_id: number | null
  }

  export type SportSessionSumAggregateOutputType = {
    id: number | null
    sport_id: bigint | null
  }

  export type SportSessionMinAggregateOutputType = {
    id: number | null
    sport_id: bigint | null
    date: Date | null
    starting_time: Date | null
    ending_time: Date | null
    group_name: string | null
  }

  export type SportSessionMaxAggregateOutputType = {
    id: number | null
    sport_id: bigint | null
    date: Date | null
    starting_time: Date | null
    ending_time: Date | null
    group_name: string | null
  }

  export type SportSessionCountAggregateOutputType = {
    id: number
    sport_id: number
    date: number
    starting_time: number
    ending_time: number
    group_name: number
    _all: number
  }


  export type SportSessionAvgAggregateInputType = {
    id?: true
    sport_id?: true
  }

  export type SportSessionSumAggregateInputType = {
    id?: true
    sport_id?: true
  }

  export type SportSessionMinAggregateInputType = {
    id?: true
    sport_id?: true
    date?: true
    starting_time?: true
    ending_time?: true
    group_name?: true
  }

  export type SportSessionMaxAggregateInputType = {
    id?: true
    sport_id?: true
    date?: true
    starting_time?: true
    ending_time?: true
    group_name?: true
  }

  export type SportSessionCountAggregateInputType = {
    id?: true
    sport_id?: true
    date?: true
    starting_time?: true
    ending_time?: true
    group_name?: true
    _all?: true
  }

  export type SportSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SportSession to aggregate.
     */
    where?: SportSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportSessions to fetch.
     */
    orderBy?: SportSessionOrderByWithRelationInput | SportSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SportSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SportSessions
    **/
    _count?: true | SportSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SportSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SportSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SportSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SportSessionMaxAggregateInputType
  }

  export type GetSportSessionAggregateType<T extends SportSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSportSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSportSession[P]>
      : GetScalarType<T[P], AggregateSportSession[P]>
  }




  export type SportSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportSessionWhereInput
    orderBy?: SportSessionOrderByWithAggregationInput | SportSessionOrderByWithAggregationInput[]
    by: SportSessionScalarFieldEnum[] | SportSessionScalarFieldEnum
    having?: SportSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SportSessionCountAggregateInputType | true
    _avg?: SportSessionAvgAggregateInputType
    _sum?: SportSessionSumAggregateInputType
    _min?: SportSessionMinAggregateInputType
    _max?: SportSessionMaxAggregateInputType
  }

  export type SportSessionGroupByOutputType = {
    id: number
    sport_id: bigint
    date: Date | null
    starting_time: Date | null
    ending_time: Date | null
    group_name: string | null
    _count: SportSessionCountAggregateOutputType | null
    _avg: SportSessionAvgAggregateOutputType | null
    _sum: SportSessionSumAggregateOutputType | null
    _min: SportSessionMinAggregateOutputType | null
    _max: SportSessionMaxAggregateOutputType | null
  }

  type GetSportSessionGroupByPayload<T extends SportSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SportSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SportSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SportSessionGroupByOutputType[P]>
            : GetScalarType<T[P], SportSessionGroupByOutputType[P]>
        }
      >
    >


  export type SportSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sport_id?: boolean
    date?: boolean
    starting_time?: boolean
    ending_time?: boolean
    group_name?: boolean
    Sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sportSession"]>

  export type SportSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sport_id?: boolean
    date?: boolean
    starting_time?: boolean
    ending_time?: boolean
    group_name?: boolean
    Sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sportSession"]>

  export type SportSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sport_id?: boolean
    date?: boolean
    starting_time?: boolean
    ending_time?: boolean
    group_name?: boolean
    Sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sportSession"]>

  export type SportSessionSelectScalar = {
    id?: boolean
    sport_id?: boolean
    date?: boolean
    starting_time?: boolean
    ending_time?: boolean
    group_name?: boolean
  }

  export type SportSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sport_id" | "date" | "starting_time" | "ending_time" | "group_name", ExtArgs["result"]["sportSession"]>
  export type SportSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sport?: boolean | SportDefaultArgs<ExtArgs>
  }
  export type SportSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sport?: boolean | SportDefaultArgs<ExtArgs>
  }
  export type SportSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sport?: boolean | SportDefaultArgs<ExtArgs>
  }

  export type $SportSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SportSession"
    objects: {
      Sport: Prisma.$SportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sport_id: bigint
      date: Date | null
      starting_time: Date | null
      ending_time: Date | null
      group_name: string | null
    }, ExtArgs["result"]["sportSession"]>
    composites: {}
  }

  type SportSessionGetPayload<S extends boolean | null | undefined | SportSessionDefaultArgs> = $Result.GetResult<Prisma.$SportSessionPayload, S>

  type SportSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SportSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SportSessionCountAggregateInputType | true
    }

  export interface SportSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SportSession'], meta: { name: 'SportSession' } }
    /**
     * Find zero or one SportSession that matches the filter.
     * @param {SportSessionFindUniqueArgs} args - Arguments to find a SportSession
     * @example
     * // Get one SportSession
     * const sportSession = await prisma.sportSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SportSessionFindUniqueArgs>(args: SelectSubset<T, SportSessionFindUniqueArgs<ExtArgs>>): Prisma__SportSessionClient<$Result.GetResult<Prisma.$SportSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SportSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SportSessionFindUniqueOrThrowArgs} args - Arguments to find a SportSession
     * @example
     * // Get one SportSession
     * const sportSession = await prisma.sportSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SportSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SportSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SportSessionClient<$Result.GetResult<Prisma.$SportSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SportSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportSessionFindFirstArgs} args - Arguments to find a SportSession
     * @example
     * // Get one SportSession
     * const sportSession = await prisma.sportSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SportSessionFindFirstArgs>(args?: SelectSubset<T, SportSessionFindFirstArgs<ExtArgs>>): Prisma__SportSessionClient<$Result.GetResult<Prisma.$SportSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SportSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportSessionFindFirstOrThrowArgs} args - Arguments to find a SportSession
     * @example
     * // Get one SportSession
     * const sportSession = await prisma.sportSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SportSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SportSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SportSessionClient<$Result.GetResult<Prisma.$SportSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SportSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SportSessions
     * const sportSessions = await prisma.sportSession.findMany()
     * 
     * // Get first 10 SportSessions
     * const sportSessions = await prisma.sportSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sportSessionWithIdOnly = await prisma.sportSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SportSessionFindManyArgs>(args?: SelectSubset<T, SportSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SportSession.
     * @param {SportSessionCreateArgs} args - Arguments to create a SportSession.
     * @example
     * // Create one SportSession
     * const SportSession = await prisma.sportSession.create({
     *   data: {
     *     // ... data to create a SportSession
     *   }
     * })
     * 
     */
    create<T extends SportSessionCreateArgs>(args: SelectSubset<T, SportSessionCreateArgs<ExtArgs>>): Prisma__SportSessionClient<$Result.GetResult<Prisma.$SportSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SportSessions.
     * @param {SportSessionCreateManyArgs} args - Arguments to create many SportSessions.
     * @example
     * // Create many SportSessions
     * const sportSession = await prisma.sportSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SportSessionCreateManyArgs>(args?: SelectSubset<T, SportSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SportSessions and returns the data saved in the database.
     * @param {SportSessionCreateManyAndReturnArgs} args - Arguments to create many SportSessions.
     * @example
     * // Create many SportSessions
     * const sportSession = await prisma.sportSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SportSessions and only return the `id`
     * const sportSessionWithIdOnly = await prisma.sportSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SportSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SportSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SportSession.
     * @param {SportSessionDeleteArgs} args - Arguments to delete one SportSession.
     * @example
     * // Delete one SportSession
     * const SportSession = await prisma.sportSession.delete({
     *   where: {
     *     // ... filter to delete one SportSession
     *   }
     * })
     * 
     */
    delete<T extends SportSessionDeleteArgs>(args: SelectSubset<T, SportSessionDeleteArgs<ExtArgs>>): Prisma__SportSessionClient<$Result.GetResult<Prisma.$SportSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SportSession.
     * @param {SportSessionUpdateArgs} args - Arguments to update one SportSession.
     * @example
     * // Update one SportSession
     * const sportSession = await prisma.sportSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SportSessionUpdateArgs>(args: SelectSubset<T, SportSessionUpdateArgs<ExtArgs>>): Prisma__SportSessionClient<$Result.GetResult<Prisma.$SportSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SportSessions.
     * @param {SportSessionDeleteManyArgs} args - Arguments to filter SportSessions to delete.
     * @example
     * // Delete a few SportSessions
     * const { count } = await prisma.sportSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SportSessionDeleteManyArgs>(args?: SelectSubset<T, SportSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SportSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SportSessions
     * const sportSession = await prisma.sportSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SportSessionUpdateManyArgs>(args: SelectSubset<T, SportSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SportSessions and returns the data updated in the database.
     * @param {SportSessionUpdateManyAndReturnArgs} args - Arguments to update many SportSessions.
     * @example
     * // Update many SportSessions
     * const sportSession = await prisma.sportSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SportSessions and only return the `id`
     * const sportSessionWithIdOnly = await prisma.sportSession.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SportSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SportSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SportSession.
     * @param {SportSessionUpsertArgs} args - Arguments to update or create a SportSession.
     * @example
     * // Update or create a SportSession
     * const sportSession = await prisma.sportSession.upsert({
     *   create: {
     *     // ... data to create a SportSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SportSession we want to update
     *   }
     * })
     */
    upsert<T extends SportSessionUpsertArgs>(args: SelectSubset<T, SportSessionUpsertArgs<ExtArgs>>): Prisma__SportSessionClient<$Result.GetResult<Prisma.$SportSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SportSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportSessionCountArgs} args - Arguments to filter SportSessions to count.
     * @example
     * // Count the number of SportSessions
     * const count = await prisma.sportSession.count({
     *   where: {
     *     // ... the filter for the SportSessions we want to count
     *   }
     * })
    **/
    count<T extends SportSessionCountArgs>(
      args?: Subset<T, SportSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SportSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SportSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SportSessionAggregateArgs>(args: Subset<T, SportSessionAggregateArgs>): Prisma.PrismaPromise<GetSportSessionAggregateType<T>>

    /**
     * Group by SportSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportSessionGroupByArgs} args - Group by arguments.
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
      T extends SportSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SportSessionGroupByArgs['orderBy'] }
        : { orderBy?: SportSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SportSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSportSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SportSession model
   */
  readonly fields: SportSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SportSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SportSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SportSession model
   */
  interface SportSessionFieldRefs {
    readonly id: FieldRef<"SportSession", 'Int'>
    readonly sport_id: FieldRef<"SportSession", 'BigInt'>
    readonly date: FieldRef<"SportSession", 'DateTime'>
    readonly starting_time: FieldRef<"SportSession", 'DateTime'>
    readonly ending_time: FieldRef<"SportSession", 'DateTime'>
    readonly group_name: FieldRef<"SportSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SportSession findUnique
   */
  export type SportSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportSession
     */
    select?: SportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportSession
     */
    omit?: SportSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportSessionInclude<ExtArgs> | null
    /**
     * Filter, which SportSession to fetch.
     */
    where: SportSessionWhereUniqueInput
  }

  /**
   * SportSession findUniqueOrThrow
   */
  export type SportSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportSession
     */
    select?: SportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportSession
     */
    omit?: SportSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportSessionInclude<ExtArgs> | null
    /**
     * Filter, which SportSession to fetch.
     */
    where: SportSessionWhereUniqueInput
  }

  /**
   * SportSession findFirst
   */
  export type SportSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportSession
     */
    select?: SportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportSession
     */
    omit?: SportSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportSessionInclude<ExtArgs> | null
    /**
     * Filter, which SportSession to fetch.
     */
    where?: SportSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportSessions to fetch.
     */
    orderBy?: SportSessionOrderByWithRelationInput | SportSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SportSessions.
     */
    cursor?: SportSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SportSessions.
     */
    distinct?: SportSessionScalarFieldEnum | SportSessionScalarFieldEnum[]
  }

  /**
   * SportSession findFirstOrThrow
   */
  export type SportSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportSession
     */
    select?: SportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportSession
     */
    omit?: SportSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportSessionInclude<ExtArgs> | null
    /**
     * Filter, which SportSession to fetch.
     */
    where?: SportSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportSessions to fetch.
     */
    orderBy?: SportSessionOrderByWithRelationInput | SportSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SportSessions.
     */
    cursor?: SportSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SportSessions.
     */
    distinct?: SportSessionScalarFieldEnum | SportSessionScalarFieldEnum[]
  }

  /**
   * SportSession findMany
   */
  export type SportSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportSession
     */
    select?: SportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportSession
     */
    omit?: SportSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportSessionInclude<ExtArgs> | null
    /**
     * Filter, which SportSessions to fetch.
     */
    where?: SportSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportSessions to fetch.
     */
    orderBy?: SportSessionOrderByWithRelationInput | SportSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SportSessions.
     */
    cursor?: SportSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportSessions.
     */
    skip?: number
    distinct?: SportSessionScalarFieldEnum | SportSessionScalarFieldEnum[]
  }

  /**
   * SportSession create
   */
  export type SportSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportSession
     */
    select?: SportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportSession
     */
    omit?: SportSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a SportSession.
     */
    data: XOR<SportSessionCreateInput, SportSessionUncheckedCreateInput>
  }

  /**
   * SportSession createMany
   */
  export type SportSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SportSessions.
     */
    data: SportSessionCreateManyInput | SportSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SportSession createManyAndReturn
   */
  export type SportSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportSession
     */
    select?: SportSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SportSession
     */
    omit?: SportSessionOmit<ExtArgs> | null
    /**
     * The data used to create many SportSessions.
     */
    data: SportSessionCreateManyInput | SportSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SportSession update
   */
  export type SportSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportSession
     */
    select?: SportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportSession
     */
    omit?: SportSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a SportSession.
     */
    data: XOR<SportSessionUpdateInput, SportSessionUncheckedUpdateInput>
    /**
     * Choose, which SportSession to update.
     */
    where: SportSessionWhereUniqueInput
  }

  /**
   * SportSession updateMany
   */
  export type SportSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SportSessions.
     */
    data: XOR<SportSessionUpdateManyMutationInput, SportSessionUncheckedUpdateManyInput>
    /**
     * Filter which SportSessions to update
     */
    where?: SportSessionWhereInput
    /**
     * Limit how many SportSessions to update.
     */
    limit?: number
  }

  /**
   * SportSession updateManyAndReturn
   */
  export type SportSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportSession
     */
    select?: SportSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SportSession
     */
    omit?: SportSessionOmit<ExtArgs> | null
    /**
     * The data used to update SportSessions.
     */
    data: XOR<SportSessionUpdateManyMutationInput, SportSessionUncheckedUpdateManyInput>
    /**
     * Filter which SportSessions to update
     */
    where?: SportSessionWhereInput
    /**
     * Limit how many SportSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SportSession upsert
   */
  export type SportSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportSession
     */
    select?: SportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportSession
     */
    omit?: SportSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the SportSession to update in case it exists.
     */
    where: SportSessionWhereUniqueInput
    /**
     * In case the SportSession found by the `where` argument doesn't exist, create a new SportSession with this data.
     */
    create: XOR<SportSessionCreateInput, SportSessionUncheckedCreateInput>
    /**
     * In case the SportSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SportSessionUpdateInput, SportSessionUncheckedUpdateInput>
  }

  /**
   * SportSession delete
   */
  export type SportSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportSession
     */
    select?: SportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportSession
     */
    omit?: SportSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportSessionInclude<ExtArgs> | null
    /**
     * Filter which SportSession to delete.
     */
    where: SportSessionWhereUniqueInput
  }

  /**
   * SportSession deleteMany
   */
  export type SportSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SportSessions to delete
     */
    where?: SportSessionWhereInput
    /**
     * Limit how many SportSessions to delete.
     */
    limit?: number
  }

  /**
   * SportSession without action
   */
  export type SportSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportSession
     */
    select?: SportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportSession
     */
    omit?: SportSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportSessionInclude<ExtArgs> | null
  }


  /**
   * Model Diet
   */

  export type AggregateDiet = {
    _count: DietCountAggregateOutputType | null
    _avg: DietAvgAggregateOutputType | null
    _sum: DietSumAggregateOutputType | null
    _min: DietMinAggregateOutputType | null
    _max: DietMaxAggregateOutputType | null
  }

  export type DietAvgAggregateOutputType = {
    id: number | null
    id_adherent: number | null
    id_food: number | null
  }

  export type DietSumAggregateOutputType = {
    id: bigint | null
    id_adherent: number | null
    id_food: number | null
  }

  export type DietMinAggregateOutputType = {
    id: bigint | null
    id_adherent: number | null
    id_food: number | null
    meal_type: string | null
    Date: Date | null
  }

  export type DietMaxAggregateOutputType = {
    id: bigint | null
    id_adherent: number | null
    id_food: number | null
    meal_type: string | null
    Date: Date | null
  }

  export type DietCountAggregateOutputType = {
    id: number
    id_adherent: number
    id_food: number
    meal_type: number
    Date: number
    _all: number
  }


  export type DietAvgAggregateInputType = {
    id?: true
    id_adherent?: true
    id_food?: true
  }

  export type DietSumAggregateInputType = {
    id?: true
    id_adherent?: true
    id_food?: true
  }

  export type DietMinAggregateInputType = {
    id?: true
    id_adherent?: true
    id_food?: true
    meal_type?: true
    Date?: true
  }

  export type DietMaxAggregateInputType = {
    id?: true
    id_adherent?: true
    id_food?: true
    meal_type?: true
    Date?: true
  }

  export type DietCountAggregateInputType = {
    id?: true
    id_adherent?: true
    id_food?: true
    meal_type?: true
    Date?: true
    _all?: true
  }

  export type DietAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diet to aggregate.
     */
    where?: DietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diets to fetch.
     */
    orderBy?: DietOrderByWithRelationInput | DietOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diets
    **/
    _count?: true | DietCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DietAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DietSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DietMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DietMaxAggregateInputType
  }

  export type GetDietAggregateType<T extends DietAggregateArgs> = {
        [P in keyof T & keyof AggregateDiet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiet[P]>
      : GetScalarType<T[P], AggregateDiet[P]>
  }




  export type DietGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DietWhereInput
    orderBy?: DietOrderByWithAggregationInput | DietOrderByWithAggregationInput[]
    by: DietScalarFieldEnum[] | DietScalarFieldEnum
    having?: DietScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DietCountAggregateInputType | true
    _avg?: DietAvgAggregateInputType
    _sum?: DietSumAggregateInputType
    _min?: DietMinAggregateInputType
    _max?: DietMaxAggregateInputType
  }

  export type DietGroupByOutputType = {
    id: bigint
    id_adherent: number
    id_food: number | null
    meal_type: string | null
    Date: Date | null
    _count: DietCountAggregateOutputType | null
    _avg: DietAvgAggregateOutputType | null
    _sum: DietSumAggregateOutputType | null
    _min: DietMinAggregateOutputType | null
    _max: DietMaxAggregateOutputType | null
  }

  type GetDietGroupByPayload<T extends DietGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DietGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DietGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DietGroupByOutputType[P]>
            : GetScalarType<T[P], DietGroupByOutputType[P]>
        }
      >
    >


  export type DietSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_adherent?: boolean
    id_food?: boolean
    meal_type?: boolean
    Date?: boolean
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
    food?: boolean | Diet$foodArgs<ExtArgs>
  }, ExtArgs["result"]["diet"]>

  export type DietSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_adherent?: boolean
    id_food?: boolean
    meal_type?: boolean
    Date?: boolean
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
    food?: boolean | Diet$foodArgs<ExtArgs>
  }, ExtArgs["result"]["diet"]>

  export type DietSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_adherent?: boolean
    id_food?: boolean
    meal_type?: boolean
    Date?: boolean
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
    food?: boolean | Diet$foodArgs<ExtArgs>
  }, ExtArgs["result"]["diet"]>

  export type DietSelectScalar = {
    id?: boolean
    id_adherent?: boolean
    id_food?: boolean
    meal_type?: boolean
    Date?: boolean
  }

  export type DietOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_adherent" | "id_food" | "meal_type" | "Date", ExtArgs["result"]["diet"]>
  export type DietInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
    food?: boolean | Diet$foodArgs<ExtArgs>
  }
  export type DietIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
    food?: boolean | Diet$foodArgs<ExtArgs>
  }
  export type DietIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
    food?: boolean | Diet$foodArgs<ExtArgs>
  }

  export type $DietPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diet"
    objects: {
      Adherent: Prisma.$AdherentPayload<ExtArgs>
      food: Prisma.$foodPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      id_adherent: number
      id_food: number | null
      meal_type: string | null
      Date: Date | null
    }, ExtArgs["result"]["diet"]>
    composites: {}
  }

  type DietGetPayload<S extends boolean | null | undefined | DietDefaultArgs> = $Result.GetResult<Prisma.$DietPayload, S>

  type DietCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DietFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DietCountAggregateInputType | true
    }

  export interface DietDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diet'], meta: { name: 'Diet' } }
    /**
     * Find zero or one Diet that matches the filter.
     * @param {DietFindUniqueArgs} args - Arguments to find a Diet
     * @example
     * // Get one Diet
     * const diet = await prisma.diet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DietFindUniqueArgs>(args: SelectSubset<T, DietFindUniqueArgs<ExtArgs>>): Prisma__DietClient<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DietFindUniqueOrThrowArgs} args - Arguments to find a Diet
     * @example
     * // Get one Diet
     * const diet = await prisma.diet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DietFindUniqueOrThrowArgs>(args: SelectSubset<T, DietFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DietClient<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietFindFirstArgs} args - Arguments to find a Diet
     * @example
     * // Get one Diet
     * const diet = await prisma.diet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DietFindFirstArgs>(args?: SelectSubset<T, DietFindFirstArgs<ExtArgs>>): Prisma__DietClient<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietFindFirstOrThrowArgs} args - Arguments to find a Diet
     * @example
     * // Get one Diet
     * const diet = await prisma.diet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DietFindFirstOrThrowArgs>(args?: SelectSubset<T, DietFindFirstOrThrowArgs<ExtArgs>>): Prisma__DietClient<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diets
     * const diets = await prisma.diet.findMany()
     * 
     * // Get first 10 Diets
     * const diets = await prisma.diet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dietWithIdOnly = await prisma.diet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DietFindManyArgs>(args?: SelectSubset<T, DietFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diet.
     * @param {DietCreateArgs} args - Arguments to create a Diet.
     * @example
     * // Create one Diet
     * const Diet = await prisma.diet.create({
     *   data: {
     *     // ... data to create a Diet
     *   }
     * })
     * 
     */
    create<T extends DietCreateArgs>(args: SelectSubset<T, DietCreateArgs<ExtArgs>>): Prisma__DietClient<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diets.
     * @param {DietCreateManyArgs} args - Arguments to create many Diets.
     * @example
     * // Create many Diets
     * const diet = await prisma.diet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DietCreateManyArgs>(args?: SelectSubset<T, DietCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diets and returns the data saved in the database.
     * @param {DietCreateManyAndReturnArgs} args - Arguments to create many Diets.
     * @example
     * // Create many Diets
     * const diet = await prisma.diet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diets and only return the `id`
     * const dietWithIdOnly = await prisma.diet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DietCreateManyAndReturnArgs>(args?: SelectSubset<T, DietCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diet.
     * @param {DietDeleteArgs} args - Arguments to delete one Diet.
     * @example
     * // Delete one Diet
     * const Diet = await prisma.diet.delete({
     *   where: {
     *     // ... filter to delete one Diet
     *   }
     * })
     * 
     */
    delete<T extends DietDeleteArgs>(args: SelectSubset<T, DietDeleteArgs<ExtArgs>>): Prisma__DietClient<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diet.
     * @param {DietUpdateArgs} args - Arguments to update one Diet.
     * @example
     * // Update one Diet
     * const diet = await prisma.diet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DietUpdateArgs>(args: SelectSubset<T, DietUpdateArgs<ExtArgs>>): Prisma__DietClient<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diets.
     * @param {DietDeleteManyArgs} args - Arguments to filter Diets to delete.
     * @example
     * // Delete a few Diets
     * const { count } = await prisma.diet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DietDeleteManyArgs>(args?: SelectSubset<T, DietDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diets
     * const diet = await prisma.diet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DietUpdateManyArgs>(args: SelectSubset<T, DietUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diets and returns the data updated in the database.
     * @param {DietUpdateManyAndReturnArgs} args - Arguments to update many Diets.
     * @example
     * // Update many Diets
     * const diet = await prisma.diet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diets and only return the `id`
     * const dietWithIdOnly = await prisma.diet.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends DietUpdateManyAndReturnArgs>(args: SelectSubset<T, DietUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diet.
     * @param {DietUpsertArgs} args - Arguments to update or create a Diet.
     * @example
     * // Update or create a Diet
     * const diet = await prisma.diet.upsert({
     *   create: {
     *     // ... data to create a Diet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diet we want to update
     *   }
     * })
     */
    upsert<T extends DietUpsertArgs>(args: SelectSubset<T, DietUpsertArgs<ExtArgs>>): Prisma__DietClient<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietCountArgs} args - Arguments to filter Diets to count.
     * @example
     * // Count the number of Diets
     * const count = await prisma.diet.count({
     *   where: {
     *     // ... the filter for the Diets we want to count
     *   }
     * })
    **/
    count<T extends DietCountArgs>(
      args?: Subset<T, DietCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DietCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DietAggregateArgs>(args: Subset<T, DietAggregateArgs>): Prisma.PrismaPromise<GetDietAggregateType<T>>

    /**
     * Group by Diet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietGroupByArgs} args - Group by arguments.
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
      T extends DietGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DietGroupByArgs['orderBy'] }
        : { orderBy?: DietGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DietGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDietGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diet model
   */
  readonly fields: DietFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DietClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Adherent<T extends AdherentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdherentDefaultArgs<ExtArgs>>): Prisma__AdherentClient<$Result.GetResult<Prisma.$AdherentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    food<T extends Diet$foodArgs<ExtArgs> = {}>(args?: Subset<T, Diet$foodArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Diet model
   */
  interface DietFieldRefs {
    readonly id: FieldRef<"Diet", 'BigInt'>
    readonly id_adherent: FieldRef<"Diet", 'Int'>
    readonly id_food: FieldRef<"Diet", 'Int'>
    readonly meal_type: FieldRef<"Diet", 'String'>
    readonly Date: FieldRef<"Diet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Diet findUnique
   */
  export type DietFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * Filter, which Diet to fetch.
     */
    where: DietWhereUniqueInput
  }

  /**
   * Diet findUniqueOrThrow
   */
  export type DietFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * Filter, which Diet to fetch.
     */
    where: DietWhereUniqueInput
  }

  /**
   * Diet findFirst
   */
  export type DietFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * Filter, which Diet to fetch.
     */
    where?: DietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diets to fetch.
     */
    orderBy?: DietOrderByWithRelationInput | DietOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diets.
     */
    cursor?: DietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diets.
     */
    distinct?: DietScalarFieldEnum | DietScalarFieldEnum[]
  }

  /**
   * Diet findFirstOrThrow
   */
  export type DietFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * Filter, which Diet to fetch.
     */
    where?: DietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diets to fetch.
     */
    orderBy?: DietOrderByWithRelationInput | DietOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diets.
     */
    cursor?: DietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diets.
     */
    distinct?: DietScalarFieldEnum | DietScalarFieldEnum[]
  }

  /**
   * Diet findMany
   */
  export type DietFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * Filter, which Diets to fetch.
     */
    where?: DietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diets to fetch.
     */
    orderBy?: DietOrderByWithRelationInput | DietOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diets.
     */
    cursor?: DietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diets.
     */
    skip?: number
    distinct?: DietScalarFieldEnum | DietScalarFieldEnum[]
  }

  /**
   * Diet create
   */
  export type DietCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * The data needed to create a Diet.
     */
    data: XOR<DietCreateInput, DietUncheckedCreateInput>
  }

  /**
   * Diet createMany
   */
  export type DietCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diets.
     */
    data: DietCreateManyInput | DietCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Diet createManyAndReturn
   */
  export type DietCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * The data used to create many Diets.
     */
    data: DietCreateManyInput | DietCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diet update
   */
  export type DietUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * The data needed to update a Diet.
     */
    data: XOR<DietUpdateInput, DietUncheckedUpdateInput>
    /**
     * Choose, which Diet to update.
     */
    where: DietWhereUniqueInput
  }

  /**
   * Diet updateMany
   */
  export type DietUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diets.
     */
    data: XOR<DietUpdateManyMutationInput, DietUncheckedUpdateManyInput>
    /**
     * Filter which Diets to update
     */
    where?: DietWhereInput
    /**
     * Limit how many Diets to update.
     */
    limit?: number
  }

  /**
   * Diet updateManyAndReturn
   */
  export type DietUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * The data used to update Diets.
     */
    data: XOR<DietUpdateManyMutationInput, DietUncheckedUpdateManyInput>
    /**
     * Filter which Diets to update
     */
    where?: DietWhereInput
    /**
     * Limit how many Diets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diet upsert
   */
  export type DietUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * The filter to search for the Diet to update in case it exists.
     */
    where: DietWhereUniqueInput
    /**
     * In case the Diet found by the `where` argument doesn't exist, create a new Diet with this data.
     */
    create: XOR<DietCreateInput, DietUncheckedCreateInput>
    /**
     * In case the Diet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DietUpdateInput, DietUncheckedUpdateInput>
  }

  /**
   * Diet delete
   */
  export type DietDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * Filter which Diet to delete.
     */
    where: DietWhereUniqueInput
  }

  /**
   * Diet deleteMany
   */
  export type DietDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diets to delete
     */
    where?: DietWhereInput
    /**
     * Limit how many Diets to delete.
     */
    limit?: number
  }

  /**
   * Diet.food
   */
  export type Diet$foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    where?: foodWhereInput
  }

  /**
   * Diet without action
   */
  export type DietDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
  }


  /**
   * Model food
   */

  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodAvgAggregateOutputType = {
    id_food: number | null
    calories: number | null
    fat: Decimal | null
    carbs: Decimal | null
    protein: Decimal | null
  }

  export type FoodSumAggregateOutputType = {
    id_food: number | null
    calories: number | null
    fat: Decimal | null
    carbs: Decimal | null
    protein: Decimal | null
  }

  export type FoodMinAggregateOutputType = {
    id_food: number | null
    name: string | null
    calories: number | null
    fat: Decimal | null
    carbs: Decimal | null
    protein: Decimal | null
  }

  export type FoodMaxAggregateOutputType = {
    id_food: number | null
    name: string | null
    calories: number | null
    fat: Decimal | null
    carbs: Decimal | null
    protein: Decimal | null
  }

  export type FoodCountAggregateOutputType = {
    id_food: number
    name: number
    calories: number
    fat: number
    carbs: number
    protein: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    id_food?: true
    calories?: true
    fat?: true
    carbs?: true
    protein?: true
  }

  export type FoodSumAggregateInputType = {
    id_food?: true
    calories?: true
    fat?: true
    carbs?: true
    protein?: true
  }

  export type FoodMinAggregateInputType = {
    id_food?: true
    name?: true
    calories?: true
    fat?: true
    carbs?: true
    protein?: true
  }

  export type FoodMaxAggregateInputType = {
    id_food?: true
    name?: true
    calories?: true
    fat?: true
    carbs?: true
    protein?: true
  }

  export type FoodCountAggregateInputType = {
    id_food?: true
    name?: true
    calories?: true
    fat?: true
    carbs?: true
    protein?: true
    _all?: true
  }

  export type FoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which food to aggregate.
     */
    where?: foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodOrderByWithRelationInput | foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type foodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: foodWhereInput
    orderBy?: foodOrderByWithAggregationInput | foodOrderByWithAggregationInput[]
    by: FoodScalarFieldEnum[] | FoodScalarFieldEnum
    having?: foodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _avg?: FoodAvgAggregateInputType
    _sum?: FoodSumAggregateInputType
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }

  export type FoodGroupByOutputType = {
    id_food: number
    name: string
    calories: number
    fat: Decimal
    carbs: Decimal
    protein: Decimal
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends foodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type foodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_food?: boolean
    name?: boolean
    calories?: boolean
    fat?: boolean
    carbs?: boolean
    protein?: boolean
    Diet?: boolean | food$DietArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type foodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_food?: boolean
    name?: boolean
    calories?: boolean
    fat?: boolean
    carbs?: boolean
    protein?: boolean
  }, ExtArgs["result"]["food"]>

  export type foodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_food?: boolean
    name?: boolean
    calories?: boolean
    fat?: boolean
    carbs?: boolean
    protein?: boolean
  }, ExtArgs["result"]["food"]>

  export type foodSelectScalar = {
    id_food?: boolean
    name?: boolean
    calories?: boolean
    fat?: boolean
    carbs?: boolean
    protein?: boolean
  }

  export type foodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_food" | "name" | "calories" | "fat" | "carbs" | "protein", ExtArgs["result"]["food"]>
  export type foodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Diet?: boolean | food$DietArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type foodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type foodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $foodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "food"
    objects: {
      Diet: Prisma.$DietPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_food: number
      name: string
      calories: number
      fat: Prisma.Decimal
      carbs: Prisma.Decimal
      protein: Prisma.Decimal
    }, ExtArgs["result"]["food"]>
    composites: {}
  }

  type foodGetPayload<S extends boolean | null | undefined | foodDefaultArgs> = $Result.GetResult<Prisma.$foodPayload, S>

  type foodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<foodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCountAggregateInputType | true
    }

  export interface foodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['food'], meta: { name: 'food' } }
    /**
     * Find zero or one Food that matches the filter.
     * @param {foodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends foodFindUniqueArgs>(args: SelectSubset<T, foodFindUniqueArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {foodFindUniqueOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends foodFindUniqueOrThrowArgs>(args: SelectSubset<T, foodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends foodFindFirstArgs>(args?: SelectSubset<T, foodFindFirstArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodFindFirstOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends foodFindFirstOrThrowArgs>(args?: SelectSubset<T, foodFindFirstOrThrowArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `id_food`
     * const foodWithId_foodOnly = await prisma.food.findMany({ select: { id_food: true } })
     * 
     */
    findMany<T extends foodFindManyArgs>(args?: SelectSubset<T, foodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food.
     * @param {foodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
     */
    create<T extends foodCreateArgs>(args: SelectSubset<T, foodCreateArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {foodCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends foodCreateManyArgs>(args?: SelectSubset<T, foodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Foods and returns the data saved in the database.
     * @param {foodCreateManyAndReturnArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Foods and only return the `id_food`
     * const foodWithId_foodOnly = await prisma.food.createManyAndReturn({
     *   select: { id_food: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends foodCreateManyAndReturnArgs>(args?: SelectSubset<T, foodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Food.
     * @param {foodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
     */
    delete<T extends foodDeleteArgs>(args: SelectSubset<T, foodDeleteArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food.
     * @param {foodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends foodUpdateArgs>(args: SelectSubset<T, foodUpdateArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {foodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends foodDeleteManyArgs>(args?: SelectSubset<T, foodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends foodUpdateManyArgs>(args: SelectSubset<T, foodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods and returns the data updated in the database.
     * @param {foodUpdateManyAndReturnArgs} args - Arguments to update many Foods.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Foods and only return the `id_food`
     * const foodWithId_foodOnly = await prisma.food.updateManyAndReturn({
     *   select: { id_food: true },
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
    updateManyAndReturn<T extends foodUpdateManyAndReturnArgs>(args: SelectSubset<T, foodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Food.
     * @param {foodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
     */
    upsert<T extends foodUpsertArgs>(args: SelectSubset<T, foodUpsertArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends foodCountArgs>(
      args?: Subset<T, foodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodGroupByArgs} args - Group by arguments.
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
      T extends foodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: foodGroupByArgs['orderBy'] }
        : { orderBy?: foodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, foodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the food model
   */
  readonly fields: foodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__foodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Diet<T extends food$DietArgs<ExtArgs> = {}>(args?: Subset<T, food$DietArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the food model
   */
  interface foodFieldRefs {
    readonly id_food: FieldRef<"food", 'Int'>
    readonly name: FieldRef<"food", 'String'>
    readonly calories: FieldRef<"food", 'Int'>
    readonly fat: FieldRef<"food", 'Decimal'>
    readonly carbs: FieldRef<"food", 'Decimal'>
    readonly protein: FieldRef<"food", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * food findUnique
   */
  export type foodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter, which food to fetch.
     */
    where: foodWhereUniqueInput
  }

  /**
   * food findUniqueOrThrow
   */
  export type foodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter, which food to fetch.
     */
    where: foodWhereUniqueInput
  }

  /**
   * food findFirst
   */
  export type foodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter, which food to fetch.
     */
    where?: foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodOrderByWithRelationInput | foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for foods.
     */
    cursor?: foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * food findFirstOrThrow
   */
  export type foodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter, which food to fetch.
     */
    where?: foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodOrderByWithRelationInput | foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for foods.
     */
    cursor?: foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * food findMany
   */
  export type foodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter, which foods to fetch.
     */
    where?: foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodOrderByWithRelationInput | foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing foods.
     */
    cursor?: foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * food create
   */
  export type foodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * The data needed to create a food.
     */
    data: XOR<foodCreateInput, foodUncheckedCreateInput>
  }

  /**
   * food createMany
   */
  export type foodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many foods.
     */
    data: foodCreateManyInput | foodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * food createManyAndReturn
   */
  export type foodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * The data used to create many foods.
     */
    data: foodCreateManyInput | foodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * food update
   */
  export type foodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * The data needed to update a food.
     */
    data: XOR<foodUpdateInput, foodUncheckedUpdateInput>
    /**
     * Choose, which food to update.
     */
    where: foodWhereUniqueInput
  }

  /**
   * food updateMany
   */
  export type foodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update foods.
     */
    data: XOR<foodUpdateManyMutationInput, foodUncheckedUpdateManyInput>
    /**
     * Filter which foods to update
     */
    where?: foodWhereInput
    /**
     * Limit how many foods to update.
     */
    limit?: number
  }

  /**
   * food updateManyAndReturn
   */
  export type foodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * The data used to update foods.
     */
    data: XOR<foodUpdateManyMutationInput, foodUncheckedUpdateManyInput>
    /**
     * Filter which foods to update
     */
    where?: foodWhereInput
    /**
     * Limit how many foods to update.
     */
    limit?: number
  }

  /**
   * food upsert
   */
  export type foodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * The filter to search for the food to update in case it exists.
     */
    where: foodWhereUniqueInput
    /**
     * In case the food found by the `where` argument doesn't exist, create a new food with this data.
     */
    create: XOR<foodCreateInput, foodUncheckedCreateInput>
    /**
     * In case the food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<foodUpdateInput, foodUncheckedUpdateInput>
  }

  /**
   * food delete
   */
  export type foodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter which food to delete.
     */
    where: foodWhereUniqueInput
  }

  /**
   * food deleteMany
   */
  export type foodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which foods to delete
     */
    where?: foodWhereInput
    /**
     * Limit how many foods to delete.
     */
    limit?: number
  }

  /**
   * food.Diet
   */
  export type food$DietArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    where?: DietWhereInput
    orderBy?: DietOrderByWithRelationInput | DietOrderByWithRelationInput[]
    cursor?: DietWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DietScalarFieldEnum | DietScalarFieldEnum[]
  }

  /**
   * food without action
   */
  export type foodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
  }


  /**
   * Model InBody
   */

  export type AggregateInBody = {
    _count: InBodyCountAggregateOutputType | null
    _avg: InBodyAvgAggregateOutputType | null
    _sum: InBodySumAggregateOutputType | null
    _min: InBodyMinAggregateOutputType | null
    _max: InBodyMaxAggregateOutputType | null
  }

  export type InBodyAvgAggregateOutputType = {
    id: number | null
    id_adherent: number | null
    poids: number | null
    masse_musculaire: number | null
    masse_grasse: number | null
    score: number | null
  }

  export type InBodySumAggregateOutputType = {
    id: bigint | null
    id_adherent: number | null
    poids: number | null
    masse_musculaire: number | null
    masse_grasse: number | null
    score: number | null
  }

  export type InBodyMinAggregateOutputType = {
    id: bigint | null
    id_adherent: number | null
    poids: number | null
    masse_musculaire: number | null
    masse_grasse: number | null
    score: number | null
    date: Date | null
    time: Date | null
  }

  export type InBodyMaxAggregateOutputType = {
    id: bigint | null
    id_adherent: number | null
    poids: number | null
    masse_musculaire: number | null
    masse_grasse: number | null
    score: number | null
    date: Date | null
    time: Date | null
  }

  export type InBodyCountAggregateOutputType = {
    id: number
    id_adherent: number
    poids: number
    masse_musculaire: number
    masse_grasse: number
    score: number
    date: number
    time: number
    _all: number
  }


  export type InBodyAvgAggregateInputType = {
    id?: true
    id_adherent?: true
    poids?: true
    masse_musculaire?: true
    masse_grasse?: true
    score?: true
  }

  export type InBodySumAggregateInputType = {
    id?: true
    id_adherent?: true
    poids?: true
    masse_musculaire?: true
    masse_grasse?: true
    score?: true
  }

  export type InBodyMinAggregateInputType = {
    id?: true
    id_adherent?: true
    poids?: true
    masse_musculaire?: true
    masse_grasse?: true
    score?: true
    date?: true
    time?: true
  }

  export type InBodyMaxAggregateInputType = {
    id?: true
    id_adherent?: true
    poids?: true
    masse_musculaire?: true
    masse_grasse?: true
    score?: true
    date?: true
    time?: true
  }

  export type InBodyCountAggregateInputType = {
    id?: true
    id_adherent?: true
    poids?: true
    masse_musculaire?: true
    masse_grasse?: true
    score?: true
    date?: true
    time?: true
    _all?: true
  }

  export type InBodyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InBody to aggregate.
     */
    where?: InBodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InBodies to fetch.
     */
    orderBy?: InBodyOrderByWithRelationInput | InBodyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InBodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InBodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InBodies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InBodies
    **/
    _count?: true | InBodyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InBodyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InBodySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InBodyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InBodyMaxAggregateInputType
  }

  export type GetInBodyAggregateType<T extends InBodyAggregateArgs> = {
        [P in keyof T & keyof AggregateInBody]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInBody[P]>
      : GetScalarType<T[P], AggregateInBody[P]>
  }




  export type InBodyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InBodyWhereInput
    orderBy?: InBodyOrderByWithAggregationInput | InBodyOrderByWithAggregationInput[]
    by: InBodyScalarFieldEnum[] | InBodyScalarFieldEnum
    having?: InBodyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InBodyCountAggregateInputType | true
    _avg?: InBodyAvgAggregateInputType
    _sum?: InBodySumAggregateInputType
    _min?: InBodyMinAggregateInputType
    _max?: InBodyMaxAggregateInputType
  }

  export type InBodyGroupByOutputType = {
    id: bigint
    id_adherent: number
    poids: number | null
    masse_musculaire: number | null
    masse_grasse: number | null
    score: number | null
    date: Date | null
    time: Date | null
    _count: InBodyCountAggregateOutputType | null
    _avg: InBodyAvgAggregateOutputType | null
    _sum: InBodySumAggregateOutputType | null
    _min: InBodyMinAggregateOutputType | null
    _max: InBodyMaxAggregateOutputType | null
  }

  type GetInBodyGroupByPayload<T extends InBodyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InBodyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InBodyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InBodyGroupByOutputType[P]>
            : GetScalarType<T[P], InBodyGroupByOutputType[P]>
        }
      >
    >


  export type InBodySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_adherent?: boolean
    poids?: boolean
    masse_musculaire?: boolean
    masse_grasse?: boolean
    score?: boolean
    date?: boolean
    time?: boolean
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inBody"]>

  export type InBodySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_adherent?: boolean
    poids?: boolean
    masse_musculaire?: boolean
    masse_grasse?: boolean
    score?: boolean
    date?: boolean
    time?: boolean
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inBody"]>

  export type InBodySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_adherent?: boolean
    poids?: boolean
    masse_musculaire?: boolean
    masse_grasse?: boolean
    score?: boolean
    date?: boolean
    time?: boolean
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inBody"]>

  export type InBodySelectScalar = {
    id?: boolean
    id_adherent?: boolean
    poids?: boolean
    masse_musculaire?: boolean
    masse_grasse?: boolean
    score?: boolean
    date?: boolean
    time?: boolean
  }

  export type InBodyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_adherent" | "poids" | "masse_musculaire" | "masse_grasse" | "score" | "date" | "time", ExtArgs["result"]["inBody"]>
  export type InBodyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
  }
  export type InBodyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
  }
  export type InBodyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adherent?: boolean | AdherentDefaultArgs<ExtArgs>
  }

  export type $InBodyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InBody"
    objects: {
      Adherent: Prisma.$AdherentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      id_adherent: number
      poids: number | null
      masse_musculaire: number | null
      masse_grasse: number | null
      score: number | null
      date: Date | null
      time: Date | null
    }, ExtArgs["result"]["inBody"]>
    composites: {}
  }

  type InBodyGetPayload<S extends boolean | null | undefined | InBodyDefaultArgs> = $Result.GetResult<Prisma.$InBodyPayload, S>

  type InBodyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InBodyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InBodyCountAggregateInputType | true
    }

  export interface InBodyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InBody'], meta: { name: 'InBody' } }
    /**
     * Find zero or one InBody that matches the filter.
     * @param {InBodyFindUniqueArgs} args - Arguments to find a InBody
     * @example
     * // Get one InBody
     * const inBody = await prisma.inBody.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InBodyFindUniqueArgs>(args: SelectSubset<T, InBodyFindUniqueArgs<ExtArgs>>): Prisma__InBodyClient<$Result.GetResult<Prisma.$InBodyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InBody that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InBodyFindUniqueOrThrowArgs} args - Arguments to find a InBody
     * @example
     * // Get one InBody
     * const inBody = await prisma.inBody.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InBodyFindUniqueOrThrowArgs>(args: SelectSubset<T, InBodyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InBodyClient<$Result.GetResult<Prisma.$InBodyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InBody that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InBodyFindFirstArgs} args - Arguments to find a InBody
     * @example
     * // Get one InBody
     * const inBody = await prisma.inBody.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InBodyFindFirstArgs>(args?: SelectSubset<T, InBodyFindFirstArgs<ExtArgs>>): Prisma__InBodyClient<$Result.GetResult<Prisma.$InBodyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InBody that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InBodyFindFirstOrThrowArgs} args - Arguments to find a InBody
     * @example
     * // Get one InBody
     * const inBody = await prisma.inBody.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InBodyFindFirstOrThrowArgs>(args?: SelectSubset<T, InBodyFindFirstOrThrowArgs<ExtArgs>>): Prisma__InBodyClient<$Result.GetResult<Prisma.$InBodyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InBodies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InBodyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InBodies
     * const inBodies = await prisma.inBody.findMany()
     * 
     * // Get first 10 InBodies
     * const inBodies = await prisma.inBody.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inBodyWithIdOnly = await prisma.inBody.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InBodyFindManyArgs>(args?: SelectSubset<T, InBodyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InBodyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InBody.
     * @param {InBodyCreateArgs} args - Arguments to create a InBody.
     * @example
     * // Create one InBody
     * const InBody = await prisma.inBody.create({
     *   data: {
     *     // ... data to create a InBody
     *   }
     * })
     * 
     */
    create<T extends InBodyCreateArgs>(args: SelectSubset<T, InBodyCreateArgs<ExtArgs>>): Prisma__InBodyClient<$Result.GetResult<Prisma.$InBodyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InBodies.
     * @param {InBodyCreateManyArgs} args - Arguments to create many InBodies.
     * @example
     * // Create many InBodies
     * const inBody = await prisma.inBody.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InBodyCreateManyArgs>(args?: SelectSubset<T, InBodyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InBodies and returns the data saved in the database.
     * @param {InBodyCreateManyAndReturnArgs} args - Arguments to create many InBodies.
     * @example
     * // Create many InBodies
     * const inBody = await prisma.inBody.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InBodies and only return the `id`
     * const inBodyWithIdOnly = await prisma.inBody.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InBodyCreateManyAndReturnArgs>(args?: SelectSubset<T, InBodyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InBodyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InBody.
     * @param {InBodyDeleteArgs} args - Arguments to delete one InBody.
     * @example
     * // Delete one InBody
     * const InBody = await prisma.inBody.delete({
     *   where: {
     *     // ... filter to delete one InBody
     *   }
     * })
     * 
     */
    delete<T extends InBodyDeleteArgs>(args: SelectSubset<T, InBodyDeleteArgs<ExtArgs>>): Prisma__InBodyClient<$Result.GetResult<Prisma.$InBodyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InBody.
     * @param {InBodyUpdateArgs} args - Arguments to update one InBody.
     * @example
     * // Update one InBody
     * const inBody = await prisma.inBody.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InBodyUpdateArgs>(args: SelectSubset<T, InBodyUpdateArgs<ExtArgs>>): Prisma__InBodyClient<$Result.GetResult<Prisma.$InBodyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InBodies.
     * @param {InBodyDeleteManyArgs} args - Arguments to filter InBodies to delete.
     * @example
     * // Delete a few InBodies
     * const { count } = await prisma.inBody.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InBodyDeleteManyArgs>(args?: SelectSubset<T, InBodyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InBodies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InBodyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InBodies
     * const inBody = await prisma.inBody.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InBodyUpdateManyArgs>(args: SelectSubset<T, InBodyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InBodies and returns the data updated in the database.
     * @param {InBodyUpdateManyAndReturnArgs} args - Arguments to update many InBodies.
     * @example
     * // Update many InBodies
     * const inBody = await prisma.inBody.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InBodies and only return the `id`
     * const inBodyWithIdOnly = await prisma.inBody.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends InBodyUpdateManyAndReturnArgs>(args: SelectSubset<T, InBodyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InBodyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InBody.
     * @param {InBodyUpsertArgs} args - Arguments to update or create a InBody.
     * @example
     * // Update or create a InBody
     * const inBody = await prisma.inBody.upsert({
     *   create: {
     *     // ... data to create a InBody
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InBody we want to update
     *   }
     * })
     */
    upsert<T extends InBodyUpsertArgs>(args: SelectSubset<T, InBodyUpsertArgs<ExtArgs>>): Prisma__InBodyClient<$Result.GetResult<Prisma.$InBodyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InBodies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InBodyCountArgs} args - Arguments to filter InBodies to count.
     * @example
     * // Count the number of InBodies
     * const count = await prisma.inBody.count({
     *   where: {
     *     // ... the filter for the InBodies we want to count
     *   }
     * })
    **/
    count<T extends InBodyCountArgs>(
      args?: Subset<T, InBodyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InBodyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InBody.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InBodyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InBodyAggregateArgs>(args: Subset<T, InBodyAggregateArgs>): Prisma.PrismaPromise<GetInBodyAggregateType<T>>

    /**
     * Group by InBody.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InBodyGroupByArgs} args - Group by arguments.
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
      T extends InBodyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InBodyGroupByArgs['orderBy'] }
        : { orderBy?: InBodyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InBodyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInBodyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InBody model
   */
  readonly fields: InBodyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InBody.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InBodyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Adherent<T extends AdherentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdherentDefaultArgs<ExtArgs>>): Prisma__AdherentClient<$Result.GetResult<Prisma.$AdherentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InBody model
   */
  interface InBodyFieldRefs {
    readonly id: FieldRef<"InBody", 'BigInt'>
    readonly id_adherent: FieldRef<"InBody", 'Int'>
    readonly poids: FieldRef<"InBody", 'Float'>
    readonly masse_musculaire: FieldRef<"InBody", 'Float'>
    readonly masse_grasse: FieldRef<"InBody", 'Float'>
    readonly score: FieldRef<"InBody", 'Int'>
    readonly date: FieldRef<"InBody", 'DateTime'>
    readonly time: FieldRef<"InBody", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InBody findUnique
   */
  export type InBodyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InBody
     */
    select?: InBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InBody
     */
    omit?: InBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InBodyInclude<ExtArgs> | null
    /**
     * Filter, which InBody to fetch.
     */
    where: InBodyWhereUniqueInput
  }

  /**
   * InBody findUniqueOrThrow
   */
  export type InBodyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InBody
     */
    select?: InBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InBody
     */
    omit?: InBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InBodyInclude<ExtArgs> | null
    /**
     * Filter, which InBody to fetch.
     */
    where: InBodyWhereUniqueInput
  }

  /**
   * InBody findFirst
   */
  export type InBodyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InBody
     */
    select?: InBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InBody
     */
    omit?: InBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InBodyInclude<ExtArgs> | null
    /**
     * Filter, which InBody to fetch.
     */
    where?: InBodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InBodies to fetch.
     */
    orderBy?: InBodyOrderByWithRelationInput | InBodyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InBodies.
     */
    cursor?: InBodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InBodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InBodies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InBodies.
     */
    distinct?: InBodyScalarFieldEnum | InBodyScalarFieldEnum[]
  }

  /**
   * InBody findFirstOrThrow
   */
  export type InBodyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InBody
     */
    select?: InBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InBody
     */
    omit?: InBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InBodyInclude<ExtArgs> | null
    /**
     * Filter, which InBody to fetch.
     */
    where?: InBodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InBodies to fetch.
     */
    orderBy?: InBodyOrderByWithRelationInput | InBodyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InBodies.
     */
    cursor?: InBodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InBodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InBodies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InBodies.
     */
    distinct?: InBodyScalarFieldEnum | InBodyScalarFieldEnum[]
  }

  /**
   * InBody findMany
   */
  export type InBodyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InBody
     */
    select?: InBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InBody
     */
    omit?: InBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InBodyInclude<ExtArgs> | null
    /**
     * Filter, which InBodies to fetch.
     */
    where?: InBodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InBodies to fetch.
     */
    orderBy?: InBodyOrderByWithRelationInput | InBodyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InBodies.
     */
    cursor?: InBodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InBodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InBodies.
     */
    skip?: number
    distinct?: InBodyScalarFieldEnum | InBodyScalarFieldEnum[]
  }

  /**
   * InBody create
   */
  export type InBodyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InBody
     */
    select?: InBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InBody
     */
    omit?: InBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InBodyInclude<ExtArgs> | null
    /**
     * The data needed to create a InBody.
     */
    data: XOR<InBodyCreateInput, InBodyUncheckedCreateInput>
  }

  /**
   * InBody createMany
   */
  export type InBodyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InBodies.
     */
    data: InBodyCreateManyInput | InBodyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InBody createManyAndReturn
   */
  export type InBodyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InBody
     */
    select?: InBodySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InBody
     */
    omit?: InBodyOmit<ExtArgs> | null
    /**
     * The data used to create many InBodies.
     */
    data: InBodyCreateManyInput | InBodyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InBodyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InBody update
   */
  export type InBodyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InBody
     */
    select?: InBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InBody
     */
    omit?: InBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InBodyInclude<ExtArgs> | null
    /**
     * The data needed to update a InBody.
     */
    data: XOR<InBodyUpdateInput, InBodyUncheckedUpdateInput>
    /**
     * Choose, which InBody to update.
     */
    where: InBodyWhereUniqueInput
  }

  /**
   * InBody updateMany
   */
  export type InBodyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InBodies.
     */
    data: XOR<InBodyUpdateManyMutationInput, InBodyUncheckedUpdateManyInput>
    /**
     * Filter which InBodies to update
     */
    where?: InBodyWhereInput
    /**
     * Limit how many InBodies to update.
     */
    limit?: number
  }

  /**
   * InBody updateManyAndReturn
   */
  export type InBodyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InBody
     */
    select?: InBodySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InBody
     */
    omit?: InBodyOmit<ExtArgs> | null
    /**
     * The data used to update InBodies.
     */
    data: XOR<InBodyUpdateManyMutationInput, InBodyUncheckedUpdateManyInput>
    /**
     * Filter which InBodies to update
     */
    where?: InBodyWhereInput
    /**
     * Limit how many InBodies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InBodyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InBody upsert
   */
  export type InBodyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InBody
     */
    select?: InBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InBody
     */
    omit?: InBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InBodyInclude<ExtArgs> | null
    /**
     * The filter to search for the InBody to update in case it exists.
     */
    where: InBodyWhereUniqueInput
    /**
     * In case the InBody found by the `where` argument doesn't exist, create a new InBody with this data.
     */
    create: XOR<InBodyCreateInput, InBodyUncheckedCreateInput>
    /**
     * In case the InBody was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InBodyUpdateInput, InBodyUncheckedUpdateInput>
  }

  /**
   * InBody delete
   */
  export type InBodyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InBody
     */
    select?: InBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InBody
     */
    omit?: InBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InBodyInclude<ExtArgs> | null
    /**
     * Filter which InBody to delete.
     */
    where: InBodyWhereUniqueInput
  }

  /**
   * InBody deleteMany
   */
  export type InBodyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InBodies to delete
     */
    where?: InBodyWhereInput
    /**
     * Limit how many InBodies to delete.
     */
    limit?: number
  }

  /**
   * InBody without action
   */
  export type InBodyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InBody
     */
    select?: InBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InBody
     */
    omit?: InBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InBodyInclude<ExtArgs> | null
  }


  /**
   * Model Coach
   */

  export type AggregateCoach = {
    _count: CoachCountAggregateOutputType | null
    _avg: CoachAvgAggregateOutputType | null
    _sum: CoachSumAggregateOutputType | null
    _min: CoachMinAggregateOutputType | null
    _max: CoachMaxAggregateOutputType | null
  }

  export type CoachAvgAggregateOutputType = {
    id_coach: number | null
    age: number | null
    id_sport: number | null
  }

  export type CoachSumAggregateOutputType = {
    id_coach: number | null
    age: number | null
    id_sport: bigint | null
  }

  export type CoachMinAggregateOutputType = {
    id_coach: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    age: number | null
    id_sport: bigint | null
  }

  export type CoachMaxAggregateOutputType = {
    id_coach: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    age: number | null
    id_sport: bigint | null
  }

  export type CoachCountAggregateOutputType = {
    id_coach: number
    nom: number
    prenom: number
    email: number
    age: number
    id_sport: number
    _all: number
  }


  export type CoachAvgAggregateInputType = {
    id_coach?: true
    age?: true
    id_sport?: true
  }

  export type CoachSumAggregateInputType = {
    id_coach?: true
    age?: true
    id_sport?: true
  }

  export type CoachMinAggregateInputType = {
    id_coach?: true
    nom?: true
    prenom?: true
    email?: true
    age?: true
    id_sport?: true
  }

  export type CoachMaxAggregateInputType = {
    id_coach?: true
    nom?: true
    prenom?: true
    email?: true
    age?: true
    id_sport?: true
  }

  export type CoachCountAggregateInputType = {
    id_coach?: true
    nom?: true
    prenom?: true
    email?: true
    age?: true
    id_sport?: true
    _all?: true
  }

  export type CoachAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coach to aggregate.
     */
    where?: CoachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachOrderByWithRelationInput | CoachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coaches
    **/
    _count?: true | CoachCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoachAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoachSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoachMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoachMaxAggregateInputType
  }

  export type GetCoachAggregateType<T extends CoachAggregateArgs> = {
        [P in keyof T & keyof AggregateCoach]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoach[P]>
      : GetScalarType<T[P], AggregateCoach[P]>
  }




  export type CoachGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachWhereInput
    orderBy?: CoachOrderByWithAggregationInput | CoachOrderByWithAggregationInput[]
    by: CoachScalarFieldEnum[] | CoachScalarFieldEnum
    having?: CoachScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoachCountAggregateInputType | true
    _avg?: CoachAvgAggregateInputType
    _sum?: CoachSumAggregateInputType
    _min?: CoachMinAggregateInputType
    _max?: CoachMaxAggregateInputType
  }

  export type CoachGroupByOutputType = {
    id_coach: number
    nom: string | null
    prenom: string | null
    email: string | null
    age: number | null
    id_sport: bigint | null
    _count: CoachCountAggregateOutputType | null
    _avg: CoachAvgAggregateOutputType | null
    _sum: CoachSumAggregateOutputType | null
    _min: CoachMinAggregateOutputType | null
    _max: CoachMaxAggregateOutputType | null
  }

  type GetCoachGroupByPayload<T extends CoachGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoachGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoachGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoachGroupByOutputType[P]>
            : GetScalarType<T[P], CoachGroupByOutputType[P]>
        }
      >
    >


  export type CoachSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_coach?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    age?: boolean
    id_sport?: boolean
    Sport?: boolean | Coach$SportArgs<ExtArgs>
    Sport_coach?: boolean | Coach$Sport_coachArgs<ExtArgs>
    _count?: boolean | CoachCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coach"]>

  export type CoachSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_coach?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    age?: boolean
    id_sport?: boolean
    Sport?: boolean | Coach$SportArgs<ExtArgs>
  }, ExtArgs["result"]["coach"]>

  export type CoachSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_coach?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    age?: boolean
    id_sport?: boolean
    Sport?: boolean | Coach$SportArgs<ExtArgs>
  }, ExtArgs["result"]["coach"]>

  export type CoachSelectScalar = {
    id_coach?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    age?: boolean
    id_sport?: boolean
  }

  export type CoachOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_coach" | "nom" | "prenom" | "email" | "age" | "id_sport", ExtArgs["result"]["coach"]>
  export type CoachInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sport?: boolean | Coach$SportArgs<ExtArgs>
    Sport_coach?: boolean | Coach$Sport_coachArgs<ExtArgs>
    _count?: boolean | CoachCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CoachIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sport?: boolean | Coach$SportArgs<ExtArgs>
  }
  export type CoachIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sport?: boolean | Coach$SportArgs<ExtArgs>
  }

  export type $CoachPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coach"
    objects: {
      Sport: Prisma.$SportPayload<ExtArgs> | null
      Sport_coach: Prisma.$Sport_coachPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_coach: number
      nom: string | null
      prenom: string | null
      email: string | null
      age: number | null
      id_sport: bigint | null
    }, ExtArgs["result"]["coach"]>
    composites: {}
  }

  type CoachGetPayload<S extends boolean | null | undefined | CoachDefaultArgs> = $Result.GetResult<Prisma.$CoachPayload, S>

  type CoachCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoachFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoachCountAggregateInputType | true
    }

  export interface CoachDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coach'], meta: { name: 'Coach' } }
    /**
     * Find zero or one Coach that matches the filter.
     * @param {CoachFindUniqueArgs} args - Arguments to find a Coach
     * @example
     * // Get one Coach
     * const coach = await prisma.coach.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoachFindUniqueArgs>(args: SelectSubset<T, CoachFindUniqueArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coach that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoachFindUniqueOrThrowArgs} args - Arguments to find a Coach
     * @example
     * // Get one Coach
     * const coach = await prisma.coach.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoachFindUniqueOrThrowArgs>(args: SelectSubset<T, CoachFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coach that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachFindFirstArgs} args - Arguments to find a Coach
     * @example
     * // Get one Coach
     * const coach = await prisma.coach.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoachFindFirstArgs>(args?: SelectSubset<T, CoachFindFirstArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coach that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachFindFirstOrThrowArgs} args - Arguments to find a Coach
     * @example
     * // Get one Coach
     * const coach = await prisma.coach.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoachFindFirstOrThrowArgs>(args?: SelectSubset<T, CoachFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coaches
     * const coaches = await prisma.coach.findMany()
     * 
     * // Get first 10 Coaches
     * const coaches = await prisma.coach.findMany({ take: 10 })
     * 
     * // Only select the `id_coach`
     * const coachWithId_coachOnly = await prisma.coach.findMany({ select: { id_coach: true } })
     * 
     */
    findMany<T extends CoachFindManyArgs>(args?: SelectSubset<T, CoachFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coach.
     * @param {CoachCreateArgs} args - Arguments to create a Coach.
     * @example
     * // Create one Coach
     * const Coach = await prisma.coach.create({
     *   data: {
     *     // ... data to create a Coach
     *   }
     * })
     * 
     */
    create<T extends CoachCreateArgs>(args: SelectSubset<T, CoachCreateArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coaches.
     * @param {CoachCreateManyArgs} args - Arguments to create many Coaches.
     * @example
     * // Create many Coaches
     * const coach = await prisma.coach.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoachCreateManyArgs>(args?: SelectSubset<T, CoachCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coaches and returns the data saved in the database.
     * @param {CoachCreateManyAndReturnArgs} args - Arguments to create many Coaches.
     * @example
     * // Create many Coaches
     * const coach = await prisma.coach.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coaches and only return the `id_coach`
     * const coachWithId_coachOnly = await prisma.coach.createManyAndReturn({
     *   select: { id_coach: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoachCreateManyAndReturnArgs>(args?: SelectSubset<T, CoachCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coach.
     * @param {CoachDeleteArgs} args - Arguments to delete one Coach.
     * @example
     * // Delete one Coach
     * const Coach = await prisma.coach.delete({
     *   where: {
     *     // ... filter to delete one Coach
     *   }
     * })
     * 
     */
    delete<T extends CoachDeleteArgs>(args: SelectSubset<T, CoachDeleteArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coach.
     * @param {CoachUpdateArgs} args - Arguments to update one Coach.
     * @example
     * // Update one Coach
     * const coach = await prisma.coach.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoachUpdateArgs>(args: SelectSubset<T, CoachUpdateArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coaches.
     * @param {CoachDeleteManyArgs} args - Arguments to filter Coaches to delete.
     * @example
     * // Delete a few Coaches
     * const { count } = await prisma.coach.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoachDeleteManyArgs>(args?: SelectSubset<T, CoachDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coaches
     * const coach = await prisma.coach.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoachUpdateManyArgs>(args: SelectSubset<T, CoachUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coaches and returns the data updated in the database.
     * @param {CoachUpdateManyAndReturnArgs} args - Arguments to update many Coaches.
     * @example
     * // Update many Coaches
     * const coach = await prisma.coach.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Coaches and only return the `id_coach`
     * const coachWithId_coachOnly = await prisma.coach.updateManyAndReturn({
     *   select: { id_coach: true },
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
    updateManyAndReturn<T extends CoachUpdateManyAndReturnArgs>(args: SelectSubset<T, CoachUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coach.
     * @param {CoachUpsertArgs} args - Arguments to update or create a Coach.
     * @example
     * // Update or create a Coach
     * const coach = await prisma.coach.upsert({
     *   create: {
     *     // ... data to create a Coach
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coach we want to update
     *   }
     * })
     */
    upsert<T extends CoachUpsertArgs>(args: SelectSubset<T, CoachUpsertArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachCountArgs} args - Arguments to filter Coaches to count.
     * @example
     * // Count the number of Coaches
     * const count = await prisma.coach.count({
     *   where: {
     *     // ... the filter for the Coaches we want to count
     *   }
     * })
    **/
    count<T extends CoachCountArgs>(
      args?: Subset<T, CoachCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoachCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coach.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoachAggregateArgs>(args: Subset<T, CoachAggregateArgs>): Prisma.PrismaPromise<GetCoachAggregateType<T>>

    /**
     * Group by Coach.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachGroupByArgs} args - Group by arguments.
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
      T extends CoachGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoachGroupByArgs['orderBy'] }
        : { orderBy?: CoachGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoachGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoachGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coach model
   */
  readonly fields: CoachFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coach.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoachClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Sport<T extends Coach$SportArgs<ExtArgs> = {}>(args?: Subset<T, Coach$SportArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Sport_coach<T extends Coach$Sport_coachArgs<ExtArgs> = {}>(args?: Subset<T, Coach$Sport_coachArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sport_coachPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Coach model
   */
  interface CoachFieldRefs {
    readonly id_coach: FieldRef<"Coach", 'Int'>
    readonly nom: FieldRef<"Coach", 'String'>
    readonly prenom: FieldRef<"Coach", 'String'>
    readonly email: FieldRef<"Coach", 'String'>
    readonly age: FieldRef<"Coach", 'Int'>
    readonly id_sport: FieldRef<"Coach", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Coach findUnique
   */
  export type CoachFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * Filter, which Coach to fetch.
     */
    where: CoachWhereUniqueInput
  }

  /**
   * Coach findUniqueOrThrow
   */
  export type CoachFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * Filter, which Coach to fetch.
     */
    where: CoachWhereUniqueInput
  }

  /**
   * Coach findFirst
   */
  export type CoachFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * Filter, which Coach to fetch.
     */
    where?: CoachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachOrderByWithRelationInput | CoachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coaches.
     */
    cursor?: CoachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coaches.
     */
    distinct?: CoachScalarFieldEnum | CoachScalarFieldEnum[]
  }

  /**
   * Coach findFirstOrThrow
   */
  export type CoachFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * Filter, which Coach to fetch.
     */
    where?: CoachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachOrderByWithRelationInput | CoachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coaches.
     */
    cursor?: CoachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coaches.
     */
    distinct?: CoachScalarFieldEnum | CoachScalarFieldEnum[]
  }

  /**
   * Coach findMany
   */
  export type CoachFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * Filter, which Coaches to fetch.
     */
    where?: CoachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachOrderByWithRelationInput | CoachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coaches.
     */
    cursor?: CoachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coaches.
     */
    skip?: number
    distinct?: CoachScalarFieldEnum | CoachScalarFieldEnum[]
  }

  /**
   * Coach create
   */
  export type CoachCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * The data needed to create a Coach.
     */
    data?: XOR<CoachCreateInput, CoachUncheckedCreateInput>
  }

  /**
   * Coach createMany
   */
  export type CoachCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coaches.
     */
    data: CoachCreateManyInput | CoachCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coach createManyAndReturn
   */
  export type CoachCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * The data used to create many Coaches.
     */
    data: CoachCreateManyInput | CoachCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coach update
   */
  export type CoachUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * The data needed to update a Coach.
     */
    data: XOR<CoachUpdateInput, CoachUncheckedUpdateInput>
    /**
     * Choose, which Coach to update.
     */
    where: CoachWhereUniqueInput
  }

  /**
   * Coach updateMany
   */
  export type CoachUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coaches.
     */
    data: XOR<CoachUpdateManyMutationInput, CoachUncheckedUpdateManyInput>
    /**
     * Filter which Coaches to update
     */
    where?: CoachWhereInput
    /**
     * Limit how many Coaches to update.
     */
    limit?: number
  }

  /**
   * Coach updateManyAndReturn
   */
  export type CoachUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * The data used to update Coaches.
     */
    data: XOR<CoachUpdateManyMutationInput, CoachUncheckedUpdateManyInput>
    /**
     * Filter which Coaches to update
     */
    where?: CoachWhereInput
    /**
     * Limit how many Coaches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coach upsert
   */
  export type CoachUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * The filter to search for the Coach to update in case it exists.
     */
    where: CoachWhereUniqueInput
    /**
     * In case the Coach found by the `where` argument doesn't exist, create a new Coach with this data.
     */
    create: XOR<CoachCreateInput, CoachUncheckedCreateInput>
    /**
     * In case the Coach was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoachUpdateInput, CoachUncheckedUpdateInput>
  }

  /**
   * Coach delete
   */
  export type CoachDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * Filter which Coach to delete.
     */
    where: CoachWhereUniqueInput
  }

  /**
   * Coach deleteMany
   */
  export type CoachDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coaches to delete
     */
    where?: CoachWhereInput
    /**
     * Limit how many Coaches to delete.
     */
    limit?: number
  }

  /**
   * Coach.Sport
   */
  export type Coach$SportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: SportWhereInput
  }

  /**
   * Coach.Sport_coach
   */
  export type Coach$Sport_coachArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport_coach
     */
    select?: Sport_coachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport_coach
     */
    omit?: Sport_coachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sport_coachInclude<ExtArgs> | null
    where?: Sport_coachWhereInput
    orderBy?: Sport_coachOrderByWithRelationInput | Sport_coachOrderByWithRelationInput[]
    cursor?: Sport_coachWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sport_coachScalarFieldEnum | Sport_coachScalarFieldEnum[]
  }

  /**
   * Coach without action
   */
  export type CoachDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
  }


  /**
   * Model Sport_coach
   */

  export type AggregateSport_coach = {
    _count: Sport_coachCountAggregateOutputType | null
    _avg: Sport_coachAvgAggregateOutputType | null
    _sum: Sport_coachSumAggregateOutputType | null
    _min: Sport_coachMinAggregateOutputType | null
    _max: Sport_coachMaxAggregateOutputType | null
  }

  export type Sport_coachAvgAggregateOutputType = {
    id_coaching: number | null
    id_coach: number | null
    id_sport: number | null
  }

  export type Sport_coachSumAggregateOutputType = {
    id_coaching: bigint | null
    id_coach: number | null
    id_sport: bigint | null
  }

  export type Sport_coachMinAggregateOutputType = {
    id_coaching: bigint | null
    id_coach: number | null
    id_sport: bigint | null
  }

  export type Sport_coachMaxAggregateOutputType = {
    id_coaching: bigint | null
    id_coach: number | null
    id_sport: bigint | null
  }

  export type Sport_coachCountAggregateOutputType = {
    id_coaching: number
    id_coach: number
    id_sport: number
    _all: number
  }


  export type Sport_coachAvgAggregateInputType = {
    id_coaching?: true
    id_coach?: true
    id_sport?: true
  }

  export type Sport_coachSumAggregateInputType = {
    id_coaching?: true
    id_coach?: true
    id_sport?: true
  }

  export type Sport_coachMinAggregateInputType = {
    id_coaching?: true
    id_coach?: true
    id_sport?: true
  }

  export type Sport_coachMaxAggregateInputType = {
    id_coaching?: true
    id_coach?: true
    id_sport?: true
  }

  export type Sport_coachCountAggregateInputType = {
    id_coaching?: true
    id_coach?: true
    id_sport?: true
    _all?: true
  }

  export type Sport_coachAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sport_coach to aggregate.
     */
    where?: Sport_coachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sport_coaches to fetch.
     */
    orderBy?: Sport_coachOrderByWithRelationInput | Sport_coachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Sport_coachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sport_coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sport_coaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sport_coaches
    **/
    _count?: true | Sport_coachCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sport_coachAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sport_coachSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sport_coachMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sport_coachMaxAggregateInputType
  }

  export type GetSport_coachAggregateType<T extends Sport_coachAggregateArgs> = {
        [P in keyof T & keyof AggregateSport_coach]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSport_coach[P]>
      : GetScalarType<T[P], AggregateSport_coach[P]>
  }




  export type Sport_coachGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sport_coachWhereInput
    orderBy?: Sport_coachOrderByWithAggregationInput | Sport_coachOrderByWithAggregationInput[]
    by: Sport_coachScalarFieldEnum[] | Sport_coachScalarFieldEnum
    having?: Sport_coachScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sport_coachCountAggregateInputType | true
    _avg?: Sport_coachAvgAggregateInputType
    _sum?: Sport_coachSumAggregateInputType
    _min?: Sport_coachMinAggregateInputType
    _max?: Sport_coachMaxAggregateInputType
  }

  export type Sport_coachGroupByOutputType = {
    id_coaching: bigint
    id_coach: number
    id_sport: bigint | null
    _count: Sport_coachCountAggregateOutputType | null
    _avg: Sport_coachAvgAggregateOutputType | null
    _sum: Sport_coachSumAggregateOutputType | null
    _min: Sport_coachMinAggregateOutputType | null
    _max: Sport_coachMaxAggregateOutputType | null
  }

  type GetSport_coachGroupByPayload<T extends Sport_coachGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sport_coachGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sport_coachGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sport_coachGroupByOutputType[P]>
            : GetScalarType<T[P], Sport_coachGroupByOutputType[P]>
        }
      >
    >


  export type Sport_coachSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_coaching?: boolean
    id_coach?: boolean
    id_sport?: boolean
    Coach?: boolean | CoachDefaultArgs<ExtArgs>
    Sport?: boolean | Sport_coach$SportArgs<ExtArgs>
  }, ExtArgs["result"]["sport_coach"]>

  export type Sport_coachSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_coaching?: boolean
    id_coach?: boolean
    id_sport?: boolean
    Coach?: boolean | CoachDefaultArgs<ExtArgs>
    Sport?: boolean | Sport_coach$SportArgs<ExtArgs>
  }, ExtArgs["result"]["sport_coach"]>

  export type Sport_coachSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_coaching?: boolean
    id_coach?: boolean
    id_sport?: boolean
    Coach?: boolean | CoachDefaultArgs<ExtArgs>
    Sport?: boolean | Sport_coach$SportArgs<ExtArgs>
  }, ExtArgs["result"]["sport_coach"]>

  export type Sport_coachSelectScalar = {
    id_coaching?: boolean
    id_coach?: boolean
    id_sport?: boolean
  }

  export type Sport_coachOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_coaching" | "id_coach" | "id_sport", ExtArgs["result"]["sport_coach"]>
  export type Sport_coachInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Coach?: boolean | CoachDefaultArgs<ExtArgs>
    Sport?: boolean | Sport_coach$SportArgs<ExtArgs>
  }
  export type Sport_coachIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Coach?: boolean | CoachDefaultArgs<ExtArgs>
    Sport?: boolean | Sport_coach$SportArgs<ExtArgs>
  }
  export type Sport_coachIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Coach?: boolean | CoachDefaultArgs<ExtArgs>
    Sport?: boolean | Sport_coach$SportArgs<ExtArgs>
  }

  export type $Sport_coachPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sport_coach"
    objects: {
      Coach: Prisma.$CoachPayload<ExtArgs>
      Sport: Prisma.$SportPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_coaching: bigint
      id_coach: number
      id_sport: bigint | null
    }, ExtArgs["result"]["sport_coach"]>
    composites: {}
  }

  type Sport_coachGetPayload<S extends boolean | null | undefined | Sport_coachDefaultArgs> = $Result.GetResult<Prisma.$Sport_coachPayload, S>

  type Sport_coachCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Sport_coachFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sport_coachCountAggregateInputType | true
    }

  export interface Sport_coachDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sport_coach'], meta: { name: 'Sport_coach' } }
    /**
     * Find zero or one Sport_coach that matches the filter.
     * @param {Sport_coachFindUniqueArgs} args - Arguments to find a Sport_coach
     * @example
     * // Get one Sport_coach
     * const sport_coach = await prisma.sport_coach.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Sport_coachFindUniqueArgs>(args: SelectSubset<T, Sport_coachFindUniqueArgs<ExtArgs>>): Prisma__Sport_coachClient<$Result.GetResult<Prisma.$Sport_coachPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sport_coach that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Sport_coachFindUniqueOrThrowArgs} args - Arguments to find a Sport_coach
     * @example
     * // Get one Sport_coach
     * const sport_coach = await prisma.sport_coach.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Sport_coachFindUniqueOrThrowArgs>(args: SelectSubset<T, Sport_coachFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Sport_coachClient<$Result.GetResult<Prisma.$Sport_coachPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sport_coach that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sport_coachFindFirstArgs} args - Arguments to find a Sport_coach
     * @example
     * // Get one Sport_coach
     * const sport_coach = await prisma.sport_coach.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Sport_coachFindFirstArgs>(args?: SelectSubset<T, Sport_coachFindFirstArgs<ExtArgs>>): Prisma__Sport_coachClient<$Result.GetResult<Prisma.$Sport_coachPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sport_coach that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sport_coachFindFirstOrThrowArgs} args - Arguments to find a Sport_coach
     * @example
     * // Get one Sport_coach
     * const sport_coach = await prisma.sport_coach.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Sport_coachFindFirstOrThrowArgs>(args?: SelectSubset<T, Sport_coachFindFirstOrThrowArgs<ExtArgs>>): Prisma__Sport_coachClient<$Result.GetResult<Prisma.$Sport_coachPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sport_coaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sport_coachFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sport_coaches
     * const sport_coaches = await prisma.sport_coach.findMany()
     * 
     * // Get first 10 Sport_coaches
     * const sport_coaches = await prisma.sport_coach.findMany({ take: 10 })
     * 
     * // Only select the `id_coaching`
     * const sport_coachWithId_coachingOnly = await prisma.sport_coach.findMany({ select: { id_coaching: true } })
     * 
     */
    findMany<T extends Sport_coachFindManyArgs>(args?: SelectSubset<T, Sport_coachFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sport_coachPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sport_coach.
     * @param {Sport_coachCreateArgs} args - Arguments to create a Sport_coach.
     * @example
     * // Create one Sport_coach
     * const Sport_coach = await prisma.sport_coach.create({
     *   data: {
     *     // ... data to create a Sport_coach
     *   }
     * })
     * 
     */
    create<T extends Sport_coachCreateArgs>(args: SelectSubset<T, Sport_coachCreateArgs<ExtArgs>>): Prisma__Sport_coachClient<$Result.GetResult<Prisma.$Sport_coachPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sport_coaches.
     * @param {Sport_coachCreateManyArgs} args - Arguments to create many Sport_coaches.
     * @example
     * // Create many Sport_coaches
     * const sport_coach = await prisma.sport_coach.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Sport_coachCreateManyArgs>(args?: SelectSubset<T, Sport_coachCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sport_coaches and returns the data saved in the database.
     * @param {Sport_coachCreateManyAndReturnArgs} args - Arguments to create many Sport_coaches.
     * @example
     * // Create many Sport_coaches
     * const sport_coach = await prisma.sport_coach.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sport_coaches and only return the `id_coaching`
     * const sport_coachWithId_coachingOnly = await prisma.sport_coach.createManyAndReturn({
     *   select: { id_coaching: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Sport_coachCreateManyAndReturnArgs>(args?: SelectSubset<T, Sport_coachCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sport_coachPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sport_coach.
     * @param {Sport_coachDeleteArgs} args - Arguments to delete one Sport_coach.
     * @example
     * // Delete one Sport_coach
     * const Sport_coach = await prisma.sport_coach.delete({
     *   where: {
     *     // ... filter to delete one Sport_coach
     *   }
     * })
     * 
     */
    delete<T extends Sport_coachDeleteArgs>(args: SelectSubset<T, Sport_coachDeleteArgs<ExtArgs>>): Prisma__Sport_coachClient<$Result.GetResult<Prisma.$Sport_coachPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sport_coach.
     * @param {Sport_coachUpdateArgs} args - Arguments to update one Sport_coach.
     * @example
     * // Update one Sport_coach
     * const sport_coach = await prisma.sport_coach.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Sport_coachUpdateArgs>(args: SelectSubset<T, Sport_coachUpdateArgs<ExtArgs>>): Prisma__Sport_coachClient<$Result.GetResult<Prisma.$Sport_coachPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sport_coaches.
     * @param {Sport_coachDeleteManyArgs} args - Arguments to filter Sport_coaches to delete.
     * @example
     * // Delete a few Sport_coaches
     * const { count } = await prisma.sport_coach.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Sport_coachDeleteManyArgs>(args?: SelectSubset<T, Sport_coachDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sport_coaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sport_coachUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sport_coaches
     * const sport_coach = await prisma.sport_coach.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Sport_coachUpdateManyArgs>(args: SelectSubset<T, Sport_coachUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sport_coaches and returns the data updated in the database.
     * @param {Sport_coachUpdateManyAndReturnArgs} args - Arguments to update many Sport_coaches.
     * @example
     * // Update many Sport_coaches
     * const sport_coach = await prisma.sport_coach.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sport_coaches and only return the `id_coaching`
     * const sport_coachWithId_coachingOnly = await prisma.sport_coach.updateManyAndReturn({
     *   select: { id_coaching: true },
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
    updateManyAndReturn<T extends Sport_coachUpdateManyAndReturnArgs>(args: SelectSubset<T, Sport_coachUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sport_coachPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sport_coach.
     * @param {Sport_coachUpsertArgs} args - Arguments to update or create a Sport_coach.
     * @example
     * // Update or create a Sport_coach
     * const sport_coach = await prisma.sport_coach.upsert({
     *   create: {
     *     // ... data to create a Sport_coach
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sport_coach we want to update
     *   }
     * })
     */
    upsert<T extends Sport_coachUpsertArgs>(args: SelectSubset<T, Sport_coachUpsertArgs<ExtArgs>>): Prisma__Sport_coachClient<$Result.GetResult<Prisma.$Sport_coachPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sport_coaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sport_coachCountArgs} args - Arguments to filter Sport_coaches to count.
     * @example
     * // Count the number of Sport_coaches
     * const count = await prisma.sport_coach.count({
     *   where: {
     *     // ... the filter for the Sport_coaches we want to count
     *   }
     * })
    **/
    count<T extends Sport_coachCountArgs>(
      args?: Subset<T, Sport_coachCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sport_coachCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sport_coach.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sport_coachAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sport_coachAggregateArgs>(args: Subset<T, Sport_coachAggregateArgs>): Prisma.PrismaPromise<GetSport_coachAggregateType<T>>

    /**
     * Group by Sport_coach.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sport_coachGroupByArgs} args - Group by arguments.
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
      T extends Sport_coachGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Sport_coachGroupByArgs['orderBy'] }
        : { orderBy?: Sport_coachGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Sport_coachGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSport_coachGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sport_coach model
   */
  readonly fields: Sport_coachFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sport_coach.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Sport_coachClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Coach<T extends CoachDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoachDefaultArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Sport<T extends Sport_coach$SportArgs<ExtArgs> = {}>(args?: Subset<T, Sport_coach$SportArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sport_coach model
   */
  interface Sport_coachFieldRefs {
    readonly id_coaching: FieldRef<"Sport_coach", 'BigInt'>
    readonly id_coach: FieldRef<"Sport_coach", 'Int'>
    readonly id_sport: FieldRef<"Sport_coach", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Sport_coach findUnique
   */
  export type Sport_coachFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport_coach
     */
    select?: Sport_coachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport_coach
     */
    omit?: Sport_coachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sport_coachInclude<ExtArgs> | null
    /**
     * Filter, which Sport_coach to fetch.
     */
    where: Sport_coachWhereUniqueInput
  }

  /**
   * Sport_coach findUniqueOrThrow
   */
  export type Sport_coachFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport_coach
     */
    select?: Sport_coachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport_coach
     */
    omit?: Sport_coachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sport_coachInclude<ExtArgs> | null
    /**
     * Filter, which Sport_coach to fetch.
     */
    where: Sport_coachWhereUniqueInput
  }

  /**
   * Sport_coach findFirst
   */
  export type Sport_coachFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport_coach
     */
    select?: Sport_coachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport_coach
     */
    omit?: Sport_coachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sport_coachInclude<ExtArgs> | null
    /**
     * Filter, which Sport_coach to fetch.
     */
    where?: Sport_coachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sport_coaches to fetch.
     */
    orderBy?: Sport_coachOrderByWithRelationInput | Sport_coachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sport_coaches.
     */
    cursor?: Sport_coachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sport_coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sport_coaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sport_coaches.
     */
    distinct?: Sport_coachScalarFieldEnum | Sport_coachScalarFieldEnum[]
  }

  /**
   * Sport_coach findFirstOrThrow
   */
  export type Sport_coachFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport_coach
     */
    select?: Sport_coachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport_coach
     */
    omit?: Sport_coachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sport_coachInclude<ExtArgs> | null
    /**
     * Filter, which Sport_coach to fetch.
     */
    where?: Sport_coachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sport_coaches to fetch.
     */
    orderBy?: Sport_coachOrderByWithRelationInput | Sport_coachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sport_coaches.
     */
    cursor?: Sport_coachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sport_coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sport_coaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sport_coaches.
     */
    distinct?: Sport_coachScalarFieldEnum | Sport_coachScalarFieldEnum[]
  }

  /**
   * Sport_coach findMany
   */
  export type Sport_coachFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport_coach
     */
    select?: Sport_coachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport_coach
     */
    omit?: Sport_coachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sport_coachInclude<ExtArgs> | null
    /**
     * Filter, which Sport_coaches to fetch.
     */
    where?: Sport_coachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sport_coaches to fetch.
     */
    orderBy?: Sport_coachOrderByWithRelationInput | Sport_coachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sport_coaches.
     */
    cursor?: Sport_coachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sport_coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sport_coaches.
     */
    skip?: number
    distinct?: Sport_coachScalarFieldEnum | Sport_coachScalarFieldEnum[]
  }

  /**
   * Sport_coach create
   */
  export type Sport_coachCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport_coach
     */
    select?: Sport_coachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport_coach
     */
    omit?: Sport_coachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sport_coachInclude<ExtArgs> | null
    /**
     * The data needed to create a Sport_coach.
     */
    data: XOR<Sport_coachCreateInput, Sport_coachUncheckedCreateInput>
  }

  /**
   * Sport_coach createMany
   */
  export type Sport_coachCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sport_coaches.
     */
    data: Sport_coachCreateManyInput | Sport_coachCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sport_coach createManyAndReturn
   */
  export type Sport_coachCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport_coach
     */
    select?: Sport_coachSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sport_coach
     */
    omit?: Sport_coachOmit<ExtArgs> | null
    /**
     * The data used to create many Sport_coaches.
     */
    data: Sport_coachCreateManyInput | Sport_coachCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sport_coachIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sport_coach update
   */
  export type Sport_coachUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport_coach
     */
    select?: Sport_coachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport_coach
     */
    omit?: Sport_coachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sport_coachInclude<ExtArgs> | null
    /**
     * The data needed to update a Sport_coach.
     */
    data: XOR<Sport_coachUpdateInput, Sport_coachUncheckedUpdateInput>
    /**
     * Choose, which Sport_coach to update.
     */
    where: Sport_coachWhereUniqueInput
  }

  /**
   * Sport_coach updateMany
   */
  export type Sport_coachUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sport_coaches.
     */
    data: XOR<Sport_coachUpdateManyMutationInput, Sport_coachUncheckedUpdateManyInput>
    /**
     * Filter which Sport_coaches to update
     */
    where?: Sport_coachWhereInput
    /**
     * Limit how many Sport_coaches to update.
     */
    limit?: number
  }

  /**
   * Sport_coach updateManyAndReturn
   */
  export type Sport_coachUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport_coach
     */
    select?: Sport_coachSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sport_coach
     */
    omit?: Sport_coachOmit<ExtArgs> | null
    /**
     * The data used to update Sport_coaches.
     */
    data: XOR<Sport_coachUpdateManyMutationInput, Sport_coachUncheckedUpdateManyInput>
    /**
     * Filter which Sport_coaches to update
     */
    where?: Sport_coachWhereInput
    /**
     * Limit how many Sport_coaches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sport_coachIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sport_coach upsert
   */
  export type Sport_coachUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport_coach
     */
    select?: Sport_coachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport_coach
     */
    omit?: Sport_coachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sport_coachInclude<ExtArgs> | null
    /**
     * The filter to search for the Sport_coach to update in case it exists.
     */
    where: Sport_coachWhereUniqueInput
    /**
     * In case the Sport_coach found by the `where` argument doesn't exist, create a new Sport_coach with this data.
     */
    create: XOR<Sport_coachCreateInput, Sport_coachUncheckedCreateInput>
    /**
     * In case the Sport_coach was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Sport_coachUpdateInput, Sport_coachUncheckedUpdateInput>
  }

  /**
   * Sport_coach delete
   */
  export type Sport_coachDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport_coach
     */
    select?: Sport_coachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport_coach
     */
    omit?: Sport_coachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sport_coachInclude<ExtArgs> | null
    /**
     * Filter which Sport_coach to delete.
     */
    where: Sport_coachWhereUniqueInput
  }

  /**
   * Sport_coach deleteMany
   */
  export type Sport_coachDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sport_coaches to delete
     */
    where?: Sport_coachWhereInput
    /**
     * Limit how many Sport_coaches to delete.
     */
    limit?: number
  }

  /**
   * Sport_coach.Sport
   */
  export type Sport_coach$SportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: SportWhereInput
  }

  /**
   * Sport_coach without action
   */
  export type Sport_coachDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport_coach
     */
    select?: Sport_coachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport_coach
     */
    omit?: Sport_coachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sport_coachInclude<ExtArgs> | null
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
    role: 'role',
    next_adherent_inbody_rdv: 'next_adherent_inbody_rdv',
    payment_status: 'payment_status',
    inscription_status: 'inscription_status'
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
    Name: 'Name'
  };

  export type SportScalarFieldEnum = (typeof SportScalarFieldEnum)[keyof typeof SportScalarFieldEnum]


  export const SportSessionScalarFieldEnum: {
    id: 'id',
    sport_id: 'sport_id',
    date: 'date',
    starting_time: 'starting_time',
    ending_time: 'ending_time',
    group_name: 'group_name'
  };

  export type SportSessionScalarFieldEnum = (typeof SportSessionScalarFieldEnum)[keyof typeof SportSessionScalarFieldEnum]


  export const DietScalarFieldEnum: {
    id: 'id',
    id_adherent: 'id_adherent',
    id_food: 'id_food',
    meal_type: 'meal_type',
    Date: 'Date'
  };

  export type DietScalarFieldEnum = (typeof DietScalarFieldEnum)[keyof typeof DietScalarFieldEnum]


  export const FoodScalarFieldEnum: {
    id_food: 'id_food',
    name: 'name',
    calories: 'calories',
    fat: 'fat',
    carbs: 'carbs',
    protein: 'protein'
  };

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const InBodyScalarFieldEnum: {
    id: 'id',
    id_adherent: 'id_adherent',
    poids: 'poids',
    masse_musculaire: 'masse_musculaire',
    masse_grasse: 'masse_grasse',
    score: 'score',
    date: 'date',
    time: 'time'
  };

  export type InBodyScalarFieldEnum = (typeof InBodyScalarFieldEnum)[keyof typeof InBodyScalarFieldEnum]


  export const CoachScalarFieldEnum: {
    id_coach: 'id_coach',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    age: 'age',
    id_sport: 'id_sport'
  };

  export type CoachScalarFieldEnum = (typeof CoachScalarFieldEnum)[keyof typeof CoachScalarFieldEnum]


  export const Sport_coachScalarFieldEnum: {
    id_coaching: 'id_coaching',
    id_coach: 'id_coach',
    id_sport: 'id_sport'
  };

  export type Sport_coachScalarFieldEnum = (typeof Sport_coachScalarFieldEnum)[keyof typeof Sport_coachScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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
    next_adherent_inbody_rdv?: DateTimeNullableFilter<"Adherent"> | Date | string | null
    payment_status?: StringNullableFilter<"Adherent"> | string | null
    inscription_status?: StringNullableFilter<"Adherent"> | string | null
    Adherent_sport?: Adherent_sportListRelationFilter
    Diet?: DietListRelationFilter
    InBody?: InBodyListRelationFilter
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
    next_adherent_inbody_rdv?: SortOrderInput | SortOrder
    payment_status?: SortOrderInput | SortOrder
    inscription_status?: SortOrderInput | SortOrder
    Adherent_sport?: Adherent_sportOrderByRelationAggregateInput
    Diet?: DietOrderByRelationAggregateInput
    InBody?: InBodyOrderByRelationAggregateInput
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
    next_adherent_inbody_rdv?: DateTimeNullableFilter<"Adherent"> | Date | string | null
    payment_status?: StringNullableFilter<"Adherent"> | string | null
    inscription_status?: StringNullableFilter<"Adherent"> | string | null
    Adherent_sport?: Adherent_sportListRelationFilter
    Diet?: DietListRelationFilter
    InBody?: InBodyListRelationFilter
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
    next_adherent_inbody_rdv?: SortOrderInput | SortOrder
    payment_status?: SortOrderInput | SortOrder
    inscription_status?: SortOrderInput | SortOrder
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
    next_adherent_inbody_rdv?: DateTimeNullableWithAggregatesFilter<"Adherent"> | Date | string | null
    payment_status?: StringNullableWithAggregatesFilter<"Adherent"> | string | null
    inscription_status?: StringNullableWithAggregatesFilter<"Adherent"> | string | null
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
    Adherent_sport?: Adherent_sportListRelationFilter
    Coach?: CoachListRelationFilter
    Sport_coach?: Sport_coachListRelationFilter
    sessions?: SportSessionListRelationFilter
  }

  export type SportOrderByWithRelationInput = {
    id_sport?: SortOrder
    Name?: SortOrder
    Adherent_sport?: Adherent_sportOrderByRelationAggregateInput
    Coach?: CoachOrderByRelationAggregateInput
    Sport_coach?: Sport_coachOrderByRelationAggregateInput
    sessions?: SportSessionOrderByRelationAggregateInput
  }

  export type SportWhereUniqueInput = Prisma.AtLeast<{
    id_sport?: bigint | number
    AND?: SportWhereInput | SportWhereInput[]
    OR?: SportWhereInput[]
    NOT?: SportWhereInput | SportWhereInput[]
    Name?: StringFilter<"Sport"> | string
    Adherent_sport?: Adherent_sportListRelationFilter
    Coach?: CoachListRelationFilter
    Sport_coach?: Sport_coachListRelationFilter
    sessions?: SportSessionListRelationFilter
  }, "id_sport">

  export type SportOrderByWithAggregationInput = {
    id_sport?: SortOrder
    Name?: SortOrder
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
  }

  export type SportSessionWhereInput = {
    AND?: SportSessionWhereInput | SportSessionWhereInput[]
    OR?: SportSessionWhereInput[]
    NOT?: SportSessionWhereInput | SportSessionWhereInput[]
    id?: IntFilter<"SportSession"> | number
    sport_id?: BigIntFilter<"SportSession"> | bigint | number
    date?: DateTimeNullableFilter<"SportSession"> | Date | string | null
    starting_time?: DateTimeNullableFilter<"SportSession"> | Date | string | null
    ending_time?: DateTimeNullableFilter<"SportSession"> | Date | string | null
    group_name?: StringNullableFilter<"SportSession"> | string | null
    Sport?: XOR<SportScalarRelationFilter, SportWhereInput>
  }

  export type SportSessionOrderByWithRelationInput = {
    id?: SortOrder
    sport_id?: SortOrder
    date?: SortOrderInput | SortOrder
    starting_time?: SortOrderInput | SortOrder
    ending_time?: SortOrderInput | SortOrder
    group_name?: SortOrderInput | SortOrder
    Sport?: SportOrderByWithRelationInput
  }

  export type SportSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SportSessionWhereInput | SportSessionWhereInput[]
    OR?: SportSessionWhereInput[]
    NOT?: SportSessionWhereInput | SportSessionWhereInput[]
    sport_id?: BigIntFilter<"SportSession"> | bigint | number
    date?: DateTimeNullableFilter<"SportSession"> | Date | string | null
    starting_time?: DateTimeNullableFilter<"SportSession"> | Date | string | null
    ending_time?: DateTimeNullableFilter<"SportSession"> | Date | string | null
    group_name?: StringNullableFilter<"SportSession"> | string | null
    Sport?: XOR<SportScalarRelationFilter, SportWhereInput>
  }, "id">

  export type SportSessionOrderByWithAggregationInput = {
    id?: SortOrder
    sport_id?: SortOrder
    date?: SortOrderInput | SortOrder
    starting_time?: SortOrderInput | SortOrder
    ending_time?: SortOrderInput | SortOrder
    group_name?: SortOrderInput | SortOrder
    _count?: SportSessionCountOrderByAggregateInput
    _avg?: SportSessionAvgOrderByAggregateInput
    _max?: SportSessionMaxOrderByAggregateInput
    _min?: SportSessionMinOrderByAggregateInput
    _sum?: SportSessionSumOrderByAggregateInput
  }

  export type SportSessionScalarWhereWithAggregatesInput = {
    AND?: SportSessionScalarWhereWithAggregatesInput | SportSessionScalarWhereWithAggregatesInput[]
    OR?: SportSessionScalarWhereWithAggregatesInput[]
    NOT?: SportSessionScalarWhereWithAggregatesInput | SportSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SportSession"> | number
    sport_id?: BigIntWithAggregatesFilter<"SportSession"> | bigint | number
    date?: DateTimeNullableWithAggregatesFilter<"SportSession"> | Date | string | null
    starting_time?: DateTimeNullableWithAggregatesFilter<"SportSession"> | Date | string | null
    ending_time?: DateTimeNullableWithAggregatesFilter<"SportSession"> | Date | string | null
    group_name?: StringNullableWithAggregatesFilter<"SportSession"> | string | null
  }

  export type DietWhereInput = {
    AND?: DietWhereInput | DietWhereInput[]
    OR?: DietWhereInput[]
    NOT?: DietWhereInput | DietWhereInput[]
    id?: BigIntFilter<"Diet"> | bigint | number
    id_adherent?: IntFilter<"Diet"> | number
    id_food?: IntNullableFilter<"Diet"> | number | null
    meal_type?: StringNullableFilter<"Diet"> | string | null
    Date?: DateTimeNullableFilter<"Diet"> | Date | string | null
    Adherent?: XOR<AdherentScalarRelationFilter, AdherentWhereInput>
    food?: XOR<FoodNullableScalarRelationFilter, foodWhereInput> | null
  }

  export type DietOrderByWithRelationInput = {
    id?: SortOrder
    id_adherent?: SortOrder
    id_food?: SortOrderInput | SortOrder
    meal_type?: SortOrderInput | SortOrder
    Date?: SortOrderInput | SortOrder
    Adherent?: AdherentOrderByWithRelationInput
    food?: foodOrderByWithRelationInput
  }

  export type DietWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: DietWhereInput | DietWhereInput[]
    OR?: DietWhereInput[]
    NOT?: DietWhereInput | DietWhereInput[]
    id_adherent?: IntFilter<"Diet"> | number
    id_food?: IntNullableFilter<"Diet"> | number | null
    meal_type?: StringNullableFilter<"Diet"> | string | null
    Date?: DateTimeNullableFilter<"Diet"> | Date | string | null
    Adherent?: XOR<AdherentScalarRelationFilter, AdherentWhereInput>
    food?: XOR<FoodNullableScalarRelationFilter, foodWhereInput> | null
  }, "id">

  export type DietOrderByWithAggregationInput = {
    id?: SortOrder
    id_adherent?: SortOrder
    id_food?: SortOrderInput | SortOrder
    meal_type?: SortOrderInput | SortOrder
    Date?: SortOrderInput | SortOrder
    _count?: DietCountOrderByAggregateInput
    _avg?: DietAvgOrderByAggregateInput
    _max?: DietMaxOrderByAggregateInput
    _min?: DietMinOrderByAggregateInput
    _sum?: DietSumOrderByAggregateInput
  }

  export type DietScalarWhereWithAggregatesInput = {
    AND?: DietScalarWhereWithAggregatesInput | DietScalarWhereWithAggregatesInput[]
    OR?: DietScalarWhereWithAggregatesInput[]
    NOT?: DietScalarWhereWithAggregatesInput | DietScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Diet"> | bigint | number
    id_adherent?: IntWithAggregatesFilter<"Diet"> | number
    id_food?: IntNullableWithAggregatesFilter<"Diet"> | number | null
    meal_type?: StringNullableWithAggregatesFilter<"Diet"> | string | null
    Date?: DateTimeNullableWithAggregatesFilter<"Diet"> | Date | string | null
  }

  export type foodWhereInput = {
    AND?: foodWhereInput | foodWhereInput[]
    OR?: foodWhereInput[]
    NOT?: foodWhereInput | foodWhereInput[]
    id_food?: IntFilter<"food"> | number
    name?: StringFilter<"food"> | string
    calories?: IntFilter<"food"> | number
    fat?: DecimalFilter<"food"> | Decimal | DecimalJsLike | number | string
    carbs?: DecimalFilter<"food"> | Decimal | DecimalJsLike | number | string
    protein?: DecimalFilter<"food"> | Decimal | DecimalJsLike | number | string
    Diet?: DietListRelationFilter
  }

  export type foodOrderByWithRelationInput = {
    id_food?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
    Diet?: DietOrderByRelationAggregateInput
  }

  export type foodWhereUniqueInput = Prisma.AtLeast<{
    id_food?: number
    AND?: foodWhereInput | foodWhereInput[]
    OR?: foodWhereInput[]
    NOT?: foodWhereInput | foodWhereInput[]
    name?: StringFilter<"food"> | string
    calories?: IntFilter<"food"> | number
    fat?: DecimalFilter<"food"> | Decimal | DecimalJsLike | number | string
    carbs?: DecimalFilter<"food"> | Decimal | DecimalJsLike | number | string
    protein?: DecimalFilter<"food"> | Decimal | DecimalJsLike | number | string
    Diet?: DietListRelationFilter
  }, "id_food">

  export type foodOrderByWithAggregationInput = {
    id_food?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
    _count?: foodCountOrderByAggregateInput
    _avg?: foodAvgOrderByAggregateInput
    _max?: foodMaxOrderByAggregateInput
    _min?: foodMinOrderByAggregateInput
    _sum?: foodSumOrderByAggregateInput
  }

  export type foodScalarWhereWithAggregatesInput = {
    AND?: foodScalarWhereWithAggregatesInput | foodScalarWhereWithAggregatesInput[]
    OR?: foodScalarWhereWithAggregatesInput[]
    NOT?: foodScalarWhereWithAggregatesInput | foodScalarWhereWithAggregatesInput[]
    id_food?: IntWithAggregatesFilter<"food"> | number
    name?: StringWithAggregatesFilter<"food"> | string
    calories?: IntWithAggregatesFilter<"food"> | number
    fat?: DecimalWithAggregatesFilter<"food"> | Decimal | DecimalJsLike | number | string
    carbs?: DecimalWithAggregatesFilter<"food"> | Decimal | DecimalJsLike | number | string
    protein?: DecimalWithAggregatesFilter<"food"> | Decimal | DecimalJsLike | number | string
  }

  export type InBodyWhereInput = {
    AND?: InBodyWhereInput | InBodyWhereInput[]
    OR?: InBodyWhereInput[]
    NOT?: InBodyWhereInput | InBodyWhereInput[]
    id?: BigIntFilter<"InBody"> | bigint | number
    id_adherent?: IntFilter<"InBody"> | number
    poids?: FloatNullableFilter<"InBody"> | number | null
    masse_musculaire?: FloatNullableFilter<"InBody"> | number | null
    masse_grasse?: FloatNullableFilter<"InBody"> | number | null
    score?: IntNullableFilter<"InBody"> | number | null
    date?: DateTimeNullableFilter<"InBody"> | Date | string | null
    time?: DateTimeNullableFilter<"InBody"> | Date | string | null
    Adherent?: XOR<AdherentScalarRelationFilter, AdherentWhereInput>
  }

  export type InBodyOrderByWithRelationInput = {
    id?: SortOrder
    id_adherent?: SortOrder
    poids?: SortOrderInput | SortOrder
    masse_musculaire?: SortOrderInput | SortOrder
    masse_grasse?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    Adherent?: AdherentOrderByWithRelationInput
  }

  export type InBodyWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: InBodyWhereInput | InBodyWhereInput[]
    OR?: InBodyWhereInput[]
    NOT?: InBodyWhereInput | InBodyWhereInput[]
    id_adherent?: IntFilter<"InBody"> | number
    poids?: FloatNullableFilter<"InBody"> | number | null
    masse_musculaire?: FloatNullableFilter<"InBody"> | number | null
    masse_grasse?: FloatNullableFilter<"InBody"> | number | null
    score?: IntNullableFilter<"InBody"> | number | null
    date?: DateTimeNullableFilter<"InBody"> | Date | string | null
    time?: DateTimeNullableFilter<"InBody"> | Date | string | null
    Adherent?: XOR<AdherentScalarRelationFilter, AdherentWhereInput>
  }, "id">

  export type InBodyOrderByWithAggregationInput = {
    id?: SortOrder
    id_adherent?: SortOrder
    poids?: SortOrderInput | SortOrder
    masse_musculaire?: SortOrderInput | SortOrder
    masse_grasse?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    _count?: InBodyCountOrderByAggregateInput
    _avg?: InBodyAvgOrderByAggregateInput
    _max?: InBodyMaxOrderByAggregateInput
    _min?: InBodyMinOrderByAggregateInput
    _sum?: InBodySumOrderByAggregateInput
  }

  export type InBodyScalarWhereWithAggregatesInput = {
    AND?: InBodyScalarWhereWithAggregatesInput | InBodyScalarWhereWithAggregatesInput[]
    OR?: InBodyScalarWhereWithAggregatesInput[]
    NOT?: InBodyScalarWhereWithAggregatesInput | InBodyScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"InBody"> | bigint | number
    id_adherent?: IntWithAggregatesFilter<"InBody"> | number
    poids?: FloatNullableWithAggregatesFilter<"InBody"> | number | null
    masse_musculaire?: FloatNullableWithAggregatesFilter<"InBody"> | number | null
    masse_grasse?: FloatNullableWithAggregatesFilter<"InBody"> | number | null
    score?: IntNullableWithAggregatesFilter<"InBody"> | number | null
    date?: DateTimeNullableWithAggregatesFilter<"InBody"> | Date | string | null
    time?: DateTimeNullableWithAggregatesFilter<"InBody"> | Date | string | null
  }

  export type CoachWhereInput = {
    AND?: CoachWhereInput | CoachWhereInput[]
    OR?: CoachWhereInput[]
    NOT?: CoachWhereInput | CoachWhereInput[]
    id_coach?: IntFilter<"Coach"> | number
    nom?: StringNullableFilter<"Coach"> | string | null
    prenom?: StringNullableFilter<"Coach"> | string | null
    email?: StringNullableFilter<"Coach"> | string | null
    age?: IntNullableFilter<"Coach"> | number | null
    id_sport?: BigIntNullableFilter<"Coach"> | bigint | number | null
    Sport?: XOR<SportNullableScalarRelationFilter, SportWhereInput> | null
    Sport_coach?: Sport_coachListRelationFilter
  }

  export type CoachOrderByWithRelationInput = {
    id_coach?: SortOrder
    nom?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    id_sport?: SortOrderInput | SortOrder
    Sport?: SportOrderByWithRelationInput
    Sport_coach?: Sport_coachOrderByRelationAggregateInput
  }

  export type CoachWhereUniqueInput = Prisma.AtLeast<{
    id_coach?: number
    AND?: CoachWhereInput | CoachWhereInput[]
    OR?: CoachWhereInput[]
    NOT?: CoachWhereInput | CoachWhereInput[]
    nom?: StringNullableFilter<"Coach"> | string | null
    prenom?: StringNullableFilter<"Coach"> | string | null
    email?: StringNullableFilter<"Coach"> | string | null
    age?: IntNullableFilter<"Coach"> | number | null
    id_sport?: BigIntNullableFilter<"Coach"> | bigint | number | null
    Sport?: XOR<SportNullableScalarRelationFilter, SportWhereInput> | null
    Sport_coach?: Sport_coachListRelationFilter
  }, "id_coach">

  export type CoachOrderByWithAggregationInput = {
    id_coach?: SortOrder
    nom?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    id_sport?: SortOrderInput | SortOrder
    _count?: CoachCountOrderByAggregateInput
    _avg?: CoachAvgOrderByAggregateInput
    _max?: CoachMaxOrderByAggregateInput
    _min?: CoachMinOrderByAggregateInput
    _sum?: CoachSumOrderByAggregateInput
  }

  export type CoachScalarWhereWithAggregatesInput = {
    AND?: CoachScalarWhereWithAggregatesInput | CoachScalarWhereWithAggregatesInput[]
    OR?: CoachScalarWhereWithAggregatesInput[]
    NOT?: CoachScalarWhereWithAggregatesInput | CoachScalarWhereWithAggregatesInput[]
    id_coach?: IntWithAggregatesFilter<"Coach"> | number
    nom?: StringNullableWithAggregatesFilter<"Coach"> | string | null
    prenom?: StringNullableWithAggregatesFilter<"Coach"> | string | null
    email?: StringNullableWithAggregatesFilter<"Coach"> | string | null
    age?: IntNullableWithAggregatesFilter<"Coach"> | number | null
    id_sport?: BigIntNullableWithAggregatesFilter<"Coach"> | bigint | number | null
  }

  export type Sport_coachWhereInput = {
    AND?: Sport_coachWhereInput | Sport_coachWhereInput[]
    OR?: Sport_coachWhereInput[]
    NOT?: Sport_coachWhereInput | Sport_coachWhereInput[]
    id_coaching?: BigIntFilter<"Sport_coach"> | bigint | number
    id_coach?: IntFilter<"Sport_coach"> | number
    id_sport?: BigIntNullableFilter<"Sport_coach"> | bigint | number | null
    Coach?: XOR<CoachScalarRelationFilter, CoachWhereInput>
    Sport?: XOR<SportNullableScalarRelationFilter, SportWhereInput> | null
  }

  export type Sport_coachOrderByWithRelationInput = {
    id_coaching?: SortOrder
    id_coach?: SortOrder
    id_sport?: SortOrderInput | SortOrder
    Coach?: CoachOrderByWithRelationInput
    Sport?: SportOrderByWithRelationInput
  }

  export type Sport_coachWhereUniqueInput = Prisma.AtLeast<{
    id_coaching?: bigint | number
    AND?: Sport_coachWhereInput | Sport_coachWhereInput[]
    OR?: Sport_coachWhereInput[]
    NOT?: Sport_coachWhereInput | Sport_coachWhereInput[]
    id_coach?: IntFilter<"Sport_coach"> | number
    id_sport?: BigIntNullableFilter<"Sport_coach"> | bigint | number | null
    Coach?: XOR<CoachScalarRelationFilter, CoachWhereInput>
    Sport?: XOR<SportNullableScalarRelationFilter, SportWhereInput> | null
  }, "id_coaching">

  export type Sport_coachOrderByWithAggregationInput = {
    id_coaching?: SortOrder
    id_coach?: SortOrder
    id_sport?: SortOrderInput | SortOrder
    _count?: Sport_coachCountOrderByAggregateInput
    _avg?: Sport_coachAvgOrderByAggregateInput
    _max?: Sport_coachMaxOrderByAggregateInput
    _min?: Sport_coachMinOrderByAggregateInput
    _sum?: Sport_coachSumOrderByAggregateInput
  }

  export type Sport_coachScalarWhereWithAggregatesInput = {
    AND?: Sport_coachScalarWhereWithAggregatesInput | Sport_coachScalarWhereWithAggregatesInput[]
    OR?: Sport_coachScalarWhereWithAggregatesInput[]
    NOT?: Sport_coachScalarWhereWithAggregatesInput | Sport_coachScalarWhereWithAggregatesInput[]
    id_coaching?: BigIntWithAggregatesFilter<"Sport_coach"> | bigint | number
    id_coach?: IntWithAggregatesFilter<"Sport_coach"> | number
    id_sport?: BigIntNullableWithAggregatesFilter<"Sport_coach"> | bigint | number | null
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
    next_adherent_inbody_rdv?: Date | string | null
    payment_status?: string | null
    inscription_status?: string | null
    Adherent_sport?: Adherent_sportCreateNestedManyWithoutAdherentInput
    Diet?: DietCreateNestedManyWithoutAdherentInput
    InBody?: InBodyCreateNestedManyWithoutAdherentInput
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
    next_adherent_inbody_rdv?: Date | string | null
    payment_status?: string | null
    inscription_status?: string | null
    Adherent_sport?: Adherent_sportUncheckedCreateNestedManyWithoutAdherentInput
    Diet?: DietUncheckedCreateNestedManyWithoutAdherentInput
    InBody?: InBodyUncheckedCreateNestedManyWithoutAdherentInput
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
    next_adherent_inbody_rdv?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    inscription_status?: NullableStringFieldUpdateOperationsInput | string | null
    Adherent_sport?: Adherent_sportUpdateManyWithoutAdherentNestedInput
    Diet?: DietUpdateManyWithoutAdherentNestedInput
    InBody?: InBodyUpdateManyWithoutAdherentNestedInput
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
    next_adherent_inbody_rdv?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    inscription_status?: NullableStringFieldUpdateOperationsInput | string | null
    Adherent_sport?: Adherent_sportUncheckedUpdateManyWithoutAdherentNestedInput
    Diet?: DietUncheckedUpdateManyWithoutAdherentNestedInput
    InBody?: InBodyUncheckedUpdateManyWithoutAdherentNestedInput
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
    next_adherent_inbody_rdv?: Date | string | null
    payment_status?: string | null
    inscription_status?: string | null
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
    next_adherent_inbody_rdv?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    inscription_status?: NullableStringFieldUpdateOperationsInput | string | null
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
    next_adherent_inbody_rdv?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    inscription_status?: NullableStringFieldUpdateOperationsInput | string | null
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
    Adherent_sport?: Adherent_sportCreateNestedManyWithoutSportInput
    Coach?: CoachCreateNestedManyWithoutSportInput
    Sport_coach?: Sport_coachCreateNestedManyWithoutSportInput
    sessions?: SportSessionCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateInput = {
    id_sport?: bigint | number
    Name: string
    Adherent_sport?: Adherent_sportUncheckedCreateNestedManyWithoutSportInput
    Coach?: CoachUncheckedCreateNestedManyWithoutSportInput
    Sport_coach?: Sport_coachUncheckedCreateNestedManyWithoutSportInput
    sessions?: SportSessionUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportUpdateInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Adherent_sport?: Adherent_sportUpdateManyWithoutSportNestedInput
    Coach?: CoachUpdateManyWithoutSportNestedInput
    Sport_coach?: Sport_coachUpdateManyWithoutSportNestedInput
    sessions?: SportSessionUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Adherent_sport?: Adherent_sportUncheckedUpdateManyWithoutSportNestedInput
    Coach?: CoachUncheckedUpdateManyWithoutSportNestedInput
    Sport_coach?: Sport_coachUncheckedUpdateManyWithoutSportNestedInput
    sessions?: SportSessionUncheckedUpdateManyWithoutSportNestedInput
  }

  export type SportCreateManyInput = {
    id_sport?: bigint | number
    Name: string
  }

  export type SportUpdateManyMutationInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type SportUncheckedUpdateManyInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type SportSessionCreateInput = {
    date?: Date | string | null
    starting_time?: Date | string | null
    ending_time?: Date | string | null
    group_name?: string | null
    Sport: SportCreateNestedOneWithoutSessionsInput
  }

  export type SportSessionUncheckedCreateInput = {
    id?: number
    sport_id: bigint | number
    date?: Date | string | null
    starting_time?: Date | string | null
    ending_time?: Date | string | null
    group_name?: string | null
  }

  export type SportSessionUpdateInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    starting_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ending_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group_name?: NullableStringFieldUpdateOperationsInput | string | null
    Sport?: SportUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SportSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sport_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    starting_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ending_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportSessionCreateManyInput = {
    id?: number
    sport_id: bigint | number
    date?: Date | string | null
    starting_time?: Date | string | null
    ending_time?: Date | string | null
    group_name?: string | null
  }

  export type SportSessionUpdateManyMutationInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    starting_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ending_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sport_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    starting_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ending_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DietCreateInput = {
    id?: bigint | number
    meal_type?: string | null
    Date?: Date | string | null
    Adherent: AdherentCreateNestedOneWithoutDietInput
    food?: foodCreateNestedOneWithoutDietInput
  }

  export type DietUncheckedCreateInput = {
    id?: bigint | number
    id_adherent: number
    id_food?: number | null
    meal_type?: string | null
    Date?: Date | string | null
  }

  export type DietUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    meal_type?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Adherent?: AdherentUpdateOneRequiredWithoutDietNestedInput
    food?: foodUpdateOneWithoutDietNestedInput
  }

  export type DietUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_adherent?: IntFieldUpdateOperationsInput | number
    id_food?: NullableIntFieldUpdateOperationsInput | number | null
    meal_type?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DietCreateManyInput = {
    id?: bigint | number
    id_adherent: number
    id_food?: number | null
    meal_type?: string | null
    Date?: Date | string | null
  }

  export type DietUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    meal_type?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DietUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_adherent?: IntFieldUpdateOperationsInput | number
    id_food?: NullableIntFieldUpdateOperationsInput | number | null
    meal_type?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type foodCreateInput = {
    name: string
    calories: number
    fat: Decimal | DecimalJsLike | number | string
    carbs: Decimal | DecimalJsLike | number | string
    protein: Decimal | DecimalJsLike | number | string
    Diet?: DietCreateNestedManyWithoutFoodInput
  }

  export type foodUncheckedCreateInput = {
    id_food?: number
    name: string
    calories: number
    fat: Decimal | DecimalJsLike | number | string
    carbs: Decimal | DecimalJsLike | number | string
    protein: Decimal | DecimalJsLike | number | string
    Diet?: DietUncheckedCreateNestedManyWithoutFoodInput
  }

  export type foodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    fat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carbs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    protein?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Diet?: DietUpdateManyWithoutFoodNestedInput
  }

  export type foodUncheckedUpdateInput = {
    id_food?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    fat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carbs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    protein?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Diet?: DietUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type foodCreateManyInput = {
    id_food?: number
    name: string
    calories: number
    fat: Decimal | DecimalJsLike | number | string
    carbs: Decimal | DecimalJsLike | number | string
    protein: Decimal | DecimalJsLike | number | string
  }

  export type foodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    fat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carbs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    protein?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type foodUncheckedUpdateManyInput = {
    id_food?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    fat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carbs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    protein?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type InBodyCreateInput = {
    id?: bigint | number
    poids?: number | null
    masse_musculaire?: number | null
    masse_grasse?: number | null
    score?: number | null
    date?: Date | string | null
    time?: Date | string | null
    Adherent: AdherentCreateNestedOneWithoutInBodyInput
  }

  export type InBodyUncheckedCreateInput = {
    id?: bigint | number
    id_adherent: number
    poids?: number | null
    masse_musculaire?: number | null
    masse_grasse?: number | null
    score?: number | null
    date?: Date | string | null
    time?: Date | string | null
  }

  export type InBodyUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    poids?: NullableFloatFieldUpdateOperationsInput | number | null
    masse_musculaire?: NullableFloatFieldUpdateOperationsInput | number | null
    masse_grasse?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Adherent?: AdherentUpdateOneRequiredWithoutInBodyNestedInput
  }

  export type InBodyUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_adherent?: IntFieldUpdateOperationsInput | number
    poids?: NullableFloatFieldUpdateOperationsInput | number | null
    masse_musculaire?: NullableFloatFieldUpdateOperationsInput | number | null
    masse_grasse?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InBodyCreateManyInput = {
    id?: bigint | number
    id_adherent: number
    poids?: number | null
    masse_musculaire?: number | null
    masse_grasse?: number | null
    score?: number | null
    date?: Date | string | null
    time?: Date | string | null
  }

  export type InBodyUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    poids?: NullableFloatFieldUpdateOperationsInput | number | null
    masse_musculaire?: NullableFloatFieldUpdateOperationsInput | number | null
    masse_grasse?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InBodyUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_adherent?: IntFieldUpdateOperationsInput | number
    poids?: NullableFloatFieldUpdateOperationsInput | number | null
    masse_musculaire?: NullableFloatFieldUpdateOperationsInput | number | null
    masse_grasse?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CoachCreateInput = {
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    Sport?: SportCreateNestedOneWithoutCoachInput
    Sport_coach?: Sport_coachCreateNestedManyWithoutCoachInput
  }

  export type CoachUncheckedCreateInput = {
    id_coach?: number
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    id_sport?: bigint | number | null
    Sport_coach?: Sport_coachUncheckedCreateNestedManyWithoutCoachInput
  }

  export type CoachUpdateInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    Sport?: SportUpdateOneWithoutCoachNestedInput
    Sport_coach?: Sport_coachUpdateManyWithoutCoachNestedInput
  }

  export type CoachUncheckedUpdateInput = {
    id_coach?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    id_sport?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Sport_coach?: Sport_coachUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type CoachCreateManyInput = {
    id_coach?: number
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    id_sport?: bigint | number | null
  }

  export type CoachUpdateManyMutationInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CoachUncheckedUpdateManyInput = {
    id_coach?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    id_sport?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type Sport_coachCreateInput = {
    id_coaching?: bigint | number
    Coach: CoachCreateNestedOneWithoutSport_coachInput
    Sport?: SportCreateNestedOneWithoutSport_coachInput
  }

  export type Sport_coachUncheckedCreateInput = {
    id_coaching?: bigint | number
    id_coach: number
    id_sport?: bigint | number | null
  }

  export type Sport_coachUpdateInput = {
    id_coaching?: BigIntFieldUpdateOperationsInput | bigint | number
    Coach?: CoachUpdateOneRequiredWithoutSport_coachNestedInput
    Sport?: SportUpdateOneWithoutSport_coachNestedInput
  }

  export type Sport_coachUncheckedUpdateInput = {
    id_coaching?: BigIntFieldUpdateOperationsInput | bigint | number
    id_coach?: IntFieldUpdateOperationsInput | number
    id_sport?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type Sport_coachCreateManyInput = {
    id_coaching?: bigint | number
    id_coach: number
    id_sport?: bigint | number | null
  }

  export type Sport_coachUpdateManyMutationInput = {
    id_coaching?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Sport_coachUncheckedUpdateManyInput = {
    id_coaching?: BigIntFieldUpdateOperationsInput | bigint | number
    id_coach?: IntFieldUpdateOperationsInput | number
    id_sport?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
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

  export type Adherent_sportListRelationFilter = {
    every?: Adherent_sportWhereInput
    some?: Adherent_sportWhereInput
    none?: Adherent_sportWhereInput
  }

  export type DietListRelationFilter = {
    every?: DietWhereInput
    some?: DietWhereInput
    none?: DietWhereInput
  }

  export type InBodyListRelationFilter = {
    every?: InBodyWhereInput
    some?: InBodyWhereInput
    none?: InBodyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Adherent_sportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DietOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InBodyOrderByRelationAggregateInput = {
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
    next_adherent_inbody_rdv?: SortOrder
    payment_status?: SortOrder
    inscription_status?: SortOrder
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
    next_adherent_inbody_rdv?: SortOrder
    payment_status?: SortOrder
    inscription_status?: SortOrder
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
    next_adherent_inbody_rdv?: SortOrder
    payment_status?: SortOrder
    inscription_status?: SortOrder
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

  export type CoachListRelationFilter = {
    every?: CoachWhereInput
    some?: CoachWhereInput
    none?: CoachWhereInput
  }

  export type Sport_coachListRelationFilter = {
    every?: Sport_coachWhereInput
    some?: Sport_coachWhereInput
    none?: Sport_coachWhereInput
  }

  export type SportSessionListRelationFilter = {
    every?: SportSessionWhereInput
    some?: SportSessionWhereInput
    none?: SportSessionWhereInput
  }

  export type CoachOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Sport_coachOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SportSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SportCountOrderByAggregateInput = {
    id_sport?: SortOrder
    Name?: SortOrder
  }

  export type SportAvgOrderByAggregateInput = {
    id_sport?: SortOrder
  }

  export type SportMaxOrderByAggregateInput = {
    id_sport?: SortOrder
    Name?: SortOrder
  }

  export type SportMinOrderByAggregateInput = {
    id_sport?: SortOrder
    Name?: SortOrder
  }

  export type SportSumOrderByAggregateInput = {
    id_sport?: SortOrder
  }

  export type SportSessionCountOrderByAggregateInput = {
    id?: SortOrder
    sport_id?: SortOrder
    date?: SortOrder
    starting_time?: SortOrder
    ending_time?: SortOrder
    group_name?: SortOrder
  }

  export type SportSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    sport_id?: SortOrder
  }

  export type SportSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sport_id?: SortOrder
    date?: SortOrder
    starting_time?: SortOrder
    ending_time?: SortOrder
    group_name?: SortOrder
  }

  export type SportSessionMinOrderByAggregateInput = {
    id?: SortOrder
    sport_id?: SortOrder
    date?: SortOrder
    starting_time?: SortOrder
    ending_time?: SortOrder
    group_name?: SortOrder
  }

  export type SportSessionSumOrderByAggregateInput = {
    id?: SortOrder
    sport_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FoodNullableScalarRelationFilter = {
    is?: foodWhereInput | null
    isNot?: foodWhereInput | null
  }

  export type DietCountOrderByAggregateInput = {
    id?: SortOrder
    id_adherent?: SortOrder
    id_food?: SortOrder
    meal_type?: SortOrder
    Date?: SortOrder
  }

  export type DietAvgOrderByAggregateInput = {
    id?: SortOrder
    id_adherent?: SortOrder
    id_food?: SortOrder
  }

  export type DietMaxOrderByAggregateInput = {
    id?: SortOrder
    id_adherent?: SortOrder
    id_food?: SortOrder
    meal_type?: SortOrder
    Date?: SortOrder
  }

  export type DietMinOrderByAggregateInput = {
    id?: SortOrder
    id_adherent?: SortOrder
    id_food?: SortOrder
    meal_type?: SortOrder
    Date?: SortOrder
  }

  export type DietSumOrderByAggregateInput = {
    id?: SortOrder
    id_adherent?: SortOrder
    id_food?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type foodCountOrderByAggregateInput = {
    id_food?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
  }

  export type foodAvgOrderByAggregateInput = {
    id_food?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
  }

  export type foodMaxOrderByAggregateInput = {
    id_food?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
  }

  export type foodMinOrderByAggregateInput = {
    id_food?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
  }

  export type foodSumOrderByAggregateInput = {
    id_food?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type InBodyCountOrderByAggregateInput = {
    id?: SortOrder
    id_adherent?: SortOrder
    poids?: SortOrder
    masse_musculaire?: SortOrder
    masse_grasse?: SortOrder
    score?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type InBodyAvgOrderByAggregateInput = {
    id?: SortOrder
    id_adherent?: SortOrder
    poids?: SortOrder
    masse_musculaire?: SortOrder
    masse_grasse?: SortOrder
    score?: SortOrder
  }

  export type InBodyMaxOrderByAggregateInput = {
    id?: SortOrder
    id_adherent?: SortOrder
    poids?: SortOrder
    masse_musculaire?: SortOrder
    masse_grasse?: SortOrder
    score?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type InBodyMinOrderByAggregateInput = {
    id?: SortOrder
    id_adherent?: SortOrder
    poids?: SortOrder
    masse_musculaire?: SortOrder
    masse_grasse?: SortOrder
    score?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type InBodySumOrderByAggregateInput = {
    id?: SortOrder
    id_adherent?: SortOrder
    poids?: SortOrder
    masse_musculaire?: SortOrder
    masse_grasse?: SortOrder
    score?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type SportNullableScalarRelationFilter = {
    is?: SportWhereInput | null
    isNot?: SportWhereInput | null
  }

  export type CoachCountOrderByAggregateInput = {
    id_coach?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    age?: SortOrder
    id_sport?: SortOrder
  }

  export type CoachAvgOrderByAggregateInput = {
    id_coach?: SortOrder
    age?: SortOrder
    id_sport?: SortOrder
  }

  export type CoachMaxOrderByAggregateInput = {
    id_coach?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    age?: SortOrder
    id_sport?: SortOrder
  }

  export type CoachMinOrderByAggregateInput = {
    id_coach?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    age?: SortOrder
    id_sport?: SortOrder
  }

  export type CoachSumOrderByAggregateInput = {
    id_coach?: SortOrder
    age?: SortOrder
    id_sport?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
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

  export type CoachScalarRelationFilter = {
    is?: CoachWhereInput
    isNot?: CoachWhereInput
  }

  export type Sport_coachCountOrderByAggregateInput = {
    id_coaching?: SortOrder
    id_coach?: SortOrder
    id_sport?: SortOrder
  }

  export type Sport_coachAvgOrderByAggregateInput = {
    id_coaching?: SortOrder
    id_coach?: SortOrder
    id_sport?: SortOrder
  }

  export type Sport_coachMaxOrderByAggregateInput = {
    id_coaching?: SortOrder
    id_coach?: SortOrder
    id_sport?: SortOrder
  }

  export type Sport_coachMinOrderByAggregateInput = {
    id_coaching?: SortOrder
    id_coach?: SortOrder
    id_sport?: SortOrder
  }

  export type Sport_coachSumOrderByAggregateInput = {
    id_coaching?: SortOrder
    id_coach?: SortOrder
    id_sport?: SortOrder
  }

  export type Adherent_sportCreateNestedManyWithoutAdherentInput = {
    create?: XOR<Adherent_sportCreateWithoutAdherentInput, Adherent_sportUncheckedCreateWithoutAdherentInput> | Adherent_sportCreateWithoutAdherentInput[] | Adherent_sportUncheckedCreateWithoutAdherentInput[]
    connectOrCreate?: Adherent_sportCreateOrConnectWithoutAdherentInput | Adherent_sportCreateOrConnectWithoutAdherentInput[]
    createMany?: Adherent_sportCreateManyAdherentInputEnvelope
    connect?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
  }

  export type DietCreateNestedManyWithoutAdherentInput = {
    create?: XOR<DietCreateWithoutAdherentInput, DietUncheckedCreateWithoutAdherentInput> | DietCreateWithoutAdherentInput[] | DietUncheckedCreateWithoutAdherentInput[]
    connectOrCreate?: DietCreateOrConnectWithoutAdherentInput | DietCreateOrConnectWithoutAdherentInput[]
    createMany?: DietCreateManyAdherentInputEnvelope
    connect?: DietWhereUniqueInput | DietWhereUniqueInput[]
  }

  export type InBodyCreateNestedManyWithoutAdherentInput = {
    create?: XOR<InBodyCreateWithoutAdherentInput, InBodyUncheckedCreateWithoutAdherentInput> | InBodyCreateWithoutAdherentInput[] | InBodyUncheckedCreateWithoutAdherentInput[]
    connectOrCreate?: InBodyCreateOrConnectWithoutAdherentInput | InBodyCreateOrConnectWithoutAdherentInput[]
    createMany?: InBodyCreateManyAdherentInputEnvelope
    connect?: InBodyWhereUniqueInput | InBodyWhereUniqueInput[]
  }

  export type Adherent_sportUncheckedCreateNestedManyWithoutAdherentInput = {
    create?: XOR<Adherent_sportCreateWithoutAdherentInput, Adherent_sportUncheckedCreateWithoutAdherentInput> | Adherent_sportCreateWithoutAdherentInput[] | Adherent_sportUncheckedCreateWithoutAdherentInput[]
    connectOrCreate?: Adherent_sportCreateOrConnectWithoutAdherentInput | Adherent_sportCreateOrConnectWithoutAdherentInput[]
    createMany?: Adherent_sportCreateManyAdherentInputEnvelope
    connect?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
  }

  export type DietUncheckedCreateNestedManyWithoutAdherentInput = {
    create?: XOR<DietCreateWithoutAdherentInput, DietUncheckedCreateWithoutAdherentInput> | DietCreateWithoutAdherentInput[] | DietUncheckedCreateWithoutAdherentInput[]
    connectOrCreate?: DietCreateOrConnectWithoutAdherentInput | DietCreateOrConnectWithoutAdherentInput[]
    createMany?: DietCreateManyAdherentInputEnvelope
    connect?: DietWhereUniqueInput | DietWhereUniqueInput[]
  }

  export type InBodyUncheckedCreateNestedManyWithoutAdherentInput = {
    create?: XOR<InBodyCreateWithoutAdherentInput, InBodyUncheckedCreateWithoutAdherentInput> | InBodyCreateWithoutAdherentInput[] | InBodyUncheckedCreateWithoutAdherentInput[]
    connectOrCreate?: InBodyCreateOrConnectWithoutAdherentInput | InBodyCreateOrConnectWithoutAdherentInput[]
    createMany?: InBodyCreateManyAdherentInputEnvelope
    connect?: InBodyWhereUniqueInput | InBodyWhereUniqueInput[]
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type DietUpdateManyWithoutAdherentNestedInput = {
    create?: XOR<DietCreateWithoutAdherentInput, DietUncheckedCreateWithoutAdherentInput> | DietCreateWithoutAdherentInput[] | DietUncheckedCreateWithoutAdherentInput[]
    connectOrCreate?: DietCreateOrConnectWithoutAdherentInput | DietCreateOrConnectWithoutAdherentInput[]
    upsert?: DietUpsertWithWhereUniqueWithoutAdherentInput | DietUpsertWithWhereUniqueWithoutAdherentInput[]
    createMany?: DietCreateManyAdherentInputEnvelope
    set?: DietWhereUniqueInput | DietWhereUniqueInput[]
    disconnect?: DietWhereUniqueInput | DietWhereUniqueInput[]
    delete?: DietWhereUniqueInput | DietWhereUniqueInput[]
    connect?: DietWhereUniqueInput | DietWhereUniqueInput[]
    update?: DietUpdateWithWhereUniqueWithoutAdherentInput | DietUpdateWithWhereUniqueWithoutAdherentInput[]
    updateMany?: DietUpdateManyWithWhereWithoutAdherentInput | DietUpdateManyWithWhereWithoutAdherentInput[]
    deleteMany?: DietScalarWhereInput | DietScalarWhereInput[]
  }

  export type InBodyUpdateManyWithoutAdherentNestedInput = {
    create?: XOR<InBodyCreateWithoutAdherentInput, InBodyUncheckedCreateWithoutAdherentInput> | InBodyCreateWithoutAdherentInput[] | InBodyUncheckedCreateWithoutAdherentInput[]
    connectOrCreate?: InBodyCreateOrConnectWithoutAdherentInput | InBodyCreateOrConnectWithoutAdherentInput[]
    upsert?: InBodyUpsertWithWhereUniqueWithoutAdherentInput | InBodyUpsertWithWhereUniqueWithoutAdherentInput[]
    createMany?: InBodyCreateManyAdherentInputEnvelope
    set?: InBodyWhereUniqueInput | InBodyWhereUniqueInput[]
    disconnect?: InBodyWhereUniqueInput | InBodyWhereUniqueInput[]
    delete?: InBodyWhereUniqueInput | InBodyWhereUniqueInput[]
    connect?: InBodyWhereUniqueInput | InBodyWhereUniqueInput[]
    update?: InBodyUpdateWithWhereUniqueWithoutAdherentInput | InBodyUpdateWithWhereUniqueWithoutAdherentInput[]
    updateMany?: InBodyUpdateManyWithWhereWithoutAdherentInput | InBodyUpdateManyWithWhereWithoutAdherentInput[]
    deleteMany?: InBodyScalarWhereInput | InBodyScalarWhereInput[]
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

  export type DietUncheckedUpdateManyWithoutAdherentNestedInput = {
    create?: XOR<DietCreateWithoutAdherentInput, DietUncheckedCreateWithoutAdherentInput> | DietCreateWithoutAdherentInput[] | DietUncheckedCreateWithoutAdherentInput[]
    connectOrCreate?: DietCreateOrConnectWithoutAdherentInput | DietCreateOrConnectWithoutAdherentInput[]
    upsert?: DietUpsertWithWhereUniqueWithoutAdherentInput | DietUpsertWithWhereUniqueWithoutAdherentInput[]
    createMany?: DietCreateManyAdherentInputEnvelope
    set?: DietWhereUniqueInput | DietWhereUniqueInput[]
    disconnect?: DietWhereUniqueInput | DietWhereUniqueInput[]
    delete?: DietWhereUniqueInput | DietWhereUniqueInput[]
    connect?: DietWhereUniqueInput | DietWhereUniqueInput[]
    update?: DietUpdateWithWhereUniqueWithoutAdherentInput | DietUpdateWithWhereUniqueWithoutAdherentInput[]
    updateMany?: DietUpdateManyWithWhereWithoutAdherentInput | DietUpdateManyWithWhereWithoutAdherentInput[]
    deleteMany?: DietScalarWhereInput | DietScalarWhereInput[]
  }

  export type InBodyUncheckedUpdateManyWithoutAdherentNestedInput = {
    create?: XOR<InBodyCreateWithoutAdherentInput, InBodyUncheckedCreateWithoutAdherentInput> | InBodyCreateWithoutAdherentInput[] | InBodyUncheckedCreateWithoutAdherentInput[]
    connectOrCreate?: InBodyCreateOrConnectWithoutAdherentInput | InBodyCreateOrConnectWithoutAdherentInput[]
    upsert?: InBodyUpsertWithWhereUniqueWithoutAdherentInput | InBodyUpsertWithWhereUniqueWithoutAdherentInput[]
    createMany?: InBodyCreateManyAdherentInputEnvelope
    set?: InBodyWhereUniqueInput | InBodyWhereUniqueInput[]
    disconnect?: InBodyWhereUniqueInput | InBodyWhereUniqueInput[]
    delete?: InBodyWhereUniqueInput | InBodyWhereUniqueInput[]
    connect?: InBodyWhereUniqueInput | InBodyWhereUniqueInput[]
    update?: InBodyUpdateWithWhereUniqueWithoutAdherentInput | InBodyUpdateWithWhereUniqueWithoutAdherentInput[]
    updateMany?: InBodyUpdateManyWithWhereWithoutAdherentInput | InBodyUpdateManyWithWhereWithoutAdherentInput[]
    deleteMany?: InBodyScalarWhereInput | InBodyScalarWhereInput[]
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

  export type CoachCreateNestedManyWithoutSportInput = {
    create?: XOR<CoachCreateWithoutSportInput, CoachUncheckedCreateWithoutSportInput> | CoachCreateWithoutSportInput[] | CoachUncheckedCreateWithoutSportInput[]
    connectOrCreate?: CoachCreateOrConnectWithoutSportInput | CoachCreateOrConnectWithoutSportInput[]
    createMany?: CoachCreateManySportInputEnvelope
    connect?: CoachWhereUniqueInput | CoachWhereUniqueInput[]
  }

  export type Sport_coachCreateNestedManyWithoutSportInput = {
    create?: XOR<Sport_coachCreateWithoutSportInput, Sport_coachUncheckedCreateWithoutSportInput> | Sport_coachCreateWithoutSportInput[] | Sport_coachUncheckedCreateWithoutSportInput[]
    connectOrCreate?: Sport_coachCreateOrConnectWithoutSportInput | Sport_coachCreateOrConnectWithoutSportInput[]
    createMany?: Sport_coachCreateManySportInputEnvelope
    connect?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
  }

  export type SportSessionCreateNestedManyWithoutSportInput = {
    create?: XOR<SportSessionCreateWithoutSportInput, SportSessionUncheckedCreateWithoutSportInput> | SportSessionCreateWithoutSportInput[] | SportSessionUncheckedCreateWithoutSportInput[]
    connectOrCreate?: SportSessionCreateOrConnectWithoutSportInput | SportSessionCreateOrConnectWithoutSportInput[]
    createMany?: SportSessionCreateManySportInputEnvelope
    connect?: SportSessionWhereUniqueInput | SportSessionWhereUniqueInput[]
  }

  export type Adherent_sportUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<Adherent_sportCreateWithoutSportInput, Adherent_sportUncheckedCreateWithoutSportInput> | Adherent_sportCreateWithoutSportInput[] | Adherent_sportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: Adherent_sportCreateOrConnectWithoutSportInput | Adherent_sportCreateOrConnectWithoutSportInput[]
    createMany?: Adherent_sportCreateManySportInputEnvelope
    connect?: Adherent_sportWhereUniqueInput | Adherent_sportWhereUniqueInput[]
  }

  export type CoachUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<CoachCreateWithoutSportInput, CoachUncheckedCreateWithoutSportInput> | CoachCreateWithoutSportInput[] | CoachUncheckedCreateWithoutSportInput[]
    connectOrCreate?: CoachCreateOrConnectWithoutSportInput | CoachCreateOrConnectWithoutSportInput[]
    createMany?: CoachCreateManySportInputEnvelope
    connect?: CoachWhereUniqueInput | CoachWhereUniqueInput[]
  }

  export type Sport_coachUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<Sport_coachCreateWithoutSportInput, Sport_coachUncheckedCreateWithoutSportInput> | Sport_coachCreateWithoutSportInput[] | Sport_coachUncheckedCreateWithoutSportInput[]
    connectOrCreate?: Sport_coachCreateOrConnectWithoutSportInput | Sport_coachCreateOrConnectWithoutSportInput[]
    createMany?: Sport_coachCreateManySportInputEnvelope
    connect?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
  }

  export type SportSessionUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<SportSessionCreateWithoutSportInput, SportSessionUncheckedCreateWithoutSportInput> | SportSessionCreateWithoutSportInput[] | SportSessionUncheckedCreateWithoutSportInput[]
    connectOrCreate?: SportSessionCreateOrConnectWithoutSportInput | SportSessionCreateOrConnectWithoutSportInput[]
    createMany?: SportSessionCreateManySportInputEnvelope
    connect?: SportSessionWhereUniqueInput | SportSessionWhereUniqueInput[]
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

  export type CoachUpdateManyWithoutSportNestedInput = {
    create?: XOR<CoachCreateWithoutSportInput, CoachUncheckedCreateWithoutSportInput> | CoachCreateWithoutSportInput[] | CoachUncheckedCreateWithoutSportInput[]
    connectOrCreate?: CoachCreateOrConnectWithoutSportInput | CoachCreateOrConnectWithoutSportInput[]
    upsert?: CoachUpsertWithWhereUniqueWithoutSportInput | CoachUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: CoachCreateManySportInputEnvelope
    set?: CoachWhereUniqueInput | CoachWhereUniqueInput[]
    disconnect?: CoachWhereUniqueInput | CoachWhereUniqueInput[]
    delete?: CoachWhereUniqueInput | CoachWhereUniqueInput[]
    connect?: CoachWhereUniqueInput | CoachWhereUniqueInput[]
    update?: CoachUpdateWithWhereUniqueWithoutSportInput | CoachUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: CoachUpdateManyWithWhereWithoutSportInput | CoachUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: CoachScalarWhereInput | CoachScalarWhereInput[]
  }

  export type Sport_coachUpdateManyWithoutSportNestedInput = {
    create?: XOR<Sport_coachCreateWithoutSportInput, Sport_coachUncheckedCreateWithoutSportInput> | Sport_coachCreateWithoutSportInput[] | Sport_coachUncheckedCreateWithoutSportInput[]
    connectOrCreate?: Sport_coachCreateOrConnectWithoutSportInput | Sport_coachCreateOrConnectWithoutSportInput[]
    upsert?: Sport_coachUpsertWithWhereUniqueWithoutSportInput | Sport_coachUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: Sport_coachCreateManySportInputEnvelope
    set?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
    disconnect?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
    delete?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
    connect?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
    update?: Sport_coachUpdateWithWhereUniqueWithoutSportInput | Sport_coachUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: Sport_coachUpdateManyWithWhereWithoutSportInput | Sport_coachUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: Sport_coachScalarWhereInput | Sport_coachScalarWhereInput[]
  }

  export type SportSessionUpdateManyWithoutSportNestedInput = {
    create?: XOR<SportSessionCreateWithoutSportInput, SportSessionUncheckedCreateWithoutSportInput> | SportSessionCreateWithoutSportInput[] | SportSessionUncheckedCreateWithoutSportInput[]
    connectOrCreate?: SportSessionCreateOrConnectWithoutSportInput | SportSessionCreateOrConnectWithoutSportInput[]
    upsert?: SportSessionUpsertWithWhereUniqueWithoutSportInput | SportSessionUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: SportSessionCreateManySportInputEnvelope
    set?: SportSessionWhereUniqueInput | SportSessionWhereUniqueInput[]
    disconnect?: SportSessionWhereUniqueInput | SportSessionWhereUniqueInput[]
    delete?: SportSessionWhereUniqueInput | SportSessionWhereUniqueInput[]
    connect?: SportSessionWhereUniqueInput | SportSessionWhereUniqueInput[]
    update?: SportSessionUpdateWithWhereUniqueWithoutSportInput | SportSessionUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: SportSessionUpdateManyWithWhereWithoutSportInput | SportSessionUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: SportSessionScalarWhereInput | SportSessionScalarWhereInput[]
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

  export type CoachUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<CoachCreateWithoutSportInput, CoachUncheckedCreateWithoutSportInput> | CoachCreateWithoutSportInput[] | CoachUncheckedCreateWithoutSportInput[]
    connectOrCreate?: CoachCreateOrConnectWithoutSportInput | CoachCreateOrConnectWithoutSportInput[]
    upsert?: CoachUpsertWithWhereUniqueWithoutSportInput | CoachUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: CoachCreateManySportInputEnvelope
    set?: CoachWhereUniqueInput | CoachWhereUniqueInput[]
    disconnect?: CoachWhereUniqueInput | CoachWhereUniqueInput[]
    delete?: CoachWhereUniqueInput | CoachWhereUniqueInput[]
    connect?: CoachWhereUniqueInput | CoachWhereUniqueInput[]
    update?: CoachUpdateWithWhereUniqueWithoutSportInput | CoachUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: CoachUpdateManyWithWhereWithoutSportInput | CoachUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: CoachScalarWhereInput | CoachScalarWhereInput[]
  }

  export type Sport_coachUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<Sport_coachCreateWithoutSportInput, Sport_coachUncheckedCreateWithoutSportInput> | Sport_coachCreateWithoutSportInput[] | Sport_coachUncheckedCreateWithoutSportInput[]
    connectOrCreate?: Sport_coachCreateOrConnectWithoutSportInput | Sport_coachCreateOrConnectWithoutSportInput[]
    upsert?: Sport_coachUpsertWithWhereUniqueWithoutSportInput | Sport_coachUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: Sport_coachCreateManySportInputEnvelope
    set?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
    disconnect?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
    delete?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
    connect?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
    update?: Sport_coachUpdateWithWhereUniqueWithoutSportInput | Sport_coachUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: Sport_coachUpdateManyWithWhereWithoutSportInput | Sport_coachUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: Sport_coachScalarWhereInput | Sport_coachScalarWhereInput[]
  }

  export type SportSessionUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<SportSessionCreateWithoutSportInput, SportSessionUncheckedCreateWithoutSportInput> | SportSessionCreateWithoutSportInput[] | SportSessionUncheckedCreateWithoutSportInput[]
    connectOrCreate?: SportSessionCreateOrConnectWithoutSportInput | SportSessionCreateOrConnectWithoutSportInput[]
    upsert?: SportSessionUpsertWithWhereUniqueWithoutSportInput | SportSessionUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: SportSessionCreateManySportInputEnvelope
    set?: SportSessionWhereUniqueInput | SportSessionWhereUniqueInput[]
    disconnect?: SportSessionWhereUniqueInput | SportSessionWhereUniqueInput[]
    delete?: SportSessionWhereUniqueInput | SportSessionWhereUniqueInput[]
    connect?: SportSessionWhereUniqueInput | SportSessionWhereUniqueInput[]
    update?: SportSessionUpdateWithWhereUniqueWithoutSportInput | SportSessionUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: SportSessionUpdateManyWithWhereWithoutSportInput | SportSessionUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: SportSessionScalarWhereInput | SportSessionScalarWhereInput[]
  }

  export type SportCreateNestedOneWithoutSessionsInput = {
    create?: XOR<SportCreateWithoutSessionsInput, SportUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: SportCreateOrConnectWithoutSessionsInput
    connect?: SportWhereUniqueInput
  }

  export type SportUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<SportCreateWithoutSessionsInput, SportUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: SportCreateOrConnectWithoutSessionsInput
    upsert?: SportUpsertWithoutSessionsInput
    connect?: SportWhereUniqueInput
    update?: XOR<XOR<SportUpdateToOneWithWhereWithoutSessionsInput, SportUpdateWithoutSessionsInput>, SportUncheckedUpdateWithoutSessionsInput>
  }

  export type AdherentCreateNestedOneWithoutDietInput = {
    create?: XOR<AdherentCreateWithoutDietInput, AdherentUncheckedCreateWithoutDietInput>
    connectOrCreate?: AdherentCreateOrConnectWithoutDietInput
    connect?: AdherentWhereUniqueInput
  }

  export type foodCreateNestedOneWithoutDietInput = {
    create?: XOR<foodCreateWithoutDietInput, foodUncheckedCreateWithoutDietInput>
    connectOrCreate?: foodCreateOrConnectWithoutDietInput
    connect?: foodWhereUniqueInput
  }

  export type AdherentUpdateOneRequiredWithoutDietNestedInput = {
    create?: XOR<AdherentCreateWithoutDietInput, AdherentUncheckedCreateWithoutDietInput>
    connectOrCreate?: AdherentCreateOrConnectWithoutDietInput
    upsert?: AdherentUpsertWithoutDietInput
    connect?: AdherentWhereUniqueInput
    update?: XOR<XOR<AdherentUpdateToOneWithWhereWithoutDietInput, AdherentUpdateWithoutDietInput>, AdherentUncheckedUpdateWithoutDietInput>
  }

  export type foodUpdateOneWithoutDietNestedInput = {
    create?: XOR<foodCreateWithoutDietInput, foodUncheckedCreateWithoutDietInput>
    connectOrCreate?: foodCreateOrConnectWithoutDietInput
    upsert?: foodUpsertWithoutDietInput
    disconnect?: foodWhereInput | boolean
    delete?: foodWhereInput | boolean
    connect?: foodWhereUniqueInput
    update?: XOR<XOR<foodUpdateToOneWithWhereWithoutDietInput, foodUpdateWithoutDietInput>, foodUncheckedUpdateWithoutDietInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DietCreateNestedManyWithoutFoodInput = {
    create?: XOR<DietCreateWithoutFoodInput, DietUncheckedCreateWithoutFoodInput> | DietCreateWithoutFoodInput[] | DietUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: DietCreateOrConnectWithoutFoodInput | DietCreateOrConnectWithoutFoodInput[]
    createMany?: DietCreateManyFoodInputEnvelope
    connect?: DietWhereUniqueInput | DietWhereUniqueInput[]
  }

  export type DietUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<DietCreateWithoutFoodInput, DietUncheckedCreateWithoutFoodInput> | DietCreateWithoutFoodInput[] | DietUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: DietCreateOrConnectWithoutFoodInput | DietCreateOrConnectWithoutFoodInput[]
    createMany?: DietCreateManyFoodInputEnvelope
    connect?: DietWhereUniqueInput | DietWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DietUpdateManyWithoutFoodNestedInput = {
    create?: XOR<DietCreateWithoutFoodInput, DietUncheckedCreateWithoutFoodInput> | DietCreateWithoutFoodInput[] | DietUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: DietCreateOrConnectWithoutFoodInput | DietCreateOrConnectWithoutFoodInput[]
    upsert?: DietUpsertWithWhereUniqueWithoutFoodInput | DietUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: DietCreateManyFoodInputEnvelope
    set?: DietWhereUniqueInput | DietWhereUniqueInput[]
    disconnect?: DietWhereUniqueInput | DietWhereUniqueInput[]
    delete?: DietWhereUniqueInput | DietWhereUniqueInput[]
    connect?: DietWhereUniqueInput | DietWhereUniqueInput[]
    update?: DietUpdateWithWhereUniqueWithoutFoodInput | DietUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: DietUpdateManyWithWhereWithoutFoodInput | DietUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: DietScalarWhereInput | DietScalarWhereInput[]
  }

  export type DietUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<DietCreateWithoutFoodInput, DietUncheckedCreateWithoutFoodInput> | DietCreateWithoutFoodInput[] | DietUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: DietCreateOrConnectWithoutFoodInput | DietCreateOrConnectWithoutFoodInput[]
    upsert?: DietUpsertWithWhereUniqueWithoutFoodInput | DietUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: DietCreateManyFoodInputEnvelope
    set?: DietWhereUniqueInput | DietWhereUniqueInput[]
    disconnect?: DietWhereUniqueInput | DietWhereUniqueInput[]
    delete?: DietWhereUniqueInput | DietWhereUniqueInput[]
    connect?: DietWhereUniqueInput | DietWhereUniqueInput[]
    update?: DietUpdateWithWhereUniqueWithoutFoodInput | DietUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: DietUpdateManyWithWhereWithoutFoodInput | DietUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: DietScalarWhereInput | DietScalarWhereInput[]
  }

  export type AdherentCreateNestedOneWithoutInBodyInput = {
    create?: XOR<AdherentCreateWithoutInBodyInput, AdherentUncheckedCreateWithoutInBodyInput>
    connectOrCreate?: AdherentCreateOrConnectWithoutInBodyInput
    connect?: AdherentWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdherentUpdateOneRequiredWithoutInBodyNestedInput = {
    create?: XOR<AdherentCreateWithoutInBodyInput, AdherentUncheckedCreateWithoutInBodyInput>
    connectOrCreate?: AdherentCreateOrConnectWithoutInBodyInput
    upsert?: AdherentUpsertWithoutInBodyInput
    connect?: AdherentWhereUniqueInput
    update?: XOR<XOR<AdherentUpdateToOneWithWhereWithoutInBodyInput, AdherentUpdateWithoutInBodyInput>, AdherentUncheckedUpdateWithoutInBodyInput>
  }

  export type SportCreateNestedOneWithoutCoachInput = {
    create?: XOR<SportCreateWithoutCoachInput, SportUncheckedCreateWithoutCoachInput>
    connectOrCreate?: SportCreateOrConnectWithoutCoachInput
    connect?: SportWhereUniqueInput
  }

  export type Sport_coachCreateNestedManyWithoutCoachInput = {
    create?: XOR<Sport_coachCreateWithoutCoachInput, Sport_coachUncheckedCreateWithoutCoachInput> | Sport_coachCreateWithoutCoachInput[] | Sport_coachUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: Sport_coachCreateOrConnectWithoutCoachInput | Sport_coachCreateOrConnectWithoutCoachInput[]
    createMany?: Sport_coachCreateManyCoachInputEnvelope
    connect?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
  }

  export type Sport_coachUncheckedCreateNestedManyWithoutCoachInput = {
    create?: XOR<Sport_coachCreateWithoutCoachInput, Sport_coachUncheckedCreateWithoutCoachInput> | Sport_coachCreateWithoutCoachInput[] | Sport_coachUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: Sport_coachCreateOrConnectWithoutCoachInput | Sport_coachCreateOrConnectWithoutCoachInput[]
    createMany?: Sport_coachCreateManyCoachInputEnvelope
    connect?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
  }

  export type SportUpdateOneWithoutCoachNestedInput = {
    create?: XOR<SportCreateWithoutCoachInput, SportUncheckedCreateWithoutCoachInput>
    connectOrCreate?: SportCreateOrConnectWithoutCoachInput
    upsert?: SportUpsertWithoutCoachInput
    disconnect?: SportWhereInput | boolean
    delete?: SportWhereInput | boolean
    connect?: SportWhereUniqueInput
    update?: XOR<XOR<SportUpdateToOneWithWhereWithoutCoachInput, SportUpdateWithoutCoachInput>, SportUncheckedUpdateWithoutCoachInput>
  }

  export type Sport_coachUpdateManyWithoutCoachNestedInput = {
    create?: XOR<Sport_coachCreateWithoutCoachInput, Sport_coachUncheckedCreateWithoutCoachInput> | Sport_coachCreateWithoutCoachInput[] | Sport_coachUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: Sport_coachCreateOrConnectWithoutCoachInput | Sport_coachCreateOrConnectWithoutCoachInput[]
    upsert?: Sport_coachUpsertWithWhereUniqueWithoutCoachInput | Sport_coachUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: Sport_coachCreateManyCoachInputEnvelope
    set?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
    disconnect?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
    delete?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
    connect?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
    update?: Sport_coachUpdateWithWhereUniqueWithoutCoachInput | Sport_coachUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: Sport_coachUpdateManyWithWhereWithoutCoachInput | Sport_coachUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: Sport_coachScalarWhereInput | Sport_coachScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type Sport_coachUncheckedUpdateManyWithoutCoachNestedInput = {
    create?: XOR<Sport_coachCreateWithoutCoachInput, Sport_coachUncheckedCreateWithoutCoachInput> | Sport_coachCreateWithoutCoachInput[] | Sport_coachUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: Sport_coachCreateOrConnectWithoutCoachInput | Sport_coachCreateOrConnectWithoutCoachInput[]
    upsert?: Sport_coachUpsertWithWhereUniqueWithoutCoachInput | Sport_coachUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: Sport_coachCreateManyCoachInputEnvelope
    set?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
    disconnect?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
    delete?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
    connect?: Sport_coachWhereUniqueInput | Sport_coachWhereUniqueInput[]
    update?: Sport_coachUpdateWithWhereUniqueWithoutCoachInput | Sport_coachUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: Sport_coachUpdateManyWithWhereWithoutCoachInput | Sport_coachUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: Sport_coachScalarWhereInput | Sport_coachScalarWhereInput[]
  }

  export type CoachCreateNestedOneWithoutSport_coachInput = {
    create?: XOR<CoachCreateWithoutSport_coachInput, CoachUncheckedCreateWithoutSport_coachInput>
    connectOrCreate?: CoachCreateOrConnectWithoutSport_coachInput
    connect?: CoachWhereUniqueInput
  }

  export type SportCreateNestedOneWithoutSport_coachInput = {
    create?: XOR<SportCreateWithoutSport_coachInput, SportUncheckedCreateWithoutSport_coachInput>
    connectOrCreate?: SportCreateOrConnectWithoutSport_coachInput
    connect?: SportWhereUniqueInput
  }

  export type CoachUpdateOneRequiredWithoutSport_coachNestedInput = {
    create?: XOR<CoachCreateWithoutSport_coachInput, CoachUncheckedCreateWithoutSport_coachInput>
    connectOrCreate?: CoachCreateOrConnectWithoutSport_coachInput
    upsert?: CoachUpsertWithoutSport_coachInput
    connect?: CoachWhereUniqueInput
    update?: XOR<XOR<CoachUpdateToOneWithWhereWithoutSport_coachInput, CoachUpdateWithoutSport_coachInput>, CoachUncheckedUpdateWithoutSport_coachInput>
  }

  export type SportUpdateOneWithoutSport_coachNestedInput = {
    create?: XOR<SportCreateWithoutSport_coachInput, SportUncheckedCreateWithoutSport_coachInput>
    connectOrCreate?: SportCreateOrConnectWithoutSport_coachInput
    upsert?: SportUpsertWithoutSport_coachInput
    disconnect?: SportWhereInput | boolean
    delete?: SportWhereInput | boolean
    connect?: SportWhereUniqueInput
    update?: XOR<XOR<SportUpdateToOneWithWhereWithoutSport_coachInput, SportUpdateWithoutSport_coachInput>, SportUncheckedUpdateWithoutSport_coachInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
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

  export type DietCreateWithoutAdherentInput = {
    id?: bigint | number
    meal_type?: string | null
    Date?: Date | string | null
    food?: foodCreateNestedOneWithoutDietInput
  }

  export type DietUncheckedCreateWithoutAdherentInput = {
    id?: bigint | number
    id_food?: number | null
    meal_type?: string | null
    Date?: Date | string | null
  }

  export type DietCreateOrConnectWithoutAdherentInput = {
    where: DietWhereUniqueInput
    create: XOR<DietCreateWithoutAdherentInput, DietUncheckedCreateWithoutAdherentInput>
  }

  export type DietCreateManyAdherentInputEnvelope = {
    data: DietCreateManyAdherentInput | DietCreateManyAdherentInput[]
    skipDuplicates?: boolean
  }

  export type InBodyCreateWithoutAdherentInput = {
    id?: bigint | number
    poids?: number | null
    masse_musculaire?: number | null
    masse_grasse?: number | null
    score?: number | null
    date?: Date | string | null
    time?: Date | string | null
  }

  export type InBodyUncheckedCreateWithoutAdherentInput = {
    id?: bigint | number
    poids?: number | null
    masse_musculaire?: number | null
    masse_grasse?: number | null
    score?: number | null
    date?: Date | string | null
    time?: Date | string | null
  }

  export type InBodyCreateOrConnectWithoutAdherentInput = {
    where: InBodyWhereUniqueInput
    create: XOR<InBodyCreateWithoutAdherentInput, InBodyUncheckedCreateWithoutAdherentInput>
  }

  export type InBodyCreateManyAdherentInputEnvelope = {
    data: InBodyCreateManyAdherentInput | InBodyCreateManyAdherentInput[]
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

  export type DietUpsertWithWhereUniqueWithoutAdherentInput = {
    where: DietWhereUniqueInput
    update: XOR<DietUpdateWithoutAdherentInput, DietUncheckedUpdateWithoutAdherentInput>
    create: XOR<DietCreateWithoutAdherentInput, DietUncheckedCreateWithoutAdherentInput>
  }

  export type DietUpdateWithWhereUniqueWithoutAdherentInput = {
    where: DietWhereUniqueInput
    data: XOR<DietUpdateWithoutAdherentInput, DietUncheckedUpdateWithoutAdherentInput>
  }

  export type DietUpdateManyWithWhereWithoutAdherentInput = {
    where: DietScalarWhereInput
    data: XOR<DietUpdateManyMutationInput, DietUncheckedUpdateManyWithoutAdherentInput>
  }

  export type DietScalarWhereInput = {
    AND?: DietScalarWhereInput | DietScalarWhereInput[]
    OR?: DietScalarWhereInput[]
    NOT?: DietScalarWhereInput | DietScalarWhereInput[]
    id?: BigIntFilter<"Diet"> | bigint | number
    id_adherent?: IntFilter<"Diet"> | number
    id_food?: IntNullableFilter<"Diet"> | number | null
    meal_type?: StringNullableFilter<"Diet"> | string | null
    Date?: DateTimeNullableFilter<"Diet"> | Date | string | null
  }

  export type InBodyUpsertWithWhereUniqueWithoutAdherentInput = {
    where: InBodyWhereUniqueInput
    update: XOR<InBodyUpdateWithoutAdherentInput, InBodyUncheckedUpdateWithoutAdherentInput>
    create: XOR<InBodyCreateWithoutAdherentInput, InBodyUncheckedCreateWithoutAdherentInput>
  }

  export type InBodyUpdateWithWhereUniqueWithoutAdherentInput = {
    where: InBodyWhereUniqueInput
    data: XOR<InBodyUpdateWithoutAdherentInput, InBodyUncheckedUpdateWithoutAdherentInput>
  }

  export type InBodyUpdateManyWithWhereWithoutAdherentInput = {
    where: InBodyScalarWhereInput
    data: XOR<InBodyUpdateManyMutationInput, InBodyUncheckedUpdateManyWithoutAdherentInput>
  }

  export type InBodyScalarWhereInput = {
    AND?: InBodyScalarWhereInput | InBodyScalarWhereInput[]
    OR?: InBodyScalarWhereInput[]
    NOT?: InBodyScalarWhereInput | InBodyScalarWhereInput[]
    id?: BigIntFilter<"InBody"> | bigint | number
    id_adherent?: IntFilter<"InBody"> | number
    poids?: FloatNullableFilter<"InBody"> | number | null
    masse_musculaire?: FloatNullableFilter<"InBody"> | number | null
    masse_grasse?: FloatNullableFilter<"InBody"> | number | null
    score?: IntNullableFilter<"InBody"> | number | null
    date?: DateTimeNullableFilter<"InBody"> | Date | string | null
    time?: DateTimeNullableFilter<"InBody"> | Date | string | null
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
    next_adherent_inbody_rdv?: Date | string | null
    payment_status?: string | null
    inscription_status?: string | null
    Diet?: DietCreateNestedManyWithoutAdherentInput
    InBody?: InBodyCreateNestedManyWithoutAdherentInput
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
    next_adherent_inbody_rdv?: Date | string | null
    payment_status?: string | null
    inscription_status?: string | null
    Diet?: DietUncheckedCreateNestedManyWithoutAdherentInput
    InBody?: InBodyUncheckedCreateNestedManyWithoutAdherentInput
  }

  export type AdherentCreateOrConnectWithoutAdherent_sportInput = {
    where: AdherentWhereUniqueInput
    create: XOR<AdherentCreateWithoutAdherent_sportInput, AdherentUncheckedCreateWithoutAdherent_sportInput>
  }

  export type SportCreateWithoutAdherent_sportInput = {
    id_sport?: bigint | number
    Name: string
    Coach?: CoachCreateNestedManyWithoutSportInput
    Sport_coach?: Sport_coachCreateNestedManyWithoutSportInput
    sessions?: SportSessionCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateWithoutAdherent_sportInput = {
    id_sport?: bigint | number
    Name: string
    Coach?: CoachUncheckedCreateNestedManyWithoutSportInput
    Sport_coach?: Sport_coachUncheckedCreateNestedManyWithoutSportInput
    sessions?: SportSessionUncheckedCreateNestedManyWithoutSportInput
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
    next_adherent_inbody_rdv?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    inscription_status?: NullableStringFieldUpdateOperationsInput | string | null
    Diet?: DietUpdateManyWithoutAdherentNestedInput
    InBody?: InBodyUpdateManyWithoutAdherentNestedInput
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
    next_adherent_inbody_rdv?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    inscription_status?: NullableStringFieldUpdateOperationsInput | string | null
    Diet?: DietUncheckedUpdateManyWithoutAdherentNestedInput
    InBody?: InBodyUncheckedUpdateManyWithoutAdherentNestedInput
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
    Coach?: CoachUpdateManyWithoutSportNestedInput
    Sport_coach?: Sport_coachUpdateManyWithoutSportNestedInput
    sessions?: SportSessionUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateWithoutAdherent_sportInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Coach?: CoachUncheckedUpdateManyWithoutSportNestedInput
    Sport_coach?: Sport_coachUncheckedUpdateManyWithoutSportNestedInput
    sessions?: SportSessionUncheckedUpdateManyWithoutSportNestedInput
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

  export type CoachCreateWithoutSportInput = {
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    Sport_coach?: Sport_coachCreateNestedManyWithoutCoachInput
  }

  export type CoachUncheckedCreateWithoutSportInput = {
    id_coach?: number
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    Sport_coach?: Sport_coachUncheckedCreateNestedManyWithoutCoachInput
  }

  export type CoachCreateOrConnectWithoutSportInput = {
    where: CoachWhereUniqueInput
    create: XOR<CoachCreateWithoutSportInput, CoachUncheckedCreateWithoutSportInput>
  }

  export type CoachCreateManySportInputEnvelope = {
    data: CoachCreateManySportInput | CoachCreateManySportInput[]
    skipDuplicates?: boolean
  }

  export type Sport_coachCreateWithoutSportInput = {
    id_coaching?: bigint | number
    Coach: CoachCreateNestedOneWithoutSport_coachInput
  }

  export type Sport_coachUncheckedCreateWithoutSportInput = {
    id_coaching?: bigint | number
    id_coach: number
  }

  export type Sport_coachCreateOrConnectWithoutSportInput = {
    where: Sport_coachWhereUniqueInput
    create: XOR<Sport_coachCreateWithoutSportInput, Sport_coachUncheckedCreateWithoutSportInput>
  }

  export type Sport_coachCreateManySportInputEnvelope = {
    data: Sport_coachCreateManySportInput | Sport_coachCreateManySportInput[]
    skipDuplicates?: boolean
  }

  export type SportSessionCreateWithoutSportInput = {
    date?: Date | string | null
    starting_time?: Date | string | null
    ending_time?: Date | string | null
    group_name?: string | null
  }

  export type SportSessionUncheckedCreateWithoutSportInput = {
    id?: number
    date?: Date | string | null
    starting_time?: Date | string | null
    ending_time?: Date | string | null
    group_name?: string | null
  }

  export type SportSessionCreateOrConnectWithoutSportInput = {
    where: SportSessionWhereUniqueInput
    create: XOR<SportSessionCreateWithoutSportInput, SportSessionUncheckedCreateWithoutSportInput>
  }

  export type SportSessionCreateManySportInputEnvelope = {
    data: SportSessionCreateManySportInput | SportSessionCreateManySportInput[]
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

  export type CoachUpsertWithWhereUniqueWithoutSportInput = {
    where: CoachWhereUniqueInput
    update: XOR<CoachUpdateWithoutSportInput, CoachUncheckedUpdateWithoutSportInput>
    create: XOR<CoachCreateWithoutSportInput, CoachUncheckedCreateWithoutSportInput>
  }

  export type CoachUpdateWithWhereUniqueWithoutSportInput = {
    where: CoachWhereUniqueInput
    data: XOR<CoachUpdateWithoutSportInput, CoachUncheckedUpdateWithoutSportInput>
  }

  export type CoachUpdateManyWithWhereWithoutSportInput = {
    where: CoachScalarWhereInput
    data: XOR<CoachUpdateManyMutationInput, CoachUncheckedUpdateManyWithoutSportInput>
  }

  export type CoachScalarWhereInput = {
    AND?: CoachScalarWhereInput | CoachScalarWhereInput[]
    OR?: CoachScalarWhereInput[]
    NOT?: CoachScalarWhereInput | CoachScalarWhereInput[]
    id_coach?: IntFilter<"Coach"> | number
    nom?: StringNullableFilter<"Coach"> | string | null
    prenom?: StringNullableFilter<"Coach"> | string | null
    email?: StringNullableFilter<"Coach"> | string | null
    age?: IntNullableFilter<"Coach"> | number | null
    id_sport?: BigIntNullableFilter<"Coach"> | bigint | number | null
  }

  export type Sport_coachUpsertWithWhereUniqueWithoutSportInput = {
    where: Sport_coachWhereUniqueInput
    update: XOR<Sport_coachUpdateWithoutSportInput, Sport_coachUncheckedUpdateWithoutSportInput>
    create: XOR<Sport_coachCreateWithoutSportInput, Sport_coachUncheckedCreateWithoutSportInput>
  }

  export type Sport_coachUpdateWithWhereUniqueWithoutSportInput = {
    where: Sport_coachWhereUniqueInput
    data: XOR<Sport_coachUpdateWithoutSportInput, Sport_coachUncheckedUpdateWithoutSportInput>
  }

  export type Sport_coachUpdateManyWithWhereWithoutSportInput = {
    where: Sport_coachScalarWhereInput
    data: XOR<Sport_coachUpdateManyMutationInput, Sport_coachUncheckedUpdateManyWithoutSportInput>
  }

  export type Sport_coachScalarWhereInput = {
    AND?: Sport_coachScalarWhereInput | Sport_coachScalarWhereInput[]
    OR?: Sport_coachScalarWhereInput[]
    NOT?: Sport_coachScalarWhereInput | Sport_coachScalarWhereInput[]
    id_coaching?: BigIntFilter<"Sport_coach"> | bigint | number
    id_coach?: IntFilter<"Sport_coach"> | number
    id_sport?: BigIntNullableFilter<"Sport_coach"> | bigint | number | null
  }

  export type SportSessionUpsertWithWhereUniqueWithoutSportInput = {
    where: SportSessionWhereUniqueInput
    update: XOR<SportSessionUpdateWithoutSportInput, SportSessionUncheckedUpdateWithoutSportInput>
    create: XOR<SportSessionCreateWithoutSportInput, SportSessionUncheckedCreateWithoutSportInput>
  }

  export type SportSessionUpdateWithWhereUniqueWithoutSportInput = {
    where: SportSessionWhereUniqueInput
    data: XOR<SportSessionUpdateWithoutSportInput, SportSessionUncheckedUpdateWithoutSportInput>
  }

  export type SportSessionUpdateManyWithWhereWithoutSportInput = {
    where: SportSessionScalarWhereInput
    data: XOR<SportSessionUpdateManyMutationInput, SportSessionUncheckedUpdateManyWithoutSportInput>
  }

  export type SportSessionScalarWhereInput = {
    AND?: SportSessionScalarWhereInput | SportSessionScalarWhereInput[]
    OR?: SportSessionScalarWhereInput[]
    NOT?: SportSessionScalarWhereInput | SportSessionScalarWhereInput[]
    id?: IntFilter<"SportSession"> | number
    sport_id?: BigIntFilter<"SportSession"> | bigint | number
    date?: DateTimeNullableFilter<"SportSession"> | Date | string | null
    starting_time?: DateTimeNullableFilter<"SportSession"> | Date | string | null
    ending_time?: DateTimeNullableFilter<"SportSession"> | Date | string | null
    group_name?: StringNullableFilter<"SportSession"> | string | null
  }

  export type SportCreateWithoutSessionsInput = {
    id_sport?: bigint | number
    Name: string
    Adherent_sport?: Adherent_sportCreateNestedManyWithoutSportInput
    Coach?: CoachCreateNestedManyWithoutSportInput
    Sport_coach?: Sport_coachCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateWithoutSessionsInput = {
    id_sport?: bigint | number
    Name: string
    Adherent_sport?: Adherent_sportUncheckedCreateNestedManyWithoutSportInput
    Coach?: CoachUncheckedCreateNestedManyWithoutSportInput
    Sport_coach?: Sport_coachUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportCreateOrConnectWithoutSessionsInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutSessionsInput, SportUncheckedCreateWithoutSessionsInput>
  }

  export type SportUpsertWithoutSessionsInput = {
    update: XOR<SportUpdateWithoutSessionsInput, SportUncheckedUpdateWithoutSessionsInput>
    create: XOR<SportCreateWithoutSessionsInput, SportUncheckedCreateWithoutSessionsInput>
    where?: SportWhereInput
  }

  export type SportUpdateToOneWithWhereWithoutSessionsInput = {
    where?: SportWhereInput
    data: XOR<SportUpdateWithoutSessionsInput, SportUncheckedUpdateWithoutSessionsInput>
  }

  export type SportUpdateWithoutSessionsInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Adherent_sport?: Adherent_sportUpdateManyWithoutSportNestedInput
    Coach?: CoachUpdateManyWithoutSportNestedInput
    Sport_coach?: Sport_coachUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateWithoutSessionsInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Adherent_sport?: Adherent_sportUncheckedUpdateManyWithoutSportNestedInput
    Coach?: CoachUncheckedUpdateManyWithoutSportNestedInput
    Sport_coach?: Sport_coachUncheckedUpdateManyWithoutSportNestedInput
  }

  export type AdherentCreateWithoutDietInput = {
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
    next_adherent_inbody_rdv?: Date | string | null
    payment_status?: string | null
    inscription_status?: string | null
    Adherent_sport?: Adherent_sportCreateNestedManyWithoutAdherentInput
    InBody?: InBodyCreateNestedManyWithoutAdherentInput
  }

  export type AdherentUncheckedCreateWithoutDietInput = {
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
    next_adherent_inbody_rdv?: Date | string | null
    payment_status?: string | null
    inscription_status?: string | null
    Adherent_sport?: Adherent_sportUncheckedCreateNestedManyWithoutAdherentInput
    InBody?: InBodyUncheckedCreateNestedManyWithoutAdherentInput
  }

  export type AdherentCreateOrConnectWithoutDietInput = {
    where: AdherentWhereUniqueInput
    create: XOR<AdherentCreateWithoutDietInput, AdherentUncheckedCreateWithoutDietInput>
  }

  export type foodCreateWithoutDietInput = {
    name: string
    calories: number
    fat: Decimal | DecimalJsLike | number | string
    carbs: Decimal | DecimalJsLike | number | string
    protein: Decimal | DecimalJsLike | number | string
  }

  export type foodUncheckedCreateWithoutDietInput = {
    id_food?: number
    name: string
    calories: number
    fat: Decimal | DecimalJsLike | number | string
    carbs: Decimal | DecimalJsLike | number | string
    protein: Decimal | DecimalJsLike | number | string
  }

  export type foodCreateOrConnectWithoutDietInput = {
    where: foodWhereUniqueInput
    create: XOR<foodCreateWithoutDietInput, foodUncheckedCreateWithoutDietInput>
  }

  export type AdherentUpsertWithoutDietInput = {
    update: XOR<AdherentUpdateWithoutDietInput, AdherentUncheckedUpdateWithoutDietInput>
    create: XOR<AdherentCreateWithoutDietInput, AdherentUncheckedCreateWithoutDietInput>
    where?: AdherentWhereInput
  }

  export type AdherentUpdateToOneWithWhereWithoutDietInput = {
    where?: AdherentWhereInput
    data: XOR<AdherentUpdateWithoutDietInput, AdherentUncheckedUpdateWithoutDietInput>
  }

  export type AdherentUpdateWithoutDietInput = {
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
    next_adherent_inbody_rdv?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    inscription_status?: NullableStringFieldUpdateOperationsInput | string | null
    Adherent_sport?: Adherent_sportUpdateManyWithoutAdherentNestedInput
    InBody?: InBodyUpdateManyWithoutAdherentNestedInput
  }

  export type AdherentUncheckedUpdateWithoutDietInput = {
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
    next_adherent_inbody_rdv?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    inscription_status?: NullableStringFieldUpdateOperationsInput | string | null
    Adherent_sport?: Adherent_sportUncheckedUpdateManyWithoutAdherentNestedInput
    InBody?: InBodyUncheckedUpdateManyWithoutAdherentNestedInput
  }

  export type foodUpsertWithoutDietInput = {
    update: XOR<foodUpdateWithoutDietInput, foodUncheckedUpdateWithoutDietInput>
    create: XOR<foodCreateWithoutDietInput, foodUncheckedCreateWithoutDietInput>
    where?: foodWhereInput
  }

  export type foodUpdateToOneWithWhereWithoutDietInput = {
    where?: foodWhereInput
    data: XOR<foodUpdateWithoutDietInput, foodUncheckedUpdateWithoutDietInput>
  }

  export type foodUpdateWithoutDietInput = {
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    fat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carbs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    protein?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type foodUncheckedUpdateWithoutDietInput = {
    id_food?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    fat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carbs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    protein?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DietCreateWithoutFoodInput = {
    id?: bigint | number
    meal_type?: string | null
    Date?: Date | string | null
    Adherent: AdherentCreateNestedOneWithoutDietInput
  }

  export type DietUncheckedCreateWithoutFoodInput = {
    id?: bigint | number
    id_adherent: number
    meal_type?: string | null
    Date?: Date | string | null
  }

  export type DietCreateOrConnectWithoutFoodInput = {
    where: DietWhereUniqueInput
    create: XOR<DietCreateWithoutFoodInput, DietUncheckedCreateWithoutFoodInput>
  }

  export type DietCreateManyFoodInputEnvelope = {
    data: DietCreateManyFoodInput | DietCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type DietUpsertWithWhereUniqueWithoutFoodInput = {
    where: DietWhereUniqueInput
    update: XOR<DietUpdateWithoutFoodInput, DietUncheckedUpdateWithoutFoodInput>
    create: XOR<DietCreateWithoutFoodInput, DietUncheckedCreateWithoutFoodInput>
  }

  export type DietUpdateWithWhereUniqueWithoutFoodInput = {
    where: DietWhereUniqueInput
    data: XOR<DietUpdateWithoutFoodInput, DietUncheckedUpdateWithoutFoodInput>
  }

  export type DietUpdateManyWithWhereWithoutFoodInput = {
    where: DietScalarWhereInput
    data: XOR<DietUpdateManyMutationInput, DietUncheckedUpdateManyWithoutFoodInput>
  }

  export type AdherentCreateWithoutInBodyInput = {
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
    next_adherent_inbody_rdv?: Date | string | null
    payment_status?: string | null
    inscription_status?: string | null
    Adherent_sport?: Adherent_sportCreateNestedManyWithoutAdherentInput
    Diet?: DietCreateNestedManyWithoutAdherentInput
  }

  export type AdherentUncheckedCreateWithoutInBodyInput = {
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
    next_adherent_inbody_rdv?: Date | string | null
    payment_status?: string | null
    inscription_status?: string | null
    Adherent_sport?: Adherent_sportUncheckedCreateNestedManyWithoutAdherentInput
    Diet?: DietUncheckedCreateNestedManyWithoutAdherentInput
  }

  export type AdherentCreateOrConnectWithoutInBodyInput = {
    where: AdherentWhereUniqueInput
    create: XOR<AdherentCreateWithoutInBodyInput, AdherentUncheckedCreateWithoutInBodyInput>
  }

  export type AdherentUpsertWithoutInBodyInput = {
    update: XOR<AdherentUpdateWithoutInBodyInput, AdherentUncheckedUpdateWithoutInBodyInput>
    create: XOR<AdherentCreateWithoutInBodyInput, AdherentUncheckedCreateWithoutInBodyInput>
    where?: AdherentWhereInput
  }

  export type AdherentUpdateToOneWithWhereWithoutInBodyInput = {
    where?: AdherentWhereInput
    data: XOR<AdherentUpdateWithoutInBodyInput, AdherentUncheckedUpdateWithoutInBodyInput>
  }

  export type AdherentUpdateWithoutInBodyInput = {
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
    next_adherent_inbody_rdv?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    inscription_status?: NullableStringFieldUpdateOperationsInput | string | null
    Adherent_sport?: Adherent_sportUpdateManyWithoutAdherentNestedInput
    Diet?: DietUpdateManyWithoutAdherentNestedInput
  }

  export type AdherentUncheckedUpdateWithoutInBodyInput = {
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
    next_adherent_inbody_rdv?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    inscription_status?: NullableStringFieldUpdateOperationsInput | string | null
    Adherent_sport?: Adherent_sportUncheckedUpdateManyWithoutAdherentNestedInput
    Diet?: DietUncheckedUpdateManyWithoutAdherentNestedInput
  }

  export type SportCreateWithoutCoachInput = {
    id_sport?: bigint | number
    Name: string
    Adherent_sport?: Adherent_sportCreateNestedManyWithoutSportInput
    Sport_coach?: Sport_coachCreateNestedManyWithoutSportInput
    sessions?: SportSessionCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateWithoutCoachInput = {
    id_sport?: bigint | number
    Name: string
    Adherent_sport?: Adherent_sportUncheckedCreateNestedManyWithoutSportInput
    Sport_coach?: Sport_coachUncheckedCreateNestedManyWithoutSportInput
    sessions?: SportSessionUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportCreateOrConnectWithoutCoachInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutCoachInput, SportUncheckedCreateWithoutCoachInput>
  }

  export type Sport_coachCreateWithoutCoachInput = {
    id_coaching?: bigint | number
    Sport?: SportCreateNestedOneWithoutSport_coachInput
  }

  export type Sport_coachUncheckedCreateWithoutCoachInput = {
    id_coaching?: bigint | number
    id_sport?: bigint | number | null
  }

  export type Sport_coachCreateOrConnectWithoutCoachInput = {
    where: Sport_coachWhereUniqueInput
    create: XOR<Sport_coachCreateWithoutCoachInput, Sport_coachUncheckedCreateWithoutCoachInput>
  }

  export type Sport_coachCreateManyCoachInputEnvelope = {
    data: Sport_coachCreateManyCoachInput | Sport_coachCreateManyCoachInput[]
    skipDuplicates?: boolean
  }

  export type SportUpsertWithoutCoachInput = {
    update: XOR<SportUpdateWithoutCoachInput, SportUncheckedUpdateWithoutCoachInput>
    create: XOR<SportCreateWithoutCoachInput, SportUncheckedCreateWithoutCoachInput>
    where?: SportWhereInput
  }

  export type SportUpdateToOneWithWhereWithoutCoachInput = {
    where?: SportWhereInput
    data: XOR<SportUpdateWithoutCoachInput, SportUncheckedUpdateWithoutCoachInput>
  }

  export type SportUpdateWithoutCoachInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Adherent_sport?: Adherent_sportUpdateManyWithoutSportNestedInput
    Sport_coach?: Sport_coachUpdateManyWithoutSportNestedInput
    sessions?: SportSessionUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateWithoutCoachInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Adherent_sport?: Adherent_sportUncheckedUpdateManyWithoutSportNestedInput
    Sport_coach?: Sport_coachUncheckedUpdateManyWithoutSportNestedInput
    sessions?: SportSessionUncheckedUpdateManyWithoutSportNestedInput
  }

  export type Sport_coachUpsertWithWhereUniqueWithoutCoachInput = {
    where: Sport_coachWhereUniqueInput
    update: XOR<Sport_coachUpdateWithoutCoachInput, Sport_coachUncheckedUpdateWithoutCoachInput>
    create: XOR<Sport_coachCreateWithoutCoachInput, Sport_coachUncheckedCreateWithoutCoachInput>
  }

  export type Sport_coachUpdateWithWhereUniqueWithoutCoachInput = {
    where: Sport_coachWhereUniqueInput
    data: XOR<Sport_coachUpdateWithoutCoachInput, Sport_coachUncheckedUpdateWithoutCoachInput>
  }

  export type Sport_coachUpdateManyWithWhereWithoutCoachInput = {
    where: Sport_coachScalarWhereInput
    data: XOR<Sport_coachUpdateManyMutationInput, Sport_coachUncheckedUpdateManyWithoutCoachInput>
  }

  export type CoachCreateWithoutSport_coachInput = {
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    Sport?: SportCreateNestedOneWithoutCoachInput
  }

  export type CoachUncheckedCreateWithoutSport_coachInput = {
    id_coach?: number
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    id_sport?: bigint | number | null
  }

  export type CoachCreateOrConnectWithoutSport_coachInput = {
    where: CoachWhereUniqueInput
    create: XOR<CoachCreateWithoutSport_coachInput, CoachUncheckedCreateWithoutSport_coachInput>
  }

  export type SportCreateWithoutSport_coachInput = {
    id_sport?: bigint | number
    Name: string
    Adherent_sport?: Adherent_sportCreateNestedManyWithoutSportInput
    Coach?: CoachCreateNestedManyWithoutSportInput
    sessions?: SportSessionCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateWithoutSport_coachInput = {
    id_sport?: bigint | number
    Name: string
    Adherent_sport?: Adherent_sportUncheckedCreateNestedManyWithoutSportInput
    Coach?: CoachUncheckedCreateNestedManyWithoutSportInput
    sessions?: SportSessionUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportCreateOrConnectWithoutSport_coachInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutSport_coachInput, SportUncheckedCreateWithoutSport_coachInput>
  }

  export type CoachUpsertWithoutSport_coachInput = {
    update: XOR<CoachUpdateWithoutSport_coachInput, CoachUncheckedUpdateWithoutSport_coachInput>
    create: XOR<CoachCreateWithoutSport_coachInput, CoachUncheckedCreateWithoutSport_coachInput>
    where?: CoachWhereInput
  }

  export type CoachUpdateToOneWithWhereWithoutSport_coachInput = {
    where?: CoachWhereInput
    data: XOR<CoachUpdateWithoutSport_coachInput, CoachUncheckedUpdateWithoutSport_coachInput>
  }

  export type CoachUpdateWithoutSport_coachInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    Sport?: SportUpdateOneWithoutCoachNestedInput
  }

  export type CoachUncheckedUpdateWithoutSport_coachInput = {
    id_coach?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    id_sport?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type SportUpsertWithoutSport_coachInput = {
    update: XOR<SportUpdateWithoutSport_coachInput, SportUncheckedUpdateWithoutSport_coachInput>
    create: XOR<SportCreateWithoutSport_coachInput, SportUncheckedCreateWithoutSport_coachInput>
    where?: SportWhereInput
  }

  export type SportUpdateToOneWithWhereWithoutSport_coachInput = {
    where?: SportWhereInput
    data: XOR<SportUpdateWithoutSport_coachInput, SportUncheckedUpdateWithoutSport_coachInput>
  }

  export type SportUpdateWithoutSport_coachInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Adherent_sport?: Adherent_sportUpdateManyWithoutSportNestedInput
    Coach?: CoachUpdateManyWithoutSportNestedInput
    sessions?: SportSessionUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateWithoutSport_coachInput = {
    id_sport?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Adherent_sport?: Adherent_sportUncheckedUpdateManyWithoutSportNestedInput
    Coach?: CoachUncheckedUpdateManyWithoutSportNestedInput
    sessions?: SportSessionUncheckedUpdateManyWithoutSportNestedInput
  }

  export type Adherent_sportCreateManyAdherentInput = {
    id_sport: bigint | number
    id?: number
  }

  export type DietCreateManyAdherentInput = {
    id?: bigint | number
    id_food?: number | null
    meal_type?: string | null
    Date?: Date | string | null
  }

  export type InBodyCreateManyAdherentInput = {
    id?: bigint | number
    poids?: number | null
    masse_musculaire?: number | null
    masse_grasse?: number | null
    score?: number | null
    date?: Date | string | null
    time?: Date | string | null
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

  export type DietUpdateWithoutAdherentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    meal_type?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    food?: foodUpdateOneWithoutDietNestedInput
  }

  export type DietUncheckedUpdateWithoutAdherentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_food?: NullableIntFieldUpdateOperationsInput | number | null
    meal_type?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DietUncheckedUpdateManyWithoutAdherentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_food?: NullableIntFieldUpdateOperationsInput | number | null
    meal_type?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InBodyUpdateWithoutAdherentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    poids?: NullableFloatFieldUpdateOperationsInput | number | null
    masse_musculaire?: NullableFloatFieldUpdateOperationsInput | number | null
    masse_grasse?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InBodyUncheckedUpdateWithoutAdherentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    poids?: NullableFloatFieldUpdateOperationsInput | number | null
    masse_musculaire?: NullableFloatFieldUpdateOperationsInput | number | null
    masse_grasse?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InBodyUncheckedUpdateManyWithoutAdherentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    poids?: NullableFloatFieldUpdateOperationsInput | number | null
    masse_musculaire?: NullableFloatFieldUpdateOperationsInput | number | null
    masse_grasse?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Adherent_sportCreateManySportInput = {
    id?: number
    id_adherent: number
  }

  export type CoachCreateManySportInput = {
    id_coach?: number
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
  }

  export type Sport_coachCreateManySportInput = {
    id_coaching?: bigint | number
    id_coach: number
  }

  export type SportSessionCreateManySportInput = {
    id?: number
    date?: Date | string | null
    starting_time?: Date | string | null
    ending_time?: Date | string | null
    group_name?: string | null
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

  export type CoachUpdateWithoutSportInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    Sport_coach?: Sport_coachUpdateManyWithoutCoachNestedInput
  }

  export type CoachUncheckedUpdateWithoutSportInput = {
    id_coach?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    Sport_coach?: Sport_coachUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type CoachUncheckedUpdateManyWithoutSportInput = {
    id_coach?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Sport_coachUpdateWithoutSportInput = {
    id_coaching?: BigIntFieldUpdateOperationsInput | bigint | number
    Coach?: CoachUpdateOneRequiredWithoutSport_coachNestedInput
  }

  export type Sport_coachUncheckedUpdateWithoutSportInput = {
    id_coaching?: BigIntFieldUpdateOperationsInput | bigint | number
    id_coach?: IntFieldUpdateOperationsInput | number
  }

  export type Sport_coachUncheckedUpdateManyWithoutSportInput = {
    id_coaching?: BigIntFieldUpdateOperationsInput | bigint | number
    id_coach?: IntFieldUpdateOperationsInput | number
  }

  export type SportSessionUpdateWithoutSportInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    starting_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ending_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportSessionUncheckedUpdateWithoutSportInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    starting_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ending_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportSessionUncheckedUpdateManyWithoutSportInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    starting_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ending_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DietCreateManyFoodInput = {
    id?: bigint | number
    id_adherent: number
    meal_type?: string | null
    Date?: Date | string | null
  }

  export type DietUpdateWithoutFoodInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    meal_type?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Adherent?: AdherentUpdateOneRequiredWithoutDietNestedInput
  }

  export type DietUncheckedUpdateWithoutFoodInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_adherent?: IntFieldUpdateOperationsInput | number
    meal_type?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DietUncheckedUpdateManyWithoutFoodInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_adherent?: IntFieldUpdateOperationsInput | number
    meal_type?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Sport_coachCreateManyCoachInput = {
    id_coaching?: bigint | number
    id_sport?: bigint | number | null
  }

  export type Sport_coachUpdateWithoutCoachInput = {
    id_coaching?: BigIntFieldUpdateOperationsInput | bigint | number
    Sport?: SportUpdateOneWithoutSport_coachNestedInput
  }

  export type Sport_coachUncheckedUpdateWithoutCoachInput = {
    id_coaching?: BigIntFieldUpdateOperationsInput | bigint | number
    id_sport?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type Sport_coachUncheckedUpdateManyWithoutCoachInput = {
    id_coaching?: BigIntFieldUpdateOperationsInput | bigint | number
    id_sport?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
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