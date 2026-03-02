export type Role = 'ADMINISTRATIVO' | 'COORDENACAO' | 'ENFERMEIRO_GESTOR';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface Patient {
  id: string; // Firestore Document ID
  fullName: string;
  cns: string;
  city: string;
  birthDate: string; // ISO format YYYY-MM-DD
  motherName: string;
  createdAt: string; // ISO format
  updatedAt: string; // ISO format
}

export type RequestStatus = 
  | 'CADASTRADO'
  | 'AGUARDANDO_SMS'
  | 'APROVADO_SMS'
  | 'NEGADO_SMS'
  | 'AGUARDANDO_SES'
  | 'AUTORIZADO_AGENDAMENTO';

export type PriorityLevel = 'BAIXA' | 'MEDIA' | 'ALTA' | 'URGENCIA';

export interface SurgeryRequest {
  id: string; // Firestore Document ID
  patientId: string;
  origin: string;
  requestDate: string; // ISO format YYYY-MM-DD
  ambulatoryAttendanceNo: string;
  mvPepRecordNo: string;
  sigtapProcedureNo: string;
  procedureDescription: string;
  cid10: string;
  requestingDoctor: string;
  specialty: string;
  priority: PriorityLevel;
  priorityReason?: string;
  status: RequestStatus;
  sisregNo?: string; // Populated when APROVADO_SMS
  createdAt: string; // ISO format
  updatedAt: string; // ISO format
}

export interface AuditLog {
  id: string; // Firestore Document ID
  entityId: string; // ID of Patient or SurgeryRequest
  entityType: 'PATIENT' | 'SURGERY_REQUEST';
  action: string;
  statusFrom?: RequestStatus;
  statusTo?: RequestStatus;
  userId: string;
  userName: string;
  timestamp: string; // ISO format
  details?: string;
}
