import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/General/Navbar";
import { Footer } from "../components/General/Footer";
import { Modal, SideModal } from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { Search } from "../components/General/Search";
import { SideNavbar } from "../components/General/SideNavbar";
import { Pathbar } from "../components/General/Pathbar";
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
  const pathbarLinks = useSelector((state) => state.ui.pathbarLinks);
  return (
    <Fragment>
      <Navbar />
     {(pathbarLinks.length!==1 && <Pathbar path={pathbarLinks} />)}
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
