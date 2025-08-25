import { atom, selector }  from 'recoil'

export const networkAtom = atom({
    key: "network",
    default: 102
 });

 export const jobAtom = atom({
    key: "job",
    default: 0
 });


 export const notificationAtom = atom({
    key: "notification",
    default: 12
 });


 export const messagesAtom = atom({
    key: "messages",
    default: 0
 });


 export const totalNtificationSelector= selector({
    key: "totalNtificationSelector",
    get: ({get}) => {
     const networkAtomCount = get(networkAtom)
     const jobAtomCount = get(jobAtom)
     const notificationAtomCount = get(notificationAtom)
     const messagesAtomCount = get(messagesAtom)
     return messagesAtomCount+ notificationAtomCount+ jobAtomCount+ networkAtomCount

    }
 })
