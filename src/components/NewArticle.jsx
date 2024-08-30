

export const NewArticle = ({title,text}) => {
  return (
    <article className="h-[140px] border-b-2 border-GrayisBlue py-7 last:border-none overflow-hidden">
        <h2 className="cursor-pointer hover:text-SoftOrange text-[20px] mb-3 font-bold lg:text-[15px] ">{title}</h2>
        <p className="text-[15px] ">{text}</p>
    </article>
  )
}

