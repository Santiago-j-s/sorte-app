import { type IconProps } from '@/interfaces/Icons'

export default function PrizeIcon({
  width,
  height,
  colorClassName = 'black'
}: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <g
        className={`stroke-${colorClassName}`}
        strokeLinejoin='round'
        strokeWidth={2}
      >
        <path d='M3 9.5c0-.465 0-.697.038-.89A2 2 0 0 1 4.61 7.038C4.803 7 5.035 7 5.5 7h13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89s0 .697-.038.89a2 2 0 0 1-1.572 1.572c-.193.038-.425.038-.89.038h-13c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572C3 10.197 3 9.965 3 9.5Z' />
        <path
          strokeLinecap='round'
          d='M4 12v4c0 1.886 0 2.828.586 3.414C5.172 20 6.114 20 8 20h8c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4M12 7v13M11.375 6.22l-1.98-2.475a2.002 2.002 0 0 0-2.977-.163C5.158 4.842 6.047 7 7.828 7H11a.48.48 0 0 0 .375-.78ZM12.625 6.22l1.98-2.475a2.002 2.002 0 0 1 2.977-.163c1.26 1.26.371 3.418-1.41 3.418H13a.48.48 0 0 1-.375-.78Z'
        />
      </g>
    </svg>
  )
}
