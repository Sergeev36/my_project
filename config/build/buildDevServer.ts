import { Configuration as ConfigurationDevServer } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): ConfigurationDevServer {
    return {
        port: options.port,
        historyApiFallback: true,
        open: true,
        hot: true,
    };
}
