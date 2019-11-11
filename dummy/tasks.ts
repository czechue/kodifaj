import { Task } from "../lib/interfaces";

const tasks: Task[] = [
  {
    id: '1',
    title: "Responsywna strona oparta o bootstrap 4",
    repo: 'https://github.com/',
    author: "Czesław",
    avatarUrl: "/static/images/1.jpg",
    images: ["/static/images/1.jpg", "/static/images/2.jpg", "/static/images/3.jpg"],
    rating: 4.6,
    reviewCount: 21,
    createdAt: "12.12.2019",
    technologies: ["html", "css", "js", "parcel"],
    difficulty: 2,
    content:
      "Do wykonania jest prosty formularz kontaktowy w html i css.",
    tips: [
      "Wskazówka pierwsza",
      "Inna wskasowka",
      "no i telefon do przyjaciela"
    ],
    solutions: [
      {
        id: '1',
        taskId: '1',
        author: "Pjoter",
        createdAt: "12.12.2019",
        phase: "review"
      },
      {
        id: '3',
        taskId: '1',
        author: "Mirek",
        createdAt: "3.11.2019",
        phase: "done"
      },
      {
        id: '2',
        taskId: '1',
        author: "Lucian",
        createdAt: "12.11.2019",
        phase: "review"
      }
    ]
  },
  {
    id: '2',
    title: "2 Responsywna strona oparta o bootstrap 4",
    repo: 'https://github.com/',
    author: "Czesław",
    avatarUrl: "/static/images/2.jpg",
    images: ["/static/images/1.jpg", "/static/images/2.jpg", "/static/images/3.jpg"],
    rating: 4.6,
    reviewCount: 21,
    createdAt: "12.12.2019",
    technologies: ["html", "css", "js", "parcel"],
    difficulty: 2,
    content:
      "Do wykonania jest prosty formularz kontaktowy w html i css.",
    tips: [
      "Wskazówka pierwsza",
      "Inna wskasowka",
      "no i telefon do przyjaciela"
    ],
    solutions: [
      {
        id: '1',
        taskId: '1',
        author: "Pjoter",
        createdAt: "12.12.2019",
        phase: "review"
      },
      {
        id: '2',
        taskId: '1',
        author: "Lucian",
        createdAt: "12.11.2019",
        phase: "review"
      },
      {
        id: '3',
        taskId: '1',
        author: "Mirek",
        createdAt: "3.11.2019",
        phase: "done"
      }
    ]
  },
  {
    id: '3',
    title: "3 Responsywna strona oparta o bootstrap 4",
    repo: 'https://github.com/',
    author: "3Czesław",
    avatarUrl: "/static/images/3.jpg",
    images: ["/static/images/1.jpg", "/static/images/2.jpg", "/static/images/3.jpg"],
    rating: 2.6,
    reviewCount: 12,
    createdAt: "12.12.2019",
    technologies: ["html", "css", "js", "parcel"],
    difficulty: 2,
    content:
      "Do wykonania jest prosty formularz kontaktowy w html i css.",
    tips: [
      "Wskazówka pierwsza",
      "Inna wskasowka",
      "no i telefon do przyjaciela"
    ],
    solutions: [
      {
        id: '1',
        taskId: '1',
        author: "Pjoter",
        createdAt: "12.12.2019",
        phase: "review"
      },
      {
        id: '2',
        taskId: '1',
        author: "Lucian",
        createdAt: "12.11.2019",
        phase: "review"
      },
      {
        id: '3',
        taskId: '1',
        author: "Mirek",
        createdAt: "3.11.2019",
        phase: "done"
      }
    ]
  }

];

export default tasks;
