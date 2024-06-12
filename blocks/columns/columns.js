export default function decorate(block) {
  // wrap block in <fn-columns>
  const wrapper = document.createElement('fn-columns');

  [...block.children].forEach((child) => {
    child.setAttribute('slot', 'row');
  });

  wrapper.append(...block.children);

  block.append(wrapper);
}
