import { User } from "@/types";

export const mockUsers: User[] = [
  {
    id: "teacher-1",
    name: "Prof. Sarah Dupont",
    email: "sarah@school.fr",
    password: "teacher123",
    role: "teacher",
    avatarInitials: "SD",
  },
  {
    id: "teacher-2",
    name: "M. Karim Benali",
    email: "karim@school.fr",
    password: "teacher123",
    role: "teacher",
    avatarInitials: "KB",
  },
  {
    id: "student-1",
    name: "Alice Martin",
    email: "alice@school.fr",
    password: "student123",
    role: "student",
    avatarInitials: "AM",
  },
  {
    id: "student-2",
    name: "Baptiste Leroy",
    email: "baptiste@school.fr",
    password: "student123",
    role: "student",
    avatarInitials: "BL",
  },
  {
    id: "student-3",
    name: "Chloé Faure",
    email: "chloe@school.fr",
    password: "student123",
    role: "student",
    avatarInitials: "CF",
  },
  {
    id: "student-4",
    name: "Dylan Rousseau",
    email: "dylan@school.fr",
    password: "student123",
    role: "student",
    avatarInitials: "DR",
  },
];

export const getStudents = () => mockUsers.filter((u) => u.role === "student");
export const getTeachers = () => mockUsers.filter((u) => u.role === "teacher");
