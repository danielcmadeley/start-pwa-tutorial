import { jsx } from 'react/jsx-runtime';
import { useRouter } from '@tanstack/react-router';
import { R as Route } from './ssr.mjs';
import 'node:async_hooks';
import '@tanstack/react-router/ssr/server';

function Home() {
  useRouter();
  Route.useLoaderData();
  return /* @__PURE__ */ jsx("h1", { children: "hello" });
}

export { Home as component };
//# sourceMappingURL=index-CmfpDtpp.mjs.map
