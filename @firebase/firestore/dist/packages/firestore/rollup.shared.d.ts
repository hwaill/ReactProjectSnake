/**
 * Returns an replacement configuration for `@rollup/plugin-alias` that replaces
 * references to platform-specific files with implementations for the provided
 * target platform.
 */
export function generateAliasConfig(platform: any): {
    entries: {
        find: RegExp;
        replacement: string;
    }[];
};
export function resolveBrowserExterns(id: any): boolean;
export function resolveNodeExterns(id: any): boolean;
/**
 * Transformers that remove calls to `debugAssert` and messages for 'fail` and
 * `hardAssert`.
 */
export function removeAssertTransformer(service: any): {
    before: import("typescript").TransformerFactory<import("typescript").SourceFile>[];
    after: never[];
};
/**
 * Transformers that remove calls to `debugAssert`, messages for 'fail` and
 * `hardAssert` and appends a __PRIVATE_ prefix to all internal symbols.
 */
export function removeAssertAndPrefixInternalTransformer(service: any): {
    before: import("typescript").TransformerFactory<import("typescript").SourceFile>[];
    after: never[];
};
export namespace manglePrivatePropertiesOptions {
    namespace output {
        const comments: string;
        const beautify: boolean;
    }
    namespace mangle {
        namespace properties {
            const regex: RegExp;
            const reserved: string[];
        }
    }
}
export function es2017Plugins(platform: any, mangled?: boolean): any[];
export function es2017ToEs5Plugins(mangled?: boolean): any[];