import React from 'react';
// 1. 把 BrowserRouter 改成 HashRouter（核心修改）
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Routes>
        {/* 路由路径无需修改，HashRouter 会自动处理 */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;