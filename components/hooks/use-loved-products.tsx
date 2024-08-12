/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import {create} from 'zustand';
import { ProductType } from '@/types/product';
import { persist, createJSONStorage } from 'zustand/middleware';
import { toast } from '@/components/ui/use-toast'; 

/* Base para el Crud de Productos Favoritos */
interface UseLoveProductsType {
    lovedItems: ProductType[],
    addLovedItem: (data: ProductType) => void
    removeLovedItem: (id: number) => void
    
}

export const useLovedProducts =create(persist <UseLoveProductsType>((set, get) => ({
  lovedItems: [],
  /*Añadir Item*/  
  addLovedItem:(data: ProductType) => {
    const currentLovedItems = get().lovedItems;
    const existingItem = currentLovedItems.find((item) => item.id === data.id);
  
    {/* Mandar mensaje de error en caso de agregar un producto ya exixstente en tu lista de deseados */}
    if(existingItem){
      return toast({
        title: 'El producto ya esta agregado a tu lista de deseados, baboso',
        variant: 'destructive'
      });
  
    }
    set({
      lovedItems: [...get().lovedItems, data]
    });
  
    toast({
      title:'Producto añadido a la lista de deseados!'
    });
  },
  /*Eliminar Item*/  
  removeLovedItem: (id:number) =>{
    set({lovedItems:[...get().lovedItems.filter((item) => item.id != id)]});
  
    toast({
      title:'Producto eliminado de la lista!'
    });
  }
  
}),{
  name: 'loved-products-storage',
  storage: createJSONStorage(() =>localStorage)
}));
  
   


