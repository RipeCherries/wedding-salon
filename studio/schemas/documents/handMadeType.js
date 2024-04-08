import { FiBox } from "react-icons/fi";

const handMadeType = {
  name: 'handMadeType',
  title: 'Типы HandMade товара',
  type: 'document',
  icon: FiBox,
  fields: [
    {
      name: 'typeName',
      title: 'Название типа:',
      type: 'string',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required(),
    },
  ],
  preview: {
    select: {
      name: 'typeName',
    },
    prepare: ({ name }) => ({
      title: name,
    }),
  },
}

export default handMadeType;