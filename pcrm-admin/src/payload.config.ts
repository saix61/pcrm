import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import Products from "./collections/Products";
import { CustomLogo } from "./CustomLogo";
import { CustomIcon } from "./CustomIcon";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    components: {
      graphics: {
        Logo: CustomLogo,
        Icon: CustomIcon,
      },
    },
  },
  editor: slateEditor({}),
  collections: [Products, Users],
  typescript: {
    outputFile: path.resolve(__dirname, "../../payload-types.d.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
