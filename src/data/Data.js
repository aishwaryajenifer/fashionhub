export const category = [
  {
      id: 1,
      category_name: "shirt",
      subCat: [
          {
              id: 11,
              category_name: "Men's dresses",
              path: "/mens-dresses",
          },
          {
              id: 12,
              category_name: "Women's dresses",
              path: "/womens-dresses",
          },
          {
              id: 13,
              category_name: "Baby's dresses",
              path: "/babys-dresses",
          },
      ],
      quantity: "100 Products",
      img: "../assets/img/cart-2.jpg",
      path: "/dresses",
  },
  {
      id: 2,
      category_name: "Frock",
      quantity: "100 Products",
      img: "../assets/img/cart-1.jpg",
      path: "/products",
  },
  {
      id: 3,
      category_name: "Jeans",
      quantity: "100 Products",
      img: "../assets/img/cart-3.jpg",
      path: "/jeans",
  },
  {
      id: 4,
      category_name: "Swimwear",
      quantity: "100 Products",
      img: "../assets/img/cart-4.webp",
      path: "/swimwear",
  },
  {
      id: 5,
      category_name: "Sportwear",
      quantity: "100 Products",
      img: "../assets/img/cart-5.webp",
      path: "/sportwear",
  },
  {
      id: 6,
      category_name: "Jumpsuits",
      quantity: "100 Products",
      img: "../assets/img/cart-6.webp",
      path: "/jumpsuits",
  },
  {
      id: 7,
      category_name: "Blazer",
      quantity: "100 Products",
      img: "../assets/img/cart-7.avif",
      path: "/blazer",
  },
  {
      id: 8,
      category_name: "Jackets",
      quantity: "100 Products",
      img: "../assets/img/cart-8.jpg",
      path: "/jackets",
  },
  {
      id: 9,
      category_name: "Kurti",
      quantity: "100 Products",
      img: "../assets/img/cart-9.jpg",
      path: "/kurti",
  },
  {
      id: 10,
      category_name: "Sleepwear",
      quantity: "100 Products",
      img: "../assets/img/cart-10.jpg",
      path: "/sleepwear",
  },
  {
      id: 11,
      category_name: "Lehanga",
      quantity: "100 Products",
      img: "../assets/img/cart-11.webp",
      path: "/lehanga",
  },
  {
      id: 12,
      category_name: "Skirt",
      quantity: "100 Products",
      img: "../assets/img/cart-12.webp",
      path: "/skirt",
  },
];

 // data.js


 
  export const nav = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/shop",
      text: "Shop",
    },
    {
      path: "/about",
      text: "About",
    },
    {
      path: "/blog",
      text: "Blogs",
    },
    
    {
      path: "/ContactUs",
      text: "Contact",
    },
    {
      path: "/media",
      text: "Media",
    },
    {
      path: "/color",
      text: "Color Analysis",
    },
    {
      path: "/quizpage",
      text: "QuizPage",
    },
   
    {
      path: "/contact",
      text: "Help",
    },
    {
      path: "/faqs",
      text: "FAQs",
    },
  ];
  
  export const topdropdown = [
    {
      id: 1,
      btn: "My Account",
    },
  
    {
      id: 3,
      btn: "USD",
    },
    {
      id: 2,
      btn: "EN",
    },
  ];
  export const socialIcon = [
    {
      icon: <i className="fab fa-facebook-f"></i>,
      name: "facebook",
    },
    {
      icon: <i className="fab fa-twitter"></i>,
      name: "twitter",
    },
    {
      icon: <i className="fab fa-youtube"></i>,
      name: "youtube",
    },
    {
      icon: <i className="fab fa-instagram"></i>,
      name: "instagram",
    },
  ];
  
  export const products = [
    {
      id: 1,
      product_name: "Pink plain frock",
      product_img: "../assets/img/img18.png",
      price: "340.99",
      stars: Array(5).fill(
        <small className="fa fa-star text-primary mr-1"></small>
      ),
      ratingCount: 99,
    },
  
    {
      id: 2,
      product_name: "Purple V neck kurti",
      product_img: "../assets/img/img10.jpg",
      price: "120.99",
      stars: Array(5).fill(
        <small className="fa fa-star text-primary mr-1"></small>
      ),
      ratingCount: 99,
    },
  
    {
      id: 3,
      product_name: "Blue Frock",
      product_img: "../assets/img/img12.jpg",
      price: "180.99",
      stars: Array(5).fill(
        <small className="fa fa-star text-primary mr-1"></small>
      ),
      ratingCount: 99,
    },
  
    {
      id: 4,
      product_name: "Pink Sleveless kurthi",
      product_img: "../assets/img/img13.jpg",
      price: "130.99",
      stars: Array(5).fill(
        <small className="fa fa-star text-primary mr-1"></small>
      ),
      ratingCount: 99,
    },
    {
      id: 5,
      product_name: "Black and White Frock",
      product_img: "../assets/img/img14.jpg",
      price: "230.99",
      stars: Array(5).fill(
        <small className="fa fa-star text-primary mr-1"></small>
      ),
      ratingCount: 99,
    },
  
    {
      id: 6,
      product_name: "White Floral frock",
      product_img: "../assets/img/img15.jpg",
      price: "430.99",
      stars: Array(5).fill(
        <small className="fa fa-star text-primary mr-1"></small>
      ),
      ratingCount: 99,
    },
    {
      id: 7,
      product_name: "White deep neck frock",
      product_img: "../assets/img/img16.jpg",
      price: "630.99",
      stars: Array(5).fill(
        <small className="fa fa-star text-primary mr-1"></small>
      ),
      ratingCount: 99,
    },
    {
      id: 8,
      product_name: "Beige frock",
      product_img: "../assets/img/img17.jpg",
      price: "530.99",
      stars: Array(5).fill(
        <small className="fa fa-star text-primary mr-1"></small>
      ),
      ratingCount: 99,
    },
    {
      id: 9,
      product_name: "Black-Tshirt",
      product_img: "../assets/img/custom.jpg",
      price: "50",
      stars: Array(5).fill(
        <small className="fa fa-star text-primary mr-1"></small>
      ),
      ratingCount: 99,
    },
  ];
  export const banner = [
    {
      title: "Customize your t-shirt",
      discount: "Trending",
      img: "../assets/img/banner.png",
     
      btn: "Shop Now",
      path: "/customize" 
    },
    {
      title: "Find your BodyType",
      discount: "Elevate your Style",
      img: "https://www.inchcalculator.com/wp-content/uploads/2021/07/body-shape.png",
      btn: "Find Now",
      path: "/bodyshape"
    },
  ];
  export const features = [
    {
      id: 1,
      icon: <h1 className="fa fa-check text-primary m-0 mr-3"></h1>,
      title: "Quality Product",
    },
    {
      id: 2,
      icon: <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>,
      title: "Free Shipping",
    },
    {
      id: 3,
      icon: <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>,
      title: "14-Day Return",
    },
    {
      id: 4,
      icon: <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>,
      title: "24/7 Support",
    },
  ];
  
  export const vendors = [
    {
      image: "../assets/img/vendor-1.jpg",
    },
    {
      image: "../assets/img/vendor-2.jpg",
    },
    {
      image: "../assets/img/vendor-3.jpg",
    },
    {
      image: "../assets/img/vendor-4.jpg",
    },
    {
      image: "../assets/img/vendor-5.jpg",
    },
    {
      image: "../assets/img/vendor-6.jpg",
    },
    {
      image: "../assets/img/vendor-7.jpg",
    },
    
  ];
  
  export const videos = [
    {
      id: 1,
      title: 'How to Elevate your style',
      description: 'Fashion influencer shares tips on styling summer outfits.',
      url: '../assets/video1.mp4',
      thumbnail: 'https://i.ytimg.com/vi/klKVm1FALhs/sddefault.jpg',
    },
    {
      id: 2,
      title: 'Top 5 Fashion Trends of 2024',
      description: 'A review of the top fashion trends this year.',
      url: 'https://www.youtube.com/watch?v=IKnxEJ00wzI',
      thumbnail: 'https://i.ytimg.com/vi/yZcfL-UAXqs/hqdefault.jpg',
    },
    {
      id: 3,
      title: 'Classy and Polished look',
      description: 'Learn how to accessorize your outfits with this guide.',
      url: 'https://www.youtube.com/watch?v=ohwPgQ7yKqw',
      thumbnail: 'https://i.ytimg.com/vi/EkLVEinHVMw/hqdefault.jpg',
    },
    {
      id: 1,
      title: 'How to Elevate your style',
      description: 'Fashion influencer shares tips on styling summer outfits.',
      url: 'https://www.youtube.com/watch?v=Jh65uUdLCZM',
      thumbnail: 'https://i.ytimg.com/vi/klKVm1FALhs/sddefault.jpg',
    },
    {
      id: 2,
      title: 'Top 5 Fashion Trends of 2024',
      description: 'A review of the top fashion trends this year.',
      url: 'https://www.youtube.com/watch?v=IKnxEJ00wzI',
      thumbnail: 'https://i.ytimg.com/vi/yZcfL-UAXqs/hqdefault.jpg',
    },
    {
      id: 3,
      title: 'Classy and Polished look',
      description: 'Learn how to accessorize your outfits with this guide.',
      url: 'https://www.youtube.com/watch?v=ohwPgQ7yKqw',
      thumbnail: 'https://i.ytimg.com/vi/EkLVEinHVMw/hqdefault.jpg',
    },
  ];
  

  export const carousel = [
    {
      cover_img: "../assets/img/carousel-1.webp",
      title: "Men Fashion",
      description:
        "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
      btn: "Shop Now",
    },
    {
      cover_img: "../assets/img/carousel-2.jpg",
      title: "Women Fashion",
      description:
        "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
      btn: "Shop Now",
    },
    {
      cover_img: "../assets/img/carousel-3.jpg",
      title: "Kids Fashion",
      description:
        "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
      btn: "Shop Now",
    },
  ];
  
  export const footerTouch = [
    {
      icon: <i className="fa fa-map-marker-alt text-primary mr-3"></i>,
      contact: "123 Street, New York, USA",
    },
    {
      icon: <i className="fa fa-envelope text-primary mr-3"></i>,
      contact: "info@example.com",
    },
    {
      icon: <i className="fa fa-phone-alt text-primary mr-3"></i>,
      contact: "+012 345 67890",
    },
  ];
  
  export const footer = [
    {
      id: 1,
      header: "Quick Shop",
    },
    {
      id: 2,
      header: "My Account",
    },
  ];
  
  export const sidebar = [
    {
      id: 1,
      header: "Filter By Price",
      all: "All Price",
      total_quantity: "1000",
      subItem: [
        {
          variety: "0-100",
          quantity: "150",
        },
        {
          variety: "100-200",
          quantity: "150",
        },
        {
          variety: "200-300",
          quantity: "150",
        },
        {
          variety: "300-400",
          quantity: "150",
        },
        {
          variety: "400-500",
          quantity: "150",
        },
      ],
    },
    {
      id: 2,
      header: "Filter By Color",
      all: "All Color",
      total_quantity: "1000",
      subItem: [
        {
          variety: "Black",
          quantity: "30",
        },
        {
          variety: "White",
          quantity: "11",
        },
        {
          variety: "Green",
          quantity: "20",
        },
        {
          variety: "Red",
          quantity: "10",
        },
        {
          variety: "Yellow",
          quantity: "15",
        },
      ],
    },
    {
      id: 3,
      header: "Filter By Size",
      all: "All Size",
      total_quantity: "1000",
      subItem: [
        {
          variety: "XS",
          quantity: "60",
        },
        {
          variety: "S",
          quantity: "19",
        },
        {
          variety: "L",
          quantity: "150",
        },
        {
          variety: "XL",
          quantity: "16",
        },
        {
          variety: "XXL",
          quantity: "15",
        },
      ],
    },
  ];