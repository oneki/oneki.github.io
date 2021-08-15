---
id: "defaultSettings"
title: "Variable: defaultSettings"
sidebar_label: "defaultSettings"
sidebar_position: 0
custom_edit_url: null
---

• `Const` **defaultSettings**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `contextPath` | `string` |
| `i18n` | `Object` |
| `i18n.addLocaleToLocation` | (`locale`: `string`, `location`: `Location`, `settings`: [`AppSettings`](../interfaces/AppSettings.md)) => `Location` |
| `i18n.changeLocale` | (`locale`: `string`, `__namedParameters`: [`BasicAppContext`](../classes/BasicAppContext.md)) => `void` |
| `i18n.defaultLocale` | `undefined` |
| `i18n.localeFromLocation` | (`location`: `Location`, `settings`: [`AppSettings`](../interfaces/AppSettings.md)) => `undefined` \| `string` |
| `i18n.locales` | `never`[] |
| `i18n.slug` | `string` |
| `i18n.url` | `string` |
| `idp` | `Object` |
| `notification` | `Object` |
| `notification.default` | `Object` |
| `notification.default.max` | `number` |
| `notification.default.ttl` | `number` |
| `notification.error` | `Object` |
| `notification.error.max` | `number` |
| `notification.error.ttl` | `number` |
| `notification.login-error` | `Object` |
| `notification.login-error.max` | `number` |
| `notification.login-error.ttl` | `number` |
| `notification.logout-error` | `Object` |
| `notification.logout-error.max` | `number` |
| `notification.logout-error.ttl` | `number` |
| `router` | `Object` |
| `router.type` | `string` |
| `routes` | `Object` |
| `routes.home` | `string` |
| `routes.login` | `string` |
| `routes.loginCallback` | `string` |
| `routes.logout` | `string` |
| `routes.logoutCallback` | `string` |

#### Defined in

onekijs/packages/onekijs-framework/src/app/settings.ts:6
