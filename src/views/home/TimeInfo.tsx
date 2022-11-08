import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { formatDate } from '../../utils/filter';

const Time = styled.div`
  flex: 1 1 0;
  height: 100%;
  line-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-left: 20px;
  padding: 20px;
  .time {
    font-size: 32px;
    font-weight: bold;
  }
  .ip {
    font-size: 20px;
    /* line-height: px; */
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
`;

const TimeInfo: React.FC = () => {
  const [time, setTime] = useState(Date.now());

  const tick = () => {
    setTime(Date.now());
  };
  useEffect(() => {
    const timer = setTimeout(tick, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <Time>
      <p className="time">{formatDate(time, 'YYYY-MM-DD')}</p>
      <span className="ip">ip地址：81.68.114.203</span>
    </Time>
  );
};

export default TimeInfo;
