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
import * as firestore from '@firebase/firestore-types';
import { FieldValue } from '../../../src/compat/field_value';
import { FieldPath } from '../../../src/api/field_path';
import { Timestamp } from '../../../src/api/timestamp';
import { Blob } from '../../../src/api/blob';
import { GeoPoint } from '../../../src/api/geo_point';
import { FirebaseApp } from '@firebase/app-types';
import { Firestore } from '../../../src/api/database';
/**
 * Creates a new test instance of Firestore using either firebase.firestore()
 * or `initializeFirestore` from the modular API.
 */
export declare function newTestFirestore(projectId: string, nameOrApp?: string | FirebaseApp, settings?: firestore.Settings): firestore.FirebaseFirestore;
export { Firestore, FieldValue, FieldPath, Timestamp, Blob, GeoPoint };
