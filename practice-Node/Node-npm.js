// npm(Node Package Manager): 다른 사람들이 만든 소스 코드들을 모아둔 저장소
//      패키지: npm에 업로드된 노드 모듈

// package.json: 현재 프로젝트에 대한 정보와 사용 중인 패키지에 대한 정보를 담은 파일

// install -g rimraf => rimraf를 명령어로 사용 가능
//      -> json 파일에 기록되지 않음
//      npx 이용 => npx rimraf node_modules

// package-lock.json: 정확한 버전을 기록 (dependency의 dependencies)

// SemVer 버저닝 (유의적 버저닝) => Major.Minor.Patch
//      Major: 하위 호환이 되지 않는 변경 사항
//      Minor: 하위 호환이 되는 변경 사항
//      Patch: 간단한 버그 수정

// ^1.1.1 => Major 버전까지 사용
// ~1.1.1 => Minor 버전까지 사용

// @latest => 최신 버전 사용
// @next => 최신 배포판 사용
// 알파/베타/RC 버전 => 1.1.1-alpha.0 / 2.0.0-beta.1 / 2.0.0-rc.0

// npm outdated: 패키지 기능 변화 표시
// npm uninstall: 패키지 삭제
// npm search: npm 패키지 검색
// npm info: 패키지 정보 확인
// npm adduser: npm 로그인 명령어
// npm whoami: 현재 사용자 표시
// npm logout: npm 로그아웃
// npm version: package.json 버전 변경

// npm deprecate [package][version][message]
//      => 패키지를 설치할 때 경고 메세지를 표시함

// npm publish: npm package 배포
// npm unpublish --force: npm package 배포 중단 (배포 후 72시간 내에만 가능)
