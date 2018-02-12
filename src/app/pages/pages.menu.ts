export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'home',
        data: {
          menu: {
            title: 'Home',
            icon: 'fa fa-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'destinations',
        data: {
          menu: {
            title: 'Destination',
            icon: 'fa fa-plane',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'waterfallsndams',
            data: {
              menu: {
                title: 'Waterfalls & Beaches',
              }
            }
          }
        ]
      },
      {
        path: 'glimpses',
        data: {
          menu: {
            title: 'Glimpses',
            icon: 'fa fa-book',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'munnar',
            data: {
              menu: {
                title: 'Munnar',
              }
            }
          },
          {
            path: 'thekkady',
            data: {
              menu: {
                title: 'Thekkady',
              }
            }
          },
          {
            path: 'wayanad',
            data: {
              menu: {
                title: 'Wayanad',
              }
            }
          },
          {
            path: 'alleppey',
            data: {
              menu: {
                title: 'Alleppey',
              }
            }
          }
        ]
      },
      // {
      //   path: 'accomandation',
      //   data: {
      //     menu: {
      //       title: 'Accomandation',
      //       icon: "fa fa-bed",
      //       selected: false,
      //       expanded: false,
      //       order: 200,
      //     }
      //   },
        
      // },
      {
        path: 'festivalsnevent',
        data: {
          menu: {
            title: 'Festivals & Events',
            icon: 'fa fa-fort-awesome',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'festivals',
            data: {
              menu: {
                title: 'Festivals',
              }
            }
          },
          {
            path: 'events',
            data: {
              menu: {
                title: 'Events',
              }
            }
          },
          
        ]
      },
      {
        path: 'packages',
        data: {
          menu: {
            title: 'Packages',
            icon: 'fa fa-th-large',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'honeymoon',
            data: {
              menu: {
                title: 'Honeymoon Packages',
              }
            }
          },
          {
            path: 'family',
            data: {
              menu: {
                title: 'Family Packages',
              }
            }
          }
        ]
      },
      {
        path: 'healthnwellness',
        data: {
          menu: {
            title: 'Health and Wellness',
            icon: 'fa fa-heartbeat',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'ayurveda',
            data: {
              menu: {
                title: 'Ayurveda',
              }
            }
          },
          {
            path: 'yoga',
            data: {
              menu: {
                title: 'Yoga',
              }
            }
          },
          
        ]
      },
      {
        path: 'aboutus',
        data: {
          menu: {
            title: 'About Us',
            icon: 'fa fa-users',
            selected: false,
            expanded: false,
            order: 600,
          }
        }
                  
      },
      {
        path: ['/login'],
        data: {
          menu: {
            title: 'Login',
            icon: 'fa fa-sign-in',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        
      },
      {
        path: ['dashboard'],
        data: {
          menu: {
            // title: '',
            // icon: 'fa fa-sign-in',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        
      },
      
        
   
      
    ]
  }
];
