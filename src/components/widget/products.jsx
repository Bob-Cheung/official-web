import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Card, CardContent, CardMedia } from '@mui/material';
import { ArrowRight as ArrowRightIcon } from '@mui/icons-material';

// 产品数据
const products = [
  {
    title: 'AI智能办公系统',
    desc: '自动化流程审批、智能文档分析、语音识别转文字，提升办公效率300%',
    img: 'https://picsum.photos/id/0/600/400',
    color: '#1976d2',
  },
  {
    title: '云计算服务',
    desc: '弹性伸缩云服务器、安全存储、CDN加速，降低IT基础设施成本',
    img: 'https://picsum.photos/id/160/600/400',
    color: '#dc004e',
  },
  {
    title: '大数据分析平台',
    desc: '用户行为分析、市场趋势预测、数据可视化，助力企业精准决策',
    img: 'https://picsum.photos/id/20/600/400',
    color: '#43a047',
  },
];

const Products = () => {
  return (
    <Box sx={{ py: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        {/* 标题区域 */}
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom color="primary.main">
            核心产品与服务
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 800, margin: '0 auto', color: 'text.secondary' }}>
            基于前沿技术，打造贴合企业实际需求的产品矩阵，从基础架构到上层应用，
            为企业提供全生命周期的数字化解决方案。
          </Typography>
        </Box>

        {/* 产品卡片 */}
        <Grid container spacing={8}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={3} sx={{ height: '100%', borderRadius: 3, overflow: 'hidden' }}>
                {/* 产品图片 */}
                <CardMedia
                  component="img"
                  height="220"
                  image={product.img}
                  alt={product.title}
                  sx={{ objectFit: 'cover' }}
                />
                {/* 产品内容 */}
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: product.color }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    {product.desc}
                  </Typography>
                  <Button
                    variant="text"
                    sx={{
                      color: product.color,
                      fontWeight: 500,
                      '&:hover': { bgcolor: `${product.color}10` },
                      endIcon: <ArrowRightIcon />,
                    }}
                  >
                    了解更多
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* 底部CTA按钮 */}
        <Box sx={{ mt: 12, textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 6, py: 1.5 }}
          >
            定制专属解决方案
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Products;