const fs = require('fs');

function htmlToJsx(html) {
  let jsx = html;
  
  // HTML comments to JSX comments
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, "{/* $1 */}");
  
  jsx = jsx.replace(/class=/g, 'className=');
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  jsx = jsx.replace(/<img(.*?)>/g, (match, attrs) => {
    if (match.endsWith('/>')) return match;
    return `<img${attrs} />`;
  });
  jsx = jsx.replace(/<input(.*?)>/g, (match, attrs) => {
    if (match.endsWith('/>')) return match;
    return `<input${attrs} />`;
  });
  jsx = jsx.replace(/<br.*?>/g, '<br />');
  jsx = jsx.replace(/<hr.*?>/g, '<hr />');
  
  // SVG filling fixes (camelCase)
  jsx = jsx.replace(/fill-rule/g, 'fillRule');
  jsx = jsx.replace(/clip-rule/g, 'clipRule');
  jsx = jsx.replace(/stroke-width/g, 'strokeWidth');
  jsx = jsx.replace(/stroke-linecap/g, 'strokeLinecap');
  jsx = jsx.replace(/stroke-linejoin/g, 'strokeLinejoin');
  jsx = jsx.replace(/stroke-dasharray/g, 'strokeDasharray');
  jsx = jsx.replace(/stroke-dashoffset/g, 'strokeDashoffset');
  jsx = jsx.replace(/style="([^"]*)"/g, ""); 
  jsx = jsx.replace(/allowfullscreen/ig, 'allowFullScreen'); // Iframe fix
  
  return jsx;
}

try {
  let html = fs.readFileSync('_static/html/kidzu/index.html', 'utf8');
  let startMark = "<!-- Feature Section Start -->";
  let endIndex = html.lastIndexOf("<!--<< Footer Area >>-->");
  if (endIndex === -1) endIndex = html.indexOf("<footer ");
  let startIndex = html.indexOf(startMark);

  if (startIndex !== -1 && endIndex !== -1) {
    let content = html.substring(startIndex, endIndex);
    let jsxContent = htmlToJsx(content);
    fs.writeFileSync('_tmp_sections.jsx', jsxContent);
    console.log("Converted correctly.");
  }
} catch(e) {
  console.log(e);
}
