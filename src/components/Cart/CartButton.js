import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const currentQuantity = useSelector((state) => state.cart.totalQunatity);
  console.log(currentQuantity);

  const toggleCartHnadler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHnadler}>
      <span>My Cart</span>
      <span className={classes.badge}>{currentQuantity}</span>
    </button>
  );
};

export default CartButton;
