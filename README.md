# sandbank-react-native-app

<img src="https://user-images.githubusercontent.com/77221488/166964252-e3260b30-6901-4e50-a411-df6759f89b2d.gif" width="300" />

## 기술스택
- react native
- styled-components
- react-navigation
- react-native-snap-carousel
- react query (전역 데이터 관리 라이브러리로 사용)

## 기능 구현
- [x]  [상단 Top Tab Navigation]은 Touch를 통해 각 Tab의 Screen으로 이동합니다.
- [x]  [공유하기] 기능은 react-native 라이브러리의 Share를 사용하여 구현합니다.
- [x]  [좋아요] 기능은 API가 따로 제공되지 않으므로 앱 실행중에만 관리될 수 있도록 구현합니다. (최초 조회 시에는 API 내 like_cnt 만큼 좋아요 숫자가 보여져야 합니다)
- [x]  [새로 올라왔어요] 의 Carousel View 는 react-native-snap-carousel 라이브러리를 통해 구현합니다.
- [x]  [새로 올라왔어요] 의 컨텐츠는 API 내 like_top = 1 인 컨텐츠만 보여져야 합니다.
- [x]  [더보기] 버튼을 눌렀을 때 모든 컨텐츠가 각 sector에 맞게 조회되어야 합니다.
- [x]  [구독하기] 버튼을 눌렀을 때 [https://sandbank.io](https://sandbank.io) 로 새 창을 띄우는 것으로 대체합니다.
- [x]  전역 데이터 관리(redux, mobx, anyting else..) 를 도입하여 구현해야 합니다. 권장 라이브러리는 mobx-react이나 다른 것을 사용하여서도 괜찮습니다. ⇒ react query 사용
