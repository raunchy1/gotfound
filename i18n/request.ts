import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { PRICE_LABEL } from '@/lib/config';
import raw from '../messages/en.json';

// Messages use the token %PRICE% so the price lives only in lib/config.ts.
const messages = JSON.parse(JSON.stringify(raw).split('%PRICE%').join(PRICE_LABEL));

export default getRequestConfig(async () => {
  return { locale: routing.defaultLocale, messages };
});
