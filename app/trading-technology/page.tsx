import { Metadata } from "next";
import { ProductDetailPage } from "@/components/templates/ProductDetailPage";

export const metadata: Metadata = {
  title: "Trading Technology Suite | Pine Script v5 & MT5 Systems | Hemanth Ranam",
  description:
    "Systematic rule-based trading software for TradingView and MetaTrader 5 (MT5). Indicators, backtestable strategies, multi-symbol scanners, and Telegram alert engines.",
};

const productData = {
  slug: "trading-technology",
  name: "Trading Technology Suite",
  tagline: "Institutional-grade tools for TradingView and MetaTrader 5.",
  badge: "Systematic Engineering",
  whatItSolves:
    "Solves subjective chart interpretation, terminal lag across watchlists, emotional execution errors, and missed alerts with mathematical, rule-based software.",
  problemDetails: [
    "Repainting indicators that display false signals after historical candles close.",
    "Manual scanning across 28+ pairs leading to screen fatigue and missed high-probability setups.",
    "Emotional execution errors and lack of disciplined position sizing under volatile conditions.",
    "Unreliable signal delivery or delayed notifications during fast-moving economic news.",
  ],
  solution:
    "We engineer 100% non-repainting Pine Script v5 indicators, backtestable strategies, native MQL5 multi-pair dashboard scanners, automated risk managers, and Telegram alert webhooks.",
  whoItIsFor:
    "Quantitative traders, proprietary trading desks, asset managers, and serious retail operators trading Gold (XAUUSD), Silver, US500, USTEC, and FX.",
  coreModules: [
    "TradingView Pine Script v5 Custom Indicators",
    "Backtestable TradingView Strategy Engines",
    "MT5 Multi-Symbol Market Dashboard Scanners",
    "MT5 Expert Advisors (EAs) with Drawdown Guardians",
    "Sub-Second Telegram Webhook Alert Broadcast Systems",
    "Python MetaTrader 5 Real-Time Tick Ingestion Pipelines",
  ],
  workflow: [
    "Trading rules and mathematical conditions defined and locked",
    "Algorithm coded with strict non-repainting execution parameters",
    "Historical backtest executed with simulated slippage and realistic commissions",
    "Live paper-trading verification on MetaTrader 5 / TradingView",
    "Production deployment to 24/5 cloud VPS with heartbeat monitoring",
  ],
  setupFeeNote: "Milestone-based development fee based on logic complexity, indicators, and platform scope.",
  monthlyPlanNote: "Optional monthly VPS hosting, algorithm monitoring, and market parameter recalibration.",
  whatsIncluded: [
    "Clean, fully documented Pine Script v5 or MQL5 source code",
    "Compiled .ex5 binaries for immediate MetaTrader 5 execution",
    "Comprehensive setup manual and parameter configuration guide",
    "30-day post-delivery bug fix and parameter tuning warranty",
    "Telegram bot token and webhook configuration support",
  ],
  supportLevel: "Dedicated technical assistance for terminal installation, chart template loading, and VPS configuration.",
  techStack: ["Pine Script v5", "MQL5 (MetaTrader 5)", "Python MT5 Library", "Telegram Bot API", "Windows Cloud VPS"],
  faqs: [
    {
      question: "Do your indicators repaint?",
      answer: "Never. All indicators are engineered with strict bar-state confirmation logic to guarantee signals never alter retroactively.",
    },
    {
      question: "Do you provide investment advice or financial guarantees?",
      answer: "No. We are strictly software engineers and technology developers. All code is built for mathematical analysis and execution automation.",
    },
  ],
};

export default function TradingTechnologyPage() {
  return <ProductDetailPage product={productData} />;
}
