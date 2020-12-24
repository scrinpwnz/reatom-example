import {Button, makeStyles, Theme} from "@material-ui/core";
import React, {FC, useContext, useMemo} from 'react'
import JSONTree from "react-json-tree";
import {context, useAction, useAtom} from "@reatom/react";
import {jsonTreeAtom, toggleAction} from "../../../model";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    overflowY: 'scroll',
    background: 'rgb(0, 43, 54)'
  }
}))

const JsonTree: FC = () => {

  console.count('JsonTree')
  const classes = useStyles()
  const store = useContext(context)
  const {refresh, hidden} = useAtom(jsonTreeAtom)
  const toggle = useAction(toggleAction)

  return useMemo(() => (
    <div className={classes.root}>
      <Button variant={'contained'}
              color={'secondary'}
              onClick={toggle}>
        Переключить дерево состояния (замедляет работу)
      </Button>
      {!hidden && <JSONTree data={store?.getState()} shouldExpandNode={() => true}/>}
    </div>
  ), [refresh, hidden])
}

export default JsonTree