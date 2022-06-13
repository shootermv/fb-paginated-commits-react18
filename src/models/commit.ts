export interface Commit {
    idx: number
    link: string,
    title: string
    who: {login: string, avatar_url: string},
    date: string
}