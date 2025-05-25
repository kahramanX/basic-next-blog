export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Record<string, number>; // Reaksiyonlar belirli bir yapıya sahipse daha spesifik tanımla
  views: number;
  userId: number;
}

export interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export interface SinglePost {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}
