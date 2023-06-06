import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen/index";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore({ reducer: { who: whoReducer } });

function Tuiter() {
  return (
    <div>
      <Provider store={store}>
        <Nav />
        <div className="row">
          <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-3">
            <NavigationSidebar />
          </div>
          <div className="col-xl-7 col-lg-8 col-md-10 col-sm-10 col-9">
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </div>
          <div className="d-none d-lg-block d-xl-block d-xxl-block col-xl-3 col-lg-3">
            <WhoToFollowList />
          </div>
        </div>
      </Provider>
    </div>
  );
}
export default Tuiter;
