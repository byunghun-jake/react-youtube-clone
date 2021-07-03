# Youtube - React (with. dream-coding)



## 작업 순서



### 1. react app 생성

```bash
$ npx create-react-app youtube-react
```



### 2. Youtube API 등록

이전 Vue 실습 때, 신청했던 youtube api를 그대로 사용



#### Postman

> API가 정상적으로 동작하는지 확인

base_url: `https://www.googleapis.com/youtube/v3/search`

query

- 공통
  - part: `snippet`
  - type: `video`
  - key: `비밀이야!`
  - maxResults: `20`
- 검색
  - q: `bts`
- 인기 영상
  - chart: `mostPopular`



### 3. 컴포넌트 설계

```
- home
	- header
	- Videos (인기 비디오 & 검색 비디오)
		- videoItem
	- searchedVideos
	- videoDetail
		- videoPlayer
		- relatedVideos
		
```



### 4. 작업!

- [ ] TheHeader
- [ ] Videos

#### 컴포넌트의 생명주기 중 어디에서 AJAX 호출을 할 수 있나요?

AJAX 호출을 통한 데이터는 생명주기 메서드 중 [`componentDidMount`](https://ko.reactjs.org/docs/react-component.html#mounting) 안에 추가되어야 합니다. 이는 데이터를 받아 올 때 `setState`를 통하여 컴포넌트를 업데이트하기 위함입니다.

[참고링크](https://ko.reactjs.org/docs/faq-ajax.html#where-in-the-component-lifecycle-should-i-make-an-ajax-call)



#### dangerouslySetInnerHTML

lodash의 unescape 메서드를 사용했을 때와 같은 결과가 나올 수 있도록 했음







































