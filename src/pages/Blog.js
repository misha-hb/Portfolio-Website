import React, { useState } from 'react';
import '../styles/Blog.css';
import BlogEntry from './BlogEntry';

const blogs = [
  {
    id: 1,
    title: "What's Next for Me?",
    description: "An introduction and insight to me!",
    content: [
        <p key='1'> I’ve created this blog section on my website to document my journey as a recent University graduate on a quest that probably every other 20-something is on. The quest to find what it is that is meaningful to me enough that I want to do it for the rest of my life. I won’t lie, job security and fulfillment are both very important things to me. I don’t think I can be fulfilled without helping people in some way, shape or form. But I also don’t want to become riddled with debt or struggle to make ends meet. I want to be rich, I won’t lie. I want to live comfortably and afford all the materialistic things I have always wanted. I think it is foolish and dishonest for me to sit here and say I don’t care about money. Everyone does and everyone wants to be able to afford the lifestyle they want to live and there is nothing wrong with that. The truth is, solely making a lot of money is not enough to make me happy and fulfilled. I desperately need to be doing something that is making a difference. I need to be doing something I’m passionate about.</p>,
        <p key='2'>Although I am very fortunate to have had experience in the career field of my degree — technology — I have come to the realization it’s not for me. This has been a painful process. Choosing to forego the opportunity to make <i>good</i> money straight out from undergrad, usually from your desk at home, is not an easy one. I honestly would have preferred it if I stuck to tech. But there’s a gnawing feeling that has not ceased to exist ever since I began my internship and realized what working full-time in a certain career is like. Now when I was a senior in high school I was convinced I wanted to be a lawyer. This dream, however, faded when I began my undergraduate degree in Computer Science, mostly encouraged by my dad who rightfully stated I could get into law school with any degree. Eventually, after learning how my peers were moving to California to start their tech jobs fresh out of undergrad, I dismissed law school as being too tough and competitive and became focused on building a career in tech. When I began my internship, I still remember my reaction to the hourly figure I was told I’d be making. This was double the amount I earned at minimum wage jobs. And those 16 months went by like a breeze. I was able to work from home, attend calls online and had the flexibility to work in the office or at home. For the first time I was able to spend money, on myself and things I convinced myself I could never buy until I got a higher paying job. As amazing as this all seemed, and it truly was as this internship is the reason I am debt-free after completing my undergrad degree, I was still not happy. My life felt as if it lacked something. I ignored these feelings though, because the benefits seemed too good to pass up. However, my final year of school came around and I graduated. It hit me like a ton of bricks. I wasn’t prepared to reach the end of the road of my Bachelor’s degree. For the first time I was faced with what <i>I</i> really wanted to do. When I looked back on what I enjoyed as a middle-schooler, reading and writing, and what I enjoyed in high school, my law class, I realized law was indeed a possibility for me and this brought me an intense sense of empowerment.</p>,
        <p key ='3'>Anyways, here I am now. Looking for jobs but also studying for the LSAT, which comes with a lot of challenges I will probably feel compelled to post a blog entry about eventually. I hope you enjoyed learning more about me. There is a lot more for me to speak about but I’ve held back and hopefully I’ve done a good job of summarizing where I am in the journey of life currently. If you’re in the same boat as me, you’re not alone and hopefully this does something to make you feel better about yourself. Thanks for reading!</p>
    ],
    timestamp: "December 4, 2024, 9:48 PM"
  }
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null); // Tracks the selected blog

  // Render a single blog entry if selected
  if (selectedBlog) {
    return (
      <BlogEntry blog={selectedBlog} onBack={() => setSelectedBlog(null)} />
    );
  }
  // Render the blog list if no blog is selected
  return (
    <div className="projects-section">
      <h1 className="projects-title">Welcome to my Blog</h1>
      <div className="projects-grid" style={{gridTemplateColumns: 'repeat(3,1fr)'}}>
        {blogs.map((blog) => (
          <div key={blog.id} className="project-card">
            <div className="project-card-content">
              <h3 className="project-card-title">{blog.title}</h3>
              <p className="project-card-description">{blog.description}</p>
              <span onClick={() => setSelectedBlog(blog)} className="project-card-link">Read More</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;