import { FaTshirt } from 'react-icons/fa';

const clothingSizes = {
  name: 'clothingSizes',
  title: 'Размеры одежды',
  type: 'document',
  icon: FaTshirt,
  fields: [
    {
      name: 'RU',
      title: 'Размер (Россия):',
      type: 'number',
      validation: (Rule) => [
        Rule.error('Это поле не может быть пустым!').required(),
        Rule.error('Размер должен быть целым числом!').integer(),
      ],
    },
    {
      name: 'INT',
      title: 'Размер (Международный):',
      type: 'string',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required(),
    },
  ],
  preview: {
    select: {
      ru: 'RU',
      int: 'INT',
    },
    prepare: ({ ru, int }) => ({
      title: `${ru} / ${int}`,
    }),
  },
};

export default clothingSizes;
