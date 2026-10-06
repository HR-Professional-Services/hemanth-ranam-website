"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { TechBackground3D } from "@/components/ui/TechBackground3D";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <TechBackground3D />
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
