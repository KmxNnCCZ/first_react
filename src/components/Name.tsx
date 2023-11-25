import React from 'react'

// 名前を入力するためのテキストボックスを返す
const Name = () => {
  // input要素のonchangeイベントに対するコールバック関数を定義
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 入力されたテキストをコンソールに表示
    console.log(e.target.value)
  }

  return (
    // styleオブジェクトのキーはキャメルケースにする
    <div style={{padding: "16px", backgroundColor: "grey"}}>
      {/* forの代わりにhtmlforを使う */}
      <label htmlFor="name">名前</label>
      {/* class,onchangeの代わりにclassName,onChangeを使う */}
      <input id="name" className="input-name" type="text" onChange={onChange} />
    </div>
  )

}


export default Name