import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/admin/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    name: 'LICENCES',
    title: true,
  },
  {
    name: 'Professional',
    url: '/admin/',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'New',
        url: '/admin/licence/pro/new',
        linkProps: { queryParams: { type: 'new' } },
      },
      {
        name: 'Pending',
        url: '/admin/licence/pro',
        linkProps: { queryParams: { type: 'pending' } },
      },
      {
        name: 'Approved',
        url: '/admin/licence/pro',
        linkProps: { queryParams: { type: 'approved' } },
      },
      {
        name: 'Paid',
        url: '/admin/licence/pro',
        linkProps: { queryParams: { type: 'paid' } },
      },

      {
        name: 'Signed',
        url: '/admin/licence/pro',
        linkProps: { queryParams: { type: 'signed' } },
      },

      // {
      //   name: 'Contractual',
      //   url: '/admin/new/con',
      // },
    ],
  },
  {
    name: 'Contractual',
    url: '/admin/',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'New',
        url: '/admin/licence/con/new',
        linkProps: { queryParams: { type: 'new' } },
      },
      {
        name: 'Pending',
        url: '/admin/licence/con',
        linkProps: { queryParams: { type: 'pending' } },
      },
      {
        name: 'Approved',
        url: '/admin/licence/con',
        linkProps: { queryParams: { type: 'approved' } },
      },
      {
        name: 'Paid',
        url: '/admin/licence/con',
        linkProps: { queryParams: { type: 'paid' } },
      },
      {
        name: 'Signed',
        url: '/admin/licence/con',
        linkProps: { queryParams: { type: 'signed' } },
      },

      // {
      //   name: 'Contractual',
      //   url: '/admin/new/con',
      // },
    ],
  },
  // {
  //   name: 'Pending',
  //   url: '/admin/pending',
  //   iconComponent: { name: 'cil-notes' },
  //   children: [
  //     {
  //       name: 'Professional',
  //       url: '/admin/licence/pro',
  //     },
  //     {
  //       name: 'Contractual',
  //       url: '/admin/licence/con',
  //     },
  //   ],
  // },
  // {
  //   name: 'Approved',
  //   url: '/admin/approved',
  //   iconComponent: { name: 'cil-puzzle' },
  //   children: [
  //     {
  //       name: 'Professional',
  //       url: '/admin/approved/pro',
  //     },
  //     {
  //       name: 'Contractual',
  //       url: '/admin/approved/cond',
  //     },
  //   ],
  // },
  // {
  //   name: 'signed',
  //   url: '/admin/signed',
  //   iconComponent: { name: 'cil-puzzle' },
  //   children: [
  //     {
  //       name: 'Professional',
  //       url: '/admin/signed/pro',
  //     },
  //     {
  //       name: 'Contractual',
  //       url: '/admin/signed/cond',
  //     },
  //   ],
  // },
  // {
  //   name: 'Buttons',
  //   url: '/admin/buttons',
  //   iconComponent: { name: 'cil-cursor' },
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/admin/buttons/buttons'
  //     },
  //     {
  //       name: 'Button groups',
  //       url: '/admin/buttons/button-groups'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/admin/buttons/dropdowns'
  //     },
  //   ]
  // },
  // {
  //   name: 'Forms',
  //   url: '/admin/forms',
  //   iconComponent: { name: 'cil-notes' },
  //   children: [
  //     {
  //       name: 'Form Control',
  //       url: '/admin/forms/form-control'
  //     },
  //     {
  //       name: 'Select',
  //       url: '/admin/forms/select'
  //     },
  //     {
  //       name: 'Checks & Radios',
  //       url: '/admin/forms/checks-radios'
  //     },
  //     {
  //       name: 'Range',
  //       url: '/admin/forms/range'
  //     },
  //     {
  //       name: 'Input Group',
  //       url: '/admin/forms/input-group'
  //     },
  //     {
  //       name: 'Floating Labels',
  //       url: '/admin/forms/floating-labels'
  //     },
  //     {
  //       name: 'Layout',
  //       url: '/admin/forms/layout'
  //     },
  //     {
  //       name: 'Validation',
  //       url: '/admin/forms/validation'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/admin/charts',
  //   iconComponent: { name: 'cil-chart-pie' }
  // },
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/admin/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/admin/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE'
  //       }
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/admin/icons/flags'
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/admin/icons/brands'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/admin/notifications',
  //   iconComponent: { name: 'cil-bell' },
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/admin/notifications/alerts'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/admin/notifications/badges'
  //     },
  //     {
  //       name: 'Modal',
  //       url: '/admin/notifications/modal'
  //     },
  //     {
  //       name: 'Toast',
  //       url: '/admin/notifications/toasts'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/admin/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/admin/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/admin/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/admin/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/admin/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/admin/500'
  //     }
  //   ]
  // },
];
