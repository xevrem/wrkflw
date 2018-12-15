#!/usr/bin/env sh
# pacman -S --noconfirm reflector
# reflector --threads 0 -c "United States" --sort rate --save /etc/pacman.d/mirrorlist
# pacman -Syy
# pacman -S --noconfirm yarn git htop
apk add yarn git htop bash
yarn global add parcel-bundler gulp-cli
