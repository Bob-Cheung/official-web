import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, Typography, Grid, Paper } from '@mui/material';
import { ArrowForward as ArrowForwardIcon, CheckCircle as CheckCircleIcon } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box sx={{ py: 12, bgcolor: 'primary.main', color: 'white' }}>
      <Container maxWidth="xl">
        <Grid sx={{ display: 'flex', justifyContent: 'space-around' }}>
          {/* 文字区域 */}
          <Grid sx={{ width: "40%" }}>
            <Typography variant="h1" gutterBottom>
              智能科技，<br />赋能未来
            </Typography>
            <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', opacity: 0.9 }}>
              专注于玩具生产销售，提供各种售后服务。
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, mb: 6 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component={RouterLink}
                to="/products"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 5, py: 1.5 }}
              >
                查看产品
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                component={RouterLink}
                to="/contact"
                sx={{ px: 5, py: 1.5, borderColor: 'white', color: 'white' }}
              >
                联系我们
              </Button>
            </Box>
            {/* 优势标签 */}
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Box display="flex" alignItems="center" gap={2}>
                  <CheckCircleIcon sx={{ color: 'secondary.main' }} />
                  <Typography>1000+ 企业客户</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box display="flex" alignItems="center" gap={2}>
                  <CheckCircleIcon sx={{ color: 'secondary.main' }} />
                  <Typography>10年+ 行业经验</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* 图片区域（使用Paper模拟产品展示图） */}
          <Grid sx={{ width: "40%" }}>
            <Paper
              elevation={8}
              sx={{
                p: 2,
                borderRadius: 4,
                bgcolor: 'white',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src="https://picsum.photos/id/180/800/500" // 占位图（可替换为公司产品图）
                alt="智能解决方案展示"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;