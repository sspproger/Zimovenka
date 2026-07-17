// Имена событий подготовлены, но не отправляются до подключения счётчика.
export const analyticsEvents = [
  'click_telegram_header', 'click_vk_header', 'click_telegram_hero', 'click_vk_hero',
  'click_telegram_products', 'click_vk_products', 'click_telegram_delivery', 'click_vk_delivery',
  'click_telegram_faq', 'click_vk_faq', 'click_telegram_footer', 'click_vk_footer',
  'click_telegram_mobile', 'click_vk_mobile', 'view_family_story', 'view_products',
  'view_delivery', 'view_order_steps', 'open_faq', 'click_product_availability',
] as const;
