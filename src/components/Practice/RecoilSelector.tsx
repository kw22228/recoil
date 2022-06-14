import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { minutesAtom } from '../../recoil/atoms';
import { minuteToHourSelector } from '../../recoil/selectors';

const RecoilSelector = () => {
    const [minutes, setMinutes] = useRecoilState(minutesAtom);
    const [hours, setHours] = useRecoilState(minuteToHourSelector);

    const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinutes(+event.target.value); // +"1" -> 1
    };
    const onHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHours(+event.target.value);
    };
    return (
        <div>
            <input type="number" placeholder="Minutes" value={minutes} onChange={onMinutesChange} />
            <input type="number" placeholder="Hours" value={hours} onChange={onHoursChange} />
        </div>
    );
};

export default RecoilSelector;
