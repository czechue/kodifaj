import { Task } from "../lib/interfaces";

const tasks: Task[] = [
  {
    id: 1,
    title: "Nowy kurs 1",
    author: "Czesław",
    imageUrl: '1.jpg',
    rating: '4.6',
    createdAt: '12.12.2019',
    technologies: ['html', 'css', 'js', 'parcel'],
    reviewCount: '21'
  },
  {
    id: 2,
    title: "Nowy kurs 2",
    author: "xxxLabomba",
    imageUrl: '2.jpg',
    rating: '4.6',
    createdAt: '12.12.2019',
    technologies: ['html', 'css', 'js', 'parcel'],
    reviewCount: '21'
  },
  {
    id: 3,
    title: "Nowy kurs 3",
    author: "TomGruz2000",
    imageUrl: '3.jpg',
    rating: '4.6',
    createdAt: '12.12.2019',
    technologies: ['html', 'css', 'js', 'parcel'],
    reviewCount: '21'
  }
];

export default tasks;
