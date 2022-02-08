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
