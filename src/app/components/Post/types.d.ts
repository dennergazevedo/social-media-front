interface IPostFC{
  profile: IProfile
  post: IPost
}

interface IPost{
  text: string
  createdAt: Date
  likes: number
  comments: IComments[]
}

interface IComments{
  profile: IProfile
  createdAt: Date
  text: string
  likes: number
}