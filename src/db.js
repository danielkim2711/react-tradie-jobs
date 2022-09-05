import { v4 as uuidv4 } from 'uuid';

const jobs = [
  {
    id: uuidv4(),
    defaultStatus: 'scheduled',
    status: ['scheduled', 'active', 'invoicing', 'to priced', 'completed'],
    title: 'Install and maintain water supply systems',
    location: '123 Great Road, Newmarket, Auckland 1234',
    clientName: 'Leanne Graham',
    clientEmail: 'jgraham@gmail.com',
    contactPhone: '021 123 4567',
    createdAt: '05/09/2022',
  },
  {
    id: uuidv4(),
    defaultStatus: 'active',
    status: ['scheduled', 'active', 'invoicing', 'to priced', 'completed'],
    title: 'Repair washing machines and sinks',
    location: '123 Great Road, Newmarket, Auckland 1234',
    clientName: 'Ervin Howell',
    clientEmail: 'ehowell@gmail.com',
    contactPhone: '021 123 4567',
    createdAt: '04/09/2022',
  },
  {
    id: uuidv4(),
    defaultStatus: 'invoicing',
    status: ['scheduled', 'active', 'invoicing', 'to priced', 'completed'],
    title: 'Install waste disposal and sanitary systems',
    location: '123 Great Road, Newmarket, Auckland 1234',
    clientName: 'Clementine Bauch',
    clientEmail: 'cbauch@gmail.com',
    contactPhone: '021 123 4567',
    createdAt: '03/09/2022',
  },
  {
    id: uuidv4(),
    defaultStatus: 'to priced',
    status: ['scheduled', 'active', 'invoicing', 'to priced', 'completed'],
    title: 'Install and maintain gas and liquid heating systems',
    location: '123 Great Road, Newmarket, Auckland 1234',
    clientName: 'Patricia Lebsack',
    clientEmail: 'plebsack@gmail.com',
    contactPhone: '021 123 4567',
    createdAt: '02/09/2022',
  },
  {
    id: uuidv4(),
    defaultStatus: 'completed',
    status: ['scheduled', 'active', 'invoicing', 'to priced', 'completed'],
    title:
      'Inspecting and testing plumbing systems for safety, functionality, and code compliance',
    location: '123 Great Road, Newmarket, Auckland 1234',
    clientName: 'Chelsey Dietrich',
    clientEmail: 'cdietrich@gmail.com',
    contactPhone: '021 123 4567',
    createdAt: '01/09/2022',
  },
];

export default jobs;
