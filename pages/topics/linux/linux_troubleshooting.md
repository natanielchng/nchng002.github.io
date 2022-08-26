# 🐧 Linux Troubleshooting

*I dump my issues and solutions here*


## wsl command doesn't work and Ubuntu process in WT exits with 3221226505
Run in cmd as admin:

```
sc config LxssManager start=auto
```
[Source](https://github.com/microsoft/WSL/issues/7611)