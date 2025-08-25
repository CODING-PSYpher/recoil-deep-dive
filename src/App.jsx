import './App.css'
import {useRecoilValue, RecoilRoot, useSetRecoilState} from 'recoil'
import {jobAtom, messagesAtom, networkAtom, notificationAtom, totalNtificationSelector} from "./atom.js"

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
const totalNotificationCount = useRecoilValue(totalNtificationSelector)

  return (
    <>
      <button>Home</button>

      <button>My network ({networkCount >= 100 ? "99+": networkCount})</button>
      <button>Jobs ({jobCount})</button>
      <button>Messaging ({messageCount})</button>
      <button>Notification ({notificationCount})</button>
      <button>Me ({totalNotificationCount})</button>
      </>

  )
}

function ButtonUpdater(){
  const  setMessageCount= useSetRecoilState(messagesAtom)

  return 

}

export default App
