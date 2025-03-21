'use client'

import { PageButton } from './PageButton'
import { DOTS } from './hooks/usePaginationRange'
import { Tooltip } from "../tooltip";

type Props = {
  currentPage: number
  onPageChange: (page: number) => void
  paginationRange: Array<number>
}

export const PaginationRangeButtons = ({
  currentPage,
  onPageChange,
  paginationRange,
}: Props) => {
  return (
    <>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li key={index}>&#8230;</li>
        }

        return (
          <li key={index}>
            <Tooltip title={`Go to page ${pageNumber}`}>
              <PageButton
                onClick={() => onPageChange(pageNumber)}
                selected={pageNumber === currentPage}
              >
                {pageNumber}
                <span className={'sr-only'}>`Go to page ${pageNumber}`</span>
              </PageButton>
            </Tooltip>
          </li>
        )
      })}
    </>
  )
}
