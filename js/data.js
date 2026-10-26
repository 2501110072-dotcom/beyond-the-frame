/* 내용 데이터: 이미지·3D 파일 경로, 학생 목록(이름·소개·포트폴리오), 화면 위 좌표 */
const ASSETS = {
  gallery: 'assets/images/gallery-bg.jpg',
  pedestals: 'assets/images/pedestals.webp',
  street: 'assets/images/street.jpg',
  arch: 'assets/images/arch-bg.jpg',
  frames: 'assets/images/frames.webp',
  ticket: 'assets/images/ticket.png',
  torn: 'assets/images/ticket-torn.png',
  poster: 'assets/images/poster.webp',

  m01: 'assets/models/01.glb', m02: 'assets/models/02.glb', m03: 'assets/models/03.glb',
  m04: 'assets/models/04.glb', m05: 'assets/models/05.glb', m06: 'assets/models/06.glb',
  m07: 'assets/models/07.glb', m08: 'assets/models/08.glb', m09: 'assets/models/09.glb',
  m10: 'assets/models/10.glb', m11: 'assets/models/11.glb', m12: 'assets/models/12.glb',
  m13: 'assets/models/13.glb', m14: 'assets/models/14.glb', m15: 'assets/models/15.glb',
};

const STUDENTS = [
  { name: '김예일', slogan: '구조와 흐름을 꿰뚫어 불편을 편리로 바꾸는 경험 디자이너', desc: '', portfolio: '' },
  { name: '민하도', slogan: '아이디어를 시각화하는 디자이너', desc: '', portfolio: 'https://hadomin91-design.github.io/hadomin_design/' },
  { name: '김준서', slogan: '상상한 것을 실현으로 바꾸는 디자이너', desc: '', portfolio: 'https://superijun.github.io/portfolio/' },
  { name: '김우선', slogan: '경험을 디자인하고, 감각을 시각화하는 디자이너', desc: '', portfolio: 'https://kok62360.github.io/1004/' },
  { name: '김수연', slogan: '상대의 이야기에 귀 기울이고, 원하는 방향을 함께 찾아가는 디자이너', desc: '', portfolio: '' },
  { name: '박재연', slogan: '재미있게 끝까지 질리지 않는 디자이너', desc: '', portfolio: 'https://2501110072-dotcom.github.io/l01_interaction_2b/2501110072_ing_1' },
  { name: '박수빈', slogan: '떠오른 가능성을, 손에 닿는 경험으로.', desc: '', portfolio: '' },
  { name: '박호성', slogan: '감에 의존하지 않고, 데이터를 바탕으로 개선하는 디자이너', desc: '', portfolio: '' },
  { name: '오수한', slogan: '익숙함의 결을 따라, 변화를 섬세하게 빚는 디자이너', desc: '', portfolio: 'https://suhan998.github.io/Web-Portfolio/' },
  { name: '조민영', slogan: '경험을 내일로 잇는 디자이너', desc: '', portfolio: 'https://ddmom.github.io/my_portfolio/' },
  { name: '조예빈', slogan: '익숙한 것에서 낯선 매력을 발견하는 디자이너', desc: '', portfolio: 'https://yobinnie.github.io/exhibition_2026/' },
  { name: '손예진', slogan: '익숙한 것을 낯설게 듣고, 음악처럼 오래 남는 경험을 만드는 디자이너', desc: '', portfolio: 'https://pueon01-max.github.io/play-2/' },
  { name: '송예준', slogan: '과거와 현재와 미래를 잇는 디자이너', desc: '', portfolio: '' },
  { name: '천승현', slogan: '흐름에 맞춰 유연하게 변화하는 디자이너', desc: '', portfolio: 'https://cheon0903.github.io/fluidity-portfolio/' },
  { name: '하태랑', slogan: '현실과 꿈의 모호한 경계를 시각화하는 디자이너', desc: '', portfolio: 'https://www.figma.com/design/bTVBkOEK5V0OMDmdqKnAsn/Untitled?node-id=0-1' },
].map((s, i) => ({ ...s, no: i + 1, room: Math.floor(i / 5), slot: i % 5 }));

const MODELS = {
  '조민영': ASSETS.m01, '민하도': ASSETS.m02, '천승현': ASSETS.m03, '박재연': ASSETS.m04, '김수연': ASSETS.m05,
  '박호성': ASSETS.m06, '김예일': ASSETS.m07, '오수한': ASSETS.m08, '박수빈': ASSETS.m09, '김우선': ASSETS.m10,
  '조예빈': ASSETS.m11, '송예준': ASSETS.m12, '김준서': ASSETS.m13, '손예진': ASSETS.m14, '하태랑': ASSETS.m15,
};

const SLOTS = [
  { x: 282, y: 552, h: 320, tag: 650 },
  { x: 718, y: 546, h: 245, tag: 630 },
  { x: 1037, y: 644, h: 150, tag: 688 },
  { x: 1486, y: 526, h: 230, tag: 612 },
  { x: 1745, y: 690, h: 310, tag: 800 },
];

const FRAMES = [
  { inner: [377, 399, 346, 252], outer: [344, 368, 412, 315] },
  { inner: [847, 351, 304, 325], outer: [811, 308, 378, 406] },
  { inner: [1276, 402, 336, 245], outer: [1244, 368, 401, 315] },
];

const GALLERY_SPOTS = [[255, 250, 330, 420], [720, 300, 260, 380], [1052, 330, 260, 360], [1478, 290, 260, 400], [1850, 250, 320, 420]];
const LOBBY_SPOTS = [[550, 360, 380, 380], [1000, 330, 380, 420], [1446, 360, 380, 380]];
