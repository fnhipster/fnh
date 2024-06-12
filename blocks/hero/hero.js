export default async function decorate(block) {
  const wrapper = document.createElement('fn-hero');

  const image = block.querySelector('fn-image');
  image.setAttribute('slot', 'image');

  const title = block.querySelector('h1');
  title.setAttribute('slot', 'title');

  wrapper.append(image, title);

  block.append(wrapper);
}
