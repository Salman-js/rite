import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Routes from './Router';

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <Routes />
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
