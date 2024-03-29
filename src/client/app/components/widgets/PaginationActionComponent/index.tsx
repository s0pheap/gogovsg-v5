import React, { FunctionComponent } from 'react'
import { Grid, IconButton, createStyles, makeStyles } from '@material-ui/core'
import arrowLeftIcon from '@assets/widgets/app/arrow-left-icon.svg'
import arrowRightIcon from '@assets/widgets/app/arrow-right-icon.svg'

const useStyles = makeStyles(() =>
  createStyles({
    pageSelectGrid: {
      fontWeight: 500,
      color: '#767676',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
    pageSelectGridDirectory: {
      fontWeight: 500,
      color: '#767676',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      zIndex: -1,
    },
    gridItemHorizontalPadding: {
      '&:first-child': {
        paddingRight: 34,
      },
      '&:last-child': {
        paddingLeft: 34,
      },
    },
  }),
)

type PaginationActionComponentProp = {
  pageCount: number
  onChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number,
  ) => void
  page: number
  disablePagination?: boolean
}

const PaginationActionComponent: FunctionComponent<PaginationActionComponentProp> =
  ({
    pageCount,
    onChangePage,
    page,
    disablePagination = false,
  }: PaginationActionComponentProp) => {
    const classes = useStyles()
    return (
      <Grid
        container
        item
        alignItems="center"
        className={
          disablePagination
            ? classes.pageSelectGridDirectory
            : classes.pageSelectGrid
        }
      >
        <Grid item className={classes.gridItemHorizontalPadding}>
          <IconButton
            onClick={(event) => onChangePage(event, page - 1)}
            disabled={page <= 0}
          >
            <img src={arrowLeftIcon} alt="Previous page" draggable={false} />
          </IconButton>
        </Grid>
        <Grid item className={classes.gridItemHorizontalPadding}>
          {`Page ${page + 1} of ${pageCount}`}
        </Grid>
        <Grid item className={classes.gridItemHorizontalPadding}>
          <IconButton
            onClick={(event) => onChangePage(event, page + 1)}
            disabled={pageCount <= page + 1}
          >
            <img src={arrowRightIcon} alt="Next page" draggable={false} />
          </IconButton>
        </Grid>
      </Grid>
    )
  }

export default PaginationActionComponent
