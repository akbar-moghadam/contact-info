import { GoLocation } from 'react-icons/go';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BiPhoneCall } from 'react-icons/bi';
import { ImFacebook2,ImTwitter,ImInstagram,ImLinkedin } from 'react-icons/im';

export const contactData=[
    {
        id:1,
        title:"33616 Hashtgerd Karaj Iran",
        titleIcon:<GoLocation/>,
      
    },
    {
        id:2,
        title:"lorem@ipsum.com",
        titleIcon:<HiOutlineMailOpen/>,
       
    },{
        id:3,
        title:"98 458 635",
        titleIcon:<BiPhoneCall/>,
       
    },
]

export const soLink=[
    {
        id:1,
        icon: <ImInstagram/>,
        link: "/instagram"

    },
    {
        id:1,
        icon: <ImLinkedin/>,
        link: "/linkedin"

    },
    {
        id:1,
        icon: <ImTwitter/>,
        link: "/twitter"

    },
    {
        id:1,
        icon: <ImFacebook2/>,
        link: "/facebook"

    }
]