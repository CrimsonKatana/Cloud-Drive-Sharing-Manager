import React from 'react';
import ReactDOM from 'react-dom/client';
import{ThemeProvider} from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline";
import './index.css';
import App from './App';
import {theme} from "./theme"
import reportWebVitals from './reportWebVitals';
import AuthContext from './auth/auth';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RecoilRoot>
          <ThemeProvider theme={theme}>
              <CssBaseline/>
                <AuthContext>
                    <App/>
                </AuthContext>
          </ThemeProvider>
      </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();