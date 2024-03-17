import { IoMdResize } from 'react-icons/io';

const shoesSizes = {
  name: 'shoesSizes',
  title: 'Размеры обуви',
  type: 'document',
  icon: IoMdResize,
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
  ],
  preview: {
    select: {
      ru: 'RU',
    },
    prepare: ({ ru }) => ({
      title: `${ru}`,
    }),
  },
};

export default shoesSizes;
