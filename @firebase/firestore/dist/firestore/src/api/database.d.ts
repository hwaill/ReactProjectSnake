/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { FirebaseApp } from '@firebase/app-types';
import { FirebaseService } from '@firebase/app-types/private';
import { DatabaseId } from '../core/database_info';
import { FirestoreClient } from '../core/firestore_client';
import { DocumentKey } from '../model/document_key';
import { FieldPath, ResourcePath } from '../model/path';
import { CompleteFn, ErrorFn, NextFn, PartialObserver, Unsubscribe } from './observer';
import { UntypedFirestoreDataConverter } from './user_data_reader';
import { FirebaseFirestore, FirebaseFirestore as ExpFirebaseFirestore } from '../../exp/src/api/database';
import { DocumentChange as ExpDocumentChange, DocumentSnapshot as ExpDocumentSnapshot, QuerySnapshot as ExpQuerySnapshot } from '../../exp/src/api/snapshot';
import { CollectionReference as ExpCollectionReference, DocumentReference as ExpDocumentReference, Query as ExpQuery } from '../../exp/src/api/reference';
import { Compat } from '../compat/compat';
import { ApiLoadBundleTask } from './bundle';
import { WriteBatch as ExpWriteBatch } from '../../exp/src/api/write_batch';
import { Transaction as ExpTransaction } from '../../exp/src/api/transaction';
import { CollectionReference as PublicCollectionReference, DocumentChange as PublicDocumentChange, DocumentChangeType as PublicDocumentChangeType, DocumentData as PublicDocumentData, DocumentReference as PublicDocumentReference, DocumentSnapshot as PublicDocumentSnapshot, FieldPath as PublicFieldPath, FirebaseFirestore as PublicFirestore, FirestoreDataConverter as PublicFirestoreDataConverter, GetOptions as PublicGetOptions, LogLevel as PublicLogLevel, OrderByDirection as PublicOrderByDirection, PersistenceSettings as PublicPersistenceSettings, Query as PublicQuery, QueryDocumentSnapshot as PublicQueryDocumentSnapshot, QuerySnapshot as PublicQuerySnapshot, SetOptions as PublicSetOptions, Settings as PublicSettings, SnapshotListenOptions as PublicSnapshotListenOptions, SnapshotMetadata as PublicSnapshotMetadata, SnapshotOptions as PublicSnapshotOptions, Transaction as PublicTransaction, UpdateData as PublicUpdateData, WhereFilterOp as PublicWhereFilterOp, WriteBatch as PublicWriteBatch } from '@firebase/firestore-types';
/**
 * Constant used to indicate the LRU garbage collection should be disabled.
 * Set this value as the `cacheSizeBytes` on the settings passed to the
 * `Firestore` instance.
 */
export declare const CACHE_SIZE_UNLIMITED = -1;
/**
 * A persistence provider for either memory-only or IndexedDB persistence.
 * Mainly used to allow optional inclusion of IndexedDB code.
 */
export interface PersistenceProvider {
    enableIndexedDbPersistence(firestore: Firestore, forceOwnership: boolean): Promise<void>;
    enableMultiTabIndexedDbPersistence(firestore: Firestore): Promise<void>;
    clearIndexedDbPersistence(firestore: Firestore): Promise<void>;
}
/**
 * The persistence provider included with the memory-only SDK. This provider
 * errors for all attempts to access persistence.
 */
export declare class MemoryPersistenceProvider implements PersistenceProvider {
    enableIndexedDbPersistence(firestore: Firestore, forceOwnership: boolean): Promise<void>;
    enableMultiTabIndexedDbPersistence(firestore: Firestore): Promise<void>;
    clearIndexedDbPersistence(firestore: Firestore): Promise<void>;
}
/**
 * The persistence provider included with the full Firestore SDK.
 */
export declare class IndexedDbPersistenceProvider implements PersistenceProvider {
    enableIndexedDbPersistence(firestore: Firestore, forceOwnership: boolean): Promise<void>;
    enableMultiTabIndexedDbPersistence(firestore: Firestore): Promise<void>;
    clearIndexedDbPersistence(firestore: Firestore): Promise<void>;
}
/**
 * Compat class for Firestore. Exposes Firestore Legacy API, but delegates
 * to the functional API of firestore-exp.
 */
export declare class Firestore extends Compat<ExpFirebaseFirestore> implements PublicFirestore, FirebaseService {
    private _persistenceProvider;
    _appCompat?: FirebaseApp;
    constructor(databaseIdOrApp: DatabaseId | FirebaseApp, delegate: ExpFirebaseFirestore, _persistenceProvider: PersistenceProvider);
    get _databaseId(): DatabaseId;
    settings(settingsLiteral: PublicSettings): void;
    useEmulator(host: string, port: number): void;
    enableNetwork(): Promise<void>;
    disableNetwork(): Promise<void>;
    enablePersistence(settings?: PublicPersistenceSettings): Promise<void>;
    clearPersistence(): Promise<void>;
    terminate(): Promise<void>;
    waitForPendingWrites(): Promise<void>;
    onSnapshotsInSync(observer: PartialObserver<void>): Unsubscribe;
    onSnapshotsInSync(onSync: () => void): Unsubscribe;
    get app(): FirebaseApp;
    INTERNAL: {
        delete: () => Promise<void>;
    };
    collection(pathString: string): PublicCollectionReference;
    doc(pathString: string): PublicDocumentReference;
    collectionGroup(collectionId: string): PublicQuery;
    runTransaction<T>(updateFunction: (transaction: PublicTransaction) => Promise<T>): Promise<T>;
    batch(): PublicWriteBatch;
}
export declare function ensureFirestoreConfigured(firestore: FirebaseFirestore): FirestoreClient;
export declare function configureFirestore(firestore: FirebaseFirestore): void;
export declare function setLogLevel(level: PublicLogLevel): void;
export declare function loadBundle(db: Firestore, bundleData: ArrayBuffer | ReadableStream<Uint8Array> | string): ApiLoadBundleTask;
export declare function namedQuery(db: Firestore, name: string): Promise<PublicQuery | null>;
/**
 * A reference to a transaction.
 */
export declare class Transaction extends Compat<ExpTransaction> implements PublicTransaction {
    private readonly _firestore;
    constructor(_firestore: Firestore, delegate: ExpTransaction);
    get<T>(documentRef: PublicDocumentReference<T>): Promise<PublicDocumentSnapshot<T>>;
    set<T>(documentRef: DocumentReference<T>, data: Partial<T>, options: PublicSetOptions): Transaction;
    set<T>(documentRef: DocumentReference<T>, data: T): Transaction;
    update(documentRef: PublicDocumentReference<unknown>, data: PublicUpdateData): Transaction;
    update(documentRef: PublicDocumentReference<unknown>, field: string | PublicFieldPath, value: unknown, ...moreFieldsAndValues: unknown[]): Transaction;
    delete(documentRef: PublicDocumentReference<unknown>): Transaction;
}
export declare class WriteBatch extends Compat<ExpWriteBatch> implements PublicWriteBatch {
    set<T>(documentRef: DocumentReference<T>, data: Partial<T>, options: PublicSetOptions): WriteBatch;
    set<T>(documentRef: DocumentReference<T>, data: T): WriteBatch;
    update(documentRef: PublicDocumentReference<unknown>, data: PublicUpdateData): WriteBatch;
    update(documentRef: PublicDocumentReference<unknown>, field: string | PublicFieldPath, value: unknown, ...moreFieldsAndValues: unknown[]): WriteBatch;
    delete(documentRef: PublicDocumentReference<unknown>): WriteBatch;
    commit(): Promise<void>;
}
/**
 * A reference to a particular document in a collection in the database.
 */
export declare class DocumentReference<T = PublicDocumentData> extends Compat<ExpDocumentReference<T>> implements PublicDocumentReference<T> {
    readonly firestore: Firestore;
    private _userDataWriter;
    constructor(firestore: Firestore, delegate: ExpDocumentReference<T>);
    static forPath<U>(path: ResourcePath, firestore: Firestore, converter: UntypedFirestoreDataConverter<U> | null): DocumentReference<U>;
    static forKey<U>(key: DocumentKey, firestore: Firestore, converter: UntypedFirestoreDataConverter<U> | null): DocumentReference<U>;
    get id(): string;
    get parent(): PublicCollectionReference<T>;
    get path(): string;
    collection(pathString: string): PublicCollectionReference<PublicDocumentData>;
    isEqual(other: PublicDocumentReference<T>): boolean;
    set(value: Partial<T>, options: PublicSetOptions): Promise<void>;
    set(value: T): Promise<void>;
    update(value: PublicUpdateData): Promise<void>;
    update(field: string | PublicFieldPath, value: unknown, ...moreFieldsAndValues: unknown[]): Promise<void>;
    delete(): Promise<void>;
    onSnapshot(observer: PartialObserver<PublicDocumentSnapshot<T>>): Unsubscribe;
    onSnapshot(options: PublicSnapshotListenOptions, observer: PartialObserver<PublicDocumentSnapshot<T>>): Unsubscribe;
    onSnapshot(onNext: NextFn<PublicDocumentSnapshot<T>>, onError?: ErrorFn, onCompletion?: CompleteFn): Unsubscribe;
    onSnapshot(options: PublicSnapshotListenOptions, onNext: NextFn<PublicDocumentSnapshot<T>>, onError?: ErrorFn, onCompletion?: CompleteFn): Unsubscribe;
    get(options?: PublicGetOptions): Promise<PublicDocumentSnapshot<T>>;
    withConverter<U>(converter: PublicFirestoreDataConverter<U>): PublicDocumentReference<U>;
}
/**
 * Iterates the list of arguments from an `onSnapshot` call and returns the
 * first argument that may be an `SnapshotListenOptions` object. Returns an
 * empty object if none is found.
 */
export declare function extractSnapshotOptions(args: unknown[]): PublicSnapshotListenOptions;
/**
 * Creates an observer that can be passed to the firestore-exp SDK. The
 * observer converts all observed values into the format expected by the classic
 * SDK.
 *
 * @param args - The list of arguments from an `onSnapshot` call.
 * @param wrapper - The function that converts the firestore-exp type into the
 * type used by this shim.
 */
export declare function wrapObserver<CompatType, ExpType>(args: unknown[], wrapper: (val: ExpType) => CompatType): PartialObserver<ExpType>;
/**
 * Metadata about a snapshot, describing the state of the snapshot.
 */
export declare class SnapshotMetadata implements PublicSnapshotMetadata {
    /**
     * True if the snapshot contains the result of local writes (for example
     * `set()` or `update()` calls) that have not yet been committed to the
     * backend. If your listener has opted into metadata updates (via
     * `SnapshotListenOptions`) you will receive another snapshot with
     * `hasPendingWrites` equal to false once the writes have been committed to
     * the backend.
     */
    readonly hasPendingWrites: boolean;
    /**
     * True if the snapshot was created from cached data rather than guaranteed
     * up-to-date server data. If your listener has opted into metadata updates
     * (via `SnapshotListenOptions`) you will receive another snapshot with
     * `fromCache` set to false once the client has received up-to-date data from
     * the backend.
     */
    readonly fromCache: boolean;
    /** @hideconstructor */
    constructor(hasPendingWrites: boolean, fromCache: boolean);
    /**
     * Returns true if this `SnapshotMetadata` is equal to the provided one.
     *
     * @param other - The `SnapshotMetadata` to compare against.
     * @returns true if this `SnapshotMetadata` is equal to the provided one.
     */
    isEqual(other: PublicSnapshotMetadata): boolean;
}
/**
 * Options interface that can be provided to configure the deserialization of
 * DocumentSnapshots.
 */
export interface SnapshotOptions extends PublicSnapshotOptions {
}
export declare class DocumentSnapshot<T = PublicDocumentData> extends Compat<ExpDocumentSnapshot<T>> implements PublicDocumentSnapshot<T> {
    private readonly _firestore;
    constructor(_firestore: Firestore, delegate: ExpDocumentSnapshot<T>);
    get ref(): DocumentReference<T>;
    get id(): string;
    get metadata(): SnapshotMetadata;
    get exists(): boolean;
    data(options?: PublicSnapshotOptions): T | undefined;
    get(fieldPath: string | PublicFieldPath, options?: PublicSnapshotOptions): any;
    isEqual(other: DocumentSnapshot<T>): boolean;
}
export declare class QueryDocumentSnapshot<T = PublicDocumentData> extends DocumentSnapshot<T> implements PublicQueryDocumentSnapshot<T> {
    data(options?: PublicSnapshotOptions): T;
}
export declare class Query<T = PublicDocumentData> extends Compat<ExpQuery<T>> implements PublicQuery<T> {
    readonly firestore: Firestore;
    private readonly _userDataWriter;
    constructor(firestore: Firestore, delegate: ExpQuery<T>);
    where(fieldPath: string | FieldPath, opStr: PublicWhereFilterOp, value: unknown): Query<T>;
    orderBy(fieldPath: string | FieldPath, directionStr?: PublicOrderByDirection): Query<T>;
    limit(n: number): Query<T>;
    limitToLast(n: number): Query<T>;
    startAt(...args: any[]): Query<T>;
    startAfter(...args: any[]): Query<T>;
    endBefore(...args: any[]): Query<T>;
    endAt(...args: any[]): Query<T>;
    isEqual(other: PublicQuery<T>): boolean;
    get(options?: PublicGetOptions): Promise<QuerySnapshot<T>>;
    onSnapshot(observer: PartialObserver<PublicQuerySnapshot<T>>): Unsubscribe;
    onSnapshot(options: PublicSnapshotListenOptions, observer: PartialObserver<PublicQuerySnapshot<T>>): Unsubscribe;
    onSnapshot(onNext: NextFn<PublicQuerySnapshot<T>>, onError?: ErrorFn, onCompletion?: CompleteFn): Unsubscribe;
    onSnapshot(options: PublicSnapshotListenOptions, onNext: NextFn<PublicQuerySnapshot<T>>, onError?: ErrorFn, onCompletion?: CompleteFn): Unsubscribe;
    withConverter<U>(converter: PublicFirestoreDataConverter<U>): Query<U>;
}
export declare class DocumentChange<T = PublicDocumentData> extends Compat<ExpDocumentChange<T>> implements PublicDocumentChange<T> {
    private readonly _firestore;
    constructor(_firestore: Firestore, delegate: ExpDocumentChange<T>);
    get type(): PublicDocumentChangeType;
    get doc(): QueryDocumentSnapshot<T>;
    get oldIndex(): number;
    get newIndex(): number;
}
export declare class QuerySnapshot<T = PublicDocumentData> extends Compat<ExpQuerySnapshot<T>> implements PublicQuerySnapshot<T> {
    readonly _firestore: Firestore;
    constructor(_firestore: Firestore, delegate: ExpQuerySnapshot<T>);
    get query(): Query<T>;
    get metadata(): SnapshotMetadata;
    get size(): number;
    get empty(): boolean;
    get docs(): Array<QueryDocumentSnapshot<T>>;
    docChanges(options?: PublicSnapshotListenOptions): Array<PublicDocumentChange<T>>;
    forEach(callback: (result: QueryDocumentSnapshot<T>) => void, thisArg?: unknown): void;
    isEqual(other: QuerySnapshot<T>): boolean;
}
export declare class CollectionReference<T = PublicDocumentData> extends Query<T> implements PublicCollectionReference<T> {
    readonly firestore: Firestore;
    readonly _delegate: ExpCollectionReference<T>;
    constructor(firestore: Firestore, _delegate: ExpCollectionReference<T>);
    get id(): string;
    get path(): string;
    get parent(): DocumentReference<PublicDocumentData> | null;
    doc(documentPath?: string): DocumentReference<T>;
    add(data: T): Promise<DocumentReference<T>>;
    isEqual(other: CollectionReference<T>): boolean;
    withConverter<U>(converter: PublicFirestoreDataConverter<U>): CollectionReference<U>;
}
/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */
export declare function applyFirestoreDataConverter<T>(converter: UntypedFirestoreDataConverter<T> | null, value: T, options?: PublicSetOptions): PublicDocumentData;
