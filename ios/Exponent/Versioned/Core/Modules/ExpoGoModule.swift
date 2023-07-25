// Copyright 2023-present 650 Industries. All rights reserved.

import ExpoModulesCore
import EXManifests

final class ExpoGoModule: Module {
  let params: [AnyHashable: Any]
  let manifest: Manifest

  required init(appContext: AppContext) {
    fatalError("Initializer not implemented, use init(appContext:params:manifest:) instead")
  }

  init(appContext: AppContext, params: [AnyHashable: Any], manifest: Manifest) {
    self.params = params
    self.manifest = manifest
    super.init(appContext: appContext)
  }

  func definition() -> ModuleDefinition {
    Name("ExpoGoModule")

    Constants {
      return [
        "expoVersion": Bundle.main.object(forInfoDictionaryKey: "CFBundleVersion"),
        "manifest": manifest.rawManifestJSON(),
      ]
    }
  }
}
