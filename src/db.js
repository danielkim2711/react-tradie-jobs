import { v4 as uuidv4 } from 'uuid';

const jobs = [
  {
    id: uuidv4(),
    status: ['scheduled', 'active', 'invoicing', 'to priced', 'completed'],
    title: 'Talent Consultant',
    location: 'Auckland, Auckland',
    salary: '$55,000 - $65,000',
    contactType: 'full',
    contactName: 'John Doe',
    contactEmail: 'jdoe@example.co.nz',
    contactPhone: '021 123 4567',
    createdAt: '05/09/2022',
  },
  {
    id: uuidv4(),
    status: ['scheduled', 'active', 'invoicing', 'to priced', 'completed'],
    title: 'Shop Mechanic',
    location: 'Hamilton, Waikato',
    salary: '$22.00 - $24.00',
    contactType: 'full',
    contactName: 'John Doe',
    contactEmail: 'jdoe@example.co.nz',
    contactPhone: '021 123 4567',
    createdAt: '04/09/2022',
  },
  {
    id: uuidv4(),
    status: ['scheduled', 'active', 'invoicing', 'to priced', 'completed'],
    title: 'Commercial Carpenter',
    location: 'Christchurch, Canterbury',
    salary: '$22.00 - $32.00',
    contactType: 'full',
    contactName: 'John Doe',
    contactEmail: 'jdoe@example.co.nz',
    contactPhone: '021 123 4567',
    createdAt: '03/09/2022',
  },
];

export default jobs;
