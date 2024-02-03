import { GiAmpleDress } from 'react-icons/gi';

const dressesRental = {
  name: 'dressesRental',
  title: 'Платья (прокат)',
  type: 'document',
  icon: GiAmpleDress,
  fields: [
    {
      name: 'title',
      title: 'Название:',
      type: 'string',
      description: 'Например: свадебное платье',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required(),
    },
    {
      name: 'slug',
      title: 'Slug:',
      type: 'slug',
      description: 'Уникальный фрагмент URL-адреса',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required(),
    },
    {
      name: 'img',
      title: 'Фото товара:',
      type: 'customGallery',
      description: 'Загрузите одно или несколько изображений',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required(),
    },
    {
      name: 'video',
      title: 'Видео:',
      type: 'string',
      description: 'Ссылка на видео',
    },
    {
      name: 'article',
      title: 'Артикул:',
      type: 'string',
      description: 'Например: LS 108-22',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required(),
    },
    {
      name: 'price',
      title: 'Цена:',
      type: 'number',
      description: 'Стоимость в рублях. Целое положительное число',
      validation: (Rule) => [
        Rule.error('Это поле не может быть пустым!').required(),
        Rule.error('Цена должна быть положительной!').min(1),
        Rule.error('Цена должна быть целым числом!').integer(),
      ],
    },
    {
      name: 'discount',
      title: 'Скидка:',
      description: 'Размер скидки и новая цена (при наличии)',
      type: 'customDiscount',
    },
    {
      name: 'size',
      title: 'Размер(ы)',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'clothingSizes' }],
        },
      ],
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required(),
    },
    {
      name: 'color',
      title: 'Цвет:',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'clothingColors' }],
        },
      ],
      description: 'Выберите цвет товара',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required(),
    },
    {
      name: 'style',
      title: 'Фасон:',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'clothingStyles' }],
        },
      ],
      description: 'Выберите фасон',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required(),
    },
    {
      name: 'description',
      title: 'Описание:',
      type: 'text',
      description: 'Описание товара',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      article: 'article',
    },
    prepare({ title, article }) {
      return {
        title: title,
        subtitle: article,
      };
    },
  },
};

export default dressesRental;
