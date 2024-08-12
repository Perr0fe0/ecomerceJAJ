/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import {create} from 'zustand';
import { ProductType } from '@/types/product';
import { persist, createJSONStorage } from 'zustand/middleware';
import { toast } from '@/components/ui/use-toast'; 


/* Base para el Crud del Carrito*/
interface CartStore {
    items: ProductType[],
    addItem: (data: ProductType) => void
    removeItem: (id: number) => void
    removeAll: () => void

}

export const useCart =create(persist <CartStore>((set, get) => ({
  items: [],
  /*Añadir Item*/  
  addItem:(data: ProductType) => {
    const currentItems = get().items;
    const existingItem = currentItems.find((item) => item.id === data.id);

    {/* Mandar mensaje de error en caso de agregar un producto ya exixstente en tu carrito */}
    if(existingItem){
      return toast({
        title: 'El producto ya esta agregado a tu carrito, baboso',
        variant: 'destructive'
      });

    }
    set({
      items: [...get().items, data]
    });

    toast({
      title:'Producto añadido al carrito!'
    });
  },
  /*Eliminar Item*/  
  removeItem: (id:number) =>{
    set({items:[...get().items.filter((item) => item.id != id)]});

    toast({
      title:'Producto eliminado del carrito!'
    });
  },
  /*Eliminar todo*/  
  removeAll: () => set({items: []})
}),{
  name: 'cart-storage',
  storage: createJSONStorage(() =>localStorage)
}));

