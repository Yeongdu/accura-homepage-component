# vue component npm에 배포해서 사용하기 연습

usage

```js
<script lang="ts" setup>
import {
  ListDeco, TextShow, TextTyping, SlideScroll, HeaderModalButton
} from 'accura-homepage-component-vite';

const mokList = [
  { contents: '11111' },
  { contents: '22222' },
  { contents: '33333' },
  { contents: '44444' },
];
</script>
```

---

```vue
     
<TextShow text="회전 하면서 글자가 나타나요" />
```

```vue
     
<TextShow
  text="회전 하면서 글자가 나타나요"
  :interval-ms="150"
  class="text-center text-2xl"
/>
```

---

```vue
   
<ListDeco :list="mokList" />
```

---

```vue
   
<TextTyping
  text="글자가 하나씩 나타나는 타이핑효과입니다. \n줄바꿈이 가능합니다."
/>
```

```vue
   
<TextTyping
  text="글자가 하나씩 나타나는 타이핑효과입니다. \n줄바꿈이 가능합니다."
  :interval-ms="150"
  class="text-2xl"
/>
```
