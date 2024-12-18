# Relaxing

<p align="center">
  <img src="https://github.com/user-attachments/assets/c8fa384e-cc8e-4b36-825f-2b6c7aa2f665">
</p>

<p align="center">
Relaxing은 프로젝트를 쉽게 만들고 배포할 수 있도록 도와주는 데스크톱 애플리케이션입니다.
<br/> 기존에는 터미널에서 명령어를 입력해야 프로젝트를 생성했지만, <br/>
이 애플리케이션은 시각적으로 보여주는 그래픽 사용자 인터페이스(GUI)를 제공하여
누구나 쉽게 프로젝트를 만들고 관리할 수 있습니다.
</p>

<p align="center">
 일렉트론 실행 <br/> GitHub Repo - <a href="https://github.com/parkyooni/Relaxing" target="_blank">Client<br/>
 <div align="center">
  <img src="https://img.shields.io/badge/Electron-222222?style=for-the-badge">
  <img src="https://img.shields.io/badge/react-222222?style=for-the-badge">
  <img src="https://img.shields.io/badge/zustand-222222?style=for-the-badge"><br/>
  <img src="https://img.shields.io/badge/styled_components-222222?style=for-the-badge">
  <img src="https://img.shields.io/badge/vite-222222?style=for-the-badge">
 </div>
</p>

## 기능

<!-- toc -->

- [팀 프로젝트 아이디어 선정](#%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4-%EC%84%A0%EC%A0%95)
- [프로젝트 기능 소개](#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C)
  * [[새 프로젝트 데이터 입력] 프로젝트를 생성하는 데 필요한 정보를 입력합니다.](#%EC%83%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%9E%85%EB%A0%A5-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-%EC%83%9D%EC%84%B1%ED%95%98%EB%8A%94-%EB%8D%B0-%ED%95%84%EC%9A%94%ED%95%9C-%EC%A0%95%EB%B3%B4%EB%A5%BC-%EC%9E%85%EB%A0%A5%ED%95%A9%EB%8B%88%EB%8B%A4)
  * [[새 프로젝트 생성] 입력한 데이터 정보는 두 가지 방법으로 생성할 수 있습니다.](#%EC%83%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1-%EC%9E%85%EB%A0%A5%ED%95%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%95%EB%B3%B4%EB%8A%94-%EB%91%90-%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95%EC%9C%BC%EB%A1%9C-%EC%83%9D%EC%84%B1%ED%95%A0-%EC%88%98-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4)
  * [[프로젝트 구조 & 실행] 생성된 프로젝트의 폴더 구조를 확인하고, 브라우저에서 실행할 수 있습니다.](#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B5%AC%EC%A1%B0--%EC%8B%A4%ED%96%89-%EC%83%9D%EC%84%B1%EB%90%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%9D%98-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0%EB%A5%BC-%ED%99%95%EC%9D%B8%ED%95%98%EA%B3%A0-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%97%90%EC%84%9C-%EC%8B%A4%ED%96%89%ED%95%A0-%EC%88%98-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4)
- [프로젝트 선정 과정](#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%84%A0%EC%A0%95-%EA%B3%BC%EC%A0%95)
  * [[일렉트론 포지 선택]](#%EC%9D%BC%EB%A0%89%ED%8A%B8%EB%A1%A0-%ED%8F%AC%EC%A7%80-%EC%84%A0%ED%83%9D)
  * [[UI & UX 동시 작업 선택]](#ui--ux-%EB%8F%99%EC%8B%9C-%EC%9E%91%EC%97%85-%EC%84%A0%ED%83%9D)
- [핵심기능 구현 과정](#%ED%95%B5%EC%8B%AC%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84-%EA%B3%BC%EC%A0%95)
  * [[프로젝트 생성 - 파일 경로 선택] 클라이언트에서도 파일 경로를 보여줄 수 있습니다.](#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1---%ED%8C%8C%EC%9D%BC-%EA%B2%BD%EB%A1%9C-%EC%84%A0%ED%83%9D-%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8%EC%97%90%EC%84%9C%EB%8F%84-%ED%8C%8C%EC%9D%BC-%EA%B2%BD%EB%A1%9C%EB%A5%BC-%EB%B3%B4%EC%97%AC%EC%A4%84-%EC%88%98-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4)
  * [[프로젝트 생성 - 선택 확장] 프로젝트로 생성 선택 가능한 언어를 확장했습니다.](#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1---%EC%84%A0%ED%83%9D-%ED%99%95%EC%9E%A5-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A1%9C-%EC%83%9D%EC%84%B1-%EC%84%A0%ED%83%9D-%EA%B0%80%EB%8A%A5%ED%95%9C-%EC%96%B8%EC%96%B4%EB%A5%BC-%ED%99%95%EC%9E%A5%ED%96%88%EC%8A%B5%EB%8B%88%EB%8B%A4)
  * [[프로젝트 생성 - 토글 옵션 UI] 비활성화된 토글의 사용자 경험을 개선하였습니다.](#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1---%ED%86%A0%EA%B8%80-%EC%98%B5%EC%85%98-ui-%EB%B9%84%ED%99%9C%EC%84%B1%ED%99%94%EB%90%9C-%ED%86%A0%EA%B8%80%EC%9D%98-%EC%82%AC%EC%9A%A9%EC%9E%90-%EA%B2%BD%ED%97%98%EC%9D%84-%EA%B0%9C%EC%84%A0%ED%95%98%EC%98%80%EC%8A%B5%EB%8B%88%EB%8B%A4)
- [팀 프로젝트 회고](#%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0)

<!-- tocstop -->

## 팀 프로젝트 아이디어 선정

과거, 정식 업무로 팀에서 신규 프로젝트를 진행할 때, 프론트엔드 팀에서 메인 역할을 맡게 되었습니다. 이 프로젝트는 Vue.js 2버전을 기반으로 SCSS와 ESLint로 초기 세팅을 하고, 디자인에 따라 퍼블리싱 작업 및 라우터 연결까지 포함되었습니다.

입사한 지 3주 차인 신입으로서, 대규모 프로젝트 초기 구성과 GitHub 레포지토리 생성은 모두 생소한 경험이었습니다. 특히, 터미널 작업이 익숙하지 않았고, 프로젝트 생성 방법과 구조가 다양하다는 사실을 처음 알게 되었습니다. 운 좋게 Vue GUI를 접했지만, 일부 기능이 작동하지 않아 유지보수가 중단된 상태라는 인상을 받았습니다.

이런 경험을 바탕으로, 터미널 사용이 어색한 신입 개발자에게 실용적이고 시각적으로 도움을 줄 수 있는 도구의 필요성을 느꼈습니다.

팀원들도 Create Project GUI와 같은 도구가 있다면 프로젝트 생성이 훨씬 더 쉬워질 것이라고 공감하여, 이 아이디어를 선정하게 되었습니다.

## 프로젝트 기능 소개

### [새 프로젝트 데이터 입력] 프로젝트를 생성하는 데 필요한 정보를 입력합니다.

<p align="center">
    <img src="https://github.com/user-attachments/assets/98faae9e-c65c-4a5f-a28f-efee86e719a5" style="width: 100%" height="auto" ><br/>
    <span style="display: inline-block" align="center">
    작성을 완료하면 다음 단계에서 입력할 수 있는 옵션이 나타납니다. <br/>
    이 옵션의 내용은 터미널에서 프로젝트를 생성하는 명령어의 단계를 기준으로 생성됩니다.
</span>
</p>

### [새 프로젝트 생성] 입력한 데이터 정보는 두 가지 방법으로 생성할 수 있습니다.

|                                  최초 1회성 프로젝트 생성                                   |                                     커스텀 이름으로 저장하여 프로젝트 생성                                     |
| :-----------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: |
| ![1회생성](https://github.com/user-attachments/assets/2af9109b-68e1-4cdb-a217-ce812ce9d9d3) |         ![커스텀생성](https://github.com/user-attachments/assets/ab7cfd10-a5ee-4384-805f-987bb372a7fb)         |
|               한 번만 사용하는 1회성 데이터로 프로젝트를 생성할 수 있습니다.                | 입력한 데이터에 이름을 부여하여 저장한 후, <br/> 나중에 그 이름으로 같은 프로젝트를 빠르게 생성할 수 있습니다. |

### [프로젝트 구조 & 실행] 생성된 프로젝트의 폴더 구조를 확인하고, 브라우저에서 실행할 수 있습니다.

<p align="center">
    <img src="https://github.com/user-attachments/assets/11b0210f-a0eb-44f0-9762-0f53c5ce7525" style="width: 100%" height="auto" ><br/>
    <span style="display: inline-block" align="center">
    생성한 프로젝트의 구조를 확인할 수 있으며, '$npm run dev' 토글 버튼을 통해 프로젝트를 실행할 수 있습니다.
</span>
</p>

## 프로젝트 선정 과정

### [일렉트론 포지 선택]

> - Electron Forge를 활용하여 초기 세팅 및 실행 파일 생성 프로세스를 자동화
> - IPC 통신을 통해 로컬 PC 환경과의 인터페이스를 구현, 사용자 경험 강화

#### 기능 구체화 <br/>

일렉트론 프로젝트는 특성과 개발자의 주관적인 효율성을 고려하여 구성됩니다. 초기 구조에서는 React의 효율적인 적용에 어려움이 있었기 때문에, 컴포넌트 재사용성과 유지보수 측면을 중시하였습니다.

또한, 빠른 이해를 위해 일렉트론 프로젝트 초기 생성 시 main과 renderer라는 이름을 그대로 사용하였습니다. <br/>
여기서 main은 통신 관련, 즉 이해하기 쉽게 서버 역할을, renderer는 사용자가 보는 화면, 즉 클라이언트 역할을 합니다.

```javascript
// 일렉트론 포지내부에 React의 구조를 세팅하며 main/ renderer/ 폴더의 각 사용성 정의
├── src/
│   ├── main/
│   │   ├── main.js            # Electron 메인 프로세스 진입점 (IPC 로직)
│   │   └── preload.js         # IPC 통신 설정 파일
│   └── renderer/
│       ├── components/        # 일반 컴포넌트 폴더
│       │   └── ...
│       ├── App.jsx            # 앱의 루트 컴포넌트 (라우터 포함)
│       ├── main.jsx           # React 애플리케이션 진입점 (root)
├── public/
│   ├── images                 # 데스크톱 애플리케이션의 모든 이미지
│   └── style                  # 전역, 글로벌 등의 스타일드 컴포넌트
├── index.html                 # renderer 프로세스 HTML 파일
├── package.json
├── .gitignore
└── README.md
```

#### 방안 적용 및 결과 <br/>

renderer의 내부 구조에서는 기획서에 맞게 두 가지의 다른 레이아웃을 정의하고, 그에 따라 라우터에서 Layout 컴포넌트를 통해 구분합니다.

Layout 구조를 나누는 장점은 같은 애플리케이션 내에서 여러 가지 화면 구조를 라우터마다 각각 나눠서 보여줄 수 있어 사용자 인터페이스에 자율성을 부여하고, 프로젝트 개발 측면에서도 확장성을 제공합니다.

```javascript
<Router>
  <Routes>
    <Route path="/" element={<DashboardLayout />}>
      {/* 프로젝트가 생성된후의 화면들(컴포넌트) */}
    </Route>
    <Route path="project" element={<PrivateLayout />}>
      {/* 프로젝트를 생성하는 화면들(컴포넌트) */}
    </Route>
  </Routes>
</Router>
```

|                                           PrivateLayout                                           |                                           DashboardLayout                                           |
| :-----------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: |
| ![PrivateLayout](https://github.com/user-attachments/assets/5b11db40-b8a5-46d6-9b38-f8c0b5b08382) | ![DashboardLayout](https://github.com/user-attachments/assets/e9008824-2c9a-4134-9957-431de21d8f84) |
|                              프로젝트 생성하는 화면의 레이어들 구성                               |                              프로젝트가 생성된 후의 화면 레이어 구성들                              |

<br/>

#### 개선점 <br/>

에러가 발생했을 경우, React의 전역에서 발생하는 에러 팝업을 중앙화 처리하는 것이 유지보수 측면에서 효율적입니다. 현재는 Router(React의 페이지 컴포넌트 연결) 코드 구성에서 에러가 발생하면 관련 메시지가 전역으로 전달되어 에러 팝업이 표시됩니다. 그러나 이를 App.jsx에서 에러 바운더리로 리팩토링하여 로직을 개선할 수 있습니다.

### [UI & UX 동시 작업 선택]

> 일렉트론은 반응형 기반의 데스크톱 애플리케이션입니다. 그러한 이유로 디자인 또한 반응형을 고려하였으며, 퍼블리싱 작업 단계에서 기능적인 부분까지 작업이 가능하다고 판단했습니다.
>
> 그러나 반응형과 기능을 각각 별도로 작업하기에는 비효율적이라는 결론으로 논의되어, IPC 프로세스 로직 연결을 고려해 목업 데이터 파일을 별도로 생성하여 화면 작업을 진행하기로 결정하였습니다.

#### 기능 구체화 <br/>

14인치, 16인치, 27인치 화면 비율을 일렉트론 초기 화면에서 체크하였으며, 최소 너비값을 700px로 설정하고, 최대 너비는 모니터 화면 크기에 따라 다양하게 확인하였습니다. 최대 너비에 대한 고정값은 두지 않고 반응형을 한 번 분기하기로 정의했습니다.

분기의 기준 너비는 1200px으로 설정하였으며, 이는 1200px 이상의 화면 비율에서 일렉트론 특성에 맞게 자율성을 부여하였습니다. 단, 해당 위치의 고정값을 지정하여 모니터 화면 크기에 따라 콘텐츠가 무너지지 않도록 하였습니다.

#### 방안 적용 및 결과 <br/>

JSON 형태의 목업 데이터를 통해 화면의 반응형 및 Layout 구조에 따른 사용자 인터페이스를 구분하기 쉽게 되었습니다.

기능 구현 또한 목업 데이터를 활용하여 React의 useState로 저장하는 흐름과 함께 사용자 인터페이스를 동시에 작업할 수 있어 시간 소요를 줄이는 이점이 있었습니다.

|                                             넓이 700                                             |                                    넓이 1200 ~ (1920이상 동일)                                    |
| :----------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: |
| ![700px 반응형](https://github.com/user-attachments/assets/4ae599da-807d-47fa-a5cb-244f63f37d2c) | ![1200px 반응형](https://github.com/user-attachments/assets/68369264-96f8-46a8-8f97-9298b3fb12e0) |

## 핵심기능 구현 과정

> 기능 구현 중에 발생한 챌린지로 <b> `기능 구체화 > 해결 방안 및 결과 > 개선점` </b> 순서로 작성합니다.

### [프로젝트 생성 - 파일 경로 선택] 클라이언트에서도 파일 경로를 보여줄 수 있습니다.

> 파일을 업로드하고 경로를 읽어들이는 부분은 Node.js의 `fs.readdir` 메소드를 사용하여 사용자 PC의 로컬 파일 경로를 탐색하고 읽어 화면에 표시합니다.

#### 기능 구체화 <br/>

목업 데이터를 퍼블리싱하는 과정에서, input 태그의 타입을 파일로 설정하여 파일을 선택할 수 있는 요소를 추가했습니다. 퍼블리싱 단계의 기능 구현을 동시에 진행하면서, `HTMLInputElement의 webkitdirectory` 속성을 활용하여 클라이언트에서 파일을 읽어 화면에 표시하는 작업을 수행하였습니다.

#### 방안 적용 및 결과 <br/>

HTML의 `<input type="file">`은 파일 또는 폴더를 선택하는 기본적인 기능을 지원합니다. HTML5부터는 폴더 선택 기능이 추가되어 브라우저에서 폴더를 선택할 수 있습니다.

`webkitRelativePath` 속성을 사용하여 선택한 파일의 폴더를 올릴 수 있으며, 선택한 파일의 상대 경로를 가져오고 이 경로의 하위 경로에 접근하여 폴더의 경로를 확인합니다. 확인한 경로는 useState에 저장하여 input 태그의 입력값을 통해 화면에 표시하는 과정을 거칩니다.

```javascript
const handleFileChange = event => {
  const fileList = event.target.files;
  if (fileList.length > 0) {
    const fullPath = fileList[0].webkitRelativePath;
    const folderPath = fullPath.substring(0, fullPath.lastIndexOf("/"));
    setPath(folderPath);

    const filesArray = Array.from(fileList).map(
      file => file.webkitRelativePath
    );
    setFiles(filesArray);
  }
};
```

<details>
<summary>코드 추가 설명</summary>
<div markdown="1">
<ul>
  <li>
  파일 목록 가져오기 : 선택한 파일 전체를 가져와 fileList라는 변수에 저장합니다.
  </li>
  <li>
  폴더 경로 추출 : 첫 번째 파일의 전체 경로에서 폴더 경로를 추출하여 folderPath에 저장합니다.
  </li>
  <li>
  상태 저장 : 읽어들여온 폴더 경로를 setPath 함수를 통해 상태로 저장합니다.
  </li>
  <li>
  파일 경로 배열 생성 : 선택된 모든 파일의 경로를 배열로 만들어 filesArray에 저장합니다.
  </li>
  <li>
  파일 경로 저장 : 이 배열을 setFiles 함수를 통해 상태로 저장하여, 선택한 파일의 경로를 원하는 곳에서 사용할 수 있도록 합니다.
  </li>
</ul>

</div>
</details>

 <p align="center">
    <img src="https://github.com/user-attachments/assets/50419e2e-9f3f-46d9-b0d9-ffc039e8686b" width="700" height="auto" ><br/>
    <span style="display: inline-block" align="center">클라이언트 화면에서 정상적으로 사용자 로컬 환경의 파일 경로를 읽어 들이는 화면</span>
  </p>

<br/>

#### 개선점 <br/>

기획서에 명시된 절대 경로가 아닌, useState를 통해 정보를 담은 결과값이 생성됩니다. 이럴 경우 프로젝트의 기능이 구현된 것처럼 보일 수 있지만, 클라이언트에서 다루는 Input은 상대 경로만 처리한다는 단점이 있습니다.

이러한 이유로 목업 데이터로 기능을 추가하여 퍼블리싱할 때는 유용하지만, 절대 경로를 읽어 그 값을 state에 담아 지속적으로 사용하기에는 한계가 있습니다. 따라서, Node.js 메소드를 활용하여 IPC 통신의 메인 프로세스에서 파일 경로를 다루는 로직이 필요합니다.

### [프로젝트 생성 - 선택 확장] 프로젝트로 생성 선택 가능한 언어를 확장했습니다.

> 필요한 파일만을 on-demand로 변환하여 불러오는 과정에서 속도가 빠른 Vite 번들러가 가장 적합하다고 판단하여, React 프로젝트를 생성하는 기능으로 초기 의도를 설정하였습니다.

#### 기능 구체화 <br/>

`npm create vite@latest` 터미널 명령어를 통해 프로젝트의 흐름을 체크하는 과정에서, React만을 한정하기에는 해당 명령어의 내부 기능이 다양한 프레임워크를 지원하므로, 프로젝트 생성 가능 언어의 폭을 넓히기로 결정하였습니다.

#### 방안 적용 및 결과 <br/>

터미널 명령어의 구성을 분석하여 Vite로 실행되는 패턴을 탐색했습니다. Vite에 속해 있는 프레임워크의 구성을 클라이언트에서 별도의 JSON 파일로 구성하고, 프레임워크 선택을 위한 토글 체크박스 리스트로 불러왔습니다.

체크된 값에 해당하는 JSON 파일의 이름을 framework 값으로 통신하여 프로젝트를 생성하는 기능을 구현하였습니다.

```javascript
const command = `npm create vite@latest ${projectName} -- --template ${framework}`;
```

```javascript
 "frameworkSelector": [
    {
      "name": "React",
      "type": "boolean",
      "option": [...]
    },
    { ... }
  ],
```

 <p align="center">
    <img src="https://github.com/user-attachments/assets/f3ac9778-d5c1-478a-b398-2c6308e4ef36" width="700" height="auto" ><br/>
    <span style="display: inline-block" align="center">JSON 파일에서 데이터를 불러오고, 체크박스가 true 값으로 표시되면 해당 상태를 담아 프로젝트 생성의 마지막 단계에서 IPC로 통신하여 터미널로 프로젝트를 생성합니다.</span>
  </p>

### [프로젝트 생성 - 토글 옵션 UI] 비활성화된 토글의 사용자 경험을 개선하였습니다.

> 프로젝트 생성 흐름에 따라 4개 이상의 페이지가 필요하기 때문에, 빠른 퍼블리싱 작업과 사용자 경험을 위해 4개 이상의 페이지를 한 페이지에 담는 토글 형식으로 설계하였습니다.
>
> 토글의 옵션별로 사용자가 필수적으로 입력해야 하는 정보가 있으며, 각 옵션마다 필수 정보를 입력하면 다음 옵션이 클릭 불가 상태에서 클릭 가능하도록 표시되도록 작업하였습니다. 그러나 사용자 경험과 간편한 시각적 이해를 돕기 위해 기존 토글 방식을 확장성 있게 변형하기로 결정하였습니다.

#### 기능 구체화 <br/>

- 필수 입력 토글 : 필수 정보를 입력하면 다음 토글이 숨겨져 있다가 나타나고 포커스가 적용됩니다.
- 시각적 안내 : 필수 정보가 입력된 토글은 별도의 컬러 표시로 사용자에게 시각적으로 안내합니다.
- 전체 토글 표시 : 토글이 숨겨져 있기 때문에 사용자는 몇 개의 토글이 존재하는지 알 수 없기에, 전체 토글과 작성된 토글을 상단에 표시합니다.
- 자동 닫힘 : 사용자의 시각적 불편함을 최소화하기 위해, 포커싱 된 토글만 펼쳐지고 다른 토글은 자동으로 닫힙니다.
- 안내 텍스트 : 펼쳐진 옵션에는 사용자에게 어떤 입력 정보가 필요한지 안내하는 텍스트가 표시됩니다.

#### 방안 적용 및 결과 <br/>

|                                             변경 전                                             |                                               변경 후                                                |
| :---------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: |
| ![변경전 토글](https://github.com/user-attachments/assets/4bfb2531-6006-422e-a61f-31210bc79dbf) |   ![변경후 토글](https://github.com/user-attachments/assets/a6b611d5-c352-4c21-9e56-3c2387c92f15)    |
|                토글의 입력 조건이 충족되면 비활성화된 다음 토글이 활성화됩니다.                 | 토글의 입력 조건이 충족되면 활성화 표시로 토글이 닫히고, 다음 토글이 활성화되어 자동으로 펼쳐집니다. |

개선점 <br/>
현재 5개의 컴포넌트를 index.jsx 컴포넌트에 불러오며, 토글의 상태는 UIStore와 ProjectStore 간에 주고받으며 동작합니다. 이러한 복잡한 로직으로 인해 가독성이 떨어질 수 있으므로, 상수화를 진행하는 부분을 고려해야 합니다.

## 팀 프로젝트 회고

팀 프로젝트로 A부터 Z까지 기획, 디자인, POC(Proof of Concept)를 협업하며 진행하는 경험이었습니다.
이 프로젝트에서 팀원 간의 소통이 중요하다는 점을 항상 염두에 두었고, 서로 잘 소통하고 있다고 착각할 수 있다는 점 또한 항상 인식하였습니다.

팀의 협업의 집중도 및 소통에 따라 프로젝트 결과물이 크게 달라질 수 있다는 생각이 팀원들과 일치하였으며,
팀원과 생활 패턴 및 숙식을 대부분 맞추어가며 팀 프로젝트를 진행했습니다. 이러한 경험은 이후 개인 프로젝트에도 긍정적인 영향을 미쳤습니다.
