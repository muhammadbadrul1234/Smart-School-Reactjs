import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux'
import { store } from './rtkq/app/store'
import { CoursesProvider } from './components/Courses/context/course_context';
import { CartProvider } from './components/Courses/context/cart_context';
const queryClient = new QueryClient();



ReactDOM.render(
  <React.StrictMode>
    <CoursesProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
          </Provider>
        </QueryClientProvider>
      </CartProvider>
    </CoursesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// const queryClient = new QueryClient();
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   <QueryClientProvider client={queryClient}>
//     <Provider store={store}>
//     <App /> 
//     </Provider>
//   </QueryClientProvider>
//   </React.StrictMode>
// );

// export default root
//