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
    ],
    "Features": [
      "features/introduction",
      {
        type: "category",
        label: "Configuration",
        items: [
          "features/configuration/introduction",
          "features/configuration/use-settings",
          "features/configuration/multi-env",
        ]
      },
      {
        type: "category",
        label: "State Management",
        items: [
          "features/state-management/introduction",
          "features/state-management/global-service",
          "features/state-management/local-service",
        ]
      },
      {
        type: "category",
        label: "Authentication",
        items: [
          "features/auth/oidc-server"
        ]
      },            
      {
        type: "category",
        label: "I18n",
        items: [
          "features/i18n/introduction",
          "features/i18n/translations",
          "features/i18n/useTranslation",
          "features/i18n/i18nService",
          "features/i18n/serverSideRendering"
        ]
      },      
    ],
    "Services": [
      "services/introduction",
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
      },
      {
        type: "category",
        label: "Custom service",
        items: [
          "services/custom/introduction",
          "services/custom/global-service",
          "services/custom/local-service",
        ]
      }      
    ],    
    Advanced: [
      "advanced/file-structure"
    ],         
    Examples: [
      "examples/crud-app",
    ]
  }
};
