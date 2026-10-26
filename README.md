# BEYOND THE FRAME — 2026 시각디자인과 졸업전시 웹사이트

한국폴리텍대학 정수캠퍼스 시각디자인과 2026 졸업작품 온라인 전시 페이지입니다.
React 프로젝트가 아니라서 `src`·`public`·`package.json`은 없습니다. 빌드 도구 없이 **HTML + CSS + JavaScript** 로만 만든 정적 사이트라서, 이 폴더를 그대로 GitHub Pages에 올리면 바로 배포됩니다.
CSS와 JavaScript는 **화면(방)별로 파일을 나눠** 두었습니다.

## 화면(방) ↔ 파일

| 화면 | HTML (`index.html` 안 주석 표시) | CSS | JavaScript |
|---|---|---|---|
| ①② 인트로 (티켓 → 길거리 포스터 → 금색 액자 → 와장창) | `① 인트로`, `② 인트로` | `css/intro.css` | `js/intro.js` |
| ③ 로비 (액자 3개 = 전시실 입구) | `③ 로비` | `css/lobby.css` | `js/lobby.js` |
| ④ 전시실 GALLERY 01~03 (석고상) | `④ 전시실` | `css/gallery.css` | `js/gallery.js` |
| 학생 상세 팝업 (석고상을 누르면 열림) | `학생 상세 팝업` | `css/detail.css` | `js/detail.js` |
| ⑤ 작가 목록 LIST | `⑤ 작가 목록` | `css/list.css` | `js/list.js` |
| 공통 (상단 메뉴, 화면 전환, 안내 문구) | `공통` | `css/common.css` | `js/screens.js`, `js/common.js` |

## 폴더 구조

```
beyond-the-frame/
├── index.html            # 페이지 구조 (HTML) — 화면마다 <!-- ① 인트로 --> 같은 주석으로 구분
├── css/
│   ├── common.css        # 공통: 색·글꼴 변수, 화면 전환, 상단 메뉴, 움직이는 배경 무대
│   ├── intro.css         # ①② 인트로
│   ├── lobby.css         # ③ 로비
│   ├── gallery.css       # ④ 전시실
│   ├── detail.css        # 학생 상세 팝업
│   └── list.css          # ⑤ 작가 목록
├── js/                   # index.html 아래쪽에서 이 순서대로 불러옴
│   ├── data.js           # 내용 데이터: 학생 목록·이미지/3D 파일 경로·화면 좌표
│   ├── common.js         # 공통 도구: 짧은 함수, 석고상 그림, 움직이는 배경 무대, 먼지 효과
│   ├── screens.js        # 화면 전환과 상단 메뉴, 주소(#lobby 등) 관리
│   ├── models3d.js       # 3D 공통: three.js 불러오기, .glb 읽기, 조명
│   ├── intro.js          # ①② 인트로
│   ├── lobby.js          # ③ 로비
│   ├── gallery.js        # ④ 전시실 (전시실 바꾸기, 석고상 배치·회전)
│   ├── detail.js         # 학생 상세 팝업
│   ├── list.js           # ⑤ 작가 목록
│   └── main.js           # 시작: 메뉴·키보드, 매 프레임 그리기, 첫 화면 정하기 (맨 마지막에 불러와야 함)
├── assets/
│   ├── images/           # 배경·포스터·티켓 이미지
│   │   ├── street.jpg        인트로 길거리 배경
│   │   ├── poster.webp       길거리 포스터
│   │   ├── ticket.png        티켓
│   │   ├── ticket-torn.png   뜯긴 티켓
│   │   ├── arch-bg.jpg       로비 배경
│   │   ├── frames.webp       로비 액자
│   │   ├── gallery-bg.jpg    전시실 배경
│   │   └── pedestals.webp    전시실 좌대
│   └── models/           # 학생별 석고상 3D 파일
│       ├── 01.glb ~ 15.glb         웹(https)에서 쓰는 3D 파일
│       └── 01.glb.js ~ 15.glb.js   더블클릭(file://)으로 열 때 쓰는 같은 내용의 사본 (zip에만 있음, GitHub에는 안 올림)
├── .nojekyll             # GitHub Pages가 파일을 그대로 쓰도록 하는 빈 파일
└── README.md
```

### 3D 파일 번호 ↔ 학생

| 번호 | 이름 | 번호 | 이름 | 번호 | 이름 |
|---|---|---|---|---|---|
| 01 | 조민영 | 06 | 박호성 | 11 | 조예빈 |
| 02 | 민하도 | 07 | 김예일 | 12 | 송예준 |
| 03 | 천승현 | 08 | 오수한 | 13 | 김준서 |
| 04 | 박재연 | 09 | 박수빈 | 14 | 손예진 |
| 05 | 김수연 | 10 | 김우선 | 15 | 하태랑 |

(파일 이름에 한글이 있으면 서버에 따라 주소가 깨질 수 있어서 번호로만 저장했습니다.)

## 외부 링크 (CDN)

설치할 것은 없고, 아래 두 가지를 인터넷에서 불러옵니다.

- 글꼴: Google Fonts — Noto Sans KR, Noto Serif KR (`index.html` 9번째 줄)
- 3D: [three.js 0.160.0](https://cdn.jsdelivr.net/npm/three@0.160.0/) — jsDelivr CDN (`index.html`의 `importmap`)

## 내용 수정하는 곳

| 바꾸고 싶은 것 | 위치 |
|---|---|
| 학생 이름 / 작품 설명 / 포트폴리오 링크 | `js/data.js`의 `STUDENTS` 목록 (`portfolio: ''` 칸에 주소 넣기) |
| 이미지·3D 파일 경로 | `js/data.js` 맨 위 `ASSETS` |
| 인트로 방식 | `js/screens.js`의 `INTRO_MODE` — `'combo'`(티켓→포스터→액자, 현재), `'ticket'`, `'frame'` |
| 색·글꼴 | `css/common.css` 맨 위 `:root` 변수 |
| 화면별 모양·동작 | 위 **화면(방) ↔ 파일** 표의 해당 파일 |

JavaScript 파일들은 모듈(`import`)이 아니라 `index.html`에서 차례로 불러오는 일반 스크립트입니다. 앞 파일에서 만든 변수·함수를 뒤 파일에서 그대로 쓰므로 `<script>` 순서를 바꾸지 마세요.

주소 끝에 `#lobby`, `#list`, `#gallery-1` ~ `#gallery-3` 를 붙이면 인트로 없이 해당 화면으로 바로 갑니다.

## 내 컴퓨터에서 실행하기

zip으로 받은 폴더라면 `index.html`을 **더블클릭해서 열어도** 3D 석고상까지 나옵니다 (three.js와 글꼴을 인터넷에서 불러오므로 인터넷 연결은 필요).
브라우저는 보안 때문에 `file://` 주소에서 `.glb` 파일을 읽지 못하게 막지만, 스크립트 파일은 읽을 수 있어서 `assets/models/*.glb.js` 사본을 대신 씁니다.

GitHub에서 받은 폴더에는 `.glb.js` 사본이 없어서 더블클릭으로는 3D가 안 나옵니다. 그럴 때는 아래 방법 중 하나로 로컬 서버를 켜서 열어 주세요.

- **VS Code**: Live Server 확장 설치 → `index.html` 우클릭 → *Open with Live Server*
- **Python**: 이 폴더에서 `python -m http.server 8000` → 브라우저에서 http://localhost:8000
- **Node.js**: 이 폴더에서 `npx serve` → 안내된 주소로 접속

## GitHub Pages 배포

1. 이 폴더 **안의 내용 전체**(index.html, css, js, assets, .nojekyll, README.md)를 저장소 최상위에 올립니다.
2. 저장소 **Settings → Pages → Build and deployment** 에서 Source: *Deploy from a branch*, Branch: `main` / `/ (root)` 선택 후 Save.
3. 1~2분 뒤 `https://<아이디>.github.io/<저장소이름>/` 에서 확인합니다.

모든 경로가 상대 경로라서 저장소 이름이 무엇이든 그대로 동작합니다.

## 브라우저 지원

최신 Chrome, Edge, Safari, Firefox (데스크톱·모바일). `importmap`을 쓰기 때문에 아주 오래된 브라우저에서는 3D가 나오지 않습니다.
