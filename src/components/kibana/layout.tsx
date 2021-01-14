import React, {
  ReactNode,
  FunctionComponent,
  createContext,
  useState,
} from 'react';
import { Helmet } from 'react-helmet';
import { KibanaChrome } from './chrome/chrome';

import { KibanaHeader, KibanaHeaderProps } from './chrome/header';

export interface KibanaChromeContextShape {
  chrome?: KibanaHeaderProps & {
    pageTitle?: string;
  };
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
    headerLinks: [],
    pageTitle: 'Home',
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
    headerLinks: [],
    pageTitle: 'Home',
  });

  return (
    <KibanaChromeContext.Provider
      // @ts-ignore
      value={{ chrome: chromeOptions, setChrome: setChromeOptions }}>
      <KibanaChrome>
        <Helmet>
          <title>{chromeOptions.pageTitle} | Kibana 8 Prototype</title>
        </Helmet>

        <KibanaHeader
          breadcrumbs={chromeOptions.breadcrumbs}
          headerLinks={chromeOptions.headerLinks}
        />
        {children}
      </KibanaChrome>
    </KibanaChromeContext.Provider>
  );
};

export default Layout;
