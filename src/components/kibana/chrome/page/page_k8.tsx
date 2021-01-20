import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import {
  EuiResizableContainer,
  EuiPageContent,
  EuiPageSideBar,
} from '@elastic/eui';
import { EuiPage } from '../../../eui/page/page_shim';
import { EuiPageBody } from '../../../eui/page/page_body_shim';
import { EuiPageContentBody } from '../../../eui/page/page_body_content_shim';

import { KibanaPageHeader } from './page_header';
import { KibanaPageProps } from './page';

export const KibanaPageK8: FunctionComponent<KibanaPageProps> = ({
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
  panelled = false, // When the INNER content should be panelled
}) => {
  const optionalSideBar = solutionNav ? (
    <EuiPageSideBar {...pageSideBarProps}>{solutionNav}</EuiPageSideBar>
  ) : undefined;

  const optionalPageHeader = pageHeader && (
    <KibanaPageHeader restrictWidth={restrictWidth} {...pageHeader} />
  );

  const pageClasses = classNames(
    'kbnPage',
    pageProps ? pageProps.className : ''
  );

  const shouldPageBodyBePannelled = Boolean(panelled !== true && solutionNav);

  const pageBody = (
    <EuiPageBody panelled={shouldPageBodyBePannelled} {...pageBodyProps}>
      {optionalPageHeader}
      <EuiPageContent
        borderRadius={!panelled ? 'none' : 'm'}
        hasShadow={!panelled ? false : true}
        verticalPosition={centered ? 'center' : undefined}
        horizontalPosition={centered ? 'center' : undefined}
        {...pageContentProps}>
        <EuiPageContentBody
          restrictWidth={restrictWidth}
          {...pageContentBodyProps}>
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
            paddingSize={'none'}
            grow={true}
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
              // TODO: Fix: minSize isn't respected on page load
              minSize={'60px'}
              // @ts-ignore TODO: Allow for maxSize
              // Also TODO: Allow all Size follows take a percentage or string value
              // maxSize="300px"
              paddingSize="none"
              className="euiPageSideBar">
              {solutionNav}
            </EuiResizablePanel>

            <EuiResizableButton className="kbnPage__resizer" style={{}} />

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
        paddingSize={'none'}
        {...pageProps}
        restrictWidth={false}
        className={pageClasses}>
        {optionalSideBar}
        {pageBody}
      </EuiPage>
    </>
  );
};
