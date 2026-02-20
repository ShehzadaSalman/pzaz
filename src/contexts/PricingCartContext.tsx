import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

export interface CartItem {
  name: string;
  price: number;
  type: "module" | "addon" | "bundle";
  icon?: React.ReactNode;
}

interface PricingCartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (name: string) => void;
  toggleItem: (item: CartItem) => void;
  hasItem: (name: string) => boolean;
  clearCart: () => void;
  totalPrice: number;
  itemCount: number;
}

const PricingCartContext = createContext<PricingCartContextType | undefined>(undefined);

export const PricingCartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((item: CartItem) => {
    setItems(prev => {
      if (prev.some(i => i.name === item.name)) return prev;
      return [...prev, item];
    });
  }, []);

  const removeItem = useCallback((name: string) => {
    setItems(prev => prev.filter(i => i.name !== name));
  }, []);

  const toggleItem = useCallback((item: CartItem) => {
    setItems(prev => {
      if (prev.some(i => i.name === item.name)) {
        return prev.filter(i => i.name !== item.name);
      }
      return [...prev, item];
    });
  }, []);

  const hasItem = useCallback((name: string) => {
    return items.some(i => i.name === name);
  }, [items]);

  const clearCart = useCallback(() => setItems([]), []);

  const totalPrice = useMemo(() => items.reduce((sum, i) => sum + i.price, 0), [items]);
  const itemCount = items.length;

  return (
    <PricingCartContext.Provider value={{ items, addItem, removeItem, toggleItem, hasItem, clearCart, totalPrice, itemCount }}>
      {children}
    </PricingCartContext.Provider>
  );
};

export const usePricingCart = () => {
  const ctx = useContext(PricingCartContext);
  if (!ctx) throw new Error("usePricingCart must be used within PricingCartProvider");
  return ctx;
};
