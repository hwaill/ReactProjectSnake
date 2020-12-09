import { FirebaseStorageError } from './error';
export declare type NextFn<T> = (value: T) => void;
export declare type ErrorFn = (error: FirebaseStorageError) => void;
export declare type CompleteFn = () => void;
export declare type Unsubscribe = () => void;
export interface StorageObserver<T> {
    next?: NextFn<T>;
    error?: ErrorFn;
    complete?: CompleteFn;
}
export declare type Subscribe<T> = (next?: NextFn<T> | StorageObserver<T>, error?: ErrorFn, complete?: CompleteFn) => Unsubscribe;
export declare class Observer<T> implements StorageObserver<T> {
    next?: NextFn<T>;
    error?: ErrorFn;
    complete?: CompleteFn;
    constructor(nextOrObserver?: NextFn<T> | StorageObserver<T>, error?: ErrorFn, complete?: CompleteFn);
}
