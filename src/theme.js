import { createTheme } from '@mui/material/styles';

// 自定义公司品牌主题（可修改颜色、字体等）
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // 公司主色调（蓝色）
    },
    secondary: {
      main: '#dc004e', // 辅助色（红色）
    },
    background: {
      default: '#f5f5f5', // 页面背景色
    },
  },
  typography: {
    fontFamily: '"Roboto", "sans-serif", "Arial"',
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
  },
});

export default theme;