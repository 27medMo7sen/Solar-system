import { Fragment, useState, useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/General/Navbar";
import { Footer } from "../components/General/Footer";
import { Modal, SideModal } from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { Search } from "../components/General/Search";
import { SideNavbar } from "../components/General/SideNavbar";
import { Pathbar } from "../components/General/Pathbar";
import { cartActions } from "../store/cart-slice";
import { CartMain } from "../components/General/Cart/CartMain";
import LoadingBar from "react-top-loading-bar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3000/api";
export const Root = () => {
  const dispatch = useDispatch();
  const pathbarLinks = useSelector((state) => state.ui.pathbarLinks);
  const closeSideModal = () => {
    dispatch(uiActions.toggleSideModal());
  };
  const sideModalIsVisible = useSelector(
    (state) => state.ui.sideModalIsVisible
  );
  const closeSearchModal = () => {
    dispatch(uiActions.toggleSearchModal());
  };
  const searchModalIsVisible = useSelector(
    (state) => state.ui.searchModalIsVisible
  );
  const [progress, setProgress] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "submitting") {
      setProgress(25);
    } else if (navigation.state === "loading") {
      setProgress(50);
    } else setProgress(100);
  }, [navigation.state]);
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const isCartVisible = useSelector((state) => state.cart.isCartVisible);
  const toggleCart = () => {
    dispatch(cartActions.toggleCart());
  };
  return (
    <Fragment>
      <LoadingBar
        color="#F98106"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
 
      <Navbar />
      {(pathbarLinks.length>1 && <Pathbar path={pathbarLinks} />)}
      {searchModalIsVisible && (
        <Modal onClose={closeSearchModal}>
          <Search />
        </Modal>
      )}
      {isCartVisible && (
        <Modal onClose={toggleCart}>
         <CartMain/>
        </Modal>
      )}
      {sideModalIsVisible && (
        <SideModal onClose={closeSideModal}>
          <div className="flex justify-center font-bold items-center h-10 border-b-4">
            Menu
          </div>
          <SideNavbar /> 
        </SideModal>
      )}
        <Outlet />
      <Footer />
    </Fragment>
  );
};
