import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './containers/app/App';
import LoginContainer from './containers/login/login.containet';
import NewIncidentContainer from './containers/incident/new.incident.container';
import IncidentDetailsContainer from './containers/incident/incident.details.container';
import IncidentListContainer from './containers/incident/incident.list.container';
import 'antd/dist/antd.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='login' element={<LoginContainer />} />
      <Route path='incidents' element={<IncidentListContainer />} />
      <Route path='incidents/new' element={<NewIncidentContainer />} />
      <Route path='incidents/:incidentId' element={<IncidentDetailsContainer />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

