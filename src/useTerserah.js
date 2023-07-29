import {useState, useEffect} from 'react'

export default function useTerserah() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log('Jalan terus')

  useEffect(() => {
    console.log('Ini sekali aja')
  }, [])

  useEffect(() => {
    console.log('Text nya berubah bro')
  }, [text])

  useEffect(() => {
    return () => {
      console.log('Jalan waktu dihapus')
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Interval')
    }, 1000)

    return () => {
      clearInterval(interval);
    }
  }, [])

  return {
    count,
    setCount,
    text,
    setText,
  }
}