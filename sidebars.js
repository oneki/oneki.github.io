/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: {
    "Overview": [
      "overview/getting-started",
      "overview/app",
      "overview/file-structure"
    ],
    Configuration: [
      "configuration/introduction",
      "configuration/use-settings",
      "configuration/multi-env",
    ],
    "State Management": [
      "state-management/introduction",
      "state-management/global-state",
      "state-management/local-state",
    ],
    Data: [
      "data/use-get",
      "data/use-post",
      "data/use-put",
      "data/use-delete",
      "data/use-redux-service",
      "data/use-redux-selector",      
      "data/crud-app",
    ], 
    Notification: [
      "hooks/use-notification-service",
      "hooks/use-notifications",
    ],
    Authentication: [
      "auth/oidc-server"
    ],
    I18n: [
      "i18n/introduction",
      "i18n/translations",
      "i18n/useTranslation",
      "i18n/i18nService",
      "i18n/serverSideRendering"
    ],
    Advanced: [
      "hooks/use-local-service"
    ],         
    Examples: [
      "examples/crud-app",
    ]
  }
};
