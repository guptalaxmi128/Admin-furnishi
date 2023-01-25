// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    // icon: icon('ic_analytics'),
  },
  {
    title: 'Factory Manager',
    path: '/factory-manager',
      icon: icon('ic_lock'),
    childrens: [
      {
        title: 'Name',
        path: '/factory-manager/name',
        //   icon: icon('ic_lock'),
      },
      {
        title: 'Email',
        path: '/factory-manager/email',
        //   icon: icon('ic_lock'),
      },
      {
        title: 'Location',
        path: '/factory-manager/location',
        //   icon: icon('ic_lock'),
      },
      {
        title: 'Factory Name',
        path: '/factory-manager/factory-name',
        //   icon: icon('ic_lock'),
      },
    ],
  },

  {
    title: 'Enquiry',
    path: '/enquiry',
    // icon: icon('ic_cart'),
    childrens: [
      {
        title: 'Installation',
        path: '/enquiry/installation',
      },
      {
        title: 'Complaint',
        path: '/enquiry/complaint',
      },
      {
        title: 'Survey',
        path: '/enquiry/survey',
      },
    ],
  },
  {
    title: 'Orders',
    path: '/orders',
    // icon: icon('ic_blog'),
  },

  {
    title: 'Communication',
    path: '/communication',
    // icon: icon('ic_disabled'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   // icon: icon('ic_disabled'),
  // },
];

export default navConfig;
