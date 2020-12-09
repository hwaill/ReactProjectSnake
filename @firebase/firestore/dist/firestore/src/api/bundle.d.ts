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
import { FirestoreError } from '../util/error';
export interface ApiLoadBundleTask {
    onProgress(next?: (progress: ApiLoadBundleTaskProgress) => any, error?: (error: Error) => any, complete?: () => void): void;
    then<T, R>(onFulfilled?: (a: ApiLoadBundleTaskProgress) => T | PromiseLike<T>, onRejected?: (a: Error) => R | PromiseLike<R>): Promise<T | R>;
    catch<R>(onRejected: (a: Error) => R | PromiseLike<R>): Promise<R | ApiLoadBundleTaskProgress>;
}
export interface ApiLoadBundleTaskProgress {
    documentsLoaded: number;
    totalDocuments: number;
    bytesLoaded: number;
    totalBytes: number;
    taskState: TaskState;
}
export declare type TaskState = 'Error' | 'Running' | 'Success';
export declare class LoadBundleTask implements ApiLoadBundleTask, PromiseLike<ApiLoadBundleTaskProgress> {
    private _progressObserver;
    private _taskCompletionResolver;
    private _lastProgress;
    onProgress(next?: (progress: ApiLoadBundleTaskProgress) => unknown, error?: (err: Error) => unknown, complete?: () => void): void;
    catch<R>(onRejected: (a: Error) => R | PromiseLike<R>): Promise<R | ApiLoadBundleTaskProgress>;
    then<T, R>(onFulfilled?: (a: ApiLoadBundleTaskProgress) => T | PromiseLike<T>, onRejected?: (a: Error) => R | PromiseLike<R>): Promise<T | R>;
    /**
     * Notifies all observers that bundle loading has completed, with a provided
     * `LoadBundleTaskProgress` object.
     */
    _completeWith(progress: ApiLoadBundleTaskProgress): void;
    /**
     * Notifies all observers that bundle loading has failed, with a provided
     * `Error` as the reason.
     */
    _failWith(error: FirestoreError): void;
    /**
     * Notifies a progress update of loading a bundle.
     * @param progress - The new progress.
     */
    _updateProgress(progress: ApiLoadBundleTaskProgress): void;
}