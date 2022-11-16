import { marked } from 'marked';
import hljs from 'highlight.js';

hljs.configure({
  classPrefix: 'hljs-',
  languages: ['CSS', 'HTML', 'JavaScript', 'TypeScript', 'Markdown']
});
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: (code) => hljs.highlightAuto(code).value,
  gfm: true, // 默认为true。 允许 Git Hub标准的markdown.
  breaks: true // 默认为false。 允许回车换行。该选项要求 gfm 为true。
});

export default marked;
