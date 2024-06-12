export default async function decorate(block) {
  const parent = block.parentNode;
  const component = document.createElement('fn-footer');
  component.setAttribute('message', 'True Love Will Find You in the End');
  parent.replaceWith(component);
}
