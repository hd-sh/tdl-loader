## 使用

xxx.tdl
``` html

<div>
  <h1>{{ name }}</h1>
  <div>{{ age }}</div>
  <div>{{ sex }}</div>
</div>

<template>
  data = {
    name: 'alex',
    age: 20,
    sex: 'male',
  }
</template>

```

## 例子

``` js
import tdl from './index.tdl'

document.body.innerHTML = tdl
```
