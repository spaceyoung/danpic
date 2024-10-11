<div align="center">

# 📰 단픽 Danpic

<img src="https://github.com/user-attachments/assets/af3ba8d2-b442-40d0-b606-2cf73fbaeec2" alt="단픽 이미지" width="800" />

**단 한 문장으로 시작하는 영어 공부, 단픽**

[**🔗 단픽 바로가기 (v0.1.0)**](https://danpic.vercel.app/)

[**🏃‍♂️💨 여러분을 만나기 위해 단픽이 거쳐온 경로**](https://velog.io/@young_ever/series/%EB%8B%A8%ED%94%BD)

</div>

<br>
<br>

## 🔎 프로젝트 개요
> [프로젝트 주제 선정](https://velog.io/@young_ever/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A3%BC%EC%A0%9C-%EC%84%A0%EC%A0%95)
<br>

현대사회 일원으로서 살아가는 데 여러 방면으로 국제적 필요성을 지닌 언어, 영어.

단픽은 바쁜 일상 속, 자투리 시간을 활용하여 시사 소식과 함께 영어를 학습할 수 있는 **영어 기사 뷰어 서비스**입니다.

기사의 제목만 모아 세계적인 이슈를 빠르게 확인하면서, 양질의 단어로 구성된 제목을 통해 영어를 학습할 수 있습니다.

매일매일 쏟아지는 세계 곳곳의 이슈로 세상과 소통하며 영어 공부를 시작해 보세요!

<br>

## 💻 구현 화면
> [Figma로 기획한 단픽 디자인](https://www.figma.com/design/ylA92wkctDXCzvGQDNKqWD/Danpic?node-id=0-1&t=8t8SdkksBIzfiSIB-1)
<br>

### [ 기사 조회 ]

<img src="https://github.com/user-attachments/assets/9312b9c0-5daf-4cb2-905a-f1df2270dcc6" alt="기사 조회 화면" />

  - **뉴욕 타임스 API**를 활용하여 필요한 기사 데이터를 불러옵니다.
  - 상단에 위치한 배너에서는 최근 화제로 떠오르면서 이슈가 된 주요 기사를 확인할 수 있으며, 서비스 접속 시마다 무작위 기사를 선택해 보여줍니다.
  - 배너 하단의 탭 메뉴를 클릭하면 해당 Section으로 분류되는 기사 목록을 확인할 수 있습니다.
  - 메인 콘텐츠에 해당하는 기사 목록은 최신순으로 10개씩 조회되며, 목록 하단의 '더 보기' 버튼을 클릭하면 기사 목록이 추가로 조회됩니다.
  - 스크롤을 내리면 나타나는 우측 하단의 Top 버튼을 클릭해 페이지 상단으로 빠르게 이동할 수 있습니다.

<br>

<img src="https://github.com/user-attachments/assets/390f48f0-a230-4da2-a5f8-d0506ca6ae81" alt="탭 목록 스크롤" />

  - 모바일 화면에서 탭 목록을 터치하여 스크롤 할 수 있습니다.
  - 사용성 향상을 위해 모바일 화면에서 탭 메뉴를 클릭하면, 해당 탭 메뉴가 포커스되도록 좌측에 일부 여백을 남기고 자동으로 스크롤 됩니다.

<br>

### [ 기사 보러가기 ]

<img src="https://github.com/user-attachments/assets/7e1e3487-a998-4979-b391-2e62fe452855" alt="기사 보러가기 화면" />

  - 배너 기사의 '기사 보러가기' 버튼을 클릭하면 해당 기사의 원문으로 연결되는 새 창이 열립니다.

<br>

### [ 기사 번역 ]

<img src="https://github.com/user-attachments/assets/eb63c868-2084-4d8e-9b8b-e5f6da56f80d" alt="기사 번역 화면" />

  - **구글 번역 API**를 활용하여, '번역하기' 버튼을 클릭하면 영어로 된 기사 제목을 한국어로 번역할 수 있습니다.
  - 번역 후에는 '번역 숨기기'로 변경된 버튼을 클릭하여 한국어로 번역된 기사를 숨길 수 있습니다.

<br>

### [ 다크 모드 ]

<img src="https://github.com/user-attachments/assets/b5e8460e-f24d-460c-a75a-7b47721f7e74" alt="다크 모드 화면" />

  - 헤더 우측의 테마 토글 스위치를 통해 라이트 모드 / 다크 모드로 전환할 수 있습니다.

<br>

### [ 반응형 웹 ]

<img src="https://github.com/user-attachments/assets/b32da202-dd0e-4d96-8e39-0aaa593e3fbe" alt="반응형 웹 화면" />

  - PC, 태블릿, 모바일 뷰포트에 대응하는 반응형 웹 디자인으로 사용자의 디바이스에 따라 화면이 유기적으로 변경됩니다.

<br>

## 🛠 사용 기술

### 해당 기술 스택을 선정한 이유
>  - [프로젝트 생성을 위한 기술 선택](https://velog.io/@young_ever/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-%EA%B8%B0%EC%88%A0-%EC%84%A0%ED%83%9D)
>  - [어떤 상태 관리 라이브러리를 도입할까](https://velog.io/@young_ever/%EC%96%B4%EB%96%A4-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EB%A5%BC-%EB%8F%84%EC%9E%85%ED%95%A0%EA%B9%8C)

<br>

```
* Language
    - TypeScript

* Service
    - Vite
    - React.js

* Package Manager
    - PNPM
    
* Lints
    - Prettier

* Library
    - Axios
    - Zustand
    - Emotion

* Development Tools
    - Visual Studio Code
    - Github
    - Vercel

* Design
    - Figma
```

<br>

## ✍ 기술적 고민
- [Axios로 API를 효율적으로 관리해보자](https://velog.io/@young_ever/Axios%EB%A1%9C-API%EB%A5%BC-%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9C%BC%EB%A1%9C-%EA%B4%80%EB%A6%AC%ED%95%B4%EB%B3%B4%EC%9E%90)
- [스크롤 이벤트 없이 스크롤 감지하기](https://velog.io/@young_ever/%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%97%86%EC%9D%B4-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B0%90%EC%A7%80%ED%95%98%EA%B8%B0)

