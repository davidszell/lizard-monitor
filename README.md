# Lizard Monitor

[![Version](https://img.shields.io/badge/version-1.1-green)](https://github.com/davidszell/lizard-monitor/releases/latest)
[![License](https://img.shields.io/github/license/davidszell/lizard-monitor)](https://github.com/davidszell/lizard-monitor/blob/main/LICENSE)
[![Codacy Badge](https://img.shields.io/codacy/grade/bf2d9330fa0d47b69f24eac7160163d0)](https://www.codacy.com/gh/davidszell/lizard-monitor/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=davidszell/lizard-monitor&amp;utm_campaign=Badge_Grade)
[![Build Status](https://img.shields.io/travis/com/davidszell/lizard-monitor)](https://travis-ci.com/github/davidszell/lizard-monitor)

Lightweight web dashboard to monitor system resources.

## Installation

### Step 1

You need Node.js installed on your machine. You can download it [here](https://nodejs.org/en/download/).

### Step 2
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

### Step 3

```sh
## install dependencies
npm install

## build the application
npm run build:prod

```

## Running the application

```sh
## start the application (on default port 3000)
npm start

```
