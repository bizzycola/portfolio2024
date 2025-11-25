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
//     {
//       slug: "getting-started-with-nextjs",
//       title: "Getting Started with Next.js",
//       date: "March 15, 2024",
//       author: "Lachlan Chant",
//       category: "Web Development",
//       excerpt: "Next.js is a powerful React framework that makes building modern web applications easier.",
//       content: `
//         <p class="mb-4">Next.js is a powerful React framework that makes building modern web applications easier. It provides features like server-side rendering, static site generation, and API routes out of the box.</p>
        
//         <h2 class="text-2xl font-bold mt-8 mb-4">Why Next.js?</h2>
//         <p class="mb-4">Next.js simplifies the development process by providing solutions to common challenges in React applications:</p>
//         <ul class="list-disc pl-6 mb-6">
//           <li class="mb-2">Server-side rendering for improved SEO and performance</li>
//           <li class="mb-2">Automatic code splitting for faster page loads</li>
//           <li class="mb-2">Simple client-side routing</li>
//           <li class="mb-2">API routes to build your API without requiring a separate backend</li>
//           <li class="mb-2">Built-in CSS and Sass support</li>
//         </ul>
        
//         <h2 class="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
//         <p class="mb-4">To create a new Next.js app, you can use the create-next-app tool:</p>
//         <pre class="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
//           <code>npx create-next-app@latest my-next-app</code>
//         </pre>
        
//         <p class="mb-4">This sets up a new Next.js project with a default directory structure and configuration. Once installed, you can start the development server:</p>
//         <pre class="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
//           <code>cd my-next-app
//   npm run dev</code>
//         </pre>
        
//         <h2 class="text-2xl font-bold mt-8 mb-4">Project Structure</h2>
//         <p class="mb-4">A typical Next.js project includes these key directories:</p>
//         <ul class="list-disc pl-6 mb-6">
//           <li class="mb-2"><strong>pages/</strong> - All your pages go here. Each file becomes a route.</li>
//           <li class="mb-2"><strong>public/</strong> - Static assets like images and fonts</li>
//           <li class="mb-2"><strong>styles/</strong> - CSS or SCSS files</li>
//           <li class="mb-2"><strong>components/</strong> - Reusable React components</li>
//         </ul>
        
//         <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
//         <p class="mb-4">Next.js provides an excellent developer experience with all the features needed to build modern web applications. If you're already familiar with React, transitioning to Next.js is relatively straightforward and brings many benefits.</p>
        
//         <p class="mb-4">In future posts, we'll explore more advanced Next.js features like dynamic routes, API routes, and deployment strategies.</p>
//       `,
//       coverImage: "https://placehold.co/600/EEE/31343C.jpg"
//     },
//     {
//       slug: "working-with-typescript",
//       title: "TypeScript for Frontend Developers",
//       date: "February 28, 2024",
//       author: "Lachlan Chant",
//       category: "Web Development",
//       excerpt: "TypeScript adds static typing to JavaScript, making your code more robust and easier to maintain.",
//       content: `
//         <p class="mb-4">TypeScript has become an essential tool for modern web development, especially in larger projects or teams. By adding static types to JavaScript, TypeScript helps catch errors early in the development process.</p>
        
//         <h2 class="text-2xl font-bold mt-8 mb-4">Why Use TypeScript?</h2>
//         <p class="mb-4">There are several compelling reasons to adopt TypeScript in your projects:</p>
//         <ul class="list-disc pl-6 mb-6">
//           <li class="mb-2">Catch errors during development rather than at runtime</li>
//           <li class="mb-2">Better IDE support with intelligent code completion</li>
//           <li class="mb-2">Easier refactoring and maintenance</li>
//           <li class="mb-2">Self-documenting code that's easier for team members to understand</li>
//           <li class="mb-2">Gradual adoption - you can mix TypeScript and JavaScript files</li>
//         </ul>
        
//         <h2 class="text-2xl font-bold mt-8 mb-4">Getting Started with TypeScript</h2>
//         <p class="mb-4">To add TypeScript to your project:</p>
//         <pre class="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
//           <code>npm install --save-dev typescript @types/react</code>
//         </pre>
        
//         <p class="mb-4">Create a tsconfig.json file in your project root:</p>
//         <pre class="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
//           <code>{
//     "compilerOptions": {
//       "target": "es5",
//       "lib": ["dom", "dom.iterable", "esnext"],
//       "allowJs": true,
//       "skipLibCheck": true,
//       "strict": true,
//       "forceConsistentCasingInFileNames": true,
//       "noEmit": true,
//       "esModuleInterop": true,
//       "module": "esnext",
//       "moduleResolution": "node",
//       "resolveJsonModule": true,
//       "isolatedModules": true,
//       "jsx": "preserve"
//     },
//     "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
//     "exclude": ["node_modules"]
//   }</code>
//         </pre>
        
//         <h2 class="text-2xl font-bold mt-8 mb-4">Basic TypeScript Examples</h2>
//         <p class="mb-4">Here's a simple example of TypeScript with React:</p>
//         <pre class="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
//           <code>// Define an interface for our component props
//   interface UserCardProps {
//     name: string;
//     email: string;
//     age?: number; // Optional property
//   }
  
//   // Use the interface in a React component
//   const UserCard: React.FC<UserCardProps> = ({ name, email, age }) => {
//     return (
//       <div className="user-card">
//         <h2>{name}</h2>
//         <p>{email}</p>
//         {age && <p>Age: {age}</p>}
//       </div>
//     );
//   };</code>
//         </pre>
        
//         <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
//         <p class="mb-4">TypeScript adds a layer of safety to your JavaScript code and improves the development experience, especially in larger projects. While there is a learning curve, the benefits typically outweigh the initial investment in learning the type system.</p>
        
//         <p class="mb-4">In future posts, we'll explore more advanced TypeScript features and patterns for React applications.</p>
//       `,
//       coverImage: "https://placehold.co/600/EEE/31343C.jpg"
//     },
//     {
//       slug: "optimizing-react-performance",
//       title: "Optimizing React Performance",
//       date: "January 15, 2024",
//       author: "Lachlan Chant",
//       category: "Web Development",
//       excerpt: "Learn effective strategies to improve the performance of your React applications.",
//       content: `
//         <p class="mb-4">As React applications grow in complexity, performance optimizations become increasingly important. In this post, we'll explore some practical techniques to make your React apps faster and more responsive.</p>
        
//         <h2 class="text-2xl font-bold mt-8 mb-4">Common Performance Issues</h2>
//         <p class="mb-4">Before diving into solutions, let's identify common performance bottlenecks in React applications:</p>
//         <ul class="list-disc pl-6 mb-6">
//           <li class="mb-2">Unnecessary re-renders</li>
//           <li class="mb-2">Large component trees</li>
//           <li class="mb-2">Expensive calculations during render</li>
//           <li class="mb-2">Inefficient state management</li>
//           <li class="mb-2">Large bundle sizes</li>
//         </ul>
        
//         <h2 class="text-2xl font-bold mt-8 mb-4">React.memo for Component Memoization</h2>
//         <p class="mb-4">Use React.memo to prevent unnecessary re-renders of functional components:</p>
//         <pre class="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
//           <code>const ExpensiveComponent = React.memo(({ data }) => {
//     // Component implementation
//     return (
//       <div>
//         {/* Render data */}
//       </div>
//     );
//   });</code>
//         </pre>
        
//         <h2 class="text-2xl font-bold mt-8 mb-4">useMemo and useCallback</h2>
//         <p class="mb-4">Memoize expensive calculations and callback functions:</p>
//         <pre class="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
//           <code>// Memoize expensive calculation
//   const memoizedValue = useMemo(() => {
//     return computeExpensiveValue(a, b);
//   }, [a, b]);
  
//   // Memoize callback function
//   const memoizedCallback = useCallback(() => {
//     doSomething(a, b);
//   }, [a, b]);</code>
//         </pre>
        
//         <h2 class="text-2xl font-bold mt-8 mb-4">Code Splitting</h2>
//         <p class="mb-4">Split your bundle to load only what's needed for each page:</p>
//         <pre class="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
//           <code>// Dynamic import with React.lazy
//   const LazyComponent = React.lazy(() => import('./LazyComponent'));
  
//   // Use with Suspense
//   function MyComponent() {
//     return (
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyComponent />
//       </Suspense>
//     );
//   }</code>
//         </pre>
        
//         <h2 class="text-2xl font-bold mt-8 mb-4">Virtualization for Long Lists</h2>
//         <p class="mb-4">Use virtualization libraries like react-window or react-virtualized for rendering large lists:</p>
//         <pre class="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
//           <code>import { FixedSizeList } from 'react-window';
  
//   function VirtualizedList({ items }) {
//     const Row = ({ index, style }) => (
//       <div style={style}>
//         {items[index]}
//       </div>
//     );
  
//     return (
//       <FixedSizeList
//         height={500}
//         width={300}
//         itemCount={items.length}
//         itemSize={35}
//       >
//         {Row}
//       </FixedSizeList>
//     );
//   }</code>
//         </pre>
        
//         <h2 class="text-2xl font-bold mt-8 mb-4">Profiling with React DevTools</h2>
//         <p class="mb-4">Use React DevTools Profiler to identify performance bottlenecks:</p>
//         <ol class="list-decimal pl-6 mb-6">
//           <li class="mb-2">Install React DevTools browser extension</li>
//           <li class="mb-2">Open the Profiler tab</li>
//           <li class="mb-2">Click "Record" and perform actions in your app</li>
//           <li class="mb-2">Analyze which components are re-rendering and how long they take</li>
//         </ol>
        
//         <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
//         <p class="mb-4">Optimizing React performance is often about preventing unnecessary work rather than making existing work faster. By applying these techniques strategically, you can significantly improve the user experience of your React applications.</p>
        
//         <p class="mb-4">Remember to measure performance before and after optimizations to ensure your changes are actually beneficial.</p>
//       `,
//       coverImage: "https://placehold.co/600/EEE/31343C.jpg"
//     },
//     {
//       slug: "serverless-functions-with-netlify",
//       title: "Building with Serverless Functions on Netlify",
//       date: "December 5, 2023",
//       author: "Lachlan Chant",
//       category: "Cloud",
//       excerpt: "Explore how to leverage serverless functions to add dynamic functionality to static sites.",
//       coverImage: "https://placehold.co/600/EEE/31343C.jpg"
//     },
//     {
//       slug: "introduction-to-tailwind",
//       title: "Introduction to Tailwind CSS",
//       date: "November 20, 2023",
//       author: "Lachlan Chant",
//       category: "CSS",
//       excerpt: "Learn how Tailwind CSS can speed up your development workflow and help create consistent designs.",
//       coverImage: "https://placehold.co/600/EEE/31343C.jpg"
//     },
//     {
//       slug: "modern-javascript-features",
//       title: "Modern JavaScript Features You Should Know",
//       date: "October 18, 2023",
//       author: "Lachlan Chant",
//       category: "JavaScript",
//       excerpt: "Explore the latest JavaScript features that make coding more concise and powerful.",
//       coverImage: "https://placehold.co/600/EEE/31343C.jpg"
//     },
//     {
//       slug: "docker-for-developers",
//       title: "Docker for Web Developers",
//       date: "September 30, 2023",
//       author: "Lachlan Chant",
//       category: "DevOps",
//       excerpt: "A beginner-friendly introduction to Docker and how it can improve your development workflow.",
//       coverImage: "https://placehold.co/600/EEE/31343C.jpg"
//     },
//     {
//       slug: "git-workflow-best-practices",
//       title: "Git Workflow Best Practices",
//       date: "September 15, 2023",
//       author: "Lachlan Chant",
//       category: "Development",
//       excerpt: "Improve your team's productivity with these Git workflow strategies and best practices.",
//       coverImage: "https://placehold.co/600/EEE/31343C.jpg"
//     },
//     {
//       slug: "css-grid-vs-flexbox",
//       title: "CSS Grid vs Flexbox: Which to Use When",
//       date: "August 23, 2023",
//       author: "Lachlan Chant",
//       category: "CSS",
//       excerpt: "A practical guide to understanding when to use CSS Grid and when to use Flexbox in your layouts.",
//       coverImage: "https://placehold.co/600/EEE/31343C.jpg"
//     },
//     {
//       slug: "state-management-in-react",
//       title: "State Management Options in React",
//       date: "July 18, 2023",
//       author: "Lachlan Chant",
//       category: "Web Development",
//       excerpt: "Compare different state management approaches in React, from Context API to Redux and beyond.",
//       coverImage: "https://placehold.co/600/EEE/31343C.jpg"
//     },
//     {
//       slug: "api-design-principles",
//       title: "RESTful API Design Principles",
//       date: "June 10, 2023",
//       author: "Lachlan Chant",
//       category: "Backend",
//       excerpt: "Learn the core principles of designing clean, maintainable, and efficient RESTful APIs.",
//       coverImage: "https://placehold.co/600/EEE/31343C.jpg"
//     }
  ];
  
  export default blogPosts;