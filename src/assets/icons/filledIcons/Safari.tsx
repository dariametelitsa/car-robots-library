import { Ref, SVGProps, forwardRef, memo } from 'react'
const Safari = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'm12.71 11.96v.016c0 .225-.084.431-.222.588l.001-.001c-.13.156-.325.255-.542.255-.005 0-.01 0-.015 0h.001c-.005 0-.01 0-.016 0-.225 0-.431-.084-.588-.222l.001.001c-.156-.13-.255-.325-.255-.542 0-.005 0-.01 0-.015v.001c0-.004 0-.009 0-.014 0-.227.087-.434.229-.589l-.001.001c.134-.156.331-.254.551-.254h.009.01c.223 0 .427.084.581.222l-.001-.001c.157.13.256.325.256.544v.013-.001zm.2.777 4.69-7.782q-.121.107-.904.837t-1.68 1.56-1.828 1.701-1.567 1.48c-.242.216-.463.441-.668.68l-.008.009-4.674 7.768q.094-.094.898-.83t1.687-1.56q.88-.824 1.822-1.701t1.563-1.486q.63-.613.67-.676zm8.666-.737v.061c0 1.817-.519 3.513-1.416 4.947l.023-.039-.228-.147q-.187-.121-.355-.221c-.063-.046-.137-.081-.217-.1l-.004-.001c-.007-.001-.015-.002-.022-.002-.085 0-.154.069-.154.154 0 .008.001.016.002.023v-.001q0 .134.79.59c-.671 1.007-1.492 1.854-2.442 2.531l-.029.02c-.921.664-2.002 1.175-3.17 1.466l-.065.014-.214-.895q-.014-.134-.201-.134c-.048.001-.089.031-.107.073v.001c-.018.028-.029.061-.029.098 0 .01.001.021.003.031v-.001l.214.91c-.583.126-1.252.198-1.938.198-.006 0-.013 0-.019 0h.001c-.008 0-.017 0-.026 0-1.835 0-3.547-.524-4.996-1.43l.04.023q.014-.026.174-.274t.288-.449c.056-.072.099-.157.126-.249l.001-.005c.001-.007.002-.015.002-.022 0-.085-.069-.154-.154-.154-.008 0-.016.001-.023.002h.001q-.08 0-.228.194c-.1.133-.2.284-.29.441l-.011.021q-.154.268-.181.308c-1.016-.681-1.87-1.515-2.55-2.481l-.02-.03c-.666-.932-1.176-2.028-1.461-3.21l-.013-.064.922-.202c.079-.023.135-.094.135-.179 0-.008 0-.016-.001-.023v.001c-.001-.048-.031-.089-.073-.107h-.001c-.03-.018-.067-.029-.106-.029-.012 0-.024.001-.036.003h.001l-.91.201c-.116-.559-.183-1.202-.185-1.86v-.002c0-.019 0-.041 0-.063 0-1.861.544-3.594 1.482-5.05l-.022.037q.026.014.248.16t.4.254c.067.048.145.085.23.106l.005.001q.174 0 .174-.16 0-.08-.167-.207c-.124-.093-.266-.188-.413-.276l-.022-.012-.268-.16c.691-1 1.532-1.841 2.5-2.511l.032-.021c.932-.651 2.026-1.147 3.205-1.42l.063-.012.201.898q.026.134.201.134c.048-.001.089-.031.107-.073v-.001c.018-.03.029-.067.029-.106 0-.012-.001-.024-.003-.036v.001l-.201-.88c.537-.108 1.157-.173 1.791-.178h.005.037c1.869 0 3.611.544 5.076 1.483l-.038-.023c-.206.251-.381.538-.514.847l-.009.023q0 .174.16.174.147 0 .64-.857c1.95 1.336 3.366 3.328 3.938 5.652l.014.066-.75.16q-.134.026-.134.214c.001.048.031.089.073.107h.001c.028.018.061.029.098.029.01 0 .021-.001.031-.003h-.001l.763-.174c.118.563.187 1.21.19 1.873v.003zm1.138 0c0-.01 0-.022 0-.035 0-1.493-.313-2.913-.877-4.197l.026.067c-1.093-2.588-3.111-4.606-5.63-5.673l-.069-.026c-1.229-.538-2.66-.85-4.165-.85s-2.937.313-4.234.877l.069-.027c-2.588 1.093-4.605 3.111-5.672 5.63l-.026.069c-.538 1.229-.85 2.66-.85 4.165s.313 2.937.877 4.234l-.027-.069c1.093 2.588 3.111 4.605 5.63 5.672l.069.026c1.229.538 2.66.85 4.165.85s2.937-.313 4.234-.877l-.069.027c2.588-1.093 4.605-3.111 5.672-5.629l.026-.069c.538-1.218.85-2.637.85-4.13 0-.012 0-.025 0-.037v.002zm1.286 0v.033c0 1.672-.35 3.263-.981 4.703l.029-.075c-1.222 2.903-3.485 5.166-6.311 6.359l-.077.029c-1.375.601-2.977.951-4.661.951s-3.286-.35-4.738-.981l.077.03c-2.903-1.222-5.166-3.485-6.359-6.311l-.029-.077c-.601-1.375-.951-2.977-.951-4.661s.35-3.286.981-4.738l-.03.077c1.222-2.903 3.485-5.166 6.311-6.359l.077-.029c1.375-.601 2.977-.951 4.661-.951s3.286.35 4.738.981l-.077-.03c2.903 1.222 5.166 3.485 6.359 6.311l.029.077c.601 1.364.951 2.955.951 4.627v.035-.002z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(Safari)
const Memo = memo(ForwardRef)

export default Memo
