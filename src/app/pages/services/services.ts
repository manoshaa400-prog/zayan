import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services {
 constructor(@Inject(PLATFORM_ID) private platformId: object) {}
// 1 = gender selection
// 2 = services
step: number = 1;
selectedSalon: any = null;
selectedService: any = null;
selectedTime: string = ''; 
salons = [
  {
    name: ' Tarek El Tahhan',
    location: 'Heliopolis, 13 Al-Ahram Street, Korba',
    loc:'Heliopolis',
    rating: 4.0,
    gender: 'female',
    services: [
      { name: 'Hair Cut', price: 200 },
      { name: 'Hair Color', price: 500 }
    ],
      availability: [
      'Thursday	 11:00 AM - 09:00 PM',
      'Friday		 11:00 AM - 09:00 PM',
      'Sunday		 11:00 AM - 09:00 PM',
      'Monday		 11:00 AM - 09:00 PM',
      'Tuesday	 11:00 AM - 09:00 PM',
      'Wednesday 11:00 AM - 09:00 PM', 
    ],
    img: 'assets/salon1.jpg',
    stylists: [
  {
    name: "Ahmed",
    age: 28,
    phone: "0100000000",
    img: 'assets/stylist1.jpeg'
  },
  {
    name: "Omar",
    age: 32,
    phone: "0111111111",
    img: 'assets/stylist2.jpeg'
  }
]
  } ,
   {
  name: 'Kriss Beauty Salons',
  location: 'Multiple Branches - Cairo',
  loc: 'Cairo',
  rating: 4.6,
  gender: 'female',

  services: [
    { name: 'Hair Cut', price: 250 },
    { name: 'Hair Color', price: 600 },
    { name: 'Nails', price: 200 },
    { name: 'Facial', price: 400 }
  ],

  availability: [
    'Daily 10:00 AM - 09:00 PM'
  ],

  img: 'assets/salon2.jpg',
  stylists: [
    {
      name: "Fatima",
      age: 29,
      phone: "0122222222",
      img: 'assets/stylist3.jpeg'
    },
    {
      name: "Sarah",
      age: 31,
      phone: "0133333333",
      img: 'assets/stylist4.jpeg'
    }
  ]
},{
  name: 'Toi Beauty Salon',
  location: 'Zamalek & Heliopolis',
  loc: 'Zamalek',
  rating: 4.3,
  gender: 'female',

  services: [
    { name: 'Hair Styling', price: 300 },
    { name: 'Makeup', price: 700 },
    { name: 'Hair Treatment', price: 450 },
    { name: 'Blow Dry', price: 180 }
  ],

  availability: [
    'Daily 10:00 AM - 09:00 PM',
    'Friday 11:00 AM - 09:00 PM'
  ],

  img: 'assets/salon3.jpg',
  stylists: [
    {
      name: "Layla",
      age: 27,
      phone: "0144444444",
      img: 'assets/stylist5.jpeg'
    },
    {
      name: "Nour",
      age: 30,
      phone: "0155555555",
      img: 'assets/stylist6.jpeg'
    }
  ]
},{
  name: 'La Coupe',
  location: 'Zamalek & Dokki',
  loc: 'Zamalek',
  rating: 4.7,
  gender: 'female',

  services: [
    { name: 'Hair Cut', price: 220 },
    { name: 'Hair Treatment', price: 400 },
    { name: 'Skin Care', price: 350 },
    { name: 'Hair Styling', price: 250 }
  ],

  availability: [
    'Daily 10:00 AM - 09:00 PM'
  ],

  img: 'assets/salon4.jpg',
  stylists: [
    {
      name: "Layla",
      age: 27,
      phone: "0144444444",
      img: 'assets/stylist5.jpeg'
    },
    {
      name: "Nour",
      age: 30,
      phone: "0155555555",
      img: 'assets/stylist6.jpeg'
    }
  ]
},{
  name: 'Irina Beauty Center',
  location: 'New Cairo - 5th Settlement',
  loc: 'New Cairo',
  rating: 4.5,
  gender: 'female',

  services: [
    { name: 'Hair Cut', price: 180 },
    { name: 'Nails', price: 220 },
    { name: 'Hair Color', price: 550 },
    { name: 'Facial', price: 350 }
  ],

  availability: [
    'Daily 10:00 AM - 10:00 PM'
  ],

  img: 'assets/salon5.jpeg',
  stylists: [
    {
      name: "Fatima",
      age: 29,
      phone: "0122222222",
      img: 'assets/stylist3.jpeg'
    },
    {
      name: "Sarah",
      age: 31,
      phone: "0133333333",
      img: 'assets/stylist4.jpeg'
    }
  ]
},{
  name: 'LA VIE Beauty Lounge',
  location: 'New Cairo - Bank Complex',
  loc: 'New Cairo',
  rating: 4.6,
  gender: 'female',

  services: [
    { name: 'Hair Styling', price: 300 },
    { name: 'Hair Treatment', price: 500 },
    { name: 'Nails', price: 250 },
    { name: 'Facial', price: 450 }
  ],

  availability: [
    'Daily 11:00 AM - 10:00 PM'
  ],

  img: 'assets/salon6.jpeg',stylists: [
  {
    name: "mariam",
    age: 28,
    phone: "0100000000",
    img: 'assets/stylist1.jpeg'
  },
  {
    name: "Menna",
    age: 32,
    phone: "0111111111",
    img: 'assets/stylist2.jpeg'
  }
]
},{
  name: 'Ramy Beauty Salon',
  location: 'Dokki',
  loc: 'Dokki',
  rating: 4.9,
  gender: 'female',

  services: [
    { name: 'Hair Cut', price: 200 },
    { name: 'Hair Styling', price: 300 },
    { name: 'Makeup', price: 600 },
    { name: 'Hair Treatment', price: 400 }
  ],

  availability: [
    'Daily 11:00 AM - 11:00 PM'
  ],

  img: 'assets/salon7.jpeg'
},{
  name: 'A.H Salon',
  location: '21 عمارات المدفعية، مدينة نصر، القاهرة',
  loc: 'Cairo',
  rating: 5.0,
  gender: 'male',

  description: 'صالون رجالي متخصص في قص الشعر، تدريج الدقن، العناية بالبشرة، وتصحيح لون الشعر مع اهتمام كبير بالتعقيم.',

  services: [
    { name: 'Hair Cut', price: 150 },
    { name: 'Beard Trim', price: 80 },
    { name: 'Hair & Beard Combo', price: 200 },
    { name: 'Skin Care', price: 120 },
    { name: 'Kids Haircut', price: 100 }
  ],

  availability: [
    'Tuesday 02:00 PM - 12:00 AM',
    'Wednesday 02:00 PM - 12:00 AM',
    'Thursday 02:00 PM - 12:00 AM',
    'Friday 02:00 PM - 12:00 AM',
    'Saturday 02:00 PM - 12:00 AM',
    'Sunday 02:00 PM - 12:00 AM'
  ],

  features: [
    'Instant Booking',
    'Kids Friendly',
    'Wheelchair Accessible',
    'Parking Available',
    'Near Public Transport'
  ],

  img: 'assets/Salonmale1.jpeg',
  stylists: [
    {
      name: "medhat",
      age: 28,
      phone: "0100000000",
      img: 'assets/stylist1.jpeg'
    },
    {
      name: "Osama",
      age: 32,
      phone: "0111111111",
      img: 'assets/stylist2.jpeg'
    }
  ]
},{
  name: 'SHX Barbershop',
  location: '7 عبد الرحمن أمين، حلمية الزيتون، القاهرة',
  loc: 'Cairo', 
  rating: 4.8,
  gender: 'male',

  description: 'Barbershop احترافي يقدم قصات دقيقة، صبغات شعر، وتصفيف دقن باحترافية في بيئة مريحة.',

  services: [
    { name: 'Hair Cut', price: 140 },
    { name: 'Hair Dye', price: 300 },
    { name: 'Beard Styling', aprice: 90 },
    { name: 'Full Grooming', price: 250 }
  ],

  availability: [
    'Daily 11:00 AM - 12:00 AM'
  ],

  features: [
    'Family Friendly',
    'Eco Friendly',
    'Near Transport'
  ],

  img: 'assets/Salonmale2.jpeg',
  stylists: [
  {
    name: "Saleh",
    age: 28,
    phone: "0100000000",
    img: 'assets/stylist1.jpeg'
  },
  {
    name: "Abdalah",
    age: 32,
    phone: "0111111111",
    img: 'assets/stylist2.jpeg'
  }
]
},{
  name: 'Mohamed Gaber Salon',
  location: '28 فريد بك، سيدي جابر، الإسكندرية',
  loc: 'Alexandria',
  rating: 4.5,
  gender: 'male',

  description: 'صالون مميز في الإسكندرية يقدم خدمات حلاقة احترافية وتنظيف بشرة مع أجواء مناسبة للعائلات.',

  services: [
    { name: 'Hair Cut', price: 120 },
    { name: 'Beard Trim', price: 70 },
    { name: 'Skin Cleaning', price: 150 },
    { name: 'Hair Styling', price: 130 }
  ],

  availability: [
    'Daily 11:00 AM - 11:00 PM'
  ],

  features: [
    'Kids Friendly',
    'Family Friendly'
  ],

  img: 'assets/Salonmale3.jpeg'
  ,stylists: [
  {
    name: "Mohsen",
    age: 28,
    phone: "0100000000",
    img: 'assets/stylist1.jpeg'
  },
  {
    name: "Samy",
    age: 32,
    phone: "0111111111",
    img: 'assets/stylist2.jpeg'
  }, 
  {
    name: "Ahmed",
    age: 25,
    phone: "0100000000",
    img: 'assets/stylist1.jpeg'
  },
  {
    name: "Omar",
    age: 34,
    phone: "0111111111",
    img: 'assets/stylist2.jpeg'
  } 
]
},{
  name: 'EL-Daly',
  location: '121 Al Teraa Al Bolakia, Cairo',
  loc: 'Cairo',
  rating: 4.5,
  gender: 'male',

  description: 'Premium barbershop يقدم حلاقة احترافية، تجهيزات العريس، وتصفيف دقن بدقة عالية.',

  services: [
    { name: 'Hair Cut', price: 160 },
    { name: 'Steam Beard Shave', price: 120 },
    { name: 'Hair Dye', price: 300 },
    { name: 'Groom Package', price: 350 }
  ],

  availability: [
    'Daily 12:00 PM - 12:00 AM'
  ],

  features: [
    'Premium Service',
    'Wedding Preparation',
    'Expert Barbers'
  ],

  img: 'assets/Salonmale4.jpeg'
  ,stylists: [
  {
    name: "abdo",
    age: 28,
    phone: "0100000000",
    img: 'assets/stylist1.jpeg'
  },
  {
    name: "mohamed",
    age: 32,
    phone: "0111111111",
    img: 'assets/stylist2.jpeg'
  }, 
  {
    name: "Omar",
    age: 25,
    phone: "0100000000",
    img: 'assets/stylist1.jpeg'
  },
  {
    name: "Mahmoud",
    age: 34,
    phone: "0111111111",
    img: 'assets/stylist2.jpeg'
  } 
]
},{
  name: 'Hanosa',
  location: '121 Al Teraa Al Bolakia, Cairo',
  loc: 'Cairo',
  rating: 4.9,
  gender: 'male',

  description: 'مكان مريح يقدم خدمات حلاقة لجميع الأعمار مع اهتمام بالتفاصيل وتجربة مميزة.',

  services: [
    { name: 'Hair Cut', price: 130 },
    { name: 'Kids Haircut', price: 100 },
    { name: 'Facial', price: 150 },
    { name: 'Beard Trim', price: 80 }
  ],

  availability: [
    'Daily 01:00 PM - 12:00 AM'
  ],

  features: [
    'Kids Friendly',
    'Parking Available',
    'Comfort Experience'
  ],

  img: 'assets/Salonmale5.jpeg'
  ,stylists: [
  {
    name: "Hasan",
    age: 28,
    phone: "0100000000",
    img: 'assets/stylist1.jpeg'
  },
  {
    name: "hessain",
    age: 32,
    phone: "0111111111",
    img: 'assets/stylist2.jpeg'
  }, 
  {
    name: "mido",
    age: 25,
    phone: "0100000000",
    img: 'assets/stylist1.jpeg'
  },
  {
    name: "fathy",
    age: 34,
    phone: "0111111111",
    img: 'assets/stylist2.jpeg'
  } 
]
},{
  name: 'BOLDCULT',
  location: 'Tolip El Forsan Hotel, Ismailia',
  loc: 'Ismailia',
  rating: 5.0,
  gender: 'male',

  description: 'مكان فاخر للرجال يجمع بين الستايل العصري والخدمة الراقية.',

  services: [
    { name: 'Fade Cut', price: 200 },
    { name: 'Beard Grooming', price: 120 },
    { name: 'Hair Styling', price: 180 },
    { name: 'Full Grooming', price: 350 }
  ],

  availability: [
    'Daily 11:00 AM - 11:00 PM'
  ],

  features: [
    'Luxury Experience',
    'Modern Style',
    'Premium Tools'
  ],

  img: 'assets/Salonmale6.jpeg',stylists: [
  {
    name: "Mohsen",
    age: 28,
    phone: "0100000000",
    img: 'assets/stylist1.jpeg'
  },
  {
    name: "Samy",
    age: 32,
    phone: "0111111111",
    img: 'assets/stylist2.jpeg'
  }, 
  {
    name: "Ahmed",
    age: 25,
    phone: "0100000000",
    img: 'assets/stylist1.jpeg'
  },
  {
    name: "Omar",
    age: 34,
    phone: "0111111111",
    img: 'assets/stylist2.jpeg'
  } 
]
},{
  name: "Shad's Men's Salon",
  location: 'Maadi, Cairo',
  loc: 'Maadi',  
  rating: 4.8,
  gender: 'male',

  description: 'صالون احترافي يقدم خدمات متكاملة للعناية بالشعر والذقن باستخدام منتجات طبيعية.',

  services: [
    { name: 'Hair Cut', price: 150 },
    { name: 'Beard Trim', price: 90 },
    { name: 'Hair Treatment', price: 200 },
    { name: 'Hair Styling', price: 140 }
  ],

  availability: [
    'Daily 10:00 AM - 12:00 AM'
  ],

  features: [
    'Natural Products',
    'Relaxing Atmosphere',
    'Eco Friendly'
  ],

  img: 'assets/Salonmale7.jpeg',stylists: [
  {
    name: "Mohsen",
    age: 28,
    phone: "0100000000",
    img: 'assets/stylist1.jpeg'
  },
  {
    name: "Samy",
    age: 32,
    phone: "0111111111",
    img: 'assets/stylist2.jpeg'
  }, 
  {
    name: "Ahmed",
    age: 25,
    phone: "0100000000",
    img: 'assets/stylist1.jpeg'
  },
  {
    name: "Omar",
    age: 34,
    phone: "0111111111",
    img: 'assets/stylist2.jpeg'
  } 
]
},{
  name: 'Geddo Salon',
  location: 'Maadi, Cairo',
  loc: 'Maadi',
  rating: 4.8,
  gender: 'male',

  description: 'صالون شعبي قوي جدًا بخبرة طويلة وخدمة سريعة وأسعار مناسبة.',

  services: [
    { name: 'Hair Cut', price: 100 },
    { name: 'Beard Trim', price: 60 },
    { name: 'Hair & Beard', price: 140 },
    { name: 'Kids Haircut', price: 80 }
  ],

  availability: [
    'Daily 09:30 AM - 12:00 AM'
  ],

  features: [
    'Fast Service',
    'Affordable',
    'Experienced Barbers'
  ],

  img: 'assets/Salonmale8.jpeg',stylists: [
  {
    name: "Mohsen",
    age: 28,
    phone: "0100000000",
    img: 'assets/stylist1.jpeg'
  },
  {
    name: "Samy",
    age: 32,
    phone: "0111111111",
    img: 'assets/stylist2.jpeg'
  }, 
  {
    name: "Ahmed",
    age: 25,
    phone: "0100000000",
    img: 'assets/stylist1.jpeg'
  },
  {
    name: "Omar",
    age: 34,
    phone: "0111111111",
    img: 'assets/stylist2.jpeg'
  } 
]
},{
  name: 'Yousef Afandi',
  location: 'Sheikh Zayed, Giza',
  loc:'Sheikh Zayed',
  rating: 4.9,
  gender: 'male',

  description: 'تجربة حلاقة تجمع بين الأصالة والحداثة في أجواء رجالية مميزة.',

  services: [
    { name: 'Hair Cut', price: 180 },
    { name: 'Beard Styling', price: 120 },
    { name: 'Full Grooming', price: 300 },
    { name: 'Hair Treatment', price: 250 }
  ],

  availability: [
    'Daily 10:00 AM - 11:00 PM'
  ],

  features: [
    'Premium Experience',
    'Classic + Modern',
    'High Quality Service'
  ],

  img: 'assets/Salonmale9.jpeg'
}
];

filteredSalons = [...this.salons];

locations = ['Nasr City', 'Al-Toukh', 'Al-Maadi', 'Al-Shaikh Zaid', '6 October' ];

selectedLocation = '';
showLocations = false;

selectedGender: 'male' | 'female' | null = null;
showServices = false;


toggleLocations() {
  this.showLocations = !this.showLocations;
}

selectGender(gender: 'male' | 'female') {
  debugger;
   this.selectedGender = gender;

  this.filteredSalons = this.salons.filter(s =>
    s.gender === gender &&
    (this.userLocation ? s.loc.includes(this.userLocation) : true)
  );
 
  this.step = 2;
}

selectSalon(salon: any) {
  this.selectedSalon = salon;
  this.step = 3;
}
selectService(service: any) {
  this.selectedService = service;
  this.step = 4;
}
selectTime(time: string) {
  this.selectedTime = time;
  this.step = 5;
}
selectLocation(loc: string) {
  this.selectedLocation = loc;
  this.showLocations = false;

  this.filteredSalons = this.salons.filter(s =>
    s.loc === loc
  );
}



selectedServices: any[] = [];
totalPrice: number = 0; 
toggleService(service: any) {

  const exists = this.selectedServices.find(s => s.name === service.name);

  if (exists) {
    this.selectedServices = this.selectedServices.filter(s => s.name !== service.name);
  } else {
    this.selectedServices.push(service);
  }

  this.calculateTotal();
}
calculateTotal() {
  this.totalPrice = this.selectedServices.reduce(
    (sum, s) => sum + s.price, 0
  );
}



selectedStylist: any;
 
selectStylist(st: any) {
   this.selectedStylist = st; 
}
bookingId: string = '';

confirmBooking() {

   this.bookingId = 'BK-' + Math.floor(100000 + Math.random() * 900000);

  this.showSummary = false; 

  this.step = 6;
   setTimeout(() => {
    this.restart();
  }, 30000);
}
 


saveState() {
  localStorage.setItem('booking', JSON.stringify({
    step: this.step,
    gender: this.selectedGender,
    salon: this.selectedSalon,
    services: this.selectedServices
  }));
}
ngOnInit() {

 if (isPlatformBrowser(this.platformId)) {
  this.showSummary = false; 
    const saved = localStorage.getItem('booking');

    if (saved) {
      const data = JSON.parse(saved);
      this.step = data.step;
      this.selectedGender = data.gender;
      this.selectedSalon = data.salon;
      this.selectedServices = data.services || [];
    }

  }
 
}
isSelected(service: any) {
  return this.selectedServices.some(s => s.name === service.name);
}

restart() {
  this.step = 1;

  this.selectedGender = null;
  this.selectedSalon = null;
  this.selectedServices = [];
  this.selectedStylist = null;
  this.selectedTime = '';
  this.totalPrice = 0;

  this.showSummary = false;
}




showSummary: boolean = true;
 










goBack() {
   if (this.step === 3) {
    // الرجوع من الخدمات → امسح الخدمات
    this.selectedServices = [];
    this.totalPrice = 0;
  }

  if (this.step === 4) {
    // الرجوع من الوقت
    this.selectedTime = '';
  }

  if (this.step === 5) {
    // الرجوع من المصفف
    this.selectedStylist = null;
  }

  if (this.step > 1) {
    this.step--;
  }
}

userLocation: string = '';
userCoords: any = null;
getLocation() {
  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition((position) => {

      this.userCoords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      // هنا تبسيط: نحدد المنطقة يدوي (بدل reverse geocoding)
      this.userLocation = this.detectArea(this.userCoords.lat, this.userCoords.lng);

      console.log(this.userLocation);

    });

  } else {
    alert("Geolocation not supported");
  }
}

detectArea(lat: number, lng: number): string {

  if (lat > 30.05 && lat < 30.10) {
    return 'Nasr City';
  }

  if (lat > 30.00 && lat < 30.05) {
    return 'Maadi';
  }

  return 'Cairo';
}

 
 
}
