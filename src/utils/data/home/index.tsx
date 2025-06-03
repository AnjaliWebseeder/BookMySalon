export const services = [
  {
    id:0,
    image:require('../../../assets/images/img.png'),
    label:"Salon Services"
  },
  {
    id:1,
    image:require('../../../assets/images/img1.png'),
    label:"Spa and Wellness"
  },
    {
    id:2,
    image:require('../../../assets/images/img2.png'),
    label:"Skin Treatments"
  },
    {
    id:3,
    image:require('../../../assets/images/img3.png'),
    label:"Hair Treatments"
  },
    {
    id:4,
    image:require('../../../assets/images/img4.png'),
    label:"Styling and Makeup"
  },
    {
    id:5,
      image:require('../../../assets/images/img5.png'),
    label:"Occasion and Ritual"
  }
]

export const hotPicksWomens = [
  {
    label:'Facial'
  },
  {
    label:'Hair'
  },
   {
    label:'Color'
  },
   {
    label:'Wax'
  },
  {
    label:"Pedicure & Manicure"
  }
]

export const womenServices = [
  {
    image: require('../../../assets/images/img6.png'),
    title:'Growth Rituals-Classic Facial',
    description:'Clean-up + Face massage + Glow pack',
    price:1190,
    time:'40'
  },
   {
    image: require('../../../assets/images/img6.png'),
    title:'Growth Rituals-Classic Facial',
    description:'Clean-up + Face massage + Glow pack',
    price:1190,
    time:'40'
  }
]

export const hotPicksMens = [
  { label: 'Beard Grooming' },
  { label: 'Haircut' },
  { label: 'Shaving' },
  { label: 'Facial' },
  { label: 'Head Massage' }
];

export const menServices = [
  {
    image: require('../../../assets/images/img21.png'),
    title: 'Men’s Haircut + Wash',
    description: 'Precision haircut + Shampoo + Blow dry',
    price: 499,
    time: '40'
  },
  {
    image: require('../../../assets/images/img21.png'),
    title: 'Royal Shave & Facial Clean-up',
    description: 'Hot towel shave + Clean-up + Moisturizer',
    price: 799,
    time: '45'
  }
];

export const specialServices = [
  {
    id:0,
    image:require('../../../assets/images/img12.png'),
    label:"Hair Spa & Styling"
  },
  {
    id:1,
    image:require('../../../assets/images/img11.png'),
    label:"Thread & Tint"
  },
    {
    id:2,
    image:require('../../../assets/images/img10.png'),
    label:"Facial Favorites"
  },
    {
    id:3,
    image:require('../../../assets/images/img9.png'),
    label:"Wax & Go"
  },
    {
    id:4,
    image:require('../../../assets/images/img8.png'),
    label:"Makeup & Mehendi"
  },
    {
    id:5,
      image:require('../../../assets/images/img7.png'),
    label:"Bleach & Detan"
  }
]

export const servingData = [
  {
    image:require('../../../assets/images/img13.png'),
    label:'Organic Beard Spa',
    price:1140,
    time:30
  },
  {
    image:require('../../../assets/images/img14.png'),
    label:'Organic Beard Spa',
    price:2140,
    time:120
  }
]

export const groomingEssential = [
  {
    id:0,
    image:require('../../../assets/images/img14.png'),
    label:"Cut & Style"
  },
  {
    id:1,
    image:require('../../../assets/images/img15.png'),
    label:"Face & Skin Care"
  },
    {
    id:2,
    image:require('../../../assets/images/img16.png'),
    label:"Hair Treatments"
  },
    {
    id:3,
    image:require('../../../assets/images/img17.png'),
    label:"Massage & Relax"
  },
    {
    id:4,
    image:require('../../../assets/images/img18.png'),
    label:"Waxing"
  },
    {
    id:5,
      image:require('../../../assets/images/img19.png'),
    label:"Hand & Foot Care"
  }
]

export const womenPackageData = [
  {
    title:"Grooming Essential",
    rating:4.3,
    reviews:2.3,
     price:1190,
     time:40, 
    details:[{
      service:"Haircut",
      detail:"Clean and neat haircut"
    },
    {
       service:"Beard/Shaving Grooming",
       detail:"Clean and neat haircut"
    },
    {
      service:"Massage",
      detail:"Relaxing 10-minute head massage"
    }
  ]
  },
   {
    title:"Grooming Essential",
    rating:4.3,
    reviews:2.3,
     price:1190,
     time:40, 
    details:[{
      service:"Haircut",
      detail:"Clean and neat haircut"
    },
    {
       service:"Beard/Shaving Grooming",
       detail:"Clean and neat haircut"
    },
    {
      service:"Massage",
      detail:"Relaxing 10-minute head massage"
    }
  ]
  }
]


export const menPackageData = [
  {
    title: "Men’s Premium Grooming",
    rating: 4.5,
    reviews: 3.1, // means 3.1K reviews
    price: 1290,
    time: 45,
    details: [
      {
        service: "Haircut",
        detail: "Trendy haircut with expert styling"
      },
      {
        service: "Beard Trim",
        detail: "Professional beard shaping & grooming"
      },
      {
        service: "Face Cleanup",
        detail: "Deep pore cleansing and exfoliation"
      }
    ]
  },
  {
    title: "Men’s Complete Refresh",
    rating: 4.6,
    reviews: 2.7,
    price: 1499,
    time: 60,
    details: [
      {
        service: "Haircut",
        detail: "Stylish haircut with consultation"
      },
      {
        service: "Shaving",
        detail: "Clean shave with skin protection"
      },
      {
        service: "Head Massage",
        detail: "Relaxing 15-minute head massage"
      }
    ]
  }
];
