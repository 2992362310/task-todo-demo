declare module '*.vue' {
  // import { App, defineComponent } from 'vue';

  // const component: ReturnType<typeof defineComponent> & {
  //   install(app: App): void;
  // };

  import type { DefineComponent } from 'vue';

  const component: DefineComponent<{}, {}, any>;

  export default component;
}

declare module 'uuid';
declare module 'lodash';
