import {useContext, useEffect} from "react";
import {context, useAction} from "@reatom/react";
import {refreshAction} from "../model";
import {Atom} from "@reatom/core";

/** Хук для обновления дерева */
export const useJsonTreeSubscribe = (atom: Atom<any>) => {
  const store = useContext(context)
  const refresh = useAction(refreshAction)

  useEffect(() => {
    const unsubscribe = store?.subscribe(atom, refresh)
    return () => unsubscribe && unsubscribe()
  }, [store, refresh])
}