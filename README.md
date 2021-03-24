# Lizard Monitor
<p align="center">
    <img alt="GitHub" src="https://img.shields.io/github/license/davidszell/lizard-monitor">
    <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/davidszell/lizard-monitor">
</p>

Lightweight web dashboard to monitor system resources.

## Installation

### Step 1
```sh
## 1. clone the repo
git clone --depth 1 https://github.com/davidszell/lizard-monitor.git

## 2. go to the cloned directory
cd lizard-monitor

```
OR, if you prefer to download manually:

```sh
## 1. Download the .zip
curl -LOk https://github.com/davidszell/lizard-monitor/archive/main.zip && unzip main.zip

## 2. navigate to downloaded & unzipped dir
cd lizard-monitor-main

```

### Step 2

```sh
## install dependencies
npm install --production

## start lizard-monitor (on port 3000 by default)
node index.js

```