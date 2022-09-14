type ConfigKeys = 'VIEW_TOTAL_DURATION' | 'VIEW_INTERVAL_MARKER';
export interface Config {
  get: (configKeys: ConfigKeys) => any;
}

const cnf = {
  VIEW_TOTAL_DURATION: 1440,
  VIEW_INTERVAL_MARKER: 60
};

export const config = {
  get: (key: string) => cnf[key]
};
