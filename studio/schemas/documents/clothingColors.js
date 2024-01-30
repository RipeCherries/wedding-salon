import { IoColorPaletteSharp } from 'react-icons/io5';

const clothingColors = {
  name: 'clothingColors',
  title: 'Цвета одежды',
  type: 'document',
  icon: IoColorPaletteSharp,
  fields: [
    {
      name: 'colorName',
      title: 'Название цвета:',
      type: 'string',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required(),
    },
    {
      name: 'colorHEX',
      title: 'HEX код цвета:',
      type: 'string',
      initialValue: '#',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required(),
    },
  ],
  preview: {
    select: {
      name: 'colorName',
      hex: 'colorHEX',
    },
    prepare: ({ name, hex }) => ({
      title: `${name} (${hex})`,
    }),
  },
};

export default clothingColors;
