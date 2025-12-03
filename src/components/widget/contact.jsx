import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Paper, TextField, Button, CircularProgress, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Send as SendIcon, MapPin as MapPinIcon, Phone as PhoneIcon, Email as EmailIcon } from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [disabled, setDisabled] = useState(false);

  const WEBHOOK_URL = "https://royal-sun-7d97.2460106543.workers.dev"; // 替换为你的 Cloudflare Workers 触发URL！！！

  // 表单输入变化处理
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 表单提交处理
  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    sendData(formData);
  };

  const sendData = async (data) => {
    setDisabled(true);
    try {
      // 3. 组装企业微信消息格式（文本类型）
      const requestData = {
        msgtype: "text",
        text: {
          content: `📩 新留言通知\n\n🧑 姓名：${data.name}\n📧 邮箱：${data.email}\n💬 留言内容：\n${data.message}\n\n⏰ 提交时间：${new Date().toLocaleString()}`
        }
      };

      // 4. 发送请求到代理地址（不再直接请求企业微信）
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(requestData),
        mode: "cors"
      });

      const result = await response.json();
      if (result.errcode === 0) {
        alert("提交成功！我们会尽快联系你～");
      } else {
        alert(`提交失败：${result.errmsg}`);
      }
    } catch (error) {
      console.error("发送失败：", error);
      alert("网络异常，请稍后重试～");
    } finally {
      console.log("finally");
      setDisabled(false);
      setFormData({ name: '', email: '', message: '' });
    }
  }

  return (
    <Box sx={{ py: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Typography variant="h2" textAlign="center" gutterBottom color="primary.main" sx={{ mb: 2 }}>
          联系我们
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ maxWidth: 800, margin: '0 auto 8rem', color: 'text.secondary' }}>
          无论您有任何疑问、需求或合作意向，都可以通过以下方式联系我们，我们将竭诚为您服务～
        </Typography>

        <Grid container spacing={8} sx={{ justifyContent: 'space-around' }}>
          {/* 联系表单 */}
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: 6, borderRadius: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 4, color: 'primary.main' }}>
                发送消息
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="您的姓名"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      fullWidth
                      variant="outlined"
                      sx={{ borderRadius: 1 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="您的邮箱"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      fullWidth
                      variant="outlined"
                      sx={{ borderRadius: 1 }}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="您的留言"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    fullWidth
                    multiline
                    rows={5}
                    variant="outlined"
                    sx={{ borderRadius: 1 }}
                  />
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={disabled}
                  endIcon={disabled ? <CircularProgress size={20} /> : <SendIcon />}
                  sx={{ px: 5, py: 1.5, mt: 2 }}
                >
                  发送消息
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* 联系信息 */}
          <Grid item xs={12} md={5}>
            <Paper elevation={3} sx={{ p: 6, borderRadius: 4, }}>
              <Typography variant="h5" sx={{ mb: 6, color: 'primary.main' }}>
                联系方式
              </Typography>

              {/* 地址 */}
              <Box display="flex" alignItems="flex-start" gap={3} sx={{ mb: 2 }}>
                {/* <Avatar sx={{ bgcolor: 'primary.main', p: 1.5, mt: 1 }}>
                  <MapPinIcon />
                </Avatar> */}
                <Box>
                  <Typography variant="h6" gutterBottom>
                    公司地址
                  </Typography>
                  <Typography color="text.secondary">
                    北京市朝阳区建国路88号现代城A座25层
                  </Typography>
                </Box>
              </Box>

              {/* 电话 */}
              <Box display="flex" alignItems="flex-start" gap={3} sx={{ mb: 2 }}>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    联系电话
                  </Typography>
                  <Typography color="text.secondary">
                    400-888-9999 或者 010-12345678
                  </Typography>
                </Box>
              </Box>

              {/* 邮箱 */}
              <Box display="flex" alignItems="flex-start" gap={3} sx={{ mb: 2 }}>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    电子邮箱
                  </Typography>
                  <Typography color="text.secondary">
                    contact@zhilian-tech.com 或者 service@zhilian-tech.com
                  </Typography>
                </Box>
              </Box>

              {/* 工作时间 */}
              <Box display="flex" alignItems="flex-start" gap={3}>
                {/* <Avatar sx={{ bgcolor: 'primary.main', p: 1.5, mt: 1 }}>
                  <ClockIcon />
                </Avatar> */}
                <Box>
                  <Typography variant="h6" gutterBottom>
                    工作时间
                  </Typography>
                  <Typography color="text.secondary">
                    周一至周五：9:00 - 18:00<br />
                    周六、周日：休息
                  </Typography>
                </Box>
              </Box>

              {/* 地图占位 */}
              {/* <Box sx={{ mt: 5, borderRadius: 2, overflow: 'hidden' }}>
                <Box
                  component="img"
                  src="https://picsum.photos/id/101/800/400"
                  alt="公司位置地图"
                  sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                />
              </Box> */}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// 补充ClockIcon组件（MUI未直接导出，简单实现）
const ClockIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export default Contact;