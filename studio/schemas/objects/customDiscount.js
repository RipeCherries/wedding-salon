const customDiscount = {
  name: 'customDiscount',
  title: 'Скидка:',
  type: 'object',
  fields: [
    {
      name: 'hasDiscount',
      title: 'Включить скидку на товар',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'discountPercentage',
      title: 'Размер скидки (%):',
      description: 'Целое положительное число',
      type: 'number',
      validation: (Rule) => [
        Rule.error('Размер скидки должн быть положительным!').min(1),
        Rule.error('Размер скидки должен быть целым числом!').integer(),
      ],
    },
    {
      name: 'newPrice',
      title: 'Новая цена:',
      type: 'number',
      description: 'Стоимость в рублях. Целое положительное число',
      validation: (Rule) => [
        Rule.error('Размер скидки должн быть положительным!').min(1),
        Rule.error('Размер скидки должен быть целым числом!').integer(),
      ],
    },
  ],
};

export default customDiscount;
