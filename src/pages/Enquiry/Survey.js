import { Helmet } from 'react-helmet-async';

import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Typography, Container, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Survey = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <title> Survey | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Survey
          </Typography>
        </Stack>
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            bgcolor: 'background.paper',
            border: '1px solid',
            borderRadius: 2,
            borderColor: theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey.A800,
            boxShadow: 'inherit',
            ':hover': {
              boxShadow: 'inherit',
            },
            '& pre': {
              m: 0,
              p: '16px !important',
              fontFamily: theme.typography.fontFamily,
              fontSize: '0.75rem',
            },
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} variant="scrollable" aria-label="scrollable auto tabs example">
              <Tab label="Open" {...a11yProps(0)} />
              <Tab label="Closed" {...a11yProps(1)} />
            </Tabs>
          </Box>
          {/* <TabPanel value={value} index={0}>
      <AddArticle articles={articles} />
    </TabPanel>
    <TabPanel value={value} index={1}>
      <AllArticles articles={articles} />
    </TabPanel> */}
        </Box>
      </Container>
    </>
  );
};

export default Survey;
