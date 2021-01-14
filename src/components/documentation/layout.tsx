import React, {
  ReactNode,
  FunctionComponent,
  createContext,
  useState,
} from 'react';

import { DocsHeader, DocsHeaderProps } from './chrome/header';

interface DocsChromeContextShape {
  chrome?: DocsHeaderProps;
  setChrome: React.Dispatch<
    React.SetStateAction<DocsChromeContextShape['chrome']>
  >;
}

export const DocsChromeContext = createContext<DocsChromeContextShape>({
  chrome: {
    breadcrumbs: [
      {
        text: 'Documentation',
      },
      {
        text: 'Product Design',
      },
    ],
  },

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setChrome: () => {},
});

const DocsLayout: FunctionComponent<{
  children?: ReactNode;
}> = ({ children }) => {
  const [chromeOptions, setChromeOptions] = useState({
    breadcrumbs: [
      {
        text: 'Documentation',
      },
      {
        text: 'Product Design',
      },
    ],
  });

  return (
    <DocsChromeContext.Provider
      // @ts-ignore
      value={{ chrome: chromeOptions, setChrome: setChromeOptions }}>
      <DocsHeader {...chromeOptions} />
      {children}
    </DocsChromeContext.Provider>
  );
};

export default DocsLayout;
