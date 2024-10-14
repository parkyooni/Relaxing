# Relaxing

<p align="center">
  <img src="https://github.com/user-attachments/assets/0f802adf-bd94-4d1b-9dd1-31fc591092eb">
</p>

<p align="center">
Relaxing은 프로젝트를 빠르게 구성하고, 빌드, 디플로이 할 수 있게 도와주는 데스크톱 애플리케이션 입니다. <br/>
터미널로 프로젝트를 초기세팅
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Electron-222222?style=for-the-badge">
  <img src="https://img.shields.io/badge/react-222222?style=for-the-badge">
  <img src="https://img.shields.io/badge/zustand-222222?style=for-the-badge">
  <img src="https://img.shields.io/badge/styled_components-222222?style=for-the-badge">
  <img src="https://img.shields.io/badge/vite-222222?style=for-the-badge">
</p>

## List

<!-- toc -->

- [Relaxing 흐름](#relaxing-%ED%9D%90%EB%A6%84)
  * [1. 프로젝트 생성](#1-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1)
  * [2. 나만의 프로젝트 생성](#2-%EB%82%98%EB%A7%8C%EC%9D%98-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1)
  * [3. 내 파일 경로 기억](#3-%EB%82%B4-%ED%8C%8C%EC%9D%BC-%EA%B2%BD%EB%A1%9C-%EA%B8%B0%EC%96%B5)
  * [4. 프로젝트 구조 & 실행](#4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B5%AC%EC%A1%B0--%EC%8B%A4%ED%96%89)
  * [5. 패키지 매니저로 설치](#5-%ED%8C%A8%ED%82%A4%EC%A7%80-%EB%A7%A4%EB%8B%88%EC%A0%80%EB%A1%9C-%EC%84%A4%EC%B9%98)
- [흐름에 따른 사고](#%ED%9D%90%EB%A6%84%EC%97%90-%EB%94%B0%EB%A5%B8-%EC%82%AC%EA%B3%A0)
  * [1. 일렉트론으로 해야하는 이유가 있었습니다.](#1-%EC%9D%BC%EB%A0%89%ED%8A%B8%EB%A1%A0%EC%9C%BC%EB%A1%9C-%ED%95%B4%EC%95%BC%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0%EA%B0%80-%EC%9E%88%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4)
  * [2. 시간상 화면과 기능을 한번에 하는 방법을 선택 했습니다.](#2-%EC%8B%9C%EA%B0%84%EC%83%81-%ED%99%94%EB%A9%B4%EA%B3%BC-%EA%B8%B0%EB%8A%A5%EC%9D%84-%ED%95%9C%EB%B2%88%EC%97%90-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95%EC%9D%84-%EC%84%A0%ED%83%9D-%ED%96%88%EC%8A%B5%EB%8B%88%EB%8B%A4)
  * [3. 상태관리로 zustand를 적용했습니다.](#3-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC%EB%A1%9C-zustand%EB%A5%BC-%EC%A0%81%EC%9A%A9%ED%96%88%EC%8A%B5%EB%8B%88%EB%8B%A4)
  * [4. 프로젝트 생성가능 언어를 확장했습니다.](#4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1%EA%B0%80%EB%8A%A5-%EC%96%B8%EC%96%B4%EB%A5%BC-%ED%99%95%EC%9E%A5%ED%96%88%EC%8A%B5%EB%8B%88%EB%8B%A4)
  * [5. 비활성화 토글에서 사용자 경험을 추가하였습니다.](#5-%EB%B9%84%ED%99%9C%EC%84%B1%ED%99%94-%ED%86%A0%EA%B8%80%EC%97%90%EC%84%9C-%EC%82%AC%EC%9A%A9%EC%9E%90-%EA%B2%BD%ED%97%98%EC%9D%84-%EC%B6%94%EA%B0%80%ED%95%98%EC%98%80%EC%8A%B5%EB%8B%88%EB%8B%A4)
  * [6. OS 운영체제를 고려했습니다.](#6-os-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C%EB%A5%BC-%EA%B3%A0%EB%A0%A4%ED%96%88%EC%8A%B5%EB%8B%88%EB%8B%A4)
  * [7. 대시보드에 계층구조로 보여 주고 싶습니다.](#7-%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C%EC%97%90-%EA%B3%84%EC%B8%B5%EA%B5%AC%EC%A1%B0%EB%A1%9C-%EB%B3%B4%EC%97%AC-%EC%A3%BC%EA%B3%A0-%EC%8B%B6%EC%8A%B5%EB%8B%88%EB%8B%A4)
- [프로젝트 회고](#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0)

<!-- tocstop -->

## Relaxing 흐름

### 1. 프로젝트 생성

<details>
<summary>미리보기</summary>
<div markdown="1">

<img src="" alt="프로젝트 생성" style="width: 100%" /><br/>
작성을 완료하면 다음 작성 가능한 토글이 보여집니다.
토글의 내용은 터미널에서 프로젝트를 생성하는 명령어의 흐름을 기준으로 생성됩니다.

</div>
</details>

### 2. 나만의 프로젝트 생성

<details>
<summary>미리보기</summary>

|     프로젝트 1회성 생성      |                  커스텀 프로젝트 생성                  |
| :--------------------------: | :----------------------------------------------------: |
|         ![1회생성]()         |                    ![커스텀생성]()                     |
| 1회성 프로젝트를 생성합니다. | 프로젝트 생성시 커스텀이름으로 생성 정보를 저장합니다. |

<div markdown="1">

</div>
</details>

### 3. 내 파일 경로 기억

<details>
<summary>미리보기</summary>
<div markdown="1">
<img src="" alt="프로젝트 경로" style="width: 100%" /><br/>
<!-- 프로젝트 리스트에서 파일 경로가 있는경우 대시보드, 없는경우 팝업  -->

</div>
</details>

### 4. 프로젝트 구조 & 실행

<details>
<summary>미리보기</summary>
<div markdown="1">
<img src="" alt="프로젝트 실행" style="width: 100%" /><br/>
생성한 프로젝트의 구조를 확인 할 수 있습니다.
프로젝트를 토글 버튼을 통해 실행 시킬 수 있습니다.

</div>
</details>

### 5. 패키지 매니저로 설치

<details>
<summary>미리보기</summary>
<div markdown="1">
<img src="" alt="패키지 매니저" style="width: 100%" /><br/>
실제 런타임 환경에서 실행되는 dependencies와 빌드 작업에 필요한 devDependencies의 설치된 패키지를 확인가능 합니다.
설치한 패키지는 `X`클릭시 실제 프로젝트의 package.json에서 삭제됩니다.
추가하고 싶은 캐지는 검색을 통해 설치 가능합니다.

</div>
</details>

## 흐름에 따른 사고

> 흐름에 따른 사고는 <b> `기획의도 > 구체화 > 해결 방안 및 결과 > 개선점` </b> 수순으로 나열 합니다.

### 1. 일렉트론으로 해야하는 이유가 있었습니다.

기획 의도 : <br/>
&nbsp;&nbsp; <br/>

구체화 : <br/>
&nbsp;&nbsp; <br/>

방안 적용 및 결과 : <br/>
&nbsp;&nbsp;<br/>
&nbsp;&nbsp;
<br/>

개선점 : <br/>
&nbsp;&nbsp;

<hr/>

### 2. 시간상 화면과 기능을 한번에 하는 방법을 선택 했습니다.

기획 의도 :<br/>
&nbsp;&nbsp;

구체화 : <br/>
&nbsp;&nbsp;
<br/>

방안 적용 및 결과 : <br/>
&nbsp;&nbsp;
<br/>

<hr/>

### 3. 상태관리로 zustand를 적용했습니다.

기획 의도 : <br/>
&nbsp;&nbsp;

구체화 :<br/>
&nbsp;&nbsp;

방안 적용 및 결과 : <br/>
&nbsp;&nbsp;
<br/>

개선점 : <br/>
&nbsp;&nbsp;

<hr/>

### 4. 프로젝트 생성가능 언어를 확장했습니다.

구체화 : <br/>
&nbsp;&nbsp; <br/>

방안 적용 및 결과 : <br/>
<br/>

<hr/>

### 5. 비활성화 토글에서 사용자 경험을 추가하였습니다.

기획 의도 :<br/>
&nbsp;&nbsp; 니다.

구체화 : <br/>
&nbsp;&nbsp;

방안 적용 및 결과 : <br/>
&nbsp;&nbsp;

개선점 : <br/>
&nbsp;&nbsp;

<hr/>

### 6. OS 운영체제를 고려했습니다.

기획 의도 :<br/>
&nbsp;&nbsp;

구체화 : <br/>
&nbsp;&nbsp;

방안 적용 및 결과 : <br/>
&nbsp;&nbsp;

개선점 : <br/>
&nbsp;&nbsp;

### 7. 대시보드에 계층구조로 보여 주고 싶습니다.

기획 의도 :<br/>
&nbsp;&nbsp;

구체화 : <br/>
&nbsp;&nbsp;

방안 적용 및 결과 : <br/>
&nbsp;&nbsp;

개선점 : <br/>
&nbsp;&nbsp;

<hr/>

## 프로젝트 회고

&nbsp;&nbsp; 과거, 정식 업무로 팀에서 신규 프로젝트를 진행하는 시기에, 감사하게도 프론트앤드팀에서 메인을 맡는 기회가 주어졌습니다. vue.js 2버전으로 SCSS와 ESLint로 초기 세팅을하고 프로젝트 구조 및 전달받은 디자인으로 퍼블리싱 작업으로 라우터로 연결 동작하는 과정까지 메인으로 진행 하는 업무였습니다. <br/>
이때는 입사한지 3주차였기에, 신입으로 큰규모의 프로젝트를 초기구성하고 gitHub 생성하여 팀원들에게 전달하는 과정 등 모든 과정이 처음이여서 익숙하지않은 터미널을 통해 하는 모든게 생소하고 터미널로 프로젝트 생성하는 방법이 한가지가 아니고 프로젝트 구조는 정답이 없는 프로젝트 마다 구조가 다르기에, 당시에 Vue GUI를 알게되었으나 일부 동작이 되지않아 유지보수가 멈춘 vue GUI라고 여겨졌습니다.<br/>

&nbsp;&nbsp; 터미널이 아직 어색하고, 프로젝트를 초기 구성하는거에 경험이 부족할 수 밖에 없는 신입 개발자에게 서포트 해주는 vue GUI보다 더좋은 프로젝트 생성을 시각적으로 도와주는 Create Project GUI가 있었으면 실용적이고 좋을것 같다는 아이디어에서 시작하였습니다.<br/>

&nbsp;&nbsp; 팀프로젝트로 A부터Z까지 기획,디자인,POC를 협업으로 진행한 경험을 하였으며 팀원간의 소통이 되었다고 착각 할 수 있다는 생각을 항상 염두하여 팀의 협업에 따라 프로젝트의 결과물이 달라진다는 생각이 팀원과 일치하여 생활 패턴, 숙식등을 대부분 맞추어 팀플을 진행였습니다. 이 경험이 팀프로젝트 이후에 진행하는 개인 프로젝트에도 좋은 영향을 주었습니다.<br/>
