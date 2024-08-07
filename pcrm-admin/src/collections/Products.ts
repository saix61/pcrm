import { CollectionConfig } from "payload/types";

const Products: CollectionConfig = {
  slug: "products",
  access: {
    admin: ({ req: { user } }) => user.role === "admin",
    create: ({ req: { user } }) => user.role === "admin",
    update: ({ req: { user } }) => user.role === "admin",
    delete: ({ req: { user } }) => user.role === "admin",
  },
  labels: {
    singular: "Продукт",
    plural: "Продукты",
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      type: "text",
      name: "name",
      label: "Название",
      required: true,
    },
    {
      type: "textarea",
      name: "description",
      label: "Описание",
    },
  ],
};

export default Products;
