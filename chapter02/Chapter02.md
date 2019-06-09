# chapter02
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
 
   - ```npm init``` 의존성 관리를 위한 파일 생성
   - ```npm install --save underscore``` --save 옵션을 통해 의존성 등록
   - ```npm install -g gulp``` cli 도구-g 옵션을 통해 전역 설치
   - 프로젝트마다 로컬 걸프가 필요 ```npm install --save-dev gulp```
   - ```gulpfile.js``` 생성 작업(task) 코드 작성
 
 * __Project structure__
 
   - 걸프와 바벨을 써서 ES6 코드를 ES5 코드로 바꾸기 전에 코드를 어디에 저장할지 생각
   - 표준은 없지만 소스 코드를 src, js 디렉토리에 저장 
   - 우리는 es6 디렉터리 생성, 저장
   - 루트 es6 디렉터리 서버(노드), public/es6 디렉터리 (브라우저)
   - ES5 코드는 dist 디렉터리를 많이 사용
   
  * __Trans Compile__
  
    - ES5, ES6, ES7 등 서로간 변환 하는 작업 수행
    - 바벨(babel), 트레이서(traceur)이 대표적인 트랜스컴파일러
    - 본 프로젝트는 바벨(babel) 사용
    - 바벨(babel) 버전6 부터는 ES6->ES5 변환을 위해서는 변환 프리셋을 설치하고 바벨이 해당 프리셋을 사용하게끔 설정 해야함
    - 프리셋 종류 다양(React, es2015, ...)
    - 본 프로젝트는 ES5 이므로 ES5 프리셋 설치```npm install --save-dev babel-preset-es2015```
    - babel 최신버전으로 변경되면서 ```npm install --save-dev @babel/preset-env``` 설치
    - 프리셋 설정을 위해 프로젝트 루트에 .babelrc 파일 생성 및 코드작성, 프리셋 인식
      ```babel
      {'presets':[@babel/preset-env]}
      ```
  * __Gulp-babel__
  
    - 걸프가 실제 유용한 일을 하는 중 하나는 바벨을 통해 ES5코드를 ES6로 트랜스 컴파일 하는 작업(task)
    - 걸프-바벨 로컬에 설치 ```npm install --save-dev gulp-babel```
    - gulpfile.js에 트랜스 컴파일을 위한 코드를 추가한다.
    - gulp는 파이프라인 개념으로 작업을 처리 
    - 작업을 진행할 디렉터리 정하고, 바벨에 파이프를 연결
    - 바벨은 트랜스 컴파일 진행 후 결과물을 dist, public/dist 저장 하도록 작성
    - es6/test.js 생성 및 ES6 코드 작성
    - gulp 명령어 실행, ES5-> ES6 트랜스 컴파일 
    - .gitignore에 dist 디렉터리 제외
    - 최신 버전으로 변경되면서 ```@babel/core``` 설치
       
  * __eslint 사용__
    * 패키지 인스톨
    ```npm
    npm install -g eslint // eslint 설치
    npm install --save-dev eslint-config-airbnb //airbnb 규칙 설치
    eslint --init // eslint 파일 생성
    이후 설문조사를 통해 자신에게 맞는 파일 생성 *단 규칙은 airbnb 
    ```
    * gulp add
    ```npm install --save-dev gulp-eslint``` 
    ```javascript
    const eslint = require('babel-eslint');
    gulp('default' function(done){
        gulp.src(['es6/**/*.js', 'public/...'])
                .pipe(eslint())
                .pipe(eslint.format());
        중략 ... 
    })
    ```
    규칙/스타일에 어긋나는 경우 여지없이 에러 발생한다.
