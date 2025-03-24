export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    author: string;
    category: string;
    excerpt: string;
    content?: string;
    coverImage: string;
  }
  
  const blogPosts: BlogPost[] = [
    // {
    //     slug: '',
    //     title: '',
    //     date: '',
    //     author: 'Lachlan Chant',
    //     category: '',
    //     excerpt: '',
    //     content: '',
    //     coverImage: ''
    // },
  ];
  
  export default blogPosts;