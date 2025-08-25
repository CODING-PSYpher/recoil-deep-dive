import { atom }  from 'recoil'

export const networkAtom = atom({
    key: "network",
    default: 1000
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

