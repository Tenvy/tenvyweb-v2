'use client'
import { useState } from 'react';

interface Contribution {
  date: string;
  contributionCount: number;
  color: string;
}

interface Month {
  name: string;
  firstDay: string;
  totalWeeks: number;
  contributionsCount: number;
}

interface CalendarProps {
  data?: {
    weeks: {
      firstDay: string;
      contributionDays: Contribution[];
    }[];
    months: Month[];
    colors: string[];
  };
}

const Calendar = ({ data }: CalendarProps) => {
  const [selectContribution, setSelectContribution] = useState<{
    count: number | null;
    date: string | null;
  }>({
    count: null,
    date: null,
  });

  const weeks = data?.weeks ?? [];
  const months =
    data?.months?.map((month: Month) => {
      const filterContributionDay = weeks
        .filter(
          (week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7)
        )
        .map((item) => item.contributionDays)
        .flat(1);
      const getContributionsByMonth = filterContributionDay.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.contributionCount,
        0
      );

      return {
        ...month,
        contributionsCount: getContributionsByMonth,
      };
    }) ?? [];

  const contributionColors = data?.colors ?? [];

  return (
    <>
      <div className='relative flex flex-col'>
        <ul className='flex justify-end gap-[3px] overflow-hidden text-xs text-neutral-400 md:justify-start'>
          {months.map((month) => (
            <li
              key={month.firstDay}
              style={{ minWidth: 14.3 * month.totalWeeks }}
            >
              {month.name}
            </li>
          ))}
        </ul>

        <div className='flex justify-start gap-[3px] overflow-hidden'>
          {weeks?.map((week) => (
            <div key={week.firstDay}>
              {week.contributionDays.map((contribution) => {
                const backgroundColor =
                  contribution.contributionCount > 0 && contribution.color;

                const getRandomDelayAnimate =
                  Math.random() * week.contributionDays.length * 0.15;

                return (
                  <span
                    key={contribution.date}
                    style={{
                      display: 'block',
                      margin: '2px 0',
                      height: '12px',
                      width: '12px',
                      borderRadius: '2px',
                      backgroundColor: backgroundColor ? backgroundColor : '#262626',
                      transform: `translateY(0)`,
                      transition: `opacity 0.5s ease-in-out, transform 0.5s ease-in-out ${getRandomDelayAnimate}s`,
                    }}
                    onMouseEnter={() =>
                      setSelectContribution({
                        count: contribution.contributionCount,
                        date: contribution.date,
                      })
                    }
                    onMouseLeave={() =>
                      setSelectContribution({ count: null, date: null })
                    }
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex items-center gap-2 text-sm'>
          <span className='text-neutral-400'>Less</span>
          <ul className='flex gap-1'>
            <li
              style={{
                display: 'inline-block',
                height: '10px',
                width: '10px',
                borderRadius: '4px',
                backgroundColor: '#262626',
                opacity: 1,
                transition: `opacity 0.5s ease-in-out`,
              }}
            />
            {contributionColors.map((item, index) => (
              <li
                key={item}
                style={{
                  display: 'inline-block',
                  height: '10px',
                  width: '10px',
                  borderRadius: '4px',
                  backgroundColor: item,
                  opacity: 1,
                  transition: `opacity 0.5s ease-in-out ${index * 0.3}s`,
                }}
              />
            ))}
          </ul>
          <span>More</span>
        </div>

        <div
          style={{
            opacity: selectContribution?.date ? 1 : 0,
          }}
          className='rounded  px-2 text-sm bg-neutral-700'
        >
          {selectContribution?.count} contributions on{' '}
          {selectContribution?.date}
        </div>
      </div>
    </>
  );
};

export default Calendar;
