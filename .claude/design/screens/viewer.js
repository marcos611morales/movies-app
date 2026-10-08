// Visor mínimo para las pantallas exportadas de Claude Design (.dc.html).
// Implementa solo lo que usan estos archivos: {{ ruta }}, <sc-for>, <sc-if>,
// onClick y setState. No es el runtime oficial del editor.
(function () {
  class DCLogic {
    constructor(props) {
      this.props = props;
      this.state = {};
    }
    setState(patch) {
      Object.assign(this.state, patch);
      render();
    }
  }

  const HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;
  const SINGLE = /^\{\{\s*([^}]+?)\s*\}\}$/;
  let root, template, instance;

  function lookup(path, scope) {
    if (path === 'true') return true;
    if (path === 'false') return false;
    return path.split('.').reduce((v, k) => (v == null ? undefined : v[k]), scope);
  }

  function toText(v) {
    if (v == null) return '';
    if (typeof v === 'object') {
      return Object.keys(v).map((k) => k + ': ' + v[k]).join('; ');
    }
    return String(v);
  }

  function processAttrs(el, scope) {
    for (const attr of Array.from(el.attributes)) {
      const name = attr.name;
      if (name.startsWith('hint-')) {
        el.removeAttribute(name);
        continue;
      }
      if (!attr.value.includes('{{')) continue;
      const single = attr.value.match(SINGLE);
      if (name.startsWith('on')) {
        el.removeAttribute(name);
        const fn = single && lookup(single[1], scope);
        if (typeof fn === 'function') el.addEventListener(name.slice(2), fn);
        continue;
      }
      const value = single
        ? toText(lookup(single[1], scope))
        : attr.value.replace(HOLE, (_, p) => toText(lookup(p, scope)));
      el.setAttribute(name, value);
    }
  }

  function processChildren(parent, scope) {
    for (const node of Array.from(parent.childNodes)) processNode(node, scope);
  }

  function processNode(node, scope) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.nodeValue.includes('{{')) {
        node.nodeValue = node.nodeValue.replace(HOLE, (_, p) => toText(lookup(p, scope)));
      }
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const tag = node.localName;

    if (tag === 'sc-for') {
      const listAttr = node.getAttribute('list').match(SINGLE);
      const list = (listAttr && lookup(listAttr[1], scope)) || [];
      const as = node.getAttribute('as');
      const frag = document.createDocumentFragment();
      list.forEach((item) => {
        const wrap = document.createElement('div');
        for (const child of node.childNodes) wrap.appendChild(child.cloneNode(true));
        processChildren(wrap, Object.assign({}, scope, { [as]: item }));
        while (wrap.firstChild) frag.appendChild(wrap.firstChild);
      });
      node.replaceWith(frag);
      return;
    }

    if (tag === 'sc-if') {
      const cond = node.getAttribute('value').match(SINGLE);
      if (cond && lookup(cond[1], scope)) {
        processChildren(node, scope);
        node.replaceWith(...Array.from(node.childNodes));
      } else {
        node.remove();
      }
      return;
    }

    processAttrs(node, scope);
    processChildren(node, scope);
  }

  function render() {
    const vals = instance.renderVals();
    const tree = document.importNode(template.content, true);
    processChildren(tree, vals);
    root.replaceChildren(tree);
  }

  function boot() {
    root = document.querySelector('x-dc');
    const script = document.querySelector('script[data-dc-script]');
    if (!root || !script) return;

    const helmet = root.querySelector('helmet');
    if (helmet) {
      document.head.append(...Array.from(helmet.childNodes));
      helmet.remove();
    }

    template = document.createElement('template');
    template.innerHTML = root.innerHTML;

    const decl = JSON.parse(script.dataset.props || '{}');
    const props = {};
    Object.keys(decl).forEach((k) => {
      if (!k.startsWith('$')) props[k] = decl[k].default;
    });

    const Component = new Function('DCLogic', script.textContent + '\nreturn Component;')(DCLogic);
    instance = new Component(props);
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
