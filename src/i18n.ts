import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async (params) => {
  const locale = params.locale || 'id'; // Fallback to default locale if undefined
  
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
