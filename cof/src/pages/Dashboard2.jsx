import React, { useState } from 'react';
import { 
  createTheme, 
  ThemeProvider, 
  CssBaseline, 
  Box, 
  Toolbar, 
  List, 
  Typography, 
  Divider, 
  IconButton, 
  Badge, 
  Container, 
  Grid, 
  Paper, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Avatar,
  Card,
  CardContent,
  Button,
  Chip
} from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CoffeeIcon from '@mui/icons-material/Coffee'; // Represents Orders
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SearchIcon from '@mui/icons-material/Search';

// --- 1. THEME CONFIGURATION (Based on your Logo) ---
const coffeeTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#CD7F4E', // The Copper/Bronze color from the steam/cup
      contrastText: '#fff',
    },
    secondary: {
      main: '#132A2F', // The dark forest green/charcoal background
    },
    background: {
      default: '#15262B', // Deepest green for app background
      paper: '#1E343B',   // Slightly lighter green for cards
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#B0BEC5',
    },
    success: {
      main: '#4CAF50',
    },
    warning: {
      main: '#FFC107',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontFamily: '"Playfair Display", serif', // Serif font to match "THE COFFEE SHOP"
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
    h6: {
      fontWeight: 600,
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16, // Softer, modern corners
          boxShadow: '0 4px 20px 0 rgba(0,0,0,0.4)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: 'none',
          fontWeight: 'bold',
        }
      }
    }
  },
});

// --- 2. MOCK DATA ---
const recentOrders = [
  { id: '#1024', item: 'Caramel Macchiato', status: 'Brewing', time: '2 min ago', price: '$4.50' },
  { id: '#1023', item: 'Iced Americano', status: 'Ready', time: '5 min ago', price: '$3.00' },
  { id: '#1022', item: 'Blueberry Muffin', status: 'Served', time: '12 min ago', price: '$2.75' },
  { id: '#1021', item: 'Espresso Double', status: 'Served', time: '15 min ago', price: '$2.50' },
];

const lowStockItems = [
  { name: 'Oat Milk', level: '10%' },
  { name: 'Paper Cups (L)', level: '5%' },
];

// --- 3. MAIN COMPONENT ---
export default function CoffeeShopDashboard() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={coffeeTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        
        {/* --- SIDEBAR NAVIGATION --- */}
        <Box
          component="nav"
          sx={{
            width: open ? 240 : 70,
            flexShrink: 0,
            bgcolor: 'background.paper',
            borderRight: '1px solid rgba(255,255,255,0.1)',
            height: '100vh',
            transition: 'width 0.3s',
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column'
          }}
        >
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', px: [1] }}>
            {open ? (
               // Logo Text Simulation
               <Box sx={{ textAlign: 'center', py: 2 }}>
                 <Typography variant="h6" color="primary" sx={{ lineHeight: 1 }}>THE COFFEE</Typography>
                 <Typography variant="h6" color="text.primary" sx={{ lineHeight: 1 }}>SHOP</Typography>
                 <Typography variant="caption" sx={{ letterSpacing: 2, mt: 1, display: 'block', color: 'text.secondary' }}>SINCE 2000</Typography>
               </Box>
            ) : (
              <CoffeeIcon color="primary" />
            )}
          </Toolbar>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          <List component="nav">
            {[
              { text: 'Dashboard', icon: <DashboardIcon />, active: true },
              { text: 'Active Orders', icon: <CoffeeIcon />, active: false },
              { text: 'Inventory', icon: <InventoryIcon />, active: false },
              { text: 'Staff', icon: <PeopleIcon />, active: false },
              { text: 'Reports', icon: <TrendingUpIcon />, active: false },
            ].map((item) => (
              <ListItemButton 
                key={item.text} 
                sx={{ 
                  justifyContent: open ? 'initial' : 'center', 
                  px: 2.5,
                  my: 1,
                  borderLeft: item.active ? '4px solid #CD7F4E' : '4px solid transparent',
                  bgcolor: item.active ? 'rgba(205, 127, 78, 0.08)' : 'transparent'
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', color: item.active ? 'primary.main' : 'text.secondary' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0, color: item.active ? 'text.primary' : 'text.secondary' }} />
              </ListItemButton>
            ))}
          </List>
        </Box>

        {/* --- MAIN CONTENT AREA --- */}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          {/* Top Header */}
          <Toolbar sx={{ pr: '24px', bgcolor: 'background.paper', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{ marginRight: '36px' }}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              Manager Dashboard
            </Typography>
            <IconButton color="inherit" sx={{ mr: 2 }}>
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Avatar sx={{ ml: 2, bgcolor: 'primary.main' }}>M</Avatar>
          </Toolbar>

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            
            {/* KPI ROW */}
            <Grid container spacing={3} mb={4}>
              {/* Sales Card */}
              <Grid item xs={12} md={3}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
                  <Typography color="text.secondary" variant="body2" gutterBottom>Total Revenue (Today)</Typography>
                  <Typography component="p" variant="h4" color="primary">
                    $1,240.50
                  </Typography>
                  <Typography color="success.main" sx={{ flex: 1, mt: 1, fontSize: '0.875rem' }}>
                    +12% vs yesterday
                  </Typography>
                </Paper>
              </Grid>
              {/* Active Orders Card */}
              <Grid item xs={12} md={3}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
                  <Typography color="text.secondary" variant="body2" gutterBottom>Active Orders</Typography>
                  <Typography component="p" variant="h4" color="text.primary">
                    12
                  </Typography>
                  <Typography color="warning.main" sx={{ flex: 1, mt: 1, fontSize: '0.875rem' }}>
                    4 min avg wait
                  </Typography>
                </Paper>
              </Grid>
               {/* Items Sold */}
               <Grid item xs={12} md={3}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
                  <Typography color="text.secondary" variant="body2" gutterBottom>Cups Sold</Typography>
                  <Typography component="p" variant="h4" color="text.primary">
                    342
                  </Typography>
                  <Typography color="text.secondary" sx={{ flex: 1, mt: 1, fontSize: '0.875rem' }}>
                    Target: 400
                  </Typography>
                </Paper>
              </Grid>
               {/* Staff */}
               <Grid item xs={12} md={3}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
                  <Typography color="text.secondary" variant="body2" gutterBottom>Staff On Duty</Typography>
                  <Box sx={{ display: 'flex', mt: 1 }}>
                     <Avatar sx={{ width: 32, height: 32, mr: 1, bgcolor: '#5D4037' }}>A</Avatar>
                     <Avatar sx={{ width: 32, height: 32, mr: 1, bgcolor: '#795548' }}>B</Avatar>
                     <Avatar sx={{ width: 32, height: 32, bgcolor: '#8D6E63' }}>C</Avatar>
                  </Box>
                  <Typography color="success.main" sx={{ flex: 1, mt: 1, fontSize: '0.875rem' }}>
                    Full Strength
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              {/* CHART AREA (Placeholder) */}
              <Grid item xs={12} md={8}>
                <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', height: 340 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>
                            Hourly Traffic
                        </Typography>
                        <Button size="small" variant="outlined" color="inherit">View Report</Button>
                    </Box>
                    {/* CSS Graphic for Chart representation */}
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', px: 2, pb: 2, borderBottom: '1px solid #444' }}>
                        {[40, 60, 30, 80, 100, 70, 45, 90, 60, 50].map((h, i) => (
                            <Box key={i} sx={{ width: '6%', height: `${h}%`, bgcolor: 'primary.main', opacity: 0.7, borderRadius: '4px 4px 0 0' }} />
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                        <Typography variant="caption" color="text.secondary">8am</Typography>
                        <Typography variant="caption" color="text.secondary">1pm</Typography>
                        <Typography variant="caption" color="text.secondary">6pm</Typography>
                    </Box>
                </Paper>
              </Grid>

              {/* INVENTORY ALERTS */}
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', height: 340 }}>
                  <Typography component="h2" variant="h6" color="error.light" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                    <InventoryIcon sx={{ mr: 1 }} /> Low Stock Alert
                  </Typography>
                  <List>
                      {lowStockItems.map((item) => (
                          <React.Fragment key={item.name}>
                            <ListItemButton sx={{ bgcolor: 'rgba(255,0,0,0.05)', borderRadius: 2, mb: 1 }}>
                                <ListItemText primary={item.name} secondary="Restock Immediately" />
                                <Chip label={item.level} color="error" size="small" />
                            </ListItemButton>
                          </React.Fragment>
                      ))}
                  </List>
                  <Button variant="contained" color="primary" sx={{ mt: 'auto' }}>
                      Order Supplies
                  </Button>
                </Paper>
              </Grid>

              {/* RECENT ORDERS TABLE */}
              <Grid item xs={12}>
                <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                        Recent Orders
                    </Typography>
                    <Button variant="contained" startIcon={<ReceiptLongIcon />}>New Order</Button>
                  </Box>
                  <Grid container spacing={2}>
                      <Grid item xs={12}>
                          {/* Table Header */}
                          <Box sx={{ display: 'flex', px: 2, py: 1, bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                              <Box sx={{ flex: 1, color: 'text.secondary' }}>Order ID</Box>
                              <Box sx={{ flex: 2, color: 'text.secondary' }}>Item</Box>
                              <Box sx={{ flex: 1, color: 'text.secondary' }}>Status</Box>
                              <Box sx={{ flex: 1, color: 'text.secondary' }}>Price</Box>
                          </Box>
                      </Grid>
                      {recentOrders.map((order) => (
                          <Grid item xs={12} key={order.id}>
                              <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 2, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                  <Box sx={{ flex: 1, fontWeight: 'bold' }}>{order.id}</Box>
                                  <Box sx={{ flex: 2 }}>
                                      <Typography variant="body1">{order.item}</Typography>
                                      <Typography variant="caption" color="text.secondary">{order.time}</Typography>
                                  </Box>
                                  <Box sx={{ flex: 1 }}>
                                      <Chip 
                                        label={order.status} 
                                        size="small" 
                                        color={order.status === 'Ready' ? 'success' : order.status === 'Brewing' ? 'warning' : 'default'} 
                                        variant={order.status === 'Served' ? 'outlined' : 'filled'}
                                      />
                                  </Box>
                                  <Box sx={{ flex: 1, fontWeight: 'bold', color: 'primary.main' }}>{order.price}</Box>
                              </Box>
                          </Grid>
                      ))}
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}