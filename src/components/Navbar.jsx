// import React, { useContext } from "react";
import { useValue } from "../itemContext";
import styles from "../styles/Total.module.css";
import CartModal from "./CartModal";

// not rquired after using custom hook
// import { itemContext } from "../itemContext";


function Navbar() {

  
// const value = useContext(itemContext);
// after custom hook
const {total, item, clear, toggle} = useValue();

  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>

      <div className={styles.buttonWrapper}>
      <button className={styles.button} onClick={toggle}>Cart</button>
        <button className={styles.button} onClick={clear}> Reset</button>
      </div>
    </div>
  );
}

export default Navbar;
