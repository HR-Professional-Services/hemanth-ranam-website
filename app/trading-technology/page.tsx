import { Metadata } from "next";
import { TradingTechContent } from "./TradingTechContent";

export const metadata: Metadata = {
  title: "Trading Technology & MT5 Automation | Hemanth Ranam",
  description:
    "Institutional-grade Pine Script v6 indicators, MetaTrader 5 (MT5) Expert Advisors, scanners, and custom automated order execution bridges.",
  alternates: {
    canonical: "/trading-technology",
  },
  openGraph: {
    title: "Trading Technology & MT5 Automation | Hemanth Ranam",
    description:
      "Custom indicator development, market structure scanners, and MT5 algorithm bridges.",
    url: "https://app.ranam.workers.dev/trading-technology",
  },
};

export default function TradingTechnologyPage() {
  return <TradingTechContent />;
}
