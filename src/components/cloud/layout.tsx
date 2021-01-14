import React, {
  ReactNode,
  FunctionComponent,
  createContext,
  useState,
} from 'react';

import { CloudChrome, CloudChromeProps } from './chrome/chrome';

const localStorageIsDefined: boolean = typeof localStorage !== 'undefined';

if (localStorageIsDefined && localStorage.getItem('theme') === 'dark') {
  require('../../themes/theme_dark.scss');
} else {
  require('../../themes/theme_light.scss');
}

interface CloudChromeContextShape {
  chrome?: CloudChromeProps;
  setChrome: React.Dispatch<
    React.SetStateAction<CloudChromeContextShape['chrome']>
  >;
}

export const CloudChromeContext = createContext<CloudChromeContextShape>({
  chrome: {
    breadcrumbs: [
      {
        text: 'Overview',
      },
    ],
  },

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setChrome: () => {},
});

const CloudLayout: FunctionComponent<{
  children?: ReactNode;
}> = ({ children }) => {
  const [chromeOptions, setChromeOptions] = useState({
    breadcrumbs: [
      {
        text: 'Overview',
      },
    ],
  });

  return (
    <CloudChromeContext.Provider
      // @ts-ignore
      value={{ chrome: chromeOptions, setChrome: setChromeOptions }}>
      <CloudChrome {...chromeOptions} />
      {children}
    </CloudChromeContext.Provider>
  );
};

export default CloudLayout;
