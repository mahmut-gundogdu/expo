import { requireNativeModule } from 'expo-modules-core';

type ExpoGoManifest = {
  [key: string]: any;
};

type ExpoGoModule = {
  expoVersion: string;
  manifest: ExpoGoManifest;
};

// ExpoGoModule is available only when the app is run in Expo Go,
// otherwise we use `null` instead of throwing an error.
const NativeExpoGoModule = ((): ExpoGoModule | null => {
  try {
    return requireNativeModule('ExpoGoModule');
  } catch {
    return null;
  }
})();

/**
 * Returns a boolean value whether the app is running in Expo Go.
 */
export function isRunningInExpoGo(): boolean {
  return NativeExpoGoModule != null;
}

/**
 * Returns a manifest specific to Expo Go or `null` if the app is not running in Expo Go.
 */
export function getExpoGoManifest(): ExpoGoManifest | null {
  return NativeExpoGoModule?.manifest ?? null;
}
