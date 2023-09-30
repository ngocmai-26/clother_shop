import logo from './logo.svg';
import './App.css';
import Header from './container/layout/header';
import Footer from './container/layout/footer';
import Login from './container/layout/auth/login';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
