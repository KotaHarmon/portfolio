import { render } from '@testing-library/react';

import GoogleAnalyticsProvider from './GoogleAnalytics.provider';

describe('GoogleAnalyticsProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GoogleAnalyticsProvider />);
    expect(baseElement).toBeTruthy();
  });
});
