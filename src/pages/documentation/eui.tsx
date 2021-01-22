/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import {
  EuiPageContent,
  EuiPage,
  EuiPageBody,
  EuiSuperDatePicker,
  EuiButton,
  EuiText,
} from '@elastic/eui';
import {
  EuiPageHeaderProps,
  EuiPageHeader,
} from '../../components/eui/page/page_header_shim';

const tabs: EuiPageHeaderProps['tabs'] = [
  {
    label: 'Tab 1',
    isSelected: true,
  },
  {
    label: 'Tab 2',
  },
  {
    label: 'Tab 3',
  },
  {
    label: 'Tab 4',
  },
];

export default () => (
  <EuiPage restrictWidth>
    <EuiPageBody>
      <EuiPageContent>
        {/* Page title */}
        <EuiPageHeader pageTitle="Page title" />
        <EuiPageHeader
          responsiveOrder="rightFirst"
          rightSideResponsive={true}
          pageTitle="Page title"
          rightSideContent={[<EuiSuperDatePicker onTimeChange={() => {}} />]}
        />
        <EuiPageHeader
          pageTitle="Page title"
          rightSideContent={[
            <EuiButton fill>Add something</EuiButton>,
            <EuiButton>Do something</EuiButton>,
          ]}
        />

        {/* Page title with description */}
        <EuiPageHeader
          pageTitle="Page title"
          description="Page description goes here."
        />
        <EuiPageHeader
          pageTitle="Page title"
          description="Page description goes here."
          rightSideResponsive={true}
          rightSideContent={[<EuiSuperDatePicker onTimeChange={() => {}} />]}
        />
        <EuiPageHeader
          pageTitle="Page title"
          description="Page description goes here."
          leftSideContent={
            <EuiText>
              <p>And some custom content</p>
            </EuiText>
          }
          rightSideContent={[
            <EuiButton fill>Add something</EuiButton>,
            <EuiButton>Do something</EuiButton>,
          ]}
        />

        {/* Tabs */}
        <EuiPageHeader tabs={tabs} />
        <EuiPageHeader
          tabs={tabs}
          rightSideContent={[<EuiSuperDatePicker onTimeChange={() => {}} />]}
        />
        <EuiPageHeader
          tabs={tabs}
          rightSideContent={[
            <EuiButton fill>Add something</EuiButton>,
            <EuiButton>Do something</EuiButton>,
          ]}
        />

        {/* Tabs with description */}
        <EuiPageHeader tabs={tabs} description="Page description goes here." />
        <EuiPageHeader
          tabs={tabs}
          description="Page description goes here."
          rightSideContent={[<EuiSuperDatePicker onTimeChange={() => {}} />]}
        />
        <EuiPageHeader
          tabs={tabs}
          description="Page description goes here."
          leftSideContent={
            <EuiText>
              <p>And some custom content</p>
            </EuiText>
          }
          rightSideContent={[
            <EuiButton fill>Add something</EuiButton>,
            <EuiButton>Do something</EuiButton>,
          ]}
        />

        {/* Page title with tabs */}
        <EuiPageHeader pageTitle="Page title" tabs={tabs} />
        <EuiPageHeader
          pageTitle="Page title"
          tabs={tabs}
          rightSideContent={[<EuiSuperDatePicker onTimeChange={() => {}} />]}
        />
        <EuiPageHeader
          pageTitle="Page title"
          tabs={tabs}
          rightSideContent={[
            <EuiButton fill>Add something</EuiButton>,
            <EuiButton>Do something</EuiButton>,
          ]}
        />

        {/* Title & Tabs with description */}
        <EuiPageHeader
          pageTitle="Page title"
          tabs={tabs}
          description="Page description goes here."
        />
        <EuiPageHeader
          pageTitle="Page title"
          tabs={tabs}
          description="Page description goes here."
          rightSideContent={[<EuiSuperDatePicker onTimeChange={() => {}} />]}
        />
        <EuiPageHeader
          pageTitle="Page title"
          tabs={tabs}
          description="Page description goes here."
          leftSideContent={
            <EuiText>
              <p>And some custom content</p>
            </EuiText>
          }
          rightSideContent={[
            <EuiButton fill>Add something</EuiButton>,
            <EuiButton>Do something</EuiButton>,
          ]}
        />
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>
);
