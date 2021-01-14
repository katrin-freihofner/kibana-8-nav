import React, {
  ReactNode,
  FunctionComponent,
  createContext,
  useState,
} from 'react';

import { KibanaHeader, KibanaHeaderProps } from './chrome/header';

interface KibanaChromeContextShape {
  chrome?: KibanaHeaderProps;
  setChrome: React.Dispatch<
    React.SetStateAction<KibanaChromeContextShape['chrome']>
  >;
}

export const KibanaChromeContext = createContext<KibanaChromeContextShape>({
  chrome: {
    breadcrumbs: [
      {
        text: 'Home',
      },
    ],
  },

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setChrome: () => {},
});

const Layout: FunctionComponent<{
  children?: ReactNode;
}> = ({ children }) => {
  const [chromeOptions, setChromeOptions] = useState({
    breadcrumbs: [
      {
        text: 'Home',
      },
    ],
  });

  return (
    <KibanaChromeContext.Provider
      // @ts-ignore
      value={{ chrome: chromeOptions, setChrome: setChromeOptions }}>
      <KibanaHeader {...chromeOptions} />
      {children}
    </KibanaChromeContext.Provider>
  );
};

export default Layout;
