# 우분투 안전모드에서 ssh 사용하기

Ubuntu에서 안전모드로 부팅후 네트워크 설정을 켜도 ssh 접속이 불가능할 때가 있다.  
아래 명령어를 순서대로 입력하면 정상적으로 접속이 된다.

```
1. sudo rm -rf /var/run/nologin
2. sudo systemctl start sshd
```
