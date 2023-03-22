// 链接：https://juejin.cn/post/7063061869526777870

import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  // preflight: false,
  extract: {
    // A common use case is scanning files from the root directory
    include: ['**/*.{vue,html,jsx,tsx}'],
    // if you are excluding files, make sure you always include node_modules and .git
    exclude: ['node_modules', '.git', 'dist'],
  },
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
  },
  theme: {
    extend: {
      colors: {
        brand: {
          /** 品牌色/主色/B1-1-E8F4FF-浅色、白底悬浮 */
          1: '#E8F4FF',
          /** 品牌色/主色/B1-3-94C2FF-禁用 */
          3: '#94C2FF',
          /** 品牌色/主色/B1-5-4086FF-悬浮 */
          5: '#4086FF',
          /** 品牌色/主色/B1-6-1664FF-常规 */
          6: '#1664FF',
          /** 品牌色/主色/Brand1-7-0E49D2-点击 */
          7: '#0E49D2',
        },
      },
    },
  },
});
