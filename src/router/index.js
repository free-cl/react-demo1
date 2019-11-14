import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../pages/home';

const router = function() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}();
export default router;
