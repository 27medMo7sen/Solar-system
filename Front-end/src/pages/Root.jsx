import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Slider/Slider";

import { Footer } from "../components/footer/Footer";
import { Modal, SideModal } from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { Search } from "../components/Search/Search";
import { SideNavbar } from "../components/SideNavebar/SideNavbar";
export const Root = () => {
  const dispatch = useDispatch();
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

  return (
    <Fragment>
      <Navbar />
      {searchModalIsVisible && (
        <Modal onClose={closeSearchModal}>
          <Search />
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
