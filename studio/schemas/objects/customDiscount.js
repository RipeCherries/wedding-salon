const customDiscount = {
  name: 'customDiscount',
  title: 'Скидка:',
  type: 'object',
  fields: [
    {
      name: 'hasDiscount',
      title: 'Включить скидку на товар',
      type: 'boolean',
    },
    {
      name: 'discountPercentage',
      title: 'Размер скидки (%):',
      type: 'number',
    },
    {
      name: 'newPrice',
      title: 'Новая цена:',
      type: 'number',
    },
  ],
};

export default customDiscount;
