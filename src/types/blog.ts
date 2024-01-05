export type BlogItemProps = {
    id: string;
    title: string;
    description: string;
    content: string;
    images: string;
    publisher: publisherProps;
    views: number;
    timeRead: number;
    tags: [];
    createdate: string;
    usersUuid: string;
}

export type publisherProps = {
    nickname: string;
    profileImage: string;
}

export interface BlogsProps {
    blogs: BlogItemProps[];
  }