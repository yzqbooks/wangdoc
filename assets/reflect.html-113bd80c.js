const e=JSON.parse('{"key":"v-768240a2","path":"/es6-tutorial/reflect.html","title":"Reflect","lang":"zh-CN","frontmatter":{"description":"概述 Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API。Reflect对象的设计目的有这样几个。 （1） 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。现阶段，某些方法同时在Object和`Reflect对象上部署，未来的新方法将只部署在R...","head":[["meta",{"property":"og:url","content":"https://yzqbooks.github.io/wangdoc/wangdoc/es6-tutorial/reflect.html"}],["meta",{"property":"og:site_name","content":"wangdoc"}],["meta",{"property":"og:title","content":"Reflect"}],["meta",{"property":"og:description","content":"概述 Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API。Reflect对象的设计目的有这样几个。 （1） 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。现阶段，某些方法同时在Object和`Reflect对象上部署，未来的新方法将只部署在R..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-04-06T10:09:00.000Z"}],["meta",{"property":"article:author","content":"yzqdev"}],["meta",{"property":"article:modified_time","content":"2022-04-06T10:09:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Reflect\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-04-06T10:09:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yzqdev\\",\\"url\\":\\"http://www.yzqdev.top\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"静态方法","slug":"静态方法","link":"#静态方法","children":[{"level":3,"title":"Reflect.get(target, name, receiver)","slug":"reflect-get-target-name-receiver","link":"#reflect-get-target-name-receiver","children":[]},{"level":3,"title":"Reflect.set(target, name, value, receiver)","slug":"reflect-set-target-name-value-receiver","link":"#reflect-set-target-name-value-receiver","children":[]},{"level":3,"title":"Reflect.has(obj, name)","slug":"reflect-has-obj-name","link":"#reflect-has-obj-name","children":[]},{"level":3,"title":"Reflect.deleteProperty(obj, name)","slug":"reflect-deleteproperty-obj-name","link":"#reflect-deleteproperty-obj-name","children":[]},{"level":3,"title":"Reflect.construct(target, args)","slug":"reflect-construct-target-args","link":"#reflect-construct-target-args","children":[]},{"level":3,"title":"Reflect.getPrototypeOf(obj)","slug":"reflect-getprototypeof-obj","link":"#reflect-getprototypeof-obj","children":[]},{"level":3,"title":"Reflect.setPrototypeOf(obj, newProto)","slug":"reflect-setprototypeof-obj-newproto","link":"#reflect-setprototypeof-obj-newproto","children":[]},{"level":3,"title":"Reflect.apply(func, thisArg, args)","slug":"reflect-apply-func-thisarg-args","link":"#reflect-apply-func-thisarg-args","children":[]},{"level":3,"title":"Reflect.defineProperty(target, propertyKey, attributes)","slug":"reflect-defineproperty-target-propertykey-attributes","link":"#reflect-defineproperty-target-propertykey-attributes","children":[]},{"level":3,"title":"Reflect.getOwnPropertyDescriptor(target, propertyKey)","slug":"reflect-getownpropertydescriptor-target-propertykey","link":"#reflect-getownpropertydescriptor-target-propertykey","children":[]},{"level":3,"title":"Reflect.isExtensible (target)","slug":"reflect-isextensible-target","link":"#reflect-isextensible-target","children":[]},{"level":3,"title":"Reflect.preventExtensions(target)","slug":"reflect-preventextensions-target","link":"#reflect-preventextensions-target","children":[]},{"level":3,"title":"Reflect.ownKeys (target)","slug":"reflect-ownkeys-target","link":"#reflect-ownkeys-target","children":[]}]},{"level":2,"title":"实例：使用 Proxy 实现观察者模式","slug":"实例-使用-proxy-实现观察者模式","link":"#实例-使用-proxy-实现观察者模式","children":[]}],"git":{"createdTime":1649239740000,"updatedTime":1649239740000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":8.88,"words":2663},"filePathRelative":"es6-tutorial/reflect.md","localizedDate":"2022年4月6日","autoDesc":true,"excerpt":""}');export{e as data};