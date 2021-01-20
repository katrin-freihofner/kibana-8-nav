import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

import {
  EuiPageSideBarProps,
  EuiResizableContainer,
  EuiPageContent,
  EuiPageContentProps,
  EuiPageSideBar,
} from '@elastic/eui';
import { EuiPage, EuiPageProps } from '../../../eui/page/page_shim';
import {
  EuiPageBody,
  EuiPageBodyProps,
} from '../../../eui/page/page_body_shim';
import {
  EuiPageContentBody,
  EuiPageContentBodyProps,
} from '../../../eui/page/page_body_content_shim';

import ThemeContext from '../../../../themes/ThemeContext';

import { KibanaPageHeader, KibanaPageHeaderProps } from './page_header';
import { KibanaPageK8 } from './page_k8';

export type KibanaPageProps = {
  solutionNav?: ReactNode;
  pageHeader?: KibanaPageHeaderProps;
  pageProps?: EuiPageProps;
  pageBodyProps?: EuiPageBodyProps;
  pageContentProps?: EuiPageContentProps;
  pageContentBodyProps?: EuiPageContentBodyProps;
  pageSideBarProps?: EuiPageSideBarProps;
  restrictWidth?: boolean;
  resizableSidebar?: boolean;
  centered?: boolean;
  panelled?: boolean;
};

export const KibanaPage: FunctionComponent<KibanaPageProps> = ({
  solutionNav,
  children,
  pageHeader,
  pageProps,
  pageBodyProps,
  pageContentProps,
  pageContentBodyProps,
  pageSideBarProps,
  restrictWidth = true,
  resizableSidebar = false,
  centered = false,
  panelled,
}) => {
  const context = React.useContext(ThemeContext);

  if (context.theme.includes('light')) {
    return (
      <KibanaPageK8
        solutionNav={solutionNav}
        children={children}
        pageHeader={pageHeader}
        pageProps={pageProps}
        pageBodyProps={pageBodyProps}
        pageContentProps={pageContentProps}
        pageContentBodyProps={pageContentBodyProps}
        pageSideBarProps={pageSideBarProps}
        restrictWidth={restrictWidth}
        resizableSidebar={resizableSidebar}
        centered={centered}
        panelled={panelled}
      />
    );
  }

  const optionalSideBar = solutionNav ? (
    <EuiPageSideBar {...pageSideBarProps}>{solutionNav}</EuiPageSideBar>
  ) : undefined;

  const optionalPageHeader = pageHeader && <KibanaPageHeader {...pageHeader} />;

  const pageClasses = classNames(
    'kbnPage',
    pageProps ? pageProps.className : ''
  );

  const pageBody = (
    <EuiPageBody {...pageBodyProps} restrictWidth={restrictWidth}>
      {optionalPageHeader}
      {/* TODO: Allow EuiPageContent to restrictWidth */}
      <EuiPageContent
        verticalPosition={centered ? 'center' : undefined}
        horizontalPosition={centered ? 'center' : undefined}
        {...pageContentProps}>
        <EuiPageContentBody {...pageContentBodyProps}>
          {children}
        </EuiPageContentBody>
      </EuiPageContent>
    </EuiPageBody>
  );

  return resizableSidebar ? (
    <>
      <EuiResizableContainer style={{ flexGrow: 1 }}>
        {(EuiResizablePanel, EuiResizableButton) => (
          <EuiPage
            paddingSize={context.theme.includes('dark') ? undefined : 'none'}
            {...pageProps}
            className={pageClasses}>
            <EuiResizablePanel
              mode={[
                'collapsible',
                {
                  position: 'top',
                },
              ]}
              initialSize={17}
              // TODO: Fix: miSize isn't respected on page load
              minSize={'60px'}
              // @ts-ignore TODO: Allow for maxSize
              // Also TODO: Allow all Size follows take a percentage or string value
              // maxSize="300px"
              paddingSize="none"
              className="euiPageSideBar">
              {optionalSideBar}
            </EuiResizablePanel>

            <EuiResizableButton className="kbnPage__resizer" />

            <EuiResizablePanel
              mode="main"
              initialSize={83}
              minSize="600px"
              paddingSize="none">
              {pageBody}
            </EuiResizablePanel>
          </EuiPage>
        )}
      </EuiResizableContainer>
    </>
  ) : (
    <>
      <EuiPage
        grow={true}
        restrictWidth={!solutionNav && restrictWidth}
        {...pageProps}
        className={pageClasses}>
        {optionalSideBar}
        {pageBody}
      </EuiPage>
    </>
  );
};
