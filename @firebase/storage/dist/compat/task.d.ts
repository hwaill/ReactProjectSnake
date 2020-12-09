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
import { UploadTask } from '../src/task';
import { UploadTaskSnapshotCompat } from './tasksnapshot';
import { TaskEvent } from '../src/implementation/taskenums';
import * as types from '@firebase/storage-types';
import { ErrorFn, CompleteFn, Subscribe, Unsubscribe } from '../src/implementation/observer';
import { ReferenceCompat } from './reference';
import { FirebaseStorageError } from '../src/implementation/error';
export declare class UploadTaskCompat implements types.UploadTask {
    private readonly _delegate;
    private readonly _ref;
    private readonly _snapshot;
    constructor(_delegate: UploadTask, _ref: ReferenceCompat);
    get snapshot(): UploadTaskSnapshotCompat;
    cancel: () => boolean;
    catch: <T>(onRejected: (p1: FirebaseStorageError) => T | Promise<T>) => Promise<T>;
    pause: () => boolean;
    resume: () => boolean;
    then(onFulfilled?: ((a: UploadTaskSnapshotCompat) => unknown) | null, onRejected?: ((a: FirebaseStorageError) => unknown) | null): Promise<unknown>;
    on(type: TaskEvent, nextOrObserver?: types.StorageObserver<UploadTaskSnapshotCompat> | null | ((a: UploadTaskSnapshotCompat) => unknown), error?: ErrorFn | null, completed?: CompleteFn | null): Unsubscribe | Subscribe<UploadTaskSnapshotCompat>;
}
