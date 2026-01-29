import { Component , OnInit } from '@angular/core';
import { Blog } from '../../models/Blog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs',
  imports: [CommonModule],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss'
})
export class Blogs implements OnInit {
  blogs: Blog[] = [];
  selectedBlog: Blog | null = null; // لتخزين المقال المفتوح

  ngOnInit(): void {
    this.blogs = [
      {
        id: 1,
        title: 'Top 5 Luxurious Rooms for Your Next Vacation',
        imageUrl: 'assets/imgs/SeaViewSuite2.jpg',
        summary: 'Discover our finest rooms designed for relaxation and elegance with stunning views.',
        content: `Experience unparalleled comfort in our luxurious rooms equipped with Experience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped withExperience unparalleled comfort in our luxurious rooms equipped with premium amenities, private balconies, and panoramic views. Our professional service ensures your stay is unforgettable.`,
        author: 'Hotel Team',
        date: 'October 20, 2025'
      },
      {
        id: 2,
        title: 'Why Choose Our Hotel for Business Trips',
        imageUrl: 'assets/imgs/Vision.jpg',
        summary: 'Learn how we make your business travel smooth and productive with our premium services.',
        content: `We offer modern meeting rooms, high-speed internet, and 24/7 support staff. Perfect for professionals who want both comfort and productivity.`,
        author: 'Corporate Relations',
        date: 'October 15, 2025'
      },
      {
        id: 3,
        title: 'Experience the Best Culinary Journey',
        imageUrl: 'assets/imgs/features.jpg',
        summary: 'From gourmet dishes to local delicacies, enjoy a unique dining experience.',
        content: `Our chefs craft dishes from around the world with local inspiration. From breakfast to fine dining, we promise a journey of flavors.`,
        author: 'Chef Marco',
        date: 'September 28, 2025'
      },
      {
        id: 4,
        title: 'Discover the Beauty Around Our Resort',
        imageUrl: 'assets/imgs/LuxurySuite.jpg',
        summary: 'Explore breathtaking nature spots and outdoor adventures near our location.',
        content: `Join guided tours, hike through scenic trails, or enjoy a peaceful evening by the lake. Our resort is surrounded by nature’s wonders.`,
        author: 'Travel Team',
        date: 'September 10, 2025'
      }
    ];
  }

  openBlog(blog: Blog) {
    this.selectedBlog = blog;
    document.body.style.overflow = 'hidden'; // منع التمرير بالخلفية
  }

  closeBlog() {
    this.selectedBlog = null;
    document.body.style.overflow = 'auto';
  }
}
