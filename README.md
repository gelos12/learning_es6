# learning_es6
__[Chapter 01]__ 첫 애플리케이션
--------------------------------------------------------------------
 [chapter01](https://github.com/gelos12/learning_es6/tree/master/cahpter01) 가볍게 자바스크립트 입문 내용을 다룬다.
 * 제이쿼리를 통해 html DOM이 구성되고 렌더링이 모두 완료 되었을 때 자바스크립트가 작동하도록 한다.(ready활용)
 * 엄격모드 사용 방법 ('use strict') 
 * var 변수 선언 방법 (var [변수명])
 * 내부 함수 사용 ( function(args...){})
 * 스크립트의 종속성(Dependency)
 * 브라우저는 에버그린이다. ( 최신버전업데이트 강요)
 
 [chapter02]() 자바스크립트 개발 도구에 대해서 다룬다.
 * __Git__
 
   [Github](https://git-scm.com)에서 운영체제에 맞는 설치 파일과 방법을 찾을 수 있다고 합니다.
 * __Terminal__
 
   MacOS, Linux 배포판, Widnows 운영체제 별로 다른 터미널 있지만 윈도우 경우 깃에서 제공하는 bash shell 사용 권장 
 * __프로젝트 별 디렉토리__
 
   프로젝트마다 디렉터리를 따로 만드는게 좋다. 이 디렉토리를 "프로젝트의 루트 디렉토리"라고 말할 수 있으며 문맥 상 루트라고 말할 수 있다.
 * __git version controll__ 
   
   git init, git status, git remote add, git add, 등의 명령어 활용해서 깃 사용!
   
 * __node.js__
 
   - 설치된 패키지 관리, '패키지'는 완전한 애플리케이션 혹은 라이브러리 등 다양한 종류를 칭함
   - 전역(Global), 로컬(Local) 설치할 수 있다.
   - 전역(Global) : 개발 과정에서 사용하는 터미널 실행 도구 (CLI)
   - 로컬(Local) : 각 프로젝트에 종속적인 패키지들
 
 * __node.js install__
 
   [node.js](https://nodejs.org)홈페이지에서 인스톨, 작성자는 파이썬을 통해 여러 작업을 하다 보니 가상환경에 nodeenv 라이브러리를 설치하여 node 가상환경 구축, 사용
  
 * __npm package install__
 
   - ```npm install underscore```
   - 