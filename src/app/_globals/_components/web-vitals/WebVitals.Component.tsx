"use client";
import { useReportWebVitals } from "next/web-vitals";
import ReactGA from "react-ga4";
import { UaEventOptions } from "react-ga4/types/ga4";
import { LoggerService, toBoolean } from "../..";

export function WebVitalsComponent() {
  //#region definitions

  const { info } = new LoggerService(
    toBoolean(process.env.NEXT_PUBLIC_ALLOW_LOGGING)
  );

  //#endregion

  useReportWebVitals((metric) => {
    const _event: UaEventOptions | string = {
      category: "Web Vitals",
      action: metric.name,
      label: metric.id,
      value: Math.round(
        metric.name === "CLS" ? metric.value * 1000 : metric.value
      ),
      nonInteraction: true,
      transport: "beacon",
    };

    info(metric.name, _event);
    ReactGA.event(_event);
  });

  return null;
}

export default WebVitalsComponent;
