export const initialState={
    cart:[]
}

export const actionTypes={
    ADD_TO_CART:"ADD_TO_CART",
    REMOVE_ITEM:"REMOVE_ITEM",
    CLEAR_CART:"CLEAR_CART"
}

const reducer =(state,action)=>{
    console.log(action)
    switch (action.type) {
        case "ADD_TO_CART":
        return{
            ...state,
            cart:[...state.cart,action.item],
        };
        case "REMOVE_ITEM":
        const index= state.cart.findIndex((cartItem=> cartItem.id === action.id))
        let newCart =[...state.cart];
        if(index>=0){
            newCart.splice(index,1)
        }else{console.log("no se pudo eliminar el producto")}
    
    return{
        ...state,
        cart:newCart
    }

    case "CLEAR_CART":
        return{
            cart:[]
        }
        default: return state;



            
    }
   
}

export default reducer