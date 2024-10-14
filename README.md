# Relaxing

<p align="center">
  <img src="https://github.com/user-attachments/assets/c8fa384e-cc8e-4b36-825f-2b6c7aa2f665">
</p>

<p align="center">
Relaxing은 프로젝트 생성시 빠르게 구성하고, 빌드(디플로이) 할 수 있게 도와주는 데스크톱 애플리케이션 입니다. <br/>
터미널 명령어로 프로젝트 생성하는 기존의 방식을 GUI 화면으로 시각화하여 프로젝트 생성 및 관리가 가능합니다.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Electron-222222?style=for-the-badge">
  <img src="https://img.shields.io/badge/react-222222?style=for-the-badge">
  <img src="https://img.shields.io/badge/zustand-222222?style=for-the-badge"><br/>
  <img src="https://img.shields.io/badge/styled_components-222222?style=for-the-badge">
  <img src="https://img.shields.io/badge/vite-222222?style=for-the-badge">
</p>

## List

<!-- toc -->

- [Relaxing 흐름](#relaxing-%ED%9D%90%EB%A6%84)
  - [1. 프로젝트 생성](#1-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1)
  - [2. 나만의 프로젝트 생성](#2-%EB%82%98%EB%A7%8C%EC%9D%98-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1)
  - [3. 내 파일 경로 기억](#3-%EB%82%B4-%ED%8C%8C%EC%9D%BC-%EA%B2%BD%EB%A1%9C-%EA%B8%B0%EC%96%B5)
  - [4. 프로젝트 구조 & 실행](#4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B5%AC%EC%A1%B0--%EC%8B%A4%ED%96%89)
  - [5. 패키지 매니저로 설치](#5-%ED%8C%A8%ED%82%A4%EC%A7%80-%EB%A7%A4%EB%8B%88%EC%A0%80%EB%A1%9C-%EC%84%A4%EC%B9%98)
- [흐름에 따른 사고](#%ED%9D%90%EB%A6%84%EC%97%90-%EB%94%B0%EB%A5%B8-%EC%82%AC%EA%B3%A0)
  - [1. 일렉트론 포지로 선택한 이유가 있었습니다.](#1-%EC%9D%BC%EB%A0%89%ED%8A%B8%EB%A1%A0-%ED%8F%AC%EC%A7%80%EB%A1%9C-%EC%84%A0%ED%83%9D%ED%95%9C-%EC%9D%B4%EC%9C%A0%EA%B0%80-%EC%9E%88%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4)
  - [2. 시간상 화면과 기능을 한 번에 작업하는 방법을 선택했습니다.](#2-%EC%8B%9C%EA%B0%84%EC%83%81-%ED%99%94%EB%A9%B4%EA%B3%BC-%EA%B8%B0%EB%8A%A5%EC%9D%84-%ED%95%9C-%EB%B2%88%EC%97%90-%EC%9E%91%EC%97%85%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95%EC%9D%84-%EC%84%A0%ED%83%9D%ED%96%88%EC%8A%B5%EB%8B%88%EB%8B%A4)
  - [3. 클라이언트에서도 파일 경로를 보여 줄 수 있습니다.](#3-%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8%EC%97%90%EC%84%9C%EB%8F%84-%ED%8C%8C%EC%9D%BC-%EA%B2%BD%EB%A1%9C%EB%A5%BC-%EB%B3%B4%EC%97%AC-%EC%A4%84-%EC%88%98-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4)
  - [4. 상태 관리로 zustand를 적용했습니다.](#4-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC%EB%A1%9C-zustand%EB%A5%BC-%EC%A0%81%EC%9A%A9%ED%96%88%EC%8A%B5%EB%8B%88%EB%8B%A4)
  - [5. 프로젝트로 생성 가능한 언어를 확장했습니다.](#5-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A1%9C-%EC%83%9D%EC%84%B1-%EA%B0%80%EB%8A%A5%ED%95%9C-%EC%96%B8%EC%96%B4%EB%A5%BC-%ED%99%95%EC%9E%A5%ED%96%88%EC%8A%B5%EB%8B%88%EB%8B%A4)
  - [6. 비활성화 토글에 사용자 경험을 개선하였습니다.](#6-%EB%B9%84%ED%99%9C%EC%84%B1%ED%99%94-%ED%86%A0%EA%B8%80%EC%97%90-%EC%82%AC%EC%9A%A9%EC%9E%90-%EA%B2%BD%ED%97%98%EC%9D%84-%EA%B0%9C%EC%84%A0%ED%95%98%EC%98%80%EC%8A%B5%EB%8B%88%EB%8B%A4)
  - [7. OS 운영체제를 고려했습니다.](#7-os-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C%EB%A5%BC-%EA%B3%A0%EB%A0%A4%ED%96%88%EC%8A%B5%EB%8B%88%EB%8B%A4)
  - [8. 대시보드에 계층구조로 보여 주고 싶습니다.](#8-%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C%EC%97%90-%EA%B3%84%EC%B8%B5%EA%B5%AC%EC%A1%B0%EB%A1%9C-%EB%B3%B4%EC%97%AC-%EC%A3%BC%EA%B3%A0-%EC%8B%B6%EC%8A%B5%EB%8B%88%EB%8B%A4)
- [프로젝트 회고](#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0)

<!-- tocstop -->

## Relaxing 흐름

### 1. 프로젝트 생성

<details>
<summary>미리보기</summary>
<div markdown="1">

<img src="https://github.com/user-attachments/assets/98faae9e-c65c-4a5f-a28f-efee86e719a5" alt="프로젝트 생성" style="width: 100%" /><br/>
작성을 완료하면 다음 작성 가능한 토글이 보입니다.
토글의 내용은 터미널에서 프로젝트를 생성하는 명령어의 흐름을 기준으로 생성됩니다.

</div>
</details>

### 2. 나만의 프로젝트 생성

<details>
<summary>미리보기</summary>

|                                    프로젝트 일회성 생성                                     |                                      커스텀 프로젝트 생성                                      |
| :-----------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: |
| ![1회생성](https://github.com/user-attachments/assets/664d45fc-482a-4641-9cae-8902812791a4) | ![커스텀생성](https://github.com/user-attachments/assets/ab7cfd10-a5ee-4384-805f-987bb372a7fb) |
|                                일회성 프로젝트를 생성합니다.                                |       커스텀 이름으로 생성하고 이후 저장된 이름으로 새로운 프로젝트를 생성할 수 있습니다       |

<div markdown="1">

</div>
</details>

### 3. 내 파일 경로 기억

<details>
<summary>미리보기</summary>
<div markdown="1">
<img src="https://github.com/user-attachments/assets/b4eacc6a-2ef5-4604-a9ee-67b5af9cfed4" alt="프로젝트 경로" style="width: 100%" /><br/>
리스트에 있는 프로젝트 경로와 로컬 파일 디렉터리 경로에 프로젝트가 있으면 대시보드로 이동되며, 없으면 팝업을 보여줍니다.
</div>
</details>

### 4. 프로젝트 구조 & 실행

<details>
<summary>미리보기</summary>
<div markdown="1">
<img src="https://github.com/user-attachments/assets/11b0210f-a0eb-44f0-9762-0f53c5ce7525" alt="프로젝트 실행" style="width: 100%" /><br/>
생성한 프로젝트의 구조를 확인 할 수 있습니다.
프로젝트를 토글 버튼을 통해 실행시킬 수 있습니다.

</div>
</details>

### 5. 패키지 매니저로 설치

<details>
<summary>미리보기</summary>
<div markdown="1">
<img src="https://github.com/user-attachments/assets/4c6d8cc5-4cb0-460b-9af5-04a619d3f27a" alt="패키지 매니저" style="width: 100%" /><br/>
실제 런타임 환경에서 실행되는 dependencies와 빌드 작업에 필요한 devDependencies의 설치된 패키지를 확인 가능합니다.
설치한 패키지는 `X` 클릭 시 실제 프로젝트의 package.json에서 삭제됩니다.
추가하고 싶은 패키지는 검색을 통해 설치할 수 있습니다.
</div>
</details>

## 흐름에 따른 사고

> 흐름에 따른 사고는 <b> `기획의도 > 구체화 > 해결 방안 및 결과 > 개선점` </b> 수순으로 나열 합니다.

### 1. 일렉트론 포지로 선택한 이유가 있었습니다.

기획 의도 : <br/>
&nbsp;&nbsp; 일렉트론은 두 가지의 형태가 있으며, 일렉트론 데스크톱 애플리케이션을 패키징하고 배포하기 편하게 올인원으로 구성된 있는 Electron Forge로 초기 세팅을 진행합니다. 또한, 사용자의 PC 로컬 환경에 접근하는 프로젝트로 일렉트론의 내장 기능인 프로세스 간 통신(IPC)로 메인 프로세스로 랜더 하는 통신방식으로 사용자 PC 환경별 간편성을 의도 하였습니다.<br/>

구체화 : <br/>
&nbsp;&nbsp; 일렉트론 또한, 프로젝트 특성 및 개발자의 주관적인 효율적 구도를 고려하여 프로젝트 구성이 이루어집니다. <br/>
일렉트론의 초기 구조에서는 React의 효율적인 적용에 어려움이 있어 이를 고려하여 컴포넌트의 재사용성과 유지보수 측면을 고려하였고, 또한 빠른 이해를 위해 일렉트론 프로젝트 초기 생성 시의 구조 중에 main과 renderer 이름을 그대로 사용하여 main은 통신 관련, 즉 이해하기 쉽게 백앤드의 역할로 칭하고
renderer는 사용자가 보는 화면, 즉 클라이언트로 결정합니다.<br/>

```javascript
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

방안 적용 및 결과 : <br/>
&nbsp;&nbsp; renderer의 내부 구조에서 기획서에 맞게 두 가지의 다른 레이아웃으로 정의 내리며 그에 따라 라우터에서 Layout 컴포넌트를 통하여 구분합니다.
Layout 구조를 나뉘게 될 경우 장점으론 같은 애플리케이션 내부에서 여러 가지의 화면 구조의 방식을 라우터마다 각각 나눠서 보여줄 수 있어 사용자 인터페이스에 자율성을 주고 프로젝트 개발 측면 또한 확장성을 줍니다. <br/>

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

<!-- DashboardLayout || PrivateLayout 이미지 각각 그리기 -->

<br/>

개선점 : <br/>
&nbsp;&nbsp; 에러가 발생했을 경우 React의 전역에서 발생하는 에러 팝업의 경우 중앙화 처리를 하는 게 유지보수 측면에서 효율적이며, 에러가 발생하면 관련 에러를 전역으로 메시지를 전달하여 에러 팝업을 보여주고 있으나, App.jsx에서 에러 바운더리로 로직을 리팩토링으로 다듬을 수 있습니다.

<hr/>

### 2. 시간상 화면과 기능을 한 번에 작업하는 방법을 선택했습니다.

기획 의도 :<br/>
&nbsp;&nbsp; 일렉트론은 반응형으로 기반하는 데스크톱 애플리케이션입니다. 디자인 또한 반응형을 고려하였으며 디자인에 따라 퍼블리싱작업 단계에서 기능적인 부분까지 작업이 가능하다고 판단하였으며, 비교적 짧은 시간에 반응형과 기능을 각각 별도로 작업하기에는 비효율적인 부분으로 협의되어 IPC 프로세스 로직 연결을 고려하여 목업 데이터파일을 별도로 생성하여 화면 작업을 하기로 결정하였습니다.

구체화 : <br/>
&nbsp;&nbsp; 14인치, 16인치, 27인치의 화면 비율을 일렉트론 초기 화면에서 체크를 진행하였으며 최소 넓이값을 700px, 최대 넓이는 모니터 화면 크기에 따라 다양하게 확인되어 최대 넓이에 대한값은 고정하지 않고 반응형을 한번 분기하기로 정의합니다. <br/>

분기의 넓이는 1200px을 기준으로, 이는 1200px 이상의 화면 비율은 일렉트론 특성에 맞게 자율성을 두고, 단 해당 위치의 고정값을 지정하여 모니터 화면 크기에 따라 콘텐츠별 무너짐을 잡았습니다.
<br/>

방안 적용 및 결과 : <br/>
&nbsp;&nbsp; json형태의 목업 데이터를 통해서 화면의 반응형 및 Layout 구조에 따른 사용자 인터페이스를 구분하기 쉬워졌으며, 기능 구현 또한 목업 데이터를 통하여 React의 useState로 담아 저장까지의 흐름에 맞게 사용자 인터페이스와 동시에 작업이 가능하여 시간 소요를 아끼는 이점이 있었습니다.
<br/>

|                                             넓이 700                                             |                                    넓이 1200 ~ (1920이상 동일)                                    |
| :----------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: |
| ![700px 반응형](https://github.com/user-attachments/assets/4ae599da-807d-47fa-a5cb-244f63f37d2c) | ![1200px 반응형](https://github.com/user-attachments/assets/68369264-96f8-46a8-8f97-9298b3fb12e0) |

<hr/>

### 3. 클라이언트에서도 파일 경로를 보여 줄 수 있습니다.

기획 의도 : <br/>
&nbsp;&nbsp; 파일을 업로드하고, 파일의 경로를 읽어 들이는 부분은 Node.js의 `fs.readdir`메소드를 사용하여 사용자 PC 환경의 로컬 파일경로를 탐색하고 읽어 들여 화면에 보여줍니다.

구체화 : <br/>
&nbsp;&nbsp; 목업 데이터로 퍼블리싱 하는 과정에서 input 태그 타입에 파일을 선택할 수 있는 요소가 있고 퍼블리싱 단계의 기능 구현을 동시 작업 중에 `HTMLInputElement.webkitdirectory`의 속성을 확인하여 클라이언트에서 파일을 읽어 들여 화면에 표시해 주는 작업을 하였습니다.

방안 적용 및 결과 : <br/>
&nbsp;&nbsp; HTML의 `<input type="file">`은 파일을 선택하거나 폴더를 선택하는 기본적인 기능을 지원하지만, 브라우저에서 폴더를 선택할 경우 파일들을 선택할 수 있게 표시합니다. HTML5부터는 폴더 선택 기능을 제공하여 해당 기능을 클라이언트에서 구현이 가능합니다. <br/>
`webkitRelativePath` 속성으로 선택한 파일의 폴더를 올릴 수 있으며, 선택한 파일을 상대 경로로 가져오고 이 경로의 하위 경로까지 접근하여 폴더의 경로를 확인합니다. 확인한 경로는 useState에 저장하여 input 태그의 입력값을 통해 화면에 표시하여 보여주는 과정을 거칩니다.

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

 <p align="center">
    <img src="https://github.com/user-attachments/assets/50419e2e-9f3f-46d9-b0d9-ffc039e8686b" width="700" height="auto" ><br/>
    <span style="display: inline-block" align="center">클라이언트 화면에서 정상적으로 사용자 로컬환경의 파일 경로를 읽어 들이는 화면</span>
  </p>

<br/>

개선점 : <br/>
&nbsp;&nbsp; 기획서에 명시된 절대경로가 아닌 useState까지 정보를 담은 결과값이 되어, 어찌 보면 프로젝트의 기능이 구현된 것 같지만, 클라이언트에서 다루는 Input은 상대경로만 다룬다는 단점이 있습니다. <br/>
그러한 이유로 목업 데이터로 기능을 넣어 퍼블리싱 할때는 유용하지만, 절대 경로까지 읽어서 그 값을 state에 담다 지속적으로 사용하기에는 한계가 있기에 node.js 메소드로 변환하여 IPC 통신의 main 프로세스에 파일 경로를 다루는 로직이 필요합니다.

<hr/>

### 4. 상태 관리로 zustand를 적용했습니다.

기획 의도 : <br/>
&nbsp;&nbsp; 프로젝트 화면 구성에 따라 Layout이 나뉘게 되고, 이는 컴포넌트의 props가 많이 생성되고 반복 적용되는 상황이 발생하여 복잡한 흐름으로 구성됩니다. 페이지 컴포넌트마다 값을 생성하고, useState로 관리되는 상태가 많아지게 되고 이에 따라 useState의 중앙 관리가 필요하므로 상태 관리를 적용 하기로 합니다.

```javascript
// 하나의 컴포넌트에서 저장되는 데이터의 값이 4개 이상씩 다른 컴포넌트에서 중복으로 사용하는 데이터도 존재합니다.
const [searchQuery, setSearchQuery] = useState("");
const [packageItems, setPackageItems] = useState([]);
const [selectedPackageItem, setSelectedPackageItem] = useState(null);
const [isDropdownVisible, setIsDropdownVisible] = useState(false);
const [isEnterPressed, setIsEnterPressed] = useState(false);
```

구체화 :<br/>
&nbsp;&nbsp; zustand의 경우 경량화 라이브러리라는 장점이 있어 사용자 PC 환경을 고려해야 하기에 적절하며 필요에 따라 1개 이상의 store를 구성해도 되는 라이브러리이기 때문에, 화면의 단순 사용자 인터페이스(UI)의 상태 값을 분류하는 UIStore와 프로젝트 생성의 데이터를 관리하는 ProjectStore 두 가지의 store로 나눕니다.

방안 적용 및 결과 : <br/>
&nbsp;&nbsp; store의 기능별로 상태를 분리하여 컴포넌트 별로 필요한 상태만 빠르게 읽고 찾아서 적용이 가능합니다.
<br/>

개선점 : <br/>
&nbsp;&nbsp; zustand를 사용하는 과정에서 전체적으로 상태를 전부 전역 상태 관리로 리팩토링하는 작업이 진행되었습니다. 전역 상태 관리와 로컬 상태 관리는 상황에 맞게 때에 따라 적절하게 분리하는 중요성을 고려할 예정입니다.

<hr/>

### 5. 프로젝트로 생성 가능한 언어를 확장했습니다.

기획 의도 : <br/>
&nbsp;&nbsp; 필요한 파일만을 on-demand로 변환하여 불러오는 과정으로 속도가 빠른 vite 번들러가 가장 적합하다고 협의하여 React 프로젝트를 생성하는 기능으로 초기에 의도하였습니다.

구체화 : <br/>
&nbsp;&nbsp; `npm create vite@latest` 터미널 명령어로 프로젝트의 흐름을 체크하는 과정에서 React만을 한정하기에는 해당 명령어의 내부 기능에서 프레임워크가 다양하여, 프로젝트 생성 가능 언어의 폭을 넓히기로 하였습니다. <br/>

방안 적용 및 결과 : <br/>
&nbsp;&nbsp; 터미널의 command의 구성을 확인하여 vite로 터미널 명령어가 실행되는 패턴을 탐색하여 vite에 속해있는 프레임워크의 구성을 클라이언트에서 별도로 json파일로 구성하여, 프레임워크 선택하는 토글의 체크박스 리스트로 불러와, 체크된 값에 해당하는 json파일의 이름을 framework값으로 통신하여 프로젝트를 생성하게 기능 구현하였습니다.

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
    <span style="display: inline-block" align="center">json파일에서 데이터를 불러오고, true 값으로 체크박스가 표시되면 상태에 담아 프로젝트 마지막 단계인 프로젝트 생성 시에 IPC로 통신하여 터미널로 프로젝트를 생성합니다.</span>
  </p>

<br/>

<hr/>

### 6. 비활성화 토글에 사용자 경험을 개선하였습니다.

기획 의도 : <br/>
&nbsp;&nbsp; 프로젝트 생성 흐름에 따라 4개 이상의 페이지가 필요한 사항이 있습니다. 빠른 퍼블리싱 작업과 사용자 경험을 위하여 4개 이상의 페이지를 한 페이지에 담기 위해 토글 형식으로 의도 하였습니다.
또한 각각의 토글에는 사용자가 필수적으로 입력해야 하는 정보가 있으며, 토글 하나씩 요구하는 정보를 입력하면 다음 토글이 비활성화에서 활성화로 표시가 되게 작업 하였으나, 사용자 경험 및 시각적으로 이해를 돕기 위해 기존 토글 방식을 확장성 있게 변형 하기로 결정하였습니다.

구체화 : <br/>

1. 필수 입력 토글이 입력되면 다음 토글이 숨겨져 있다가 보이며 포커싱이 됩니다.
2. 필수 정보가 입력된 토글은 별도의 표시로 사용자에게 시각적으로 안내합니다.
3. 토글이 숨겨져 있기에 사용자는 몇 개의 토글을 더 작성해야 하는지 알 수 없어 전체 토글과 작성된 토글을 표시합니다.
4. 사용자의 시각적인 불편함을 최소화하기 위해, 포커싱된 토글의 내용만 펼쳐지고 다른 토글은 자동으로 닫힙니다.
5. 활성화된 토글의 경우 사용자에게 어떤 토글인지 안내하는 텍스트가 보입니다.

방안 적용 및 결과 : <br/>
&nbsp;&nbsp;
| 변경 전 | 변경 후 |
| :----------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: |
| ![변경전 토글](https://github.com/user-attachments/assets/4bfb2531-6006-422e-a61f-31210bc79dbf) | ![변경후 토글](https://github.com/user-attachments/assets/a6b611d5-c352-4c21-9e56-3c2387c92f15) |
| 토글의 입력 조건이 충족되면 비활성화된 다음 토글이 활성화됩니다. | 토글의 입력 조건이 충족되면 활성화 표시로 토글이 닫히며 다음 토글이 활성화되어 자동으로 펼쳐집니다. |

개선점 : <br/>
&nbsp;&nbsp; 현재 5개의 컴포넌트를 index.jsx 컴포넌트에 불러오며 토글의 상태는 UIStore와 ProjectStore의 상태를 주고받으며 토글의 값이 변경되어 동작합니다. 이런 로직의 복잡성으로 인하여 가독성이 떨어질 수 있기에 상수화를 진행하는 부분이 고려할 사항입니다.

<hr/>

### 7. OS 운영체제를 고려했습니다.

기획 의도 :<br/>
&nbsp;&nbsp; 파일 읽어오는 것과, 프로젝트 실행에 대해서 OS를 통일하여 불러오고 실행하는 기능으로 의도 하였습니다.

구체화 :

1. 파일을 읽어 들여서 불러오는 로직에 대해서 window OS의 경우 `C:\Users\Username\Documents\file.txt` Mac OS의 경우 `/Users/Username/Documents/file.txt`로 읽어오는 방식에 차이가 있기에, Node.js의 `os.homedir()`로 사용자의 홈 디렉터리를 통일된 방식으로 읽어옵니다.
2. 프로젝트를 실행하는 버튼을 활성화할 경우 OS를 고려하여 각각 로직을 작업합니다.

방안 적용 및 결과 :

1. 파일 경로를 통일하는 로직으로 Window와 Mac의 동작으로 구분하여 사용자 PC 환경의 홈 디렉터리에 json파일을 생성하고, 홈 디렉터리 경로를 통일되게 읽습니다.

```javascript
switch (os.platform()) {
  case "win32":
    basePath = path.join(homeDirectory, ".relaxing");
    break;
  case "darwin":
    basePath = path.join(homeDirectory, ".relaxing");
    break;
  default:
    console.error("Unsupported platform");
}
```

2. `open()` 메소드를 통해서 운영체제 모두를 지원하기에 프로젝트 실행에 문제없이 동작합니다.

### 8. 대시보드에 계층구조로 보여 주고 싶습니다.

기획 의도 : <br/>
&nbsp;&nbsp; 생성된 프로젝트의 폴더 내부의 파일 및 폴더의 계층을 재귀적으로 반복하여 마지막 파일까지 보여줍니다. 파일의 경우 확장자별로 아이콘을 아이콘을 별도로 표시하여 시각적으로 가독성 있게 의도 하였습니다.

구체화 : <br/>
&nbsp;&nbsp; HTML 태그에서 UL/LI를 퍼블리싱으로 작업하여 영역을 잡은 후, 재귀적으로 함수를 작업하여 UL/LI/UL/LI…. 의 계층구조로 접근합니다.

방안 적용 및 결과 : <br/>
&nbsp;&nbsp; 퍼블리싱 단계에서 Node.js의 파일시스템 메소드를 통하여 계층 구조로 접근하면서 읽어 들이는 데이터가 계층 형태가 아닌 평문으로 가져오는 현상이 발생하였습니다. <br/>
그러한 이유로 파일 시스템의 디렉터리 구조를 표현할 때에 일반적으로 주로 사용하는 `N-ary Tree 구조`를 적용하여 현재 폴더 위치를 root으로 지정하고, 배열을 통해 여러 자식 노드를 가질 수 있는 N-ary Tree 장점을 적용하여 해당 root에서부터 폴더를 만나면 폴더 안 내부의 자식 요소를 가져오고, 폴더가 없는 자식 요소는 마지막 파일까지 읽습니다.

|                                           퍼블리싱 파일구조                                           |                               Node.js 파일시스템 N-ary Tree 구조                                |
| :---------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------: |
| ![퍼블리싱 파일구조](https://github.com/user-attachments/assets/ec45668b-d906-43e3-bf63-7996679a1d4e) | ![변경후 토글](https://github.com/user-attachments/assets/53e2abd1-c9ee-4b22-827c-b8ab5e8e6964) |
|                                퍼블리싱 단계의 계층 형태 프로젝트 구조                                |                     파일시스템에 N-ary Tree 적용한 계층 형태 프로젝트 구조                      |

개선점 : <br/>
&nbsp;&nbsp; 코드 가독성을 위하여 확장자별 파일의 아이콘을 별도로 함수 정리를 하고 main.js의 프로세스의 로직 utils함수 분리로 유지보수 측면을 고려할 예정입니다.

<hr/>

## 프로젝트 회고

&nbsp;&nbsp; 과거, 정식 업무로 팀에서 신규 프로젝트를 진행하는 시기에, 감사하게도 프론트엔드팀에서 메인을 맡는 기회가 주어졌습니다. 신규 프로젝트는 Vue.js 2버전으로 SCSS와 ESLint로 초기 세팅을하고 프로젝트 구조 및 전달받은 디자인으로 퍼블리싱 작업하여 라우터로 연결하는 과정까지 메인으로 진행하는 업무였습니다. <br/>
이때는 입사한 지 3주 차였기에, 신입으로 큰규모의 프로젝트를 초기 구성하고 gitHub 레포지토리를 생성하여 팀원들에게 전달하는 과정 등 모든 과정을 처음 접하여 익숙하지 않은 터미널로 하는 모든 작업이 생소하고 터미널로 프로젝트 생성하는 방법이 한가지가 아니며 프로젝트 구조는 정답이 없는 프로젝트마다 구조가 다르기에, 당시에 Vue GUI를 알게 되었으나 일부 동작이 되지 않아 유지보수가 멈춘 Vue GUI라고 여겨졌습니다.<br/>

&nbsp;&nbsp; 터미널이 아직 어색하고, 프로젝트를 초기 구성하는 거에 경험이 부족할 수밖에 없는 신입 개발자에게 서포트해 주는 vue GUI보다 더 좋은 프로젝트 생성을 시각적으로 도와주는 Create Project GUI가 있었으면 실용적이고 좋을 것 같다는 아이디어에서 시작하였습니다.<br/>

&nbsp;&nbsp; 팀프로젝트로 A부터Z까지 기획,디자인,POC를 협업으로 진행한 경험을 하였으며 팀원 간의 소통이 되었다고 착각할 수 있다는 생각을 항상 염두에 두어 팀의 협업에 따라 프로젝트의 결과물이 달라진다는 생각이 팀원과 일치하여 생활 패턴, 숙식 등을 대부분 맞추어 팀플을 진행하였습니다. 이 경험이 팀프로젝트 이후에 진행하는 개인 프로젝트에도 좋은 영향을 주었습니다.<br/>
