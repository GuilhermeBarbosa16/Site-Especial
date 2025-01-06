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

      const totalSeconds = Math.floor((now.getTime() - start.getTime()) / 1000);
      const months = Math.floor(totalSeconds / (30 * 24 * 60 * 60));
      const days = Math.floor(totalSeconds / (24 * 60 * 60)) % 30;
      const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;

      setTimeElapsed({ months, days, hours, minutes, seconds });
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
