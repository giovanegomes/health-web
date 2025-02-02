import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Repeat from '@mui/icons-material/Repeat';
import FitnessCenter from '@mui/icons-material/FitnessCenter';
import { Link } from 'react-router';

const DRAWER_ITEMS = [
  {
    title: 'Séries',
    route: 'set',
    icon: <Repeat />,
  },
  {
    title: 'Treinos',
    route: 'workout',
    icon: <FitnessCenter />,
  },
  {
    title: 'Plano de treinos',
    route: 'planning',
    icon: <FitnessCenter />,
  },
];

export default function DrawerMenu({ open, toggleDrawer }: { open: boolean, toggleDrawer: () => void }) {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        {DRAWER_ITEMS.map(({ title, route, icon }) => (
          <Link to={route}>
            <ListItem key={route} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer}>
        {DrawerList}
      </Drawer>
    </div>
  );
}