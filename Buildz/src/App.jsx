import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<RootLayout />}></Route>)
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
