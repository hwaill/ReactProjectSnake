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
import { Path } from './util/Path';
import { AuthTokenProvider } from './AuthTokenProvider';
import { PersistentConnection } from './PersistentConnection';
import { FirebaseApp } from '@firebase/app-types';
import { RepoInfo } from './RepoInfo';
import { Database } from '../api/Database';
import { DataSnapshot } from '../api/DataSnapshot';
import { Query } from '../api/Query';
import { EventRegistration } from './view/EventRegistration';
import { Indexable } from './util/misc';
/**
 * A connection to a single data repository.
 */
export declare class Repo {
    repoInfo_: RepoInfo;
    private forceRestClient_;
    app: FirebaseApp;
    authTokenProvider_: AuthTokenProvider;
    /** Key for uniquely identifying this repo, used in RepoManager */
    readonly key: string;
    dataUpdateCount: number;
    private infoSyncTree_;
    private serverSyncTree_;
    private stats_;
    private statsListener_;
    private eventQueue_;
    private nextWriteId_;
    private server_;
    private statsReporter_;
    private transactionsInit_;
    private infoData_;
    private abortTransactions_;
    private rerunTransactions_;
    private interceptServerDataCallback_;
    private __database;
    /** A list of data pieces and paths to be set when this client disconnects. */
    private onDisconnect_;
    persistentConnection_: PersistentConnection | null;
    constructor(repoInfo_: RepoInfo, forceRestClient_: boolean, app: FirebaseApp, authTokenProvider_: AuthTokenProvider);
    start(): void;
    /**
     * @return The URL corresponding to the root of this Firebase.
     */
    toString(): string;
    /**
     * @return The namespace represented by the repo.
     */
    name(): string;
    /**
     * @return The time in milliseconds, taking the server offset into account if we have one.
     */
    serverTime(): number;
    /**
     * Generate ServerValues using some variables from the repo object.
     */
    generateServerValues(): Indexable;
    /**
     * Called by realtime when we get new messages from the server.
     */
    private onDataUpdate_;
    interceptServerData_(callback: ((a: string, b: unknown) => unknown) | null): void;
    private onConnectStatus_;
    private onServerInfoUpdate_;
    private updateInfo_;
    private getNextWriteId_;
    /**
     * The purpose of `getValue` is to return the latest known value
     * satisfying `query`.
     *
     * If the client is connected, this method will send a request
     * to the server. If the client is not connected, then either:
     *
     * 1. The client was once connected, but not anymore.
     * 2. The client has never connected, this is the first operation
     *    this repo is handling.
     *
     * In case (1), it's possible that the client still has an active
     * listener, with cached data. Since this is the latest known
     * value satisfying the query, that's what getValue will return.
     * If there is no cached data, `getValue` surfaces an "offline"
     * error.
     *
     * In case (2), `getValue` will trigger a time-limited connection
     * attempt. If the client is unable to connect to the server, it
     * will surface an "offline" error because there cannot be any
     * cached data. On the other hand, if the client is able to connect,
     * `getValue` will return the server's value for the query, if one
     * exists.
     *
     * @param query - The query to surface a value for.
     */
    getValue(query: Query): Promise<DataSnapshot>;
    setWithPriority(path: Path, newVal: unknown, newPriority: number | string | null, onComplete: ((status: Error | null, errorReason?: string) => void) | null): void;
    update(path: Path, childrenToMerge: {
        [k: string]: unknown;
    }, onComplete: ((status: Error | null, errorReason?: string) => void) | null): void;
    /**
     * Applies all of the changes stored up in the onDisconnect_ tree.
     */
    private runOnDisconnectEvents_;
    onDisconnectCancel(path: Path, onComplete: ((status: Error | null, errorReason?: string) => void) | null): void;
    onDisconnectSet(path: Path, value: unknown, onComplete: ((status: Error | null, errorReason?: string) => void) | null): void;
    onDisconnectSetWithPriority(path: Path, value: unknown, priority: unknown, onComplete: ((status: Error | null, errorReason?: string) => void) | null): void;
    onDisconnectUpdate(path: Path, childrenToMerge: {
        [k: string]: unknown;
    }, onComplete: ((status: Error | null, errorReason?: string) => void) | null): void;
    addEventCallbackForQuery(query: Query, eventRegistration: EventRegistration): void;
    removeEventCallbackForQuery(query: Query, eventRegistration: EventRegistration): void;
    interrupt(): void;
    resume(): void;
    stats(showDelta?: boolean): void;
    statsIncrementCounter(metric: string): void;
    private log_;
    callOnCompleteCallback(callback: ((status: Error | null, errorReason?: string) => void) | null, status: string, errorReason?: string | null): void;
    get database(): Database;
}