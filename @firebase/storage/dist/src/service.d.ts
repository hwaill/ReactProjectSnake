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
import { Location } from './implementation/location';
import { Request } from './implementation/request';
import { RequestInfo } from './implementation/requestinfo';
import { XhrIoPool } from './implementation/xhriopool';
import { Reference } from './reference';
import { Provider } from '@firebase/component';
import { FirebaseAuthInternalName } from '@firebase/auth-interop-types';
import { FirebaseApp, _FirebaseService } from '@firebase/app-types-exp';
export declare function isUrl(path?: string): boolean;
/**
 * Returns a storage Reference for the given url.
 * @param storage - `Storage` instance.
 * @param url - URL. If empty, returns root reference.
 * @public
 */
export declare function ref(storage: StorageService, url?: string): Reference;
/**
 * Returns a storage Reference for the given path in the
 * default bucket.
 * @param storageOrRef - `Storage` service or storage `Reference`.
 * @param pathOrUrlStorage - path. If empty, returns root reference (if Storage
 * instance provided) or returns same reference (if Reference provided).
 * @public
 */
export declare function ref(storageOrRef: StorageService | Reference, path?: string): Reference;
/**
 * A service that provides Firebase Storage Reference instances.
 * @param opt_url - gs:// url to a custom Storage Bucket
 */
export declare class StorageService implements _FirebaseService {
    readonly app: FirebaseApp;
    /**
     * @internal
     */
    readonly _authProvider: Provider<FirebaseAuthInternalName>;
    /**
     * @internal
     */
    readonly _pool: XhrIoPool;
    /**
     * @internal
     */
    readonly _url?: string | undefined;
    /**
     * @internal
     */
    readonly _bucket: Location | null;
    protected readonly _appId: string | null;
    private readonly _requests;
    private _deleted;
    private _maxOperationRetryTime;
    private _maxUploadRetryTime;
    constructor(app: FirebaseApp, 
    /**
     * @internal
     */
    _authProvider: Provider<FirebaseAuthInternalName>, 
    /**
     * @internal
     */
    _pool: XhrIoPool, 
    /**
     * @internal
     */
    _url?: string | undefined);
    get maxUploadRetryTime(): number;
    set maxUploadRetryTime(time: number);
    get maxOperationRetryTime(): number;
    set maxOperationRetryTime(time: number);
    getAuthToken(): Promise<string | null>;
    /**
     * Stop running requests and prevent more from being created.
     * @internal
     */
    _delete(): Promise<void>;
    /**
     * Returns a new firebaseStorage.Reference object referencing this StorageService
     * at the given Location.
     */
    makeStorageReference(loc: Location): Reference;
    /**
     * @internal
     * @param requestInfo - HTTP RequestInfo object
     * @param authToken - Firebase auth token
     */
    makeRequest<T>(requestInfo: RequestInfo<T>, authToken: string | null): Request<T>;
}
