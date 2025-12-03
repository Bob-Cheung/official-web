// import React from 'react';
// // 1. 把 BrowserRouter 改成 HashRouter（核心修改）
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/home';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* 路由路径无需修改，HashRouter 会自动处理 */}
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    // <Router>
    //   {/* 导航栏（全局显示） */}
    //   <Navbar />
    //   {/* 路由内容 */}
    //   <Routes>
    //     {/* 首页（Hero区域） */}
    //     <Route path="/" element={<Hero />} />
    //     {/* 产品展示 */}
    //     <Route path="/products" element={<Products />} />
    //     {/* 关于我们 */}
    //     <Route path="/about" element={<About />} />
    //     {/* 联系我们 */}
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    //   {/* 页脚（全局显示） */}
    //   <Footer />
    // </Router>
  );
}

export default App;