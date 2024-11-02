import { render } from "@testing-library/react";

import WebVitalsComponent from "./WebVitals.Component";

describe("WebVitalsComponent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<WebVitalsComponent />);
    expect(baseElement).toBeTruthy();
  });
});
