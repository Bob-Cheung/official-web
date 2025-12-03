import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Grid, Link, Divider, IconButton } from '@mui/material';
import { Facebook as FacebookIcon, Twitter as TwitterIcon, Linkedin as LinkedinIcon, Instagram as InstagramIcon } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1f2937', color: 'white', py: 8 }}>
      <Container maxWidth="xl">
        <Grid container spacing={8} sx={{ mb: 8 }}>
          {/* 公司简介 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ mb: 4, color: 'primary.main' }}>
              智联科技
            </Typography>
            <Typography color="text.background" sx={{ mb: 4, lineHeight: 1.6 }}>
              专注企业数字化转型，用技术赋能企业增长，
              提供AI智能、云计算、大数据分析等核心服务。
            </Typography>
            {/* 社交媒体 */}
            <Box display="flex" gap={2}>
              <IconButton sx={{ color: '#e5e7eb', '&:hover': { color: 'primary.main' } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: '#e5e7eb', '&:hover': { color: 'primary.main' } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: '#e5e7eb', '&:hover': { color: 'primary.main' } }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* 快速链接 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ mb: 4, color: 'primary.main' }}>
              快速链接
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              <Link component={RouterLink} to="/" color="#e5e7eb" sx={{ '&:hover': { color: 'primary.main', textDecoration: 'none' } }}>
                首页
              </Link>
              {/* <Link component={RouterLink} to="/products" color="#e5e7eb" sx={{ '&:hover': { color: 'primary.main', textDecoration: 'none' } }}>
                产品服务
              </Link> */}
              <Link component={RouterLink} to="/products" color="#e5e7eb" sx={{ '&:hover': { color: 'primary.main', textDecoration: 'none' } }}>
                产品服务
              </Link>
              <Link component={RouterLink} to="/about" color="#e5e7eb" sx={{ '&:hover': { color: 'primary.main', textDecoration: 'none' } }}>
                关于我们
              </Link>
              <Link component={RouterLink} to="/contact" color="#e5e7eb" sx={{ '&:hover': { color: 'primary.main', textDecoration: 'none' } }}>
                联系我们
              </Link>
              <Link href="#" color="#e5e7eb" sx={{ '&:hover': { color: 'primary.main', textDecoration: 'none' } }}>
                隐私政策
              </Link>
            </Box>
          </Grid>

          {/* 产品服务 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ mb: 4, color: 'primary.main' }}>
              产品服务
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              <Link href="#" color="#e5e7eb" sx={{ '&:hover': { color: 'primary.main', textDecoration: 'none' } }}>
                AI智能办公系统
              </Link>
              <Link href="#" color="#e5e7eb" sx={{ '&:hover': { color: 'primary.main', textDecoration: 'none' } }}>
                云计算服务
              </Link>
              <Link href="#" color="#e5e7eb" sx={{ '&:hover': { color: 'primary.main', textDecoration: 'none' } }}>
                大数据分析平台
              </Link>
              <Link href="#" color="#e5e7eb" sx={{ '&:hover': { color: 'primary.main', textDecoration: 'none' } }}>
                数字化转型咨询
              </Link>
              <Link href="#" color="#e5e7eb" sx={{ '&:hover': { color: 'primary.main', textDecoration: 'none' } }}>
                定制开发服务
              </Link>
            </Box>
          </Grid>

          {/* 联系信息 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ mb: 4, color: 'primary.main' }}>
              联系我们
            </Typography>
            <Box display="flex" flexDirection="column" gap={3}>
              <Box display="flex" alignItems="center" gap={2}>
                <Typography color="#e5e7eb">北京市朝阳区建国路88号现代城A座25层</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <Typography color="#e5e7eb">400-888-9999</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <Typography color="#e5e7eb">contact@zhilian-tech.com</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 4 }} />

        {/* 版权信息 */}
        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
          <Typography color="#e5e7eb" sx={{ mb: 2 }}>
            © {new Date().getFullYear()} 智联科技有限公司 版权所有 | 京ICP备12345678号
          </Typography>
          <Typography color="#e5e7eb" fontSize="0.8rem">
            本网站由智联科技提供技术支持
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;