type BulletListProps = {
  items: string[]
  idPrefix: string
}

export default function BulletList({ items, idPrefix }: BulletListProps) {
  return (
    // list-style:none 이 걸린 목록은 Safari VoiceOver 가 목록으로 읽지 않아
    // role="list" 로 시맨틱을 되살립니다.
    <ul role="list" className="list-none space-y-1.5">
      {items.map((item, idx) => (
        <li
          key={`${idPrefix}-${idx}`}
          className="keep-all text-muted flex gap-2 text-[0.9rem] leading-6"
        >
          <span aria-hidden className="bg-primary mt-2.5 h-1 w-1 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
