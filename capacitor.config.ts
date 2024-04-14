import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'OSFC Employee APP (DEMO)',
  webDir: 'dist',
  server: {
    androidScheme: 'http',
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
  android: {
    buildOptions: {
        keystorePath: 'c:\Users\Wizaker\Desktop\key-store.jks',
        keystoreAlias: 'osfc',
    }
  }
};

export default config;
