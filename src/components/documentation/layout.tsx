import React, {
  ReactNode,
  FunctionComponent,
  createContext,
  useState,
} from 'react';

import { DocsChrome, DocsChromeProps } from './chrome/chrome';

interface DocsChromeContextShape {
  chrome?: DocsChromeProps;
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
      <DocsChrome {...chromeOptions} />
      {children}
    </DocsChromeContext.Provider>
  );
};

export default DocsLayout;
