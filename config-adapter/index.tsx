import { createContext } from 'react';
import PropTypes from 'prop-types';
import { Config, config } from '../config';

const ConfigContext = createContext<Config | null>(null);

const ConfigContextProvider = ({ children }) => {
  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
};

ConfigContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { ConfigContextProvider, ConfigContext };
