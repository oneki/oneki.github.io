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
      "state-management/global-service",
      "state-management/local-service",
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
    "Services": [
      {
        type: "category",
        label: "Notification",
        items: [
          "services/notification/introduction",
          "services/notification/use-notification-service",
          "services/notification/use-notifications",
        ]
      },      
      {
        type: "category",
        label: "REST services",
        items: [
          "services/rest/use-get",
          "services/rest/use-post",
          "services/rest/use-put",
          "services/rest/use-delete"
        ]
      }
    ],    
    Advanced: [
      "hooks/use-local-service"
    ],         
    Examples: [
      "examples/crud-app",
    ]
  }
};
