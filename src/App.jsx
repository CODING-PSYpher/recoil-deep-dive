import './App.css'
import {useRecoilValue, useRecoilState, RecoilRoot, useSetRecoilState} from 'recoil'
import {jobAtom, messagesAtom, networkAtom, notificationAtom} from "./atom.js"

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>

}
function MainApp(){
const networkCount= useRecoilValue(networkAtom)
const jobCount= useRecoilValue(jobAtom)
const notificationCount = useRecoilValue(notificationAtom)
const messageCount= useRecoilValue(messagesAtom)

  return (
    <>
      <button>Home</button>

      <button>My network ({networkCount >= 100 ? "99+": networkCount})</button>
      <button>Jobs ({jobCount})</button>
      <button>Messaging ({messageCount})</button>
      <button>Notification ({notificationCount})</button>
      <ButtonUpdater/>
    </>

  )
}

function ButtonUpdater(){
  const  setMessageCount= useSetRecoilState(messagesAtom)

  return <button onClick={() => {
      setMessageCount  (c => c+1)
      }}>Me</button>

}

export default App
