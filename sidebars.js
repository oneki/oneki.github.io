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
    "Framework": [
      "framework/introduction",
      {
        type: "category",
        label: "Configuration",
        items: [
          "framework/configuration/introduction",
          "framework/configuration/use-settings",
          "framework/configuration/multi-env",
        ]
      },
      {
        type: "category",
        label: "State Management",
        items: [
          "framework/state-management/introduction",
          "framework/state-management/global-state",
          "framework/state-management/local-state",
        ]
      },
      {
        type: "category",
        label: "Auth",
        items: [
          "framework/auth/oidc-server"
        ]
      },            
      {
        type: "category",
        label: "I18n",
        items: [
          "framework/i18n/introduction",
          "framework/i18n/translations",
          "framework/i18n/useTranslation",
          "framework/i18n/i18nService",
          "framework/i18n/serverSideRendering"
        ]
      }, 
      {
        type: "category",
        label: "Data",
        items: [
          "framework/rest/use-get",
          "framework/rest/use-post",
          "framework/rest/use-put",
          "framework/rest/use-delete"
        ]
      },   
      {
        type: "category",
        label: "Notification",
        items: [
          "framework/notification/introduction",
          "framework/notification/use-notification-service",
          "framework/notification/use-notifications",
        ]
      },
      {
        type: "category",
        label: "Service",
        items: [
          "framework/service/introduction",
          "framework/service/global-service",
          "framework/service/local-service",
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
