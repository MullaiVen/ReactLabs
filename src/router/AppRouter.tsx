import App from "../App";
import Cfe from "../components/Cfe";
import { createBrowserRouter } from "react-router-dom";
import Counter from "../components/Counter";
import UserDataForm from "../components/UserDataForm";
import RichTextEditorPage from "../components/RichTextEditorPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Cfe />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/form",
        element: <UserDataForm />,
      },
      {
        path: "/editor",
        element: <RichTextEditorPage />,
      },
    ],
  },
]);

export default AppRouter;
