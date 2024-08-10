import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  access: {
    admin: ({ req: { user } }) => user.role === "admin",
    create: ({ req: { user } }) => user.role === "admin",
    update: ({ req: { user } }) => user.role === "admin",
    delete: ({ req: { user } }) => user.role === "admin",
  },
  labels: {
    singular: "Пользователь",
    plural: "Пользователи",
  },
  auth: true,
  admin: {
    disableDuplicate: true,
    useAsTitle: "email",
    listSearchableFields: ["email", "phone", "name", "surname"],
  },
  fields: [
    {
      access: {
        update: ({ req: { user }, id }) => user.id !== id,
      },
      name: "role",
      type: "select",
      label: "Роль",
      required: true,
      options: [
        { label: "Админ", value: "admin" },
        { label: "Клиент", value: "client" },
      ],
    },
    {
      type: "email",
      name: "email",
      required: true,
      unique: true,
    },
    {
      type: "text",
      name: "name",
      label: "Имя",
      required: true,
    },
    {
      type: "text",
      name: "surname",
      label: "Фамилия",
      required: true,
    },
    {
      type: "number",
      name: "phone",
      label: "Телефон",
      required: true,
      unique: true,
    },
    {
      type: "relationship",
      relationTo: "products",
      name: "plan",
      label: "План",
    },
    {
      type: "date",
      name: "plan_date_start",
      label: "Дата начала",
    },
    {
      type: "date",
      name: "plan_date_end",
      label: "Дата окончания",
    },
    {
      type: "textarea",
      name: "additional",
      label: "Доп. Информация",
    },
  ],
};

export default Users;
