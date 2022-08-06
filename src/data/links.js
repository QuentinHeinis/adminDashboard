import { CashIcon, PresentationChartLineIcon, CalendarIcon, ClipboardListIcon, DatabaseIcon, CollectionIcon, MapIcon, CameraIcon } from "@heroicons/react/outline";

export const links = [
    {
        title: 'Dashboard',
        links: [
            {
                name: 'Dashboard',
                link: '/',
                icon: <PresentationChartLineIcon className='h-6'/>,
            },
            {
                name: 'Gestion du budget',
                link:'/gestion',
                icon: <CashIcon className='h-6'/>,
            }
          ],
    },
    {
        title: 'Utilitaires',
        links: [
            {
                name: 'Calendrier',
                link: '/calendrier',
                icon: <CalendarIcon className='h-6'/>,
            },
            {
                name: 'Todo liste',
                link:'/todo',
                icon: <ClipboardListIcon className='h-6'/>,
            }
          ],
    },
    {
        title: 'Gestions des sites',
        links: [
            {
                name: 'FriendlySport',
                link: '/friendlysport',
                icon: <DatabaseIcon className='h-6'/>,
            },
            {
                name: 'Boutique Suihira',
                link:'/Suihira-boutique',
                icon: <DatabaseIcon className='h-6'/>,
            }
          ],
    },
    {
        title: 'Escalade',
        links: [
            {
                name: 'Matériels',
                link: '/matos',
                icon: <CollectionIcon className='h-6'/>,
            },
            {
                name: 'Sorties',
                link:'/sorties',
                icon: <MapIcon className='h-6'/>,
            },
            {
                name: 'Photos',
                link:'/photos',
                icon: <CameraIcon className='h-6'/>,
            }
          ],
    },
]