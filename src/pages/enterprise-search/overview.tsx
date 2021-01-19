import React, { useContext, useEffect } from 'react';

import {
  EuiBreadcrumb,
  EuiPageContent,
  EuiPageContentBody,
  EuiButton,
  EuiHorizontalRule,
  EuiText,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiPage,
  EuiPageBody,
} from '@elastic/eui';
import { SolutionCards } from '../../components/kibana/solution_cards';
// @ts-ignore
import appImg from '../../images/App_Search.png';
// @ts-ignore
import workplaceImg from '../../images/Workplace_Search.png';
import { KibanaChromeContext } from '../../components/kibana/layout';
import { KibanaPageHeader } from '../../components/kibana/page/page_header';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Enterprise search',
  },
];

export default () => {
  const setKibanaContext = useContext(KibanaChromeContext);

  useEffect(() => {
    setKibanaContext.setChrome({
      breadcrumbs,
      pageTitle: 'Enterprise search',
    });
  }, [breadcrumbs]);

  return (
    <EuiPage paddingSize="none">
      <EuiPageBody>
        <KibanaPageHeader
          pageTitle="Enterprise Search"
          iconType="logoWorkplaceSearch"
        />
        <EuiPageContent className="euiPageContent--restrictWidth">
          <EuiPageContentBody>
            <EuiFlexGroup>
              <EuiFlexItem grow={false}>
                <EuiCard
                  image={<img alt="" aria-hidden={true} src={appImg} />}
                  title="Elastic App Search"
                  description="Provides user-friendly tools to design a deploy a powerful search to your websites or web/mobile applications."
                  footer={<EuiButton>Launch App Search</EuiButton>}
                  betaBadgeLabel="Platinum"
                />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiCard
                  image={<img alt="" aria-hidden={true} src={workplaceImg} />}
                  title="Elastic Workplace Search"
                  description="Unify all your team's content in one place, with instance connectivity to popular productivity nd collaboration tools."
                  footer={<EuiButton>Launch Workplace Search</EuiButton>}
                  betaBadgeLabel="Platinum"
                />
              </EuiFlexItem>
            </EuiFlexGroup>

            <EuiSpacer size="xl" />

            <EuiHorizontalRule />

            <EuiText textAlign="center">
              <h2>Do more with Elastic</h2>
            </EuiText>

            <EuiSpacer />

            <SolutionCards current="Enterprise search" />
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};
