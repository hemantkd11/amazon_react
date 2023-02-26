
export const initialState={
    basket:[],
    user:null,
    address:{}
};
export const  getBasketTotal = (basket) => basket.reduce((total,items)=> items.price + total,0)



const reducer = (state=initialState,action)=>{
    console.log('action',action)

    switch(action.type){



             case 'Add_to_basket':
                return {
                     ...state,
                     basket:[...state.basket,action.items]
               }



            
            case "REMOVE_ITEM":
               
                const index = state.basket.findIndex(
                     (basketItem)=>basketItem.id === action.id
                )

                let newBasket = [...state.basket];
                if(index >= 0){
                     newBasket.splice(index,1)
                }else{
                    console.warn(`cant remove produnt ${index}`)
                }

                return {
                     ...state,
                     basket: newBasket
                }
                case "Set_address":
                    return {
                     ...state,
                     address:{...action.items}
                    }

                    
            default :
            return state
    }
}
export default reducer