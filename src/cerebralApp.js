import App from 'cerebral';
import Devtools from 'cerebral/devtools';
import controller from './controller';

export default App(controller, {
  devtools:
    process.env.NODE_ENV !== 'development'
      ? undefined
      : Devtools({
        host: 'localhost:8589',
        storeMutations: true,
        preventExternalMutations: true,
        bigComponentsWarning: 5,
      }),
});
