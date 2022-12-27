import { HomeIcon } from './components/ui/icons/headerIcons/HomeIcon';
import { LiveTvIcon } from './components/ui/icons/headerIcons/LiveTvIcon';
import { ShowTvIcon } from './components/ui/icons/headerIcons/ShowTvIcon';
import { MovieIcon } from './components/ui/icons/headerIcons/MovieIcon';
import { MyStuffIcon } from './components/ui/icons/headerIcons/MyStuffIcon';

export const navLinks = [
  {
    id: 1,
    title: 'Discover',
    icon : <HomeIcon />,
    to: '/',
  },
  {
    id: 2,
    title: 'Live TV',
    icon : <LiveTvIcon />,
    to: '/',
  },
  {
    id: 3,
    title: 'TV Shows',
    icon : <ShowTvIcon />,
    to: '/',
  },
  {
    id: 4,
    title: 'Movies',
    icon : <MovieIcon />,
    to: '/',
  },
  {
    id: 5,
    title: 'My Stuff',
    icon : <MyStuffIcon />,
    to: '/',
  },
]