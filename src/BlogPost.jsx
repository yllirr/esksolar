import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  
  // Blog posts data
  const BLOG_POSTS = [
    {
      id: 1,
      title: "The Future of Solar Energy: Trends to Watch in 2024",
      excerpt: "Discover the latest innovations and trends shaping the solar industry, from advanced battery storage to smart grid integration.",
      content: `
        <p>The solar energy industry is experiencing unprecedented growth and innovation. As we move through 2024, several key trends are emerging that will shape the future of renewable energy.</p>
        
        <h3>Advanced Battery Storage Technology</h3>
        <p>One of the most significant developments in solar energy is the advancement of battery storage technology. Modern lithium-ion batteries are becoming more efficient, affordable, and long-lasting. This means homeowners and businesses can store excess solar energy during peak production hours and use it during high-demand periods or at night.</p>
        
        <p>The integration of smart battery management systems allows for optimal energy distribution, maximizing the return on investment for solar installations. Companies are now offering battery systems with 20+ year warranties, making them a reliable long-term investment.</p>
        
        <h3>Smart Grid Integration</h3>
        <p>Smart grid technology is revolutionizing how solar energy is distributed and managed. Advanced monitoring systems can now predict energy production based on weather patterns, optimize energy distribution, and even sell excess energy back to the grid automatically.</p>
        
        <p>This integration allows for better grid stability and enables more efficient use of renewable energy sources. Homeowners can now participate in demand response programs, earning money by reducing their energy consumption during peak hours.</p>
        
        <h3>Artificial Intelligence in Solar</h3>
        <p>AI is playing an increasingly important role in solar energy optimization. Machine learning algorithms can analyze energy consumption patterns, weather data, and system performance to optimize energy production and storage.</p>
        
        <p>Predictive maintenance systems can identify potential issues before they become problems, reducing downtime and maintenance costs. AI-powered energy management systems can automatically adjust settings to maximize efficiency based on real-time conditions.</p>
        
        <h3>Conclusion</h3>
        <p>The future of solar energy is bright, with technology continuing to drive down costs while improving efficiency and reliability. These trends indicate a shift toward more intelligent, integrated, and user-friendly solar energy systems that will make renewable energy accessible to more people than ever before.</p>
      `,
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      image: "solar-future.jpg",
      tags: ["Solar Energy", "Technology", "Innovation", "Battery Storage"]
    },
    {
      id: 2,
      title: "How to Maximize Your Solar Panel Efficiency",
      excerpt: "Learn practical tips and strategies to get the most out of your solar panel system and reduce your energy bills.",
      content: `
        <p>Getting the most out of your solar panel system requires understanding how to optimize its performance. Here are proven strategies to maximize your solar panel efficiency and reduce your energy bills.</p>
        
        <h3>Optimal Panel Placement</h3>
        <p>The placement of your solar panels is crucial for maximum efficiency. Panels should face south in the Northern Hemisphere (or north in the Southern Hemisphere) to receive the most sunlight throughout the day. The optimal tilt angle is typically equal to your latitude, but this can be adjusted seasonally for better performance.</p>
        
        <p>Avoid shading from trees, buildings, or other obstructions. Even partial shading can significantly reduce panel output. Consider trimming trees or adjusting panel placement to minimize shadows during peak sun hours.</p>
        
        <h3>Regular Cleaning and Maintenance</h3>
        <p>Dirty solar panels can lose 10-25% of their efficiency. Regular cleaning removes dust, pollen, bird droppings, and other debris that can block sunlight. Clean your panels every 3-6 months, or more frequently in dusty areas.</p>
        
        <p>Inspect your system regularly for loose connections, damaged wiring, or cracked panels. Professional maintenance checks should be performed annually to ensure optimal performance.</p>
        
        <h3>Energy Monitoring and Optimization</h3>
        <p>Install a monitoring system to track your energy production and consumption. This data helps identify patterns and opportunities for optimization. Many modern inverters come with built-in monitoring capabilities.</p>
        
        <p>Use energy-efficient appliances and LED lighting to reduce your overall energy consumption. Time high-energy activities like laundry and dishwashing for peak solar production hours.</p>
        
        <h3>Battery Storage Integration</h3>
        <p>Adding battery storage allows you to store excess energy for use during peak hours or at night. This maximizes your solar investment and provides backup power during outages.</p>
        
        <p>Smart battery systems can automatically optimize charging and discharging based on your usage patterns and utility rates, further increasing your savings.</p>
        
        <h3>Conclusion</h3>
        <p>By following these strategies, you can significantly improve your solar panel system's efficiency and maximize your return on investment. Regular maintenance, optimal placement, and smart energy management are key to getting the most out of your solar installation.</p>
      `,
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Tips & Guides",
      image: "solar-efficiency.jpg",
      tags: ["Solar Panels", "Efficiency", "Maintenance", "Optimization"]
    },
    {
      id: 3,
      title: "Solar Battery Storage: Is It Worth the Investment?",
      excerpt: "Explore the benefits and costs of adding battery storage to your solar system for energy independence.",
      content: `
        <p>Solar battery storage has become increasingly popular as technology improves and costs decrease. But is it worth the investment for your specific situation? Let's explore the benefits, costs, and considerations.</p>
        
        <h3>Benefits of Solar Battery Storage</h3>
        <p><strong>Energy Independence:</strong> Battery storage allows you to store excess solar energy for use during peak hours or at night, reducing your reliance on the grid and protecting against power outages.</p>
        
        <p><strong>Cost Savings:</strong> By storing energy when rates are low and using it during peak hours when rates are high, you can significantly reduce your electricity bills. In some areas, you can also participate in demand response programs for additional savings.</p>
        
        <p><strong>Environmental Impact:</strong> Battery storage maximizes the use of your clean solar energy, reducing your carbon footprint and supporting the transition to renewable energy.</p>
        
        <h3>Cost Considerations</h3>
        <p>Battery storage systems typically cost $10,000-$20,000 depending on capacity and features. However, federal tax credits can reduce this cost by 30%, and many states offer additional incentives.</p>
        
        <p>Consider your electricity rates, net metering policies, and usage patterns when calculating payback periods. In areas with high electricity rates or time-of-use pricing, batteries often pay for themselves within 7-10 years.</p>
        
        <h3>Types of Battery Systems</h3>
        <p><strong>Lithium-Ion:</strong> Most common type, offering high efficiency and long lifespan (10-15 years). Best for most residential applications.</p>
        
        <p><strong>Lead-Acid:</strong> Lower cost but shorter lifespan and lower efficiency. Suitable for off-grid applications or budget-conscious installations.</p>
        
        <p><strong>Flow Batteries:</strong> Emerging technology with very long lifespan but higher upfront costs. Best for commercial applications.</p>
        
        <h3>Making the Decision</h3>
        <p>Battery storage is most beneficial if you:</p>
        <ul>
          <li>Live in an area with high electricity rates or time-of-use pricing</li>
          <li>Experience frequent power outages</li>
          <li>Want to maximize your solar investment</li>
          <li>Are committed to energy independence</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>While battery storage requires a significant upfront investment, it can provide substantial long-term benefits in terms of energy independence, cost savings, and environmental impact. Carefully evaluate your specific situation, including local incentives and electricity rates, to determine if battery storage is right for you.</p>
      `,
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Investment",
      image: "battery-storage.jpg",
      tags: ["Battery Storage", "Investment", "Energy Independence", "Cost Savings"]
    },
    {
      id: 4,
      title: "Understanding Solar Incentives and Tax Credits",
      excerpt: "A comprehensive guide to federal, state, and local incentives that can significantly reduce your solar installation costs.",
      content: `
        <p>Solar incentives and tax credits can significantly reduce the cost of your solar installation, making renewable energy more accessible than ever. Understanding these programs is crucial for maximizing your savings.</p>
        
        <h3>Federal Solar Investment Tax Credit (ITC)</h3>
        <p>The federal ITC is the most significant solar incentive available. It provides a 30% tax credit for residential and commercial solar installations. This credit applies to the total cost of your solar system, including equipment, installation, and permitting.</p>
        
        <p>The ITC is scheduled to decrease to 26% in 2033 and 22% in 2034, so installing sooner rather than later maximizes your savings. The credit can be carried forward if it exceeds your tax liability in the installation year.</p>
        
        <h3>State and Local Incentives</h3>
        <p>Many states offer additional incentives beyond the federal ITC:</p>
        
        <p><strong>Rebates:</strong> Direct cash payments that reduce your upfront costs. These vary by state and utility company.</p>
        
        <p><strong>Property Tax Exemptions:</strong> Some states exempt solar installations from property tax increases, protecting your investment.</p>
        
        <p><strong>Sales Tax Exemptions:</strong> Several states waive sales tax on solar equipment, reducing overall costs.</p>
        
        <h3>Net Metering Programs</h3>
        <p>Net metering allows you to sell excess solar energy back to the grid at retail rates. This effectively turns your electric meter backward when you produce more energy than you consume.</p>
        
        <p>Programs vary by state and utility company. Some offer full retail rate credits, while others provide reduced rates or time-of-use pricing. Understanding your local net metering policy is crucial for calculating your solar investment returns.</p>
        
        <h3>Utility Company Programs</h3>
        <p>Many utility companies offer their own incentive programs:</p>
        
        <p><strong>Performance-Based Incentives:</strong> Payments based on the amount of energy your system produces over time.</p>
        
        <p><strong>Demand Response Programs:</strong> Payments for reducing energy consumption during peak demand periods.</p>
        
        <p><strong>Time-of-Use Rates:</strong> Special pricing that encourages energy use during off-peak hours.</p>
        
        <h3>How to Find Incentives</h3>
        <p>Use these resources to find available incentives:</p>
        <ul>
          <li>Database of State Incentives for Renewables & Efficiency (DSIRE)</li>
          <li>Your state's energy office website</li>
          <li>Local utility company programs</li>
          <li>Solar installer consultations</li>
        </ul>
        
        <h3>Maximizing Your Savings</h3>
        <p>To maximize your solar savings:</p>
        <ul>
          <li>Install before incentive expiration dates</li>
          <li>Combine multiple incentives when possible</li>
          <li>Work with experienced installers familiar with local programs</li>
          <li>Keep detailed records for tax purposes</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Solar incentives can reduce your installation costs by 50% or more when combined effectively. Take time to research all available programs in your area and work with professionals who understand the incentive landscape to maximize your solar investment.</p>
      `,
      author: "David Thompson",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Finance",
      image: "solar-incentives.jpg",
      tags: ["Tax Credits", "Incentives", "Finance", "Savings"]
    },
    {
      id: 5,
      title: "Residential vs Commercial Solar: Key Differences",
      excerpt: "Compare residential and commercial solar solutions to understand which approach works best for your needs.",
      content: `
        <p>Solar energy solutions vary significantly between residential and commercial applications. Understanding these differences is crucial for choosing the right system for your specific needs and maximizing your return on investment.</p>
        
        <h3>System Size and Scale</h3>
        <p><strong>Residential Systems:</strong> Typically range from 3-20 kW, designed to offset household energy consumption. These systems are sized based on roof space, energy usage, and budget constraints.</p>
        
        <p><strong>Commercial Systems:</strong> Can range from 50 kW to several megawatts, designed to offset business energy costs and potentially generate revenue through excess energy sales.</p>
        
        <h3>Installation Complexity</h3>
        <p><strong>Residential:</strong> Generally simpler installations on single-family homes with standard roof structures. Permitting is typically straightforward with local building departments.</p>
        
        <p><strong>Commercial:</strong> More complex installations involving multiple buildings, ground-mounted systems, or complex roof structures. Permitting often requires additional engineering studies and utility coordination.</p>
        
        <h3>Financial Considerations</h3>
        <p><strong>Residential:</strong> Payback periods typically 6-12 years. Financing options include cash purchase, loans, leases, and power purchase agreements (PPAs).</p>
        
        <p><strong>Commercial:</strong> Often shorter payback periods (4-8 years) due to larger scale and business tax benefits. More financing options available, including commercial loans and specialized solar financing.</p>
        
        <h3>Energy Management</h3>
        <p><strong>Residential:</strong> Simple energy monitoring and basic load management. Systems typically include standard inverters and basic monitoring.</p>
        
        <p><strong>Commercial:</strong> Advanced energy management systems with detailed monitoring, load balancing, and integration with building management systems.</p>
        
        <h3>Maintenance Requirements</h3>
        <p><strong>Residential:</strong> Minimal maintenance requirements. Annual cleaning and inspection typically sufficient.</p>
        
        <p><strong>Commercial:</strong> More intensive maintenance schedules due to larger systems and higher energy production. Professional maintenance contracts often recommended.</p>
        
        <h3>Regulatory Environment</h3>
        <p><strong>Residential:</strong> Subject to residential building codes and local utility interconnection requirements.</p>
        
        <p><strong>Commercial:</strong> Additional regulatory requirements including environmental impact studies, utility-scale interconnection agreements, and commercial building codes.</p>
        
        <h3>Technology Options</h3>
        <p><strong>Residential:</strong> Standard monocrystalline or polycrystalline panels with string inverters or microinverters.</p>
        
        <p><strong>Commercial:</strong> Access to advanced technologies including bifacial panels, tracking systems, and utility-scale inverters for maximum efficiency.</p>
        
        <h3>Conclusion</h3>
        <p>While both residential and commercial solar systems provide clean, renewable energy, they serve different purposes and have distinct requirements. Residential systems focus on cost savings and energy independence for homeowners, while commercial systems often prioritize maximum energy production and return on investment for businesses.</p>
        
        <p>Choosing the right approach depends on your specific goals, budget, and energy needs. Working with experienced solar professionals who understand both residential and commercial applications can help you make the best decision for your situation.</p>
      `,
      author: "Lisa Wang",
      date: "February 20, 2024",
      readTime: "6 min read",
      category: "Comparison",
      image: "residential-commercial.jpg",
      tags: ["Residential Solar", "Commercial Solar", "Comparison", "Installation"]
    },
    {
      id: 6,
      title: "Solar Panel Maintenance: What You Need to Know",
      excerpt: "Keep your solar system running efficiently with these essential maintenance tips and best practices.",
      content: `
        <p>Proper maintenance is essential for keeping your solar panel system running efficiently and maximizing its lifespan. While solar panels are generally low-maintenance, regular care ensures optimal performance and protects your investment.</p>
        
        <h3>Regular Cleaning</h3>
        <p>Dirty solar panels can lose 10-25% of their efficiency. Regular cleaning removes dust, pollen, bird droppings, leaves, and other debris that can block sunlight.</p>
        
        <p><strong>Cleaning Schedule:</strong> Clean panels every 3-6 months, or more frequently in dusty areas or after storms. Spring and fall cleaning are particularly important.</p>
        
        <p><strong>Cleaning Method:</strong> Use a soft brush or sponge with mild soap and water. Avoid abrasive materials that could scratch the panels. Rinse thoroughly with clean water.</p>
        
        <h3>Visual Inspections</h3>
        <p>Regular visual inspections help identify potential issues before they become major problems:</p>
        
        <p><strong>Panel Condition:</strong> Check for cracks, chips, or discoloration on the panels themselves.</p>
        
        <p><strong>Mounting System:</strong> Ensure all mounting hardware is secure and hasn't been damaged by weather or wildlife.</p>
        
        <p><strong>Wiring:</strong> Look for loose connections, damaged insulation, or signs of animal damage.</p>
        
        <h3>Performance Monitoring</h3>
        <p>Modern solar systems include monitoring capabilities that track energy production. Regular monitoring helps identify performance issues:</p>
        
        <p><strong>Energy Production:</strong> Compare current production to historical data to identify trends or sudden drops in performance.</p>
        
        <p><strong>System Alerts:</strong> Pay attention to any error messages or alerts from your monitoring system.</p>
        
        <p><strong>Utility Bills:</strong> Monitor your electricity bills to ensure your solar system is providing expected savings.</p>
        
        <h3>Professional Maintenance</h3>
        <p>While basic maintenance can be done by homeowners, professional maintenance is recommended annually:</p>
        
        <p><strong>Electrical Inspection:</strong> Professional inspection of all electrical connections and components.</p>
        
        <p><strong>Inverter Maintenance:</strong> Checking inverter performance and updating firmware if necessary.</p>
        
        <p><strong>System Testing:</strong> Comprehensive testing of all system components to ensure optimal performance.</p>
        
        <h3>Seasonal Considerations</h3>
        <p><strong>Winter:</strong> Remove snow buildup that can block sunlight. Be careful not to damage panels while clearing snow.</p>
        
        <p><strong>Spring:</strong> Thorough cleaning after winter weather and inspection for any damage from storms or ice.</p>
        
        <p><strong>Summer:</strong> Monitor for overheating and ensure adequate ventilation around panels.</p>
        
        <p><strong>Fall:</strong> Clean panels before winter and trim any overhanging branches that could cause shading.</p>
        
        <h3>Common Issues and Solutions</h3>
        <p><strong>Reduced Production:</strong> Often caused by shading, dirt, or equipment issues. Check for obstructions and clean panels.</p>
        
        <p><strong>Inverter Problems:</strong> May require professional repair or replacement. Check for error codes and contact your installer.</p>
        
        <p><strong>Animal Damage:</strong> Install protective measures like critter guards to prevent animals from damaging wiring.</p>
        
        <h3>Maintenance Checklist</h3>
        <ul>
          <li>Clean panels every 3-6 months</li>
          <li>Inspect mounting hardware quarterly</li>
          <li>Check wiring connections monthly</li>
          <li>Monitor energy production weekly</li>
          <li>Schedule professional maintenance annually</li>
          <li>Keep records of all maintenance activities</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Regular maintenance is essential for keeping your solar panel system running efficiently and maximizing its lifespan. By following these maintenance tips and scheduling professional inspections, you can ensure your solar investment continues to provide clean, cost-effective energy for years to come.</p>
      `,
      author: "James Wilson",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Maintenance",
      image: "solar-maintenance.jpg",
      tags: ["Maintenance", "Cleaning", "Inspection", "Performance"]
    }
  ];

  const post = BLOG_POSTS.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <div className="not-found">
            <h1>Blog Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      {/* Header Navigation */}
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="logo">SunPulse</Link>
            <nav className="nav-menu">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <button className="btn-quote-header">Get a Quote</button>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <Link to="/">HOME</Link>
          <span className="separator">></span>
          <Link to="/blog">BLOG</Link>
          <span className="separator">></span>
          <span className="current">{post.title}</span>
        </div>
      </div>

      {/* Blog Post Content */}
      <article className="blog-post-content">
        <div className="container">
          <div className="post-header">
            <div className="post-category">{post.category}</div>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-excerpt">{post.excerpt}</p>
            <div className="post-meta">
              <span className="post-author">By {post.author}</span>
              <span className="post-date">{post.date}</span>
              <span className="post-read-time">{post.readTime}</span>
            </div>
          </div>

          <div className="post-image">
            <img src={`/foto/blog/${post.image}`} alt={post.title} />
          </div>

          <div className="post-body">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="post-tags">
            <h4>Tags:</h4>
            <div className="tags-list">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="post-navigation">
            <Link to="/blog" className="back-to-blog">
              ← Back to All Posts
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
