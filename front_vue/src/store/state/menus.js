const menuState = {
    menus: [
          {
              href: '/bigdog',
              title: '대형견',
              childrens: [
                {
                    href: '/smalldog',
                    title: '소형견'
                },
                {
                    href: '/smalldog',
                    title: '소형견'
                },
  
            ]
          },
          {
              // href: '/middledog',
              title: '중형견',
              childrens: [
                  {
                      href: '/smalldog',
                      title: '소형견'
                  },
                  {
                      href: '/smalldog',
                      title: '소형견'
                  },
  
              ]
          },
          {
              href: '/smalldog',
              title: '소형견',
              childrens: [
                {
                    href: '/smalldog',
                    title: '소형견'
                },
                {
                    href: '/smalldog',
                    title: '소형견'
                },
  
            ]
          },
      ]
  }
    
  export default menuState;