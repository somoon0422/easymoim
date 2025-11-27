const PptxGenJS = require('pptxgenjs');
const fs = require('fs');

// PPT 생성
const pptx = new PptxGenJS();

// 기본 설정
pptx.layout = 'LAYOUT_16x9';
pptx.title = '이지모임 사업계획서';
pptx.author = '이지모임';
pptx.company = '이지모임';

// 색상 정의
const colors = {
    primary: '4338ca',
    secondary: '667eea',
    accent: '764ba2',
    success: '10b981',
    warning: 'f59e0b',
    danger: 'ef4444',
    dark: '1e293b',
    light: 'f8fafc',
    white: 'FFFFFF',
    gray: '64748b'
};

// 슬라이드 1: 표지
let slide1 = pptx.addSlide();
slide1.background = { color: '1e1b4b' };
slide1.addText('이지모임', {
    x: 0.5, y: 2, w: '90%', h: 1.5,
    fontSize: 60, bold: true, color: 'FFFFFF',
    fontFace: 'Malgun Gothic'
});
slide1.addText('모임의 A부터 Z까지, 당신의 모임비서', {
    x: 0.5, y: 3.3, w: '90%', h: 0.5,
    fontSize: 24, color: 'a5b4fc',
    fontFace: 'Malgun Gothic'
});
slide1.addText('사업계획서 | 초창패 / 소상공인 지원사업', {
    x: 0.5, y: 4.5, w: '90%', h: 0.4,
    fontSize: 16, color: 'FFFFFF', italic: true,
    fontFace: 'Malgun Gothic'
});
slide1.addText('2025', {
    x: 0.5, y: 5.2, w: '90%', h: 0.5,
    fontSize: 20, color: 'a5b4fc', bold: true,
    fontFace: 'Malgun Gothic'
});

// 슬라이드 2: 문제 정의
let slide2 = pptx.addSlide();
slide2.addText('01 Problem', {
    x: 0.5, y: 0.3, w: 3, h: 0.5,
    fontSize: 14, color: colors.secondary, bold: true,
    fontFace: 'Malgun Gothic'
});
slide2.addText('모임, 왜 이렇게 복잡할까요?', {
    x: 0.5, y: 0.8, w: '90%', h: 0.8,
    fontSize: 32, bold: true, color: colors.dark,
    fontFace: 'Malgun Gothic'
});
slide2.addText('직장인, 대학생의 모임 준비 과정에서 발생하는 번거로움을 해결합니다.', {
    x: 0.5, y: 1.6, w: '90%', h: 0.5,
    fontSize: 14, color: colors.gray,
    fontFace: 'Malgun Gothic'
});

// 문제점 박스들
const problems = [
    { icon: '📅', title: '끝없는 일정 조율', desc: '카톡방에서 언제 되냐고 물어보기만 수십 번' },
    { icon: '📍', title: '장소 선정의 어려움', desc: '각자 출발지가 다른데, 어디서 만나야 공평할까?' },
    { icon: '🧾', title: '정산의 불편함', desc: '누가 얼마 냈고, 누가 안 보냈는지 추적하기 힘듦' }
];

problems.forEach((p, i) => {
    slide2.addShape(pptx.ShapeType.roundRect, {
        x: 0.5, y: 2.3 + i * 1.1, w: 5.5, h: 0.9,
        fill: { color: colors.light },
        line: { color: 'e2e8f0', pt: 1 }
    });
    slide2.addText(`${p.icon} ${p.title}`, {
        x: 0.7, y: 2.4 + i * 1.1, w: 5, h: 0.35,
        fontSize: 14, bold: true, color: colors.dark,
        fontFace: 'Malgun Gothic'
    });
    slide2.addText(p.desc, {
        x: 0.7, y: 2.75 + i * 1.1, w: 5, h: 0.3,
        fontSize: 11, color: colors.gray,
        fontFace: 'Malgun Gothic'
    });
});

// 통계
slide2.addShape(pptx.ShapeType.roundRect, {
    x: 6.5, y: 2.3, w: 3, h: 3,
    fill: { color: 'fef2f2' },
    line: { color: 'fecaca', pt: 1 }
});
slide2.addText('78%', {
    x: 6.5, y: 2.5, w: 3, h: 0.8,
    fontSize: 36, bold: true, color: colors.danger, align: 'center',
    fontFace: 'Malgun Gothic'
});
slide2.addText('모임 일정 조율에\n스트레스를 느끼는 비율', {
    x: 6.5, y: 3.3, w: 3, h: 0.6,
    fontSize: 11, color: colors.gray, align: 'center',
    fontFace: 'Malgun Gothic'
});
slide2.addText('평균 3일', {
    x: 6.5, y: 4, w: 3, h: 0.6,
    fontSize: 28, bold: true, color: colors.danger, align: 'center',
    fontFace: 'Malgun Gothic'
});
slide2.addText('모임 일정 확정까지\n걸리는 시간', {
    x: 6.5, y: 4.6, w: 3, h: 0.6,
    fontSize: 11, color: colors.gray, align: 'center',
    fontFace: 'Malgun Gothic'
});

// 슬라이드 3: 솔루션
let slide3 = pptx.addSlide();
slide3.addText('02 Solution', {
    x: 0.5, y: 0.3, w: 3, h: 0.5,
    fontSize: 14, color: colors.success, bold: true,
    fontFace: 'Malgun Gothic'
});
slide3.addText('이지모임이 해결합니다', {
    x: 0.5, y: 0.8, w: '90%', h: 0.8,
    fontSize: 32, bold: true, color: colors.dark,
    fontFace: 'Malgun Gothic'
});
slide3.addText('모임의 A부터 Z까지, 당신의 모임비서가 되어드립니다.', {
    x: 0.5, y: 1.6, w: '90%', h: 0.5,
    fontSize: 14, color: colors.gray,
    fontFace: 'Malgun Gothic'
});

// 기능 박스들
const solutions = [
    { icon: '📅', title: '일정 조율', desc: '투표 기반 자동 일정 확정', color: '3b82f6' },
    { icon: '📍', title: '중간지점 추천', desc: '출발지 기반 최적 위치 계산', color: '8b5cf6' },
    { icon: '🍽️', title: '장소 추천', desc: '모임 특성 맞춤 맛집/카페', color: 'f59e0b' },
    { icon: '💰', title: '자동 정산', desc: '1/N 정산, 송금 알림 (예정)', color: '10b981' }
];

solutions.forEach((s, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    slide3.addShape(pptx.ShapeType.roundRect, {
        x: 0.5 + col * 4.7, y: 2.3 + row * 1.5, w: 4.2, h: 1.3,
        fill: { color: colors.white },
        line: { color: s.color, pt: 2 }
    });
    slide3.addText(`${s.icon} ${s.title}`, {
        x: 0.7 + col * 4.7, y: 2.5 + row * 1.5, w: 3.8, h: 0.4,
        fontSize: 16, bold: true, color: colors.dark,
        fontFace: 'Malgun Gothic'
    });
    slide3.addText(s.desc, {
        x: 0.7 + col * 4.7, y: 2.95 + row * 1.5, w: 3.8, h: 0.3,
        fontSize: 12, color: colors.gray,
        fontFace: 'Malgun Gothic'
    });
});

// 슬라이드 4: 핵심 기능
let slide4 = pptx.addSlide();
slide4.addText('03 Features', {
    x: 0.5, y: 0.3, w: 3, h: 0.5,
    fontSize: 14, color: colors.secondary, bold: true,
    fontFace: 'Malgun Gothic'
});
slide4.addText('핵심 기능', {
    x: 0.5, y: 0.8, w: '90%', h: 0.8,
    fontSize: 32, bold: true, color: colors.dark,
    fontFace: 'Malgun Gothic'
});

const features = [
    { title: '스마트 일정 조율', items: ['투표 링크 공유로 간편 참여', '가능 일정 자동 집계', '최적 날짜 AI 추천'] },
    { title: '중간지점 추천', items: ['각자 출발지 입력', '대중교통 시간 기반 계산', '공정한 중간 위치 제안'] },
    { title: '맞춤 장소 추천', items: ['모임 목적별 필터', '인원수 고려 추천', '평점/리뷰 기반 정렬'] },
    { title: '자동 정산 (예정)', items: ['영수증 촬영 자동 입력', '1/N 자동 계산', '송금 요청 알림'] }
];

features.forEach((f, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    slide4.addShape(pptx.ShapeType.roundRect, {
        x: 0.5 + col * 4.7, y: 1.6 + row * 2, w: 4.2, h: 1.8,
        fill: { color: colors.white },
        line: { color: 'e2e8f0', pt: 1 }
    });
    slide4.addText(f.title, {
        x: 0.7 + col * 4.7, y: 1.75 + row * 2, w: 3.8, h: 0.4,
        fontSize: 14, bold: true, color: colors.dark,
        fontFace: 'Malgun Gothic'
    });
    f.items.forEach((item, j) => {
        slide4.addText(`• ${item}`, {
            x: 0.7 + col * 4.7, y: 2.2 + row * 2 + j * 0.35, w: 3.8, h: 0.3,
            fontSize: 10, color: colors.gray,
            fontFace: 'Malgun Gothic'
        });
    });
});

// 슬라이드 5: 타겟 시장
let slide5 = pptx.addSlide();
slide5.addText('04 Target Market', {
    x: 0.5, y: 0.3, w: 3, h: 0.5,
    fontSize: 14, color: 'ec4899', bold: true,
    fontFace: 'Malgun Gothic'
});
slide5.addText('누가 사용할까요?', {
    x: 0.5, y: 0.8, w: '90%', h: 0.8,
    fontSize: 32, bold: true, color: colors.dark,
    fontFace: 'Malgun Gothic'
});
slide5.addText('바쁜 일상 속에서도 소중한 사람들과의 만남을 포기하지 않는 분들', {
    x: 0.5, y: 1.6, w: '90%', h: 0.5,
    fontSize: 14, color: colors.gray,
    fontFace: 'Malgun Gothic'
});

// 타겟 세그먼트
const targets = [
    { title: '직장인', desc: '퇴근 후 동료/친구 모임, 동호회, 번개 모임', pain: '바쁜 일정, 다양한 지역 출퇴근' },
    { title: '대학생', desc: '동아리, 스터디 그룹, MT, 학과 모임', pain: '통학 거리, 정산 문제' }
];

targets.forEach((t, i) => {
    slide5.addShape(pptx.ShapeType.roundRect, {
        x: 0.5 + i * 4.7, y: 2.2, w: 4.2, h: 1.8,
        fill: { color: colors.white },
        line: { color: 'e2e8f0', pt: 1 }
    });
    slide5.addText(t.title, {
        x: 0.7 + i * 4.7, y: 2.4, w: 3.8, h: 0.4,
        fontSize: 16, bold: true, color: colors.dark,
        fontFace: 'Malgun Gothic'
    });
    slide5.addText(t.desc, {
        x: 0.7 + i * 4.7, y: 2.85, w: 3.8, h: 0.4,
        fontSize: 11, color: colors.gray,
        fontFace: 'Malgun Gothic'
    });
    slide5.addText(`Pain Point: ${t.pain}`, {
        x: 0.7 + i * 4.7, y: 3.4, w: 3.8, h: 0.4,
        fontSize: 10, color: 'ec4899',
        fontFace: 'Malgun Gothic'
    });
});

// 핵심 타겟 강조
slide5.addShape(pptx.ShapeType.roundRect, {
    x: 0.5, y: 4.2, w: 9, h: 1.1,
    fill: { color: 'fef3c7' },
    line: { color: 'f59e0b', pt: 2 }
});
slide5.addText('🎯 핵심 타겟: 20-30대 여성', {
    x: 0.7, y: 4.35, w: 5, h: 0.35,
    fontSize: 14, bold: true, color: colors.dark,
    fontFace: 'Malgun Gothic'
});
slide5.addText('소모임, 친구 모임의 주 기획자 역할을 하며, 편리한 도구에 대한 수요가 높음', {
    x: 0.7, y: 4.75, w: 7, h: 0.35,
    fontSize: 11, color: colors.gray,
    fontFace: 'Malgun Gothic'
});
slide5.addText('65%', {
    x: 8, y: 4.35, w: 1.3, h: 0.8,
    fontSize: 28, bold: true, color: 'd97706', align: 'center',
    fontFace: 'Malgun Gothic'
});

// 슬라이드 6: 시장 분석
let slide6 = pptx.addSlide();
slide6.addText('05 Market Analysis', {
    x: 0.5, y: 0.3, w: 3, h: 0.5,
    fontSize: 14, color: colors.secondary, bold: true,
    fontFace: 'Malgun Gothic'
});
slide6.addText('시장 기회', {
    x: 0.5, y: 0.8, w: '90%', h: 0.8,
    fontSize: 32, bold: true, color: colors.dark,
    fontFace: 'Malgun Gothic'
});

const stats = [
    { value: '2,500만+', label: '국내 2030 인구' },
    { value: '월 4.2회', label: '평균 모임 횟수' },
    { value: '89%', label: '모임 조율 불편함 경험' },
    { value: '3,200억+', label: '관련 시장 규모' }
];

stats.forEach((s, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    slide6.addShape(pptx.ShapeType.roundRect, {
        x: 0.5 + col * 4.7, y: 1.8 + row * 1.5, w: 4.2, h: 1.3,
        fill: { color: colors.white },
        line: { color: 'e2e8f0', pt: 1 }
    });
    slide6.addText(s.value, {
        x: 0.5 + col * 4.7, y: 2 + row * 1.5, w: 4.2, h: 0.6,
        fontSize: 28, bold: true, color: colors.secondary, align: 'center',
        fontFace: 'Malgun Gothic'
    });
    slide6.addText(s.label, {
        x: 0.5 + col * 4.7, y: 2.6 + row * 1.5, w: 4.2, h: 0.4,
        fontSize: 12, color: colors.gray, align: 'center',
        fontFace: 'Malgun Gothic'
    });
});

// 슬라이드 7: 경쟁 분석
let slide7 = pptx.addSlide();
slide7.addText('06 Competitive Edge', {
    x: 0.5, y: 0.3, w: 3, h: 0.5,
    fontSize: 14, color: colors.secondary, bold: true,
    fontFace: 'Malgun Gothic'
});
slide7.addText('경쟁 우위', {
    x: 0.5, y: 0.8, w: '90%', h: 0.8,
    fontSize: 32, bold: true, color: colors.dark,
    fontFace: 'Malgun Gothic'
});
slide7.addText('기존 서비스들은 각각 일부 기능만 제공. 이지모임은 모임의 전 과정을 하나의 플랫폼에서 해결합니다.', {
    x: 0.5, y: 1.6, w: '90%', h: 0.5,
    fontSize: 12, color: colors.gray,
    fontFace: 'Malgun Gothic'
});

// 비교표 헤더
slide7.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 2.2, w: 9, h: 0.5,
    fill: { color: colors.secondary }
});
['기능', '이지모임', '카카오톡', '네이버 밴드', 'When2Meet'].forEach((h, i) => {
    slide7.addText(h, {
        x: 0.5 + i * 1.8, y: 2.25, w: 1.8, h: 0.4,
        fontSize: 11, bold: true, color: 'FFFFFF', align: 'center',
        fontFace: 'Malgun Gothic'
    });
});

// 비교표 내용
const comparison = [
    ['일정 조율', '✓', '△', '✓', '✓'],
    ['중간지점 추천', '✓', '✗', '✗', '✗'],
    ['장소 추천', '✓', '✗', '✗', '✗'],
    ['자동 정산', '✓', '△', '✗', '✗']
];

comparison.forEach((row, rowIdx) => {
    const bgColor = rowIdx % 2 === 0 ? colors.light : 'FFFFFF';
    slide7.addShape(pptx.ShapeType.rect, {
        x: 0.5, y: 2.7 + rowIdx * 0.5, w: 9, h: 0.5,
        fill: { color: bgColor }
    });
    row.forEach((cell, colIdx) => {
        let cellColor = colors.dark;
        if (cell === '✓') cellColor = colors.success;
        else if (cell === '✗') cellColor = colors.danger;
        else if (cell === '△') cellColor = colors.warning;

        slide7.addText(cell, {
            x: 0.5 + colIdx * 1.8, y: 2.75 + rowIdx * 0.5, w: 1.8, h: 0.4,
            fontSize: 11, color: cellColor, align: 'center',
            fontFace: 'Malgun Gothic'
        });
    });
});

// 슬라이드 8: 비즈니스 모델
let slide8 = pptx.addSlide();
slide8.addText('07 Business Model', {
    x: 0.5, y: 0.3, w: 3, h: 0.5,
    fontSize: 14, color: colors.warning, bold: true,
    fontFace: 'Malgun Gothic'
});
slide8.addText('수익 모델', {
    x: 0.5, y: 0.8, w: '90%', h: 0.8,
    fontSize: 32, bold: true, color: colors.dark,
    fontFace: 'Malgun Gothic'
});

slide8.addShape(pptx.ShapeType.roundRect, {
    x: 0.5, y: 1.8, w: 4.2, h: 2,
    fill: { color: colors.white },
    line: { color: colors.warning, pt: 2 }
});
slide8.addText('📢 광고 수익 (70%)', {
    x: 0.7, y: 2, w: 3.8, h: 0.4,
    fontSize: 14, bold: true, color: colors.dark,
    fontFace: 'Malgun Gothic'
});
slide8.addText('• 장소 추천 시 스폰서 매장 노출\n• 배너 광고, 네이티브 광고', {
    x: 0.7, y: 2.5, w: 3.8, h: 0.8,
    fontSize: 11, color: colors.gray,
    fontFace: 'Malgun Gothic'
});

slide8.addShape(pptx.ShapeType.roundRect, {
    x: 5.2, y: 1.8, w: 4.2, h: 2,
    fill: { color: colors.white },
    line: { color: colors.success, pt: 2 }
});
slide8.addText('🤝 제휴 수수료 (20%)', {
    x: 5.4, y: 2, w: 3.8, h: 0.4,
    fontSize: 14, bold: true, color: colors.dark,
    fontFace: 'Malgun Gothic'
});
slide8.addText('• 예약 연동 시 수수료\n• 제휴 매장 우선 노출 비용', {
    x: 5.4, y: 2.5, w: 3.8, h: 0.8,
    fontSize: 11, color: colors.gray,
    fontFace: 'Malgun Gothic'
});

// 수익화 전략
slide8.addShape(pptx.ShapeType.roundRect, {
    x: 0.5, y: 4, w: 9, h: 1.2,
    fill: { color: 'fef3c7' }
});
slide8.addText('수익화 전략', {
    x: 0.7, y: 4.15, w: 8.5, h: 0.35,
    fontSize: 12, bold: true, color: '92400e',
    fontFace: 'Malgun Gothic'
});
slide8.addText('1단계: 사용자 확보 (무료)  →  2단계: 광고 수익 (배너/네이티브)  →  3단계: 제휴 수수료 (장소 예약)', {
    x: 0.7, y: 4.55, w: 8.5, h: 0.5,
    fontSize: 11, color: '78350f',
    fontFace: 'Malgun Gothic'
});

// 슬라이드 9: 개발 현황
let slide9 = pptx.addSlide();
slide9.addText('08 Development', {
    x: 0.5, y: 0.3, w: 3, h: 0.5,
    fontSize: 14, color: '3b82f6', bold: true,
    fontFace: 'Malgun Gothic'
});
slide9.addText('개발 현황', {
    x: 0.5, y: 0.8, w: '90%', h: 0.8,
    fontSize: 32, bold: true, color: colors.dark,
    fontFace: 'Malgun Gothic'
});
slide9.addText('현재 MVP 개발 단계로, 핵심 기능인 일정 조율과 중간지점 추천 기능을 우선 개발 중입니다.', {
    x: 0.5, y: 1.6, w: '90%', h: 0.5,
    fontSize: 12, color: colors.gray,
    fontFace: 'Malgun Gothic'
});

// 타임라인
const timeline = [
    { period: '완료', title: '기획 및 설계', desc: '서비스 컨셉, UI/UX 설계, DB 설계', status: 'done' },
    { period: '진행중', title: 'MVP 개발', desc: '일정 조율, 중간지점 추천 기능 개발', status: 'current' },
    { period: '예정', title: '베타 테스트', desc: '소규모 사용자 테스트 및 피드백', status: 'pending' },
    { period: '예정', title: '정식 출시', desc: '웹 서비스 정식 런칭 및 마케팅', status: 'pending' }
];

timeline.forEach((t, i) => {
    const dotColor = t.status === 'done' ? colors.success : t.status === 'current' ? '3b82f6' : 'cbd5e1';

    // 연결선
    if (i < timeline.length - 1) {
        slide9.addShape(pptx.ShapeType.rect, {
            x: 1.05, y: 2.5 + i * 1, w: 0.1, h: 0.8,
            fill: { color: 'e2e8f0' }
        });
    }

    // 점
    slide9.addShape(pptx.ShapeType.ellipse, {
        x: 0.9, y: 2.3 + i * 1, w: 0.4, h: 0.4,
        fill: { color: dotColor }
    });

    // 텍스트
    slide9.addText(t.period, {
        x: 1.5, y: 2.25 + i * 1, w: 1.5, h: 0.3,
        fontSize: 10, bold: true, color: dotColor,
        fontFace: 'Malgun Gothic'
    });
    slide9.addText(t.title, {
        x: 1.5, y: 2.5 + i * 1, w: 4, h: 0.3,
        fontSize: 12, bold: true, color: colors.dark,
        fontFace: 'Malgun Gothic'
    });
    slide9.addText(t.desc, {
        x: 1.5, y: 2.75 + i * 1, w: 4, h: 0.3,
        fontSize: 10, color: colors.gray,
        fontFace: 'Malgun Gothic'
    });
});

// 기술 스택
slide9.addShape(pptx.ShapeType.roundRect, {
    x: 6, y: 2.2, w: 3.5, h: 1.5,
    fill: { color: 'eff6ff' }
});
slide9.addText('🛠 기술 스택', {
    x: 6.2, y: 2.35, w: 3, h: 0.35,
    fontSize: 12, bold: true, color: '1d4ed8',
    fontFace: 'Malgun Gothic'
});
slide9.addText('React, Node.js\nPostgreSQL\nKakao Map API', {
    x: 6.2, y: 2.75, w: 3, h: 0.8,
    fontSize: 11, color: colors.dark,
    fontFace: 'Malgun Gothic'
});

// 슬라이드 10: KPI
let slide10 = pptx.addSlide();
slide10.addText('09 KPI & Goals', {
    x: 0.5, y: 0.3, w: 3, h: 0.5,
    fontSize: 14, color: colors.secondary, bold: true,
    fontFace: 'Malgun Gothic'
});
slide10.addText('목표 지표', {
    x: 0.5, y: 0.8, w: '90%', h: 0.8,
    fontSize: 32, bold: true, color: colors.dark,
    fontFace: 'Malgun Gothic'
});

const kpis = [
    { title: '월간 활성 사용자 (MAU)', value: '10,000명', target: '6개월 목표', color: colors.secondary },
    { title: '월간 모임 생성 수', value: '5,000건', target: '6개월 목표', color: colors.success },
    { title: '재사용률', value: '60%', target: '한 번 사용 후 재사용', color: colors.warning },
    { title: '사용자 만족도', value: '4.5/5', target: '앱스토어 평점 기준', color: 'ec4899' }
];

kpis.forEach((k, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    slide10.addShape(pptx.ShapeType.roundRect, {
        x: 0.5 + col * 4.7, y: 1.8 + row * 1.6, w: 4.2, h: 1.4,
        fill: { color: colors.white },
        line: { color: k.color, pt: 2, dashType: 'solid' }
    });
    slide10.addText(k.title, {
        x: 0.7 + col * 4.7, y: 1.95 + row * 1.6, w: 3.8, h: 0.3,
        fontSize: 11, color: colors.gray,
        fontFace: 'Malgun Gothic'
    });
    slide10.addText(k.value, {
        x: 0.7 + col * 4.7, y: 2.3 + row * 1.6, w: 3.8, h: 0.5,
        fontSize: 24, bold: true, color: colors.dark,
        fontFace: 'Malgun Gothic'
    });
    slide10.addText(k.target, {
        x: 0.7 + col * 4.7, y: 2.85 + row * 1.6, w: 3.8, h: 0.25,
        fontSize: 9, color: colors.gray,
        fontFace: 'Malgun Gothic'
    });
});

// 슬라이드 11: 예산
let slide11 = pptx.addSlide();
slide11.addText('10 Budget Plan', {
    x: 0.5, y: 0.3, w: 3, h: 0.5,
    fontSize: 14, color: colors.secondary, bold: true,
    fontFace: 'Malgun Gothic'
});
slide11.addText('예산 계획', {
    x: 0.5, y: 0.8, w: '90%', h: 0.8,
    fontSize: 32, bold: true, color: colors.dark,
    fontFace: 'Malgun Gothic'
});

const budget = [
    { item: '서버/인프라', amount: '월 30만원' },
    { item: '개발 도구/API', amount: '월 20만원' },
    { item: '마케팅/홍보', amount: '월 100만원' },
    { item: '디자인/UX', amount: '월 30만원' },
    { item: '기타 운영비', amount: '월 20만원' },
    { item: '총 월 예산', amount: '200만원', isTotal: true }
];

budget.forEach((b, i) => {
    const bgColor = b.isTotal ? colors.secondary : (i % 2 === 0 ? colors.light : 'FFFFFF');
    const textColor = b.isTotal ? 'FFFFFF' : colors.dark;

    slide11.addShape(pptx.ShapeType.rect, {
        x: 1.5, y: 1.8 + i * 0.6, w: 7, h: 0.55,
        fill: { color: bgColor },
        line: { color: 'e2e8f0', pt: b.isTotal ? 0 : 1 }
    });
    slide11.addText(b.item, {
        x: 1.7, y: 1.9 + i * 0.6, w: 4, h: 0.35,
        fontSize: 12, bold: b.isTotal, color: textColor,
        fontFace: 'Malgun Gothic'
    });
    slide11.addText(b.amount, {
        x: 5.5, y: 1.9 + i * 0.6, w: 2.8, h: 0.35,
        fontSize: 12, bold: true, color: b.isTotal ? 'FFFFFF' : colors.secondary, align: 'right',
        fontFace: 'Malgun Gothic'
    });
});

// 슬라이드 12: 마무리
let slide12 = pptx.addSlide();
slide12.background = { color: '1e1b4b' };
slide12.addText('감사합니다', {
    x: 0, y: 2, w: '100%', h: 1,
    fontSize: 48, bold: true, color: 'FFFFFF', align: 'center',
    fontFace: 'Malgun Gothic'
});
slide12.addText('모임의 모든 과정을 쉽게 만들어\n더 많은 사람들이 소중한 만남을 즐길 수 있도록 하겠습니다', {
    x: 0, y: 3, w: '100%', h: 0.8,
    fontSize: 16, color: 'a5b4fc', align: 'center',
    fontFace: 'Malgun Gothic'
});
slide12.addText('이지모임', {
    x: 0, y: 4.3, w: '100%', h: 0.6,
    fontSize: 24, bold: true, color: 'FFFFFF', align: 'center',
    fontFace: 'Malgun Gothic'
});
slide12.addText('모임의 A부터 Z까지, 당신의 모임비서', {
    x: 0, y: 4.8, w: '100%', h: 0.4,
    fontSize: 14, color: 'a5b4fc', align: 'center',
    fontFace: 'Malgun Gothic'
});

// 파일 저장
pptx.writeFile({ fileName: 'easymoim-business-plan.pptx' })
    .then(() => console.log('PPT 생성 완료: easymoim-business-plan.pptx'))
    .catch(err => console.error('PPT 생성 오류:', err));
