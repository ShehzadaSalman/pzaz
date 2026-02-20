import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

export interface CartModule {
  name: string;
  price: number;
  icon?: React.ReactNode;
}

export interface CartPackage {
  id: string;
  name: string;
  price: number;
  type: "package" | "custom";
  modules: CartModule[];
}

interface PricingCartContextType {
  packages: CartPackage[];
  addPackage: (pkg: CartPackage) => void;
  removePackage: (id: string) => void;
  hasPackage: (id: string) => boolean;
  // Custom package helpers
  addCustomModule: (module: CartModule) => void;
  removeCustomModule: (name: string) => void;
  hasCustomModule: (name: string) => boolean;
  customPackage: CartPackage | null;
  clearCart: () => void;
  totalPrice: number;
  totalModuleCount: number;
}

const PricingCartContext = createContext<PricingCartContextType | undefined>(undefined);

export const PricingCartProvider = ({ children }: { children: React.ReactNode }) => {
  const [packages, setPackages] = useState<CartPackage[]>([]);

  const addPackage = useCallback((pkg: CartPackage) => {
    setPackages(prev => {
      if (prev.some(p => p.id === pkg.id)) return prev;
      return [...prev, pkg];
    });
  }, []);

  const removePackage = useCallback((id: string) => {
    setPackages(prev => prev.filter(p => p.id !== id));
  }, []);

  const hasPackage = useCallback((id: string) => {
    return packages.some(p => p.id === id);
  }, [packages]);

  // Custom package management
  const customPackage = useMemo(() => packages.find(p => p.type === "custom") || null, [packages]);

  const addCustomModule = useCallback((module: CartModule) => {
    setPackages(prev => {
      const existing = prev.find(p => p.type === "custom");
      if (existing) {
        if (existing.modules.some(m => m.name === module.name)) return prev;
        return prev.map(p =>
          p.type === "custom"
            ? { ...p, modules: [...p.modules, module], price: p.price + module.price }
            : p
        );
      }
      return [...prev, {
        id: "custom",
        name: "Custom Package",
        price: module.price,
        type: "custom" as const,
        modules: [module],
      }];
    });
  }, []);

  const removeCustomModule = useCallback((name: string) => {
    setPackages(prev => {
      const existing = prev.find(p => p.type === "custom");
      if (!existing) return prev;
      const updatedModules = existing.modules.filter(m => m.name !== name);
      if (updatedModules.length === 0) {
        return prev.filter(p => p.type !== "custom");
      }
      const removedModule = existing.modules.find(m => m.name === name);
      return prev.map(p =>
        p.type === "custom"
          ? { ...p, modules: updatedModules, price: p.price - (removedModule?.price || 0) }
          : p
      );
    });
  }, []);

  const hasCustomModule = useCallback((name: string) => {
    const custom = packages.find(p => p.type === "custom");
    return custom ? custom.modules.some(m => m.name === name) : false;
  }, [packages]);

  const clearCart = useCallback(() => setPackages([]), []);

  const totalPrice = useMemo(() => packages.reduce((sum, p) => sum + p.price, 0), [packages]);
  const totalModuleCount = useMemo(() => packages.reduce((sum, p) => sum + p.modules.length, 0), [packages]);

  return (
    <PricingCartContext.Provider value={{
      packages, addPackage, removePackage, hasPackage,
      addCustomModule, removeCustomModule, hasCustomModule, customPackage,
      clearCart, totalPrice, totalModuleCount
    }}>
      {children}
    </PricingCartContext.Provider>
  );
};

export const usePricingCart = () => {
  const ctx = useContext(PricingCartContext);
  if (!ctx) throw new Error("usePricingCart must be used within PricingCartProvider");
  return ctx;
};
