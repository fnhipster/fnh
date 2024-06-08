import { render } from "@fnhipster/ui/render.js";
import Footer from "@fnhipster/ui/containers/Footer.js";

export default async function decorate(block) {
  return render.render(Footer, {
    message: "This is a footer message.",
  })(block);
}
