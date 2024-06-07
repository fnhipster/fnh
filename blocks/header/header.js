import { initializers } from "@dropins/tools/initializer.js";
import { initialize } from "@fnhipster/ui/api.js";
import { render } from "@fnhipster/ui/render.js";
import Header from "@fnhipster/ui/containers/Header.js";

// Register Initializers
initializers.register(initialize, {});

export default async function decorate(block) {
  return render.render(Header, {})(block);
}
