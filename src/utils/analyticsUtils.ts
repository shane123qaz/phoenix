import analytics from '@react-native-firebase/analytics';

export const trackScreenView = async (screen: string) => {
  await analytics().setCurrentScreen(screen, screen);
};

export const onProductView = async () => {
  // log customized event product_view
  await analytics().logEvent('product_view', {
    id: '123456789',
    color: 'red',
    via: 'ProductCatalog',
  });
};
