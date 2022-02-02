import React, { useReducer, FunctionComponent } from "react";
import { PropTypes } from "prop-types";

export default (reducer: any, actions: any, defaultValue: any) => {
  const Context = React.createContext(defaultValue);

  const Provider: FunctionComponent<{ children: PropTypes.node }> = (props) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    let boundActions: any = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {props.children}
      </Context.Provider>
    );
  };

  return { Context: Context, Provider: Provider };
};
