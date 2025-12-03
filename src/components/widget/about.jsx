import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar, Divider } from '@mui/material';
import { Business as BusinessIcon, Users as UsersIcon, Award as AwardIcon } from '@mui/icons-material';

// 团队成员数据
const teamMembers = [
  { name: '张明', role: 'CEO', img: 'https://picsum.photos/id/64/200/200' },
  { name: '李华', role: 'CTO', img: 'https://picsum.photos/id/65/200/200' },
  { name: '王芳', role: '产品总监', img: 'https://picsum.photos/id/66/200/200' },
  { name: '刘伟', role: '销售总监', img: 'https://picsum.photos/id/67/200/200' },
];

const About = () => {
  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="xl">
        {/* 公司简介 */}
        <Grid container spacing={10} alignItems="center" sx={{ mb: 16 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom color="primary.main">
              关于智联科技
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
              智联科技成立于2015年，是国内领先的企业数字化转型服务商。我们始终坚持
              “技术驱动创新，服务创造价值”的理念，汇聚了来自互联网、AI、云计算等领域的顶尖人才，
              为各行业客户提供一站式数字化解决方案。
            </Typography>
            <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8, color: 'text.secondary' }}>
              经过10年发展，我们已服务超过1000家企业客户，涵盖金融、制造、零售、医疗等多个行业，
              获得了客户的广泛认可和行业奖项。
            </Typography>

            {/* 公司优势 */}
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                  {/* <Avatar sx={{ bgcolor: 'primary.main', p: 2, mb: 2 }}>
                    <BusinessIcon fontSize="large" />
                  </Avatar> */}
                  <Typography variant="h6" gutterBottom>
                    10年+
                  </Typography>
                  <Typography color="text.secondary">行业经验</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                  {/* <Avatar sx={{ bgcolor: 'secondary.main', p: 2, mb: 2 }}>
                    <UsersIcon fontSize="large" />
                  </Avatar> */}
                  <Typography variant="h6" gutterBottom>
                    200+
                  </Typography>
                  <Typography color="text.secondary">专业团队</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                  {/* <Avatar sx={{ bgcolor: 'success.main', p: 2, mb: 2 }}>
                    <AwardIcon fontSize="large" />
                  </Avatar> */}
                  <Typography variant="h6" gutterBottom>
                    50+
                  </Typography>
                  <Typography color="text.secondary">行业奖项</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;