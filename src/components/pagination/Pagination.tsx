import { ArrowIosForward } from '../../assets/icons/filledIcons'
import { ArrowIosBackOutline } from '../../assets/icons/outlineIcons'

import { CountToShow } from './CountToShow'
import { PageButton } from './PageButton'
import { PaginationRangeButtons } from './PaginationRangeButtons'
import { usePaginationRange } from './hooks/usePaginationRange'
import { cn } from "../../utils/cn.ts";

type Props = {
  currentPage: number
  onPageChange: (page: number) => void
  onPageSize: (value: number) => void
  pageSize: number
  siblingCount?: number
  totalItemsCount: number
}

export const Pagination = ({
  currentPage,
  onPageChange,
  onPageSize,
  pageSize,
  siblingCount = 1,
  totalItemsCount,
}: Props) => {
  const paginationRange = usePaginationRange({
    currentPage,
    pageSize,
    siblingCount,
    totalItemsCount,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const onPageSizeValue = (value: string) => {
    onPageSize(+value)
    onPageChange(1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]
  const isBackArrowDisabled = currentPage === 1
  const isForwardArrowDisabled = currentPage === lastPage

  return (
    <div className={'flex gap-8'}>
      <ul className={'flex gap-x-3 align-middle'}>
        <li className={'flex align-middle'}>
          <PageButton
            disabled={isBackArrowDisabled}
            onClick={onPrevious}
          >
            <ArrowIosBackOutline
              className={cn(
                `h-4 w-4 ${isBackArrowDisabled && 'text-dark-100'}`
              )}
            />
            <span className={'sr-only'}>goBack</span>
          </PageButton>
        </li>
        <PaginationRangeButtons
          currentPage={currentPage}
          onPageChange={onPageChange}
          paginationRange={paginationRange}
        />
        <li className={'flex align-middle'}>
          <PageButton
            disabled={isForwardArrowDisabled}
            onClick={onNext}
          >
            <ArrowIosForward
              className={cn(
                `h-4 w-4 ${isForwardArrowDisabled && 'text-dark-100'}`
              )}
            />
            <span className={'sr-only'}>goForward</span>
          </PageButton>
        </li>
      </ul>
      <CountToShow
        onPageSizeValue={onPageSizeValue}
        pageSize={pageSize}
      />
    </div>
  )
}
