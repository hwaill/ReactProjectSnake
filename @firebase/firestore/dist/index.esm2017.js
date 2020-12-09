import t from "@firebase/app";

import { Logger as e, LogLevel as n } from "@firebase/logger";

import { getUA as s, isMobileCordova as i, isReactNative as r, isElectron as o, isIE as c, isUWP as u, isBrowserExtension as a } from "@firebase/util";

import { XhrIo as h, EventType as l, ErrorCode as _, createWebChannelTransport as f, getStatEventTarget as d, WebChannel as w, Event as E, Stat as T } from "@firebase/webchannel-wrapper";

import { Component as I } from "@firebase/component";

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
 */ class m {
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
    constructor(t, e, n, s, i, r) {
        this.t = t, this.persistenceKey = e, this.host = n, this.ssl = s, this.forceLongPolling = i, 
        this.i = r;
    }
}

/** The default database name for a project. */
/** Represents the database ID a Firestore client is associated with. */
class A {
    constructor(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    get o() {
        return "(default)" === this.database;
    }
    isEqual(t) {
        return t instanceof A && t.projectId === this.projectId && t.database === this.database;
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
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */ class R {
    constructor(t) {
        this.uid = t;
    }
    u() {
        return null != this.uid;
    }
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */    h() {
        return this.u() ? "uid:" + this.uid : "anonymous-user";
    }
    isEqual(t) {
        return t.uid === this.uid;
    }
}

/** A user with a null UID. */ R.UNAUTHENTICATED = new R(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
R.l = new R("google-credentials-uid"), R._ = new R("first-party-uid");

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
const P = new e("@firebase/firestore");

// Helper methods are needed because variables can't be exported as read/write
function g() {
    return P.logLevel;
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
 */ function y(t, ...e) {
    if (P.logLevel <= n.DEBUG) {
        const n = e.map(v);
        P.debug("Firestore (8.1.2): " + t, ...n);
    }
}

function V(t, ...e) {
    if (P.logLevel <= n.ERROR) {
        const n = e.map(v);
        P.error("Firestore (8.1.2): " + t, ...n);
    }
}

function p(t, ...e) {
    if (P.logLevel <= n.WARN) {
        const n = e.map(v);
        P.warn("Firestore (8.1.2): " + t, ...n);
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function v(t) {
    if ("string" == typeof t) return t;
    try {
        return e = t, JSON.stringify(e);
    } catch (e) {
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
    var e;
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
 */ function b(t = "Unexpected state") {
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
    const e = "FIRESTORE (8.1.2) INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
    throw V(e), new Error(e);
}

/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */ function S(t, e) {
    t || b();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function D(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
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

/** An error returned by a Firestore operation. */ class N extends Error {
    /** @hideconstructor */
    constructor(t, e) {
        super(e), this.code = t, this.message = e, this.name = "FirebaseError", 
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
 */ class x {
    constructor(t, e) {
        this.user = e, this.type = "OAuth", this.T = {}, 
        // Set the headers using Object Literal notation to avoid minification
        this.T.Authorization = "Bearer " + t;
    }
}

/** A CredentialsProvider that always yields an empty token. */ class F {
    constructor() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.I = null;
    }
    getToken() {
        return Promise.resolve(null);
    }
    m() {}
    A(t) {
        this.I = t, 
        // Fire with initial user.
        t(R.UNAUTHENTICATED);
    }
    R() {
        this.I = null;
    }
}

class O {
    constructor(t) {
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */
        this.P = null, 
        /** Tracks the current User. */
        this.currentUser = R.UNAUTHENTICATED, this.g = !1, 
        /**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */
        this.V = 0, 
        /** The listener registered with setChangeListener(). */
        this.I = null, this.forceRefresh = !1, this.P = () => {
            this.V++, this.currentUser = this.p(), this.g = !0, this.I && this.I(this.currentUser);
        }, this.V = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.P) : (
        // if auth is not available, invoke tokenListener once with null token
        this.P(null), t.get().then((t => {
            this.auth = t, this.P && 
            // tokenListener can be removed by removeChangeListener()
            this.auth.addAuthTokenListener(this.P);
        }), (() => {})));
    }
    getToken() {
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
        const t = this.V, e = this.forceRefresh;
        return this.forceRefresh = !1, this.auth ? this.auth.getToken(e).then((e => 
        // Cancel the request since the token changed while the request was
        // outstanding so the response is potentially for a previous user (which
        // user, we can't be sure).
        this.V !== t ? (y("FirebaseCredentialsProvider", "getToken aborted due to token change."), 
        this.getToken()) : e ? (S("string" == typeof e.accessToken), new x(e.accessToken, this.currentUser)) : null)) : Promise.resolve(null);
    }
    m() {
        this.forceRefresh = !0;
    }
    A(t) {
        this.I = t, 
        // Fire the initial event
        this.g && t(this.currentUser);
    }
    R() {
        this.auth && this.auth.removeAuthTokenListener(this.P), this.P = null, this.I = null;
    }
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    p() {
        const t = this.auth && this.auth.getUid();
        return S(null === t || "string" == typeof t), new R(t);
    }
}

/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */ class M {
    constructor(t, e) {
        this.v = t, this.S = e, this.type = "FirstParty", this.user = R._;
    }
    get T() {
        const t = {
            "X-Goog-AuthUser": this.S
        }, e = this.v.auth.getAuthHeaderValueForFirstParty([]);
        // Use array notation to prevent minification
                return e && (t.Authorization = e), t;
    }
}

/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */ class k {
    constructor(t, e) {
        this.v = t, this.S = e;
    }
    getToken() {
        return Promise.resolve(new M(this.v, this.S));
    }
    A(t) {
        // Fire with initial uid.
        t(R._);
    }
    R() {}
    m() {}
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
function $(t) {
    // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
    const e = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
    if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n); else 
    // Falls back to Math.random
    for (let e = 0; e < t; e++) n[e] = Math.floor(256 * Math.random());
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
 */ class L {
    static D() {
        // Alphanumeric characters
        const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length;
        // The largest byte value that is a multiple of `char.length`.
                let n = "";
        for (;n.length < 20; ) {
            const s = $(40);
            for (let i = 0; i < s.length; ++i) 
            // Only accept values that are [0, maxMultiple), this ensures they can
            // be evenly mapped to indices of `chars` via a modulo operation.
            n.length < 20 && s[i] < e && (n += t.charAt(s[i] % t.length));
        }
        return n;
    }
}

function B(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function q(t, e, n) {
    return t.length === e.length && t.every(((t, s) => n(t, e[s])));
}

/**
 * Returns the immediate lexicographically-following string. This is useful to
 * construct an inclusive range for indexeddb iterators.
 */ function U(t) {
    // Return the input string, with an additional NUL byte appended.
    return t + "\0";
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
class Q {
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
    constructor(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new N(C.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new N(C.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new N(C.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new N(C.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */    static now() {
        return Q.fromMillis(Date.now());
    }
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */    static fromDate(t) {
        return Q.fromMillis(t.getTime());
    }
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */    static fromMillis(t) {
        const e = Math.floor(t / 1e3);
        return new Q(e, 1e6 * (t - 1e3 * e));
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
    C(t) {
        return this.seconds === t.seconds ? B(this.nanoseconds, t.nanoseconds) : B(this.seconds, t.seconds);
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
 */ class K {
    constructor(t) {
        this.timestamp = t;
    }
    static N(t) {
        return new K(t);
    }
    static min() {
        return new K(new Q(0, 0));
    }
    F(t) {
        return this.timestamp.C(t.timestamp);
    }
    isEqual(t) {
        return this.timestamp.isEqual(t.timestamp);
    }
    /** Returns a number representation of the version for use in spec tests. */    O() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }
    toString() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }
    M() {
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
class W {
    constructor(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && b(), void 0 === n ? n = t.length - e : n > t.length - e && b(), 
        this.segments = t, this.offset = e, this.k = n;
    }
    get length() {
        return this.k;
    }
    isEqual(t) {
        return 0 === W.$(this, t);
    }
    child(t) {
        const e = this.segments.slice(this.offset, this.limit());
        return t instanceof W ? t.forEach((t => {
            e.push(t);
        })) : e.push(t), this.L(e);
    }
    /** The index of one past the last segment of the path. */    limit() {
        return this.offset + this.length;
    }
    B(t) {
        return t = void 0 === t ? 1 : t, this.L(this.segments, this.offset + t, this.length - t);
    }
    q() {
        return this.L(this.segments, this.offset, this.length - 1);
    }
    U() {
        return this.segments[this.offset];
    }
    K() {
        return this.get(this.length - 1);
    }
    get(t) {
        return this.segments[this.offset + t];
    }
    W() {
        return 0 === this.length;
    }
    j(t) {
        if (t.length < this.length) return !1;
        for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }
    G(t) {
        if (this.length + 1 !== t.length) return !1;
        for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }
    forEach(t) {
        for (let e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }
    H() {
        return this.segments.slice(this.offset, this.limit());
    }
    static $(t, e) {
        const n = Math.min(t.length, e.length);
        for (let s = 0; s < n; s++) {
            const n = t.get(s), i = e.get(s);
            if (n < i) return -1;
            if (n > i) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }
}

/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 */ class j extends W {
    L(t, e, n) {
        return new j(t, e, n);
    }
    J() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.H().join("/");
    }
    toString() {
        return this.J();
    }
    /**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */    static Y(...t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        const e = [];
        for (const n of t) {
            if (n.indexOf("//") >= 0) throw new N(C.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
            // Strip leading and traling slashed.
                        e.push(...n.split("/").filter((t => t.length > 0)));
        }
        return new j(e);
    }
    static X() {
        return new j([]);
    }
}

const G = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

/** A dot-separated path for navigating sub-objects within a document. */ class z extends W {
    L(t, e, n) {
        return new z(t, e, n);
    }
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */    static Z(t) {
        return G.test(t);
    }
    J() {
        return this.H().map((t => (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), z.Z(t) || (t = "`" + t + "`"), 
        t))).join(".");
    }
    toString() {
        return this.J();
    }
    /**
     * Returns true if this field references the key of a document.
     */    tt() {
        return 1 === this.length && "__name__" === this.get(0);
    }
    /**
     * The field designating the key of a document.
     */    static et() {
        return new z([ "__name__" ]);
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
     */    static nt(t) {
        const e = [];
        let n = "", s = 0;
        const i = () => {
            if (0 === n.length) throw new N(C.INVALID_ARGUMENT, `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
            e.push(n), n = "";
        };
        let r = !1;
        for (;s < t.length; ) {
            const e = t[s];
            if ("\\" === e) {
                if (s + 1 === t.length) throw new N(C.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                const e = t[s + 1];
                if ("\\" !== e && "." !== e && "`" !== e) throw new N(C.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                n += e, s += 2;
            } else "`" === e ? (r = !r, s++) : "." !== e || r ? (n += e, s++) : (i(), s++);
        }
        if (i(), r) throw new N(C.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new z(e);
    }
    static X() {
        return new z([]);
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
 */ class H {
    constructor(t) {
        this.path = t;
    }
    static st(t) {
        return new H(j.Y(t));
    }
    static it(t) {
        return new H(j.Y(t).B(5));
    }
    /** Returns true if the document is in the specified collectionId. */    rt(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }
    isEqual(t) {
        return null !== t && 0 === j.$(this.path, t.path);
    }
    toString() {
        return this.path.toString();
    }
    static $(t, e) {
        return j.$(t.path, e.path);
    }
    static ot(t) {
        return t.length % 2 == 0;
    }
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */    static ct(t) {
        return new H(new j(t.slice()));
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
 */ function J(t) {
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
 */ function X(t) {
    return "number" == typeof t && Number.isInteger(t) && !Y(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
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
// Visible for testing
class Z {
    constructor(t, e = null, n = [], s = [], i = null, r = null, o = null) {
        this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = s, this.limit = i, 
        this.startAt = r, this.endAt = o, this.ut = null;
    }
}

/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */ function tt(t, e = null, n = [], s = [], i = null, r = null, o = null) {
    return new Z(t, e, n, s, i, r, o);
}

function et(t) {
    const e = D(t);
    if (null === e.ut) {
        let t = e.path.J();
        null !== e.collectionGroup && (t += "|cg:" + e.collectionGroup), t += "|f:", t += e.filters.map((t => Jn(t))).join(","), 
        t += "|ob:", t += e.orderBy.map((t => function(t) {
            // TODO(b/29183165): Make this collision robust.
            return t.field.J() + t.dir;
        }(t))).join(","), J(e.limit) || (t += "|l:", t += e.limit), e.startAt && (t += "|lb:", 
        t += os(e.startAt)), e.endAt && (t += "|ub:", t += os(e.endAt)), e.ut = t;
    }
    return e.ut;
}

function nt(t) {
    let e = t.path.J();
    return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), 
    t.filters.length > 0 && (e += `, filters: [${t.filters.map((t => {
        return `${(e = t).field.J()} ${e.op} ${Yt(e.value)}`;
        /** Returns a debug description for `filter`. */
        var e;
        /** Filter that matches on key fields (i.e. '__name__'). */    })).join(", ")}]`), 
    J(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += `, orderBy: [${t.orderBy.map((t => function(t) {
        return `${t.field.J()} (${t.dir})`;
    }(t))).join(", ")}]`), t.startAt && (e += ", startAt: " + os(t.startAt)), t.endAt && (e += ", endAt: " + os(t.endAt)), 
    `Target(${e})`;
}

function st(t, e) {
    if (t.limit !== e.limit) return !1;
    if (t.orderBy.length !== e.orderBy.length) return !1;
    for (let n = 0; n < t.orderBy.length; n++) if (!ls(t.orderBy[n], e.orderBy[n])) return !1;
    if (t.filters.length !== e.filters.length) return !1;
    for (let i = 0; i < t.filters.length; i++) if (n = t.filters[i], s = e.filters[i], 
    n.op !== s.op || !n.field.isEqual(s.field) || !Gt(n.value, s.value)) return !1;
    var n, s;
    return t.collectionGroup === e.collectionGroup && (!!t.path.isEqual(e.path) && (!!us(t.startAt, e.startAt) && us(t.endAt, e.endAt)));
}

function it(t) {
    return H.ot(t.path) && null === t.collectionGroup && 0 === t.filters.length;
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
/** Converts a Base64 encoded string to a binary string. */
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
class rt {
    constructor(t) {
        this.at = t;
    }
    static fromBase64String(t) {
        const e = atob(t);
        return new rt(e);
    }
    static fromUint8Array(t) {
        const e = 
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            let e = "";
            for (let n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }
        /**
 * Helper function to convert a binary string to an Uint8Array.
 */ (t);
        return new rt(e);
    }
    toBase64() {
        return t = this.at, btoa(t);
        /** Converts a binary string to a Base64 encoded string. */
        var t;
        /** True if and only if the Base64 conversion functions are available. */    }
    toUint8Array() {
        return function(t) {
            const e = new Uint8Array(t.length);
            for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
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
 */
        /**
 * An immutable set of metadata that the local store tracks for each target.
 */ (this.at);
    }
    ht() {
        return 2 * this.at.length;
    }
    F(t) {
        return B(this.at, t.at);
    }
    isEqual(t) {
        return this.at === t.at;
    }
}

rt.lt = new rt("");

class ot {
    constructor(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    s, 
    /** The latest snapshot version seen for this target. */
    i = K.min()
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , r = K.min()
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , o = rt.lt) {
        this.target = t, this.targetId = e, this._t = n, this.sequenceNumber = s, this.ft = i, 
        this.lastLimboFreeSnapshotVersion = r, this.resumeToken = o;
    }
    /** Creates a new target data instance with an updated sequence number. */    dt(t) {
        return new ot(this.target, this.targetId, this._t, t, this.ft, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */    wt(t, e) {
        return new ot(this.target, this.targetId, this._t, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t);
    }
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */    Et(t) {
        return new ot(this.target, this.targetId, this._t, this.sequenceNumber, this.ft, t, this.resumeToken);
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
 */ class ct {
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
 */ var ut, at;

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function ht(t) {
    switch (t) {
      case C.OK:
        return b();

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
        return b();
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
function lt(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return V("GRPC error has no .code"), C.UNKNOWN;
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
        return b();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (at = ut || (ut = {}))[at.OK = 0] = "OK", at[at.CANCELLED = 1] = "CANCELLED", 
at[at.UNKNOWN = 2] = "UNKNOWN", at[at.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
at[at.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", at[at.NOT_FOUND = 5] = "NOT_FOUND", 
at[at.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", at[at.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
at[at.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", at[at.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
at[at.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", at[at.ABORTED = 10] = "ABORTED", 
at[at.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", at[at.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
at[at.INTERNAL = 13] = "INTERNAL", at[at.UNAVAILABLE = 14] = "UNAVAILABLE", at[at.DATA_LOSS = 15] = "DATA_LOSS";

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
class _t {
    constructor(t, e) {
        this.$ = t, this.root = e || dt.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
    Tt(t, e) {
        return new _t(this.$, this.root.Tt(t, e, this.$).copy(null, null, dt.It, null, null));
    }
    // Returns a copy of the map, with the specified key removed.
    remove(t) {
        return new _t(this.$, this.root.remove(t, this.$).copy(null, null, dt.It, null, null));
    }
    // Returns the value of the node with the given key, or null.
    get(t) {
        let e = this.root;
        for (;!e.W(); ) {
            const n = this.$(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    indexOf(t) {
        // Number of nodes that were pruned when descending right
        let e = 0, n = this.root;
        for (;!n.W(); ) {
            const s = this.$(t, n.key);
            if (0 === s) return e + n.left.size;
            s < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }
    W() {
        return this.root.W();
    }
    // Returns the total number of nodes in the map.
    get size() {
        return this.root.size;
    }
    // Returns the minimum key in the map.
    At() {
        return this.root.At();
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
        this.Pt(((e, n) => (t(e, n), !1)));
    }
    toString() {
        const t = [];
        return this.Pt(((e, n) => (t.push(`${e}:${n}`), !1))), `{${t.join(", ")}}`;
    }
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    gt(t) {
        return this.root.gt(t);
    }
    // Returns an iterator over the SortedMap.
    yt() {
        return new ft(this.root, null, this.$, !1);
    }
    Vt(t) {
        return new ft(this.root, t, this.$, !1);
    }
    vt() {
        return new ft(this.root, null, this.$, !0);
    }
    bt(t) {
        return new ft(this.root, t, this.$, !0);
    }
}

 // end SortedMap
// An iterator over an LLRBNode.
class ft {
    constructor(t, e, n, s) {
        this.St = s, this.Dt = [];
        let i = 1;
        for (;!t.W(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        s && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this.St ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.Dt.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
            this.Dt.push(t), t = this.St ? t.right : t.left;
        }
    }
    Ct() {
        let t = this.Dt.pop();
        const e = {
            key: t.key,
            value: t.value
        };
        if (this.St) for (t = t.left; !t.W(); ) this.Dt.push(t), t = t.right; else for (t = t.right; !t.W(); ) this.Dt.push(t), 
        t = t.left;
        return e;
    }
    Nt() {
        return this.Dt.length > 0;
    }
    xt() {
        if (0 === this.Dt.length) return null;
        const t = this.Dt[this.Dt.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }
}

 // end SortedMapIterator
// Represents a node in a Left-leaning Red-Black tree.
class dt {
    constructor(t, e, n, s, i) {
        this.key = t, this.value = e, this.color = null != n ? n : dt.RED, this.left = null != s ? s : dt.EMPTY, 
        this.right = null != i ? i : dt.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
    copy(t, e, n, s, i) {
        return new dt(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != s ? s : this.left, null != i ? i : this.right);
    }
    W() {
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
    gt(t) {
        return this.right.gt(t) || t(this.key, this.value) || this.left.gt(t);
    }
    // Returns the minimum node in the tree.
    min() {
        return this.left.W() ? this : this.left.min();
    }
    // Returns the maximum key in the tree.
    At() {
        return this.min().key;
    }
    // Returns the maximum key in the tree.
    Rt() {
        return this.right.W() ? this.key : this.right.Rt();
    }
    // Returns new tree, with the key/value added.
    Tt(t, e, n) {
        let s = this;
        const i = n(t, s.key);
        return s = i < 0 ? s.copy(null, null, null, s.left.Tt(t, e, n), null) : 0 === i ? s.copy(null, e, null, null, null) : s.copy(null, null, null, null, s.right.Tt(t, e, n)), 
        s.Ft();
    }
    Ot() {
        if (this.left.W()) return dt.EMPTY;
        let t = this;
        return t.left.Mt() || t.left.left.Mt() || (t = t.kt()), t = t.copy(null, null, null, t.left.Ot(), null), 
        t.Ft();
    }
    // Returns new tree, with the specified item removed.
    remove(t, e) {
        let n, s = this;
        if (e(t, s.key) < 0) s.left.W() || s.left.Mt() || s.left.left.Mt() || (s = s.kt()), 
        s = s.copy(null, null, null, s.left.remove(t, e), null); else {
            if (s.left.Mt() && (s = s.$t()), s.right.W() || s.right.Mt() || s.right.left.Mt() || (s = s.Lt()), 
            0 === e(t, s.key)) {
                if (s.right.W()) return dt.EMPTY;
                n = s.right.min(), s = s.copy(n.key, n.value, null, null, s.right.Ot());
            }
            s = s.copy(null, null, null, null, s.right.remove(t, e));
        }
        return s.Ft();
    }
    Mt() {
        return this.color;
    }
    // Returns new tree after performing any needed rotations.
    Ft() {
        let t = this;
        return t.right.Mt() && !t.left.Mt() && (t = t.Bt()), t.left.Mt() && t.left.left.Mt() && (t = t.$t()), 
        t.left.Mt() && t.right.Mt() && (t = t.qt()), t;
    }
    kt() {
        let t = this.qt();
        return t.right.left.Mt() && (t = t.copy(null, null, null, null, t.right.$t()), t = t.Bt(), 
        t = t.qt()), t;
    }
    Lt() {
        let t = this.qt();
        return t.left.left.Mt() && (t = t.$t(), t = t.qt()), t;
    }
    Bt() {
        const t = this.copy(null, null, dt.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, t, null);
    }
    $t() {
        const t = this.copy(null, null, dt.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, t);
    }
    qt() {
        const t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
    }
    // For testing.
    Ut() {
        const t = this.Qt();
        return Math.pow(2, t) <= this.size + 1;
    }
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    Qt() {
        if (this.Mt() && this.left.Mt()) throw b();
        if (this.right.Mt()) throw b();
        const t = this.left.Qt();
        if (t !== this.right.Qt()) throw b();
        return t + (this.Mt() ? 0 : 1);
    }
}

 // end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
dt.EMPTY = null, dt.RED = !0, dt.It = !1;

// end LLRBEmptyNode
dt.EMPTY = new 
// Represents an empty node (a leaf node in the Red-Black Tree).
class {
    constructor() {
        this.size = 0;
    }
    get key() {
        throw b();
    }
    get value() {
        throw b();
    }
    get color() {
        throw b();
    }
    get left() {
        throw b();
    }
    get right() {
        throw b();
    }
    // Returns a copy of the current node.
    copy(t, e, n, s, i) {
        return this;
    }
    // Returns a copy of the tree, with the specified key/value added.
    Tt(t, e, n) {
        return new dt(t, e);
    }
    // Returns a copy of the tree, with the specified key removed.
    remove(t, e) {
        return this;
    }
    W() {
        return !0;
    }
    Pt(t) {
        return !1;
    }
    gt(t) {
        return !1;
    }
    At() {
        return null;
    }
    Rt() {
        return null;
    }
    Mt() {
        return !1;
    }
    // For testing.
    Ut() {
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
class wt {
    constructor(t) {
        this.$ = t, this.data = new _t(this.$);
    }
    has(t) {
        return null !== this.data.get(t);
    }
    first() {
        return this.data.At();
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
        this.data.Pt(((e, n) => (t(e), !1)));
    }
    /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */    Kt(t, e) {
        const n = this.data.Vt(t[0]);
        for (;n.Nt(); ) {
            const s = n.Ct();
            if (this.$(s.key, t[1]) >= 0) return;
            e(s.key);
        }
    }
    /**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */    Wt(t, e) {
        let n;
        for (n = void 0 !== e ? this.data.Vt(e) : this.data.yt(); n.Nt(); ) {
            if (!t(n.Ct().key)) return;
        }
    }
    /** Finds the least element greater than or equal to `elem`. */    jt(t) {
        const e = this.data.Vt(t);
        return e.Nt() ? e.Ct().key : null;
    }
    yt() {
        return new Et(this.data.yt());
    }
    Vt(t) {
        return new Et(this.data.Vt(t));
    }
    /** Inserts or updates an element */    add(t) {
        return this.copy(this.data.remove(t).Tt(t, !0));
    }
    /** Deletes an element */    delete(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }
    W() {
        return this.data.W();
    }
    Gt(t) {
        let e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((t => {
            e = e.add(t);
        })), e;
    }
    isEqual(t) {
        if (!(t instanceof wt)) return !1;
        if (this.size !== t.size) return !1;
        const e = this.data.yt(), n = t.data.yt();
        for (;e.Nt(); ) {
            const t = e.Ct().key, s = n.Ct().key;
            if (0 !== this.$(t, s)) return !1;
        }
        return !0;
    }
    H() {
        const t = [];
        return this.forEach((e => {
            t.push(e);
        })), t;
    }
    toString() {
        const t = [];
        return this.forEach((e => t.push(e))), "SortedSet(" + t.toString() + ")";
    }
    copy(t) {
        const e = new wt(this.$);
        return e.data = t, e;
    }
}

class Et {
    constructor(t) {
        this.zt = t;
    }
    Ct() {
        return this.zt.Ct().key;
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
 */ const Tt = new _t(H.$);

function It() {
    return Tt;
}

function mt() {
    return It();
}

const At = new _t(H.$);

function Rt() {
    return At;
}

const Pt = new _t(H.$);

const gt = new wt(H.$);

function yt(...t) {
    let e = gt;
    for (const n of t) e = e.add(n);
    return e;
}

const Vt = new wt(B);

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
 */ class vt {
    /** The default ordering is by key if the comparator is omitted */
    constructor(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.$ = t ? (e, n) => t(e, n) || H.$(e.key, n.key) : (t, e) => H.$(t.key, e.key), 
        this.Ht = Rt(), this.Jt = new _t(this.$);
    }
    /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */    static Yt(t) {
        return new vt(t.$);
    }
    has(t) {
        return null != this.Ht.get(t);
    }
    get(t) {
        return this.Ht.get(t);
    }
    first() {
        return this.Jt.At();
    }
    last() {
        return this.Jt.Rt();
    }
    W() {
        return this.Jt.W();
    }
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */    indexOf(t) {
        const e = this.Ht.get(t);
        return e ? this.Jt.indexOf(e) : -1;
    }
    get size() {
        return this.Jt.size;
    }
    /** Iterates documents in order defined by "comparator" */    forEach(t) {
        this.Jt.Pt(((e, n) => (t(e), !1)));
    }
    /** Inserts or updates a document with the same key */    add(t) {
        // First remove the element if we have it.
        const e = this.delete(t.key);
        return e.copy(e.Ht.Tt(t.key, t), e.Jt.Tt(t, null));
    }
    /** Deletes a document with a given key */    delete(t) {
        const e = this.get(t);
        return e ? this.copy(this.Ht.remove(t), this.Jt.remove(e)) : this;
    }
    isEqual(t) {
        if (!(t instanceof vt)) return !1;
        if (this.size !== t.size) return !1;
        const e = this.Jt.yt(), n = t.Jt.yt();
        for (;e.Nt(); ) {
            const t = e.Ct().key, s = n.Ct().key;
            if (!t.isEqual(s)) return !1;
        }
        return !0;
    }
    toString() {
        const t = [];
        return this.forEach((e => {
            t.push(e.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }
    copy(t, e) {
        const n = new vt;
        return n.$ = this.$, n.Ht = t, n.Jt = e, n;
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
 */ class bt {
    constructor() {
        this.Xt = new _t(H.$);
    }
    track(t) {
        const e = t.doc.key, n = this.Xt.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.Xt = this.Xt.Tt(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.Xt = this.Xt.Tt(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.Xt = this.Xt.Tt(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.Xt = this.Xt.Tt(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.Xt = this.Xt.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.Xt = this.Xt.Tt(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.Xt = this.Xt.Tt(e, {
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
        b() : this.Xt = this.Xt.Tt(e, t);
    }
    Zt() {
        const t = [];
        return this.Xt.Pt(((e, n) => {
            t.push(n);
        })), t;
    }
}

class St {
    constructor(t, e, n, s, i, r, o, c) {
        this.query = t, this.docs = e, this.te = n, this.docChanges = s, this.ee = i, this.fromCache = r, 
        this.ne = o, this.se = c;
    }
    /** Returns a view snapshot as if all documents in the snapshot were added. */    static ie(t, e, n, s) {
        const i = [];
        return e.forEach((t => {
            i.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new St(t, e, vt.Yt(e), i, n, s, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }
    get hasPendingWrites() {
        return !this.ee.W();
    }
    isEqual(t) {
        if (!(this.fromCache === t.fromCache && this.ne === t.ne && this.ee.isEqual(t.ee) && Kn(this.query, t.query) && this.docs.isEqual(t.docs) && this.te.isEqual(t.te))) return !1;
        const e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (let t = 0; t < e.length; t++) if (e[t].type !== n[t].type || !e[t].doc.isEqual(n[t].doc)) return !1;
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
 */ class Dt {
    constructor(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    s, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.ft = t, this.re = e, this.oe = n, this.ce = s, this.ue = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
    static ae(t, e) {
        const n = new Map;
        return n.set(t, Ct.he(t, e)), new Dt(K.min(), n, pt(), It(), yt());
    }
}

/**
 * A TargetChange specifies the set of changes for a specific target as part of
 * a RemoteEvent. These changes track which documents are added, modified or
 * removed, as well as the target's resume token and whether the target is
 * marked CURRENT.
 * The actual changes *to* documents are not part of the TargetChange since
 * documents may be part of multiple targets.
 */ class Ct {
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
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
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
        this.resumeToken = t, this.le = e, this._e = n, this.fe = s, this.de = i;
    }
    /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */    static he(t, e) {
        return new Ct(rt.lt, e, yt(), yt(), yt());
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
 */ class Nt {
    constructor(
    /** The new document applies to all of these targets. */
    t, 
    /** The new document is removed from all of these targets. */
    e, 
    /** The key of the document for this change. */
    n, 
    /**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
    s) {
        this.we = t, this.removedTargetIds = e, this.key = n, this.Ee = s;
    }
}

class xt {
    constructor(t, e) {
        this.targetId = t, this.Te = e;
    }
}

class Ft {
    constructor(
    /** What kind of change occurred to the watch target. */
    t, 
    /** The target IDs that were added/removed/set. */
    e, 
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
    n = rt.lt
    /** An RPC error indicating why the watch failed. */ , s = null) {
        this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = s;
    }
}

/** Tracks the internal state of a Watch target. */ class Ot {
    constructor() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.Ie = 0, 
        /**
         * Keeps track of the document changes since the last raised snapshot.
         *
         * These changes are continuously updated as we receive document updates and
         * always reflect the current set of changes against the last issued snapshot.
         */
        this.me = $t(), 
        /** See public getters for explanations of these fields. */
        this.Ae = rt.lt, this.Re = !1, 
        /**
         * Whether this target state should be included in the next snapshot. We
         * initialize to true so that newly-added targets are included in the next
         * RemoteEvent.
         */
        this.Pe = !0;
    }
    /**
     * Whether this target has been marked 'current'.
     *
     * 'Current' has special meaning in the RPC protocol: It implies that the
     * Watch backend has sent us all changes up to the point at which the target
     * was added and that the target is consistent with the rest of the watch
     * stream.
     */    get le() {
        return this.Re;
    }
    /** The last resume token sent to us for this target. */    get resumeToken() {
        return this.Ae;
    }
    /** Whether this target has pending target adds or target removes. */    get ge() {
        return 0 !== this.Ie;
    }
    /** Whether we have modified any state that should trigger a snapshot. */    get ye() {
        return this.Pe;
    }
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */    Ve(t) {
        t.ht() > 0 && (this.Pe = !0, this.Ae = t);
    }
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */    pe() {
        let t = yt(), e = yt(), n = yt();
        return this.me.forEach(((s, i) => {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(s);
                break;

              case 2 /* Modified */ :
                e = e.add(s);
                break;

              case 1 /* Removed */ :
                n = n.add(s);
                break;

              default:
                b();
            }
        })), new Ct(this.Ae, this.Re, t, e, n);
    }
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */    ve() {
        this.Pe = !1, this.me = $t();
    }
    be(t, e) {
        this.Pe = !0, this.me = this.me.Tt(t, e);
    }
    Se(t) {
        this.Pe = !0, this.me = this.me.remove(t);
    }
    De() {
        this.Ie += 1;
    }
    Ce() {
        this.Ie -= 1;
    }
    Ne() {
        this.Pe = !0, this.Re = !0;
    }
}

/**
 * A helper class to accumulate watch changes into a RemoteEvent.
 */
class Mt {
    constructor(t) {
        this.xe = t, 
        /** The internal state of all tracked targets. */
        this.Fe = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.Oe = It(), 
        /** A mapping of document keys to their set of target IDs. */
        this.Me = kt(), 
        /**
         * A list of targets with existence filter mismatches. These targets are
         * known to be inconsistent and their listens needs to be re-established by
         * RemoteStore.
         */
        this.ke = new wt(B);
    }
    /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */    $e(t) {
        for (const e of t.we) t.Ee instanceof Dn ? this.Le(e, t.Ee) : t.Ee instanceof Cn && this.Be(e, t.key, t.Ee);
        for (const e of t.removedTargetIds) this.Be(e, t.key, t.Ee);
    }
    /** Processes and adds the WatchTargetChange to the current set of changes. */    qe(t) {
        this.Ue(t, (e => {
            const n = this.Qe(e);
            switch (t.state) {
              case 0 /* NoChange */ :
                this.Ke(e) && n.Ve(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                n.Ce(), n.ge || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                n.ve(), n.Ve(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                n.Ce(), n.ge || this.removeTarget(e);
                break;

              case 3 /* Current */ :
                this.Ke(e) && (n.Ne(), n.Ve(t.resumeToken));
                break;

              case 4 /* Reset */ :
                this.Ke(e) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                this.We(e), n.Ve(t.resumeToken));
                break;

              default:
                b();
            }
        }));
    }
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */    Ue(t, e) {
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Fe.forEach(((t, n) => {
            this.Ke(n) && e(n);
        }));
    }
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */    je(t) {
        const e = t.targetId, n = t.Te.count, s = this.Ge(e);
        if (s) {
            const t = s.target;
            if (it(t)) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                const n = new H(t.path);
                this.Be(e, n, new Cn(n, K.min()));
            } else S(1 === n); else {
                this.ze(e) !== n && (
                // Existence filter mismatch: We reset the mapping and raise a new
                // snapshot with `isFromCache:true`.
                this.We(e), this.ke = this.ke.add(e));
            }
        }
    }
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */    He(t) {
        const e = new Map;
        this.Fe.forEach(((n, s) => {
            const i = this.Ge(s);
            if (i) {
                if (n.le && it(i.target)) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    const e = new H(i.target.path);
                    null !== this.Oe.get(e) || this.Je(s, e) || this.Be(s, e, new Cn(e, t));
                }
                n.ye && (e.set(s, n.pe()), n.ve());
            }
        }));
        let n = yt();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.Me.forEach(((t, e) => {
            let s = !0;
            e.Wt((t => {
                const e = this.Ge(t);
                return !e || 2 /* LimboResolution */ === e._t || (s = !1, !1);
            })), s && (n = n.add(t));
        }));
        const s = new Dt(t, e, this.ke, this.Oe, n);
        return this.Oe = It(), this.Me = kt(), this.ke = new wt(B), s;
    }
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    Le(t, e) {
        if (!this.Ke(t)) return;
        const n = this.Je(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
        this.Qe(t).be(e.key, n), this.Oe = this.Oe.Tt(e.key, e), this.Me = this.Me.Tt(e.key, this.Ye(e.key).add(t));
    }
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    Be(t, e, n) {
        if (!this.Ke(t)) return;
        const s = this.Qe(t);
        this.Je(t, e) ? s.be(e, 1 /* Removed */) : 
        // The document may have entered and left the target before we raised a
        // snapshot, so we can just ignore the change.
        s.Se(e), this.Me = this.Me.Tt(e, this.Ye(e).delete(t)), n && (this.Oe = this.Oe.Tt(e, n));
    }
    removeTarget(t) {
        this.Fe.delete(t);
    }
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */    ze(t) {
        const e = this.Qe(t).pe();
        return this.xe.Xe(t).size + e._e.size - e.de.size;
    }
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */    De(t) {
        this.Qe(t).De();
    }
    Qe(t) {
        let e = this.Fe.get(t);
        return e || (e = new Ot, this.Fe.set(t, e)), e;
    }
    Ye(t) {
        let e = this.Me.get(t);
        return e || (e = new wt(B), this.Me = this.Me.Tt(t, e)), e;
    }
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */    Ke(t) {
        const e = null !== this.Ge(t);
        return e || y("WatchChangeAggregator", "Detected inactive target", t), e;
    }
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */    Ge(t) {
        const e = this.Fe.get(t);
        return e && e.ge ? null : this.xe.Ze(t);
    }
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */    We(t) {
        this.Fe.set(t, new Ot);
        this.xe.Xe(t).forEach((e => {
            this.Be(t, e, /*updatedDocument=*/ null);
        }));
    }
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */    Je(t, e) {
        return this.xe.Xe(t).has(e);
    }
}

function kt() {
    return new _t(H.$);
}

function $t() {
    return new _t(H.$);
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
 */ function Lt(t) {
    let e = 0;
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function Bt(t, e) {
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function qt(t) {
    for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
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
 */ function Ut(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
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
function Qt(t) {
    const e = t.mapValue.fields.__previous_value__;
    return Ut(e) ? Qt(e) : e;
}

/**
 * Returns the local time at which this timestamp was first set.
 */ function Kt(t) {
    const e = Zt(t.mapValue.fields.__local_write_time__.timestampValue);
    return new Q(e.seconds, e.nanos);
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
const Wt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/** Extracts the backend's type order for the provided value. */ function jt(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? Ut(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : b();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function Gt(t, e) {
    const n = jt(t);
    if (n !== jt(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return Kt(t).isEqual(Kt(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            const n = Zt(t.timestampValue), s = Zt(e.timestampValue);
            return n.seconds === s.seconds && n.nanos === s.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return ee(t.bytesValue).isEqual(ee(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return te(t.geoPointValue.latitude) === te(e.geoPointValue.latitude) && te(t.geoPointValue.longitude) === te(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return te(t.integerValue) === te(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                const n = te(t.doubleValue), s = te(e.doubleValue);
                return n === s ? Y(n) === Y(s) : isNaN(n) && isNaN(s);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return q(t.arrayValue.values || [], e.arrayValue.values || [], Gt);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            const n = t.mapValue.fields || {}, s = e.mapValue.fields || {};
            if (Lt(n) !== Lt(s)) return !1;
            for (const t in n) if (n.hasOwnProperty(t) && (void 0 === s[t] || !Gt(n[t], s[t]))) return !1;
            return !0;
        }
        /** Returns true if the ArrayValue contains the specified element. */ (t, e);

      default:
        return b();
    }
}

function zt(t, e) {
    return void 0 !== (t.values || []).find((t => Gt(t, e)));
}

function Ht(t, e) {
    const n = jt(t), s = jt(e);
    if (n !== s) return B(n, s);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return B(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            const n = te(t.integerValue || t.doubleValue), s = te(e.integerValue || e.doubleValue);
            return n < s ? -1 : n > s ? 1 : n === s ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(s) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return Jt(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return Jt(Kt(t), Kt(e));

      case 5 /* StringValue */ :
        return B(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            const n = ee(t), s = ee(e);
            return n.F(s);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            const n = t.split("/"), s = e.split("/");
            for (let t = 0; t < n.length && t < s.length; t++) {
                const e = B(n[t], s[t]);
                if (0 !== e) return e;
            }
            return B(n.length, s.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            const n = B(te(t.latitude), te(e.latitude));
            if (0 !== n) return n;
            return B(te(t.longitude), te(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            const n = t.values || [], s = e.values || [];
            for (let t = 0; t < n.length && t < s.length; ++t) {
                const e = Ht(n[t], s[t]);
                if (e) return e;
            }
            return B(n.length, s.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            const n = t.fields || {}, s = Object.keys(n), i = e.fields || {}, r = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
            s.sort(), r.sort();
            for (let t = 0; t < s.length && t < r.length; ++t) {
                const e = B(s[t], r[t]);
                if (0 !== e) return e;
                const o = Ht(n[s[t]], i[r[t]]);
                if (0 !== o) return o;
            }
            return B(s.length, r.length);
        }
        /**
 * Generates the canonical ID for the provided field value (as used in Target
 * serialization).
 */ (t.mapValue, e.mapValue);

      default:
        throw b();
    }
}

function Jt(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return B(t, e);
    const n = Zt(t), s = Zt(e), i = B(n.seconds, s.seconds);
    return 0 !== i ? i : B(n.nanos, s.nanos);
}

function Yt(t) {
    return Xt(t);
}

function Xt(t) {
    return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(t) {
        const e = Zt(t);
        return `time(${e.seconds},${e.nanos})`;
    }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? ee(t.bytesValue).toBase64() : "referenceValue" in t ? (n = t.referenceValue, 
    H.it(n).toString()) : "geoPointValue" in t ? `geo(${(e = t.geoPointValue).latitude},${e.longitude})` : "arrayValue" in t ? function(t) {
        let e = "[", n = !0;
        for (const s of t.values || []) n ? n = !1 : e += ",", e += Xt(s);
        return e + "]";
    }
    /**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */ (t.arrayValue) : "mapValue" in t ? function(t) {
        // Iteration order in JavaScript is not guaranteed. To ensure that we generate
        // matching canonical IDs for identical maps, we need to sort the keys.
        const e = Object.keys(t.fields || {}).sort();
        let n = "{", s = !0;
        for (const i of e) s ? s = !1 : n += ",", n += `${i}:${Xt(t.fields[i])}`;
        return n + "}";
    }(t.mapValue) : b();
    var e, n;
}

function Zt(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (S(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        let e = 0;
        const n = Wt.exec(t);
        if (S(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            let t = n[1];
            t = (t + "000000000").substr(0, 9), e = Number(t);
        }
        // Parse the date to get the seconds.
                const s = new Date(t);
        return {
            seconds: Math.floor(s.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: te(t.seconds),
        nanos: te(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function te(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function ee(t) {
    return "string" == typeof t ? rt.fromBase64String(t) : rt.fromUint8Array(t);
}

/** Returns a reference value for the provided database and key. */ function ne(t, e) {
    return {
        referenceValue: `projects/${t.projectId}/databases/${t.database}/documents/${e.path.J()}`
    };
}

/** Returns true if `value` is an IntegerValue . */ function se(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */
function ie(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function re(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function oe(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function ce(t) {
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
 */ const ue = (() => {
    const t = {
        asc: "ASCENDING",
        desc: "DESCENDING"
    };
    return t;
})(), ae = (() => {
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
class he {
    constructor(t, e) {
        this.t = t, this.tn = e;
    }
}

/**
 * Returns an IntegerValue for `value`.
 */
function le(t) {
    return {
        integerValue: "" + t
    };
}

/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function _e(t, e) {
    if (t.tn) {
        if (isNaN(e)) return {
            doubleValue: "NaN"
        };
        if (e === 1 / 0) return {
            doubleValue: "Infinity"
        };
        if (e === -1 / 0) return {
            doubleValue: "-Infinity"
        };
    }
    return {
        doubleValue: Y(e) ? "-0" : e
    };
}

/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */ function fe(t, e) {
    return X(e) ? le(e) : _e(t, e);
}

/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */ function de(t, e) {
    if (t.tn) {
        return `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`;
    }
    return {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */
function we(t, e) {
    return t.tn ? e.toBase64() : e.toUint8Array();
}

/**
 * Returns a ByteString based on the proto string value.
 */ function Ee(t, e) {
    return de(t, e.M());
}

function Te(t) {
    return S(!!t), K.N(function(t) {
        const e = Zt(t);
        return new Q(e.seconds, e.nanos);
    }(t));
}

function Ie(t, e) {
    return function(t) {
        return new j([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(e).J();
}

function me(t) {
    const e = j.Y(t);
    return S(je(e)), e;
}

function Ae(t, e) {
    return Ie(t.t, e.path);
}

function Re(t, e) {
    const n = me(e);
    if (n.get(1) !== t.t.projectId) throw new N(C.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.t.projectId);
    if (n.get(3) !== t.t.database) throw new N(C.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.t.database);
    return new H(Ve(n));
}

function Pe(t, e) {
    return Ie(t.t, e);
}

function ge(t) {
    const e = me(t);
    // In v1beta1 queries for collections at the root did not have a trailing
    // "/documents". In v1 all resource paths contain "/documents". Preserve the
    // ability to read the v1beta1 form for compatibility with queries persisted
    // in the local target cache.
        return 4 === e.length ? j.X() : Ve(e);
}

function ye(t) {
    return new j([ "projects", t.t.projectId, "databases", t.t.database ]).J();
}

function Ve(t) {
    return S(t.length > 4 && "documents" === t.get(4)), t.B(5);
}

/** Creates a Document proto from key and fields (but no create/update time) */ function pe(t, e, n) {
    return {
        name: Ae(t, e),
        fields: n.proto.mapValue.fields
    };
}

function ve(t, e) {
    return "found" in e ? function(t, e) {
        S(!!e.found), e.found.name, e.found.updateTime;
        const n = Re(t, e.found.name), s = Te(e.found.updateTime), i = new pn({
            mapValue: {
                fields: e.found.fields
            }
        });
        return new Dn(n, s, i, {});
    }(t, e) : "missing" in e ? function(t, e) {
        S(!!e.missing), S(!!e.readTime);
        const n = Re(t, e.missing), s = Te(e.readTime);
        return new Cn(n, s);
    }(t, e) : b();
}

function be(t, e) {
    let n;
    if ("targetChange" in e) {
        e.targetChange;
        // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
        // if unset
        const s = function(t) {
            return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : b();
        }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], r = function(t, e) {
            return t.tn ? (S(void 0 === e || "string" == typeof e), rt.fromBase64String(e || "")) : (S(void 0 === e || e instanceof Uint8Array), 
            rt.fromUint8Array(e || new Uint8Array));
        }(t, e.targetChange.resumeToken), o = e.targetChange.cause, c = o && function(t) {
            const e = void 0 === t.code ? C.UNKNOWN : lt(t.code);
            return new N(e, t.message || "");
        }
        /**
 * Returns a value for a number (or null) that's appropriate to put into
 * a google.protobuf.Int32Value proto.
 * DO NOT USE THIS FOR ANYTHING ELSE.
 * This method cheats. It's typed as returning "number" because that's what
 * our generated proto interfaces say Int32Value must be. But GRPC actually
 * expects a { value: <number> } struct.
 */ (o);
        n = new Ft(s, i, r, c || null);
    } else if ("documentChange" in e) {
        e.documentChange;
        const s = e.documentChange;
        s.document, s.document.name, s.document.updateTime;
        const i = Re(t, s.document.name), r = Te(s.document.updateTime), o = new pn({
            mapValue: {
                fields: s.document.fields
            }
        }), c = new Dn(i, r, o, {}), u = s.targetIds || [], a = s.removedTargetIds || [];
        n = new Nt(u, a, c.key, c);
    } else if ("documentDelete" in e) {
        e.documentDelete;
        const s = e.documentDelete;
        s.document;
        const i = Re(t, s.document), r = s.readTime ? Te(s.readTime) : K.min(), o = new Cn(i, r), c = s.removedTargetIds || [];
        n = new Nt([], c, o.key, o);
    } else if ("documentRemove" in e) {
        e.documentRemove;
        const s = e.documentRemove;
        s.document;
        const i = Re(t, s.document), r = s.removedTargetIds || [];
        n = new Nt([], r, i, null);
    } else {
        if (!("filter" in e)) return b();
        {
            e.filter;
            const t = e.filter;
            t.targetId;
            const s = t.count || 0, i = new ct(s), r = t.targetId;
            n = new xt(r, i);
        }
    }
    return n;
}

function Se(t, e) {
    let n;
    if (e instanceof In) n = {
        update: pe(t, e.key, e.value)
    }; else if (e instanceof yn) n = {
        delete: Ae(t, e.key)
    }; else if (e instanceof mn) n = {
        update: pe(t, e.key, e.data),
        updateMask: We(e.en)
    }; else if (e instanceof Rn) n = {
        transform: {
            document: Ae(t, e.key),
            fieldTransforms: e.fieldTransforms.map((t => function(t, e) {
                const n = e.transform;
                if (n instanceof Ye) return {
                    fieldPath: e.field.J(),
                    setToServerValue: "REQUEST_TIME"
                };
                if (n instanceof Xe) return {
                    fieldPath: e.field.J(),
                    appendMissingElements: {
                        values: n.elements
                    }
                };
                if (n instanceof tn) return {
                    fieldPath: e.field.J(),
                    removeAllFromArray: {
                        values: n.elements
                    }
                };
                if (n instanceof nn) return {
                    fieldPath: e.field.J(),
                    increment: n.nn
                };
                throw b();
            }(0, t)))
        }
    }; else {
        if (!(e instanceof Vn)) return b();
        n = {
            verify: Ae(t, e.key)
        };
    }
    return e.rn.sn || (n.currentDocument = function(t, e) {
        return void 0 !== e.updateTime ? {
            updateTime: Ee(t, e.updateTime)
        } : void 0 !== e.exists ? {
            exists: e.exists
        } : b();
    }(t, e.rn)), n;
}

function De(t, e) {
    const n = e.currentDocument ? function(t) {
        return void 0 !== t.updateTime ? hn.updateTime(Te(t.updateTime)) : void 0 !== t.exists ? hn.exists(t.exists) : hn.on();
    }(e.currentDocument) : hn.on();
    if (e.update) {
        e.update.name;
        const s = Re(t, e.update.name), i = new pn({
            mapValue: {
                fields: e.update.fields
            }
        });
        if (e.updateMask) {
            const t = function(t) {
                const e = t.fieldPaths || [];
                return new on(e.map((t => z.nt(t))));
            }(e.updateMask);
            return new mn(s, i, t, n);
        }
        return new In(s, i, n);
    }
    if (e.delete) {
        const s = Re(t, e.delete);
        return new yn(s, n);
    }
    if (e.transform) {
        const s = Re(t, e.transform.document), i = e.transform.fieldTransforms.map((e => function(t, e) {
            let n = null;
            if ("setToServerValue" in e) S("REQUEST_TIME" === e.setToServerValue), n = new Ye; else if ("appendMissingElements" in e) {
                const t = e.appendMissingElements.values || [];
                n = new Xe(t);
            } else if ("removeAllFromArray" in e) {
                const t = e.removeAllFromArray.values || [];
                n = new tn(t);
            } else "increment" in e ? n = new nn(t, e.increment) : b();
            const s = z.nt(e.fieldPath);
            return new cn(s, n);
        }(t, e)));
        return S(!0 === n.exists), new Rn(s, i);
    }
    if (e.verify) {
        const s = Re(t, e.verify);
        return new Vn(s, n);
    }
    return b();
}

function Ce(t, e) {
    return t && t.length > 0 ? (S(void 0 !== e), t.map((t => function(t, e) {
        // NOTE: Deletes don't have an updateTime.
        let n = t.updateTime ? Te(t.updateTime) : Te(e);
        n.isEqual(K.min()) && (
        // The Firestore Emulator currently returns an update time of 0 for
        // deletes of non-existing documents (rather than null). This breaks the
        // test "get deleted doc while offline with source=cache" as NoDocuments
        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
        // TODO(#2149): Remove this when Emulator is fixed
        n = Te(e));
        let s = null;
        return t.transformResults && t.transformResults.length > 0 && (s = t.transformResults), 
        new an(n, s);
    }(t, e)))) : [];
}

function Ne(t, e) {
    return {
        documents: [ Pe(t, e.path) ]
    };
}

function xe(t, e) {
    // Dissect the path into parent, collectionId, and optional key filter.
    const n = {
        structuredQuery: {}
    }, s = e.path;
    null !== e.collectionGroup ? (n.parent = Pe(t, s), n.structuredQuery.from = [ {
        collectionId: e.collectionGroup,
        allDescendants: !0
    } ]) : (n.parent = Pe(t, s.q()), n.structuredQuery.from = [ {
        collectionId: s.K()
    } ]);
    const i = function(t) {
        if (0 === t.length) return;
        const e = t.map((t => 
        // visible for testing
        function(t) {
            if ("==" /* EQUAL */ === t.op) {
                if (oe(t.value)) return {
                    unaryFilter: {
                        field: qe(t.field),
                        op: "IS_NAN"
                    }
                };
                if (re(t.value)) return {
                    unaryFilter: {
                        field: qe(t.field),
                        op: "IS_NULL"
                    }
                };
            } else if ("!=" /* NOT_EQUAL */ === t.op) {
                if (oe(t.value)) return {
                    unaryFilter: {
                        field: qe(t.field),
                        op: "IS_NOT_NAN"
                    }
                };
                if (re(t.value)) return {
                    unaryFilter: {
                        field: qe(t.field),
                        op: "IS_NOT_NULL"
                    }
                };
            }
            return {
                fieldFilter: {
                    field: qe(t.field),
                    op: Be(t.op),
                    value: t.value
                }
            };
        }(t)));
        if (1 === e.length) return e[0];
        return {
            compositeFilter: {
                op: "AND",
                filters: e
            }
        };
    }(e.filters);
    i && (n.structuredQuery.where = i);
    const r = function(t) {
        if (0 === t.length) return;
        return t.map((t => 
        // visible for testing
        function(t) {
            return {
                field: qe(t.field),
                direction: Le(t.dir)
            };
        }(t)));
    }(e.orderBy);
    r && (n.structuredQuery.orderBy = r);
    const o = function(t, e) {
        return t.tn || J(e) ? e : {
            value: e
        };
    }
    /**
 * Returns a number (or null) from a google.protobuf.Int32Value proto.
 */ (t, e.limit);
    return null !== o && (n.structuredQuery.limit = o), e.startAt && (n.structuredQuery.startAt = ke(e.startAt)), 
    e.endAt && (n.structuredQuery.endAt = ke(e.endAt)), n;
}

function Fe(t) {
    let e = ge(t.parent);
    const n = t.structuredQuery, s = n.from ? n.from.length : 0;
    let i = null;
    if (s > 0) {
        S(1 === s);
        const t = n.from[0];
        t.allDescendants ? i = t.collectionId : e = e.child(t.collectionId);
    }
    let r = [];
    n.where && (r = Me(n.where));
    let o = [];
    n.orderBy && (o = n.orderBy.map((t => function(t) {
        return new as(Ue(t.field), 
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
    let c = null;
    n.limit && (c = function(t) {
        let e;
        return e = "object" == typeof t ? t.value : t, J(e) ? null : e;
    }(n.limit));
    let u = null;
    n.startAt && (u = $e(n.startAt));
    let a = null;
    return n.endAt && (a = $e(n.endAt)), Fn(e, i, o, r, c, "F" /* First */ , u, a);
}

function Oe(t, e) {
    const n = function(t, e) {
        switch (e) {
          case 0 /* Listen */ :
            return null;

          case 1 /* ExistenceFilterMismatch */ :
            return "existence-filter-mismatch";

          case 2 /* LimboResolution */ :
            return "limbo-document";

          default:
            return b();
        }
    }(0, e._t);
    return null == n ? null : {
        "goog-listen-tags": n
    };
}

function Me(t) {
    return t ? void 0 !== t.unaryFilter ? [ Ke(t) ] : void 0 !== t.fieldFilter ? [ Qe(t) ] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((t => Me(t))).reduce(((t, e) => t.concat(e))) : b() : [];
}

function ke(t) {
    return {
        before: t.before,
        values: t.position
    };
}

function $e(t) {
    const e = !!t.before, n = t.values || [];
    return new rs(n, e);
}

// visible for testing
function Le(t) {
    return ue[t];
}

function Be(t) {
    return ae[t];
}

function qe(t) {
    return {
        fieldPath: t.J()
    };
}

function Ue(t) {
    return z.nt(t.fieldPath);
}

function Qe(t) {
    return Hn.create(Ue(t.fieldFilter.field), function(t) {
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
            return b();
        }
    }(t.fieldFilter.op), t.fieldFilter.value);
}

function Ke(t) {
    switch (t.unaryFilter.op) {
      case "IS_NAN":
        const e = Ue(t.unaryFilter.field);
        return Hn.create(e, "==" /* EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NULL":
        const n = Ue(t.unaryFilter.field);
        return Hn.create(n, "==" /* EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "IS_NOT_NAN":
        const s = Ue(t.unaryFilter.field);
        return Hn.create(s, "!=" /* NOT_EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NOT_NULL":
        const i = Ue(t.unaryFilter.field);
        return Hn.create(i, "!=" /* NOT_EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "OPERATOR_UNSPECIFIED":
      default:
        return b();
    }
}

function We(t) {
    const e = [];
    return t.fields.forEach((t => e.push(t.J()))), {
        fieldPaths: e
    };
}

function je(t) {
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
/** Represents a transform within a TransformMutation. */ class Ge {
    constructor() {
        // Make sure that the structural type of `TransformOperation` is unique.
        // See https://github.com/microsoft/TypeScript/issues/5451
        this.cn = void 0;
    }
}

/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */ function ze(t, e, n) {
    return t instanceof Ye ? function(t, e) {
        const n = {
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
        return e && (n.fields.__previous_value__ = e), {
            mapValue: n
        };
    }(n, e) : t instanceof Xe ? Ze(t, e) : t instanceof tn ? en(t, e) : function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        const n = Je(t, e), s = sn(n) + sn(t.nn);
        return se(n) && se(t.nn) ? le(s) : _e(t.serializer, s);
    }(t, e);
}

/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */ function He(t, e, n) {
    // The server just sends null as the transform result for array operations,
    // so we have to calculate a result the same as we do for local
    // applications.
    return t instanceof Xe ? Ze(t, e) : t instanceof tn ? en(t, e) : n;
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
 */ function Je(t, e) {
    return t instanceof nn ? se(n = e) || function(t) {
        return !!t && "doubleValue" in t;
    }
    /** Returns true if `value` is either an IntegerValue or a DoubleValue. */ (n) ? e : {
        integerValue: 0
    } : null;
    var n;
}

/** Transforms a value into a server-generated timestamp. */
class Ye extends Ge {}

/** Transforms an array value via a union operation. */ class Xe extends Ge {
    constructor(t) {
        super(), this.elements = t;
    }
}

function Ze(t, e) {
    const n = rn(e);
    for (const e of t.elements) n.some((t => Gt(t, e))) || n.push(e);
    return {
        arrayValue: {
            values: n
        }
    };
}

/** Transforms an array value via a remove operation. */ class tn extends Ge {
    constructor(t) {
        super(), this.elements = t;
    }
}

function en(t, e) {
    let n = rn(e);
    for (const e of t.elements) n = n.filter((t => !Gt(t, e)));
    return {
        arrayValue: {
            values: n
        }
    };
}

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */ class nn extends Ge {
    constructor(t, e) {
        super(), this.serializer = t, this.nn = e;
    }
}

function sn(t) {
    return te(t.integerValue || t.doubleValue);
}

function rn(t) {
    return ie(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
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
 */ class on {
    constructor(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(z.$);
    }
    /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */    un(t) {
        for (const e of this.fields) if (e.j(t)) return !0;
        return !1;
    }
    isEqual(t) {
        return q(this.fields, t.fields, ((t, e) => t.isEqual(e)));
    }
}

/** A field path and the TransformOperation to perform upon it. */ class cn {
    constructor(t, e) {
        this.field = t, this.transform = e;
    }
}

function un(t, e) {
    return t.field.isEqual(e.field) && function(t, e) {
        return t instanceof Xe && e instanceof Xe || t instanceof tn && e instanceof tn ? q(t.elements, e.elements, Gt) : t instanceof nn && e instanceof nn ? Gt(t.nn, e.nn) : t instanceof Ye && e instanceof Ye;
    }(t.transform, e.transform);
}

/** The result of successfully applying a mutation to the backend. */ class an {
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
    e) {
        this.version = t, this.transformResults = e;
    }
}

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */ class hn {
    constructor(t, e) {
        this.updateTime = t, this.exists = e;
    }
    /** Creates a new empty Precondition. */    static on() {
        return new hn;
    }
    /** Creates a new Precondition with an exists flag. */    static exists(t) {
        return new hn(void 0, t);
    }
    /** Creates a new Precondition based on a version a document exists at. */    static updateTime(t) {
        return new hn(t);
    }
    /** Returns whether this Precondition is empty. */    get sn() {
        return void 0 === this.updateTime && void 0 === this.exists;
    }
    isEqual(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }
}

/**
 * Returns true if the preconditions is valid for the given document
 * (or null if no document is available).
 */ function ln(t, e) {
    return void 0 !== t.updateTime ? e instanceof Dn && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof Dn;
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
 */ class _n {}

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
 */ function fn(t, e, n) {
    return t instanceof In ? function(t, e, n) {
        // Unlike applySetMutationToLocalView, if we're applying a mutation to a
        // remote document the server has accepted the mutation so the precondition
        // must have held.
        return new Dn(t.key, n.version, t.value, {
            hasCommittedMutations: !0
        });
    }(t, 0, n) : t instanceof mn ? function(t, e, n) {
        if (!ln(t.rn, e)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new Nn(t.key, n.version);
        const s = An(t, e);
        return new Dn(t.key, n.version, s, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : t instanceof Rn ? function(t, e, n) {
        if (S(null != n.transformResults), !ln(t.rn, e)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new Nn(t.key, n.version);
        const s = Pn(t, e), i = 
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
        function(t, e, n) {
            const s = [];
            S(t.length === n.length);
            for (let i = 0; i < n.length; i++) {
                const r = t[i], o = r.transform;
                let c = null;
                e instanceof Dn && (c = e.field(r.field)), s.push(He(o, c, n[i]));
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
 */ (t.fieldTransforms, e, n.transformResults), r = n.version, o = gn(t, s.data(), i);
        return new Dn(t.key, r, o, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : function(t, e, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return new Cn(t.key, n.version, {
            hasCommittedMutations: !0
        });
    }(t, 0, n);
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
 */ function dn(t, e, n, s) {
    return t instanceof In ? function(t, e) {
        if (!ln(t.rn, e)) return e;
        const n = Tn(e);
        return new Dn(t.key, n, t.value, {
            an: !0
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
 */ (t, e) : t instanceof mn ? function(t, e) {
        if (!ln(t.rn, e)) return e;
        const n = Tn(e), s = An(t, e);
        return new Dn(t.key, n, s, {
            an: !0
        });
    }
    /**
 * Patches the data of document if available or creates a new document. Note
 * that this does not check whether or not the precondition of this patch
 * holds.
 */ (t, e) : t instanceof Rn ? function(t, e, n, s) {
        if (!ln(t.rn, e)) return e;
        const i = Pn(t, e), r = function(t, e, n, s) {
            const i = [];
            for (const r of t) {
                const t = r.transform;
                let o = null;
                n instanceof Dn && (o = n.field(r.field)), null === o && s instanceof Dn && (
                // If the current document does not contain a value for the mutated
                // field, use the value that existed before applying this mutation
                // batch. This solves an edge case where a PatchMutation clears the
                // values in a nested map before the TransformMutation is applied.
                o = s.field(r.field)), i.push(ze(t, o, e));
            }
            return i;
        }(t.fieldTransforms, n, e, s), o = gn(t, i.data(), r);
        return new Dn(t.key, i.version, o, {
            an: !0
        });
    }(t, e, s, n) : function(t, e) {
        if (!ln(t.rn, e)) return e;
        return new Cn(t.key, K.min());
    }
    /**
 * A mutation that verifies the existence of the document at the given key with
 * the provided precondition.
 *
 * The `verify` operation is only used in Transactions, and this class serves
 * primarily to facilitate serialization into protos.
 */ (t, e);
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
 */ function wn(t, e) {
    return t instanceof Rn ? function(t, e) {
        let n = null;
        for (const s of t.fieldTransforms) {
            const t = e instanceof Dn ? e.field(s.field) : void 0, i = Je(s.transform, t || null);
            null != i && (n = null == n ? (new vn).set(s.field, i) : n.set(s.field, i));
        }
        return n ? n.hn() : null;
    }
    /**
 * Asserts that the given MaybeDocument is actually a Document and verifies
 * that it matches the key for this mutation. Since we only support
 * transformations with precondition exists this method is guaranteed to be
 * safe.
 */ (t, e) : null;
}

function En(t, e) {
    return t.type === e.type && (!!t.key.isEqual(e.key) && (!!t.rn.isEqual(e.rn) && (0 /* Set */ === t.type ? t.value.isEqual(e.value) : 1 /* Patch */ === t.type ? t.data.isEqual(e.data) && t.en.isEqual(e.en) : 2 /* Transform */ !== t.type || q(t.fieldTransforms, t.fieldTransforms, ((t, e) => un(t, e))))));
}

/**
 * Returns the version from the given document for use as the result of a
 * mutation. Mutations are defined to return the version of the base document
 * only if it is an existing document. Deleted and unknown documents have a
 * post-mutation version of SnapshotVersion.min().
 */ function Tn(t) {
    return t instanceof Dn ? t.version : K.min();
}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ class In extends _n {
    constructor(t, e, n) {
        super(), this.key = t, this.value = e, this.rn = n, this.type = 0 /* Set */;
    }
}

class mn extends _n {
    constructor(t, e, n, s) {
        super(), this.key = t, this.data = e, this.en = n, this.rn = s, this.type = 1 /* Patch */;
    }
}

function An(t, e) {
    let n;
    return n = e instanceof Dn ? e.data() : pn.empty(), function(t, e) {
        const n = new vn(e);
        return t.en.fields.forEach((e => {
            if (!e.W()) {
                const s = t.data.field(e);
                null !== s ? n.set(e, s) : n.delete(e);
            }
        })), n.hn();
    }
    /**
 * A mutation that modifies specific fields of the document with transform
 * operations. Currently the only supported transform is a server timestamp, but
 * IP Address, increment(n), etc. could be supported in the future.
 *
 * It is somewhat similar to a PatchMutation in that it patches specific fields
 * and has no effect when applied to a null or NoDocument (see comment on
 * Mutation for rationale).
 */ (t, n);
}

class Rn extends _n {
    constructor(t, e) {
        super(), this.key = t, this.fieldTransforms = e, this.type = 2 /* Transform */ , 
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        this.rn = hn.exists(!0);
    }
}

function Pn(t, e) {
    return e;
}

function gn(t, e, n) {
    const s = new vn(e);
    for (let e = 0; e < t.fieldTransforms.length; e++) {
        const i = t.fieldTransforms[e];
        s.set(i.field, n[e]);
    }
    return s.hn();
}

/** A mutation that deletes the document at the given key. */ class yn extends _n {
    constructor(t, e) {
        super(), this.key = t, this.rn = e, this.type = 3 /* Delete */;
    }
}

class Vn extends _n {
    constructor(t, e) {
        super(), this.key = t, this.rn = e, this.type = 4 /* Verify */;
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
 */ class pn {
    constructor(t) {
        this.proto = t;
    }
    static empty() {
        return new pn({
            mapValue: {}
        });
    }
    /**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or if there it doesn't exist.
     */    field(t) {
        if (t.W()) return this.proto;
        {
            let e = this.proto;
            for (let n = 0; n < t.length - 1; ++n) {
                if (!e.mapValue.fields) return null;
                if (e = e.mapValue.fields[t.get(n)], !ce(e)) return null;
            }
            return e = (e.mapValue.fields || {})[t.K()], e || null;
        }
    }
    isEqual(t) {
        return Gt(this.proto, t.proto);
    }
}

/**
 * An ObjectValueBuilder provides APIs to set and delete fields from an
 * ObjectValue.
 */ class vn {
    /**
     * @param baseObject - The object to mutate.
     */
    constructor(t = pn.empty()) {
        this.ln = t, 
        /** A map that contains the accumulated changes in this builder. */
        this._n = new Map;
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     * @returns The current Builder instance.
     */    set(t, e) {
        return this.fn(t, e), this;
    }
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     * @returns The current Builder instance.
     */    delete(t) {
        return this.fn(t, null), this;
    }
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */    fn(t, e) {
        let n = this._n;
        for (let e = 0; e < t.length - 1; ++e) {
            const s = t.get(e);
            let i = n.get(s);
            i instanceof Map ? 
            // Re-use a previously created map
            n = i : i && 10 /* ObjectValue */ === jt(i) ? (
            // Convert the existing Protobuf MapValue into a map
            i = new Map(Object.entries(i.mapValue.fields || {})), n.set(s, i), n = i) : (
            // Create an empty map to represent the current nesting level
            i = new Map, n.set(s, i), n = i);
        }
        n.set(t.K(), e);
    }
    /** Returns an ObjectValue with all mutations applied. */    hn() {
        const t = this.dn(z.X(), this._n);
        return null != t ? new pn(t) : this.ln;
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
     */    dn(t, e) {
        let n = !1;
        const s = this.ln.field(t), i = ce(s) ? // If there is already data at the current path, base our
        Object.assign({}, s.mapValue.fields) : {};
        return e.forEach(((e, s) => {
            if (e instanceof Map) {
                const r = this.dn(t.child(s), e);
                null != r && (i[s] = r, n = !0);
            } else null !== e ? (i[s] = e, n = !0) : i.hasOwnProperty(s) && (delete i[s], n = !0);
        })), n ? {
            mapValue: {
                fields: i
            }
        } : null;
    }
}

/**
 * Returns a FieldMask built from all fields in a MapValue.
 */ function bn(t) {
    const e = [];
    return Bt(t.fields || {}, ((t, n) => {
        const s = new z([ t ]);
        if (ce(n)) {
            const t = bn(n.mapValue).fields;
            if (0 === t.length) 
            // Preserve the empty map by adding it to the FieldMask.
            e.push(s); else 
            // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (const n of t) e.push(s.child(n));
        } else 
        // For nested and non-empty ObjectValues, add the FieldPath of the leaf
        // nodes.
        e.push(s);
    })), new on(e);
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
 */ class Sn {
    constructor(t, e) {
        this.key = t, this.version = e;
    }
}

/**
 * Represents a document in Firestore with a key, version, data and whether the
 * data has local mutations applied to it.
 */ class Dn extends Sn {
    constructor(t, e, n, s) {
        super(t, e), this.wn = n, this.an = !!s.an, this.hasCommittedMutations = !!s.hasCommittedMutations;
    }
    field(t) {
        return this.wn.field(t);
    }
    data() {
        return this.wn;
    }
    En() {
        return this.wn.proto;
    }
    isEqual(t) {
        return t instanceof Dn && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.an === t.an && this.hasCommittedMutations === t.hasCommittedMutations && this.wn.isEqual(t.wn);
    }
    toString() {
        return `Document(${this.key}, ${this.version}, ${this.wn.toString()}, {hasLocalMutations: ${this.an}}), {hasCommittedMutations: ${this.hasCommittedMutations}})`;
    }
    get hasPendingWrites() {
        return this.an || this.hasCommittedMutations;
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
class Cn extends Sn {
    constructor(t, e, n) {
        super(t, e), this.hasCommittedMutations = !(!n || !n.hasCommittedMutations);
    }
    toString() {
        return `NoDocument(${this.key}, ${this.version})`;
    }
    get hasPendingWrites() {
        return this.hasCommittedMutations;
    }
    isEqual(t) {
        return t instanceof Cn && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }
}

/**
 * A class representing an existing document whose data is unknown (e.g. a
 * document that was updated without a known base document).
 */ class Nn extends Sn {
    toString() {
        return `UnknownDocument(${this.key}, ${this.version})`;
    }
    get hasPendingWrites() {
        return !0;
    }
    isEqual(t) {
        return t instanceof Nn && t.version.isEqual(this.version) && t.key.isEqual(this.key);
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
 */ class xn {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    constructor(t, e = null, n = [], s = [], i = null, r = "F" /* First */ , o = null, c = null) {
        this.path = t, this.collectionGroup = e, this.Tn = n, this.filters = s, this.limit = i, 
        this.limitType = r, this.startAt = o, this.endAt = c, this.In = null, 
        // The corresponding `Target` of this `Query` instance.
        this.mn = null, this.startAt, this.endAt;
    }
}

/** Creates a new Query instance with the options provided. */ function Fn(t, e, n, s, i, r, o, c) {
    return new xn(t, e, n, s, i, r, o, c);
}

/** Creates a new Query for a query that matches all documents at `path` */ function On(t) {
    return new xn(t);
}

/**
 * Helper to convert a collection group query into a collection query at a
 * specific path. This is used when executing collection group queries, since
 * we have to split the query into a set of collection queries at multiple
 * paths.
 */ function Mn(t) {
    return !J(t.limit) && "F" /* First */ === t.limitType;
}

function kn(t) {
    return !J(t.limit) && "L" /* Last */ === t.limitType;
}

function $n(t) {
    return t.Tn.length > 0 ? t.Tn[0].field : null;
}

function Ln(t) {
    for (const e of t.filters) if (e.An()) return e.field;
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
function Bn(t) {
    return null !== t.collectionGroup;
}

/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */ function qn(t) {
    const e = D(t);
    if (null === e.In) {
        e.In = [];
        const t = Ln(e), n = $n(e);
        if (null !== t && null === n) 
        // In order to implicitly add key ordering, we must also add the
        // inequality filter field for it to be a valid query.
        // Note that the default inequality field and key ordering is ascending.
        t.tt() || e.In.push(new as(t)), e.In.push(new as(z.et(), "asc" /* ASCENDING */)); else {
            let t = !1;
            for (const n of e.Tn) e.In.push(n), n.field.tt() && (t = !0);
            if (!t) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                const t = e.Tn.length > 0 ? e.Tn[e.Tn.length - 1].dir : "asc" /* ASCENDING */;
                e.In.push(new as(z.et(), t));
            }
        }
    }
    return e.In;
}

/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */ function Un(t) {
    const e = D(t);
    if (!e.mn) if ("F" /* First */ === e.limitType) e.mn = tt(e.path, e.collectionGroup, qn(e), e.filters, e.limit, e.startAt, e.endAt); else {
        // Flip the orderBy directions since we want the last results
        const t = [];
        for (const n of qn(e)) {
            const e = "desc" /* DESCENDING */ === n.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
            t.push(new as(n.field, e));
        }
        // We need to swap the cursors to match the now-flipped query ordering.
                const n = e.endAt ? new rs(e.endAt.position, !e.endAt.before) : null, s = e.startAt ? new rs(e.startAt.position, !e.startAt.before) : null;
        // Now return as a LimitType.First query.
        e.mn = tt(e.path, e.collectionGroup, t, e.filters, e.limit, n, s);
    }
    return e.mn;
}

function Qn(t, e, n) {
    return new xn(t.path, t.collectionGroup, t.Tn.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
}

function Kn(t, e) {
    return st(Un(t), Un(e)) && t.limitType === e.limitType;
}

// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function Wn(t) {
    return `${et(Un(t))}|lt:${t.limitType}`;
}

function jn(t) {
    return `Query(target=${nt(Un(t))}; limitType=${t.limitType})`;
}

/** Returns whether `doc` matches the constraints of `query`. */ function Gn(t, e) {
    return function(t, e) {
        const n = e.key.path;
        return null !== t.collectionGroup ? e.key.rt(t.collectionGroup) && t.path.j(n) : H.ot(t.path) ? t.path.isEqual(n) : t.path.G(n);
    }
    /**
 * A document must have a value for every ordering clause in order to show up
 * in the results.
 */ (t, e) && function(t, e) {
        for (const n of t.Tn) 
        // order by key always matches
        if (!n.field.tt() && null === e.field(n.field)) return !1;
        return !0;
    }(t, e) && function(t, e) {
        for (const n of t.filters) if (!n.matches(e)) return !1;
        return !0;
    }
    /** Makes sure a document is within the bounds, if provided. */ (t, e) && function(t, e) {
        if (t.startAt && !cs(t.startAt, qn(t), e)) return !1;
        if (t.endAt && cs(t.endAt, qn(t), e)) return !1;
        return !0;
    }
    /**
 * Returns a new comparator function that can be used to compare two documents
 * based on the Query's ordering constraint.
 */ (t, e);
}

function zn(t) {
    return (e, n) => {
        let s = !1;
        for (const i of qn(t)) {
            const t = hs(i, e, n);
            if (0 !== t) return t;
            s = s || i.field.tt();
        }
        return 0;
    };
}

class Hn extends class {} {
    constructor(t, e, n) {
        super(), this.field = t, this.op = e, this.value = n;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    static create(t, e, n) {
        return t.tt() ? "in" /* IN */ === e || "not-in" /* NOT_IN */ === e ? this.Rn(t, e, n) : new Yn(t, e, n) : "array-contains" /* ARRAY_CONTAINS */ === e ? new es(t, n) : "in" /* IN */ === e ? new ns(t, n) : "not-in" /* NOT_IN */ === e ? new ss(t, n) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e ? new is(t, n) : new Hn(t, e, n);
    }
    static Rn(t, e, n) {
        return "in" /* IN */ === e ? new Xn(t, n) : new Zn(t, n);
    }
    matches(t) {
        const e = t.field(this.field);
        // Types do not have to match in NOT_EQUAL filters.
                return "!=" /* NOT_EQUAL */ === this.op ? null !== e && this.Pn(Ht(e, this.value)) : null !== e && jt(this.value) === jt(e) && this.Pn(Ht(e, this.value));
        // Only compare types with matching backend order (such as double and int).
        }
    Pn(t) {
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
            return b();
        }
    }
    An() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ , "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ].indexOf(this.op) >= 0;
    }
}

function Jn(t) {
    // TODO(b/29183165): Technically, this won't be unique if two values have
    // the same description, such as the int 3 and the string "3". So we should
    // add the types in here somehow, too.
    return t.field.J() + t.op.toString() + Yt(t.value);
}

class Yn extends Hn {
    constructor(t, e, n) {
        super(t, e, n), this.key = H.it(n.referenceValue);
    }
    matches(t) {
        const e = H.$(t.key, this.key);
        return this.Pn(e);
    }
}

/** Filter that matches on key fields within an array. */ class Xn extends Hn {
    constructor(t, e) {
        super(t, "in" /* IN */ , e), this.keys = ts("in" /* IN */ , e);
    }
    matches(t) {
        return this.keys.some((e => e.isEqual(t.key)));
    }
}

/** Filter that matches on key fields not present within an array. */ class Zn extends Hn {
    constructor(t, e) {
        super(t, "not-in" /* NOT_IN */ , e), this.keys = ts("not-in" /* NOT_IN */ , e);
    }
    matches(t) {
        return !this.keys.some((e => e.isEqual(t.key)));
    }
}

function ts(t, e) {
    var n;
    return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((t => H.it(t.referenceValue)));
}

/** A Filter that implements the array-contains operator. */ class es extends Hn {
    constructor(t, e) {
        super(t, "array-contains" /* ARRAY_CONTAINS */ , e);
    }
    matches(t) {
        const e = t.field(this.field);
        return ie(e) && zt(e.arrayValue, this.value);
    }
}

/** A Filter that implements the IN operator. */ class ns extends Hn {
    constructor(t, e) {
        super(t, "in" /* IN */ , e);
    }
    matches(t) {
        const e = t.field(this.field);
        return null !== e && zt(this.value.arrayValue, e);
    }
}

/** A Filter that implements the not-in operator. */ class ss extends Hn {
    constructor(t, e) {
        super(t, "not-in" /* NOT_IN */ , e);
    }
    matches(t) {
        if (zt(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
        })) return !1;
        const e = t.field(this.field);
        return null !== e && !zt(this.value.arrayValue, e);
    }
}

/** A Filter that implements the array-contains-any operator. */ class is extends Hn {
    constructor(t, e) {
        super(t, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , e);
    }
    matches(t) {
        const e = t.field(this.field);
        return !(!ie(e) || !e.arrayValue.values) && e.arrayValue.values.some((t => zt(this.value.arrayValue, t)));
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
 */ class rs {
    constructor(t, e) {
        this.position = t, this.before = e;
    }
}

function os(t) {
    // TODO(b/29183165): Make this collision robust.
    return `${t.before ? "b" : "a"}:${t.position.map((t => Yt(t))).join(",")}`;
}

/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */ function cs(t, e, n) {
    let s = 0;
    for (let i = 0; i < t.position.length; i++) {
        const r = e[i], o = t.position[i];
        if (r.field.tt()) s = H.$(H.it(o.referenceValue), n.key); else {
            s = Ht(o, n.field(r.field));
        }
        if ("desc" /* DESCENDING */ === r.dir && (s *= -1), 0 !== s) break;
    }
    return t.before ? s <= 0 : s < 0;
}

function us(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.before !== e.before || t.position.length !== e.position.length) return !1;
    for (let n = 0; n < t.position.length; n++) {
        if (!Gt(t.position[n], e.position[n])) return !1;
    }
    return !0;
}

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ class as {
    constructor(t, e = "asc" /* ASCENDING */) {
        this.field = t, this.dir = e;
    }
}

function hs(t, e, n) {
    const s = t.field.tt() ? H.$(e.key, n.key) : function(t, e, n) {
        const s = e.field(t), i = n.field(t);
        return null !== s && null !== i ? Ht(s, i) : b();
    }(t.field, e, n);
    switch (t.dir) {
      case "asc" /* ASCENDING */ :
        return s;

      case "desc" /* DESCENDING */ :
        return -1 * s;

      default:
        return b();
    }
}

function ls(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
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
class _s {
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
    constructor(t, e, n, s) {
        this.batchId = t, this.gn = e, this.baseMutations = n, this.mutations = s;
    }
    /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey - The key of the document to apply mutations to.
     * @param maybeDoc - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */    yn(t, e, n) {
        const s = n.Vn;
        for (let n = 0; n < this.mutations.length; n++) {
            const i = this.mutations[n];
            if (i.key.isEqual(t)) {
                e = fn(i, e, s[n]);
            }
        }
        return e;
    }
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey - The key of the document to apply mutations to.
     * @param maybeDoc - The document to apply mutations to.
     */    pn(t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (const n of this.baseMutations) n.key.isEqual(t) && (e = dn(n, e, e, this.gn));
        const n = e;
        // Second, apply all user-provided mutations.
                for (const s of this.mutations) s.key.isEqual(t) && (e = dn(s, e, n, this.gn));
        return e;
    }
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */    vn(t) {
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
        let e = t;
        return this.mutations.forEach((n => {
            const s = this.pn(n.key, t.get(n.key));
            s && (e = e.Tt(n.key, s));
        })), e;
    }
    keys() {
        return this.mutations.reduce(((t, e) => t.add(e.key)), yt());
    }
    isEqual(t) {
        return this.batchId === t.batchId && q(this.mutations, t.mutations, ((t, e) => En(t, e))) && q(this.baseMutations, t.baseMutations, ((t, e) => En(t, e)));
    }
}

/** The result of applying a mutation batch to the backend. */ class fs {
    constructor(t, e, n, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    s) {
        this.batch = t, this.bn = e, this.Vn = n, this.Sn = s;
    }
    /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */    static from(t, e, n) {
        S(t.mutations.length === n.length);
        let s = Pt;
        const i = t.mutations;
        for (let t = 0; t < i.length; t++) s = s.Tt(i[t].key, n[t].version);
        return new fs(t, e, n, s);
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
 */ class ds {
    constructor(t, e) {
        this.Dn = t, this.Cn = e, 
        /**
         * The inner map for a key/value pair. Due to the possibility of collisions we
         * keep a list of entries that we do a linear search through to find an actual
         * match. Note that collisions should be rare, so we still expect near
         * constant time lookups in practice.
         */
        this.Nn = {};
    }
    /** Get a value for this key, or undefined if it does not exist. */    get(t) {
        const e = this.Dn(t), n = this.Nn[e];
        if (void 0 !== n) for (const [e, s] of n) if (this.Cn(e, t)) return s;
    }
    has(t) {
        return void 0 !== this.get(t);
    }
    /** Put this key and value in the map. */    set(t, e) {
        const n = this.Dn(t), s = this.Nn[n];
        if (void 0 !== s) {
            for (let n = 0; n < s.length; n++) if (this.Cn(s[n][0], t)) return void (s[n] = [ t, e ]);
            s.push([ t, e ]);
        } else this.Nn[n] = [ [ t, e ] ];
    }
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */    delete(t) {
        const e = this.Dn(t), n = this.Nn[e];
        if (void 0 === n) return !1;
        for (let s = 0; s < n.length; s++) if (this.Cn(n[s][0], t)) return 1 === n.length ? delete this.Nn[e] : n.splice(s, 1), 
        !0;
        return !1;
    }
    forEach(t) {
        Bt(this.Nn, ((e, n) => {
            for (const [e, s] of n) t(e, s);
        }));
    }
    W() {
        return qt(this.Nn);
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
 */ class ws {
    constructor(t) {
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
        this.xn = null, this.Fn = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.On = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.Mn = !1, t((t => {
            this.On = !0, this.result = t, this.xn && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            this.xn(t);
        }), (t => {
            this.On = !0, this.error = t, this.Fn && this.Fn(t);
        }));
    }
    catch(t) {
        return this.next(void 0, t);
    }
    next(t, e) {
        return this.Mn && b(), this.Mn = !0, this.On ? this.error ? this.kn(e, this.error) : this.$n(t, this.result) : new ws(((n, s) => {
            this.xn = e => {
                this.$n(t, e).next(n, s);
            }, this.Fn = t => {
                this.kn(e, t).next(n, s);
            };
        }));
    }
    Ln() {
        return new Promise(((t, e) => {
            this.next(t, e);
        }));
    }
    Bn(t) {
        try {
            const e = t();
            return e instanceof ws ? e : ws.resolve(e);
        } catch (t) {
            return ws.reject(t);
        }
    }
    $n(t, e) {
        return t ? this.Bn((() => t(e))) : ws.resolve(e);
    }
    kn(t, e) {
        return t ? this.Bn((() => t(e))) : ws.reject(e);
    }
    static resolve(t) {
        return new ws(((e, n) => {
            e(t);
        }));
    }
    static reject(t) {
        return new ws(((e, n) => {
            n(t);
        }));
    }
    static qn(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t) {
        return new ws(((e, n) => {
            let s = 0, i = 0, r = !1;
            t.forEach((t => {
                ++s, t.next((() => {
                    ++i, r && i === s && e();
                }), (t => n(t)));
            })), r = !0, i === s && e();
        }));
    }
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */    static Un(t) {
        let e = ws.resolve(!1);
        for (const n of t) e = e.next((t => t ? ws.resolve(t) : n()));
        return e;
    }
    static forEach(t, e) {
        const n = [];
        return t.forEach(((t, s) => {
            n.push(e.call(this, t, s));
        })), this.qn(n);
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
 */ class Es {
    constructor() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.Qn = new ds((t => t.toString()), ((t, e) => t.isEqual(e))), this.Kn = !1;
    }
    Wn(t) {
        const e = this.Qn.get(t);
        return e ? e.readTime : K.min();
    }
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */    jn(t, e) {
        this.Gn(), this.Qn.set(t.key, {
            zn: t,
            readTime: e
        });
    }
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */    Hn(t, e = null) {
        this.Gn(), this.Qn.set(t, {
            zn: null,
            readTime: e
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
     */    Jn(t, e) {
        this.Gn();
        const n = this.Qn.get(e);
        return void 0 !== n ? ws.resolve(n.zn) : this.Yn(t, e);
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
     */    getEntries(t, e) {
        return this.Xn(t, e);
    }
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */    apply(t) {
        return this.Gn(), this.Kn = !0, this.Zn(t);
    }
    /** Helper to assert this.changes is not null  */    Gn() {}
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
 */ class Ts {
    constructor() {
        this.promise = new Promise(((t, e) => {
            this.resolve = t, this.reject = e;
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
 */ function Is(t) {
    return new he(t, /* useProto3Json= */ !0);
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
 */ function ms(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        const n = t;
        for (const t of e) if (t in n && "function" == typeof n[t]) return !0;
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

const As = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";

/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */ class Rs {
    constructor() {
        this.ts = [];
    }
    es(t) {
        this.ts.push(t);
    }
    ns() {
        this.ts.forEach((t => t()));
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
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ class Ps {
    constructor(t, e, n) {
        this.ss = t, this.rs = e, this.os = n;
    }
    /**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */    cs(t, e) {
        return this.rs.us(t, e).next((n => this.hs(t, e, n)));
    }
    /** Internal version of `getDocument` that allows reusing batches. */    hs(t, e, n) {
        return this.ss.Jn(t, e).next((t => {
            for (const s of n) t = s.pn(e, t);
            return t;
        }));
    }
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    ls(t, e, n) {
        let s = mt();
        return e.forEach(((t, e) => {
            for (const s of n) e = s.pn(t, e);
            s = s.Tt(t, e);
        })), s;
    }
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */    _s(t, e) {
        return this.ss.getEntries(t, e).next((e => this.fs(t, e)));
    }
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */    fs(t, e) {
        return this.rs.ds(t, e).next((n => {
            const s = this.ls(t, e, n);
            let i = It();
            return s.forEach(((t, e) => {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                e || (e = new Cn(t, K.min())), i = i.Tt(t, e);
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
     */    ws(t, e, n) {
        /**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */
        return function(t) {
            return H.ot(t.path) && null === t.collectionGroup && 0 === t.filters.length;
        }(e) ? this.Es(t, e.path) : Bn(e) ? this.Ts(t, e, n) : this.Is(t, e, n);
    }
    Es(t, e) {
        // Just do a simple document lookup.
        return this.cs(t, new H(e)).next((t => {
            let e = Rt();
            return t instanceof Dn && (e = e.Tt(t.key, t)), e;
        }));
    }
    Ts(t, e, n) {
        const s = e.collectionGroup;
        let i = Rt();
        return this.os.As(t, s).next((r => ws.forEach(r, (r => {
            const o = function(t, e) {
                return new xn(e, 
                /*collectionGroup=*/ null, t.Tn.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
            }
            /**
 * Returns true if this query does not specify any query constraints that
 * could remove results.
 */ (e, r.child(s));
            return this.Is(t, o, n).next((t => {
                t.forEach(((t, e) => {
                    i = i.Tt(t, e);
                }));
            }));
        })).next((() => i))));
    }
    Is(t, e, n) {
        // Query the remote documents and overlay mutations.
        let s, i;
        return this.ss.ws(t, e, n).next((n => (s = n, this.rs.Rs(t, e)))).next((e => (i = e, 
        this.Ps(t, i, s).next((t => {
            s = t;
            for (const t of i) for (const e of t.mutations) {
                const n = e.key, i = s.get(n), r = dn(e, i, i, t.gn);
                s = r instanceof Dn ? s.Tt(n, r) : s.remove(n);
            }
        }))))).next((() => (
        // Finally, filter out any documents that don't actually match
        // the query.
        s.forEach(((t, n) => {
            Gn(e, n) || (s = s.remove(t));
        })), s)));
    }
    Ps(t, e, n) {
        let s = yt();
        for (const t of e) for (const e of t.mutations) e instanceof mn && null === n.get(e.key) && (s = s.add(e.key));
        let i = n;
        return this.ss.getEntries(t, s).next((t => (t.forEach(((t, e) => {
            null !== e && e instanceof Dn && (i = i.Tt(t, e));
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
 */ class gs {
    constructor(t, e, n, s) {
        this.targetId = t, this.fromCache = e, this.gs = n, this.ys = s;
    }
    static Vs(t, e) {
        let n = yt(), s = yt();
        for (const t of e.docChanges) switch (t.type) {
          case 0 /* Added */ :
            n = n.add(t.doc.key);
            break;

          case 1 /* Removed */ :
            s = s.add(t.doc.key);
 // do nothing
                }
        return new gs(t, e.fromCache, n, s);
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
 */ class ys {
    constructor(t, e) {
        this.previousValue = t, e && (e.ps = t => this.vs(t), this.bs = t => e.Ss(t));
    }
    vs(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }
    next() {
        const t = ++this.previousValue;
        return this.bs && this.bs(t), t;
    }
}

ys.Ds = -1;

/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
class Vs {
    constructor(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n = 1e3
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , s = 1.5
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i = 6e4) {
        this.Cs = t, this.Ns = e, this.xs = n, this.Fs = s, this.Os = i, this.Ms = 0, this.ks = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.$s = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    reset() {
        this.Ms = 0;
    }
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */    Ls() {
        this.Ms = this.Os;
    }
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */    Bs(t) {
        // Cancel any pending backoff operation.
        this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        const e = Math.floor(this.Ms + this.qs()), n = Math.max(0, Date.now() - this.$s), s = Math.max(0, e - n);
        // Guard against lastAttemptTime being in the future due to a clock change.
                s > 0 && y("ExponentialBackoff", `Backing off for ${s} ms (base delay: ${this.Ms} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`), 
        this.ks = this.Cs.Us(this.Ns, s, (() => (this.$s = Date.now(), t()))), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.Ms *= this.Fs, this.Ms < this.xs && (this.Ms = this.xs), this.Ms > this.Os && (this.Ms = this.Os);
    }
    Qs() {
        null !== this.ks && (this.ks.Ks(), this.ks = null);
    }
    cancel() {
        null !== this.ks && (this.ks.cancel(), this.ks = null);
    }
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */    qs() {
        return (Math.random() - .5) * this.Ms;
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
// References to `window` are guarded by SimpleDb.isAvailable()
/* eslint-disable no-restricted-globals */
/**
 * Provides a wrapper around IndexedDb with a simplified interface that uses
 * Promise-like return values to chain operations. Real promises cannot be used
 * since .then() continuations are executed asynchronously (e.g. via
 * .setImmediate), which would cause IndexedDB to end the transaction.
 * See PersistencePromise for more details.
 */
class ps {
    /*
     * Creates a new SimpleDb wrapper for IndexedDb database `name`.
     *
     * Note that `version` must not be a downgrade. IndexedDB does not support
     * downgrading the schema version. We currently do not support any way to do
     * versioning outside of IndexedDB's versioning mechanism, as only
     * version-upgrade transactions are allowed to do things like create
     * objectstores.
     */
    constructor(t, e, n) {
        this.name = t, this.version = e, this.Ws = n;
        // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
        // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
        // whatever reason it's much harder to hit after 12.2 so we only proactively
        // log on 12.2.
        12.2 === ps.js(s()) && V("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
    }
    /** Deletes the specified database. */    static delete(t) {
        return y("SimpleDb", "Removing database:", t), Ns(window.indexedDB.deleteDatabase(t)).Ln();
    }
    /** Returns true if IndexedDB is available in the current environment. */    static Gs() {
        if ("undefined" == typeof indexedDB) return !1;
        if (ps.zs()) return !0;
        // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.
                const t = s(), e = ps.js(t), n = 0 < e && e < 10, i = ps.Hs(t), r = 0 < i && i < 4.5;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // iOS Safari: Disable for users running iOS version < 10.
                return !(t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0 || n || r);
    }
    /**
     * Returns true if the backing IndexedDB store is the Node IndexedDBShim
     * (see https://github.com/axemclion/IndexedDBShim).
     */    static zs() {
        var t;
        return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.Js);
    }
    /** Helper to get a typed SimpleDbStore from a transaction. */    static Ys(t, e) {
        return t.store(e);
    }
    // visible for testing
    /** Parse User Agent to determine iOS version. Returns -1 if not found. */
    static js(t) {
        const e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(n);
    }
    // visible for testing
    /** Parse User Agent to determine Android version. Returns -1 if not found. */
    static Hs(t) {
        const e = t.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(n);
    }
    /**
     * Opens the specified database, creating or upgrading it if necessary.
     */    async Xs(t) {
        return this.db || (y("SimpleDb", "Opening database:", this.name), this.db = await new Promise(((e, n) => {
            // TODO(mikelehen): Investigate browser compatibility.
            // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
            // suggests IE9 and older WebKit browsers handle upgrade
            // differently. They expect setVersion, as described here:
            // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
            const s = indexedDB.open(this.name, this.version);
            s.onsuccess = t => {
                const n = t.target.result;
                e(n);
            }, s.onblocked = () => {
                n(new bs(t, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
            }, s.onerror = e => {
                const s = e.target.error;
                "VersionError" === s.name ? n(new N(C.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : n(new bs(t, s));
            }, s.onupgradeneeded = t => {
                y("SimpleDb", 'Database "' + this.name + '" requires upgrade from version:', t.oldVersion);
                const e = t.target.result;
                this.Ws.createOrUpgrade(e, s.transaction, t.oldVersion, this.version).next((() => {
                    y("SimpleDb", "Database upgrade to version " + this.version + " complete");
                }));
            };
        }))), this.Zs && (this.db.onversionchange = t => this.Zs(t)), this.db;
    }
    ti(t) {
        this.Zs = t, this.db && (this.db.onversionchange = e => t(e));
    }
    async runTransaction(t, e, n, s) {
        const i = "readonly" === e;
        let r = 0;
        for (;;) {
            ++r;
            try {
                this.db = await this.Xs(t);
                const e = Ds.open(this.db, t, i ? "readonly" : "readwrite", n), r = s(e).catch((t => (
                // Abort the transaction if there was an error.
                e.abort(t), ws.reject(t)))).Ln();
                // As noted above, errors are propagated by aborting the transaction. So
                // we swallow any error here to avoid the browser logging it as unhandled.
                return r.catch((() => {})), 
                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                // fire), but still return the original transactionFnResult back to the
                // caller.
                await e.ei, r;
            } catch (t) {
                // TODO(schmidt-sebastian): We could probably be smarter about this and
                // not retry exceptions that are likely unrecoverable (such as quota
                // exceeded errors).
                // Note: We cannot use an instanceof check for FirestoreException, since the
                // exception is wrapped in a generic error by our async/await handling.
                const e = "FirebaseError" !== t.name && r < 3;
                if (y("SimpleDb", "Transaction failed with error:", t.message, "Retrying:", e), 
                this.close(), !e) return Promise.reject(t);
            }
        }
    }
    close() {
        this.db && this.db.close(), this.db = void 0;
    }
}

/**
 * A controller for iterating over a key range or index. It allows an iterate
 * callback to delete the currently-referenced object, or jump to a new key
 * within the key range or index.
 */ class vs {
    constructor(t) {
        this.ni = t, this.si = !1, this.ii = null;
    }
    get On() {
        return this.si;
    }
    get ri() {
        return this.ii;
    }
    set cursor(t) {
        this.ni = t;
    }
    /**
     * This function can be called to stop iteration at any point.
     */    done() {
        this.si = !0;
    }
    /**
     * This function can be called to skip to that next key, which could be
     * an index or a primary key.
     */    oi(t) {
        this.ii = t;
    }
    /**
     * Delete the current cursor value from the object store.
     *
     * NOTE: You CANNOT do this with a keysOnly query.
     */    delete() {
        return Ns(this.ni.delete());
    }
}

/** An error that wraps exceptions that thrown during IndexedDB execution. */ class bs extends N {
    constructor(t, e) {
        super(C.UNAVAILABLE, `IndexedDB transaction '${t}' failed: ${e}`), this.name = "IndexedDbTransactionError";
    }
}

/** Verifies whether `e` is an IndexedDbTransactionError. */ function Ss(t) {
    // Use name equality, as instanceof checks on errors don't work with errors
    // that wrap other errors.
    return "IndexedDbTransactionError" === t.name;
}

/**
 * Wraps an IDBTransaction and exposes a store() method to get a handle to a
 * specific object store.
 */ class Ds {
    constructor(t, e) {
        this.action = t, this.transaction = e, this.aborted = !1, 
        /**
         * A promise that resolves with the result of the IndexedDb transaction.
         */
        this.ci = new Ts, this.transaction.oncomplete = () => {
            this.ci.resolve();
        }, this.transaction.onabort = () => {
            e.error ? this.ci.reject(new bs(t, e.error)) : this.ci.resolve();
        }, this.transaction.onerror = e => {
            const n = Fs(e.target.error);
            this.ci.reject(new bs(t, n));
        };
    }
    static open(t, e, n, s) {
        try {
            return new Ds(e, t.transaction(s, n));
        } catch (t) {
            throw new bs(e, t);
        }
    }
    get ei() {
        return this.ci.promise;
    }
    abort(t) {
        t && this.ci.reject(t), this.aborted || (y("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), 
        this.aborted = !0, this.transaction.abort());
    }
    /**
     * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
     * operations performed on the SimpleDbStore happen within the context of this
     * transaction and it cannot be used anymore once the transaction is
     * completed.
     *
     * Note that we can't actually enforce that the KeyType and ValueType are
     * correct, but they allow type safety through the rest of the consuming code.
     */    store(t) {
        const e = this.transaction.objectStore(t);
        return new Cs(e);
    }
}

/**
 * A wrapper around an IDBObjectStore providing an API that:
 *
 * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
 * methods for acting against the object store.
 * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
 * method return a PersistencePromise instead.
 * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
 * intermediate IndexedDB types (IDBCursorWithValue, etc.)
 */ class Cs {
    constructor(t) {
        this.store = t;
    }
    put(t, e) {
        let n;
        return void 0 !== e ? (y("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (y("SimpleDb", "PUT", this.store.name, "<auto-key>", t), 
        n = this.store.put(t)), Ns(n);
    }
    /**
     * Adds a new value into an Object Store and returns the new key. Similar to
     * IndexedDb's `add()`, this method will fail on primary key collisions.
     *
     * @param value - The object to write.
     * @returns The key of the value to add.
     */    add(t) {
        y("SimpleDb", "ADD", this.store.name, t, t);
        return Ns(this.store.add(t));
    }
    /**
     * Gets the object with the specified key from the specified store, or null
     * if no object exists with the specified key.
     *
     * @key The key of the object to get.
     * @returns The object with the specified key or null if no object exists.
     */    get(t) {
        // We're doing an unsafe cast to ValueType.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return Ns(this.store.get(t)).next((e => (
        // Normalize nonexistence to null.
        void 0 === e && (e = null), y("SimpleDb", "GET", this.store.name, t, e), e)));
    }
    delete(t) {
        y("SimpleDb", "DELETE", this.store.name, t);
        return Ns(this.store.delete(t));
    }
    /**
     * If we ever need more of the count variants, we can add overloads. For now,
     * all we need is to count everything in a store.
     *
     * Returns the number of rows in the store.
     */    count() {
        y("SimpleDb", "COUNT", this.store.name);
        return Ns(this.store.count());
    }
    ui(t, e) {
        const n = this.cursor(this.options(t, e)), s = [];
        return this.ai(n, ((t, e) => {
            s.push(e);
        })).next((() => s));
    }
    hi(t, e) {
        y("SimpleDb", "DELETE ALL", this.store.name);
        const n = this.options(t, e);
        n.li = !1;
        const s = this.cursor(n);
        return this.ai(s, ((t, e, n) => n.delete()));
    }
    _i(t, e) {
        let n;
        e ? n = t : (n = {}, e = t);
        const s = this.cursor(n);
        return this.ai(s, e);
    }
    /**
     * Iterates over a store, but waits for the given callback to complete for
     * each entry before iterating the next entry. This allows the callback to do
     * asynchronous work to determine if this iteration should continue.
     *
     * The provided callback should return `true` to continue iteration, and
     * `false` otherwise.
     */    fi(t) {
        const e = this.cursor({});
        return new ws(((n, s) => {
            e.onerror = t => {
                const e = Fs(t.target.error);
                s(e);
            }, e.onsuccess = e => {
                const s = e.target.result;
                s ? t(s.primaryKey, s.value).next((t => {
                    t ? s.continue() : n();
                })) : n();
            };
        }));
    }
    ai(t, e) {
        const n = [];
        return new ws(((s, i) => {
            t.onerror = t => {
                i(t.target.error);
            }, t.onsuccess = t => {
                const i = t.target.result;
                if (!i) return void s();
                const r = new vs(i), o = e(i.primaryKey, i.value, r);
                if (o instanceof ws) {
                    const t = o.catch((t => (r.done(), ws.reject(t))));
                    n.push(t);
                }
                r.On ? s() : null === r.ri ? i.continue() : i.continue(r.ri);
            };
        })).next((() => ws.qn(n)));
    }
    options(t, e) {
        let n = void 0;
        return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
            index: n,
            range: e
        };
    }
    cursor(t) {
        let e = "next";
        if (t.reverse && (e = "prev"), t.index) {
            const n = this.store.index(t.index);
            return t.li ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }
        return this.store.openCursor(t.range, e);
    }
}

/**
 * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
 * handlers to resolve / reject the PersistencePromise as appropriate.
 */ function Ns(t) {
    return new ws(((e, n) => {
        t.onsuccess = t => {
            const n = t.target.result;
            e(n);
        }, t.onerror = t => {
            const e = Fs(t.target.error);
            n(e);
        };
    }));
}

// Guard so we only report the error once.
let xs = !1;

function Fs(t) {
    const e = ps.js(s());
    if (e >= 12.2 && e < 13) {
        const e = "An internal error was encountered in the Indexed Database server";
        if (t.message.indexOf(e) >= 0) {
            // Wrap error in a more descriptive one.
            const t = new N("internal", `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);
            return xs || (xs = !0, 
            // Throw a global exception outside of this promise chain, for the user to
            // potentially catch.
            setTimeout((() => {
                throw t;
            }), 0)), t;
        }
    }
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
/** The Platform's 'window' implementation or null if not available. */ function Os() {
    // `window` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof window ? window : null;
}

/** The Platform's 'document' implementation or null if not available. */ function Ms() {
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
class ks {
    constructor(t, e, n, s, i) {
        this.di = t, this.Ns = e, this.wi = n, this.op = s, this.Ei = i, this.Ti = new Ts, 
        this.then = this.Ti.promise.then.bind(this.Ti.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.Ti.promise.catch((t => {}));
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
     */    static Ii(t, e, n, s, i) {
        const r = Date.now() + n, o = new ks(t, e, r, s, i);
        return o.start(n), o;
    }
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */    start(t) {
        this.mi = setTimeout((() => this.Ai()), t);
    }
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */    Ks() {
        return this.Ai();
    }
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */    cancel(t) {
        null !== this.mi && (this.clearTimeout(), this.Ti.reject(new N(C.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }
    Ai() {
        this.di.Ri((() => null !== this.mi ? (this.clearTimeout(), this.op().then((t => this.Ti.resolve(t)))) : Promise.resolve()));
    }
    clearTimeout() {
        null !== this.mi && (this.Ei(this), clearTimeout(this.mi), this.mi = null);
    }
}

class $s {
    constructor() {
        // The last promise in the queue.
        this.Pi = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.gi = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.yi = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.Vi = [], 
        // visible for testing
        this.pi = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.vi = !1, 
        // List of TimerIds to fast-forward delays for.
        this.bi = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.Si = new Vs(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.Di = () => {
            const t = Ms();
            t && y("AsyncQueue", "Visibility state changed to " + t.visibilityState), this.Si.Qs();
        };
        const t = Ms();
        t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.Di);
    }
    // Is this AsyncQueue being shut down? If true, this instance will not enqueue
    // any new operations, Promises from enqueue requests will not resolve.
    get Ci() {
        return this.yi;
    }
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */    Ri(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */    Ni(t) {
        this.xi(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Fi(t);
    }
    /**
     * Initialize the shutdown of this queue. Once this method is called, the
     * only possible way to request running an operation is through
     * `enqueueEvenWhileRestricted()`.
     */    Oi() {
        if (!this.yi) {
            this.yi = !0;
            const t = Ms();
            t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.Di);
        }
    }
    /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     */    enqueue(t) {
        return this.xi(), this.yi ? new Promise((t => {})) : this.Fi(t);
    }
    /**
     * Enqueue a retryable operation.
     *
     * A retryable operation is rescheduled with backoff if it fails with a
     * IndexedDbTransactionError (the error type used by SimpleDb). All
     * retryable operations are executed in order and only run if all prior
     * operations were retried successfully.
     */    Mi(t) {
        this.Ri((() => (this.gi.push(t), this.ki())));
    }
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */    async ki() {
        if (0 !== this.gi.length) {
            try {
                await this.gi[0](), this.gi.shift(), this.Si.reset();
            } catch (t) {
                if (!Ss(t)) throw t;
 // Failure will be handled by AsyncQueue
                                y("AsyncQueue", "Operation failed with retryable error: " + t);
            }
            this.gi.length > 0 && 
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
            this.Si.Bs((() => this.ki()));
        }
    }
    Fi(t) {
        const e = this.Pi.then((() => (this.vi = !0, t().catch((t => {
            this.pi = t, this.vi = !1;
            // Re-throw the error so that this.tail becomes a rejected Promise and
            // all further attempts to chain (via .then) will just short-circuit
            // and return the rejected Promise.
            throw V("INTERNAL UNHANDLED ERROR: ", 
            /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error - Error or FirestoreError
 */
            function(t) {
                let e = t.message || "";
                t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack);
                return e;
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
        })).then((t => (this.vi = !1, t))))));
        return this.Pi = e, e;
    }
    /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned DelayedOperation can be used to cancel
     * or fast-forward the operation prior to its running.
     */    Us(t, e, n) {
        this.xi(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.bi.indexOf(t) > -1 && (e = 0);
        const s = ks.Ii(this, t, e, n, (t => this.$i(t)));
        return this.Vi.push(s), s;
    }
    xi() {
        this.pi && b();
    }
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */    Li() {}
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */    async Bi() {
        // Operations in the queue prior to draining may have enqueued additional
        // operations. Keep draining the queue until the tail is no longer advanced,
        // which indicates that no more new operations were enqueued and that all
        // operations were executed.
        let t;
        do {
            t = this.Pi, await t;
        } while (t !== this.Pi);
    }
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */    qi(t) {
        for (const e of this.Vi) if (e.Ns === t) return !0;
        return !1;
    }
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */    Ui(t) {
        // Note that draining may generate more delayed ops, so we do that first.
        return this.Bi().then((() => {
            // Run ops in the same order they'd run if they ran naturally.
            this.Vi.sort(((t, e) => t.wi - e.wi));
            for (const e of this.Vi) if (e.Ks(), "all" /* All */ !== t && e.Ns === t) break;
            return this.Bi();
        }));
    }
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */    Qi(t) {
        this.bi.push(t);
    }
    /** Called once a DelayedOperation is run or canceled. */    $i(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        const e = this.Vi.indexOf(t);
        this.Vi.splice(e, 1);
    }
}

/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */ function Ls(t, e) {
    if (V("AsyncQueue", `${e}: ${t}`), Ss(t)) return new N(C.UNAVAILABLE, `${e}: ${t}`);
    throw t;
}

function Bs([t, e], [n, s]) {
    const i = B(t, n);
    return 0 === i ? B(e, s) : i;
}

/**
 * Used to calculate the nth sequence number. Keeps a rolling buffer of the
 * lowest n values passed to `addElement`, and finally reports the largest of
 * them in `maxValue`.
 */ class qs {
    constructor(t) {
        this.Ki = t, this.buffer = new wt(Bs), this.Wi = 0;
    }
    ji() {
        return ++this.Wi;
    }
    Gi(t) {
        const e = [ t, this.ji() ];
        if (this.buffer.size < this.Ki) this.buffer = this.buffer.add(e); else {
            const t = this.buffer.last();
            Bs(e, t) < 0 && (this.buffer = this.buffer.delete(t).add(e));
        }
    }
    get maxValue() {
        // Guaranteed to be non-empty. If we decide we are not collecting any
        // sequence numbers, nthSequenceNumber below short-circuits. If we have
        // decided that we are collecting n sequence numbers, it's because n is some
        // percentage of the existing sequence numbers. That means we should never
        // be in a situation where we are collecting sequence numbers but don't
        // actually have any.
        return this.buffer.last()[0];
    }
}

const Us = {
    zi: !1,
    Hi: 0,
    Ji: 0,
    Yi: 0
};

class Qs {
    constructor(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    e, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    n) {
        this.Xi = t, this.Zi = e, this.tr = n;
    }
    static er(t) {
        return new Qs(t, Qs.nr, Qs.sr);
    }
}

Qs.nr = 10, Qs.sr = 1e3, Qs.ir = new Qs(41943040, Qs.nr, Qs.sr), Qs.rr = new Qs(-1, 0, 0);

/**
 * This class is responsible for the scheduling of LRU garbage collection. It handles checking
 * whether or not GC is enabled, as well as which delay to use before the next run.
 */
class Ks {
    constructor(t, e) {
        this.cr = t, this.di = e, this.ur = !1, this.ar = null;
    }
    start(t) {
        -1 !== this.cr.params.Xi && this.hr(t);
    }
    stop() {
        this.ar && (this.ar.cancel(), this.ar = null);
    }
    get lr() {
        return null !== this.ar;
    }
    hr(t) {
        const e = this.ur ? 3e5 : 6e4;
        y("LruGarbageCollector", `Garbage collection scheduled in ${e}ms`), this.ar = this.di.Us("lru_garbage_collection" /* LruGarbageCollection */ , e, (async () => {
            this.ar = null, this.ur = !0;
            try {
                await t._r(this.cr);
            } catch (t) {
                Ss(t) ? y("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", t) : await Ir(t);
            }
            await this.hr(t);
        }));
    }
}

/** Implements the steps for LRU garbage collection. */ class Ws {
    constructor(t, e) {
        this.dr = t, this.params = e;
    }
    /** Given a percentile of target to collect, returns the number of targets to collect. */    wr(t, e) {
        return this.dr.Er(t).next((t => Math.floor(e / 100 * t)));
    }
    /** Returns the nth sequence number, counting in order from the smallest. */    Tr(t, e) {
        if (0 === e) return ws.resolve(ys.Ds);
        const n = new qs(e);
        return this.dr.Ue(t, (t => n.Gi(t.sequenceNumber))).next((() => this.dr.Ir(t, (t => n.Gi(t))))).next((() => n.maxValue));
    }
    /**
     * Removes targets with a sequence number equal to or less than the given upper bound, and removes
     * document associations with those targets.
     */    mr(t, e, n) {
        return this.dr.mr(t, e, n);
    }
    /**
     * Removes documents that have a sequence number equal to or less than the upper bound and are not
     * otherwise pinned.
     */    Ar(t, e) {
        return this.dr.Ar(t, e);
    }
    Rr(t, e) {
        return -1 === this.params.Xi ? (y("LruGarbageCollector", "Garbage collection skipped; disabled"), 
        ws.resolve(Us)) : this.Pr(t).next((n => n < this.params.Xi ? (y("LruGarbageCollector", `Garbage collection skipped; Cache size ${n} is lower than threshold ` + this.params.Xi), 
        Us) : this.gr(t, e)));
    }
    Pr(t) {
        return this.dr.Pr(t);
    }
    gr(t, e) {
        let s, i, r, o, c, u, a;
        const h = Date.now();
        return this.wr(t, this.params.Zi).next((e => (
        // Cap at the configured max
        e > this.params.tr ? (y("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.tr} from ` + e), 
        i = this.params.tr) : i = e, o = Date.now(), this.Tr(t, i)))).next((n => (s = n, 
        c = Date.now(), this.mr(t, s, e)))).next((e => (r = e, u = Date.now(), this.Ar(t, s)))).next((t => {
            if (a = Date.now(), g() <= n.DEBUG) {
                y("LruGarbageCollector", `LRU Garbage Collection\n\tCounted targets in ${o - h}ms\n\tDetermined least recently used ${i} in ` + (c - o) + "ms\n" + `\tRemoved ${r} targets in ` + (u - c) + "ms\n" + `\tRemoved ${t} documents in ` + (a - u) + "ms\n" + `Total Duration: ${a - h}ms`);
            }
            return ws.resolve({
                zi: !0,
                Hi: i,
                Ji: r,
                Yi: t
            });
        }));
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
 */ class js {
    /** Sets the document view to query against. */
    yr(t) {
        this.Vr = t;
    }
    /** Returns all local documents matching the specified query. */    ws(t, e, s, i) {
        // Queries that match all documents don't benefit from using
        // key-based lookups. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
        return function(t) {
            return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.Tn.length || 1 === t.Tn.length && t.Tn[0].field.tt());
        }(e) || s.isEqual(K.min()) ? this.pr(t, e) : this.Vr._s(t, i).next((r => {
            const o = this.vr(e, r);
            return (Mn(e) || kn(e)) && this.br(e.limitType, o, i, s) ? this.pr(t, e) : (g() <= n.DEBUG && y("QueryEngine", "Re-using previous result from %s to execute query: %s", s.toString(), jn(e)), 
            this.Vr.ws(t, e, s).next((t => (
            // We merge `previousResults` into `updateResults`, since
            // `updateResults` is already a DocumentMap. If a document is
            // contained in both lists, then its contents are the same.
            o.forEach((e => {
                t = t.Tt(e.key, e);
            })), t))));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }
    /** Applies the query filter and sorting to the provided documents.  */    vr(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        let n = new wt(zn(t));
        return e.forEach(((e, s) => {
            s instanceof Dn && Gn(t, s) && (n = n.add(s));
        })), n;
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
     */    br(t, e, n, s) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                const i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.F(s) > 0);
    }
    pr(t, e) {
        return g() <= n.DEBUG && y("QueryEngine", "Using full collection scan to execute query:", jn(e)), 
        this.Vr.ws(t, e, K.min());
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
 * Encodes a resource path into a IndexedDb-compatible string form.
 */
function Gs(t) {
    let e = "";
    for (let n = 0; n < t.length; n++) e.length > 0 && (e = Hs(e)), e = zs(t.get(n), e);
    return Hs(e);
}

/** Encodes a single segment of a resource path into the given result */ function zs(t, e) {
    let n = e;
    const s = t.length;
    for (let e = 0; e < s; e++) {
        const s = t.charAt(e);
        switch (s) {
          case "\0":
            n += "";
            break;

          case "":
            n += "";
            break;

          default:
            n += s;
        }
    }
    return n;
}

/** Encodes a path separator into the given result */ function Hs(t) {
    return t + "";
}

/**
 * Decodes the given IndexedDb-compatible string form of a resource path into
 * a ResourcePath instance. Note that this method is not suitable for use with
 * decoding resource names from the server; those are One Platform format
 * strings.
 */ function Js(t) {
    // Event the empty path must encode as a path of at least length 2. A path
    // with exactly 2 must be the empty path.
    const e = t.length;
    if (S(e >= 2), 2 === e) return S("" === t.charAt(0) && "" === t.charAt(1)), j.X();
    // Escape characters cannot exist past the second-to-last position in the
    // source value.
        const n = e - 2, s = [];
    let i = "";
    for (let r = 0; r < e; ) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        const e = t.indexOf("", r);
        (e < 0 || e > n) && b();
        switch (t.charAt(e + 1)) {
          case "":
            const n = t.substring(r, e);
            let o;
            0 === i.length ? 
            // Avoid copying for the common case of a segment that excludes \0
            // and \001
            o = n : (i += n, o = i, i = ""), s.push(o);
            break;

          case "":
            i += t.substring(r, e), i += "\0";
            break;

          case "":
            // The escape character can be used in the output to encode itself.
            i += t.substring(r, e + 1);
            break;

          default:
            b();
        }
        r = e + 2;
    }
    return new j(s);
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
/** Serializer for values stored in the LocalStore. */ class Ys {
    constructor(t) {
        this.Sr = t;
    }
}

/** Decodes a remote document from storage locally to a Document. */ function Xs(t, e) {
    if (e.document) return function(t, e, n) {
        const s = Re(t, e.name), i = Te(e.updateTime), r = new pn({
            mapValue: {
                fields: e.fields
            }
        });
        return new Dn(s, i, r, {
            hasCommittedMutations: !!n
        });
    }(t.Sr, e.document, !!e.hasCommittedMutations);
    if (e.noDocument) {
        const t = H.ct(e.noDocument.path), n = si(e.noDocument.readTime);
        return new Cn(t, n, {
            hasCommittedMutations: !!e.hasCommittedMutations
        });
    }
    if (e.unknownDocument) {
        const t = H.ct(e.unknownDocument.path), n = si(e.unknownDocument.version);
        return new Nn(t, n);
    }
    return b();
}

/** Encodes a document for storage locally. */ function Zs(t, e, n) {
    const s = ti(n), i = e.key.path.q().H();
    if (e instanceof Dn) {
        const n = function(t, e) {
            return {
                name: Ae(t, e.key),
                fields: e.En().mapValue.fields,
                updateTime: de(t, e.version.M())
            };
        }(t.Sr, e), r = e.hasCommittedMutations;
        return new Di(
        /* unknownDocument= */ null, 
        /* noDocument= */ null, n, r, s, i);
    }
    if (e instanceof Cn) {
        const t = e.key.path.H(), n = ni(e.version), r = e.hasCommittedMutations;
        return new Di(
        /* unknownDocument= */ null, new bi(t, n), 
        /* document= */ null, r, s, i);
    }
    if (e instanceof Nn) {
        const t = e.key.path.H(), n = ni(e.version);
        return new Di(new Si(t, n), 
        /* noDocument= */ null, 
        /* document= */ null, 
        /* hasCommittedMutations= */ !0, s, i);
    }
    return b();
}

function ti(t) {
    const e = t.M();
    return [ e.seconds, e.nanoseconds ];
}

function ei(t) {
    const e = new Q(t[0], t[1]);
    return K.N(e);
}

function ni(t) {
    const e = t.M();
    return new gi(e.seconds, e.nanoseconds);
}

function si(t) {
    const e = new Q(t.seconds, t.nanoseconds);
    return K.N(e);
}

/** Encodes a batch of mutations into a DbMutationBatch for local storage. */
/** Decodes a DbMutationBatch into a MutationBatch */
function ii(t, e) {
    const n = (e.baseMutations || []).map((e => De(t.Sr, e))), s = e.mutations.map((e => De(t.Sr, e))), i = Q.fromMillis(e.localWriteTimeMs);
    return new _s(e.batchId, i, n, s);
}

/** Decodes a DbTarget into TargetData */ function ri(t) {
    const e = si(t.readTime), n = void 0 !== t.lastLimboFreeSnapshotVersion ? si(t.lastLimboFreeSnapshotVersion) : K.min();
    let s;
    var i;
    return void 0 !== t.query.documents ? (S(1 === (i = t.query).documents.length), 
    s = Un(On(ge(i.documents[0])))) : s = function(t) {
        return Un(Fe(t));
    }(t.query), new ot(s, t.targetId, 0 /* Listen */ , t.lastListenSequenceNumber, e, n, rt.fromBase64String(t.resumeToken));
}

/** Encodes TargetData into a DbTarget for storage locally. */ function oi(t, e) {
    const n = ni(e.ft), s = ni(e.lastLimboFreeSnapshotVersion);
    let i;
    i = it(e.target) ? Ne(t.Sr, e.target) : xe(t.Sr, e.target);
    // We can't store the resumeToken as a ByteString in IndexedDb, so we
    // convert it to a base64 string for storage.
        const r = e.resumeToken.toBase64();
    // lastListenSequenceNumber is always 0 until we do real GC.
        return new Ni(e.targetId, et(e.target), n, r, e.sequenceNumber, s, i);
}

/**
 * A helper function for figuring out what kind of query has been stored.
 */
/**
 * Encodes a `BundledQuery` from bundle proto to a Query object.
 *
 * This reconstructs the original query used to build the bundle being loaded,
 * including features exists only in SDKs (for example: limit-to-last).
 */
function ci(t) {
    const e = Fe({
        parent: t.parent,
        structuredQuery: t.structuredQuery
    });
    return "LAST" === t.limitType ? Qn(e, e.limit, "L" /* Last */) : e;
}

/** Encodes a NamedQuery proto object to a NamedQuery model object. */
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
/** A mutation queue for a specific user, backed by IndexedDB. */
class ui {
    constructor(
    /**
     * The normalized userId (e.g. null UID => "" userId) used to store /
     * retrieve mutations.
     */
    t, e, n, s) {
        this.userId = t, this.serializer = e, this.os = n, this.Dr = s, 
        /**
         * Caches the document keys for pending mutation batches. If the mutation
         * has been removed from IndexedDb, the cached value may continue to
         * be used to retrieve the batch's document keys. To remove a cached value
         * locally, `removeCachedMutationKeys()` should be invoked either directly
         * or through `removeMutationBatches()`.
         *
         * With multi-tab, when the primary client acknowledges or rejects a mutation,
         * this cache is used by secondary clients to invalidate the local
         * view of the documents that were previously affected by the mutation.
         */
        // PORTING NOTE: Multi-tab only.
        this.Cr = {};
    }
    /**
     * Creates a new mutation queue for the given user.
     * @param user - The user for which to create a mutation queue.
     * @param serializer - The serializer to use when persisting to IndexedDb.
     */    static Nr(t, e, n, s) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        S("" !== t.uid);
        const i = t.u() ? t.uid : "";
        return new ui(i, e, n, s);
    }
    Fr(t) {
        let e = !0;
        const n = IDBKeyRange.bound([ this.userId, Number.NEGATIVE_INFINITY ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return li(t)._i({
            index: pi.userMutationsIndex,
            range: n
        }, ((t, n, s) => {
            e = !1, s.done();
        })).next((() => e));
    }
    Or(t, e, n, s) {
        const i = _i(t), r = li(t);
        // The IndexedDb implementation in Chrome (and Firefox) does not handle
        // compound indices that include auto-generated keys correctly. To ensure
        // that the index entry is added correctly in all browsers, we perform two
        // writes: The first write is used to retrieve the next auto-generated Batch
        // ID, and the second write populates the index and stores the actual
        // mutation batch.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
        // We write an empty object to obtain key
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return r.add({}).next((o => {
            S("number" == typeof o);
            const c = new _s(o, e, n, s), u = function(t, e, n) {
                const s = n.baseMutations.map((e => Se(t.Sr, e))), i = n.mutations.map((e => Se(t.Sr, e)));
                return new pi(e, n.batchId, n.gn.toMillis(), s, i);
            }(this.serializer, this.userId, c), a = [];
            let h = new wt(((t, e) => B(t.J(), e.J())));
            for (const t of s) {
                const e = vi.key(this.userId, t.key.path, o);
                h = h.add(t.key.path.q()), a.push(r.put(u)), a.push(i.put(e, vi.PLACEHOLDER));
            }
            return h.forEach((e => {
                a.push(this.os.Mr(t, e));
            })), t.es((() => {
                this.Cr[o] = c.keys();
            })), ws.qn(a).next((() => c));
        }));
    }
    kr(t, e) {
        return li(t).get(e).next((t => t ? (S(t.userId === this.userId), ii(this.serializer, t)) : null));
    }
    /**
     * Returns the document keys for the mutation batch with the given batchId.
     * For primary clients, this method returns `null` after
     * `removeMutationBatches()` has been called. Secondary clients return a
     * cached result until `removeCachedMutationKeys()` is invoked.
     */
    // PORTING NOTE: Multi-tab only.
    $r(t, e) {
        return this.Cr[e] ? ws.resolve(this.Cr[e]) : this.kr(t, e).next((t => {
            if (t) {
                const n = t.keys();
                return this.Cr[e] = n, n;
            }
            return null;
        }));
    }
    Lr(t, e) {
        const n = e + 1, s = IDBKeyRange.lowerBound([ this.userId, n ]);
        let i = null;
        return li(t)._i({
            index: pi.userMutationsIndex,
            range: s
        }, ((t, e, s) => {
            e.userId === this.userId && (S(e.batchId >= n), i = ii(this.serializer, e)), s.done();
        })).next((() => i));
    }
    Br(t) {
        const e = IDBKeyRange.upperBound([ this.userId, Number.POSITIVE_INFINITY ]);
        let n = -1;
        return li(t)._i({
            index: pi.userMutationsIndex,
            range: e,
            reverse: !0
        }, ((t, e, s) => {
            n = e.batchId, s.done();
        })).next((() => n));
    }
    qr(t) {
        const e = IDBKeyRange.bound([ this.userId, -1 ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return li(t).ui(pi.userMutationsIndex, e).next((t => t.map((t => ii(this.serializer, t)))));
    }
    us(t, e) {
        // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.
        const n = vi.prefixForPath(this.userId, e.path), s = IDBKeyRange.lowerBound(n), i = [];
        return _i(t)._i({
            range: s
        }, ((n, s, r) => {
            const [o, c, u] = n, a = Js(c);
            // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.
                        if (o === this.userId && e.path.isEqual(a)) 
            // Look up the mutation batch in the store.
            return li(t).get(u).next((t => {
                if (!t) throw b();
                S(t.userId === this.userId), i.push(ii(this.serializer, t));
            }));
            r.done();
        })).next((() => i));
    }
    ds(t, e) {
        let n = new wt(B);
        const s = [];
        return e.forEach((e => {
            const i = vi.prefixForPath(this.userId, e.path), r = IDBKeyRange.lowerBound(i), o = _i(t)._i({
                range: r
            }, ((t, s, i) => {
                const [r, o, c] = t, u = Js(o);
                // Only consider rows matching exactly the specific key of
                // interest. Note that because we order by path first, and we
                // order terminators before path separators, we'll encounter all
                // the index rows for documentKey contiguously. In particular, all
                // the rows for documentKey will occur before any rows for
                // documents nested in a subcollection beneath documentKey so we
                // can stop as soon as we hit any such row.
                                r === this.userId && e.path.isEqual(u) ? n = n.add(c) : i.done();
            }));
            s.push(o);
        })), ws.qn(s).next((() => this.Ur(t, n)));
    }
    Rs(t, e) {
        const n = e.path, s = n.length + 1, i = vi.prefixForPath(this.userId, n), r = IDBKeyRange.lowerBound(i);
        // Collect up unique batchIDs encountered during a scan of the index. Use a
        // SortedSet to accumulate batch IDs so they can be traversed in order in a
        // scan of the main table.
        let o = new wt(B);
        return _i(t)._i({
            range: r
        }, ((t, e, i) => {
            const [r, c, u] = t, a = Js(c);
            r === this.userId && n.j(a) ? 
            // Rows with document keys more than one segment longer than the
            // query path can't be matches. For example, a query on 'rooms'
            // can't match the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            a.length === s && (o = o.add(u)) : i.done();
        })).next((() => this.Ur(t, o)));
    }
    Ur(t, e) {
        const n = [], s = [];
        // TODO(rockwood): Implement this using iterate.
        return e.forEach((e => {
            s.push(li(t).get(e).next((t => {
                if (null === t) throw b();
                S(t.userId === this.userId), n.push(ii(this.serializer, t));
            })));
        })), ws.qn(s).next((() => n));
    }
    Qr(t, e) {
        return hi(t.Kr, this.userId, e).next((n => (t.es((() => {
            this.Wr(e.batchId);
        })), ws.forEach(n, (e => this.Dr.jr(t, e))))));
    }
    /**
     * Clears the cached keys for a mutation batch. This method should be
     * called by secondary clients after they process mutation updates.
     *
     * Note that this method does not have to be called from primary clients as
     * the corresponding cache entries are cleared when an acknowledged or
     * rejected batch is removed from the mutation queue.
     */
    // PORTING NOTE: Multi-tab only
    Wr(t) {
        delete this.Cr[t];
    }
    Gr(t) {
        return this.Fr(t).next((e => {
            if (!e) return ws.resolve();
            // Verify that there are no entries in the documentMutations index if
            // the queue is empty.
                        const n = IDBKeyRange.lowerBound(vi.prefixForUser(this.userId)), s = [];
            return _i(t)._i({
                range: n
            }, ((t, e, n) => {
                if (t[0] === this.userId) {
                    const e = Js(t[1]);
                    s.push(e);
                } else n.done();
            })).next((() => {
                S(0 === s.length);
            }));
        }));
    }
    zr(t, e) {
        return ai(t, this.userId, e);
    }
    // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
    /** Returns the mutation queue's metadata from IndexedDb. */
    Hr(t) {
        return fi(t).get(this.userId).next((t => t || new Vi(this.userId, -1, 
        /*lastStreamToken=*/ "")));
    }
}

/**
 * @returns true if the mutation queue for the given user contains a pending
 *         mutation for the given key.
 */ function ai(t, e, n) {
    const s = vi.prefixForPath(e, n.path), i = s[1], r = IDBKeyRange.lowerBound(s);
    let o = !1;
    return _i(t)._i({
        range: r,
        li: !0
    }, ((t, n, s) => {
        const [r, c, /*batchID*/ u] = t;
        r === e && c === i && (o = !0), s.done();
    })).next((() => o));
}

/** Returns true if any mutation queue contains the given document. */
/**
 * Delete a mutation batch and the associated document mutations.
 * @returns A PersistencePromise of the document mutations that were removed.
 */
function hi(t, e, n) {
    const s = t.store(pi.store), i = t.store(vi.store), r = [], o = IDBKeyRange.only(n.batchId);
    let c = 0;
    const u = s._i({
        range: o
    }, ((t, e, n) => (c++, n.delete())));
    r.push(u.next((() => {
        S(1 === c);
    })));
    const a = [];
    for (const t of n.mutations) {
        const s = vi.key(e, t.key.path, n.batchId);
        r.push(i.delete(s)), a.push(t.key);
    }
    return ws.qn(r).next((() => a));
}

/**
 * Helper to get a typed SimpleDbStore for the mutations object store.
 */ function li(t) {
    return Zi.Ys(t, pi.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function _i(t) {
    return Zi.Ys(t, vi.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function fi(t) {
    return Zi.Ys(t, Vi.store);
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
 * The RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newIndexedDbRemoteDocumentCache()`.
 */ class di {
    /**
     * @param serializer - The document serializer.
     * @param indexManager - The query indexes that need to be maintained.
     */
    constructor(t, e) {
        this.serializer = t, this.os = e;
    }
    /**
     * Adds the supplied entries to the cache.
     *
     * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */    jn(t, e, n) {
        return Ti(t).put(Ii(e), n);
    }
    /**
     * Removes a document from the cache.
     *
     * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */    Hn(t, e) {
        const n = Ti(t), s = Ii(e);
        return n.delete(s);
    }
    /**
     * Updates the current cache size.
     *
     * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
     * cache's metadata.
     */    updateMetadata(t, e) {
        return this.getMetadata(t).next((n => (n.byteSize += e, this.Jr(t, n))));
    }
    Jn(t, e) {
        return Ti(t).get(Ii(e)).next((t => this.Yr(t)));
    }
    /**
     * Looks up an entry in the cache.
     *
     * @param documentKey - The key of the entry to look up.
     * @returns The cached MaybeDocument entry and its size, or null if we have
     * nothing cached.
     */    Xr(t, e) {
        return Ti(t).get(Ii(e)).next((t => {
            const e = this.Yr(t);
            return e ? {
                zn: e,
                size: mi(t)
            } : null;
        }));
    }
    getEntries(t, e) {
        let n = mt();
        return this.Zr(t, e, ((t, e) => {
            const s = this.Yr(e);
            n = n.Tt(t, s);
        })).next((() => n));
    }
    /**
     * Looks up several entries in the cache.
     *
     * @param documentKeys - The set of keys entries to look up.
     * @returns A map of MaybeDocuments indexed by key (if a document cannot be
     *     found, the key will be mapped to null) and a map of sizes indexed by
     *     key (zero if the key cannot be found).
     */    eo(t, e) {
        let n = mt(), s = new _t(H.$);
        return this.Zr(t, e, ((t, e) => {
            const i = this.Yr(e);
            i ? (n = n.Tt(t, i), s = s.Tt(t, mi(e))) : (n = n.Tt(t, null), s = s.Tt(t, 0));
        })).next((() => ({
            no: n,
            so: s
        })));
    }
    Zr(t, e, n) {
        if (e.W()) return ws.resolve();
        const s = IDBKeyRange.bound(e.first().path.H(), e.last().path.H()), i = e.yt();
        let r = i.Ct();
        return Ti(t)._i({
            range: s
        }, ((t, e, s) => {
            const o = H.ct(t);
            // Go through keys not found in cache.
                        for (;r && H.$(r, o) < 0; ) n(r, null), r = i.Ct();
            r && r.isEqual(o) && (
            // Key found in cache.
            n(r, e), r = i.Nt() ? i.Ct() : null), 
            // Skip to the next key (if there is one).
            r ? s.oi(r.path.H()) : s.done();
        })).next((() => {
            // The rest of the keys are not in the cache. One case where `iterate`
            // above won't go through them is when the cache is empty.
            for (;r; ) n(r, null), r = i.Nt() ? i.Ct() : null;
        }));
    }
    ws(t, e, n) {
        let s = Rt();
        const i = e.path.length + 1, r = {};
        if (n.isEqual(K.min())) {
            // Documents are ordered by key, so we can use a prefix scan to narrow
            // down the documents we need to match the query against.
            const t = e.path.H();
            r.range = IDBKeyRange.lowerBound(t);
        } else {
            // Execute an index-free query and filter by read time. This is safe
            // since all document changes to queries that have a
            // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
            const t = e.path.H(), s = ti(n);
            r.range = IDBKeyRange.lowerBound([ t, s ], 
            /* open= */ !0), r.index = Di.collectionReadTimeIndex;
        }
        return Ti(t)._i(r, ((t, n, r) => {
            // The query is actually returning any path that starts with the query
            // path prefix which may include documents in subcollections. For
            // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
            // shouldn't match it. Fix this by discarding rows with document keys
            // more than one segment longer than the query path.
            if (t.length !== i) return;
            const o = Xs(this.serializer, n);
            e.path.j(o.key.path) ? o instanceof Dn && Gn(e, o) && (s = s.Tt(o.key, o)) : r.done();
        })).next((() => s));
    }
    io(t) {
        return new wi(this, !!t && t.ro);
    }
    oo(t) {
        return this.getMetadata(t).next((t => t.byteSize));
    }
    getMetadata(t) {
        return Ei(t).get(Ci.key).next((t => (S(!!t), t)));
    }
    Jr(t, e) {
        return Ei(t).put(Ci.key, e);
    }
    /**
     * Decodes `remoteDoc` and returns the document (or null, if the document
     * corresponds to the format used for sentinel deletes).
     */    Yr(t) {
        if (t) {
            const e = Xs(this.serializer, t);
            return e instanceof Cn && e.version.isEqual(K.min()) ? null : e;
        }
        return null;
    }
}

/**
 * Creates a new IndexedDbRemoteDocumentCache.
 *
 * @param serializer - The document serializer.
 * @param indexManager - The query indexes that need to be maintained.
 */
/**
 * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
 *
 * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
 * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
 * when we apply the changes.
 */
class wi extends Es {
    /**
     * @param documentCache - The IndexedDbRemoteDocumentCache to apply the changes to.
     * @param trackRemovals - Whether to create sentinel deletes that can be tracked by
     * `getNewDocumentChanges()`.
     */
    constructor(t, e) {
        super(), this.co = t, this.ro = e, 
        // A map of document sizes prior to applying the changes in this buffer.
        this.uo = new ds((t => t.toString()), ((t, e) => t.isEqual(e)));
    }
    Zn(t) {
        const e = [];
        let n = 0, s = new wt(((t, e) => B(t.J(), e.J())));
        return this.Qn.forEach(((i, r) => {
            const o = this.uo.get(i);
            if (r.zn) {
                const c = Zs(this.co.serializer, r.zn, this.Wn(i));
                s = s.add(i.path.q());
                const u = mi(c);
                n += u - o, e.push(this.co.jn(t, i, c));
            } else if (n -= o, this.ro) {
                // In order to track removals, we store a "sentinel delete" in the
                // RemoteDocumentCache. This entry is represented by a NoDocument
                // with a version of 0 and ignored by `maybeDecodeDocument()` but
                // preserved in `getNewDocumentChanges()`.
                const n = Zs(this.co.serializer, new Cn(i, K.min()), this.Wn(i));
                e.push(this.co.jn(t, i, n));
            } else e.push(this.co.Hn(t, i));
        })), s.forEach((n => {
            e.push(this.co.os.Mr(t, n));
        })), e.push(this.co.updateMetadata(t, n)), ws.qn(e);
    }
    Yn(t, e) {
        // Record the size of everything we load from the cache so we can compute a delta later.
        return this.co.Xr(t, e).next((t => null === t ? (this.uo.set(e, 0), null) : (this.uo.set(e, t.size), 
        t.zn)));
    }
    Xn(t, e) {
        // Record the size of everything we load from the cache so we can compute
        // a delta later.
        return this.co.eo(t, e).next((({no: t, so: e}) => (
        // Note: `getAllFromCache` returns two maps instead of a single map from
        // keys to `DocumentSizeEntry`s. This is to allow returning the
        // `NullableMaybeDocumentMap` directly, without a conversion.
        e.forEach(((t, e) => {
            this.uo.set(t, e);
        })), t)));
    }
}

function Ei(t) {
    return Zi.Ys(t, Ci.store);
}

/**
 * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
 */ function Ti(t) {
    return Zi.Ys(t, Di.store);
}

function Ii(t) {
    return t.path.H();
}

/**
 * Retrusn an approximate size for the given document.
 */ function mi(t) {
    let e;
    if (t.document) e = t.document; else if (t.unknownDocument) e = t.unknownDocument; else {
        if (!t.noDocument) throw b();
        e = t.noDocument;
    }
    return JSON.stringify(e).length;
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
 * An in-memory implementation of IndexManager.
 */ class Ai {
    constructor() {
        this.ao = new Ri;
    }
    Mr(t, e) {
        return this.ao.add(e), ws.resolve();
    }
    As(t, e) {
        return ws.resolve(this.ao.getEntries(e));
    }
}

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */ class Ri {
    constructor() {
        this.index = {};
    }
    // Returns false if the entry already existed.
    add(t) {
        const e = t.K(), n = t.q(), s = this.index[e] || new wt(j.$), i = !s.has(n);
        return this.index[e] = s.add(n), i;
    }
    has(t) {
        const e = t.K(), n = t.q(), s = this.index[e];
        return s && s.has(n);
    }
    getEntries(t) {
        return (this.index[t] || new wt(j.$)).H();
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
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 */
/** Performs database creation and schema upgrades. */
class Pi {
    constructor(t) {
        this.serializer = t;
    }
    /**
     * Performs database creation and schema upgrades.
     *
     * Note that in production, this method is only ever used to upgrade the schema
     * to SCHEMA_VERSION. Different values of toVersion are only used for testing
     * and local feature development.
     */    createOrUpgrade(t, e, n, s) {
        S(n < s && n >= 0 && s <= 11);
        const i = new Ds("createOrUpgrade", e);
        n < 1 && s >= 1 && (function(t) {
            t.createObjectStore(yi.store);
        }
        /**
 * An object to be stored in the 'mutationQueues' store in IndexedDb.
 *
 * Each user gets a single queue of MutationBatches to apply to the server.
 * DbMutationQueue tracks the metadata about the queue.
 */ (t), function(t) {
            t.createObjectStore(Vi.store, {
                keyPath: Vi.keyPath
            });
            t.createObjectStore(pi.store, {
                keyPath: pi.keyPath,
                autoIncrement: !0
            }).createIndex(pi.userMutationsIndex, pi.userMutationsKeyPath, {
                unique: !0
            }), t.createObjectStore(vi.store);
        }
        /**
 * Upgrade function to migrate the 'mutations' store from V1 to V3. Loads
 * and rewrites all data.
 */ (t), Mi(t), function(t) {
            t.createObjectStore(Di.store);
        }
        /**
 * Represents the known absence of a document at a particular version.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ (t));
        // Migration 2 to populate the targetGlobal object no longer needed since
        // migration 3 unconditionally clears it.
                let r = ws.resolve();
        return n < 3 && s >= 3 && (
        // Brand new clients don't need to drop and recreate--only clients that
        // potentially have corrupt data.
        0 !== n && (!function(t) {
            t.deleteObjectStore(xi.store), t.deleteObjectStore(Ni.store), t.deleteObjectStore(Fi.store);
        }(t), Mi(t)), r = r.next((() => 
        /**
 * Creates the target global singleton row.
 *
 * @param txn - The version upgrade transaction for indexeddb
 */
        function(t) {
            const e = t.store(Fi.store), n = new Fi(
            /*highestTargetId=*/ 0, 
            /*lastListenSequenceNumber=*/ 0, K.min().M(), 
            /*targetCount=*/ 0);
            return e.put(Fi.key, n);
        }
        /**
 * Creates indices on the RemoteDocuments store used for both multi-tab
 * and Index-Free queries.
 */ (i)))), n < 4 && s >= 4 && (0 !== n && (
        // Schema version 3 uses auto-generated keys to generate globally unique
        // mutation batch IDs (this was previously ensured internally by the
        // client). To migrate to the new schema, we have to read all mutations
        // and write them back out. We preserve the existing batch IDs to guarantee
        // consistency with other object stores. Any further mutation batch IDs will
        // be auto-generated.
        r = r.next((() => function(t, e) {
            return e.store(pi.store).ui().next((n => {
                t.deleteObjectStore(pi.store);
                t.createObjectStore(pi.store, {
                    keyPath: pi.keyPath,
                    autoIncrement: !0
                }).createIndex(pi.userMutationsIndex, pi.userMutationsKeyPath, {
                    unique: !0
                });
                const s = e.store(pi.store), i = n.map((t => s.put(t)));
                return ws.qn(i);
            }));
        }
        /**
 * An object to be stored in the 'documentMutations' store in IndexedDb.
 *
 * A manually maintained index of all the mutation batches that affect a given
 * document key. The rows in this table are references based on the contents of
 * DbMutationBatch.mutations.
 */ (t, i)))), r = r.next((() => {
            !function(t) {
                t.createObjectStore(ki.store, {
                    keyPath: ki.keyPath
                });
            }
            /**
 * A object representing a bundle loaded by the SDK.
 */ (t);
        }))), n < 5 && s >= 5 && (r = r.next((() => this.removeAcknowledgedMutations(i)))), 
        n < 6 && s >= 6 && (r = r.next((() => (function(t) {
            t.createObjectStore(Ci.store);
        }
        /**
 * An object to be stored in the 'targets' store in IndexedDb.
 *
 * This is based on and should be kept in sync with the proto used in the iOS
 * client.
 *
 * Each query the client listens to against the server is tracked on disk so
 * that the query can be efficiently resumed on restart.
 */ (t), this.addDocumentGlobal(i))))), n < 7 && s >= 7 && (r = r.next((() => this.ensureSequenceNumbers(i)))), 
        n < 8 && s >= 8 && (r = r.next((() => this.createCollectionParentIndex(t, i)))), 
        n < 9 && s >= 9 && (r = r.next((() => {
            // Multi-Tab used to manage its own changelog, but this has been moved
            // to the DbRemoteDocument object store itself. Since the previous change
            // log only contained transient data, we can drop its object store.
            !function(t) {
                t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
            }(t), function(t) {
                const e = t.objectStore(Di.store);
                e.createIndex(Di.readTimeIndex, Di.readTimeIndexPath, {
                    unique: !1
                }), e.createIndex(Di.collectionReadTimeIndex, Di.collectionReadTimeIndexPath, {
                    unique: !1
                });
            }
            /**
 * A record of the metadata state of each client.
 *
 * PORTING NOTE: This is used to synchronize multi-tab state and does not need
 * to be ported to iOS or Android.
 */ (e);
        }))), n < 10 && s >= 10 && (r = r.next((() => this.rewriteCanonicalIds(i)))), n < 11 && s >= 11 && (r = r.next((() => {
            !function(t) {
                t.createObjectStore($i.store, {
                    keyPath: $i.keyPath
                });
            }
            /**
 * A object representing a named query loaded by the SDK via a bundle.
 */ (t), function(t) {
                t.createObjectStore(Li.store, {
                    keyPath: Li.keyPath
                });
            }
            // Visible for testing
            (t);
        }))), r;
    }
    addDocumentGlobal(t) {
        let e = 0;
        return t.store(Di.store)._i(((t, n) => {
            e += mi(n);
        })).next((() => {
            const n = new Ci(e);
            return t.store(Ci.store).put(Ci.key, n);
        }));
    }
    removeAcknowledgedMutations(t) {
        const e = t.store(Vi.store), n = t.store(pi.store);
        return e.ui().next((e => ws.forEach(e, (e => {
            const s = IDBKeyRange.bound([ e.userId, -1 ], [ e.userId, e.lastAcknowledgedBatchId ]);
            return n.ui(pi.userMutationsIndex, s).next((n => ws.forEach(n, (n => {
                S(n.userId === e.userId);
                const s = ii(this.serializer, n);
                return hi(t, e.userId, s).next((() => {}));
            }))));
        }))));
    }
    /**
     * Ensures that every document in the remote document cache has a corresponding sentinel row
     * with a sequence number. Missing rows are given the most recently used sequence number.
     */    ensureSequenceNumbers(t) {
        const e = t.store(xi.store), n = t.store(Di.store);
        return t.store(Fi.store).get(Fi.key).next((t => {
            const s = [];
            return n._i(((n, i) => {
                const r = new j(n), o = function(t) {
                    return [ 0, Gs(t) ];
                }
                /**
 * Wrapper class to store timestamps (seconds and nanos) in IndexedDb objects.
 */ (r);
                s.push(e.get(o).next((n => n ? ws.resolve() : (n => e.put(new xi(0, Gs(n), t.highestListenSequenceNumber)))(r))));
            })).next((() => ws.qn(s)));
        }));
    }
    createCollectionParentIndex(t, e) {
        // Create the index.
        t.createObjectStore(Oi.store, {
            keyPath: Oi.keyPath
        });
        const n = e.store(Oi.store), s = new Ri, i = t => {
            if (s.add(t)) {
                const e = t.K(), s = t.q();
                return n.put({
                    collectionId: e,
                    parent: Gs(s)
                });
            }
        };
        // Helper to add an index entry iff we haven't already written it.
                // Index existing remote documents.
        return e.store(Di.store)._i({
            li: !0
        }, ((t, e) => {
            const n = new j(t);
            return i(n.q());
        })).next((() => e.store(vi.store)._i({
            li: !0
        }, (([t, e, n], s) => {
            const r = Js(e);
            return i(r.q());
        }))));
    }
    rewriteCanonicalIds(t) {
        const e = t.store(Ni.store);
        return e._i(((t, n) => {
            const s = ri(n), i = oi(this.serializer, s);
            return e.put(i);
        }));
    }
}

class gi {
    constructor(t, e) {
        this.seconds = t, this.nanoseconds = e;
    }
}

/**
 * A singleton object to be stored in the 'owner' store in IndexedDb.
 *
 * A given database can have a single primary tab assigned at a given time. That
 * tab must validate that it is still holding the primary lease before every
 * operation that requires locked access. The primary tab should regularly
 * write an updated timestamp to this lease to prevent other tabs from
 * "stealing" the primary lease
 */ class yi {
    constructor(t, 
    /** Whether to allow shared access from multiple tabs. */
    e, n) {
        this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
    }
}

/**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */ yi.store = "owner", 
/**
 * The key string used for the single object that exists in the
 * DbPrimaryClient store.
 */
yi.key = "owner";

class Vi {
    constructor(
    /**
     * The normalized user ID to which this queue belongs.
     */
    t, 
    /**
     * An identifier for the highest numbered batch that has been acknowledged
     * by the server. All MutationBatches in this queue with batchIds less
     * than or equal to this value are considered to have been acknowledged by
     * the server.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
    e, 
    /**
     * A stream token that was previously sent by the server.
     *
     * See StreamingWriteRequest in datastore.proto for more details about
     * usage.
     *
     * After sending this token, earlier tokens may not be used anymore so
     * only a single stream token is retained.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
    n) {
        this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
    }
}

/** Name of the IndexedDb object store.  */ Vi.store = "mutationQueues", 
/** Keys are automatically assigned via the userId property. */
Vi.keyPath = "userId";

/**
 * An object to be stored in the 'mutations' store in IndexedDb.
 *
 * Represents a batch of user-level mutations intended to be sent to the server
 * in a single write. Each user-level batch gets a separate DbMutationBatch
 * with a new batchId.
 */
class pi {
    constructor(
    /**
     * The normalized user ID to which this batch belongs.
     */
    t, 
    /**
     * An identifier for this batch, allocated using an auto-generated key.
     */
    e, 
    /**
     * The local write time of the batch, stored as milliseconds since the
     * epoch.
     */
    n, 
    /**
     * A list of "mutations" that represent a partial base state from when this
     * write batch was initially created. During local application of the write
     * batch, these baseMutations are applied prior to the real writes in order
     * to override certain document fields from the remote document cache. This
     * is necessary in the case of non-idempotent writes (e.g. `increment()`
     * transforms) to make sure that the local view of the modified documents
     * doesn't flicker if the remote document cache receives the result of the
     * non-idempotent write before the write is removed from the queue.
     *
     * These mutations are never sent to the backend.
     */
    s, 
    /**
     * A list of mutations to apply. All mutations will be applied atomically.
     *
     * Mutations are serialized via toMutation().
     */
    i) {
        this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = s, 
        this.mutations = i;
    }
}

/** Name of the IndexedDb object store.  */ pi.store = "mutations", 
/** Keys are automatically assigned via the userId, batchId properties. */
pi.keyPath = "batchId", 
/** The index name for lookup of mutations by user. */
pi.userMutationsIndex = "userMutationsIndex", 
/** The user mutations index is keyed by [userId, batchId] pairs. */
pi.userMutationsKeyPath = [ "userId", "batchId" ];

class vi {
    constructor() {}
    /**
     * Creates a [userId] key for use in the DbDocumentMutations index to iterate
     * over all of a user's document mutations.
     */    static prefixForUser(t) {
        return [ t ];
    }
    /**
     * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
     * index to iterate over all at document mutations for a given path or lower.
     */    static prefixForPath(t, e) {
        return [ t, Gs(e) ];
    }
    /**
     * Creates a full index key of [userId, encodedPath, batchId] for inserting
     * and deleting into the DbDocumentMutations index.
     */    static key(t, e, n) {
        return [ t, Gs(e), n ];
    }
}

vi.store = "documentMutations", 
/**
 * Because we store all the useful information for this store in the key,
 * there is no useful information to store as the value. The raw (unencoded)
 * path cannot be stored because IndexedDb doesn't store prototype
 * information.
 */
vi.PLACEHOLDER = new vi;

class bi {
    constructor(t, e) {
        this.path = t, this.readTime = e;
    }
}

/**
 * Represents a document that is known to exist but whose data is unknown.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ class Si {
    constructor(t, e) {
        this.path = t, this.version = e;
    }
}

/**
 * An object to be stored in the 'remoteDocuments' store in IndexedDb.
 * It represents either:
 *
 * - A complete document.
 * - A "no document" representing a document that is known not to exist (at
 * some version).
 * - An "unknown document" representing a document that is known to exist (at
 * some version) but whose contents are unknown.
 *
 * Note: This is the persisted equivalent of a MaybeDocument and could perhaps
 * be made more general if necessary.
 */ class Di {
    // TODO: We are currently storing full document keys almost three times
    // (once as part of the primary key, once - partly - as `parentPath` and once
    // inside the encoded documents). During our next migration, we should
    // rewrite the primary key as parentPath + document ID which would allow us
    // to drop one value.
    constructor(
    /**
     * Set to an instance of DbUnknownDocument if the data for a document is
     * not known, but it is known that a document exists at the specified
     * version (e.g. it had a successful update applied to it)
     */
    t, 
    /**
     * Set to an instance of a DbNoDocument if it is known that no document
     * exists.
     */
    e, 
    /**
     * Set to an instance of a Document if there's a cached version of the
     * document.
     */
    n, 
    /**
     * Documents that were written to the remote document store based on
     * a write acknowledgment are marked with `hasCommittedMutations`. These
     * documents are potentially inconsistent with the backend's copy and use
     * the write's commit version as their document version.
     */
    s, 
    /**
     * When the document was read from the backend. Undefined for data written
     * prior to schema version 9.
     */
    i, 
    /**
     * The path of the collection this document is part of. Undefined for data
     * written prior to schema version 9.
     */
    r) {
        this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = s, 
        this.readTime = i, this.parentPath = r;
    }
}

Di.store = "remoteDocuments", 
/**
 * An index that provides access to all entries sorted by read time (which
 * corresponds to the last modification time of each row).
 *
 * This index is used to provide a changelog for Multi-Tab.
 */
Di.readTimeIndex = "readTimeIndex", Di.readTimeIndexPath = "readTime", 
/**
 * An index that provides access to documents in a collection sorted by read
 * time.
 *
 * This index is used to allow the RemoteDocumentCache to fetch newly changed
 * documents in a collection.
 */
Di.collectionReadTimeIndex = "collectionReadTimeIndex", Di.collectionReadTimeIndexPath = [ "parentPath", "readTime" ];

/**
 * Contains a single entry that has metadata about the remote document cache.
 */
class Ci {
    /**
     * @param byteSize - Approximately the total size in bytes of all the
     * documents in the document cache.
     */
    constructor(t) {
        this.byteSize = t;
    }
}

Ci.store = "remoteDocumentGlobal", Ci.key = "remoteDocumentGlobalKey";

class Ni {
    constructor(
    /**
     * An auto-generated sequential numeric identifier for the query.
     *
     * Queries are stored using their canonicalId as the key, but these
     * canonicalIds can be quite long so we additionally assign a unique
     * queryId which can be used by referenced data structures (e.g.
     * indexes) to minimize the on-disk cost.
     */
    t, 
    /**
     * The canonical string representing this query. This is not unique.
     */
    e, 
    /**
     * The last readTime received from the Watch Service for this query.
     *
     * This is the same value as TargetChange.read_time in the protos.
     */
    n, 
    /**
     * An opaque, server-assigned token that allows watching a query to be
     * resumed after disconnecting without retransmitting all the data
     * that matches the query. The resume token essentially identifies a
     * point in time from which the server should resume sending results.
     *
     * This is related to the snapshotVersion in that the resumeToken
     * effectively also encodes that value, but the resumeToken is opaque
     * and sometimes encodes additional information.
     *
     * A consequence of this is that the resumeToken should be used when
     * asking the server to reason about where this client is in the watch
     * stream, but the client should use the snapshotVersion for its own
     * purposes.
     *
     * This is the same value as TargetChange.resume_token in the protos.
     */
    s, 
    /**
     * A sequence number representing the last time this query was
     * listened to, used for garbage collection purposes.
     *
     * Conventionally this would be a timestamp value, but device-local
     * clocks are unreliable and they must be able to create new listens
     * even while disconnected. Instead this should be a monotonically
     * increasing number that's incremented on each listen call.
     *
     * This is different from the queryId since the queryId is an
     * immutable identifier assigned to the Query on first use while
     * lastListenSequenceNumber is updated every time the query is
     * listened to.
     */
    i, 
    /**
     * Denotes the maximum snapshot version at which the associated query view
     * contained no limbo documents.  Undefined for data written prior to
     * schema version 9.
     */
    r, 
    /**
     * The query for this target.
     *
     * Because canonical ids are not unique we must store the actual query. We
     * use the proto to have an object we can persist without having to
     * duplicate translation logic to and from a `Query` object.
     */
    o) {
        this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = s, 
        this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = r, this.query = o;
    }
}

Ni.store = "targets", 
/** Keys are automatically assigned via the targetId property. */
Ni.keyPath = "targetId", 
/** The name of the queryTargets index. */
Ni.queryTargetsIndexName = "queryTargetsIndex", 
/**
 * The index of all canonicalIds to the targets that they match. This is not
 * a unique mapping because canonicalId does not promise a unique name for all
 * possible queries, so we append the targetId to make the mapping unique.
 */
Ni.queryTargetsKeyPath = [ "canonicalId", "targetId" ];

/**
 * An object representing an association between a target and a document, or a
 * sentinel row marking the last sequence number at which a document was used.
 * Each document cached must have a corresponding sentinel row before lru
 * garbage collection is enabled.
 *
 * The target associations and sentinel rows are co-located so that orphaned
 * documents and their sequence numbers can be identified efficiently via a scan
 * of this store.
 */
class xi {
    constructor(
    /**
     * The targetId identifying a target or 0 for a sentinel row.
     */
    t, 
    /**
     * The path to the document, as encoded in the key.
     */
    e, 
    /**
     * If this is a sentinel row, this should be the sequence number of the last
     * time the document specified by `path` was used. Otherwise, it should be
     * `undefined`.
     */
    n) {
        this.targetId = t, this.path = e, this.sequenceNumber = n;
    }
}

/** Name of the IndexedDb object store.  */ xi.store = "targetDocuments", 
/** Keys are automatically assigned via the targetId, path properties. */
xi.keyPath = [ "targetId", "path" ], 
/** The index name for the reverse index. */
xi.documentTargetsIndex = "documentTargetsIndex", 
/** We also need to create the reverse index for these properties. */
xi.documentTargetsKeyPath = [ "path", "targetId" ];

/**
 * A record of global state tracked across all Targets, tracked separately
 * to avoid the need for extra indexes.
 *
 * This should be kept in-sync with the proto used in the iOS client.
 */
class Fi {
    constructor(
    /**
     * The highest numbered target id across all targets.
     *
     * See DbTarget.targetId.
     */
    t, 
    /**
     * The highest numbered lastListenSequenceNumber across all targets.
     *
     * See DbTarget.lastListenSequenceNumber.
     */
    e, 
    /**
     * A global snapshot version representing the last consistent snapshot we
     * received from the backend. This is monotonically increasing and any
     * snapshots received from the backend prior to this version (e.g. for
     * targets resumed with a resumeToken) should be suppressed (buffered)
     * until the backend has caught up to this snapshot version again. This
     * prevents our cache from ever going backwards in time.
     */
    n, 
    /**
     * The number of targets persisted.
     */
    s) {
        this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, 
        this.targetCount = s;
    }
}

/**
 * The key string used for the single object that exists in the
 * DbTargetGlobal store.
 */ Fi.key = "targetGlobalKey", Fi.store = "targetGlobal";

/**
 * An object representing an association between a Collection id (e.g. 'messages')
 * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
 * This is used to efficiently find all collections to query when performing
 * a Collection Group query.
 */
class Oi {
    constructor(
    /**
     * The collectionId (e.g. 'messages')
     */
    t, 
    /**
     * The path to the parent (either a document location or an empty path for
     * a root-level collection).
     */
    e) {
        this.collectionId = t, this.parent = e;
    }
}

/** Name of the IndexedDb object store. */ function Mi(t) {
    t.createObjectStore(xi.store, {
        keyPath: xi.keyPath
    }).createIndex(xi.documentTargetsIndex, xi.documentTargetsKeyPath, {
        unique: !0
    });
    // NOTE: This is unique only because the TargetId is the suffix.
    t.createObjectStore(Ni.store, {
        keyPath: Ni.keyPath
    }).createIndex(Ni.queryTargetsIndexName, Ni.queryTargetsKeyPath, {
        unique: !0
    }), t.createObjectStore(Fi.store);
}

Oi.store = "collectionParents", 
/** Keys are automatically assigned via the collectionId, parent properties. */
Oi.keyPath = [ "collectionId", "parent" ];

class ki {
    constructor(
    // Note: Previous schema versions included a field
    // "lastProcessedDocumentChangeId". Don't use anymore.
    /** The auto-generated client id assigned at client startup. */
    t, 
    /** The last time this state was updated. */
    e, 
    /** Whether the client's network connection is enabled. */
    n, 
    /** Whether this client is running in a foreground tab. */
    s) {
        this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = s;
    }
}

/** Name of the IndexedDb object store. */ ki.store = "clientMetadata", 
/** Keys are automatically assigned via the clientId properties. */
ki.keyPath = "clientId";

class $i {
    constructor(
    /** The ID of the loaded bundle. */
    t, 
    /** The create time of the loaded bundle. */
    e, 
    /** The schema version of the loaded bundle. */
    n) {
        this.bundleId = t, this.createTime = e, this.version = n;
    }
}

/** Name of the IndexedDb object store. */ $i.store = "bundles", $i.keyPath = "bundleId";

class Li {
    constructor(
    /** The name of the query. */
    t, 
    /** The read time of the results saved in the bundle from the named query. */
    e, 
    /** The query saved in the bundle. */
    n) {
        this.name = t, this.readTime = e, this.bundledQuery = n;
    }
}

/** Name of the IndexedDb object store. */ Li.store = "namedQueries", Li.keyPath = "name";

const Bi = [ ...[ ...[ ...[ ...[ Vi.store, pi.store, vi.store, Di.store, Ni.store, yi.store, Fi.store, xi.store ], ki.store ], Ci.store ], Oi.store ], $i.store, Li.store ];

// V2 is no longer usable (see comment at top of file)
// Visible for testing
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
class qi {
    constructor(t) {
        this.serializer = t;
    }
    ho(t, e) {
        return Ui(t).get(e).next((t => {
            if (t) return {
                id: (e = t).bundleId,
                createTime: si(e.createTime),
                version: e.version
            };
            /** Encodes a DbBundle to a Bundle. */
            var e;
            /** Encodes a BundleMetadata to a DbBundle. */        }));
    }
    lo(t, e) {
        return Ui(t).put({
            bundleId: (n = e).id,
            createTime: ni(Te(n.createTime)),
            version: n.version
        });
        var n;
        /** Encodes a DbNamedQuery to a NamedQuery. */    }
    _o(t, e) {
        return Qi(t).get(e).next((t => {
            if (t) return {
                name: (e = t).name,
                query: ci(e.bundledQuery),
                readTime: si(e.readTime)
            };
            var e;
            /** Encodes a NamedQuery from a bundle proto to a DbNamedQuery. */        }));
    }
    fo(t, e) {
        return Qi(t).put(function(t) {
            return {
                name: t.name,
                readTime: ni(Te(t.readTime)),
                bundledQuery: t.bundledQuery
            };
        }(e));
    }
}

/**
 * Helper to get a typed SimpleDbStore for the bundles object store.
 */ function Ui(t) {
    return Zi.Ys(t, $i.store);
}

/**
 * Helper to get a typed SimpleDbStore for the namedQueries object store.
 */ function Qi(t) {
    return Zi.Ys(t, Li.store);
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
 * A persisted implementation of IndexManager.
 */ class Ki {
    constructor() {
        /**
         * An in-memory copy of the index entries we've already written since the SDK
         * launched. Used to avoid re-writing the same entry repeatedly.
         *
         * This is *NOT* a complete cache of what's in persistence and so can never be used to
         * satisfy reads.
         */
        this.wo = new Ri;
    }
    /**
     * Adds a new entry to the collection parent index.
     *
     * Repeated calls for the same collectionPath should be avoided within a
     * transaction as IndexedDbIndexManager only caches writes once a transaction
     * has been committed.
     */    Mr(t, e) {
        if (!this.wo.has(e)) {
            const n = e.K(), s = e.q();
            t.es((() => {
                // Add the collection to the in memory cache only if the transaction was
                // successfully committed.
                this.wo.add(e);
            }));
            const i = {
                collectionId: n,
                parent: Gs(s)
            };
            return Wi(t).put(i);
        }
        return ws.resolve();
    }
    As(t, e) {
        const n = [], s = IDBKeyRange.bound([ e, "" ], [ U(e), "" ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return Wi(t).ui(s).next((t => {
            for (const s of t) {
                // This collectionId guard shouldn't be necessary (and isn't as long
                // as we're running in a real browser), but there's a bug in
                // indexeddbshim that breaks our range in our tests running in node:
                // https://github.com/axemclion/IndexedDBShim/issues/334
                if (s.collectionId !== e) break;
                n.push(Js(s.parent));
            }
            return n;
        }));
    }
}

/**
 * Helper to get a typed SimpleDbStore for the collectionParents
 * document store.
 */ function Wi(t) {
    return Zi.Ys(t, Oi.store);
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
class ji {
    constructor(t) {
        this.Eo = t;
    }
    next() {
        return this.Eo += 2, this.Eo;
    }
    static To() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new ji(0);
    }
    static Io() {
        // Sync engine assigns target IDs for limbo document detection.
        return new ji(-1);
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
 */ class Gi {
    constructor(t, e) {
        this.Dr = t, this.serializer = e;
    }
    // PORTING NOTE: We don't cache global metadata for the target cache, since
    // some of it (in particular `highestTargetId`) can be modified by secondary
    // tabs. We could perhaps be more granular (and e.g. still cache
    // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
    // to IndexedDb whenever we need to read metadata. We can revisit if it turns
    // out to have a meaningful performance impact.
    mo(t) {
        return this.Ao(t).next((e => {
            const n = new ji(e.highestTargetId);
            return e.highestTargetId = n.next(), this.Ro(t, e).next((() => e.highestTargetId));
        }));
    }
    Po(t) {
        return this.Ao(t).next((t => K.N(new Q(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds))));
    }
    yo(t) {
        return this.Ao(t).next((t => t.highestListenSequenceNumber));
    }
    Vo(t, e, n) {
        return this.Ao(t).next((s => (s.highestListenSequenceNumber = e, n && (s.lastRemoteSnapshotVersion = n.M()), 
        e > s.highestListenSequenceNumber && (s.highestListenSequenceNumber = e), this.Ro(t, s))));
    }
    po(t, e) {
        return this.vo(t, e).next((() => this.Ao(t).next((n => (n.targetCount += 1, this.bo(e, n), 
        this.Ro(t, n))))));
    }
    So(t, e) {
        return this.vo(t, e);
    }
    Do(t, e) {
        return this.Co(t, e.targetId).next((() => zi(t).delete(e.targetId))).next((() => this.Ao(t))).next((e => (S(e.targetCount > 0), 
        e.targetCount -= 1, this.Ro(t, e))));
    }
    /**
     * Drops any targets with sequence number less than or equal to the upper bound, excepting those
     * present in `activeTargetIds`. Document associations for the removed targets are also removed.
     * Returns the number of targets removed.
     */    mr(t, e, n) {
        let s = 0;
        const i = [];
        return zi(t)._i(((r, o) => {
            const c = ri(o);
            c.sequenceNumber <= e && null === n.get(c.targetId) && (s++, i.push(this.Do(t, c)));
        })).next((() => ws.qn(i))).next((() => s));
    }
    /**
     * Call provided function with each `TargetData` that we have cached.
     */    Ue(t, e) {
        return zi(t)._i(((t, n) => {
            const s = ri(n);
            e(s);
        }));
    }
    Ao(t) {
        return Hi(t).get(Fi.key).next((t => (S(null !== t), t)));
    }
    Ro(t, e) {
        return Hi(t).put(Fi.key, e);
    }
    vo(t, e) {
        return zi(t).put(oi(this.serializer, e));
    }
    /**
     * In-place updates the provided metadata to account for values in the given
     * TargetData. Saving is done separately. Returns true if there were any
     * changes to the metadata.
     */    bo(t, e) {
        let n = !1;
        return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), 
        t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, 
        n = !0), n;
    }
    No(t) {
        return this.Ao(t).next((t => t.targetCount));
    }
    xo(t, e) {
        // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficient.
        const n = et(e), s = IDBKeyRange.bound([ n, Number.NEGATIVE_INFINITY ], [ n, Number.POSITIVE_INFINITY ]);
        let i = null;
        return zi(t)._i({
            range: s,
            index: Ni.queryTargetsIndexName
        }, ((t, n, s) => {
            const r = ri(n);
            // After finding a potential match, check that the target is
            // actually equal to the requested target.
                        st(e, r.target) && (i = r, s.done());
        })).next((() => i));
    }
    Fo(t, e, n) {
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
        const s = [], i = Ji(t);
        return e.forEach((e => {
            const r = Gs(e.path);
            s.push(i.put(new xi(n, r))), s.push(this.Dr.Oo(t, n, e));
        })), ws.qn(s);
    }
    Mo(t, e, n) {
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
        const s = Ji(t);
        return ws.forEach(e, (e => {
            const i = Gs(e.path);
            return ws.qn([ s.delete([ n, i ]), this.Dr.ko(t, n, e) ]);
        }));
    }
    Co(t, e) {
        const n = Ji(t), s = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return n.delete(s);
    }
    $o(t, e) {
        const n = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), s = Ji(t);
        let i = yt();
        return s._i({
            range: n,
            li: !0
        }, ((t, e, n) => {
            const s = Js(t[1]), r = new H(s);
            i = i.add(r);
        })).next((() => i));
    }
    zr(t, e) {
        const n = Gs(e.path), s = IDBKeyRange.bound([ n ], [ U(n) ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        let i = 0;
        return Ji(t)._i({
            index: xi.documentTargetsIndex,
            li: !0,
            range: s
        }, (([t, e], n, s) => {
            // Having a sentinel row for a document does not count as containing that document;
            // For the target cache, containing the document means the document is part of some
            // target.
            0 !== t && (i++, s.done());
        })).next((() => i > 0));
    }
    /**
     * Looks up a TargetData entry by target ID.
     *
     * @param targetId - The target ID of the TargetData entry to look up.
     * @returns The cached TargetData entry, or null if the cache has no entry for
     * the target.
     */
    // PORTING NOTE: Multi-tab only.
    Ze(t, e) {
        return zi(t).get(e).next((t => t ? ri(t) : null));
    }
}

/**
 * Helper to get a typed SimpleDbStore for the queries object store.
 */ function zi(t) {
    return Zi.Ys(t, Ni.store);
}

/**
 * Helper to get a typed SimpleDbStore for the target globals object store.
 */ function Hi(t) {
    return Zi.Ys(t, Fi.store);
}

/**
 * Helper to get a typed SimpleDbStore for the document target object store.
 */ function Ji(t) {
    return Zi.Ys(t, xi.store);
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
 */ const Yi = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";

/**
 * Oldest acceptable age in milliseconds for client metadata before the client
 * is considered inactive and its associated data is garbage collected.
 */ class Xi extends Rs {
    constructor(t, e) {
        super(), this.Kr = t, this.Lo = e;
    }
}

/**
 * An IndexedDB-backed instance of Persistence. Data is stored persistently
 * across sessions.
 *
 * On Web only, the Firestore SDKs support shared access to its persistence
 * layer. This allows multiple browser tabs to read and write to IndexedDb and
 * to synchronize state even without network connectivity. Shared access is
 * currently optional and not enabled unless all clients invoke
 * `enablePersistence()` with `{synchronizeTabs:true}`.
 *
 * In multi-tab mode, if multiple clients are active at the same time, the SDK
 * will designate one client as the “primary client”. An effort is made to pick
 * a visible, network-connected and active client, and this client is
 * responsible for letting other clients know about its presence. The primary
 * client writes a unique client-generated identifier (the client ID) to
 * IndexedDb’s “owner” store every 4 seconds. If the primary client fails to
 * update this entry, another client can acquire the lease and take over as
 * primary.
 *
 * Some persistence operations in the SDK are designated as primary-client only
 * operations. This includes the acknowledgment of mutations and all updates of
 * remote documents. The effects of these operations are written to persistence
 * and then broadcast to other tabs via LocalStorage (see
 * `WebStorageSharedClientState`), which then refresh their state from
 * persistence.
 *
 * Similarly, the primary client listens to notifications sent by secondary
 * clients to discover persistence changes written by secondary clients, such as
 * the addition of new mutations and query targets.
 *
 * If multi-tab is not enabled and another tab already obtained the primary
 * lease, IndexedDbPersistence enters a failed state and all subsequent
 * operations will automatically fail.
 *
 * Additionally, there is an optimization so that when a tab is closed, the
 * primary lease is released immediately (this is especially important to make
 * sure that a refreshed tab is able to immediately re-acquire the primary
 * lease). Unfortunately, IndexedDB cannot be reliably used in window.unload
 * since it is an asynchronous API. So in addition to attempting to give up the
 * lease, the leaseholder writes its client ID to a "zombiedClient" entry in
 * LocalStorage which acts as an indicator that another tab should go ahead and
 * take the primary lease immediately regardless of the current lease timestamp.
 *
 * TODO(b/114226234): Remove `synchronizeTabs` section when multi-tab is no
 * longer optional.
 */ class Zi {
    constructor(
    /**
     * Whether to synchronize the in-memory state of multiple tabs and share
     * access to local persistence.
     */
    t, e, n, s, i, r, o, c, u, 
    /**
     * If set to true, forcefully obtains database access. Existing tabs will
     * no longer be able to access IndexedDB.
     */
    a) {
        if (this.allowTabSynchronization = t, this.persistenceKey = e, this.clientId = n, 
        this.Cs = i, this.window = r, this.document = o, this.Bo = u, this.qo = a, this.Uo = null, 
        this.Qo = !1, this.isPrimary = !1, this.networkEnabled = !0, 
        /** Our window.unload handler, if registered. */
        this.Ko = null, this.inForeground = !1, 
        /** Our 'visibilitychange' listener if registered. */
        this.Wo = null, 
        /** The client metadata refresh task. */
        this.jo = null, 
        /** The last time we garbage collected the client metadata object store. */
        this.Go = Number.NEGATIVE_INFINITY, 
        /** A listener to notify on primary state changes. */
        this.zo = t => Promise.resolve(), !Zi.Gs()) throw new N(C.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
        this.Dr = new nr(this, s), this.Ho = e + "main", this.serializer = new Ys(c), this.Jo = new ps(this.Ho, 11, new Pi(this.serializer)), 
        this.Yo = new Gi(this.Dr, this.serializer), this.os = new Ki, this.ss = function(t, e) {
            return new di(t, e);
        }
        /**
 * Returns the set of documents that have changed since the specified read
 * time.
 */
        // PORTING NOTE: This is only used for multi-tab synchronization.
        (this.serializer, this.os), this.Xo = new qi(this.serializer), this.window && this.window.localStorage ? this.Zo = this.window.localStorage : (this.Zo = null, 
        !1 === a && V("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
    }
    static Ys(t, e) {
        if (t instanceof Xi) return ps.Ys(t.Kr, e);
        throw b();
    }
    /**
     * Attempt to start IndexedDb persistence.
     *
     * @returns Whether persistence was enabled.
     */    start() {
        // NOTE: This is expected to fail sometimes (in the case of another tab
        // already having the persistence lock), so it's the first thing we should
        // do.
        return this.tc().then((() => {
            if (!this.isPrimary && !this.allowTabSynchronization) 
            // Fail `start()` if `synchronizeTabs` is disabled and we cannot
            // obtain the primary lease.
            throw new N(C.FAILED_PRECONDITION, Yi);
            return this.ec(), this.nc(), this.sc(), this.runTransaction("getHighestListenSequenceNumber", "readonly", (t => this.Yo.yo(t)));
        })).then((t => {
            this.Uo = new ys(t, this.Bo);
        })).then((() => {
            this.Qo = !0;
        })).catch((t => (this.Jo && this.Jo.close(), Promise.reject(t))));
    }
    /**
     * Registers a listener that gets called when the primary state of the
     * instance changes. Upon registering, this listener is invoked immediately
     * with the current primary state.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */    ic(t) {
        return this.zo = async e => {
            if (this.lr) return t(e);
        }, t(this.isPrimary);
    }
    /**
     * Registers a listener that gets called when the database receives a
     * version change event indicating that it has deleted.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */    rc(t) {
        this.Jo.ti((async e => {
            // Check if an attempt is made to delete IndexedDB.
            null === e.newVersion && await t();
        }));
    }
    /**
     * Adjusts the current network state in the client's metadata, potentially
     * affecting the primary lease.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */    oc(t) {
        this.networkEnabled !== t && (this.networkEnabled = t, 
        // Schedule a primary lease refresh for immediate execution. The eventual
        // lease update will be propagated via `primaryStateListener`.
        this.Cs.Ri((async () => {
            this.lr && await this.tc();
        })));
    }
    /**
     * Updates the client metadata in IndexedDb and attempts to either obtain or
     * extend the primary lease for the local client. Asynchronously notifies the
     * primary state listener if the client either newly obtained or released its
     * primary lease.
     */    tc() {
        return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (t => er(t).put(new ki(this.clientId, Date.now(), this.networkEnabled, this.inForeground)).next((() => {
            if (this.isPrimary) return this.cc(t).next((t => {
                t || (this.isPrimary = !1, this.Cs.Mi((() => this.zo(!1))));
            }));
        })).next((() => this.uc(t))).next((e => this.isPrimary && !e ? this.ac(t).next((() => !1)) : !!e && this.hc(t).next((() => !0)))))).catch((t => {
            if (Ss(t)) 
            // Proceed with the existing state. Any subsequent access to
            // IndexedDB will verify the lease.
            return y("IndexedDbPersistence", "Failed to extend owner lease: ", t), this.isPrimary;
            if (!this.allowTabSynchronization) throw t;
            return y("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", t), 
            /* isPrimary= */ !1;
        })).then((t => {
            this.isPrimary !== t && this.Cs.Mi((() => this.zo(t))), this.isPrimary = t;
        }));
    }
    cc(t) {
        return tr(t).get(yi.key).next((t => ws.resolve(this.lc(t))));
    }
    _c(t) {
        return er(t).delete(this.clientId);
    }
    /**
     * If the garbage collection threshold has passed, prunes the
     * RemoteDocumentChanges and the ClientMetadata store based on the last update
     * time of all clients.
     */    async fc() {
        if (this.isPrimary && !this.dc(this.Go, 18e5)) {
            this.Go = Date.now();
            const t = await this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (t => {
                const e = Zi.Ys(t, ki.store);
                return e.ui().next((t => {
                    const n = this.wc(t, 18e5), s = t.filter((t => -1 === n.indexOf(t)));
                    // Delete metadata for clients that are no longer considered active.
                    return ws.forEach(s, (t => e.delete(t.clientId))).next((() => s));
                }));
            })).catch((() => []));
            // Delete potential leftover entries that may continue to mark the
            // inactive clients as zombied in LocalStorage.
            // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
            // the client atomically, but we can't. So we opt to delete the IndexedDb
            // entries first to avoid potentially reviving a zombied client.
                        if (this.Zo) for (const e of t) this.Zo.removeItem(this.Ec(e.clientId));
        }
    }
    /**
     * Schedules a recurring timer to update the client metadata and to either
     * extend or acquire the primary lease if the client is eligible.
     */    sc() {
        this.jo = this.Cs.Us("client_metadata_refresh" /* ClientMetadataRefresh */ , 4e3, (() => this.tc().then((() => this.fc())).then((() => this.sc()))));
    }
    /** Checks whether `client` is the local client. */    lc(t) {
        return !!t && t.ownerId === this.clientId;
    }
    /**
     * Evaluate the state of all active clients and determine whether the local
     * client is or can act as the holder of the primary lease. Returns whether
     * the client is eligible for the lease, but does not actually acquire it.
     * May return 'false' even if there is no active leaseholder and another
     * (foreground) client should become leaseholder instead.
     */    uc(t) {
        if (this.qo) return ws.resolve(!0);
        return tr(t).get(yi.key).next((e => {
            // A client is eligible for the primary lease if:
            // - its network is enabled and the client's tab is in the foreground.
            // - its network is enabled and no other client's tab is in the
            //   foreground.
            // - every clients network is disabled and the client's tab is in the
            //   foreground.
            // - every clients network is disabled and no other client's tab is in
            //   the foreground.
            // - the `forceOwningTab` setting was passed in.
            if (null !== e && this.dc(e.leaseTimestampMs, 5e3) && !this.Tc(e.ownerId)) {
                if (this.lc(e) && this.networkEnabled) return !0;
                if (!this.lc(e)) {
                    if (!e.allowTabSynchronization) 
                    // Fail the `canActAsPrimary` check if the current leaseholder has
                    // not opted into multi-tab synchronization. If this happens at
                    // client startup, we reject the Promise returned by
                    // `enablePersistence()` and the user can continue to use Firestore
                    // with in-memory persistence.
                    // If this fails during a lease refresh, we will instead block the
                    // AsyncQueue from executing further operations. Note that this is
                    // acceptable since mixing & matching different `synchronizeTabs`
                    // settings is not supported.
                    // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                    // no longer be turned off.
                    throw new N(C.FAILED_PRECONDITION, Yi);
                    return !1;
                }
            }
            return !(!this.networkEnabled || !this.inForeground) || er(t).ui().next((t => void 0 === this.wc(t, 5e3).find((t => {
                if (this.clientId !== t.clientId) {
                    const e = !this.networkEnabled && t.networkEnabled, n = !this.inForeground && t.inForeground, s = this.networkEnabled === t.networkEnabled;
                    if (e || n && s) return !0;
                }
                return !1;
            }))));
        })).next((t => (this.isPrimary !== t && y("IndexedDbPersistence", `Client ${t ? "is" : "is not"} eligible for a primary lease.`), 
        t)));
    }
    async Ic() {
        // The shutdown() operations are idempotent and can be called even when
        // start() aborted (e.g. because it couldn't acquire the persistence lease).
        this.Qo = !1, this.mc(), this.jo && (this.jo.cancel(), this.jo = null), this.Ac(), 
        this.Rc(), 
        // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
        // has obtained the primary lease.
        await this.Jo.runTransaction("shutdown", "readwrite", [ yi.store, ki.store ], (t => {
            const e = new Xi(t, ys.Ds);
            return this.ac(e).next((() => this._c(e)));
        })), this.Jo.close(), 
        // Remove the entry marking the client as zombied from LocalStorage since
        // we successfully deleted its metadata from IndexedDb.
        this.Pc();
    }
    /**
     * Returns clients that are not zombied and have an updateTime within the
     * provided threshold.
     */    wc(t, e) {
        return t.filter((t => this.dc(t.updateTimeMs, e) && !this.Tc(t.clientId)));
    }
    /**
     * Returns the IDs of the clients that are currently active. If multi-tab
     * is not supported, returns an array that only contains the local client's
     * ID.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */    gc() {
        return this.runTransaction("getActiveClients", "readonly", (t => er(t).ui().next((t => this.wc(t, 18e5).map((t => t.clientId))))));
    }
    get lr() {
        return this.Qo;
    }
    yc(t) {
        return ui.Nr(t, this.serializer, this.os, this.Dr);
    }
    Vc() {
        return this.Yo;
    }
    vc() {
        return this.ss;
    }
    bc() {
        return this.os;
    }
    Sc() {
        return this.Xo;
    }
    runTransaction(t, e, n) {
        y("IndexedDbPersistence", "Starting transaction:", t);
        const s = "readonly" === e ? "readonly" : "readwrite";
        let i;
        // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.
                return this.Jo.runTransaction(t, s, Bi, (s => (i = new Xi(s, this.Uo ? this.Uo.next() : ys.Ds), 
        "readwrite-primary" === e ? this.cc(i).next((t => !!t || this.uc(i))).next((e => {
            if (!e) throw V(`Failed to obtain primary lease for action '${t}'.`), this.isPrimary = !1, 
            this.Cs.Mi((() => this.zo(!1))), new N(C.FAILED_PRECONDITION, As);
            return n(i);
        })).next((t => this.hc(i).next((() => t)))) : this.Dc(i).next((() => n(i)))))).then((t => (i.ns(), 
        t)));
    }
    /**
     * Verifies that the current tab is the primary leaseholder or alternatively
     * that the leaseholder has opted into multi-tab synchronization.
     */
    // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
    // be turned off.
    Dc(t) {
        return tr(t).get(yi.key).next((t => {
            if (null !== t && this.dc(t.leaseTimestampMs, 5e3) && !this.Tc(t.ownerId) && !this.lc(t) && !(this.qo || this.allowTabSynchronization && t.allowTabSynchronization)) throw new N(C.FAILED_PRECONDITION, Yi);
        }));
    }
    /**
     * Obtains or extends the new primary lease for the local client. This
     * method does not verify that the client is eligible for this lease.
     */    hc(t) {
        const e = new yi(this.clientId, this.allowTabSynchronization, Date.now());
        return tr(t).put(yi.key, e);
    }
    static Gs() {
        return ps.Gs();
    }
    /** Checks the primary lease and removes it if we are the current primary. */    ac(t) {
        const e = tr(t);
        return e.get(yi.key).next((t => this.lc(t) ? (y("IndexedDbPersistence", "Releasing primary lease."), 
        e.delete(yi.key)) : ws.resolve()));
    }
    /** Verifies that `updateTimeMs` is within `maxAgeMs`. */    dc(t, e) {
        const n = Date.now();
        return !(t < n - e) && (!(t > n) || (V(`Detected an update time that is in the future: ${t} > ${n}`), 
        !1));
    }
    ec() {
        null !== this.document && "function" == typeof this.document.addEventListener && (this.Wo = () => {
            this.Cs.Ri((() => (this.inForeground = "visible" === this.document.visibilityState, 
            this.tc())));
        }, this.document.addEventListener("visibilitychange", this.Wo), this.inForeground = "visible" === this.document.visibilityState);
    }
    Ac() {
        this.Wo && (this.document.removeEventListener("visibilitychange", this.Wo), this.Wo = null);
    }
    /**
     * Attaches a window.unload handler that will synchronously write our
     * clientId to a "zombie client id" location in LocalStorage. This can be used
     * by tabs trying to acquire the primary lease to determine that the lease
     * is no longer valid even if the timestamp is recent. This is particularly
     * important for the refresh case (so the tab correctly re-acquires the
     * primary lease). LocalStorage is used for this rather than IndexedDb because
     * it is a synchronous API and so can be used reliably from  an unload
     * handler.
     */    nc() {
        var t;
        "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.Ko = () => {
            // Note: In theory, this should be scheduled on the AsyncQueue since it
            // accesses internal state. We execute this code directly during shutdown
            // to make sure it gets a chance to run.
            this.mc(), this.Cs.Ri((() => this.Ic()));
        }, this.window.addEventListener("unload", this.Ko));
    }
    Rc() {
        this.Ko && (this.window.removeEventListener("unload", this.Ko), this.Ko = null);
    }
    /**
     * Returns whether a client is "zombied" based on its LocalStorage entry.
     * Clients become zombied when their tab closes without running all of the
     * cleanup logic in `shutdown()`.
     */    Tc(t) {
        var e;
        try {
            const n = null !== (null === (e = this.Zo) || void 0 === e ? void 0 : e.getItem(this.Ec(t)));
            return y("IndexedDbPersistence", `Client '${t}' ${n ? "is" : "is not"} zombied in LocalStorage`), 
            n;
        } catch (t) {
            // Gracefully handle if LocalStorage isn't working.
            return V("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
        }
    }
    /**
     * Record client as zombied (a client that had its tab closed). Zombied
     * clients are ignored during primary tab selection.
     */    mc() {
        if (this.Zo) try {
            this.Zo.setItem(this.Ec(this.clientId), String(Date.now()));
        } catch (t) {
            // Gracefully handle if LocalStorage isn't available / working.
            V("Failed to set zombie client id.", t);
        }
    }
    /** Removes the zombied client entry if it exists. */    Pc() {
        if (this.Zo) try {
            this.Zo.removeItem(this.Ec(this.clientId));
        } catch (t) {
            // Ignore
        }
    }
    Ec(t) {
        return `firestore_zombie_${this.persistenceKey}_${t}`;
    }
}

/**
 * Helper to get a typed SimpleDbStore for the primary client object store.
 */ function tr(t) {
    return Zi.Ys(t, yi.store);
}

/**
 * Helper to get a typed SimpleDbStore for the client metadata object store.
 */ function er(t) {
    return Zi.Ys(t, ki.store);
}

/** Provides LRU functionality for IndexedDB persistence. */ class nr {
    constructor(t, e) {
        this.db = t, this.cr = new Ws(this, e);
    }
    Er(t) {
        const e = this.Cc(t);
        return this.db.Vc().No(t).next((t => e.next((e => t + e))));
    }
    Cc(t) {
        let e = 0;
        return this.Ir(t, (t => {
            e++;
        })).next((() => e));
    }
    Ue(t, e) {
        return this.db.Vc().Ue(t, e);
    }
    Ir(t, e) {
        return this.Nc(t, ((t, n) => e(n)));
    }
    Oo(t, e, n) {
        return sr(t, n);
    }
    ko(t, e, n) {
        return sr(t, n);
    }
    mr(t, e, n) {
        return this.db.Vc().mr(t, e, n);
    }
    jr(t, e) {
        return sr(t, e);
    }
    /**
     * Returns true if anything would prevent this document from being garbage
     * collected, given that the document in question is not present in any
     * targets and has a sequence number less than or equal to the upper bound for
     * the collection run.
     */    xc(t, e) {
        return function(t, e) {
            let n = !1;
            return fi(t).fi((s => ai(t, s, e).next((t => (t && (n = !0), ws.resolve(!t)))))).next((() => n));
        }(t, e);
    }
    Ar(t, e) {
        const n = this.db.vc().io(), s = [];
        let i = 0;
        return this.Nc(t, ((r, o) => {
            if (o <= e) {
                const e = this.xc(t, r).next((e => {
                    if (!e) 
                    // Our size accounting requires us to read all documents before
                    // removing them.
                    return i++, n.Jn(t, r).next((() => (n.Hn(r), Ji(t).delete([ 0, Gs(r.path) ]))));
                }));
                s.push(e);
            }
        })).next((() => ws.qn(s))).next((() => n.apply(t))).next((() => i));
    }
    removeTarget(t, e) {
        const n = e.dt(t.Lo);
        return this.db.Vc().So(t, n);
    }
    Fc(t, e) {
        return sr(t, e);
    }
    /**
     * Call provided function for each document in the cache that is 'orphaned'. Orphaned
     * means not a part of any target, so the only entry in the target-document index for
     * that document will be the sentinel row (targetId 0), which will also have the sequence
     * number for the last time the document was accessed.
     */    Nc(t, e) {
        const n = Ji(t);
        let s, i = ys.Ds;
        return n._i({
            index: xi.documentTargetsIndex
        }, (([t, n], {path: r, sequenceNumber: o}) => {
            0 === t ? (
            // if nextToReport is valid, report it, this is a new key so the
            // last one must not be a member of any targets.
            i !== ys.Ds && e(new H(Js(s)), i), 
            // set nextToReport to be this sequence number. It's the next one we
            // might report, if we don't find any targets for this document.
            // Note that the sequence number must be defined when the targetId
            // is 0.
            i = o, s = r) : 
            // set nextToReport to be invalid, we know we don't need to report
            // this one since we found a target for it.
            i = ys.Ds;
        })).next((() => {
            // Since we report sequence numbers after getting to the next key, we
            // need to check if the last key we iterated over was an orphaned
            // document and report it.
            i !== ys.Ds && e(new H(Js(s)), i);
        }));
    }
    Pr(t) {
        return this.db.vc().oo(t);
    }
}

function sr(t, e) {
    return Ji(t).put(
    /**
 * @returns A value suitable for writing a sentinel row in the target-document
 * store.
 */
    function(t, e) {
        return new xi(0, Gs(t.path), e);
    }(e, t.Lo));
}

/**
 * Generates a string used as a prefix when storing data in IndexedDB and
 * LocalStorage.
 */ function ir(t, e) {
    // Use two different prefix formats:
    //   * firestore / persistenceKey / projectID . databaseID / ...
    //   * firestore / persistenceKey / projectID / ...
    // projectIDs are DNS-compatible names and cannot contain dots
    // so there's no danger of collisions.
    let n = t.projectId;
    return t.o || (n += "." + t.database), "firestore/" + e + "/" + n + "/";
}

/**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */
class rr {
    constructor(
    /** Manages our in-memory or durable persistence. */
    t, e, n, s) {
        this.persistence = t, this.Oc = e, this.serializer = s, 
        /**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */
        this.Mc = new _t(B), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.kc = new ds((t => et(t)), st), 
        /**
         * The read time of the last entry processed by `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */
        this.$c = K.min(), this.rs = t.yc(n), this.Lc = t.vc(), this.Yo = t.Vc(), this.Bc = new Ps(this.Lc, this.rs, this.persistence.bc()), 
        this.Xo = t.Sc(), this.Oc.yr(this.Bc);
    }
    _r(t) {
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (e => t.Rr(e, this.Mc)));
    }
}

function or(
/** Manages our in-memory or durable persistence. */
t, e, n, s) {
    return new rr(t, e, n, s);
}

/**
 * Tells the LocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and
 * returns any resulting document changes.
 */
// PORTING NOTE: Android and iOS only return the documents affected by the
// change.
async function cr(t, e) {
    const n = D(t);
    let s = n.rs, i = n.Bc;
    const r = await n.persistence.runTransaction("Handle user change", "readonly", (t => {
        // Swap out the mutation queue, grabbing the pending mutation batches
        // before and after.
        let r;
        return n.rs.qr(t).next((o => (r = o, s = n.persistence.yc(e), 
        // Recreate our LocalDocumentsView using the new
        // MutationQueue.
        i = new Ps(n.Lc, s, n.persistence.bc()), s.qr(t)))).next((e => {
            const n = [], s = [];
            // Union the old/new changed keys.
            let o = yt();
            for (const t of r) {
                n.push(t.batchId);
                for (const e of t.mutations) o = o.add(e.key);
            }
            for (const t of e) {
                s.push(t.batchId);
                for (const e of t.mutations) o = o.add(e.key);
            }
            // Return the set of all (potentially) changed documents and the list
            // of mutation batch IDs that were affected by change.
                        return i._s(t, o).next((t => ({
                qc: t,
                Uc: n,
                Qc: s
            })));
        }));
    }));
    return n.rs = s, n.Bc = i, n.Oc.yr(n.Bc), r;
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
function ur(t, e) {
    const n = D(t);
    return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (t => {
        const s = e.batch.keys(), i = n.Lc.io({
            ro: !0
        });
        return function(t, e, n, s) {
            const i = n.batch, r = i.keys();
            let o = ws.resolve();
            return r.forEach((t => {
                o = o.next((() => s.Jn(e, t))).next((e => {
                    let r = e;
                    const o = n.Sn.get(t);
                    S(null !== o), (!r || r.version.F(o) < 0) && (r = i.yn(t, r, n), r && 
                    // We use the commitVersion as the readTime rather than the
                    // document's updateTime since the updateTime is not advanced
                    // for updates that do not modify the underlying document.
                    s.jn(r, n.bn));
                }));
            })), o.next((() => t.rs.Qr(e, i)));
        }
        /** Returns the local view of the documents affected by a mutation batch. */
        // PORTING NOTE: Multi-Tab only.
        (n, t, e, i).next((() => i.apply(t))).next((() => n.rs.Gr(t))).next((() => n.Bc._s(t, s)));
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
function ar(t) {
    const e = D(t);
    return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (t => e.Yo.Po(t)));
}

/**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */ function hr(t, e) {
    const n = D(t), s = e.ft;
    let i = n.Mc;
    return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (t => {
        const r = n.Lc.io({
            ro: !0
        });
        // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                i = n.Mc;
        const o = [];
        e.re.forEach(((e, r) => {
            const c = i.get(r);
            if (!c) return;
            // Only update the remote keys if the target is still active. This
            // ensures that we can persist the updated target data along with
            // the updated assignment.
                        o.push(n.Yo.Mo(t, e.de, r).next((() => n.Yo.Fo(t, e._e, r))));
            const u = e.resumeToken;
            // Update the resume token if the change includes one.
                        if (u.ht() > 0) {
                const a = c.wt(u, s).dt(t.Lo);
                i = i.Tt(r, a), 
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
                function(t, e, n) {
                    // Always persist target data if we don't already have a resume token.
                    if (S(e.resumeToken.ht() > 0), 0 === t.resumeToken.ht()) return !0;
                    // Don't allow resume token changes to be buffered indefinitely. This
                    // allows us to be reasonably up-to-date after a crash and avoids needing
                    // to loop over all active queries on shutdown. Especially in the browser
                    // we may not get time to do anything interesting while the current tab is
                    // closing.
                                        if (e.ft.O() - t.ft.O() >= 3e8) return !0;
                    // Otherwise if the only thing that has changed about a target is its resume
                    // token it's not worth persisting. Note that the RemoteStore keeps an
                    // in-memory view of the currently active targets which includes the current
                    // resume token, so stream failure or user changes will still use an
                    // up-to-date resume token regardless of what we do here.
                                        return n._e.size + n.fe.size + n.de.size > 0;
                }
                /**
 * Notifies local store of the changed views to locally pin documents.
 */ (c, a, e) && o.push(n.Yo.So(t, a));
            }
        }));
        let c = It();
        // HACK: The only reason we allow a null snapshot version is so that we
        // can synthesize remote events when we get permission denied errors while
        // trying to resolve the state of a locally cached document that is in
        // limbo.
        if (e.ce.forEach(((s, i) => {
            e.ue.has(s) && o.push(n.persistence.Dr.Fc(t, s));
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
        function(t, e, n, s, 
        // TODO(wuandy): We could add `readTime` to MaybeDocument instead to remove
        // this parameter.
        i) {
            let r = yt();
            return n.forEach((t => r = r.add(t))), e.getEntries(t, r).next((t => {
                let r = It();
                return n.forEach(((n, o) => {
                    const c = t.get(n), u = (null == i ? void 0 : i.get(n)) || s;
                    // Note: The order of the steps below is important, since we want
                    // to ensure that rejected limbo resolutions (which fabricate
                    // NoDocuments with SnapshotVersion.min()) never add documents to
                    // cache.
                    o instanceof Cn && o.version.isEqual(K.min()) ? (
                    // NoDocuments with SnapshotVersion.min() are used in manufactured
                    // events. We remove these documents from cache since we lost
                    // access.
                    e.Hn(n, u), r = r.Tt(n, o)) : null == c || o.version.F(c.version) > 0 || 0 === o.version.F(c.version) && c.hasPendingWrites ? (e.jn(o, u), 
                    r = r.Tt(n, o)) : y("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", c.version, " Watch version:", o.version);
                })), r;
            }));
        }(t, r, e.ce, s, void 0).next((t => {
            c = t;
        }))), !s.isEqual(K.min())) {
            const e = n.Yo.Po(t).next((e => n.Yo.Vo(t, t.Lo, s)));
            o.push(e);
        }
        return ws.qn(o).next((() => r.apply(t))).next((() => n.Bc.fs(t, c)));
    })).then((t => (n.Mc = i, t)));
}

/**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId - If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */
function lr(t, e) {
    const n = D(t);
    return n.persistence.runTransaction("Get next mutation batch", "readonly", (t => (void 0 === e && (e = -1), 
    n.rs.Lr(t, e))));
}

/**
 * Reads the current value of a Document with a given key or null if not
 * found - used for testing.
 */
/**
 * Assigns the given target an internal ID so that its results can be pinned so
 * they don't get GC'd. A target must be allocated in the local store before
 * the store can be used to manage its view.
 *
 * Allocating an already allocated `Target` will return the existing `TargetData`
 * for that `Target`.
 */
function _r(t, e) {
    const n = D(t);
    return n.persistence.runTransaction("Allocate target", "readwrite", (t => {
        let s;
        return n.Yo.xo(t, e).next((i => i ? (
        // This target has been listened to previously, so reuse the
        // previous targetID.
        // TODO(mcg): freshen last accessed date?
        s = i, ws.resolve(s)) : n.Yo.mo(t).next((i => (s = new ot(e, i, 0 /* Listen */ , t.Lo), 
        n.Yo.po(t, s).next((() => s)))))));
    })).then((t => {
        // If Multi-Tab is enabled, the existing target data may be newer than
        // the in-memory data
        const s = n.Mc.get(t.targetId);
        return (null === s || t.ft.F(s.ft) > 0) && (n.Mc = n.Mc.Tt(t.targetId, t), n.kc.set(e, t.targetId)), 
        t;
    }));
}

/**
 * Returns the TargetData as seen by the LocalStore, including updates that may
 * have not yet been persisted to the TargetCache.
 */
// Visible for testing.
/**
 * Unpins all the documents associated with the given target. If
 * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
 * directly removes the associated target data from the target cache.
 *
 * Releasing a non-existing `Target` is a no-op.
 */
// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
async function fr(t, e, n) {
    const s = D(t), i = s.Mc.get(e), r = n ? "readwrite" : "readwrite-primary";
    try {
        n || await s.persistence.runTransaction("Release target", r, (t => s.persistence.Dr.removeTarget(t, i)));
    } catch (t) {
        if (!Ss(t)) throw t;
        // All `releaseTarget` does is record the final metadata state for the
        // target, but we've been recording this periodically during target
        // activity. If we lose this write this could cause a very slight
        // difference in the order of target deletion during GC, but we
        // don't define exact LRU semantics so this is acceptable.
        y("LocalStore", `Failed to update sequence numbers for target ${e}: ${t}`);
    }
    s.Mc = s.Mc.remove(e), s.kc.delete(i.target);
}

/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults - Whether results from previous executions can
 * be used to optimize this query execution.
 */ function dr(t, e, n) {
    const s = D(t);
    let i = K.min(), r = yt();
    return s.persistence.runTransaction("Execute query", "readonly", (t => function(t, e, n) {
        const s = D(t), i = s.kc.get(n);
        return void 0 !== i ? ws.resolve(s.Mc.get(i)) : s.Yo.xo(e, n);
    }(s, t, Un(e)).next((e => {
        if (e) return i = e.lastLimboFreeSnapshotVersion, s.Yo.$o(t, e.targetId).next((t => {
            r = t;
        }));
    })).next((() => s.Oc.ws(t, e, n ? i : K.min(), n ? r : yt()))).next((t => ({
        documents: t,
        Kc: r
    })))));
}

// PORTING NOTE: Multi-Tab only.
function wr(t, e) {
    const n = D(t), s = D(n.Yo), i = n.Mc.get(e);
    return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (t => s.Ze(t, e).next((t => t ? t.target : null))));
}

/**
 * Returns the set of documents that have been updated since the last call.
 * If this is the first call, returns the set of changes since client
 * initialization. Further invocations will return document that have changed
 * since the prior call.
 */
// PORTING NOTE: Multi-Tab only.
function Er(t) {
    const e = D(t);
    return e.persistence.runTransaction("Get new document changes", "readonly", (t => function(t, e, n) {
        const s = D(t);
        let i = It(), r = ti(n);
        const o = Ti(e), c = IDBKeyRange.lowerBound(r, !0);
        return o._i({
            index: Di.readTimeIndex,
            range: c
        }, ((t, e) => {
            // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
            // the documents directly since we want to keep sentinel deletes.
            const n = Xs(s.serializer, e);
            i = i.Tt(n.key, n), r = e.readTime;
        })).next((() => ({
            Wc: i,
            readTime: ei(r)
        })));
    }
    /**
 * Returns the read time of the most recently read document in the cache, or
 * SnapshotVersion.min() if not available.
 */
    // PORTING NOTE: This is only used for multi-tab synchronization.
    (e.Lc, t, e.$c))).then((({Wc: t, readTime: n}) => (e.$c = n, t)));
}

/**
 * Reads the newest document change from persistence and moves the internal
 * synchronization marker forward so that calls to `getNewDocumentChanges()`
 * only return changes that happened after client initialization.
 */
// PORTING NOTE: Multi-Tab only.
async function Tr(t) {
    const e = D(t);
    return e.persistence.runTransaction("Synchronize last document change read time", "readonly", (t => function(t) {
        const e = Ti(t);
        // If there are no existing entries, we return SnapshotVersion.min().
                let n = K.min();
        return e._i({
            index: Di.readTimeIndex,
            reverse: !0
        }, ((t, e, s) => {
            e.readTime && (n = ei(e.readTime)), s.done();
        })).next((() => n));
    }(t))).then((t => {
        e.$c = t;
    }));
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
 */ async function Ir(t) {
    if (t.code !== C.FAILED_PRECONDITION || t.message !== As) throw t;
    y("LocalStore", "Unexpectedly lost primary lease");
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
class mr {
    constructor(t, e, n, s, i, r) {
        this.Cs = t, this.jc = n, this.Gc = s, this.zc = i, this.listener = r, this.state = 0 /* Initial */ , 
        /**
         * A close count that's incremented every time the stream is closed; used by
         * getCloseGuardedDispatcher() to invalidate callbacks that happen after
         * close.
         */
        this.Hc = 0, this.Jc = null, this.stream = null, this.Si = new Vs(t, e);
    }
    /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */    Yc() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */    Xc() {
        return 2 /* Open */ === this.state;
    }
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */    start() {
        3 /* Error */ !== this.state ? this.auth() : this.Zc();
    }
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */    async stop() {
        this.Yc() && await this.close(0 /* Initial */);
    }
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */    tu() {
        this.state = 0 /* Initial */ , this.Si.reset();
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
     */    eu() {
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
        this.Xc() && null === this.Jc && (this.Jc = this.Cs.Us(this.jc, 6e4, (() => this.nu())));
    }
    /** Sends a message to the underlying stream. */    su(t) {
        this.iu(), this.stream.send(t);
    }
    /** Called by the idle timer when the stream should close due to inactivity. */    async nu() {
        if (this.Xc()) 
        // When timing out an idle stream there's no reason to force the stream into backoff when
        // it restarts so set the stream state to Initial instead of Error.
        return this.close(0 /* Initial */);
    }
    /** Marks the stream as active again. */    iu() {
        this.Jc && (this.Jc.cancel(), this.Jc = null);
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
     */    async close(t, e) {
        // Cancel any outstanding timers (they're guaranteed not to execute).
        this.iu(), this.Si.cancel(), 
        // Invalidates any stream-related callbacks (e.g. from auth or the
        // underlying stream), guaranteeing they won't execute.
        this.Hc++, 3 /* Error */ !== t ? 
        // If this is an intentional close ensure we don't delay our next connection attempt.
        this.Si.reset() : e && e.code === C.RESOURCE_EXHAUSTED ? (
        // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
        V(e.toString()), V("Using maximum backoff delay to prevent overloading the backend."), 
        this.Si.Ls()) : e && e.code === C.UNAUTHENTICATED && 
        // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
        // just expired.
        this.zc.m(), 
        // Clean up the underlying stream because we are no longer interested in events.
        null !== this.stream && (this.ru(), this.stream.close(), this.stream = null), 
        // This state must be assigned before calling onClose() to allow the callback to
        // inhibit backoff or otherwise manipulate the state in its non-started state.
        this.state = t, 
        // Notify the listener that the stream closed.
        await this.listener.ou(e);
    }
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */    ru() {}
    auth() {
        this.state = 1 /* Starting */;
        const t = this.cu(this.Hc), e = this.Hc;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.zc.getToken().then((t => {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            this.Hc === e && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            this.uu(t);
        }), (e => {
            t((() => {
                const t = new N(C.UNKNOWN, "Fetching auth token failed: " + e.message);
                return this.au(t);
            }));
        }));
    }
    uu(t) {
        const e = this.cu(this.Hc);
        this.stream = this.hu(t), this.stream.lu((() => {
            e((() => (this.state = 2 /* Open */ , this.listener.lu())));
        })), this.stream.ou((t => {
            e((() => this.au(t)));
        })), this.stream.onMessage((t => {
            e((() => this.onMessage(t)));
        }));
    }
    Zc() {
        this.state = 4 /* Backoff */ , this.Si.Bs((async () => {
            this.state = 0 /* Initial */ , this.start();
        }));
    }
    // Visible for tests
    au(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return y("PersistentStream", "close with error: " + t), this.stream = null, this.close(3 /* Error */ , t);
    }
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */    cu(t) {
        return e => {
            this.Cs.Ri((() => this.Hc === t ? e() : (y("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
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
 */ class Ar extends mr {
    constructor(t, e, n, s, i) {
        super(t, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , e, n, i), 
        this.serializer = s;
    }
    hu(t) {
        return this.Gc._u("Listen", t);
    }
    onMessage(t) {
        // A successful response means the stream is healthy
        this.Si.reset();
        const e = be(this.serializer, t), n = function(t) {
            // We have only reached a consistent snapshot for the entire stream if there
            // is a read_time set and it applies to all targets (i.e. the list of
            // targets is empty). The backend is guaranteed to send such responses.
            if (!("targetChange" in t)) return K.min();
            const e = t.targetChange;
            return e.targetIds && e.targetIds.length ? K.min() : e.readTime ? Te(e.readTime) : K.min();
        }(t);
        return this.listener.fu(e, n);
    }
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */    du(t) {
        const e = {};
        e.database = ye(this.serializer), e.addTarget = function(t, e) {
            let n;
            const s = e.target;
            return n = it(s) ? {
                documents: Ne(t, s)
            } : {
                query: xe(t, s)
            }, n.targetId = e.targetId, e.resumeToken.ht() > 0 ? n.resumeToken = we(t, e.resumeToken) : e.ft.F(K.min()) > 0 && (
            // TODO(wuandy): Consider removing above check because it is most likely true.
            // Right now, many tests depend on this behaviour though (leaving min() out
            // of serialization).
            n.readTime = de(t, e.ft.M())), n;
        }(this.serializer, t);
        const n = Oe(this.serializer, t);
        n && (e.labels = n), this.su(e);
    }
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */    wu(t) {
        const e = {};
        e.database = ye(this.serializer), e.removeTarget = t, this.su(e);
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
 */ class Rr extends mr {
    constructor(t, e, n, s, i) {
        super(t, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , e, n, i), 
        this.serializer = s, this.Eu = !1;
    }
    /**
     * Tracks whether or not a handshake has been successfully exchanged and
     * the stream is ready to accept mutations.
     */    get Tu() {
        return this.Eu;
    }
    // Override of PersistentStream.start
    start() {
        this.Eu = !1, this.lastStreamToken = void 0, super.start();
    }
    ru() {
        this.Eu && this.Iu([]);
    }
    hu(t) {
        return this.Gc._u("Write", t);
    }
    onMessage(t) {
        if (
        // Always capture the last stream token.
        S(!!t.streamToken), this.lastStreamToken = t.streamToken, this.Eu) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.Si.reset();
            const e = Ce(t.writeResults, t.commitTime), n = Te(t.commitTime);
            return this.listener.mu(n, e);
        }
        // The first response is always the handshake response
        return S(!t.writeResults || 0 === t.writeResults.length), this.Eu = !0, this.listener.Au();
    }
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */    Ru() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        const t = {};
        t.database = ye(this.serializer), this.su(t);
    }
    /** Sends a group of mutations to the Firestore backend to apply. */    Iu(t) {
        const e = {
            streamToken: this.lastStreamToken,
            writes: t.map((t => Se(this.serializer, t)))
        };
        this.su(e);
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
class Pr extends class {} {
    constructor(t, e, n) {
        super(), this.credentials = t, this.Gc = e, this.serializer = n, this.Pu = !1;
    }
    gu() {
        if (this.Pu) throw new N(C.FAILED_PRECONDITION, "The client has already been terminated.");
    }
    /** Gets an auth token and invokes the provided RPC. */    yu(t, e, n) {
        return this.gu(), this.credentials.getToken().then((s => this.Gc.yu(t, e, n, s))).catch((t => {
            throw t.code === C.UNAUTHENTICATED && this.credentials.m(), t;
        }));
    }
    /** Gets an auth token and invokes the provided RPC with streamed results. */    Vu(t, e, n) {
        return this.gu(), this.credentials.getToken().then((s => this.Gc.Vu(t, e, n, s))).catch((t => {
            throw t.code === C.UNAUTHENTICATED && this.credentials.m(), t;
        }));
    }
    terminate() {
        this.Pu = !1;
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
class gr {
    constructor(t, e) {
        this.di = t, this.pu = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
         * A count of consecutive failures to open the stream. If it reaches the
         * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
         * Offline.
         */
        this.vu = 0, 
        /**
         * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
         * transition from OnlineState.Unknown to OnlineState.Offline without waiting
         * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
         */
        this.bu = null, 
        /**
         * Whether the client should log a warning message if it fails to connect to
         * the backend (initially true, cleared after a successful stream, or if we've
         * logged the message already).
         */
        this.Su = !0;
    }
    /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */    Du() {
        0 === this.vu && (this.Cu("Unknown" /* Unknown */), this.bu = this.di.Us("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (() => (this.bu = null, 
        this.Nu("Backend didn't respond within 10 seconds."), this.Cu("Offline" /* Offline */), 
        Promise.resolve()))));
    }
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */    xu(t) {
        "Online" /* Online */ === this.state ? this.Cu("Unknown" /* Unknown */) : (this.vu++, 
        this.vu >= 1 && (this.Fu(), this.Nu("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.Cu("Offline" /* Offline */)));
    }
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */    set(t) {
        this.Fu(), this.vu = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Su = !1), this.Cu(t);
    }
    Cu(t) {
        t !== this.state && (this.state = t, this.pu(t));
    }
    Nu(t) {
        const e = `Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
        this.Su ? (V(e), this.Su = !1) : y("OnlineStateTracker", e);
    }
    Fu() {
        null !== this.bu && (this.bu.cancel(), this.bu = null);
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
 */ class yr {
    constructor(
    /**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
    t, 
    /** The client-side proxy for interacting with the backend. */
    e, n, s, i) {
        this.Ou = t, this.Mu = e, this.di = n, this.ku = {}, 
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
        this.$u = [], 
        /**
         * A mapping of watched targets that the client cares about tracking and the
         * user has explicitly called a 'listen' for this target.
         *
         * These targets may or may not have been sent to or acknowledged by the
         * server. On re-establishing the listen stream, these targets should be sent
         * to the server. The targets removed with unlistens are removed eagerly
         * without waiting for confirmation from the listen stream.
         */
        this.Lu = new Map, 
        /**
         * A set of reasons for why the RemoteStore may be offline. If empty, the
         * RemoteStore may start its network connections.
         */
        this.Bu = new Set, 
        /**
         * Event handlers that get called when the network is disabled or enabled.
         *
         * PORTING NOTE: These functions are used on the Web client to create the
         * underlying streams (to support tree-shakeable streams). On Android and iOS,
         * the streams are created during construction of RemoteStore.
         */
        this.qu = [], this.Uu = i, this.Uu.Qu((t => {
            n.Ri((async () => {
                // Porting Note: Unlike iOS, `restartNetwork()` is called even when the
                // network becomes unreachable as we don't have any other way to tear
                // down our streams.
                xr(this) && (y("RemoteStore", "Restarting streams for network reachability change."), 
                await async function(t) {
                    const e = D(t);
                    e.Bu.add(4 /* ConnectivityChange */), await pr(e), e.Ku.set("Unknown" /* Unknown */), 
                    e.Bu.delete(4 /* ConnectivityChange */), await Vr(e);
                }(this));
            }));
        })), this.Ku = new gr(n, s);
    }
}

async function Vr(t) {
    if (xr(t)) for (const e of t.qu) await e(/* enabled= */ !0);
}

/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */ async function pr(t) {
    for (const e of t.qu) await e(/* enabled= */ !1);
}

/**
 * Starts new listen for the given target. Uses resume token if provided. It
 * is a no-op if the target of given `TargetData` is already being listened to.
 */
function vr(t, e) {
    const n = D(t);
    n.Lu.has(e.targetId) || (
    // Mark this as something the client is currently listening for.
    n.Lu.set(e.targetId, e), Nr(n) ? 
    // The listen will be sent in onWatchStreamOpen
    Cr(n) : Jr(n).Xc() && Sr(n, e));
}

/**
 * Removes the listen from server. It is a no-op if the given target id is
 * not being listened to.
 */ function br(t, e) {
    const n = D(t), s = Jr(n);
    n.Lu.delete(e), s.Xc() && Dr(n, e), 0 === n.Lu.size && (s.Xc() ? s.eu() : xr(n) && 
    // Revert to OnlineState.Unknown if the watch stream is not open and we
    // have no listeners, since without any listens to send we cannot
    // confirm if the stream is healthy and upgrade to OnlineState.Online.
    n.Ku.set("Unknown" /* Unknown */));
}

/**
 * We need to increment the the expected number of pending responses we're due
 * from watch so we wait for the ack to process any messages from this target.
 */ function Sr(t, e) {
    t.Wu.De(e.targetId), Jr(t).du(e);
}

/**
 * We need to increment the expected number of pending responses we're due
 * from watch so we wait for the removal on the server before we process any
 * messages from this target.
 */ function Dr(t, e) {
    t.Wu.De(e), Jr(t).wu(e);
}

function Cr(t) {
    t.Wu = new Mt({
        Xe: e => t.ku.Xe(e),
        Ze: e => t.Lu.get(e) || null
    }), Jr(t).start(), t.Ku.Du();
}

/**
 * Returns whether the watch stream should be started because it's necessary
 * and has not yet been started.
 */ function Nr(t) {
    return xr(t) && !Jr(t).Yc() && t.Lu.size > 0;
}

function xr(t) {
    return 0 === D(t).Bu.size;
}

function Fr(t) {
    t.Wu = void 0;
}

async function Or(t) {
    t.Lu.forEach(((e, n) => {
        Sr(t, e);
    }));
}

async function Mr(t, e) {
    Fr(t), 
    // If we still need the watch stream, retry the connection.
    Nr(t) ? (t.Ku.xu(e), Cr(t)) : 
    // No need to restart watch stream because there are no active targets.
    // The online state is set to unknown because there is no active attempt
    // at establishing a connection
    t.Ku.set("Unknown" /* Unknown */);
}

async function kr(t, e, n) {
    if (
    // Mark the client as online since we got a message from the server
    t.Ku.set("Online" /* Online */), e instanceof Ft && 2 /* Removed */ === e.state && e.cause) 
    // There was an error on a target, don't wait for a consistent snapshot
    // to raise events
    try {
        await 
        /** Handles an error on a target */
        async function(t, e) {
            const n = e.cause;
            for (const s of e.targetIds) 
            // A watched target might have been removed already.
            t.Lu.has(s) && (await t.ku.ju(s, n), t.Lu.delete(s), t.Wu.removeTarget(s));
        }
        /**
 * Attempts to fill our write pipeline with writes from the LocalStore.
 *
 * Called internally to bootstrap or refill the write pipeline and by
 * SyncEngine whenever there are new mutations to process.
 *
 * Starts the write stream if necessary.
 */ (t, e);
    } catch (n) {
        y("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), n), 
        await $r(t, n);
    } else if (e instanceof Nt ? t.Wu.$e(e) : e instanceof xt ? t.Wu.je(e) : t.Wu.qe(e), 
    !n.isEqual(K.min())) try {
        const e = await ar(t.Ou);
        n.F(e) >= 0 && 
        // We have received a target change with a global snapshot if the snapshot
        // version is not equal to SnapshotVersion.min().
        await 
        /**
 * Takes a batch of changes from the Datastore, repackages them as a
 * RemoteEvent, and passes that on to the listener, which is typically the
 * SyncEngine.
 */
        function(t, e) {
            const n = t.Wu.He(e);
            // Update in-memory resume tokens. LocalStore will update the
            // persistent view of these when applying the completed RemoteEvent.
                        return n.re.forEach(((n, s) => {
                if (n.resumeToken.ht() > 0) {
                    const i = t.Lu.get(s);
                    // A watched target might have been removed already.
                                        i && t.Lu.set(s, i.wt(n.resumeToken, e));
                }
            })), 
            // Re-establish listens for the targets that have been invalidated by
            // existence filter mismatches.
            n.oe.forEach((e => {
                const n = t.Lu.get(e);
                if (!n) 
                // A watched target might have been removed already.
                return;
                // Clear the resume token for the target, since we're in a known mismatch
                // state.
                                t.Lu.set(e, n.wt(rt.lt, n.ft)), 
                // Cause a hard reset by unwatching and rewatching immediately, but
                // deliberately don't send a resume token so that we get a full update.
                Dr(t, e);
                // Mark the target we send as being on behalf of an existence filter
                // mismatch, but don't actually retain that in listenTargets. This ensures
                // that we flag the first re-listen this way without impacting future
                // listens of this target (that might happen e.g. on reconnect).
                const s = new ot(n.target, e, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                Sr(t, s);
            })), t.ku.Gu(n);
        }(t, n);
    } catch (e) {
        y("RemoteStore", "Failed to raise snapshot:", e), await $r(t, e);
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
 */ async function $r(t, e, n) {
    if (!Ss(e)) throw e;
    t.Bu.add(1 /* IndexedDbFailed */), 
    // Disable network and raise offline snapshots
    await pr(t), t.Ku.set("Offline" /* Offline */), n || (
    // Use a simple read operation to determine if IndexedDB recovered.
    // Ideally, we would expose a health check directly on SimpleDb, but
    // RemoteStore only has access to persistence through LocalStore.
    n = () => ar(t.Ou)), 
    // Probe IndexedDB periodically and re-enable network
    t.di.Mi((async () => {
        y("RemoteStore", "Retrying IndexedDB access"), await n(), t.Bu.delete(1 /* IndexedDbFailed */), 
        await Vr(t);
    }));
}

/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */ function Lr(t, e) {
    return e().catch((n => $r(t, n, e)));
}

async function Br(t) {
    const e = D(t), n = Yr(e);
    let s = e.$u.length > 0 ? e.$u[e.$u.length - 1].batchId : -1;
    for (;qr(e); ) try {
        const t = await lr(e.Ou, s);
        if (null === t) {
            0 === e.$u.length && n.eu();
            break;
        }
        s = t.batchId, Ur(e, t);
    } catch (t) {
        await $r(e, t);
    }
    Qr(e) && Kr(e);
}

/**
 * Returns true if we can add to the write pipeline (i.e. the network is
 * enabled and the write pipeline is not full).
 */ function qr(t) {
    return xr(t) && t.$u.length < 10;
}

/**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */ function Ur(t, e) {
    t.$u.push(e);
    const n = Yr(t);
    n.Xc() && n.Tu && n.Iu(e.mutations);
}

function Qr(t) {
    return xr(t) && !Yr(t).Yc() && t.$u.length > 0;
}

function Kr(t) {
    Yr(t).start();
}

async function Wr(t) {
    Yr(t).Ru();
}

async function jr(t) {
    const e = Yr(t);
    // Send the write pipeline now that the stream is established.
        for (const n of t.$u) e.Iu(n.mutations);
}

async function Gr(t, e, n) {
    const s = t.$u.shift(), i = fs.from(s, e, n);
    await Lr(t, (() => t.ku.zu(i))), 
    // It's possible that with the completion of this mutation another
    // slot has freed up.
    await Br(t);
}

async function zr(t, e) {
    // If the write stream closed after the write handshake completes, a write
    // operation failed and we fail the pending operation.
    e && Yr(t).Tu && 
    // This error affects the actual write.
    await async function(t, e) {
        // Only handle permanent errors here. If it's transient, just let the retry
        // logic kick in.
        if (n = e.code, ht(n) && n !== C.ABORTED) {
            // This was a permanent error, the request itself was the problem
            // so it's not going to succeed if we resend it.
            const n = t.$u.shift();
            // In this case it's also unlikely that the server itself is melting
            // down -- this was just a bad request so inhibit backoff on the next
            // restart.
                        Yr(t).tu(), await Lr(t, (() => t.ku.Hu(n.batchId, e))), 
            // It's possible that with the completion of this mutation
            // another slot has freed up.
            await Br(t);
        }
        var n;
        /**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */    }(t, e), 
    // The write stream might have been started by refilling the write
    // pipeline for failed writes
    Qr(t) && Kr(t);
}

/**
 * Toggles the network state when the client gains or loses its primary lease.
 */
async function Hr(t, e) {
    const n = D(t);
    e ? (n.Bu.delete(2 /* IsSecondary */), await Vr(n)) : e || (n.Bu.add(2 /* IsSecondary */), 
    await pr(n), n.Ku.set("Unknown" /* Unknown */));
}

/**
 * If not yet initialized, registers the WatchStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */ function Jr(t) {
    return t.Ju || (
    // Create stream (but note that it is not started yet).
    t.Ju = function(t, e, n) {
        const s = D(t);
        return s.gu(), new Ar(e, s.Gc, s.credentials, s.serializer, n);
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
 */ (t.Mu, t.di, {
        lu: Or.bind(null, t),
        ou: Mr.bind(null, t),
        fu: kr.bind(null, t)
    }), t.qu.push((async e => {
        e ? (t.Ju.tu(), Nr(t) ? Cr(t) : t.Ku.set("Unknown" /* Unknown */)) : (await t.Ju.stop(), 
        Fr(t));
    }))), t.Ju;
}

/**
 * If not yet initialized, registers the WriteStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */ function Yr(t) {
    return t.Yu || (
    // Create stream (but note that it is not started yet).
    t.Yu = function(t, e, n) {
        const s = D(t);
        return s.gu(), new Rr(e, s.Gc, s.credentials, s.serializer, n);
    }(t.Mu, t.di, {
        lu: Wr.bind(null, t),
        ou: zr.bind(null, t),
        Au: jr.bind(null, t),
        mu: Gr.bind(null, t)
    }), t.qu.push((async e => {
        e ? (t.Yu.tu(), 
        // This will start the write stream if necessary.
        await Br(t)) : (await t.Yu.stop(), t.$u.length > 0 && (y("RemoteStore", `Stopping write stream with ${t.$u.length} pending writes`), 
        t.$u = []));
    }))), t.Yu;
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
 */ class Xr {
    constructor() {
        this.Xu = void 0, this.listeners = [];
    }
}

class Zr {
    constructor() {
        this.queries = new ds((t => Wn(t)), Kn), this.onlineState = "Unknown" /* Unknown */ , 
        this.Zu = new Set;
    }
}

async function to(t, e) {
    const n = D(t), s = e.query;
    let i = !1, r = n.queries.get(s);
    if (r || (i = !0, r = new Xr), i) try {
        r.Xu = await n.ta(s);
    } catch (t) {
        const n = Ls(t, `Initialization of query '${jn(e.query)}' failed`);
        return void e.onError(n);
    }
    n.queries.set(s, r), r.listeners.push(e);
    // Run global snapshot listeners if a consistent snapshot has been emitted.
    e.ea(n.onlineState);
    if (r.Xu) {
        e.na(r.Xu) && io(n);
    }
}

async function eo(t, e) {
    const n = D(t), s = e.query;
    let i = !1;
    const r = n.queries.get(s);
    if (r) {
        const t = r.listeners.indexOf(e);
        t >= 0 && (r.listeners.splice(t, 1), i = 0 === r.listeners.length);
    }
    if (i) return n.queries.delete(s), n.sa(s);
}

function no(t, e) {
    const n = D(t);
    let s = !1;
    for (const t of e) {
        const e = t.query, i = n.queries.get(e);
        if (i) {
            for (const e of i.listeners) e.na(t) && (s = !0);
            i.Xu = t;
        }
    }
    s && io(n);
}

function so(t, e, n) {
    const s = D(t), i = s.queries.get(e);
    if (i) for (const t of i.listeners) t.onError(n);
    // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
    // after an error.
        s.queries.delete(e);
}

// Call all global snapshot listeners that have been set.
function io(t) {
    t.Zu.forEach((t => {
        t.next();
    }));
}

/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */ class ro {
    constructor(t, e, n) {
        this.query = t, this.ia = e, 
        /**
         * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
         * observer. This flag is set to true once we've actually raised an event.
         */
        this.ra = !1, this.oa = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {};
    }
    /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */    na(t) {
        if (!this.options.includeMetadataChanges) {
            // Remove the metadata only changes.
            const e = [];
            for (const n of t.docChanges) 3 /* Metadata */ !== n.type && e.push(n);
            t = new St(t.query, t.docs, t.te, e, t.ee, t.fromCache, t.ne, 
            /* excludesMetadataChanges= */ !0);
        }
        let e = !1;
        return this.ra ? this.ca(t) && (this.ia.next(t), e = !0) : this.ua(t, this.onlineState) && (this.aa(t), 
        e = !0), this.oa = t, e;
    }
    onError(t) {
        this.ia.error(t);
    }
    /** Returns whether a snapshot was raised. */    ea(t) {
        this.onlineState = t;
        let e = !1;
        return this.oa && !this.ra && this.ua(this.oa, t) && (this.aa(this.oa), e = !0), 
        e;
    }
    ua(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                const n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return (!this.options.ha || !n) && (!t.docs.W() || "Offline" /* Offline */ === e);
        // Raise data from cache if we have any documents or we are offline
        }
    ca(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        const e = this.oa && this.oa.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.ne && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }
    aa(t) {
        t = St.ie(t.query, t.docs, t.ee, t.fromCache), this.ra = !0, this.ia.next(t);
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
 */ class oo {
    constructor() {
        // A set of outstanding references to a document sorted by key.
        this.la = new wt(co._a), 
        // A set of outstanding references to a document sorted by target id.
        this.fa = new wt(co.da);
    }
    /** Returns true if the reference set contains no references. */    W() {
        return this.la.W();
    }
    /** Adds a reference to the given document key for the given ID. */    Oo(t, e) {
        const n = new co(t, e);
        this.la = this.la.add(n), this.fa = this.fa.add(n);
    }
    /** Add references to the given document keys for the given ID. */    wa(t, e) {
        t.forEach((t => this.Oo(t, e)));
    }
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */    ko(t, e) {
        this.Ea(new co(t, e));
    }
    Ta(t, e) {
        t.forEach((t => this.ko(t, e)));
    }
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */    Ia(t) {
        const e = new H(new j([])), n = new co(e, t), s = new co(e, t + 1), i = [];
        return this.fa.Kt([ n, s ], (t => {
            this.Ea(t), i.push(t.key);
        })), i;
    }
    ma() {
        this.la.forEach((t => this.Ea(t)));
    }
    Ea(t) {
        this.la = this.la.delete(t), this.fa = this.fa.delete(t);
    }
    Aa(t) {
        const e = new H(new j([])), n = new co(e, t), s = new co(e, t + 1);
        let i = yt();
        return this.fa.Kt([ n, s ], (t => {
            i = i.add(t.key);
        })), i;
    }
    zr(t) {
        const e = new co(t, 0), n = this.la.jt(e);
        return null !== n && t.isEqual(n.key);
    }
}

class co {
    constructor(t, e) {
        this.key = t, this.Ra = e;
    }
    /** Compare by key then by ID */    static _a(t, e) {
        return H.$(t.key, e.key) || B(t.Ra, e.Ra);
    }
    /** Compare by ID then by key */    static da(t, e) {
        return B(t.Ra, e.Ra) || H.$(t.key, e.key);
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
// The format of the LocalStorage key that stores the client state is:
//     firestore_clients_<persistence_prefix>_<instance_key>
/** Assembles the key for a client state in WebStorage */
function uo(t, e) {
    return `firestore_clients_${t}_${e}`;
}

// The format of the WebStorage key that stores the mutation state is:
//     firestore_mutations_<persistence_prefix>_<batch_id>
//     (for unauthenticated users)
// or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>

// 'user_uid' is last to avoid needing to escape '_' characters that it might
// contain.
/** Assembles the key for a mutation batch in WebStorage */
function ao(t, e, n) {
    let s = `firestore_mutations_${t}_${n}`;
    return e.u() && (s += "_" + e.uid), s;
}

// The format of the WebStorage key that stores a query target's metadata is:
//     firestore_targets_<persistence_prefix>_<target_id>
/** Assembles the key for a query state in WebStorage */
function ho(t, e) {
    return `firestore_targets_${t}_${e}`;
}

// The WebStorage prefix that stores the primary tab's online state. The
// format of the key is:
//     firestore_online_state_<persistence_prefix>
/**
 * Holds the state of a mutation batch, including its user ID, batch ID and
 * whether the batch is 'pending', 'acknowledged' or 'rejected'.
 */
// Visible for testing
class lo {
    constructor(t, e, n, s) {
        this.user = t, this.batchId = e, this.state = n, this.error = s;
    }
    /**
     * Parses a MutationMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    static Pa(t, e, n) {
        const s = JSON.parse(n);
        let i = "object" == typeof s && -1 !== [ "pending", "acknowledged", "rejected" ].indexOf(s.state) && (void 0 === s.error || "object" == typeof s.error), r = void 0;
        return i && s.error && (i = "string" == typeof s.error.message && "string" == typeof s.error.code, 
        i && (r = new N(s.error.code, s.error.message))), i ? new lo(t, e, s.state, r) : (V("SharedClientState", `Failed to parse mutation state for ID '${e}': ${n}`), 
        null);
    }
    ga() {
        const t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }
}

/**
 * Holds the state of a query target, including its target ID and whether the
 * target is 'not-current', 'current' or 'rejected'.
 */
// Visible for testing
class _o {
    constructor(t, e, n) {
        this.targetId = t, this.state = e, this.error = n;
    }
    /**
     * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    static Pa(t, e) {
        const n = JSON.parse(e);
        let s = "object" == typeof n && -1 !== [ "not-current", "current", "rejected" ].indexOf(n.state) && (void 0 === n.error || "object" == typeof n.error), i = void 0;
        return s && n.error && (s = "string" == typeof n.error.message && "string" == typeof n.error.code, 
        s && (i = new N(n.error.code, n.error.message))), s ? new _o(t, n.state, i) : (V("SharedClientState", `Failed to parse target state for ID '${t}': ${e}`), 
        null);
    }
    ga() {
        const t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }
}

/**
 * This class represents the immutable ClientState for a client read from
 * WebStorage, containing the list of active query targets.
 */ class fo {
    constructor(t, e) {
        this.clientId = t, this.activeTargetIds = e;
    }
    /**
     * Parses a RemoteClientState from the JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    static Pa(t, e) {
        const n = JSON.parse(e);
        let s = "object" == typeof n && n.activeTargetIds instanceof Array, i = pt();
        for (let t = 0; s && t < n.activeTargetIds.length; ++t) s = X(n.activeTargetIds[t]), 
        i = i.add(n.activeTargetIds[t]);
        return s ? new fo(t, i) : (V("SharedClientState", `Failed to parse client data for instance '${t}': ${e}`), 
        null);
    }
}

/**
 * This class represents the online state for all clients participating in
 * multi-tab. The online state is only written to by the primary client, and
 * used in secondary clients to update their query views.
 */ class wo {
    constructor(t, e) {
        this.clientId = t, this.onlineState = e;
    }
    /**
     * Parses a SharedOnlineState from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    static Pa(t) {
        const e = JSON.parse(t);
        return "object" == typeof e && -1 !== [ "Unknown", "Online", "Offline" ].indexOf(e.onlineState) && "string" == typeof e.clientId ? new wo(e.clientId, e.onlineState) : (V("SharedClientState", "Failed to parse online state: " + t), 
        null);
    }
}

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
class Eo {
    constructor() {
        this.activeTargetIds = pt();
    }
    ya(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }
    Va(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */    ga() {
        const t = {
            activeTargetIds: this.activeTargetIds.H(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }
}

/**
 * `WebStorageSharedClientState` uses WebStorage (window.localStorage) as the
 * backing store for the SharedClientState. It keeps track of all active
 * clients and supports modifications of the local client's data.
 */ class To {
    constructor(t, e, n, s, i) {
        this.window = t, this.Cs = e, this.persistenceKey = n, this.pa = s, this.va = null, 
        this.pu = null, this.ps = null, this.ba = this.Sa.bind(this), this.Da = new _t(B), 
        this.lr = !1, 
        /**
         * Captures WebStorage events that occur before `start()` is called. These
         * events are replayed once `WebStorageSharedClientState` is started.
         */
        this.Ca = [];
        // Escape the special characters mentioned here:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        const r = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.storage = this.window.localStorage, this.currentUser = i, this.Na = uo(this.persistenceKey, this.pa), 
        this.xa = 
        /** Assembles the key for the current sequence number. */
        function(t) {
            return "firestore_sequence_number_" + t;
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
 */ (this.persistenceKey), this.Da = this.Da.Tt(this.pa, new Eo), this.Fa = new RegExp(`^firestore_clients_${r}_([^_]*)$`), 
        this.Oa = new RegExp(`^firestore_mutations_${r}_(\\d+)(?:_(.*))?$`), this.Ma = new RegExp(`^firestore_targets_${r}_(\\d+)$`), 
        this.ka = 
        /** Assembles the key for the online state of the primary tab. */
        function(t) {
            return "firestore_online_state_" + t;
        }
        // The WebStorage prefix that plays as a event to indicate the remote documents
        // might have changed due to some secondary tabs loading a bundle.
        // format of the key is:
        //     firestore_bundle_loaded_<persistenceKey>
        (this.persistenceKey), this.$a = function(t) {
            return "firestore_bundle_loaded_" + t;
        }
        // The WebStorage key prefix for the key that stores the last sequence number allocated. The key
        // looks like 'firestore_sequence_number_<persistence_prefix>'.
        (this.persistenceKey), 
        // Rather than adding the storage observer during start(), we add the
        // storage observer during initialization. This ensures that we collect
        // events before other components populate their initial state (during their
        // respective start() calls). Otherwise, we might for example miss a
        // mutation that is added after LocalStore's start() processed the existing
        // mutations but before we observe WebStorage events.
        this.window.addEventListener("storage", this.ba);
    }
    /** Returns 'true' if WebStorage is available in the current environment. */    static Gs(t) {
        return !(!t || !t.localStorage);
    }
    async start() {
        // Retrieve the list of existing clients to backfill the data in
        // SharedClientState.
        const t = await this.va.gc();
        for (const e of t) {
            if (e === this.pa) continue;
            const t = this.getItem(uo(this.persistenceKey, e));
            if (t) {
                const n = fo.Pa(e, t);
                n && (this.Da = this.Da.Tt(n.clientId, n));
            }
        }
        this.La();
        // Check if there is an existing online state and call the callback handler
        // if applicable.
        const e = this.storage.getItem(this.ka);
        if (e) {
            const t = this.Ba(e);
            t && this.qa(t);
        }
        for (const t of this.Ca) this.Sa(t);
        this.Ca = [], 
        // Register a window unload hook to remove the client metadata entry from
        // WebStorage even if `shutdown()` was not called.
        this.window.addEventListener("unload", (() => this.Ic())), this.lr = !0;
    }
    Ss(t) {
        this.setItem(this.xa, JSON.stringify(t));
    }
    Ua() {
        return this.Qa(this.Da);
    }
    Ka(t) {
        let e = !1;
        return this.Da.forEach(((n, s) => {
            s.activeTargetIds.has(t) && (e = !0);
        })), e;
    }
    Wa(t) {
        this.ja(t, "pending");
    }
    Ga(t, e, n) {
        this.ja(t, e, n), 
        // Once a final mutation result is observed by other clients, they no longer
        // access the mutation's metadata entry. Since WebStorage replays events
        // in order, it is safe to delete the entry right after updating it.
        this.za(t);
    }
    Ha(t) {
        let e = "not-current";
        // Lookup an existing query state if the target ID was already registered
        // by another tab
                if (this.Ka(t)) {
            const n = this.storage.getItem(ho(this.persistenceKey, t));
            if (n) {
                const s = _o.Pa(t, n);
                s && (e = s.state);
            }
        }
        return this.Ja.ya(t), this.La(), e;
    }
    Ya(t) {
        this.Ja.Va(t), this.La();
    }
    Xa(t) {
        return this.Ja.activeTargetIds.has(t);
    }
    Za(t) {
        this.removeItem(ho(this.persistenceKey, t));
    }
    th(t, e, n) {
        this.eh(t, e, n);
    }
    nh(t, e, n) {
        e.forEach((t => {
            this.za(t);
        })), this.currentUser = t, n.forEach((t => {
            this.Wa(t);
        }));
    }
    sh(t) {
        this.ih(t);
    }
    rh() {
        this.oh();
    }
    Ic() {
        this.lr && (this.window.removeEventListener("storage", this.ba), this.removeItem(this.Na), 
        this.lr = !1);
    }
    getItem(t) {
        const e = this.storage.getItem(t);
        return y("SharedClientState", "READ", t, e), e;
    }
    setItem(t, e) {
        y("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
    }
    removeItem(t) {
        y("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
    }
    Sa(t) {
        // Note: The function is typed to take Event to be interface-compatible with
        // `Window.addEventListener`.
        const e = t;
        if (e.storageArea === this.storage) {
            if (y("SharedClientState", "EVENT", e.key, e.newValue), e.key === this.Na) return void V("Received WebStorage notification for local change. Another client might have garbage-collected our state");
            this.Cs.Mi((async () => {
                if (this.lr) {
                    if (null !== e.key) if (this.Fa.test(e.key)) {
                        if (null == e.newValue) {
                            const t = this.uh(e.key);
                            return this.ah(t, null);
                        }
                        {
                            const t = this.hh(e.key, e.newValue);
                            if (t) return this.ah(t.clientId, t);
                        }
                    } else if (this.Oa.test(e.key)) {
                        if (null !== e.newValue) {
                            const t = this.lh(e.key, e.newValue);
                            if (t) return this._h(t);
                        }
                    } else if (this.Ma.test(e.key)) {
                        if (null !== e.newValue) {
                            const t = this.fh(e.key, e.newValue);
                            if (t) return this.dh(t);
                        }
                    } else if (e.key === this.ka) {
                        if (null !== e.newValue) {
                            const t = this.Ba(e.newValue);
                            if (t) return this.qa(t);
                        }
                    } else if (e.key === this.xa) {
                        const t = function(t) {
                            let e = ys.Ds;
                            if (null != t) try {
                                const n = JSON.parse(t);
                                S("number" == typeof n), e = n;
                            } catch (t) {
                                V("SharedClientState", "Failed to read sequence number from WebStorage", t);
                            }
                            return e;
                        }
                        /**
 * `MemorySharedClientState` is a simple implementation of SharedClientState for
 * clients using memory persistence. The state in this class remains fully
 * isolated and no synchronization is performed.
 */ (e.newValue);
                        t !== ys.Ds && this.ps(t);
                    } else if (e.key === this.$a) return this.va.wh();
                } else this.Ca.push(e);
            }));
        }
    }
    get Ja() {
        return this.Da.get(this.pa);
    }
    La() {
        this.setItem(this.Na, this.Ja.ga());
    }
    ja(t, e, n) {
        const s = new lo(this.currentUser, t, e, n), i = ao(this.persistenceKey, this.currentUser, t);
        this.setItem(i, s.ga());
    }
    za(t) {
        const e = ao(this.persistenceKey, this.currentUser, t);
        this.removeItem(e);
    }
    ih(t) {
        const e = {
            clientId: this.pa,
            onlineState: t
        };
        this.storage.setItem(this.ka, JSON.stringify(e));
    }
    eh(t, e, n) {
        const s = ho(this.persistenceKey, t), i = new _o(t, e, n);
        this.setItem(s, i.ga());
    }
    oh() {
        this.setItem(this.$a, "value-not-used");
    }
    /**
     * Parses a client state key in WebStorage. Returns null if the key does not
     * match the expected key format.
     */    uh(t) {
        const e = this.Fa.exec(t);
        return e ? e[1] : null;
    }
    /**
     * Parses a client state in WebStorage. Returns 'null' if the value could not
     * be parsed.
     */    hh(t, e) {
        const n = this.uh(t);
        return fo.Pa(n, e);
    }
    /**
     * Parses a mutation batch state in WebStorage. Returns 'null' if the value
     * could not be parsed.
     */    lh(t, e) {
        const n = this.Oa.exec(t), s = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
        return lo.Pa(new R(i), s, e);
    }
    /**
     * Parses a query target state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */    fh(t, e) {
        const n = this.Ma.exec(t), s = Number(n[1]);
        return _o.Pa(s, e);
    }
    /**
     * Parses an online state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */    Ba(t) {
        return wo.Pa(t);
    }
    async _h(t) {
        if (t.user.uid === this.currentUser.uid) return this.va.Eh(t.batchId, t.state, t.error);
        y("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid);
    }
    dh(t) {
        return this.va.Th(t.targetId, t.state, t.error);
    }
    ah(t, e) {
        const n = e ? this.Da.Tt(t, e) : this.Da.remove(t), s = this.Qa(this.Da), i = this.Qa(n), r = [], o = [];
        return i.forEach((t => {
            s.has(t) || r.push(t);
        })), s.forEach((t => {
            i.has(t) || o.push(t);
        })), this.va.Ih(r, o).then((() => {
            this.Da = n;
        }));
    }
    qa(t) {
        // We check whether the client that wrote this online state is still active
        // by comparing its client ID to the list of clients kept active in
        // IndexedDb. If a client does not update their IndexedDb client state
        // within 5 seconds, it is considered inactive and we don't emit an online
        // state event.
        this.Da.get(t.clientId) && this.pu(t.onlineState);
    }
    Qa(t) {
        let e = pt();
        return t.forEach(((t, n) => {
            e = e.Gt(n.activeTargetIds);
        })), e;
    }
}

class Io {
    constructor() {
        this.mh = new Eo, this.Ah = {}, this.pu = null, this.ps = null;
    }
    Wa(t) {
        // No op.
    }
    Ga(t, e, n) {
        // No op.
    }
    Ha(t) {
        return this.mh.ya(t), this.Ah[t] || "not-current";
    }
    th(t, e, n) {
        this.Ah[t] = e;
    }
    Ya(t) {
        this.mh.Va(t);
    }
    Xa(t) {
        return this.mh.activeTargetIds.has(t);
    }
    Za(t) {
        delete this.Ah[t];
    }
    Ua() {
        return this.mh.activeTargetIds;
    }
    Ka(t) {
        return this.mh.activeTargetIds.has(t);
    }
    start() {
        return this.mh = new Eo, Promise.resolve();
    }
    nh(t, e, n) {
        // No op.
    }
    sh(t) {
        // No op.
    }
    Ic() {}
    Ss(t) {}
    rh() {
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
 */ class mo {
    constructor(t) {
        this.key = t;
    }
}

class Ao {
    constructor(t) {
        this.key = t;
    }
}

/**
 * View is responsible for computing the final merged truth of what docs are in
 * a query. It gets notified of local and remote changes to docs, and applies
 * the query filters and limits to determine the most correct possible results.
 */ class Ro {
    constructor(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.Rh = e, this.Ph = null, 
        /**
         * A flag whether the view is current with the backend. A view is considered
         * current after it has seen the current flag from the backend and did not
         * lose consistency within the watch stream (e.g. because of an existence
         * filter mismatch).
         */
        this.le = !1, 
        /** Documents in the view but not in the remote target */
        this.gh = yt(), 
        /** Document Keys that have local changes */
        this.ee = yt(), this.yh = zn(t), this.Vh = new vt(this.yh);
    }
    /**
     * The set of remote documents that the server has told us belongs to the target associated with
     * this view.
     */    get ph() {
        return this.Rh;
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
     */    bh(t, e) {
        const n = e ? e.Sh : new bt, s = e ? e.Vh : this.Vh;
        let i = e ? e.ee : this.ee, r = s, o = !1;
        // Track the last doc in a (full) limit. This is necessary, because some
        // update (a delete, or an update moving a doc past the old limit) might
        // mean there is some other document in the local cache that either should
        // come (1) between the old last limit doc and the new last document, in the
        // case of updates, or (2) after the new last document, in the case of
        // deletes. So we keep this doc at the old limit to compare the updates to.
        // Note that this should never get used in a refill (when previousChanges is
        // set), because there will only be adds -- no deletes or updates.
        const c = Mn(this.query) && s.size === this.query.limit ? s.last() : null, u = kn(this.query) && s.size === this.query.limit ? s.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.Pt(((t, e) => {
            const a = s.get(t);
            let h = e instanceof Dn ? e : null;
            h && (h = Gn(this.query, h) ? h : null);
            const l = !!a && this.ee.has(a.key), _ = !!h && (h.an || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            this.ee.has(h.key) && h.hasCommittedMutations);
            let f = !1;
            // Calculate change
                        if (a && h) {
                a.data().isEqual(h.data()) ? l !== _ && (n.track({
                    type: 3 /* Metadata */ ,
                    doc: h
                }), f = !0) : this.Dh(a, h) || (n.track({
                    type: 2 /* Modified */ ,
                    doc: h
                }), f = !0, (c && this.yh(h, c) > 0 || u && this.yh(h, u) < 0) && (
                // This doc moved from inside the limit to outside the limit.
                // That means there may be some other doc in the local cache
                // that should be included instead.
                o = !0));
            } else !a && h ? (n.track({
                type: 0 /* Added */ ,
                doc: h
            }), f = !0) : a && !h && (n.track({
                type: 1 /* Removed */ ,
                doc: a
            }), f = !0, (c || u) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            o = !0));
            f && (h ? (r = r.add(h), i = _ ? i.add(t) : i.delete(t)) : (r = r.delete(t), i = i.delete(t)));
        })), Mn(this.query) || kn(this.query)) for (;r.size > this.query.limit; ) {
            const t = Mn(this.query) ? r.last() : r.first();
            r = r.delete(t.key), i = i.delete(t.key), n.track({
                type: 1 /* Removed */ ,
                doc: t
            });
        }
        return {
            Vh: r,
            Sh: n,
            br: o,
            ee: i
        };
    }
    Dh(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.an && e.hasCommittedMutations && !e.an;
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
    Zn(t, e, n) {
        const s = this.Vh;
        this.Vh = t.Vh, this.ee = t.ee;
        // Sort changes based on type and query comparator
        const i = t.Sh.Zt();
        i.sort(((t, e) => function(t, e) {
            const n = t => {
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
                    return b();
                }
            };
            return n(t) - n(e);
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
 */ (t.type, e.type) || this.yh(t.doc, e.doc))), this.Ch(n);
        const r = e ? this.Nh() : [], o = 0 === this.gh.size && this.le ? 1 /* Synced */ : 0 /* Local */ , c = o !== this.Ph;
        if (this.Ph = o, 0 !== i.length || c) {
            return {
                snapshot: new St(this.query, t.Vh, s, i, t.ee, 0 /* Local */ === o, c, 
                /* excludesMetadataChanges= */ !1),
                xh: r
            };
        }
        // no changes
        return {
            xh: r
        };
    }
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */    ea(t) {
        return this.le && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.le = !1, this.Zn({
            Vh: this.Vh,
            Sh: new bt,
            ee: this.ee,
            br: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            xh: []
        };
    }
    /**
     * Returns whether the doc for the given key should be in limbo.
     */    Fh(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.Rh.has(t) && (
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.Vh.has(t) && !this.Vh.get(t).an);
    }
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */    Ch(t) {
        t && (t._e.forEach((t => this.Rh = this.Rh.add(t))), t.fe.forEach((t => {})), t.de.forEach((t => this.Rh = this.Rh.delete(t))), 
        this.le = t.le);
    }
    Nh() {
        // We can only determine limbo documents when we're in-sync with the server.
        if (!this.le) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                const t = this.gh;
        this.gh = yt(), this.Vh.forEach((t => {
            this.Fh(t.key) && (this.gh = this.gh.add(t.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        const e = [];
        return t.forEach((t => {
            this.gh.has(t) || e.push(new Ao(t));
        })), this.gh.forEach((n => {
            t.has(n) || e.push(new mo(n));
        })), e;
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
    Oh(t) {
        this.Rh = t.Kc, this.gh = yt();
        const e = this.bh(t.documents);
        return this.Zn(e, /*updateLimboDocuments=*/ !0);
    }
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    Mh() {
        return St.ie(this.query, this.Vh, this.ee, 0 /* Local */ === this.Ph);
    }
}

/**
 * QueryView contains all of the data that SyncEngine needs to keep track of for
 * a particular query.
 */
class Po {
    constructor(
    /**
     * The query itself.
     */
    t, 
    /**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
    e, 
    /**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
    n) {
        this.query = t, this.targetId = e, this.view = n;
    }
}

/** Tracks a limbo resolution. */ class go {
    constructor(t) {
        this.key = t, 
        /**
         * Set to true once we've received a document. This is used in
         * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
         * decide whether it needs to manufacture a delete event for the target once
         * the target is CURRENT.
         */
        this.kh = !1;
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
 */ class yo {
    constructor(t, e, n, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    s, i, r) {
        this.Ou = t, this.$h = e, this.Lh = n, this.Bh = s, this.currentUser = i, this.qh = r, 
        this.Uh = {}, this.Qh = new ds((t => Wn(t)), Kn), this.Kh = new Map, 
        /**
         * The keys of documents that are in limbo for which we haven't yet started a
         * limbo resolution query.
         */
        this.Wh = [], 
        /**
         * Keeps track of the target ID for each document that is in limbo with an
         * active target.
         */
        this.jh = new _t(H.$), 
        /**
         * Keeps track of the information about an active limbo resolution for each
         * active target ID that was started for the purpose of limbo resolution.
         */
        this.Gh = new Map, this.zh = new oo, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.Hh = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.Jh = new Map, this.Yh = ji.Io(), this.onlineState = "Unknown" /* Unknown */ , 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.Xh = void 0;
    }
    get Zh() {
        return !0 === this.Xh;
    }
}

/**
 * Initiates the new listen, resolves promise when listen enqueued to the
 * server. All the subsequent view snapshots or errors are sent to the
 * subscribed handlers. Returns the initial snapshot.
 */
async function Vo(t, e) {
    const n = tc(t);
    let s, i;
    const r = n.Qh.get(e);
    if (r) 
    // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
    // already exists when EventManager calls us for the first time. This
    // happens when the primary tab is already listening to this query on
    // behalf of another tab and the user of the primary also starts listening
    // to the query. EventManager will not have an assigned target ID in this
    // case and calls `listen` to obtain this ID.
    s = r.targetId, n.Bh.Ha(s), i = r.view.Mh(); else {
        const t = await _r(n.Ou, Un(e)), r = n.Bh.Ha(t.targetId);
        s = t.targetId, i = await po(n, e, s, "current" === r), n.Zh && vr(n.$h, t);
    }
    return i;
}

/**
 * Registers a view for a previously unknown query and computes its initial
 * snapshot.
 */ async function po(t, e, n, s) {
    // PORTING NOTE: On Web only, we inject the code that registers new Limbo
    // targets based on view changes. This allows us to only depend on Limbo
    // changes when user code includes queries.
    t.tl = (e, n, s) => async function(t, e, n, s) {
        let i = e.view.bh(n);
        i.br && (
        // The query has a limit and some docs were removed, so we need
        // to re-run the query against the local store to make sure we
        // didn't lose any good docs that had been past the limit.
        i = await dr(t.Ou, e.query, 
        /* usePreviousResults= */ !1).then((({documents: t}) => e.view.bh(t, i))));
        const r = s && s.re.get(e.targetId), o = e.view.Zn(i, 
        /* updateLimboDocuments= */ t.Zh, r);
        return Lo(t, e.targetId, o.xh), o.snapshot;
    }(t, e, n, s);
    const i = await dr(t.Ou, e, 
    /* usePreviousResults= */ !0), r = new Ro(e, i.Kc), o = r.bh(i.documents), c = Ct.he(n, s && "Offline" /* Offline */ !== t.onlineState), u = r.Zn(o, 
    /* updateLimboDocuments= */ t.Zh, c);
    Lo(t, n, u.xh);
    const a = new Po(e, n, r);
    return t.Qh.set(e, a), t.Kh.has(n) ? t.Kh.get(n).push(e) : t.Kh.set(n, [ e ]), u.snapshot;
}

/** Stops listening to the query. */ async function vo(t, e) {
    const n = D(t), s = n.Qh.get(e), i = n.Kh.get(s.targetId);
    if (i.length > 1) return n.Kh.set(s.targetId, i.filter((t => !Kn(t, e)))), void n.Qh.delete(e);
    // No other queries are mapped to the target, clean up the query and the target.
        if (n.Zh) {
        // We need to remove the local query target first to allow us to verify
        // whether any other client is still interested in this target.
        n.Bh.Ya(s.targetId);
        n.Bh.Ka(s.targetId) || await fr(n.Ou, s.targetId, 
        /*keepPersistedTargetData=*/ !1).then((() => {
            n.Bh.Za(s.targetId), br(n.$h, s.targetId), ko(n, s.targetId);
        })).catch(Ir);
    } else ko(n, s.targetId), await fr(n.Ou, s.targetId, 
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
 */ async function bo(t, e, n) {
    const s = ec(t);
    try {
        const t = await function(t, e) {
            const n = D(t), s = Q.now(), i = e.reduce(((t, e) => t.add(e.key)), yt());
            let r;
            return n.persistence.runTransaction("Locally write mutations", "readwrite", (t => n.Bc._s(t, i).next((i => {
                r = i;
                // For non-idempotent mutations (such as `FieldValue.increment()`),
                // we record the base state in a separate patch mutation. This is
                // later used to guarantee consistent values and prevents flicker
                // even if the backend sends us an update that already includes our
                // transform.
                const o = [];
                for (const t of e) {
                    const e = wn(t, r.get(t.key));
                    null != e && 
                    // NOTE: The base state should only be applied if there's some
                    // existing document to override, so use a Precondition of
                    // exists=true
                    o.push(new mn(t.key, e, bn(e.proto.mapValue), hn.exists(!0)));
                }
                return n.rs.Or(t, s, o, e);
            })))).then((t => {
                const e = t.vn(r);
                return {
                    batchId: t.batchId,
                    Qn: e
                };
            }));
        }(s.Ou, e);
        s.Bh.Wa(t.batchId), function(t, e, n) {
            let s = t.Hh[t.currentUser.h()];
            s || (s = new _t(B));
            s = s.Tt(e, n), t.Hh[t.currentUser.h()] = s;
        }
        /**
 * Resolves or rejects the user callback for the given batch and then discards
 * it.
 */ (s, t.batchId, n), await Uo(s, t.Qn), await Br(s.$h);
    } catch (t) {
        // If we can't persist the mutation, we reject the user callback and
        // don't send the mutation. The user can then retry the write.
        const e = Ls(t, "Failed to persist write");
        n.reject(e);
    }
}

/**
 * Applies one remote event to the sync engine, notifying any views of the
 * changes, and releasing any pending mutation batches that would become
 * visible because of the snapshot version the remote event contains.
 */ async function So(t, e) {
    const n = D(t);
    try {
        const t = await hr(n.Ou, e);
        // Update `receivedDocument` as appropriate for any limbo targets.
                e.re.forEach(((t, e) => {
            const s = n.Gh.get(e);
            s && (
            // Since this is a limbo resolution lookup, it's for a single document
            // and it could be added, modified, or removed, but not a combination.
            S(t._e.size + t.fe.size + t.de.size <= 1), t._e.size > 0 ? s.kh = !0 : t.fe.size > 0 ? S(s.kh) : t.de.size > 0 && (S(s.kh), 
            s.kh = !1));
        })), await Uo(n, t, e);
    } catch (t) {
        await Ir(t);
    }
}

/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */ function Do(t, e, n) {
    const s = D(t);
    // If we are the secondary client, we explicitly ignore the remote store's
    // online state (the local client may go offline, even though the primary
    // tab remains online) and only apply the primary tab's online state from
    // SharedClientState.
        if (s.Zh && 0 /* RemoteStore */ === n || !s.Zh && 1 /* SharedClientState */ === n) {
        const t = [];
        s.Qh.forEach(((n, s) => {
            const i = s.view.ea(e);
            i.snapshot && t.push(i.snapshot);
        })), function(t, e) {
            const n = D(t);
            n.onlineState = e;
            let s = !1;
            n.queries.forEach(((t, n) => {
                for (const t of n.listeners) 
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                t.ea(e) && (s = !0);
            })), s && io(n);
        }(s.Lh, e), t.length && s.Uh.fu(t), s.onlineState = e, s.Zh && s.Bh.sh(e);
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
 */ async function Co(t, e, n) {
    const s = D(t);
    // PORTING NOTE: Multi-tab only.
        s.Bh.th(e, "rejected", n);
    const i = s.Gh.get(e), r = i && i.key;
    if (r) {
        // TODO(klimt): We really only should do the following on permission
        // denied errors, but we don't have the cause code here.
        // It's a limbo doc. Create a synthetic event saying it was deleted.
        // This is kind of a hack. Ideally, we would have a method in the local
        // store to purge a document. However, it would be tricky to keep all of
        // the local store's invariants with another method.
        let t = new _t(H.$);
        t = t.Tt(r, new Cn(r, K.min()));
        const n = yt().add(r), i = new Dt(K.min(), 
        /* targetChanges= */ new Map, 
        /* targetMismatches= */ new wt(B), t, n);
        await So(s, i), 
        // Since this query failed, we won't want to manually unlisten to it.
        // We only remove it from bookkeeping after we successfully applied the
        // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
        // this query when the RemoteStore restarts the Watch stream, which should
        // re-trigger the target failure.
        s.jh = s.jh.remove(r), s.Gh.delete(e), qo(s);
    } else await fr(s.Ou, e, 
    /* keepPersistedTargetData */ !1).then((() => ko(s, e, n))).catch(Ir);
}

async function No(t, e) {
    const n = D(t), s = e.batch.batchId;
    try {
        const t = await ur(n.Ou, e);
        // The local store may or may not be able to apply the write result and
        // raise events immediately (depending on whether the watcher is caught
        // up), so we raise user callbacks first so that they consistently happen
        // before listen events.
                Mo(n, s, /*error=*/ null), Oo(n, s), n.Bh.Ga(s, "acknowledged"), await Uo(n, t);
    } catch (t) {
        await Ir(t);
    }
}

async function xo(t, e, n) {
    const s = D(t);
    try {
        const t = await function(t, e) {
            const n = D(t);
            return n.persistence.runTransaction("Reject batch", "readwrite-primary", (t => {
                let s;
                return n.rs.kr(t, e).next((e => (S(null !== e), s = e.keys(), n.rs.Qr(t, e)))).next((() => n.rs.Gr(t))).next((() => n.Bc._s(t, s)));
            }));
        }
        /**
 * Returns the largest (latest) batch id in mutation queue that is pending
 * server response.
 *
 * Returns `BATCHID_UNKNOWN` if the queue is empty.
 */ (s.Ou, e);
        // The local store may or may not be able to apply the write result and
        // raise events immediately (depending on whether the watcher is caught up),
        // so we raise user callbacks first so that they consistently happen before
        // listen events.
                Mo(s, e, n), Oo(s, e), s.Bh.Ga(e, "rejected", n), await Uo(s, t);
    } catch (n) {
        await Ir(n);
    }
}

/**
 * Registers a user callback that resolves when all pending mutations at the moment of calling
 * are acknowledged .
 */ async function Fo(t, e) {
    const n = D(t);
    xr(n.$h) || y("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");
    try {
        const t = await function(t) {
            const e = D(t);
            return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (t => e.rs.Br(t)));
        }(n.Ou);
        if (-1 === t) 
        // Trigger the callback right away if there is no pending writes at the moment.
        return void e.resolve();
        const s = n.Jh.get(t) || [];
        s.push(e), n.Jh.set(t, s);
    } catch (t) {
        const n = Ls(t, "Initialization of waitForPendingWrites() operation failed");
        e.reject(n);
    }
}

/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */ function Oo(t, e) {
    (t.Jh.get(e) || []).forEach((t => {
        t.resolve();
    })), t.Jh.delete(e);
}

/** Reject all outstanding callbacks waiting for pending writes to complete. */ function Mo(t, e, n) {
    const s = D(t);
    let i = s.Hh[s.currentUser.h()];
    // NOTE: Mutations restored from persistence won't have callbacks, so it's
    // okay for there to be no callback for this ID.
        if (i) {
        const t = i.get(e);
        t && (n ? t.reject(n) : t.resolve(), i = i.remove(e)), s.Hh[s.currentUser.h()] = i;
    }
}

function ko(t, e, n = null) {
    t.Bh.Ya(e);
    for (const s of t.Kh.get(e)) t.Qh.delete(s), n && t.Uh.el(s, n);
    if (t.Kh.delete(e), t.Zh) {
        t.zh.Ia(e).forEach((e => {
            t.zh.zr(e) || 
            // We removed the last reference for this key
            $o(t, e);
        }));
    }
}

function $o(t, e) {
    // It's possible that the target already got removed because the query failed. In that case,
    // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
    const n = t.jh.get(e);
    null !== n && (br(t.$h, n), t.jh = t.jh.remove(e), t.Gh.delete(n), qo(t));
}

function Lo(t, e, n) {
    for (const s of n) if (s instanceof mo) t.zh.Oo(s.key, e), Bo(t, s); else if (s instanceof Ao) {
        y("SyncEngine", "Document no longer in limbo: " + s.key), t.zh.ko(s.key, e);
        t.zh.zr(s.key) || 
        // We removed the last reference for this key
        $o(t, s.key);
    } else b();
}

function Bo(t, e) {
    const n = e.key;
    t.jh.get(n) || (y("SyncEngine", "New document in limbo: " + n), t.Wh.push(n), qo(t));
}

/**
 * Starts listens for documents in limbo that are enqueued for resolution,
 * subject to a maximum number of concurrent resolutions.
 *
 * Without bounding the number of concurrent resolutions, the server can fail
 * with "resource exhausted" errors which can lead to pathological client
 * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
 */ function qo(t) {
    for (;t.Wh.length > 0 && t.jh.size < t.qh; ) {
        const e = t.Wh.shift(), n = t.Yh.next();
        t.Gh.set(n, new go(e)), t.jh = t.jh.Tt(e, n), vr(t.$h, new ot(Un(On(e.path)), n, 2 /* LimboResolution */ , ys.Ds));
    }
}

async function Uo(t, e, n) {
    const s = D(t), i = [], r = [], o = [];
    s.Qh.W() || (s.Qh.forEach(((t, c) => {
        o.push(s.tl(c, e, n).then((t => {
            if (t) {
                s.Zh && s.Bh.th(c.targetId, t.fromCache ? "not-current" : "current"), i.push(t);
                const e = gs.Vs(c.targetId, t);
                r.push(e);
            }
        })));
    })), await Promise.all(o), s.Uh.fu(i), await async function(t, e) {
        const n = D(t);
        try {
            await n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (t => ws.forEach(e, (e => ws.forEach(e.gs, (s => n.persistence.Dr.Oo(t, e.targetId, s))).next((() => ws.forEach(e.ys, (s => n.persistence.Dr.ko(t, e.targetId, s)))))))));
        } catch (t) {
            if (!Ss(t)) throw t;
            // If `notifyLocalViewChanges` fails, we did not advance the sequence
            // number for the documents that were included in this transaction.
            // This might trigger them to be deleted earlier than they otherwise
            // would have, but it should not invalidate the integrity of the data.
            y("LocalStore", "Failed to update sequence numbers: " + t);
        }
        for (const t of e) {
            const e = t.targetId;
            if (!t.fromCache) {
                const t = n.Mc.get(e), s = t.ft, i = t.Et(s);
                // Advance the last limbo free snapshot version
                                n.Mc = n.Mc.Tt(e, i);
            }
        }
    }(s.Ou, r));
}

async function Qo(t, e) {
    const n = D(t);
    if (!n.currentUser.isEqual(e)) {
        y("SyncEngine", "User change. New user:", e.h());
        const t = await cr(n.Ou, e);
        n.currentUser = e, 
        // Fails tasks waiting for pending writes requested by previous user.
        function(t, e) {
            t.Jh.forEach((t => {
                t.forEach((t => {
                    t.reject(new N(C.CANCELLED, e));
                }));
            })), t.Jh.clear();
        }(n, "'waitForPendingWrites' promise is rejected due to a user change."), 
        // TODO(b/114226417): Consider calling this only in the primary tab.
        n.Bh.nh(e, t.Uc, t.Qc), await Uo(n, t.qc);
    }
}

function Ko(t, e) {
    const n = D(t), s = n.Gh.get(e);
    if (s && s.kh) return yt().add(s.key);
    {
        let t = yt();
        const s = n.Kh.get(e);
        if (!s) return t;
        for (const e of s) {
            const s = n.Qh.get(e);
            t = t.Gt(s.view.ph);
        }
        return t;
    }
}

/**
 * Reconcile the list of synced documents in an existing view with those
 * from persistence.
 */ async function Wo(t, e) {
    const n = D(t), s = await dr(n.Ou, e.query, 
    /* usePreviousResults= */ !0), i = e.view.Oh(s);
    return n.Zh && Lo(n, e.targetId, i.xh), i;
}

/**
 * Retrieves newly changed documents from remote document cache and raises
 * snapshots if needed.
 */
// PORTING NOTE: Multi-Tab only.
async function jo(t) {
    const e = D(t);
    return Er(e.Ou).then((t => Uo(e, t)));
}

/** Applies a mutation state to an existing batch.  */
// PORTING NOTE: Multi-Tab only.
async function Go(t, e, n, s) {
    const i = D(t), r = await function(t, e) {
        const n = D(t), s = D(n.rs);
        return n.persistence.runTransaction("Lookup mutation documents", "readonly", (t => s.$r(t, e).next((e => e ? n.Bc._s(t, e) : ws.resolve(null)))));
    }
    // PORTING NOTE: Multi-Tab only.
    (i.Ou, e);
    null !== r ? ("pending" === n ? 
    // If we are the primary client, we need to send this write to the
    // backend. Secondary clients will ignore these writes since their remote
    // connection is disabled.
    await Br(i.$h) : "acknowledged" === n || "rejected" === n ? (
    // NOTE: Both these methods are no-ops for batches that originated from
    // other clients.
    Mo(i, e, s || null), Oo(i, e), function(t, e) {
        D(D(t).rs).Wr(e);
    }
    // PORTING NOTE: Multi-Tab only.
    (i.Ou, e)) : b(), await Uo(i, r)) : 
    // A throttled tab may not have seen the mutation before it was completed
    // and removed from the mutation queue, in which case we won't have cached
    // the affected documents. In this case we can safely ignore the update
    // since that means we didn't apply the mutation locally at all (if we
    // had, we would have cached the affected documents), and so we will just
    // see any resulting document changes via normal remote document updates
    // as applicable.
    y("SyncEngine", "Cannot apply mutation batch with id: " + e);
}

/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.
async function zo(t, e) {
    const n = D(t);
    if (tc(n), ec(n), !0 === e && !0 !== n.Xh) {
        // Secondary tabs only maintain Views for their local listeners and the
        // Views internal state may not be 100% populated (in particular
        // secondary tabs don't track syncedDocuments, the set of documents the
        // server considers to be in the target). So when a secondary becomes
        // primary, we need to need to make sure that all views for all targets
        // match the state on disk.
        const t = n.Bh.Ua(), e = await Ho(n, t.H());
        n.Xh = !0, await Hr(n.$h, !0);
        for (const t of e) vr(n.$h, t);
    } else if (!1 === e && !1 !== n.Xh) {
        const t = [];
        let e = Promise.resolve();
        n.Kh.forEach(((s, i) => {
            n.Bh.Xa(i) ? t.push(i) : e = e.then((() => (ko(n, i), fr(n.Ou, i, 
            /*keepPersistedTargetData=*/ !0)))), br(n.$h, i);
        })), await e, await Ho(n, t), 
        // PORTING NOTE: Multi-Tab only.
        function(t) {
            const e = D(t);
            e.Gh.forEach(((t, n) => {
                br(e.$h, n);
            })), e.zh.ma(), e.Gh = new Map, e.jh = new _t(H.$);
        }
        /**
 * Reconcile the query views of the provided query targets with the state from
 * persistence. Raises snapshots for any changes that affect the local
 * client and returns the updated state of all target's query data.
 *
 * @param syncEngine - The sync engine implementation
 * @param targets - the list of targets with views that need to be recomputed
 * @param transitionToPrimary - `true` iff the tab transitions from a secondary
 * tab to a primary tab
 */
        // PORTING NOTE: Multi-Tab only.
        (n), n.Xh = !1, await Hr(n.$h, !1);
    }
}

async function Ho(t, e, n) {
    const s = D(t), i = [], r = [];
    for (const t of e) {
        let e;
        const n = s.Kh.get(t);
        if (n && 0 !== n.length) {
            // For queries that have a local View, we fetch their current state
            // from LocalStore (as the resume token and the snapshot version
            // might have changed) and reconcile their views with the persisted
            // state (the list of syncedDocuments may have gotten out of sync).
            e = await _r(s.Ou, Un(n[0]));
            for (const t of n) {
                const e = s.Qh.get(t), n = await Wo(s, e);
                n.snapshot && r.push(n.snapshot);
            }
        } else {
            // For queries that never executed on this client, we need to
            // allocate the target in LocalStore and initialize a new View.
            const n = await wr(s.Ou, t);
            e = await _r(s.Ou, n), await po(s, Jo(n), t, 
            /*current=*/ !1);
        }
        i.push(e);
    }
    return s.Uh.fu(r), i;
}

/**
 * Creates a `Query` object from the specified `Target`. There is no way to
 * obtain the original `Query`, so we synthesize a `Query` from the `Target`
 * object.
 *
 * The synthesized result might be different from the original `Query`, but
 * since the synthesized `Query` should return the same results as the
 * original one (only the presentation of results might differ), the potential
 * difference will not cause issues.
 */
// PORTING NOTE: Multi-Tab only.
function Jo(t) {
    return Fn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F" /* First */ , t.startAt, t.endAt);
}

/** Returns the IDs of the clients that are currently active. */
// PORTING NOTE: Multi-Tab only.
function Yo(t) {
    const e = D(t);
    return D(D(e.Ou).persistence).gc();
}

/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.
async function Xo(t, e, n, s) {
    const i = D(t);
    if (i.Xh) 
    // If we receive a target state notification via WebStorage, we are
    // either already secondary or another tab has taken the primary lease.
    y("SyncEngine", "Ignoring unexpected query state notification."); else if (i.Kh.has(e)) switch (n) {
      case "current":
      case "not-current":
        {
            const t = await Er(i.Ou), s = Dt.ae(e, "current" === n);
            await Uo(i, t, s);
            break;
        }

      case "rejected":
        await fr(i.Ou, e, 
        /* keepPersistedTargetData */ !0), ko(i, e, s);
        break;

      default:
        b();
    }
}

/** Adds or removes Watch targets for queries from different tabs. */ async function Zo(t, e, n) {
    const s = tc(t);
    if (s.Xh) {
        for (const t of e) {
            if (s.Kh.has(t)) {
                // A target might have been added in a previous attempt
                y("SyncEngine", "Adding an already active target " + t);
                continue;
            }
            const e = await wr(s.Ou, t), n = await _r(s.Ou, e);
            await po(s, Jo(e), n.targetId, 
            /*current=*/ !1), vr(s.$h, n);
        }
        for (const t of n) 
        // Check that the target is still active since the target might have been
        // removed if it has been rejected by the backend.
        s.Kh.has(t) && 
        // Release queries that are still active.
        await fr(s.Ou, t, 
        /* keepPersistedTargetData */ !1).then((() => {
            br(s.$h, t), ko(s, t);
        })).catch(Ir);
    }
}

function tc(t) {
    const e = D(t);
    return e.$h.ku.Gu = So.bind(null, e), e.$h.ku.Xe = Ko.bind(null, e), e.$h.ku.ju = Co.bind(null, e), 
    e.Uh.fu = no.bind(null, e.Lh), e.Uh.el = so.bind(null, e.Lh), e;
}

function ec(t) {
    const e = D(t);
    return e.$h.ku.zu = No.bind(null, e), e.$h.ku.Hu = xo.bind(null, e), e;
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
 */ class nc {
    constructor(t, e) {
        this.os = t, this.Dr = e, 
        /**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */
        this.rs = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.nl = 1, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.sl = new wt(co._a);
    }
    Fr(t) {
        return ws.resolve(0 === this.rs.length);
    }
    Or(t, e, n, s) {
        const i = this.nl;
        if (this.nl++, this.rs.length > 0) {
            this.rs[this.rs.length - 1];
        }
        const r = new _s(i, e, n, s);
        this.rs.push(r);
        // Track references by document key and index collection parents.
        for (const e of s) this.sl = this.sl.add(new co(e.key, i)), this.os.Mr(t, e.key.path.q());
        return ws.resolve(r);
    }
    kr(t, e) {
        return ws.resolve(this.il(e));
    }
    Lr(t, e) {
        const n = e + 1, s = this.rl(n), i = s < 0 ? 0 : s;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return ws.resolve(this.rs.length > i ? this.rs[i] : null);
    }
    Br() {
        return ws.resolve(0 === this.rs.length ? -1 : this.nl - 1);
    }
    qr(t) {
        return ws.resolve(this.rs.slice());
    }
    us(t, e) {
        const n = new co(e, 0), s = new co(e, Number.POSITIVE_INFINITY), i = [];
        return this.sl.Kt([ n, s ], (t => {
            const e = this.il(t.Ra);
            i.push(e);
        })), ws.resolve(i);
    }
    ds(t, e) {
        let n = new wt(B);
        return e.forEach((t => {
            const e = new co(t, 0), s = new co(t, Number.POSITIVE_INFINITY);
            this.sl.Kt([ e, s ], (t => {
                n = n.add(t.Ra);
            }));
        })), ws.resolve(this.ol(n));
    }
    Rs(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        const n = e.path, s = n.length + 1;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
        let i = n;
        H.ot(i) || (i = i.child(""));
        const r = new co(new H(i), 0);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                let o = new wt(B);
        return this.sl.Wt((t => {
            const e = t.key.path;
            return !!n.j(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === s && (o = o.add(t.Ra)), !0);
        }), r), ws.resolve(this.ol(o));
    }
    ol(t) {
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
        const e = [];
        return t.forEach((t => {
            const n = this.il(t);
            null !== n && e.push(n);
        })), e;
    }
    Qr(t, e) {
        S(0 === this.cl(e.batchId, "removed")), this.rs.shift();
        let n = this.sl;
        return ws.forEach(e.mutations, (s => {
            const i = new co(s.key, e.batchId);
            return n = n.delete(i), this.Dr.jr(t, s.key);
        })).next((() => {
            this.sl = n;
        }));
    }
    Wr(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }
    zr(t, e) {
        const n = new co(e, 0), s = this.sl.jt(n);
        return ws.resolve(e.isEqual(s && s.key));
    }
    Gr(t) {
        return this.rs.length, ws.resolve();
    }
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId - The batchId to search for
     * @param action - A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */    cl(t, e) {
        return this.rl(t);
    }
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @returns The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */    rl(t) {
        if (0 === this.rs.length) 
        // As an index this is past the end of the queue
        return 0;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
                return t - this.rs[0].batchId;
    }
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */    il(t) {
        const e = this.rl(t);
        if (e < 0 || e >= this.rs.length) return null;
        return this.rs[e];
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
class sc {
    /**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */
    constructor(t, e) {
        this.os = t, this.ul = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new _t(H.$), 
        /** Size of all cached documents. */
        this.size = 0;
    }
    /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */    jn(t, e, n) {
        const s = e.key, i = this.docs.get(s), r = i ? i.size : 0, o = this.ul(e);
        return this.docs = this.docs.Tt(s, {
            zn: e,
            size: o,
            readTime: n
        }), this.size += o - r, this.os.Mr(t, s.path.q());
    }
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */    Hn(t) {
        const e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }
    Jn(t, e) {
        const n = this.docs.get(e);
        return ws.resolve(n ? n.zn : null);
    }
    getEntries(t, e) {
        let n = mt();
        return e.forEach((t => {
            const e = this.docs.get(t);
            n = n.Tt(t, e ? e.zn : null);
        })), ws.resolve(n);
    }
    ws(t, e, n) {
        let s = Rt();
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
                const i = new H(e.path.child("")), r = this.docs.Vt(i);
        for (;r.Nt(); ) {
            const {key: t, value: {zn: i, readTime: o}} = r.Ct();
            if (!e.path.j(t.path)) break;
            o.F(n) <= 0 || i instanceof Dn && Gn(e, i) && (s = s.Tt(i.key, i));
        }
        return ws.resolve(s);
    }
    al(t, e) {
        return ws.forEach(this.docs, (t => e(t)));
    }
    io(t) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new ic(this);
    }
    oo(t) {
        return ws.resolve(this.size);
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
class ic extends Es {
    constructor(t) {
        super(), this.co = t;
    }
    Zn(t) {
        const e = [];
        return this.Qn.forEach(((n, s) => {
            s && s.zn ? e.push(this.co.jn(t, s.zn, this.Wn(n))) : this.co.Hn(n);
        })), ws.qn(e);
    }
    Yn(t, e) {
        return this.co.Jn(t, e);
    }
    Xn(t, e) {
        return this.co.getEntries(t, e);
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
 */ class rc {
    constructor(t) {
        this.persistence = t, 
        /**
         * Maps a target to the data about that target
         */
        this.hl = new ds((t => et(t)), st), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = K.min(), 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.ll = 0, 
        /**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */
        this._l = new oo, this.targetCount = 0, this.fl = ji.To();
    }
    Ue(t, e) {
        return this.hl.forEach(((t, n) => e(n))), ws.resolve();
    }
    Po(t) {
        return ws.resolve(this.lastRemoteSnapshotVersion);
    }
    yo(t) {
        return ws.resolve(this.ll);
    }
    mo(t) {
        return this.highestTargetId = this.fl.next(), ws.resolve(this.highestTargetId);
    }
    Vo(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.ll && (this.ll = e), 
        ws.resolve();
    }
    vo(t) {
        this.hl.set(t.target, t);
        const e = t.targetId;
        e > this.highestTargetId && (this.fl = new ji(e), this.highestTargetId = e), t.sequenceNumber > this.ll && (this.ll = t.sequenceNumber);
    }
    po(t, e) {
        return this.vo(e), this.targetCount += 1, ws.resolve();
    }
    So(t, e) {
        return this.vo(e), ws.resolve();
    }
    Do(t, e) {
        return this.hl.delete(e.target), this._l.Ia(e.targetId), this.targetCount -= 1, 
        ws.resolve();
    }
    mr(t, e, n) {
        let s = 0;
        const i = [];
        return this.hl.forEach(((r, o) => {
            o.sequenceNumber <= e && null === n.get(o.targetId) && (this.hl.delete(r), i.push(this.Co(t, o.targetId)), 
            s++);
        })), ws.qn(i).next((() => s));
    }
    No(t) {
        return ws.resolve(this.targetCount);
    }
    xo(t, e) {
        const n = this.hl.get(e) || null;
        return ws.resolve(n);
    }
    Fo(t, e, n) {
        return this._l.wa(e, n), ws.resolve();
    }
    Mo(t, e, n) {
        this._l.Ta(e, n);
        const s = this.persistence.Dr, i = [];
        return s && e.forEach((e => {
            i.push(s.jr(t, e));
        })), ws.qn(i);
    }
    Co(t, e) {
        return this._l.Ia(e), ws.resolve();
    }
    $o(t, e) {
        const n = this._l.Aa(e);
        return ws.resolve(n);
    }
    zr(t, e) {
        return ws.resolve(this._l.zr(e));
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
 */ class oc {
    constructor(t) {
        this.serializer = t, this.dl = new Map, this.wl = new Map;
    }
    ho(t, e) {
        return ws.resolve(this.dl.get(e));
    }
    lo(t, e) {
        /** Encodes a BundleMetadata proto object to a Bundle model object. */
        var n;
        return this.dl.set(e.id, {
            id: (n = e).id,
            version: n.version,
            createTime: Te(n.createTime)
        }), ws.resolve();
    }
    _o(t, e) {
        return ws.resolve(this.wl.get(e));
    }
    fo(t, e) {
        var n;
        return this.wl.set(e.name, {
            name: (n = e).name,
            query: ci(n.bundledQuery),
            readTime: Te(n.readTime)
        }), ws.resolve();
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
class cc {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    constructor(t, e) {
        this.El = {}, this.Uo = new ys(0), this.Qo = !1, this.Qo = !0, this.Dr = t(this), 
        this.Yo = new rc(this);
        this.os = new Ai, this.ss = function(t, e) {
            return new sc(t, e);
        }(this.os, (t => this.Dr.Tl(t))), this.serializer = new Ys(e), this.Xo = new oc(this.serializer);
    }
    start() {
        return Promise.resolve();
    }
    Ic() {
        // No durable state to ensure is closed on shutdown.
        return this.Qo = !1, Promise.resolve();
    }
    get lr() {
        return this.Qo;
    }
    rc() {
        // No op.
    }
    oc() {
        // No op.
    }
    bc() {
        return this.os;
    }
    yc(t) {
        let e = this.El[t.h()];
        return e || (e = new nc(this.os, this.Dr), this.El[t.h()] = e), e;
    }
    Vc() {
        return this.Yo;
    }
    vc() {
        return this.ss;
    }
    Sc() {
        return this.Xo;
    }
    runTransaction(t, e, n) {
        y("MemoryPersistence", "Starting transaction:", t);
        const s = new uc(this.Uo.next());
        return this.Dr.Il(), n(s).next((t => this.Dr.ml(s).next((() => t)))).Ln().then((t => (s.ns(), 
        t)));
    }
    Al(t, e) {
        return ws.Un(Object.values(this.El).map((n => () => n.zr(t, e))));
    }
}

/**
 * Memory persistence is not actually transactional, but future implementations
 * may have transaction-scoped state.
 */ class uc extends Rs {
    constructor(t) {
        super(), this.Lo = t;
    }
}

class ac {
    constructor(t) {
        this.persistence = t, 
        /** Tracks all documents that are active in Query views. */
        this.Rl = new oo, 
        /** The list of documents that are potentially GCed after each transaction. */
        this.Pl = null;
    }
    static gl(t) {
        return new ac(t);
    }
    get yl() {
        if (this.Pl) return this.Pl;
        throw b();
    }
    Oo(t, e, n) {
        return this.Rl.Oo(n, e), this.yl.delete(n.toString()), ws.resolve();
    }
    ko(t, e, n) {
        return this.Rl.ko(n, e), this.yl.add(n.toString()), ws.resolve();
    }
    jr(t, e) {
        return this.yl.add(e.toString()), ws.resolve();
    }
    removeTarget(t, e) {
        this.Rl.Ia(e.targetId).forEach((t => this.yl.add(t.toString())));
        const n = this.persistence.Vc();
        return n.$o(t, e.targetId).next((t => {
            t.forEach((t => this.yl.add(t.toString())));
        })).next((() => n.Do(t, e)));
    }
    Il() {
        this.Pl = new Set;
    }
    ml(t) {
        // Remove newly orphaned documents.
        const e = this.persistence.vc().io();
        return ws.forEach(this.yl, (n => {
            const s = H.st(n);
            return this.Vl(t, s).next((t => {
                t || e.Hn(s);
            }));
        })).next((() => (this.Pl = null, e.apply(t))));
    }
    Fc(t, e) {
        return this.Vl(t, e).next((t => {
            t ? this.yl.delete(e.toString()) : this.yl.add(e.toString());
        }));
    }
    Tl(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }
    Vl(t, e) {
        return ws.Un([ () => ws.resolve(this.Rl.zr(e)), () => this.persistence.Vc().zr(t, e), () => this.persistence.Al(t, e) ]);
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
 */ class hc {
    constructor(t) {
        this.pl = t.pl, this.vl = t.vl;
    }
    lu(t) {
        this.bl = t;
    }
    ou(t) {
        this.Sl = t;
    }
    onMessage(t) {
        this.Dl = t;
    }
    close() {
        this.vl();
    }
    send(t) {
        this.pl(t);
    }
    Cl() {
        this.bl();
    }
    Nl(t) {
        this.Sl(t);
    }
    xl(t) {
        this.Dl(t);
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
 */ const lc = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery"
};

/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 */ class _c extends 
/**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */
class {
    constructor(t) {
        this.Fl = t, this.t = t.t;
        const e = t.ssl ? "https" : "http";
        this.Ol = e + "://" + t.host, this.Ml = "projects/" + this.t.projectId + "/databases/" + this.t.database + "/documents";
    }
    yu(t, e, n, s) {
        const i = this.kl(t, e);
        y("RestConnection", "Sending: ", i, n);
        const r = {};
        return this.$l(r, s), this.Ll(t, i, r, n).then((t => (y("RestConnection", "Received: ", t), 
        t)), (e => {
            throw p("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n), 
            e;
        }));
    }
    Vu(t, e, n, s) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.yu(t, e, n, s);
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */    $l(t, e) {
        if (t["X-Goog-Api-Client"] = "gl-js/ fire/8.1.2", 
        // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid triggering preflight requests.
        t["Content-Type"] = "text/plain", e) for (const n in e.T) e.T.hasOwnProperty(n) && (t[n] = e.T[n]);
    }
    kl(t, e) {
        const n = lc[t];
        return `${this.Ol}/v1/${e}:${n}`;
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
        super(t), this.forceLongPolling = t.forceLongPolling, this.i = t.i;
    }
    Ll(t, e, n, s) {
        return new Promise(((i, r) => {
            const o = new h;
            o.listenOnce(l.COMPLETE, (() => {
                try {
                    switch (o.getLastErrorCode()) {
                      case _.NO_ERROR:
                        const e = o.getResponseJson();
                        y("Connection", "XHR received:", JSON.stringify(e)), i(e);
                        break;

                      case _.TIMEOUT:
                        y("Connection", 'RPC "' + t + '" timed out'), r(new N(C.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case _.HTTP_ERROR:
                        const n = o.getStatus();
                        if (y("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", o.getResponseText()), 
                        n > 0) {
                            const t = o.getResponseJson().error;
                            if (t && t.status && t.message) {
                                const e = function(t) {
                                    const e = t.toLowerCase().replace(/_/g, "-");
                                    return Object.values(C).indexOf(e) >= 0 ? e : C.UNKNOWN;
                                }(t.status);
                                r(new N(e, t.message));
                            } else r(new N(C.UNKNOWN, "Server responded with status " + o.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        r(new N(C.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        b();
                    }
                } finally {
                    y("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            const c = JSON.stringify(s);
            o.send(e, "POST", c, n, 15);
        }));
    }
    _u(t, e) {
        const n = [ this.Ol, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], s = f(), h = d(), l = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: `projects/${this.t.projectId}/databases/${this.t.database}`
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
            detectBufferingProxy: this.i
        };
        this.$l(l.initMessageHeaders, e), 
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
        i() || r() || o() || c() || u() || a() || (l.httpHeadersOverwriteParam = "$httpHeaders");
        const _ = n.join("");
        y("Connection", "Creating WebChannel: " + _, l);
        const I = s.createWebChannel(_, l);
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                let m = !1, A = !1;
        // A flag to determine whether the stream was closed (by us or through an
        // error/close event) to avoid delivering multiple close events or sending
        // on a closed stream
                const R = new hc({
            pl: t => {
                A ? y("Connection", "Not sending because WebChannel is closed:", t) : (m || (y("Connection", "Opening WebChannel transport."), 
                I.open(), m = !0), y("Connection", "WebChannel sending:", t), I.send(t));
            },
            vl: () => I.close()
        }), P = (t, e, n) => {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            t.listen(e, (t => {
                try {
                    n(t);
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
                return P(I, w.EventType.OPEN, (() => {
            A || y("Connection", "WebChannel transport opened.");
        })), P(I, w.EventType.CLOSE, (() => {
            A || (A = !0, y("Connection", "WebChannel transport closed"), R.Nl());
        })), P(I, w.EventType.ERROR, (t => {
            A || (A = !0, p("Connection", "WebChannel transport errored:", t), R.Nl(new N(C.UNAVAILABLE, "The operation could not be completed")));
        })), P(I, w.EventType.MESSAGE, (t => {
            var e;
            if (!A) {
                const n = t.data[0];
                S(!!n);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                const s = n, i = s.error || (null === (e = s[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    y("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    const t = i.status;
                    let e = function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const e = ut[t];
                        if (void 0 !== e) return lt(e);
                    }(t), n = i.message;
                    void 0 === e && (e = C.INTERNAL, n = "Unknown error status: " + t + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    A = !0, R.Nl(new N(e, n)), I.close();
                } else y("Connection", "WebChannel received:", n), R.xl(n);
            }
        })), P(h, E.STAT_EVENT, (t => {
            t.stat === T.PROXY ? y("Connection", "Detected buffering proxy") : t.stat === T.NOPROXY && y("Connection", "Detected no buffering proxy");
        })), setTimeout((() => {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            R.Cl();
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
class fc {
    constructor() {
        this.Bl = () => this.ql(), this.Ul = () => this.Ql(), this.Kl = [], this.Wl();
    }
    Qu(t) {
        this.Kl.push(t);
    }
    Ic() {
        window.removeEventListener("online", this.Bl), window.removeEventListener("offline", this.Ul);
    }
    Wl() {
        window.addEventListener("online", this.Bl), window.addEventListener("offline", this.Ul);
    }
    ql() {
        y("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (const t of this.Kl) t(0 /* AVAILABLE */);
    }
    Ql() {
        y("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (const t of this.Kl) t(1 /* UNAVAILABLE */);
    }
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    static Gs() {
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
 */ class dc {
    Qu(t) {
        // No-op.
    }
    Ic() {
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
class wc {
    constructor() {
        this.synchronizeTabs = !1;
    }
    async initialize(t) {
        this.serializer = Is(t.Fl.t), this.Bh = this.jl(t), this.persistence = this.Gl(t), 
        await this.persistence.start(), this.zl = this.Hl(t), this.Ou = this.Jl(t);
    }
    Hl(t) {
        return null;
    }
    Jl(t) {
        return or(this.persistence, new js, t.Yl, this.serializer);
    }
    Gl(t) {
        return new cc(ac.gl, this.serializer);
    }
    jl(t) {
        return new Io;
    }
    async terminate() {
        this.zl && this.zl.stop(), await this.Bh.Ic(), await this.persistence.Ic();
    }
}

/**
 * Provides all components needed for Firestore with IndexedDB persistence.
 */ class Ec extends wc {
    constructor(t, e, n) {
        super(), this.Xl = t, this.cacheSizeBytes = e, this.forceOwnership = n, this.synchronizeTabs = !1;
    }
    async initialize(t) {
        await super.initialize(t), await Tr(this.Ou), await this.Xl.initialize(this, t), 
        // Enqueue writes from a previous session
        await ec(this.Xl.va), await Br(this.Xl.$h);
    }
    Jl(t) {
        return or(this.persistence, new js, t.Yl, this.serializer);
    }
    Hl(t) {
        const e = this.persistence.Dr.cr;
        return new Ks(e, t.di);
    }
    Gl(t) {
        const e = ir(t.Fl.t, t.Fl.persistenceKey), n = void 0 !== this.cacheSizeBytes ? Qs.er(this.cacheSizeBytes) : Qs.ir;
        return new Zi(this.synchronizeTabs, e, t.clientId, n, t.di, Os(), Ms(), this.serializer, this.Bh, !!this.forceOwnership);
    }
    jl(t) {
        return new Io;
    }
}

/**
 * Provides all components needed for Firestore with multi-tab IndexedDB
 * persistence.
 *
 * In the legacy client, this provider is used to provide both multi-tab and
 * non-multi-tab persistence since we cannot tell at build time whether
 * `synchronizeTabs` will be enabled.
 */ class Tc extends Ec {
    constructor(t, e) {
        super(t, e, /* forceOwnership= */ !1), this.Xl = t, this.cacheSizeBytes = e, this.synchronizeTabs = !0;
    }
    async initialize(t) {
        await super.initialize(t);
        const e = this.Xl.va;
        this.Bh instanceof To && (this.Bh.va = {
            Eh: Go.bind(null, e),
            Th: Xo.bind(null, e),
            Ih: Zo.bind(null, e),
            gc: Yo.bind(null, e),
            wh: jo.bind(null, e)
        }, await this.Bh.start()), 
        // NOTE: This will immediately call the listener, so we make sure to
        // set it after localStore / remoteStore are started.
        await this.persistence.ic((async t => {
            await zo(this.Xl.va, t), this.zl && (t && !this.zl.lr ? this.zl.start(this.Ou) : t || this.zl.stop());
        }));
    }
    jl(t) {
        const e = Os();
        if (!To.Gs(e)) throw new N(C.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
        const n = ir(t.Fl.t, t.Fl.persistenceKey);
        return new To(e, t.di, n, t.clientId, t.Yl);
    }
}

/**
 * Initializes and wires the components that are needed to interface with the
 * network.
 */ class Ic {
    async initialize(t, e) {
        this.Ou || (this.Ou = t.Ou, this.Bh = t.Bh, this.Mu = this.Zl(e), this.$h = this.t_(e), 
        this.Lh = this.e_(e), this.va = this.n_(e, 
        /* startAsPrimary=*/ !t.synchronizeTabs), this.Bh.pu = t => Do(this.va, t, 1 /* SharedClientState */), 
        this.$h.ku.s_ = Qo.bind(null, this.va), await Hr(this.$h, this.va.Zh));
    }
    e_(t) {
        return new Zr;
    }
    Zl(t) {
        const e = Is(t.Fl.t), n = (s = t.Fl, new _c(s));
        var s;
        /** Return the Platform-specific connectivity monitor. */        return function(t, e, n) {
            return new Pr(t, e, n);
        }(t.credentials, n, e);
    }
    t_(t) {
        return e = this.Ou, n = this.Mu, s = t.di, i = t => Do(this.va, t, 0 /* RemoteStore */), 
        r = fc.Gs() ? new fc : new dc, new yr(e, n, s, i, r);
        var e, n, s, i, r;
        /** Re-enables the network. Idempotent. */    }
    n_(t, e) {
        return function(t, e, n, 
        // PORTING NOTE: Manages state synchronization in multi-tab environments.
        s, i, r, o) {
            const c = new yo(t, e, n, s, i, r);
            return o && (c.Xh = !0), c;
        }(this.Ou, this.$h, this.Lh, this.Bh, t.Yl, t.qh, e);
    }
    terminate() {
        return async function(t) {
            const e = D(t);
            y("RemoteStore", "RemoteStore shutting down."), e.Bu.add(5 /* Shutdown */), await pr(e), 
            e.Uu.Ic(), 
            // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
            // triggering spurious listener events with cached data, etc.
            e.Ku.set("Unknown" /* Unknown */);
        }(this.$h);
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
 */ class mc {
    constructor(t) {
        this.observer = t, 
        /**
         * When set to true, will not raise future events. Necessary to deal with
         * async detachment of listener.
         */
        this.muted = !1;
    }
    next(t) {
        this.observer.next && this.i_(this.observer.next, t);
    }
    error(t) {
        this.observer.error ? this.i_(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
    }
    r_() {
        this.muted = !0;
    }
    i_(t, e) {
        this.muted || setTimeout((() => {
            this.muted || t(e);
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
 */ function Ac(t, e, n) {
    if (!n) throw new N(C.INVALID_ARGUMENT, `Function ${t}() cannot be called with an empty ${e}.`);
}

function Rc(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (void 0 !== e.mergeFields && void 0 !== e.merge) throw new N(C.INVALID_ARGUMENT, `Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);
    return e;
}

/**
 * Validates that two boolean options are not set at the same time.
 */ function Pc(t, e, n, s) {
    if (!0 === e && !0 === s) throw new N(C.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
}

/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */ function gc(t) {
    if (!H.ot(t)) throw new N(C.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`);
}

/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */ function yc(t) {
    if (H.ot(t)) throw new N(C.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`);
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */
/** Returns a string describing the type / value of the provided input. */
function Vc(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        {
            const e = 
            /** Hacky method to try to get the constructor name for an object. */
            function(t) {
                if (t.constructor) {
                    const e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                    if (e && e.length > 1) return e[1];
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
            return e ? `a custom ${e} object` : "an object";
        }
    }
    return "function" == typeof t ? "a function" : b();
}

function pc(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    if ("_delegate" in t && (
    // Unwrap Compat types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t = t.o_), !(t instanceof e)) {
        if (e.name === t.constructor.name) throw new N(C.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
        {
            const n = Vc(t);
            throw new N(C.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n}`);
        }
    }
    return t;
}

function vc(t, e) {
    if (e <= 0) throw new N(C.INVALID_ARGUMENT, `Function ${t}() requires a positive number, but it was: ${e}.`);
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
 */ class bc {
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
class Sc extends bc {
    c_(t) {
        if (2 /* MergeSet */ !== t.u_) throw 1 /* Update */ === t.u_ ? t.a_(this._methodName + "() can only appear at the top level of your update data") : t.a_(this._methodName + "() cannot be used with set() unless you pass {merge:true}");
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
        return t.en.push(t.path), null;
    }
    isEqual(t) {
        return t instanceof Sc;
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
 */ function Dc(t, e, n) {
    return new Uu({
        u_: 3 /* Argument */ ,
        h_: e.settings.h_,
        methodName: t._methodName,
        l_: n
    }, e.t, e.serializer, e.ignoreUndefinedProperties);
}

class Cc extends bc {
    c_(t) {
        return new cn(t.path, new Ye);
    }
    isEqual(t) {
        return t instanceof Cc;
    }
}

class Nc extends bc {
    constructor(t, e) {
        super(t), this.__ = e;
    }
    c_(t) {
        const e = Dc(this, t, 
        /*array=*/ !0), n = this.__.map((t => zu(t, e))), s = new Xe(n);
        return new cn(t.path, s);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

class xc extends bc {
    constructor(t, e) {
        super(t), this.__ = e;
    }
    c_(t) {
        const e = Dc(this, t, 
        /*array=*/ !0), n = this.__.map((t => zu(t, e))), s = new tn(n);
        return new cn(t.path, s);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

class Fc extends bc {
    constructor(t, e) {
        super(t), this.f_ = e;
    }
    c_(t) {
        const e = new nn(t.serializer, fe(t.serializer, this.f_));
        return new cn(t.path, e);
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
 */ class Oc {
    /**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */
    constructor(t, e) {
        if (!isFinite(t) || t < -90 || t > 90) throw new N(C.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new N(C.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this.d_ = t, this.w_ = e;
    }
    /**
     * The latitude of this `GeoPoint` instance.
     */    get latitude() {
        return this.d_;
    }
    /**
     * The longitude of this `GeoPoint` instance.
     */    get longitude() {
        return this.w_;
    }
    /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */    isEqual(t) {
        return this.d_ === t.d_ && this.w_ === t.w_;
    }
    toJSON() {
        return {
            latitude: this.d_,
            longitude: this.w_
        };
    }
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */    C(t) {
        return B(this.d_, t.d_) || B(this.w_, t.w_);
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
 */ class Mc {
    /** @hideconstructor */
    constructor(t) {
        this.E_ = t;
    }
    /**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */    static fromBase64String(t) {
        try {
            return new Mc(rt.fromBase64String(t));
        } catch (t) {
            throw new N(C.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t);
        }
    }
    /**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */    static fromUint8Array(t) {
        return new Mc(rt.fromUint8Array(t));
    }
    /**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */    toBase64() {
        return this.E_.toBase64();
    }
    /**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */    toUint8Array() {
        return this.E_.toUint8Array();
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
        return this.E_.isEqual(t.E_);
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
 */ class kc {
    constructor(t) {
        this.o_ = t;
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
 */ const $c = new Map;

// settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied firestore.Settings object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */
class Lc {
    constructor(t) {
        var e;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new N(C.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = true;
        } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, 
        void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040; else {
            if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new N(C.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, 
        Pc("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling);
    }
    isEqual(t) {
        return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
    }
}

/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */ class Bc {
    /** @hideconstructor */
    constructor(t, e) {
        this.T_ = "(lite)", this.I_ = new Lc({}), this.m_ = !1, t instanceof A ? (this.A_ = t, 
        this.R_ = new F) : (this.P_ = t, this.A_ = function(t) {
            if (!Object.prototype.hasOwnProperty.apply(t.options, [ "projectId" ])) throw new N(C.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
            return new A(t.options.projectId);
        }(t), this.R_ = new O(e));
    }
    /**
     * The {@link FirebaseApp} associated with this `Firestore` service
     * instance.
     */    get app() {
        if (!this.P_) throw new N(C.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this.P_;
    }
    get g_() {
        return this.m_;
    }
    get y_() {
        return void 0 !== this.V_;
    }
    p_(t) {
        if (this.m_) throw new N(C.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this.I_ = new Lc(t), void 0 !== t.credentials && (this.R_ = function(t) {
            if (!t) return new F;
            switch (t.type) {
              case "gapi":
                const e = t.client;
                // Make sure this really is a Gapi client.
                                return S(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new k(e, t.sessionIndex || "0");

              case "provider":
                return t.client;

              default:
                throw new N(C.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(t.credentials));
    }
    v_() {
        return this.I_;
    }
    b_() {
        return this.m_ = !0, this.I_;
    }
    _delete() {
        return this.V_ || (this.V_ = this.S_()), this.V_;
    }
    /**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */    S_() {
        /**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */
        return function(t) {
            const e = $c.get(t);
            e && (y("ComponentProvider", "Removing Datastore"), $c.delete(t), e.terminate());
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
function qc() {
    if ("undefined" == typeof Uint8Array) throw new N(C.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function Uc() {
    if ("undefined" == typeof atob) throw new N(C.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/** Immutable class holding a blob (binary data) */ class Qc extends kc {
    static fromBase64String(t) {
        return Uc(), new Qc(Mc.fromBase64String(t));
    }
    static fromUint8Array(t) {
        return qc(), new Qc(Mc.fromUint8Array(t));
    }
    toBase64() {
        return Uc(), this.o_.toBase64();
    }
    toUint8Array() {
        return qc(), this.o_.toUint8Array();
    }
    isEqual(t) {
        return this.o_.isEqual(t.o_);
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
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 */ class Kc {
    D_(t, e = "none") {
        switch (jt(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return te(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.C_(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.N_(t, e);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return this.x_(ee(t.bytesValue));

          case 7 /* RefValue */ :
            return this.F_(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.O_(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.M_(t.arrayValue, e);

          case 10 /* ObjectValue */ :
            return this.k_(t.mapValue, e);

          default:
            throw b();
        }
    }
    k_(t, e) {
        const n = {};
        return Bt(t.fields || {}, ((t, s) => {
            n[t] = this.D_(s, e);
        })), n;
    }
    O_(t) {
        return new Oc(te(t.latitude), te(t.longitude));
    }
    M_(t, e) {
        return (t.values || []).map((t => this.D_(t, e)));
    }
    N_(t, e) {
        switch (e) {
          case "previous":
            const n = Qt(t);
            return null == n ? null : this.D_(n, e);

          case "estimate":
            return this.C_(Kt(t));

          default:
            return null;
        }
    }
    C_(t) {
        const e = Zt(t);
        return new Q(e.seconds, e.nanos);
    }
    L_(t, e) {
        const n = j.Y(t);
        S(je(n));
        const s = new A(n.get(1), n.get(3)), i = new H(n.B(5));
        return s.isEqual(e) || 
        // TODO(b/64130202): Somehow support foreign references.
        V(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`), 
        i;
    }
}

class Wc extends Kc {
    constructor(t) {
        super(), this.firestore = t;
    }
    x_(t) {
        return new Qc(new Mc(t));
    }
    F_(t) {
        const e = this.L_(t, this.firestore.A_);
        return va.B_(e, this.firestore, /* converter= */ null);
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
 */ class jc {
    // Note: This class is stripped down version of the DocumentSnapshot in
    // the legacy SDK. The changes are:
    // - No support for SnapshotMetadata.
    // - No support for SnapshotOptions.
    /** @hideconstructor protected */
    constructor(t, e, n, s, i) {
        this.q_ = t, this.U_ = e, this.Q_ = n, this.K_ = s, this.W_ = i;
    }
    /** Property of the `DocumentSnapshot` that provides the document's ID. */    get id() {
        return this.Q_.path.K();
    }
    /**
     * The `DocumentReference` for the document included in the `DocumentSnapshot`.
     */    get ref() {
        return new Eu(this.q_, this.W_, this.Q_);
    }
    /**
     * Signals whether or not the document at the snapshot's location exists.
     *
     * @returns true if the document exists.
     */    exists() {
        return null !== this.K_;
    }
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * @returns An `Object` containing all fields in the document or `undefined`
     * if the document doesn't exist.
     */    data() {
        if (this.K_) {
            if (this.W_) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                const t = new Gc(this.q_, this.U_, this.Q_, this.K_, 
                /* converter= */ null);
                return this.W_.fromFirestore(t);
            }
            return this.U_.D_(this.K_.En());
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
        if (this.K_) {
            const e = this.K_.data().field(zc("DocumentSnapshot.get", t));
            if (null !== e) return this.U_.D_(e);
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
 */ class Gc extends jc {
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
 */ function zc(t, e) {
    return "string" == typeof e ? ta(t, e) : e instanceof kc ? e.o_.j_ : e.j_;
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
 */ class Hc {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...t) {
        for (let e = 0; e < t.length; ++e) if (0 === t[e].length) throw new N(C.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this.j_ = new z(t);
    }
    /**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */    isEqual(t) {
        return this.j_.isEqual(t.j_);
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
/** DOMException error code constants. */
/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */
class Jc extends Bc {
    /** @hideconstructor */
    constructor(t, e) {
        super(t, e), this.G_ = new $s, this.T_ = "name" in t ? t.name : "[DEFAULT]";
    }
    S_() {
        return this.z_ || 
        // The client must be initialized to ensure that all subsequent API
        // usage throws an exception.
        ya(this), this.z_.terminate();
    }
}

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
/**
 * Registers both the `OfflineComponentProvider` and `OnlineComponentProvider`.
 * If the operation fails with a recoverable error (see
 * `canRecoverFromIndexedDbError()` below), the returned Promise is rejected
 * but the client remains usable.
 */
function Yc(t, e, n) {
    const s = new Ts;
    return t.di.enqueue((async () => {
        try {
            await oa(t, n), await ca(t, e), s.resolve();
        } catch (t) {
            if (!
            /**
 * Decides whether the provided error allows us to gracefully disable
 * persistence (as opposed to crashing the client).
 */
            function(t) {
                if ("FirebaseError" === t.name) return t.code === C.FAILED_PRECONDITION || t.code === C.UNIMPLEMENTED;
                if ("undefined" != typeof DOMException && t instanceof DOMException) 
                // There are a few known circumstances where we can open IndexedDb but
                // trying to read/write will fail (e.g. quota exceeded). For
                // well-understood cases, we attempt to detect these and then gracefully
                // fall back to memory persistence.
                // NOTE: Rather than continue to add to this list, we could decide to
                // always fall back, with the risk that we might accidentally hide errors
                // representing actual SDK bugs.
                // When the browser is out of quota we could get either quota exceeded
                // or an aborted error depending on whether the error happened during
                // schema migration.
                return 22 === t.code || 20 === t.code || 
                // Firefox Private Browsing mode disables IndexedDb and returns
                // INVALID_STATE for any usage.
                11 === t.code;
                return !0;
            }
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
 */ (t)) throw t;
            console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + t), 
            s.reject(t);
        }
    })).then((() => s.promise));
}

function Xc(t) {
    if (t.g_ && !t.y_) throw new N(C.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
    const e = new Ts;
    return t.G_.Ni((async () => {
        try {
            await async function(t) {
                if (!ps.Gs()) return Promise.resolve();
                const e = t + "main";
                await ps.delete(e);
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
 */ (ir(t.A_, t.T_)), e.resolve();
        } catch (t) {
            e.reject(t);
        }
    })), e.promise;
}

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
 */ function Zc(t) {
    /**
 * Returns a Promise that resolves when all writes that were pending at the time
 * this method was called received server acknowledgement. An acknowledgement
 * can be either acceptance or rejection.
 */
    return function(t) {
        const e = new Ts;
        return t.di.Ri((async () => Fo(await fa(t), e))), e.promise;
    }(ga(t = pc(t, Jc)));
}

/**
 * Re-enables use of the network for this Firestore instance after a prior
 * call to {@link disableNetwork}.
 *
 * @returns A promise that is resolved once the network has been enabled.
 */ function tu(t) {
    /** Enables the network connection and re-enqueues all pending operations. */
    return function(t) {
        return t.di.enqueue((async () => {
            const e = await ha(t), n = await _a(t);
            return e.oc(!0), function(t) {
                const e = D(t);
                return e.Bu.delete(0 /* UserDisabled */), Vr(e);
            }(n);
        }));
    }
    /** Disables the network connection. Pending operations will not complete. */ (ga(t = pc(t, Jc)));
}

/**
 * Disables network usage for this instance. It can be re-enabled via {@link
 * enableNetwork}. While the network is disabled, any snapshot listeners,
 * `getDoc()` or `getDocs()` calls will return results from cache, and any write
 * operations will be queued until the network is restored.
 *
 * @returns A promise that is resolved once the network has been disabled.
 */ function eu(t) {
    return function(t) {
        return t.di.enqueue((async () => {
            const e = await ha(t), n = await _a(t);
            return e.oc(!1), async function(t) {
                const e = D(t);
                e.Bu.add(0 /* UserDisabled */), await pr(e), 
                // Set the OnlineState to Offline so get()s return from cache, etc.
                e.Ku.set("Offline" /* Offline */);
            }(n);
        }));
    }(ga(t = pc(t, Jc)));
}

function nu(t) {
    if (t.g_ || t.y_) throw new N(C.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
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
 */ class su extends jc {
    /** @hideconstructor protected */
    constructor(t, e, n, s, i, r) {
        super(t, e, n, s, r), this.q_ = t, this.H_ = t, this.metadata = i;
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
        if (this.K_) {
            if (this.W_) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                const e = new iu(this.q_, this.U_, this.Q_, this.K_, this.metadata, 
                /* converter= */ null);
                return this.W_.fromFirestore(e, t);
            }
            return this.U_.D_(this.K_.En(), t.serverTimestamps);
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
    get(t, e = {}) {
        if (this.K_) {
            const n = this.K_.data().field(zc("DocumentSnapshot.get", t));
            if (null !== n) return this.U_.D_(n, e.serverTimestamps);
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
 */ class iu extends su {
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
 */ class ru {
    /** @hideconstructor */
    constructor(t, e, n, s) {
        this.q_ = t, this.U_ = e, this.J_ = s, this.metadata = new Ca(s.hasPendingWrites, s.fromCache), 
        this.query = n;
    }
    /** An array of all the documents in the `QuerySnapshot`. */    get docs() {
        const t = [];
        return this.forEach((e => t.push(e))), t;
    }
    /** The number of documents in the `QuerySnapshot`. */    get size() {
        return this.J_.docs.size;
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
     */    forEach(t, e) {
        this.J_.docs.forEach((n => {
            t.call(e, new iu(this.q_, this.U_, n.key, n, new Ca(this.J_.ee.has(n.key), this.J_.fromCache), this.query.W_));
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
        const e = !!t.includeMetadataChanges;
        if (e && this.J_.se) throw new N(C.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.Y_ && this.X_ === e || (this.Y_ = 
        /** Calculates the array of DocumentChanges for a given ViewSnapshot. */
        function(t, e) {
            if (t.J_.te.W()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                let e, n = 0;
                return t.J_.docChanges.map((s => {
                    const i = new iu(t.q_, t.U_, s.doc.key, s.doc, new Ca(t.J_.ee.has(s.doc.key), t.J_.fromCache), t.query.W_);
                    return e = s.doc, {
                        type: "added",
                        doc: i,
                        oldIndex: -1,
                        newIndex: n++
                    };
                }));
            }
            {
                // A DocumentSet that is updated incrementally as changes are applied to use
                // to lookup the index of a document.
                let n = t.J_.te;
                return t.J_.docChanges.filter((t => e || 3 /* Metadata */ !== t.type)).map((e => {
                    const s = new iu(t.q_, t.U_, e.doc.key, e.doc, new Ca(t.J_.ee.has(e.doc.key), t.J_.fromCache), t.query.W_);
                    let i = -1, r = -1;
                    return 0 /* Added */ !== e.type && (i = n.indexOf(e.doc.key), n = n.delete(e.doc.key)), 
                    1 /* Removed */ !== e.type && (n = n.add(e.doc), r = n.indexOf(e.doc.key)), {
                        type: ou(e.type),
                        doc: s,
                        oldIndex: i,
                        newIndex: r
                    };
                }));
            }
        }(this, e), this.X_ = e), this.Y_;
    }
}

function ou(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return b();
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
 */ function cu(t, e) {
    return t instanceof su && e instanceof su ? t.q_ === e.q_ && t.Q_.isEqual(e.Q_) && (null === t.K_ ? null === e.K_ : t.K_.isEqual(e.K_)) && t.W_ === e.W_ : t instanceof ru && e instanceof ru && (t.q_ === e.q_ && Mu(t.query, e.query) && t.metadata.isEqual(e.metadata) && t.J_.isEqual(e.J_));
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
 */ class uu extends Kc {
    constructor(t) {
        super(), this.firestore = t;
    }
    x_(t) {
        return new Mc(t);
    }
    F_(t) {
        const e = this.L_(t, this.firestore.A_);
        return new Eu(this.firestore, /* converter= */ null, e);
    }
}

/**
 * Reads the document referred to by this `DocumentReference` from cache.
 * Returns an error if the document is not currently cached.
 *
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ function au(t) {
    t = pc(t, Eu);
    const e = pc(t.firestore, Jc), n = ga(e), s = new uu(e);
    return function(t, e) {
        const n = new Ts;
        return t.di.Ri((async () => async function(t, e, n) {
            try {
                const s = await function(t, e) {
                    const n = D(t);
                    return n.persistence.runTransaction("read document", "readonly", (t => n.Bc.cs(t, e)));
                }(t, e);
                s instanceof Dn ? n.resolve(s) : s instanceof Cn ? n.resolve(null) : n.reject(new N(C.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"));
            } catch (t) {
                const s = Ls(t, `Failed to get document '${e} from cache`);
                n.reject(s);
            }
        }
        /**
 * Retrieves a latency-compensated document from the backend via a
 * SnapshotListener.
 */ (await la(t), e, n))), n.promise;
    }(n, t.Q_).then((n => new su(e, s, t.Q_, n, new Ca(n instanceof Dn && n.an, 
    /* fromCache= */ !0), t.W_)));
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
function hu(t) {
    t = pc(t, Tu);
    const e = pc(t.firestore, Jc), n = ga(e), s = new uu(e);
    return function(t, e) {
        const n = new Ts;
        return t.di.Ri((async () => async function(t, e, n) {
            try {
                const s = await dr(t, e, 
                /* usePreviousResults= */ !0), i = new Ro(e, s.Kc), r = i.bh(s.documents), o = i.Zn(r, 
                /* updateLimboDocuments= */ !1);
                n.resolve(o.snapshot);
            } catch (t) {
                const s = Ls(t, `Failed to execute query '${e} against cache`);
                n.reject(s);
            }
        }
        /**
 * Retrieves a latency-compensated query snapshot from the backend via a
 * SnapshotListener.
 */ (await la(t), e, n))), n.promise;
    }(n, t.Z_).then((n => new ru(e, s, t, n)));
}

/**
 * Executes the query and returns the results as a `QuerySnapshot` from the
 * server. Returns an error if the network is not available.
 *
 * @returns A Promise that will be resolved with the results of the query.
 */ function lu(t, e, n, ...s) {
    t = pc(t, Eu);
    const i = pc(t.firestore, Jc), r = ku(i);
    let o;
    // For Compat types, we have to "extract" the underlying types before
    // performing validation.
    e instanceof kc && (e = e.o_), o = "string" == typeof e || e instanceof Hc ? ju(r, "updateDoc", t.Q_, e, n, s) : Wu(r, "updateDoc", t.Q_, e);
    return du(i, o.tf(t.Q_, hn.exists(!0)));
}

/**
 * Deletes the document referred to by the specified `DocumentReference`.
 *
 * @param reference - A reference to the document to delete.
 * @returns A Promise resolved once the document has been successfully
 * deleted from the backend (note that it won't resolve while you're offline).
 */ function _u(t, ...e) {
    var n, s, i;
    t instanceof kc && (t = t.o_);
    let r = {
        includeMetadataChanges: !1
    }, o = 0;
    "object" != typeof e[o] || ms(e[o]) || (r = e[o], o++);
    const c = {
        includeMetadataChanges: r.includeMetadataChanges
    };
    if (ms(e[o])) {
        const t = e[o];
        e[o] = null === (n = t.next) || void 0 === n ? void 0 : n.bind(t), e[o + 1] = null === (s = t.error) || void 0 === s ? void 0 : s.bind(t), 
        e[o + 2] = null === (i = t.complete) || void 0 === i ? void 0 : i.bind(t);
    }
    let u, a, h;
    if (t instanceof Eu) a = pc(t.firestore, Jc), h = On(t.Q_.path), u = {
        next: n => {
            e[o] && e[o](wu(a, t, n));
        },
        error: e[o + 1],
        complete: e[o + 2]
    }; else {
        const n = pc(t, Tu);
        a = pc(n.firestore, Jc), h = n.Z_;
        const s = new uu(a);
        u = {
            next: t => {
                e[o] && e[o](new ru(a, s, n, t));
            },
            error: e[o + 1],
            complete: e[o + 2]
        }, Su(t.Z_);
    }
    return function(t, e, n, s) {
        const i = new mc(s), r = new ro(e, i, n);
        return t.di.Ri((async () => to(await da(t), r))), () => {
            i.r_(), t.di.Ri((async () => eo(await da(t), r)));
        };
    }(ga(a), h, c, u);
}

function fu(t, e) {
    return function(t, e) {
        const n = new mc(e);
        return t.di.Ri((async () => function(t, e) {
            D(t).Zu.add(e), 
            // Immediately fire an initial event, indicating all existing listeners
            // are in-sync.
            e.next();
        }(await da(t), n))), () => {
            n.r_(), t.di.Ri((async () => function(t, e) {
                D(t).Zu.delete(e);
            }(await da(t), n)));
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
 */ (ga(t = pc(t, Jc)), ms(e) ? e : {
        next: e
    });
}

/** Locally writes `mutations` on the async queue. */ function du(t, e) {
    return function(t, e) {
        const n = new Ts;
        return t.di.Ri((async () => bo(await fa(t), e, n))), n.promise;
    }(ga(t), e);
}

/**
 * Converts a ViewSnapshot that contains the single document specified by `ref`
 * to a DocumentSnapshot.
 */ function wu(t, e, n) {
    const s = n.docs.get(e.Q_), i = new uu(t);
    return new su(t, i, e.Q_, s, new Ca(n.hasPendingWrites, n.fromCache), e.W_);
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
 */ class Eu {
    /** @hideconstructor */
    constructor(t, e, n) {
        this.W_ = e, this.Q_ = n, 
        /** The type of this Firestore reference. */
        this.type = "document", this.firestore = t;
    }
    get ef() {
        return this.Q_.path;
    }
    /**
     * The document's identifier within its collection.
     */    get id() {
        return this.Q_.path.K();
    }
    /**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */    get path() {
        return this.Q_.path.J();
    }
    /**
     * The collection this `DocumentReference` belongs to.
     */    get parent() {
        return new Du(this.firestore, this.W_, this.Q_.path.q());
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
        return new Eu(this.firestore, t, this.Q_);
    }
}

/**
 * A `Query` refers to a Query which you can read or listen to. You can also
 * construct refined `Query` objects by adding filters and ordering.
 */ class Tu {
    // This is the lite version of the Query class in the main SDK.
    /** @hideconstructor protected */
    constructor(t, e, n) {
        this.W_ = e, this.Z_ = n, 
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
        return new Tu(this.firestore, t, this.Z_);
    }
}

/**
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Firestore query. `QueryConstraint`s are created by invoking {@link where},
 * {@link orderBy}, {@link startAt}, {@link startAfter}, {@link
 * endBefore}, {@link endAt}, {@link limit} or {@link limitToLast} and
 * can then be passed to {@link query} to create a new query instance that
 * also contains this `QueryConstraint`.
 */ class Iu {}

/**
 * Creates a new immutable instance of `query` that is extended to also include
 * additional query constraints.
 *
 * @param query - The query instance to use as a base for the new constraints.
 * @param queryConstraints - The list of `QueryConstraint`s to apply.
 * @throws if any of the provided query constraints cannot be combined with the
 * existing or new constraints.
 */ function mu(t, ...e) {
    for (const n of e) t = n.nf(t);
    return t;
}

class Au extends Iu {
    constructor(t, e, n) {
        super(), this.sf = t, this.rf = e, this.cf = n, this.type = "where";
    }
    nf(t) {
        const e = ku(t.firestore), n = function(t, e, n, s, i, r, o) {
            let c;
            if (i.tt()) {
                if ("array-contains" /* ARRAY_CONTAINS */ === r || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === r) throw new N(C.INVALID_ARGUMENT, `Invalid Query. You can't perform '${r}' queries on FieldPath.documentId().`);
                if ("in" /* IN */ === r || "not-in" /* NOT_IN */ === r) {
                    vu(o, r);
                    const e = [];
                    for (const n of o) e.push(pu(s, t, n));
                    c = {
                        arrayValue: {
                            values: e
                        }
                    };
                } else c = pu(s, t, o);
            } else "in" /* IN */ !== r && "not-in" /* NOT_IN */ !== r && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== r || vu(o, r), 
            c = Gu(n, e, o, 
            /* allowArrays= */ "in" /* IN */ === r || "not-in" /* NOT_IN */ === r);
            const u = Hn.create(i, r, c);
            return function(t, e) {
                if (e.An()) {
                    const n = Ln(t);
                    if (null !== n && !n.isEqual(e.field)) throw new N(C.INVALID_ARGUMENT, `Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);
                    const s = $n(t);
                    null !== s && bu(t, e.field, s);
                }
                const n = function(t, e) {
                    for (const n of t.filters) if (e.indexOf(n.op) >= 0) return n.op;
                    return null;
                }
                /**
 * Creates a new Query for a collection group query that matches all documents
 * within the provided collection group.
 */ (t, 
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
                }(e.op));
                if (null !== n) 
                // Special case when it's a duplicate op to give a slightly clearer error message.
                throw n === e.op ? new N(C.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`) : new N(C.INVALID_ARGUMENT, `Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`);
            }(t, u), u;
        }(t.Z_, "where", e, t.firestore.A_, this.sf, this.rf, this.cf);
        return new Tu(t.firestore, t.W_, function(t, e) {
            const n = t.filters.concat([ e ]);
            return new xn(t.path, t.collectionGroup, t.Tn.slice(), n, t.limit, t.limitType, t.startAt, t.endAt);
        }(t.Z_, n));
    }
}

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
 */ class Ru extends Iu {
    constructor(t, e) {
        super(), this.sf = t, this.uf = e, this.type = "orderBy";
    }
    nf(t) {
        const e = function(t, e, n) {
            if (null !== t.startAt) throw new N(C.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
            if (null !== t.endAt) throw new N(C.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
            const s = new as(e, n);
            return function(t, e) {
                if (null === $n(t)) {
                    // This is the first order by. It must match any inequality.
                    const n = Ln(t);
                    null !== n && bu(t, n, e.field);
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
 */ (t.Z_, this.sf, this.uf);
        return new Tu(t.firestore, t.W_, function(t, e) {
            // TODO(dimond): validate that orderBy does not list the same key twice.
            const n = t.Tn.concat([ e ]);
            return new xn(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
        }(t.Z_, e));
    }
}

/**
 * Creates a `QueryConstraint` that sorts the query result by the
 * specified field, optionally in descending order instead of ascending.
 *
 * @param fieldPath - The field to sort by.
 * @param directionStr - Optional direction to sort by ('asc' or 'desc'). If
 * not specified, order will be ascending.
 * @returns The created `Query`.
 */ class Pu extends Iu {
    constructor(t, e, n) {
        super(), this.type = t, this.af = e, this.hf = n;
    }
    nf(t) {
        return new Tu(t.firestore, t.W_, Qn(t.Z_, this.af, this.hf));
    }
}

/**
 * Creates a `QueryConstraint` that only returns the first matching documents.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created `Query`.
 */ class gu extends Iu {
    constructor(t, e, n) {
        super(), this.type = t, this.lf = e, this._f = n;
    }
    nf(t) {
        const e = Vu(t, this.type, this.lf, this._f);
        return new Tu(t.firestore, t.W_, function(t, e) {
            return new xn(t.path, t.collectionGroup, t.Tn.slice(), t.filters.slice(), t.limit, t.limitType, e, t.endAt);
        }(t.Z_, e));
    }
}

class yu extends Iu {
    constructor(t, e, n) {
        super(), this.type = t, this.lf = e, this._f = n;
    }
    nf(t) {
        const e = Vu(t, this.type, this.lf, this._f);
        return new Tu(t.firestore, t.W_, function(t, e) {
            return new xn(t.path, t.collectionGroup, t.Tn.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, e);
        }(t.Z_, e));
    }
}

/** Helper function to create a bound from a document or fields */
function Vu(t, e, n, s) {
    if (n[0] instanceof kc && (n[0] = n[0].o_), n[0] instanceof jc) return function(t, e, n, s, i) {
        if (!s) throw new N(C.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "().");
        const r = [];
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
                for (const n of qn(t)) if (n.field.tt()) r.push(ne(e, s.key)); else {
            const t = s.field(n.field);
            if (Ut(t)) throw new N(C.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + n.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
            if (null === t) {
                const t = n.field.J();
                throw new N(C.INVALID_ARGUMENT, `Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`);
            }
            r.push(t);
        }
        return new rs(r, i);
    }
    /**
 * Converts a list of field values to a Bound for the given query.
 */ (t.Z_, t.firestore.A_, e, n[0].K_, s);
    {
        const i = ku(t.firestore);
        return function(t, e, n, s, i, r) {
            // Use explicit order by's because it has to match the query the user made
            const o = t.Tn;
            if (i.length > o.length) throw new N(C.INVALID_ARGUMENT, `Too many arguments provided to ${s}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
            const c = [];
            for (let r = 0; r < i.length; r++) {
                const u = i[r];
                if (o[r].field.tt()) {
                    if ("string" != typeof u) throw new N(C.INVALID_ARGUMENT, `Invalid query. Expected a string for document ID in ${s}(), but got a ${typeof u}`);
                    if (!Bn(t) && -1 !== u.indexOf("/")) throw new N(C.INVALID_ARGUMENT, `Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${s}() must be a plain document ID, but '${u}' contains a slash.`);
                    const n = t.path.child(j.Y(u));
                    if (!H.ot(n)) throw new N(C.INVALID_ARGUMENT, `Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${s}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);
                    const i = new H(n);
                    c.push(ne(e, i));
                } else {
                    const t = Gu(n, s, u);
                    c.push(t);
                }
            }
            return new rs(c, r);
        }
        /**
 * Parses the given documentIdValue into a ReferenceValue, throwing
 * appropriate errors if the value is anything other than a DocumentReference
 * or String, or if the string is malformed.
 */ (t.Z_, t.firestore.A_, i, e, n, s);
    }
}

function pu(t, e, n) {
    if (n instanceof kc && (n = n.o_), "string" == typeof n) {
        if ("" === n) throw new N(C.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!Bn(e) && -1 !== n.indexOf("/")) throw new N(C.INVALID_ARGUMENT, `Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
        const s = e.path.child(j.Y(n));
        if (!H.ot(s)) throw new N(C.INVALID_ARGUMENT, `Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);
        return ne(t, new H(s));
    }
    if (n instanceof Eu) return ne(t, n.Q_);
    throw new N(C.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + Vc(n) + ".");
}

/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */ function vu(t, e) {
    if (!Array.isArray(t) || 0 === t.length) throw new N(C.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);
    if (t.length > 10) throw new N(C.INVALID_ARGUMENT, `Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`);
}

function bu(t, e, n) {
    if (!n.isEqual(e)) throw new N(C.INVALID_ARGUMENT, `Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`);
}

function Su(t) {
    if (kn(t) && 0 === t.Tn.length) throw new N(C.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}

/**
 * A `CollectionReference` object can be used for adding documents, getting
 * document references, and querying for documents (using {@link query}).
 */ class Du extends Tu {
    /** @hideconstructor */
    constructor(t, e, n) {
        super(t, e, On(n)), this.firestore = t, this.ef = n, this.type = "collection";
    }
    /** The collection's identifier. */    get id() {
        return this.Z_.path.K();
    }
    /**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */    get path() {
        return this.Z_.path.J();
    }
    /**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */    get parent() {
        const t = this.ef.q();
        return t.W() ? null : new Eu(this.firestore, 
        /* converter= */ null, new H(t));
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
        return new Du(this.firestore, t, this.ef);
    }
}

function Cu(t, e, ...n) {
    if (t instanceof kc && (t = t.o_), Ac("collection", "path", e), t instanceof Bc) {
        const s = j.Y(e, ...n);
        return yc(s), new Du(t, /* converter= */ null, s);
    }
    {
        if (!(t instanceof Eu || t instanceof Du)) throw new N(C.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const s = j.Y(t.path, ...n).child(j.Y(e));
        return yc(s), new Du(t.firestore, 
        /* converter= */ null, s);
    }
}

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
 */ function Nu(t, e) {
    if (t = pc(t, Bc), Ac("collectionGroup", "collection id", e), e.indexOf("/") >= 0) throw new N(C.INVALID_ARGUMENT, `Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
    return new Tu(t, 
    /* converter= */ null, function(t) {
        return new xn(j.X(), t);
    }(e));
}

function xu(t, e, ...n) {
    if (t instanceof kc && (t = t.o_), 
    // We allow omission of 'pathString' but explicitly prohibit passing in both
    // 'undefined' and 'null'.
    1 === arguments.length && (e = L.D()), Ac("doc", "path", e), t instanceof Bc) {
        const s = j.Y(e, ...n);
        return gc(s), new Eu(t, 
        /* converter= */ null, new H(s));
    }
    {
        if (!(t instanceof Eu || t instanceof Du)) throw new N(C.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const s = t.ef.child(j.Y(e, ...n));
        return gc(s), new Eu(t.firestore, t instanceof Du ? t.W_ : null, new H(s));
    }
}

class Fu extends Kc {
    constructor(t) {
        super(), this.firestore = t;
    }
    x_(t) {
        return new Mc(t);
    }
    F_(t) {
        const e = this.L_(t, this.firestore.A_);
        return new Eu(this.firestore, /* converter= */ null, e);
    }
}

/**
 * Returns true if the provided references are equal.
 *
 * @param left - A reference to compare.
 * @param right - A reference to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function Ou(t, e) {
    return t instanceof kc && (t = t.o_), e instanceof kc && (e = e.o_), (t instanceof Eu || t instanceof Du) && (e instanceof Eu || e instanceof Du) && (t.firestore === e.firestore && t.path === e.path && t.W_ === e.W_);
}

/**
 * Returns true if the provided queries point to the same collection and apply
 * the same constraints.
 *
 * @param left - A `Query` to compare.
 * @param right - A `Query` to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function Mu(t, e) {
    return t instanceof kc && (t = t.o_), e instanceof kc && (e = e.o_), t instanceof Tu && e instanceof Tu && (t.firestore === e.firestore && Kn(t.Z_, e.Z_) && t.W_ === e.W_);
}

function ku(t) {
    const e = t.b_(), n = Is(t.A_);
    return new Qu(t.A_, !!e.ignoreUndefinedProperties, n);
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
 */ const $u = /^__.*__$/;

/** The result of parsing document data (e.g. for a setData call). */ class Lu {
    constructor(t, e, n) {
        this.data = t, this.en = e, this.fieldTransforms = n;
    }
    tf(t, e) {
        const n = [];
        return null !== this.en ? n.push(new mn(t, this.data, this.en, e)) : n.push(new In(t, this.data, e)), 
        this.fieldTransforms.length > 0 && n.push(new Rn(t, this.fieldTransforms)), n;
    }
}

/** The result of parsing "update" data (i.e. for an updateData call). */ class Bu {
    constructor(t, e, n) {
        this.data = t, this.en = e, this.fieldTransforms = n;
    }
    tf(t, e) {
        const n = [ new mn(t, this.data, this.en, e) ];
        return this.fieldTransforms.length > 0 && n.push(new Rn(t, this.fieldTransforms)), 
        n;
    }
}

function qu(t) {
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
        throw b();
    }
}

/** A "context" object passed around while parsing user data. */ class Uu {
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
    constructor(t, e, n, s, i, r) {
        this.settings = t, this.t = e, this.serializer = n, this.ignoreUndefinedProperties = s, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.ff(), this.fieldTransforms = i || [], this.en = r || [];
    }
    get path() {
        return this.settings.path;
    }
    get u_() {
        return this.settings.u_;
    }
    /** Returns a new context with the specified settings overwritten. */    df(t) {
        return new Uu(Object.assign(Object.assign({}, this.settings), t), this.t, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.en);
    }
    wf(t) {
        var e;
        const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), s = this.df({
            path: n,
            l_: !1
        });
        return s.Ef(t), s;
    }
    Tf(t) {
        var e;
        const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), s = this.df({
            path: n,
            l_: !1
        });
        return s.ff(), s;
    }
    If(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.df({
            path: void 0,
            l_: !0
        });
    }
    a_(t) {
        return ea(t, this.settings.methodName, this.settings.mf || !1, this.path, this.settings.h_);
    }
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */    contains(t) {
        return void 0 !== this.en.find((e => t.j(e))) || void 0 !== this.fieldTransforms.find((e => t.j(e.field)));
    }
    ff() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (let t = 0; t < this.path.length; t++) this.Ef(this.path.get(t));
    }
    Ef(t) {
        if (0 === t.length) throw this.a_("Document fields must not be empty");
        if (qu(this.u_) && $u.test(t)) throw this.a_('Document fields cannot begin and end with "__"');
    }
}

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */ class Qu {
    constructor(t, e, n) {
        this.t = t, this.ignoreUndefinedProperties = e, this.serializer = n || Is(t);
    }
    /** Creates a new top-level parse context. */    Af(t, e, n, s = !1) {
        return new Uu({
            u_: t,
            methodName: e,
            h_: n,
            path: z.X(),
            l_: !1,
            mf: s
        }, this.t, this.serializer, this.ignoreUndefinedProperties);
    }
}

/** Parse document data from a set() call. */ function Ku(t, e, n, s, i, r = {}) {
    const o = t.Af(r.merge || r.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , e, n, i);
    Yu("Data must be an object, but it was:", o, s);
    const c = Hu(s, o);
    let u, a;
    if (r.merge) u = new on(o.en), a = o.fieldTransforms; else if (r.mergeFields) {
        const t = [];
        for (const s of r.mergeFields) {
            const i = Xu(e, s, n);
            if (!o.contains(i)) throw new N(C.INVALID_ARGUMENT, `Field '${i}' is specified in your field mask but missing from your input data.`);
            na(t, i) || t.push(i);
        }
        u = new on(t), a = o.fieldTransforms.filter((t => u.un(t.field)));
    } else u = null, a = o.fieldTransforms;
    return new Lu(new pn(c), u, a);
}

/** Parse update data from an update() call. */ function Wu(t, e, n, s) {
    const i = t.Af(1 /* Update */ , e, n);
    Yu("Data must be an object, but it was:", i, s);
    const r = [], o = new vn;
    Bt(s, ((t, s) => {
        const c = ta(e, t, n);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                s instanceof kc && (s = s.o_);
        const u = i.Tf(c);
        if (s instanceof Sc) 
        // Add it to the field mask, but don't add anything to updateData.
        r.push(c); else {
            const t = zu(s, u);
            null != t && (r.push(c), o.set(c, t));
        }
    }));
    const c = new on(r);
    return new Bu(o.hn(), c, i.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function ju(t, e, n, s, i, r) {
    const o = t.Af(1 /* Update */ , e, n), c = [ Xu(e, s, n) ], u = [ i ];
    if (r.length % 2 != 0) throw new N(C.INVALID_ARGUMENT, `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);
    for (let t = 0; t < r.length; t += 2) c.push(Xu(e, r[t])), u.push(r[t + 1]);
    const a = [], h = new vn;
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (let t = c.length - 1; t >= 0; --t) if (!na(a, c[t])) {
        const e = c[t];
        let n = u[t];
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                n instanceof kc && (n = n.o_);
        const s = o.Tf(e);
        if (n instanceof Sc) 
        // Add it to the field mask, but don't add anything to updateData.
        a.push(e); else {
            const t = zu(n, s);
            null != t && (a.push(e), h.set(e, t));
        }
    }
    const l = new on(a);
    return new Bu(h.hn(), l, o.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays - Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function Gu(t, e, n, s = !1) {
    return zu(n, t.Af(s ? 4 /* ArrayArgument */ : 3 /* Argument */ , e));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function zu(t, e) {
    if (
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    t instanceof kc && (t = t.o_), Ju(t)) return Yu("Unsupported field value:", e, t), 
    Hu(t, e);
    if (t instanceof bc) 
    // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
 * "Parses" the provided FieldValueImpl, adding any necessary transforms to
 * context.fieldTransforms.
 */
    return function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!qu(e.u_)) throw e.a_(t._methodName + "() can only be used with update() and set()");
        if (!e.path) throw e.a_(t._methodName + "() is not currently supported inside arrays");
        const n = t.c_(e);
        n && e.fieldTransforms.push(n);
    }
    /**
 * Helper to parse a scalar value (i.e. not an Object, Array, or FieldValue)
 *
 * @returns The parsed value
 */ (t, e), null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.en.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.l_ && 4 /* ArrayArgument */ !== e.u_) throw e.a_("Nested arrays are not supported");
        return function(t, e) {
            const n = [];
            let s = 0;
            for (const i of t) {
                let t = zu(i, e.If(s));
                null == t && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                t = {
                    nullValue: "NULL_VALUE"
                }), n.push(t), s++;
            }
            return {
                arrayValue: {
                    values: n
                }
            };
        }(t, e);
    }
    return function(t, e) {
        t instanceof kc && (t = t.o_);
        if (null === t) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return fe(e.serializer, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            const n = Q.fromDate(t);
            return {
                timestampValue: de(e.serializer, n)
            };
        }
        if (t instanceof Q) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            const n = new Q(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: de(e.serializer, n)
            };
        }
        if (t instanceof Oc) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof Mc) return {
            bytesValue: we(e.serializer, t.E_)
        };
        if (t instanceof Eu) {
            const n = e.t, s = t.firestore.A_;
            if (!s.isEqual(n)) throw e.a_(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);
            return {
                referenceValue: Ie(t.firestore.A_ || e.t, t.Q_.path)
            };
        }
        if (void 0 === t && e.ignoreUndefinedProperties) return null;
        throw e.a_("Unsupported field value: " + Vc(t));
    }
    /**
 * Checks whether an object looks like a JSON object that should be converted
 * into a struct. Normal class/prototype instances are considered to look like
 * JSON objects since they should be converted to a struct value. Arrays, Dates,
 * GeoPoints, etc. are not considered to look like JSON objects since they map
 * to specific FieldValue types other than ObjectValue.
 */ (t, e);
}

function Hu(t, e) {
    const n = {};
    return qt(t) ? 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.en.push(e.path) : Bt(t, ((t, s) => {
        const i = zu(s, e.wf(t));
        null != i && (n[t] = i);
    })), {
        mapValue: {
            fields: n
        }
    };
}

function Ju(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof Q || t instanceof Oc || t instanceof Mc || t instanceof Eu || t instanceof bc);
}

function Yu(t, e, n) {
    if (!Ju(n) || !function(t) {
        return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
    }(n)) {
        const s = Vc(n);
        throw "an object" === s ? e.a_(t + " a custom object") : e.a_(t + " " + s);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function Xu(t, e, n) {
    if (
    // If required, replace the FieldPath Compat class with with the firestore-exp
    // FieldPath.
    e instanceof kc && (e = e.o_), e instanceof Hc) return e.j_;
    if ("string" == typeof e) return ta(t, e);
    throw ea("Field path arguments must be of type string or FieldPath.", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
}

/**
 * Matches any characters in a field path string that are reserved.
 */ const Zu = new RegExp("[~\\*/\\[\\]]");

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */ function ta(t, e, n) {
    if (e.search(Zu) >= 0) throw ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`, t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
    try {
        return new Hc(...e.split(".")).j_;
    } catch (s) {
        throw ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, n);
    }
}

function ea(t, e, n, s, i) {
    const r = s && !s.W(), o = void 0 !== i;
    let c = `Function ${e}() called with invalid data`;
    n && (c += " (via `toFirestore()`)"), c += ". ";
    let u = "";
    return (r || o) && (u += " (found", r && (u += " in field " + s), o && (u += " in document " + i), 
    u += ")"), new N(C.INVALID_ARGUMENT, c + t + u);
}

/** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */ function na(t, e) {
    return t.some((t => t.isEqual(e)));
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
 */ class sa {
    constructor(t) {
        this.Mu = t, 
        // The version of each document that was read during this transaction.
        this.Rf = new Map, this.mutations = [], this.Pf = !1, 
        /**
         * A deferred usage error that occurred previously in this transaction that
         * will cause the transaction to fail once it actually commits.
         */
        this.gf = null, 
        /**
         * Set of documents that have been written in the transaction.
         *
         * When there's more than one write to the same key in a transaction, any
         * writes after the first are handled differently.
         */
        this.yf = new Set;
    }
    async Vf(t) {
        if (this.pf(), this.mutations.length > 0) throw new N(C.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
        const e = await async function(t, e) {
            const n = D(t), s = ye(n.serializer) + "/documents", i = {
                documents: e.map((t => Ae(n.serializer, t)))
            }, r = await n.Vu("BatchGetDocuments", s, i), o = new Map;
            r.forEach((t => {
                const e = ve(n.serializer, t);
                o.set(e.key.toString(), e);
            }));
            const c = [];
            return e.forEach((t => {
                const e = o.get(t.toString());
                S(!!e), c.push(e);
            })), c;
        }(this.Mu, t);
        return e.forEach((t => {
            t instanceof Cn || t instanceof Dn ? this.vf(t) : b();
        })), e;
    }
    set(t, e) {
        this.write(e.tf(t, this.rn(t))), this.yf.add(t.toString());
    }
    update(t, e) {
        try {
            this.write(e.tf(t, this.bf(t)));
        } catch (t) {
            this.gf = t;
        }
        this.yf.add(t.toString());
    }
    delete(t) {
        this.write([ new yn(t, this.rn(t)) ]), this.yf.add(t.toString());
    }
    async commit() {
        if (this.pf(), this.gf) throw this.gf;
        const t = this.Rf;
        // For each mutation, note that the doc was written.
                this.mutations.forEach((e => {
            t.delete(e.key.toString());
        })), 
        // For each document that was read but not written to, we want to perform
        // a `verify` operation.
        t.forEach(((t, e) => {
            const n = H.st(e);
            this.mutations.push(new Vn(n, this.rn(n)));
        })), await async function(t, e) {
            const n = D(t), s = ye(n.serializer) + "/documents", i = {
                writes: e.map((t => Se(n.serializer, t)))
            };
            await n.yu("Commit", s, i);
        }(this.Mu, this.mutations), this.Pf = !0;
    }
    vf(t) {
        let e;
        if (t instanceof Dn) e = t.version; else {
            if (!(t instanceof Cn)) throw b();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
            e = K.min();
        }
        const n = this.Rf.get(t.key.toString());
        if (n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new N(C.ABORTED, "Document version changed between two reads.");
        } else this.Rf.set(t.key.toString(), e);
    }
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */    rn(t) {
        const e = this.Rf.get(t.toString());
        return !this.yf.has(t.toString()) && e ? hn.updateTime(e) : hn.on();
    }
    /**
     * Returns the precondition for a document if the operation is an update.
     */    bf(t) {
        const e = this.Rf.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.yf.has(t.toString()) && e) {
            if (e.isEqual(K.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new N(C.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return hn.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
        return hn.exists(!0);
    }
    write(t) {
        this.pf(), this.mutations = this.mutations.concat(t);
    }
    pf() {}
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
class ia {
    constructor(t, e, n, s) {
        this.di = t, this.Mu = e, this.updateFunction = n, this.Ti = s, this.Sf = 5, this.Si = new Vs(this.di, "transaction_retry" /* TransactionRetry */);
    }
    /** Runs the transaction and sets the result on deferred. */    run() {
        this.Df();
    }
    Df() {
        this.Si.Bs((async () => {
            const t = new sa(this.Mu), e = this.Cf(t);
            e && e.then((e => {
                this.di.Ri((() => t.commit().then((() => {
                    this.Ti.resolve(e);
                })).catch((t => {
                    this.Nf(t);
                }))));
            })).catch((t => {
                this.Nf(t);
            }));
        }));
    }
    Cf(t) {
        try {
            const e = this.updateFunction(t);
            return !J(e) && e.catch && e.then ? e : (this.Ti.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.Ti.reject(t), null;
        }
    }
    Nf(t) {
        this.Sf > 0 && this.xf(t) ? (this.Sf -= 1, this.di.Ri((() => (this.Df(), Promise.resolve())))) : this.Ti.reject(t);
    }
    xf(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            const e = t.code;
            return "aborted" === e || "failed-precondition" === e || !ht(e);
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
class ra {
    constructor(t, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    e, n) {
        this.credentials = t, this.di = e, this.Fl = n, this.user = R.UNAUTHENTICATED, this.clientId = L.D(), 
        this.Ff = () => {}, this.g = new Ts, this.credentials.A((t => {
            y("FirestoreClient", "Received user=", t.uid), this.user.isEqual(t) || (this.user = t, 
            this.Ff(t)), this.g.resolve();
        }));
    }
    async getConfiguration() {
        return await this.g.promise, {
            di: this.di,
            Fl: this.Fl,
            clientId: this.clientId,
            credentials: this.credentials,
            Yl: this.user,
            qh: 100
        };
    }
    Of(t) {
        this.Ff = t, 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.g.promise.then((() => this.Ff(this.user)));
    }
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */    Mf() {
        if (this.di.Ci) throw new N(C.FAILED_PRECONDITION, "The client has already been terminated.");
    }
    terminate() {
        this.di.Oi();
        const t = new Ts;
        return this.di.Ni((async () => {
            try {
                this.kf && await this.kf.terminate(), this.$f && await this.$f.terminate(), 
                // `removeChangeListener` must be called after shutting down the
                // RemoteStore as it will prevent the RemoteStore from retrieving
                // auth tokens.
                this.credentials.R(), t.resolve();
            } catch (e) {
                const n = Ls(e, "Failed to shutdown persistence");
                t.reject(n);
            }
        })), t.promise;
    }
}

async function oa(t, e) {
    t.di.Li(), y("FirestoreClient", "Initializing OfflineComponentProvider");
    const n = await t.getConfiguration();
    await e.initialize(n), t.Of((n => t.di.Mi((async () => {
        await cr(e.Ou, n);
    })))), 
    // When a user calls clearPersistence() in one client, all other clients
    // need to be terminated to allow the delete to succeed.
    e.persistence.rc((() => t.terminate())), t.$f = e;
}

async function ca(t, e) {
    t.di.Li();
    const n = await ua(t);
    y("FirestoreClient", "Initializing OnlineComponentProvider");
    const s = await t.getConfiguration();
    await e.initialize(n, s), 
    // The CredentialChangeListener of the online component provider takes
    // precedence over the offline component provider.
    t.Of((n => t.di.Mi((() => async function(t, e) {
        const n = D(t);
        n.di.Li(), y("RemoteStore", "RemoteStore received new credentials");
        const s = xr(n);
        // Tear down and re-create our network streams. This will ensure we get a
        // fresh auth token for the new user and re-fill the write pipeline with
        // new mutations from the LocalStore (since mutations are per-user).
                n.Bu.add(3 /* CredentialChange */), await pr(n), s && 
        // Don't set the network status to Unknown if we are offline.
        n.Ku.set("Unknown" /* Unknown */), await n.ku.s_(e), n.Bu.delete(3 /* CredentialChange */), 
        await Vr(n);
    }(e.$h, n))))), t.kf = e;
}

async function ua(t) {
    return t.$f || (y("FirestoreClient", "Using default OfflineComponentProvider"), 
    await oa(t, new wc)), t.$f;
}

async function aa(t) {
    return t.kf || (y("FirestoreClient", "Using default OnlineComponentProvider"), await ca(t, new Ic)), 
    t.kf;
}

function ha(t) {
    return ua(t).then((t => t.persistence));
}

function la(t) {
    return ua(t).then((t => t.Ou));
}

function _a(t) {
    return aa(t).then((t => t.$h));
}

function fa(t) {
    return aa(t).then((t => t.va));
}

async function da(t) {
    const e = await aa(t), n = e.Lh;
    return n.ta = Vo.bind(null, e.va), n.sa = vo.bind(null, e.va), n;
}

function wa(t, e, n = {}) {
    const s = new Ts;
    return t.di.Ri((async () => function(t, e, n, s, i) {
        const r = new mc({
            next: r => {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                e.Ri((() => eo(t, o)));
                const c = r.docs.has(n);
                !c && r.fromCache ? 
                // TODO(dimond): If we're online and the document doesn't
                // exist then we resolve with a doc.exists set to false. If
                // we're offline however, we reject the Promise in this
                // case. Two options: 1) Cache the negative response from
                // the server so we can deliver that even when you're
                // offline 2) Actually reject the Promise in the online case
                // if the document doesn't exist.
                i.reject(new N(C.UNAVAILABLE, "Failed to get document because the client is offline.")) : c && r.fromCache && s && "server" === s.source ? i.reject(new N(C.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(r);
            },
            error: t => i.reject(t)
        }), o = new ro(On(n.path), r, {
            includeMetadataChanges: !0,
            ha: !0
        });
        return to(t, o);
    }(await da(t), t.di, e, n, s))), s.promise;
}

function Ea(t, e, n = {}) {
    const s = new Ts;
    return t.di.Ri((async () => function(t, e, n, s, i) {
        const r = new mc({
            next: n => {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                e.Ri((() => eo(t, o))), n.fromCache && "server" === s.source ? i.reject(new N(C.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n);
            },
            error: t => i.reject(t)
        }), o = new ro(n, r, {
            includeMetadataChanges: !0,
            ha: !0
        });
        return to(t, o);
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
 */ (await da(t), t.di, e, n, s))), s.promise;
}

function Ta(t, e) {
    const n = new Ts;
    return t.di.Ri((async () => {
        const s = await function(t) {
            return aa(t).then((t => t.Mu));
        }(t);
        new ia(t.di, s, e, n).run();
    })), n.promise;
}

class Ia {
    /** @hideconstructor */
    constructor(t, e) {
        this.q_ = t, this.Lf = e, this.Bf = [], this.qf = !1, this.Uf = ku(t);
    }
    set(t, e, n) {
        this.Qf();
        const s = ma(t, this.q_), i = La(s.W_, e, n), r = Ku(this.Uf, "WriteBatch.set", s.Q_, i, null !== s.W_, n);
        return this.Bf = this.Bf.concat(r.tf(s.Q_, hn.on())), this;
    }
    update(t, e, n, ...s) {
        this.Qf();
        const i = ma(t, this.q_);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                let r;
        return e instanceof kc && (e = e.o_), r = "string" == typeof e || e instanceof Hc ? ju(this.Uf, "WriteBatch.update", i.Q_, e, n, s) : Wu(this.Uf, "WriteBatch.update", i.Q_, e), 
        this.Bf = this.Bf.concat(r.tf(i.Q_, hn.exists(!0))), this;
    }
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */    delete(t) {
        this.Qf();
        const e = ma(t, this.q_);
        return this.Bf = this.Bf.concat(new yn(e.Q_, hn.on())), this;
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
        return this.Qf(), this.qf = !0, this.Bf.length > 0 ? this.Lf(this.Bf) : Promise.resolve();
    }
    Qf() {
        if (this.qf) throw new N(C.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }
}

function ma(t, e) {
    if (t instanceof kc && (t = t.o_), t.firestore !== e) throw new N(C.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
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
class Aa extends class {
    /** @hideconstructor */
    constructor(t, e) {
        this.q_ = t, this.Kf = e, this.Uf = ku(t);
    }
    /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */    get(t) {
        const e = ma(t, this.q_), n = new Fu(this.q_);
        return this.Kf.Vf([ e.Q_ ]).then((t => {
            if (!t || 1 !== t.length) return b();
            const s = t[0];
            if (s instanceof Cn) return new jc(this.q_, n, e.Q_, null, e.W_);
            if (s instanceof Dn) return new jc(this.q_, n, s.key, s, e.W_);
            throw b();
        }));
    }
    set(t, e, n) {
        const s = ma(t, this.q_), i = La(s.W_, e, n), r = Ku(this.Uf, "Transaction.set", s.Q_, i, null !== s.W_, n);
        return this.Kf.set(s.Q_, r), this;
    }
    update(t, e, n, ...s) {
        const i = ma(t, this.q_);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                let r;
        return e instanceof kc && (e = e.o_), r = "string" == typeof e || e instanceof Hc ? ju(this.Uf, "Transaction.update", i.Q_, e, n, s) : Wu(this.Uf, "Transaction.update", i.Q_, e), 
        this.Kf.update(i.Q_, r), this;
    }
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */    delete(t) {
        const e = ma(t, this.q_);
        return this.Kf.delete(e.Q_), this;
    }
} {
    // This class implements the same logic as the Transaction API in the Lite SDK
    // but is subclassed in order to return its own DocumentSnapshot types.
    /** @hideconstructor */
    constructor(t, e) {
        super(t, e), this.q_ = t;
    }
    /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */    get(t) {
        const e = ma(t, this.q_), n = new uu(this.q_);
        return super.get(t).then((t => new su(this.q_, n, e.Q_, t.K_, new Ca(
        /* hasPendingWrites= */ !1, 
        /* fromCache= */ !1), e.W_)));
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
 */
/**
 * The persistence provider included with the full Firestore SDK.
 */
class Ra {
    enableIndexedDbPersistence(t, e) {
        return function(t, e) {
            nu(t = pc(t, Jc));
            const n = ga(t), s = t.b_(), i = new Ic;
            return Yc(n, i, new Ec(i, s.cacheSizeBytes, null == e ? void 0 : e.forceOwnership));
        }
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
 */ (t.o_, {
            forceOwnership: e
        });
    }
    enableMultiTabIndexedDbPersistence(t) {
        return function(t) {
            nu(t = pc(t, Jc));
            const e = ga(t), n = t.b_(), s = new Ic;
            return Yc(e, s, new Tc(s, n.cacheSizeBytes));
        }(t.o_);
    }
    clearIndexedDbPersistence(t) {
        return Xc(t.o_);
    }
}

/**
 * Compat class for Firestore. Exposes Firestore Legacy API, but delegates
 * to the functional API of firestore-exp.
 */ class Pa extends kc {
    constructor(t, e, n) {
        super(e), this.Wf = n, this.INTERNAL = {
            delete: () => this.terminate()
        }, t instanceof A || (this.jf = t);
    }
    get A_() {
        return this.o_.A_;
    }
    settings(t) {
        t.merge && 
        // Remove the property from the settings once the merge is completed
        delete (t = Object.assign(Object.assign({}, this.o_.v_()), t)).merge, this.o_.p_(t);
    }
    useEmulator(t, e) {
        "firestore.googleapis.com" !== this.o_.v_().host && p("Host has been set in both settings() and useEmulator(), emulator host will be used"), 
        this.settings({
            host: `${t}:${e}`,
            ssl: !1,
            merge: !0
        });
    }
    enableNetwork() {
        return tu(this.o_);
    }
    disableNetwork() {
        return eu(this.o_);
    }
    enablePersistence(t) {
        let e = !1, n = !1;
        return t && (e = !!t.synchronizeTabs, n = !!t.experimentalForceOwningTab, Pc("synchronizeTabs", e, "experimentalForceOwningTab", n)), 
        e ? this.Wf.enableMultiTabIndexedDbPersistence(this) : this.Wf.enableIndexedDbPersistence(this, n);
    }
    clearPersistence() {
        return this.Wf.clearIndexedDbPersistence(this);
    }
    terminate() {
        return this.app._removeServiceInstance("firestore"), this.app._removeServiceInstance("firestore-exp"), 
        this.o_._delete();
    }
    waitForPendingWrites() {
        return Zc(this.o_);
    }
    onSnapshotsInSync(t) {
        return fu(this.o_, t);
    }
    get app() {
        if (!this.jf) throw new N(C.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this.jf;
    }
    collection(t) {
        try {
            return new ka(this, Cu(this.o_, t));
        } catch (t) {
            throw ba(t, "collection()", "Firestore.collection()");
        }
    }
    doc(t) {
        try {
            return new va(this, xu(this.o_, t));
        } catch (t) {
            throw ba(t, "doc()", "Firestore.doc()");
        }
    }
    collectionGroup(t) {
        try {
            return new Fa(this, Nu(this.o_, t));
        } catch (t) {
            throw ba(t, "collectionGroup()", "Firestore.collectionGroup()");
        }
    }
    runTransaction(t) {
        return function(t, e) {
            return Ta(ga(t), (n => e(new Aa(t, n))));
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
 */ (this.o_, (e => t(new Va(this, e))));
    }
    batch() {
        return ga(this.o_), new pa(new Ia(this.o_, (t => du(this.o_, t))));
    }
}

function ga(t) {
    return t.z_ || ya(t), t.z_.Mf(), t.z_;
}

function ya(t) {
    const e = t.b_(), n = function(t, e, n) {
        return new m(t, e, n.host, n.ssl, n.experimentalForceLongPolling, n.experimentalAutoDetectLongPolling);
    }(t.A_, t.T_, e);
    t.z_ = new ra(t.R_, t.G_, n);
}

/**
 * A reference to a transaction.
 */
class Va extends kc {
    constructor(t, e) {
        super(e), this.q_ = t;
    }
    get(t) {
        const e = $a(t);
        return this.o_.get(e).then((t => new Na(this.q_, t)));
    }
    set(t, e, n) {
        const s = $a(t);
        return n ? (Rc("Transaction.set", n), this.o_.set(s, e, n)) : this.o_.set(s, e), 
        this;
    }
    update(t, e, n, ...s) {
        const i = $a(t);
        return 2 === arguments.length ? this.o_.update(i, e) : this.o_.update(i, e, n, ...s), 
        this;
    }
    delete(t) {
        const e = $a(t);
        return this.o_.delete(e), this;
    }
}

class pa extends kc {
    set(t, e, n) {
        const s = $a(t);
        return n ? (Rc("WriteBatch.set", n), this.o_.set(s, e, n)) : this.o_.set(s, e), 
        this;
    }
    update(t, e, n, ...s) {
        const i = $a(t);
        return 2 === arguments.length ? this.o_.update(i, e) : this.o_.update(i, e, n, ...s), 
        this;
    }
    delete(t) {
        const e = $a(t);
        return this.o_.delete(e), this;
    }
    commit() {
        return this.o_.commit();
    }
}

/**
 * A reference to a particular document in a collection in the database.
 */ class va extends kc {
    constructor(t, e) {
        super(e), this.firestore = t, this.U_ = new Wc(t);
    }
    static Gf(t, e, n) {
        if (t.length % 2 != 0) throw new N(C.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t.J()} has ${t.length}`);
        return new va(e, new Eu(e.o_, n, new H(t)));
    }
    static B_(t, e, n) {
        return new va(e, new Eu(e.o_, n, t));
    }
    get id() {
        return this.o_.id;
    }
    get parent() {
        return new ka(this.firestore, this.o_.parent);
    }
    get path() {
        return this.o_.path;
    }
    collection(t) {
        try {
            return new ka(this.firestore, Cu(this.o_, t));
        } catch (t) {
            throw ba(t, "collection()", "DocumentReference.collection()");
        }
    }
    isEqual(t) {
        return t instanceof kc && (t = t.o_), t instanceof Eu && Ou(this.o_, t);
    }
    set(t, e) {
        e = Rc("DocumentReference.set", e);
        try {
            return function(t, e, n) {
                t = pc(t, Eu);
                const s = pc(t.firestore, Jc), i = La(t.W_, e, n);
                return du(s, Ku(ku(s), "setDoc", t.Q_, i, null !== t.W_, n).tf(t.Q_, hn.on()));
            }(this.o_, t, e);
        } catch (t) {
            throw ba(t, "setDoc()", "DocumentReference.set()");
        }
    }
    update(t, e, ...n) {
        try {
            return 1 === arguments.length ? lu(this.o_, t) : lu(this.o_, t, e, ...n);
        } catch (t) {
            throw ba(t, "updateDoc()", "DocumentReference.update()");
        }
    }
    delete() {
        return du(pc((t = this.o_).firestore, Jc), [ new yn(t.Q_, hn.on()) ]);
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
        const e = Sa(t), n = Da(t, (t => new Na(this.firestore, new su(this.firestore.o_, this.U_, t.Q_, t.K_, t.metadata, this.o_.W_))));
        return _u(this.o_, e, n);
    }
    get(t) {
        let e;
        return e = "cache" === (null == t ? void 0 : t.source) ? au(this.o_) : "server" === (null == t ? void 0 : t.source) ? function(t) {
            t = pc(t, Eu);
            const e = pc(t.firestore, Jc);
            return wa(ga(e), t.Q_, {
                source: "server"
            }).then((n => wu(e, t, n)));
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
 */ (this.o_) : function(t) {
            t = pc(t, Eu);
            const e = pc(t.firestore, Jc);
            return wa(ga(e), t.Q_).then((n => wu(e, t, n)));
        }(this.o_), e.then((t => new Na(this.firestore, new su(this.firestore.o_, this.U_, t.Q_, t.K_, t.metadata, this.o_.W_))));
    }
    withConverter(t) {
        return new va(this.firestore, this.o_.withConverter(t));
    }
}

/**
 * Replaces the function name in an error thrown by the firestore-exp API
 * with the function names used in the classic API.
 */ function ba(t, e, n) {
    return t.message = t.message.replace(e, n), t;
}

/**
 * Iterates the list of arguments from an `onSnapshot` call and returns the
 * first argument that may be an `SnapshotListenOptions` object. Returns an
 * empty object if none is found.
 */ function Sa(t) {
    for (const e of t) if ("object" == typeof e && !ms(e)) return e;
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
 */ function Da(t, e) {
    var n, s;
    let i;
    return i = ms(t[0]) ? t[0] : ms(t[1]) ? t[1] : "function" == typeof t[0] ? {
        next: t[0],
        error: t[1],
        complete: t[2]
    } : {
        next: t[1],
        error: t[2],
        complete: t[3]
    }, {
        next: t => {
            i.next && i.next(e(t));
        },
        error: null === (n = i.error) || void 0 === n ? void 0 : n.bind(i),
        complete: null === (s = i.complete) || void 0 === s ? void 0 : s.bind(i)
    };
}

/**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ class Ca {
    /** @hideconstructor */
    constructor(t, e) {
        this.hasPendingWrites = t, this.fromCache = e;
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

class Na extends kc {
    constructor(t, e) {
        super(e), this.q_ = t;
    }
    get ref() {
        return new va(this.q_, this.o_.ref);
    }
    get id() {
        return this.o_.id;
    }
    get metadata() {
        return this.o_.metadata;
    }
    get exists() {
        return this.o_.exists();
    }
    data(t) {
        return this.o_.data(t);
    }
    get(t, e) {
        return this.o_.get(t, e);
    }
    isEqual(t) {
        return cu(this.o_, t.o_);
    }
}

class xa extends Na {
    data(t) {
        return this.o_.data(t);
    }
}

class Fa extends kc {
    constructor(t, e) {
        super(e), this.firestore = t, this.U_ = new Wc(t);
    }
    where(t, e, n) {
        try {
            // The "as string" cast is a little bit of a hack. `where` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new Fa(this.firestore, mu(this.o_, function(t, e, n) {
                const s = e, i = zc("where", t);
                return new Au(i, s, n);
            }(t, e, n)));
        } catch (t) {
            throw ba(t, /(orderBy|where)\(\)/, "Query.$1()");
        }
    }
    orderBy(t, e) {
        try {
            // The "as string" cast is a little bit of a hack. `orderBy` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new Fa(this.firestore, mu(this.o_, function(t, e = "asc") {
                const n = e, s = zc("orderBy", t);
                return new Ru(s, n);
            }(t, e)));
        } catch (t) {
            throw ba(t, /(orderBy|where)\(\)/, "Query.$1()");
        }
    }
    limit(t) {
        try {
            return new Fa(this.firestore, mu(this.o_, function(t) {
                return vc("limit", t), new Pu("limit", t, "F" /* First */);
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
            throw ba(t, "limit()", "Query.limit()");
        }
    }
    limitToLast(t) {
        try {
            return new Fa(this.firestore, mu(this.o_, function(t) {
                return vc("limitToLast", t), new Pu("limitToLast", t, "L" /* Last */);
            }(t)));
        } catch (t) {
            throw ba(t, "limitToLast()", "Query.limitToLast()");
        }
    }
    startAt(...t) {
        try {
            return new Fa(this.firestore, mu(this.o_, function(...t) {
                return new gu("startAt", t, /*before=*/ !0);
            }(...t)));
        } catch (t) {
            throw ba(t, "startAt()", "Query.startAt()");
        }
    }
    startAfter(...t) {
        try {
            return new Fa(this.firestore, mu(this.o_, function(...t) {
                return new gu("startAfter", t, 
                /*before=*/ !1);
            }(...t)));
        } catch (t) {
            throw ba(t, "startAfter()", "Query.startAfter()");
        }
    }
    endBefore(...t) {
        try {
            return new Fa(this.firestore, mu(this.o_, function(...t) {
                return new yu("endBefore", t, /*before=*/ !0);
            }(...t)));
        } catch (t) {
            throw ba(t, "endBefore()", "Query.endBefore()");
        }
    }
    endAt(...t) {
        try {
            return new Fa(this.firestore, mu(this.o_, function(...t) {
                return new yu("endAt", t, /*before=*/ !1);
            }(...t)));
        } catch (t) {
            throw ba(t, "endAt()", "Query.endAt()");
        }
    }
    isEqual(t) {
        return Mu(this.o_, t.o_);
    }
    get(t) {
        let e;
        return e = "cache" === (null == t ? void 0 : t.source) ? hu(this.o_) : "server" === (null == t ? void 0 : t.source) ? function(t) {
            t = pc(t, Tu);
            const e = pc(t.firestore, Jc), n = ga(e), s = new uu(e);
            return Ea(n, t.Z_, {
                source: "server"
            }).then((n => new ru(e, s, t, n)));
        }(this.o_) : function(t) {
            t = pc(t, Tu);
            const e = pc(t.firestore, Jc), n = ga(e), s = new uu(e);
            return Su(t.Z_), Ea(n, t.Z_).then((n => new ru(e, s, t, n)));
        }(this.o_), e.then((t => new Ma(this.firestore, new ru(this.firestore.o_, this.U_, this.o_, t.J_))));
    }
    onSnapshot(...t) {
        const e = Sa(t), n = Da(t, (t => new Ma(this.firestore, new ru(this.firestore.o_, this.U_, this.o_, t.J_))));
        return _u(this.o_, e, n);
    }
    withConverter(t) {
        return new Fa(this.firestore, this.o_.withConverter(t));
    }
}

class Oa extends kc {
    constructor(t, e) {
        super(e), this.q_ = t;
    }
    get type() {
        return this.o_.type;
    }
    get doc() {
        return new xa(this.q_, this.o_.doc);
    }
    get oldIndex() {
        return this.o_.oldIndex;
    }
    get newIndex() {
        return this.o_.newIndex;
    }
}

class Ma extends kc {
    constructor(t, e) {
        super(e), this.q_ = t;
    }
    get query() {
        return new Fa(this.q_, this.o_.query);
    }
    get metadata() {
        return this.o_.metadata;
    }
    get size() {
        return this.o_.size;
    }
    get empty() {
        return this.o_.empty;
    }
    get docs() {
        return this.o_.docs.map((t => new xa(this.q_, t)));
    }
    docChanges(t) {
        return this.o_.docChanges(t).map((t => new Oa(this.q_, t)));
    }
    forEach(t, e) {
        this.o_.forEach((n => {
            t.call(e, new xa(this.q_, n));
        }));
    }
    isEqual(t) {
        return cu(this.o_, t.o_);
    }
}

class ka extends Fa {
    constructor(t, e) {
        super(t, e), this.firestore = t, this.o_ = e;
    }
    get id() {
        return this.o_.id;
    }
    get path() {
        return this.o_.path;
    }
    get parent() {
        const t = this.o_.parent;
        return t ? new va(this.firestore, t) : null;
    }
    doc(t) {
        try {
            return new va(this.firestore, void 0 === t ? xu(this.o_) : xu(this.o_, t));
        } catch (t) {
            throw ba(t, "doc()", "CollectionReference.doc()");
        }
    }
    add(t) {
        return function(t, e) {
            const n = pc(t.firestore, Jc), s = xu(t), i = La(t.W_, e);
            return du(n, Ku(ku(t.firestore), "addDoc", s.Q_, i, null !== t.W_, {}).tf(s.Q_, hn.exists(!1))).then((() => s));
        }(this.o_, t).then((t => new va(this.firestore, t)));
    }
    isEqual(t) {
        return Ou(this.o_, t.o_);
    }
    withConverter(t) {
        return new ka(this.firestore, this.o_.withConverter(t));
    }
}

function $a(t) {
    return t instanceof kc && (t = t.o_), pc(t, Eu);
}

/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function La(t, e, n) {
    let s;
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return s = t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e, 
    s;
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
 */ class Ba extends kc {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...t) {
        super(new Hc(...t));
    }
    static documentId() {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new Ba(z.et().J());
    }
    isEqual(t) {
        return t instanceof kc && (t = t.o_), t instanceof Hc && this.o_.j_.isEqual(t.j_);
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
class qa extends kc {
    static serverTimestamp() {
        const t = new Cc("serverTimestamp");
        return t._methodName = "FieldValue.serverTimestamp", new qa(t);
    }
    static delete() {
        const t = new Sc("deleteField");
        return t._methodName = "FieldValue.delete", new qa(t);
    }
    static arrayUnion(...t) {
        const e = 
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
            return new Nc("arrayUnion", t);
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
        return e._methodName = "FieldValue.arrayUnion", new qa(e);
    }
    static arrayRemove(...t) {
        const e = function(...t) {
            // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.
            return new xc("arrayRemove", t);
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
        return e._methodName = "FieldValue.arrayRemove", new qa(e);
    }
    static increment(t) {
        const e = function(t) {
            return new Fc("increment", t);
        }(t);
        return e._methodName = "FieldValue.increment", new qa(e);
    }
    isEqual(t) {
        return this.o_.isEqual(t.o_);
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
 */ const Ua = {
    Firestore: Pa,
    GeoPoint: Oc,
    Timestamp: Q,
    Blob: Qc,
    Transaction: Va,
    WriteBatch: pa,
    DocumentReference: va,
    DocumentSnapshot: Na,
    Query: Fa,
    QueryDocumentSnapshot: xa,
    QuerySnapshot: Ma,
    CollectionReference: ka,
    FieldPath: Ba,
    FieldValue: qa,
    setLogLevel: function(t) {
        var e;
        e = t, P.setLogLevel(e);
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
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */
function Qa(t) {
    !function(t, e) {
        t.INTERNAL.registerComponent(new I("firestore", (t => {
            const n = t.getProvider("app").getImmediate();
            return e(n, t.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, Ua)));
    }(t, ((t, e) => new Pa(t, new Jc(t, e), new Ra))), t.registerVersion("@firebase/firestore", "2.0.5");
}

Qa(t);

export { Qa as __PRIVATE_registerFirestore };
//# sourceMappingURL=index.esm2017.js.map
