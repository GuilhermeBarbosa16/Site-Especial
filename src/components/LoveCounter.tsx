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
      const start = new Date(startDate);
      const now = new Date();

      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();

      if (days < 0) {
        // Ajusta o número de dias pegando o último dia do mês anterior
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
      }

      if (months < 0) {
        months += 12;
        years--;
      }

      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      setTimeElapsed({ months: years * 12 + months, days, hours, minutes, seconds });
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
