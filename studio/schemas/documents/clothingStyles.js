import { MdStyle } from 'react-icons/md';

const clothingStyles = {
  name: 'clothingStyles',
  title: 'Фасоны одежды',
  type: 'document',
  icon: MdStyle,
  fields: [
    {
      name: 'styleName',
      title: 'Название фасона:',
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

export default clothingStyles;
