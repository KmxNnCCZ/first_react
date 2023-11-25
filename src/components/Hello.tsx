
// Helloはクリックするとアラートを出すテキストを返す
const Hello = () => {
  const onclick = () => {
    // アラートを出す 
    alert("Hello")
  } 
  const text = "Hello React"

  // テキストを子にもつdiv要素を返す
  return (
    // divのonclickにクリック時のコールバック関数を渡す
    <div onClick={onclick}>
      {text}
    </div>
  )
  
}

export default Hello