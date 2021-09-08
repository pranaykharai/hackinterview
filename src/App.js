import { Header } from './Components/Header.js';
import { BlogList } from './Components/BlogList.js';
import { Footer } from './Components/Footer.js';
import { AddNew } from './Components/AddNew.js';
import { AU } from './Components/Aboutus.js';
import { Main } from './Components/Main.js';
import useFetch  from './Components/useFetch.js';

import {

  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BlogDetails from './Components/BlogDetails.js';
function App() {
  const { data : blogs , isPending , error } = useFetch('http://localhost:8000/blogs');
  return (
    <>
      <Router>
        <Header />

        <Switch>
        <Route exact path="/">
        <Main />
        </Route>
          <Route exact path="/BlogList">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Interview Experiences" />}
          </Route>
          <Route exact path= "/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route exact path="/AddNew">
            <AddNew/>
          </Route>
          <Route exact path="/AU">
            <AU/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
