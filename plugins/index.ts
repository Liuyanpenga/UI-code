import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import '@kangc/v-md-editor/lib/theme/style/github.css';

import hljs from 'highlight.js';
VMdPreview.use(githubTheme,{
  Hljs: hljs,
});
export default VMdPreview