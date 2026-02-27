---
title: 搞清楚Route與Router分別在做什麼
date: 2026-02-01
tags: ["Vue"]
---

我們在vue要控制、變更或讀取路由的時候，就會需要安裝`vue-router`而其中又有兩種很類似的方法可操控
```js
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
```

### useRoute():我現在在哪？
`route`專門用來判斷現在的路由位置
```js
const route = useRoute()

route.params.page
route.query.keyword
route.path
```

2. useRouter():我要去哪？
`router`專門用來改變route
```js
const router = useRouter()

router.push('/list/2')
router.push({ name: 'list', params: { page: 2 } })
router.replace(...)
router.back()
```

補充：以下兩種寫法是相同意思
```vue
<router-link :to="{ name: 'list', params: { page: 2 } }" />
```
```js
router.push(
    {   
        name: 'list',
        params: { page: 2 } 
    }
)
```

:to={}通常可以傳哪些參數
```html
<router-link
  :to="{
    name: 'list', // 或 path
    params: { page }, // 動態路徑
    query: { sort: 'new' }, // ?a=1&b=2
    hash: '#section2' // #錨點
    replace: true // 取代歷史紀錄
  }"
/>
```