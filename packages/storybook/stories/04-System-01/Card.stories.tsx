import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from 'lumir-system-01';
import { Frame, Surface, Sizing } from 'lumir-shared';

const meta: Meta<typeof Card> = {
  title: 'System-01/Compounds/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '채용관리시스템의 Card 컴포넌트입니다. 피그마 디자인에 따라 상단 컨텐츠 영역과 하단 푸터 영역으로 구성되며, TextDisplay와 Badge 컴포넌트를 조합하여 정보를 표시합니다.',
      },
    },
  },
  argTypes: {
    title: {
      control: { type: 'text' },
      description: '카드의 메인 제목입니다 (예: 이름).',
    },
    badge: {
      control: { type: 'object' },
      description: '제목 옆에 표시할 뱃지입니다.',
    },
    description: {
      control: { type: 'text' },
      description: '상세 설명 텍스트입니다.',
    },
    additionalInfo: {
      control: { type: 'text' },
      description: '추가 정보 텍스트입니다 (예: 일정).',
    },
    statusText: {
      control: { type: 'text' },
      description: '푸터의 상태 텍스트입니다.',
    },
    actionButton: {
      control: { type: 'object' },
      description: '푸터의 액션 버튼입니다.',
    },
    onClick: {
      action: 'clicked',
      description: '카드 클릭 시 실행될 함수입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// 기본 스토리 - 피그마 디자인과 동일
export const Default: Story = {
  args: {
    title: '김도형',
    badge: {
      text: '면접',
      color: 'primary',
    },
    description: '레이다 신호처리/알고리즘 개발 채용',
    additionalInfo: '면접 일정: 2025년 5월 20일 화요일 15:00 - 16:00',
    statusText: '상태: 면접완료',
    actionButton: {
      text: '열람',
      iconName: 'LineIconsCheckmarkCircleIcon',
      onClick: () => alert('열람 버튼 클릭!'),
    },
  },
};

// 간단한 카드 - 최소 정보만
export const Simple: Story = {
  args: {
    title: '이영희',
    description: '프론트엔드 개발자 채용',
  },
};

// 뱃지만 있는 카드
export const WithBadgeOnly: Story = {
  args: {
    title: '박민수',
    badge: {
      text: '서류심사',
      color: 'warning',
    },
    description: '백엔드 개발자 채용',
    additionalInfo: '서류 제출 마감: 2024년 12월 31일',
  },
};

// 액션 버튼만 있는 카드
export const WithActionOnly: Story = {
  args: {
    title: '최영미',
    description: 'UI/UX 디자이너 채용',
    additionalInfo: '포트폴리오 검토 중',
    actionButton: {
      text: '검토',
      onClick: () => alert('검토 버튼 클릭!'),
    },
  },
};

// 완전한 정보가 있는 카드
export const Complete: Story = {
  args: {
    title: '정현수',
    badge: {
      text: '면접',
      color: 'primary',
      iconName: 'LineIconsPersonPersonIcon',
    },
    description: '시스템 엔지니어 채용',
    additionalInfo: '2차 면접: 2024년 1월 15일 월요일 14:00 - 15:00',
    statusText: '상태: 진행중',
    actionButton: {
      text: '상세보기',
      iconName: 'LineIconsArrowArrow1RightIcon',
      onClick: () => alert('상세보기 클릭!'),
    },
  },
};

// 다양한 뱃지 색상
export const BadgeVariations: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      <Card
        title="김철수"
        badge={{ text: '신규', color: 'primary' }}
        description="React 개발자 채용"
        statusText="상태: 지원완료"
      />
      
      <Card
        title="이미영"
        badge={{ text: '긴급', color: 'warning', iconName: 'WarningIcon' }}
        description="DevOps 엔지니어 채용"
        additionalInfo="긴급 채용: 즉시 면접 가능"
        statusText="상태: 긴급"
      />
      
      <Card
        title="박현정"
        badge={{ text: '보류', color: 'error' }}
        description="데이터 분석가 채용"
        additionalInfo="추가 서류 요청됨"
        statusText="상태: 서류 보완 필요"
      />
      
      <Card
        title="최준호"
        badge={{ text: '검토중', color: 'secondary' }}
        description="모바일 개발자 채용"
        statusText="상태: 1차 서류심사"
      />
    </Frame>
  ),
};

// 클릭 가능한 카드들
export const ClickableCards: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      <Card
        title="송지은"
        badge={{ text: '면접예정', color: 'primary' }}
        description="풀스택 개발자 채용"
        additionalInfo="면접일: 2024년 1월 20일"
        statusText="상태: 면접대기"
        actionButton={{
          text: '일정확인',
          iconName: 'CalendarIcon',
          onClick: () => alert('일정 확인!'),
        }}
        onClick={() => alert('카드 클릭 - 상세 정보로 이동')}
      />
      
      <Card
        title="김영수"
        badge={{ text: '최종면접', color: 'warning' }}
        description="프로젝트 매니저 채용"
        additionalInfo="최종 면접: CEO 면담"
        statusText="상태: 최종단계"
        actionButton={{
          text: '피드백',
          iconName: 'LineIconsMessageSquareIcon',
          onClick: () => alert('피드백 작성!'),
        }}
        onClick={() => alert('카드 클릭 - 지원자 프로필')}
      />
    </Frame>
  ),
};

// 긴 텍스트 처리
export const LongContent: Story = {
  render: () => (
    <Surface background="secondary-system01-2-rest" borderRadius="md">
      <Frame padding="lg">
        <Frame display="flex" direction="column" gap="xl">
          <Frame display="flex" direction="column" gap="md">
            <Card
              title="김현우 김현우 김현우 김현우 김현우 매우 긴 이름입니다"
              badge={{
                text: '최우선 긴급 중요 매우 긴 뱃지',
                color: 'error',
                iconName: 'WarningIcon'
              }}
              description="이것은 매우 긴 설명 텍스트입니다. React, Vue, Angular, Node.js를 활용한 풀스택 개발자 채용을 위한 공고로서, 다양한 기술 스택과 프로젝트 경험을 가진 개발자를 찾고 있습니다. 특히 최신 웹 기술 트렌드에 관심이 많고 지속적인 학습 의지가 있는 분을 우대합니다."
              additionalInfo="면접 일정: 2024년 1월 25일 목요일 14:00 - 17:00, 기술면접 + 실무진 면접 + 임원 면접 총 3단계로 진행되며, 각 단계별로 1시간씩 배정되어 있습니다. 면접 장소는 본사 12층 회의실이며, 온라인 면접도 가능합니다."
              statusText="상태: 최종면접 대기 중이며, 현재까지의 평가 결과가 매우 우수합니다. 추가 기술 테스트는 면제되었습니다."
              maxWidth={400}
            />
          </Frame>
          
          <Frame display="flex" direction="column" gap="md">
            <Card
              title="박수진"
              badge={{ text: '신규', color: 'primary' }}
              description="간단한 설명"
              statusText="상태: 지원완료"
              actionButton={{
                text: '매우 긴 액션 버튼 텍스트입니다',
                iconName: 'LineIconsArrowArrow1RightIcon',
                onClick: () => alert('긴 액션 버튼 클릭!'),
              }}
              maxWidth={400}
            />
          </Frame>
        </Frame>
      </Frame>
    </Surface>
  ),
};

// 실제 사용 사례
export const RealWorldExample: Story = {
  render: () => (
    <Frame padding="lg">
             <Frame display="flex" direction="column" gap="xl">
         <div>
           <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>오늘의 면접 일정</h3>
           <Frame display="flex" direction="column" gap="md">
            <Card
              title="김도형"
              badge={{ text: '면접', color: 'primary' }}
              description="레이다 신호처리/알고리즘 개발 채용"
              additionalInfo="면접 일정: 2025년 5월 20일 화요일 15:00 - 16:00"
              statusText="상태: 면접완료"
              actionButton={{
                text: '열람',
                iconName: 'LineIconsCheckmarkCircleIcon',
                onClick: () => alert('면접 결과 열람'),
              }}
            />
            
            <Card
              title="이수진"
              badge={{ text: '면접', color: 'primary' }}
              description="프론트엔드 개발자 채용"
              additionalInfo="면접 일정: 2025년 5월 20일 화요일 16:30 - 17:30"
              statusText="상태: 진행중"
              actionButton={{
                text: '참가',
                iconName: 'LineIconsVideoOnIcon',
                onClick: () => alert('화상 면접 참가'),
              }}
            />
          </Frame>
        </div>

        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>서류 심사 대기</h3>
                     <Frame display="flex" direction="column" gap="md">
            <Card
              title="박민수"
              badge={{ text: '서류심사', color: 'warning' }}
              description="백엔드 개발자 채용"
              additionalInfo="서류 제출: 2024년 12월 15일"
              statusText="상태: 심사중"
              actionButton={{
                text: '검토',
                iconName: 'LineIconsFileTextIcon',
                onClick: () => alert('서류 검토'),
              }}
            />
            
            <Card
              title="최영미"
              badge={{ text: '보완요청', color: 'error' }}
              description="디자이너 채용"
              additionalInfo="포트폴리오 추가 제출 요청"
              statusText="상태: 서류 보완"
              actionButton={{
                text: '연락',
                iconName: 'LineIconsPhonePhoneIcon',
                onClick: () => alert('지원자 연락'),
              }}
            />
          </Frame>
        </div>
      </Frame>
    </Frame>
  ),
};

// 인터랙티브 컨트롤
export const Interactive: Story = {
  args: {
    title: '컨트롤 테스트',
    badge: {
      text: '테스트',
      color: 'primary',
    },
    description: '컨트롤 패널에서 수정 가능한 카드입니다',
    additionalInfo: '추가 정보를 입력해보세요',
    statusText: '상태: 테스트중',
    actionButton: {
      text: '액션',
    },
  },
  parameters: {
    docs: {
      description: {
        story: '컨트롤 패널에서 카드의 다양한 속성을 실시간으로 변경해보세요.',
      },
    },
  },
}; 