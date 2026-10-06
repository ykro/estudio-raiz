export type DayId = 'Lun' | 'Mar' | 'Mie' | 'Jue' | 'Vie' | 'Sab';

export interface YogaClass {
  time: string;
  type: string;
  level: string;
  instructor: string;
}

export interface DaySchedule {
  id: DayId;
  label: string;
  classes: YogaClass[];
}

export interface PlanItem {
  id: string;
  name: string;
  description: string;
  price: string;
  tag?: string;
}

export interface TeacherItem {
  name: string;
  specialty: string;
  bio: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const WHATSAPP_GENERAL_URL = `https://wa.me/15555550123?text=${encodeURIComponent(
  'Hola Sofía, quiero reservar una clase en Estudio Raíz'
)}`;

export const WHATSAPP_PLANS_URL = `https://wa.me/15555550123?text=${encodeURIComponent(
  'Hola Sofía, quiero información sobre los planes de Estudio Raíz'
)}`;

export const DAY_FULL_NAMES: Record<DayId, string> = {
  Lun: 'lunes',
  Mar: 'martes',
  Mie: 'miércoles',
  Jue: 'jueves',
  Vie: 'viernes',
  Sab: 'sábado',
};

export function getClassWhatsAppUrl(dayId: DayId, yogaClass: YogaClass): string {
  const dayName = DAY_FULL_NAMES[dayId];
  const levelLower = yogaClass.level.toLowerCase();
  const message = `Hola Sofía, quiero reservar la clase de ${yogaClass.type} (${levelLower}) del ${dayName} a las ${yogaClass.time} en Estudio Raíz`;
  return `https://wa.me/15555550123?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: 'Horario', href: '#horario' },
  { label: 'Planes', href: '#planes' },
  { label: 'Quién enseña', href: '#quien-ensena' },
  { label: 'Preguntas', href: '#preguntas' },
  { label: 'Contacto', href: '#contacto' },
];

export const SCHEDULE_DAYS: DaySchedule[] = [
  {
    id: 'Lun',
    label: 'Lun',
    classes: [
      { time: '7:00', type: 'Vinyasa', level: 'Intermedio', instructor: 'Diego' },
      { time: '18:30', type: 'Hatha', level: 'Principiante', instructor: 'Sofía' },
    ],
  },
  {
    id: 'Mar',
    label: 'Mar',
    classes: [
      { time: '7:00', type: 'Hatha', level: 'Principiante', instructor: 'Sofía' },
      { time: '19:00', type: 'Restaurativo', level: 'Principiante', instructor: 'Lucía' },
    ],
  },
  {
    id: 'Mie',
    label: 'Mié',
    classes: [
      { time: '7:00', type: 'Vinyasa', level: 'Avanzado', instructor: 'Diego' },
      { time: '18:30', type: 'Vinyasa', level: 'Principiante', instructor: 'Sofía' },
    ],
  },
  {
    id: 'Jue',
    label: 'Jue',
    classes: [
      { time: '7:00', type: 'Hatha', level: 'Intermedio', instructor: 'Sofía' },
      { time: '19:00', type: 'Restaurativo', level: 'Principiante', instructor: 'Lucía' },
    ],
  },
  {
    id: 'Vie',
    label: 'Vie',
    classes: [
      { time: '7:00', type: 'Vinyasa', level: 'Intermedio', instructor: 'Diego' },
      { time: '18:00', type: 'Restaurativo', level: 'Intermedio', instructor: 'Lucía' },
    ],
  },
  {
    id: 'Sab',
    label: 'Sáb',
    classes: [
      { time: '9:00', type: 'Vinyasa', level: 'Principiante', instructor: 'Sofía' },
      { time: '11:00', type: 'Hatha', level: 'Avanzado', instructor: 'Diego' },
    ],
  },
];

export function getTodayDayId(): DayId {
  const day = new Date().getDay(); // 0: Sunday, 1: Monday, ... 6: Saturday
  switch (day) {
    case 1:
      return 'Lun';
    case 2:
      return 'Mar';
    case 3:
      return 'Mie';
    case 4:
      return 'Jue';
    case 5:
      return 'Vie';
    case 6:
      return 'Sab';
    case 0:
    default:
      return 'Lun'; // Domingo abre el lunes
  }
}

export const PLANS: PlanItem[] = [
  {
    id: 'clase-suelta',
    name: 'Clase suelta',
    description: 'Ideal para probar.',
    price: '$12',
  },
  {
    id: 'paquete-8',
    name: 'Paquete de 8 clases',
    description: 'Vigencia de 60 días.',
    price: '$80',
    tag: 'Más popular',
  },
  {
    id: 'mensual',
    name: 'Mensual ilimitado',
    description: 'Todas las clases que quieras.',
    price: '$120',
  },
];

export const TEACHERS: TeacherItem[] = [
  {
    name: 'Sofía Méndez',
    specialty: 'Vinyasa y Hatha',
    bio: 'Fundadora del estudio, con una década de práctica.',
  },
  {
    name: 'Lucía Herrera',
    specialty: 'Yoga restaurativo y respiración',
    bio: 'Te ayuda a bajar el ritmo y descansar de verdad.',
  },
  {
    name: 'Diego Castro',
    specialty: 'Vinyasa avanzado y fuerza',
    bio: 'Clases dinámicas para ganar fuerza con buena técnica.',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: '¿Nunca he hecho yoga, puedo empezar?',
    answer: 'Sí. Las clases de nivel principiante son para ti y adaptamos cada postura a tu cuerpo.',
  },
  {
    question: '¿Qué necesito llevar?',
    answer: 'Ropa cómoda y agua. Tenemos mats para prestar.',
  },
  {
    question: '¿Tengo que reservar?',
    answer: 'Sí, el cupo es de 12 personas por clase. Reserva por WhatsApp.',
  },
  {
    question: '¿Puedo cancelar?',
    answer: 'Sí, avísanos con 6 horas de anticipación y no pierdes tu clase.',
  },
  {
    question: '¿Hay estacionamiento?',
    answer: 'Sí, hay estacionamiento gratuito frente al local.',
  },
  {
    question: '¿Cómo pago?',
    answer: 'En efectivo, con tarjeta o por transferencia en el estudio.',
  },
];

export const CONTACT_INFO = {
  address: 'Avenida Las Flores 245, local 3',
  hours: 'Lunes a viernes de 6:30 a 20:00, sábado de 8:30 a 13:00',
};
