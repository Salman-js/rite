import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Routes from './Router';
import { Toaster } from 'react-hot-toast';
import { antdConfig } from './Utils/Theme/config.antd';

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <ConfigProvider theme={antdConfig}>
        <Routes />
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
