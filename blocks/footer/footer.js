import { initializers } from "@dropins/tools/initializer.js";
import { initialize } from "@fnhipster/ui/api.js";
import { render } from "@fnhipster/ui/render.js";
import Footer from "@fnhipster/ui/containers/Footer.js";

// Register Initializers
initializers.register(initialize, {});

export default async function decorate(block) {
  return render.render(Footer, {
    message: "This is a footer message.",
  })(block);
}
