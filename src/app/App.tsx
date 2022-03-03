import React, { Suspense } from 'react';
import {
  Routes, Route, BrowserRouter, Link,
} from 'react-router-dom';
import {
  createStyles, makeStyles,
} from '@mui/styles';
import Typography from '@mui/material/Typography';
import routes from '../routes/routes';
import Header from '../header/Header';



// function App() {
const App: React.FC<Props> = ({ position }) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header one='turtle' />
        <div className="app">
          <Routes>
            {routes.map(({
              path,
              element: Component,
            }) => ((
              <Route
                path={path}
                element={<Component/>}
                key={path}
              />
            )))}
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export type Props = {
  position?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
};

export default App;
/*
element={(props: any)  => {
                  <Component {...props} position={position}/>
                }}
*/
/*
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
*/
