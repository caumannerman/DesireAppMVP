# DesireAppMVP

## 구동영상 유튜브 링크 : https://youtu.be/cEYUPrqeQO4

## Development with Android Emulator

### Open metro

```sh
$ npx react-native start
```

### Open app

- Open _Android emulator_ and run:

```sh
$ npx react-native run-android
```

### Local 개발 환경

- localhost:8000을 안드로이드에서 접근할 수 있도록 ADB에서 백엔드 포트를 매핑한다.

```
$ adb devices  # device 이름 확인
$ adb -s <device_name> reverse tcp:backend_port tcp:backend_port
```

- 예시

```sh
$ adb -s emulator-5554 reverse tcp:8000 tcp:8000
```

## 디자인 시안 ( Figma )

<img width="835" alt="스크린샷 2022-02-09 오전 1 26 18" src="https://user-images.githubusercontent.com/75043852/153031167-7178f03e-52ab-4055-a7c7-c02c62966657.png">
<img width="995" alt="스크린샷 2022-02-09 오전 1 26 38" src="https://user-images.githubusercontent.com/75043852/153031204-66b407af-0d01-4693-87a9-0d7ed5e89aff.png">
<img width="871" alt="스크린샷 2022-02-09 오전 1 27 17" src="https://user-images.githubusercontent.com/75043852/153031213-6dcd418e-0180-4c29-b8f1-584fb22d9656.png">
<img width="940" alt="스크린샷 2022-02-09 오전 1 27 43" src="https://user-images.githubusercontent.com/75043852/153031220-a6ece607-d9a7-4258-ad5d-c0d95e9e215d.png">
