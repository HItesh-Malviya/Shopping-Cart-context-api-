import { createContext, useState, useContext } from "react";
import CartModal from "./components/CartModal";

export const itemContext = createContext();

export function useValue() {
    const value = useContext(itemContext);
    return value;
}

export default function CustomItemContext({ children }) {

    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [ showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);

    const handleAdd = (prod) => {
// by this we check the index item is present or not
        const index = cart.findIndex((item) => item.id === prod.id)

        if( index === -1){
            setCart([...cart, {...prod, qty:1}])
            console.log(cart)
            setTotal( total + prod.price)
        }
        else {
            cart[index].qty++;
            setCart(cart)
            setTotal(total + cart[index].price)
        }

        setItem(item + 1)


        
    };
    const handleRemove = (id) => {

        const index = cart.findIndex((item) => item.id === id)

        if( index !== -1){
            cart[index].qty--;
            setItem(item - 1)
            setTotal(total - cart[index].price)

            if(cart[index].qty == 0){
                cart.splice(index, 1)
            }
            
           
        }
        
       
        setCart(cart)
       

        // if (total <= 0) {
        //     return;
        // }
        // setTotal((prevState) => prevState - price)
        // setItem( item - 1)
    };

    const clear =() => {
        setTotal(0)

        setItem(0)
        setCart([]);
    }

    const toggle =() => {
        setShowCart(!showCart)
    }

    return (
        <itemContext.Provider value={{ total, item, handleAdd, handleRemove, clear, toggle , cart}}>
            {showCart && <CartModal />}
            {children}

        </itemContext.Provider>

    );

};