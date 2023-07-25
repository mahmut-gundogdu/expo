import { requireNativeModule } from 'expo-modules-core';
// ExpoGoModule is available only when the app is run in Expo Go,
// otherwise we use `null` instead of throwing an error.
const NativeExpoGoModule = (() => {
    try {
        return requireNativeModule('ExpoGoModule');
    }
    catch {
        return null;
    }
})();
/**
 * Returns a boolean value whether the app is running in Expo Go.
 */
export function isRunningInExpoGo() {
    return NativeExpoGoModule != null;
}
/**
 * Returns a manifest specific to Expo Go or `null` if the app is not running in Expo Go.
 */
export function getExpoGoManifest() {
    return NativeExpoGoModule?.manifest ?? null;
}
//# sourceMappingURL=ExpoGo.js.map