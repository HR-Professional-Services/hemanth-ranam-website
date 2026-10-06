"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { getCanonicalPrice } from "@/data/curatedCatalog";
import { CANONICAL_SERVICES_CATALOGUE } from "@/data/pricingData";

export interface CartItem {
  id: string;
  name: string;
  price: number; // Canonical numeric USD price
  priceDisplay: string;
  category: string;
  billingType: "ONE_TIME" | "MONTHLY" | "CUSTOM" | "FREE";
  quantity: number;
  deliveryTime?: string;
  shortDescription?: string;
  stripePaymentLink?: string;
  bookingUrl?: string;
  downloadUrl?: string;
}

export interface CartContextType {
  items: CartItem[];
  cart: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  setQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  totalItems: number;
  subtotal: number;
  subtotalDisplay: string;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "hr_services_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from localStorage once on client
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          // Re-validate canonical prices so client cannot manipulate stored prices
          const validated = parsed.map((item: CartItem) => {
            const canonicalPrice = getCanonicalPrice(item.id);
            if (canonicalPrice !== null) {
              return {
                ...item,
                price: canonicalPrice,
                priceDisplay: `$${canonicalPrice}`,
              };
            }
            // Check canonical catalogue fallback
            const fallback = CANONICAL_SERVICES_CATALOGUE.find((s) => s.serviceId === item.id);
            if (fallback) {
              const numericPrice = parseFloat(fallback.price.replace(/[^0-9.]/g, "")) || 0;
              return {
                ...item,
                price: numericPrice,
                priceDisplay: fallback.price,
              };
            }
            return item;
          });
          queueMicrotask(() => {
            setItems(validated);
            setIsHydrated(true);
          });
        } else {
          queueMicrotask(() => setIsHydrated(true));
        }
      } else {
        queueMicrotask(() => setIsHydrated(true));
      }
    } catch (e) {
      console.warn("Failed to read cart from localStorage:", e);
      queueMicrotask(() => setIsHydrated(true));
    }
  }, []);

  // Sync to localStorage whenever items change after initial hydration
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn("Failed to save cart to localStorage:", e);
    }
  }, [items, isHydrated]);

  const addItem = useCallback(
    (item: Omit<CartItem, "quantity">, quantity = 1) => {
      // Validate canonical price from data layer
      let validPrice = item.price;
      const canonical = getCanonicalPrice(item.id);
      if (canonical !== null) {
        validPrice = canonical;
      } else {
        const fallback = CANONICAL_SERVICES_CATALOGUE.find((s) => s.serviceId === item.id);
        if (fallback) {
          validPrice = parseFloat(fallback.price.replace(/[^0-9.]/g, "")) || item.price;
        }
      }

      setItems((prev) => {
        const existingIndex = prev.findIndex((i) => i.id === item.id);
        if (existingIndex > -1) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + quantity,
          };
          return updated;
        }
        return [
          ...prev,
          {
            ...item,
            price: validPrice,
            quantity: Math.max(1, quantity),
          },
        ];
      });

      // Automatically open cart drawer to confirm action
      setIsCartOpen(true);
    },
    []
  );

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            return quantity > 0 ? { ...item, quantity } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const toggleCart = useCallback(() => setIsCartOpen((prev) => !prev), []);

  const totalCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const subtotalDisplay = useMemo(() => `$${subtotal.toFixed(2)}`, [subtotal]);

  const value = useMemo(
    () => ({
      items,
      cart: items,
      addItem,
      addToCart: addItem,
      removeItem,
      removeFromCart: removeItem,
      updateQuantity,
      setQuantity,
      clearCart,
      totalCount,
      totalItems: totalCount,
      subtotal,
      subtotalDisplay,
      isCartOpen,
      openCart,
      closeCart,
      toggleCart,
    }),
    [
      items,
      addItem,
      removeItem,
      updateQuantity,
      setQuantity,
      clearCart,
      totalCount,
      subtotal,
      subtotalDisplay,
      isCartOpen,
      openCart,
      closeCart,
      toggleCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
