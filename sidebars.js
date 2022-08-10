/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: {
    "Getting started": [
      "getting-started/introduction",
      "getting-started/creating-project",
      "getting-started/navigation",
      "getting-started/global-state",
      "getting-started/authentication",
      "getting-started/data",
      "getting-started/notification",
      "getting-started/error-handling",
      "getting-started/i18n",
      "getting-started/form",
      "getting-started/service",
    ],
    "Framework": [
      "framework/introduction",
      "framework/application/app",
      "framework/layout/layout",
      {
        type: "category",
        label: "Configuration",
        items: [
          "framework/configuration/introduction",
          "framework/configuration/use-settings",
          "framework/configuration/use-setting",
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
        label: "AuthN / AuthZ",
        items: [
          "framework/auth/introduction",
          {
            type: "category",
            label: "AuthZ",
            items: [
              "framework/auth/authz/secure-page",
              "framework/auth/authz/security-context",
            ]
          },
          {
            type: "category",
            label: "AuthN",
            items: [
              "framework/auth/authn/introduction",
              "framework/auth/authn/userinfo",
              "framework/auth/authn/services",
              "framework/auth/authn/form-based",
              "framework/auth/authn/external",
              {
                type: "category",
                label: "Open ID Connect",
                items: [
                  "framework/auth/authn/oidc-server",
                  "framework/auth/authn/oidc-client"
                ]
              },
            ]
          },
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
        label: "API call",
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
          "framework/notification/configuration",
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
    ],
    API: [{
      type: 'autogenerated',
      dirName: 'api', // 'api' is the 'out' directory
    }], 
  }
};
