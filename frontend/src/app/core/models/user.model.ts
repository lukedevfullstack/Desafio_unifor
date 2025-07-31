export interface User {
    id: number;
    name: string;
    email: string;
    role: 'ADMIN' | 'COORDINATOR' | 'PROFESSOR' | 'STUDENT';
}
