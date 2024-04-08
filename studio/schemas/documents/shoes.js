import { LiaShoePrintsSolid } from 'react-icons/lia';

const shoes = {
  name: 'shoes',
  title: 'Туфли',
  type: 'document',
  icon: LiaShoePrintsSolid,
  fields: [
    {
      name: 'title',
      title: 'Название:',
      type: 'string',
      description: 'Например: женские туфли',
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
      title: 'Размер:',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'shoesSizes' }],
        },
      ],
      validation: (Rule) => [
        Rule.error('Это поле не может быть пустым!').required(),
        Rule.error('Только уникальные размеры!').unique(),
      ],
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
      validation: (Rule) => [
        Rule.error('Это поле не может быть пустым!').required(),
        Rule.error('Только уникальные цвета!').unique(),
      ],
    },
    {
      name: 'description',
      title: 'Описание:',
      type: 'text',
      description: 'Описание товара (150-350 символов)',
      validation: (Rule) => [
        Rule.error('Это поле не может быть пустым!').required(),
        Rule.error('Минимум 150 символов!').min(150),
        Rule.error('Максимум 350 символов!').max(350),
      ],
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

export default shoes;
