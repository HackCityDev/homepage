import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Layout from './components/layout';
import IndexComponent from './components/pages/index';
import JoinUs from './components/pages/join-us';
import HireUs from './components/pages/hire-us';
import HireUs1 from './components/pages/hire-us/index1';
import HireUs2 from './components/pages/hire-us/index2';
import HireUs3 from './components/pages/hire-us/index3';
import HireUs4 from './components/pages/hire-us/index4';
import { DefaultContent } from './components/pages/join-us/index3';
import MemberLogin from './components/pages/join-us/index1';
import MemberSignUp from './components/pages/join-us/index2';
import HireUs5 from './components/pages/hire-us/index5';
import HireUs6 from './components/pages/hire-us/index6';
import ContactUs from './components/pages/contact';
import Services from './components/pages/services';
import { BlockChainDevelopment, MobileDevelopment, WebDevelopment } from './components/pages/services/template';
import News from './components/pages/newsLetters';
import { NewsContentReader, NewsDefaultContent } from './components/pages/newsLetters/template';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<IndexComponent />} />
          <Route path='/join-us' element={<JoinUs />} >
            <Route index element={<DefaultContent />} />
            {/* <Route path='/join-us/sign-in' element={<MemberLogin />} /> */}
            {/* <Route path='/join-us/sign-up' element={<MemberSignUp />} /> */}
          </Route>
          <Route path='/hire-us' element={<HireUs />} >
            <Route index element={<HireUs1 />} />
            <Route path='/hire-us/2' element={<HireUs2 />} />
            <Route path='/hire-us/3' element={<HireUs3 />} />
            <Route path='/hire-us/4' element={<HireUs4 />} />
            <Route path='/hire-us/5' element={<HireUs5 />} />
            <Route path='/hire-us/6' element={<HireUs6 />} />
          </Route>

          <Route path='/contact-us' element={<ContactUs />} />

          <Route path='/services' element={<Services />}>
            <Route path='/services/web' element={<WebDevelopment />} />
            <Route path='/services/blockchain' element={<BlockChainDevelopment />} />
            <Route path='/services/mobile' element={<MobileDevelopment />} />
            <Route path='/services/' element={<Navigate to="/" replace />} />
            <Route path='/services/*' element={<Navigate to="/" replace />} />
          </Route>
          <Route path='/news' element={<News />}>
            <Route path='/news/' element={<NewsDefaultContent />} />
            <Route path='/news/:newsId' element={<NewsContentReader />} />
            <Route path='/news/*' element={<Navigate to="/" replace />} />
          </Route>
        </Route>
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
