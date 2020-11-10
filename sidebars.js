/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: {
    "Overview": [
      {
        type: "category",
        label: "Getting started",
        items: [
          "overview/getting-started/introduction",
          "overview/getting-started/creating-project",
          "overview/getting-started/navigation",
          "overview/getting-started/global-state",
          "overview/getting-started/authentication",
          "overview/getting-started/data",
          "overview/getting-started/notification",
          "overview/getting-started/error-handling",
          "overview/getting-started/i18n",
          "overview/getting-started/form",
          "overview/getting-started/service",
        ]   
      },
      "overview/app",
    ],
    "Framework": [
      "framework/introduction",
      "framework/layout/layout",
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
        label: "Authentication",
        items: [
          "framework/auth/introduction",
          "framework/auth/secure-page",
          "framework/auth/security-context",
          "framework/auth/services",
          {
            type: "category",
            label: "Authentication type",
            items: [
              "framework/auth/authentication-type/introduction",
              "framework/auth/authentication-type/form-based",
              "framework/auth/authentication-type/oidc-server"
            ]
          }
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
          "framework/data/introduction",
          "framework/data/use-get",
          "framework/data/use-post",
          "framework/data/use-put",
          "framework/data/use-delete"
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
        label: "Form",
        items: [
          "framework/form/introduction",
          "framework/form/use-form",
          "framework/form/field",
          "framework/form/wrapper",
          "framework/form/validations",
          "framework/form/custom-wrapper",
          "framework/form/initial-value",
          "framework/form/bind",
          "framework/form/rules",
          "framework/form/use-form-context",
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
