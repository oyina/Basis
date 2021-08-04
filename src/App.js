import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
  useRouteMatch
} from "react-router-dom";
import NavBar from './partials/navBar';
import Dashboard from './pages/dashboard/dashboard';
import Projects from './pages/projects/projects';
import Project from './pages/projects/project';

function App() {
  //Allows nav to show active class on links
  const NavRouter = withRouter(NavBar);

  return (
    <Router>
    <div>
      <NavRouter />

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }

        <Route path="/projects">
          <ProjectsRoutes />
        </Route>
       
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

function ProjectsRoutes() {
  let match = useRouteMatch();

  return (
    <React.Fragment>
      <Switch>
        <Route path={`${match.path}/:projectId`}>
          <Project />
        </Route>
        <Route path={`${match.path}`}>
          <Projects />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
