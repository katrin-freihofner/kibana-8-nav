import React, {
  ReactNode,
  FunctionComponent,
  createContext,
  useState,
} from 'react';

import { CloudHeader, CloudHeaderProps } from './chrome/header';

interface CloudChromeContextShape {
  chrome?: CloudHeaderProps;
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
      <CloudHeader {...chromeOptions} />
      {children}
    </CloudChromeContext.Provider>
  );
};

export default CloudLayout;
