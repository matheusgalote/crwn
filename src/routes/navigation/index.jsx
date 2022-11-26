import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./index.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon";
import CardDropdown from "../../components/cart-dropdown";
import { selectCurrentUser } from '../../store/user/user.selector'
import { cartSelector } from "../../store/cart/cart.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isOpen } = useSelector(cartSelector);

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
