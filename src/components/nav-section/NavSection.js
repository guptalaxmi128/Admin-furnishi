import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
// @mui
import { Box, List, ListItemText } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';
import './NavSection.css';

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => {
          if (item.childrens) {
            return (
              <>
                <div className="menu" >
                  <div className="menu-items">
                    <NavItem key={item.title} item={item}   />
                  </div>
                  <motion.div animate={isMenuOpen ? { rotate: -90 } : { rotate: 0 }}>
                    <FaAngleDown  onClick={toggleMenu}/>
                  </motion.div>
                </div>
                <div>
                     { isMenuOpen   && (
                  <div>
                    <ul>
                      {item.childrens.map((route, index) => (
                        <li key={index} >
                          <NavItem item={route}  /> 
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                </div>
              </>
            );
          }
          return <NavItem key={item.title} item={item} />;
        })}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
