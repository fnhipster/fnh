export default async function decorate(block) {
  const parent = block.parentNode;
  const component = document.createElement('fn-header');
  parent.replaceWith(component);
}
