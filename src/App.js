import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Pages/Routes/Routes';

function App() {
  return (
    <div className="bg-gray-100">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
