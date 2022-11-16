import styled from 'styled-components';

const WritingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

// 编辑器样式
const ArticleContainer = styled.section`
  flex: 1;
  display: flex;
  overflow: hidden;
  .inputPane {
    flex-basis: 50%;
    margin-right: 10px;
    border: 1px solid #ccc;
    display: flex;
    flex-shrink: 0;
    border-radius: 10px;
    textarea {
      width: 100%;
      border: none;
      font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
      font-size: 12px;
      resize: none;
      padding: 0.6em;
      overflow: auto;
      flex-grow: 1;
      flex-shrink: 1;
      border-radius: 10px;
      padding: 20px;
    }
  }

  .preview {
    flex-basis: 50%;
    height: 100%;
    border: 1px solid #ccc;
    margin-left: 10px;
    padding: 0.6em;
    background-color: rgb(239, 238, 234);
    overflow-y: scroll;
    border-radius: 10px;
    padding: 20px;
    line-height: 30px;
    // 代码片段
    code {
      padding: 0;
      font-size: 16px;
    }

    // 代码高亮主题配置
    .hljs-doctag,
    .hljs-keyword,
    .hljs-meta .hljs-keyword,
    .hljs-template-tag,
    .hljs-template-variable,
    .hljs-type,
    .hljs-variable.language_ {
      /* prettylights-syntax-keyword */
      color: #ff7b72;
    }

    .hljs-title,
    .hljs-title.class_,
    .hljs-title.class_.inherited__,
    .hljs-title.function_ {
      /* prettylights-syntax-entity */
      color: #d2a8ff;
    }

    .hljs-attr,
    .hljs-attribute,
    .hljs-literal,
    .hljs-meta,
    .hljs-number,
    .hljs-operator,
    .hljs-variable,
    .hljs-selector-attr,
    .hljs-selector-class,
    .hljs-selector-id {
      /* prettylights-syntax-constant */
      color: #79c0ff;
    }

    .hljs-regexp,
    .hljs-string,
    .hljs-meta .hljs-string {
      /* prettylights-syntax-string */
      color: #a5d6ff;
    }

    .hljs-built_in,
    .hljs-symbol {
      /* prettylights-syntax-variable */
      color: #ffa657;
    }

    .hljs-comment,
    .hljs-code,
    .hljs-formula {
      /* prettylights-syntax-comment */
      color: #8b949e;
    }

    .hljs-name,
    .hljs-quote,
    .hljs-selector-tag,
    .hljs-selector-pseudo {
      /* prettylights-syntax-entity-tag */
      color: #7ee787;
    }

    .hljs-subst {
      /* prettylights-syntax-storage-modifier-import */
      color: #c9d1d9;
    }

    .hljs-section {
      /* prettylights-syntax-markup-heading */
      color: #1f6feb;
      font-weight: bold;
    }

    .hljs-bullet {
      /* prettylights-syntax-markup-list */
      color: #f2cc60;
    }

    .hljs-emphasis {
      /* prettylights-syntax-markup-italic */
      color: #c9d1d9;
      font-style: italic;
    }

    .hljs-strong {
      /* prettylights-syntax-markup-bold */
      color: #c9d1d9;
      font-weight: bold;
    }

    .hljs-addition {
      /* prettylights-syntax-markup-inserted */
      color: #aff5b4;
      background-color: #033a16;
    }

    .hljs-deletion {
      /* prettylights-syntax-markup-deleted */
      color: #ffdcd7;
      background-color: #67060c;
    }

    h1 {
      font-weight: 800;
      font-size: 2.25em;
      margin-top: 0;
      margin-bottom: 0.8888889em;
      line-height: 1.1111111;
    }
    h2 {
      font-weight: 700;
      font-size: 1.5em;
      margin-top: 2em;
      margin-bottom: 1em;
      line-height: 1.3333333;
    }
    h3 {
      color: inherit;
      font-weight: 600;
      font-size: 1.25em;
      margin-top: 1.6em;
      margin-bottom: 0.6em;
      line-height: 1.6;
    }
    p {
      margin-top: 1.25em;
      margin-bottom: 1.25em;
    }
    blockquote {
      font-weight: 400;
      font-style: normal;
      line-height: 1.5em;
      padding: 0.6em 1.2em;
      opacity: 0.8;
    }
    code {
      word-break: break-word;
      border-radius: 2px;
      overflow-x: auto;
      color: #ff502c;
      padding: 0.065em 0.4em;
    }

    pre {
      padding-left: 1rem;
      border-radius: 12px;
      background: rgb(37, 43, 48);
    }
  }
`;

const HeaderContainer = styled.div`
  background-color: rgb(240, 242, 245);
  .row {
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    margin: 10px 0;
    span {
      height: 100%;
      width: auto !important;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      font-size: 14px;
      color: rgb(0, 0, 0, 0.8);
      border-right: 1px solid #ccc;
      background-color: rgb(250, 250, 250);
    }
  }
  .title {
    border-top: none;
    border-bottom: none;
    span {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
    .cn_title {
      width: 50%;
      height: 100%;
      padding-left: 10px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    .en_title {
      flex: 1;
      height: 100%;
      margin-left: 20px;
      padding-left: 10px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      border-left: 1px solid #ccc;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  }
  .desc {
    input {
      flex: 1;
      height: 100%;
      padding-left: 10px;
    }
  }
  .category,
  .tags {
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    margin: 10px 0;
    background: #fff;
    .c_span,
    .t_span {
      height: 100%;
      line-height: 38px;
      padding: 0 10px;
      font-size: 14px;
      color: rgb(0, 0, 0, 0.8);
      border-right: 1px solid #ccc;
      background-color: rgb(250, 250, 250);
    }
    .select_c,
    .select_t {
      flex: 1;
    }
  }
  .submit {
    height: 40px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: #fff;
    background: rgb(64, 144, 247);
    border-radius: 5px;
    margin-bottom: 25px;
  }
`;

export { WritingContainer, ArticleContainer, HeaderContainer };
