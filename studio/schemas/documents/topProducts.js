import { ImFire } from "react-icons/im";

const topProducts = {
  name: 'topProducts',
  title: 'ТОП товары',
  type: 'document',
  icon: ImFire,
  fields: [
    {
      name: 'products',
      title: 'Товары:',
      type: 'array',
      description: 'Выберите товары, которые будут отображаться на главной странице:',
      of: [
        {
          type: 'reference',
          to: [{ type: 'dresses' }, { type: 'dressesRental' }, { type: 'veils' }, { type: 'shoes' }, { type: 'jackets' }],
        },
      ],
      validation: (Rule) => [
        Rule.error('Это поле не может быть пустым!').required(),
        Rule.error('Только уникальные товары!').unique(),
        Rule.error('Минимум 3 товара!').min(3),
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'TОП товары',
      };
    },
  },
};

export default topProducts;
