import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'Adrian',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products: [
        {
            name: 'UPS',
            category: 'Logistics',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 1,
            brand: 'test',
            rating: 4.5,
            numReviews: 10,
            description: 'United Parcel Service is an American multinational package delivery company and a provider of supply chain management solutions.',
            latitude: 33.8136,
            longitude: 151.0034,
        },
        {
            name: 'FedEx',
            category: 'Logistics',
            image: '/images/p2.jpg',
            price: 100,
            countInStock: 1,
            brand: 'test',
            rating: 4.0,
            numReviews: 10,
            description: 'FedEx offers a complete suite of online services for shipment preparation, package tracking, shipment rates and tools for international shippers and small businesses.',
            latitude: 33.8136,
            longitude: 151.0034,
        },
        {
            name: 'mycar Tyre',
            category: 'Car repair shop',
            image: '/images/p3.jpg',
            price: 220,
            countInStock: 1,
            brand: 'test',
            rating: 4.3,
            numReviews: 12,
            description: 'At mycar, we believe taking care of your car shouldn’t cost you an arm, a leg and part of your monthly phone bill. We want to help our customers avoid engine issues and faulty brakes - making a fixed price car service affordable is part of that commitment.',
            latitude: 33.8136,
            longitude: 151.0034,
        },
        {
            name: 'Pro Auto Repairs',
            category: 'Car repair shop',
            image: '/images/p4.jpg',
            price: 250,
            countInStock: 1,
            brand: 'test',
            rating: 4.9,
            numReviews: 10,
            description: 'Discover Sydney’s best mobile alloy wheel and car scratch repairer. Our expert team performs repairs at your home or work using our customised S.M.A.R.T. repair vans. Trust PRO Auto Repairs to do the job right every time!',
            latitude: 33.8136,
            longitude: 151.0034,
        },
        {
            name: 'ASB Computer Services',
            category: 'Computer Services',
            image: '/images/p5.jpg',
            price: 220,
            countInStock: 1,
            brand: 'test',
            rating: 3.5,
            numReviews: 10,
            description: 'ASB Computer Services is an IT company offering computer sales & support to homes and small business. We are located in the Hills district of Sydney and have been in operation since 2006.',
            latitude: 33.8136,
            longitude: 151.0034,
        },
        {
            name: 'Computer Repair Group',
            category: 'Computer Services',
            image: '/images/p6.jpg',
            price: 227,
            countInStock: 0,
            brand: 'test',
            rating: 4.5,
            numReviews: 15,
            description: 'Computer Repair Group is an award winning company and a gold certified Microsoft Partner, offering software solutions, data recovery, network setup, onsite installations, fault finding, upgrades, new and replacements parts.',
            latitude: 33.8136,
            longitude: 151.0034,
        },
    ],
};
export default data;
