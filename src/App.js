<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getSampleUser, getFolderInfo, getFolderList } from "../api";
import SharedPage from "../pages/SharedPage";
import FolderPage from "../pages/FolderPage";

/* hooks에 따로 분리하기 */
function useUser() {
  const [userInfo, setUserInfo] = useState({ email: "", imgUrl: "" });
  useEffect(() => {
    async function loadData() {
      const result = await getSampleUser();
      if (!result) return;

      const { email, profileImageSource: imgUrl } = result;
      setUserInfo({ email, imgUrl });
    }
    loadData();
  }, []);
  return { userInfo };
}

/* hooks에 따로 분리하기 */
function useFolder() {
  const [folderInfo, setFolderInfo] = useState({});
  useEffect(() => {
    async function loadData() {
      const result = await getFolderInfo();
      if (!result) return;

      const { folder } = result;
      setFolderInfo(folder);
    }
    loadData();
  }, []);
  return { folderInfo };
}

/* hooks에 따로 분리하기 */
function useFolderList() {
  const [folderList, setFolderList] = useState({});
  useEffect(() => {
    async function loadData() {
      const result = await getFolderList(1);
      if (!result) return;

      const { data } = result;
      setFolderList({ data });
    }
    loadData();
  }, []);
  return { folderList };
}
=======
import "sharing/styles/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SharedPage } from "pages/SharedPage";
import { FolderPage } from "pages/FolderPage";
>>>>>>> 80e587fee179c470a31bfec975b5471ba145454a

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
