import { createSlice, current } from "@reduxjs/toolkit";
import productsData from '../data/products'
import { toast } from "react-toastify";
const initialState = {
    products: productsData,
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart:(state,action)=>{
            console.log(action.payload)

            const product=state.products.find(p=>p.id == action.payload)
            console.log(product)
            if(product){
            const isItemExist=state.cartItems.find(p=>p.id == action.payload)
            if(isItemExist) {
                isItemExist.qty+=1 
                toast.info('Item already present in the cart',{
                    position:'top-center',
                    
                })
            } else{
                state.cartItems.push({...product,qty:1})
                toast.success('Added To Cart!',{
                    position:'top-center',
                    delay:'2sec'
                    
                })

            }
            }

        },

        increaseQty: (state, action) => {

            const currItem = state.cartItems.find(p => p.id == action.payload)
            if(currItem){
                currItem.qty+=1
            }


        },

        decreaseQty:(state,action)=>{

            const currItem = state.cartItems.find(p => p.id == action.payload)
            if(currItem && currItem.qty>1){
                currItem.qty-=1
            }else if(currItem){
                state.cartItems=state.cartItems.filter(p => p.id !=action.payload)
                toast.info('Product Removed!',{
                    position:'top-center',
                    
                })
            }

        }

    }
})

export const { addToCart,increaseQty,decreaseQty } = cartSlice.actions
export default cartSlice.reducer