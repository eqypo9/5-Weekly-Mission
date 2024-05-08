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

function App() {
  const { userInfo } = useUser();
  const { folderInfo } = useFolder();
  const { folderList } = useFolderList();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/shared"
          element={<SharedPage userInfo={userInfo} folderInfo={folderInfo} />}
        />
        <Route
          path="/folder"
          element={<FolderPage userInfo={userInfo} folderList={folderList} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
