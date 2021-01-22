import React, { useState } from 'react';
import { navigate } from 'gatsby';

import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiSideNav,
  EuiSpacer,
  EuiText,
  EuiTextColor,
  EuiTitle,
} from '@elastic/eui';

type Props = {
  currentUrl?: string;
};

export function DocsInPageNav({ currentUrl = 'introduction' }: Props) {
  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const createItem = (name: string, data = {}) => {
    return {
      ...data,
      id: name,
      name,
      // @ts-ignore
      isSelected: data.url && data.url === currentUrl,
      // @ts-ignore
      // disabled: !data.url,
      // @ts-ignore
      onClick: data.url
        ? () => {
            // @ts-ignore
            navigate(data.url);
          }
        : () => {
            return null;
          },
    };
  };

  const sideNav = [
    createItem('Introduction', { url: 'introduction' }),
    createItem('Design Principles', {
      items: [
        createItem('Purpose with delight'),
        createItem('Empowering through thoughtfulness'),
        createItem('Optimized, yet flexible'),
      ],
    }),
    createItem('Culture', {
      items: [
        createItem('Purpose'),
        createItem('Workflow values'),
        createItem('Design decisions'),
      ],
    }),
    createItem('Practices', {
      items: [
        createItem('Communication'),
        createItem('Tooling'),
        createItem('Critiques'),
        createItem('User research'),
      ],
    }),
  ];

  return (
    <EuiFlexGroup
      direction="column"
      gutterSize="none"
      style={{ height: '100%' }}>
      <EuiFlexItem grow={false}>
        <EuiTitle size="xs">
          <EuiTextColor color="subdued">
            <h2>On this page</h2>
          </EuiTextColor>
        </EuiTitle>
      </EuiFlexItem>
      <EuiFlexItem
        className="eui-yScrollWithShadows"
        style={{ overflowX: 'hidden' }}>
        <div>
          <EuiSpacer />
          <EuiSideNav
            mobileTitle="Navigate within $APP_NAME"
            toggleOpenOnMobile={toggleOpenOnMobile}
            isOpenOnMobile={isSideNavOpenOnMobile}
            items={sideNav}
          />
        </div>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <div>
          <EuiHorizontalRule margin="xs" />
          <EuiSpacer />
          <EuiText size="s" color="subdued">
            <p>No credit card required. Get up and running in 3-minutes!</p>
          </EuiText>
          <EuiSpacer size="s" />
          <EuiButton fill fullWidth>
            Start a free trial
          </EuiButton>
        </div>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
