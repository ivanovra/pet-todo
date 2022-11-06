import "./Styles.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layout";
import NewTaskPage from "../Tasks/NewTaskPage";
import links from "../../components/reducers/links";
import { linkSync } from "fs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={links.home.url} element={<Layout />}>
          <Route path={links.create_task.url} element={<NewTaskPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
