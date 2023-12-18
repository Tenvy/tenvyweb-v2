import {
    BsEnvelopeAtFill as EmailIcon,
    BsGithub as GithubIcon,
    BsInstagram as InstagramIcon,
    BsLinkedin as LinkedinIcon,
    BsTwitter as TwitterIcon,
  } from 'react-icons/bs';

  const iconSize = 20;

  import { MenuItemProps } from '@/types/sidebarMenu';

export const SOCIAL_MEDIA: MenuItemProps[] = [
    {
      title: 'Email',
      href: 'mailto:riskykusyon.business@gmail.com',
      icon: <EmailIcon size={iconSize} />,
      isShow: true,
      isExternal: true,
      eventName: 'Contact: Email',
      className: '!bg-green-600 border border-neutral-700',
      type: 'Link',
    }, 
  
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/tenvy/',
      icon: <LinkedinIcon size={iconSize} />,
      isShow: true,
      isExternal: true,
      eventName: 'Social: Linkedin',
      className: '!bg-blue-500 border border-neutral-700',
      type: 'Link',
    },
    {
      title: 'Twitter',
      href: 'https://twitter.com/tenvy',
      icon: <TwitterIcon size={iconSize} />,
      isShow: true,
      isExternal: true,
      eventName: 'Social: Twitter',
      className: '!bg-sky-500 border border-neutral-700',
      type: 'Link',
    },
    {
      title: 'Instagram',
      href: 'https://instagram.com/riskiksn',
      icon: <InstagramIcon size={iconSize} />,
      isShow: true,
      isExternal: true,
      eventName: 'Social: Instagram',
      className: '!bg-orange-700 border border-neutral-700',
      type: 'Link',
    },
    {
      title: 'Github',
      href: 'https://github.com/tenvy',
      icon: <GithubIcon size={iconSize} />,
      isShow: true,
      isExternal: true,
      eventName: 'Social: Github',
      className: '!bg-black border border-neutral-700',
      type: 'Link',
    },
  ];