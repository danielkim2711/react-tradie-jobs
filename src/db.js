import { v4 as uuidv4 } from 'uuid';

const jobs = [
  {
    id: uuidv4(),
    status: ['scheduled', 'active', 'invoicing', 'to priced', 'completed'],
    title: 'Install and maintain water supply systems',
    clientName: 'John Doe',
    clientEmail: 'jdoe@example.co.nz',
    contactPhone: '021 123 4567',
    createdAt: '05/09/2022',
  },
  {
    id: uuidv4(),
    status: ['scheduled', 'active', 'invoicing', 'to priced', 'completed'],
    title: 'Repair washing machines and sinks',
    clientName: 'John Doe',
    clientEmail: 'jdoe@example.co.nz',
    contactPhone: '021 123 4567',
    createdAt: '04/09/2022',
  },
  {
    id: uuidv4(),
    status: ['scheduled', 'active', 'invoicing', 'to priced', 'completed'],
    title: 'Install waste disposal and sanitary systems',
    clientName: 'John Doe',
    clientEmail: 'jdoe@example.co.nz',
    contactPhone: '021 123 4567',
    createdAt: '03/09/2022',
  },
];

export default jobs;
