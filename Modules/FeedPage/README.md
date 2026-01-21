`.feeds-content {
  display: grid;
  grid-template-columns: minmax(5rem, 1fr) 60rem 40rem minmax(5rem, 1fr);
  grid-template-rows: repeat(2, min-content);
}`

좌 우에 패딩주고, 2개의 열에 컨텐츠를 넣겠다.
이때 화면이 축소된다면 최소 여백은 5rem이 된다.

rows는 2줄(min-content, min-content)로 동적으로 컨텐츠 높이 지정된다.

선 개념을 이해하면 됨.

column 1, 2, 3, 4
grid-column 1/2 , 3/4이거는 spacing처리하겠다.
column 2/3여기에 메인 피드를 보여줄 칸으로 사용하겠다.

.feeds-content 보면

row는 1,2,3인데
1/2에는 home
2/3에는 이제 피드(트윗 올라오는거) 로 사용하겠다. min-content니까
이때 피드 트윗은 동적으로 트윗이 증가하면 그 사이즈만큼 min-content니까 레이아웃 잡겠다.
