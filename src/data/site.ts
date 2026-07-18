export const site = {
  name: 'Зимовенька — Усадьба Лыковых', shortName: 'Зимовенька',
  title: 'Зимовенька',
  description: 'Семейное производство домашних колбас и мясных деликатесов. История семьи Лыковых, актуальный ассортимент, доставка и заказ в Telegram или во ВКонтакте.',
  telegram: 'https://t.me/zimovenka', vk: 'https://vk.com/zimovenka31', locale: 'ru_RU', themeColor: '#720812',
  lastUpdated: '16 июля 2026',
  // TODO: заменить на достоверные данные, предоставленные семьёй Лыковых.
  founded: '[год основания семейного дела]', location: '[где находится производство]', phone: '+79087846795',
  email: '89192273745@mail.ru', address: '[адрес]', hours: '[режим работы]', legal: '[реквизиты бизнеса]',
} as const;

export const navigation = [
  { href: '#about', label: 'О семье' }, { href: '#values', label: 'Наши ценности' },
  { href: '#products', label: 'Продукция' }, { href: '#delivery', label: 'Где купить' },
  { href: '#faq', label: 'Вопросы' },
] as const;
