import t from "@firebase/app";

import { Logger as n, LogLevel as e } from "@firebase/logger";

import { base64 as s, isMobileCordova as i, isReactNative as r, isElectron as o, isIE as u, isUWP as c, isBrowserExtension as h } from "@firebase/util";

import { XhrIo as a, EventType as l, ErrorCode as _, createWebChannelTransport as f, getStatEventTarget as d, WebChannel as w, Event as E, Stat as m } from "@firebase/webchannel-wrapper";

import { Component as T } from "@firebase/component";

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
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */ class A {
    constructor(t) {
        this.uid = t;
    }
    t() {
        return null != this.uid;
    }
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */    i() {
        return this.t() ? "uid:" + this.uid : "anonymous-user";
    }
    isEqual(t) {
        return t.uid === this.uid;
    }
}

/** A user with a null UID. */ A.UNAUTHENTICATED = new A(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
A.o = new A("google-credentials-uid"), A.u = new A("first-party-uid");

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
const I = new n("@firebase/firestore");

// Helper methods are needed because variables can't be exported as read/write
function R() {
    return I.logLevel;
}

/**
 * Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
 *
 * @param logLevel - The verbosity you set for activity and error logging. Can
 *   be any of the following values:
 *
 *   <ul>
 *     <li>`debug` for the most verbose logging level, primarily for
 *     debugging.</li>
 *     <li>`error` to log errors only.</li>
 *     <li><code>`silent` to turn off logging.</li>
 *   </ul>
 */ function P(t, ...n) {
    if (I.logLevel <= e.DEBUG) {
        const e = n.map(p);
        I.debug("Firestore (8.1.2): " + t, ...e);
    }
}

function y(t, ...n) {
    if (I.logLevel <= e.ERROR) {
        const e = n.map(p);
        I.error("Firestore (8.1.2): " + t, ...e);
    }
}

function V(t, ...n) {
    if (I.logLevel <= e.WARN) {
        const e = n.map(p);
        I.warn("Firestore (8.1.2): " + t, ...e);
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function p(t) {
    if ("string" == typeof t) return t;
    try {
        return n = t, JSON.stringify(n);
    } catch (n) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
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
    /** Formats an object as a JSON string, suitable for logging. */
    var n;
}

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
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function g(t = "Unexpected state") {
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
    const n = "FIRESTORE (8.1.2) INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
    throw y(n), new Error(n);
}

/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */ function v(t, n) {
    t || g();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function b(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
n) {
    return t;
}

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
 */ const C = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
};

/** An error returned by a Firestore operation. */ class S extends Error {
    /** @hideconstructor */
    constructor(t, n) {
        super(n), this.code = t, this.message = n, this.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
    }
}

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
 */ class D {
    constructor(t, n) {
        this.user = n, this.type = "OAuth", this.h = {}, 
        // Set the headers using Object Literal notation to avoid minification
        this.h.Authorization = "Bearer " + t;
    }
}

/** A CredentialsProvider that always yields an empty token. */ class N {
    constructor() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.l = null;
    }
    getToken() {
        return Promise.resolve(null);
    }
    _() {}
    m(t) {
        this.l = t, 
        // Fire with initial user.
        t(A.UNAUTHENTICATED);
    }
    T() {
        this.l = null;
    }
}

class x {
    constructor(t) {
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */
        this.A = null, 
        /** Tracks the current User. */
        this.currentUser = A.UNAUTHENTICATED, this.I = !1, 
        /**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */
        this.R = 0, 
        /** The listener registered with setChangeListener(). */
        this.l = null, this.forceRefresh = !1, this.A = () => {
            this.R++, this.currentUser = this.P(), this.I = !0, this.l && this.l(this.currentUser);
        }, this.R = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.A) : (
        // if auth is not available, invoke tokenListener once with null token
        this.A(null), t.get().then((t => {
            this.auth = t, this.A && 
            // tokenListener can be removed by removeChangeListener()
            this.auth.addAuthTokenListener(this.A);
        }), (() => {})));
    }
    getToken() {
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
        const t = this.R, n = this.forceRefresh;
        return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((n => 
        // Cancel the request since the token changed while the request was
        // outstanding so the response is potentially for a previous user (which
        // user, we can't be sure).
        this.R !== t ? (P("FirebaseCredentialsProvider", "getToken aborted due to token change."), 
        this.getToken()) : n ? (v("string" == typeof n.accessToken), new D(n.accessToken, this.currentUser)) : null)) : Promise.resolve(null);
    }
    _() {
        this.forceRefresh = !0;
    }
    m(t) {
        this.l = t, 
        // Fire the initial event
        this.I && t(this.currentUser);
    }
    T() {
        this.auth && this.auth.removeAuthTokenListener(this.A), this.A = null, this.l = null;
    }
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    P() {
        const t = this.auth && this.auth.getUid();
        return v(null === t || "string" == typeof t), new A(t);
    }
}

/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */ class F {
    constructor(t, n) {
        this.V = t, this.p = n, this.type = "FirstParty", this.user = A.u;
    }
    get h() {
        const t = {
            "X-Goog-AuthUser": this.p
        }, n = this.V.auth.getAuthHeaderValueForFirstParty([]);
        // Use array notation to prevent minification
                return n && (t.Authorization = n), t;
    }
}

/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */ class O {
    constructor(t, n) {
        this.V = t, this.p = n;
    }
    getToken() {
        return Promise.resolve(new F(this.V, this.p));
    }
    m(t) {
        // Fire with initial uid.
        t(A.u);
    }
    T() {}
    _() {}
}

/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */
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
/**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */
function L(t) {
    // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
    const n = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto), e = new Uint8Array(t);
    if (n && "function" == typeof n.getRandomValues) n.getRandomValues(e); else 
    // Falls back to Math.random
    for (let n = 0; n < t; n++) e[n] = Math.floor(256 * Math.random());
    return e;
}

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
 */ class $ {
    static g() {
        // Alphanumeric characters
        const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = Math.floor(256 / t.length) * t.length;
        // The largest byte value that is a multiple of `char.length`.
                let e = "";
        for (;e.length < 20; ) {
            const s = L(40);
            for (let i = 0; i < s.length; ++i) 
            // Only accept values that are [0, maxMultiple), this ensures they can
            // be evenly mapped to indices of `chars` via a modulo operation.
            e.length < 20 && s[i] < n && (e += t.charAt(s[i] % t.length));
        }
        return e;
    }
}

function k(t, n) {
    return t < n ? -1 : t > n ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function M(t, n, e) {
    return t.length === n.length && t.every(((t, s) => e(t, n[s])));
}

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
// The earlist date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * @see https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto
 */
class U {
    /**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */
    constructor(t, n) {
        if (this.seconds = t, this.nanoseconds = n, n < 0) throw new S(C.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + n);
        if (n >= 1e9) throw new S(C.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + n);
        if (t < -62135596800) throw new S(C.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new S(C.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */    static now() {
        return U.fromMillis(Date.now());
    }
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */    static fromDate(t) {
        return U.fromMillis(t.getTime());
    }
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */    static fromMillis(t) {
        const n = Math.floor(t / 1e3);
        return new U(n, 1e6 * (t - 1e3 * n));
    }
    /**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion causes
     * a loss of precision since `Date` objects only support millisecond precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */    toDate() {
        return new Date(this.toMillis());
    }
    /**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */    toMillis() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }
    v(t) {
        return this.seconds === t.seconds ? k(this.nanoseconds, t.nanoseconds) : k(this.seconds, t.seconds);
    }
    /**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */    isEqual(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }
    toString() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }
    toJSON() {
        return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
        };
    }
    /**
     * Converts this object to a primitive string, which allows Timestamp objects to be compared
     * using the `>`, `<=`, `>=` and `>` operators.
     */    valueOf() {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        const t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }
}

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
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */ class q {
    constructor(t) {
        this.timestamp = t;
    }
    static C(t) {
        return new q(t);
    }
    static min() {
        return new q(new U(0, 0));
    }
    S(t) {
        return this.timestamp.v(t.timestamp);
    }
    isEqual(t) {
        return this.timestamp.isEqual(t.timestamp);
    }
    /** Returns a number representation of the version for use in spec tests. */    D() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }
    toString() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }
    N() {
        return this.timestamp;
    }
}

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
 * Path represents an ordered sequence of string segments.
 */
class B {
    constructor(t, n, e) {
        void 0 === n ? n = 0 : n > t.length && g(), void 0 === e ? e = t.length - n : e > t.length - n && g(), 
        this.segments = t, this.offset = n, this.F = e;
    }
    get length() {
        return this.F;
    }
    isEqual(t) {
        return 0 === B.O(this, t);
    }
    child(t) {
        const n = this.segments.slice(this.offset, this.limit());
        return t instanceof B ? t.forEach((t => {
            n.push(t);
        })) : n.push(t), this.L(n);
    }
    /** The index of one past the last segment of the path. */    limit() {
        return this.offset + this.length;
    }
    $(t) {
        return t = void 0 === t ? 1 : t, this.L(this.segments, this.offset + t, this.length - t);
    }
    k() {
        return this.L(this.segments, this.offset, this.length - 1);
    }
    M() {
        return this.segments[this.offset];
    }
    U() {
        return this.get(this.length - 1);
    }
    get(t) {
        return this.segments[this.offset + t];
    }
    q() {
        return 0 === this.length;
    }
    B(t) {
        if (t.length < this.length) return !1;
        for (let n = 0; n < this.length; n++) if (this.get(n) !== t.get(n)) return !1;
        return !0;
    }
    j(t) {
        if (this.length + 1 !== t.length) return !1;
        for (let n = 0; n < this.length; n++) if (this.get(n) !== t.get(n)) return !1;
        return !0;
    }
    forEach(t) {
        for (let n = this.offset, e = this.limit(); n < e; n++) t(this.segments[n]);
    }
    W() {
        return this.segments.slice(this.offset, this.limit());
    }
    static O(t, n) {
        const e = Math.min(t.length, n.length);
        for (let s = 0; s < e; s++) {
            const e = t.get(s), i = n.get(s);
            if (e < i) return -1;
            if (e > i) return 1;
        }
        return t.length < n.length ? -1 : t.length > n.length ? 1 : 0;
    }
}

/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 */ class Q extends B {
    L(t, n, e) {
        return new Q(t, n, e);
    }
    G() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.W().join("/");
    }
    toString() {
        return this.G();
    }
    /**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */    static K(...t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        const n = [];
        for (const e of t) {
            if (e.indexOf("//") >= 0) throw new S(C.INVALID_ARGUMENT, `Invalid segment (${e}). Paths must not contain // in them.`);
            // Strip leading and traling slashed.
                        n.push(...e.split("/").filter((t => t.length > 0)));
        }
        return new Q(n);
    }
    static H() {
        return new Q([]);
    }
}

const j = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

/** A dot-separated path for navigating sub-objects within a document. */ class W extends B {
    L(t, n, e) {
        return new W(t, n, e);
    }
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */    static Y(t) {
        return j.test(t);
    }
    G() {
        return this.W().map((t => (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), W.Y(t) || (t = "`" + t + "`"), 
        t))).join(".");
    }
    toString() {
        return this.G();
    }
    /**
     * Returns true if this field references the key of a document.
     */    J() {
        return 1 === this.length && "__name__" === this.get(0);
    }
    /**
     * The field designating the key of a document.
     */    static X() {
        return new W([ "__name__" ]);
    }
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */    static Z(t) {
        const n = [];
        let e = "", s = 0;
        const i = () => {
            if (0 === e.length) throw new S(C.INVALID_ARGUMENT, `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
            n.push(e), e = "";
        };
        let r = !1;
        for (;s < t.length; ) {
            const n = t[s];
            if ("\\" === n) {
                if (s + 1 === t.length) throw new S(C.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                const n = t[s + 1];
                if ("\\" !== n && "." !== n && "`" !== n) throw new S(C.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                e += n, s += 2;
            } else "`" === n ? (r = !r, s++) : "." !== n || r ? (e += n, s++) : (i(), s++);
        }
        if (i(), r) throw new S(C.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new W(n);
    }
    static H() {
        return new W([]);
    }
}

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
 */ class G {
    constructor(t) {
        this.path = t;
    }
    static tt(t) {
        return new G(Q.K(t));
    }
    static nt(t) {
        return new G(Q.K(t).$(5));
    }
    /** Returns true if the document is in the specified collectionId. */    et(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }
    isEqual(t) {
        return null !== t && 0 === Q.O(this.path, t.path);
    }
    toString() {
        return this.path.toString();
    }
    static O(t, n) {
        return Q.O(t.path, n.path);
    }
    static st(t) {
        return t.length % 2 == 0;
    }
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */    static it(t) {
        return new G(new Q(t.slice()));
    }
}

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
 */ class K {
    /**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     */
    constructor(t, n, e, s, i, r) {
        this.rt = t, this.persistenceKey = n, this.host = e, this.ssl = s, this.forceLongPolling = i, 
        this.ot = r;
    }
}

/** The default database name for a project. */
/** Represents the database ID a Firestore client is associated with. */
class z {
    constructor(t, n) {
        this.projectId = t, this.database = n || "(default)";
    }
    get ut() {
        return "(default)" === this.database;
    }
    isEqual(t) {
        return t instanceof z && t.projectId === this.projectId && t.database === this.database;
    }
}

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
 * Returns whether a variable is either undefined or null.
 */ function H(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function Y(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return 0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value - The value to test for being an integer and in the safe range
 */
/**
 * @license
 * Copyright 2019 Google LLC
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
// Visible for testing
class J {
    constructor(t, n = null, e = [], s = [], i = null, r = null, o = null) {
        this.path = t, this.collectionGroup = n, this.orderBy = e, this.filters = s, this.limit = i, 
        this.startAt = r, this.endAt = o, this.ct = null;
    }
}

/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */ function X(t, n = null, e = [], s = [], i = null, r = null, o = null) {
    return new J(t, n, e, s, i, r, o);
}

function Z(t) {
    const n = b(t);
    if (null === n.ct) {
        let t = n.path.G();
        null !== n.collectionGroup && (t += "|cg:" + n.collectionGroup), t += "|f:", t += n.filters.map((t => Ge(t))).join(","), 
        t += "|ob:", t += n.orderBy.map((t => function(t) {
            // TODO(b/29183165): Make this collision robust.
            return t.field.G() + t.dir;
        }(t))).join(","), H(n.limit) || (t += "|l:", t += n.limit), n.startAt && (t += "|lb:", 
        t += es(n.startAt)), n.endAt && (t += "|ub:", t += es(n.endAt)), n.ct = t;
    }
    return n.ct;
}

function tt(t) {
    let n = t.path.G();
    return null !== t.collectionGroup && (n += " collectionGroup=" + t.collectionGroup), 
    t.filters.length > 0 && (n += `, filters: [${t.filters.map((t => {
        return `${(n = t).field.G()} ${n.op} ${Yt(n.value)}`;
        /** Returns a debug description for `filter`. */
        var n;
        /** Filter that matches on key fields (i.e. '__name__'). */    })).join(", ")}]`), 
    H(t.limit) || (n += ", limit: " + t.limit), t.orderBy.length > 0 && (n += `, orderBy: [${t.orderBy.map((t => function(t) {
        return `${t.field.G()} (${t.dir})`;
    }(t))).join(", ")}]`), t.startAt && (n += ", startAt: " + es(t.startAt)), t.endAt && (n += ", endAt: " + es(t.endAt)), 
    `Target(${n})`;
}

function nt(t, n) {
    if (t.limit !== n.limit) return !1;
    if (t.orderBy.length !== n.orderBy.length) return !1;
    for (let e = 0; e < t.orderBy.length; e++) if (!us(t.orderBy[e], n.orderBy[e])) return !1;
    if (t.filters.length !== n.filters.length) return !1;
    for (let i = 0; i < t.filters.length; i++) if (e = t.filters[i], s = n.filters[i], 
    e.op !== s.op || !e.field.isEqual(s.field) || !Gt(e.value, s.value)) return !1;
    var e, s;
    return t.collectionGroup === n.collectionGroup && (!!t.path.isEqual(n.path) && (!!is(t.startAt, n.startAt) && is(t.endAt, n.endAt)));
}

function et(t) {
    return G.st(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}

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
// WebSafe uses a different URL-encoding safe alphabet that doesn't match
// the encoding used on the backend.
/** Converts a Base64 encoded string to a binary string. */
function st(t) {
    return String.fromCharCode.apply(null, 
    // We use `decodeStringToByteArray()` instead of `decodeString()` since
    // `decodeString()` returns Unicode strings, which doesn't match the values
    // returned by `atob()`'s Latin1 representation.
    s.decodeStringToByteArray(t, false));
}

/** Converts a binary string to a Base64 encoded string. */
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
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */
class it {
    constructor(t) {
        this.ht = t;
    }
    static fromBase64String(t) {
        const n = st(t);
        return new it(n);
    }
    static fromUint8Array(t) {
        const n = 
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            let n = "";
            for (let e = 0; e < t.length; ++e) n += String.fromCharCode(t[e]);
            return n;
        }
        /**
 * Helper function to convert a binary string to an Uint8Array.
 */ (t);
        return new it(n);
    }
    toBase64() {
        return function(t) {
            const n = [];
            for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
            return s.encodeByteArray(n, !1);
        }(this.ht);
    }
    toUint8Array() {
        return function(t) {
            const n = new Uint8Array(t.length);
            for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
            return n;
        }
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
 * An immutable set of metadata that the local store tracks for each target.
 */ (this.ht);
    }
    at() {
        return 2 * this.ht.length;
    }
    S(t) {
        return k(this.ht, t.ht);
    }
    isEqual(t) {
        return this.ht === t.ht;
    }
}

it.lt = new it("");

class rt {
    constructor(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    n, 
    /** The purpose of the target. */
    e, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    s, 
    /** The latest snapshot version seen for this target. */
    i = q.min()
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , r = q.min()
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , o = it.lt) {
        this.target = t, this.targetId = n, this._t = e, this.sequenceNumber = s, this.ft = i, 
        this.lastLimboFreeSnapshotVersion = r, this.resumeToken = o;
    }
    /** Creates a new target data instance with an updated sequence number. */    dt(t) {
        return new rt(this.target, this.targetId, this._t, t, this.ft, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */    wt(t, n) {
        return new rt(this.target, this.targetId, this._t, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, t);
    }
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */    Et(t) {
        return new rt(this.target, this.targetId, this._t, this.sequenceNumber, this.ft, t, this.resumeToken);
    }
}

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
 */ class ot {
    // TODO(b/33078163): just use simplest form of existence filter for now
    constructor(t) {
        this.count = t;
    }
}

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
 * Error Codes describing the different ways GRPC can fail. These are copied
 * directly from GRPC's sources here:
 *
 * https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
 *
 * Important! The names of these identifiers matter because the string forms
 * are used for reverse lookups from the webchannel stream. Do NOT change the
 * names of these identifiers or change this into a const enum.
 */ var ut, ct;

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function ht(t) {
    switch (t) {
      case C.OK:
        return g();

      case C.CANCELLED:
      case C.UNKNOWN:
      case C.DEADLINE_EXCEEDED:
      case C.RESOURCE_EXHAUSTED:
      case C.INTERNAL:
      case C.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case C.UNAUTHENTICATED:
        return !1;

      case C.INVALID_ARGUMENT:
      case C.NOT_FOUND:
      case C.ALREADY_EXISTS:
      case C.PERMISSION_DENIED:
      case C.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case C.ABORTED:
      case C.OUT_OF_RANGE:
      case C.UNIMPLEMENTED:
      case C.DATA_LOSS:
        return !0;

      default:
        return g();
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */
function at(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return y("GRPC error has no .code"), C.UNKNOWN;
    switch (t) {
      case ut.OK:
        return C.OK;

      case ut.CANCELLED:
        return C.CANCELLED;

      case ut.UNKNOWN:
        return C.UNKNOWN;

      case ut.DEADLINE_EXCEEDED:
        return C.DEADLINE_EXCEEDED;

      case ut.RESOURCE_EXHAUSTED:
        return C.RESOURCE_EXHAUSTED;

      case ut.INTERNAL:
        return C.INTERNAL;

      case ut.UNAVAILABLE:
        return C.UNAVAILABLE;

      case ut.UNAUTHENTICATED:
        return C.UNAUTHENTICATED;

      case ut.INVALID_ARGUMENT:
        return C.INVALID_ARGUMENT;

      case ut.NOT_FOUND:
        return C.NOT_FOUND;

      case ut.ALREADY_EXISTS:
        return C.ALREADY_EXISTS;

      case ut.PERMISSION_DENIED:
        return C.PERMISSION_DENIED;

      case ut.FAILED_PRECONDITION:
        return C.FAILED_PRECONDITION;

      case ut.ABORTED:
        return C.ABORTED;

      case ut.OUT_OF_RANGE:
        return C.OUT_OF_RANGE;

      case ut.UNIMPLEMENTED:
        return C.UNIMPLEMENTED;

      case ut.DATA_LOSS:
        return C.DATA_LOSS;

      default:
        return g();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (ct = ut || (ut = {}))[ct.OK = 0] = "OK", ct[ct.CANCELLED = 1] = "CANCELLED", 
ct[ct.UNKNOWN = 2] = "UNKNOWN", ct[ct.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
ct[ct.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", ct[ct.NOT_FOUND = 5] = "NOT_FOUND", 
ct[ct.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", ct[ct.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
ct[ct.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", ct[ct.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
ct[ct.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", ct[ct.ABORTED = 10] = "ABORTED", 
ct[ct.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", ct[ct.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
ct[ct.INTERNAL = 13] = "INTERNAL", ct[ct.UNAVAILABLE = 14] = "UNAVAILABLE", ct[ct.DATA_LOSS = 15] = "DATA_LOSS";

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
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
class lt {
    constructor(t, n) {
        this.O = t, this.root = n || ft.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
    Tt(t, n) {
        return new lt(this.O, this.root.Tt(t, n, this.O).copy(null, null, ft.At, null, null));
    }
    // Returns a copy of the map, with the specified key removed.
    remove(t) {
        return new lt(this.O, this.root.remove(t, this.O).copy(null, null, ft.At, null, null));
    }
    // Returns the value of the node with the given key, or null.
    get(t) {
        let n = this.root;
        for (;!n.q(); ) {
            const e = this.O(t, n.key);
            if (0 === e) return n.value;
            e < 0 ? n = n.left : e > 0 && (n = n.right);
        }
        return null;
    }
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    indexOf(t) {
        // Number of nodes that were pruned when descending right
        let n = 0, e = this.root;
        for (;!e.q(); ) {
            const s = this.O(t, e.key);
            if (0 === s) return n + e.left.size;
            s < 0 ? e = e.left : (
            // Count all nodes left of the node plus the node itself
            n += e.left.size + 1, e = e.right);
        }
        // Node not found
                return -1;
    }
    q() {
        return this.root.q();
    }
    // Returns the total number of nodes in the map.
    get size() {
        return this.root.size;
    }
    // Returns the minimum key in the map.
    It() {
        return this.root.It();
    }
    // Returns the maximum key in the map.
    Rt() {
        return this.root.Rt();
    }
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    Pt(t) {
        return this.root.Pt(t);
    }
    forEach(t) {
        this.Pt(((n, e) => (t(n, e), !1)));
    }
    toString() {
        const t = [];
        return this.Pt(((n, e) => (t.push(`${n}:${e}`), !1))), `{${t.join(", ")}}`;
    }
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    yt(t) {
        return this.root.yt(t);
    }
    // Returns an iterator over the SortedMap.
    Vt() {
        return new _t(this.root, null, this.O, !1);
    }
    gt(t) {
        return new _t(this.root, t, this.O, !1);
    }
    vt() {
        return new _t(this.root, null, this.O, !0);
    }
    bt(t) {
        return new _t(this.root, t, this.O, !0);
    }
}

 // end SortedMap
// An iterator over an LLRBNode.
class _t {
    constructor(t, n, e, s) {
        this.Ct = s, this.St = [];
        let i = 1;
        for (;!t.q(); ) if (i = n ? e(t.key, n) : 1, 
        // flip the comparison if we're going in reverse
        s && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this.Ct ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.St.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
            this.St.push(t), t = this.Ct ? t.right : t.left;
        }
    }
    Dt() {
        let t = this.St.pop();
        const n = {
            key: t.key,
            value: t.value
        };
        if (this.Ct) for (t = t.left; !t.q(); ) this.St.push(t), t = t.right; else for (t = t.right; !t.q(); ) this.St.push(t), 
        t = t.left;
        return n;
    }
    Nt() {
        return this.St.length > 0;
    }
    xt() {
        if (0 === this.St.length) return null;
        const t = this.St[this.St.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }
}

 // end SortedMapIterator
// Represents a node in a Left-leaning Red-Black tree.
class ft {
    constructor(t, n, e, s, i) {
        this.key = t, this.value = n, this.color = null != e ? e : ft.RED, this.left = null != s ? s : ft.EMPTY, 
        this.right = null != i ? i : ft.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
    copy(t, n, e, s, i) {
        return new ft(null != t ? t : this.key, null != n ? n : this.value, null != e ? e : this.color, null != s ? s : this.left, null != i ? i : this.right);
    }
    q() {
        return !1;
    }
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    Pt(t) {
        return this.left.Pt(t) || t(this.key, this.value) || this.right.Pt(t);
    }
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    yt(t) {
        return this.right.yt(t) || t(this.key, this.value) || this.left.yt(t);
    }
    // Returns the minimum node in the tree.
    min() {
        return this.left.q() ? this : this.left.min();
    }
    // Returns the maximum key in the tree.
    It() {
        return this.min().key;
    }
    // Returns the maximum key in the tree.
    Rt() {
        return this.right.q() ? this.key : this.right.Rt();
    }
    // Returns new tree, with the key/value added.
    Tt(t, n, e) {
        let s = this;
        const i = e(t, s.key);
        return s = i < 0 ? s.copy(null, null, null, s.left.Tt(t, n, e), null) : 0 === i ? s.copy(null, n, null, null, null) : s.copy(null, null, null, null, s.right.Tt(t, n, e)), 
        s.Ft();
    }
    Ot() {
        if (this.left.q()) return ft.EMPTY;
        let t = this;
        return t.left.Lt() || t.left.left.Lt() || (t = t.$t()), t = t.copy(null, null, null, t.left.Ot(), null), 
        t.Ft();
    }
    // Returns new tree, with the specified item removed.
    remove(t, n) {
        let e, s = this;
        if (n(t, s.key) < 0) s.left.q() || s.left.Lt() || s.left.left.Lt() || (s = s.$t()), 
        s = s.copy(null, null, null, s.left.remove(t, n), null); else {
            if (s.left.Lt() && (s = s.kt()), s.right.q() || s.right.Lt() || s.right.left.Lt() || (s = s.Mt()), 
            0 === n(t, s.key)) {
                if (s.right.q()) return ft.EMPTY;
                e = s.right.min(), s = s.copy(e.key, e.value, null, null, s.right.Ot());
            }
            s = s.copy(null, null, null, null, s.right.remove(t, n));
        }
        return s.Ft();
    }
    Lt() {
        return this.color;
    }
    // Returns new tree after performing any needed rotations.
    Ft() {
        let t = this;
        return t.right.Lt() && !t.left.Lt() && (t = t.Ut()), t.left.Lt() && t.left.left.Lt() && (t = t.kt()), 
        t.left.Lt() && t.right.Lt() && (t = t.qt()), t;
    }
    $t() {
        let t = this.qt();
        return t.right.left.Lt() && (t = t.copy(null, null, null, null, t.right.kt()), t = t.Ut(), 
        t = t.qt()), t;
    }
    Mt() {
        let t = this.qt();
        return t.left.left.Lt() && (t = t.kt(), t = t.qt()), t;
    }
    Ut() {
        const t = this.copy(null, null, ft.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, t, null);
    }
    kt() {
        const t = this.copy(null, null, ft.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, t);
    }
    qt() {
        const t = this.left.copy(null, null, !this.left.color, null, null), n = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, n);
    }
    // For testing.
    Bt() {
        const t = this.Qt();
        return Math.pow(2, t) <= this.size + 1;
    }
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    Qt() {
        if (this.Lt() && this.left.Lt()) throw g();
        if (this.right.Lt()) throw g();
        const t = this.left.Qt();
        if (t !== this.right.Qt()) throw g();
        return t + (this.Lt() ? 0 : 1);
    }
}

 // end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
ft.EMPTY = null, ft.RED = !0, ft.At = !1;

// end LLRBEmptyNode
ft.EMPTY = new 
// Represents an empty node (a leaf node in the Red-Black Tree).
class {
    constructor() {
        this.size = 0;
    }
    get key() {
        throw g();
    }
    get value() {
        throw g();
    }
    get color() {
        throw g();
    }
    get left() {
        throw g();
    }
    get right() {
        throw g();
    }
    // Returns a copy of the current node.
    copy(t, n, e, s, i) {
        return this;
    }
    // Returns a copy of the tree, with the specified key/value added.
    Tt(t, n, e) {
        return new ft(t, n);
    }
    // Returns a copy of the tree, with the specified key removed.
    remove(t, n) {
        return this;
    }
    q() {
        return !0;
    }
    Pt(t) {
        return !1;
    }
    yt(t) {
        return !1;
    }
    It() {
        return null;
    }
    Rt() {
        return null;
    }
    Lt() {
        return !1;
    }
    // For testing.
    Bt() {
        return !0;
    }
    Qt() {
        return 0;
    }
};

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
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
class dt {
    constructor(t) {
        this.O = t, this.data = new lt(this.O);
    }
    has(t) {
        return null !== this.data.get(t);
    }
    first() {
        return this.data.It();
    }
    last() {
        return this.data.Rt();
    }
    get size() {
        return this.data.size;
    }
    indexOf(t) {
        return this.data.indexOf(t);
    }
    /** Iterates elements in order defined by "comparator" */    forEach(t) {
        this.data.Pt(((n, e) => (t(n), !1)));
    }
    /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */    jt(t, n) {
        const e = this.data.gt(t[0]);
        for (;e.Nt(); ) {
            const s = e.Dt();
            if (this.O(s.key, t[1]) >= 0) return;
            n(s.key);
        }
    }
    /**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */    Wt(t, n) {
        let e;
        for (e = void 0 !== n ? this.data.gt(n) : this.data.Vt(); e.Nt(); ) {
            if (!t(e.Dt().key)) return;
        }
    }
    /** Finds the least element greater than or equal to `elem`. */    Gt(t) {
        const n = this.data.gt(t);
        return n.Nt() ? n.Dt().key : null;
    }
    Vt() {
        return new wt(this.data.Vt());
    }
    gt(t) {
        return new wt(this.data.gt(t));
    }
    /** Inserts or updates an element */    add(t) {
        return this.copy(this.data.remove(t).Tt(t, !0));
    }
    /** Deletes an element */    delete(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }
    q() {
        return this.data.q();
    }
    Kt(t) {
        let n = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return n.size < t.size && (n = t, t = this), t.forEach((t => {
            n = n.add(t);
        })), n;
    }
    isEqual(t) {
        if (!(t instanceof dt)) return !1;
        if (this.size !== t.size) return !1;
        const n = this.data.Vt(), e = t.data.Vt();
        for (;n.Nt(); ) {
            const t = n.Dt().key, s = e.Dt().key;
            if (0 !== this.O(t, s)) return !1;
        }
        return !0;
    }
    W() {
        const t = [];
        return this.forEach((n => {
            t.push(n);
        })), t;
    }
    toString() {
        const t = [];
        return this.forEach((n => t.push(n))), "SortedSet(" + t.toString() + ")";
    }
    copy(t) {
        const n = new dt(this.O);
        return n.data = t, n;
    }
}

class wt {
    constructor(t) {
        this.zt = t;
    }
    Dt() {
        return this.zt.Dt().key;
    }
    Nt() {
        return this.zt.Nt();
    }
}

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
 */ const Et = new lt(G.O);

function mt() {
    return Et;
}

function Tt() {
    return mt();
}

const At = new lt(G.O);

function It() {
    return At;
}

const Rt = new lt(G.O);

const Pt = new dt(G.O);

function yt(...t) {
    let n = Pt;
    for (const e of t) n = n.add(e);
    return n;
}

const Vt = new dt(k);

function pt() {
    return Vt;
}

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
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ class gt {
    /** The default ordering is by key if the comparator is omitted */
    constructor(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.O = t ? (n, e) => t(n, e) || G.O(n.key, e.key) : (t, n) => G.O(t.key, n.key), 
        this.Ht = It(), this.Yt = new lt(this.O);
    }
    /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */    static Jt(t) {
        return new gt(t.O);
    }
    has(t) {
        return null != this.Ht.get(t);
    }
    get(t) {
        return this.Ht.get(t);
    }
    first() {
        return this.Yt.It();
    }
    last() {
        return this.Yt.Rt();
    }
    q() {
        return this.Yt.q();
    }
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */    indexOf(t) {
        const n = this.Ht.get(t);
        return n ? this.Yt.indexOf(n) : -1;
    }
    get size() {
        return this.Yt.size;
    }
    /** Iterates documents in order defined by "comparator" */    forEach(t) {
        this.Yt.Pt(((n, e) => (t(n), !1)));
    }
    /** Inserts or updates a document with the same key */    add(t) {
        // First remove the element if we have it.
        const n = this.delete(t.key);
        return n.copy(n.Ht.Tt(t.key, t), n.Yt.Tt(t, null));
    }
    /** Deletes a document with a given key */    delete(t) {
        const n = this.get(t);
        return n ? this.copy(this.Ht.remove(t), this.Yt.remove(n)) : this;
    }
    isEqual(t) {
        if (!(t instanceof gt)) return !1;
        if (this.size !== t.size) return !1;
        const n = this.Yt.Vt(), e = t.Yt.Vt();
        for (;n.Nt(); ) {
            const t = n.Dt().key, s = e.Dt().key;
            if (!t.isEqual(s)) return !1;
        }
        return !0;
    }
    toString() {
        const t = [];
        return this.forEach((n => {
            t.push(n.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }
    copy(t, n) {
        const e = new gt;
        return e.O = this.O, e.Ht = t, e.Yt = n, e;
    }
}

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
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ class vt {
    constructor() {
        this.Xt = new lt(G.O);
    }
    track(t) {
        const n = t.doc.key, e = this.Xt.get(n);
        e ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === e.type ? this.Xt = this.Xt.Tt(n, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== e.type ? this.Xt = this.Xt.Tt(n, {
            type: e.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === e.type ? this.Xt = this.Xt.Tt(n, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === e.type ? this.Xt = this.Xt.Tt(n, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === e.type ? this.Xt = this.Xt.remove(n) : 1 /* Removed */ === t.type && 2 /* Modified */ === e.type ? this.Xt = this.Xt.Tt(n, {
            type: 1 /* Removed */ ,
            doc: e.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === e.type ? this.Xt = this.Xt.Tt(n, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        g() : this.Xt = this.Xt.Tt(n, t);
    }
    Zt() {
        const t = [];
        return this.Xt.Pt(((n, e) => {
            t.push(e);
        })), t;
    }
}

class bt {
    constructor(t, n, e, s, i, r, o, u) {
        this.query = t, this.docs = n, this.tn = e, this.docChanges = s, this.nn = i, this.fromCache = r, 
        this.en = o, this.sn = u;
    }
    /** Returns a view snapshot as if all documents in the snapshot were added. */    static rn(t, n, e, s) {
        const i = [];
        return n.forEach((t => {
            i.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new bt(t, n, gt.Jt(n), i, e, s, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }
    get hasPendingWrites() {
        return !this.nn.q();
    }
    isEqual(t) {
        if (!(this.fromCache === t.fromCache && this.en === t.en && this.nn.isEqual(t.nn) && Ue(this.query, t.query) && this.docs.isEqual(t.docs) && this.tn.isEqual(t.tn))) return !1;
        const n = this.docChanges, e = t.docChanges;
        if (n.length !== e.length) return !1;
        for (let t = 0; t < n.length; t++) if (n[t].type !== e[t].type || !n[t].doc.isEqual(e[t].doc)) return !1;
        return !0;
    }
}

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
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */ class Ct {
    constructor(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    n, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    e, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    s, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.ft = t, this.on = n, this.un = e, this.cn = s, this.hn = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
    static an(t, n) {
        const e = new Map;
        return e.set(t, St.ln(t, n)), new Ct(q.min(), e, pt(), mt(), yt());
    }
}

/**
 * A TargetChange specifies the set of changes for a specific target as part of
 * a RemoteEvent. These changes track which documents are added, modified or
 * removed, as well as the target's resume token and whether the target is
 * marked CURRENT.
 * The actual changes *to* documents are not part of the TargetChange since
 * documents may be part of multiple targets.
 */ class St {
    constructor(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    n, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    e, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    s, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this._n = n, this.fn = e, this.dn = s, this.wn = i;
    }
    /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */    static ln(t, n) {
        return new St(it.lt, n, yt(), yt(), yt());
    }
}

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
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */ class Dt {
    constructor(
    /** The new document applies to all of these targets. */
    t, 
    /** The new document is removed from all of these targets. */
    n, 
    /** The key of the document for this change. */
    e, 
    /**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
    s) {
        this.En = t, this.removedTargetIds = n, this.key = e, this.mn = s;
    }
}

class Nt {
    constructor(t, n) {
        this.targetId = t, this.Tn = n;
    }
}

class xt {
    constructor(
    /** What kind of change occurred to the watch target. */
    t, 
    /** The target IDs that were added/removed/set. */
    n, 
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
    e = it.lt
    /** An RPC error indicating why the watch failed. */ , s = null) {
        this.state = t, this.targetIds = n, this.resumeToken = e, this.cause = s;
    }
}

/** Tracks the internal state of a Watch target. */ class Ft {
    constructor() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.An = 0, 
        /**
         * Keeps track of the document changes since the last raised snapshot.
         *
         * These changes are continuously updated as we receive document updates and
         * always reflect the current set of changes against the last issued snapshot.
         */
        this.In = $t(), 
        /** See public getters for explanations of these fields. */
        this.Rn = it.lt, this.Pn = !1, 
        /**
         * Whether this target state should be included in the next snapshot. We
         * initialize to true so that newly-added targets are included in the next
         * RemoteEvent.
         */
        this.yn = !0;
    }
    /**
     * Whether this target has been marked 'current'.
     *
     * 'Current' has special meaning in the RPC protocol: It implies that the
     * Watch backend has sent us all changes up to the point at which the target
     * was added and that the target is consistent with the rest of the watch
     * stream.
     */    get _n() {
        return this.Pn;
    }
    /** The last resume token sent to us for this target. */    get resumeToken() {
        return this.Rn;
    }
    /** Whether this target has pending target adds or target removes. */    get Vn() {
        return 0 !== this.An;
    }
    /** Whether we have modified any state that should trigger a snapshot. */    get pn() {
        return this.yn;
    }
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */    gn(t) {
        t.at() > 0 && (this.yn = !0, this.Rn = t);
    }
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */    vn() {
        let t = yt(), n = yt(), e = yt();
        return this.In.forEach(((s, i) => {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(s);
                break;

              case 2 /* Modified */ :
                n = n.add(s);
                break;

              case 1 /* Removed */ :
                e = e.add(s);
                break;

              default:
                g();
            }
        })), new St(this.Rn, this.Pn, t, n, e);
    }
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */    bn() {
        this.yn = !1, this.In = $t();
    }
    Cn(t, n) {
        this.yn = !0, this.In = this.In.Tt(t, n);
    }
    Sn(t) {
        this.yn = !0, this.In = this.In.remove(t);
    }
    Dn() {
        this.An += 1;
    }
    Nn() {
        this.An -= 1;
    }
    xn() {
        this.yn = !0, this.Pn = !0;
    }
}

/**
 * A helper class to accumulate watch changes into a RemoteEvent.
 */
class Ot {
    constructor(t) {
        this.Fn = t, 
        /** The internal state of all tracked targets. */
        this.On = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.Ln = mt(), 
        /** A mapping of document keys to their set of target IDs. */
        this.$n = Lt(), 
        /**
         * A list of targets with existence filter mismatches. These targets are
         * known to be inconsistent and their listens needs to be re-established by
         * RemoteStore.
         */
        this.kn = new dt(k);
    }
    /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */    Mn(t) {
        for (const n of t.En) t.mn instanceof ve ? this.Un(n, t.mn) : t.mn instanceof be && this.qn(n, t.key, t.mn);
        for (const n of t.removedTargetIds) this.qn(n, t.key, t.mn);
    }
    /** Processes and adds the WatchTargetChange to the current set of changes. */    Bn(t) {
        this.Qn(t, (n => {
            const e = this.jn(n);
            switch (t.state) {
              case 0 /* NoChange */ :
                this.Wn(n) && e.gn(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                e.Nn(), e.Vn || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                e.bn(), e.gn(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                e.Nn(), e.Vn || this.removeTarget(n);
                break;

              case 3 /* Current */ :
                this.Wn(n) && (e.xn(), e.gn(t.resumeToken));
                break;

              case 4 /* Reset */ :
                this.Wn(n) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                this.Gn(n), e.gn(t.resumeToken));
                break;

              default:
                g();
            }
        }));
    }
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */    Qn(t, n) {
        t.targetIds.length > 0 ? t.targetIds.forEach(n) : this.On.forEach(((t, e) => {
            this.Wn(e) && n(e);
        }));
    }
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */    Kn(t) {
        const n = t.targetId, e = t.Tn.count, s = this.zn(n);
        if (s) {
            const t = s.target;
            if (et(t)) if (0 === e) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                const e = new G(t.path);
                this.qn(n, e, new be(e, q.min()));
            } else v(1 === e); else {
                this.Hn(n) !== e && (
                // Existence filter mismatch: We reset the mapping and raise a new
                // snapshot with `isFromCache:true`.
                this.Gn(n), this.kn = this.kn.add(n));
            }
        }
    }
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */    Yn(t) {
        const n = new Map;
        this.On.forEach(((e, s) => {
            const i = this.zn(s);
            if (i) {
                if (e._n && et(i.target)) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    const n = new G(i.target.path);
                    null !== this.Ln.get(n) || this.Jn(s, n) || this.qn(s, n, new be(n, t));
                }
                e.pn && (n.set(s, e.vn()), e.bn());
            }
        }));
        let e = yt();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.$n.forEach(((t, n) => {
            let s = !0;
            n.Wt((t => {
                const n = this.zn(t);
                return !n || 2 /* LimboResolution */ === n._t || (s = !1, !1);
            })), s && (e = e.add(t));
        }));
        const s = new Ct(t, n, this.kn, this.Ln, e);
        return this.Ln = mt(), this.$n = Lt(), this.kn = new dt(k), s;
    }
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    Un(t, n) {
        if (!this.Wn(t)) return;
        const e = this.Jn(t, n.key) ? 2 /* Modified */ : 0 /* Added */;
        this.jn(t).Cn(n.key, e), this.Ln = this.Ln.Tt(n.key, n), this.$n = this.$n.Tt(n.key, this.Xn(n.key).add(t));
    }
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    qn(t, n, e) {
        if (!this.Wn(t)) return;
        const s = this.jn(t);
        this.Jn(t, n) ? s.Cn(n, 1 /* Removed */) : 
        // The document may have entered and left the target before we raised a
        // snapshot, so we can just ignore the change.
        s.Sn(n), this.$n = this.$n.Tt(n, this.Xn(n).delete(t)), e && (this.Ln = this.Ln.Tt(n, e));
    }
    removeTarget(t) {
        this.On.delete(t);
    }
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */    Hn(t) {
        const n = this.jn(t).vn();
        return this.Fn.Zn(t).size + n.fn.size - n.wn.size;
    }
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */    Dn(t) {
        this.jn(t).Dn();
    }
    jn(t) {
        let n = this.On.get(t);
        return n || (n = new Ft, this.On.set(t, n)), n;
    }
    Xn(t) {
        let n = this.$n.get(t);
        return n || (n = new dt(k), this.$n = this.$n.Tt(t, n)), n;
    }
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */    Wn(t) {
        const n = null !== this.zn(t);
        return n || P("WatchChangeAggregator", "Detected inactive target", t), n;
    }
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */    zn(t) {
        const n = this.On.get(t);
        return n && n.Vn ? null : this.Fn.te(t);
    }
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */    Gn(t) {
        this.On.set(t, new Ft);
        this.Fn.Zn(t).forEach((n => {
            this.qn(t, n, /*updatedDocument=*/ null);
        }));
    }
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */    Jn(t, n) {
        return this.Fn.Zn(t).has(n);
    }
}

function Lt() {
    return new lt(G.O);
}

function $t() {
    return new lt(G.O);
}

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
 */ function kt(t) {
    let n = 0;
    for (const e in t) Object.prototype.hasOwnProperty.call(t, e) && n++;
    return n;
}

function Mt(t, n) {
    for (const e in t) Object.prototype.hasOwnProperty.call(t, e) && n(e, t[e]);
}

function Ut(t) {
    for (const n in t) if (Object.prototype.hasOwnProperty.call(t, n)) return !1;
    return !0;
}

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
/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   TransformMutation (see TransformMutation.applyTo()). They can only exist in
 *   the local view of a document. Therefore they do not need to be parsed or
 *   serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function qt(t) {
    var n, e;
    return "server_timestamp" === (null === (e = ((null === (n = null == t ? void 0 : t.mapValue) || void 0 === n ? void 0 : n.fields) || {}).__type__) || void 0 === e ? void 0 : e.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */
function Bt(t) {
    const n = t.mapValue.fields.__previous_value__;
    return qt(n) ? Bt(n) : n;
}

/**
 * Returns the local time at which this timestamp was first set.
 */ function Qt(t) {
    const n = Xt(t.mapValue.fields.__local_write_time__.timestampValue);
    return new U(n.seconds, n.nanos);
}

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
// A RegExp matching ISO 8601 UTC timestamps with optional fraction.
const jt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/** Extracts the backend's type order for the provided value. */ function Wt(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? qt(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : g();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function Gt(t, n) {
    const e = Wt(t);
    if (e !== Wt(n)) return !1;
    switch (e) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === n.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return Qt(t).isEqual(Qt(n));

      case 3 /* TimestampValue */ :
        return function(t, n) {
            if ("string" == typeof t.timestampValue && "string" == typeof n.timestampValue && t.timestampValue.length === n.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === n.timestampValue;
            const e = Xt(t.timestampValue), s = Xt(n.timestampValue);
            return e.seconds === s.seconds && e.nanos === s.nanos;
        }(t, n);

      case 5 /* StringValue */ :
        return t.stringValue === n.stringValue;

      case 6 /* BlobValue */ :
        return function(t, n) {
            return tn(t.bytesValue).isEqual(tn(n.bytesValue));
        }(t, n);

      case 7 /* RefValue */ :
        return t.referenceValue === n.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, n) {
            return Zt(t.geoPointValue.latitude) === Zt(n.geoPointValue.latitude) && Zt(t.geoPointValue.longitude) === Zt(n.geoPointValue.longitude);
        }(t, n);

      case 2 /* NumberValue */ :
        return function(t, n) {
            if ("integerValue" in t && "integerValue" in n) return Zt(t.integerValue) === Zt(n.integerValue);
            if ("doubleValue" in t && "doubleValue" in n) {
                const e = Zt(t.doubleValue), s = Zt(n.doubleValue);
                return e === s ? Y(e) === Y(s) : isNaN(e) && isNaN(s);
            }
            return !1;
        }(t, n);

      case 9 /* ArrayValue */ :
        return M(t.arrayValue.values || [], n.arrayValue.values || [], Gt);

      case 10 /* ObjectValue */ :
        return function(t, n) {
            const e = t.mapValue.fields || {}, s = n.mapValue.fields || {};
            if (kt(e) !== kt(s)) return !1;
            for (const t in e) if (e.hasOwnProperty(t) && (void 0 === s[t] || !Gt(e[t], s[t]))) return !1;
            return !0;
        }
        /** Returns true if the ArrayValue contains the specified element. */ (t, n);

      default:
        return g();
    }
}

function Kt(t, n) {
    return void 0 !== (t.values || []).find((t => Gt(t, n)));
}

function zt(t, n) {
    const e = Wt(t), s = Wt(n);
    if (e !== s) return k(e, s);
    switch (e) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return k(t.booleanValue, n.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, n) {
            const e = Zt(t.integerValue || t.doubleValue), s = Zt(n.integerValue || n.doubleValue);
            return e < s ? -1 : e > s ? 1 : e === s ? 0 : 
            // one or both are NaN.
            isNaN(e) ? isNaN(s) ? 0 : -1 : 1;
        }(t, n);

      case 3 /* TimestampValue */ :
        return Ht(t.timestampValue, n.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return Ht(Qt(t), Qt(n));

      case 5 /* StringValue */ :
        return k(t.stringValue, n.stringValue);

      case 6 /* BlobValue */ :
        return function(t, n) {
            const e = tn(t), s = tn(n);
            return e.S(s);
        }(t.bytesValue, n.bytesValue);

      case 7 /* RefValue */ :
        return function(t, n) {
            const e = t.split("/"), s = n.split("/");
            for (let t = 0; t < e.length && t < s.length; t++) {
                const n = k(e[t], s[t]);
                if (0 !== n) return n;
            }
            return k(e.length, s.length);
        }(t.referenceValue, n.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, n) {
            const e = k(Zt(t.latitude), Zt(n.latitude));
            if (0 !== e) return e;
            return k(Zt(t.longitude), Zt(n.longitude));
        }(t.geoPointValue, n.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, n) {
            const e = t.values || [], s = n.values || [];
            for (let t = 0; t < e.length && t < s.length; ++t) {
                const n = zt(e[t], s[t]);
                if (n) return n;
            }
            return k(e.length, s.length);
        }(t.arrayValue, n.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, n) {
            const e = t.fields || {}, s = Object.keys(e), i = n.fields || {}, r = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
            s.sort(), r.sort();
            for (let t = 0; t < s.length && t < r.length; ++t) {
                const n = k(s[t], r[t]);
                if (0 !== n) return n;
                const o = zt(e[s[t]], i[r[t]]);
                if (0 !== o) return o;
            }
            return k(s.length, r.length);
        }
        /**
 * Generates the canonical ID for the provided field value (as used in Target
 * serialization).
 */ (t.mapValue, n.mapValue);

      default:
        throw g();
    }
}

function Ht(t, n) {
    if ("string" == typeof t && "string" == typeof n && t.length === n.length) return k(t, n);
    const e = Xt(t), s = Xt(n), i = k(e.seconds, s.seconds);
    return 0 !== i ? i : k(e.nanos, s.nanos);
}

function Yt(t) {
    return Jt(t);
}

function Jt(t) {
    return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(t) {
        const n = Xt(t);
        return `time(${n.seconds},${n.nanos})`;
    }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? tn(t.bytesValue).toBase64() : "referenceValue" in t ? (e = t.referenceValue, 
    G.nt(e).toString()) : "geoPointValue" in t ? `geo(${(n = t.geoPointValue).latitude},${n.longitude})` : "arrayValue" in t ? function(t) {
        let n = "[", e = !0;
        for (const s of t.values || []) e ? e = !1 : n += ",", n += Jt(s);
        return n + "]";
    }
    /**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */ (t.arrayValue) : "mapValue" in t ? function(t) {
        // Iteration order in JavaScript is not guaranteed. To ensure that we generate
        // matching canonical IDs for identical maps, we need to sort the keys.
        const n = Object.keys(t.fields || {}).sort();
        let e = "{", s = !0;
        for (const i of n) s ? s = !1 : e += ",", e += `${i}:${Jt(t.fields[i])}`;
        return e + "}";
    }(t.mapValue) : g();
    var n, e;
}

function Xt(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (v(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        let n = 0;
        const e = jt.exec(t);
        if (v(!!e), e[1]) {
            // Pad the fraction out to 9 digits (nanos).
            let t = e[1];
            t = (t + "000000000").substr(0, 9), n = Number(t);
        }
        // Parse the date to get the seconds.
                const s = new Date(t);
        return {
            seconds: Math.floor(s.getTime() / 1e3),
            nanos: n
        };
    }
    return {
        seconds: Zt(t.seconds),
        nanos: Zt(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function Zt(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function tn(t) {
    return "string" == typeof t ? it.fromBase64String(t) : it.fromUint8Array(t);
}

/** Returns a reference value for the provided database and key. */ function nn(t, n) {
    return {
        referenceValue: `projects/${t.projectId}/databases/${t.database}/documents/${n.path.G()}`
    };
}

/** Returns true if `value` is an IntegerValue . */ function en(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */
function sn(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function rn(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function on(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function un(t) {
    return !!t && "mapValue" in t;
}

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
 */ const cn = (() => {
    const t = {
        asc: "ASCENDING",
        desc: "DESCENDING"
    };
    return t;
})(), hn = (() => {
    const t = {
        "<": "LESS_THAN",
        "<=": "LESS_THAN_OR_EQUAL",
        ">": "GREATER_THAN",
        ">=": "GREATER_THAN_OR_EQUAL",
        "==": "EQUAL",
        "!=": "NOT_EQUAL",
        "array-contains": "ARRAY_CONTAINS",
        in: "IN",
        "not-in": "NOT_IN",
        "array-contains-any": "ARRAY_CONTAINS_ANY"
    };
    return t;
})();

/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
class an {
    constructor(t, n) {
        this.rt = t, this.ne = n;
    }
}

/**
 * Returns an IntegerValue for `value`.
 */
function ln(t) {
    return {
        integerValue: "" + t
    };
}

/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function _n(t, n) {
    if (t.ne) {
        if (isNaN(n)) return {
            doubleValue: "NaN"
        };
        if (n === 1 / 0) return {
            doubleValue: "Infinity"
        };
        if (n === -1 / 0) return {
            doubleValue: "-Infinity"
        };
    }
    return {
        doubleValue: Y(n) ? "-0" : n
    };
}

/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */ function fn(t, n) {
    return function(t) {
        return "number" == typeof t && Number.isInteger(t) && !Y(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
    }(n) ? ln(n) : _n(t, n);
}

/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */ function dn(t, n) {
    if (t.ne) {
        return `${new Date(1e3 * n.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + n.nanoseconds).slice(-9)}Z`;
    }
    return {
        seconds: "" + n.seconds,
        nanos: n.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */
function wn(t, n) {
    return t.ne ? n.toBase64() : n.toUint8Array();
}

/**
 * Returns a ByteString based on the proto string value.
 */ function En(t, n) {
    return dn(t, n.N());
}

function mn(t) {
    return v(!!t), q.C(function(t) {
        const n = Xt(t);
        return new U(n.seconds, n.nanos);
    }(t));
}

function Tn(t, n) {
    return function(t) {
        return new Q([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(n).G();
}

function An(t) {
    const n = Q.K(t);
    return v(jn(n)), n;
}

function In(t, n) {
    return Tn(t.rt, n.path);
}

function Rn(t, n) {
    const e = An(n);
    if (e.get(1) !== t.rt.projectId) throw new S(C.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + e.get(1) + " vs " + t.rt.projectId);
    if (e.get(3) !== t.rt.database) throw new S(C.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + e.get(3) + " vs " + t.rt.database);
    return new G(Vn(e));
}

function Pn(t, n) {
    return Tn(t.rt, n);
}

function yn(t) {
    return new Q([ "projects", t.rt.projectId, "databases", t.rt.database ]).G();
}

function Vn(t) {
    return v(t.length > 4 && "documents" === t.get(4)), t.$(5);
}

/** Creates a Document proto from key and fields (but no create/update time) */ function pn(t, n, e) {
    return {
        name: In(t, n),
        fields: e.proto.mapValue.fields
    };
}

function gn(t, n) {
    return "found" in n ? function(t, n) {
        v(!!n.found), n.found.name, n.found.updateTime;
        const e = Rn(t, n.found.name), s = mn(n.found.updateTime), i = new ye({
            mapValue: {
                fields: n.found.fields
            }
        });
        return new ve(e, s, i, {});
    }(t, n) : "missing" in n ? function(t, n) {
        v(!!n.missing), v(!!n.readTime);
        const e = Rn(t, n.missing), s = mn(n.readTime);
        return new be(e, s);
    }(t, n) : g();
}

function vn(t, n) {
    let e;
    if ("targetChange" in n) {
        n.targetChange;
        // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
        // if unset
        const s = function(t) {
            return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : g();
        }(n.targetChange.targetChangeType || "NO_CHANGE"), i = n.targetChange.targetIds || [], r = function(t, n) {
            return t.ne ? (v(void 0 === n || "string" == typeof n), it.fromBase64String(n || "")) : (v(void 0 === n || n instanceof Uint8Array), 
            it.fromUint8Array(n || new Uint8Array));
        }(t, n.targetChange.resumeToken), o = n.targetChange.cause, u = o && function(t) {
            const n = void 0 === t.code ? C.UNKNOWN : at(t.code);
            return new S(n, t.message || "");
        }
        /**
 * Returns a value for a number (or null) that's appropriate to put into
 * a google.protobuf.Int32Value proto.
 * DO NOT USE THIS FOR ANYTHING ELSE.
 * This method cheats. It's typed as returning "number" because that's what
 * our generated proto interfaces say Int32Value must be. But GRPC actually
 * expects a { value: <number> } struct.
 */ (o);
        e = new xt(s, i, r, u || null);
    } else if ("documentChange" in n) {
        n.documentChange;
        const s = n.documentChange;
        s.document, s.document.name, s.document.updateTime;
        const i = Rn(t, s.document.name), r = mn(s.document.updateTime), o = new ye({
            mapValue: {
                fields: s.document.fields
            }
        }), u = new ve(i, r, o, {}), c = s.targetIds || [], h = s.removedTargetIds || [];
        e = new Dt(c, h, u.key, u);
    } else if ("documentDelete" in n) {
        n.documentDelete;
        const s = n.documentDelete;
        s.document;
        const i = Rn(t, s.document), r = s.readTime ? mn(s.readTime) : q.min(), o = new be(i, r), u = s.removedTargetIds || [];
        e = new Dt([], u, o.key, o);
    } else if ("documentRemove" in n) {
        n.documentRemove;
        const s = n.documentRemove;
        s.document;
        const i = Rn(t, s.document), r = s.removedTargetIds || [];
        e = new Dt([], r, i, null);
    } else {
        if (!("filter" in n)) return g();
        {
            n.filter;
            const t = n.filter;
            t.targetId;
            const s = t.count || 0, i = new ot(s), r = t.targetId;
            e = new Nt(r, i);
        }
    }
    return e;
}

function bn(t, n) {
    let e;
    if (n instanceof we) e = {
        update: pn(t, n.key, n.value)
    }; else if (n instanceof Re) e = {
        delete: In(t, n.key)
    }; else if (n instanceof Ee) e = {
        update: pn(t, n.key, n.data),
        updateMask: Qn(n.ee)
    }; else if (n instanceof Te) e = {
        transform: {
            document: In(t, n.key),
            fieldTransforms: n.fieldTransforms.map((t => function(t, n) {
                const e = n.transform;
                if (e instanceof Hn) return {
                    fieldPath: n.field.G(),
                    setToServerValue: "REQUEST_TIME"
                };
                if (e instanceof Yn) return {
                    fieldPath: n.field.G(),
                    appendMissingElements: {
                        values: e.elements
                    }
                };
                if (e instanceof Xn) return {
                    fieldPath: n.field.G(),
                    removeAllFromArray: {
                        values: e.elements
                    }
                };
                if (e instanceof te) return {
                    fieldPath: n.field.G(),
                    increment: e.se
                };
                throw g();
            }(0, t)))
        }
    }; else {
        if (!(n instanceof Pe)) return g();
        e = {
            verify: In(t, n.key)
        };
    }
    return n.re.ie || (e.currentDocument = function(t, n) {
        return void 0 !== n.updateTime ? {
            updateTime: En(t, n.updateTime)
        } : void 0 !== n.exists ? {
            exists: n.exists
        } : g();
    }(t, n.re)), e;
}

function Cn(t, n) {
    return t && t.length > 0 ? (v(void 0 !== n), t.map((t => function(t, n) {
        // NOTE: Deletes don't have an updateTime.
        let e = t.updateTime ? mn(t.updateTime) : mn(n);
        e.isEqual(q.min()) && (
        // The Firestore Emulator currently returns an update time of 0 for
        // deletes of non-existing documents (rather than null). This breaks the
        // test "get deleted doc while offline with source=cache" as NoDocuments
        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
        // TODO(#2149): Remove this when Emulator is fixed
        e = mn(n));
        let s = null;
        return t.transformResults && t.transformResults.length > 0 && (s = t.transformResults), 
        new oe(e, s);
    }(t, n)))) : [];
}

function Sn(t, n) {
    return {
        documents: [ Pn(t, n.path) ]
    };
}

function Dn(t, n) {
    // Dissect the path into parent, collectionId, and optional key filter.
    const e = {
        structuredQuery: {}
    }, s = n.path;
    null !== n.collectionGroup ? (e.parent = Pn(t, s), e.structuredQuery.from = [ {
        collectionId: n.collectionGroup,
        allDescendants: !0
    } ]) : (e.parent = Pn(t, s.k()), e.structuredQuery.from = [ {
        collectionId: s.U()
    } ]);
    const i = function(t) {
        if (0 === t.length) return;
        const n = t.map((t => 
        // visible for testing
        function(t) {
            if ("==" /* EQUAL */ === t.op) {
                if (on(t.value)) return {
                    unaryFilter: {
                        field: Mn(t.field),
                        op: "IS_NAN"
                    }
                };
                if (rn(t.value)) return {
                    unaryFilter: {
                        field: Mn(t.field),
                        op: "IS_NULL"
                    }
                };
            } else if ("!=" /* NOT_EQUAL */ === t.op) {
                if (on(t.value)) return {
                    unaryFilter: {
                        field: Mn(t.field),
                        op: "IS_NOT_NAN"
                    }
                };
                if (rn(t.value)) return {
                    unaryFilter: {
                        field: Mn(t.field),
                        op: "IS_NOT_NULL"
                    }
                };
            }
            return {
                fieldFilter: {
                    field: Mn(t.field),
                    op: kn(t.op),
                    value: t.value
                }
            };
        }(t)));
        if (1 === n.length) return n[0];
        return {
            compositeFilter: {
                op: "AND",
                filters: n
            }
        };
    }(n.filters);
    i && (e.structuredQuery.where = i);
    const r = function(t) {
        if (0 === t.length) return;
        return t.map((t => 
        // visible for testing
        function(t) {
            return {
                field: Mn(t.field),
                direction: $n(t.dir)
            };
        }(t)));
    }(n.orderBy);
    r && (e.structuredQuery.orderBy = r);
    const o = function(t, n) {
        return t.ne || H(n) ? n : {
            value: n
        };
    }
    /**
 * Returns a number (or null) from a google.protobuf.Int32Value proto.
 */ (t, n.limit);
    return null !== o && (e.structuredQuery.limit = o), n.startAt && (e.structuredQuery.startAt = On(n.startAt)), 
    n.endAt && (e.structuredQuery.endAt = On(n.endAt)), e;
}

function Nn(t) {
    let n = function(t) {
        const n = An(t);
        // In v1beta1 queries for collections at the root did not have a trailing
        // "/documents". In v1 all resource paths contain "/documents". Preserve the
        // ability to read the v1beta1 form for compatibility with queries persisted
        // in the local target cache.
                return 4 === n.length ? Q.H() : Vn(n);
    }(t.parent);
    const e = t.structuredQuery, s = e.from ? e.from.length : 0;
    let i = null;
    if (s > 0) {
        v(1 === s);
        const t = e.from[0];
        t.allDescendants ? i = t.collectionId : n = n.child(t.collectionId);
    }
    let r = [];
    e.where && (r = Fn(e.where));
    let o = [];
    e.orderBy && (o = e.orderBy.map((t => function(t) {
        return new rs(Un(t.field), 
        // visible for testing
        function(t) {
            switch (t) {
              case "ASCENDING":
                return "asc" /* ASCENDING */;

              case "DESCENDING":
                return "desc" /* DESCENDING */;

              default:
                return;
            }
        }
        // visible for testing
        (t.direction));
    }(t))));
    let u = null;
    e.limit && (u = function(t) {
        let n;
        return n = "object" == typeof t ? t.value : t, H(n) ? null : n;
    }(e.limit));
    let c = null;
    e.startAt && (c = Ln(e.startAt));
    let h = null;
    return e.endAt && (h = Ln(e.endAt)), 
    /** Creates a new Query instance with the options provided. */
    function(t, n, e, s, i, r, o, u) {
        return new Se(t, n, e, s, i, r, o, u);
    }
    /** Creates a new Query for a query that matches all documents at `path` */ (n, i, o, r, u, "F" /* First */ , c, h);
}

function xn(t, n) {
    const e = function(t, n) {
        switch (n) {
          case 0 /* Listen */ :
            return null;

          case 1 /* ExistenceFilterMismatch */ :
            return "existence-filter-mismatch";

          case 2 /* LimboResolution */ :
            return "limbo-document";

          default:
            return g();
        }
    }(0, n._t);
    return null == e ? null : {
        "goog-listen-tags": e
    };
}

function Fn(t) {
    return t ? void 0 !== t.unaryFilter ? [ Bn(t) ] : void 0 !== t.fieldFilter ? [ qn(t) ] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((t => Fn(t))).reduce(((t, n) => t.concat(n))) : g() : [];
}

function On(t) {
    return {
        before: t.before,
        values: t.position
    };
}

function Ln(t) {
    const n = !!t.before, e = t.values || [];
    return new ns(e, n);
}

// visible for testing
function $n(t) {
    return cn[t];
}

function kn(t) {
    return hn[t];
}

function Mn(t) {
    return {
        fieldPath: t.G()
    };
}

function Un(t) {
    return W.Z(t.fieldPath);
}

function qn(t) {
    return We.create(Un(t.fieldFilter.field), function(t) {
        switch (t) {
          case "EQUAL":
            return "==" /* EQUAL */;

          case "NOT_EQUAL":
            return "!=" /* NOT_EQUAL */;

          case "GREATER_THAN":
            return ">" /* GREATER_THAN */;

          case "GREATER_THAN_OR_EQUAL":
            return ">=" /* GREATER_THAN_OR_EQUAL */;

          case "LESS_THAN":
            return "<" /* LESS_THAN */;

          case "LESS_THAN_OR_EQUAL":
            return "<=" /* LESS_THAN_OR_EQUAL */;

          case "ARRAY_CONTAINS":
            return "array-contains" /* ARRAY_CONTAINS */;

          case "IN":
            return "in" /* IN */;

          case "NOT_IN":
            return "not-in" /* NOT_IN */;

          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any" /* ARRAY_CONTAINS_ANY */;

          case "OPERATOR_UNSPECIFIED":
          default:
            return g();
        }
    }(t.fieldFilter.op), t.fieldFilter.value);
}

function Bn(t) {
    switch (t.unaryFilter.op) {
      case "IS_NAN":
        const n = Un(t.unaryFilter.field);
        return We.create(n, "==" /* EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NULL":
        const e = Un(t.unaryFilter.field);
        return We.create(e, "==" /* EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "IS_NOT_NAN":
        const s = Un(t.unaryFilter.field);
        return We.create(s, "!=" /* NOT_EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NOT_NULL":
        const i = Un(t.unaryFilter.field);
        return We.create(i, "!=" /* NOT_EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "OPERATOR_UNSPECIFIED":
      default:
        return g();
    }
}

function Qn(t) {
    const n = [];
    return t.fields.forEach((t => n.push(t.G()))), {
        fieldPaths: n
    };
}

function jn(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

/**
 * @license
 * Copyright 2018 Google LLC
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
/** Represents a transform within a TransformMutation. */ class Wn {
    constructor() {
        // Make sure that the structural type of `TransformOperation` is unique.
        // See https://github.com/microsoft/TypeScript/issues/5451
        this.oe = void 0;
    }
}

/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */ function Gn(t, n, e) {
    return t instanceof Hn ? function(t, n) {
        const e = {
            fields: {
                __type__: {
                    stringValue: "server_timestamp"
                },
                __local_write_time__: {
                    timestampValue: {
                        seconds: t.seconds,
                        nanos: t.nanoseconds
                    }
                }
            }
        };
        return n && (e.fields.__previous_value__ = n), {
            mapValue: e
        };
    }(e, n) : t instanceof Yn ? Jn(t, n) : t instanceof Xn ? Zn(t, n) : function(t, n) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        const e = zn(t, n), s = ne(e) + ne(t.se);
        return en(e) && en(t.se) ? ln(s) : _n(t.serializer, s);
    }(t, n);
}

/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */ function Kn(t, n, e) {
    // The server just sends null as the transform result for array operations,
    // so we have to calculate a result the same as we do for local
    // applications.
    return t instanceof Yn ? Jn(t, n) : t instanceof Xn ? Zn(t, n) : e;
}

/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent transforms.
 */ function zn(t, n) {
    return t instanceof te ? en(e = n) || function(t) {
        return !!t && "doubleValue" in t;
    }
    /** Returns true if `value` is either an IntegerValue or a DoubleValue. */ (e) ? n : {
        integerValue: 0
    } : null;
    var e;
}

/** Transforms a value into a server-generated timestamp. */
class Hn extends Wn {}

/** Transforms an array value via a union operation. */ class Yn extends Wn {
    constructor(t) {
        super(), this.elements = t;
    }
}

function Jn(t, n) {
    const e = ee(n);
    for (const n of t.elements) e.some((t => Gt(t, n))) || e.push(n);
    return {
        arrayValue: {
            values: e
        }
    };
}

/** Transforms an array value via a remove operation. */ class Xn extends Wn {
    constructor(t) {
        super(), this.elements = t;
    }
}

function Zn(t, n) {
    let e = ee(n);
    for (const n of t.elements) e = e.filter((t => !Gt(t, n)));
    return {
        arrayValue: {
            values: e
        }
    };
}

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */ class te extends Wn {
    constructor(t, n) {
        super(), this.serializer = t, this.se = n;
    }
}

function ne(t) {
    return Zt(t.integerValue || t.doubleValue);
}

function ee(t) {
    return sn(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}

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
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ class se {
    constructor(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(W.O);
    }
    /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */    ue(t) {
        for (const n of this.fields) if (n.B(t)) return !0;
        return !1;
    }
    isEqual(t) {
        return M(this.fields, t.fields, ((t, n) => t.isEqual(n)));
    }
}

/** A field path and the TransformOperation to perform upon it. */ class ie {
    constructor(t, n) {
        this.field = t, this.transform = n;
    }
}

function re(t, n) {
    return t.field.isEqual(n.field) && function(t, n) {
        return t instanceof Yn && n instanceof Yn || t instanceof Xn && n instanceof Xn ? M(t.elements, n.elements, Gt) : t instanceof te && n instanceof te ? Gt(t.se, n.se) : t instanceof Hn && n instanceof Hn;
    }(t.transform, n.transform);
}

/** The result of successfully applying a mutation to the backend. */ class oe {
    constructor(
    /**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
    t, 
    /**
     * The resulting fields returned from the backend after a
     * TransformMutation has been committed. Contains one FieldValue for each
     * FieldTransform that was in the mutation.
     *
     * Will be null if the mutation was not a TransformMutation.
     */
    n) {
        this.version = t, this.transformResults = n;
    }
}

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */ class ue {
    constructor(t, n) {
        this.updateTime = t, this.exists = n;
    }
    /** Creates a new empty Precondition. */    static ce() {
        return new ue;
    }
    /** Creates a new Precondition with an exists flag. */    static exists(t) {
        return new ue(void 0, t);
    }
    /** Creates a new Precondition based on a version a document exists at. */    static updateTime(t) {
        return new ue(t);
    }
    /** Returns whether this Precondition is empty. */    get ie() {
        return void 0 === this.updateTime && void 0 === this.exists;
    }
    isEqual(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }
}

/**
 * Returns true if the preconditions is valid for the given document
 * (or null if no document is available).
 */ function ce(t, n) {
    return void 0 !== t.updateTime ? n instanceof ve && n.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === n instanceof ve;
}

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set, Patch, and Transform mutations. For Delete
 * mutations, we reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        null                  Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      null                  null
 * TransformMutation  Document(v3)          Document(v3)
 * TransformMutation  NoDocument(v3)        NoDocument(v3)
 * TransformMutation  null                  null
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     null                  NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set, Patch, and Transform mutations. As deletes
 * have no explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we return an `UnknownDocument` and rely on Watch to send us the
 * updated version.
 *
 * Note that TransformMutations don't create Documents (in the case of being
 * applied to a NoDocument), even though they would on the backend. This is
 * because the client always combines the TransformMutation with a SetMutation
 * or PatchMutation and we only want to apply the transform if the prior
 * mutation resulted in a Document (always true for a SetMutation, but not
 * necessarily for a PatchMutation).
 *
 * ## Subclassing Notes
 *
 * Subclasses of Mutation need to implement applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document.
 */ class he {}

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing a new remote document. If the input document doesn't match the
 * expected state (e.g. it is null or outdated), an `UnknownDocument` can be
 * returned.
 *
 * @param mutation - The mutation to apply.
 * @param maybeDoc - The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param mutationResult - The result of applying the mutation from the backend.
 * @returns The mutated document. The returned document may be an
 *     UnknownDocument if the mutation could not be applied to the locally
 *     cached base document.
 */ function ae(t, n, e) {
    return t instanceof we ? function(t, n, e) {
        // Unlike applySetMutationToLocalView, if we're applying a mutation to a
        // remote document the server has accepted the mutation so the precondition
        // must have held.
        return new ve(t.key, e.version, t.value, {
            hasCommittedMutations: !0
        });
    }(t, 0, e) : t instanceof Ee ? function(t, n, e) {
        if (!ce(t.re, n)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new Ce(t.key, e.version);
        const s = me(t, n);
        return new ve(t.key, e.version, s, {
            hasCommittedMutations: !0
        });
    }(t, n, e) : t instanceof Te ? function(t, n, e) {
        if (v(null != e.transformResults), !ce(t.re, n)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new Ce(t.key, e.version);
        const s = Ae(t, n), i = 
        /**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a
 * TransformMutation has been acknowledged by the server.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param baseDoc - The document prior to applying this mutation batch.
 * @param serverTransformResults - The transform results received by the server.
 * @returns The transform results list.
 */
        function(t, n, e) {
            const s = [];
            v(t.length === e.length);
            for (let i = 0; i < e.length; i++) {
                const r = t[i], o = r.transform;
                let u = null;
                n instanceof ve && (u = n.field(r.field)), s.push(Kn(o, u, e[i]));
            }
            return s;
        }
        /**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use when applying a
 * TransformMutation locally.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param localWriteTime - The local time of the transform mutation (used to
 *     generate ServerTimestampValues).
 * @param maybeDoc - The current state of the document after applying all
 *     previous mutations.
 * @param baseDoc - The document prior to applying this mutation batch.
 * @returns The transform results list.
 */ (t.fieldTransforms, n, e.transformResults), r = e.version, o = Ie(t, s.data(), i);
        return new ve(t.key, r, o, {
            hasCommittedMutations: !0
        });
    }(t, n, e) : function(t, n, e) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return new be(t.key, e.version, {
            hasCommittedMutations: !0
        });
    }(t, 0, e);
}

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing the new local view of a document. Both the input and returned
 * documents can be null.
 *
 * @param mutation - The mutation to apply.
 * @param maybeDoc - The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param baseDoc - The state of the document prior to this mutation batch. The
 *     input document can be null if the client has no knowledge of the
 *     pre-mutation state of the document.
 * @param localWriteTime - A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 * @returns The mutated document. The returned document may be null, but only
 *     if maybeDoc was null and the mutation would not create a new document.
 */ function le(t, n, e, s) {
    return t instanceof we ? function(t, n) {
        if (!ce(t.re, n)) return n;
        const e = de(n);
        return new ve(t.key, e, t.value, {
            he: !0
        });
    }
    /**
 * A mutation that modifies fields of the document at the given key with the
 * given values. The values are applied through a field mask:
 *
 *  * When a field is in both the mask and the values, the corresponding field
 *    is updated.
 *  * When a field is in neither the mask nor the values, the corresponding
 *    field is unmodified.
 *  * When a field is in the mask but not in the values, the corresponding field
 *    is deleted.
 *  * When a field is not in the mask but is in the values, the values map is
 *    ignored.
 */ (t, n) : t instanceof Ee ? function(t, n) {
        if (!ce(t.re, n)) return n;
        const e = de(n), s = me(t, n);
        return new ve(t.key, e, s, {
            he: !0
        });
    }
    /**
 * Patches the data of document if available or creates a new document. Note
 * that this does not check whether or not the precondition of this patch
 * holds.
 */ (t, n) : t instanceof Te ? function(t, n, e, s) {
        if (!ce(t.re, n)) return n;
        const i = Ae(t, n), r = function(t, n, e, s) {
            const i = [];
            for (const r of t) {
                const t = r.transform;
                let o = null;
                e instanceof ve && (o = e.field(r.field)), null === o && s instanceof ve && (
                // If the current document does not contain a value for the mutated
                // field, use the value that existed before applying this mutation
                // batch. This solves an edge case where a PatchMutation clears the
                // values in a nested map before the TransformMutation is applied.
                o = s.field(r.field)), i.push(Gn(t, o, n));
            }
            return i;
        }(t.fieldTransforms, e, n, s), o = Ie(t, i.data(), r);
        return new ve(t.key, i.version, o, {
            he: !0
        });
    }(t, n, s, e) : function(t, n) {
        if (!ce(t.re, n)) return n;
        return new be(t.key, q.min());
    }
    /**
 * A mutation that verifies the existence of the document at the given key with
 * the provided precondition.
 *
 * The `verify` operation is only used in Transactions, and this class serves
 * primarily to facilitate serialization into protos.
 */ (t, n);
}

/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent mutations.
 */ function _e(t, n) {
    return t instanceof Te ? function(t, n) {
        let e = null;
        for (const s of t.fieldTransforms) {
            const t = n instanceof ve ? n.field(s.field) : void 0, i = zn(s.transform, t || null);
            null != i && (e = null == e ? (new Ve).set(s.field, i) : e.set(s.field, i));
        }
        return e ? e.ae() : null;
    }
    /**
 * Asserts that the given MaybeDocument is actually a Document and verifies
 * that it matches the key for this mutation. Since we only support
 * transformations with precondition exists this method is guaranteed to be
 * safe.
 */ (t, n) : null;
}

function fe(t, n) {
    return t.type === n.type && (!!t.key.isEqual(n.key) && (!!t.re.isEqual(n.re) && (0 /* Set */ === t.type ? t.value.isEqual(n.value) : 1 /* Patch */ === t.type ? t.data.isEqual(n.data) && t.ee.isEqual(n.ee) : 2 /* Transform */ !== t.type || M(t.fieldTransforms, t.fieldTransforms, ((t, n) => re(t, n))))));
}

/**
 * Returns the version from the given document for use as the result of a
 * mutation. Mutations are defined to return the version of the base document
 * only if it is an existing document. Deleted and unknown documents have a
 * post-mutation version of SnapshotVersion.min().
 */ function de(t) {
    return t instanceof ve ? t.version : q.min();
}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ class we extends he {
    constructor(t, n, e) {
        super(), this.key = t, this.value = n, this.re = e, this.type = 0 /* Set */;
    }
}

class Ee extends he {
    constructor(t, n, e, s) {
        super(), this.key = t, this.data = n, this.ee = e, this.re = s, this.type = 1 /* Patch */;
    }
}

function me(t, n) {
    let e;
    return e = n instanceof ve ? n.data() : ye.empty(), function(t, n) {
        const e = new Ve(n);
        return t.ee.fields.forEach((n => {
            if (!n.q()) {
                const s = t.data.field(n);
                null !== s ? e.set(n, s) : e.delete(n);
            }
        })), e.ae();
    }
    /**
 * A mutation that modifies specific fields of the document with transform
 * operations. Currently the only supported transform is a server timestamp, but
 * IP Address, increment(n), etc. could be supported in the future.
 *
 * It is somewhat similar to a PatchMutation in that it patches specific fields
 * and has no effect when applied to a null or NoDocument (see comment on
 * Mutation for rationale).
 */ (t, e);
}

class Te extends he {
    constructor(t, n) {
        super(), this.key = t, this.fieldTransforms = n, this.type = 2 /* Transform */ , 
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        this.re = ue.exists(!0);
    }
}

function Ae(t, n) {
    return n;
}

function Ie(t, n, e) {
    const s = new Ve(n);
    for (let n = 0; n < t.fieldTransforms.length; n++) {
        const i = t.fieldTransforms[n];
        s.set(i.field, e[n]);
    }
    return s.ae();
}

/** A mutation that deletes the document at the given key. */ class Re extends he {
    constructor(t, n) {
        super(), this.key = t, this.re = n, this.type = 3 /* Delete */;
    }
}

class Pe extends he {
    constructor(t, n) {
        super(), this.key = t, this.re = n, this.type = 4 /* Verify */;
    }
}

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
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ class ye {
    constructor(t) {
        this.proto = t;
    }
    static empty() {
        return new ye({
            mapValue: {}
        });
    }
    /**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or if there it doesn't exist.
     */    field(t) {
        if (t.q()) return this.proto;
        {
            let n = this.proto;
            for (let e = 0; e < t.length - 1; ++e) {
                if (!n.mapValue.fields) return null;
                if (n = n.mapValue.fields[t.get(e)], !un(n)) return null;
            }
            return n = (n.mapValue.fields || {})[t.U()], n || null;
        }
    }
    isEqual(t) {
        return Gt(this.proto, t.proto);
    }
}

/**
 * An ObjectValueBuilder provides APIs to set and delete fields from an
 * ObjectValue.
 */ class Ve {
    /**
     * @param baseObject - The object to mutate.
     */
    constructor(t = ye.empty()) {
        this.le = t, 
        /** A map that contains the accumulated changes in this builder. */
        this._e = new Map;
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     * @returns The current Builder instance.
     */    set(t, n) {
        return this.fe(t, n), this;
    }
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     * @returns The current Builder instance.
     */    delete(t) {
        return this.fe(t, null), this;
    }
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */    fe(t, n) {
        let e = this._e;
        for (let n = 0; n < t.length - 1; ++n) {
            const s = t.get(n);
            let i = e.get(s);
            i instanceof Map ? 
            // Re-use a previously created map
            e = i : i && 10 /* ObjectValue */ === Wt(i) ? (
            // Convert the existing Protobuf MapValue into a map
            i = new Map(Object.entries(i.mapValue.fields || {})), e.set(s, i), e = i) : (
            // Create an empty map to represent the current nesting level
            i = new Map, e.set(s, i), e = i);
        }
        e.set(t.U(), n);
    }
    /** Returns an ObjectValue with all mutations applied. */    ae() {
        const t = this.de(W.H(), this._e);
        return null != t ? new ye(t) : this.le;
    }
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath - The path at the current nesting level. Can be set to
     * FieldValue.emptyPath() to represent the root.
     * @param currentOverlays - The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @returns The merged data at `currentPath` or null if no modifications
     * were applied.
     */    de(t, n) {
        let e = !1;
        const s = this.le.field(t), i = un(s) ? // If there is already data at the current path, base our
        Object.assign({}, s.mapValue.fields) : {};
        return n.forEach(((n, s) => {
            if (n instanceof Map) {
                const r = this.de(t.child(s), n);
                null != r && (i[s] = r, e = !0);
            } else null !== n ? (i[s] = n, e = !0) : i.hasOwnProperty(s) && (delete i[s], e = !0);
        })), e ? {
            mapValue: {
                fields: i
            }
        } : null;
    }
}

/**
 * Returns a FieldMask built from all fields in a MapValue.
 */ function pe(t) {
    const n = [];
    return Mt(t.fields || {}, ((t, e) => {
        const s = new W([ t ]);
        if (un(e)) {
            const t = pe(e.mapValue).fields;
            if (0 === t.length) 
            // Preserve the empty map by adding it to the FieldMask.
            n.push(s); else 
            // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (const e of t) n.push(s.child(e));
        } else 
        // For nested and non-empty ObjectValues, add the FieldPath of the leaf
        // nodes.
        n.push(s);
    })), new se(n);
}

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
 * The result of a lookup for a given path may be an existing document or a
 * marker that this document does not exist at a given version.
 */ class ge {
    constructor(t, n) {
        this.key = t, this.version = n;
    }
}

/**
 * Represents a document in Firestore with a key, version, data and whether the
 * data has local mutations applied to it.
 */ class ve extends ge {
    constructor(t, n, e, s) {
        super(t, n), this.we = e, this.he = !!s.he, this.hasCommittedMutations = !!s.hasCommittedMutations;
    }
    field(t) {
        return this.we.field(t);
    }
    data() {
        return this.we;
    }
    Ee() {
        return this.we.proto;
    }
    isEqual(t) {
        return t instanceof ve && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.he === t.he && this.hasCommittedMutations === t.hasCommittedMutations && this.we.isEqual(t.we);
    }
    toString() {
        return `Document(${this.key}, ${this.version}, ${this.we.toString()}, {hasLocalMutations: ${this.he}}), {hasCommittedMutations: ${this.hasCommittedMutations}})`;
    }
    get hasPendingWrites() {
        return this.he || this.hasCommittedMutations;
    }
}

/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 */
/**
 * A class representing a deleted document.
 * Version is set to 0 if we don't point to any specific time, otherwise it
 * denotes time we know it didn't exist at.
 */
class be extends ge {
    constructor(t, n, e) {
        super(t, n), this.hasCommittedMutations = !(!e || !e.hasCommittedMutations);
    }
    toString() {
        return `NoDocument(${this.key}, ${this.version})`;
    }
    get hasPendingWrites() {
        return this.hasCommittedMutations;
    }
    isEqual(t) {
        return t instanceof be && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }
}

/**
 * A class representing an existing document whose data is unknown (e.g. a
 * document that was updated without a known base document).
 */ class Ce extends ge {
    toString() {
        return `UnknownDocument(${this.key}, ${this.version})`;
    }
    get hasPendingWrites() {
        return !0;
    }
    isEqual(t) {
        return t instanceof Ce && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }
}

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
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ class Se {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    constructor(t, n = null, e = [], s = [], i = null, r = "F" /* First */ , o = null, u = null) {
        this.path = t, this.collectionGroup = n, this.me = e, this.filters = s, this.limit = i, 
        this.limitType = r, this.startAt = o, this.endAt = u, this.Te = null, 
        // The corresponding `Target` of this `Query` instance.
        this.Ae = null, this.startAt, this.endAt;
    }
}

function De(t) {
    return new Se(t);
}

/**
 * Helper to convert a collection group query into a collection query at a
 * specific path. This is used when executing collection group queries, since
 * we have to split the query into a set of collection queries at multiple
 * paths.
 */ function Ne(t) {
    return !H(t.limit) && "F" /* First */ === t.limitType;
}

function xe(t) {
    return !H(t.limit) && "L" /* Last */ === t.limitType;
}

function Fe(t) {
    return t.me.length > 0 ? t.me[0].field : null;
}

function Oe(t) {
    for (const n of t.filters) if (n.Ie()) return n.field;
    return null;
}

/**
 * Checks if any of the provided Operators are included in the query and
 * returns the first one that is, or null if none are.
 */
/**
 * Returns whether the query matches a collection group rather than a specific
 * collection.
 */
function Le(t) {
    return null !== t.collectionGroup;
}

/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */ function $e(t) {
    const n = b(t);
    if (null === n.Te) {
        n.Te = [];
        const t = Oe(n), e = Fe(n);
        if (null !== t && null === e) 
        // In order to implicitly add key ordering, we must also add the
        // inequality filter field for it to be a valid query.
        // Note that the default inequality field and key ordering is ascending.
        t.J() || n.Te.push(new rs(t)), n.Te.push(new rs(W.X(), "asc" /* ASCENDING */)); else {
            let t = !1;
            for (const e of n.me) n.Te.push(e), e.field.J() && (t = !0);
            if (!t) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                const t = n.me.length > 0 ? n.me[n.me.length - 1].dir : "asc" /* ASCENDING */;
                n.Te.push(new rs(W.X(), t));
            }
        }
    }
    return n.Te;
}

/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */ function ke(t) {
    const n = b(t);
    if (!n.Ae) if ("F" /* First */ === n.limitType) n.Ae = X(n.path, n.collectionGroup, $e(n), n.filters, n.limit, n.startAt, n.endAt); else {
        // Flip the orderBy directions since we want the last results
        const t = [];
        for (const e of $e(n)) {
            const n = "desc" /* DESCENDING */ === e.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
            t.push(new rs(e.field, n));
        }
        // We need to swap the cursors to match the now-flipped query ordering.
                const e = n.endAt ? new ns(n.endAt.position, !n.endAt.before) : null, s = n.startAt ? new ns(n.startAt.position, !n.startAt.before) : null;
        // Now return as a LimitType.First query.
        n.Ae = X(n.path, n.collectionGroup, t, n.filters, n.limit, e, s);
    }
    return n.Ae;
}

function Me(t, n, e) {
    return new Se(t.path, t.collectionGroup, t.me.slice(), t.filters.slice(), n, e, t.startAt, t.endAt);
}

function Ue(t, n) {
    return nt(ke(t), ke(n)) && t.limitType === n.limitType;
}

// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function qe(t) {
    return `${Z(ke(t))}|lt:${t.limitType}`;
}

function Be(t) {
    return `Query(target=${tt(ke(t))}; limitType=${t.limitType})`;
}

/** Returns whether `doc` matches the constraints of `query`. */ function Qe(t, n) {
    return function(t, n) {
        const e = n.key.path;
        return null !== t.collectionGroup ? n.key.et(t.collectionGroup) && t.path.B(e) : G.st(t.path) ? t.path.isEqual(e) : t.path.j(e);
    }
    /**
 * A document must have a value for every ordering clause in order to show up
 * in the results.
 */ (t, n) && function(t, n) {
        for (const e of t.me) 
        // order by key always matches
        if (!e.field.J() && null === n.field(e.field)) return !1;
        return !0;
    }(t, n) && function(t, n) {
        for (const e of t.filters) if (!e.matches(n)) return !1;
        return !0;
    }
    /** Makes sure a document is within the bounds, if provided. */ (t, n) && function(t, n) {
        if (t.startAt && !ss(t.startAt, $e(t), n)) return !1;
        if (t.endAt && ss(t.endAt, $e(t), n)) return !1;
        return !0;
    }
    /**
 * Returns a new comparator function that can be used to compare two documents
 * based on the Query's ordering constraint.
 */ (t, n);
}

function je(t) {
    return (n, e) => {
        let s = !1;
        for (const i of $e(t)) {
            const t = os(i, n, e);
            if (0 !== t) return t;
            s = s || i.field.J();
        }
        return 0;
    };
}

class We extends class {} {
    constructor(t, n, e) {
        super(), this.field = t, this.op = n, this.value = e;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    static create(t, n, e) {
        return t.J() ? "in" /* IN */ === n || "not-in" /* NOT_IN */ === n ? this.Re(t, n, e) : new Ke(t, n, e) : "array-contains" /* ARRAY_CONTAINS */ === n ? new Je(t, e) : "in" /* IN */ === n ? new Xe(t, e) : "not-in" /* NOT_IN */ === n ? new Ze(t, e) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === n ? new ts(t, e) : new We(t, n, e);
    }
    static Re(t, n, e) {
        return "in" /* IN */ === n ? new ze(t, e) : new He(t, e);
    }
    matches(t) {
        const n = t.field(this.field);
        // Types do not have to match in NOT_EQUAL filters.
                return "!=" /* NOT_EQUAL */ === this.op ? null !== n && this.Pe(zt(n, this.value)) : null !== n && Wt(this.value) === Wt(n) && this.Pe(zt(n, this.value));
        // Only compare types with matching backend order (such as double and int).
        }
    Pe(t) {
        switch (this.op) {
          case "<" /* LESS_THAN */ :
            return t < 0;

          case "<=" /* LESS_THAN_OR_EQUAL */ :
            return t <= 0;

          case "==" /* EQUAL */ :
            return 0 === t;

          case "!=" /* NOT_EQUAL */ :
            return 0 !== t;

          case ">" /* GREATER_THAN */ :
            return t > 0;

          case ">=" /* GREATER_THAN_OR_EQUAL */ :
            return t >= 0;

          default:
            return g();
        }
    }
    Ie() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ , "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ].indexOf(this.op) >= 0;
    }
}

function Ge(t) {
    // TODO(b/29183165): Technically, this won't be unique if two values have
    // the same description, such as the int 3 and the string "3". So we should
    // add the types in here somehow, too.
    return t.field.G() + t.op.toString() + Yt(t.value);
}

class Ke extends We {
    constructor(t, n, e) {
        super(t, n, e), this.key = G.nt(e.referenceValue);
    }
    matches(t) {
        const n = G.O(t.key, this.key);
        return this.Pe(n);
    }
}

/** Filter that matches on key fields within an array. */ class ze extends We {
    constructor(t, n) {
        super(t, "in" /* IN */ , n), this.keys = Ye("in" /* IN */ , n);
    }
    matches(t) {
        return this.keys.some((n => n.isEqual(t.key)));
    }
}

/** Filter that matches on key fields not present within an array. */ class He extends We {
    constructor(t, n) {
        super(t, "not-in" /* NOT_IN */ , n), this.keys = Ye("not-in" /* NOT_IN */ , n);
    }
    matches(t) {
        return !this.keys.some((n => n.isEqual(t.key)));
    }
}

function Ye(t, n) {
    var e;
    return ((null === (e = n.arrayValue) || void 0 === e ? void 0 : e.values) || []).map((t => G.nt(t.referenceValue)));
}

/** A Filter that implements the array-contains operator. */ class Je extends We {
    constructor(t, n) {
        super(t, "array-contains" /* ARRAY_CONTAINS */ , n);
    }
    matches(t) {
        const n = t.field(this.field);
        return sn(n) && Kt(n.arrayValue, this.value);
    }
}

/** A Filter that implements the IN operator. */ class Xe extends We {
    constructor(t, n) {
        super(t, "in" /* IN */ , n);
    }
    matches(t) {
        const n = t.field(this.field);
        return null !== n && Kt(this.value.arrayValue, n);
    }
}

/** A Filter that implements the not-in operator. */ class Ze extends We {
    constructor(t, n) {
        super(t, "not-in" /* NOT_IN */ , n);
    }
    matches(t) {
        if (Kt(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
        })) return !1;
        const n = t.field(this.field);
        return null !== n && !Kt(this.value.arrayValue, n);
    }
}

/** A Filter that implements the array-contains-any operator. */ class ts extends We {
    constructor(t, n) {
        super(t, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , n);
    }
    matches(t) {
        const n = t.field(this.field);
        return !(!sn(n) || !n.arrayValue.values) && n.arrayValue.values.some((t => Kt(this.value.arrayValue, t)));
    }
}

/**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */ class ns {
    constructor(t, n) {
        this.position = t, this.before = n;
    }
}

function es(t) {
    // TODO(b/29183165): Make this collision robust.
    return `${t.before ? "b" : "a"}:${t.position.map((t => Yt(t))).join(",")}`;
}

/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */ function ss(t, n, e) {
    let s = 0;
    for (let i = 0; i < t.position.length; i++) {
        const r = n[i], o = t.position[i];
        if (r.field.J()) s = G.O(G.nt(o.referenceValue), e.key); else {
            s = zt(o, e.field(r.field));
        }
        if ("desc" /* DESCENDING */ === r.dir && (s *= -1), 0 !== s) break;
    }
    return t.before ? s <= 0 : s < 0;
}

function is(t, n) {
    if (null === t) return null === n;
    if (null === n) return !1;
    if (t.before !== n.before || t.position.length !== n.position.length) return !1;
    for (let e = 0; e < t.position.length; e++) {
        if (!Gt(t.position[e], n.position[e])) return !1;
    }
    return !0;
}

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ class rs {
    constructor(t, n = "asc" /* ASCENDING */) {
        this.field = t, this.dir = n;
    }
}

function os(t, n, e) {
    const s = t.field.J() ? G.O(n.key, e.key) : function(t, n, e) {
        const s = n.field(t), i = e.field(t);
        return null !== s && null !== i ? zt(s, i) : g();
    }(t.field, n, e);
    switch (t.dir) {
      case "asc" /* ASCENDING */ :
        return s;

      case "desc" /* DESCENDING */ :
        return -1 * s;

      default:
        return g();
    }
}

function us(t, n) {
    return t.dir === n.dir && t.field.isEqual(n.field);
}

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
 * A batch of mutations that will be sent as one unit to the backend.
 */
class cs {
    /**
     * @param batchId - The unique ID of this mutation batch.
     * @param localWriteTime - The original write time of this mutation.
     * @param baseMutations - Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations - The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    constructor(t, n, e, s) {
        this.batchId = t, this.ye = n, this.baseMutations = e, this.mutations = s;
    }
    /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey - The key of the document to apply mutations to.
     * @param maybeDoc - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */    Ve(t, n, e) {
        const s = e.pe;
        for (let e = 0; e < this.mutations.length; e++) {
            const i = this.mutations[e];
            if (i.key.isEqual(t)) {
                n = ae(i, n, s[e]);
            }
        }
        return n;
    }
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey - The key of the document to apply mutations to.
     * @param maybeDoc - The document to apply mutations to.
     */    ge(t, n) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (const e of this.baseMutations) e.key.isEqual(t) && (n = le(e, n, n, this.ye));
        const e = n;
        // Second, apply all user-provided mutations.
                for (const s of this.mutations) s.key.isEqual(t) && (n = le(s, n, e, this.ye));
        return n;
    }
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */    ve(t) {
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
        let n = t;
        return this.mutations.forEach((e => {
            const s = this.ge(e.key, t.get(e.key));
            s && (n = n.Tt(e.key, s));
        })), n;
    }
    keys() {
        return this.mutations.reduce(((t, n) => t.add(n.key)), yt());
    }
    isEqual(t) {
        return this.batchId === t.batchId && M(this.mutations, t.mutations, ((t, n) => fe(t, n))) && M(this.baseMutations, t.baseMutations, ((t, n) => fe(t, n)));
    }
}

/** The result of applying a mutation batch to the backend. */ class hs {
    constructor(t, n, e, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    s) {
        this.batch = t, this.be = n, this.pe = e, this.Ce = s;
    }
    /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */    static from(t, n, e) {
        v(t.mutations.length === e.length);
        let s = Rt;
        const i = t.mutations;
        for (let t = 0; t < i.length; t++) s = s.Tt(i[t].key, e[t].version);
        return new hs(t, n, e, s);
    }
}

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
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ class as {
    constructor(t, n) {
        this.Se = t, this.De = n, 
        /**
         * The inner map for a key/value pair. Due to the possibility of collisions we
         * keep a list of entries that we do a linear search through to find an actual
         * match. Note that collisions should be rare, so we still expect near
         * constant time lookups in practice.
         */
        this.Ne = {};
    }
    /** Get a value for this key, or undefined if it does not exist. */    get(t) {
        const n = this.Se(t), e = this.Ne[n];
        if (void 0 !== e) for (const [n, s] of e) if (this.De(n, t)) return s;
    }
    has(t) {
        return void 0 !== this.get(t);
    }
    /** Put this key and value in the map. */    set(t, n) {
        const e = this.Se(t), s = this.Ne[e];
        if (void 0 !== s) {
            for (let e = 0; e < s.length; e++) if (this.De(s[e][0], t)) return void (s[e] = [ t, n ]);
            s.push([ t, n ]);
        } else this.Ne[e] = [ [ t, n ] ];
    }
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */    delete(t) {
        const n = this.Se(t), e = this.Ne[n];
        if (void 0 === e) return !1;
        for (let s = 0; s < e.length; s++) if (this.De(e[s][0], t)) return 1 === e.length ? delete this.Ne[n] : e.splice(s, 1), 
        !0;
        return !1;
    }
    forEach(t) {
        Mt(this.Ne, ((n, e) => {
            for (const [n, s] of e) t(n, s);
        }));
    }
    q() {
        return Ut(this.Ne);
    }
}

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
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */ class ls {
    constructor(t) {
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
        this.xe = null, this.Fe = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.Oe = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.Le = !1, t((t => {
            this.Oe = !0, this.result = t, this.xe && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            this.xe(t);
        }), (t => {
            this.Oe = !0, this.error = t, this.Fe && this.Fe(t);
        }));
    }
    catch(t) {
        return this.next(void 0, t);
    }
    next(t, n) {
        return this.Le && g(), this.Le = !0, this.Oe ? this.error ? this.$e(n, this.error) : this.ke(t, this.result) : new ls(((e, s) => {
            this.xe = n => {
                this.ke(t, n).next(e, s);
            }, this.Fe = t => {
                this.$e(n, t).next(e, s);
            };
        }));
    }
    Me() {
        return new Promise(((t, n) => {
            this.next(t, n);
        }));
    }
    Ue(t) {
        try {
            const n = t();
            return n instanceof ls ? n : ls.resolve(n);
        } catch (t) {
            return ls.reject(t);
        }
    }
    ke(t, n) {
        return t ? this.Ue((() => t(n))) : ls.resolve(n);
    }
    $e(t, n) {
        return t ? this.Ue((() => t(n))) : ls.reject(n);
    }
    static resolve(t) {
        return new ls(((n, e) => {
            n(t);
        }));
    }
    static reject(t) {
        return new ls(((n, e) => {
            e(t);
        }));
    }
    static qe(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t) {
        return new ls(((n, e) => {
            let s = 0, i = 0, r = !1;
            t.forEach((t => {
                ++s, t.next((() => {
                    ++i, r && i === s && n();
                }), (t => e(t)));
            })), r = !0, i === s && n();
        }));
    }
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */    static Be(t) {
        let n = ls.resolve(!1);
        for (const e of t) n = n.next((t => t ? ls.resolve(t) : e()));
        return n;
    }
    static forEach(t, n) {
        const e = [];
        return t.forEach(((t, s) => {
            e.push(n.call(this, t, s));
        })), this.qe(e);
    }
}

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
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */
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
class _s {
    constructor() {
        this.promise = new Promise(((t, n) => {
            this.resolve = t, this.reject = n;
        }));
    }
}

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
 */ function fs(t) {
    return new an(t, /* useProto3Json= */ !0);
}

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
 */ function ds(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, n) {
        if ("object" != typeof t || null === t) return !1;
        const e = t;
        for (const t of n) if (t in e && "function" == typeof e[t]) return !0;
        return !1;
    }
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
 */ (t, [ "next", "error", "complete" ]);
}

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
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */
class ws {
    constructor(t, n, e) {
        this.Qe = t, this.je = n, this.We = e;
    }
    /**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */    Ge(t, n) {
        return this.je.Ke(t, n).next((e => this.ze(t, n, e)));
    }
    /** Internal version of `getDocument` that allows reusing batches. */    ze(t, n, e) {
        return this.Qe.He(t, n).next((t => {
            for (const s of e) t = s.ge(n, t);
            return t;
        }));
    }
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    Ye(t, n, e) {
        let s = Tt();
        return n.forEach(((t, n) => {
            for (const s of e) n = s.ge(t, n);
            s = s.Tt(t, n);
        })), s;
    }
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */    Je(t, n) {
        return this.Qe.getEntries(t, n).next((n => this.Xe(t, n)));
    }
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */    Xe(t, n) {
        return this.je.Ze(t, n).next((e => {
            const s = this.Ye(t, n, e);
            let i = mt();
            return s.forEach(((t, n) => {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                n || (n = new be(t, q.min())), i = i.Tt(t, n);
            })), i;
        }));
    }
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction - The persistence transaction.
     * @param query - The query to match documents against.
     * @param sinceReadTime - If not set to SnapshotVersion.min(), return only
     *     documents that have been read since this snapshot version (exclusive).
     */    ts(t, n, e) {
        /**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */
        return function(t) {
            return G.st(t.path) && null === t.collectionGroup && 0 === t.filters.length;
        }(n) ? this.ns(t, n.path) : Le(n) ? this.es(t, n, e) : this.ss(t, n, e);
    }
    ns(t, n) {
        // Just do a simple document lookup.
        return this.Ge(t, new G(n)).next((t => {
            let n = It();
            return t instanceof ve && (n = n.Tt(t.key, t)), n;
        }));
    }
    es(t, n, e) {
        const s = n.collectionGroup;
        let i = It();
        return this.We.rs(t, s).next((r => ls.forEach(r, (r => {
            const o = function(t, n) {
                return new Se(n, 
                /*collectionGroup=*/ null, t.me.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
            }
            /**
 * Returns true if this query does not specify any query constraints that
 * could remove results.
 */ (n, r.child(s));
            return this.ss(t, o, e).next((t => {
                t.forEach(((t, n) => {
                    i = i.Tt(t, n);
                }));
            }));
        })).next((() => i))));
    }
    ss(t, n, e) {
        // Query the remote documents and overlay mutations.
        let s, i;
        return this.Qe.ts(t, n, e).next((e => (s = e, this.je.os(t, n)))).next((n => (i = n, 
        this.us(t, i, s).next((t => {
            s = t;
            for (const t of i) for (const n of t.mutations) {
                const e = n.key, i = s.get(e), r = le(n, i, i, t.ye);
                s = r instanceof ve ? s.Tt(e, r) : s.remove(e);
            }
        }))))).next((() => (
        // Finally, filter out any documents that don't actually match
        // the query.
        s.forEach(((t, e) => {
            Qe(n, e) || (s = s.remove(t));
        })), s)));
    }
    us(t, n, e) {
        let s = yt();
        for (const t of n) for (const n of t.mutations) n instanceof Ee && null === e.get(n.key) && (s = s.add(n.key));
        let i = e;
        return this.Qe.getEntries(t, s).next((t => (t.forEach(((t, n) => {
            null !== n && n instanceof ve && (i = i.Tt(t, n));
        })), i)));
    }
}

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
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */ class Es {
    constructor(t, n, e, s) {
        this.targetId = t, this.fromCache = n, this.cs = e, this.hs = s;
    }
    static ls(t, n) {
        let e = yt(), s = yt();
        for (const t of n.docChanges) switch (t.type) {
          case 0 /* Added */ :
            e = e.add(t.doc.key);
            break;

          case 1 /* Removed */ :
            s = s.add(t.doc.key);
 // do nothing
                }
        return new Es(t, n.fromCache, e, s);
    }
}

/**
 * @license
 * Copyright 2018 Google LLC
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
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */ class ms {
    constructor(t, n) {
        this.previousValue = t, n && (n._s = t => this.fs(t), this.ds = t => n.ws(t));
    }
    fs(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }
    next() {
        const t = ++this.previousValue;
        return this.ds && this.ds(t), t;
    }
}

ms.Es = -1;

/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
class Ts {
    constructor(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    n, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    e = 1e3
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , s = 1.5
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i = 6e4) {
        this.Ts = t, this.As = n, this.Is = e, this.Rs = s, this.Ps = i, this.ys = 0, this.Vs = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.ps = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    reset() {
        this.ys = 0;
    }
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */    gs() {
        this.ys = this.Ps;
    }
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */    vs(t) {
        // Cancel any pending backoff operation.
        this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        const n = Math.floor(this.ys + this.bs()), e = Math.max(0, Date.now() - this.ps), s = Math.max(0, n - e);
        // Guard against lastAttemptTime being in the future due to a clock change.
                s > 0 && P("ExponentialBackoff", `Backing off for ${s} ms (base delay: ${this.ys} ms, delay with jitter: ${n} ms, last attempt: ${e} ms ago)`), 
        this.Vs = this.Ts.Cs(this.As, s, (() => (this.ps = Date.now(), t()))), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.ys *= this.Rs, this.ys < this.Is && (this.ys = this.Is), this.ys > this.Ps && (this.ys = this.Ps);
    }
    Ss() {
        null !== this.Vs && (this.Vs.Ds(), this.Vs = null);
    }
    cancel() {
        null !== this.Vs && (this.Vs.cancel(), this.Vs = null);
    }
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */    bs() {
        return (Math.random() - .5) * this.ys;
    }
}

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
/** Verifies whether `e` is an IndexedDbTransactionError. */ function As(t) {
    // Use name equality, as instanceof checks on errors don't work with errors
    // that wrap other errors.
    return "IndexedDbTransactionError" === t.name;
}

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
/** The Platform's 'document' implementation or null if not available. */ function Is() {
    // `document` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof document ? document : null;
}

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
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */
class Rs {
    constructor(t, n, e, s, i) {
        this.Ns = t, this.As = n, this.xs = e, this.op = s, this.Fs = i, this.Os = new _s, 
        this.then = this.Os.promise.then.bind(this.Os.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.Os.promise.catch((t => {}));
    }
    /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */    static Ls(t, n, e, s, i) {
        const r = Date.now() + e, o = new Rs(t, n, r, s, i);
        return o.start(e), o;
    }
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */    start(t) {
        this.$s = setTimeout((() => this.ks()), t);
    }
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */    Ds() {
        return this.ks();
    }
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */    cancel(t) {
        null !== this.$s && (this.clearTimeout(), this.Os.reject(new S(C.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }
    ks() {
        this.Ns.Ms((() => null !== this.$s ? (this.clearTimeout(), this.op().then((t => this.Os.resolve(t)))) : Promise.resolve()));
    }
    clearTimeout() {
        null !== this.$s && (this.Fs(this), clearTimeout(this.$s), this.$s = null);
    }
}

class Ps {
    constructor() {
        // The last promise in the queue.
        this.Us = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.qs = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.Bs = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.Qs = [], 
        // visible for testing
        this.js = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.Ws = !1, 
        // List of TimerIds to fast-forward delays for.
        this.Gs = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.Ks = new Ts(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.zs = () => {
            const t = Is();
            t && P("AsyncQueue", "Visibility state changed to " + t.visibilityState), this.Ks.Ss();
        };
        const t = Is();
        t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.zs);
    }
    // Is this AsyncQueue being shut down? If true, this instance will not enqueue
    // any new operations, Promises from enqueue requests will not resolve.
    get Hs() {
        return this.Bs;
    }
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */    Ms(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */    Ys(t) {
        this.Js(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Xs(t);
    }
    /**
     * Initialize the shutdown of this queue. Once this method is called, the
     * only possible way to request running an operation is through
     * `enqueueEvenWhileRestricted()`.
     */    Zs() {
        if (!this.Bs) {
            this.Bs = !0;
            const t = Is();
            t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.zs);
        }
    }
    /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     */    enqueue(t) {
        return this.Js(), this.Bs ? new Promise((t => {})) : this.Xs(t);
    }
    /**
     * Enqueue a retryable operation.
     *
     * A retryable operation is rescheduled with backoff if it fails with a
     * IndexedDbTransactionError (the error type used by SimpleDb). All
     * retryable operations are executed in order and only run if all prior
     * operations were retried successfully.
     */    ti(t) {
        this.Ms((() => (this.qs.push(t), this.ni())));
    }
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */    async ni() {
        if (0 !== this.qs.length) {
            try {
                await this.qs[0](), this.qs.shift(), this.Ks.reset();
            } catch (t) {
                if (!As(t)) throw t;
 // Failure will be handled by AsyncQueue
                                P("AsyncQueue", "Operation failed with retryable error: " + t);
            }
            this.qs.length > 0 && 
            // If there are additional operations, we re-schedule `retryNextOp()`.
            // This is necessary to run retryable operations that failed during
            // their initial attempt since we don't know whether they are already
            // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
            // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
            // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
            // call scheduled here.
            // Since `backoffAndRun()` cancels an existing backoff and schedules a
            // new backoff on every call, there is only ever a single additional
            // operation in the queue.
            this.Ks.vs((() => this.ni()));
        }
    }
    Xs(t) {
        const n = this.Us.then((() => (this.Ws = !0, t().catch((t => {
            this.js = t, this.Ws = !1;
            // Re-throw the error so that this.tail becomes a rejected Promise and
            // all further attempts to chain (via .then) will just short-circuit
            // and return the rejected Promise.
            throw y("INTERNAL UNHANDLED ERROR: ", 
            /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error - Error or FirestoreError
 */
            function(t) {
                let n = t.message || "";
                t.stack && (n = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack);
                return n;
            }
            /**
 * @license
 * Copyright 2018 Google LLC
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
 */ (t)), t;
        })).then((t => (this.Ws = !1, t))))));
        return this.Us = n, n;
    }
    /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned DelayedOperation can be used to cancel
     * or fast-forward the operation prior to its running.
     */    Cs(t, n, e) {
        this.Js(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.Gs.indexOf(t) > -1 && (n = 0);
        const s = Rs.Ls(this, t, n, e, (t => this.ei(t)));
        return this.Qs.push(s), s;
    }
    Js() {
        this.js && g();
    }
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */    si() {}
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */    async ii() {
        // Operations in the queue prior to draining may have enqueued additional
        // operations. Keep draining the queue until the tail is no longer advanced,
        // which indicates that no more new operations were enqueued and that all
        // operations were executed.
        let t;
        do {
            t = this.Us, await t;
        } while (t !== this.Us);
    }
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */    ri(t) {
        for (const n of this.Qs) if (n.As === t) return !0;
        return !1;
    }
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */    oi(t) {
        // Note that draining may generate more delayed ops, so we do that first.
        return this.ii().then((() => {
            // Run ops in the same order they'd run if they ran naturally.
            this.Qs.sort(((t, n) => t.xs - n.xs));
            for (const n of this.Qs) if (n.Ds(), "all" /* All */ !== t && n.As === t) break;
            return this.ii();
        }));
    }
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */    ui(t) {
        this.Gs.push(t);
    }
    /** Called once a DelayedOperation is run or canceled. */    ei(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        const n = this.Qs.indexOf(t);
        this.Qs.splice(n, 1);
    }
}

/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */ function ys(t, n) {
    if (y("AsyncQueue", `${n}: ${t}`), As(t)) return new S(C.UNAVAILABLE, `${n}: ${t}`);
    throw t;
}

/**
 * @license
 * Copyright 2019 Google LLC
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
 * A query engine that takes advantage of the target document mapping in the
 * QueryCache. Query execution is optimized by only reading the documents that
 * previously matched a query plus any documents that were edited after the
 * query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */
class Vs {
    /** Sets the document view to query against. */
    ci(t) {
        this.hi = t;
    }
    /** Returns all local documents matching the specified query. */    ts(t, n, s, i) {
        // Queries that match all documents don't benefit from using
        // key-based lookups. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
        return function(t) {
            return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.me.length || 1 === t.me.length && t.me[0].field.J());
        }(n) || s.isEqual(q.min()) ? this.ai(t, n) : this.hi.Je(t, i).next((r => {
            const o = this.li(n, r);
            return (Ne(n) || xe(n)) && this._i(n.limitType, o, i, s) ? this.ai(t, n) : (R() <= e.DEBUG && P("QueryEngine", "Re-using previous result from %s to execute query: %s", s.toString(), Be(n)), 
            this.hi.ts(t, n, s).next((t => (
            // We merge `previousResults` into `updateResults`, since
            // `updateResults` is already a DocumentMap. If a document is
            // contained in both lists, then its contents are the same.
            o.forEach((n => {
                t = t.Tt(n.key, n);
            })), t))));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }
    /** Applies the query filter and sorting to the provided documents.  */    li(t, n) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        let e = new dt(je(t));
        return n.forEach(((n, s) => {
            s instanceof ve && Qe(t, s) && (e = e.add(s));
        })), e;
    }
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults - The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys - The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion - The version of the snapshot when the
     * query was last synchronized.
     */    _i(t, n, e, s) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (e.size !== n.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                const i = "F" /* First */ === t ? n.last() : n.first();
        return !!i && (i.hasPendingWrites || i.version.S(s) > 0);
    }
    ai(t, n) {
        return R() <= e.DEBUG && P("QueryEngine", "Using full collection scan to execute query:", Be(n)), 
        this.hi.ts(t, n, q.min());
    }
}

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
/** Serializer for values stored in the LocalStore. */ class ps {
    constructor(t) {
        this.fi = t;
    }
}

/**
 * Encodes a `BundledQuery` from bundle proto to a Query object.
 *
 * This reconstructs the original query used to build the bundle being loaded,
 * including features exists only in SDKs (for example: limit-to-last).
 */ function gs(t) {
    const n = Nn({
        parent: t.parent,
        structuredQuery: t.structuredQuery
    });
    return "LAST" === t.limitType ? Me(n, n.limit, "L" /* Last */) : n;
}

/** Encodes a NamedQuery proto object to a NamedQuery model object. */
/**
 * @license
 * Copyright 2019 Google LLC
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
 * An in-memory implementation of IndexManager.
 */
class vs {
    constructor() {
        this.di = new bs;
    }
    wi(t, n) {
        return this.di.add(n), ls.resolve();
    }
    rs(t, n) {
        return ls.resolve(this.di.getEntries(n));
    }
}

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */ class bs {
    constructor() {
        this.index = {};
    }
    // Returns false if the entry already existed.
    add(t) {
        const n = t.U(), e = t.k(), s = this.index[n] || new dt(Q.O), i = !s.has(e);
        return this.index[n] = s.add(e), i;
    }
    has(t) {
        const n = t.U(), e = t.k(), s = this.index[n];
        return s && s.has(e);
    }
    getEntries(t) {
        return (this.index[t] || new dt(Q.O)).W();
    }
}

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
/** Offset to ensure non-overlapping target ids. */
/**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */
class Cs {
    constructor(t) {
        this.Ei = t;
    }
    next() {
        return this.Ei += 2, this.Ei;
    }
    static mi() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new Cs(0);
    }
    static Ti() {
        // Sync engine assigns target IDs for limbo document detection.
        return new Cs(-1);
    }
}

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
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */
class Ss {
    constructor(
    /** Manages our in-memory or durable persistence. */
    t, n, e, s) {
        this.persistence = t, this.Ai = n, this.serializer = s, 
        /**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */
        this.Ii = new lt(k), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.Ri = new as((t => Z(t)), nt), 
        /**
         * The read time of the last entry processed by `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */
        this.Pi = q.min(), this.je = t.yi(e), this.Vi = t.pi(), this.gi = t.vi(), this.bi = new ws(this.Vi, this.je, this.persistence.Ci()), 
        this.Si = t.Di(), this.Ai.ci(this.bi);
    }
    Ni(t) {
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (n => t.xi(n, this.Ii)));
    }
}

/**
 * Tells the LocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and
 * returns any resulting document changes.
 */
// PORTING NOTE: Android and iOS only return the documents affected by the
// change.
async function Ds(t, n) {
    const e = b(t);
    let s = e.je, i = e.bi;
    const r = await e.persistence.runTransaction("Handle user change", "readonly", (t => {
        // Swap out the mutation queue, grabbing the pending mutation batches
        // before and after.
        let r;
        return e.je.Fi(t).next((o => (r = o, s = e.persistence.yi(n), 
        // Recreate our LocalDocumentsView using the new
        // MutationQueue.
        i = new ws(e.Vi, s, e.persistence.Ci()), s.Fi(t)))).next((n => {
            const e = [], s = [];
            // Union the old/new changed keys.
            let o = yt();
            for (const t of r) {
                e.push(t.batchId);
                for (const n of t.mutations) o = o.add(n.key);
            }
            for (const t of n) {
                s.push(t.batchId);
                for (const n of t.mutations) o = o.add(n.key);
            }
            // Return the set of all (potentially) changed documents and the list
            // of mutation batch IDs that were affected by change.
                        return i.Je(t, o).next((t => ({
                Oi: t,
                Li: e,
                $i: s
            })));
        }));
    }));
    return e.je = s, e.bi = i, e.Ai.ci(e.bi), r;
}

/* Accepts locally generated Mutations and commit them to storage. */
/**
 * Acknowledges the given batch.
 *
 * On the happy path when a batch is acknowledged, the local store will
 *
 *  + remove the batch from the mutation queue;
 *  + apply the changes to the remote document cache;
 *  + recalculate the latency compensated view implied by those changes (there
 *    may be mutations in the queue that affect the documents but haven't been
 *    acknowledged yet); and
 *  + give the changed documents back the sync engine
 *
 * @returns The resulting (modified) documents.
 */
function Ns(t, n) {
    const e = b(t);
    return e.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (t => {
        const s = n.batch.keys(), i = e.Vi.ki({
            Mi: !0
        });
        return function(t, n, e, s) {
            const i = e.batch, r = i.keys();
            let o = ls.resolve();
            return r.forEach((t => {
                o = o.next((() => s.He(n, t))).next((n => {
                    let r = n;
                    const o = e.Ce.get(t);
                    v(null !== o), (!r || r.version.S(o) < 0) && (r = i.Ve(t, r, e), r && 
                    // We use the commitVersion as the readTime rather than the
                    // document's updateTime since the updateTime is not advanced
                    // for updates that do not modify the underlying document.
                    s.Ui(r, e.be));
                }));
            })), o.next((() => t.je.qi(n, i)));
        }
        /**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */ (e, t, n, i).next((() => i.apply(t))).next((() => e.je.Bi(t))).next((() => e.bi.Je(t, s)));
    }));
}

/**
 * Removes mutations from the MutationQueue for the specified batch;
 * LocalDocuments will be recalculated.
 *
 * @returns The resulting modified documents.
 */
/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */
function xs(t) {
    const n = b(t);
    return n.persistence.runTransaction("Get last remote snapshot version", "readonly", (t => n.gi.Qi(t)));
}

/**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */ function Fs(t, n) {
    const e = b(t), s = n.ft;
    let i = e.Ii;
    return e.persistence.runTransaction("Apply remote event", "readwrite-primary", (t => {
        const r = e.Vi.ki({
            Mi: !0
        });
        // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                i = e.Ii;
        const o = [];
        n.on.forEach(((n, r) => {
            const u = i.get(r);
            if (!u) return;
            // Only update the remote keys if the target is still active. This
            // ensures that we can persist the updated target data along with
            // the updated assignment.
                        o.push(e.gi.ji(t, n.wn, r).next((() => e.gi.Wi(t, n.fn, r))));
            const c = n.resumeToken;
            // Update the resume token if the change includes one.
                        if (c.at() > 0) {
                const h = u.wt(c, s).dt(t.Gi);
                i = i.Tt(r, h), 
                // Update the target data if there are target changes (or if
                // sufficient time has passed since the last update).
                /**
 * Returns true if the newTargetData should be persisted during an update of
 * an active target. TargetData should always be persisted when a target is
 * being released and should not call this function.
 *
 * While the target is active, TargetData updates can be omitted when nothing
 * about the target has changed except metadata like the resume token or
 * snapshot version. Occasionally it's worth the extra write to prevent these
 * values from getting too stale after a crash, but this doesn't have to be
 * too frequent.
 */
                function(t, n, e) {
                    // Always persist target data if we don't already have a resume token.
                    if (v(n.resumeToken.at() > 0), 0 === t.resumeToken.at()) return !0;
                    // Don't allow resume token changes to be buffered indefinitely. This
                    // allows us to be reasonably up-to-date after a crash and avoids needing
                    // to loop over all active queries on shutdown. Especially in the browser
                    // we may not get time to do anything interesting while the current tab is
                    // closing.
                                        if (n.ft.D() - t.ft.D() >= 3e8) return !0;
                    // Otherwise if the only thing that has changed about a target is its resume
                    // token it's not worth persisting. Note that the RemoteStore keeps an
                    // in-memory view of the currently active targets which includes the current
                    // resume token, so stream failure or user changes will still use an
                    // up-to-date resume token regardless of what we do here.
                                        return e.fn.size + e.dn.size + e.wn.size > 0;
                }
                /**
 * Notifies local store of the changed views to locally pin documents.
 */ (u, h, n) && o.push(e.gi.Ki(t, h));
            }
        }));
        let u = mt();
        // HACK: The only reason we allow a null snapshot version is so that we
        // can synthesize remote events when we get permission denied errors while
        // trying to resolve the state of a locally cached document that is in
        // limbo.
        if (n.cn.forEach(((s, i) => {
            n.hn.has(s) && o.push(e.persistence.Hi.zi(t, s));
        })), 
        // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
        // documents in advance in a single call.
        o.push(
        /**
 * Populates document change buffer with documents from backend or a bundle.
 * Returns the document changes resulting from applying those documents.
 *
 * @param txn - Transaction to use to read existing documents from storage.
 * @param documentBuffer - Document buffer to collect the resulted changes to be
 *        applied to storage.
 * @param documents - Documents to be applied.
 * @param globalVersion - A `SnapshotVersion` representing the read time if all
 *        documents have the same read time.
 * @param documentVersions - A DocumentKey-to-SnapshotVersion map if documents
 *        have their own read time.
 *
 * Note: this function will use `documentVersions` if it is defined;
 * when it is not defined, resorts to `globalVersion`.
 */
        function(t, n, e, s, 
        // TODO(wuandy): We could add `readTime` to MaybeDocument instead to remove
        // this parameter.
        i) {
            let r = yt();
            return e.forEach((t => r = r.add(t))), n.getEntries(t, r).next((t => {
                let r = mt();
                return e.forEach(((e, o) => {
                    const u = t.get(e), c = (null == i ? void 0 : i.get(e)) || s;
                    // Note: The order of the steps below is important, since we want
                    // to ensure that rejected limbo resolutions (which fabricate
                    // NoDocuments with SnapshotVersion.min()) never add documents to
                    // cache.
                    o instanceof be && o.version.isEqual(q.min()) ? (
                    // NoDocuments with SnapshotVersion.min() are used in manufactured
                    // events. We remove these documents from cache since we lost
                    // access.
                    n.Yi(e, c), r = r.Tt(e, o)) : null == u || o.version.S(u.version) > 0 || 0 === o.version.S(u.version) && u.hasPendingWrites ? (n.Ui(o, c), 
                    r = r.Tt(e, o)) : P("LocalStore", "Ignoring outdated watch update for ", e, ". Current version:", u.version, " Watch version:", o.version);
                })), r;
            }));
        }(t, r, n.cn, s, void 0).next((t => {
            u = t;
        }))), !s.isEqual(q.min())) {
            const n = e.gi.Qi(t).next((n => e.gi.Ji(t, t.Gi, s)));
            o.push(n);
        }
        return ls.qe(o).next((() => r.apply(t))).next((() => e.bi.Xe(t, u)));
    })).then((t => (e.Ii = i, t)));
}

/**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId - If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */
function Os(t, n) {
    const e = b(t);
    return e.persistence.runTransaction("Get next mutation batch", "readonly", (t => (void 0 === n && (n = -1), 
    e.je.Xi(t, n))));
}

/**
 * Reads the current value of a Document with a given key or null if not
 * found - used for testing.
 */
/**
 * Unpins all the documents associated with the given target. If
 * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
 * directly removes the associated target data from the target cache.
 *
 * Releasing a non-existing `Target` is a no-op.
 */
// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
async function Ls(t, n, e) {
    const s = b(t), i = s.Ii.get(n), r = e ? "readwrite" : "readwrite-primary";
    try {
        e || await s.persistence.runTransaction("Release target", r, (t => s.persistence.Hi.removeTarget(t, i)));
    } catch (t) {
        if (!As(t)) throw t;
        // All `releaseTarget` does is record the final metadata state for the
        // target, but we've been recording this periodically during target
        // activity. If we lose this write this could cause a very slight
        // difference in the order of target deletion during GC, but we
        // don't define exact LRU semantics so this is acceptable.
        P("LocalStore", `Failed to update sequence numbers for target ${n}: ${t}`);
    }
    s.Ii = s.Ii.remove(n), s.Ri.delete(i.target);
}

/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults - Whether results from previous executions can
 * be used to optimize this query execution.
 */ function $s(t, n, e) {
    const s = b(t);
    let i = q.min(), r = yt();
    return s.persistence.runTransaction("Execute query", "readonly", (t => 
    /**
 * Returns the TargetData as seen by the LocalStore, including updates that may
 * have not yet been persisted to the TargetCache.
 */
    // Visible for testing.
    function(t, n, e) {
        const s = b(t), i = s.Ri.get(e);
        return void 0 !== i ? ls.resolve(s.Ii.get(i)) : s.gi.Zi(n, e);
    }(s, t, ke(n)).next((n => {
        if (n) return i = n.lastLimboFreeSnapshotVersion, s.gi.tr(t, n.targetId).next((t => {
            r = t;
        }));
    })).next((() => s.Ai.ts(t, n, e ? i : q.min(), e ? r : yt()))).next((t => ({
        documents: t,
        nr: r
    })))));
}

async function ks(t) {
    if (t.code !== C.FAILED_PRECONDITION || "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab." !== t.message) throw t;
    P("LocalStore", "Unexpectedly lost primary lease");
}

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
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */
class Ms {
    constructor(t, n, e, s, i, r) {
        this.Ts = t, this.er = e, this.sr = s, this.ir = i, this.listener = r, this.state = 0 /* Initial */ , 
        /**
         * A close count that's incremented every time the stream is closed; used by
         * getCloseGuardedDispatcher() to invalidate callbacks that happen after
         * close.
         */
        this.rr = 0, this.ur = null, this.stream = null, this.Ks = new Ts(t, n);
    }
    /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */    cr() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */    hr() {
        return 2 /* Open */ === this.state;
    }
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */    start() {
        3 /* Error */ !== this.state ? this.auth() : this.ar();
    }
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */    async stop() {
        this.cr() && await this.close(0 /* Initial */);
    }
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */    lr() {
        this.state = 0 /* Initial */ , this.Ks.reset();
    }
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */    _r() {
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
        this.hr() && null === this.ur && (this.ur = this.Ts.Cs(this.er, 6e4, (() => this.dr())));
    }
    /** Sends a message to the underlying stream. */    wr(t) {
        this.Er(), this.stream.send(t);
    }
    /** Called by the idle timer when the stream should close due to inactivity. */    async dr() {
        if (this.hr()) 
        // When timing out an idle stream there's no reason to force the stream into backoff when
        // it restarts so set the stream state to Initial instead of Error.
        return this.close(0 /* Initial */);
    }
    /** Marks the stream as active again. */    Er() {
        this.ur && (this.ur.cancel(), this.ur = null);
    }
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState - the intended state of the stream after closing.
     * @param error - the error the connection was closed with.
     */    async close(t, n) {
        // Cancel any outstanding timers (they're guaranteed not to execute).
        this.Er(), this.Ks.cancel(), 
        // Invalidates any stream-related callbacks (e.g. from auth or the
        // underlying stream), guaranteeing they won't execute.
        this.rr++, 3 /* Error */ !== t ? 
        // If this is an intentional close ensure we don't delay our next connection attempt.
        this.Ks.reset() : n && n.code === C.RESOURCE_EXHAUSTED ? (
        // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
        y(n.toString()), y("Using maximum backoff delay to prevent overloading the backend."), 
        this.Ks.gs()) : n && n.code === C.UNAUTHENTICATED && 
        // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
        // just expired.
        this.ir._(), 
        // Clean up the underlying stream because we are no longer interested in events.
        null !== this.stream && (this.mr(), this.stream.close(), this.stream = null), 
        // This state must be assigned before calling onClose() to allow the callback to
        // inhibit backoff or otherwise manipulate the state in its non-started state.
        this.state = t, 
        // Notify the listener that the stream closed.
        await this.listener.Tr(n);
    }
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */    mr() {}
    auth() {
        this.state = 1 /* Starting */;
        const t = this.Ar(this.rr), n = this.rr;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.ir.getToken().then((t => {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            this.rr === n && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            this.Ir(t);
        }), (n => {
            t((() => {
                const t = new S(C.UNKNOWN, "Fetching auth token failed: " + n.message);
                return this.Rr(t);
            }));
        }));
    }
    Ir(t) {
        const n = this.Ar(this.rr);
        this.stream = this.Pr(t), this.stream.yr((() => {
            n((() => (this.state = 2 /* Open */ , this.listener.yr())));
        })), this.stream.Tr((t => {
            n((() => this.Rr(t)));
        })), this.stream.onMessage((t => {
            n((() => this.onMessage(t)));
        }));
    }
    ar() {
        this.state = 4 /* Backoff */ , this.Ks.vs((async () => {
            this.state = 0 /* Initial */ , this.start();
        }));
    }
    // Visible for tests
    Rr(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return P("PersistentStream", "close with error: " + t), this.stream = null, this.close(3 /* Error */ , t);
    }
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */    Ar(t) {
        return n => {
            this.Ts.Ms((() => this.rr === t ? n() : (P("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
            Promise.resolve())));
        };
    }
}

/**
 * A PersistentStream that implements the Listen RPC.
 *
 * Once the Listen stream has called the onOpen() listener, any number of
 * listen() and unlisten() calls can be made to control what changes will be
 * sent from the server for ListenResponses.
 */ class Us extends Ms {
    constructor(t, n, e, s, i) {
        super(t, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , n, e, i), 
        this.serializer = s;
    }
    Pr(t) {
        return this.sr.Vr("Listen", t);
    }
    onMessage(t) {
        // A successful response means the stream is healthy
        this.Ks.reset();
        const n = vn(this.serializer, t), e = function(t) {
            // We have only reached a consistent snapshot for the entire stream if there
            // is a read_time set and it applies to all targets (i.e. the list of
            // targets is empty). The backend is guaranteed to send such responses.
            if (!("targetChange" in t)) return q.min();
            const n = t.targetChange;
            return n.targetIds && n.targetIds.length ? q.min() : n.readTime ? mn(n.readTime) : q.min();
        }(t);
        return this.listener.pr(n, e);
    }
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */    gr(t) {
        const n = {};
        n.database = yn(this.serializer), n.addTarget = function(t, n) {
            let e;
            const s = n.target;
            return e = et(s) ? {
                documents: Sn(t, s)
            } : {
                query: Dn(t, s)
            }, e.targetId = n.targetId, n.resumeToken.at() > 0 ? e.resumeToken = wn(t, n.resumeToken) : n.ft.S(q.min()) > 0 && (
            // TODO(wuandy): Consider removing above check because it is most likely true.
            // Right now, many tests depend on this behaviour though (leaving min() out
            // of serialization).
            e.readTime = dn(t, n.ft.N())), e;
        }(this.serializer, t);
        const e = xn(this.serializer, t);
        e && (n.labels = e), this.wr(n);
    }
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */    vr(t) {
        const n = {};
        n.database = yn(this.serializer), n.removeTarget = t, this.wr(n);
    }
}

/**
 * A Stream that implements the Write RPC.
 *
 * The Write RPC requires the caller to maintain special streamToken
 * state in between calls, to help the server understand which responses the
 * client has processed by the time the next request is made. Every response
 * will contain a streamToken; this value must be passed to the next
 * request.
 *
 * After calling start() on this stream, the next request must be a handshake,
 * containing whatever streamToken is on hand. Once a response to this
 * request is received, all pending mutations may be submitted. When
 * submitting multiple batches of mutations at the same time, it's
 * okay to use the same streamToken for the calls to writeMutations.
 *
 * TODO(b/33271235): Use proto types
 */ class qs extends Ms {
    constructor(t, n, e, s, i) {
        super(t, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , n, e, i), 
        this.serializer = s, this.br = !1;
    }
    /**
     * Tracks whether or not a handshake has been successfully exchanged and
     * the stream is ready to accept mutations.
     */    get Cr() {
        return this.br;
    }
    // Override of PersistentStream.start
    start() {
        this.br = !1, this.lastStreamToken = void 0, super.start();
    }
    mr() {
        this.br && this.Sr([]);
    }
    Pr(t) {
        return this.sr.Vr("Write", t);
    }
    onMessage(t) {
        if (
        // Always capture the last stream token.
        v(!!t.streamToken), this.lastStreamToken = t.streamToken, this.br) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.Ks.reset();
            const n = Cn(t.writeResults, t.commitTime), e = mn(t.commitTime);
            return this.listener.Dr(e, n);
        }
        // The first response is always the handshake response
        return v(!t.writeResults || 0 === t.writeResults.length), this.br = !0, this.listener.Nr();
    }
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */    Fr() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        const t = {};
        t.database = yn(this.serializer), this.wr(t);
    }
    /** Sends a group of mutations to the Firestore backend to apply. */    Sr(t) {
        const n = {
            streamToken: this.lastStreamToken,
            writes: t.map((t => bn(this.serializer, t)))
        };
        this.wr(n);
    }
}

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
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */
/**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */
class Bs extends class {} {
    constructor(t, n, e) {
        super(), this.credentials = t, this.sr = n, this.serializer = e, this.Or = !1;
    }
    Lr() {
        if (this.Or) throw new S(C.FAILED_PRECONDITION, "The client has already been terminated.");
    }
    /** Gets an auth token and invokes the provided RPC. */    $r(t, n, e) {
        return this.Lr(), this.credentials.getToken().then((s => this.sr.$r(t, n, e, s))).catch((t => {
            throw t.code === C.UNAUTHENTICATED && this.credentials._(), t;
        }));
    }
    /** Gets an auth token and invokes the provided RPC with streamed results. */    kr(t, n, e) {
        return this.Lr(), this.credentials.getToken().then((s => this.sr.kr(t, n, e, s))).catch((t => {
            throw t.code === C.UNAUTHENTICATED && this.credentials._(), t;
        }));
    }
    terminate() {
        this.Or = !1;
    }
}

// TODO(firestorexp): Make sure there is only one Datastore instance per
// firestore-exp client.
/**
 * A component used by the RemoteStore to track the OnlineState (that is,
 * whether or not the client as a whole should be considered to be online or
 * offline), implementing the appropriate heuristics.
 *
 * In particular, when the client is trying to connect to the backend, we
 * allow up to MAX_WATCH_STREAM_FAILURES within ONLINE_STATE_TIMEOUT_MS for
 * a connection to succeed. If we have too many failures or the timeout elapses,
 * then we set the OnlineState to Offline, and the client will behave as if
 * it is offline (get()s will return cached data, etc.).
 */
class Qs {
    constructor(t, n) {
        this.Ns = t, this.Mr = n, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
         * A count of consecutive failures to open the stream. If it reaches the
         * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
         * Offline.
         */
        this.Ur = 0, 
        /**
         * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
         * transition from OnlineState.Unknown to OnlineState.Offline without waiting
         * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
         */
        this.qr = null, 
        /**
         * Whether the client should log a warning message if it fails to connect to
         * the backend (initially true, cleared after a successful stream, or if we've
         * logged the message already).
         */
        this.Br = !0;
    }
    /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */    Qr() {
        0 === this.Ur && (this.jr("Unknown" /* Unknown */), this.qr = this.Ns.Cs("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (() => (this.qr = null, 
        this.Wr("Backend didn't respond within 10 seconds."), this.jr("Offline" /* Offline */), 
        Promise.resolve()))));
    }
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */    Gr(t) {
        "Online" /* Online */ === this.state ? this.jr("Unknown" /* Unknown */) : (this.Ur++, 
        this.Ur >= 1 && (this.Kr(), this.Wr("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.jr("Offline" /* Offline */)));
    }
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */    set(t) {
        this.Kr(), this.Ur = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Br = !1), this.jr(t);
    }
    jr(t) {
        t !== this.state && (this.state = t, this.Mr(t));
    }
    Wr(t) {
        const n = `Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
        this.Br ? (y(n), this.Br = !1) : P("OnlineStateTracker", n);
    }
    Kr() {
        null !== this.qr && (this.qr.cancel(), this.qr = null);
    }
}

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
 */ class js {
    constructor(
    /**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
    t, 
    /** The client-side proxy for interacting with the backend. */
    n, e, s, i) {
        this.zr = t, this.Hr = n, this.Ns = e, this.Yr = {}, 
        /**
         * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
         * LocalStore via fillWritePipeline() and have or will send to the write
         * stream.
         *
         * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
         * restart the write stream. When the stream is established the writes in the
         * pipeline will be sent in order.
         *
         * Writes remain in writePipeline until they are acknowledged by the backend
         * and thus will automatically be re-sent if the stream is interrupted /
         * restarted before they're acknowledged.
         *
         * Write responses from the backend are linked to their originating request
         * purely based on order, and so we can just shift() writes from the front of
         * the writePipeline as we receive responses.
         */
        this.Jr = [], 
        /**
         * A mapping of watched targets that the client cares about tracking and the
         * user has explicitly called a 'listen' for this target.
         *
         * These targets may or may not have been sent to or acknowledged by the
         * server. On re-establishing the listen stream, these targets should be sent
         * to the server. The targets removed with unlistens are removed eagerly
         * without waiting for confirmation from the listen stream.
         */
        this.Xr = new Map, 
        /**
         * A set of reasons for why the RemoteStore may be offline. If empty, the
         * RemoteStore may start its network connections.
         */
        this.Zr = new Set, 
        /**
         * Event handlers that get called when the network is disabled or enabled.
         *
         * PORTING NOTE: These functions are used on the Web client to create the
         * underlying streams (to support tree-shakeable streams). On Android and iOS,
         * the streams are created during construction of RemoteStore.
         */
        this.no = [], this.eo = i, this.eo.so((t => {
            e.Ms((async () => {
                // Porting Note: Unlike iOS, `restartNetwork()` is called even when the
                // network becomes unreachable as we don't have any other way to tear
                // down our streams.
                Zs(this) && (P("RemoteStore", "Restarting streams for network reachability change."), 
                await async function(t) {
                    const n = b(t);
                    n.Zr.add(4 /* ConnectivityChange */), await Gs(n), n.io.set("Unknown" /* Unknown */), 
                    n.Zr.delete(4 /* ConnectivityChange */), await Ws(n);
                }(this));
            }));
        })), this.io = new Qs(e, s);
    }
}

async function Ws(t) {
    if (Zs(t)) for (const n of t.no) await n(/* enabled= */ !0);
}

/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */ async function Gs(t) {
    for (const n of t.no) await n(/* enabled= */ !1);
}

/**
 * Starts new listen for the given target. Uses resume token if provided. It
 * is a no-op if the target of given `TargetData` is already being listened to.
 */
function Ks(t, n) {
    const e = b(t);
    e.Xr.has(n.targetId) || (
    // Mark this as something the client is currently listening for.
    e.Xr.set(n.targetId, n), Xs(e) ? 
    // The listen will be sent in onWatchStreamOpen
    Js(e) : wi(e).hr() && Hs(e, n));
}

/**
 * Removes the listen from server. It is a no-op if the given target id is
 * not being listened to.
 */ function zs(t, n) {
    const e = b(t), s = wi(e);
    e.Xr.delete(n), s.hr() && Ys(e, n), 0 === e.Xr.size && (s.hr() ? s._r() : Zs(e) && 
    // Revert to OnlineState.Unknown if the watch stream is not open and we
    // have no listeners, since without any listens to send we cannot
    // confirm if the stream is healthy and upgrade to OnlineState.Online.
    e.io.set("Unknown" /* Unknown */));
}

/**
 * We need to increment the the expected number of pending responses we're due
 * from watch so we wait for the ack to process any messages from this target.
 */ function Hs(t, n) {
    t.ro.Dn(n.targetId), wi(t).gr(n);
}

/**
 * We need to increment the expected number of pending responses we're due
 * from watch so we wait for the removal on the server before we process any
 * messages from this target.
 */ function Ys(t, n) {
    t.ro.Dn(n), wi(t).vr(n);
}

function Js(t) {
    t.ro = new Ot({
        Zn: n => t.Yr.Zn(n),
        te: n => t.Xr.get(n) || null
    }), wi(t).start(), t.io.Qr();
}

/**
 * Returns whether the watch stream should be started because it's necessary
 * and has not yet been started.
 */ function Xs(t) {
    return Zs(t) && !wi(t).cr() && t.Xr.size > 0;
}

function Zs(t) {
    return 0 === b(t).Zr.size;
}

function ti(t) {
    t.ro = void 0;
}

async function ni(t) {
    t.Xr.forEach(((n, e) => {
        Hs(t, n);
    }));
}

async function ei(t, n) {
    ti(t), 
    // If we still need the watch stream, retry the connection.
    Xs(t) ? (t.io.Gr(n), Js(t)) : 
    // No need to restart watch stream because there are no active targets.
    // The online state is set to unknown because there is no active attempt
    // at establishing a connection
    t.io.set("Unknown" /* Unknown */);
}

async function si(t, n, e) {
    if (
    // Mark the client as online since we got a message from the server
    t.io.set("Online" /* Online */), n instanceof xt && 2 /* Removed */ === n.state && n.cause) 
    // There was an error on a target, don't wait for a consistent snapshot
    // to raise events
    try {
        await 
        /** Handles an error on a target */
        async function(t, n) {
            const e = n.cause;
            for (const s of n.targetIds) 
            // A watched target might have been removed already.
            t.Xr.has(s) && (await t.Yr.oo(s, e), t.Xr.delete(s), t.ro.removeTarget(s));
        }
        /**
 * Attempts to fill our write pipeline with writes from the LocalStore.
 *
 * Called internally to bootstrap or refill the write pipeline and by
 * SyncEngine whenever there are new mutations to process.
 *
 * Starts the write stream if necessary.
 */ (t, n);
    } catch (e) {
        P("RemoteStore", "Failed to remove targets %s: %s ", n.targetIds.join(","), e), 
        await ii(t, e);
    } else if (n instanceof Dt ? t.ro.Mn(n) : n instanceof Nt ? t.ro.Kn(n) : t.ro.Bn(n), 
    !e.isEqual(q.min())) try {
        const n = await xs(t.zr);
        e.S(n) >= 0 && 
        // We have received a target change with a global snapshot if the snapshot
        // version is not equal to SnapshotVersion.min().
        await 
        /**
 * Takes a batch of changes from the Datastore, repackages them as a
 * RemoteEvent, and passes that on to the listener, which is typically the
 * SyncEngine.
 */
        function(t, n) {
            const e = t.ro.Yn(n);
            // Update in-memory resume tokens. LocalStore will update the
            // persistent view of these when applying the completed RemoteEvent.
                        return e.on.forEach(((e, s) => {
                if (e.resumeToken.at() > 0) {
                    const i = t.Xr.get(s);
                    // A watched target might have been removed already.
                                        i && t.Xr.set(s, i.wt(e.resumeToken, n));
                }
            })), 
            // Re-establish listens for the targets that have been invalidated by
            // existence filter mismatches.
            e.un.forEach((n => {
                const e = t.Xr.get(n);
                if (!e) 
                // A watched target might have been removed already.
                return;
                // Clear the resume token for the target, since we're in a known mismatch
                // state.
                                t.Xr.set(n, e.wt(it.lt, e.ft)), 
                // Cause a hard reset by unwatching and rewatching immediately, but
                // deliberately don't send a resume token so that we get a full update.
                Ys(t, n);
                // Mark the target we send as being on behalf of an existence filter
                // mismatch, but don't actually retain that in listenTargets. This ensures
                // that we flag the first re-listen this way without impacting future
                // listens of this target (that might happen e.g. on reconnect).
                const s = new rt(e.target, n, 1 /* ExistenceFilterMismatch */ , e.sequenceNumber);
                Hs(t, s);
            })), t.Yr.uo(e);
        }(t, e);
    } catch (n) {
        P("RemoteStore", "Failed to raise snapshot:", n), await ii(t, n);
    }
}

/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */ async function ii(t, n, e) {
    if (!As(n)) throw n;
    t.Zr.add(1 /* IndexedDbFailed */), 
    // Disable network and raise offline snapshots
    await Gs(t), t.io.set("Offline" /* Offline */), e || (
    // Use a simple read operation to determine if IndexedDB recovered.
    // Ideally, we would expose a health check directly on SimpleDb, but
    // RemoteStore only has access to persistence through LocalStore.
    e = () => xs(t.zr)), 
    // Probe IndexedDB periodically and re-enable network
    t.Ns.ti((async () => {
        P("RemoteStore", "Retrying IndexedDB access"), await e(), t.Zr.delete(1 /* IndexedDbFailed */), 
        await Ws(t);
    }));
}

/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */ function ri(t, n) {
    return n().catch((e => ii(t, e, n)));
}

async function oi(t) {
    const n = b(t), e = Ei(n);
    let s = n.Jr.length > 0 ? n.Jr[n.Jr.length - 1].batchId : -1;
    for (;ui(n); ) try {
        const t = await Os(n.zr, s);
        if (null === t) {
            0 === n.Jr.length && e._r();
            break;
        }
        s = t.batchId, ci(n, t);
    } catch (t) {
        await ii(n, t);
    }
    hi(n) && ai(n);
}

/**
 * Returns true if we can add to the write pipeline (i.e. the network is
 * enabled and the write pipeline is not full).
 */ function ui(t) {
    return Zs(t) && t.Jr.length < 10;
}

/**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */ function ci(t, n) {
    t.Jr.push(n);
    const e = Ei(t);
    e.hr() && e.Cr && e.Sr(n.mutations);
}

function hi(t) {
    return Zs(t) && !Ei(t).cr() && t.Jr.length > 0;
}

function ai(t) {
    Ei(t).start();
}

async function li(t) {
    Ei(t).Fr();
}

async function _i(t) {
    const n = Ei(t);
    // Send the write pipeline now that the stream is established.
        for (const e of t.Jr) n.Sr(e.mutations);
}

async function fi(t, n, e) {
    const s = t.Jr.shift(), i = hs.from(s, n, e);
    await ri(t, (() => t.Yr.co(i))), 
    // It's possible that with the completion of this mutation another
    // slot has freed up.
    await oi(t);
}

async function di(t, n) {
    // If the write stream closed after the write handshake completes, a write
    // operation failed and we fail the pending operation.
    n && Ei(t).Cr && 
    // This error affects the actual write.
    await async function(t, n) {
        // Only handle permanent errors here. If it's transient, just let the retry
        // logic kick in.
        if (e = n.code, ht(e) && e !== C.ABORTED) {
            // This was a permanent error, the request itself was the problem
            // so it's not going to succeed if we resend it.
            const e = t.Jr.shift();
            // In this case it's also unlikely that the server itself is melting
            // down -- this was just a bad request so inhibit backoff on the next
            // restart.
                        Ei(t).lr(), await ri(t, (() => t.Yr.ho(e.batchId, n))), 
            // It's possible that with the completion of this mutation
            // another slot has freed up.
            await oi(t);
        }
        var e;
        /**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */    }(t, n), 
    // The write stream might have been started by refilling the write
    // pipeline for failed writes
    hi(t) && ai(t);
}

/**
 * If not yet initialized, registers the WatchStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */
function wi(t) {
    return t.ao || (
    // Create stream (but note that it is not started yet).
    t.ao = function(t, n, e) {
        const s = b(t);
        return s.Lr(), new Us(n, s.sr, s.credentials, s.serializer, e);
    }
    /**
 * @license
 * Copyright 2018 Google LLC
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
 */ (t.Hr, t.Ns, {
        yr: ni.bind(null, t),
        Tr: ei.bind(null, t),
        pr: si.bind(null, t)
    }), t.no.push((async n => {
        n ? (t.ao.lr(), Xs(t) ? Js(t) : t.io.set("Unknown" /* Unknown */)) : (await t.ao.stop(), 
        ti(t));
    }))), t.ao;
}

/**
 * If not yet initialized, registers the WriteStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */ function Ei(t) {
    return t.lo || (
    // Create stream (but note that it is not started yet).
    t.lo = function(t, n, e) {
        const s = b(t);
        return s.Lr(), new qs(n, s.sr, s.credentials, s.serializer, e);
    }(t.Hr, t.Ns, {
        yr: li.bind(null, t),
        Tr: di.bind(null, t),
        Nr: _i.bind(null, t),
        Dr: fi.bind(null, t)
    }), t.no.push((async n => {
        n ? (t.lo.lr(), 
        // This will start the write stream if necessary.
        await oi(t)) : (await t.lo.stop(), t.Jr.length > 0 && (P("RemoteStore", `Stopping write stream with ${t.Jr.length} pending writes`), 
        t.Jr = []));
    }))), t.lo;
}

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
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */ class mi {
    constructor() {
        this._o = void 0, this.listeners = [];
    }
}

class Ti {
    constructor() {
        this.queries = new as((t => qe(t)), Ue), this.onlineState = "Unknown" /* Unknown */ , 
        this.fo = new Set;
    }
}

async function Ai(t, n) {
    const e = b(t), s = n.query;
    let i = !1, r = e.queries.get(s);
    if (r || (i = !0, r = new mi), i) try {
        r._o = await e.wo(s);
    } catch (t) {
        const e = ys(t, `Initialization of query '${Be(n.query)}' failed`);
        return void n.onError(e);
    }
    e.queries.set(s, r), r.listeners.push(n);
    // Run global snapshot listeners if a consistent snapshot has been emitted.
    n.Eo(e.onlineState);
    if (r._o) {
        n.mo(r._o) && yi(e);
    }
}

async function Ii(t, n) {
    const e = b(t), s = n.query;
    let i = !1;
    const r = e.queries.get(s);
    if (r) {
        const t = r.listeners.indexOf(n);
        t >= 0 && (r.listeners.splice(t, 1), i = 0 === r.listeners.length);
    }
    if (i) return e.queries.delete(s), e.To(s);
}

function Ri(t, n) {
    const e = b(t);
    let s = !1;
    for (const t of n) {
        const n = t.query, i = e.queries.get(n);
        if (i) {
            for (const n of i.listeners) n.mo(t) && (s = !0);
            i._o = t;
        }
    }
    s && yi(e);
}

function Pi(t, n, e) {
    const s = b(t), i = s.queries.get(n);
    if (i) for (const t of i.listeners) t.onError(e);
    // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
    // after an error.
        s.queries.delete(n);
}

// Call all global snapshot listeners that have been set.
function yi(t) {
    t.fo.forEach((t => {
        t.next();
    }));
}

/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */ class Vi {
    constructor(t, n, e) {
        this.query = t, this.Ao = n, 
        /**
         * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
         * observer. This flag is set to true once we've actually raised an event.
         */
        this.Io = !1, this.Ro = null, this.onlineState = "Unknown" /* Unknown */ , this.options = e || {};
    }
    /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */    mo(t) {
        if (!this.options.includeMetadataChanges) {
            // Remove the metadata only changes.
            const n = [];
            for (const e of t.docChanges) 3 /* Metadata */ !== e.type && n.push(e);
            t = new bt(t.query, t.docs, t.tn, n, t.nn, t.fromCache, t.en, 
            /* excludesMetadataChanges= */ !0);
        }
        let n = !1;
        return this.Io ? this.Po(t) && (this.Ao.next(t), n = !0) : this.yo(t, this.onlineState) && (this.Vo(t), 
        n = !0), this.Ro = t, n;
    }
    onError(t) {
        this.Ao.error(t);
    }
    /** Returns whether a snapshot was raised. */    Eo(t) {
        this.onlineState = t;
        let n = !1;
        return this.Ro && !this.Io && this.yo(this.Ro, t) && (this.Vo(this.Ro), n = !0), 
        n;
    }
    yo(t, n) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                const e = "Offline" /* Offline */ !== n;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return (!this.options.po || !e) && (!t.docs.q() || "Offline" /* Offline */ === n);
        // Raise data from cache if we have any documents or we are offline
        }
    Po(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        const n = this.Ro && this.Ro.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.en && !n) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }
    Vo(t) {
        t = bt.rn(t.query, t.docs, t.nn, t.fromCache), this.Io = !0, this.Ao.next(t);
    }
}

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
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ class pi {
    constructor() {
        // A set of outstanding references to a document sorted by key.
        this.vo = new dt(gi.bo), 
        // A set of outstanding references to a document sorted by target id.
        this.Co = new dt(gi.So);
    }
    /** Returns true if the reference set contains no references. */    q() {
        return this.vo.q();
    }
    /** Adds a reference to the given document key for the given ID. */    Do(t, n) {
        const e = new gi(t, n);
        this.vo = this.vo.add(e), this.Co = this.Co.add(e);
    }
    /** Add references to the given document keys for the given ID. */    No(t, n) {
        t.forEach((t => this.Do(t, n)));
    }
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */    xo(t, n) {
        this.Fo(new gi(t, n));
    }
    Oo(t, n) {
        t.forEach((t => this.xo(t, n)));
    }
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */    Lo(t) {
        const n = new G(new Q([])), e = new gi(n, t), s = new gi(n, t + 1), i = [];
        return this.Co.jt([ e, s ], (t => {
            this.Fo(t), i.push(t.key);
        })), i;
    }
    $o() {
        this.vo.forEach((t => this.Fo(t)));
    }
    Fo(t) {
        this.vo = this.vo.delete(t), this.Co = this.Co.delete(t);
    }
    ko(t) {
        const n = new G(new Q([])), e = new gi(n, t), s = new gi(n, t + 1);
        let i = yt();
        return this.Co.jt([ e, s ], (t => {
            i = i.add(t.key);
        })), i;
    }
    Mo(t) {
        const n = new gi(t, 0), e = this.vo.Gt(n);
        return null !== e && t.isEqual(e.key);
    }
}

class gi {
    constructor(t, n) {
        this.key = t, this.Uo = n;
    }
    /** Compare by key then by ID */    static bo(t, n) {
        return G.O(t.key, n.key) || k(t.Uo, n.Uo);
    }
    /** Compare by ID then by key */    static So(t, n) {
        return k(t.Uo, n.Uo) || G.O(t.key, n.key);
    }
}

/**
 * @license
 * Copyright 2018 Google LLC
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
 * Metadata state of the local client. Unlike `RemoteClientState`, this class is
 * mutable and keeps track of all pending mutations, which allows us to
 * update the range of pending mutation batch IDs as new mutations are added or
 * removed.
 *
 * The data in `LocalClientState` is not read from WebStorage and instead
 * updated via its instance methods. The updated state can be serialized via
 * `toWebStorageJSON()`.
 */
// Visible for testing.
class vi {
    constructor() {
        this.activeTargetIds = pt();
    }
    qo(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }
    Bo(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */    Qo() {
        const t = {
            activeTargetIds: this.activeTargetIds.W(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }
}

/**
 * `MemorySharedClientState` is a simple implementation of SharedClientState for
 * clients using memory persistence. The state in this class remains fully
 * isolated and no synchronization is performed.
 */ class bi {
    constructor() {
        this.jo = new vi, this.Wo = {}, this.Mr = null, this._s = null;
    }
    Go(t) {
        // No op.
    }
    Ko(t, n, e) {
        // No op.
    }
    zo(t) {
        return this.jo.qo(t), this.Wo[t] || "not-current";
    }
    Ho(t, n, e) {
        this.Wo[t] = n;
    }
    Yo(t) {
        this.jo.Bo(t);
    }
    Jo(t) {
        return this.jo.activeTargetIds.has(t);
    }
    Xo(t) {
        delete this.Wo[t];
    }
    Zo() {
        return this.jo.activeTargetIds;
    }
    tu(t) {
        return this.jo.activeTargetIds.has(t);
    }
    start() {
        return this.jo = new vi, Promise.resolve();
    }
    nu(t, n, e) {
        // No op.
    }
    eu(t) {
        // No op.
    }
    su() {}
    ws(t) {}
    iu() {
        // No op.
    }
}

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
 */ class Ci {
    constructor(t) {
        this.key = t;
    }
}

class Si {
    constructor(t) {
        this.key = t;
    }
}

/**
 * View is responsible for computing the final merged truth of what docs are in
 * a query. It gets notified of local and remote changes to docs, and applies
 * the query filters and limits to determine the most correct possible results.
 */ class Di {
    constructor(t, 
    /** Documents included in the remote target */
    n) {
        this.query = t, this.ru = n, this.ou = null, 
        /**
         * A flag whether the view is current with the backend. A view is considered
         * current after it has seen the current flag from the backend and did not
         * lose consistency within the watch stream (e.g. because of an existence
         * filter mismatch).
         */
        this._n = !1, 
        /** Documents in the view but not in the remote target */
        this.uu = yt(), 
        /** Document Keys that have local changes */
        this.nn = yt(), this.cu = je(t), this.hu = new gt(this.cu);
    }
    /**
     * The set of remote documents that the server has told us belongs to the target associated with
     * this view.
     */    get au() {
        return this.ru;
    }
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges - The doc changes to apply to this view.
     * @param previousChanges - If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @returns a new set of docs, changes, and refill flag.
     */    lu(t, n) {
        const e = n ? n._u : new vt, s = n ? n.hu : this.hu;
        let i = n ? n.nn : this.nn, r = s, o = !1;
        // Track the last doc in a (full) limit. This is necessary, because some
        // update (a delete, or an update moving a doc past the old limit) might
        // mean there is some other document in the local cache that either should
        // come (1) between the old last limit doc and the new last document, in the
        // case of updates, or (2) after the new last document, in the case of
        // deletes. So we keep this doc at the old limit to compare the updates to.
        // Note that this should never get used in a refill (when previousChanges is
        // set), because there will only be adds -- no deletes or updates.
        const u = Ne(this.query) && s.size === this.query.limit ? s.last() : null, c = xe(this.query) && s.size === this.query.limit ? s.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.Pt(((t, n) => {
            const h = s.get(t);
            let a = n instanceof ve ? n : null;
            a && (a = Qe(this.query, a) ? a : null);
            const l = !!h && this.nn.has(h.key), _ = !!a && (a.he || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            this.nn.has(a.key) && a.hasCommittedMutations);
            let f = !1;
            // Calculate change
                        if (h && a) {
                h.data().isEqual(a.data()) ? l !== _ && (e.track({
                    type: 3 /* Metadata */ ,
                    doc: a
                }), f = !0) : this.fu(h, a) || (e.track({
                    type: 2 /* Modified */ ,
                    doc: a
                }), f = !0, (u && this.cu(a, u) > 0 || c && this.cu(a, c) < 0) && (
                // This doc moved from inside the limit to outside the limit.
                // That means there may be some other doc in the local cache
                // that should be included instead.
                o = !0));
            } else !h && a ? (e.track({
                type: 0 /* Added */ ,
                doc: a
            }), f = !0) : h && !a && (e.track({
                type: 1 /* Removed */ ,
                doc: h
            }), f = !0, (u || c) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            o = !0));
            f && (a ? (r = r.add(a), i = _ ? i.add(t) : i.delete(t)) : (r = r.delete(t), i = i.delete(t)));
        })), Ne(this.query) || xe(this.query)) for (;r.size > this.query.limit; ) {
            const t = Ne(this.query) ? r.last() : r.first();
            r = r.delete(t.key), i = i.delete(t.key), e.track({
                type: 1 /* Removed */ ,
                doc: t
            });
        }
        return {
            hu: r,
            _u: e,
            _i: o,
            nn: i
        };
    }
    fu(t, n) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.he && n.hasCommittedMutations && !n.he;
    }
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges - The set of changes to make to the view's docs.
     * @param updateLimboDocuments - Whether to update limbo documents based on
     *        this change.
     * @param targetChange - A target change to apply for computing limbo docs and
     *        sync state.
     * @returns A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    du(t, n, e) {
        const s = this.hu;
        this.hu = t.hu, this.nn = t.nn;
        // Sort changes based on type and query comparator
        const i = t._u.Zt();
        i.sort(((t, n) => function(t, n) {
            const e = t => {
                switch (t) {
                  case 0 /* Added */ :
                    return 1;

                  case 2 /* Modified */ :
                  case 3 /* Metadata */ :
                    // A metadata change is converted to a modified change at the public
                    // api layer.  Since we sort by document key and then change type,
                    // metadata and modified changes must be sorted equivalently.
                    return 2;

                  case 1 /* Removed */ :
                    return 0;

                  default:
                    return g();
                }
            };
            return e(t) - e(n);
        }
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
 */ (t.type, n.type) || this.cu(t.doc, n.doc))), this.wu(e);
        const r = n ? this.Eu() : [], o = 0 === this.uu.size && this._n ? 1 /* Synced */ : 0 /* Local */ , u = o !== this.ou;
        if (this.ou = o, 0 !== i.length || u) {
            return {
                snapshot: new bt(this.query, t.hu, s, i, t.nn, 0 /* Local */ === o, u, 
                /* excludesMetadataChanges= */ !1),
                mu: r
            };
        }
        // no changes
        return {
            mu: r
        };
    }
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */    Eo(t) {
        return this._n && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this._n = !1, this.du({
            hu: this.hu,
            _u: new vt,
            nn: this.nn,
            _i: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            mu: []
        };
    }
    /**
     * Returns whether the doc for the given key should be in limbo.
     */    Tu(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.ru.has(t) && (
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.hu.has(t) && !this.hu.get(t).he);
    }
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */    wu(t) {
        t && (t.fn.forEach((t => this.ru = this.ru.add(t))), t.dn.forEach((t => {})), t.wn.forEach((t => this.ru = this.ru.delete(t))), 
        this._n = t._n);
    }
    Eu() {
        // We can only determine limbo documents when we're in-sync with the server.
        if (!this._n) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                const t = this.uu;
        this.uu = yt(), this.hu.forEach((t => {
            this.Tu(t.key) && (this.uu = this.uu.add(t.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        const n = [];
        return t.forEach((t => {
            this.uu.has(t) || n.push(new Si(t));
        })), this.uu.forEach((e => {
            t.has(e) || n.push(new Ci(e));
        })), n;
    }
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @returns The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    Au(t) {
        this.ru = t.nr, this.uu = yt();
        const n = this.lu(t.documents);
        return this.du(n, /*updateLimboDocuments=*/ !0);
    }
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    Iu() {
        return bt.rn(this.query, this.hu, this.nn, 0 /* Local */ === this.ou);
    }
}

/**
 * QueryView contains all of the data that SyncEngine needs to keep track of for
 * a particular query.
 */
class Ni {
    constructor(
    /**
     * The query itself.
     */
    t, 
    /**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
    n, 
    /**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
    e) {
        this.query = t, this.targetId = n, this.view = e;
    }
}

/** Tracks a limbo resolution. */ class xi {
    constructor(t) {
        this.key = t, 
        /**
         * Set to true once we've received a document. This is used in
         * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
         * decide whether it needs to manufacture a delete event for the target once
         * the target is CURRENT.
         */
        this.Ru = !1;
    }
}

/**
 * An implementation of `SyncEngine` coordinating with other parts of SDK.
 *
 * The parts of SyncEngine that act as a callback to RemoteStore need to be
 * registered individually. This is done in `syncEngineWrite()` and
 * `syncEngineListen()` (as well as `applyPrimaryState()`) as these methods
 * serve as entry points to RemoteStore's functionality.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */ class Fi {
    constructor(t, n, e, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    s, i, r) {
        this.zr = t, this.Pu = n, this.yu = e, this.Vu = s, this.currentUser = i, this.pu = r, 
        this.gu = {}, this.vu = new as((t => qe(t)), Ue), this.bu = new Map, 
        /**
         * The keys of documents that are in limbo for which we haven't yet started a
         * limbo resolution query.
         */
        this.Cu = [], 
        /**
         * Keeps track of the target ID for each document that is in limbo with an
         * active target.
         */
        this.Su = new lt(G.O), 
        /**
         * Keeps track of the information about an active limbo resolution for each
         * active target ID that was started for the purpose of limbo resolution.
         */
        this.Du = new Map, this.Nu = new pi, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.xu = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.Fu = new Map, this.Ou = Cs.Ti(), this.onlineState = "Unknown" /* Unknown */ , 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.Lu = void 0;
    }
    get $u() {
        return !0 === this.Lu;
    }
}

/**
 * Initiates the new listen, resolves promise when listen enqueued to the
 * server. All the subsequent view snapshots or errors are sent to the
 * subscribed handlers. Returns the initial snapshot.
 */
async function Oi(t, n) {
    const e = function(t) {
        const n = b(t);
        return n.Pu.Yr.uo = ki.bind(null, n), n.Pu.Yr.Zn = Zi.bind(null, n), n.Pu.Yr.oo = Ui.bind(null, n), 
        n.gu.pr = Ri.bind(null, n.yu), n.gu.ku = Pi.bind(null, n.yu), n;
    }(t);
    let s, i;
    const r = e.vu.get(n);
    if (r) 
    // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
    // already exists when EventManager calls us for the first time. This
    // happens when the primary tab is already listening to this query on
    // behalf of another tab and the user of the primary also starts listening
    // to the query. EventManager will not have an assigned target ID in this
    // case and calls `listen` to obtain this ID.
    s = r.targetId, e.Vu.zo(s), i = r.view.Iu(); else {
        const t = await 
        /**
 * Assigns the given target an internal ID so that its results can be pinned so
 * they don't get GC'd. A target must be allocated in the local store before
 * the store can be used to manage its view.
 *
 * Allocating an already allocated `Target` will return the existing `TargetData`
 * for that `Target`.
 */
        function(t, n) {
            const e = b(t);
            return e.persistence.runTransaction("Allocate target", "readwrite", (t => {
                let s;
                return e.gi.Zi(t, n).next((i => i ? (
                // This target has been listened to previously, so reuse the
                // previous targetID.
                // TODO(mcg): freshen last accessed date?
                s = i, ls.resolve(s)) : e.gi.Mu(t).next((i => (s = new rt(n, i, 0 /* Listen */ , t.Gi), 
                e.gi.Uu(t, s).next((() => s)))))));
            })).then((t => {
                // If Multi-Tab is enabled, the existing target data may be newer than
                // the in-memory data
                const s = e.Ii.get(t.targetId);
                return (null === s || t.ft.S(s.ft) > 0) && (e.Ii = e.Ii.Tt(t.targetId, t), e.Ri.set(n, t.targetId)), 
                t;
            }));
        }(e.zr, ke(n)), r = e.Vu.zo(t.targetId);
        s = t.targetId, i = await 
        /**
 * Registers a view for a previously unknown query and computes its initial
 * snapshot.
 */
        async function(t, n, e, s) {
            // PORTING NOTE: On Web only, we inject the code that registers new Limbo
            // targets based on view changes. This allows us to only depend on Limbo
            // changes when user code includes queries.
            t.qu = (n, e, s) => async function(t, n, e, s) {
                let i = n.view.lu(e);
                i._i && (
                // The query has a limit and some docs were removed, so we need
                // to re-run the query against the local store to make sure we
                // didn't lose any good docs that had been past the limit.
                i = await $s(t.zr, n.query, 
                /* usePreviousResults= */ !1).then((({documents: t}) => n.view.lu(t, i))));
                const r = s && s.on.get(n.targetId), o = n.view.du(i, 
                /* updateLimboDocuments= */ t.$u, r);
                return zi(t, n.targetId, o.mu), o.snapshot;
            }(t, n, e, s);
            const i = await $s(t.zr, n, 
            /* usePreviousResults= */ !0), r = new Di(n, i.nr), o = r.lu(i.documents), u = St.ln(e, s && "Offline" /* Offline */ !== t.onlineState), c = r.du(o, 
            /* updateLimboDocuments= */ t.$u, u);
            zi(t, e, c.mu);
            const h = new Ni(n, e, r);
            t.vu.set(n, h), t.bu.has(e) ? t.bu.get(e).push(n) : t.bu.set(e, [ n ]);
            return c.snapshot;
        }
        /** Stops listening to the query. */ (e, n, s, "current" === r), e.$u && Ks(e.Pu, t);
    }
    return i;
}

async function Li(t, n) {
    const e = b(t), s = e.vu.get(n), i = e.bu.get(s.targetId);
    if (i.length > 1) return e.bu.set(s.targetId, i.filter((t => !Ue(t, n)))), void e.vu.delete(n);
    // No other queries are mapped to the target, clean up the query and the target.
        if (e.$u) {
        // We need to remove the local query target first to allow us to verify
        // whether any other client is still interested in this target.
        e.Vu.Yo(s.targetId);
        e.Vu.tu(s.targetId) || await Ls(e.zr, s.targetId, 
        /*keepPersistedTargetData=*/ !1).then((() => {
            e.Vu.Xo(s.targetId), zs(e.Pu, s.targetId), Gi(e, s.targetId);
        })).catch(ks);
    } else Gi(e, s.targetId), await Ls(e.zr, s.targetId, 
    /*keepPersistedTargetData=*/ !0);
}

/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */ async function $i(t, n, e) {
    const s = function(t) {
        const n = b(t);
        return n.Pu.Yr.co = qi.bind(null, n), n.Pu.Yr.ho = Bi.bind(null, n), n;
    }
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
 */ (t);
    try {
        const t = await function(t, n) {
            const e = b(t), s = U.now(), i = n.reduce(((t, n) => t.add(n.key)), yt());
            let r;
            return e.persistence.runTransaction("Locally write mutations", "readwrite", (t => e.bi.Je(t, i).next((i => {
                r = i;
                // For non-idempotent mutations (such as `FieldValue.increment()`),
                // we record the base state in a separate patch mutation. This is
                // later used to guarantee consistent values and prevents flicker
                // even if the backend sends us an update that already includes our
                // transform.
                const o = [];
                for (const t of n) {
                    const n = _e(t, r.get(t.key));
                    null != n && 
                    // NOTE: The base state should only be applied if there's some
                    // existing document to override, so use a Precondition of
                    // exists=true
                    o.push(new Ee(t.key, n, pe(n.proto.mapValue), ue.exists(!0)));
                }
                return e.je.Bu(t, s, o, n);
            })))).then((t => {
                const n = t.ve(r);
                return {
                    batchId: t.batchId,
                    Qu: n
                };
            }));
        }(s.zr, n);
        s.Vu.Go(t.batchId), function(t, n, e) {
            let s = t.xu[t.currentUser.i()];
            s || (s = new lt(k));
            s = s.Tt(n, e), t.xu[t.currentUser.i()] = s;
        }
        /**
 * Resolves or rejects the user callback for the given batch and then discards
 * it.
 */ (s, t.batchId, e), await Ji(s, t.Qu), await oi(s.Pu);
    } catch (t) {
        // If we can't persist the mutation, we reject the user callback and
        // don't send the mutation. The user can then retry the write.
        const n = ys(t, "Failed to persist write");
        e.reject(n);
    }
}

/**
 * Applies one remote event to the sync engine, notifying any views of the
 * changes, and releasing any pending mutation batches that would become
 * visible because of the snapshot version the remote event contains.
 */ async function ki(t, n) {
    const e = b(t);
    try {
        const t = await Fs(e.zr, n);
        // Update `receivedDocument` as appropriate for any limbo targets.
                n.on.forEach(((t, n) => {
            const s = e.Du.get(n);
            s && (
            // Since this is a limbo resolution lookup, it's for a single document
            // and it could be added, modified, or removed, but not a combination.
            v(t.fn.size + t.dn.size + t.wn.size <= 1), t.fn.size > 0 ? s.Ru = !0 : t.dn.size > 0 ? v(s.Ru) : t.wn.size > 0 && (v(s.Ru), 
            s.Ru = !1));
        })), await Ji(e, t, n);
    } catch (t) {
        await ks(t);
    }
}

/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */ function Mi(t, n, e) {
    const s = b(t);
    // If we are the secondary client, we explicitly ignore the remote store's
    // online state (the local client may go offline, even though the primary
    // tab remains online) and only apply the primary tab's online state from
    // SharedClientState.
        if (s.$u && 0 /* RemoteStore */ === e || !s.$u && 1 /* SharedClientState */ === e) {
        const t = [];
        s.vu.forEach(((e, s) => {
            const i = s.view.Eo(n);
            i.snapshot && t.push(i.snapshot);
        })), function(t, n) {
            const e = b(t);
            e.onlineState = n;
            let s = !1;
            e.queries.forEach(((t, e) => {
                for (const t of e.listeners) 
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                t.Eo(n) && (s = !0);
            })), s && yi(e);
        }(s.yu, n), t.length && s.gu.pr(t), s.onlineState = n, s.$u && s.Vu.eu(n);
    }
}

/**
 * Rejects the listen for the given targetID. This can be triggered by the
 * backend for any active target.
 *
 * @param syncEngine - The sync engine implementation.
 * @param targetId - The targetID corresponds to one previously initiated by the
 * user as part of TargetData passed to listen() on RemoteStore.
 * @param err - A description of the condition that has forced the rejection.
 * Nearly always this will be an indication that the user is no longer
 * authorized to see the data matching the target.
 */ async function Ui(t, n, e) {
    const s = b(t);
    // PORTING NOTE: Multi-tab only.
        s.Vu.Ho(n, "rejected", e);
    const i = s.Du.get(n), r = i && i.key;
    if (r) {
        // TODO(klimt): We really only should do the following on permission
        // denied errors, but we don't have the cause code here.
        // It's a limbo doc. Create a synthetic event saying it was deleted.
        // This is kind of a hack. Ideally, we would have a method in the local
        // store to purge a document. However, it would be tricky to keep all of
        // the local store's invariants with another method.
        let t = new lt(G.O);
        t = t.Tt(r, new be(r, q.min()));
        const e = yt().add(r), i = new Ct(q.min(), 
        /* targetChanges= */ new Map, 
        /* targetMismatches= */ new dt(k), t, e);
        await ki(s, i), 
        // Since this query failed, we won't want to manually unlisten to it.
        // We only remove it from bookkeeping after we successfully applied the
        // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
        // this query when the RemoteStore restarts the Watch stream, which should
        // re-trigger the target failure.
        s.Su = s.Su.remove(r), s.Du.delete(n), Yi(s);
    } else await Ls(s.zr, n, 
    /* keepPersistedTargetData */ !1).then((() => Gi(s, n, e))).catch(ks);
}

async function qi(t, n) {
    const e = b(t), s = n.batch.batchId;
    try {
        const t = await Ns(e.zr, n);
        // The local store may or may not be able to apply the write result and
        // raise events immediately (depending on whether the watcher is caught
        // up), so we raise user callbacks first so that they consistently happen
        // before listen events.
                Wi(e, s, /*error=*/ null), ji(e, s), e.Vu.Ko(s, "acknowledged"), await Ji(e, t);
    } catch (t) {
        await ks(t);
    }
}

async function Bi(t, n, e) {
    const s = b(t);
    try {
        const t = await function(t, n) {
            const e = b(t);
            return e.persistence.runTransaction("Reject batch", "readwrite-primary", (t => {
                let s;
                return e.je.ju(t, n).next((n => (v(null !== n), s = n.keys(), e.je.qi(t, n)))).next((() => e.je.Bi(t))).next((() => e.bi.Je(t, s)));
            }));
        }
        /**
 * Returns the largest (latest) batch id in mutation queue that is pending
 * server response.
 *
 * Returns `BATCHID_UNKNOWN` if the queue is empty.
 */ (s.zr, n);
        // The local store may or may not be able to apply the write result and
        // raise events immediately (depending on whether the watcher is caught up),
        // so we raise user callbacks first so that they consistently happen before
        // listen events.
                Wi(s, n, e), ji(s, n), s.Vu.Ko(n, "rejected", e), await Ji(s, t);
    } catch (e) {
        await ks(e);
    }
}

/**
 * Registers a user callback that resolves when all pending mutations at the moment of calling
 * are acknowledged .
 */ async function Qi(t, n) {
    const e = b(t);
    Zs(e.Pu) || P("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");
    try {
        const t = await function(t) {
            const n = b(t);
            return n.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (t => n.je.Wu(t)));
        }(e.zr);
        if (-1 === t) 
        // Trigger the callback right away if there is no pending writes at the moment.
        return void n.resolve();
        const s = e.Fu.get(t) || [];
        s.push(n), e.Fu.set(t, s);
    } catch (t) {
        const e = ys(t, "Initialization of waitForPendingWrites() operation failed");
        n.reject(e);
    }
}

/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */ function ji(t, n) {
    (t.Fu.get(n) || []).forEach((t => {
        t.resolve();
    })), t.Fu.delete(n);
}

/** Reject all outstanding callbacks waiting for pending writes to complete. */ function Wi(t, n, e) {
    const s = b(t);
    let i = s.xu[s.currentUser.i()];
    // NOTE: Mutations restored from persistence won't have callbacks, so it's
    // okay for there to be no callback for this ID.
        if (i) {
        const t = i.get(n);
        t && (e ? t.reject(e) : t.resolve(), i = i.remove(n)), s.xu[s.currentUser.i()] = i;
    }
}

function Gi(t, n, e = null) {
    t.Vu.Yo(n);
    for (const s of t.bu.get(n)) t.vu.delete(s), e && t.gu.ku(s, e);
    if (t.bu.delete(n), t.$u) {
        t.Nu.Lo(n).forEach((n => {
            t.Nu.Mo(n) || 
            // We removed the last reference for this key
            Ki(t, n);
        }));
    }
}

function Ki(t, n) {
    // It's possible that the target already got removed because the query failed. In that case,
    // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
    const e = t.Su.get(n);
    null !== e && (zs(t.Pu, e), t.Su = t.Su.remove(n), t.Du.delete(e), Yi(t));
}

function zi(t, n, e) {
    for (const s of e) if (s instanceof Ci) t.Nu.Do(s.key, n), Hi(t, s); else if (s instanceof Si) {
        P("SyncEngine", "Document no longer in limbo: " + s.key), t.Nu.xo(s.key, n);
        t.Nu.Mo(s.key) || 
        // We removed the last reference for this key
        Ki(t, s.key);
    } else g();
}

function Hi(t, n) {
    const e = n.key;
    t.Su.get(e) || (P("SyncEngine", "New document in limbo: " + e), t.Cu.push(e), Yi(t));
}

/**
 * Starts listens for documents in limbo that are enqueued for resolution,
 * subject to a maximum number of concurrent resolutions.
 *
 * Without bounding the number of concurrent resolutions, the server can fail
 * with "resource exhausted" errors which can lead to pathological client
 * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
 */ function Yi(t) {
    for (;t.Cu.length > 0 && t.Su.size < t.pu; ) {
        const n = t.Cu.shift(), e = t.Ou.next();
        t.Du.set(e, new xi(n)), t.Su = t.Su.Tt(n, e), Ks(t.Pu, new rt(ke(De(n.path)), e, 2 /* LimboResolution */ , ms.Es));
    }
}

async function Ji(t, n, e) {
    const s = b(t), i = [], r = [], o = [];
    s.vu.q() || (s.vu.forEach(((t, u) => {
        o.push(s.qu(u, n, e).then((t => {
            if (t) {
                s.$u && s.Vu.Ho(u.targetId, t.fromCache ? "not-current" : "current"), i.push(t);
                const n = Es.ls(u.targetId, t);
                r.push(n);
            }
        })));
    })), await Promise.all(o), s.gu.pr(i), await async function(t, n) {
        const e = b(t);
        try {
            await e.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (t => ls.forEach(n, (n => ls.forEach(n.cs, (s => e.persistence.Hi.Do(t, n.targetId, s))).next((() => ls.forEach(n.hs, (s => e.persistence.Hi.xo(t, n.targetId, s)))))))));
        } catch (t) {
            if (!As(t)) throw t;
            // If `notifyLocalViewChanges` fails, we did not advance the sequence
            // number for the documents that were included in this transaction.
            // This might trigger them to be deleted earlier than they otherwise
            // would have, but it should not invalidate the integrity of the data.
            P("LocalStore", "Failed to update sequence numbers: " + t);
        }
        for (const t of n) {
            const n = t.targetId;
            if (!t.fromCache) {
                const t = e.Ii.get(n), s = t.ft, i = t.Et(s);
                // Advance the last limbo free snapshot version
                                e.Ii = e.Ii.Tt(n, i);
            }
        }
    }(s.zr, r));
}

async function Xi(t, n) {
    const e = b(t);
    if (!e.currentUser.isEqual(n)) {
        P("SyncEngine", "User change. New user:", n.i());
        const t = await Ds(e.zr, n);
        e.currentUser = n, 
        // Fails tasks waiting for pending writes requested by previous user.
        function(t, n) {
            t.Fu.forEach((t => {
                t.forEach((t => {
                    t.reject(new S(C.CANCELLED, n));
                }));
            })), t.Fu.clear();
        }(e, "'waitForPendingWrites' promise is rejected due to a user change."), 
        // TODO(b/114226417): Consider calling this only in the primary tab.
        e.Vu.nu(n, t.Li, t.$i), await Ji(e, t.Oi);
    }
}

function Zi(t, n) {
    const e = b(t), s = e.Du.get(n);
    if (s && s.Ru) return yt().add(s.key);
    {
        let t = yt();
        const s = e.bu.get(n);
        if (!s) return t;
        for (const n of s) {
            const s = e.vu.get(n);
            t = t.Kt(s.view.au);
        }
        return t;
    }
}

class tr {
    constructor(t, n) {
        this.We = t, this.Hi = n, 
        /**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */
        this.je = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.Gu = 1, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.Ku = new dt(gi.bo);
    }
    zu(t) {
        return ls.resolve(0 === this.je.length);
    }
    Bu(t, n, e, s) {
        const i = this.Gu;
        if (this.Gu++, this.je.length > 0) {
            this.je[this.je.length - 1];
        }
        const r = new cs(i, n, e, s);
        this.je.push(r);
        // Track references by document key and index collection parents.
        for (const n of s) this.Ku = this.Ku.add(new gi(n.key, i)), this.We.wi(t, n.key.path.k());
        return ls.resolve(r);
    }
    ju(t, n) {
        return ls.resolve(this.Hu(n));
    }
    Xi(t, n) {
        const e = n + 1, s = this.Yu(e), i = s < 0 ? 0 : s;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return ls.resolve(this.je.length > i ? this.je[i] : null);
    }
    Wu() {
        return ls.resolve(0 === this.je.length ? -1 : this.Gu - 1);
    }
    Fi(t) {
        return ls.resolve(this.je.slice());
    }
    Ke(t, n) {
        const e = new gi(n, 0), s = new gi(n, Number.POSITIVE_INFINITY), i = [];
        return this.Ku.jt([ e, s ], (t => {
            const n = this.Hu(t.Uo);
            i.push(n);
        })), ls.resolve(i);
    }
    Ze(t, n) {
        let e = new dt(k);
        return n.forEach((t => {
            const n = new gi(t, 0), s = new gi(t, Number.POSITIVE_INFINITY);
            this.Ku.jt([ n, s ], (t => {
                e = e.add(t.Uo);
            }));
        })), ls.resolve(this.Ju(e));
    }
    os(t, n) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        const e = n.path, s = e.length + 1;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
        let i = e;
        G.st(i) || (i = i.child(""));
        const r = new gi(new G(i), 0);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                let o = new dt(k);
        return this.Ku.Wt((t => {
            const n = t.key.path;
            return !!e.B(n) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            n.length === s && (o = o.add(t.Uo)), !0);
        }), r), ls.resolve(this.Ju(o));
    }
    Ju(t) {
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
        const n = [];
        return t.forEach((t => {
            const e = this.Hu(t);
            null !== e && n.push(e);
        })), n;
    }
    qi(t, n) {
        v(0 === this.Xu(n.batchId, "removed")), this.je.shift();
        let e = this.Ku;
        return ls.forEach(n.mutations, (s => {
            const i = new gi(s.key, n.batchId);
            return e = e.delete(i), this.Hi.Zu(t, s.key);
        })).next((() => {
            this.Ku = e;
        }));
    }
    tc(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }
    Mo(t, n) {
        const e = new gi(n, 0), s = this.Ku.Gt(e);
        return ls.resolve(n.isEqual(s && s.key));
    }
    Bi(t) {
        return this.je.length, ls.resolve();
    }
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId - The batchId to search for
     * @param action - A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */    Xu(t, n) {
        return this.Yu(t);
    }
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @returns The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */    Yu(t) {
        if (0 === this.je.length) 
        // As an index this is past the end of the queue
        return 0;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
                return t - this.je[0].batchId;
    }
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */    Hu(t) {
        const n = this.Yu(t);
        if (n < 0 || n >= this.je.length) return null;
        return this.je[n];
    }
}

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
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */
class nr {
    /**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */
    constructor(t, n) {
        this.We = t, this.nc = n, 
        /** Underlying cache of documents and their read times. */
        this.docs = new lt(G.O), 
        /** Size of all cached documents. */
        this.size = 0;
    }
    /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */    Ui(t, n, e) {
        const s = n.key, i = this.docs.get(s), r = i ? i.size : 0, o = this.nc(n);
        return this.docs = this.docs.Tt(s, {
            ec: n,
            size: o,
            readTime: e
        }), this.size += o - r, this.We.wi(t, s.path.k());
    }
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */    Yi(t) {
        const n = this.docs.get(t);
        n && (this.docs = this.docs.remove(t), this.size -= n.size);
    }
    He(t, n) {
        const e = this.docs.get(n);
        return ls.resolve(e ? e.ec : null);
    }
    getEntries(t, n) {
        let e = Tt();
        return n.forEach((t => {
            const n = this.docs.get(t);
            e = e.Tt(t, n ? n.ec : null);
        })), ls.resolve(e);
    }
    ts(t, n, e) {
        let s = It();
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
                const i = new G(n.path.child("")), r = this.docs.gt(i);
        for (;r.Nt(); ) {
            const {key: t, value: {ec: i, readTime: o}} = r.Dt();
            if (!n.path.B(t.path)) break;
            o.S(e) <= 0 || i instanceof ve && Qe(n, i) && (s = s.Tt(i.key, i));
        }
        return ls.resolve(s);
    }
    sc(t, n) {
        return ls.forEach(this.docs, (t => n(t)));
    }
    ki(t) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new er(this);
    }
    ic(t) {
        return ls.resolve(this.size);
    }
}

/**
 * Creates a new memory-only RemoteDocumentCache.
 *
 * @param indexManager - A class that manages collection group indices.
 * @param sizer - Used to assess the size of a document. For eager GC, this is
 * expected to just return 0 to avoid unnecessarily doing the work of
 * calculating the size.
 */
/**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */
class er extends class {
    constructor() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.Qu = new as((t => t.toString()), ((t, n) => t.isEqual(n))), this.rc = !1;
    }
    oc(t) {
        const n = this.Qu.get(t);
        return n ? n.readTime : q.min();
    }
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */    Ui(t, n) {
        this.uc(), this.Qu.set(t.key, {
            ec: t,
            readTime: n
        });
    }
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */    Yi(t, n = null) {
        this.uc(), this.Qu.set(t, {
            ec: null,
            readTime: n
        });
    }
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached Document or NoDocument entry, or null if we have
     *     nothing cached.
     */    He(t, n) {
        this.uc();
        const e = this.Qu.get(n);
        return void 0 !== e ? ls.resolve(e.ec) : this.cc(t, n);
    }
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys - The keys of the entries to look up.
     * @returns A map of cached `Document`s or `NoDocument`s, indexed by key. If
     *     an entry cannot be found, the corresponding key will be mapped to a
     *     null value.
     */    getEntries(t, n) {
        return this.hc(t, n);
    }
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */    apply(t) {
        return this.uc(), this.rc = !0, this.du(t);
    }
    /** Helper to assert this.changes is not null  */    uc() {}
} {
    constructor(t) {
        super(), this.ac = t;
    }
    du(t) {
        const n = [];
        return this.Qu.forEach(((e, s) => {
            s && s.ec ? n.push(this.ac.Ui(t, s.ec, this.oc(e))) : this.ac.Yi(e);
        })), ls.qe(n);
    }
    cc(t, n) {
        return this.ac.He(t, n);
    }
    hc(t, n) {
        return this.ac.getEntries(t, n);
    }
}

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
 */ class sr {
    constructor(t) {
        this.persistence = t, 
        /**
         * Maps a target to the data about that target
         */
        this.lc = new as((t => Z(t)), nt), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = q.min(), 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this._c = 0, 
        /**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */
        this.fc = new pi, this.targetCount = 0, this.dc = Cs.mi();
    }
    Qn(t, n) {
        return this.lc.forEach(((t, e) => n(e))), ls.resolve();
    }
    Qi(t) {
        return ls.resolve(this.lastRemoteSnapshotVersion);
    }
    wc(t) {
        return ls.resolve(this._c);
    }
    Mu(t) {
        return this.highestTargetId = this.dc.next(), ls.resolve(this.highestTargetId);
    }
    Ji(t, n, e) {
        return e && (this.lastRemoteSnapshotVersion = e), n > this._c && (this._c = n), 
        ls.resolve();
    }
    Ec(t) {
        this.lc.set(t.target, t);
        const n = t.targetId;
        n > this.highestTargetId && (this.dc = new Cs(n), this.highestTargetId = n), t.sequenceNumber > this._c && (this._c = t.sequenceNumber);
    }
    Uu(t, n) {
        return this.Ec(n), this.targetCount += 1, ls.resolve();
    }
    Ki(t, n) {
        return this.Ec(n), ls.resolve();
    }
    mc(t, n) {
        return this.lc.delete(n.target), this.fc.Lo(n.targetId), this.targetCount -= 1, 
        ls.resolve();
    }
    Tc(t, n, e) {
        let s = 0;
        const i = [];
        return this.lc.forEach(((r, o) => {
            o.sequenceNumber <= n && null === e.get(o.targetId) && (this.lc.delete(r), i.push(this.Ac(t, o.targetId)), 
            s++);
        })), ls.qe(i).next((() => s));
    }
    Ic(t) {
        return ls.resolve(this.targetCount);
    }
    Zi(t, n) {
        const e = this.lc.get(n) || null;
        return ls.resolve(e);
    }
    Wi(t, n, e) {
        return this.fc.No(n, e), ls.resolve();
    }
    ji(t, n, e) {
        this.fc.Oo(n, e);
        const s = this.persistence.Hi, i = [];
        return s && n.forEach((n => {
            i.push(s.Zu(t, n));
        })), ls.qe(i);
    }
    Ac(t, n) {
        return this.fc.Lo(n), ls.resolve();
    }
    tr(t, n) {
        const e = this.fc.ko(n);
        return ls.resolve(e);
    }
    Mo(t, n) {
        return ls.resolve(this.fc.Mo(n));
    }
}

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
 */ class ir {
    constructor(t) {
        this.serializer = t, this.Rc = new Map, this.Pc = new Map;
    }
    yc(t, n) {
        return ls.resolve(this.Rc.get(n));
    }
    Vc(t, n) {
        /** Encodes a BundleMetadata proto object to a Bundle model object. */
        var e;
        return this.Rc.set(n.id, {
            id: (e = n).id,
            version: e.version,
            createTime: mn(e.createTime)
        }), ls.resolve();
    }
    gc(t, n) {
        return ls.resolve(this.Pc.get(n));
    }
    vc(t, n) {
        var e;
        return this.Pc.set(n.name, {
            name: (e = n).name,
            query: gs(e.bundledQuery),
            readTime: mn(e.readTime)
        }), ls.resolve();
    }
}

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
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */
class rr {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    constructor(t, n) {
        this.bc = {}, this.Cc = new ms(0), this.Sc = !1, this.Sc = !0, this.Hi = t(this), 
        this.gi = new sr(this);
        this.We = new vs, this.Qe = function(t, n) {
            return new nr(t, n);
        }(this.We, (t => this.Hi.Dc(t))), this.serializer = new ps(n), this.Si = new ir(this.serializer);
    }
    start() {
        return Promise.resolve();
    }
    su() {
        // No durable state to ensure is closed on shutdown.
        return this.Sc = !1, Promise.resolve();
    }
    get Nc() {
        return this.Sc;
    }
    xc() {
        // No op.
    }
    Fc() {
        // No op.
    }
    Ci() {
        return this.We;
    }
    yi(t) {
        let n = this.bc[t.i()];
        return n || (n = new tr(this.We, this.Hi), this.bc[t.i()] = n), n;
    }
    vi() {
        return this.gi;
    }
    pi() {
        return this.Qe;
    }
    Di() {
        return this.Si;
    }
    runTransaction(t, n, e) {
        P("MemoryPersistence", "Starting transaction:", t);
        const s = new or(this.Cc.next());
        return this.Hi.Oc(), e(s).next((t => this.Hi.Lc(s).next((() => t)))).Me().then((t => (s.$c(), 
        t)));
    }
    kc(t, n) {
        return ls.Be(Object.values(this.bc).map((e => () => e.Mo(t, n))));
    }
}

/**
 * Memory persistence is not actually transactional, but future implementations
 * may have transaction-scoped state.
 */ class or extends 
/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */
class {
    constructor() {
        this.Mc = [];
    }
    Uc(t) {
        this.Mc.push(t);
    }
    $c() {
        this.Mc.forEach((t => t()));
    }
} {
    constructor(t) {
        super(), this.Gi = t;
    }
}

class ur {
    constructor(t) {
        this.persistence = t, 
        /** Tracks all documents that are active in Query views. */
        this.qc = new pi, 
        /** The list of documents that are potentially GCed after each transaction. */
        this.Bc = null;
    }
    static Qc(t) {
        return new ur(t);
    }
    get jc() {
        if (this.Bc) return this.Bc;
        throw g();
    }
    Do(t, n, e) {
        return this.qc.Do(e, n), this.jc.delete(e.toString()), ls.resolve();
    }
    xo(t, n, e) {
        return this.qc.xo(e, n), this.jc.add(e.toString()), ls.resolve();
    }
    Zu(t, n) {
        return this.jc.add(n.toString()), ls.resolve();
    }
    removeTarget(t, n) {
        this.qc.Lo(n.targetId).forEach((t => this.jc.add(t.toString())));
        const e = this.persistence.vi();
        return e.tr(t, n.targetId).next((t => {
            t.forEach((t => this.jc.add(t.toString())));
        })).next((() => e.mc(t, n)));
    }
    Oc() {
        this.Bc = new Set;
    }
    Lc(t) {
        // Remove newly orphaned documents.
        const n = this.persistence.pi().ki();
        return ls.forEach(this.jc, (e => {
            const s = G.tt(e);
            return this.Wc(t, s).next((t => {
                t || n.Yi(s);
            }));
        })).next((() => (this.Bc = null, n.apply(t))));
    }
    zi(t, n) {
        return this.Wc(t, n).next((t => {
            t ? this.jc.delete(n.toString()) : this.jc.add(n.toString());
        }));
    }
    Dc(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }
    Wc(t, n) {
        return ls.Be([ () => ls.resolve(this.qc.Mo(n)), () => this.persistence.vi().Mo(t, n), () => this.persistence.kc(t, n) ]);
    }
}

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
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */ class cr {
    constructor(t) {
        this.Gc = t.Gc, this.Kc = t.Kc;
    }
    yr(t) {
        this.zc = t;
    }
    Tr(t) {
        this.Hc = t;
    }
    onMessage(t) {
        this.Yc = t;
    }
    close() {
        this.Kc();
    }
    send(t) {
        this.Gc(t);
    }
    Jc() {
        this.zc();
    }
    Xc(t) {
        this.Hc(t);
    }
    Zc(t) {
        this.Yc(t);
    }
}

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
 */ const hr = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery"
};

/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 */ class ar extends 
/**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */
class {
    constructor(t) {
        this.th = t, this.rt = t.rt;
        const n = t.ssl ? "https" : "http";
        this.nh = n + "://" + t.host, this.eh = "projects/" + this.rt.projectId + "/databases/" + this.rt.database + "/documents";
    }
    $r(t, n, e, s) {
        const i = this.sh(t, n);
        P("RestConnection", "Sending: ", i, e);
        const r = {};
        return this.ih(r, s), this.rh(t, i, r, e).then((t => (P("RestConnection", "Received: ", t), 
        t)), (n => {
            throw V("RestConnection", t + " failed with error: ", n, "url: ", i, "request:", e), 
            n;
        }));
    }
    kr(t, n, e, s) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.$r(t, n, e, s);
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */    ih(t, n) {
        if (t["X-Goog-Api-Client"] = "gl-js/ fire/8.1.2", 
        // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid triggering preflight requests.
        t["Content-Type"] = "text/plain", n) for (const e in n.h) n.h.hasOwnProperty(e) && (t[e] = n.h[e]);
    }
    sh(t, n) {
        const e = hr[t];
        return `${this.nh}/v1/${n}:${e}`;
    }
}
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
 */ {
    constructor(t) {
        super(t), this.forceLongPolling = t.forceLongPolling, this.ot = t.ot;
    }
    rh(t, n, e, s) {
        return new Promise(((i, r) => {
            const o = new a;
            o.listenOnce(l.COMPLETE, (() => {
                try {
                    switch (o.getLastErrorCode()) {
                      case _.NO_ERROR:
                        const n = o.getResponseJson();
                        P("Connection", "XHR received:", JSON.stringify(n)), i(n);
                        break;

                      case _.TIMEOUT:
                        P("Connection", 'RPC "' + t + '" timed out'), r(new S(C.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case _.HTTP_ERROR:
                        const e = o.getStatus();
                        if (P("Connection", 'RPC "' + t + '" failed with status:', e, "response text:", o.getResponseText()), 
                        e > 0) {
                            const t = o.getResponseJson().error;
                            if (t && t.status && t.message) {
                                const n = function(t) {
                                    const n = t.toLowerCase().replace(/_/g, "-");
                                    return Object.values(C).indexOf(n) >= 0 ? n : C.UNKNOWN;
                                }(t.status);
                                r(new S(n, t.message));
                            } else r(new S(C.UNKNOWN, "Server responded with status " + o.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        r(new S(C.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        g();
                    }
                } finally {
                    P("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            const u = JSON.stringify(s);
            o.send(n, "POST", u, e, 15);
        }));
    }
    Vr(t, n) {
        const e = [ this.nh, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], s = f(), a = d(), l = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: `projects/${this.rt.projectId}/databases/${this.rt.database}`
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling,
            detectBufferingProxy: this.ot
        };
        this.ih(l.initMessageHeaders, n), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        i() || r() || o() || u() || c() || h() || (l.httpHeadersOverwriteParam = "$httpHeaders");
        const _ = e.join("");
        P("Connection", "Creating WebChannel: " + _, l);
        const T = s.createWebChannel(_, l);
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                let A = !1, I = !1;
        // A flag to determine whether the stream was closed (by us or through an
        // error/close event) to avoid delivering multiple close events or sending
        // on a closed stream
                const R = new cr({
            Gc: t => {
                I ? P("Connection", "Not sending because WebChannel is closed:", t) : (A || (P("Connection", "Opening WebChannel transport."), 
                T.open(), A = !0), P("Connection", "WebChannel sending:", t), T.send(t));
            },
            Kc: () => T.close()
        }), y = (t, n, e) => {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            t.listen(n, (t => {
                try {
                    e(t);
                } catch (t) {
                    setTimeout((() => {
                        throw t;
                    }), 0);
                }
            }));
        };
        // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
                return y(T, w.EventType.OPEN, (() => {
            I || P("Connection", "WebChannel transport opened.");
        })), y(T, w.EventType.CLOSE, (() => {
            I || (I = !0, P("Connection", "WebChannel transport closed"), R.Xc());
        })), y(T, w.EventType.ERROR, (t => {
            I || (I = !0, V("Connection", "WebChannel transport errored:", t), R.Xc(new S(C.UNAVAILABLE, "The operation could not be completed")));
        })), y(T, w.EventType.MESSAGE, (t => {
            var n;
            if (!I) {
                const e = t.data[0];
                v(!!e);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                const s = e, i = s.error || (null === (n = s[0]) || void 0 === n ? void 0 : n.error);
                if (i) {
                    P("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    const t = i.status;
                    let n = function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const n = ut[t];
                        if (void 0 !== n) return at(n);
                    }(t), e = i.message;
                    void 0 === n && (n = C.INTERNAL, e = "Unknown error status: " + t + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    I = !0, R.Xc(new S(n, e)), T.close();
                } else P("Connection", "WebChannel received:", e), R.Zc(e);
            }
        })), y(a, E.STAT_EVENT, (t => {
            t.stat === m.PROXY ? P("Connection", "Detected buffering proxy") : t.stat === m.NOPROXY && P("Connection", "Detected no buffering proxy");
        })), setTimeout((() => {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            R.Jc();
        }), 0), R;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
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
// References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals */
/**
 * Browser implementation of ConnectivityMonitor.
 */
class lr {
    constructor() {
        this.oh = () => this.uh(), this.hh = () => this.ah(), this.lh = [], this._h();
    }
    so(t) {
        this.lh.push(t);
    }
    su() {
        window.removeEventListener("online", this.oh), window.removeEventListener("offline", this.hh);
    }
    _h() {
        window.addEventListener("online", this.oh), window.addEventListener("offline", this.hh);
    }
    uh() {
        P("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (const t of this.lh) t(0 /* AVAILABLE */);
    }
    ah() {
        P("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (const t of this.lh) t(1 /* UNAVAILABLE */);
    }
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    static fh() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
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
 */ class _r {
    so(t) {
        // No-op.
    }
    su() {
        // No-op.
    }
}

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
/** Initializes the WebChannelConnection for the browser. */
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
/**
 * Provides all components needed for Firestore with in-memory persistence.
 * Uses EagerGC garbage collection.
 */
class fr {
    constructor() {
        this.synchronizeTabs = !1;
    }
    async initialize(t) {
        this.serializer = fs(t.th.rt), this.Vu = this.dh(t), this.persistence = this.wh(t), 
        await this.persistence.start(), this.Eh = this.mh(t), this.zr = this.Th(t);
    }
    mh(t) {
        return null;
    }
    Th(t) {
        /** Manages our in-memory or durable persistence. */
        return n = this.persistence, e = new Vs, s = t.Ah, i = this.serializer, new Ss(n, e, s, i);
        var n, e, s, i;
    }
    wh(t) {
        return new rr(ur.Qc, this.serializer);
    }
    dh(t) {
        return new bi;
    }
    async terminate() {
        this.Eh && this.Eh.stop(), await this.Vu.su(), await this.persistence.su();
    }
}

/**
 * Initializes and wires the components that are needed to interface with the
 * network.
 */ class dr {
    async initialize(t, n) {
        this.zr || (this.zr = t.zr, this.Vu = t.Vu, this.Hr = this.Ih(n), this.Pu = this.Rh(n), 
        this.yu = this.Ph(n), this.yh = this.Vh(n, 
        /* startAsPrimary=*/ !t.synchronizeTabs), this.Vu.Mr = t => Mi(this.yh, t, 1 /* SharedClientState */), 
        this.Pu.Yr.ph = Xi.bind(null, this.yh), await 
        /**
 * Toggles the network state when the client gains or loses its primary lease.
 */
        async function(t, n) {
            const e = b(t);
            n ? (e.Zr.delete(2 /* IsSecondary */), await Ws(e)) : n || (e.Zr.add(2 /* IsSecondary */), 
            await Gs(e), e.io.set("Unknown" /* Unknown */));
        }(this.Pu, this.yh.$u));
    }
    Ph(t) {
        return new Ti;
    }
    Ih(t) {
        const n = fs(t.th.rt), e = (s = t.th, new ar(s));
        var s;
        /** Return the Platform-specific connectivity monitor. */        return function(t, n, e) {
            return new Bs(t, n, e);
        }(t.credentials, e, n);
    }
    Rh(t) {
        return n = this.zr, e = this.Hr, s = t.Ns, i = t => Mi(this.yh, t, 0 /* RemoteStore */), 
        r = lr.fh() ? new lr : new _r, new js(n, e, s, i, r);
        var n, e, s, i, r;
        /** Re-enables the network. Idempotent. */    }
    Vh(t, n) {
        return function(t, n, e, 
        // PORTING NOTE: Manages state synchronization in multi-tab environments.
        s, i, r, o) {
            const u = new Fi(t, n, e, s, i, r);
            return o && (u.Lu = !0), u;
        }(this.zr, this.Pu, this.yu, this.Vu, t.Ah, t.pu, n);
    }
    terminate() {
        return async function(t) {
            const n = b(t);
            P("RemoteStore", "RemoteStore shutting down."), n.Zr.add(5 /* Shutdown */), await Gs(n), 
            n.eo.su(), 
            // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
            // triggering spurious listener events with cached data, etc.
            n.io.set("Unknown" /* Unknown */);
        }(this.Pu);
    }
}

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
/*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */ class wr {
    constructor(t) {
        this.observer = t, 
        /**
         * When set to true, will not raise future events. Necessary to deal with
         * async detachment of listener.
         */
        this.muted = !1;
    }
    next(t) {
        this.observer.next && this.gh(this.observer.next, t);
    }
    error(t) {
        this.observer.error ? this.gh(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
    }
    bh() {
        this.muted = !0;
    }
    gh(t, n) {
        this.muted || setTimeout((() => {
            this.muted || t(n);
        }), 0);
    }
}

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
 */ function Er(t, n, e) {
    if (!e) throw new S(C.INVALID_ARGUMENT, `Function ${t}() cannot be called with an empty ${n}.`);
}

function mr(t, n) {
    if (void 0 === n) return {
        merge: !1
    };
    if (void 0 !== n.mergeFields && void 0 !== n.merge) throw new S(C.INVALID_ARGUMENT, `Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);
    return n;
}

/**
 * Validates that two boolean options are not set at the same time.
 */ function Tr(t, n, e, s) {
    if (!0 === n && !0 === s) throw new S(C.INVALID_ARGUMENT, `${t} and ${e} cannot be used together.`);
}

/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */ function Ar(t) {
    if (!G.st(t)) throw new S(C.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`);
}

/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */ function Ir(t) {
    if (G.st(t)) throw new S(C.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`);
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */
/** Returns a string describing the type / value of the provided input. */
function Rr(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        {
            const n = 
            /** Hacky method to try to get the constructor name for an object. */
            function(t) {
                if (t.constructor) {
                    const n = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                    if (n && n.length > 1) return n[1];
                }
                return null;
            }
            /**
 * Casts `obj` to `T`, optionally unwrapping Compat types to expose the
 * underlying instance. Throws if  `obj` is not an instance of `T`.
 *
 * This cast is used in the Lite and Full SDK to verify instance types for
 * arguments passed to the public API.
 */ (t);
            return n ? `a custom ${n} object` : "an object";
        }
    }
    return "function" == typeof t ? "a function" : g();
}

function Pr(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
n) {
    if ("_delegate" in t && (
    // Unwrap Compat types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t = t.Ch), !(t instanceof n)) {
        if (n.name === t.constructor.name) throw new S(C.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
        {
            const e = Rr(t);
            throw new S(C.INVALID_ARGUMENT, `Expected type '${n.name}', but it was: ${e}`);
        }
    }
    return t;
}

function yr(t, n) {
    if (n <= 0) throw new S(C.INVALID_ARGUMENT, `Function ${t}() requires a positive number, but it was: ${n}.`);
}

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
/**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ class Vr {
    /**
     * @param _methodName - The public API endpoint that returns this class.
     */
    constructor(t) {
        this._methodName = t;
    }
}

/**
 * Returns a sentinel for use with {@link updateDoc} or
 * {@link setDoc} with `{merge: true}` to mark a field for deletion.
 */
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
class pr extends Vr {
    Sh(t) {
        if (2 /* MergeSet */ !== t.Dh) throw 1 /* Update */ === t.Dh ? t.Nh(this._methodName + "() can only appear at the top level of your update data") : t.Nh(this._methodName + "() cannot be used with set() unless you pass {merge:true}");
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
        return t.ee.push(t.path), null;
    }
    isEqual(t) {
        return t instanceof pr;
    }
}

/**
 * Creates a child context for parsing SerializableFieldValues.
 *
 * This is different than calling `ParseContext.contextWith` because it keeps
 * the fieldTransforms and fieldMask separate.
 *
 * The created context has its `dataSource` set to `UserDataSource.Argument`.
 * Although these values are used with writes, any elements in these FieldValues
 * are not considered writes since they cannot contain any FieldValue sentinels,
 * etc.
 *
 * @param fieldValue - The sentinel FieldValue for which to create a child
 *     context.
 * @param context - The parent context.
 * @param arrayElement - Whether or not the FieldValue has an array.
 */ function gr(t, n, e) {
    return new tu({
        Dh: 3 /* Argument */ ,
        xh: n.settings.xh,
        methodName: t._methodName,
        Fh: e
    }, n.rt, n.serializer, n.ignoreUndefinedProperties);
}

class vr extends Vr {
    Sh(t) {
        return new ie(t.path, new Hn);
    }
    isEqual(t) {
        return t instanceof vr;
    }
}

class br extends Vr {
    constructor(t, n) {
        super(t), this.Oh = n;
    }
    Sh(t) {
        const n = gr(this, t, 
        /*array=*/ !0), e = this.Oh.map((t => ou(t, n))), s = new Yn(e);
        return new ie(t.path, s);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

class Cr extends Vr {
    constructor(t, n) {
        super(t), this.Oh = n;
    }
    Sh(t) {
        const n = gr(this, t, 
        /*array=*/ !0), e = this.Oh.map((t => ou(t, n))), s = new Xn(e);
        return new ie(t.path, s);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

class Sr extends Vr {
    constructor(t, n) {
        super(t), this.Lh = n;
    }
    Sh(t) {
        const n = new te(t.serializer, fn(t.serializer, this.Lh));
        return new ie(t.path, n);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

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
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */ class Dr {
    /**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */
    constructor(t, n) {
        if (!isFinite(t) || t < -90 || t > 90) throw new S(C.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(n) || n < -180 || n > 180) throw new S(C.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + n);
        this.$h = t, this.kh = n;
    }
    /**
     * The latitude of this `GeoPoint` instance.
     */    get latitude() {
        return this.$h;
    }
    /**
     * The longitude of this `GeoPoint` instance.
     */    get longitude() {
        return this.kh;
    }
    /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */    isEqual(t) {
        return this.$h === t.$h && this.kh === t.kh;
    }
    toJSON() {
        return {
            latitude: this.$h,
            longitude: this.kh
        };
    }
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */    v(t) {
        return k(this.$h, t.$h) || k(this.kh, t.kh);
    }
}

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
/**
 * An immutable object representing an array of bytes.
 */ class Nr {
    /** @hideconstructor */
    constructor(t) {
        this.Mh = t;
    }
    /**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */    static fromBase64String(t) {
        try {
            return new Nr(it.fromBase64String(t));
        } catch (t) {
            throw new S(C.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t);
        }
    }
    /**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */    static fromUint8Array(t) {
        return new Nr(it.fromUint8Array(t));
    }
    /**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */    toBase64() {
        return this.Mh.toBase64();
    }
    /**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */    toUint8Array() {
        return this.Mh.toUint8Array();
    }
    /**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */    toString() {
        return "Bytes(base64: " + this.toBase64() + ")";
    }
    /**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */    isEqual(t) {
        return this.Mh.isEqual(t.Mh);
    }
}

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
/**
 * A class implemented by all API types of the legacy Firestore API which
 * contains a reference to the API type in the firestore-exp API. All internal
 * code unwraps these references, which allows us to only use firestore-exp
 * types in the SDK.
 */ class xr {
    constructor(t) {
        this.Ch = t;
    }
}

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
 */ const Fr = new Map;

// settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied firestore.Settings object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */
class Or {
    constructor(t) {
        var n;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new S(C.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = true;
        } else this.host = t.host, this.ssl = null === (n = t.ssl) || void 0 === n || n;
        if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, 
        void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040; else {
            if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new S(C.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, 
        Tr("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling);
    }
    isEqual(t) {
        return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
    }
}

/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */ class Lr {
    /** @hideconstructor */
    constructor(t, n) {
        this.Uh = "(lite)", this.qh = new Or({}), this.Bh = !1, t instanceof z ? (this.Qh = t, 
        this.jh = new N) : (this.Wh = t, this.Qh = function(t) {
            if (!Object.prototype.hasOwnProperty.apply(t.options, [ "projectId" ])) throw new S(C.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
            return new z(t.options.projectId);
        }(t), this.jh = new x(n));
    }
    /**
     * The {@link FirebaseApp} associated with this `Firestore` service
     * instance.
     */    get app() {
        if (!this.Wh) throw new S(C.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this.Wh;
    }
    get Gh() {
        return this.Bh;
    }
    get Kh() {
        return void 0 !== this.zh;
    }
    Hh(t) {
        if (this.Bh) throw new S(C.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this.qh = new Or(t), void 0 !== t.credentials && (this.jh = function(t) {
            if (!t) return new N;
            switch (t.type) {
              case "gapi":
                const n = t.client;
                // Make sure this really is a Gapi client.
                                return v(!("object" != typeof n || null === n || !n.auth || !n.auth.getAuthHeaderValueForFirstParty)), 
                new O(n, t.sessionIndex || "0");

              case "provider":
                return t.client;

              default:
                throw new S(C.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(t.credentials));
    }
    Yh() {
        return this.qh;
    }
    Jh() {
        return this.Bh = !0, this.qh;
    }
    _delete() {
        return this.zh || (this.zh = this.Xh()), this.zh;
    }
    /**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */    Xh() {
        /**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */
        return function(t) {
            const n = Fr.get(t);
            n && (P("ComponentProvider", "Removing Datastore"), Fr.delete(t), n.terminate());
        }
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
        // settings() defaults:
        (this), Promise.resolve();
    }
}

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
/** Helper function to assert Uint8Array is available at runtime. */
function $r() {
    if ("undefined" == typeof Uint8Array) throw new S(C.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Immutable class holding a blob (binary data) */ class kr extends xr {
    static fromBase64String(t) {
        return new kr(Nr.fromBase64String(t));
    }
    static fromUint8Array(t) {
        return $r(), new kr(Nr.fromUint8Array(t));
    }
    toBase64() {
        return this.Ch.toBase64();
    }
    toUint8Array() {
        return $r(), this.Ch.toUint8Array();
    }
    isEqual(t) {
        return this.Ch.isEqual(t.Ch);
    }
    toString() {
        return "Blob(base64: " + this.toBase64() + ")";
    }
}

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
/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ class Mr {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...t) {
        for (let n = 0; n < t.length; ++n) if (0 === t[n].length) throw new S(C.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this.Zh = new W(t);
    }
    /**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */    isEqual(t) {
        return this.Zh.isEqual(t.Zh);
    }
}

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
/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class Ur extends go {
    /** @hideconstructor protected */
    constructor(t, n, e, s, i, r) {
        super(t, n, e, s, r), this.ta = t, this.na = t, this.metadata = i;
    }
    /**
     * Property of the `DocumentSnapshot` that signals whether or not the data
     * exists. True if the document exists.
     */    exists() {
        return super.exists();
    }
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * By default, `FieldValue.serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document or `undefined` if
     * the document doesn't exist.
     */    data(t = {}) {
        if (this.ea) {
            if (this.sa) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                const n = new qr(this.ta, this.ia, this.ra, this.ea, this.metadata, 
                /* converter= */ null);
                return this.sa.fromFirestore(n, t);
            }
            return this.ia.oa(this.ea.Ee(), t.serverTimestamps);
        }
    }
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * By default, a `FieldValue.serverTimestamp()` that has not yet been set to
     * its final value will be returned as `null`. You can override this by
     * passing an options object.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @param options - An options object to configure how the field is retrieved
     * from the snapshot (for example the desired behavior for server timestamps
     * that have not yet been set to their final value).
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(t, n = {}) {
        if (this.ea) {
            const e = this.ea.data().field(bo("DocumentSnapshot.get", t));
            if (null !== e) return this.ia.oa(e, n.serverTimestamps);
        }
    }
}

/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */ class qr extends Ur {
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * By default, `FieldValue.serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @override
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document.
     */
    data(t = {}) {
        return super.data(t);
    }
}

/**
 * A `QuerySnapshot` contains zero or more `DocumentSnapshot` objects
 * representing the results of a query. The documents can be accessed as an
 * array via the `docs` property or enumerated using the `forEach` method. The
 * number of documents can be determined via the `empty` and `size`
 * properties.
 */ class Br {
    /** @hideconstructor */
    constructor(t, n, e, s) {
        this.ta = t, this.ia = n, this.ua = s, this.metadata = new wo(s.hasPendingWrites, s.fromCache), 
        this.query = e;
    }
    /** An array of all the documents in the `QuerySnapshot`. */    get docs() {
        const t = [];
        return this.forEach((n => t.push(n))), t;
    }
    /** The number of documents in the `QuerySnapshot`. */    get size() {
        return this.ua.docs.size;
    }
    /** True if there are no documents in the `QuerySnapshot`. */    get empty() {
        return 0 === this.size;
    }
    /**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */    forEach(t, n) {
        this.ua.docs.forEach((e => {
            t.call(n, new qr(this.ta, this.ia, e.key, e, new wo(this.ua.nn.has(e.key), this.ua.fromCache), this.query.sa));
        }));
    }
    /**
     * Returns an array of the documents changes since the last snapshot. If this
     * is the first snapshot, all documents will be in the list as 'added'
     * changes.
     *
     * @param options - `SnapshotListenOptions` that control whether metadata-only
     * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
     * snapshot events.
     */    docChanges(t = {}) {
        const n = !!t.includeMetadataChanges;
        if (n && this.ua.sn) throw new S(C.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.ca && this.ha === n || (this.ca = 
        /** Calculates the array of DocumentChanges for a given ViewSnapshot. */
        function(t, n) {
            if (t.ua.tn.q()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                let n, e = 0;
                return t.ua.docChanges.map((s => {
                    const i = new qr(t.ta, t.ia, s.doc.key, s.doc, new wo(t.ua.nn.has(s.doc.key), t.ua.fromCache), t.query.sa);
                    return n = s.doc, {
                        type: "added",
                        doc: i,
                        oldIndex: -1,
                        newIndex: e++
                    };
                }));
            }
            {
                // A DocumentSet that is updated incrementally as changes are applied to use
                // to lookup the index of a document.
                let e = t.ua.tn;
                return t.ua.docChanges.filter((t => n || 3 /* Metadata */ !== t.type)).map((n => {
                    const s = new qr(t.ta, t.ia, n.doc.key, n.doc, new wo(t.ua.nn.has(n.doc.key), t.ua.fromCache), t.query.sa);
                    let i = -1, r = -1;
                    return 0 /* Added */ !== n.type && (i = e.indexOf(n.doc.key), e = e.delete(n.doc.key)), 
                    1 /* Removed */ !== n.type && (e = e.add(n.doc), r = e.indexOf(n.doc.key)), {
                        type: Qr(n.type),
                        doc: s,
                        oldIndex: i,
                        newIndex: r
                    };
                }));
            }
        }(this, n), this.ha = n), this.ca;
    }
}

function Qr(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return g();
    }
}

// TODO(firestoreexp): Add tests for snapshotEqual with different snapshot
// metadata
/**
 * Returns true if the provided snapshots are equal.
 *
 * @param left - A snapshot to compare.
 * @param right - A snapshot to compare.
 * @returns true if the snapshots are equal.
 */ function jr(t, n) {
    return t instanceof Ur && n instanceof Ur ? t.ta === n.ta && t.ra.isEqual(n.ra) && (null === t.ea ? null === n.ea : t.ea.isEqual(n.ea)) && t.sa === n.sa : t instanceof Br && n instanceof Br && (t.ta === n.ta && zo(t.query, n.query) && t.metadata.isEqual(n.metadata) && t.ua.isEqual(n.ua));
}

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
/**
 * Reads the document referred to by this `DocumentReference`.
 *
 * Note: `getDoc()` attempts to provide up-to-date data when possible by waiting
 * for data from the server, but it may return cached data or fail if you are
 * offline and the server cannot be reached. To specify this behavior, invoke
 * {@link getDocFromCache} or {@link getDocFromServer}.
 *
 * @param reference - The reference of the document to fetch.
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ class Wr extends Vo {
    constructor(t) {
        super(), this.firestore = t;
    }
    aa(t) {
        return new Nr(t);
    }
    la(t) {
        const n = this._a(t, this.firestore.Qh);
        return new Co(this.firestore, /* converter= */ null, n);
    }
}

/**
 * Reads the document referred to by this `DocumentReference` from cache.
 * Returns an error if the document is not currently cached.
 *
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ function Gr(t) {
    t = Pr(t, Co);
    const n = Pr(t.firestore, bu), e = oo(n), s = new Wr(n);
    return function(t, n) {
        const e = new _s;
        return t.Ns.Ms((async () => async function(t, n, e) {
            try {
                const s = await function(t, n) {
                    const e = b(t);
                    return e.persistence.runTransaction("read document", "readonly", (t => e.bi.Ge(t, n)));
                }(t, n);
                s instanceof ve ? e.resolve(s) : s instanceof be ? e.resolve(null) : e.reject(new S(C.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"));
            } catch (t) {
                const s = ys(t, `Failed to get document '${n} from cache`);
                e.reject(s);
            }
        }
        /**
 * Retrieves a latency-compensated document from the backend via a
 * SnapshotListener.
 */ (await Pu(t), n, e))), e.promise;
    }(e, t.ra).then((e => new Ur(n, s, t.ra, e, new wo(e instanceof ve && e.he, 
    /* fromCache= */ !0), t.sa)));
}

/**
 * Reads the document referred to by this `DocumentReference` from the server.
 * Returns an error if the network is not available.
 *
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */
/**
 * Executes the query and returns the results as a `QuerySnapshot` from cache.
 * Returns an error if the document is not currently cached.
 *
 * @returns A Promise that will be resolved with the results of the query.
 */
function Kr(t) {
    t = Pr(t, So);
    const n = Pr(t.firestore, bu), e = oo(n), s = new Wr(n);
    return function(t, n) {
        const e = new _s;
        return t.Ns.Ms((async () => async function(t, n, e) {
            try {
                const s = await $s(t, n, 
                /* usePreviousResults= */ !0), i = new Di(n, s.nr), r = i.lu(s.documents), o = i.du(r, 
                /* updateLimboDocuments= */ !1);
                e.resolve(o.snapshot);
            } catch (t) {
                const s = ys(t, `Failed to execute query '${n} against cache`);
                e.reject(s);
            }
        }
        /**
 * Retrieves a latency-compensated query snapshot from the backend via a
 * SnapshotListener.
 */ (await Pu(t), n, e))), e.promise;
    }(e, t.fa).then((e => new Br(n, s, t, e)));
}

/**
 * Executes the query and returns the results as a `QuerySnapshot` from the
 * server. Returns an error if the network is not available.
 *
 * @returns A Promise that will be resolved with the results of the query.
 */ function zr(t, n, e, ...s) {
    t = Pr(t, Co);
    const i = Pr(t.firestore, bu), r = Ho(i);
    let o;
    // For Compat types, we have to "extract" the underlying types before
    // performing validation.
    n instanceof xr && (n = n.Ch), o = "string" == typeof n || n instanceof Mr ? iu(r, "updateDoc", t.ra, n, e, s) : su(r, "updateDoc", t.ra, n);
    return Jr(i, o.da(t.ra, ue.exists(!0)));
}

/**
 * Deletes the document referred to by the specified `DocumentReference`.
 *
 * @param reference - A reference to the document to delete.
 * @returns A Promise resolved once the document has been successfully
 * deleted from the backend (note that it won't resolve while you're offline).
 */ function Hr(t, ...n) {
    var e, s, i;
    t instanceof xr && (t = t.Ch);
    let r = {
        includeMetadataChanges: !1
    }, o = 0;
    "object" != typeof n[o] || ds(n[o]) || (r = n[o], o++);
    const u = {
        includeMetadataChanges: r.includeMetadataChanges
    };
    if (ds(n[o])) {
        const t = n[o];
        n[o] = null === (e = t.next) || void 0 === e ? void 0 : e.bind(t), n[o + 1] = null === (s = t.error) || void 0 === s ? void 0 : s.bind(t), 
        n[o + 2] = null === (i = t.complete) || void 0 === i ? void 0 : i.bind(t);
    }
    let c, h, a;
    if (t instanceof Co) h = Pr(t.firestore, bu), a = De(t.ra.path), c = {
        next: e => {
            n[o] && n[o](Xr(h, t, e));
        },
        error: n[o + 1],
        complete: n[o + 2]
    }; else {
        const e = Pr(t, So);
        h = Pr(e.firestore, bu), a = e.fa;
        const s = new Wr(h);
        c = {
            next: t => {
                n[o] && n[o](new Br(h, s, e, t));
            },
            error: n[o + 1],
            complete: n[o + 2]
        }, Bo(t.fa);
    }
    return function(t, n, e, s) {
        const i = new wr(s), r = new Vi(n, i, e);
        return t.Ns.Ms((async () => Ai(await pu(t), r))), () => {
            i.bh(), t.Ns.Ms((async () => Ii(await pu(t), r)));
        };
    }(oo(h), a, u, c);
}

function Yr(t, n) {
    return function(t, n) {
        const e = new wr(n);
        return t.Ns.Ms((async () => function(t, n) {
            b(t).fo.add(n), 
            // Immediately fire an initial event, indicating all existing listeners
            // are in-sync.
            n.next();
        }(await pu(t), e))), () => {
            e.bh(), t.Ns.Ms((async () => function(t, n) {
                b(t).fo.delete(n);
            }(await pu(t), e)));
        };
    }
    /**
 * Takes an updateFunction in which a set of reads and writes can be performed
 * atomically. In the updateFunction, the client can read and write values
 * using the supplied transaction object. After the updateFunction, all
 * changes will be committed. If a retryable error occurs (ex: some other
 * client has changed any of the data referenced), then the updateFunction
 * will be called again after a backoff. If the updateFunction still fails
 * after all retries, then the transaction will be rejected.
 *
 * The transaction object passed to the updateFunction contains methods for
 * accessing documents and collections. Unlike other datastore access, data
 * accessed with the transaction will not reflect local changes that have not
 * been committed. For this reason, it is required that all reads are
 * performed before any writes. Transactions must be performed while online.
 */ (oo(t = Pr(t, bu)), ds(n) ? n : {
        next: n
    });
}

/** Locally writes `mutations` on the async queue. */ function Jr(t, n) {
    return function(t, n) {
        const e = new _s;
        return t.Ns.Ms((async () => $i(await Vu(t), n, e))), e.promise;
    }(oo(t), n);
}

/**
 * Converts a ViewSnapshot that contains the single document specified by `ref`
 * to a DocumentSnapshot.
 */ function Xr(t, n, e) {
    const s = e.docs.get(n.ra), i = new Wr(t);
    return new Ur(t, i, n.ra, s, new wo(e.hasPendingWrites, e.fromCache), n.sa);
}

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
/**
 * A write batch, used to perform multiple writes as a single atomic unit.
 *
 * A `WriteBatch` object can be acquired by calling {@link writeBatch}. It
 * provides methods for adding writes to the write batch. None of the writes
 * will be committed (or visible locally) until {@link WriteBatch#commit} is
 * called.
 */ class Zr {
    /** @hideconstructor */
    constructor(t, n) {
        this.ta = t, this.wa = n, this.Ea = [], this.ma = !1, this.Ta = Ho(t);
    }
    set(t, n, e) {
        this.Aa();
        const s = to(t, this.ta), i = yo(s.sa, n, e), r = eu(this.Ta, "WriteBatch.set", s.ra, i, null !== s.sa, e);
        return this.Ea = this.Ea.concat(r.da(s.ra, ue.ce())), this;
    }
    update(t, n, e, ...s) {
        this.Aa();
        const i = to(t, this.ta);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                let r;
        return n instanceof xr && (n = n.Ch), r = "string" == typeof n || n instanceof Mr ? iu(this.Ta, "WriteBatch.update", i.ra, n, e, s) : su(this.Ta, "WriteBatch.update", i.ra, n), 
        this.Ea = this.Ea.concat(r.da(i.ra, ue.exists(!0))), this;
    }
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */    delete(t) {
        this.Aa();
        const n = to(t, this.ta);
        return this.Ea = this.Ea.concat(new Re(n.ra, ue.ce())), this;
    }
    /**
     * Commits all of the writes in this write batch as a single atomic unit.
     *
     * The result of these writes will only be reflected in document reads that
     * occur after the returned Promise resolves. If the client is offline, the
     * write fails. If you would like to see local modifications or buffer writes
     * until the client is online, use the full Firestore SDK.
     *
     * @returns A Promise resolved once all of the writes in the batch have been
     * successfully written to the backend as an atomic unit (note that it won't
     * resolve while you're offline).
     */    commit() {
        return this.Aa(), this.ma = !0, this.Ea.length > 0 ? this.wa(this.Ea) : Promise.resolve();
    }
    Aa() {
        if (this.ma) throw new S(C.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }
}

function to(t, n) {
    if (t instanceof xr && (t = t.Ch), t.firestore !== n) throw new S(C.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
    return t;
}

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
// TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
// legacy SDK.
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */
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
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */
class no extends class {
    /** @hideconstructor */
    constructor(t, n) {
        this.ta = t, this.Ia = n, this.Ta = Ho(t);
    }
    /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */    get(t) {
        const n = to(t, this.ta), e = new Go(this.ta);
        return this.Ia.Ra([ n.ra ]).then((t => {
            if (!t || 1 !== t.length) return g();
            const s = t[0];
            if (s instanceof be) return new go(this.ta, e, n.ra, null, n.sa);
            if (s instanceof ve) return new go(this.ta, e, s.key, s, n.sa);
            throw g();
        }));
    }
    set(t, n, e) {
        const s = to(t, this.ta), i = yo(s.sa, n, e), r = eu(this.Ta, "Transaction.set", s.ra, i, null !== s.sa, e);
        return this.Ia.set(s.ra, r), this;
    }
    update(t, n, e, ...s) {
        const i = to(t, this.ta);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                let r;
        return n instanceof xr && (n = n.Ch), r = "string" == typeof n || n instanceof Mr ? iu(this.Ta, "Transaction.update", i.ra, n, e, s) : su(this.Ta, "Transaction.update", i.ra, n), 
        this.Ia.update(i.ra, r), this;
    }
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */    delete(t) {
        const n = to(t, this.ta);
        return this.Ia.delete(n.ra), this;
    }
} {
    // This class implements the same logic as the Transaction API in the Lite SDK
    // but is subclassed in order to return its own DocumentSnapshot types.
    /** @hideconstructor */
    constructor(t, n) {
        super(t, n), this.ta = t;
    }
    /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */    get(t) {
        const n = to(t, this.ta), e = new Wr(this.ta);
        return super.get(t).then((t => new Ur(this.ta, e, n.ra, t.ea, new wo(
        /* hasPendingWrites= */ !1, 
        /* fromCache= */ !1), n.sa)));
    }
}

/**
 * Executes the given `updateFunction` and then attempts to commit the changes
 * applied within the transaction. If any document read within the transaction
 * has changed, Cloud Firestore retries the `updateFunction`. If it fails to
 * commit after 5 attempts, the transaction fails.
 *
 * The maximum number of writes allowed in a single transaction is 500.
 *
 * @param firestore - A reference to the Firestore database to run this
 * transaction against.
 * @param updateFunction - The function to execute within the transaction
 * context.
 * @returns If the transaction completed successfully or was explicitly aborted
 * (the `updateFunction` returned a failed promise), the promise returned by the
 * `updateFunction `is returned here. Otherwise, if the transaction failed, a
 * rejected promise with the corresponding failure error is returned.
 */ function eo(t, n) {
    return function(t, n) {
        const e = new _s;
        return t.Ns.Ms((async () => {
            const s = await function(t) {
                return Iu(t).then((t => t.Hr));
            }(t);
            new Eu(t.Ns, s, n, e).run();
        })), e.promise;
    }(oo(t), (e => n(new no(t, e))));
}

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
 * Constant used to indicate the LRU garbage collection should be disabled.
 * Set this value as the `cacheSizeBytes` on the settings passed to the
 * `Firestore` instance.
 */ const so = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.";

/**
 * The persistence provider included with the memory-only SDK. This provider
 * errors for all attempts to access persistence.
 */
class io {
    enableIndexedDbPersistence(t, n) {
        throw new S(C.FAILED_PRECONDITION, so);
    }
    enableMultiTabIndexedDbPersistence(t) {
        throw new S(C.FAILED_PRECONDITION, so);
    }
    clearIndexedDbPersistence(t) {
        throw new S(C.FAILED_PRECONDITION, so);
    }
}

/**
 * Compat class for Firestore. Exposes Firestore Legacy API, but delegates
 * to the functional API of firestore-exp.
 */ class ro extends xr {
    constructor(t, n, e) {
        super(n), this.Pa = e, this.INTERNAL = {
            delete: () => this.terminate()
        }, t instanceof z || (this.ya = t);
    }
    get Qh() {
        return this.Ch.Qh;
    }
    settings(t) {
        t.merge && 
        // Remove the property from the settings once the merge is completed
        delete (t = Object.assign(Object.assign({}, this.Ch.Yh()), t)).merge, this.Ch.Hh(t);
    }
    useEmulator(t, n) {
        "firestore.googleapis.com" !== this.Ch.Yh().host && V("Host has been set in both settings() and useEmulator(), emulator host will be used"), 
        this.settings({
            host: `${t}:${n}`,
            ssl: !1,
            merge: !0
        });
    }
    enableNetwork() {
        /**
 * Re-enables use of the network for this Firestore instance after a prior
 * call to {@link disableNetwork}.
 *
 * @returns A promise that is resolved once the network has been enabled.
 */
        return function(t) {
            t = Pr(t, bu);
            /** Enables the network connection and re-enqueues all pending operations. */
            return function(t) {
                return t.Ns.enqueue((async () => {
                    const n = await Ru(t), e = await yu(t);
                    return n.Fc(!0), function(t) {
                        const n = b(t);
                        return n.Zr.delete(0 /* UserDisabled */), Ws(n);
                    }(e);
                }));
            }
            /** Disables the network connection. Pending operations will not complete. */ (oo(t));
        }
        /**
 * Disables network usage for this instance. It can be re-enabled via {@link
 * enableNetwork}. While the network is disabled, any snapshot listeners,
 * `getDoc()` or `getDocs()` calls will return results from cache, and any write
 * operations will be queued until the network is restored.
 *
 * @returns A promise that is resolved once the network has been disabled.
 */ (this.Ch);
    }
    disableNetwork() {
        return function(t) {
            t = Pr(t, bu);
            return function(t) {
                return t.Ns.enqueue((async () => {
                    const n = await Ru(t), e = await yu(t);
                    return n.Fc(!1), async function(t) {
                        const n = b(t);
                        n.Zr.add(0 /* UserDisabled */), await Gs(n), 
                        // Set the OnlineState to Offline so get()s return from cache, etc.
                        n.io.set("Offline" /* Offline */);
                    }(e);
                }));
            }
            /**
 * Returns a Promise that resolves when all writes that were pending at the time
 * this method was called received server acknowledgement. An acknowledgement
 * can be either acceptance or rejection.
 */ (oo(t));
        }
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
        // The objects that are a part of this API are exposed to third-parties as
        // compiled javascript so we want to flag our private members with a leading
        // underscore to discourage their use.
        /**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a list
 * of field names (referring to a nested field in the document).
 */ (this.Ch);
    }
    enablePersistence(t) {
        let n = !1, e = !1;
        return t && (n = !!t.synchronizeTabs, e = !!t.experimentalForceOwningTab, Tr("synchronizeTabs", n, "experimentalForceOwningTab", e)), 
        n ? this.Pa.enableMultiTabIndexedDbPersistence(this) : this.Pa.enableIndexedDbPersistence(this, e);
    }
    clearPersistence() {
        return this.Pa.clearIndexedDbPersistence(this);
    }
    terminate() {
        return this.app._removeServiceInstance("firestore"), this.app._removeServiceInstance("firestore-exp"), 
        this.Ch._delete();
    }
    waitForPendingWrites() {
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
        return function(t) {
            t = Pr(t, bu);
            return function(t) {
                const n = new _s;
                return t.Ns.Ms((async () => Qi(await Vu(t), n))), n.promise;
            }(oo(t));
        }(this.Ch);
    }
    onSnapshotsInSync(t) {
        return Yr(this.Ch, t);
    }
    get app() {
        if (!this.ya) throw new S(C.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this.ya;
    }
    collection(t) {
        try {
            return new Ro(this, jo(this.Ch, t));
        } catch (t) {
            throw lo(t, "collection()", "Firestore.collection()");
        }
    }
    doc(t) {
        try {
            return new ao(this, Wo(this.Ch, t));
        } catch (t) {
            throw lo(t, "doc()", "Firestore.doc()");
        }
    }
    collectionGroup(t) {
        try {
            return new To(this, 
            // TODO(firestorelite): Consider using ErrorFactory -
            // https://github.com/firebase/firebase-js-sdk/blob/0131e1f/packages/util/src/errors.ts#L106
            /**
 * Creates and returns a new `Query` instance that includes all documents in the
 * database that are contained in a collection or subcollection with the
 * given `collectionId`.
 *
 * @param firestore - A reference to the root Firestore instance.
 * @param collectionId - Identifies the collections to query over. Every
 * collection or subcollection with this ID as the last segment of its path
 * will be included. Cannot contain a slash.
 * @returns The created `Query`.
 */
            function(t, n) {
                if (t = Pr(t, Lr), Er("collectionGroup", "collection id", n), n.indexOf("/") >= 0) throw new S(C.INVALID_ARGUMENT, `Invalid collection ID '${n}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
                return new So(t, 
                /* converter= */ null, 
                /**
 * Creates a new Query for a collection group query that matches all documents
 * within the provided collection group.
 */
                function(t) {
                    return new Se(Q.H(), t);
                }(n));
            }(this.Ch, t));
        } catch (t) {
            throw lo(t, "collectionGroup()", "Firestore.collectionGroup()");
        }
    }
    runTransaction(t) {
        return eo(this.Ch, (n => t(new co(this, n))));
    }
    batch() {
        return oo(this.Ch), new ho(new Zr(this.Ch, (t => Jr(this.Ch, t))));
    }
}

function oo(t) {
    return t.Va || uo(t), t.Va.pa(), t.Va;
}

function uo(t) {
    const n = t.Jh(), e = function(t, n, e) {
        return new K(t, n, e.host, e.ssl, e.experimentalForceLongPolling, e.experimentalAutoDetectLongPolling);
    }(t.Qh, t.Uh, n);
    t.Va = new mu(t.jh, t.ga, e);
}

/**
 * A reference to a transaction.
 */
class co extends xr {
    constructor(t, n) {
        super(n), this.ta = t;
    }
    get(t) {
        const n = Po(t);
        return this.Ch.get(n).then((t => new Eo(this.ta, t)));
    }
    set(t, n, e) {
        const s = Po(t);
        return e ? (mr("Transaction.set", e), this.Ch.set(s, n, e)) : this.Ch.set(s, n), 
        this;
    }
    update(t, n, e, ...s) {
        const i = Po(t);
        return 2 === arguments.length ? this.Ch.update(i, n) : this.Ch.update(i, n, e, ...s), 
        this;
    }
    delete(t) {
        const n = Po(t);
        return this.Ch.delete(n), this;
    }
}

class ho extends xr {
    set(t, n, e) {
        const s = Po(t);
        return e ? (mr("WriteBatch.set", e), this.Ch.set(s, n, e)) : this.Ch.set(s, n), 
        this;
    }
    update(t, n, e, ...s) {
        const i = Po(t);
        return 2 === arguments.length ? this.Ch.update(i, n) : this.Ch.update(i, n, e, ...s), 
        this;
    }
    delete(t) {
        const n = Po(t);
        return this.Ch.delete(n), this;
    }
    commit() {
        return this.Ch.commit();
    }
}

/**
 * A reference to a particular document in a collection in the database.
 */ class ao extends xr {
    constructor(t, n) {
        super(n), this.firestore = t, this.ia = new po(t);
    }
    static va(t, n, e) {
        if (t.length % 2 != 0) throw new S(C.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t.G()} has ${t.length}`);
        return new ao(n, new Co(n.Ch, e, new G(t)));
    }
    static ba(t, n, e) {
        return new ao(n, new Co(n.Ch, e, t));
    }
    get id() {
        return this.Ch.id;
    }
    get parent() {
        return new Ro(this.firestore, this.Ch.parent);
    }
    get path() {
        return this.Ch.path;
    }
    collection(t) {
        try {
            return new Ro(this.firestore, jo(this.Ch, t));
        } catch (t) {
            throw lo(t, "collection()", "DocumentReference.collection()");
        }
    }
    isEqual(t) {
        return t instanceof xr && (t = t.Ch), t instanceof Co && Ko(this.Ch, t);
    }
    set(t, n) {
        n = mr("DocumentReference.set", n);
        try {
            return function(t, n, e) {
                t = Pr(t, Co);
                const s = Pr(t.firestore, bu), i = yo(t.sa, n, e);
                return Jr(s, eu(Ho(s), "setDoc", t.ra, i, null !== t.sa, e).da(t.ra, ue.ce()));
            }(this.Ch, t, n);
        } catch (t) {
            throw lo(t, "setDoc()", "DocumentReference.set()");
        }
    }
    update(t, n, ...e) {
        try {
            return 1 === arguments.length ? zr(this.Ch, t) : zr(this.Ch, t, n, ...e);
        } catch (t) {
            throw lo(t, "updateDoc()", "DocumentReference.update()");
        }
    }
    delete() {
        return Jr(Pr((t = this.Ch).firestore, bu), [ new Re(t.ra, ue.ce()) ]);
        var t;
        /**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @returns A Promise resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend (Note that it
 * won't resolve while you're offline).
 */    }
    onSnapshot(...t) {
        const n = _o(t), e = fo(t, (t => new Eo(this.firestore, new Ur(this.firestore.Ch, this.ia, t.ra, t.ea, t.metadata, this.Ch.sa))));
        return Hr(this.Ch, n, e);
    }
    get(t) {
        let n;
        return n = "cache" === (null == t ? void 0 : t.source) ? Gr(this.Ch) : "server" === (null == t ? void 0 : t.source) ? function(t) {
            t = Pr(t, Co);
            const n = Pr(t.firestore, bu);
            return gu(oo(n), t.ra, {
                source: "server"
            }).then((e => Xr(n, t, e)));
        }
        /**
 * Executes the query and returns the results as a `QuerySnapshot`.
 *
 * Note: `getDocs()` attempts to provide up-to-date data when possible by
 * waiting for data from the server, but it may return cached data or fail if
 * you are offline and the server cannot be reached. To specify this behavior,
 * invoke {@link getDocsFromCache} or {@link getDocsFromServer}.
 *
 * @returns A Promise that will be resolved with the results of the query.
 */ (this.Ch) : function(t) {
            t = Pr(t, Co);
            const n = Pr(t.firestore, bu);
            return gu(oo(n), t.ra).then((e => Xr(n, t, e)));
        }(this.Ch), n.then((t => new Eo(this.firestore, new Ur(this.firestore.Ch, this.ia, t.ra, t.ea, t.metadata, this.Ch.sa))));
    }
    withConverter(t) {
        return new ao(this.firestore, this.Ch.withConverter(t));
    }
}

/**
 * Replaces the function name in an error thrown by the firestore-exp API
 * with the function names used in the classic API.
 */ function lo(t, n, e) {
    return t.message = t.message.replace(n, e), t;
}

/**
 * Iterates the list of arguments from an `onSnapshot` call and returns the
 * first argument that may be an `SnapshotListenOptions` object. Returns an
 * empty object if none is found.
 */ function _o(t) {
    for (const n of t) if ("object" == typeof n && !ds(n)) return n;
    return {};
}

/**
 * Creates an observer that can be passed to the firestore-exp SDK. The
 * observer converts all observed values into the format expected by the classic
 * SDK.
 *
 * @param args - The list of arguments from an `onSnapshot` call.
 * @param wrapper - The function that converts the firestore-exp type into the
 * type used by this shim.
 */ function fo(t, n) {
    var e, s;
    let i;
    return i = ds(t[0]) ? t[0] : ds(t[1]) ? t[1] : "function" == typeof t[0] ? {
        next: t[0],
        error: t[1],
        complete: t[2]
    } : {
        next: t[1],
        error: t[2],
        complete: t[3]
    }, {
        next: t => {
            i.next && i.next(n(t));
        },
        error: null === (e = i.error) || void 0 === e ? void 0 : e.bind(i),
        complete: null === (s = i.complete) || void 0 === s ? void 0 : s.bind(i)
    };
}

/**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ class wo {
    /** @hideconstructor */
    constructor(t, n) {
        this.hasPendingWrites = t, this.fromCache = n;
    }
    /**
     * Returns true if this `SnapshotMetadata` is equal to the provided one.
     *
     * @param other - The `SnapshotMetadata` to compare against.
     * @returns true if this `SnapshotMetadata` is equal to the provided one.
     */    isEqual(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }
}

class Eo extends xr {
    constructor(t, n) {
        super(n), this.ta = t;
    }
    get ref() {
        return new ao(this.ta, this.Ch.ref);
    }
    get id() {
        return this.Ch.id;
    }
    get metadata() {
        return this.Ch.metadata;
    }
    get exists() {
        return this.Ch.exists();
    }
    data(t) {
        return this.Ch.data(t);
    }
    get(t, n) {
        return this.Ch.get(t, n);
    }
    isEqual(t) {
        return jr(this.Ch, t.Ch);
    }
}

class mo extends Eo {
    data(t) {
        return this.Ch.data(t);
    }
}

class To extends xr {
    constructor(t, n) {
        super(n), this.firestore = t, this.ia = new po(t);
    }
    where(t, n, e) {
        try {
            // The "as string" cast is a little bit of a hack. `where` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new To(this.firestore, No(this.Ch, 
            /**
 * Creates a `QueryConstraint` that enforces that documents must contain the
 * specified field and that the value should satisfy the relation constraint
 * provided.
 *
 * @param fieldPath - The path to compare
 * @param opStr - The operation string (e.g "&lt;", "&lt;=", "==", "&lt;",
 *   "&lt;=", "!=").
 * @param value - The value for comparison
 * @returns The created `Query`.
 */
            function(t, n, e) {
                const s = n, i = bo("where", t);
                return new xo(i, s, e);
            }(t, n, e)));
        } catch (t) {
            throw lo(t, /(orderBy|where)\(\)/, "Query.$1()");
        }
    }
    orderBy(t, n) {
        try {
            // The "as string" cast is a little bit of a hack. `orderBy` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new To(this.firestore, No(this.Ch, 
            /**
 * Creates a `QueryConstraint` that sorts the query result by the
 * specified field, optionally in descending order instead of ascending.
 *
 * @param fieldPath - The field to sort by.
 * @param directionStr - Optional direction to sort by ('asc' or 'desc'). If
 * not specified, order will be ascending.
 * @returns The created `Query`.
 */
            function(t, n = "asc") {
                const e = n, s = bo("orderBy", t);
                return new Fo(s, e);
            }(t, n)));
        } catch (t) {
            throw lo(t, /(orderBy|where)\(\)/, "Query.$1()");
        }
    }
    limit(t) {
        try {
            return new To(this.firestore, No(this.Ch, 
            /**
 * Creates a `QueryConstraint` that only returns the first matching documents.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created `Query`.
 */
            function(t) {
                return yr("limit", t), new Oo("limit", t, "F" /* First */);
            }
            /**
 * Creates a `QueryConstraint` that only returns the last matching documents.
 *
 * You must specify at least one `orderBy` clause for `limitToLast` queries,
 * otherwise an exception will be thrown during execution.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created `Query`.
 */ (t)));
        } catch (t) {
            throw lo(t, "limit()", "Query.limit()");
        }
    }
    limitToLast(t) {
        try {
            return new To(this.firestore, No(this.Ch, function(t) {
                return yr("limitToLast", t), new Oo("limitToLast", t, "L" /* Last */);
            }(t)));
        } catch (t) {
            throw lo(t, "limitToLast()", "Query.limitToLast()");
        }
    }
    startAt(...t) {
        try {
            return new To(this.firestore, No(this.Ch, function(...t) {
                return new Lo("startAt", t, /*before=*/ !0);
            }(...t)));
        } catch (t) {
            throw lo(t, "startAt()", "Query.startAt()");
        }
    }
    startAfter(...t) {
        try {
            return new To(this.firestore, No(this.Ch, function(...t) {
                return new Lo("startAfter", t, 
                /*before=*/ !1);
            }(...t)));
        } catch (t) {
            throw lo(t, "startAfter()", "Query.startAfter()");
        }
    }
    endBefore(...t) {
        try {
            return new To(this.firestore, No(this.Ch, function(...t) {
                return new $o("endBefore", t, /*before=*/ !0);
            }(...t)));
        } catch (t) {
            throw lo(t, "endBefore()", "Query.endBefore()");
        }
    }
    endAt(...t) {
        try {
            return new To(this.firestore, No(this.Ch, function(...t) {
                return new $o("endAt", t, /*before=*/ !1);
            }
            /** Helper function to create a bound from a document or fields */ (...t)));
        } catch (t) {
            throw lo(t, "endAt()", "Query.endAt()");
        }
    }
    isEqual(t) {
        return zo(this.Ch, t.Ch);
    }
    get(t) {
        let n;
        return n = "cache" === (null == t ? void 0 : t.source) ? Kr(this.Ch) : "server" === (null == t ? void 0 : t.source) ? function(t) {
            t = Pr(t, So);
            const n = Pr(t.firestore, bu), e = oo(n), s = new Wr(n);
            return vu(e, t.fa, {
                source: "server"
            }).then((e => new Br(n, s, t, e)));
        }(this.Ch) : function(t) {
            t = Pr(t, So);
            const n = Pr(t.firestore, bu), e = oo(n), s = new Wr(n);
            return Bo(t.fa), vu(e, t.fa).then((e => new Br(n, s, t, e)));
        }(this.Ch), n.then((t => new Io(this.firestore, new Br(this.firestore.Ch, this.ia, this.Ch, t.ua))));
    }
    onSnapshot(...t) {
        const n = _o(t), e = fo(t, (t => new Io(this.firestore, new Br(this.firestore.Ch, this.ia, this.Ch, t.ua))));
        return Hr(this.Ch, n, e);
    }
    withConverter(t) {
        return new To(this.firestore, this.Ch.withConverter(t));
    }
}

class Ao extends xr {
    constructor(t, n) {
        super(n), this.ta = t;
    }
    get type() {
        return this.Ch.type;
    }
    get doc() {
        return new mo(this.ta, this.Ch.doc);
    }
    get oldIndex() {
        return this.Ch.oldIndex;
    }
    get newIndex() {
        return this.Ch.newIndex;
    }
}

class Io extends xr {
    constructor(t, n) {
        super(n), this.ta = t;
    }
    get query() {
        return new To(this.ta, this.Ch.query);
    }
    get metadata() {
        return this.Ch.metadata;
    }
    get size() {
        return this.Ch.size;
    }
    get empty() {
        return this.Ch.empty;
    }
    get docs() {
        return this.Ch.docs.map((t => new mo(this.ta, t)));
    }
    docChanges(t) {
        return this.Ch.docChanges(t).map((t => new Ao(this.ta, t)));
    }
    forEach(t, n) {
        this.Ch.forEach((e => {
            t.call(n, new mo(this.ta, e));
        }));
    }
    isEqual(t) {
        return jr(this.Ch, t.Ch);
    }
}

class Ro extends To {
    constructor(t, n) {
        super(t, n), this.firestore = t, this.Ch = n;
    }
    get id() {
        return this.Ch.id;
    }
    get path() {
        return this.Ch.path;
    }
    get parent() {
        const t = this.Ch.parent;
        return t ? new ao(this.firestore, t) : null;
    }
    doc(t) {
        try {
            return new ao(this.firestore, void 0 === t ? Wo(this.Ch) : Wo(this.Ch, t));
        } catch (t) {
            throw lo(t, "doc()", "CollectionReference.doc()");
        }
    }
    add(t) {
        return function(t, n) {
            const e = Pr(t.firestore, bu), s = Wo(t), i = yo(t.sa, n);
            return Jr(e, eu(Ho(t.firestore), "addDoc", s.ra, i, null !== t.sa, {}).da(s.ra, ue.exists(!1))).then((() => s));
        }(this.Ch, t).then((t => new ao(this.firestore, t)));
    }
    isEqual(t) {
        return Ko(this.Ch, t.Ch);
    }
    withConverter(t) {
        return new Ro(this.firestore, this.Ch.withConverter(t));
    }
}

function Po(t) {
    return t instanceof xr && (t = t.Ch), Pr(t, Co);
}

/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function yo(t, n, e) {
    let s;
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return s = t ? e && (e.merge || e.mergeFields) ? t.toFirestore(n, e) : t.toFirestore(n) : n, 
    s;
}

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
/**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 */ class Vo {
    oa(t, n = "none") {
        switch (Wt(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return Zt(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.Ca(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.Sa(t, n);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return this.aa(tn(t.bytesValue));

          case 7 /* RefValue */ :
            return this.la(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.Da(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.Na(t.arrayValue, n);

          case 10 /* ObjectValue */ :
            return this.xa(t.mapValue, n);

          default:
            throw g();
        }
    }
    xa(t, n) {
        const e = {};
        return Mt(t.fields || {}, ((t, s) => {
            e[t] = this.oa(s, n);
        })), e;
    }
    Da(t) {
        return new Dr(Zt(t.latitude), Zt(t.longitude));
    }
    Na(t, n) {
        return (t.values || []).map((t => this.oa(t, n)));
    }
    Sa(t, n) {
        switch (n) {
          case "previous":
            const e = Bt(t);
            return null == e ? null : this.oa(e, n);

          case "estimate":
            return this.Ca(Qt(t));

          default:
            return null;
        }
    }
    Ca(t) {
        const n = Xt(t);
        return new U(n.seconds, n.nanos);
    }
    _a(t, n) {
        const e = Q.K(t);
        v(jn(e));
        const s = new z(e.get(1), e.get(3)), i = new G(e.$(5));
        return s.isEqual(n) || 
        // TODO(b/64130202): Somehow support foreign references.
        y(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`), 
        i;
    }
}

class po extends Vo {
    constructor(t) {
        super(), this.firestore = t;
    }
    aa(t) {
        return new kr(new Nr(t));
    }
    la(t) {
        const n = this._a(t, this.firestore.Qh);
        return ao.ba(n, this.firestore, /* converter= */ null);
    }
}

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
/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class go {
    // Note: This class is stripped down version of the DocumentSnapshot in
    // the legacy SDK. The changes are:
    // - No support for SnapshotMetadata.
    // - No support for SnapshotOptions.
    /** @hideconstructor protected */
    constructor(t, n, e, s, i) {
        this.ta = t, this.ia = n, this.ra = e, this.ea = s, this.sa = i;
    }
    /** Property of the `DocumentSnapshot` that provides the document's ID. */    get id() {
        return this.ra.path.U();
    }
    /**
     * The `DocumentReference` for the document included in the `DocumentSnapshot`.
     */    get ref() {
        return new Co(this.ta, this.sa, this.ra);
    }
    /**
     * Signals whether or not the document at the snapshot's location exists.
     *
     * @returns true if the document exists.
     */    exists() {
        return null !== this.ea;
    }
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * @returns An `Object` containing all fields in the document or `undefined`
     * if the document doesn't exist.
     */    data() {
        if (this.ea) {
            if (this.sa) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                const t = new vo(this.ta, this.ia, this.ra, this.ea, 
                /* converter= */ null);
                return this.sa.fromFirestore(t);
            }
            return this.ia.oa(this.ea.Ee());
        }
    }
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(t) {
        if (this.ea) {
            const n = this.ea.data().field(bo("DocumentSnapshot.get", t));
            if (null !== n) return this.ia.oa(n);
        }
    }
}

/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */ class vo extends go {
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * @override
     * @returns An `Object` containing all fields in the document.
     */
    data() {
        return super.data();
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function bo(t, n) {
    return "string" == typeof n ? _u(t, n) : n instanceof xr ? n.Ch.Zh : n.Zh;
}

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
/**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */ class Co {
    /** @hideconstructor */
    constructor(t, n, e) {
        this.sa = n, this.ra = e, 
        /** The type of this Firestore reference. */
        this.type = "document", this.firestore = t;
    }
    get Fa() {
        return this.ra.path;
    }
    /**
     * The document's identifier within its collection.
     */    get id() {
        return this.ra.path.U();
    }
    /**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */    get path() {
        return this.ra.path.G();
    }
    /**
     * The collection this `DocumentReference` belongs to.
     */    get parent() {
        return new Qo(this.firestore, this.sa, this.ra.path.k());
    }
    /**
     * Applies a custom data converter to this `DocumentReference`, allowing you
     * to use your own custom model objects with Firestore. When you call {@link
     * setDoc}, {@link getDoc}, etc. with the returned `DocumentReference`
     * instance, the provided converter will convert between Firestore data and
     * your custom type `U`.
     *
     * @param converter - Converts objects to and from Firestore.
     * @returns A `DocumentReference<U>` that uses the provided converter.
     */    withConverter(t) {
        return new Co(this.firestore, t, this.ra);
    }
}

/**
 * A `Query` refers to a Query which you can read or listen to. You can also
 * construct refined `Query` objects by adding filters and ordering.
 */ class So {
    // This is the lite version of the Query class in the main SDK.
    /** @hideconstructor protected */
    constructor(t, n, e) {
        this.sa = n, this.fa = e, 
        /** The type of this Firestore reference. */
        this.type = "query", this.firestore = t;
    }
    /**
     * Applies a custom data converter to this query, allowing you to use your own
     * custom model objects with Firestore. When you call {@link getDocs} with
     * the returned query, the provided converter will convert between Firestore
     * data and your custom type `U`.
     *
     * @param converter - Converts objects to and from Firestore.
     * @returns A `Query<U>` that uses the provided converter.
     */    withConverter(t) {
        return new So(this.firestore, t, this.fa);
    }
}

/**
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Firestore query. `QueryConstraint`s are created by invoking {@link where},
 * {@link orderBy}, {@link startAt}, {@link startAfter}, {@link
 * endBefore}, {@link endAt}, {@link limit} or {@link limitToLast} and
 * can then be passed to {@link query} to create a new query instance that
 * also contains this `QueryConstraint`.
 */ class Do {}

/**
 * Creates a new immutable instance of `query` that is extended to also include
 * additional query constraints.
 *
 * @param query - The query instance to use as a base for the new constraints.
 * @param queryConstraints - The list of `QueryConstraint`s to apply.
 * @throws if any of the provided query constraints cannot be combined with the
 * existing or new constraints.
 */ function No(t, ...n) {
    for (const e of n) t = e.Oa(t);
    return t;
}

class xo extends Do {
    constructor(t, n, e) {
        super(), this.La = t, this.$a = n, this.ka = e, this.type = "where";
    }
    Oa(t) {
        const n = Ho(t.firestore), e = function(t, n, e, s, i, r, o) {
            let u;
            if (i.J()) {
                if ("array-contains" /* ARRAY_CONTAINS */ === r || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === r) throw new S(C.INVALID_ARGUMENT, `Invalid Query. You can't perform '${r}' queries on FieldPath.documentId().`);
                if ("in" /* IN */ === r || "not-in" /* NOT_IN */ === r) {
                    Uo(o, r);
                    const n = [];
                    for (const e of o) n.push(Mo(s, t, e));
                    u = {
                        arrayValue: {
                            values: n
                        }
                    };
                } else u = Mo(s, t, o);
            } else "in" /* IN */ !== r && "not-in" /* NOT_IN */ !== r && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== r || Uo(o, r), 
            u = ru(e, n, o, 
            /* allowArrays= */ "in" /* IN */ === r || "not-in" /* NOT_IN */ === r);
            const c = We.create(i, r, u);
            return function(t, n) {
                if (n.Ie()) {
                    const e = Oe(t);
                    if (null !== e && !e.isEqual(n.field)) throw new S(C.INVALID_ARGUMENT, `Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '${e.toString()}' and '${n.field.toString()}'`);
                    const s = Fe(t);
                    null !== s && qo(t, n.field, s);
                }
                const e = function(t, n) {
                    for (const e of t.filters) if (n.indexOf(e.op) >= 0) return e.op;
                    return null;
                }(t, 
                /**
 * Given an operator, returns the set of operators that cannot be used with it.
 *
 * Operators in a query must adhere to the following set of rules:
 * 1. Only one array operator is allowed.
 * 2. Only one disjunctive operator is allowed.
 * 3. NOT_EQUAL cannot be used with another NOT_EQUAL operator.
 * 4. NOT_IN cannot be used with array, disjunctive, or NOT_EQUAL operators.
 *
 * Array operators: ARRAY_CONTAINS, ARRAY_CONTAINS_ANY
 * Disjunctive operators: IN, ARRAY_CONTAINS_ANY, NOT_IN
 */
                function(t) {
                    switch (t) {
                      case "!=" /* NOT_EQUAL */ :
                        return [ "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ];

                      case "array-contains" /* ARRAY_CONTAINS */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "not-in" /* NOT_IN */ ];

                      case "in" /* IN */ :
                        return [ "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "array-contains-any" /* ARRAY_CONTAINS_ANY */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "not-in" /* NOT_IN */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ , "!=" /* NOT_EQUAL */ ];

                      default:
                        return [];
                    }
                }(n.op));
                if (null !== e) 
                // Special case when it's a duplicate op to give a slightly clearer error message.
                throw e === n.op ? new S(C.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${n.op.toString()}' filter.`) : new S(C.INVALID_ARGUMENT, `Invalid query. You cannot use '${n.op.toString()}' filters with '${e.toString()}' filters.`);
            }(t, c), c;
        }(t.fa, "where", n, t.firestore.Qh, this.La, this.$a, this.ka);
        return new So(t.firestore, t.sa, function(t, n) {
            const e = t.filters.concat([ n ]);
            return new Se(t.path, t.collectionGroup, t.me.slice(), e, t.limit, t.limitType, t.startAt, t.endAt);
        }(t.fa, e));
    }
}

class Fo extends Do {
    constructor(t, n) {
        super(), this.La = t, this.Ma = n, this.type = "orderBy";
    }
    Oa(t) {
        const n = function(t, n, e) {
            if (null !== t.startAt) throw new S(C.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
            if (null !== t.endAt) throw new S(C.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
            const s = new rs(n, e);
            return function(t, n) {
                if (null === Fe(t)) {
                    // This is the first order by. It must match any inequality.
                    const e = Oe(t);
                    null !== e && qo(t, e, n.field);
                }
            }(t, s), s;
        }
        /**
 * Create a Bound from a query and a document.
 *
 * Note that the Bound will always include the key of the document
 * and so only the provided document will compare equal to the returned
 * position.
 *
 * Will throw if the document does not contain all fields of the order by
 * of the query or if any of the fields in the order by are an uncommitted
 * server timestamp.
 */ (t.fa, this.La, this.Ma);
        return new So(t.firestore, t.sa, function(t, n) {
            // TODO(dimond): validate that orderBy does not list the same key twice.
            const e = t.me.concat([ n ]);
            return new Se(t.path, t.collectionGroup, e, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
        }(t.fa, n));
    }
}

class Oo extends Do {
    constructor(t, n, e) {
        super(), this.type = t, this.Ua = n, this.qa = e;
    }
    Oa(t) {
        return new So(t.firestore, t.sa, Me(t.fa, this.Ua, this.qa));
    }
}

class Lo extends Do {
    constructor(t, n, e) {
        super(), this.type = t, this.Ba = n, this.Qa = e;
    }
    Oa(t) {
        const n = ko(t, this.type, this.Ba, this.Qa);
        return new So(t.firestore, t.sa, function(t, n) {
            return new Se(t.path, t.collectionGroup, t.me.slice(), t.filters.slice(), t.limit, t.limitType, n, t.endAt);
        }(t.fa, n));
    }
}

class $o extends Do {
    constructor(t, n, e) {
        super(), this.type = t, this.Ba = n, this.Qa = e;
    }
    Oa(t) {
        const n = ko(t, this.type, this.Ba, this.Qa);
        return new So(t.firestore, t.sa, function(t, n) {
            return new Se(t.path, t.collectionGroup, t.me.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, n);
        }(t.fa, n));
    }
}

function ko(t, n, e, s) {
    if (e[0] instanceof xr && (e[0] = e[0].Ch), e[0] instanceof go) return function(t, n, e, s, i) {
        if (!s) throw new S(C.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + e + "().");
        const r = [];
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
                for (const e of $e(t)) if (e.field.J()) r.push(nn(n, s.key)); else {
            const t = s.field(e.field);
            if (qt(t)) throw new S(C.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + e.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
            if (null === t) {
                const t = e.field.G();
                throw new S(C.INVALID_ARGUMENT, `Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`);
            }
            r.push(t);
        }
        return new ns(r, i);
    }
    /**
 * Converts a list of field values to a Bound for the given query.
 */ (t.fa, t.firestore.Qh, n, e[0].ea, s);
    {
        const i = Ho(t.firestore);
        return function(t, n, e, s, i, r) {
            // Use explicit order by's because it has to match the query the user made
            const o = t.me;
            if (i.length > o.length) throw new S(C.INVALID_ARGUMENT, `Too many arguments provided to ${s}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
            const u = [];
            for (let r = 0; r < i.length; r++) {
                const c = i[r];
                if (o[r].field.J()) {
                    if ("string" != typeof c) throw new S(C.INVALID_ARGUMENT, `Invalid query. Expected a string for document ID in ${s}(), but got a ${typeof c}`);
                    if (!Le(t) && -1 !== c.indexOf("/")) throw new S(C.INVALID_ARGUMENT, `Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${s}() must be a plain document ID, but '${c}' contains a slash.`);
                    const e = t.path.child(Q.K(c));
                    if (!G.st(e)) throw new S(C.INVALID_ARGUMENT, `Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${s}() must result in a valid document path, but '${e}' is not because it contains an odd number of segments.`);
                    const i = new G(e);
                    u.push(nn(n, i));
                } else {
                    const t = ru(e, s, c);
                    u.push(t);
                }
            }
            return new ns(u, r);
        }
        /**
 * Parses the given documentIdValue into a ReferenceValue, throwing
 * appropriate errors if the value is anything other than a DocumentReference
 * or String, or if the string is malformed.
 */ (t.fa, t.firestore.Qh, i, n, e, s);
    }
}

function Mo(t, n, e) {
    if (e instanceof xr && (e = e.Ch), "string" == typeof e) {
        if ("" === e) throw new S(C.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!Le(n) && -1 !== e.indexOf("/")) throw new S(C.INVALID_ARGUMENT, `Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);
        const s = n.path.child(Q.K(e));
        if (!G.st(s)) throw new S(C.INVALID_ARGUMENT, `Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);
        return nn(t, new G(s));
    }
    if (e instanceof Co) return nn(t, e.ra);
    throw new S(C.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + Rr(e) + ".");
}

/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */ function Uo(t, n) {
    if (!Array.isArray(t) || 0 === t.length) throw new S(C.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${n.toString()}' filters.`);
    if (t.length > 10) throw new S(C.INVALID_ARGUMENT, `Invalid Query. '${n.toString()}' filters support a maximum of 10 elements in the value array.`);
}

function qo(t, n, e) {
    if (!e.isEqual(n)) throw new S(C.INVALID_ARGUMENT, `Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '${n.toString()}' and so you must also use '${n.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${e.toString()}' instead.`);
}

function Bo(t) {
    if (xe(t) && 0 === t.me.length) throw new S(C.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}

/**
 * A `CollectionReference` object can be used for adding documents, getting
 * document references, and querying for documents (using {@link query}).
 */ class Qo extends So {
    /** @hideconstructor */
    constructor(t, n, e) {
        super(t, n, De(e)), this.firestore = t, this.Fa = e, this.type = "collection";
    }
    /** The collection's identifier. */    get id() {
        return this.fa.path.U();
    }
    /**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */    get path() {
        return this.fa.path.G();
    }
    /**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */    get parent() {
        const t = this.Fa.k();
        return t.q() ? null : new Co(this.firestore, 
        /* converter= */ null, new G(t));
    }
    /**
     * Applies a custom data converter to this CollectionReference, allowing you
     * to use your own custom model objects with Firestore. When you call {@link
     * addDoc} with the returned `CollectionReference` instance, the provided
     * converter will convert between Firestore data and your custom type `U`.
     *
     * @param converter - Converts objects to and from Firestore.
     * @returns A `CollectionReference<U>` that uses the provided converter.
     */    withConverter(t) {
        return new Qo(this.firestore, t, this.Fa);
    }
}

function jo(t, n, ...e) {
    if (t instanceof xr && (t = t.Ch), Er("collection", "path", n), t instanceof Lr) {
        const s = Q.K(n, ...e);
        return Ir(s), new Qo(t, /* converter= */ null, s);
    }
    {
        if (!(t instanceof Co || t instanceof Qo)) throw new S(C.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const s = Q.K(t.path, ...e).child(Q.K(n));
        return Ir(s), new Qo(t.firestore, 
        /* converter= */ null, s);
    }
}

function Wo(t, n, ...e) {
    if (t instanceof xr && (t = t.Ch), 
    // We allow omission of 'pathString' but explicitly prohibit passing in both
    // 'undefined' and 'null'.
    1 === arguments.length && (n = $.g()), Er("doc", "path", n), t instanceof Lr) {
        const s = Q.K(n, ...e);
        return Ar(s), new Co(t, 
        /* converter= */ null, new G(s));
    }
    {
        if (!(t instanceof Co || t instanceof Qo)) throw new S(C.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const s = t.Fa.child(Q.K(n, ...e));
        return Ar(s), new Co(t.firestore, t instanceof Qo ? t.sa : null, new G(s));
    }
}

class Go extends Vo {
    constructor(t) {
        super(), this.firestore = t;
    }
    aa(t) {
        return new Nr(t);
    }
    la(t) {
        const n = this._a(t, this.firestore.Qh);
        return new Co(this.firestore, /* converter= */ null, n);
    }
}

/**
 * Returns true if the provided references are equal.
 *
 * @param left - A reference to compare.
 * @param right - A reference to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function Ko(t, n) {
    return t instanceof xr && (t = t.Ch), n instanceof xr && (n = n.Ch), (t instanceof Co || t instanceof Qo) && (n instanceof Co || n instanceof Qo) && (t.firestore === n.firestore && t.path === n.path && t.sa === n.sa);
}

/**
 * Returns true if the provided queries point to the same collection and apply
 * the same constraints.
 *
 * @param left - A `Query` to compare.
 * @param right - A `Query` to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function zo(t, n) {
    return t instanceof xr && (t = t.Ch), n instanceof xr && (n = n.Ch), t instanceof So && n instanceof So && (t.firestore === n.firestore && Ue(t.fa, n.fa) && t.sa === n.sa);
}

function Ho(t) {
    const n = t.Jh(), e = fs(t.Qh);
    return new nu(t.Qh, !!n.ignoreUndefinedProperties, e);
}

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
 */ const Yo = /^__.*__$/;

/** The result of parsing document data (e.g. for a setData call). */ class Jo {
    constructor(t, n, e) {
        this.data = t, this.ee = n, this.fieldTransforms = e;
    }
    da(t, n) {
        const e = [];
        return null !== this.ee ? e.push(new Ee(t, this.data, this.ee, n)) : e.push(new we(t, this.data, n)), 
        this.fieldTransforms.length > 0 && e.push(new Te(t, this.fieldTransforms)), e;
    }
}

/** The result of parsing "update" data (i.e. for an updateData call). */ class Xo {
    constructor(t, n, e) {
        this.data = t, this.ee = n, this.fieldTransforms = e;
    }
    da(t, n) {
        const e = [ new Ee(t, this.data, this.ee, n) ];
        return this.fieldTransforms.length > 0 && e.push(new Te(t, this.fieldTransforms)), 
        e;
    }
}

function Zo(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw g();
    }
}

/** A "context" object passed around while parsing user data. */ class tu {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    constructor(t, n, e, s, i, r) {
        this.settings = t, this.rt = n, this.serializer = e, this.ignoreUndefinedProperties = s, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.ja(), this.fieldTransforms = i || [], this.ee = r || [];
    }
    get path() {
        return this.settings.path;
    }
    get Dh() {
        return this.settings.Dh;
    }
    /** Returns a new context with the specified settings overwritten. */    Wa(t) {
        return new tu(Object.assign(Object.assign({}, this.settings), t), this.rt, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.ee);
    }
    Ga(t) {
        var n;
        const e = null === (n = this.path) || void 0 === n ? void 0 : n.child(t), s = this.Wa({
            path: e,
            Fh: !1
        });
        return s.Ka(t), s;
    }
    za(t) {
        var n;
        const e = null === (n = this.path) || void 0 === n ? void 0 : n.child(t), s = this.Wa({
            path: e,
            Fh: !1
        });
        return s.ja(), s;
    }
    Ha(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.Wa({
            path: void 0,
            Fh: !0
        });
    }
    Nh(t) {
        return fu(t, this.settings.methodName, this.settings.Ya || !1, this.path, this.settings.xh);
    }
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */    contains(t) {
        return void 0 !== this.ee.find((n => t.B(n))) || void 0 !== this.fieldTransforms.find((n => t.B(n.field)));
    }
    ja() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (let t = 0; t < this.path.length; t++) this.Ka(this.path.get(t));
    }
    Ka(t) {
        if (0 === t.length) throw this.Nh("Document fields must not be empty");
        if (Zo(this.Dh) && Yo.test(t)) throw this.Nh('Document fields cannot begin and end with "__"');
    }
}

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */ class nu {
    constructor(t, n, e) {
        this.rt = t, this.ignoreUndefinedProperties = n, this.serializer = e || fs(t);
    }
    /** Creates a new top-level parse context. */    Ja(t, n, e, s = !1) {
        return new tu({
            Dh: t,
            methodName: n,
            xh: e,
            path: W.H(),
            Fh: !1,
            Ya: s
        }, this.rt, this.serializer, this.ignoreUndefinedProperties);
    }
}

/** Parse document data from a set() call. */ function eu(t, n, e, s, i, r = {}) {
    const o = t.Ja(r.merge || r.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , n, e, i);
    hu("Data must be an object, but it was:", o, s);
    const u = uu(s, o);
    let c, h;
    if (r.merge) c = new se(o.ee), h = o.fieldTransforms; else if (r.mergeFields) {
        const t = [];
        for (const s of r.mergeFields) {
            const i = au(n, s, e);
            if (!o.contains(i)) throw new S(C.INVALID_ARGUMENT, `Field '${i}' is specified in your field mask but missing from your input data.`);
            du(t, i) || t.push(i);
        }
        c = new se(t), h = o.fieldTransforms.filter((t => c.ue(t.field)));
    } else c = null, h = o.fieldTransforms;
    return new Jo(new ye(u), c, h);
}

/** Parse update data from an update() call. */ function su(t, n, e, s) {
    const i = t.Ja(1 /* Update */ , n, e);
    hu("Data must be an object, but it was:", i, s);
    const r = [], o = new Ve;
    Mt(s, ((t, s) => {
        const u = _u(n, t, e);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                s instanceof xr && (s = s.Ch);
        const c = i.za(u);
        if (s instanceof pr) 
        // Add it to the field mask, but don't add anything to updateData.
        r.push(u); else {
            const t = ou(s, c);
            null != t && (r.push(u), o.set(u, t));
        }
    }));
    const u = new se(r);
    return new Xo(o.ae(), u, i.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function iu(t, n, e, s, i, r) {
    const o = t.Ja(1 /* Update */ , n, e), u = [ au(n, s, e) ], c = [ i ];
    if (r.length % 2 != 0) throw new S(C.INVALID_ARGUMENT, `Function ${n}() needs to be called with an even number of arguments that alternate between field names and values.`);
    for (let t = 0; t < r.length; t += 2) u.push(au(n, r[t])), c.push(r[t + 1]);
    const h = [], a = new Ve;
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (let t = u.length - 1; t >= 0; --t) if (!du(h, u[t])) {
        const n = u[t];
        let e = c[t];
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                e instanceof xr && (e = e.Ch);
        const s = o.za(n);
        if (e instanceof pr) 
        // Add it to the field mask, but don't add anything to updateData.
        h.push(n); else {
            const t = ou(e, s);
            null != t && (h.push(n), a.set(n, t));
        }
    }
    const l = new se(h);
    return new Xo(a.ae(), l, o.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays - Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function ru(t, n, e, s = !1) {
    return ou(e, t.Ja(s ? 4 /* ArrayArgument */ : 3 /* Argument */ , n));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function ou(t, n) {
    if (
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    t instanceof xr && (t = t.Ch), cu(t)) return hu("Unsupported field value:", n, t), 
    uu(t, n);
    if (t instanceof Vr) 
    // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
 * "Parses" the provided FieldValueImpl, adding any necessary transforms to
 * context.fieldTransforms.
 */
    return function(t, n) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!Zo(n.Dh)) throw n.Nh(t._methodName + "() can only be used with update() and set()");
        if (!n.path) throw n.Nh(t._methodName + "() is not currently supported inside arrays");
        const e = t.Sh(n);
        e && n.fieldTransforms.push(e);
    }
    /**
 * Helper to parse a scalar value (i.e. not an Object, Array, or FieldValue)
 *
 * @returns The parsed value
 */ (t, n), null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    n.path && n.ee.push(n.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (n.settings.Fh && 4 /* ArrayArgument */ !== n.Dh) throw n.Nh("Nested arrays are not supported");
        return function(t, n) {
            const e = [];
            let s = 0;
            for (const i of t) {
                let t = ou(i, n.Ha(s));
                null == t && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                t = {
                    nullValue: "NULL_VALUE"
                }), e.push(t), s++;
            }
            return {
                arrayValue: {
                    values: e
                }
            };
        }(t, n);
    }
    return function(t, n) {
        t instanceof xr && (t = t.Ch);
        if (null === t) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return fn(n.serializer, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            const e = U.fromDate(t);
            return {
                timestampValue: dn(n.serializer, e)
            };
        }
        if (t instanceof U) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            const e = new U(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: dn(n.serializer, e)
            };
        }
        if (t instanceof Dr) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof Nr) return {
            bytesValue: wn(n.serializer, t.Mh)
        };
        if (t instanceof Co) {
            const e = n.rt, s = t.firestore.Qh;
            if (!s.isEqual(e)) throw n.Nh(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${e.projectId}/${e.database}`);
            return {
                referenceValue: Tn(t.firestore.Qh || n.rt, t.ra.path)
            };
        }
        if (void 0 === t && n.ignoreUndefinedProperties) return null;
        throw n.Nh("Unsupported field value: " + Rr(t));
    }
    /**
 * Checks whether an object looks like a JSON object that should be converted
 * into a struct. Normal class/prototype instances are considered to look like
 * JSON objects since they should be converted to a struct value. Arrays, Dates,
 * GeoPoints, etc. are not considered to look like JSON objects since they map
 * to specific FieldValue types other than ObjectValue.
 */ (t, n);
}

function uu(t, n) {
    const e = {};
    return Ut(t) ? 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    n.path && n.path.length > 0 && n.ee.push(n.path) : Mt(t, ((t, s) => {
        const i = ou(s, n.Ga(t));
        null != i && (e[t] = i);
    })), {
        mapValue: {
            fields: e
        }
    };
}

function cu(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof U || t instanceof Dr || t instanceof Nr || t instanceof Co || t instanceof Vr);
}

function hu(t, n, e) {
    if (!cu(e) || !function(t) {
        return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
    }(e)) {
        const s = Rr(e);
        throw "an object" === s ? n.Nh(t + " a custom object") : n.Nh(t + " " + s);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function au(t, n, e) {
    if (
    // If required, replace the FieldPath Compat class with with the firestore-exp
    // FieldPath.
    n instanceof xr && (n = n.Ch), n instanceof Mr) return n.Zh;
    if ("string" == typeof n) return _u(t, n);
    throw fu("Field path arguments must be of type string or FieldPath.", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, e);
}

/**
 * Matches any characters in a field path string that are reserved.
 */ const lu = new RegExp("[~\\*/\\[\\]]");

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */ function _u(t, n, e) {
    if (n.search(lu) >= 0) throw fu(`Invalid field path (${n}). Paths must not contain '~', '*', '/', '[', or ']'`, t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, e);
    try {
        return new Mr(...n.split(".")).Zh;
    } catch (s) {
        throw fu(`Invalid field path (${n}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, e);
    }
}

function fu(t, n, e, s, i) {
    const r = s && !s.q(), o = void 0 !== i;
    let u = `Function ${n}() called with invalid data`;
    e && (u += " (via `toFirestore()`)"), u += ". ";
    let c = "";
    return (r || o) && (c += " (found", r && (c += " in field " + s), o && (c += " in document " + i), 
    c += ")"), new S(C.INVALID_ARGUMENT, u + t + c);
}

/** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */ function du(t, n) {
    return t.some((t => t.isEqual(n)));
}

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
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ class wu {
    constructor(t) {
        this.Hr = t, 
        // The version of each document that was read during this transaction.
        this.Xa = new Map, this.mutations = [], this.Za = !1, 
        /**
         * A deferred usage error that occurred previously in this transaction that
         * will cause the transaction to fail once it actually commits.
         */
        this.tl = null, 
        /**
         * Set of documents that have been written in the transaction.
         *
         * When there's more than one write to the same key in a transaction, any
         * writes after the first are handled differently.
         */
        this.nl = new Set;
    }
    async Ra(t) {
        if (this.el(), this.mutations.length > 0) throw new S(C.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
        const n = await async function(t, n) {
            const e = b(t), s = yn(e.serializer) + "/documents", i = {
                documents: n.map((t => In(e.serializer, t)))
            }, r = await e.kr("BatchGetDocuments", s, i), o = new Map;
            r.forEach((t => {
                const n = gn(e.serializer, t);
                o.set(n.key.toString(), n);
            }));
            const u = [];
            return n.forEach((t => {
                const n = o.get(t.toString());
                v(!!n), u.push(n);
            })), u;
        }(this.Hr, t);
        return n.forEach((t => {
            t instanceof be || t instanceof ve ? this.sl(t) : g();
        })), n;
    }
    set(t, n) {
        this.write(n.da(t, this.re(t))), this.nl.add(t.toString());
    }
    update(t, n) {
        try {
            this.write(n.da(t, this.il(t)));
        } catch (t) {
            this.tl = t;
        }
        this.nl.add(t.toString());
    }
    delete(t) {
        this.write([ new Re(t, this.re(t)) ]), this.nl.add(t.toString());
    }
    async commit() {
        if (this.el(), this.tl) throw this.tl;
        const t = this.Xa;
        // For each mutation, note that the doc was written.
                this.mutations.forEach((n => {
            t.delete(n.key.toString());
        })), 
        // For each document that was read but not written to, we want to perform
        // a `verify` operation.
        t.forEach(((t, n) => {
            const e = G.tt(n);
            this.mutations.push(new Pe(e, this.re(e)));
        })), await async function(t, n) {
            const e = b(t), s = yn(e.serializer) + "/documents", i = {
                writes: n.map((t => bn(e.serializer, t)))
            };
            await e.$r("Commit", s, i);
        }(this.Hr, this.mutations), this.Za = !0;
    }
    sl(t) {
        let n;
        if (t instanceof ve) n = t.version; else {
            if (!(t instanceof be)) throw g();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
            n = q.min();
        }
        const e = this.Xa.get(t.key.toString());
        if (e) {
            if (!n.isEqual(e)) 
            // This transaction will fail no matter what.
            throw new S(C.ABORTED, "Document version changed between two reads.");
        } else this.Xa.set(t.key.toString(), n);
    }
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */    re(t) {
        const n = this.Xa.get(t.toString());
        return !this.nl.has(t.toString()) && n ? ue.updateTime(n) : ue.ce();
    }
    /**
     * Returns the precondition for a document if the operation is an update.
     */    il(t) {
        const n = this.Xa.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.nl.has(t.toString()) && n) {
            if (n.isEqual(q.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new S(C.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return ue.updateTime(n);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
        return ue.exists(!0);
    }
    write(t) {
        this.el(), this.mutations = this.mutations.concat(t);
    }
    el() {}
}

/**
 * @license
 * Copyright 2019 Google LLC
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
 * TransactionRunner encapsulates the logic needed to run and retry transactions
 * with backoff.
 */
class Eu {
    constructor(t, n, e, s) {
        this.Ns = t, this.Hr = n, this.updateFunction = e, this.Os = s, this.rl = 5, this.Ks = new Ts(this.Ns, "transaction_retry" /* TransactionRetry */);
    }
    /** Runs the transaction and sets the result on deferred. */    run() {
        this.ol();
    }
    ol() {
        this.Ks.vs((async () => {
            const t = new wu(this.Hr), n = this.ul(t);
            n && n.then((n => {
                this.Ns.Ms((() => t.commit().then((() => {
                    this.Os.resolve(n);
                })).catch((t => {
                    this.cl(t);
                }))));
            })).catch((t => {
                this.cl(t);
            }));
        }));
    }
    ul(t) {
        try {
            const n = this.updateFunction(t);
            return !H(n) && n.catch && n.then ? n : (this.Os.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.Os.reject(t), null;
        }
    }
    cl(t) {
        this.rl > 0 && this.hl(t) ? (this.rl -= 1, this.Ns.Ms((() => (this.ol(), Promise.resolve())))) : this.Os.reject(t);
    }
    hl(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            const n = t.code;
            return "aborted" === n || "failed-precondition" === n || !ht(n);
        }
        return !1;
    }
}

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
 * FirestoreClient is a top-level class that constructs and owns all of the
 * pieces of the client SDK architecture. It is responsible for creating the
 * async queue that is shared by all of the other components in the system.
 */
class mu {
    constructor(t, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    n, e) {
        this.credentials = t, this.Ns = n, this.th = e, this.user = A.UNAUTHENTICATED, this.clientId = $.g(), 
        this.al = () => {}, this.I = new _s, this.credentials.m((t => {
            P("FirestoreClient", "Received user=", t.uid), this.user.isEqual(t) || (this.user = t, 
            this.al(t)), this.I.resolve();
        }));
    }
    async getConfiguration() {
        return await this.I.promise, {
            Ns: this.Ns,
            th: this.th,
            clientId: this.clientId,
            credentials: this.credentials,
            Ah: this.user,
            pu: 100
        };
    }
    ll(t) {
        this.al = t, 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.I.promise.then((() => this.al(this.user)));
    }
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */    pa() {
        if (this.Ns.Hs) throw new S(C.FAILED_PRECONDITION, "The client has already been terminated.");
    }
    terminate() {
        this.Ns.Zs();
        const t = new _s;
        return this.Ns.Ys((async () => {
            try {
                this._l && await this._l.terminate(), this.fl && await this.fl.terminate(), 
                // `removeChangeListener` must be called after shutting down the
                // RemoteStore as it will prevent the RemoteStore from retrieving
                // auth tokens.
                this.credentials.T(), t.resolve();
            } catch (n) {
                const e = ys(n, "Failed to shutdown persistence");
                t.reject(e);
            }
        })), t.promise;
    }
}

async function Tu(t, n) {
    t.Ns.si();
    const e = await Au(t);
    P("FirestoreClient", "Initializing OnlineComponentProvider");
    const s = await t.getConfiguration();
    await n.initialize(e, s), 
    // The CredentialChangeListener of the online component provider takes
    // precedence over the offline component provider.
    t.ll((e => t.Ns.ti((() => async function(t, n) {
        const e = b(t);
        e.Ns.si(), P("RemoteStore", "RemoteStore received new credentials");
        const s = Zs(e);
        // Tear down and re-create our network streams. This will ensure we get a
        // fresh auth token for the new user and re-fill the write pipeline with
        // new mutations from the LocalStore (since mutations are per-user).
                e.Zr.add(3 /* CredentialChange */), await Gs(e), s && 
        // Don't set the network status to Unknown if we are offline.
        e.io.set("Unknown" /* Unknown */), await e.Yr.ph(n), e.Zr.delete(3 /* CredentialChange */), 
        await Ws(e);
    }(n.Pu, e))))), t._l = n;
}

async function Au(t) {
    return t.fl || (P("FirestoreClient", "Using default OfflineComponentProvider"), 
    await async function(t, n) {
        t.Ns.si(), P("FirestoreClient", "Initializing OfflineComponentProvider");
        const e = await t.getConfiguration();
        await n.initialize(e), t.ll((e => t.Ns.ti((async () => {
            await Ds(n.zr, e);
        })))), 
        // When a user calls clearPersistence() in one client, all other clients
        // need to be terminated to allow the delete to succeed.
        n.persistence.xc((() => t.terminate())), t.fl = n;
    }(t, new fr)), t.fl;
}

async function Iu(t) {
    return t._l || (P("FirestoreClient", "Using default OnlineComponentProvider"), await Tu(t, new dr)), 
    t._l;
}

function Ru(t) {
    return Au(t).then((t => t.persistence));
}

function Pu(t) {
    return Au(t).then((t => t.zr));
}

function yu(t) {
    return Iu(t).then((t => t.Pu));
}

function Vu(t) {
    return Iu(t).then((t => t.yh));
}

async function pu(t) {
    const n = await Iu(t), e = n.yu;
    return e.wo = Oi.bind(null, n.yh), e.To = Li.bind(null, n.yh), e;
}

function gu(t, n, e = {}) {
    const s = new _s;
    return t.Ns.Ms((async () => function(t, n, e, s, i) {
        const r = new wr({
            next: r => {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                n.Ms((() => Ii(t, o)));
                const u = r.docs.has(e);
                !u && r.fromCache ? 
                // TODO(dimond): If we're online and the document doesn't
                // exist then we resolve with a doc.exists set to false. If
                // we're offline however, we reject the Promise in this
                // case. Two options: 1) Cache the negative response from
                // the server so we can deliver that even when you're
                // offline 2) Actually reject the Promise in the online case
                // if the document doesn't exist.
                i.reject(new S(C.UNAVAILABLE, "Failed to get document because the client is offline.")) : u && r.fromCache && s && "server" === s.source ? i.reject(new S(C.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(r);
            },
            error: t => i.reject(t)
        }), o = new Vi(De(e.path), r, {
            includeMetadataChanges: !0,
            po: !0
        });
        return Ai(t, o);
    }(await pu(t), t.Ns, n, e, s))), s.promise;
}

function vu(t, n, e = {}) {
    const s = new _s;
    return t.Ns.Ms((async () => function(t, n, e, s, i) {
        const r = new wr({
            next: e => {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                n.Ms((() => Ii(t, o))), e.fromCache && "server" === s.source ? i.reject(new S(C.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(e);
            },
            error: t => i.reject(t)
        }), o = new Vi(e, r, {
            includeMetadataChanges: !0,
            po: !0
        });
        return Ai(t, o);
    }
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
    /**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */ (await pu(t), t.Ns, n, e, s))), s.promise;
}

class bu extends Lr {
    /** @hideconstructor */
    constructor(t, n) {
        super(t, n), this.ga = new Ps, this.Uh = "name" in t ? t.name : "[DEFAULT]";
    }
    Xh() {
        return this.Va || 
        // The client must be initialized to ensure that all subsequent API
        // usage throws an exception.
        uo(this), this.Va.terminate();
    }
}

class Cu extends xr {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...t) {
        super(new Mr(...t));
    }
    static documentId() {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new Cu(W.X().G());
    }
    isEqual(t) {
        return t instanceof xr && (t = t.Ch), t instanceof Mr && this.Ch.Zh.isEqual(t.Zh);
    }
}

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
class Su extends xr {
    static serverTimestamp() {
        const t = new vr("serverTimestamp");
        return t._methodName = "FieldValue.serverTimestamp", new Su(t);
    }
    static delete() {
        const t = new pr("deleteField");
        return t._methodName = "FieldValue.delete", new Su(t);
    }
    static arrayUnion(...t) {
        const n = 
        /**
 * Returns a special value that can be used with {@link setDoc} or {@link
 * updateDoc} that tells the server to union the given elements with any array
 * value that already exists on the server. Each specified element that doesn't
 * already exist in the array will be added to the end. If the field being
 * modified is not already an array it will be overwritten with an array
 * containing exactly the specified elements.
 *
 * @param elements - The elements to union into the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`.
 */
        function(...t) {
            // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.
            return new br("arrayUnion", t);
        }
        /**
 * Returns a special value that can be used with {@link (setDoc:1)} or {@link
 * updateDoc} that tells the server to remove the given elements from any
 * array value that already exists on the server. All instances of each element
 * specified will be removed from the array. If the field being modified is not
 * already an array it will be overwritten with an empty array.
 *
 * @param elements - The elements to remove from the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */ (...t);
        return n._methodName = "FieldValue.arrayUnion", new Su(n);
    }
    static arrayRemove(...t) {
        const n = function(...t) {
            // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.
            return new Cr("arrayRemove", t);
        }
        /**
 * Returns a special value that can be used with {@link setDoc} or {@link
 * updateDoc} that tells the server to increment the field's current value by
 * the given value.
 *
 * If either the operand or the current field value uses floating point
 * precision, all arithmetic follows IEEE 754 semantics. If both values are
 * integers, values outside of JavaScript's safe number range
 * (`Number.MIN_SAFE_INTEGER` to `Number.MAX_SAFE_INTEGER`) are also subject to
 * precision loss. Furthermore, once processed by the Firestore backend, all
 * integer operations are capped between -2^63 and 2^63-1.
 *
 * If the current field value is not of type `number`, or if the field does not
 * yet exist, the transformation sets the field to the given value.
 *
 * @param n - The value to increment by.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */ (...t);
        return n._methodName = "FieldValue.arrayRemove", new Su(n);
    }
    static increment(t) {
        const n = function(t) {
            return new Sr("increment", t);
        }(t);
        return n._methodName = "FieldValue.increment", new Su(n);
    }
    isEqual(t) {
        return this.Ch.isEqual(t.Ch);
    }
}

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
 */ const Du = {
    Firestore: ro,
    GeoPoint: Dr,
    Timestamp: U,
    Blob: kr,
    Transaction: co,
    WriteBatch: ho,
    DocumentReference: ao,
    DocumentSnapshot: Eo,
    Query: To,
    QueryDocumentSnapshot: mo,
    QuerySnapshot: Io,
    CollectionReference: Ro,
    FieldPath: Cu,
    FieldValue: Su,
    setLogLevel: function(t) {
        var n;
        n = t, I.setLogLevel(n);
    },
    CACHE_SIZE_UNLIMITED: -1
};

/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase - The FirebaseNamespace to register Firestore with
 * @param firestoreFactory - A factory function that returns a new Firestore
 *    instance.
 */
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
/**
 * Registers the memory-only Firestore build for ReactNative with the components
 * framework.
 */
function Nu(t) {
    !function(t, n) {
        t.INTERNAL.registerComponent(new T("firestore", (t => {
            const e = t.getProvider("app").getImmediate();
            return n(e, t.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, Du)));
    }(t, ((t, n) => new ro(t, new bu(t, n), new io))), t.registerVersion("@firebase/firestore", "2.0.5", "rn");
}

Nu(t);

export { Nu as __PRIVATE_registerFirestore };
//# sourceMappingURL=index.memory.rn.esm2017.js.map
