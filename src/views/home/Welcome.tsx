import { useEffect, useState } from 'react';
import styled from 'styled-components';

const WelcomeBox = styled.div`
  flex: 1.8 1 0;
  height: 100%;
  display: flex;
  padding: 20px;
  background-color: #fff;
  .avatar {
    height: 100%;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .welcoming_speech {
    flex: 1;
    text-align: justify;
    margin-left: 20px;
    .title {
      line-height: 60px;
      font-size: 36px;
      font-weight: bold;
    }
    p {
      line-height: 40px;
      font-size: 16px;
    }
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
`;

const Welcome: React.FC = () => {
  const h = new Date().getHours();
  const [title, setTitle] = useState('');
  useEffect(() => {
    switch (true) {
      case 0 < h && h < 6:
        setTitle('深夜了');
        break;
      case 6 < h && h < 12:
        setTitle('上午好');
        break;
      case 12 < h && h < 18:
        setTitle('下午好');
        break;
      case 18 < h && h < 24:
        setTitle('晚上好');
        break;
    }
  }, [h]);

  return (
    <WelcomeBox>
      <div className="avatar">
        <img src="https://avatars.githubusercontent.com/u/67744079?v=4" alt="" />
      </div>
      <div className="welcoming_speech">
        <h2 className="title">{title}</h2>
        <p>雄关漫道真如铁，而今迈步从头越。</p>
      </div>
    </WelcomeBox>
  );
};

export default Welcome;
