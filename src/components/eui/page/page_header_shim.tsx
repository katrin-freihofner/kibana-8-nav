import React, { FunctionComponent, ReactNode } from 'react';
import {
  EuiPageHeader as EuiPageHeaderOld,
  EuiPageHeaderSection,
  IconType,
  EuiTabsProps,
  EuiTab,
  EuiIcon,
  EuiText,
  EuiTabs,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPageContentHeaderProps,
  EuiTitle,
  EuiSpacer,
} from '@elastic/eui';
import classNames from 'classnames';

export const ALIGN_ITEMS = ['top', 'bottom', 'middle'] as const;
export const RESPONSIVE_ORDER = ['leftFirst', 'rightFirst'] as const;

// TODO: EXPORT TAB PROPS
type EuiTabProps = React.ComponentProps<typeof EuiTab>;

export type EuiPageHeaderTitle = {
  /**
   * Wrapped in an `H1` so choose appropriately
   */
  pageTitle?: ReactNode;
  /**
   * Optional icon to place to the left of the title
   */
  iconType?: IconType;
};

export type EuiPageHeaderTabs = {
  /**
   * In-app navigation presented as large borderless tabs
   */
  tabs?: (EuiTabProps & {
    /**
     * Visible text of the tab
     */
    label: string;
  })[];
  /**
   * Any extras to apply to the outer tabs container
   */
  tabsProps?: Omit<EuiTabsProps, 'size' | 'expand' | 'display'>;
};

/**
 * The left side can either be a title with optional description and/or icon;
 * Or a list of tabs,
 * Or a custom node
 */
type EuiPageHeaderLeft = EuiPageHeaderTitle &
  EuiPageHeaderTabs & {
    /**
     * Pass custom content to the left side with `leftSideContent`
     */
    leftSideContent?: ReactNode;
    /**
     * Position is dependent on existing with a `pageTitle` or `tabs`
     * Automatically get wrapped in a single paragraph tag inside an EuiText block
     */
    description?: string | ReactNode;
  };

export type EuiPageHeaderProps = EuiPageContentHeaderProps &
  EuiPageHeaderLeft & {
    /**
     * Pass custom an array of content to this side usually up to 3 buttons.
     * The first button should be primary, usually with `fill` and will be visually displayed as the last item
     */
    rightSideContent?: ReactNode[];
    /**
     * (?) Should we allow custom values too?
     */
    restrictWidth?: boolean;
    /**
     * Vertical alignment of the left and right side content;
     * Default is `top` or dependendent on content
     */
    alignItems?: typeof ALIGN_ITEMS[number];
    /**
     * Which content to display first when on smaller screens
     */
    responsiveOrder?: typeof RESPONSIVE_ORDER[number];
    /**
     * Whether the array of right side items should all break to their own line on small screens
     */
    rightSideResponsive?: boolean;
  };

export const EuiPageHeader: FunctionComponent<EuiPageHeaderProps> = ({
  pageTitle,
  iconType,
  description,
  tabs,
  tabsProps,
  className,
  leftSideContent,
  rightSideContent,
  restrictWidth = false,
  alignItems = 'top',
  responsiveOrder = 'leftFirst',
  rightSideResponsive = false,
  children,
}) => {
  const classes = classNames(
    {
      'euiPageHeader--restrictWidth': restrictWidth,
      'euiPageHeader--tabsAtBottom': pageTitle && tabs,
      'euiPageHeader--responsiveReverse': responsiveOrder === 'rightFirst',
    },
    `euiPageHeader--${alignItems}`,
    className
  );

  if (children) {
    return <EuiPageHeaderOld className={classes}>{children}</EuiPageHeaderOld>;
  }

  let descriptionNode;
  if (description) {
    descriptionNode = (
      <>
        <EuiSpacer />
        <EuiText>
          <p>{description}</p>
        </EuiText>
      </>
    );
  }

  let pageTitleNode;
  if (pageTitle) {
    const icon = iconType ? (
      <EuiIcon className="euiPageHeader__titleIcon" type={iconType} size="xl" />
    ) : undefined;

    pageTitleNode = (
      <EuiTitle size="l">
        <h1>
          {icon}
          {pageTitle}
        </h1>
      </EuiTitle>
    );
  }

  let tabsNode;
  if (tabs) {
    const renderTabs = () => {
      return tabs.map((tab, index) => {
        const { label, ...tabRest } = tab;
        return (
          <EuiTab key={index} {...tabRest}>
            {label}
          </EuiTab>
        );
      });
    };

    tabsNode = (
      <>
        {pageTitleNode && <EuiSpacer />}
        <EuiTabs {...tabsProps} display="condensed">
          {renderTabs()}
        </EuiTabs>
      </>
    );
  }

  let leftSideContentNode = leftSideContent;
  if (leftSideContent && (tabsNode || pageTitleNode)) {
    leftSideContentNode = (
      <>
        <EuiSpacer />
        {leftSideContent}
      </>
    );
  }

  let leftSideOrder;
  if (tabsNode && !pageTitleNode) {
    leftSideOrder = [tabsNode, leftSideContentNode, descriptionNode];
  } else {
    leftSideOrder = [
      pageTitleNode,
      descriptionNode,
      leftSideContentNode,
      tabsNode,
    ];
  }

  let rightSideNode;
  if (rightSideContent && rightSideContent.length) {
    const wrapWithFlex = () => {
      return rightSideContent.map((item, index) => {
        return (
          <EuiFlexItem grow={false} key={index}>
            {item}
          </EuiFlexItem>
        );
      });
    };

    rightSideNode = (
      <EuiPageHeaderSection>
        <EuiFlexGroup
          className="euiPageHeader__rightSideContent"
          wrap
          responsive={rightSideResponsive}>
          {wrapWithFlex()}
        </EuiFlexGroup>
      </EuiPageHeaderSection>
    );
  }

  return (
    <EuiPageHeaderOld className={classes}>
      <EuiPageHeaderSection>{leftSideOrder}</EuiPageHeaderSection>
      {rightSideNode}
    </EuiPageHeaderOld>
  );
};
