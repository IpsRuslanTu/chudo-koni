import { FC } from 'react';
import Layout from './components/layout/Layout';
import { useDispatch } from 'react-redux';
import { addAccessTokenAction } from './store/actions/auth.actions';
import { useTypeSelector } from './hooks/useTypeSelector';

const App: FC = () => {
  const dispatch = useDispatch();
  const token = useTypeSelector((state) => state.auth.accessToken);

  const setToken = () =>
    dispatch(addAccessTokenAction(Math.random().toString()));

  return <Layout />;
};

export default App;
