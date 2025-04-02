"use client"
import React, { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, ChevronDown, Filter, Heart, ShoppingBag, X } from "lucide-react";
import BrailleText from "@/components/braille-text";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface Filters {
  availability: string;
  categories: string[];
}

export default function ShopPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [activeFilters, setActiveFilters] = useState<Filters>({
    availability: "all",
    categories: [],
  });
  
  // Sample product data
  const products = [
    { id: 1, image: "/images/tote-bag.png", name: "MI.MOO Tote Bag", price: "€25.00", category: "tote-bags", inStock: true },
    { id: 2, image: "/images/tshirt-collab.png", name: "ACAPO Collaboration Tee", price: "€35.00", category: "collaborations", inStock: true },
    { id: 3, image: "/images/models-collage.png", name: "Classic MI.MOO Tee", price: "€30.00", category: "t-shirts", inStock: true },
    { id: 4, image: "/images/packaging.png", name: "Gift Box Experience", price: "€45.00", category: "gift-sets", inStock: false },
    { id: 5, image: "/images/tote-bag.png", name: "Limited Edition Tote", price: "€28.00", category: "tote-bags", inStock: false },
    { id: 6, image: "/images/tshirt-collab.png", name: "Green Statement Tee", price: "€32.00", category: "t-shirts", inStock: true },
    { id: 7, image: "/images/models-collage.png", name: "Braille Pattern Tee", price: "€30.00", category: "t-shirts", inStock: true },
    { id: 8, image: "/images/packaging.png", name: "Premium Gift Set", price: "€50.00", category: "gift-sets", inStock: false },
  ];

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    // Filter by price
    const productPrice = parseFloat(product.price.replace('€', ''));
    if (productPrice < priceRange[0] || productPrice > priceRange[1]) {
      return false;
    }
    
    // Filter by availability
    if (activeFilters.availability === "in-stock" && !product.inStock) {
      return false;
    }
    if (activeFilters.availability === "pre-order" && product.inStock) {
      return false;
    }
    
    // Filter by category
    if (activeFilters.categories.length > 0 && !activeFilters.categories.includes(product.category)) {
      return false;
    }
    
    return true;
  });

  // Categories for filtering
  const categories = [
    { id: "t-shirts", name: "T-shirts" },
    { id: "tote-bags", name: "Tote Bags" },
    { id: "gift-sets", name: "Gift Sets" },
    { id: "collaborations", name: "Collaborations" },
  ];

  // Toggle category in filter
  const toggleCategory = (categoryId: string) => {
    setActiveFilters(prev => {
      const current = [...prev.categories];
      if (current.includes(categoryId)) {
        return { ...prev, categories: current.filter(id => id !== categoryId) };
      } else {
        return { ...prev, categories: [...current, categoryId] };
      }
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setPriceRange([0, 50]);
    setActiveFilters({
      availability: "all",
      categories: [],
    });
  };

  // Count active filters
  const activeFilterCount = 
    (activeFilters.availability !== "all" ? 1 : 0) + 
    activeFilters.categories.length + 
    (priceRange[0] > 0 || priceRange[1] < 50 ? 1 : 0);

  // Render the filter sheet for all screen sizes
  const renderFilters = () => (
    <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" /> 
          Filtros
          {activeFilterCount > 0 && (
            <span className="bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:max-w-md">
        <ScrollArea className="h-full px-1">
          <SheetHeader className="text-left pb-4 flex justify-between items-center">
            <SheetTitle className="text-xl font-bold">Filtros</SheetTitle>
            <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 text-xs">
              Limpar tudo
            </Button>
          </SheetHeader>
          
          <FilterContent 
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
            categories={categories}
            toggleCategory={toggleCategory}
          />
          
          <div className="pt-6 sticky bottom-0 bg-white pb-4">
            <Button 
              className="w-full bg-orange-500 hover:bg-orange-600"
              onClick={() => setFilterOpen(false)}
            >
              Aplicar Filtros
            </Button>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );

  return (
    <div className="container px-4 md:px-6 py-12">
      {/* Page header with filter button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter">Loja</h1>
        {renderFilters()}
      </div>

      {/* Active filter pills */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {priceRange[0] > 0 || priceRange[1] < 50 ? (
            <div className="bg-stone-100 rounded-full px-3 py-1 text-sm flex items-center gap-1">
              <span>€{priceRange[0]} - €{priceRange[1]}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-4 w-4 p-0" 
                onClick={() => setPriceRange([0, 50])}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove price filter</span>
              </Button>
            </div>
          ) : null}
          
          {activeFilters.availability !== "all" && (
            <div className="bg-stone-100 rounded-full px-3 py-1 text-sm flex items-center gap-1">
              <span>
                {activeFilters.availability === "in-stock" ? "Em Stock" : "Pré-venda"}
              </span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-4 w-4 p-0" 
                onClick={() => setActiveFilters({...activeFilters, availability: "all"})}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove availability filter</span>
              </Button>
            </div>
          )}
          
          {activeFilters.categories.map(cat => {
            const category = categories.find(c => c.id === cat);
            return (
              <div key={cat} className="bg-stone-100 rounded-full px-3 py-1 text-sm flex items-center gap-1">
                <span>{category?.name}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-4 w-4 p-0" 
                  onClick={() => toggleCategory(cat)}
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">Remove category filter</span>
                </Button>
              </div>
            );
          })}
          
          <Button 
            variant="ghost" 
            className="text-sm h-6 px-2 text-muted-foreground hover:text-orange-500"
            onClick={clearFilters}
          >
            Limpar todos
          </Button>
        </div>
      )}

      {/* Product grid with filtered products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
          <div key={product.id} className="min-w-[250px] max-w-sm group">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-2">
                  <button className="rounded-full h-10 w-10 bg-white shadow-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span className="sr-only">Add to wishlist</span>
                  </button>
                  <button className="rounded-full h-10 w-10 bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <span className="sr-only">Add to cart</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="font-medium hover:underline cursor-pointer">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground">{product.price}</p>
            </div>
          </div>
        ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-100 mb-4">
              <Filter className="h-6 w-6 text-stone-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">Nenhum produto encontrado</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Nenhum produto corresponde aos filtros selecionados. Tente ajustar os filtros para ver mais produtos.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={clearFilters}
            >
              Limpar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

// Reusable filter content component for both mobile and desktop
function FilterContent({ 
  priceRange, 
  setPriceRange, 
  activeFilters, 
  setActiveFilters, 
  categories, 
  toggleCategory,
}: {
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  activeFilters: Filters;
  setActiveFilters: (value: Filters) => void;
  categories: { id: string; name: string; }[];
  toggleCategory: (id: string) => void;
}) {
  return (
    <div className="space-y-6">
      {/* Price Range Filter */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium">Preço</h3>
          <BrailleText text="Preco" className="text-xs text-orange-500" />
        </div>
        
        <div className="pt-2 px-1">
          <Slider
            defaultValue={[0, 50]}
            max={50}
            step={1}
            value={priceRange}
            onValueChange={setPriceRange}
            className="mt-6"
          />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>€{priceRange[0]}</span>
            <span>€{priceRange[1]}</span>
          </div>
        </div>
      </div>
      
      <Separator />
      
      {/* Availability Filter */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium">Disponibilidade</h3>
          <BrailleText text="Disp" className="text-xs text-orange-500" />
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="availability"
              checked={activeFilters.availability === "all"}
              onChange={() => setActiveFilters({...activeFilters, availability: "all"})}
              className="hidden"
            />
            <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${
              activeFilters.availability === "all" 
                ? "border-orange-500 bg-orange-50" 
                : "border-stone-300"
            }`}>
              {activeFilters.availability === "all" && (
                <div className="w-2 h-2 rounded-full bg-orange-500" />
              )}
            </div>
            <span className="text-sm">Todos</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="availability"
              checked={activeFilters.availability === "in-stock"}
              onChange={() => setActiveFilters({...activeFilters, availability: "in-stock"})}
              className="hidden"
            />
            <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${
              activeFilters.availability === "in-stock" 
                ? "border-orange-500 bg-orange-50" 
                : "border-stone-300"
            }`}>
              {activeFilters.availability === "in-stock" && (
                <div className="w-2 h-2 rounded-full bg-orange-500" />
              )}
            </div>
            <span className="text-sm">Em Stock</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="availability"
              checked={activeFilters.availability === "pre-order"}
              onChange={() => setActiveFilters({...activeFilters, availability: "pre-order"})}
              className="hidden"
            />
            <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${
              activeFilters.availability === "pre-order" 
                ? "border-orange-500 bg-orange-50" 
                : "border-stone-300"
            }`}>
              {activeFilters.availability === "pre-order" && (
                <div className="w-2 h-2 rounded-full bg-orange-500" />
              )}
            </div>
            <span className="text-sm">Pré-venda</span>
          </label>
        </div>
      </div>
      
      <Separator />
      
      {/* Categories Filter */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium">Categorias</h3>
          <BrailleText text="Cat" className="text-xs text-orange-500" />
        </div>
        
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={activeFilters.categories.includes(category.id)}
                onChange={() => toggleCategory(category.id)}
                className="hidden"
              />
              <div className={`w-4 h-4 rounded-sm flex items-center justify-center border ${
                activeFilters.categories.includes(category.id) 
                  ? "border-orange-500 bg-orange-50" 
                  : "border-stone-300"
              }`}>
                {activeFilters.categories.includes(category.id) && (
                  <CheckCircle className="h-3 w-3 text-orange-500" />
                )}
              </div>
              <span className="text-sm">{category.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}