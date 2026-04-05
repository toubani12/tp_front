import { Assignment } from "@/types";

export const mockAssignments: Assignment[] = [
  {
    id: "assign-1",
    tpId: "tp-1",
    studentIds: ["student-1", "student-2", "student-3"],
    assignedBy: "teacher-1",
    assignedAt: "2024-01-10T10:00:00Z",
    dueDate: "2024-01-17T23:59:00Z",
  },
  {
    id: "assign-2",
    tpId: "tp-2",
    studentIds: ["student-1", "student-4"],
    assignedBy: "teacher-1",
    assignedAt: "2024-01-15T11:00:00Z",
    dueDate: "2024-01-22T23:59:00Z",
  },
  {
    id: "assign-3",
    tpId: "tp-3",
    studentIds: ["student-2", "student-3", "student-4"],
    assignedBy: "teacher-2",
    assignedAt: "2024-01-20T12:00:00Z",
  },
];
