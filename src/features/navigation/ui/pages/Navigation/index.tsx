import {AppBar, Tab, Tabs} from "@material-ui/core";
import React, {FC, useEffect} from 'react'
import {useHistory} from "react-router";
import {useAction, useAtom} from "@reatom/react";
import {navigationAtom, setTabAction} from "../../../model";
import {tabSelector} from "../../../model/selectors";
import {useJsonTreeSubscribe} from "../../../../jsonTree/hooks/useJsonTreeSubscribe";

const Navigation: FC = () => {

  console.count('Navigation')
  const history = useHistory()
  const tab = useAtom(navigationAtom, tabSelector, [])
  const setTab = useAction(setTabAction)
  useJsonTreeSubscribe(navigationAtom)

  useEffect(() => {
    setTab(history.location.pathname)
  }, [])

  const handleChange = (event: React.ChangeEvent<{}>, value: string) => {
    setTab(value)
    history.push(value)
  };

  return (
    <AppBar position={"static"}>
      <Tabs value={tab ?? history.location.pathname}
            variant={"fullWidth"}
            onChange={handleChange}>
        <Tab label={"Main"} value={'/'}/>
        <Tab label={"Counter"} value={'/counter'}/>
        <Tab label={"Shop"} value={'/shop'}/>
      </Tabs>
    </AppBar>
  )
}

export default Navigation