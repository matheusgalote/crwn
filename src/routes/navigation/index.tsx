import { Outlet, Link } from "react-router-dom";

import "./index.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon";
import CardDropdown from "../../components/cart-dropdown";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
  const { currentUser }: any = useContext(UserContext);
  const { isOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <div>
              <span className="nav-link" onClick={signOutUser}>
                LOGOUT
              </span>
              <div>{currentUser?.email}</div>
            </div>
          ) : (
            <Link to="/auth">Sign-In</Link>
          )}
          <CartIcon />
        </div>
        {isOpen && <CardDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
