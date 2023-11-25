import {useState} from 'react'

type CounterProps = {
  initialValue: number
}

const Counter = (props: CounterProps) => {
  const { initialValue } = props
  // カウントを保持する一つの状態をuseState()で宣言 引数に初期値を指定
  // countが現在の状態、setCountが状態を更新する関数、初期値としてinitialValueをセット
  const [count, setCount] = useState(initialValue)
  // openという名前のstate変数を宣言、初期値 true をセット
  const [open, setOpen] = useState(true)
  // toggleの関数を宣言
  // const toggle = () => setOpen(!open)

  return (
    <>
      <button onClick={ () => setOpen(!open) }>{open ? 'close' : 'open'}</button>
      <div className={ open ? "isOpen" : "isClose" }>
        <p>Count: {count}</p>
        {/* setCountを呼ぶことで状態を更新 */}
        <button onClick={ () => setCount(count - 1) }>-</button>
        <button onClick={ () => setCount((prevCount) => prevCount + 1) }>+</button>
      </div>
    </>
  )
}

export default Counter