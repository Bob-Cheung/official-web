import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Menu,
  Container, Avatar, Button, Tooltip, MenuItem, Drawer
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Business as CompanyIcon } from '@mui/icons-material';

// 导航菜单数据
const pages = [
  { name: '首页', path: '/' },
  { name: '产品', path: '/products' },
  { name: '关于我们', path: '/about' },
  { name: '联系我们', path: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // 移动端菜单状态

  // 移动端菜单切换
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <AppBar position="fixed" elevation={2} sx={{ bgcolor: 'white', color: 'primary.main' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* 公司Logo + 名称（桌面端） */}
          <CompanyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 32 }} />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            智联科技
          </Typography>

          {/* 移动端菜单按钮 */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-haspopup="true"
              onClick={toggleMobileMenu}
              color="inherit"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            {/* 移动端抽屉菜单 */}
            <Drawer
              anchor="right"
              open={mobileMenuOpen}
              onClose={toggleMobileMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <Box
                sx={{ width: 250, p: 2 }}
                role="presentation"
                onClick={toggleMobileMenu}
                onKeyDown={toggleMobileMenu}
              >
                <Typography variant="h6" sx={{ mb: 3, mt: 2, color: 'primary.main' }}>
                  智联科技
                </Typography>
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    component={RouterLink}
                    to={page.path}
                    sx={{
                      display: 'block',
                      mb: 2,
                      justifyContent: 'flex-start',
                      color: 'text.primary',
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
            </Drawer>
          </Box>

          {/* 移动端Logo */}
          <CompanyIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            智联科技
          </Typography>

          {/* 桌面端导航菜单 */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={RouterLink}
                to={page.path}
                sx={{
                  mx: 2,
                  color: 'text.primary',
                  fontWeight: 500,
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* 联系按钮（桌面端） */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/contact"
              sx={{ ml: 2 }}
            >
              立即咨询
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;