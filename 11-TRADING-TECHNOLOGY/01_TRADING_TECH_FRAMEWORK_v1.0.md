# Hemanth Ranam — Professional Services OS
## 11-TRADING-TECHNOLOGY / 01_TRADING_TECH_FRAMEWORK_v1.0

| Metadata | Details |
|---|---|
| **Document Title** | Trading Technology Engineering & Compliance Framework |
| **Document ID** | `HR-TRD-FRAMEWORK-001` |
| **Version** | `v1.0` |
| **Status** | `APPROVED / PRODUCTION ACTIVE` |
| **Owner** | Hemanth Ranam |

---

### 1. Mandatory Regulatory & Educational Disclaimer
Every trading technology product, webpage, manual, and code header MUST visibly display this exact wording:

> **Educational & Analytical Tool Disclaimer:** All algorithms, indicators, and software provided are for educational and analytical purposes only. They do not constitute financial, investment, or trading advice. Past performance does not guarantee future results.

### Prohibited Marketing Language:
- ❌ "Guaranteed profits"
- ❌ "Risk-free trading"
- ❌ "Guaranteed win rate"
- ❌ "Passive income system"
- ❌ "Holy grail indicator"

### Permitted Descriptive Language:
- ✅ "Rule-based visual technical indicator"
- ✅ "Non-repainting mathematical calculation"
- ✅ "Quantitative historical backtest simulation"
- ✅ "Execution bridge connecting TradingView webhooks to MT5 terminal"
- ✅ "Automated risk management parameter controls"

---

### 2. Supported Technology Stacks
1. **Pine Script v5**: Native TradingView indicators and strategy scripts.
2. **MetaTrader 5 (MQL5)**: Native custom indicators (`.mq5`/`.ex5`), multi-pair dashboards, and automated Expert Advisors (EAs).
3. **Telegram Alert Bridges**: Native WebRequest HTTP communication dispatching formatted trade cards directly to private channels.
4. **Python Automated Execution Engines**: Serverless Flask/FastAPI bridges linking TradingView alerts to broker REST APIs.
