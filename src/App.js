import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import { useContext, useEffect, useRef } from 'react';
import { Context } from './context/Context';
import Main from './Maint';

function App() {
  const { messages, loading } = useContext(Context);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNewChat = () => {
    window.location.reload();
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  return (
    <div className="App">
      <div className='sidebar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={gptLogo} alt='Logo' className='logo' /> <span className='brand'>Sudo Bot</span>
          </div>
          <button onClick={handleNewChat} className='midBtn'><img src={addBtn} alt='New Chat' className='addBtn'/>New Chat</button>
          <div className='upperSideBottom'></div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'>
            <img className='listItemsImg' src={home} alt='Home' /> Home
          </div>
          <div className='listItems'>
            <img className='listItemsImg' src={saved} alt='Saved' /> Saved
          </div>
          <div className='listItems'>
            <img className='listItemsImg' src={rocket} alt='Upgrade to Pro' /> Upgrade to Pro
          </div>
        </div>
      </div>
      <Main/>
    </div>
  );
}

export default App;
