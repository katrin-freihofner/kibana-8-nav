import React, { useContext, useEffect } from 'react';
import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFieldSearch,
  EuiFilterButton,
  EuiFilterGroup,
  EuiSpacer,
} from '@elastic/eui';
// @ts-ignore
import canvasImg from '../../images/Canvas - Listing.png';
import { KibanaPage } from '../../components/kibana/page/page';
import { KibanaPageHeaderPrimaryAddButton } from '../../components/kibana/page/page_header';
import { KibanaChromeContext } from '../../components/kibana/layout';
import { EuiPageHeaderProps } from '../../components/eui/page/page_header_shim';

const PAGE_TITLE = 'Canvas';

const tabs: EuiPageHeaderProps['tabs'] = [
  {
    label: 'Workpads',
    isSelected: true,
  },
  {
    label: 'Templates',
  },
];

export default () => {
  const setKibanaContext = useContext(KibanaChromeContext);

  useEffect(() => {
    setKibanaContext.setChrome({
      breadcrumbs: [{ text: PAGE_TITLE }],
      pageTitle: PAGE_TITLE,
    });
  }, []);

  return (
    <KibanaPage
      pageHeader={{
        restrictWidth: true,
        tabs: tabs,
        actionButtons: [
          <KibanaPageHeaderPrimaryAddButton>
            Add workpad
          </KibanaPageHeaderPrimaryAddButton>,
          <EuiButton iconType="importAction">Import workpad</EuiButton>,
        ],
      }}>
      <EuiFlexGroup>
        <EuiFlexItem grow={3}>
          <EuiFieldSearch
            fullWidth
            placeholder="Search for by workpad name..."
          />
        </EuiFlexItem>
        <EuiFlexItem grow={1}>
          <EuiFilterGroup>
            <EuiFilterButton iconType="arrowDown" numFilters={5}>
              Tags
            </EuiFilterButton>
          </EuiFilterGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer />
      <div className="pageScreenshot__TBD">
        <img
          className="pageScreenshot pageScreenshot--responsive"
          alt="Canvas listing page"
          width={1212}
          src={canvasImg}
        />
      </div>
    </KibanaPage>
  );
};
