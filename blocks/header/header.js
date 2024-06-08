import { render } from "@fnhipster/ui/render.js";
import Header from "@fnhipster/ui/containers/Header.js";

export default async function decorate(block) {
  return render.render(Header, {})(block);
}
