# Seed Data for Pixel Flame Portfolio

This file contains sample data to populate your Pixel Flame portfolio. You can add this data directly through the Supabase dashboard or create a seed script.

## Sample Projects

### Project 1: E-Commerce Platform
```sql
INSERT INTO projects (title, slug, category, description, problem, solution, tech_stack, image_url, timeline, results, featured)
VALUES (
  'Modern E-Commerce Platform',
  'modern-ecommerce-platform',
  'web',
  'A high-performance e-commerce solution with real-time inventory management and seamless checkout experience.',
  'Our client needed a scalable online store that could handle thousands of concurrent users during sales events while maintaining fast page load times and providing an intuitive shopping experience.',
  'We built a modern e-commerce platform using Next.js for server-side rendering and optimal performance. Implemented real-time inventory tracking with WebSocket connections, integrated Stripe for secure payments, and created a responsive design that works flawlessly across all devices.',
  ARRAY['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
  'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
  '3 months',
  '50% increase in conversion rate
40% faster page load times
99.9% uptime during peak sales
Mobile sales increased by 70%',
  true
);
```

### Project 2: Fitness Tracking App
```sql
INSERT INTO projects (title, slug, category, description, problem, solution, tech_stack, image_url, timeline, results, featured)
VALUES (
  'FitTrack Pro Mobile App',
  'fittrack-pro-mobile-app',
  'mobile',
  'Cross-platform fitness tracking application with workout plans, nutrition tracking, and social features.',
  'Users needed a comprehensive fitness solution that works offline, syncs across devices, and provides personalized workout recommendations based on their goals and progress.',
  'Developed a React Native app with offline-first architecture using local storage and background sync. Integrated machine learning for personalized workout suggestions, real-time progress tracking with charts, and social features to connect fitness enthusiasts.',
  ARRAY['React Native', 'TypeScript', 'Expo', 'Node.js', 'MongoDB', 'Firebase', 'TensorFlow'],
  'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg',
  '4 months',
  '50,000+ downloads in first 3 months
4.8 star rating on app stores
85% user retention rate
Featured in App Store wellness category',
  true
);
```

### Project 3: SaaS Dashboard
```sql
INSERT INTO projects (title, slug, category, description, problem, solution, tech_stack, image_url, timeline, results, featured)
VALUES (
  'Analytics Dashboard Pro',
  'analytics-dashboard-pro',
  'web',
  'Comprehensive analytics platform with real-time data visualization and custom reporting capabilities.',
  'Enterprise clients needed a powerful analytics tool that could process millions of data points in real-time while providing customizable dashboards and automated reporting features.',
  'Created a high-performance dashboard using React with optimized rendering for large datasets. Implemented real-time data streaming with WebSockets, custom chart library for interactive visualizations, and a flexible reporting engine with PDF export capabilities.',
  ARRAY['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
  'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
  '5 months',
  'Processing 10M+ events per day
Sub-second query response times
95% customer satisfaction score
Reduced reporting time by 80%',
  true
);
```

## Sample Blog Posts

### Blog Post 1: React Performance
```sql
INSERT INTO blog_posts (title, slug, excerpt, content, image_url, author, tags, published)
VALUES (
  'Optimizing React Applications for Peak Performance',
  'optimizing-react-applications-performance',
  'Learn essential techniques to make your React applications blazingly fast, from code splitting to memoization strategies.',
  '# Optimizing React Applications for Peak Performance

Performance optimization is crucial for delivering exceptional user experiences. In this guide, we''ll explore proven techniques to make your React applications faster and more efficient.

## Understanding React Performance

React is fast by default, but as applications grow, performance can degrade. Understanding how React renders components is the first step to optimization.

### Key Optimization Techniques

1. **Code Splitting**: Break your application into smaller chunks that load on demand
2. **Memoization**: Use React.memo and useMemo to prevent unnecessary re-renders
3. **Lazy Loading**: Load components only when they''re needed
4. **Virtual Scrolling**: Handle large lists efficiently

## Practical Implementation

Let''s dive into each technique with practical examples you can implement today.

### Code Splitting with React.lazy

Code splitting allows you to split your bundle into smaller chunks. Here''s how to implement it effectively.

### Memoization Strategies

Learn when and how to use React.memo, useMemo, and useCallback for optimal performance gains.

## Conclusion

By implementing these optimization techniques, you can significantly improve your React application''s performance and provide a better user experience.',
  'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
  'Pixel Flame Team',
  ARRAY['React', 'Performance', 'Web Development', 'JavaScript'],
  true
);
```

### Blog Post 2: Mobile Development
```sql
INSERT INTO blog_posts (title, slug, excerpt, content, image_url, author, tags, published)
VALUES (
  'React Native vs Native Development: Making the Right Choice',
  'react-native-vs-native-development',
  'A comprehensive comparison of React Native and native development to help you choose the best approach for your mobile app.',
  '# React Native vs Native Development: Making the Right Choice

Choosing between React Native and native development is one of the most important decisions for your mobile project.

## The Cross-Platform Advantage

React Native allows you to build for iOS and Android with a single codebase, significantly reducing development time and costs.

### When to Choose React Native

- You need to launch on both platforms quickly
- Your team has JavaScript/React expertise
- The app doesn''t require heavy native features
- Budget is a primary concern

### When Native Development Makes Sense

- Maximum performance is critical
- Heavy use of platform-specific features
- Complex animations and graphics
- Large, established native codebase

## Performance Considerations

While React Native has come a long way, native development still has the performance edge for certain use cases.

## Development Speed and Cost

React Native can reduce development time by 30-50% compared to building separate native apps.

## Conclusion

Both approaches have their merits. The right choice depends on your specific requirements, timeline, and resources.',
  'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
  'Pixel Flame Team',
  ARRAY['React Native', 'Mobile Development', 'iOS', 'Android'],
  true
);
```

## Adding Data via Supabase Dashboard

1. Log into your Supabase dashboard
2. Navigate to the Table Editor
3. Select the appropriate table (projects or blog_posts)
4. Click "Insert row" and paste the values from above
5. Adjust the arrays and multiline text as needed

## Note on Images

The sample data uses stock photos from Pexels. For production, replace these with your actual project screenshots and blog post featured images.
