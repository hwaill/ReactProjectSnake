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
/**
 * An enumeration of the possible string formats for upload.
 */
export declare type StringFormat = string;
export declare const StringFormat: {
    RAW: string;
    BASE64: string;
    BASE64URL: string;
    DATA_URL: string;
};
export declare class StringData {
    data: Uint8Array;
    contentType: string | null;
    constructor(data: Uint8Array, contentType?: string | null);
}
export declare function dataFromString(format: StringFormat, stringData: string): StringData;
export declare function utf8Bytes_(value: string): Uint8Array;
export declare function percentEncodedBytes_(value: string): Uint8Array;
export declare function base64Bytes_(format: StringFormat, value: string): Uint8Array;
export declare function dataURLBytes_(dataUrl: string): Uint8Array;
export declare function dataURLContentType_(dataUrl: string): string | null;