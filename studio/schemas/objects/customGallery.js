import { FaImages } from 'react-icons/fa';

const customGallery = {
  name: 'customGallery',
  title: 'Галерея:',
  type: 'object',
  icon: FaImages,
  fields: [
    {
      name: 'images',
      title: 'Изображения:',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Фото:',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.error('Это поле не может быть пустым!').required(),
          fields: [
            {
              name: 'alt',
              title: 'Описание',
              type: 'string',
              validation: (Rule) => Rule.error('Это поле не может быть пустым!').required(),
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
};

export default customGallery;
