import { useState, useEffect } from 'react';

interface TimeElapsed {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface LoveCounterProps {
  startDate: string;
}

function LoveCounter({ startDate }: LoveCounterProps) {
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeElapsed = () => {
      // Cria a data de início e define para o final do dia (23:59:59.999)
      const start = new Date(startDate);
      start.setHours(23, 59, 59, 999);

      const now = new Date();

      // Contabiliza os meses completos de forma iterativa
      let temp = new Date(start);
      let monthsCount = 0;
      while (true) {
        const nextMonth = new Date(temp);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        if (nextMonth <= now) {
          monthsCount++;
          temp = nextMonth;
        } else {
          break;
        }
      }

      // Calcula os dias restantes a partir do último marco (temp)
      const daysCount = Math.floor((now.getTime() - temp.getTime()) / (1000 * 60 * 60 * 24));

      setTimeElapsed({
        months: monthsCount,
        days: daysCount,
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    };

    calculateTimeElapsed();
    const timer = setInterval(calculateTimeElapsed, 1000);
    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 shadow-lg text-center">
      <div className="text-4xl font-bold text-white mb-2">
        {timeElapsed.months} {timeElapsed.months === 1 ? 'Mês' : 'Meses'}{' '}
        {timeElapsed.days} {timeElapsed.days === 1 ? 'Dia' : 'Dias'}
      </div>
      <div className="text-2xl text-white">
        {timeElapsed.hours.toString().padStart(2, '0')}:
        {timeElapsed.minutes.toString().padStart(2, '0')}:
        {timeElapsed.seconds.toString().padStart(2, '0')}
      </div>
    </div>
  );
}

export default LoveCounter;
