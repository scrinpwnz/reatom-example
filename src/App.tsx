import React, {FC} from 'react';
import {Container, CssBaseline, makeStyles, Theme} from "@material-ui/core";
import Navigation from "./features/navigation/ui/pages/Navigation";
import {Route, Switch} from "react-router";
import Counter from "./features/counter/ui/pages/Counter";
import JsonTree from "./features/jsonTree/ui/pages/JsonTree";
import Main from "./features/main/ui/Main";
import Shop from './features/shop/ui/pages';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateColumns: '1fr minmax(200px, 320px)'
  },
  main: {
    display: 'grid',
    gridTemplateRows: 'fit-content(100%) 1fr'
  },
  container: {
    padding: theme.spacing(2,3)
  }
}))

const App: FC = () => {

  console.count('App')
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <main className={classes.main}>
        <Navigation/>
        <Container maxWidth={"md"} className={classes.container}>
          <Switch>
            <Route exact path={'/'} component={Main}/>
            <Route path={'/counter'} component={Counter}/>
            <Route path={'/shop'} component={Shop}/>
          </Switch>
        </Container>
      </main>
      <JsonTree/>
    </div>
  );
}

export default App;
