export const site = {
  name: 'Зимовенька — Усадьба Лыковых', shortName: 'Зимовенька',
  title: 'Домашние мясные деликатесы | Зимовенька — семья Лыковых',
  description: 'Семейное производство домашних колбас и мясных деликатесов. История семьи Лыковых, актуальный ассортимент, доставка и заказ в Telegram или во ВКонтакте.',
  telegram: 'https://t.me/zimovenka', vk: 'https://vk.com/zimovenka31', locale: 'ru_RU', themeColor: '#720812',
  lastUpdated: '16 июля 2026',
  // TODO: заменить на достоверные данные, предоставленные семьёй Лыковых.
  founded: '[год основания семейного дела]', location: '[где находится производство]', phone: '[телефон]',
  email: '[электронная почта]', address: '[адрес]', hours: '[режим работы]', legal: '[реквизиты бизнеса]',
} as const;

export const navigation = [
  { href: '#about', label: 'О семье' }, { href: '#products', label: 'Продукция' },
  { href: '#values', label: 'Наши ценности' }, { href: '#delivery', label: 'Доставка' },
  { href: '#order', label: 'Как заказать' }, { href: '#faq', label: 'Вопросы' },
] as const;
