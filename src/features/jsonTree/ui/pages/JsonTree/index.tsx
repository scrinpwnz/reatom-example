import {Theme, makeStyles} from "@material-ui/core";
import React, {FC, useContext, useMemo} from 'react'
import JSONTree from "react-json-tree";
import {context, useAtom} from "@reatom/react";
import {jsonTreeAtom} from "../../../model";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '&>ul': {
      margin: '0 !important',
      height: '100%'
    }
  }
}))


const JsonTree: FC = () => {

  console.count('JsonTree')
  const classes = useStyles()
  const store = useContext(context)
  const refresh = useAtom(jsonTreeAtom)

  return useMemo(() => (
    <div className={classes.root}>
        <JSONTree data={store?.getState()} shouldExpandNode={() => true}/>
    </div>
  ), [refresh])
}

export default JsonTree