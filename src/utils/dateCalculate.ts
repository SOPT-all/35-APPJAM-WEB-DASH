// 시간을 계산, "익일" 여부를 판단
export const calculatePeriod = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const startTime = `${startDate.getHours().toString().padStart(2, '0')}:${startDate
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
  const endTime = `${endDate.getHours().toString().padStart(2, '0')}:${endDate
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

  const isNextDay = endDate.getDate() !== startDate.getDate();
  const formattedEndTime = isNextDay ? `익일 ${endTime}` : endTime;

  const totalMinutes = Math.abs(endDate.getTime() - startDate.getTime()) / 1000 / 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.ceil(totalMinutes % 60);

  const durationString = minutes > 0 ? `총 ${hours}시간 ${minutes}분` : `총 ${hours}시간`;

  return { startTime, formattedEndTime, durationString };
};

// 날짜를 포맷팅 (ex. "2025년 1월 8일 수요일")
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${days[date.getDay()]}`;
};

export const formatSimpleDate = (dateString: string) => {
  const date = new Date(dateString);
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 (${days[date.getDay()]})`;
};

// D-day 계산
export const calculateDday = (startDateTime: string): string => {
  const now = new Date();
  const startDate = new Date(startDateTime);

  // 시간 차이
  const difference = startDate.getTime() - now.getTime();

  // 하루
  const oneDayInMs = 1000 * 60 * 60 * 24;

  if (difference > 0 && difference < oneDayInMs) {
    return 'D-Day';
  }

  // 남은 일수 계산 (양수일 때만)
  const remainingDays = Math.ceil(difference / oneDayInMs);
  if (remainingDays > 0) {
    return `D-${remainingDays}`;
  }

  // 이미 지난 경우
  return '마감';
};
