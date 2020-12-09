/**
 * @license
 * Copyright 2020 Google LLC
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
import { FirebaseApp } from '@firebase/app-types-exp';
import { Provider } from '@firebase/component';
import { FirebaseAuthInternalName } from '@firebase/auth-interop-types';
import { FirestoreClient } from '../../../src/core/firestore_client';
import { AsyncQueue } from '../../../src/util/async_queue';
import { FirebaseFirestore as LiteFirestore, Settings as LiteSettings } from '../../../lite/src/api/database';
import { DatabaseId } from '../../../src/core/database_info';
export interface PersistenceSettings {
    forceOwnership?: boolean;
}
export interface Settings extends LiteSettings {
    cacheSizeBytes?: number;
}
/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */
export declare class FirebaseFirestore extends LiteFirestore {
    readonly _queue: AsyncQueue;
    readonly _persistenceKey: string;
    _firestoreClient: FirestoreClient | undefined;
    /** @hideconstructor */
    constructor(databaseIdOrApp: DatabaseId | FirebaseApp, authProvider: Provider<FirebaseAuthInternalName>);
    _terminate(): Promise<void>;
}
/**
 * Initializes a new instance of Cloud Firestore with the provided settings.
 * Can only be called before any other function, including
 * {@link getFirestore}. If the custom settings are empty, this function is
 * equivalent to calling {@link getFirestore}.
 *
 * @param app - The {@link FirebaseApp} with which the `Firestore` instance will
 * be associated.
 * @param settings - A settings object to configure the `Firestore` instance.
 * @returns A newly initialized `Firestore` instance.
 */
export declare function initializeFirestore(app: FirebaseApp, settings: Settings): FirebaseFirestore;
/**
 * Returns the existing instance of Firestore that is associated with the
 * provided {@link FirebaseApp}. If no instance exists, initializes a new
 * instance with default settings.
 *
 * @param app - The {@link FirebaseApp} instance that the returned Firestore
 * instance is associated with.
 * @returns The `Firestore` instance of the provided app.
 */
export declare function getFirestore(app: FirebaseApp): FirebaseFirestore;
/**
 * Attempts to enable persistent storage, if possible.
 *
 * Must be called before any other functions (other than
 * {@link initializeFirestore}, {@link getFirestore} or
 * {@link clearIndexedDbPersistence}.
 *
 * If this fails, `enableIndexedDbPersistence()` will reject the promise it
 * returns. Note that even after this failure, the `Firestore` instance will
 * remain usable, however offline persistence will be disabled.
 *
 * There are several reasons why this can fail, which can be identified by
 * the `code` on the error.
 *
 *   * failed-precondition: The app is already open in another browser tab.
 *   * unimplemented: The browser is incompatible with the offline
 *     persistence implementation.
 *
 * @param firestore - The `Firestore` instance to enable persistence for.
 * @param persistenceSettings - Optional settings object to configure
 * persistence.
 * @returns A promise that represents successfully enabling persistent storage.
 */
export declare function enableIndexedDbPersistence(firestore: FirebaseFirestore, persistenceSettings?: PersistenceSettings): Promise<void>;
/**
 * Attempts to enable multi-tab persistent storage, if possible. If enabled
 * across all tabs, all operations share access to local persistence, including
 * shared execution of queries and latency-compensated local document updates
 * across all connected instances.
 *
 * If this fails, `enableMultiTabIndexedDbPersistence()` will reject the promise
 * it returns. Note that even after this failure, the `Firestore` instance will
 * remain usable, however offline persistence will be disabled.
 *
 * There are several reasons why this can fail, which can be identified by
 * the `code` on the error.
 *
 *   * failed-precondition: The app is already open in another browser tab and
 *     multi-tab is not enabled.
 *   * unimplemented: The browser is incompatible with the offline
 *     persistence implementation.
 *
 * @param firestore - The `Firestore` instance to enable persistence for.
 * @returns A promise that represents successfully enabling persistent
 * storage.
 */
export declare function enableMultiTabIndexedDbPersistence(firestore: FirebaseFirestore): Promise<void>;
/**
 * Clears the persistent storage. This includes pending writes and cached
 * documents.
 *
 * Must be called while the `Firestore` instance is not started (after the app is
 * terminated or when the app is first initialized). On startup, this function
 * must be called before other functions (other than {@link
 * initializeFirestore} or {@link getFirestore})). If the `Firestore`
 * instance is still running, the promise will be rejected with the error code
 * of `failed-precondition`.
 *
 * Note: `clearIndexedDbPersistence()` is primarily intended to help write
 * reliable tests that use Cloud Firestore. It uses an efficient mechanism for
 * dropping existing data but does not attempt to securely overwrite or
 * otherwise make cached data unrecoverable. For applications that are sensitive
 * to the disclosure of cached data in between user sessions, we strongly
 * recommend not enabling persistence at all.
 *
 * @param firestore - The `Firestore` instance to clear persistence for.
 * @returns A promise that is resolved when the persistent storage is
 * cleared. Otherwise, the promise is rejected with an error.
 */
export declare function clearIndexedDbPersistence(firestore: FirebaseFirestore): Promise<void>;
/**
 * Waits until all currently pending writes for the active user have been
 * acknowledged by the backend.
 *
 * The returned Promise resolves immediately if there are no outstanding writes.
 * Otherwise, the Promise waits for all previously issued writes (including
 * those written in a previous app session), but it does not wait for writes
 * that were added after the function is called. If you want to wait for
 * additional writes, call `waitForPendingWrites()` again.
 *
 * Any outstanding `waitForPendingWrites()` Promises are rejected during user
 * changes.
 *
 * @returns A Promise which resolves when all currently pending writes have been
 * acknowledged by the backend.
 */
export declare function waitForPendingWrites(firestore: FirebaseFirestore): Promise<void>;
/**
 * Re-enables use of the network for this Firestore instance after a prior
 * call to {@link disableNetwork}.
 *
 * @returns A promise that is resolved once the network has been enabled.
 */
export declare function enableNetwork(firestore: FirebaseFirestore): Promise<void>;
/**
 * Disables network usage for this instance. It can be re-enabled via {@link
 * enableNetwork}. While the network is disabled, any snapshot listeners,
 * `getDoc()` or `getDocs()` calls will return results from cache, and any write
 * operations will be queued until the network is restored.
 *
 * @returns A promise that is resolved once the network has been disabled.
 */
export declare function disableNetwork(firestore: FirebaseFirestore): Promise<void>;
/**
 * Terminates the provided Firestore instance.
 *
 * After calling `terminate()` only the `clearIndexedDbPersistence()` function
 * may be used. Any other function will throw a `FirestoreError`.
 *
 * To restart after termination, create a new instance of FirebaseFirestore with
 * {@link getFirestore}.
 *
 * Termination does not cancel any pending writes, and any promises that are
 * awaiting a response from the server will not be resolved. If you have
 * persistence enabled, the next time you start this instance, it will resume
 * sending these writes to the server.
 *
 * Note: Under normal circumstances, calling `terminate()` is not required. This
 * function is useful only when you want to force this instance to release all
 * of its resources or in combination with `clearIndexedDbPersistence()` to
 * ensure that all local state is destroyed between test runs.
 *
 * @returns A promise that is resolved when the instance has been successfully
 * terminated.
 */
export declare function terminate(firestore: FirebaseFirestore): Promise<void>;