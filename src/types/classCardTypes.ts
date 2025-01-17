export interface ClassCardProps {
  lessonId?: number;
  reservationId?: string;
  lessonName: string;
  lessonImageUrl: string;
  lessonGenre: string;
  lessonLevel: string;
  lessonLocation: string;
  lessonStartDateTime: string;
  lessonEndDateTime: string;
  isReservation?: boolean;
  children?: React.ReactNode;
}
