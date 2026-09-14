import { Metadata } from "next";
import { ProductDetailPage } from "@/components/templates/ProductDetailPage";

export const metadata: Metadata = {
  title: "Inventory OS | Warehouse & Supply Chain Operating System | Hemanth Ranam",
  description:
    "Track stock, multi-warehouse balances, serialized inventory, and purchase orders in real time. Powered by ERPNext and Frappe Framework.",
};

const productData = {
  slug: "inventory-os",
  name: "Inventory OS",
  tagline: "Track stock, purchasing, suppliers and inventory movement.",
  badge: "Supply Chain",
  whatItSolves:
    "Stops stockouts, overstocking, dead inventory, and supplier delays with serialized tracking and automated replenishment triggers.",
  problemDetails: [
    "Spreadsheets showing outdated stock counts leading to accidental overselling.",
    "Manual stock takes taking days and causing severe inventory discrepancies.",
    "Lack of visibility into true landed costs, margins, and supplier price history.",
    "No automated purchase order triggers when inventory drops below safety stock.",
  ],
  solution:
    "Inventory OS gives your warehouse and purchasing team real-time stock balances across all locations, barcode support, batch management, and automated supplier reorders.",
  whoItIsFor:
    "Wholesalers, distributors, manufacturers, hardware providers, and eCommerce operations managing physical inventory.",
  coreModules: [
    "Multi-Warehouse Stock Ledger & Real-Time Balances",
    "Batch & Serial Number Tracking with Barcode Scanning",
    "Automated Reorder Level Calculations & Purchase Requisitions",
    "Supplier Price Comparison & Purchasing Management",
    "Stock Transfer, Delivery Notes & Landed Cost Valuation",
    "Discrepancy & Physical Stock Reconciliation",
  ],
  workflow: [
    "Warehouse stock reaches minimum threshold",
    "Automated Material Request generated for purchasing officer",
    "Purchase Order sent to approved supplier with contracted terms",
    "Goods arrive → scanned and validated against original PO",
    "Landed cost calculated automatically and updated in stock ledger",
  ],
  setupFeeNote: "One-time warehouse hierarchy setup, barcode configuration, and opening stock balance audit.",
  monthlyPlanNote: "Monthly stock valuation integrity checks, SKU catalog maintenance, and cloud performance monitoring.",
  whatsIncluded: [
    "Warehouse and bin location setup",
    "Supplier catalog and contracted price lists",
    "Stock alert triggers and reorder thresholds",
    "Delivery note and pick list templates",
    "Warehouse staff mobile scanner training",
  ],
  supportLevel: "Standard SLA, monthly reconciliation check, and daily stock ledger data backups.",
  techStack: ["ERPNext Stock", "Barcode Integration", "Inventory Valuation Engine", "Warehouse Management"],
  faqs: [
    {
      question: "Can Inventory OS handle multiple warehouses and retail locations?",
      answer: "Yes. ERPNext supports unlimited warehouse hierarchies, bin locations, and stock transfers between branches with automated transit ledger tracking.",
    },
    {
      question: "Does it support barcode and QR code scanners?",
      answer: "Yes, you can scan barcodes using standard handheld USB/Bluetooth scanners or mobile devices directly within the inventory interface.",
    },
    {
      question: "Can we track batch expiry dates and serial numbers?",
      answer: "Yes. Full serial number and batch-level tracking is built-in with automatic FIFO (First-In, First-Out) or Moving Average inventory valuation.",
    },
  ],
};

export default function InventoryOsPage() {
  return <ProductDetailPage product={productData} />;
}
