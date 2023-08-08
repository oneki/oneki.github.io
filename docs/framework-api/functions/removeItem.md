---
id: removeItem
title: removeItem
sidebar_label: removeItem
---

```tsx
removeItem(key: string,storage: null | string): void
```
<br/>

remove a key from the specified storage  
if the storage is set to 'any', try all storage

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| key | string | : name of the key to get the value from |
| storage | null \| string | : localStorage, sessionStorage, cookie, any (defaults to any) |
