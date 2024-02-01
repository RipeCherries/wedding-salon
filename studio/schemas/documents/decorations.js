import { GiBigDiamondRing } from 'react-icons/gi';

const decorations = {
  name: 'decorations',
  title: 'Свадебные украшения',
  type: 'document',
  icon: GiBigDiamondRing,
  fields: [
    {
      name: 'title',
      title: 'Название:',
      type: 'string',
      description: 'Например: широкий ободок с жемчугом',
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

export default decorations;
