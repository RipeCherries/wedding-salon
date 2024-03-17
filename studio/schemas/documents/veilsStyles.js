import { GiRolledCloth } from 'react-icons/gi';

const veilsStyles = {
  name: 'veilsStyles',
  title: 'Стили фаты',
  type: 'document',
  icon: GiRolledCloth,
  fields: [
    {
      name: 'styleName',
      title: 'Название стиля:',
      type: 'string',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required(),
    },
  ],
  preview: {
    select: {
      name: 'styleName',
    },
    prepare: ({ name }) => ({
      title: name,
    }),
  },
};

export default veilsStyles;
