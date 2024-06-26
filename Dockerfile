# 現状必要最低限のNode環境で良いと判断したためslimを選定。
FROM node:20.11.1-bullseye-slim


RUN apt-get update && \
    # dockerコンテナ内でもGitを使用できるようにインストール。
    apt-get install -y git && \
    # aptのリストを初期状態に戻し、最終的なDockerイメージサイズを削減する。
    rm -rf /var/lib/apt/lists/* && \
    npm install -g @angular/cli

WORKDIR /app