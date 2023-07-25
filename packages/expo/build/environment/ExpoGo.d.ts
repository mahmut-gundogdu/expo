type ExpoGoManifest = {
    [key: string]: any;
};
/**
 * Returns a boolean value whether the app is running in Expo Go.
 */
export declare function isRunningInExpoGo(): boolean;
/**
 * Returns a manifest specific to Expo Go or `null` if the app is not running in Expo Go.
 */
export declare function getExpoGoManifest(): ExpoGoManifest | null;
export {};
//# sourceMappingURL=ExpoGo.d.ts.map