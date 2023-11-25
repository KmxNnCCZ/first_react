// Containerは赤背景のボックスの中にタイトルと子要素を表示します
const Container = (props: {title: string; children: React.ReactElement }) => {
  const { title, children } = props
  return(
    <div style={{ background: "red" }}>
      <span>{ title }</span>
      {/* propsのchildrenを埋め込むと、このコンポーネントの開始タグと閉じタグで囲んだ要素を表示する */}
      <div>{ children }</div>
    </div>
  )
}


const Parent = () => {
  return (
    // Containerを使用する際に、他の要素を囲って使用する
    <Container title="Hello">
      <p>ここの部分が背景色で囲まれます</p>
    </Container>
    // <Container></Container>で囲んだ要素がpropsのchildrenとして渡される
  )
}


export default Parent